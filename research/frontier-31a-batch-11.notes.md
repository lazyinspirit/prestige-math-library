# Frontier 31a — Batch 11 beta notes

## Scope and controlling design

Owned artifacts are this note, `frontier-31a-batch-11.pages.json`, and
`frontier-31a-batch-11.coverage.json`.  The manifest has **51 A items** and **12
B items** (63 total).  The two extra A definitions are dependency repairs:
`def-minimal-free-resolution-over-a-local-ring` and
`def-koszul-betti-numbers-over-a-local-ring`.  Neither term was available from
an earlier published item, and CA-18 is downstream of this pair; leaving them
implicit would create a forward dependency.  The resulting A count remains
below the 60-item split ceiling, so no page split is proposed.

I read both assigned locations.  The original CA-16 design at
`plan-commutative-algebra-track.md` lines 1314-1360 supplies the stable
13-item A and 6-item B spine.  The later CA-16 table at lines 3716-3761 is
explicitly an *additive amendment* and therefore controls granularity and
order: it adds 36 A and 6 B items, rather than replacing the original ids.
The enrichment report records the design total as A=49/B=12; this scaffold
retains all those ids plus the two dependency-repair definitions above.

There is a recorded design/spec drift.  The design's topic-level prerequisite
line names CA-2, CA-10--CA-13, HA-1--HA-4 and module/tensor background; the
dispatch and `plan-spec.json` require exactly
`zariski-topology-on-prime-spectra-examples` and
`long-exact-sequences-in-homology`.  I did not adjudicate that discrepancy:
the manifest uses the specification exactly, while its item dependencies name
the already-published results genuinely used.  The design gives no conflicting
numeric order; the specification order 365.901/365.902 is retained.

## Source record and repair

The coverage file contains three independent treatments, represented by four
source records: Reid--Groutides Chapter 5 (course notes), Mustata Sections
11.1 and 11.3 (lecture notes), and the independent Stacks Project Sections
15.29 and 15.31. The first two are eligible primary full lecture-note
treatments with a harvestable contents page. Exact HTTP(S) URLs, ranges, every
named heading in each range, its disposition, and the receiving item are
recorded in the coverage file.

All four URLs were opened as full text in the reader on 2026-09-05.  The
runner's direct Node fetch independently returned `EAI_AGAIN` for every host;
the `fetch_verified` records honestly preserve the reader-visible full-text
check and omit an unavailable byte hash rather than inventing one.  This is an
environmental liveness limitation to re-run from the stage runner, not a claim
that a URL failed or a reason to remove a harvested result.

Vakil's supplied `FOAGmay1612public.pdf` was inspected during source repair.
Its table of contents labels the relevant Chapter 28 treatment as “in
progress”; the available version does not supply a harvestable body range for
the needed permutation/power results.  It is deliberately **not** retained as
a coverage source.  Those results are re-harvested from Mustata and Stacks,
so no item was dropped merely to clear a source issue.

Source-to-spine support is deliberately redundant:

- Reid--Groutides gives the basic complex, one-element calculations,
  annihilation, regular-sequence acyclicity, quotient resolution, and the
  polynomial-variable example.
- Mustata gives the ordered regular-sequence convention, signs, change of
  generators, contraction, cone step, acyclicity/converse, and permutation/
  power closure.
- Stacks §15.29 gives functoriality, localization, flat base change, and the
  concatenation/cone operations; §15.31 gives the three regularity notions and
  their comparison.  The two local-minimality definitions are canonical
  conventions made explicit because the assigned amendment uses them; their
  concrete use is restricted to the Koszul resolution in the last two items.

## Conventions and proof route

Work over a commutative unital ring (R), with a finite ordered sequence
(mathbf{x}=(x_1,ldots,x_n)), a finite free module (F) carrying the
displayed ordered basis, and a coefficient module (M).  Homological degrees
are nonnegative and the differential lowers degree.  The sign convention is

\[
d(e_{i_1}\wedge\cdots\wedge e_{i_p}\otimes m)
=\sum_j(-1)^{j-1}e_{i_1}\wedge\cdots\widehat{e_{i_j}}\cdots\wedge
e_{i_p}\otimes x_{i_j}m.
\]

The Koszul complex with coefficients means (K(mathbf{x};R)\otimes_R M).
Regularity is ordered: each (x_i) is a non-zero-divisor on the preceding
quotient and the terminal quotient is nonzero.  The empty sequence, zero
module, and unit boundary cases are stated rather than inferred.  Local
converses and permutation/(H_1)-regularity statements are limited to a finite
module over a Noetherian local ring with (mathbf{x}\subseteq\mathfrak m).
“Minimal” means every differential of a finite free local resolution lands in
the maximal ideal times the preceding module; the Koszul Betti number is the
corresponding free rank.

The authoring route is: construct the exterior quotient and prove its basis
and signs; derive and audit the coordinate differential; use the signed
tensor/cone identification plus the supplied cone long exact sequence for
induction; use contraction for annihilation and then exact localization/flat
tensoring for transport.  Regular-sequence acyclicity is the one-element base
case plus cone induction.  The local converse uses the first failed prefix,
the cone sequence, and Nakayama.  Adjacent swaps generate permutations; powers
reduce to the one-element power calculation after swaps.  The final minimality
and binomial ranks are then read directly from the exterior basis.

Every explicit dependency array is in the manifest beside its item.  The
dependency spine is: exterior/signs -> differential -> one-element and cone
machinery -> homotopy/localization/base change -> regularity -> local converse
and comparisons -> minimal Koszul resolution and Betti ranks.  All B items
depend only on preceding A items; none is used as an A prerequisite.

## Item register

The following are the exact planned claims; their exact dependency IDs are the
adjacent `deps` arrays in `frontier-31a-batch-11.pages.json`.

### A: construction, signs, and homology

- `def-exterior-algebra-of-a-finite-free-module`: tensor-algebra quotient by
  squares, graded by exterior degree.
- `lem-exterior-algebra-basis-monomials`: increasing basis wedges form a basis
  of every exterior degree.
- `lem-exterior-multiplication-koszul-sign-rule`: exterior multiplication has
  the anticommutation signs used below, including in characteristic two.
- `def-koszul-complex-of-a-sequence-with-coefficients`: the degree-minus-one
  derivation extending (mathbf x), tensored with (M).
- `lem-koszul-differential-coordinate-formula`: deletion of the (j)-th wedge
  factor has coefficient ((-1)^{j-1}x_{i_j}).
- `lem-koszul-differential-square-pairwise-cancellation`: the two deletion
  orders have equal coefficients and opposite signs.
- `lem-koszul-differential-is-well-defined-and-squares-to-zero`: the
  derivation descends to the exterior quotient and gives a chain complex.
- `cor-empty-koszul-complex-is-the-coefficient-module`: (K(\varnothing;M))
  is (M) in degree zero and zero elsewhere.
- `lem-one-element-koszul-complex`: (K(x;M)=[0\to M\xrightarrow{x}M\to0]).
- `cor-one-element-koszul-homology`: (H_0=M/xM), (H_1=(0:_M x)), and the
  other groups vanish.
- `thm-basic-koszul-homology`: records those one-element calculations,
  (H_0) for the generated ideal, and top homology as common annihilator.
- `lem-koszul-complex-concatenation-tensor-isomorphism`: the signed isomorphism
  (K(\mathbf x,\mathbf y;M)\cong K(\mathbf x;R)\otimes_RK(\mathbf y;M)).
- `lem-koszul-append-one-element-mapping-cone-identification`: appending (y)
  is the cone of multiplication by (y).
- `lem-koszul-mapping-cone-homology-exact-sequence`: gives the resulting
  Koszul long exact homology sequence.
- `thm-koszul-concatenation-and-mapping-cone`: packages the tensor and cone
  constructions for later use.
- `lem-koszul-generator-contraction-homotopy`: wedge/contraction gives a
  homotopy from multiplication by (x_i) to zero.
- `cor-sequence-ideal-annihilates-koszul-homology`: ((\mathbf x)) kills all
  Koszul homology.
- `lem-koszul-generators-act-null-homotopically`: records the generator-wise
  null-homotopy and its annihilation consequence.
- `cor-koszul-homology-supported-on-sequence-vanishing-set`: support is inside
  (V(\mathbf x)).
- `lem-koszul-complex-localises-termwise`: (S^{-1}K(\mathbf x;M)cong
  K(\mathbf x/1;S^{-1}M)).
- `cor-koszul-homology-localises`: the corresponding localization isomorphism
  for every homology module.
- `lem-koszul-complex-flat-base-change`: flat base change identifies the two
  Koszul complexes.
- `cor-koszul-homology-flat-base-change`: flat base change commutes with
  Koszul homology.
- `lem-koszul-generator-matrix-chain-map`: a matrix expressing one sequence
  in another induces the exterior chain map.
- `cor-koszul-complex-invariant-under-invertible-generator-change`: an
  invertible generator change is a chain isomorphism.
- `thm-functoriality-base-change-and-generator-change-for-koszul-complexes`:
  packages localization, flat base change, functoriality, and signed generator
  change without duplicating their proofs.

### A: regularity, local converse, and ranks

- `def-regular-sequence-on-a-module`: ordered non-zero-divisor conditions and
  nonzero terminal quotient, with the local maximal-ideal application stated.
- `lem-regular-sequence-first-element-boundary`: exposes the nonempty,
  nonzero-module, first-element, and proper-terminal-quotient boundaries.
- `lem-regular-sequence-tail-on-quotient`: gives the recursive first-element
  plus tail-on-quotient criterion.
- `cor-initial-subsequences-of-a-regular-sequence-are-regular`: every initial
  segment remains regular.
- `thm-localisation-and-flat-base-change-of-regular-sequences`: regularity
  localizes where the terminal quotient survives and persists under faithfully
  flat base change.
- `lem-regular-one-element-koszul-acyclicity`: a non-zero-divisor gives a
  positive-acyclic two-term complex resolving its quotient.
- `lem-regular-sequence-koszul-acyclicity-induction`: the cone sequence kills
  positive homology after a regular element is appended.
- `thm-regular-sequences-give-acyclic-koszul-complexes`: a regular sequence is
  Koszul-acyclic in positive degrees.
- `cor-koszul-complex-resolves-a-regular-quotient`: for finite free (M), the
  complex is a finite free resolution of (M/(\mathbf x)M).
- `lem-local-koszul-h-one-detects-first-regularity-failure`: a first local
  failure produces nonzero (H_1).
- `lem-local-koszul-acyclicity-inductive-converse`: local positive acyclicity
  forces the last injection and acyclicity of the preceding sequence.
- `thm-koszul-acyclicity-characterises-local-regular-sequences`: under the
  stated finite Noetherian local hypotheses, positive acyclicity characterizes
  regularity.
- `cor-local-koszul-acyclicity-iff-regular-sequence`: the concise equivalence.
- `def-koszul-regular-and-h-one-regular-sequences`: distinguishes ordinary,
  positive-Koszul, and (H_1)-regularity.
- `lem-koszul-regular-implies-h-one-regular`: positive acyclicity implies
  (H_1=0).
- `lem-h-one-regular-local-implies-koszul-regular`: local (H_1=0) propagates
  to all positive homology.
- `lem-regular-sequence-permutation-adjacent-swap`: swaps adjacent terms over
  a Noetherian local ring.
- `cor-regular-sequences-permutable-local`: every permutation is regular.
- `lem-positive-powers-of-a-regular-sequence-remain-regular`: positive powers
  remain regular.
- `cor-regularity-notions-coincide-local-finite`: all three notions coincide
  in the stated local finite setting.
- `thm-regularity-notions-and-permutation-invariance-local`: packages the
  equivalence and permutation result.
- `def-minimal-free-resolution-over-a-local-ring`: defines the finite free
  local minimality condition needed by the Koszul conclusion.
- `def-koszul-betti-numbers-over-a-local-ring`: defines the local ranks read
  from a minimal Koszul resolution.
- `lem-koszul-resolution-minimality-maximal-ideal-sequence`: maximal-ideal
  entries make an acyclic Koszul complex minimal.
- `cor-complete-intersection-betti-numbers-binomial`: its degree-(i) Betti
  number is (\binom ni) for a length-(n) regular sequence.

### B: computations and boundary checks

- `ex-koszul-complex-one-and-two-elements`: writes and computes the one- and
  two-element differentials and homology.
- `ex-koszul-complex-polynomial-variables`: identifies polynomial variables'
  Koszul complex with the standard residue-field resolution.
- `ex-koszul-resolution-complete-intersection`: resolves an explicit regular
  quotient and computes alternating ranks.
- `ex-koszul-homology-zero-divisor`: computes positive homology for a chosen
  zero-divisor.
- `ex-nonpermutable-regular-sequence`: uses Mustata's explicit source example
  \(R=k[x,y,z]/((x-1)z)\): \(x,(x-1)y\) is regular, while the reverse order
  fails because \((x-1)yz=0\) with \(z\ne0\). It is a nonlocal example, so it
  does not contradict the local permutation theorem.
- `ex-koszul-homology-after-localisation`: localizes a complex and names the
  surviving homology.
- `ex-empty-and-unit-koszul-boundaries`: compares empty, zero, and unit
  sequences with the adopted regularity convention.
- `ex-koszul-d-square-sign-check-three-elements`: pairs all six terms in
  (d^2(e_1\wedge e_2\wedge e_3)).
- `ex-koszul-homology-of-a-zero-divisor`: calculates every group of (K(x;R))
  for a specified zero-divisor and locates its support.
- `ex-generator-change-koszul-isomorphism`: writes the degreewise exterior map
  for an elementary invertible two-generator change.
- `ex-regular-sequence-powers-and-permutation`: raises polynomial variables to
  powers, permutes them, and checks quotient injections.
- `ex-koszul-resolution-betti-table-complete-intersection`: gives the full
  codimension-three minimal table (1,3,3,1).

## Known limits and next authoring action

This page is finite-sequence and finite-free throughout.  It does not build
unbounded resolutions, general derived functors, the Kunneth formula, depth,
or the full minimal-resolution uniqueness/Tor theory; those would either add
unneeded machinery or belong to the explicitly routed later pages.  The local
converse never asserts a global permutation theorem.  The nonpermutable B
example is intentionally non-Noetherian, which is exactly why it does not
contradict the local theorem.

Validation checkpoint after source repair: JSON parses; the A/B counts are
51/12; every item carries an explicit dependency array; the batch-scoped
content-policy run reports 63 items with zero errors/warnings; the coverage
check reports one A page, 61 harvested results, and zero errors/warnings; and
the fetch-check recognizes all four reader-verified source records. The global
content-policy invocation currently has six unrelated missing dependencies in
other group-homology batches; Batch 11 itself is clean. `validate-plan.mjs`
passes the repository plan graph (the central plan still contains empty lists
for this stage-1 batch, so item validation is supplied by the batch policy
gate).

Current validation rerun (2026-09-05): `manifest-deps` reports 63 items with
zero errors; manifest-only `content-policy` reports 63 scoped items with zero
errors or warnings; `coverage-checklist --require-destination` reports one A
page and 61 harvested results with zero errors or warnings; and
`source-fetch-check` recognizes all 4/4 recorded full-text source checks.  A
raw-text scan of the other `frontier-31a` batch manifests found no duplicate
planned item ID.  The repository-level `validate-plan.mjs` exits successfully;
its central plan has not yet imported this batch's item array, so the
batch-scoped validators are the operative item-graph checks.

The remaining liveness/backing gate is environment-blocked, not source-repaired:
the runner's DNS resolver gives `curl: (6) Could not resolve host` for all four
source URLs across three hosts, making the temporary sweep 0/4 live and
consequently the backing checker reports 28 source-mapped items unavailable to
that resolver.
The reader opened all four full texts successfully, and the coverage records
that fact; do not remove or re-source mathematics solely to mask this universal
runner DNS failure. Re-run `url-sweep` and `source-backing` where DNS is
available before declaring the stage liveness gate green.

## Step-3 fix pass

### Findings and disposition

The batch-11 portion of
`research/frontier-31a-alpha-c-step3-scaffold-review.md` supplies no numbered
finding: its sole finding-level conclusion is the machine-readable
`sufficient` verdict for
`koszul-complexes-and-regular-sequences`.  The companion verdict record has an
empty `missing` list.  Thus the register below records the explicit no-change
disposition rather than inventing an identifier.

| finding id | disposition | evidence | changed scaffold record |
| --- | --- | --- | --- |
| none issued for batch 11 | Accepted; no repair or pushback applies. | The review confirms the 51-A/12-B exterior-signs -> cone -> regularity -> local-converse -> minimal-resolution spine, the two exact plan prerequisites at orders 365.901/365.902, the finite ordered-sequence and finite-Noetherian-local qualifications, and the two backward definitions `def-minimal-free-resolution-over-a-local-ring` and `def-koszul-betti-numbers-over-a-local-ring`.  It finds no missing result, source gap, backward prerequisite, pair-scope defect, or required split. | None. `research/frontier-31a-batch-11.pages.json` and `research/frontier-31a-batch-11.coverage.json` remain unchanged; all 63 planned item ids and their explicit `deps` arrays are retained. |

### Source re-verification and retained scope

I re-opened each recorded full-text source at its existing HTTP(S) URL and
checked the harvested ranges against the present dispositions.  Reid--Groutides
Chapter 5 (PDF pp. 1--7) supplies Definitions 5.1--5.4, Theorem 5.1,
Corollaries 5.2--5.5, Theorem 5.6, and the routed §5.2 results.
Mustaţă's 145-page notes give §11.1 and §11.3: Definition 11.1 fixes the
ordered/proper-quotient convention; Lemma 11.43 gives the square-zero sign
calculation; Definitions/Examples 11.44--11.46 give the complex and
one-/two-element computations; Exercises 11.47--11.48 give permutation and
null-homotopy; Proposition 11.49 gives the cone sequence; Theorem 11.50 gives
the regular-sequence criterion; Remark 11.51 supplies the positive-powers
consequence, while the immediately following discussion combines permutation
with Theorem 11.50; and Theorem 11.52 and Exercise 11.53 remain respectively
routed to CA-17 and recorded as the non-blocking `owner-decision` on perfect
modules.
Stacks §§15.29 and 15.31 retain their exact mapped definitions and lemmas:
the former gives the exterior DGA, signed differential, generator change,
contraction, cone, and concatenation results, while the latter gives the
Koszul-/H1-regular definitions, the regular-to-Koszul implication, flat base
change, and the finite Noetherian-local equivalence.  No source result was
removed or re-sourced.

The source support, dependency rationale, conventions, proof route, and known
limits recorded above remain controlling: the cone long exact sequence is the
induction interface; local converse and permutation claims retain the finite
Noetherian-local, maximal-ideal hypotheses; and depth, perfect modules,
quasi-regularity, Kunneth, and regular-local-ring dimension theory remain
outside this finite Koszul pair except where the coverage record names their
later destination.

### Required validation (2026-09-05)

| command | result |
| --- | --- |
| `node tools/manifest-deps.mjs research/frontier-31a-batch-11.pages.json` | `63 item(s), 0 normalized, 0 error(s)` |
| `node tools/coverage-checklist.mjs --require-destination research/frontier-31a-batch-11.coverage.json` | `1 page(s), 61 harvested result(s), 0 error(s), 0 warning(s)` |
| `node tools/source-fetch-check.mjs --coverage research/frontier-31a-batch-11.coverage.json` | `4/4 source(s) fetch-verified` |
| `node tools/content-policy.mjs --manifest-only research/frontier-31a-batch-*.pages.json` | `902 scoped item(s), 0 error(s), 0 warning(s)` |
| `node tools/validate-plan.mjs research/plan-spec.json --repo .` | Pass: declared page order is acyclic and consistent, with no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 746 itemized pages. |

Next action: author the unchanged 51 A and 12 B items in manifest order,
preserving the recorded source locators, hypotheses, proof strategy, and
dependency arrays.  The stage runner's DNS-dependent liveness/backing check
remains an operational follow-up; it is not a mathematical or scaffold defect.

## Step-5 authoring

Authored all 63 manifest IDs as draft content: the 51 A-page IDs on
`koszul-complexes-and-regular-sequences` and the 12 B-page IDs on
`koszul-complexes-and-regular-sequences-examples`.  The pages were written at
`library/commutative-algebra/` and preserve the manifest order and exact
dependency arrays.  All items retain `status: draft`; no published content,
workflow state, or other batch was changed.

The source rationale is the retained three-treatment record in the coverage:
Reid--Groutides Chapter 5, Mustaţă §§11.1 and 11.3, and Stacks Project
§§15.29 and 15.31.  The authored exterior differential, signed cone,
contraction, flat base change, and local finite regularity claims use exactly
the finite ordered sequence and coefficient-module conventions recorded above.
The local equivalences, permutation, and powers claims retain the nonzero
finite-module, Noetherian-local, and maximal-ideal hypotheses.  The empty,
zero, unit, and one-element cases are explicitly present in the core and B
examples.  No claim was narrowed or dropped.

`research/frontier-31a-batch-11.proof-contracts.json` contains contracts for
all 57 proof-bearing items.  Each maps its two actual proof steps and records
all eight standard boundary dispositions; it has no fabricated fact citation
records because the item proofs use their declared prerequisite constructions
directly rather than introducing labelled fact quotations.

| check | result |
| --- | --- |
| `node tools/tsx-run.mjs tools/precheck.mts` with the full 63-path manifest expansion | Rerun after item-specific proof expansion: 57 proof-bearing items checked; 0 failing |
| `node tools/validate-plan.mjs` | The bare command reports its required `<plan-spec.json>` argument; rerun as `node tools/validate-plan.mjs research/plan-spec.json --repo .` passed: acyclic and consistent, no unresolved IDs/cycles among itemized pages |
| `node tools/content-policy.mjs research/frontier-31a-batch-11.pages.json` | 63 scoped items; 0 errors, 0 warnings |
| `node tools/proof-contract.mjs research/frontier-31a-batch-11.proof-contracts.json --strict` | 57/57 checked; 0 errors, 0 warnings |
| focused `node tools/rendercheck.mjs` on the 63 items and 2 pages | Rerun after proof expansion: 65 files; YAML and KaTeX checks passed |

The final draft-status audit found `status: draft` on all 63/63 items.

Blockers: none for authoring.  The pre-existing runner DNS limitation for the
four harvested URLs remains recorded above; it was not treated as a source or
mathematics failure.
