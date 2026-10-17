# Second/final code-quality successor

Cycle1 is preserved unchanged. This packet copies all its existing source/doc
preimages, workflow successor and documentation byte for byte. It changes one
module condition only: the native-outside-alert branch explicitly requires
both actual before and after kinds to equal `definition`. Cycle1 already
required before kind `definition` and after kind equal before kind; the new
explicit condition makes the requested branch contract directly visible.
The general same-kind guard for all primary targets remains unchanged.

The final cycle1 module already gathered actual reviewed HTTPS URLs from
`source_reading` and required every `review.source_urls` member to belong to
that set. That enforcement remains byte-identical, so the schema's URL claim
is supported. Honest local reading with familiar=true and URLs=[] still works.

`guarded-successor.json` is the complete final installation packet and retains
the same original workflow/document preimage bytes/guards. Its new module must
still be absent canonically before installation. The one added module predicate
is shown in `module-cycle1-to-cycle2.diff`; all other code and documentation are
unchanged from the already reviewed final cycle1 bytes. `schema.md` is copied
unchanged for receipt construction.

No canonical/native/source/runtime changes, hashes, tests, validators, native
commands, installation or reload were performed. Python only copied research
proposal files and generated the one-literal successor. Root owns installation,
actual review/evidence/receipt creation and every native check.
