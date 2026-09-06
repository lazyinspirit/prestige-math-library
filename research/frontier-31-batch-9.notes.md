# Frontier 31 — Batch 9 beta notes

## Scope and controlling design

Owned artifacts are this note, `frontier-31-batch-9.pages.json`, and
`frontier-31-batch-9.coverage.json`.  The manifest has **51 A items** and **12
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
adjacent `deps` arrays in `frontier-31-batch-9.pages.json`.

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
check reports one A page, 53 harvested results, and zero errors/warnings; and
the fetch-check recognizes all four reader-verified source records. The global
content-policy invocation currently has six unrelated missing dependencies in
other group-homology batches; Batch 9 itself is clean. `validate-plan.mjs`
passes the repository plan graph (the central plan still contains empty lists
for this stage-1 batch, so item validation is supplied by the batch policy
gate).

The remaining liveness/backing gate is environment-blocked, not source-repaired:
the runner's DNS resolver gives `curl: (6) Could not resolve host` for all four
source URLs across three hosts, making the temporary sweep 0/4 live and
consequently the backing checker reports 28 source-mapped items unavailable to
that resolver.
The reader opened all four full texts successfully, and the coverage records
that fact; do not remove or re-source mathematics solely to mask this universal
runner DNS failure. Re-run `url-sweep` and `source-backing` where DNS is
available before declaring the stage liveness gate green.
