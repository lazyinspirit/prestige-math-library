# Step 3a scope review — pair `kazhdans-property-t-and-spectral-gap` / `…-examples`

- Run: `frontier-43-complex-representation-15`
- A page: `kazhdans-property-t-and-spectral-gap` (order 1238, representation-theory)
- B page: `kazhdans-property-t-and-spectral-gap-examples` (order 1239)
- Batches: 4. Dispatch: `step3a-pair-kazhdans-property-t-and-spectral-gap-14d24ab8c28f8862`
- Decision: **sufficient**, with one flagged unmet prerequisite (not a subject-coverage omission).

Scope only. No scaffold, item, coverage, plan, manifest or owner record was
edited. No item approval is expressed.

## 1. Intended subject and role

Design: `research/plan-representation-theory-groups-track.md` §RG-29 (A-page
design table at L2028 ff., hard proof plan L2062 ff., source-backing rows
L2555–L2559), with binding direction
`frontier-43-complex-representation-15-owner-authoring-direction.md` §"Batch 4:
RG-29 higher-rank theorem" and the route record
`…-representation-drift-resolution.md` §"RG-29: constructive higher-rank proof
route". The pair is the library's only property (T) page: it sits after the
SL₂(ℝ) series pair (RG-28), consumes the published positive-type/GNS and
Fell-dual pages plus the in-run amenability and SL₂(ℝ)-series pages, and its
only library consumer is its own B companion. Its role is to introduce
property (T) through almost invariant vectors, Kazhdan pairs, the Fell/dual
isolation theorem and the spectral-gap formulation, and to give the two
archetypal examples (SLₙ(ℝ), n ≥ 3, has (T); SL₂(ℝ) fails via the spherical
complementary series).

## 2. Scaffold versus design (item-for-item)

A page: 23 items (7 definitions, 7 lemmas, 8 theorems, 1 proposition);
B page: 4 items (2 examples, 2 counterexamples); both far below the 100-item cap.

- All 15 A design rows (including the design's own
  `lem-irreducible-c-star-representations-separate-arbitrary-c-star-algebras`)
  and all 4 B design rows are present with their exact ids; none is dropped or
  narrowed.
- The 8 A items beyond the design table are exactly the local suppliers the
  design prose and the binding owner direction commission:
  `def-compactly-generated-locally-compact-group`,
  `lem-finite-haar-volume-compactness-criterion`,
  `def-relative-property-t-for-a-pair`,
  `def-real-projective-line-and-its-sl2-action`,
  `lem-sl2-r-has-no-invariant-probability-on-the-projective-line`,
  `lem-sl2-r-semidirect-r2-has-relative-property-t`,
  `lem-normal-relative-property-t-controls-distance-to-invariant-vectors`,
  `lem-sl-n-r-is-boundedly-generated-by-elementary-root-subgroups`.
  All four owner-mandated lemmas precede the higher-rank theorem (levels 1, 2,
  2, 0 versus the theorem's 3). No scope expansion beyond the approved pair.
- Plan conformance: `plan-spec.json` orders 1238/1239, kinds A/B, category,
  companions and `requires` are byte-identical to the manifest (checked
  programmatically); `node tools/splice-plan.mjs --run … --batch 4 --dry-run`
  reports 2 pages / 27 items with no `requires` refusal (splice itself is Step 4
  work and is still pending, as expected at 3a).

## 3. Source coverage

`…-batch-4.coverage.json`: 3 sources, 40 harvested results, dispositions
40/40; `node tools/coverage-checklist.mjs …-batch-4.coverage.json` → 0 errors,
0 warnings. All three sources are fetch-verified; the KHV full text was
re-fetched in this review and is byte-identical to the stamp
(1 971 873 bytes, sha256_16 `0281823290dfb42e`), Breuillard
(`7272f3b62d2ee7cd`), Farah (`7000d7d842da12d5`).

The declared design scope is covered from KHV Chapter 1 §§1.1–1.4 and
Breuillard Lecture 2 §§II–III: Definitions 1.1.1/1.1.3, Remark 1.1.4,
Propositions 1.1.5/1.1.9, Theorem 1.1.6, Propositions 1.2.1/1.2.3, Lemma 1.2.4
and Theorem 1.2.5, Theorems 1.3.1/1.3.4, Definition 1.4.3 with Remark 1.4.4,
Propositions 1.4.12 and Corollary 1.4.13, and Theorem 1.4.15 (**real field
K = ℝ only**, per the binding owner direction, via the commissioned
relative-(T)/bounded-generation route) are each present as an item, inline in a
stated item, or explicitly out-of-scope with a written reason (Theorem 1.4.5's
invariant-mean route; KHV C.5.3/C.5.5(ii) and F.2.8/F.2.9 in the isolation
proof). The Breuillard rows for the real-field route (Exercises §2 I.1, I.4,
II.1, III.1–III.5) are `included`/`inline`; the integer-field and lattice rows
are declined with reasons tied to the owner direction.

Two locator/harvest observations, neither blocking:

- The plan's source-backing row L2344 cites KHV Chapter 1 §§1.1–1.4 as
  "pp. 27–49"; the author-hosted text places §§1.1–1.4 on printed pp. 31–54/55
  (the coverage record's locator is the accurate one). The design document's
  pagination should be corrected if it is ever re-issued.
- Named results inside the read range that carry no explicit coverage row:
  Example 1.1.7, Remarks 1.1.8/1.1.10/1.2.2/1.2.6/1.3.3/1.4.2/1.4.14,
  Proposition 1.3.2, Corollaries 1.3.5–1.3.6, Example 1.3.7, Lemmas
  1.4.1/1.4.6–1.4.10, Proposition 1.4.11, Corollary 1.4.16. The §1.4 items are
  proof internals of KHV's local-field route, superseded by the covered
  Breuillard route; Example 1.1.7 follows immediately from the included
  amenable-plus-(T) theorem; Remark 1.1.8 is reflected in the
  general-topological-group caveat of `def-almost-invariant-vectors-…`. The
  remaining substantive candidates are Corollary 1.3.5/1.3.6 (image in an
  amenable group relatively compact; compact abelianization, unimodularity;
  discrete (T) groups have finite abelianization), Proposition 1.3.2 (Kazhdan
  sets versus generating sets), Example 1.3.7 (F_k, surface groups, SLₙ(ℚ))
  and Corollary 1.4.16. These are optional enrichment of a design that
  deliberately selected a narrower arc; they can be derived from included
  material, and their absence does not remove any promised definition, result
  or example. Owner may enrich if the fuller KHV §1.3 arc is wanted; no pair
  merger is warranted.

## 4. Prerequisite audit (published library + current scaffold)

All 27 items: 106 distinct dependency targets, 0 unresolved (0 also missing
from `items/`), checked id-by-id against `items/<id>.md` and the 15 in-run batch
manifests. 82 targets are published items; each has an A-page frontmatter home
(no B/examples-only leaf), including the load-bearing suppliers actually read
for this review: `lem-weak-containment-…-almost-invariant-vectors` (LCH, AC —
matches its consumers), `thm-weak-containment-is-equivalent-to-kernel-inclusion`,
`thm-nondegenerate-representations-of-c-star-g-are-unitary-representations-of-g`,
`lem-fell-closure-is-characterized-by-weak-containment`,
`lem-spectral-measure-of-a-representation-of-an-abelian-lch-group` (second-countable
N/K, separable H — the consumers declare `def-second-countable-space`/`def-separable-space`),
`cor-normalized-haar-probability-on-a-compact-group`, the Bochner-integral
items, `thm-projection-onto-a-nonempty-closed-convex-set` (Countable Choice;
AC ⇒ CC via `thm-choice-implies-dependent-implies-countable-choice`), the
elementary-matrix items, the probability-law subsequence lemma and the
point-compactification/unit-circle items. 24 targets are in-run scaffold items,
all homed on the batch-2 A page `amenability-reiter-nets-and-folner-conditions`
and the batch-3 A page `sl2-r-principal-and-complementary-series`; their current
statements were read and supply the interfaces this pair declares (left-invariant
mean amenability; Hulanicki `amenable ⟺ 1_G ≺ λ_G`; the normalized principal
series, compact picture, multiplicity-one K-types, complementary-series
unitarity and spherical convergence corollary). The two page edges and eight
item edges across batches are recorded as open in
`…-batch-4.cross-batch-dependencies.json`, which is correct at 3a.
`node tools/content-policy.mjs --manifest-only` on batches 2+3+4 → 77 items,
0 errors/0 warnings; batch 4 alone reports only the expected 9 open in-run
supplier references. `item-dependency-levels check --run …` → 371 items,
no cycle/level errors.

## 5. Flagged unmet prerequisite (confirmed absent from library and scaffold)

**Consuming item:** `thm-property-t-implies-compact-generation`.

**Required claim.** For an LCH group G and an open (hence closed) subgroup
H ≤ G: the quotient G/H is discrete, left translation on ℓ²(G/H) with counting
measure is a strongly continuous unitary representation λ_{G/H}; the Dirac
vector δ_H is fixed by H; and if G/H is infinite then ℓ²(G/H) has no nonzero
G-invariant vector (invariant vectors are constant on the transitive G-set).
Also used: the open compactly generated subgroups are directed and cover G,
and every compact Q lies in one of them.

**Evidence of absence.** The published `def-left-and-right-regular-unitary-representations`
and `thm-regular-representations-are-unitary-and-strongly-continuous` define and
analyse λ, ρ on L²(G) with Haar measure only; the published permutation-representation
items (`def-trivial-regular-and-permutation-representations`,
`thm-induction-of-the-trivial-representation-is-the-permutation-representation-on-left-cosets`)
are stated for **finite** groups; the quasi-regular identification for closed
subgroups lives on the induced-representations page, which this pair neither
requires nor declares. No in-run scaffold item defines λ_{G/H} for general
open H. The item's own strategy nevertheless cites the L²(G) regular-representation
items for the ℓ²(G/H) claim, so the citation does not carry the needed statement.
No published consumer of this fact exists either (repository search finds no
`ell^2(G/H)`-type item outside the lattice example).

**Recommended scaffold addition.** One small local lemma physically before the
theorem, e.g. `lem-quasi-regular-representation-on-a-discrete-coset-space`,
stating exactly the claim above (unitarity by translation-invariance of
counting measure; strong continuity from a finite-support ε/2 approximation
using openness of xHx⁻¹; δ_H fixed by H; invariant vectors vs finiteness of
G/H), or, if the owner prefers no inventory change, the same facts proved
inline in the theorem with the L²(G) citations replaced. This is a supplier for
one proof route, not a subject-coverage omission; the owner decides.

**Lower-confidence proof-level obligations (no new item required).** (i) In the
same theorem the almost-invariance witness must be the single-coordinate vector
δ_K ∈ ⊕_H ℓ²(G/H) for one K ⊇ Q (KHV's own proof); a vector with
infinitely many nonzero δ_H coordinates has infinite norm and is not in the
Hilbert direct sum. (ii) The separable-carrier reductions in
`lem-sl2-r-semidirect-r2-has-relative-property-t` and in the SLₙ(ℝ) route
(closed G-invariant span of the witness is separable, by second countability
of G and strong continuity) are short inline estimates; they are stated in the
strategies but have no dedicated supplier, and no item is needed.

## 6. Decision

**sufficient.** The planned definitions, results and examples cover the
intended subject: the RG-29 design is realised 1:1 with its commissioned local
suppliers, the plan/coverage/dependency records are consistent with the
manifest, source coverage is verified against the complete author-hosted texts,
and the pair supplies the library's property (T) introduction plus its two
flagship examples and the spectral-gap formulation. The single flagged unmet
prerequisite above should be resolved by the owner (small scaffold addition or
an inline proof in the existing item); the observation on KHV §1.3.2/§1.3.5–7
is optional enrichment only. No pair merger is warranted.
