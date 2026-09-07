# Contract for the seven symmetric-group research reports

Each assigned report must contain all fields below. A discovered source is not
counted until its complete text has been retrieved and validated.

## Agent record

- canonical agent/task name
- model: `gpt-5.6-terra`
- reasoning effort: `high`
- exact assignment
- start/completion state

## Full-text evidence for every counted source

- authors, exact title, edition/version, publisher/journal or institution, year
- source type (`textbook`, `lecture notes`, `article`, or `preprint`); short
  notes may not be relabelled as a textbook
- legitimate authoritative HTTP(S) URL (author, publisher, university,
  journal, or arXiv)
- absolute local cache path under
  `scratchpad/source-cache/symmetric-groups/`
- SHA-256 of the downloaded original
- PDF page count and a validation that the last substantive page/bibliography
  is present, or an equivalent complete-HTML body check
- whether text extraction/OCR succeeded and what was used to inspect it
- exact sections/pages actually read; separate these from sections merely
  found in a table of contents

If a desired book cannot be retrieved in full, record the attempted legitimate
locations and retrieve a different authoritative complete book. A preview,
abstract page, table of contents, or search snippet never counts.

## Mathematical harvest

For each relevant heading/result actually inspected:

- exact source locator and the source's own heading/theorem number
- exact hypotheses (field, characteristic, rank, parameter, partition
  regularity, finiteness, grading, or completion)
- conclusion in source-faithful notation
- proof architecture and intermediate lemmas exposed by the source
- a concrete worked example or boundary/counterexample where available
- likely scaffold disposition: proposed item role, inline proof ingredient,
  inherited existing owner, deferred supplier, or out of scope
- agreement or disagreement with another treatment, including convention
  translations

Flag results that are stated but not proved. Flag conjectures/open problems and
never promote them to theorem status. In particular, do not imply a general
positive combinatorial Kronecker rule or a solved general modular decomposition
problem.

## Closing audit

- number of complete sources retrieved
- number actually read in relevant ranges
- retrieval failures and replacements
- substantive proof or prerequisite gaps
- source recommendations for independent proof checks

