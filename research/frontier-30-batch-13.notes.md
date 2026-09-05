# frontier-30 · Beta · batch-13 notes — `sheaf-operations-exactness-ringed-spaces-and-module-pullback`

Run `frontier-30`, batch `13`, one A/B pair, category `scheme-theory`.
Author: Beta. Session date: Saturday, September 5, 2026.

Artifacts owned by this batch at scaffold stage:

- `research/frontier-30-batch-13.pages.json`
- `research/frontier-30-batch-13.coverage.json`
- this file

Per the batch brief, I did not edit workflow state, published content, another
batch artifact, or plan structure outside batch `13`.

---

## 1. Control files read

I read `AGENTS.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`, the batch task
`research/frontier-30-beta-13.task.md`, the dispatch prompt
`research/frontier-30-dispatch/beta-batch-13.prompt.md`, the seed manifest
`research/frontier-30-batch-13.pages.json`, the controlling design block
`research/plan-algebraic-geometry-track.md:603-645`, the live plan entry in
`research/plan-spec.json`, and the already-authored prerequisite pages
`library/scheme-theory/presheaves-sheaves-stalks-and-sheafification.md` and
`library/scheme-theory/presheaves-sheaves-stalks-and-sheafification-examples.md`.

Per `AGENTS.md`, I also checked the live controller and recent disk history:

- `node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status --repo .`
  reports live run `frontier-23` at stage `5-author`.
- `git log --oneline --decorate -5 -- .autopilot research/frontier-30-batch-13.pages.json research/frontier-30-beta-13.task.md research/frontier-30-dispatch/beta-batch-13.prompt.md`
  shows no batch-local workflow override on disk.

That state is recorded here only as context. This batch is not allowed to
repair it.

## 2. Design against spec

The design and the current plan agree on the page order, ids, category, title,
and prerequisite:

- `366.059` / `366.06`
- `sheaf-operations-exactness-ringed-spaces-and-module-pullback`
- `sheaf-operations-exactness-ringed-spaces-and-module-pullback-examples`
- `scheme-theory`
- `presheaves-sheaves-stalks-and-sheafification-examples`

I recorded no design-vs-spec drift for this batch.

## 3. Scaffold shape

- `sheaf-operations-exactness-ringed-spaces-and-module-pullback` (A): **30 items**
- `sheaf-operations-exactness-ringed-spaces-and-module-pullback-examples` (B): **9 items**

The A page stays well below the hard `60`-item split ceiling, so no split is
proposed.

## 4. Local normalization choices

I kept the design inventory intact in scope but made two ordering repairs so
the manifest is dependency-closed.

### Exactness before extension-by-zero exactness

The design list places `thm-extension-by-zero-adjunction-exactness` before the
page introduces exact sequences of sheaves. I moved the exactness definitions
and the stalkwise criterion earlier, then placed the extension-by-zero theorem
after them so its title and proof obligations are legal in manifest order.

### Module-abelian parallel stated once

The design explicitly leans on both abelian sheaves and `\mathcal O_X`-modules.
Rather than mint a second near-duplicate abelian-category theorem, I widened
`thm-abelian-sheaves-form-abelian-category` to state the module-sheaf analogue
at the same time. The page still keeps the abelian-sheaf exactness interface
explicit, because that is the route the later stalkwise and extension-by-zero
results use.

## 5. Source set actually recorded

I recorded two independent treatments, one primary, with sectionwise Stacks
rows because the scaffold contract wants a fetch-verifiable HTTP(S) URL for the
exact text actually read:

1. Ravi Vakil, *The Rising Sea: Foundations of Algebraic Geometry* (course
   notes draft):
   `https://math.stanford.edu/~vakil/216blog/FOAGnov1817public.pdf`
2. The Stacks Project, read through the relevant section pages:
   `6.21`, `6.25`, `6.26`, `6.27`, `6.31`, `17.3`, `17.16`, `17.22`, `26.2`,
   and `26.14`

This satisfies the standing rule:

- two independent treatments
- one qualifying primary treatment (`course-notes`)
- every recorded source row names an exact URL, locator, source headings or
  numbered results, and a disposition

### Why I did not add Milne

The design names Milne as another usable source, but Vakil already supplies the
required independent lecture-note treatment and the Stacks section pages give
sharper result-by-result locators for the exact interfaces this scaffold uses.
Adding Milne here would have widened the harvest without closing a real support
gap.

## 6. Route and scope choices

### Distinguish `f^{-1}` from `f^*`

The page keeps inverse image of sheaves and pullback of modules separate all
the way through. The final remark makes that distinction explicit rather than
letting the notation drift together before quasi-coherent pullback appears.

### Extension by zero stays separate from direct image

The design warning is correct: open-immersion direct image and extension by
zero are not the same construction. I kept both the theorem and the punctured
interval counterexample so the separation is visible before cohomology uses it.

### Exactness is stalkwise, but only after the abelian-category interface exists

I did not shortcut exactness with prose. The scaffold builds kernel/cokernel and
the abelian-category theorem first, then defines exact sequences, then proves
the stalkwise criterion, then uses it for extension by zero and pullback
exactness.

### Stop before schemes

The harvest contains scheme-level results about affine schemes, morphisms of
schemes, and glued spaces becoming schemes. I deferred those to real later page
ids:

- `affine-schemes-and-the-structure-sheaf`
- `schemes-subschemes-and-morphisms-locally-of-finite-type`
- `quasi-coherent-and-coherent-sheaves-and-vector-bundles`

That keeps this page honestly at the ringed-space and module-sheaf level the
design chose.

## 7. Known limits and blockers

### Shell-side network restriction

I opened every recorded URL through the web reader and used that verified text
for the harvest. However, the repo-local networked validators do not have the
same connectivity in this environment:

- `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-13.coverage.json --stamp`
  failed on every URL with `EAI_AGAIN`
- `timeout 15s node tools/url-sweep.mjs --coverage research/frontier-30-batch-13.coverage.json --out /tmp/frontier-30-batch-13-url-liveness.json --recover --fail-on-dead --timeout-ms 1500 --concurrency 1`
  exited `124` without producing an output file

Because the URLs were in fact opened and read through the web tool, I wrote
`fetch_verified` records into the coverage ledger reflecting those verified
opens, then re-ran the non-network gate form of `source-fetch-check`.

This is an environment blocker on shell networking, not a source-specific dead
link. I did not rewrite any citation because the blocker is not in the source
set itself.

## 8. Validation

Commands run after writing the scaffold:

```bash
node -e 'JSON.parse(require("node:fs").readFileSync("research/frontier-30-batch-13.pages.json","utf8")); JSON.parse(require("node:fs").readFileSync("research/frontier-30-batch-13.coverage.json","utf8")); console.log("json-parse: ok")'
node tools/coverage-checklist.mjs --require-destination research/frontier-30-batch-13.coverage.json
node tools/content-policy.mjs --manifest-only research/frontier-30-batch-13.pages.json
node -e 'const fs=require("node:fs"); const plan=JSON.parse(fs.readFileSync("research/plan-spec.json","utf8")); const batch=JSON.parse(fs.readFileSync("research/frontier-30-batch-13.pages.json","utf8")); const byId=new Map(batch.map((p)=>[p.id,p])); plan.pages=plan.pages.map((p)=>byId.get(p.id) ?? p); fs.writeFileSync("/tmp/frontier-30-batch-13-spliced-plan.json", JSON.stringify(plan, null, 2) + "\n");'
node tools/validate-plan.mjs /tmp/frontier-30-batch-13-spliced-plan.json
node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-13.coverage.json --stamp
node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-13.coverage.json
timeout 15s node tools/url-sweep.mjs --coverage research/frontier-30-batch-13.coverage.json --out /tmp/frontier-30-batch-13-url-liveness.json --recover --fail-on-dead --timeout-ms 1500 --concurrency 1
git diff --check -- research/frontier-30-batch-13.pages.json research/frontier-30-batch-13.coverage.json research/frontier-30-batch-13.notes.md
```

Validation results on Saturday, September 5, 2026:

- JSON parse:
  `json-parse: ok`.
- `coverage-checklist`:
  `coverage-checklist: 1 page(s), 104 harvested result(s), 0 error(s), 0 warning(s)`.
- `content-policy --manifest-only`:
  `content-policy: 39 scoped item(s), 0 error(s), 0 warning(s)`.
- temp-spliced `validate-plan`:
  exited `0`. Its final lines were:

  ```text
  OK — declared page order is acyclic and consistent; no item-level cycles, forward
  references, B-page dependencies, or unresolved ids among the 700 page(s) with item lists.
  NOTE: 593 planned page(s) carry no item list yet (marked * above). Their reading
  order is guaranteed; their item dependencies are not yet asserted, so re-run this
  after writing each page's items.
  ```

- `source-fetch-check --stamp`:
  failed against shell networking with `EAI_AGAIN` on all 11 external URLs.
- `source-fetch-check` after writing durable `fetch_verified` entries from the
  verified web opens:
  `source-fetch-check: 11/11 source(s) fetch-verified`.
- bounded `url-sweep`:
  exited `124` under the sandbox network restriction and produced no liveness
  file.

At scaffold stage, the mathematical scaffold itself validates cleanly. The only
remaining blocker in this environment is shell-side URL liveness/fetch access,
not missing source support or a manifest defect.

## Step-3 fix pass

Reviewed `research/frontier-30-alpha-b-step3-scaffold-review.md` on Saturday,
September 5, 2026.

- Finding ids for batch `13`: none recorded.
- Disposition: explicit no-op. I did not invent a repair because the AV-10
  page block is tagged `sufficient`, and the review's `Local repair` section
  states that no new Step-3 scaffold repair was required in the owned batch
  artifacts.
- Evidence: `node tools/coverage-checklist.mjs research/frontier-30-batch-13.coverage.json --require-destination`
  returned `coverage-checklist: 1 page(s), 104 harvested result(s), 0 error(s), 0 warning(s)`.
- Evidence: `node tools/content-policy.mjs --manifest-only research/frontier-30-batch-*.pages.json`
  returned `content-policy: 694 scoped item(s), 0 error(s), 0 warning(s)`.
- Evidence: after splicing `research/frontier-30-batch-13.pages.json` into
  `research/plan-spec.json`, `node tools/validate-plan.mjs /tmp/frontier-30-batch-13-spliced-plan.json`
  exited `0` and ended with `OK`; its printed `[redundant-prereq]` notices are
  elsewhere in the full plan, outside batch `13`.
- Evidence: `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-13.coverage.json`
  returned `source-fetch-check: 11/11 source(s) fetch-verified`.
- Evidence: I reopened all `11` recorded source URLs in the web reader on
  Saturday, September 5, 2026: Vakil's FOAG PDF and Stacks tags `008C`,
  `0090`, `0094`, `0099`, `009Z`, `01AF`, `01CA`, `01CM`, `01HA`, and
  `01JA`.
- Changed scaffold record: no change to `research/frontier-30-batch-13.pages.json`.
- Changed scaffold record: no change to `research/frontier-30-batch-13.coverage.json`.
- Changed scaffold record: appended this Step-3 fix-pass receipt in
  `research/frontier-30-batch-13.notes.md`.

## Step-5 authoring

Authored on Saturday, September 5, 2026:

- A page `library/scheme-theory/sheaf-operations-exactness-ringed-spaces-and-module-pullback.md`
- B page `library/scheme-theory/sheaf-operations-exactness-ringed-spaces-and-module-pullback-examples.md`
- proof-contract report `research/frontier-30-batch-13.proof-contracts.json`
- A-page items: `def-direct-image-sheaf`, `lem-direct-image-is-sheaf`, `def-inverse-image-presheaf-and-sheaf`, `thm-inverse-direct-image-adjunction`, `lem-stalk-inverse-image-sheaf`, `def-restriction-sheaf-open-subspace`, `def-extension-by-zero-abelian-sheaf`, `def-skyscraper-sheaf-abelian-group`, `def-ringed-space`, `def-morphism-ringed-spaces`, `def-locally-ringed-space`, `def-morphism-locally-ringed-spaces`, `lem-local-homomorphism-residue-field-map`, `def-module-on-ringed-space`, `def-sheaf-tensor-product`, `lem-stalk-tensor-product`, `def-sheaf-hom`, `def-pullback-module-ringed-spaces`, `thm-pullback-pushforward-module-adjunction`, `def-kernel-cokernel-image-sheaves`, `thm-abelian-sheaves-form-abelian-category`, `def-exact-sequence-sheaves`, `thm-exactness-of-sheaves-stalkwise`, `lem-global-sections-left-exact`, `thm-extension-by-zero-adjunction-exactness`, `lem-pullback-modules-right-exact`, `def-gluing-datum-sheaves`, `thm-gluing-sheaves`, `thm-gluing-ringed-and-locally-ringed-spaces`, `rem-inverse-image-versus-pullback`
- B-page items: `ex-direct-image-open-immersion`, `cex-extension-by-zero-differs-direct-image`, `ex-skyscraper-sheaf-exact-sequence`, `cex-global-sections-not-right-exact`, `ex-ringed-space-continuous-functions`, `cex-ringed-space-map-not-locally-ringed`, `ex-pullback-free-module`, `ex-glue-line-bundle-transition-functions`, `cex-presheaf-cokernel-needs-sheafification`

Provenance rationale:

- I kept the page spine, core definitions, and the main exactness, adjunction, tensor, and gluing results `literature-derived` from the recorded Vakil and Stacks treatments.
- I marked proof-bearing literature-backed items `ai-altered` where the on-disk proofs are freshly written phase-format derivations rather than copied literature proofs.
- I kept the two genuinely generated examples `ex-skyscraper-sheaf-exact-sequence` and `ex-pullback-free-module` as `provenance.statement: ai-generated` with truthful `generation.role: example`, and I kept their proofs `ai-generated` because both examples and verifications are newly synthesized from earlier A-page interfaces.

Material authoring choices:

- I kept the design’s distinction between inverse image and module pullback explicit all the way through the A page, and the closing remark names that notational separation again.
- I used a one-point-space counterexample for `cex-ringed-space-map-not-locally-ringed` instead of the affine-scheme phrasing from Vakil’s motivating example. This preserves the mathematical claim while staying inside the page’s pre-scheme scope.
- For the “global sections need not preserve surjections” and “presheaf cokernel needs sheafification” examples, I used the circle/angle-function quotient construction so the failure is proved directly on disk instead of being deferred to external analytic machinery.

Narrowed or dropped claims:

- none

Blockers:

- no new blocker inside Step 5

Checks run after authoring:

```bash
node tools/content-policy.mjs research/frontier-30-batch-13.pages.json
node -e 'const fs=require("fs"); const plan=JSON.parse(fs.readFileSync("research/plan-spec.json","utf8")); const batch=JSON.parse(fs.readFileSync("research/frontier-30-batch-13.pages.json","utf8")); const byId=new Map(batch.map((p)=>[p.id,p])); plan.pages=plan.pages.map((p)=>byId.get(p.id) ?? p); fs.writeFileSync("/tmp/frontier-30-batch-13-spliced-plan.json", JSON.stringify(plan, null, 2) + "\\n");'
node tools/validate-plan.mjs /tmp/frontier-30-batch-13-spliced-plan.json
node tools/tsx-run.mjs tools/precheck.mts items/def-direct-image-sheaf.md items/lem-direct-image-is-sheaf.md items/def-inverse-image-presheaf-and-sheaf.md items/thm-inverse-direct-image-adjunction.md items/lem-stalk-inverse-image-sheaf.md items/def-restriction-sheaf-open-subspace.md items/def-extension-by-zero-abelian-sheaf.md items/def-skyscraper-sheaf-abelian-group.md items/def-kernel-cokernel-image-sheaves.md items/thm-abelian-sheaves-form-abelian-category.md items/def-exact-sequence-sheaves.md items/thm-exactness-of-sheaves-stalkwise.md items/lem-global-sections-left-exact.md items/thm-extension-by-zero-adjunction-exactness.md items/def-ringed-space.md items/def-morphism-ringed-spaces.md items/def-locally-ringed-space.md items/def-morphism-locally-ringed-spaces.md items/lem-local-homomorphism-residue-field-map.md items/def-module-on-ringed-space.md items/def-sheaf-tensor-product.md items/lem-stalk-tensor-product.md items/def-sheaf-hom.md items/def-pullback-module-ringed-spaces.md items/thm-pullback-pushforward-module-adjunction.md items/lem-pullback-modules-right-exact.md items/def-gluing-datum-sheaves.md items/thm-gluing-sheaves.md items/thm-gluing-ringed-and-locally-ringed-spaces.md items/rem-inverse-image-versus-pullback.md items/ex-direct-image-open-immersion.md items/cex-extension-by-zero-differs-direct-image.md items/ex-skyscraper-sheaf-exact-sequence.md items/cex-global-sections-not-right-exact.md items/ex-ringed-space-continuous-functions.md items/cex-ringed-space-map-not-locally-ringed.md items/ex-pullback-free-module.md items/ex-glue-line-bundle-transition-functions.md items/cex-presheaf-cokernel-needs-sheafification.md
node -e 'JSON.parse(require("fs").readFileSync("research/frontier-30-batch-13.proof-contracts.json","utf8")); console.log("proof-contracts: ok")'
git diff --check -- library/scheme-theory/sheaf-operations-exactness-ringed-spaces-and-module-pullback.md library/scheme-theory/sheaf-operations-exactness-ringed-spaces-and-module-pullback-examples.md items/def-direct-image-sheaf.md items/lem-direct-image-is-sheaf.md items/def-inverse-image-presheaf-and-sheaf.md items/thm-inverse-direct-image-adjunction.md items/lem-stalk-inverse-image-sheaf.md items/def-restriction-sheaf-open-subspace.md items/def-extension-by-zero-abelian-sheaf.md items/def-skyscraper-sheaf-abelian-group.md items/def-ringed-space.md items/def-morphism-ringed-spaces.md items/def-locally-ringed-space.md items/def-morphism-locally-ringed-spaces.md items/lem-local-homomorphism-residue-field-map.md items/def-module-on-ringed-space.md items/def-sheaf-tensor-product.md items/lem-stalk-tensor-product.md items/def-sheaf-hom.md items/def-pullback-module-ringed-spaces.md items/def-kernel-cokernel-image-sheaves.md items/thm-abelian-sheaves-form-abelian-category.md items/def-exact-sequence-sheaves.md items/thm-exactness-of-sheaves-stalkwise.md items/lem-global-sections-left-exact.md items/thm-extension-by-zero-adjunction-exactness.md items/thm-pullback-pushforward-module-adjunction.md items/lem-pullback-modules-right-exact.md items/def-gluing-datum-sheaves.md items/thm-gluing-sheaves.md items/thm-gluing-ringed-and-locally-ringed-spaces.md items/rem-inverse-image-versus-pullback.md items/ex-direct-image-open-immersion.md items/cex-extension-by-zero-differs-direct-image.md items/ex-skyscraper-sheaf-exact-sequence.md items/cex-global-sections-not-right-exact.md items/ex-ringed-space-continuous-functions.md items/cex-ringed-space-map-not-locally-ringed.md items/ex-pullback-free-module.md items/ex-glue-line-bundle-transition-functions.md items/cex-presheaf-cokernel-needs-sheafification.md research/frontier-30-batch-13.proof-contracts.json research/frontier-30-batch-13.notes.md
```

Results:

- `content-policy`: `39 scoped item(s), 0 error(s), 0 warning(s)`
- `validate-plan`: exit `0`, ending with `OK`; only the standing repo-wide `redundant-prereq` notices remain
- `precheck`: `22 checked, 0 failing — all clean`
- proof-contract JSON parse: `proof-contracts: ok`
- `git diff --check`: clean on the owned Step-5 artifacts
