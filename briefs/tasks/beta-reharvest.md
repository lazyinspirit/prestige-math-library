> The dispatch block supplies batch `<i>`.

# Reharvest — batch `<i>`, `{{run}}`

Read `research/{{run}}-reharvest-plan.json` and use its `work[]` rows belonging
to this batch. Confirm that the named source has no usable same-document URL or
complete archive before choosing a different treatment.

For each orphaned result, replace only the batch coverage and notes with a
source that actually carries the result, its verified locator, and its own
faithful contents rows. Preserve original URL provenance. If no replacement is
found, record the search and leave the result in scope for later adjudication.

Run source-backing, destination-required coverage, URL recovery/liveness, and
fetch stamping for the batch. Append the dead source, replacement/search,
affected result, and any changed claim constraint to the batch notes.
