# Exact Definition display-layout proposal

Frozen six-file boundary: `code-boundary.json`. New test is untracked and must be included with the five modified files; `scoped.patch` contains only tracked changes. The test bytes are separately authenticated by the boundary.

API: `originalPresentationChanges(before, after, undefined, undefined, {version:1, display:0})`. V2 authority entry field: `definition_display_layout: {version:1, display:0}`. `display` is the zero-based raw own-line single-line `$$P$$` candidate index in the old Definition. Only `kind: definition` qualifies. Exact key/version/integer validation rejects malformed, unknown and unused selectors. Existing third/fourth opt-ins/defaults/legacy are unchanged; legacy rejects this field.

Typed delta: id `Definition:display:0`, kind `definition-display-layout`, section `Definition`, exact before/after boundary bytes, selected index, payload SHA256, entire old/new Definition hashes and truthful actual AST types/UTF-16 ranges/root+paragraph ancestors. `scientific_review.statements` must be `display-layout-only`; ordinary `hypotheses: identical`, `new_premises:false`, `new_results:false`, exact per-delta hash/reason/reading_limits/evidence and actual consumer/main authentication remain required. This is a source-interface presentation review, not proof or source acceptance.

The entire new section must be exactly the one-span literal boundary transformation; payload/prose/punctuation/links/other whitespace cannot change. Well-definedness/Proof suffixes must remain byte-identical. Old span must be actual math or inlineMath with only root/paragraph ancestors; new exact span must be standalone root math. Canonical wiki overlaps, wholebody reference definitions and conservative unsafe TeX payloads reject. Existing `proof_support_parser_runtime` (76 packages/403 paths) is reused, emitted and live bound via authority.inputs exactly as in the preceding committed opt-in implementation. No diagram-flag waiver.

Actual source extraction: `actual-extraction.json`. It records compact-support pinned/current hashes and exact typed delta only, not main-finalization or science adoption. All85 previous extraction JSON outputs match committed af89 implementation and stored private85 changes (`old85-golden.json`); installed53 plus private32 preserved. Six-module focused suite:196/196 pass (`all-tests.log`). Syntax and scoped diff checks exit0. Initial fixture-only JavaScript replacement-string issues and two misleading plaintext quote/code examples are preserved in prior first/second logs, corrected before the successful final suite; production matching was not loosened.

Command:

```sh
node --test tools/physics-support/original-maintenance.test.mjs tools/physics-support/original-rendering-maintenance.test.mjs tools/physics-support/original-presentation-maintenance.test.mjs tools/physics-support/physics-imports-category-projection.test.mjs tools/physics-support/original-proof-support-consolidation.test.mjs tools/physics-support/original-definition-display-layout.test.mjs
```

No original/import/authority/native/source changes, commits, reload or acceptance by this preparation. Root owns review, commit, real authority and native execution. Earlier proof-support boundaries/audits remain preserved.
