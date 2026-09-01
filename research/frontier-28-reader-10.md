# frontier-28 reader-10 report

Date: 2026-09-01
Run: `frontier-28`
Batch: `10`
Role: independent Step-6 reader

## Opened scope

- Task and batch artifacts: `research/frontier-28-reader.task.md`,
  `research/frontier-28-dispatch/reader-reader-10.prompt.md`,
  `research/frontier-28-batch-10.pages.json`,
  `research/frontier-28-batch-10.coverage.json`,
  `research/frontier-28-batch-10.notes.md`, and
  `research/frontier-28-batch-10.proof-contracts.json`.
- Design and plan context: the DG-7 design block at
  `research/plan-differential-geometry-track.md:1846-2145`, plus the current
  autopilot status command from `tools/autopilot`.
- Page files: `library/differential-geometry/whitney-embedding-tubular-neighbourhoods-and-approximation.md`
  and
  `library/differential-geometry/whitney-embedding-tubular-neighbourhoods-and-approximation-examples.md`.
- Assigned item files: all 48 manifest-listed batch-10 items on those two
  pages.
- Dependency items opened directly while checking the active proofs and
  definitions: `cor-a-submersion-is-transverse-to-every-embedded-submanifold`,
  `cor-an-injective-immersion-from-a-compact-manifold-is-an-embedding`,
  `cor-every-immersion-is-locally-an-embedding`,
  `cor-every-smooth-manifold-admits-a-riemannian-metric`,
  `cor-smooth-partitions-subordinate-to-a-countable-coordinate-cover`,
  `def-euclidean-inner-product`,
  `def-homotopy-relative-and-path-homotopy`,
  `def-normal-and-conormal-bundles-of-an-embedded-submanifold`,
  `def-smooth-embedding`, `def-smooth-family-of-maps-and-evaluation-map`,
  `def-smooth-manifold`,
  `lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking`,
  `lem-chart-bump-at-a-point-with-prescribed-support`,
  `lem-every-open-cover-of-a-manifold-has-a-countable-cover-by-relatively-compact-coordinate-balls-subordinate-to-it`,
  `lem-smooth-extension-from-a-closed-neighbourhood`,
  `prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold`,
  `prop-a-vector-bundle-section-with-surjective-vertical-differential-at-every-zero-has-a-submanifold-zero-set`,
  `prop-an-ambient-riemannian-metric-identifies-the-normal-quotient-with-the-orthogonal-normal-bundle`,
  `prop-normal-and-conormal-bundles-are-smooth-vector-bundles`,
  `prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure`,
  `prop-smooth-maps-are-continuous`,
  `prop-the-image-of-a-lower-dimensional-c1-manifold-is-null`,
  `prop-the-zero-section-is-a-smooth-embedding`,
  `thm-every-smooth-manifold-admits-a-smooth-proper-exhaustion-function`,
  `thm-locally-compact-hausdorff-basics`, `thm-parametric-transversality`,
  `thm-smooth-inverse-function-theorem-on-manifolds`,
  `thm-smooth-partitions-of-unity-exist-on-manifolds`,
  `thm-smooth-urysohn-lemma-for-a-closed-set-in-an-open-set`, and
  `thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure`.

## Edits made

1. `items/lem-a-countable-coordinate-bump-map-embeds-a-manifold-in-countable-euclidean-data.md`:
   removed the ill-typed claim that the batch had produced an actual smooth
   immersion into a countable product of Euclidean spaces. The item now states
   the bookkeeping claim the page really uses: the countable family of
   coordinate-bump blocks separates points and tangent vectors.

2. `items/thm-relative-whitney-approximation-for-euclidean-valued-maps.md`:
   added the missing Urysohn dependency and made the componentwise extension
   and cutoff argument explicit.

3. `items/lem-a-fine-euclidean-approximation-lands-in-a-prescribed-tubular-neighbourhood.md`
   and `items/thm-whitney-approximation-for-manifold-valued-maps.md`: repaired
   the straight-line homotopy gap by switching to the distance-to-complement
   error function, so the entire Euclidean segment stays inside the chosen open
   tubular neighbourhood.

4. Renderability repairs only:
   `items/def-secant-and-tangent-direction-maps-of-an-euclidean-embedding.md`,
   `items/thm-euclidean-tubular-neighbourhood-theorem.md`, and
   `items/fs-every-injective-immersion-is-a-proper-embedding.md` had multiline
   `$$ ... $$` blocks that violated the renderer contract. I rewrote those
   displays onto single source lines.

5. Contract maintenance:
   regenerated `research/frontier-28-batch-10.proof-contracts.json` after the
   substantive item edits and the statement/definition wording changes they
   affected.

## Confirmed remaining defects

1. `lem-variable-radius-injectivity-for-normal-addition` is still fatally
   incomplete at step 4.1. At
   `items/lem-variable-radius-injectivity-for-normal-addition.md:52-58`, the
   proof concludes global injectivity from local branch inverses, but the
   argument never rules out a second preimage lying outside the chosen branch.
   Saying that the image "meets the zero section only over `U_i`" does not make
   `E^{-1}(E(W_i))=W_i`, which is what the conclusion needs.

2. `thm-euclidean-tubular-neighbourhood-theorem` remains fatally defective at
   `items/thm-euclidean-tubular-neighbourhood-theorem.md:51-55`. Step 2.1
   promotes "local diffeomorphism along the zero section" to "local
   diffeomorphism at every point of `\Omega_\delta`" merely because the domain
   was shrunk. That inference is false; invertibility at the zero section does
   not automatically persist on the whole variable-radius neighbourhood.

3. `lem-a-tubular-target-produces-a-submersive-finite-dimensional-perturbation-family`
   is ill-formed in both statement and proof. At
   `items/lem-a-tubular-target-produces-a-submersive-finite-dimensional-perturbation-family.md:28-36`
   and `:55-59`, it calls `\mathcal F:K\times B\to N` a smooth family and
   speaks about a submersion along `K\times\{0\}`, but `K` is only a compact
   subset, not a smooth manifold. The cited definition of smooth families
   requires a manifold product domain.

4. `thm-transversality-homotopy-theorem` inherits and amplifies that defect. At
   `items/thm-transversality-homotopy-theorem.md:53-57`, it again uses
   `K_r\times B_r` as the domain of smooth families, and step 2.1 asserts
   stagewise agreement on neighbourhoods of `K_{r-1}` without actually
   constructing the required supported perturbation families or the overlap
   patching data.

5. `cor-a-smooth-section-can-be-perturbed-transverse-to-the-zero-section` has
   a fatal openness error at
   `items/cor-a-smooth-section-can-be-perturbed-transverse-to-the-zero-section.md:49-51`.
   A small neighbourhood of a section inside the space of all smooth maps
   `M\to E` does not consist of sections: the condition `\pi\circ s=\mathrm{id}`
   is closed, not open. So `thm-strong-whitney-approximation-by-transverse-maps`
   does not justify the sentence "it is again a section."

## Checks run

- `node tools/proof-contract.mjs research/frontier-28-batch-10.proof-contracts.json --strict`
  after regeneration: pass, `48/48`.
- `node tools/citation-fidelity.mjs research/frontier-28-batch-10.proof-contracts.json --fail-on-missing-quote`:
  pass, `93` citations, no quote misses and no widening candidates.
- `node tools/content-policy.mjs research/frontier-28-batch-10.pages.json`:
  pass, `54 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/rendercheck.mjs` over both page files and all 54 batch-10 item
  files: pass after the display-math repairs.
- `node tools/tsx-run.mjs tools/reflow.mts ...` on every changed item.
- `node tools/tsx-run.mjs tools/precheck.mts ...` on every changed proof-format
  item: pass, `6 checked, 0 failing`.
- `node tools/regen-contract-entries.mjs research/frontier-28-batch-10.proof-contracts.json ...`:
  first regenerated the 4 substantively changed entries, then regenerated the
  full authored batch so the consumer quotes matched the updated statements.
- `git diff --check -- ...` over the changed item files plus the batch-10
  proof-contract file: clean.
- `node tools/boundary-audit.mjs research/frontier-28-batch-10.proof-contracts.json --fail-on-contradicted --fail-on-template`:
  still reports only template-reuse clusters and four heuristic contradicted
  candidates. After reading those rows against the current items, I did not
  convert them into additional defects.

## Page verdicts

- `whitney-embedding-tubular-neighbourhoods-and-approximation` (A): blocked.
  The approximation items I repaired are now consistent, but the tubular and
  transversality chains still contain fatal proof defects.
- `whitney-embedding-tubular-neighbourhoods-and-approximation-examples` (B):
  read in full; no B-page prose edits were made. Its local examples render, but
  the companion page remains blocked by the unresolved A-item defects above.

## Uneditable defects

None. Every remaining confirmed defect is inside editable in-flight batch-10
items rather than published content or another batch.

## Blockers

The remaining defects are concentrated in the variable-radius tubular theorem
and the global transversality/section-perturbation chain. Those repairs are no
longer mechanical; they need genuine proof rewrites rather than local sentence
patches.
