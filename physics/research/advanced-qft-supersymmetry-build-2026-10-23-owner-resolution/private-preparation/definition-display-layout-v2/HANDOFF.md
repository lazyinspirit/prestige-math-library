# Fixed Definition display-layout proposal

Frozen six-file boundary: `code-boundary.json`. New test is untracked and must be included with the five modified files; `scoped.patch` contains only tracked changes. The test bytes are separately authenticated by the boundary.

API: `originalPresentationChanges(before, after, undefined, undefined, {version:1, display:0})`. V2 authority entry field: `definition_display_layout: {version:1, display:0}`. `display` is the zero-based raw own-line single-line `$$P$$` candidate index in the old Definition. Only `kind: definition` qualifies. Exact key/version/integer validation rejects malformed, unknown and unused selectors. Existing third/fourth opt-ins/defaults/legacy are unchanged; legacy rejects this field.

Typed delta: id `Definition:display:0`, kind `definition-display-layout`, section `Definition`, exact before/after boundary bytes, selected index, payload SHA256, entire old/new Definition hashes and truthful actual AST types/UTF-16 ranges/root+paragraph ancestors. `scientific_review.statements` must be `display-layout-only`; ordinary `hypotheses: identical`, `new_premises:false`, `new_results:false`, exact per-delta hash/reason/reading_limits/evidence and actual consumer/main authentication remain required. This is a source-interface presentation review, not proof or source acceptance.

The entire new section must be exactly the one-span literal boundary transformation; payload/prose/punctuation/links/other whitespace cannot change. Well-definedness/Proof suffixes must remain byte-identical. Old span must be actual math or inlineMath with only root/paragraph ancestors; new exact span must be standalone root math. Canonical wiki overlaps, wholebody reference definitions and conservative unsafe TeX payloads reject. Existing `proof_support_parser_runtime` (76 packages/403 paths) is reused, emitted and live bound via authority.inputs exactly as in the preceding committed opt-in implementation. No diagram-flag waiver.

Actual source extraction: `actual-extraction.json`. It records compact-support pinned/current hashes and exact typed delta only, not main-finalization or science adoption. All85 previous extraction JSON outputs match committed af89 implementation and stored private85 changes (`old85-golden.json`); installed53 plus private32 preserved. Six-module focused suite:211/211 pass (`all-tests.log`). Syntax and scoped diff checks exit0. Initial fixture-only JavaScript replacement-string issues and two misleading plaintext quote/code examples are preserved in prior first/second logs, corrected before the successful final suite; production matching was not loosened.

Command:

```sh
node --test tools/physics-support/original-maintenance.test.mjs tools/physics-support/original-rendering-maintenance.test.mjs tools/physics-support/original-presentation-maintenance.test.mjs tools/physics-support/physics-imports-category-projection.test.mjs tools/physics-support/original-proof-support-consolidation.test.mjs tools/physics-support/original-definition-display-layout.test.mjs
```

No original/import/authority/native/source changes, commits, reload or acceptance by this preparation. Root owns review, commit, real authority and native execution. Earlier proof-support boundaries/audits and the failed7e9c display-layout boundary remain preserved.

## Confirmed style defect and bounded repair

The failed7e9c boundary incorrectly accepted identical payload `\mathchoice{A}{B}{C}{D}` despite actual installed KaTeX MathML choosing B in inline mode and A in display mode. Root original counterexample bytes remain unchanged in v1/root-style-probe.json, exact failed six postimages in v1/failed-7e9c-boundary/. V1 audit is historical, not current clearance.

The repaired opt-in checks the ENTIRE old/new Definition, including unchanged ambient formulas, for style-choice/conditional controls, macro definitions/indirection/expansion, token/register hooks and internal @ controls; prefixes if/new/renew/provide/declare and ^^ rewrites conservatively reject. This can reject harmless commands and is not a TeX semantic-equivalence engine. Existing payload comments/verbatim controls also reject. No renderer-driven equivalence permission was added. The whole-section literal transformation, truthful AST roles, wiki exclusion, suffix, selector, runtime and scientific/native source/consumer guards remain. Direct `mathchoice` is an actual configured mode difference; ambient-alias exclusions are conservative safeguards, not claims of configured app cross-block macro persistence.

New tests actually use installed KaTeX to assert B versus A before confirming rejection; direct mathpalette/conditional and unchanged ambient definition/indirection fixtures also reject. `root-style-replay.json` replays Root exact stored counterexample and preserves its old MathML. `actual-extraction.json` confirms exact current compact-support extraction still passes. Only Root can review/adopt real source versions and commit/reload.
