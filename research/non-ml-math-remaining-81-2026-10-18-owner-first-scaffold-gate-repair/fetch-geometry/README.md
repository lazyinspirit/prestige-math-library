# Batches 46/55 fetch evidence reconciliation

The two isolated `*.coverage.json` files repair all **23 assigned unstamped rows / 16 distinct URLs**. Only `fetch_verified` and `recovery_attempts` differ semantically from their preserved `*.coverage.json.before` preimages. No source URL, title, locator, harvest, disposition, claim, proof, page prerequisite, manifest, native history, readiness, runtime or previous page-prerequisite proposal was changed.

## Genuine original evidence

Batch46's sibling source-coverage and source-evidence files already retain genuine native fetch events for all nine rows/six URLs. Copy each exact page+URL stamp and original attempt history. Each stamp's date is preserved. Its body hash, byte count and page count match an actual retained PDF. The A and B stamps retain their distinct original native event dates; they are not replaced by a fabricated shared event.

Batch55's sibling files retain original fetch stamps for eight distinct URLs. These supply twelve rows, including four B-page occurrences of the exact same URLs. The B rows explicitly reuse the corresponding genuine A-page fetch event; they do not assert a new B-page network execution. The original stamp dates and all recorded recovery attempts are preserved. A legacy stamped source with no attempt array is not assigned an invented attempt. The Hennecart failed/excluded-source history remains unchanged in the original source-evidence file, hash-bound by `evidence-bindings.json`; its failures were not erased or transferred to another URL.

`retained-body-matches.json` locates the exact original PDF bodies where retained. For the Stacks Project and Soibelman sources, fresh successful GETs retained identity bodies under `identity-bodies/`; their full SHA-256 hashes, byte counts and page counts match the genuine original stamps exactly. `identity-body-retrievals.json` records those actual GET dates and the Soibelman same-document redirect. These identity fetches do not create new stamps or replace original dates.

## Actual new native stamps

The two owner-added Massey sources had real retained full-text reading records and PDFs, but no fetch stamp. Actual native `source-fetch-check.mjs --stamp --timeout-sec 30` was run against only the isolated batch55 copy. It skipped all existing genuine stamps and fetched/stamped exactly:

- `https://arxiv.org/pdf/math/9908101`: 133581 bytes, 8 pages, SHA-256 prefix `9f0dce6c168cad5a`.
- `https://arxiv.org/pdf/0908.2799`: 106915 bytes, 6 pages, SHA-256 prefix `af3ede06ce4eab7c`.

Both actual response hashes exactly match the retained owner source-reading PDFs and full hashes in the owner's genuine `critical/source-reading.json`. Each gets its actual native timestamp and one successful recovery-attempt entry; no recovery allowance was reset. `native-stamp-55.log` records 14/14 verified, two newly stamped.

## Document identity and limits

`document-identity-extracts.json` binds all sixteen actual PDFs by full SHA-256, bytes and page count, with opening-page text. Those titles/authors match the cited sources: Eschenburg–Hanke, ABS, Atiyah/Anderson, Karoubi, Kitaev, Milnor–Stasheff; Kontsevich–Soibelman, Joyce, Stacks Algebraic Stacks, Milne Algebraic Groups, Davison, Yang–Zhao, Nakajima, Soibelman, and the two Massey papers. Joyce's notes are scanned handwriting: its first page was rendered and visually inspected, explicitly reading “Cohomological Hall algebras, Week 2”; the image is retained. Its exact body hash agrees with the original native stamp and author-attributed Joyce URL. This identity inspection is not a new mathematical full-text reading claim.

All 23 row stamps were independently compared to those actual retained/identity body hashes, byte counts and PDF page counts; all match. `reconciliation-provenance.json` records each row's exact evidence file/hash, original evidence page/event, method, original/new stamp, preserved attempts and identity-body binding. `proposal-deltas.json` binds before/proposal bytes and restricts changed fields.

A focused stamp-presence check of only these two isolated proposals reports **23/23 verified and resolved**, with zero documented drops; actual output is `focused-stamp-presence-check.log`. No production battery was run. No unavailable full text or wrong-document identity remains among these sixteen scoped URLs. Existing source reading, mathematical acceptance, exclusions and all original histories retain their original attribution. Root alone integrates canonical changes and rebinds current workflow inputs.
