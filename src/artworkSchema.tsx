import { z } from "zod";

const ThumbnailSchema = z.object({
  lqip: z.string(),
  width: z.number(),
  height: z.number(),
  alt_text: z.string(),
});

const DimensionsDetailSchema = z.object({
  depth: z.number().nullable(),
  width: z.number(),
  height: z.number(),
  diameter: z.number().nullable(),
  clarification: z.string().nullable(),
});

const ColorSchema = z.object({
  h: z.number(),
  l: z.number(),
  s: z.number(),
  percentage: z.number(),
  population: z.number(),
});

const AutocompleteContextSchema = z.object({
  groupings: z.array(z.string()),
});

const AutocompleteEntrySchema = z.object({
  input: z.array(z.string()),
  weight: z.number().optional(),
  contexts: AutocompleteContextSchema,
});

const DataSchema = z.object({
  id: z.number(),
  api_model: z.string(),
  api_link: z.string(),
  is_boosted: z.boolean(),
  title: z.string(),
  alt_titles: z.string().nullable(),
  thumbnail: ThumbnailSchema,
  main_reference_number: z.string(),
  has_not_been_viewed_much: z.boolean(),
  boost_rank: z.number(),
  date_start: z.number(),
  date_end: z.number(),
  date_display: z.string(),
  date_qualifier_title: z.string(),
  date_qualifier_id: z.number().nullable(),
  artist_display: z.string(),
  place_of_origin: z.string(),
  description: z.string(),
  short_description: z.string(),
  dimensions: z.string(),
  dimensions_detail: z.array(DimensionsDetailSchema),
  medium_display: z.string(),
  inscriptions: z.string().nullable(),
  credit_line: z.string(),
  catalogue_display: z.string().nullable(),
  publication_history: z.string(),
  exhibition_history: z.string(),
  provenance_text: z.string(),
  edition: z.string().nullable(),
  publishing_verification_level: z.string(),
  internal_department_id: z.number(),
  fiscal_year: z.number(),
  fiscal_year_deaccession: z.number().nullable(),
  is_public_domain: z.boolean(),
  is_zoomable: z.boolean(),
  max_zoom_window_size: z.number(),
  copyright_notice: z.string(),
  has_multimedia_resources: z.boolean(),
  has_educational_resources: z.boolean(),
  has_advanced_imaging: z.boolean(),
  colorfulness: z.number(),
  color: ColorSchema,
  latitude: z.number(),
  longitude: z.number(),
  latlon: z.string(),
  is_on_view: z.boolean(),
  on_loan_display: z.string().nullable(),
  gallery_title: z.string().nullable(),
  gallery_id: z.string().nullable(),
  nomisma_id: z.string().nullable(),
  artwork_type_title: z.string(),
  artwork_type_id: z.number(),
  department_title: z.string(),
  department_id: z.string(),
  artist_id: z.number(),
  artist_title: z.string(),
  alt_artist_ids: z.array(z.number()),
  artist_ids: z.array(z.number()),
  artist_titles: z.array(z.string()),
  category_ids: z.array(z.string()),
  category_titles: z.array(z.string()),
  term_titles: z.array(z.string()),
  style_id: z.string(),
  style_title: z.string(),
  alt_style_ids: z.array(z.string()),
  style_ids: z.array(z.string()),
  style_titles: z.array(z.string()),
  classification_id: z.string(),
  classification_title: z.string(),
  alt_classification_ids: z.array(z.string()),
  classification_ids: z.array(z.string()),
  classification_titles: z.array(z.string()),
  subject_id: z.string(),
  alt_subject_ids: z.array(z.string()),
  subject_ids: z.array(z.string()),
  subject_titles: z.array(z.string()),
  material_id: z.string(),
  alt_material_ids: z.array(z.string()),
  material_ids: z.array(z.string()),
  material_titles: z.array(z.string()),
  technique_id: z.string(),
  alt_technique_ids: z.array(z.string()),
  technique_ids: z.array(z.string()),
  technique_titles: z.array(z.string()),
  theme_titles: z.array(z.string()),
  image_id: z.string(),
  alt_image_ids: z.array(z.string()),
  document_ids: z.array(z.unknown()),
  sound_ids: z.array(z.unknown()),
  video_ids: z.array(z.unknown()),
  text_ids: z.array(z.unknown()),
  section_ids: z.array(z.unknown()),
  section_titles: z.array(z.unknown()),
  site_ids: z.array(z.unknown()),
  suggest_autocomplete_boosted: z.string(),
  suggest_autocomplete_all: z.array(AutocompleteEntrySchema),
  source_updated_at: z.string(),
  updated_at: z.string(),
  timestamp: z.string(),
});

const InfoSchema = z.object({
  license_text: z.string(),
  license_links: z.array(z.string()),
  version: z.string(),
});

const ConfigSchema = z.object({
  iiif_url: z.string(),
  website_url: z.string(),
});

export const ArtworkResponseSchema = z.object({
  data: DataSchema,
  info: InfoSchema,
  config: ConfigSchema,
});

// Export TypeScript type
export type ArtworkResponse = z.infer<typeof ArtworkResponseSchema>;
