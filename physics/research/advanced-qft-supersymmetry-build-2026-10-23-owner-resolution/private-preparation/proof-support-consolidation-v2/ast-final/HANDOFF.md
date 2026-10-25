# Round 2 final AST/runtime and reference-relocation handoff

Frozen boundary: `code-boundary.json`, SHA256 `a347aa7be75ca408020438c90ca04ca0c40217c33591ef1381489aacc14ba5df`. Its six code/test/document hashes are final. `scoped-final.patch` is relative to committed V1 code. Earlier V1 and failed lexical V2 boundaries/evidence remain unchanged.

Actual checks: five-module Node suite 157 passed, zero failed (`all-tests-final.log`); all 53 installed legacy/default extraction JSON outputs byte-identical to the committed preimage extractor AND installed changes (`old53-golden-final.json`). Actual difference and collar extraction plus unchanged historical HTML/link-title counterexamples are recorded in `actual-cases-final.json`. These are technical extraction facts, not source adoption or mathematical acceptance.

API stays synchronous and backward compatible:

```js
originalPresentationChanges(beforeBytes, afterBytes,
  {version: 1, steps: ['1.2', '2.2']}, // optional support consolidation
  undefined);
originalPresentationChanges(beforeBytes, afterBytes, undefined,
  {version: 1, steps: [{label: '1.1', target: 'thm-euclidean-inverse-function-theorem'}]});
```

Authority entries use `presentation_version: 2` plus the corresponding `proof_support_consolidation` or `proof_reference_relocation` object. Unknown, duplicate, unused, malformed, overlapping options fail. Exact extracted per-delta source bytes/hash, scientific reasons/reading limits/evidence and existing consumer/main-finalization review remain required. Relocation targets must be predeclared dependencies and pass existing published pin/target evidence guards. No option is valid on legacy entries.

Strict changed-step Markdown uses the actual synchronous unified/remark-parse/remark-gfm/remark-math pipeline, with a conservative node allowlist and exact source offsets. Hidden HTML/link/title/code contexts reject. Canonical wiki, math and inline-code spans remain byte protected. Old single-line `$$` is truthfully recorded as AST inlineMath with standalone-double-dollar role only when the paragraph contains that exact sole child; new `$` must be an exact inlineMath span. Whole-source reference definitions reject when strict options are requested.

The opt-in descriptor `changes.proof_support_parser_runtime` records exact resolved roots, package identities, runtime context and canonical `inputs` map. Current runtime: unified11.0.5, remark-parse11.0.0, remark-gfm4.0.1, remark-math6.0.0; 76 declared-dependency packages, 403 bound files including web package/lock and Node executable. This is a conservative declared runtime closure, not an execution trace. Validator requires every descriptor input in authority.inputs via the existing live `bind(path,hash)` mechanism. Existing native certificate-evidence recursion binds the inputs map. Do not merely store an unconsumed audit digest.

Lazy parser initialization fingerprints before/after loading; reuse and every parse verify the original runtime/context again. Cached descriptors are cloned; changed dependencies/context require process restart, never restamping loaded code against new disk bytes. Tests mutate only temporary shadow package/lock contexts, not actual shared packages.

The absence-of-diagram-flags exception applies only to pure support-consolidation deltas with both native keys absent, mathematical_meaning_preserved true and conservative graphics-free source. Partial/null/contradictory flags reject. Generic/mixed deltas, relocation, actual/unchanged Remarks, fences/images/HTML/TikZ retain the existing diagram requirements. Existing valid native flag pairs retain their behavior.

Focused regression command (physics cwd):

```sh
node --test tools/physics-support/original-maintenance.test.mjs tools/physics-support/original-rendering-maintenance.test.mjs tools/physics-support/original-presentation-maintenance.test.mjs tools/physics-support/physics-imports-category-projection.test.mjs tools/physics-support/original-proof-support-consolidation.test.mjs
```

No sources, pins, production authority, native states/results/requests/receipts were written. No commit/reload/acceptance performed. Root owns scientific review, source adoption, authority generation, commit and native retry. Super owns independent audit of this frozen boundary.
