# Step 5a reader report — batch 9

Run: `frontier-36-complete`  
Role: reader  
Assigned pages: 2  
Assigned items reviewed: 68

## Opened inventory

Opened the batch manifest, both assigned page files, all 68 assigned item files listed below, and the claim-supporting dependencies needed for the substantive checks. Both pages' collection summaries are consistent with their contents; no page-prose repair was needed.

### A page

`library/scheme-theory/cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes.md` — verdict: **sound; no page-prose repair**.

Items opened:

`lem-ringed-space-module-sheaves-enough-injectives`, `def-higher-direct-image-sheaf`, `lem-higher-direct-image-local-section-formula`, `lem-affine-qc-cech-unit-ideal-exact`, `thm-qc-sheaf-affine-higher-cohomology-vanishes`, `lem-principal-open-cover-qc-acyclic-intersections`, `thm-cech-computes-qc-cohomology-separated-scheme-affine-cover`, `thm-affine-morphism-higher-direct-images-qc-vanish`, `lem-affine-morphism-cohomology-pushforward`, `lem-closed-immersion-cohomology-pushforward`, `def-twist-quasi-coherent-sheaf-projective`, `lem-projective-space-cech-monomial-complex`, `thm-cohomology-projective-space-twisting-sheaves`, `cor-h0-projective-space-o-d-homogeneous-polynomials`, `cor-intermediate-cohomology-o-d-projective-space-vanishes`, `cor-top-cohomology-projective-space-o-d`, `thm-cohomological-dimension-projective-n-space`, `thm-cohomological-dimension-noetherian-scheme`, `lem-eventual-global-generation-coherent-twists`, `lem-projective-coherent-cohomology-finite-and-vanishing`, `thm-serre-vanishing`, `lem-higher-direct-image-affine-localization`, `lem-affine-open-containing-component-generics`, `lem-schematic-closure-and-dense-agreement`, `lem-relative-projective-space-universally-closed`, `lem-affine-finite-type-source-immerses-in-relative-projective-space`, `lem-chow-lemma-proper-noetherian`, `lem-coherent-devissage-one-generic-generator`, `thm-proper-pushforward-coherent`, `thm-serre-finiteness-projective-cohomology`, `cor-projective-cohomology-finite-dimensional-field`, `def-euler-characteristic-coherent-sheaf`, `lem-euler-characteristic-additive-short-exact`, `def-hilbert-function-sheaf-projective`, `lem-graded-section-module-finite-projective`, `lem-proper-cohomology-field-extension`, `lem-support-dimension-preserved-field-extension`, `lem-serre-vanishing-induction-hyperplane`, `thm-hilbert-polynomial-coherent-sheaf`, `thm-hilbert-polynomial-degree-support-dimension`, `lem-flat-sheaf-sections-flat-over-base`, `lem-proper-flat-cohomology-perfect-complex`, `lem-filtered-colimit-fp-scheme-stage`, `lem-filtered-colimit-fp-sheaf-stage`, `lem-filtered-colimit-flat-fp-sheaf-stage`, `lem-filtered-colimit-proper-fp-stage`, `lem-noetherian-approximation-proper-fp-flat-sheaf`, `lem-proper-flat-fp-cohomology-perfect-complex`, `def-base-change-map-cohomology`, `lem-cohomology-base-change-finite-free-criterion`, `thm-cohomology-and-base-change`, `cor-upper-semicontinuity-cohomology-dimension`, `cor-euler-characteristic-locally-constant-flat-proper-family`, `lem-projective-hypersurface-cohomology-sequence`, `cor-connected-projective-variety-h0-o`, `rem-proper-cohomology-finiteness-needs-coherence`.

### B page

`library/scheme-theory/cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes-examples.md` — verdict: **sound; no page-prose repair**.

Items opened:

`ex-cohomology-o-d-projective-line-all-d`, `ex-cech-cocycle-projective-line-o-minus-two`, `ex-hypersurface-structure-sheaf-cohomology`, `ex-hilbert-polynomial-projective-space`, `cex-h0-not-euler-characteristic-before-serre-vanishing`, `cex-affine-vanishing-fails-non-qc-sheaf`, `cex-proper-finiteness-fails-noncoherent`, `ex-upper-semicontinuity-jumping-h0`, `ex-flat-family-constant-euler-variable-h0-h1`, `ex-projective-zero-space-cohomology`, `cex-fixed-affine-cover-nonseparated-intersections`, `rem-base-change-is-not-automatic`.

Claim-supporting dependency targets opened included the separated affine-overlap criterion (its statement quantifies over every pair of affine opens), the geometric-fibre properties definition, and the relevant projective-space/cohomology suppliers. I checked the cited Stacks Project statements directly for the advanced limit and base-change claims:

- Tag 081F, Lemma 32.13.1, lines 22–35: properness descends to a finite stage when the limit is proper and the stage map is locally of finite type.
- Tag 02O3, Proposition 30.19.1 and Lemma 30.19.2, lines 22–50: proper pushforward coherence over a locally Noetherian base and affine-base cohomology finiteness.
- Tag 07VK, Lemma 30.22.1, lines 21–38: a proper morphism over a Noetherian affine base with a coherent base-flat sheaf has perfect cohomology and arbitrary base change.
- Tag 0BDN, Lemma 36.32.1, lines 22–37, and Tag 0BDI, Lemma 36.31.1, lines 22–48: upper semicontinuity for fibre cohomology dimensions and the local finite-complex rank argument.
- Tag 0B9T, Lemma 36.32.2, lines 23–32: local constancy of the Euler characteristic in a proper finitely presented family with a finitely presented base-flat sheaf.

## Repairs made

1. `items/cex-fixed-affine-cover-nonseparated-intersections.md`: corrected the false identification of the origin with `V(x,y)`. In `k[x,y]`, the zero ideal is a generic point in `D(xy)`, while the closed origin is the distinct prime `(x,y)`. The revised explanation uses this distinction to establish that the relevant displayed localization rings are nonzero. Updated the corresponding contract boundary in `research/frontier-36-complete-batch-9.proof-contracts.json`.

2. `items/thm-cech-computes-qc-cohomology-separated-scheme-affine-cover.md`: corrected Fact F1, which had described a criterion quantified over a single pair of affine opens as equivalent to separatedness. The cited criterion quantifies over every pair of affine opens over an affine base. The revised fact states that global criterion and retains its valid consequence for each pair on a separated scheme. Updated the affected F1 citation quote in the batch proof contracts.

3. `items/lem-projective-space-cech-monomial-complex.md`: repaired Step 3.3's contraction signs. The insertion position is now defined as `t = pos(v, τ ∪ {v})`; for an omitted index before `v`, the contraction and insertion signs multiply to `(-1)^i(-1)^{i+1}=-1`, and for an omitted index after `v` they multiply to `(-1)^i(-1)^i=1`, cancelling the matching differential terms. The omitted-`v` term has product `(-1)^t(-1)^t=1`, giving the identity term. Updated the Step 3.3 derivation in the proof contracts.

No stale `verification.judge` record was present in these three item files.

For each changed item, ran the required reflow and precheck commands in order. Reflow succeeded for all three. Each precheck passed in direct mode (`1 checked, 0 failing`).

## Uneditable defects and page verdicts

No confirmed or suspected uneditable defect remains in the assigned items or pages. The A and B pages each pass with no page-prose edits. No withdrawal was proposed and no item was removed.

## Blocker and coverage limitation

There is no audit blocker. The recomputed Autopilot status uses the repository-root `.autopilot` directory and reports `frontier-36-complete` at stage `5a-read`, with other batch artifacts still outstanding. The recomputation did not report a blocker. The run-specific `.autopilot/frontier-36-complete` path did not exist, so I verified status using the live root state instead.

All two assigned page files and all 68 manifest-listed item files were reviewed. Dependency review was claim-directed; I did not independently audit every unrelated dependency listed in every item's frontmatter.
