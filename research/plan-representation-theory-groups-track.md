# Representation theory of groups — finite and infinite

Prose scaffold, owner-commissioned 2026-08-14 (run `subjects-02`, track
`representation-theory-groups`).  Seam authority:
`research/subjects-02-SEAMS.md`.  This block uses the globally unused prefix
`RG` and follows the **last page of the concurrent representation-theory of Lie
algebras block**, cited here only as `RL-n` as the dispatch requires.

> **STATUS: PROPOSED, NOT SPLICED.**  This is a prose design document for a
> later build.  It authors no item, changes no `research/plan-spec.json` entry,
> runs no content gate, and publishes nothing.  Relative labels and page ids,
> not absolute orders, are authoritative.

This file is subordinate to `CLAUDE.md`, `SCHEMA.md`, the base scaffold brief,
and the subjects-02 seam contract.  It owns only RG-1 through RG-30 and their
examples companions.

---

## 0. Summary for the orchestrator

**Placement.**  Put this block after `RL-n`, the last A/B pair of the
representation-theory of Lie algebras scaffold.  Resolve `RL-n` to its final
page id only when that concurrent scaffold is frozen; this lane did not read or
edit it.  Preserve the reading order RG-1, RG-1 examples, ..., RG-30, RG-30
examples.

**Pairs scaffolded.**  Thirty A/B pairs (sixty pages):

| label | A page id | spine |
|---|---|---|
| RG-1 | `artin-induction-and-rational-characters` | cyclic induction and rational-valued characters |
| RG-2 | `brauer-induction-and-elementary-subgroups` | elementary subgroups and integral induction |
| RG-3 | `schur-indices-and-fields-of-definition` | character fields, realizability, scalar extension and division-algebra Schur indices |
| RG-4 | `clifford-theory-over-normal-subgroups` | inertia groups, homogeneous restriction, Clifford correspondence |
| RG-5 | `projective-extensions-and-the-little-group-method` | factor sets, extension obstruction, projective little groups |
| RG-6 | `monomial-characters-and-m-groups` | monomial representations, supersolvable groups, limits of the theory |
| RG-7 | `frobenius-groups-and-the-normal-complement-theorem` | Frobenius kernels, transfer, fusion and the normal $p$-complement criterion |
| RG-8 | `young-diagrams-tableaux-and-permutation-modules` | partitions, tabloids, dominance, Young permutation modules |
| RG-9 | `specht-modules-and-the-irreducibles-of-the-symmetric-group` | polytabloids, Specht modules, characteristic-zero classification |
| RG-10 | `the-branching-rule-and-the-young-graph` | restriction, induction, removable/addable boxes, multiplicity-free branching |
| RG-11 | `the-hook-length-formula-and-rsk-correspondence` | dimensions, hook lengths, insertion, Knuth/RSK consequences |
| RG-12 | `bruhat-decomposition-and-flags-over-finite-fields` | BN-pairs, Bruhat cells, flag permutation representations |
| RG-13 | `principal-series-representations-of-gl-n-over-a-finite-field` | induction from a Borel, intertwiners, Iwahori–Hecke algebra |
| RG-14 | `blocks-defect-groups-and-the-brauer-homomorphism` | blocks above the modular entry pages and Brauer pairs |
| RG-15 | `vertices-sources-and-the-green-correspondence` | relative projectivity above the existing definitions, Green correspondence |
| RG-16 | `brauers-first-main-theorem` | block correspondence through Brauer pairs |
| RG-17 | `brauers-second-main-theorem` | subsections, generalized decomposition numbers, block control |
| RG-18 | `haar-measure-existence-and-uniqueness` | existence, uniqueness, regularity, normalization |
| RG-19 | `the-modular-function-and-l1-group-algebras` | left/right Haar, convolution, involution, regular representations |
| RG-20 | `unitary-representations-positive-type-and-gns` | continuity, unitary Schur, coefficients, cyclic GNS |
| RG-21 | `complete-reducibility-for-compact-groups` | averaging, finite-dimensional irreducibles, Hilbert direct sums |
| RG-22 | `peter-weyl-theory-for-general-compact-groups` | matrix coefficients, density, regular representation, compact-group dual |
| RG-23 | `induced-unitary-representations-of-locally-compact-groups` | quasi-invariant measure, rho-functions, modular correction |
| RG-24 | `mackeys-imprimitivity-theorem` | systems of imprimitivity and reconstruction from stabilizers |
| RG-25 | `group-c-star-algebras-and-the-fell-unitary-dual` | integrated forms, full/reduced algebras, weak containment, unitary dual |
| RG-26 | `direct-integral-decomposition-and-type-i-groups` | measurable Hilbert fields, central decomposition, type I/non-type I boundary |
| RG-27 | `amenability-reiter-nets-and-folner-conditions` | invariant means, Reiter nets, Haar–Følner criteria, regular weak containment |
| RG-28 | `kazhdans-property-t-and-spectral-gap` | almost invariant vectors, Kazhdan pairs, isolation of the trivial representation |
| RG-29 | `sl2-r-principal-and-complementary-series` | Iwasawa model, intertwiners, unitarity ranges, reducibility points |
| RG-30 | `sl2-r-discrete-series-and-unitary-dual` | lowest/highest weights, limits, classification and tempered boundary |

**Finite/infinite balance.**  RG-1–RG-17 develop finite-group theory above the
four abstract-algebra and three modular group-theory entry pages.  RG-18–RG-30
develop genuinely topological and locally compact theory, not merely finite
character theory with an appendix.  The infinite half carries the longer
foundational pages and the set-theoretic ledger.

**Source corpus.**  The complete-text and canonical-coverage record is in §10,
the pair-by-pair two-treatment matrix in §11, and the heading-to-item crosswalk
in §12.  Exact verified measurements are in §14.

**Seams consumed.**  The named abstract-algebra, group-theory,
differential-geometry, Fourier-analysis, functional-analysis, measure-theory,
and `RL-n` interfaces are recorded in §2.  Empty `items` arrays remain planned,
not published dependencies; a future builder must wait for them and resolve
their actual item ids.

**Seams owed.**  §9 records the required amendment to the concurrent Fourier
scaffold: FR-14/FR-15 may use Haar measure only after RG-18, while later RG
pages cite FR-14/FR-15 for the abelian specialization.  It also records the
`RL-n` anchor and the compact-Lie/general-compact agreement with differential
geometry.

**Generated claims.**  None.  Every proposed mathematical statement and every
proof plan is literature-derived.  No `ai-generated` statement or
construction occurs, hence none can become a dependency target.

**Blockers.**  None.  The relative labels `RL-n` and `FR-n` are intentionally
unresolved concurrent interfaces, not guessed page ids and not blockers.

---

## 1. Why this track exists

The live plan names four introductory representation pages in abstract algebra,
but their `items` arrays are empty.  Their prose scaffold covers the group
algebra/action dictionary, Maschke and semisimplicity, ordinary character
orthogonality, and finite induction with Frobenius reciprocity.  Those results
are prerequisites for this track; they are not re-authored here.  In
particular, neither character orthogonality nor Frobenius reciprocity receives
a new RG item.

Group theory likewise reserves the modular entry pages
`modular-representations-and-projective-covers` and
`brauer-characters-and-decomposition-matrices`.  They introduce a splitting
$p$-modular system, projective covers, relative projectivity, vertices and
sources, Brauer characters, decomposition matrices, and primitive central
block idempotents.  RG-14–RG-17 start where those pages stop: Brauer
homomorphisms and pairs, defect groups, Green correspondence, and the two main
theorems.  `the-finite-simple-group-classification-landscape` supplies only
orientation and is never used as a proof.

The infinite half is needed because algebraic representations do not by
themselves encode continuity, invariant integration, Hilbert-space
decomposition, or the pathologies of non-type-I duals.  RG-18 proves Haar
existence rather than assuming it; RG-23 includes the modular-density factor in
unitary induction; RG-26 distinguishes decomposition into factors from the
essentially unique irreducible decomposition available for type I groups; and
RG-29–RG-30 work out a noncompact nonabelian group.

The result is one dependency-closed route from finite induction and modular
blocks to noncommutative harmonic analysis.  Its B pages are leaves: they test
hypotheses, calculate small examples, and exhibit failures, but no A-page proof
depends on them.

---

## 2. Exact inherited and reserved boundary

At build time every row with an empty live `items` array must first be authored,
then every page-level citation below must be replaced by the actual item ids.
No planned page is misreported as published.

| page or relative seam | exact interface used here |
|---|---|
| `the-group-algebra-and-representations` | finite-dimensional representations, intertwiners, subrepresentations, irreducibility, group algebra/modules, ordinary Schur lemma |
| `maschkes-theorem-and-complete-reducibility` | Maschke over characteristic prime to $|G|$, complete reducibility, Wedderburn decomposition |
| `characters-and-the-orthogonality-relations` | complex characters, class functions, ordinary row/column orthogonality, multiplicity inner product |
| `induced-representations-and-frobenius-reciprocity` | finite induction, restriction, Frobenius reciprocity, finite Mackey formula/criterion and the virtual character ring |
| `modular-representations-and-projective-covers` | fixed splitting $p$-modular system $(K,\mathcal O,k)$, projective covers, relative projectivity, Higman's criterion, definitions/existence/conjugacy of vertices and sources |
| `brauer-characters-and-decomposition-matrices` | $p$-regular elements, Brauer characters, decomposition map/matrix, Cartan matrix, primitive central block idempotents |
| `the-finite-simple-group-classification-landscape` | orientation only; no classification theorem is used in a proof |
| `compact-lie-groups-maximal-tori-and-peter-weyl-theory` | compact **Lie** examples, maximal tori and Weyl integration; RG-21/RG-22 prove the general compact Hausdorff group statements and cite the DG page for agreement, not for their proofs |
| `banach-algebras-spectrum-and-holomorphic-functional-calculus` | Banach algebra spectrum and functional calculus, cited rather than rebuilt |
| `gelfand-theory-and-commutative-c-star-algebras` | commutative $C^*$-algebra/Gelfand theory, used for abelian comparisons and not generalized here |
| `spectral-measures-and-borel-functional-calculus` | projection-valued measures and Borel functional calculus, used by imprimitivity/direct integrals |
| `unbounded-self-adjoint-operators-and-stones-theorem` | Stone's theorem and unbounded self-adjoint spectral theory, used only for one-parameter subgroup orientation |
| `compact-operators-and-riesz-schauder-theory` and `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators` | compact/Hilbert–Schmidt/trace-class operator facts used in compact-group coefficient proofs |
| measure theory's integration, product measure, Radon measure/RMK, and disintegration pages | scalar integration and regular measures; RG proves invariant group structure, not measure theory anew |
| `FR-14` | Pontryagin duality for locally compact abelian groups; cited only after RG-18 and never reproduced |
| `FR-15` | Bochner, inversion and Plancherel on LCA groups; cited as the commutative specialization of RG-20/RG-25/RG-26 |
| `RL-n` | binding predecessor and Lie-algebra interface; RG-29/RG-30 may differentiate a strongly continuous Lie-group representation only through the actual last RL page once resolved |

---

## 3. Deliberately not in this track

| material not minted | ruling and result-specific reason |
|---|---|
| ordinary character orthogonality | Abstract algebra owns `characters-and-the-orthogonality-relations`; RG induction proofs cite it. |
| finite-group Frobenius reciprocity and the finite Mackey formula | Abstract algebra owns `induced-representations-and-frobenius-reciprocity`; only locally compact unitary induction and imprimitivity are new here. |
| definitions/existence of modular vertices and sources | Already assigned to `modular-representations-and-projective-covers`; RG-15 begins with Green's theorem above those definitions. |
| Brauer characters, decomposition matrices and the block-idempotent partition | Already assigned to `brauer-characters-and-decomposition-matrices`; RG-14 cites them. |
| the finite simple-group classification | Group theory owns the landscape page; no classification result is needed for the commissioned representation theory. |
| maximal tori, Weyl integration, and Lie-specific Peter–Weyl | Differential geometry owns them.  RG-22 proves Peter–Weyl for arbitrary compact Hausdorff groups by convolution/matrix-coefficient methods. |
| Pontryagin duality and LCA Fourier inversion/Plancherel | FR-14/FR-15 own the abelian theory.  RG defines the noncommutative dual and explains why it is not generally a group. |
| the spectral theorem, PVM integration, unbounded self-adjoint theory, compact-operator spectral theory | Functional analysis owns the named pages; RG consumes them. |
| Deligne–Lusztig theory and the classification of all irreducibles of $GL_n(\mathbb F_q)$ | The commission asks at least through principal series.  Deligne–Lusztig varieties require étale cohomology and algebraic geometry not yet available. |
| modular representation type, support varieties, fusion systems and derived block equivalences | These are substantial successor theories.  They are not needed to prove defects, Green correspondence, or Brauer's main theorems. |
| modular Specht-module decomposition numbers | RG-8–RG-11 work in characteristic zero; the modular symmetric-group theory would require its own block/decomposition program and is not used downstream. |
| general reductive real groups, Harish–Chandra characters and Plancherel formula | RG-29/RG-30 deliberately work one concrete noncompact group.  The general theory requires distributions, real reductive structure and a much larger analytic track. |
| representations of locally compact quantum groups, groupoids, loop groups and infinite symmetric groups | Each changes the basic object and requires independent infrastructure; none is a prerequisite of the stated commission. |
| full proof of the Glimm dichotomy beyond the type-I criterion used here | RG-26 proves the decomposition statements needed for groups and states the source-backed criterion; descriptive-set-theoretic refinements beyond standard Borel smoothness remain outside scope. |

---

## 4. Page, notation, and provenance conventions

Every A page is proof-first and has fewer than sixty mathematical rows.  Every
B page is a dependency leaf.  A future page summary must meet the two-paragraph
contract in `CLAUDE.md`; this scaffold does not pre-author those summaries.

Every item table below has separate `statement provenance` and `proof
provenance` columns and uses only SCHEMA §3 values.  Definitions use
`literature-derived` / `not-applicable`; proved statements and worked examples
use `literature-derived` / `literature-derived`.  There are no AI-generated
statements, proofs, examples, or constructions.  A source is allowed to be
translated into the track's notation without changing any quantifier,
hypothesis, direction, or conclusion; such translation remains
literature-derived rather than a new assertion.

Finite ordinary representations and characters are over $\mathbb C$ unless a
field is named.  Modular pages use the inherited splitting $p$-modular system
$(K,\mathcal O,k)$ and the convention that a block means a primitive central
idempotent/summand.  Locally compact groups are Hausdorff.  From RG-23 onward,
the measure-theoretic decomposition theorems assume second countability and
separable Hilbert spaces whenever standard-Borel selection is used; the wider
locally compact statement is not silently claimed.

Hilbert inner products are linear in the first variable.  A unitary
representation is strongly continuous.  Left Haar measure is denoted $\mu$,
and the modular function is fixed by
\[
  \int_G f(xg)\,d\mu(x)=\Delta_G(g)^{-1}\int_G f(x)\,d\mu(x).
\]
Thus $f^*(x)=\Delta_G(x^{-1})\overline{f(x^{-1})}$ in $L^1(G)$, and the right
regular representation on $L^2(G,\mu)$ carries the factor
$\Delta_G(g)^{1/2}$.  Sources using the reciprocal modular convention are
translated consistently; §8 audits the disagreement.

For $SL_2(\mathbb R)$, $K=SO(2)$, $G=KAN$ is the Iwasawa convention, and
normalized induction includes the square root of the modular character.  The
principal/complementary parameter is always defined in the relevant item; no
bare symbol $s$, $\nu$, or $\lambda$ is assumed to agree between sources.

---

## 5. The A/B pairs

### RG-1 — Artin induction and rational characters

**A page:** `artin-induction-and-rational-characters`

**Requires:** the four abstract-algebra representation pages in §2, especially
ordinary character orthogonality and finite induction.  No orthogonality or
Frobenius-reciprocity item is repeated.

**Source backing read:** Tammo tom Dieck, *Representation Theory*, §4.5,
printed pp. 61–63 (*Cyclic Induction*); János Kramár, *Artin and Brauer
Induction Theorems*, §§1–2, pp. 1–4 (*Preliminaries*; *Artin's Theorem*).

| item id (kind) | statement | what it is for | statement provenance | proof provenance |
|---|---|---|---|---|
| `def-rational-character-ring` (definition) | $R_{\mathbb Q}(G)$ is the subgroup of the complex representation ring generated by characters realizable over $\mathbb Q$, with rational virtual characters distinguished from merely rational-valued class functions. | Prevents the two meanings of “rational character” from being conflated in Artin's theorem. | literature-derived | not-applicable |
| `def-cyclic-induction-subgroup` (definition) | The cyclic induction subgroup is the subgroup of $R(G)$ generated by $\operatorname{Ind}_C^G\lambda$ with $C\le G$ cyclic and $\lambda$ a character of $C$. | Names the target of the induction relation. | literature-derived | not-applicable |
| `lem-induction-image-is-an-ideal-in-the-representation-ring` (lemma) | The sum of induction images from a conjugacy-stable family of subgroups is an ideal of $R(G)$. | Supplies the projection-formula step without re-proving reciprocity. | literature-derived | literature-derived |
| `lem-cyclic-generator-class-functions-by-moebius-inversion` (lemma) | Möbius inversion expresses the indicator of generators of a cyclic subgroup in terms of subgroup indicators. | Isolates the arithmetic calculation inside Artin's proof. | literature-derived | literature-derived |
| `lem-artin-cyclic-permutation-relation` (lemma) | A positive integer multiple of the trivial character is an integral combination of characters induced from trivial characters of cyclic subgroups. | Produces the denominator-clearing relation consumed by Artin induction. | literature-derived | literature-derived |
| `thm-artin-induction-for-rational-characters` (theorem) | Every rational character of a finite group is a rational linear combination of characters induced from cyclic subgroups; equivalently a controlled integer multiple lies in the cyclic induction subgroup. | Gives the finite rational induction theorem requested by the commission. | literature-derived | literature-derived |
| `cor-cyclic-fixed-points-detect-rational-representations` (corollary) | A rational virtual character is determined by the dimensions of its fixed spaces for cyclic subgroups. | Turns the theorem into a usable detection principle. | literature-derived | literature-derived |
| `cor-rank-of-the-rational-representation-ring` (corollary) | The rank is the number of conjugacy classes of cyclic subgroups, in the precise rational-representation sense of the source. | Records the structural numerical consequence rather than hiding it in Artin's proof. | literature-derived | literature-derived |
| `cor-cyclic-local-integrality-criterion` (corollary) | A rational virtual character is integral when all cyclic restrictions are integral. | Prepares the stronger elementary-subgroup criterion on RG-2. | literature-derived | literature-derived |

**Hard proof plan.**  Work in the Burnside/representation ring only through
the existing induction and character maps.  For each cyclic subgroup, isolate
its generators by Möbius inversion; sum over conjugacy classes; evaluate at an
element through its generated cyclic subgroup; then use the ideal lemma to
multiply an arbitrary rational character by the trivial-character relation.
Keep “rational-valued” separate from “realizable over $\mathbb Q$” throughout.

**B page:** `artin-induction-and-rational-characters-examples`

| item id (kind) | statement | what it is for | statement provenance | proof provenance |
|---|---|---|---|---|
| `ex-artin-induction-for-a-cyclic-group` (example) | Artin induction for $G=C_n$ reduces to the identity summand, including $n=1$. | Checks the degenerate cyclic boundary. | literature-derived | literature-derived |
| `ex-artin-permutation-relation-for-a5` (example) | Compute tom Dieck's explicit relation for a multiple of $1_{A_5}$. | Shows why denominators genuinely occur. | literature-derived | literature-derived |
| `ex-cyclic-fixed-point-detection-for-s3` (example) | Recover a rational virtual character of $S_3$ from fixed-space dimensions. | Makes the detection corollary finite and checkable. | literature-derived | literature-derived |
| `cex-rational-valued-character-need-not-be-defined-over-the-rationals` (counterexample) | The faithful irreducible character of $Q_8$ is rational-valued but has Schur index two over $\mathbb Q$. | Protects RG-1's convention and motivates RG-3. | literature-derived | literature-derived |

### RG-2 — Brauer induction and elementary subgroups

**A page:** `brauer-induction-and-elementary-subgroups`

**Requires:** RG-1; the four abstract-algebra representation pages.

**Source backing read:** Wen-Wei Li, *Yanqi Lake Lectures on Algebra I*,
Lecture 14 §§14.1–14.4, printed pp. 159–166 (PDF pp. 165–172); János
Kramár, §§1 and 3, pp. 1–2 and 4–7; independently, tom Dieck §4.6,
printed pp. 63–66, was used to check terminology and the local-integrality
consequences.

| item id (kind) | statement | what it is for | statement provenance | proof provenance |
|---|---|---|---|---|
| `def-p-elementary-and-p-hyperelementary-finite-groups` (definition) | A $p$-elementary group is $C\times P$ with $C$ cyclic of order prime to $p$ and $P$ a $p$-group; a $p$-hyperelementary group is $C\rtimes P$. | Fixes the elementary/quasi-elementary terminology before the theorem. | literature-derived | not-applicable |
| `lem-elementary-and-hyperelementary-subgroups-are-subgroup-closed` (lemma) | Subgroups remain of the corresponding type. | Makes induction on subgroups legal. | literature-derived | literature-derived |
| `def-induction-ideal-of-a-family-of-subgroups` (definition) | The induction ideal is the sum of their induction images in $R(G)$. | Packages the ring-theoretic target used in Brauer's proof. | literature-derived | not-applicable |
| `lem-p-primary-character-value-congruence` (lemma) | Character values at the $p$-part/$p'$-part decomposition satisfy the congruence used to localize at $p$. | Isolates the number-theoretic step. | literature-derived | literature-derived |
| `lem-hyperelementary-permutation-subring-reduction` (lemma) | The relevant permutation relation for a hyperelementary group reduces to elementary subgroups after localization at $p$. | Splits the group-theoretic reduction from the character argument. | literature-derived | literature-derived |
| `lem-banaschewski-prime-obstruction` (lemma) | A proper induction ideal misses the unit modulo a maximal ideal lying over a prime. | Selects the prime that drives the contradiction proof. | literature-derived | literature-derived |
| `lem-elementary-detection-at-a-fixed-element` (lemma) | After choosing the prime, an element is detected inside a suitable elementary subgroup. | Connects the local congruence to subgroup induction. | literature-derived | literature-derived |
| `lem-isaacs-linear-character-step` (lemma) | The localized class function required in Brauer's argument is induced from a linear character of an elementary subgroup. | Extracts the final hard local step rather than burying it. | literature-derived | literature-derived |
| `thm-brauer-induction` (theorem) | Every complex virtual character of a finite group is an integral linear combination of characters induced from linear characters of elementary subgroups. | Gives the requested integral induction theorem without re-minting reciprocity. | literature-derived | literature-derived |
| `cor-elementary-restriction-detects-generalized-characters` (corollary) | Restriction to all elementary subgroups is injective on generalized characters. | Provides the detection form used in later finite arguments. | literature-derived | literature-derived |
| `cor-elementary-local-integrality-criterion` (corollary) | A rational class function satisfying the source hypotheses is a generalized character iff all elementary restrictions are. | Records the practical integrality test. | literature-derived | literature-derived |
| `cor-cyclotomic-field-splits-a-finite-group` (corollary) | A cyclotomic field containing the needed $|G|$-th roots of unity is a splitting field for $G$. | Supplies an explicit field for RG-3 without choosing an algebraic closure. | literature-derived | literature-derived |

**Hard proof plan.**  Do not rely on tom Dieck's unproved hyperelementary
permutation relation.  Follow Li/Kramár: show the induction image is an ideal,
assume it misses the unit, choose a maximal ideal and its residue
characteristic, reduce to a $p$-local obstruction, apply the elementary
subgroup/linear-character lemmas, and contradict maximality.  The existing
finite induction page supplies every use of the projection formula and
Frobenius reciprocity.

**B page:** `brauer-induction-and-elementary-subgroups-examples`

| item id (kind) | statement | what it is for | statement provenance | proof provenance |
|---|---|---|---|---|
| `ex-elementary-and-hyperelementary-small-groups` (example) | Classify the relevant types among $C_{pq}$, $S_3$, $D_{2p}$ and a small nontrivial semidirect product. | Tests both definitions and the direct/semidirect distinction. | literature-derived | literature-derived |
| `ex-brauer-induction-for-s3` (example) | Give an explicit integral induction expression for each irreducible character of $S_3$. | Shows the theorem has no rational coefficients. | literature-derived | literature-derived |
| `ex-trivial-factors-in-an-elementary-group` (example) | Treat $C=1$, $P=1$, and the trivial group explicitly. | Closes degenerate-factor cases. | literature-derived | literature-derived |
| `cex-cyclic-subgroups-do-not-give-integral-induction-in-general` (counterexample) | Exhibit a finite group/character for which Artin's cyclic expression requires a denominator. | Demonstrates why RG-2 is stronger than RG-1. | literature-derived | literature-derived |

### RG-3 — Schur indices and fields of definition

**A page:** `schur-indices-and-fields-of-definition`

**Requires:** RG-2; finite-dimensional semisimple algebra from the abstract
algebra pages; the field-theory pages actually authored before build time.

**Source backing read:** Gabor Wiese, *Galois Representations*, §§2.2, 2.3
and 2.5, pp. 26–40 (*Scalar extensions*; *Splitting fields*; *Definability of
Galois representations*); Weizhe Zheng, *Lectures on Algebra*, §4.3,
printed pp. 145–151, especially Proposition 4.3.2 and Corollaries 4.3.3–4.3.4,
and Propositions 4.6.14–4.6.15, pp. 170–171.  Isaacs Chapters 9–10 remain a
canonical reference but were not counted because their host did not deliver a
complete readable text.

| item id (kind) | statement | what it is for | statement provenance | proof provenance |
|---|---|---|---|---|
| `def-character-field-and-field-of-definition` (definition) | Define the field generated by character values and a field over which an equivalent matrix representation is realizable. | Prevents a value field from being assumed a realization field. | literature-derived | not-applicable |
| `def-splitting-field-for-a-finite-group` (definition) | A field is splitting when every irreducible becomes absolutely irreducible and all simples are realized over it. | States the base-change environment used below. | literature-derived | not-applicable |
| `def-galois-conjugate-representation` (definition) | Apply a field automorphism entrywise to a matrix realization/scalar extension. | Makes the Galois action on irreducibles explicit. | literature-derived | not-applicable |
| `lem-galois-conjugates-have-equal-scalar-extension-multiplicity` (lemma) | Conjugate absolutely irreducible constituents occur with equal multiplicity. | Controls the orbit decomposition after scalar extension. | literature-derived | literature-derived |
| `thm-scalar-extension-of-an-irreducible-finite-group-representation` (theorem) | Over a splitting extension, an irreducible representation decomposes as one Galois orbit with a common multiplicity. | Supplies the representation-theoretic definition of Schur index. | literature-derived | literature-derived |
| `lem-character-field-is-the-stabilizer-fixed-field` (lemma) | The stabilizer of an absolutely irreducible character has fixed field equal to its character field. | Connects character values to Galois descent. | literature-derived | literature-derived |
| `def-endomorphism-division-algebra-of-an-irreducible` (definition) | The endomorphism ring of an irreducible over its base field is a division algebra. | Introduces the algebraic invariant that measures descent failure. | literature-derived | not-applicable |
| `thm-absolute-irreducibility-via-the-endomorphism-division-algebra` (theorem) | Under the stated finite-dimensional hypotheses, absolute irreducibility is equivalent to the endomorphism division algebra being the base field. | Detects when scalar extension remains irreducible. | literature-derived | literature-derived |
| `def-schur-index-of-an-irreducible-character` (definition) | The Schur index is the common multiplicity in scalar extension over a splitting field. | Fixes the representation-theoretic convention. | literature-derived | not-applicable |
| `lem-schur-index-is-independent-of-the-chosen-splitting-field` (lemma) | The common multiplicity is unchanged after enlarging the splitting field. | Proves the definition is well defined. | literature-derived | literature-derived |
| `thm-character-of-an-irreducible-over-a-nonsplitting-field` (theorem) | The character is the Schur index times the sum of the Galois orbit of an absolutely irreducible character. | Gives the exact character formula over the smaller field. | literature-derived | literature-derived |
| `cor-schur-index-divides-the-representation-degree` (corollary) | The standard degree and field-degree divisibilities follow from the scalar-extension formula. | Provides cheap arithmetic constraints used in examples. | literature-derived | literature-derived |
| `def-index-of-a-central-division-algebra` (definition) | The index is the square root of the dimension over the center, equivalently the degree of a maximal splitting field in the stated finite-dimensional setting. | States the alternative convention found in algebra sources. | literature-derived | not-applicable |
| `thm-schur-index-equals-division-algebra-index` (theorem) | The representation-theoretic Schur index equals the index of the associated central division algebra. | Reconciles the two standard definitions. | literature-derived | literature-derived |
| `thm-schur-index-as-minimal-realization-multiplicity` (theorem) | The index is the least positive multiplicity of the character realizable over its character field, under the source's hypotheses. | Turns the invariant into the fields-of-definition criterion. | literature-derived | literature-derived |

**Hard proof plan.**  Base-change Hom spaces, apply semisimplicity, organize
constituents into a Galois orbit, and identify the common multiplicity through
the endomorphism division algebra.  Prove independence before using the word
“the.”  RG-2's explicit cyclotomic splitting field avoids any hidden choice of
an algebraic closure in the finite construction.  Do not make the
Frobenius–Schur indicator a dependency for the general rational index.

**B page:** `schur-indices-and-fields-of-definition-examples`

| item id (kind) | statement | what it is for | statement provenance | proof provenance |
|---|---|---|---|---|
| `ex-galois-conjugate-characters-of-c3` (example) | The two nontrivial complex characters combine into one irreducible rational representation. | Displays a nontrivial orbit with index one. | literature-derived | literature-derived |
| `ex-s3-is-split-over-the-rationals` (example) | Construct rational models for every irreducible of $S_3$. | Separates splitting from algebraic closure. | literature-derived | literature-derived |
| `ex-quaternion-character-has-schur-index-two` (example) | The faithful degree-two character of $Q_8$ is rational-valued but its rational representation has multiplicity two after complexification. | Gives the canonical field-of-values/definition failure. | literature-derived | literature-derived |
| `ex-trivial-character-has-schur-index-one` (example) | Verify all definitions for the trivial group and trivial character. | Closes the zero-complexity boundary. | literature-derived | literature-derived |

### RG-4 — Clifford theory over a normal subgroup

**A page:** `clifford-theory-over-normal-subgroups`

**Requires:** the abstract-algebra representation pages; RG-3 only for a
non-load-bearing field-of-definition remark.

**Source backing read:** Britta Späth, *Clifford theory via projective
representations*, §1.A, printed pp. 2–4; tom Dieck, §4.2, printed pp. 53–56
(*Restriction to Normal Subgroups*).

| item id (kind) | statement | what it is for | statement provenance | proof provenance |
|---|---|---|---|---|
| `def-conjugate-representation-and-inertia-group` (definition) | For $N\trianglelefteq G$, define the chosen left conjugation action on $\operatorname{Irr}(N)$ and its stabilizer $I_G(\theta)$. | Fixes the action convention and the subgroup driving Clifford theory. | literature-derived | not-applicable |
| `lem-restriction-to-a-normal-subgroup-is-semisimple` (lemma) | The restriction of a complex finite-group representation to $N$ is semisimple. | Allows isotypical decomposition without rebuilding Maschke. | literature-derived | literature-derived |
| `lem-normal-restriction-constituents-form-one-conjugacy-orbit` (lemma) | The irreducible constituents of the restriction of an irreducible $G$-module form one $G$-orbit and have equal multiplicity. | Isolates the orbit/equal-multiplicity half of Clifford's theorem. | literature-derived | literature-derived |
| `thm-clifford-homogeneous-restriction-formula` (theorem) | $\operatorname{Res}^G_N\chi=e\sum_{g\in G/I_G(\theta)}\theta^g$ for a positive ramification index $e$. | Gives the exact restriction formula used later. | literature-derived | literature-derived |
| `def-clifford-ramification-index` (definition) | The common multiplicity $e$ is the ramification index of $\chi$ over $\theta$. | Names a parameter used by projective extension theory. | literature-derived | not-applicable |
| `lem-normal-isotypical-component-is-inertia-stable` (lemma) | The $\theta$-isotypical component is stable exactly under $I_G(\theta)$. | Constructs the inertia-group representation. | literature-derived | literature-derived |
| `lem-induction-from-the-inertia-group-recovers-the-module` (lemma) | Inducing that isotypical component to $G$ recovers the original irreducible module. | Supplies the hard reconstruction step. | literature-derived | literature-derived |
| `thm-clifford-correspondence` (theorem) | Irreducibles of $I_G(\theta)$ lying over $\theta$ correspond bijectively by induction to irreducibles of $G$ lying over its orbit. | Makes the correspondence reusable rather than a clause of one theorem. | literature-derived | literature-derived |
| `cor-normal-subgroup-induction-irreducibility-criterion` (corollary) | The inertia-group formulation gives the precise criterion for the induced representation to be irreducible. | Feeds the little-group method on RG-5. | literature-derived | literature-derived |
| `thm-gallagher-correspondence-for-an-extendible-character` (theorem) | If $\theta$ extends to its inertia group, tensoring an extension with inflated quotient irreducibles parametrizes the irreducibles above $\theta$. | Gives the unobstructed case before projective factors. | literature-derived | literature-derived |

**Hard proof plan.**  Take one irreducible $N$-constituent, form its isotypical
component, prove its stabilizer is precisely the inertia group, and identify
the distinct translates as the other isotypical components.  The direct-sum
map from the induced module is checked to be $G$-equivariant and bijective
before irreducibility.  Both directions of the Clifford correspondence are
proved, including $N=1$, $N=G$, inertia $N$, and inertia $G$.

**B page:** `clifford-theory-over-normal-subgroups-examples`

| item id (kind) | statement | what it is for | statement provenance | proof provenance |
|---|---|---|---|---|
| `ex-clifford-theory-for-s3-over-a3` (example) | Compute orbits, inertia groups and induced irreducibles for $A_3\trianglelefteq S_3$. | Runs every definition in the smallest nontrivial case. | literature-derived | literature-derived |
| `ex-gallagher-correspondence-for-a-direct-product` (example) | For $G=N\times Q$, extensions and quotient tensor factors give all irreducibles above $\theta$. | Shows the unobstructed correspondence transparently. | literature-derived | literature-derived |
| `ex-clifford-boundaries-n-equals-one-and-n-equals-g` (example) | Verify the restriction formula and correspondence at both extreme normal subgroups. | Closes degenerate cases future proofs otherwise skip. | literature-derived | literature-derived |
| `cex-normal-restriction-of-an-irreducible-need-not-be-irreducible` (counterexample) | The standard representation of $S_3$ restricts reducibly to $A_3$. | Shows why homogeneity, not irreducibility, is the theorem. | literature-derived | literature-derived |

### RG-5 — Projective extensions and the little-group method

**A page:** `projective-extensions-and-the-little-group-method`

**Requires:** RG-4; group extensions and quotient groups from abstract algebra.
General Schur multipliers and universal central extensions are not required.

**Source backing read:** Späth §1.A–§1.B, printed pp. 2–6; tom Dieck
§4.2.5–§4.2.7, printed pp. 55–56.  Späth's projective Clifford theorem cites
Navarro/Navarro–Tiep for its full proof; the scaffold therefore decomposes the
cocycle and linearization argument explicitly instead of claiming the displayed
source proves it in one step.

| item id (kind) | statement | what it is for | statement provenance | proof provenance |
|---|---|---|---|---|
| `def-extension-of-an-invariant-irreducible-representation` (definition) | An extension of an invariant irreducible $N$-module is a representation of its inertia group restricting to the given module. | States the lifting problem. | literature-derived | not-applicable |
| `def-projective-representation-and-factor-set` (definition) | $P(g)P(h)=\alpha(g,h)P(gh)$ with normalized scalar factor set $\alpha$. | Introduces the replacement when a linear extension fails. | literature-derived | not-applicable |
| `lem-factor-set-is-a-normalized-two-cocycle` (lemma) | Associativity gives the cocycle identity and normalization at the identity. | Proves the multiplier has the claimed structure. | literature-derived | literature-derived |
| `lem-rephasing-changes-the-factor-set-by-a-coboundary` (lemma) | Replacing $P(g)$ by $c(g)P(g)$ changes $\alpha$ by the corresponding coboundary. | Makes the obstruction class choice-independent. | literature-derived | literature-derived |
| `def-twisted-group-algebra-for-a-factor-set` (definition) | $\mathbb C^\alpha[Q]$ has basis $u_q$ and product $u_qu_r=\alpha(q,r)u_{qr}$. | Turns projective representations into ordinary modules over an algebra. | literature-derived | not-applicable |
| `lem-projective-representations-are-twisted-group-algebra-modules` (lemma) | Projective representations with factor set $\alpha$ are exactly modules over $\mathbb C^\alpha[Q]$. | Supplies semisimple algebra tools for the projective theory. | literature-derived | literature-derived |
| `lem-invariant-irrep-produces-a-projective-inertia-extension` (lemma) | Chosen intertwiners for an invariant irreducible $N$-module define a projective representation of the inertia quotient. | Constructs the Clifford obstruction. | literature-derived | literature-derived |
| `def-clifford-obstruction-class` (definition) | The coboundary class of that factor set is the obstruction in $H^2(I/N,\mathbb C^\times)$. | Names only the cohomology class actually needed here. | literature-derived | not-applicable |
| `thm-extension-exists-iff-the-clifford-obstruction-vanishes` (theorem) | A linear extension exists exactly when the factor set can be killed by rephasing. | Solves the extension problem in both directions. | literature-derived | literature-derived |
| `lem-cocycle-central-extension-is-a-group` (lemma) | The multiplication $(q,a)(r,b)=(qr,\alpha(q,r)ab)$ is associative with the stated identity and inverse. | Makes linearization well defined rather than invoking a black box. | literature-derived | literature-derived |
| `lem-central-extension-linearizes-a-projective-representation` (lemma) | A projective representation of $Q$ with factor set $\alpha$ lifts to an ordinary representation of the cocycle central extension with prescribed central character. | Provides the concrete proof device. | literature-derived | literature-derived |
| `thm-projective-clifford-correspondence` (theorem) | Irreducibles above an invariant $N$-type correspond to irreducible projective representations of the inertia quotient with inverse factor set. | Handles the obstructed form of RG-4. | literature-derived | literature-derived |
| `thm-little-group-method-for-a-split-abelian-normal-subgroup` (theorem) | For $G=A\rtimes H$ with finite abelian $A$, irreducibles are induced from stabilizers of characters of $A$, with the precise extension/projective correction. | Delivers the extension representation theory requested in the commission. | literature-derived | literature-derived |

**Hard proof plan.**  Normalize the selected intertwiners at the identity,
derive the cocycle identity from associativity, prove the cohomology class does
not depend on the choices, and prove both directions of the vanishing
criterion.  In the projective correspondence, the quotient projective factor
must be $\alpha^{-1}$ so the tensor product is linear.  Treat trivial quotient,
trivial cocycle and full inertia explicitly.

**B page:** `projective-extensions-and-the-little-group-method-examples`

| item id (kind) | statement | what it is for | statement provenance | proof provenance |
|---|---|---|---|---|
| `ex-q8-as-a-central-extension-of-c2-times-c2` (example) | Realize the faithful $Q_8$ representation as a linearization of a projective representation of $C_2\times C_2$. | Computes a nontrivial factor set. | literature-derived | literature-derived |
| `cex-invariant-character-need-not-extend-linearly` (counterexample) | The nontrivial character of $Z(Q_8)$ is invariant but has no linear extension to $Q_8$. | Shows the obstruction is necessary. | literature-derived | literature-derived |
| `ex-little-groups-for-a-finite-dihedral-group` (example) | Classify irreducibles of $C_n\rtimes C_2$ from orbits in $\widehat{C_n}$. | Gives a complete small little-group calculation. | literature-derived | literature-derived |
| `ex-coboundary-rephasing-of-a-projective-representation` (example) | Compute two cohomologous factor sets from two choices of lifts. | Verifies choice-independence concretely. | literature-derived | literature-derived |

### RG-6 — Monomial characters and M-groups

**A page:** `monomial-characters-and-m-groups`

**Requires:** RG-2, RG-4; ordinary induction from abstract algebra.

**Source backing read:** tom Dieck §4.3, printed pp. 57–58, together with
§4.6.3–§4.6.7, pp. 64–65; Li §12.5, printed pp. 146–148, and §14.3,
printed pp. 161–165.

| item id (kind) | statement | what it is for | statement provenance | proof provenance |
|---|---|---|---|---|
| `def-monomial-representation-and-m-group` (definition) | A monomial representation is induced from a one-dimensional representation; an M-group has every irreducible monomial. | Separates an object-level property from Brauer's virtual-character theorem. | literature-derived | not-applicable |
| `lem-monomial-representation-has-a-monomial-matrix-model` (lemma) | A coset basis gives matrices with exactly one nonzero entry in each row and column. | Justifies the name and provides a computational model. | literature-derived | literature-derived |
| `lem-faithful-irrep-with-a-noncentral-abelian-normal-subgroup-is-properly-induced` (lemma) | Such an irreducible is induced from the inertia group of a nontrivial normal character. | Supplies the inductive step via Clifford theory. | literature-derived | literature-derived |
| `lem-nonabelian-supersolvable-group-has-the-required-abelian-normal-subgroup` (lemma) | A nonabelian supersolvable finite group has a normal abelian subgroup not central in the relevant faithful quotient. | Provides the group-theoretic input to the induction. | literature-derived | literature-derived |
| `lem-induction-commutes-with-inflation` (lemma) | Induction from a subgroup containing the kernel agrees with inflation of induction in the quotient. | Allows passage to a faithful quotient. | literature-derived | literature-derived |
| `thm-supersolvable-groups-are-m-groups` (theorem) | Every irreducible character of a finite supersolvable group is monomial. | Gives the positive structural theorem requested. | literature-derived | literature-derived |
| `thm-monomial-induction-for-virtual-characters` (theorem) | Every finite-group virtual character is an integral combination of monomial characters induced from elementary subgroups. | States Brauer's monomial consequence without asserting the group is an M-group. | literature-derived | literature-derived |
| `cor-m-groups-are-solvable` (corollary) | Finite M-groups are solvable, with the exact source hypotheses. | Records the converse-direction structural restriction. | literature-derived | literature-derived |
| `rem-m-group-converses-and-boundary` (remark) | Supersolvable implies M-group and M-group implies solvable, but solvable does not imply M-group. | Prevents an attractive false equivalence. | literature-derived | not-applicable |

**Hard proof plan.**  Induct on $|G|$.  First quotient by the kernel of the
irreducible, then use the supersolvable normal series to obtain the noncentral
abelian normal subgroup.  Apply RG-4 to a constituent of its restriction,
induce from the proper inertia group, and use induction–inflation compatibility.
The monomial virtual-character theorem is cited as a consequence of RG-2, not
used to prove the M-group theorem.

**B page:** `monomial-characters-and-m-groups-examples`

| item id (kind) | statement | what it is for | statement provenance | proof provenance |
|---|---|---|---|---|
| `ex-dihedral-groups-are-m-groups` (example) | Produce every degree-two irreducible of $D_{2n}$ by induction from its cyclic subgroup. | Exercises the little-group/monomial mechanism. | literature-derived | literature-derived |
| `ex-unitriangular-group-of-order-p-cubed-is-an-m-group` (example) | Construct its nonlinear irreducibles from linear characters of a subgroup. | Gives a nonabelian nilpotent example. | literature-derived | literature-derived |
| `cex-solvable-group-need-not-be-an-m-group` (counterexample) | The binary tetrahedral group $Q_8\rtimes C_3$ has a faithful degree-two irreducible that is not monomial. | Proves the boundary remark is substantive. | literature-derived | literature-derived |
| `ex-one-dimensional-and-trivial-monomial-boundaries` (example) | Treat $H=G$, the trivial character, and abelian groups. | Closes degenerate induction cases. | literature-derived | literature-derived |

### RG-7 — Frobenius groups and the normal-complement theorem

**A page:** `frobenius-groups-and-the-normal-complement-theorem`

**Requires:** RG-4; the abstract-algebra character and induction pages; the
group-theory Sylow, commutator and quotient-group pages.  This pair separates
Frobenius's character-theoretic kernel theorem from his local normal
$p$-complement criterion and proves both.

**Source backing read:** Alex Bartel, *Introduction to Representation Theory of
Finite Groups*, §6.1, printed pp. 28–30; David Craven, *Finite Group Theory*,
§1.4, printed pp. 17–20 (PDF pp. 20–23); Paul Flavell, *An Introduction to
Transfer and Fusion in Finite Groups*, §§2–5, PDF pp. 1–15; Hans Kurzweil and
Bernd Stellmacher, *The Theory of Finite Groups*, §§7.1–7.2, printed
pp. 161–171 (PDF pp. 174–183).

| item id (kind) | statement | what it is for | statement provenance | proof provenance |
|---|---|---|---|---|
| `def-frobenius-complement-and-frobenius-group` (definition) | A proper nontrivial $H<G$ is a Frobenius complement when $H\cap H^g=1$ for every $g\notin H$. | Excludes the vacuous $H=1,G$ cases and fixes terminology. | literature-derived | not-applicable |
| `prop-frobenius-permutation-action-characterization` (proposition) | The subgroup condition is equivalent to the transitive coset action in which nonidentity elements fix at most one point. | Connects the subgroup and action definitions. | literature-derived | literature-derived |
| `def-frobenius-kernel-set` (definition) | $N=\{1\}\cup(G\setminus\bigcup_{g\in G}H^g)$. | Names the candidate kernel whose closure is non-obvious. | literature-derived | not-applicable |
| `lem-frobenius-kernel-cardinality` (lemma) | Counting conjugates shows $|N|=[G:H]$ and $N\cap H=1$. | Supplies the order needed after normality. | literature-derived | literature-derived |
| `lem-zero-at-identity-induction-restriction-for-a-frobenius-complement` (lemma) | Inducing a class function on $H$ vanishing at $1$ and restricting back to $H$ recovers it. | Replaces repeated induced-character computations in the proof. | literature-derived | literature-derived |
| `lem-frobenius-character-extension-construction` (lemma) | $\widetilde\varphi=(\varphi-\varphi(1)1_H)^G+\varphi(1)1_G$ restricts as prescribed and vanishes appropriately off conjugates. | Constructs the characters whose kernels detect $N$. | literature-derived | literature-derived |
| `lem-frobenius-character-extension-is-irreducible` (lemma) | For nontrivial $\varphi\in\operatorname{Irr}(H)$, $\widetilde\varphi$ is irreducible. | Extracts the orthogonality calculation from the main theorem. | literature-derived | literature-derived |
| `lem-frobenius-kernel-is-an-intersection-of-character-kernels` (lemma) | The candidate $N$ is the intersection of kernels of a source-specified family of genuine representations. | Proves normality without assuming closure. | literature-derived | literature-derived |
| `thm-frobenius-kernel-theorem` (theorem) | The set $N$ is a normal subgroup of $G$. | Delivers Frobenius's character-theoretic theorem for Frobenius groups. | literature-derived | literature-derived |
| `cor-frobenius-semidirect-product-decomposition` (corollary) | $G=N\rtimes H$ and $N$ is the unique Frobenius kernel for the given action. | Converts normality and counting into group structure. | literature-derived | literature-derived |
| `prop-frobenius-groups-and-fixed-point-free-actions` (proposition) | The complement acts fixed-point-freely on $N\setminus\{1\}$, with the converse under the stated semidirect-product hypotheses. | Provides the form used in examples and later group theory. | literature-derived | literature-derived |
| `def-normal-p-complement-and-p-nilpotent-group` (definition) | A normal $p$-complement is a normal Hall $p'$-subgroup $K\trianglelefteq G$; equivalently $G=K\rtimes P$ for $P\in\operatorname{Syl}_p(G)$. | Fixes which prime is complemented and prevents confusion with a Frobenius complement. | literature-derived | not-applicable |
| `def-transfer-homomorphism-for-a-finite-index-subgroup` (definition) | For $H\le G$ and $\phi:H\to A$ with $A$ abelian, define transfer $\phi^*:G\to A$ by a right-coset transversal product. | Introduces the global map used in both complement proofs. | literature-derived | not-applicable |
| `lem-transfer-is-independent-of-the-transversal` (lemma) | The transfer product is unchanged when the right-coset transversal is replaced. | Proves the construction is well defined. | literature-derived | literature-derived |
| `lem-transfer-is-a-homomorphism` (lemma) | The transfer map $\phi^*:G\to A$ is a group homomorphism. | Makes its kernel a normal subgroup. | literature-derived | literature-derived |
| `lem-transfer-cycle-decomposition-formula` (lemma) | The action of $x$ on $G/H$ expresses $x\phi^*$ as the product of the conjugated cycle powers lying in $H$. | Supplies the calculational engine for surjectivity. | literature-derived | literature-derived |
| `prop-equivalent-forms-of-having-a-normal-p-complement` (proposition) | The source's normal Hall $p'$-subgroup, normal $p'$-subgroup of $p$-power index, Sylow quotient, and closure-of-$p'$-elements formulations are equivalent. | Gives usable algebraic tests and identifies $O_{p'}(G)$. | literature-derived | literature-derived |
| `def-p-residual-of-a-finite-group` (definition) | Define $O^p(G)$ as the intersection of the normal subgroups of $p$-power index, equivalently the least normal subgroup with $p$-group quotient. | Names the subgroup used in the hard fusion-to-global direction. | literature-derived | not-applicable |
| `thm-burnside-normal-p-complement-theorem` (theorem) | If $P\in\operatorname{Syl}_p(G)$ and $P\le Z(N_G(P))$, then $G$ has a normal $p$-complement. | Supplies the transfer lemma used locally in Frobenius's proof. | literature-derived | literature-derived |
| `def-p-local-normalizer-for-normal-complement-theory` (definition) | In this page, a nontrivial $p$-local normalizer means $N_G(Q)$ for $1\ne Q\le P$, with centralizers named separately. | Fixes the family quantified over in Frobenius's theorem and avoids the broader convention that also calls centralizers p-local. | literature-derived | not-applicable |
| `def-control-of-fusion-in-a-sylow-p-subgroup` (definition) | $P$ controls its own fusion when any two elements of $P$ conjugate in $G$ are already conjugate in $P$. | States the local conjugacy condition equivalent to $p$-nilpotence. | literature-derived | not-applicable |
| `lem-normal-p-complements-pass-to-subgroups-and-p-local-normalizers` (lemma) | If $G$ has a normal $p$-complement, then every subgroup and every quotient has one; in particular, every $p$-local normalizer does. | Proves the global-to-local direction. | literature-derived | literature-derived |
| `lem-local-normal-p-complements-force-control-of-fusion` (lemma) | If every nontrivial $p$-local subgroup has a normal $p$-complement, then a Sylow $P$ controls fusion in itself. | Isolates the local-to-fusion direction. | literature-derived | literature-derived |
| `lem-fusion-control-gives-a-nontrivial-p-quotient-of-the-p-residual` (lemma) | If $P$ controls fusion and $K=O^p(G)$ were not a $p'$-group, then for $Q=P\cap K$ transfer $K\to Q/[Q,P]$ is nontrivial, contradicting $O^p(K)=K$. | Extracts the hard fusion-to-global transfer contradiction. | literature-derived | literature-derived |
| `thm-frobenius-normal-p-complement-theorem` (theorem) | For $P\in\operatorname{Syl}_p(G)$, the following are equivalent: $G$ has a normal $p$-complement; every nontrivial $p$-local subgroup has one; and $P$ controls fusion in itself. | Delivers the normal-complement theorem requested in its standard finite-group sense. | literature-derived | literature-derived |
| `cor-frobenius-automizer-criterion-for-p-nilpotence` (corollary) | Equivalently, $G$ is $p$-nilpotent when $N_G(Q)/C_G(Q)$ is a $p$-group for every nontrivial $p$-subgroup $Q\le P$. | Gives the commonly quoted local automizer formulation. | literature-derived | literature-derived |

**Hard proof plan.**  Build genuine irreducible characters from each
nontrivial irreducible of $H$, using the zero-at-identity lemma and the existing
orthogonality relation.  Identify $N$ as an intersection of their kernels, so
normality follows; only then use the counting lemma to obtain
$G=N\rtimes H$.  Do not infer closure of $N$ from its set definition.

For normal $p$-complements, define transfer and prove transversal independence,
the homomorphism law and the cycle formula before using its kernel.  Prove
Burnside's central-normalizer criterion.  Then establish separately global to
local, local to fusion, and fusion to global; the last direction follows
Flavell's $p$-residual transfer contradiction, checked against
Kurzweil–Stellmacher's weak-closure/Grün induction.  Treat $P=1$ and
$Q=1$ explicitly; the automizer criterion quantifies only over nontrivial
$Q$.

**B page:** `frobenius-groups-and-the-normal-complement-theorem-examples`

| item id (kind) | statement | what it is for | statement provenance | proof provenance |
|---|---|---|---|---|
| `ex-s3-as-a-frobenius-group` (example) | $S_3=C_3\rtimes C_2$ with kernel $C_3$ and complement $C_2$. | Gives the smallest nontrivial theorem instance. | literature-derived | literature-derived |
| `ex-affine-linear-frobenius-groups-over-finite-fields` (example) | The affine group $\mathbb F_q\rtimes\mathbb F_q^\times$ is Frobenius. | Provides a uniform infinite family. | literature-derived | literature-derived |
| `cex-a-transitive-action-need-not-be-frobenius` (counterexample) | A transitive action with a nonidentity element fixing two points fails the subgroup condition. | Tests the “at most one” hypothesis. | literature-derived | literature-derived |
| `rem-frobenius-kernel-closure-is-the-content-of-the-theorem` (remark) | The defining fixed-point-free set is not assumed closed under products; closure and normality are conclusions of the theorem. | Prevents the definition from smuggling in the hard step. | literature-derived | not-applicable |
| `ex-frobenius-normal-two-complement-for-s3` (example) | For $p=2$, verify that $A_3$ is the normal $2$-complement and that a Sylow $2$-subgroup controls its own fusion. | Checks all three clauses of the theorem in the smallest case. | literature-derived | literature-derived |
| `cex-cyclic-sylow-does-not-alone-imply-a-normal-p-complement` (counterexample) | In $A_5$ at $p=5$, the Sylow subgroup is cyclic but there is no normal Hall $5'$-subgroup; the missing normalizer/fusion condition is exhibited. | Prevents the cyclic hypothesis from replacing Frobenius's local criterion. | literature-derived | literature-derived |

### RG-8 — Young diagrams, tableaux, and permutation modules

**A page:** `young-diagrams-tableaux-and-permutation-modules`

**Requires:** finite group actions and induction from abstract algebra.  Work is
over $\mathbb C$ once modules appear; the combinatorial definitions include
$n=0$.

**Source backing read:** Charlotte Chan, *Representation Theory of Symmetric
Groups*, §§2–3, pp. 7–13; David Craven, *Groups, Geometries and Representation
Theory*, §§1.4 and 1.6–1.8, pp. 7–18.

| item id (kind) | statement | what it is for | statement provenance | proof provenance |
|---|---|---|---|---|
| `def-partition-young-diagram-and-conjugate-partition` (definition) | Define weakly decreasing partitions, the empty partition, English Young diagrams and conjugation. | Fixes all combinatorial indexing conventions. | literature-derived | not-applicable |
| `def-young-tableau-standard-tableau-and-shape` (definition) | A tableau fills a diagram bijectively; standard means increasing across rows and down columns. | Supplies the bases used throughout the symmetric-group block. | literature-derived | not-applicable |
| `def-removable-and-addable-nodes-of-a-partition` (definition) | Removing/adding the node must still leave a Young diagram. | Prevents a row endpoint from being assumed removable. | literature-derived | not-applicable |
| `lem-largest-entry-of-a-standard-tableau-is-removable` (lemma) | The box containing $n$ is a removable node. | Enables deletion recursion and branching. | literature-derived | literature-derived |
| `def-dominance-order-on-partitions` (definition) | $\lambda\unrhd\mu$ iff every initial row sum of $\lambda$ dominates that of $\mu$. | States the triangular order used by Specht theory. | literature-derived | not-applicable |
| `lem-conjugation-reverses-dominance` (lemma) | $\lambda\unrhd\mu$ iff $\mu'\unrhd\lambda'$. | Keeps row/column transposition formulas consistent. | literature-derived | literature-derived |
| `lem-basic-combinatorial-lemma-for-tableaux` (lemma) | The source's row/column incidence condition forces the corresponding dominance relation. | Isolates the combinatorial engine of the Hom-vanishing theorem. | literature-derived | literature-derived |
| `def-young-subgroup-tabloid-and-permutation-module` (definition) | Define $S_\lambda$, row-equivalence tabloids and $M^\lambda\cong\mathbb C[S_n/S_\lambda]$. | Connects tableaux to induced permutation representations. | literature-derived | not-applicable |
| `lem-young-permutation-module-is-induced-from-the-trivial-character` (lemma) | $M^\lambda\cong\operatorname{Ind}_{S_\lambda}^{S_n}1$. | Reuses the existing finite induction page and prepares Young's rule. | literature-derived | literature-derived |
| `def-row-and-column-stabilizers-of-a-tableau` (definition) | Define $R_t$ and $C_t$ and their conjugation behavior. | Supplies the symmetrizers and antisymmetrizers on RG-9. | literature-derived | not-applicable |
| `lem-tableau-stabilizers-transform-by-conjugation` (lemma) | $R_{\sigma t}=\sigma R_t\sigma^{-1}$ and similarly for columns. | Makes polytabloid covariance well defined. | literature-derived | literature-derived |
| `def-semistandard-tableau-and-kostka-number` (definition) | A semistandard tableau is weak along rows and strict down columns; $K_{\lambda\mu}$ counts those of shape $\lambda$ and content $\mu$. | Prepares the precise multiplicities in Young's rule. | literature-derived | not-applicable |

**Proof and boundary plan.**  Include the empty partition and $S_0$ convention,
and distinguish nodes from arbitrary row endpoints.  The permutation-module
isomorphism sends a coset to a tabloid; prove independence of the chosen
tableau/coset representative before equivariance.  Do not yet assert
irreducibility or the hook formula.

**B page:** `young-diagrams-tableaux-and-permutation-modules-examples`

| item id (kind) | statement | what it is for | statement provenance | proof provenance |
|---|---|---|---|---|
| `ex-partitions-and-dominance-through-size-five` (example) | List dominance, incomparability and conjugation for the source's small partitions. | Tests the partial order rather than treating it as total. | literature-derived | literature-derived |
| `ex-removable-nodes-and-row-endpoints` (example) | Mark the removable nodes of several diagrams, including a row endpoint that is not removable. | Checks the definition's boundary condition. | literature-derived | literature-derived |
| `ex-young-permutation-modules-for-row-and-column-partitions` (example) | Compute $M^{(n)}$ and $M^{(1^n)}$. | Gives the trivial and regular extreme cases. | literature-derived | literature-derived |
| `ex-semistandard-tableaux-and-small-kostka-numbers` (example) | Enumerate the source's first nontrivial semistandard tableaux. | Makes the row-weak/column-strict convention visible. | literature-derived | literature-derived |

### RG-9 — Specht modules and the irreducibles of the symmetric group

**A page:** `specht-modules-and-the-irreducibles-of-the-symmetric-group`

**Requires:** RG-8; Maschke, Schur and the number-of-irreducibles/class-functions
consequences from abstract algebra.

**Source backing read:** Chan §§3–4, pp. 11–19; Craven §§1.6–1.8 and
§2.1, pp. 13–21; Etingof et al., MIT OCW Chapter 4, §§4.12–4.13,
pp. 11–13, was used as an independent construction check.

| item id (kind) | statement | what it is for | statement provenance | proof provenance |
|---|---|---|---|---|
| `def-column-antisymmetrizer-polytabloid-and-specht-module` (definition) | Define $\kappa_t=\sum_{\sigma\in C_t}\operatorname{sgn}(\sigma)\sigma$, $e_t=\kappa_t\{t\}$ and $S^\lambda=\langle e_t\rangle$. | Gives the standard tabloid construction without switching to Young ideals mid-proof. | literature-derived | not-applicable |
| `lem-polytabloid-covariance-and-column-sign` (lemma) | $e_{\sigma t}=\sigma e_t$, and column permutations act by sign. | Proves the span is an $S_n$-submodule. | literature-derived | literature-derived |
| `def-invariant-inner-product-on-a-tabloid-module` (definition) | Distinct tabloids are orthonormal. | Prepares James's submodule theorem. | literature-derived | not-applicable |
| `lem-column-collision-causes-antisymmetrizer-cancellation` (lemma) | If a column of $t$ places two entries in one row of a tabloid, its antisymmetrization is zero. | Isolates the cancellation step in the dominance argument. | literature-derived | literature-derived |
| `lem-column-antisymmetrizer-detects-dominance` (lemma) | $\kappa_tM^\mu\ne0$ implies $\lambda\unrhd\mu$. | Gives the Hom-vanishing direction. | literature-derived | literature-derived |
| `lem-antisymmetrizer-image-on-its-tabloid-module-is-one-dimensional` (lemma) | $\kappa_tM^\lambda=\mathbb Ce_t$. | Supplies the scalar alternative in the submodule theorem. | literature-derived | literature-derived |
| `thm-james-submodule-theorem-in-characteristic-zero` (theorem) | Every submodule of $M^\lambda$ contains $S^\lambda$ or lies in $(S^\lambda)^\perp$. | Drives irreducibility with the self-pairing check. | literature-derived | literature-derived |
| `lem-specht-module-has-nondegenerate-self-pairing-in-characteristic-zero` (lemma) | $S^\lambda\cap(S^\lambda)^\perp=0$ over $\mathbb C$. | Rules out the second alternative for a nonzero Specht submodule. | literature-derived | literature-derived |
| `thm-complex-specht-modules-are-irreducible` (theorem) | Each $S^\lambda$ is irreducible over $\mathbb C$. | Establishes the candidate simples. | literature-derived | literature-derived |
| `thm-specht-to-permutation-homomorphism-dominance` (theorem) | A nonzero map $S^\lambda\to M^\mu$ forces $\lambda\unrhd\mu$, with scalar endomorphisms at equality. | Separates inequivalence from irreducibility. | literature-derived | literature-derived |
| `cor-distinct-specht-modules-are-inequivalent` (corollary) | $S^\lambda\cong S^\mu$ implies $\lambda=mu$. | Uses dominance in both directions. | literature-derived | literature-derived |
| `thm-complex-irreducibles-of-symmetric-groups-are-specht-modules` (theorem) | $\{S^\lambda:\lambda\vdash n\}$ is a complete irredundant list of complex irreducibles. | Completes the classification while citing, not re-minting, class-number/orthogonality facts. | literature-derived | literature-derived |
| `lem-leading-tabloid-coefficient-of-a-standard-polytabloid` (lemma) | Under the fixed tabloid order, a standard polytabloid has a unique unitriangular leading term. | Provides linear independence for the basis theorem. | literature-derived | literature-derived |
| `thm-standard-polytabloid-basis` (theorem) | Standard polytabloids form a basis of $S^\lambda$. | Gives an explicit basis and dimension $f^\lambda$. | literature-derived | literature-derived |

**Hard proof plan.**  Prove the cancellation and one-dimensional-image lemmas
before James's theorem.  The classification counts Specht modules against the
already-established number of complex irreducibles; it does not repeat
character orthogonality.  The basis theorem combines triangular independence
with the dimension count supplied by RG-11's RSK sum-of-squares identity; if
the pages are built strictly in label order, prove spanning by Garnir/straightening
as in Chan and use RG-11 later only as an agreement corollary.  Thus no forward
dependency is required.

**B page:** `specht-modules-and-the-irreducibles-of-the-symmetric-group-examples`

| item id (kind) | statement | what it is for | statement provenance | proof provenance |
|---|---|---|---|---|
| `ex-polytabloids-for-shape-two-one` (example) | Compute every relevant tabloid, antisymmetrizer and standard polytabloid. | Makes the construction explicit. | literature-derived | literature-derived |
| `ex-trivial-and-sign-specht-modules` (example) | $S^{(n)}$ is trivial and $S^{(1^n)}$ is sign. | Checks both extreme partitions. | literature-derived | literature-derived |
| `ex-specht-modules-of-s3` (example) | Construct all three complex irreducibles and their dimensions. | Verifies completeness in the first nonabelian case. | literature-derived | literature-derived |
| `cex-specht-irreducibility-fails-without-the-characteristic-zero-hypothesis` (counterexample) | The source's characteristic-two example has a reducible Specht module. | Prevents the complex theorem from being exported to modular coefficients. | literature-derived | literature-derived |

### RG-10 — The branching rule, Young's rule, and the Young graph

**A page:** `the-branching-rule-and-the-young-graph`

**Requires:** RG-8–RG-9; finite induction and Frobenius reciprocity from
abstract algebra.  The Schur–Weyl interface cites `RL-n` only where the
$GL(V)$/$\mathfrak{gl}(V)$ factor enters.

**Source backing read:** Chan §4 (branching filtration) and §6, pp. 18–19 and
24–26; Craven §§2.2 and 2.4, pp. 21–24 and 28–32; Etingof et al.
§§4.18–4.21, pp. 17–20, for the Schur–Weyl interface.

| item id (kind) | statement | what it is for | statement provenance | proof provenance |
|---|---|---|---|---|
| `def-corner-order-and-specht-deletion-map` (definition) | Order removable nodes and define the polytabloid deletion maps used in restriction. | Makes the filtration maps explicit. | literature-derived | not-applicable |
| `lem-specht-branching-subspaces-are-invariant` (lemma) | The spans determined by successive removable nodes are $S_{n-1}$-stable. | Isolates the technical invariance step. | literature-derived | literature-derived |
| `lem-specht-branching-successive-quotients` (lemma) | Each successive quotient is the Specht module for the partition with that node removed. | Identifies the filtration factors. | literature-derived | literature-derived |
| `thm-specht-restriction-branching-filtration` (theorem) | Restriction has the removable-node Specht filtration over a general coefficient field where the construction is valid. | States the robust result before semisimple splitting. | literature-derived | literature-derived |
| `cor-complex-specht-restriction-branching-rule` (corollary) | Over $\mathbb C$, restriction is the multiplicity-free direct sum over removable nodes. | Gives the characteristic-zero branching rule requested. | literature-derived | literature-derived |
| `thm-complex-specht-induction-branching-rule` (theorem) | Induction is the multiplicity-free direct sum over addable nodes. | Uses the existing Frobenius reciprocity page rather than restating it. | literature-derived | literature-derived |
| `def-young-graph` (definition) | Vertices are partitions and edges add one node. | Packages repeated restriction/induction combinatorics. | literature-derived | not-applicable |
| `cor-paths-in-the-young-graph-index-standard-tableaux` (corollary) | Paths from $\varnothing$ to $\lambda$ are in bijection with standard tableaux of shape $\lambda$. | Connects branching multiplicities to tableau recursion. | literature-derived | literature-derived |
| `lem-semistandard-tableau-homomorphisms-to-young-permutation-modules` (lemma) | Each semistandard tableau gives a homomorphism $S^\lambda\to M^\mu$. | Constructs the maps used to calculate multiplicities. | literature-derived | literature-derived |
| `lem-semistandard-homomorphisms-are-independent-and-dominance-triangular` (lemma) | The source's semistandard maps are independent and vanish outside dominance. | Supplies the triangularity step of Young's rule. | literature-derived | literature-derived |
| `thm-youngs-rule-for-permutation-modules` (theorem) | $[M^\mu:S^\lambda]=K_{\lambda\mu}$ over $\mathbb C$. | Computes the permutation-module decomposition. | literature-derived | literature-derived |
| `def-commuting-symmetric-and-linear-actions-on-tensor-power` (definition) | $S_n$ permutes tensor places using $\sigma^{-1}$ and $GL(V)$ acts diagonally. | Fixes the left-action convention for Schur–Weyl. | literature-derived | not-applicable |
| `lem-tensor-place-operators-span-the-symmetric-centralizer` (lemma) | Polarization and matrix units generate the commutant required in finite tensor degree. | Splits the long double-centralizer proof. | literature-derived | literature-derived |
| `thm-schur-weyl-double-centralizer` (theorem) | The images of $\mathbb C[S_n]$ and $GL(V)$ on $V^{\otimes n}$ are mutual centralizers, with the precise finite-dimensional hypotheses. | Connects symmetric-group multiplicities to the concurrent Lie-algebra block. | literature-derived | literature-derived |
| `thm-schur-weyl-decomposition-with-length-cutoff` (theorem) | $V^{\otimes n}$ decomposes over $\ell(\lambda)\le\dim V$ as the $S^\lambda$ factor tensored with the corresponding polynomial $GL(V)$/$\mathfrak{gl}(V)$ factor. | Records the interface: RG owns the $S_n$ side; `RL-n` supplies the Lie-algebra side. | literature-derived | literature-derived |
| `lem-schur-weyl-length-cutoff-by-column-antisymmetrization` (lemma) | Column antisymmetrization vanishes for more than $\dim V$ rows and is nonzero at the allowed boundary. | Justifies the indexing condition. | literature-derived | literature-derived |

**Hard proof plan.**  Build restriction as a filtration first and invoke
Maschke only for the complex direct-sum corollary.  Derive induction branching
by the already-owned reciprocity theorem.  For Young's rule, construct and
triangularize the semistandard maps.  For Schur–Weyl, prove commuting actions
and the tensor-operator centralizer lemma here; cite the actual `RL-n` output
for the irreducibility/highest-weight description of the linear-group factor.

**B page:** `the-branching-rule-and-the-young-graph-examples`

| item id (kind) | statement | what it is for | statement provenance | proof provenance |
|---|---|---|---|---|
| `ex-young-graph-through-s4` (example) | Draw the graph and label the restriction/induction edges through size four. | Checks multiplicity-free branching. | literature-derived | literature-derived |
| `ex-youngs-rule-for-m-two-one` (example) | Decompose the indicated permutation module and enumerate its semistandard tableaux. | Verifies Kostka multiplicities. | literature-derived | literature-derived |
| `ex-schur-weyl-for-two-tensor-factors` (example) | Split $V\otimes V$ into symmetric and alternating parts. | Gives the first double-centralizer instance. | literature-derived | literature-derived |
| `ex-schur-weyl-for-c2-tensor-three` (example) | Compute the allowed partitions and multiplicities. | Tests the length cutoff. | literature-derived | literature-derived |
| `cex-branching-filtration-need-not-split-in-modular-characteristic` (counterexample) | The source's characteristic-two case has a nonsplit Specht filtration. | Protects the complex direct-sum corollary. | literature-derived | literature-derived |

### RG-11 — The hook-length formula and RSK correspondence

**A page:** `the-hook-length-formula-and-rsk-correspondence`

**Requires:** RG-8–RG-10 for partitions and standard tableaux; no character
orthogonality is needed for the combinatorial proof.

**Source backing read:** Chan §§7–8, pp. 27–30; Craven §§1.4–1.5,
pp. 7–13; Etingof et al. §4.17, pp. 16–17, independently checks the hook
formula.

| item id (kind) | statement | what it is for | statement provenance | proof provenance |
|---|---|---|---|---|
| `def-hook-arm-leg-and-hook-length` (definition) | The hook includes its anchor box and has length arm plus leg plus one. | Fixes a frequent off-by-one convention. | literature-derived | not-applicable |
| `lem-standard-tableau-removal-recursion` (lemma) | $f^\lambda=\sum_{x\in\operatorname{Rem}(\lambda)}f^{\lambda-x}$, with $f^\varnothing=1$. | Provides the inductive recursion shared by hook lengths and the Young graph. | literature-derived | literature-derived |
| `lem-hook-product-change-under-corner-removal` (lemma) | Removing a corner changes exactly the hooks in its row and column by the specified factors. | Localizes the arithmetic in the hook proof. | literature-derived | literature-derived |
| `lem-hook-product-branching-identity` (lemma) | The hook-product expression satisfies the same removable-node recursion as $f^\lambda$. | Supplies the nontrivial finite identity. | literature-derived | literature-derived |
| `thm-hook-length-formula` (theorem) | $f^\lambda=n!/\prod_{x\in\lambda}h(x)$ for every $\lambda\vdash n$, including $n=0,1$. | Computes Specht dimensions and tableau counts. | literature-derived | literature-derived |
| `def-row-insertion-and-bumping-route` (definition) | Define row insertion for a word with distinct letters, including termination and the new box. | Starts the Robinson–Schensted algorithm with well-defined shape growth. | literature-derived | not-applicable |
| `lem-row-bumping-route-monotonicity` (lemma) | Relative inserted letters have the source's ordered bumping routes. | Proves row/column increase in the output tableaux. | literature-derived | literature-derived |
| `lem-robinson-schensted-recording-tableau-is-standard` (lemma) | Recording the successive new boxes produces a standard tableau. | Establishes well-definedness of the second output. | literature-derived | literature-derived |
| `def-reverse-row-deletion` (definition) | Define reverse bumping from a removable box. | Constructs an actual inverse, not merely an injectivity count. | literature-derived | not-applicable |
| `lem-row-insertion-and-reverse-deletion-are-inverse` (lemma) | Each operation undoes the other in both directions. | Closes bijectivity. | literature-derived | literature-derived |
| `thm-robinson-schensted-correspondence` (theorem) | Permutations in $S_n$ correspond bijectively to pairs of standard tableaux of the same shape. | Supplies the requested RSK core in the permutation case. | literature-derived | literature-derived |
| `thm-rsk-correspondence-for-two-line-arrays` (theorem) | The row-insertion construction extends to the source's lexicographically ordered two-line arrays and semistandard tableaux. | Includes RSK rather than only the RS permutation special case. | literature-derived | literature-derived |
| `cor-rsk-symmetry-under-inversion` (corollary) | For permutations, $P(w^{-1})=Q(w)$ and $Q(w^{-1})=P(w)$. | Records the fundamental symmetry used in involution counting. | literature-derived | literature-derived |
| `cor-sum-of-squares-of-standard-tableau-numbers` (corollary) | $\sum_{\lambda\vdash n}(f^\lambda)^2=n!$. | Agrees with the regular-representation dimension count and independently checks RG-9. | literature-derived | literature-derived |
| `cor-involutions-are-counted-by-standard-tableaux` (corollary) | Involutions correspond to pairs with $P=Q$, hence to standard tableaux. | Gives a cheap, source-backed combinatorial consequence. | literature-derived | literature-derived |

**Hard proof plan.**  Prove the hook formula by matching the tableau deletion
recursion, including the empty product.  For RSK, prove termination, standardness,
and the two-sided inverse algorithm before calling the construction a
bijection.  Do not derive RSK merely by comparing finite cardinalities.

**B page:** `the-hook-length-formula-and-rsk-correspondence-examples`

| item id (kind) | statement | what it is for | statement provenance | proof provenance |
|---|---|---|---|---|
| `ex-hook-table-for-shape-three-two-one` (example) | Calculate every hook and verify the dimension. | Tests the anchor and row/column factors. | literature-derived | literature-derived |
| `ex-hook-lengths-for-row-column-and-hook-shapes` (example) | Derive the formulas for $(n)$, $(1^n)$ and $(n-1,1)$. | Checks boundary shapes. | literature-derived | literature-derived |
| `ex-rsk-insertion-and-reverse-deletion` (example) | Run a complete non-involutive permutation through both algorithms. | Verifies inverse well-definedness. | literature-derived | literature-derived |
| `ex-rsk-for-involutions` (example) | Compute examples with $P=Q$. | Makes the inversion symmetry visible. | literature-derived | literature-derived |
| `ex-empty-and-singleton-rsk-boundaries` (example) | Treat $S_0$ and $S_1$ with the empty/single-box tableaux. | Closes zero and one boundaries. | literature-derived | literature-derived |

### RG-12 — Bruhat decomposition and flags over finite fields

**A page:** `bruhat-decomposition-and-flags-over-finite-fields`

**Requires:** finite group actions/induction from abstract algebra; elementary
linear algebra.  No algebraic-group or étale-cohomology prerequisite is used.

**Source backing read:** Olivier Dudas and Jean Michel, *Lectures on Finite
Reductive Groups and Their Representations*, §§8–10, pp. 29–44; Jay Taylor,
*Finite Reductive Groups*, *The Weyl group and Bruhat decomposition of $G$*
and *Harish-Chandra Induction and Restriction*, pp. 36–42.

| item id (kind) | statement | what it is for | statement provenance | proof provenance |
|---|---|---|---|---|
| `def-standard-subgroups-of-gl-n-over-a-finite-field` (definition) | For $n\ge1$, define $G=GL_n(\mathbb F_q)$, upper triangular $B$, diagonal $T$, upper unitriangular $U$, and $B=T\ltimes U$. | Fixes the matrix model and rank boundary. | literature-derived | not-applicable |
| `thm-complete-flags-form-gl-n-over-b` (theorem) | $G$ acts transitively on complete flags with stabilizer $B$. | Identifies the flag permutation representation. | literature-derived | literature-derived |
| `def-compositions-partial-flags-and-standard-parabolics` (definition) | Positive-part compositions index standard partial flags and parabolics, with $P_{(n)}=G$ and $P_{(1,\ldots,1)}=B$. | Prepares parabolic induction and its endpoints. | literature-derived | not-applicable |
| `thm-levi-decomposition-of-standard-parabolics-in-gl-n-fq` (theorem) | $P_\alpha=L_\alpha\ltimes U_\alpha$ with the stated block-diagonal Levi. | Supplies the quotient inflated in Harish–Chandra induction. | literature-derived | literature-derived |
| `def-weyl-group-and-length-for-finite-gl-n` (definition) | Permutation matrices identify $W$ with $S_n$, with adjacent simple reflections and inversion length. | Indexes Bruhat cells and Hecke generators. | literature-derived | not-applicable |
| `lem-gaussian-elimination-produces-a-pivot-permutation` (lemma) | Row/column operations by $B$ place each invertible matrix in some $BwB$. | Isolates existence in Bruhat decomposition. | literature-derived | literature-derived |
| `lem-rank-matrices-determine-the-pivot-permutation` (lemma) | Northwest-rank data are constant on $B$-double cosets and determine $w$. | Supplies disjointness/uniqueness. | literature-derived | literature-derived |
| `thm-bruhat-decomposition-of-gl-n-over-a-finite-field` (theorem) | $G=\bigsqcup_{w\in S_n}BwB$. | Gives the foundational finite linear-group decomposition. | literature-derived | literature-derived |
| `thm-relative-position-classifies-pairs-of-complete-flags` (theorem) | Diagonal $G$-orbits on flag pairs correspond to $w\in S_n$ via rank matrices. | Gives the geometric meaning of Bruhat cells. | literature-derived | literature-derived |
| `prop-cardinality-of-a-finite-bruhat-cell` (proposition) | $|BwB/B|=q^{\ell(w)}$. | Supplies coefficients for the Hecke multiplication on RG-13. | literature-derived | literature-derived |
| `def-harish-chandra-induction-and-restriction-for-finite-gl-n` (definition) | $R_L^G=\operatorname{Ind}_P^G\operatorname{Inf}_L^P$ and ${}^*R_L^G$ is $U$-invariants. | Distinguishes parabolic induction from bare subgroup induction. | literature-derived | not-applicable |
| `lem-unipotent-invariants-are-exact-over-c` (lemma) | Averaging over finite $U$ makes the invariants functor exact. | Justifies clean constituent and adjunction arguments. | literature-derived | literature-derived |
| `thm-harish-chandra-adjunction-for-finite-gl-n` (theorem) | $R_L^G$ and ${}^*R_L^G$ are adjoint in the stated direction. | Specializes the existing finite Frobenius reciprocity to the parabolic construction. | literature-derived | literature-derived |
| `thm-transitivity-and-parabolic-independence-of-harish-chandra-induction` (theorem) | Induction is transitive for nested Levis and independent, up to canonical equivalence, of the parabolic with fixed Levi. | Makes Harish–Chandra series well defined. | literature-derived | literature-derived |
| `thm-parabolic-mackey-formula-for-finite-gl-n` (theorem) | Restriction after induction decomposes over $W_\alpha\backslash S_n/W_\beta$ with the specified intersections. | Provides the calculation used by principal-series endomorphisms. | literature-derived | literature-derived |
| `def-cuspidal-support-and-harish-chandra-series` (definition) | An irreducible is cuspidal when proper Harish–Chandra restrictions vanish; its support is a minimal Levi/cuspidal pair. | States the organization above principal series. | literature-derived | not-applicable |
| `thm-existence-and-uniqueness-of-cuspidal-support-for-finite-gl-n` (theorem) | Every irreducible has cuspidal support unique up to $G$-conjugacy, partitioning irreducibles into Harish–Chandra series. | Positions the principal series as the torus series. | literature-derived | literature-derived |

**Hard proof plan.**  Prove both existence and uniqueness of the pivot
permutation, then count each cell.  Define parabolic induction using the finite
group operation already available.  The parabolic Mackey proof chooses minimal
double-coset representatives and checks every subgroup intersection in matrix
terms.  Avoid importing general finite reductive groups when Gaussian
elimination suffices for $GL_n$.

**B page:** `bruhat-decomposition-and-flags-over-finite-fields-examples`

| item id (kind) | statement | what it is for | statement provenance | proof provenance |
|---|---|---|---|---|
| `ex-gl-one-and-the-trivial-parabolic-boundary` (example) | Work out $n=1$, $P_{(n)}=G$ and their induction functors. | Closes the smallest-rank endpoints. | literature-derived | literature-derived |
| `ex-complete-flags-and-bruhat-cells-for-gl2-fq` (example) | Enumerate the two cells and their sizes. | Checks the rank-one Bruhat relation. | literature-derived | literature-derived |
| `ex-relative-position-of-flags-in-gl3-fq` (example) | Compute rank matrices for representatives of all six positions. | Makes uniqueness visible. | literature-derived | literature-derived |
| `ex-grassmannians-as-maximal-parabolic-quotients` (example) | Identify $G/P_{(r,n-r)}$ with the Grassmannian. | Gives the standard partial-flag example. | literature-derived | literature-derived |
| `ex-parabolic-induction-as-functions-on-partial-flags` (example) | Realize induction of the trivial Levi representation as the partial-flag permutation module. | Connects the construction to concrete functions. | literature-derived | literature-derived |

### RG-13 — Principal series of finite general linear groups

**A page:** `principal-series-representations-of-gl-n-over-a-finite-field`

**Requires:** RG-8–RG-12; the functional-analysis Banach-algebra page only for
terminology, not for finite semisimplicity.

**Source backing read:** Dudas–Michel §10.3 and §§11.1–11.3, pp. 43–51;
Taylor, *Hecke algebras*, pp. 42–45.  Ivan Losev, *Lecture 8:
Representations of $GL_n(\mathbb F_q)$*, §§2.1–2.3, PDF pp. 3–6, supplies the
explicit convolution and Tits-deformation proof.  Dudas–Michel is the only
full general-$n$ treatment read for arbitrary nontrivial torus characters;
Taylor/Losev fully and independently treat the spherical case, while Masao Oi
§2.3, pp. 10–12, checks arbitrary characters only in rank two.  No preview is
promoted beyond that scope.

| item id (kind) | statement | what it is for | statement provenance | proof provenance |
|---|---|---|---|---|
| `def-diagonal-torus-characters-and-weyl-action` (definition) | Characters of $T$ are tuples $(\chi_1,\ldots,\chi_n)$ and $S_n$ permutes coordinates. | Parametrizes the finite principal series. | literature-derived | not-applicable |
| `def-principal-series-module-for-finite-gl-n` (definition) | $I(\chi)=\operatorname{Ind}_B^G\widetilde\chi$, with $U$ acting trivially. | Fixes that “principal series” names the induced module. | literature-derived | not-applicable |
| `lem-mackey-support-for-homs-between-finite-principal-series` (lemma) | Only Weyl elements carrying $\chi$ to the target character contribute to the Hom space. | Isolates the Mackey calculation. | literature-derived | literature-derived |
| `thm-weyl-stabilizer-controls-principal-series-endomorphisms` (theorem) | $\dim\operatorname{End}_G I(\chi)=|W_\chi|$ under the stated splitting hypotheses. | Gives the irreducibility test and singular case size. | literature-derived | literature-derived |
| `cor-regular-finite-principal-series-is-irreducible` (corollary) | Pairwise distinct coordinate characters imply $W_\chi=1$ and $I(\chi)$ is irreducible. | Handles the generic principal series. | literature-derived | literature-derived |
| `def-standard-intertwining-operators-for-finite-principal-series` (definition) | Define the finite sums attached to $w\in W_\chi$ and verify independence of representatives. | Produces the endomorphism algebra generators. | literature-derived | not-applicable |
| `lem-spherical-principal-series-is-the-flag-permutation-module` (lemma) | $I(1)=\mathbb C[G/B]$. | Connects the general construction to a two-sided full treatment. | literature-derived | literature-derived |
| `thm-finite-hecke-algebra-as-convolution-corner-and-endomorphisms` (theorem) | The normalized $B$-bi-invariant convolution algebra, $e_B\mathbb C[G]e_B$, and the appropriate opposite of $\operatorname{End}_G\mathbb C[G/B]$ are identified under the fixed left-action convention. | Resolves the common opposite-algebra ambiguity. | literature-derived | literature-derived |
| `def-bruhat-double-coset-basis-of-the-finite-hecke-algebra` (definition) | $T_w$ is the unnormalized characteristic basis element for $BwB$. | Gives one generator per Weyl element. | literature-derived | not-applicable |
| `lem-length-increasing-hecke-products` (lemma) | $T_wT_s=T_{ws}$ when $\ell(ws)=\ell(w)+1$. | Handles the easy half of multiplication. | literature-derived | literature-derived |
| `lem-rank-one-hecke-quadratic-relation` (lemma) | $T_s^2=(q-1)T_s+q$. | Supplies the nontrivial local count. | literature-derived | literature-derived |
| `thm-type-a-iwahori-hecke-presentation` (theorem) | The $T_s$ satisfy quadratic, commuting and braid relations and present the algebra. | Encodes the spherical endomorphism algebra. | literature-derived | literature-derived |
| `def-generic-type-a-hecke-algebra` (definition) | Define the algebra over $\mathbb Z[v^{\pm1}]$ with the corresponding generic relations. | Makes deformation between $q$ and $1$ precise. | literature-derived | not-applicable |
| `thm-standard-basis-of-the-generic-type-a-hecke-algebra` (theorem) | $\{T_w:w\in S_n\}$ is a free basis. | Establishes flatness before specialization. | literature-derived | literature-derived |
| `prop-group-algebra-and-finite-field-specializations-of-the-generic-hecke-algebra` (proposition) | Specialization at $v=1$ yields $\mathbb C[S_n]$ and at the chosen square/root parameter yields the finite Hecke algebra. | States the deformation endpoints without conflating generators. | literature-derived | literature-derived |
| `lem-semisimplicity-and-trace-form-for-the-finite-spherical-hecke-algebra` (lemma) | As a corner of $\mathbb C[G]$, the complex algebra is semisimple and its trace form is nondegenerate. | Supplies the deformation proof's algebraic input. | literature-derived | literature-derived |
| `lem-lifting-idempotents-in-complete-deformation-algebras` (lemma) | Idempotents lift through the nilpotent/adic quotients used in Losev's proof. | Splits the most technical Tits-deformation step. | literature-derived | literature-derived |
| `thm-tits-deformation-for-the-type-a-hecke-algebra` (theorem) | The generic semisimple specialization has the same simple-module data as $\mathbb C[S_n]$. | Transfers the partition indexing to spherical principal series. | literature-derived | literature-derived |
| `cor-type-a-finite-hecke-algebra-is-noncanonically-isomorphic-to-csn` (corollary) | Over $\mathbb C$ at positive prime-power $q$, the algebra is abstractly, not canonically, isomorphic to $\mathbb C[S_n]$. | Prevents deformation from being misstated as a natural identification. | literature-derived | literature-derived |
| `thm-spherical-principal-series-constituents-of-gl-n-fq` (theorem) | The constituents of $\mathbb C[G/B]$ are indexed by partitions of $n$, with multiplicity $f^\lambda$. | Completes the requested spherical principal series. | literature-derived | literature-derived |
| `thm-general-finite-principal-series-endomorphism-algebra` (theorem) | For $\chi$, the endomorphism algebra is the type-A Hecke algebra of the product-of-symmetric-groups stabilizer $W_\chi$, with the source's precise parameters. | Extends the description to singular torus characters. | literature-derived | literature-derived |
| `cor-constituents-of-general-principal-series-for-finite-gl-n` (corollary) | Constituents are indexed by a partition for each equal-character block. | Gives the general principal-series parametrization through the declared stopping point. | literature-derived | literature-derived |

**Hard proof plan.**  Use RG-12's parabolic Mackey formula to calculate Hom
support and standard intertwiners.  In the spherical case, count the rank-one
double-coset product, prove the presentation and freeness, then follow Losev's
six deformation steps, including idempotent lifting.  The general-character
extension is source-backed by Dudas–Michel; do not pretend Taylor's spherical
argument independently proves it.

**B page:** `principal-series-representations-of-gl-n-over-a-finite-field-examples`

| item id (kind) | statement | what it is for | statement provenance | proof provenance |
|---|---|---|---|---|
| `ex-two-dimensional-hecke-algebra-for-gl2-fq` (example) | Compute its basis and quadratic relation. | Checks normalization and the opposite-algebra convention. | literature-derived | literature-derived |
| `ex-trivial-and-steinberg-splitting-on-p1-fq` (example) | $\mathbb C[\mathbb P^1(\mathbb F_q)]=1\oplus\mathrm{St}$ with $\dim\mathrm{St}=q$. | Exhibits the rank-one spherical constituents. | literature-derived | literature-derived |
| `ex-regular-and-singular-torus-characters-in-gl3-fq` (example) | Compare trivial, two-equal and all-distinct coordinate characters. | Tests the Weyl stabilizer formula. | literature-derived | literature-derived |
| `ex-q-equals-two-torus-boundary` (example) | Account for the collapse of available torus characters over $\mathbb F_2$. | Closes the smallest-field edge case. | literature-derived | literature-derived |
| `rem-tits-isomorphism-is-noncanonical` (remark) | Two choices of deformation data need not identify individual simples naturally. | Guards downstream use of the abstract isomorphism. | literature-derived | not-applicable |

### RG-14 — Blocks, defect groups, and the Brauer homomorphism

**A page:** `blocks-defect-groups-and-the-brauer-homomorphism`

**Requires:** `modular-representations-and-projective-covers`, including
`def-relative-projectivity`, Higman's criterion,
`def-vertex-and-source-of-an-indecomposable-module`, and
`thm-green-vertex-source-existence-and-conjugacy`;
`brauer-characters-and-decomposition-matrices`, including its primitive
central block idempotents and block partition.  None is repeated.

**Source backing read:** José Martínez, *Modular Representation Theory of
Finite Groups*, Lectures 2–4, printed pp. 9–28; Markus Jacobsen, thesis,
Chapter 1 §1, pp. 2–8 and Chapter 2 §2, pp. 12–19; Deniz Yılmaz et al.,
§2, pp. 2–3; John-Paul Saunders, §5, printed pp. 37–45.

| item id (kind) | statement | what it is for | statement provenance | proof provenance |
|---|---|---|---|---|
| `def-block-bimodule-for-the-double-group` (definition) | For a block idempotent $b$, regard $kGb$ as a $k[G\times G]$-module via left and right multiplication. | Connects blocks to inherited vertex theory. | literature-derived | not-applicable |
| `lem-group-algebra-bimodule-is-induced-from-the-diagonal` (lemma) | The regular bimodule $kG$ is induced from the diagonal subgroup $\Delta G$. | Bounds vertices of its block summands. | literature-derived | literature-derived |
| `thm-block-bimodule-has-a-diagonal-vertex` (theorem) | A vertex of the indecomposable block bimodule is conjugate to $\Delta D$ for a $p$-subgroup $D\le G$. | Produces the representation-theoretic defect group. | literature-derived | literature-derived |
| `def-defect-group-and-numerical-defect-of-a-block` (definition) | $D$ is the subgroup from a diagonal vertex and $|D|=p^d$ defines numerical defect $d$. | Fixes group versus number terminology. | literature-derived | not-applicable |
| `thm-defect-groups-of-a-block-are-conjugate` (theorem) | All defect groups of a block are $G$-conjugate. | Makes “the defect groups” well defined up to the correct equivalence. | literature-derived | literature-derived |
| `thm-vertices-of-modules-in-a-block-lie-in-a-defect-group` (theorem) | Every indecomposable module in $b$ has a vertex conjugate into a defect group of $b$. | Relates inherited module vertices to block defect. | literature-derived | literature-derived |
| `prop-principal-block-has-sylow-defect` (proposition) | The principal block has a Sylow $p$-subgroup as defect group. | Gives the fundamental full-defect case. | literature-derived | literature-derived |
| `thm-defect-zero-blocks-are-simple-algebras` (theorem) | A defect-zero block has the source's simple/projective structure, and conversely. | Identifies the semisimple extreme. | literature-derived | literature-derived |
| `def-brauer-homomorphism-for-a-p-subgroup` (definition) | $\operatorname{Br}_P:(kG)^P\to kC_G(P)$ projects a $P$-fixed group-algebra element onto terms centralizing $P$. | Introduces the local map used by Brauer pairs. | literature-derived | not-applicable |
| `thm-brauer-homomorphism-is-multiplicative` (theorem) | The projection is an algebra homomorphism on $(kG)^P$. | Makes images of idempotents idempotent. | literature-derived | literature-derived |
| `lem-brauer-homomorphism-is-conjugation-equivariant` (lemma) | $\operatorname{Br}_{{}^gP}({}^gx)={}^g\operatorname{Br}_P(x)$. | Controls conjugacy of local data. | literature-derived | literature-derived |
| `def-relative-brauer-homomorphism` (definition) | For $Q\trianglelefteq P$, define $\operatorname{Br}_{P/Q}$ on the appropriate centralizer-fixed algebra. | Permits passage along normal subgroup chains. | literature-derived | not-applicable |
| `lem-relative-brauer-homomorphisms-are-transitive` (lemma) | The relative maps compose to the full Brauer map for nested normal steps. | Powers the unique-subpair proof. | literature-derived | literature-derived |
| `prop-central-idempotents-under-the-brauer-homomorphism` (proposition) | The image of a central block idempotent decomposes into the precisely compatible local block idempotents. | Connects blocks to local pairs. | literature-derived | literature-derived |
| `thm-defect-groups-are-maximal-brauer-support` (theorem) | $D$ is a defect group of $b$ iff $\operatorname{Br}_D(b)\ne0$ and $D$ is maximal with that property. | Gives the local characterization used by both main theorems. | literature-derived | literature-derived |
| `def-brauer-pair-for-a-block` (definition) | A $b$-Brauer pair is $(P,e)$ with $P$ a $p$-subgroup and $e$ a block of $kC_G(P)$ satisfying $\operatorname{Br}_P(b)e=e$. | Packages subgroup and local block data. | literature-derived | not-applicable |
| `def-normal-inclusion-of-brauer-pairs` (definition) | Define $(Q,f)\trianglelefteq(P,e)$ through the relative Brauer map when $Q\trianglelefteq P$. | Starts the partial order without confusing it with mere membership. | literature-derived | not-applicable |
| `thm-unique-normal-subpair-below-a-brauer-pair` (theorem) | For normal $Q\trianglelefteq P$, there is a unique compatible block $f$ below $(P,e)$. | Gives one-step descent. | literature-derived | literature-derived |
| `thm-brauer-pair-order-is-independent-of-the-normal-chain` (theorem) | Iterated normal descent gives a well-defined inclusion relation for arbitrary subgroups. | Proves the poset construction does not depend on a chain choice. | literature-derived | literature-derived |
| `thm-every-brauer-pair-determines-a-unique-global-block` (theorem) | A local pair belongs to a unique block of $kG$. | Allows local data to identify its ambient block. | literature-derived | literature-derived |
| `thm-maximal-brauer-pairs-exist-and-are-conjugate` (theorem) | Maximal $b$-Brauer pairs exist and form one $G$-conjugacy class. | Supplies the local object used in Brauer First. | literature-derived | literature-derived |
| `thm-maximal-brauer-pairs-detect-defect-groups` (theorem) | $(D,e)$ is maximal exactly when $D$ is a defect group of $b$. | Reconciles the diagonal-vertex and Brauer-map definitions. | literature-derived | literature-derived |
| `cor-normal-p-core-lies-in-every-block-defect-group` (corollary) | $O_p(G)$ is contained in every defect group. | Records the normal-core consequence. | literature-derived | literature-derived |
| `cor-block-defect-groups-are-p-radical` (corollary) | A defect group satisfies $D=O_p(N_G(D))$. | Provides the normalizer property used on RG-16. | literature-derived | literature-derived |

**Hard proof plan.**  First obtain defect groups from vertices of the block
bimodule, citing the inherited module-vertex theorem.  Separately prove
multiplicativity of the full fixed-algebra Brauer map by orbit cancellation in
characteristic $p$.  Build the Brauer-pair order through unique normal subpairs
and prove normal-chain independence before calling it an order.  Finally show
that maximal support, maximal Brauer pairs and diagonal vertices select the
same conjugacy class.

**B page:** `blocks-defect-groups-and-the-brauer-homomorphism-examples`

| item id (kind) | statement | what it is for | statement provenance | proof provenance |
|---|---|---|---|---|
| `ex-defect-and-brauer-pairs-for-a4-in-characteristic-three` (example) | Work Jacobsen's block and pair calculation for $A_4$ at $p=3$. | Tests maximal support in a nontrivial group. | literature-derived | literature-derived |
| `ex-brauer-pair-branching-for-c3-semidirect-c4-in-characteristic-two` (example) | Work Jacobsen's explicit pair-poset example. | Shows why pair membership is not itself the order relation. | literature-derived | literature-derived |
| `ex-blocks-and-defect-groups-of-s3` (example) | Calculate the source's blocks and their defect groups at the indicated primes. | Checks principal, full and zero defect behavior. | literature-derived | literature-derived |
| `ex-defect-zero-and-p-group-boundaries` (example) | Verify the defect-zero extreme and the unique full-defect block of a $p$-group within the source results. | Closes the two endpoint cases. | literature-derived | literature-derived |

### RG-15 — Vertices, sources, and the Green correspondence

**A page:** `vertices-sources-and-the-green-correspondence`

**Requires:** RG-14 and the exact inherited GT-18 ids named at RG-14.  The
definitions/existence/conjugacy of vertices and sources are cited, not minted.

**Source backing read:** Saunders §4, printed pp. 22–37, especially
pp. 34–37; Caroline Lassueur and Niamh Farrell, Chapter 7 §§27–29, pp. 2–12;
Craven, thesis Chapter 2 §§2.1–2.3, printed pp. 18–25.

| item id (kind) | statement | what it is for | statement provenance | proof provenance |
|---|---|---|---|---|
| `def-green-exceptional-intersection-families` (definition) | For $H\ge N_G(P)$, define the source's subgroup families measuring intersections $P\cap{}^gP$ outside $H$. | States exactly which smaller vertices are discarded. | literature-derived | not-applicable |
| `lem-green-mackey-intersections-force-proper-vertices` (lemma) | Mackey summands indexed outside $H$ are relatively projective for subgroups in the exceptional families. | Controls all error summands. | literature-derived | literature-derived |
| `lem-green-restriction-has-one-distinguished-summand` (lemma) | An indecomposable $kG$-module with vertex $P$ restricts to $H$ with exactly one indecomposable summand of vertex $P$; the others have exceptional smaller vertices. | Constructs the Green correspondent in one direction. | literature-derived | literature-derived |
| `lem-green-induction-has-one-distinguished-summand` (lemma) | Conversely, induction of an indecomposable $kH$-module of vertex $P$ has exactly one $P$-vertex summand. | Constructs the inverse direction. | literature-derived | literature-derived |
| `lem-green-distinguished-summands-are-mutually-inverse` (lemma) | The two distinguished-summand assignments undo one another up to isomorphism. | Establishes bijectivity, not merely existence. | literature-derived | literature-derived |
| `thm-green-correspondence-with-exceptional-families` (theorem) | The assignments give the full bijection between the source-specified classes of indecomposable modules for $G$ and $H$. | States Green correspondence with its actual hypotheses. | literature-derived | literature-derived |
| `cor-green-correspondence-for-modules-of-vertex-exactly-p` (corollary) | In particular, indecomposable modules of vertex exactly $P$ correspond when $N_G(P)\le H\le G$. | Gives the standard usable form. | literature-derived | literature-derived |

**Hard proof plan.**  Apply Mackey to restriction after induction, route every
off-normalizer double coset into the exceptional families, and use inherited
vertex minimality to prove uniqueness of the $P$-vertex summand.  Repeat in the
opposite direction and compare the distinguished summands.  Nonzero
indecomposables are assumed.  If $P=1$, the normalizer condition forces $H=G$;
if $H=G$, the correspondence is the identity.  Do not claim common sources:
the full treatments read guarantee the same vertex, and no named common-source
result was located in their ranges.

**B page:** `vertices-sources-and-the-green-correspondence-examples`

| item id (kind) | statement | what it is for | statement provenance | proof provenance |
|---|---|---|---|---|
| `ex-green-restriction-summand-with-the-same-vertex` (example) | Work Lassueur–Farrell's explicit distinguished-summand example. | Shows how the unique summand is selected. | literature-derived | literature-derived |
| `ex-green-correspondence-for-a-trivial-intersection-subgroup` (example) | Work Saunders's TI-subgroup specialization. | Gives a case where the exceptional families simplify visibly. | literature-derived | literature-derived |
| `ex-green-correspondence-identity-boundaries` (example) | Verify $P=1$ and $H=G$ under the normalizer hypothesis. | Closes the degenerate cases without weakening the hypothesis. | literature-derived | literature-derived |

### RG-16 — Brauer's First Main Theorem

**A page:** `brauers-first-main-theorem`

**Requires:** RG-14–RG-15 and both modular entry pages.

**Source backing read:** Martínez Lecture 4, pp. 23–28; Craven, thesis
Chapter 1 §§1.1–1.3, printed pp. 1–11; Saunders §5, pp. 40–44.

| item id (kind) | statement | what it is for | statement provenance | proof provenance |
|---|---|---|---|---|
| `def-induced-block-from-a-subgroup` (definition) | Define upward block induction $c\mapsto c^G$ through central characters/Brauer maps under the existence hypothesis. | Fixes arrow direction and avoids treating block induction as module induction. | literature-derived | not-applicable |
| `lem-induced-blocks-have-controlled-defect` (lemma) | If $c^G$ exists, its defect groups contain/conjugately control those of $c$ as in the source statement. | Supplies the local-to-global size comparison. | literature-derived | literature-derived |
| `lem-block-induction-exists-under-centralizer-containment` (lemma) | The stated centralizer containment is sufficient for $c^G$ to exist uniquely. | Gives the construction used in First. | literature-derived | literature-derived |
| `lem-block-induction-is-transitive` (lemma) | When defined along $H\le K\le G$, $(c^K)^G=c^G$. | Makes the normalizer construction independent of an intermediate subgroup. | literature-derived | literature-derived |
| `lem-first-main-theorem-local-block-existence` (lemma) | A maximal $b$-Brauer pair $(D,e)$ determines a block of $N_G(D)$ with defect $D$. | Constructs the correspondent. | literature-derived | literature-derived |
| `lem-first-main-theorem-injectivity` (lemma) | Two local blocks of $N_G(D)$ inducing to the same global block with defect $D$ coincide up to the prescribed conjugacy. | Proves uniqueness. | literature-derived | literature-derived |
| `lem-first-main-theorem-surjectivity` (lemma) | Every block of $G$ with defect $D$ arises from the local block in a maximal Brauer pair. | Proves the converse direction. | literature-derived | literature-derived |
| `thm-brauer-first-main-theorem` (theorem) | Blocks of $kG$ with defect group $D$ correspond to blocks of $kN_G(D)$ with defect group $D$. | Delivers the first requested main theorem. | literature-derived | literature-derived |
| `def-brauer-correspondent-of-a-block` (definition) | The corresponding block of $N_G(D)$ is the Brauer correspondent, defined only up to the fixed conjugacy convention. | Names the output used by Green compatibility. | literature-derived | not-applicable |
| `thm-corresponding-block-bimodules-are-green-correspondents` (theorem) | The global and local block bimodules correspond under the relevant diagonal Green correspondence. | Connects First to module theory. | literature-derived | literature-derived |
| `thm-brauer-green-nagao-block-compatibility` (theorem) | Green correspondents of indecomposable modules lie in the compatible global/local blocks under the source hypotheses. | Supplies the modular compatibility sometimes ambiguously called “Second.” | literature-derived | literature-derived |
| `cor-every-block-has-an-indecomposable-module-of-full-defect-vertex` (corollary) | Every block contains an indecomposable module whose vertex is a defect group. | Shows the upper vertex bound is attained. | literature-derived | literature-derived |

**Hard proof plan.**  Select a maximal Brauer pair and construct its local block;
prove defect control, injection and surjection separately.  Only after the
bijection is established define “the” correspondent.  Apply RG-15 to diagonal
block bimodules for compatibility.  The cases $D=1$, $H=G$ and an empty set of
blocks reduce to identities; no canonical representative of a conjugacy class
is asserted.

**B page:** `brauers-first-main-theorem-examples`

| item id (kind) | statement | what it is for | statement provenance | proof provenance |
|---|---|---|---|---|
| `ex-brauer-correspondence-in-s7` (example) | Work Craven's local/global block example. | Demonstrates the theorem beyond a normal Sylow subgroup. | literature-derived | literature-derived |
| `ex-brauer-correspondence-for-sl2-over-fp` (example) | Work the exact block correspondence supplied in the cited modular notes. | Adds a finite linear-group instance without rebuilding all its modules. | literature-derived | literature-derived |
| `cex-centralizer-containment-is-not-necessary-for-block-induction` (counterexample) | Saunders's example has block induction although the sufficient containment fails. | Prevents a sufficient lemma from being promoted to an iff. | literature-derived | literature-derived |
| `ex-defect-one-first-main-theorem-boundary` (example) | For $D=1$, $N_G(D)=G$ and the correspondence is the identity. | Closes the zero-defect endpoint. | literature-derived | literature-derived |

### RG-17 — Brauer's Second Main Theorem

**A page:** `brauers-second-main-theorem`

**Requires:** RG-14–RG-16;
`brauer-characters-and-decomposition-matrices` for ordinary decomposition
numbers at $u=1$.

**Source backing read:** Craven, thesis Chapter 1 §1.5, printed pp. 13–16,
and Chapter 2 §§2.4–2.5, printed pp. 26–30; Ulrich Meierfrankenfeld,
*MTH 912 Class Notes*, §§6.6–6.7, printed pp. 156–171.

| item id (kind) | statement | what it is for | statement provenance | proof provenance |
|---|---|---|---|---|
| `lem-commuting-p-and-p-prime-parts-of-a-finite-group-element` (lemma) | Every $g$ has unique commuting $g=uv$ with $u$ a $p$-element and $v$ $p$-regular in $C_G(u)$. | Supplies the domain of generalized decomposition. | literature-derived | literature-derived |
| `def-p-section-of-a-p-element` (definition) | The $p$-section of $u$ consists of elements whose $p$-part is conjugate to $u$. | Organizes ordinary character values locally. | literature-derived | not-applicable |
| `def-generalized-decomposition-numbers` (definition) | For $\chi\in\operatorname{Irr}(G)$ and a $p$-element $u$, define coefficients $d^u_{\chi\varphi}$ in $\chi(uv)=\sum_{\varphi\in\operatorname{IBr}(C_G(u))}d^u_{\chi\varphi}\varphi(v)$. | Extends the inherited ordinary decomposition numbers. | literature-derived | not-applicable |
| `thm-generalized-decomposition-numbers-exist-and-are-unique` (theorem) | The coefficients exist in the characteristic-zero field/integer ring specified by the splitting system and are unique. | Proves the preceding definition is meaningful. | literature-derived | literature-derived |
| `def-brauer-subsection` (definition) | A subsection is a compatible pair $(u,c)$ of a $p$-element and a block of $C_G(u)$, modulo conjugacy. | Indexes the local blocks contributing to Second. | literature-derived | not-applicable |
| `lem-relative-projectivity-forces-p-section-character-vanishing` (lemma) | The source's relative-projectivity hypotheses force trace/character vanishing on the excluded $p$-sections. | Connects module vertices to character support. | literature-derived | literature-derived |
| `thm-nagao-decomposition-for-restriction-to-a-centralizer` (theorem) | Restriction/decomposition separates a distinguished local summand from modules with smaller relevant vertices. | Supplies the modular module decomposition behind Second. | literature-derived | literature-derived |
| `lem-nagao-error-terms-have-zero-trace-on-the-relevant-p-section` (lemma) | Every error summand contributes zero to $\chi(uv)$ for the specified $u,v$. | Removes the non-corresponding blocks. | literature-derived | literature-derived |
| `lem-local-block-projection-controls-generalized-decomposition-support` (lemma) | Projecting to a block of $C_G(u)$ isolates exactly its generalized decomposition columns. | Translates module compatibility into coefficient vanishing. | literature-derived | literature-derived |
| `thm-brauer-second-main-theorem` (theorem) | For $\chi$ in block $B$, only blocks $c$ of $C_G(u)$ with $c^G=B$ contribute: $\chi(uv)=\sum_{c^G=B}\sum_{\varphi\in\operatorname{IBr}(c)}d^u_{\chi\varphi}\varphi(v)$. | Delivers the classical generalized-decomposition-number theorem. | literature-derived | literature-derived |
| `cor-generalized-decomposition-columns-have-corresponding-block-support` (corollary) | If $c^G\ne B$, then $d^u_{\chi\varphi}=0$ for $\chi\in B$, $\varphi\in c$. | Gives the reusable support formulation. | literature-derived | literature-derived |

**Hard proof plan.**  Prove existence/uniqueness of generalized coefficients
before assigning block support.  Decompose the restricted module by Nagao's
argument, show every error trace vanishes on the $p$-section, and apply local
block idempotents.  At $u=1$, the statement specializes to the ordinary
decomposition numbers already owned by GT-19 and is recorded inline, not
minted.  Also check central $u$, $v=1$, and the case when no local block induces
to $B$.

**B page:** `brauers-second-main-theorem-examples`

| item id (kind) | statement | what it is for | statement provenance | proof provenance |
|---|---|---|---|---|
| `ex-p-sections-and-brauer-subsections-in-a-small-finite-group` (example) | Work the p-section/subsection calculation explicitly supplied in the Craven range. | Tests the indexing of the theorem. | literature-derived | literature-derived |
| `ex-second-main-theorem-at-u-equals-one` (example) | Check directly that the formula reduces to the inherited ordinary decomposition matrix. | Verifies the principal boundary without re-minting it. | literature-derived | literature-derived |
| `ex-second-main-theorem-with-no-inducing-local-block` (example) | Work the source's vanishing boundary when the relevant local-block set is empty. | Checks the empty-sum conclusion. | literature-derived | literature-derived |

The two proof treatments read for RG-17 did **not** contain a clean small,
fully tabulated generalized-decomposition-number example.  The B page therefore
uses their p-section and boundary computations and deliberately does not invent
a table.

## Part II. Topological and locally compact groups

### RG-18 — Haar measure: construction and uniqueness

**A page:** `haar-measure-existence-and-uniqueness`

**Requires:** the measure-theory pages on Radon measures, Riesz representation,
regularity, product measures and monotone convergence; the topology pages on
locally compact Hausdorff spaces, compactness and partitions of unity.

**Source backing read:** Emmanuel Kowalski, *Representation Theory*, Chapter 5
§5.2, pp. 212–225; Ion Colojoară and Aurelian Gheondea, *Lectures on
Representations of Locally Compact Groups*, Chapter 2 §§1–2, pp. 31–48.

| item id (kind) | statement | what it is for | statement provenance | proof provenance |
|---|---|---|---|---|
| `def-left-haar-integral-and-left-haar-measure` (definition) | On a locally compact Hausdorff group $G$, define a left Haar integral as a nonzero positive left-translation-invariant functional on $C_c(G)$, and its representing Radon measure as left Haar measure. | Fixes the functional and measure formulations together. | literature-derived | not-applicable |
| `lem-translations-preserve-compactly-supported-continuous-functions` (lemma) | Left and right translation preserve $C_c(G)$, and translation varies continuously in the inductive-limit estimates used below. | Makes invariance and approximation well defined. | literature-derived | literature-derived |
| `def-haar-covering-ratio-of-test-functions` (definition) | For nonzero nonnegative $f,\phi\in C_c(G)$, define the normalized covering/translate ratio used in the von Neumann–Kakutani construction. | Introduces the finite approximants without presupposing measure. | literature-derived | not-applicable |
| `lem-haar-covering-ratios-are-finite-and-positive` (lemma) | Compactness gives finite translating covers and hence finite positive ratios for nonzero test functions. | Closes the nonempty and zero-denominator cases in the construction. | literature-derived | literature-derived |
| `lem-normalized-approximate-haar-functionals-are-positive-and-invariant-in-the-limit` (lemma) | The normalized ratio functionals are positive, normalized on a fixed test function, and asymptotically left invariant on each prescribed finite family. | Produces the finite constraints for compactness. | literature-derived | literature-derived |
| `lem-haar-candidate-sets-have-the-finite-intersection-property` (lemma) | Candidate values in the product of compact intervals satisfy every finite collection of positivity, additivity and invariance constraints. | Isolates the compactness step in Haar existence. | literature-derived | literature-derived |
| `thm-existence-of-a-left-haar-integral` (theorem) | Every locally compact Hausdorff group has a nonzero positive left-invariant functional on $C_c(G)$. | Establishes Haar existence with the actual Tychonoff-strength step visible. | literature-derived | literature-derived |
| `cor-existence-of-left-and-right-haar-measures` (corollary) | Riesz representation gives a left Haar measure, and inversion gives a right Haar measure. | Passes from the functional theorem to measures and both handednesses. | literature-derived | literature-derived |
| `lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets` (lemma) | A Haar measure has full support, is locally finite and assigns finite measure to compact sets. | Supplies the nondegeneracy facts used by convolution and quotient integration. | literature-derived | literature-derived |
| `lem-haar-integral-comparison-inequality` (lemma) | For nonzero nonnegative $f,g\in C_c(G)$, translate-cover estimates compare any two left-invariant positive functionals by constants determined by $f,g$. | Provides the engine of uniqueness. | literature-derived | literature-derived |
| `thm-uniqueness-of-left-haar-measure-up-to-scale` (theorem) | Any two left Haar measures on $G$ are positive scalar multiples. | Delivers the uniqueness half of Haar's theorem. | literature-derived | literature-derived |
| `cor-normalized-haar-probability-on-a-compact-group` (corollary) | A compact group has a unique left Haar probability measure, which is also right invariant. | Supplies the normalization required by RG-21 and RG-22. | literature-derived | literature-derived |

**Hard proof plan.**  Work first with positive functionals on $C_c(G)$ so that
existence is not smuggled into a measure approximation.  Compactness of supports
proves the finite constraints, Tychonoff supplies a simultaneous limit point,
and Riesz representation supplies the Radon measure.  For uniqueness, compare
two functionals on arbitrary nonzero positive test functions before extending by
positive and negative parts.  The empty group is excluded by the group axioms;
$f=0$, empty support and non-$\sigma$-compact $G$ are handled explicitly.

**B page:** `haar-measure-basic-models`

| item id (kind) | statement | what it is for | statement provenance | proof provenance |
|---|---|---|---|---|
| `ex-counting-measure-as-haar-measure-on-a-discrete-group` (example) | Verify that counting measure is Haar measure for an arbitrary discrete group. | Tests existence without countability or compact generation. | literature-derived | literature-derived |
| `ex-lebesgue-measure-as-haar-measure-on-rn` (example) | Identify Haar measure on $(\mathbb R^n,+)$ with Lebesgue measure up to scale. | Connects the abstract construction to the inherited integration theory. | literature-derived | literature-derived |
| `ex-normalized-haar-measure-on-a-finite-group` (example) | Normalize counting measure to total mass one and check bi-invariance. | Tests the compact normalization at the finite endpoint. | literature-derived | literature-derived |
| `ex-haar-measure-on-an-infinite-product-of-compact-groups` (example) | Use the source's product model to identify normalized Haar probability on an infinite compact product. | Shows why general compact groups are not exhausted by compact Lie groups. | literature-derived | literature-derived |

### RG-19 — The modular function and the group algebra $L^1(G)$

**A page:** `the-modular-function-and-l1-group-algebras`

**Requires:** RG-18; the measure-theory Fubini–Tonelli, change-of-variables and
$L^p$ pages; `banach-algebras-spectrum-and-holomorphic-functional-calculus`.

**Source backing read:** Kowalski, Chapter 5 §§5.2–5.3, pp. 212–230;
David Vogan, *Invariant measures on homogeneous spaces*, pp. 1–3; Bachir
Bekka, Pierre de la Harpe and Alain Valette, *Kazhdan's Property (T)*,
Appendix A §§A.3–A.4, pp. 299–306.

| item id (kind) | statement | what it is for | statement provenance | proof provenance |
|---|---|---|---|---|
| `def-modular-function-of-a-locally-compact-group` (definition) | For fixed left Haar measure $\mu$, define $\Delta_G$ by $\int f(xg)\,d\mu(x)=\Delta_G(g^{-1})\int f\,d\mu$. | Fixes the inverse convention used in every later formula. | literature-derived | not-applicable |
| `lem-right-translation-scales-left-haar-measure` (lemma) | Uniqueness of Haar measure makes every right translate a positive scalar multiple of $\mu$. | Proves the defining scalar exists and is independent of $f$. | literature-derived | literature-derived |
| `thm-the-modular-function-is-a-continuous-homomorphism` (theorem) | $\Delta_G:G\to\mathbb R_{>0}$ is a continuous group homomorphism. | Supplies the covariance factor for involution and induction. | literature-derived | literature-derived |
| `lem-haar-change-of-variables-under-inversion` (lemma) | Integration after $x\mapsto x^{-1}$ introduces precisely the adopted $\Delta_G$ factor. | Prevents the standard inverse/sign convention error. | literature-derived | literature-derived |
| `def-unimodular-locally-compact-group` (definition) | A locally compact group is unimodular when $\Delta_G\equiv1$. | Names the regime where left and right Haar measures agree. | literature-derived | not-applicable |
| `prop-compact-discrete-and-abelian-groups-are-unimodular` (proposition) | Every compact, discrete or abelian locally compact group is unimodular. | Supplies the main boundary classes and interfaces with FR. | literature-derived | literature-derived |
| `def-convolution-on-cc-and-l1-of-a-group` (definition) | Define $(f*g)(x)=\int_G f(y)g(y^{-1}x)\,d\mu(y)$ first on $C_c(G)$ and then on $L^1(G)$. | Fixes the order convention for a noncommutative group. | literature-derived | not-applicable |
| `lem-convolution-preserves-cc-and-is-associative` (lemma) | $C_c(G)$ is closed under convolution and convolution is associative. | Establishes the algebraic core before completion. | literature-derived | literature-derived |
| `lem-l1-convolution-norm-inequality` (lemma) | $\lVert f*g\rVert_1\le\lVert f\rVert_1\lVert g\rVert_1$. | Makes convolution descend to $L^1$ and gives continuity. | literature-derived | literature-derived |
| `def-involution-on-l1-of-a-group` (definition) | Define $f^*(x)=\Delta_G(x^{-1})\overline{f(x^{-1})}$. | Records the modular correction required outside the unimodular case. | literature-derived | not-applicable |
| `lem-the-l1-involution-is-isometric-and-reverses-convolution` (lemma) | The involution satisfies $\lVert f^*\rVert_1=\lVert f\rVert_1$ and $(f*g)^*=g^**f^*$. | Verifies the Banach-star-algebra axioms. | literature-derived | literature-derived |
| `thm-l1-of-a-locally-compact-group-is-a-banach-star-algebra` (theorem) | With convolution and the modular involution, $L^1(G)$ is a Banach $*$-algebra. | Creates the analytic algebra used by integrated representations. | literature-derived | literature-derived |
| `thm-l1-group-algebras-have-a-contractively-bounded-approximate-identity` (theorem) | Compactly supported nonnegative functions concentrating at the identity form a bounded approximate identity. | Replaces the missing unit when $G$ is nondiscrete. | literature-derived | literature-derived |
| `def-left-and-right-regular-unitary-representations` (definition) | Define the left regular representation and the modularly corrected right regular representation on $L^2(G)$. | Fixes both regular actions in the nonunimodular case. | literature-derived | not-applicable |
| `thm-regular-representations-are-unitary-and-strongly-continuous` (theorem) | Both corrected regular actions are unitary and strongly continuous; the left action is faithful as a group representation. | Supplies the basic infinite-dimensional examples and RG-25's reduced norm. | literature-derived | literature-derived |

**Hard proof plan.**  Derive every modular factor from the one displayed
definition rather than importing a formula from a source with the reciprocal
convention.  Prove convolution facts first for $C_c(G)$ using compact support
and Fubini, extend by density, then verify the involution.  Treat a discrete
group (where $L^1$ is unital) separately from a nondiscrete group (where only an
approximate identity is promised).

**B page:** `modular-function-and-convolution-examples`

| item id (kind) | statement | what it is for | statement provenance | proof provenance |
|---|---|---|---|---|
| `ex-modular-function-of-the-affine-group-of-the-line` (example) | Compute $\Delta$ for the real $ax+b$ group in the source's coordinates. | Exhibits an amenable but nonunimodular group and checks the inverse convention. | literature-derived | literature-derived |
| `ex-convolution-on-a-discrete-group` (example) | Recover the usual summation formula and delta-function unit. | Checks the nondiscrete definitions at the algebraic endpoint. | literature-derived | literature-derived |
| `ex-convolution-on-a-compact-group` (example) | Use normalized Haar measure to compute convolution of constants and matrix coefficients. | Prepares the compact spectral calculations. | literature-derived | literature-derived |
| `cex-naive-inversion-is-not-the-l1-involution-for-a-nonunimodular-group` (counterexample) | In the affine group, omit $\Delta$ and show the resulting operation is not isometric. | Demonstrates that the modular correction is indispensable. | literature-derived | literature-derived |

### RG-20 — Unitary representations, positive type and GNS

**A page:** `unitary-representations-positive-type-and-gns`

**Requires:** RG-18–RG-19;
`spectral-measures-and-borel-functional-calculus` for the projection argument
in unitary Schur; Hilbert-space completion and quotient constructions.

**Source backing read:** Bekka–de la Harpe–Valette, Appendix A §§A.1–A.2,
pp. 289–299, and Appendix C §§C.1–C.5, pp. 340–365; Bekka and de la Harpe,
*Unitary Representations of Groups, Duals, and Characters*, Chapter 1
§§1.A–1.B, pp. 13–26; Kowalski, Chapter 3 §§3.1–3.2, pp. 107–122.

| item id (kind) | statement | what it is for | statement provenance | proof provenance |
|---|---|---|---|---|
| `def-strongly-continuous-unitary-representation` (definition) | Define a unitary representation $\pi:G\to U(\mathcal H)$ by strong continuity, including invariant subspaces, intertwiners and equivalence. | Fixes the continuity notion used throughout the infinite half. | literature-derived | not-applicable |
| `lem-continuity-criteria-for-unitary-representations` (lemma) | Strong continuity is equivalent to continuity of all matrix coefficients, and it is enough to test diagonal coefficients on a total set. | Makes later constructions easier to verify. | literature-derived | literature-derived |
| `def-cyclic-vector-and-cyclic-unitary-representation` (definition) | A vector is cyclic when its orbit span is dense. | Names the representations reconstructed by GNS. | literature-derived | not-applicable |
| `thm-schurs-lemma-for-unitary-representations` (theorem) | For an irreducible complex unitary representation, every bounded intertwiner is scalar; intertwiners between inequivalent irreducibles vanish. | Supplies the infinite-dimensional Schur statement without algebraic finite-dimensional shortcuts. | literature-derived | literature-derived |
| `def-matrix-coefficient-of-a-unitary-representation` (definition) | Define $g\mapsto\langle\pi(g)\xi,\eta\rangle$. | Introduces the functions used by Fell topology and harmonic analysis. | literature-derived | not-applicable |
| `lem-unitary-matrix-coefficients-are-bounded-and-uniformly-continuous` (lemma) | Coefficients are bounded and have the appropriate left/right uniform continuity. | Places coefficients in the correct function algebra. | literature-derived | literature-derived |
| `def-continuous-function-of-positive-type` (definition) | A continuous $\varphi:G\to\mathbb C$ is of positive type when every matrix $(\varphi(g_i^{-1}g_j))$ is positive semidefinite. | States the exact finite-matrix condition, including repeated points and zero coefficients. | literature-derived | not-applicable |
| `lem-diagonal-unitary-coefficients-have-positive-type` (lemma) | Every $g\mapsto\langle\pi(g)\xi,\xi\rangle$ is of positive type, with $\varphi(e)=\lVert\xi\rVert^2$. | Proves the easy direction of GNS. | literature-derived | literature-derived |
| `lem-positive-type-functions-define-a-pre-hilbert-form` (lemma) | A positive-type function defines a positive semidefinite sesquilinear form on the finitely supported functions on $G$. | Starts the GNS construction without any measure assumption. | literature-derived | literature-derived |
| `lem-the-gns-null-space-is-translation-invariant` (lemma) | The zero-length subspace is a left-translation-invariant linear subspace. | Makes the quotient action well defined. | literature-derived | literature-derived |
| `lem-the-gns-translation-action-is-unitary-and-strongly-continuous` (lemma) | Left translation descends to isometries of the quotient completion, and continuity of $\varphi$ gives strong continuity. | Closes the analytic part of the construction. | literature-derived | literature-derived |
| `thm-gns-construction-for-topological-groups` (theorem) | Every continuous positive-type $\varphi$ is a coefficient $\langle\pi_\varphi(g)\xi_\varphi,\xi_\varphi\rangle$ of a cyclic strongly continuous unitary representation. | Delivers the positive-function/representation bridge. | literature-derived | literature-derived |
| `thm-uniqueness-of-the-cyclic-gns-representation` (theorem) | A cyclic realization of $\varphi$ is unique up to the unique unitary intertwiner carrying one cyclic vector to the other. | Makes the construction canonical up to equivalence. | literature-derived | literature-derived |
| `cor-normalized-positive-type-functions-correspond-to-pointed-cyclic-representations` (corollary) | The condition $\varphi(e)=1$ corresponds exactly to a unit cyclic vector. | Supplies the normalized state space used in weak containment. | literature-derived | literature-derived |
| `thm-pure-positive-type-functions-correspond-to-irreducible-gns-representations` (theorem) | Extreme normalized positive-type functions are precisely those whose GNS representations are irreducible. | Connects convex geometry to the unitary dual. | literature-derived | literature-derived |

**Hard proof plan.**  For Schur, apply the inherited spectral theorem to the
self-adjoint parts of an intertwiner and use irreducibility of spectral
subspaces.  For GNS, quotient the finitely supported function space by the
null space before completing, prove strong continuity first on the cyclic
orbit, then extend by density.  The zero function yields the zero Hilbert space
but is not normalized; the normalized theorem therefore always has a nonzero
cyclic vector.

**B page:** `positive-type-and-gns-examples`

| item id (kind) | statement | what it is for | statement provenance | proof provenance |
|---|---|---|---|---|
| `ex-positive-type-functions-on-a-discrete-group` (example) | Check the finite-matrix criterion for delta at the identity and for a finite-dimensional character coefficient. | Gives two concrete GNS inputs without topology. | literature-derived | literature-derived |
| `ex-gns-representation-of-a-one-dimensional-character` (example) | Reconstruct a continuous unitary character from its normalized coefficient. | Tests cyclic uniqueness in dimension one. | literature-derived | literature-derived |
| `ex-positive-type-gaussian-on-the-real-line` (example) | Use the source's Fourier model for $e^{-t^2}$ and identify its cyclic realization, citing FR for the abelian transform. | Interfaces with the abelian theory without duplicating Pontryagin duality. | literature-derived | literature-derived |
| `cex-a-bounded-continuous-function-need-not-have-positive-type` (counterexample) | Work the source's finite matrix whose quadratic form is negative. | Shows boundedness and continuity do not imply GNS positivity. | literature-derived | literature-derived |

### RG-21 — Complete reducibility for compact groups

**A page:** `complete-reducibility-for-compact-groups`

**Requires:** RG-18–RG-20; `compact-operators-and-riesz-schauder-theory` and
`compact-self-adjoint-hilbert-schmidt-and-trace-class-operators`.

**Source backing read:** Kowalski, Chapter 5 §§5.3–5.5, pp. 225–242;
David Vogan, *Review of harmonic analysis on compact groups*, pp. 1–12;
Bekka–de la Harpe–Valette, Appendix A §A.5, pp. 306–307.

| item id (kind) | statement | what it is for | statement provenance | proof provenance |
|---|---|---|---|---|
| `def-averaged-hermitian-form-for-a-compact-group` (definition) | Average any Hermitian form over normalized Haar measure. | Introduces the compact-group replacement for finite averaging. | literature-derived | not-applicable |
| `lem-averaging-makes-a-finite-dimensional-representation-unitary` (lemma) | The averaged form is positive definite and invariant for every continuous finite-dimensional representation. | Reduces finite-dimensional compact representation theory to the unitary case. | literature-derived | literature-derived |
| `lem-unitary-invariant-subspaces-have-invariant-orthogonal-complements` (lemma) | The orthogonal complement of a closed invariant subspace is invariant. | Supplies the complement step independently of dimension. | literature-derived | literature-derived |
| `thm-finite-dimensional-compact-group-representations-are-completely-reducible` (theorem) | Every continuous finite-dimensional complex representation of a compact group is a finite direct sum of irreducibles. | Delivers the finite-dimensional complete-reducibility theorem. | literature-derived | literature-derived |
| `def-haar-averaging-operator-on-hom-spaces` (definition) | Average a bounded operator $T:V\to W$ as $\int_K\sigma(k)T\pi(k)^{-1}\,dk$. | Builds equivariant projections and intertwiners. | literature-derived | not-applicable |
| `lem-haar-averaging-projects-onto-the-intertwiner-space` (lemma) | Averaging is an idempotent contraction onto $\operatorname{Hom}_K(V,W)$. | Gives a reusable analytic projection. | literature-derived | literature-derived |
| `lem-compact-convolution-operators-are-hilbert-schmidt` (lemma) | For $f\in L^2(K)$, convolution by $f$ on $L^2(K)$ is Hilbert–Schmidt and hence compact. | Supplies finite-dimensional spectral blocks for irreducibles. | literature-derived | literature-derived |
| `thm-continuous-irreducible-unitary-representations-of-compact-groups-are-finite-dimensional` (theorem) | Every irreducible continuous unitary representation of a compact group is finite dimensional. | Prevents hidden infinite-dimensional irreducible summands. | literature-derived | literature-derived |
| `thm-schur-orthogonality-for-compact-groups` (theorem) | Matrix coefficients of inequivalent irreducibles are orthogonal, with the $1/\dim\pi$ normalization within one irreducible. | Provides the general compact-group orthogonality not owned by the finite or compact-Lie pages. | literature-derived | literature-derived |
| `def-compact-group-isotypic-projection` (definition) | For irreducible $\sigma$, define $P_\sigma=d_\sigma\int_K\overline{\chi_\sigma(k)}\pi(k)\,dk$. | Creates explicit projections onto compact isotypic components. | literature-derived | not-applicable |
| `thm-isotypic-projections-are-mutually-orthogonal-equivariant-projections` (theorem) | The $P_\sigma$ are bounded self-adjoint equivariant projections with pairwise orthogonal ranges. | Prepares the global Hilbert decomposition proved after Peter–Weyl. | literature-derived | literature-derived |

**Hard proof plan.**  Separate finite-dimensional unitarization from the
infinite-dimensional theorem.  Use an explicitly nonzero compact convolution
operator inside an irreducible representation and the inherited compact
spectral theorem to force a finite-dimensional invariant eigenspace.  Prove
orthogonality by Haar averaging of rank-one operators, including inequivalent,
equivalent and one-dimensional cases.  Do not claim that the isotypic
projections sum to the identity until RG-22 proves density.

**B page:** `compact-group-complete-reducibility-examples`

| item id (kind) | statement | what it is for | statement provenance | proof provenance |
|---|---|---|---|---|
| `ex-averaging-a-form-for-a-circle-representation` (example) | Average a noninvariant form and recover the weight-space orthogonal form. | Makes unitarization explicit in an abelian compact model. | literature-derived | literature-derived |
| `ex-isotypic-projections-for-a-finite-group-as-a-compact-group` (example) | Evaluate the Haar integrals as normalized finite sums. | Checks agreement with inherited finite representation theory. | literature-derived | literature-derived |
| `ex-compact-group-with-no-faithful-finite-dimensional-representation` (example) | Use the source's infinite compact product example. | Shows why the theory must not assume every compact group is a compact Lie or matrix group. | literature-derived | literature-derived |
| `cex-haar-averaging-does-not-produce-a-finite-measure-for-a-noncompact-group` (counterexample) | Work the source's failure of normalized averaging on $\mathbb R$. | Marks the exact point where compactness enters complete reducibility. | literature-derived | literature-derived |

### RG-22 — Peter–Weyl theory for general compact groups

**A page:** `peter-weyl-theory-for-general-compact-groups`

**Requires:** RG-18–RG-21; the topology page on complex Stone–Weierstrass;
the two compact-operator pages cited by RG-21.  Cite
`compact-lie-groups-maximal-tori-and-peter-weyl-theory` for comparison only.

**Source backing read:** Kowalski, Chapter 5 §§5.4–5.5, pp. 230–242;
Vogan, *Review of harmonic analysis on compact groups*, pp. 1–12;
Colojoară–Gheondea, Chapter 3's compact-group treatment, pp. 65–90.

| item id (kind) | statement | what it is for | statement provenance | proof provenance |
|---|---|---|---|---|
| `def-representative-function-on-a-compact-group` (definition) | A representative function is a finite linear combination of matrix coefficients of finite-dimensional continuous representations. | Names the algebra whose density is Peter–Weyl. | literature-derived | not-applicable |
| `lem-representative-functions-form-a-self-adjoint-translation-invariant-algebra` (lemma) | Representative functions contain constants and are closed under products, conjugation and left/right translation. | Supplies the Stone–Weierstrass algebraic hypotheses. | literature-derived | literature-derived |
| `lem-compact-group-matrix-coefficients-separate-points` (lemma) | For $x\ne y$ in a compact group, some finite-dimensional unitary representation has a matrix coefficient taking different values at $x,y$. | Supplies the nontrivial separation step without assuming a faithful matrix representation. | literature-derived | literature-derived |
| `lem-finite-rank-spectral-pieces-of-compact-convolution` (lemma) | Spectral subspaces of a compact convolution operator are finite-dimensional and translation invariant. | Constructs the separating finite-dimensional representations. | literature-derived | literature-derived |
| `thm-uniform-peter-weyl-density` (theorem) | Representative functions are uniformly dense in $C(K)$. | Gives the topological form of Peter–Weyl for every compact Hausdorff group. | literature-derived | literature-derived |
| `def-normalized-irreducible-matrix-coefficient-basis` (definition) | For each irreducible $\pi$, normalize coefficients by $\sqrt{\dim\pi}$ relative to orthonormal bases. | Fixes the precise $L^2$ normalization. | literature-derived | not-applicable |
| `thm-l2-peter-weyl-orthonormal-basis` (theorem) | The normalized irreducible matrix coefficients form an orthonormal basis of $L^2(K)$. | Delivers the Hilbert-space form and completeness. | literature-derived | literature-derived |
| `thm-regular-representation-peter-weyl-decomposition` (theorem) | The left regular representation is $\widehat\bigoplus_{\pi\in\widehat K}(\dim\pi)\pi$, with the right action on the dual factor. | Records both multiplicity and the commuting right action. | literature-derived | literature-derived |
| `thm-arbitrary-unitary-representations-of-compact-groups-decompose-discretely` (theorem) | Every continuous unitary representation of $K$ is the Hilbert direct sum of its finite-dimensional irreducible isotypic components. | Completes the compact complete-reducibility story begun in RG-21. | literature-derived | literature-derived |
| `cor-parseval-and-fourier-inversion-for-compact-groups` (corollary) | Peter–Weyl coefficients satisfy Parseval, and finite spectral sums approximate continuously or in $L^2$ in the source's stated modes. | Supplies the noncommutative compact Fourier formulas. | literature-derived | literature-derived |
| `cor-each-vector-in-a-compact-representation-has-countable-isotypic-support` (corollary) | In the Peter–Weyl Hilbert sum, any one vector has nonzero components in at most countably many irreducible isotypic summands. | Closes the nonmetrizable case without falsely making the whole dual countable. | literature-derived | literature-derived |

**Hard proof plan.**  Starting from RG-21 compact convolution, use nonzero
spectral subspaces to separate distinct points, then apply the inherited complex
Stone–Weierstrass theorem.  Orthogonality plus uniform density yields $L^2$
completeness.  Apply the isotypic projections to an arbitrary unitary
representation and prove the orthogonal complement of all ranges is zero by
testing coefficient functions.  No maximal torus, Weyl integration formula or
Lie structure appears: those remain on the cited DG page.

**B page:** `peter-weyl-models-beyond-compact-lie-groups`

| item id (kind) | statement | what it is for | statement provenance | proof provenance |
|---|---|---|---|---|
| `ex-peter-weyl-for-a-profinite-group` (example) | Show that every continuous finite-dimensional representation in the source's profinite model factors through an appropriate finite quotient and compute its coefficient spaces. | Exhibits genuinely non-Lie compact harmonic analysis. | literature-derived | literature-derived |
| `ex-peter-weyl-for-an-infinite-product-of-finite-groups` (example) | Describe the finite-coordinate irreducibles and their dense coefficient algebra. | Tests both arbitrary products and point separation. | literature-derived | literature-derived |
| `ex-peter-weyl-for-the-circle-without-reminting-pontryagin-duality` (example) | Identify the coefficient basis with the integer characters, citing FR's abelian result. | Checks the general theorem against the familiar Fourier series model. | literature-derived | literature-derived |
| `cex-compact-peter-weyl-is-not-a-direct-sum-decomposition-for-noncompact-regular-representations` (counterexample) | Use the source's regular representation of $\mathbb R$ to show why direct integrals are required. | Motivates RG-26 and blocks overextension of the compact theorem. | literature-derived | literature-derived |

### RG-23 — Unitary induction for locally compact groups

**A page:** `induced-unitary-representations-of-locally-compact-groups`

**Requires:** RG-18–RG-20; the measure-theory pages on Radon–Nikodym
derivatives and disintegration.  The finite-group page
`induced-representations-and-frobenius-reciprocity` supplies motivation only;
its counting-measure formula is not reused as the definition.

**Source backing read:** Colojoară–Gheondea, Chapter 4 §§1–4, pp. 91–115;
Bekka–de la Harpe–Valette, Appendix E §§E.1–E.3, pp. 383–393; David Vogan,
*Unitary induced representations*, pp. 1–5, and *Invariant measures on
homogeneous spaces*, pp. 1–3.

| item id (kind) | statement | what it is for | statement provenance | proof provenance |
|---|---|---|---|---|
| `def-quasi-invariant-measure-on-a-homogeneous-space` (definition) | Define a Radon measure class on $G/H$ to be quasi-invariant when all left translates are equivalent. | States the measure datum induction actually needs. | literature-derived | not-applicable |
| `def-rho-function-for-a-closed-subgroup` (definition) | For closed $H\le G$, define a positive continuous rho-function with the source's $\Delta_G/\Delta_H$ covariance. | Encodes the mismatch between Haar measures on $G$ and $H$. | literature-derived | not-applicable |
| `thm-existence-of-rho-functions-and-quasi-invariant-measures-on-g-mod-h` (theorem) | Every closed subgroup admits a rho-function and a corresponding strongly quasi-invariant Radon measure on $G/H$. | Provides the measure class required for induction. | literature-derived | literature-derived |
| `thm-weil-quotient-integration-formula-with-rho-function` (theorem) | Integration on $G$ factors into integration over $G/H$ and $H$ with the rho correction. | Makes the induced norm and its invariance calculable. | literature-derived | literature-derived |
| `lem-radon-nikodym-cocycle-of-a-homogeneous-measure` (lemma) | The translated quotient measures have a continuous Radon–Nikodym cocycle satisfying the one-cocycle identity. | Supplies the square-root factor in the induced action. | literature-derived | literature-derived |
| `def-covariant-function-model-of-unitary-induction` (definition) | For a unitary $H$-representation $\sigma$, define the measurable $V_\sigma$-valued functions on $G$ obeying the right-$H$ covariance law and square integrability over $G/H$. | Specifies the carrier Hilbert space, including equality almost everywhere. | literature-derived | not-applicable |
| `lem-the-induced-inner-product-is-independent-of-coset-representatives` (lemma) | The covariance and rho factors make the fiber norm descend to an integrable function on $G/H$. | Proves the proposed Hilbert norm is well defined. | literature-derived | literature-derived |
| `lem-the-induced-action-is-unitary` (lemma) | Left translation with the Radon–Nikodym square-root correction preserves the induced inner product. | Verifies the representation law and unitarity. | literature-derived | literature-derived |
| `lem-the-induced-action-is-strongly-continuous` (lemma) | The induced action is strongly continuous, first on compactly supported continuous sections and then by density. | Closes the topological requirement. | literature-derived | literature-derived |
| `thm-unitary-induction-from-a-closed-subgroup` (theorem) | The preceding construction defines $\operatorname{Ind}_H^G\sigma$ for any closed subgroup and strongly continuous unitary $\sigma$. | Delivers locally compact induction. | literature-derived | literature-derived |
| `thm-induced-representation-is-independent-of-rho-function-and-measure-representative` (theorem) | Different rho-functions and equivalent quotient measures give canonically unitarily equivalent induced representations after the stated density correction. | Shows induction depends only on the measure class, not auxiliary choices. | literature-derived | literature-derived |
| `thm-unitary-induction-in-stages` (theorem) | For closed $H\le K\le G$ under the source hypotheses, $\operatorname{Ind}_H^G\sigma\simeq\operatorname{Ind}_K^G\operatorname{Ind}_H^K\sigma$. | Supplies the transitivity needed by the Mackey machine and $SL_2(\mathbb R)$. | literature-derived | literature-derived |

**Hard proof plan.**  Construct the quotient measure class before the Hilbert
space and carry both modular functions through every covariance formula.  Work
on compactly supported continuous sections to prove density and strong
continuity, then complete.  Prove independence by writing the explicit
multiplication unitary for two equivalent measures.  When $H=G$, $G/H$ is one
point and induction is $\sigma$; when $H=\{e\}$ it is the left regular
representation; when $G/H$ has invariant measure the cocycle disappears.

**B page:** `locally-compact-induction-models`

| item id (kind) | statement | what it is for | statement provenance | proof provenance |
|---|---|---|---|---|
| `ex-unitary-induction-from-the-trivial-subgroup` (example) | Identify $\operatorname{Ind}_{\{e\}}^G1$ with the left regular representation. | Checks the quotient and action conventions. | literature-derived | literature-derived |
| `ex-unitary-induction-from-a-cocompact-lattice` (example) | Realize the quasi-regular representation on $L^2(G/\Gamma)$. | Gives a noncompact group with finite invariant quotient measure. | literature-derived | literature-derived |
| `ex-unitary-induction-for-a-finite-group-recovers-the-counting-model` (example) | Specialize the construction to finite $G$ and compare it with the inherited algebraic induced module. | Verifies compatibility without re-proving finite Frobenius reciprocity. | literature-derived | literature-derived |
| `cex-g-mod-h-need-not-have-an-invariant-measure` (counterexample) | Use Vogan's modular-function criterion and example to show that a quasi-invariant class cannot always be replaced by an invariant measure. | Demonstrates why rho-functions and cocycles are necessary. | literature-derived | literature-derived |

### RG-24 — Systems of imprimitivity and Mackey's theorem

**A page:** `mackeys-imprimitivity-theorem`

**Requires:** RG-20 and RG-23;
`spectral-measures-and-borel-functional-calculus`.  Assume $G$ is second
countable locally compact, $H$ is closed, and all Hilbert spaces are separable.

**Source backing read:** Colojoară–Gheondea, Chapter 4 §5, pp. 116–126;
George W. Mackey, “Imprimitivity for Representations of Locally Compact
Groups I,” *PNAS* 35 (1949), pp. 537–545.

| item id (kind) | statement | what it is for | statement provenance | proof provenance |
|---|---|---|---|---|
| `def-system-of-imprimitivity` (definition) | A system for an action $G\curvearrowright X$ is a unitary representation $U$ and projection-valued measure $P$ with $U_gP(E)U_g^{-1}=P(gE)$. | States the covariance datum classified by Mackey. | literature-derived | not-applicable |
| `def-transitive-system-of-imprimitivity` (definition) | A system is transitive when the underlying standard Borel $G$-space is $G/H$ for a closed stabilizer $H$. | Fixes the theorem's scope and excludes arbitrary orbit spaces. | literature-derived | not-applicable |
| `lem-induced-representations-carry-a-canonical-system-of-imprimitivity` (lemma) | Multiplication by indicators on $G/H$ is a PVM covariant with $\operatorname{Ind}_H^G\sigma$. | Constructs one direction of the correspondence. | literature-derived | literature-derived |
| `lem-a-system-of-imprimitivity-gives-a-representation-of-the-transformation-algebra` (lemma) | The integrated formula for $C_c(G\times X)$ combines $U$ and $P$ into a nondegenerate representation. | Packages covariance for the reconstruction proof. | literature-derived | literature-derived |
| `lem-spectral-measure-multiplicity-model-for-a-transitive-system` (lemma) | The inherited PVM theorem realizes the Hilbert space as square-integrable sections over $G/H$ with $P$ acting by multiplication. | Produces the measurable bundle used to recover the stabilizer action. | literature-derived | literature-derived |
| `lem-the-stabilizer-action-on-an-imprimitivity-fiber-is-unitary` (lemma) | Covariance transports fibers and restricts over the base coset to a unitary representation of $H$. | Extracts the inducing representation. | literature-derived | literature-derived |
| `lem-the-imprimitivity-reconstruction-map-is-isometric-and-intertwining` (lemma) | The measurable transport map from the system to the induced-section model preserves norms and intertwines both $U$ and $P$. | Proves existence of the classified form. | literature-derived | literature-derived |
| `thm-mackey-imprimitivity-theorem` (theorem) | Every transitive separable system of imprimitivity for $G$ on $G/H$ is equivalent to the canonical system induced from a unitary representation of $H$. | Delivers the requested classification theorem. | literature-derived | literature-derived |
| `thm-uniqueness-in-mackey-imprimitivity` (theorem) | Equivalent transitive systems yield equivalent inducing $H$-representations, and conversely. | Upgrades existence to a bijection of equivalence classes. | literature-derived | literature-derived |
| `cor-mackey-little-group-reduction-for-an-abelian-normal-subgroup` (corollary) | Under the regular-orbit hypotheses in the source, irreducibles of $N\rtimes H$ are induced from stabilizers of characters in $\widehat N$. | Records the principal noncommutative application while citing FR for $\widehat N$. | literature-derived | literature-derived |

**Hard proof plan.**  Construct the canonical system directly in the RG-23
model.  For the converse, use the inherited PVM representation theorem to
obtain a measurable field, choose transport only on a conull standard Borel
set, recover the $H$-action in the base fiber, and verify the reconstruction
map.  The standard-Borel, separability and second-countability assumptions are
load-bearing; the page makes no theorem for arbitrary pathological orbit
spaces.  For $H=G$ the base is one point; for $H=\{e\}$ the canonical system is
the multiplication/translation system on $G$.

**B page:** `systems-of-imprimitivity-examples`

| item id (kind) | statement | what it is for | statement provenance | proof provenance |
|---|---|---|---|---|
| `ex-the-regular-position-momentum-imprimitivity-system` (example) | Work the translation system on $L^2(\mathbb R^n)$ and identify its trivial stabilizer representation. | Gives the classical model behind the theorem. | literature-derived | literature-derived |
| `ex-imprimitivity-for-a-finite-transitive-g-set` (example) | Recover the stabilizer/induction classification for a finite homogeneous space. | Checks agreement with algebraic induction. | literature-derived | literature-derived |
| `ex-little-groups-for-the-real-ax-plus-b-group` (example) | Use the two nonzero dual orbits and their stabilizers to construct the source's induced representations. | Applies Mackey to a concrete noncompact nonabelian group. | literature-derived | literature-derived |
| `cex-a-nontransitive-system-is-not-classified-by-one-stabilizer` (counterexample) | Work the source's disjoint-orbit system and its spectral projections. | Shows transitivity is essential to the one-subgroup theorem. | literature-derived | literature-derived |

### RG-25 — Group $C^*$-algebras and the unitary dual

**A page:** `group-c-star-algebras-and-the-fell-unitary-dual`

**Requires:** RG-19–RG-20 and RG-22;
`banach-algebras-spectrum-and-holomorphic-functional-calculus`,
`gelfand-theory-and-commutative-c-star-algebras` and
`spectral-measures-and-borel-functional-calculus`.  For topological assertions,
assume second countability unless explicitly weakened.

**Source backing read:** Bekka–de la Harpe, Chapter 1 §§1.A–1.F,
pp. 13–51, and Chapter 8 §§8.A–8.D, pp. 231–260;
Bekka–de la Harpe–Valette, Appendix F §§F.1–F.4, pp. 395–413.

| item id (kind) | statement | what it is for | statement provenance | proof provenance |
|---|---|---|---|---|
| `def-integrated-form-of-a-unitary-representation` (definition) | Define $\pi(f)=\int_G f(g)\pi(g)\,dg$ weakly for $f\in L^1(G)$. | Connects unitary representations to the convolution algebra. | literature-derived | not-applicable |
| `lem-integrated-forms-are-nondegenerate-star-representations` (lemma) | The integrated form is contractive, multiplicative, involution preserving and nondegenerate. | Verifies that the universal norm sees all unitary representations. | literature-derived | literature-derived |
| `thm-unitary-representations-and-nondegenerate-l1-star-representations-correspond` (theorem) | Strongly continuous unitary representations of $G$ correspond to nondegenerate $*$-representations of $L^1(G)$. | Allows group questions to be expressed in operator-algebraic terms. | literature-derived | literature-derived |
| `def-full-group-c-star-algebra` (definition) | Complete $L^1(G)$ modulo the universal seminorm $\sup_\pi\lVert\pi(f)\rVert$ to obtain $C^*(G)$. | Defines the universal analytic envelope. | literature-derived | not-applicable |
| `lem-the-full-group-c-star-seminorm-is-finite-and-separates-the-required-quotient` (lemma) | The universal seminorm is bounded by $\lVert f\rVert_1$ and its zero ideal is a $*$-ideal. | Makes the completion well defined. | literature-derived | literature-derived |
| `thm-nondegenerate-representations-of-c-star-g-are-unitary-representations-of-g` (theorem) | Integrated form extends uniquely to an equivalence between nondegenerate representations of $C^*(G)$ and unitary representations of $G$. | States the universal property used by weak containment. | literature-derived | literature-derived |
| `def-reduced-group-c-star-algebra` (definition) | Define $C_r^*(G)$ as the norm closure of the left integrated regular representation. | Creates the regular quotient used by amenability and temperedness. | literature-derived | not-applicable |
| `thm-the-canonical-map-from-full-to-reduced-group-c-star-algebra` (theorem) | The regular representation induces a surjective $*$-homomorphism $C^*(G)\twoheadrightarrow C_r^*(G)$. | Fixes the relation between universal and regular representation theory. | literature-derived | literature-derived |
| `def-unitary-dual-of-a-locally-compact-group` (definition) | $\widehat G$ is the set of unitary-equivalence classes of irreducible strongly continuous unitary representations. | Names the object topologized below. | literature-derived | not-applicable |
| `def-weak-containment-of-unitary-representations` (definition) | Define $\pi\prec\rho$ by approximation of coefficients on compact sets, allowing finite sums of diagonal coefficients. | Gives the representation-theoretic specialization relation. | literature-derived | not-applicable |
| `thm-weak-containment-is-equivalent-to-kernel-inclusion` (theorem) | $\pi\prec\rho$ iff $\ker\rho\subseteq\ker\pi$ as representations of $C^*(G)$. | Makes weak containment computable through ideals. | literature-derived | literature-derived |
| `def-fell-topology-on-the-unitary-dual` (definition) | Define neighborhoods by compact-uniform approximation of finitely many coefficients, equivalently the hull–kernel topology through primitive ideals in the type-I setting. | Fixes the requested topology and warns that it need not be Hausdorff. | literature-derived | not-applicable |
| `lem-fell-closure-is-characterized-by-weak-containment` (lemma) | An irreducible lies in the closure of a set exactly when it is weakly contained in their direct sum. | Connects topology to analytic approximation. | literature-derived | literature-derived |
| `cor-the-unitary-dual-of-a-compact-group-is-fell-discrete` (corollary) | Every irreducible class of a compact group is isolated in the Fell topology. | Translates Peter–Weyl's discrete Hilbert sum into the topology now defined. | literature-derived | literature-derived |
| `def-primitive-ideal-space-of-a-group-c-star-algebra` (definition) | Define $\operatorname{Prim}C^*(G)$ and the map $[\pi]\mapsto\ker\pi$. | Introduces the quotient that remains manageable beyond type I. | literature-derived | not-applicable |
| `prop-the-unitary-dual-to-primitive-ideal-map-is-continuous-and-surjective` (proposition) | The kernel map is continuous and onto, but can fail to be injective outside the type-I regime. | Prepares the exact pathology treated in RG-26. | literature-derived | literature-derived |
| `cor-the-abelian-group-c-star-algebra-recovers-pontryagin-duality` (corollary) | For locally compact abelian $G$, the Gelfand spectrum of $C^*(G)$ is $\widehat G$ as constructed by FR. | Records the seam without duplicating LCA harmonic analysis. | literature-derived | literature-derived |

**Hard proof plan.**  Establish the integrated correspondence before taking
either completion.  Prove weak containment both from coefficient approximation
to norm/kernel comparison and back using states and GNS.  Define the Fell
topology by coefficients for all groups, and mention the primitive-ideal model
only with its exact injectivity hypothesis.  The zero representation is allowed
in weak-containment comparisons but is not a point of $\widehat G$.

**B page:** `unitary-dual-and-group-c-star-examples`

| item id (kind) | statement | what it is for | statement provenance | proof provenance |
|---|---|---|---|---|
| `ex-full-and-reduced-group-c-star-algebras-of-a-finite-group` (example) | Compute both completions as the same finite-dimensional semisimple algebra. | Tests the universal definitions in a completely reducible case. | literature-derived | literature-derived |
| `ex-unitary-dual-and-full-group-c-star-algebra-of-the-integers` (example) | Identify the dual with the circle and cite FR/Gelfand theory for $C^*(\mathbb Z)\cong C(\mathbb T)$. | Checks the abelian seam explicitly. | literature-derived | literature-derived |
| `ex-fell-convergence-of-characters-of-the-real-line` (example) | Work compact-uniform convergence of characters in the source's model. | Makes the Fell neighborhood definition concrete. | literature-derived | literature-derived |
| `cex-the-unitary-dual-need-not-be-hausdorff` (counterexample) | Use the source's non-type-I example with inseparable irreducible classes. | Prevents treating $\widehat G$ as an ordinary parameter space. | literature-derived | literature-derived |

### RG-26 — Direct integrals, factors and type I groups

**A page:** `direct-integral-decomposition-and-type-i-groups`

**Requires:** RG-20 and RG-25; the measure-theory disintegration pages and the
functional-analysis spectral/von-Neumann-algebra interfaces cited in §2.  Work
with standard measure spaces, measurable fields with countable fundamental
families, separable Hilbert spaces and second-countable locally compact groups.

**Source backing read:** Bekka–de la Harpe, Chapter 1 §§1.G–1.I,
pp. 52–66, Chapters 6–7, pp. 169–230, and Chapter 8 §§8.B–8.D,
pp. 242–260; Bekka–de la Harpe–Valette, Appendix F §F.5, pp. 413–417.

| item id (kind) | statement | what it is for | statement provenance | proof provenance |
|---|---|---|---|---|
| `def-measurable-field-of-separable-hilbert-spaces` (definition) | Define a measurable Hilbert field by a countable fundamental family and measurable inner products. | States the measurable structure needed before integrating fibers. | literature-derived | not-applicable |
| `def-direct-integral-of-a-measurable-hilbert-field` (definition) | Form $\int_X^\oplus\mathcal H_x\,d\mu(x)$ from square-integrable measurable sections modulo almost-everywhere equality. | Constructs the ambient Hilbert space. | literature-derived | not-applicable |
| `lem-direct-integral-norm-and-completeness` (lemma) | The fiberwise integral norm is well defined and the section quotient is complete. | Verifies that the construction really yields a Hilbert space. | literature-derived | literature-derived |
| `def-measurable-and-decomposable-operator-fields` (definition) | Define measurable essentially bounded operator fields and their decomposable operators. | Introduces the operators that act fiberwise. | literature-derived | not-applicable |
| `thm-the-commutant-of-diagonal-multiplication-is-the-algebra-of-decomposable-operators` (theorem) | On a standard direct integral, operators commuting with all diagonal multipliers are exactly decomposable operators. | Supplies the uniqueness mechanism for decompositions. | literature-derived | literature-derived |
| `def-direct-integral-of-unitary-representations` (definition) | Define $\int_X^\oplus\pi_x\,d\mu(x)$ when the representation field is measurable. | States the representation-theoretic construction. | literature-derived | not-applicable |
| `lem-a-measurable-direct-integral-of-unitary-representations-is-strongly-continuous` (lemma) | Under the source's countability hypotheses, fiberwise actions integrate to a strongly continuous unitary representation. | Closes the topology condition that measurability alone could miss. | literature-derived | literature-derived |
| `def-factor-representation-and-primary-representation` (definition) | A representation is factorial/primary when the center of its generated von Neumann algebra is scalar. | Names the canonical pieces of central decomposition. | literature-derived | not-applicable |
| `thm-central-decomposition-into-factor-representations` (theorem) | Every separable unitary representation of a second-countable locally compact group admits a direct-integral decomposition into factor representations over a standard measure space. | Gives the general decomposition that survives outside type I. | literature-derived | literature-derived |
| `thm-essential-uniqueness-of-central-decomposition` (theorem) | The factor decomposition is unique at the level of measure class and measurable quasi-equivalence data specified by the source. | States exactly what remains canonical. | literature-derived | literature-derived |
| `def-type-i-factor-representation-and-type-i-group` (definition) | Define type I factors and call $G$ type I when every factor representation is type I. | Fixes the dividing line for irreducible disintegration. | literature-derived | not-applicable |
| `thm-equivalent-characterizations-of-second-countable-type-i-groups` (theorem) | The source's type-I, smooth-dual, countably separated and primitive-ideal criteria are equivalent. | Connects algebraic, Borel and topological regularity. | literature-derived | literature-derived |
| `thm-irreducible-direct-integral-decomposition-for-type-i-groups` (theorem) | Every separable unitary representation of a second-countable type-I group decomposes over $\widehat G$ into irreducibles with a measurable multiplicity field. | Delivers the requested irreducible disintegration in its honest scope. | literature-derived | literature-derived |
| `thm-essential-uniqueness-of-type-i-irreducible-disintegration` (theorem) | The spectral measure class and multiplicity function are unique almost everywhere for type-I groups. | Explains why $\widehat G$ is a usable parameter space exactly here. | literature-derived | literature-derived |
| `thm-non-type-i-groups-have-nonsmooth-irreducible-decomposition` (theorem) | For a non-type-I second-countable group, irreducible disintegration lacks the preceding standard-Borel uniqueness; only factor decomposition is canonical. | States the pathology without pretending no decompositions exist. | literature-derived | literature-derived |
| `cor-compact-groups-are-type-i-and-direct-integrals-collapse-to-discrete-sums` (corollary) | Peter–Weyl makes compact groups type I and turns their decompositions into atomic Hilbert sums. | Reconciles RG-22 with the general theory. | literature-derived | literature-derived |

**Hard proof plan.**  Build measurable fields and decomposable operators before
stating disintegration.  Use the center of the generated von Neumann algebra to
obtain the canonical factor decomposition.  Only after defining type I pass
from factor fibers to irreducible fibers and prove uniqueness.  Every
assertion is restricted to the standard/separable/second-countable setting in
which the cited disintegration theorem is valid; no global selector of
irreducible representatives is asserted.

**B page:** `direct-integral-and-type-i-examples`

| item id (kind) | statement | what it is for | statement provenance | proof provenance |
|---|---|---|---|---|
| `ex-direct-integral-of-characters-for-the-regular-representation-of-r` (example) | Cite FR's Plancherel transform to realize the regular representation of $\mathbb R$ as a multiplicity-one integral of characters. | Gives the basic continuous-spectrum model without redoing abelian Fourier analysis. | literature-derived | literature-derived |
| `ex-compact-group-direct-integrals-are-atomic` (example) | Express the Peter–Weyl regular representation as a direct integral over counting measure on $\widehat K$. | Checks the continuous formalism against RG-22. | literature-derived | literature-derived |
| `ex-the-left-regular-factor-of-an-icc-discrete-group` (example) | For the source's ICC example, compute the center of the group von Neumann algebra and identify its non-type-I factor. | Exhibits why factor fibers need not be irreducible. | literature-derived | literature-derived |
| `cex-irreducible-multiplicity-data-is-not-canonical-outside-type-i` (counterexample) | Work the source's non-smooth dual example and its inequivalent irreducible disintegrations. | Shows exactly which uniqueness statement fails. | literature-derived | literature-derived |

### RG-27 — Amenability, Reiter nets and Følner conditions

**A page:** `amenability-reiter-nets-and-folner-conditions`

**Requires:** RG-18–RG-20 and RG-25; the group-theory amenability page for the
discrete-group specialization.  Assume locally compact Hausdorff throughout;
state second-countability or $\sigma$-compactness separately where a sequence,
rather than a net, is used.

**Source backing read:** Bekka–de la Harpe–Valette, Appendix G §§G.1–G.5,
pp. 420–445; Alan L. T. Paterson, *Amenability*, Chapter 1, pp. 25–50,
and Chapter 4, pp. 125–194.

| item id (kind) | statement | what it is for | statement provenance | proof provenance |
|---|---|---|---|---|
| `def-left-invariant-mean-on-l-infinity-of-a-locally-compact-group` (definition) | Define a norm-one positive functional on $L^\infty(G)$ invariant under left translation. | Fixes the measure-class formulation of amenability. | literature-derived | not-applicable |
| `def-amenable-locally-compact-group` (definition) | A locally compact group is amenable when it admits a left-invariant mean. | Names the property to be compared with analytic approximations. | literature-derived | not-applicable |
| `def-reiter-condition-p1` (definition) | Reiter's $P_1$ condition asks for nonnegative norm-one $L^1$ functions asymptotically invariant uniformly on compact subsets. | Gives the analytic approximate-invariance condition in its net form. | literature-derived | not-applicable |
| `lem-an-invariant-mean-produces-a-reiter-net` (lemma) | Convexity and separation convert an invariant mean into a net satisfying $P_1$. | Proves the difficult approximation direction. | literature-derived | literature-derived |
| `lem-a-reiter-net-has-an-invariant-mean-cluster-point` (lemma) | Weak-star cluster points of Reiter functionals are left-invariant means. | Proves the converse and exposes the compactness/choice step. | literature-derived | literature-derived |
| `thm-amenability-is-equivalent-to-reiter-p1` (theorem) | A locally compact group is amenable iff it satisfies Reiter's $P_1$ condition. | Provides the robust form valid without discreteness. | literature-derived | literature-derived |
| `def-left-folner-net-for-a-locally-compact-group` (definition) | Define a net of measurable finite-positive-measure sets $F_i$ with $\mu(KF_i\mathbin\triangle F_i)/\mu(F_i)\to0$ in the source's uniform compact-set form. | States the geometric approximation and its handedness. | literature-derived | not-applicable |
| `lem-folner-nets-give-reiter-nets` (lemma) | Normalized indicators of Følner sets satisfy $P_1$. | Proves the geometric-to-analytic direction. | literature-derived | literature-derived |
| `lem-reiter-functions-can-be-cut-down-to-folner-sets` (lemma) | A layer-cake/coarea argument extracts a finite-measure Følner set from an almost-invariant nonnegative $L^1$ function. | Proves the analytic-to-geometric direction without assuming discreteness. | literature-derived | literature-derived |
| `thm-folner-criterion-for-locally-compact-groups` (theorem) | Under the exact regularity hypotheses in the sources, amenability is equivalent to the left Følner condition. | Delivers the requested locally compact Følner theorem. | literature-derived | literature-derived |
| `cor-folner-sequences-for-second-countable-compactly-generated-groups` (corollary) | A countable exhaustion of compact sets turns the net criterion into a sequence in the stated $\sigma$-compact setting. | Separates countability from amenability itself. | literature-derived | literature-derived |
| `thm-hulanicki-weak-containment-criterion-for-amenability` (theorem) | $G$ is amenable iff the trivial representation is weakly contained in the left regular representation. | Connects invariant means to RG-25's Fell topology. | literature-derived | literature-derived |
| `prop-compact-and-locally-compact-abelian-groups-are-amenable` (proposition) | Compact groups and locally compact abelian groups are amenable. | Supplies base classes while citing FR for the abelian harmonic theory. | literature-derived | literature-derived |
| `thm-amenability-is-stable-under-closed-subgroups-quotients-and-extensions` (theorem) | Closed subgroups and Hausdorff quotients of an amenable locally compact group are amenable, and an extension with amenable closed normal subgroup and amenable quotient is amenable. | Builds the principal stock of nonabelian examples with all topology stated. | literature-derived | literature-derived |

**Hard proof plan.**  Keep means, Reiter functions and Følner sets as three
distinct notions until both directions between each adjacent pair are proved.
Use nets for arbitrary groups; sequences appear only after a countable compact
exhaustion.  The weak-star compactness used to obtain a mean and the separation
argument used to obtain Reiter functions are recorded in the choice ledger.
Left Haar measure and left translates are used consistently, so nonunimodular
amenable examples are not accidentally excluded.

**B page:** `locally-compact-amenability-examples`

| item id (kind) | statement | what it is for | statement provenance | proof provenance |
|---|---|---|---|---|
| `ex-folner-sets-in-rn` (example) | Verify the compact-uniform Følner estimate for expanding cubes. | Gives the continuous analogue of intervals in $\mathbb Z$. | literature-derived | literature-derived |
| `ex-the-real-affine-group-is-amenable-and-nonunimodular` (example) | Express the $ax+b$ group as an extension of abelian groups and combine this with RG-19's modular computation. | Separates amenability from unimodularity. | literature-derived | literature-derived |
| `ex-compact-groups-have-a-constant-reiter-net` (example) | Use normalized Haar density to satisfy $P_1$ exactly. | Checks the strongest compact boundary. | literature-derived | literature-derived |
| `cex-the-free-group-on-two-generators-is-not-amenable` (counterexample) | Work the source's paradoxical/Følner-boundary argument for $F_2$. | Supplies the standard nonamenable contrast and feeds RG-28. | literature-derived | literature-derived |

### RG-28 — Kazhdan's property (T)

**A page:** `kazhdans-property-t-and-spectral-gap`

**Requires:** RG-20, RG-25 and RG-27.

**Source backing read:** Bekka–de la Harpe–Valette, Chapter 1
§§1.1–1.4, pp. 27–49; Emmanuel Breuillard, *PCMI Lecture Notes on
Property (T)*, Lecture I §§I–III, pp. 1–12.

| item id (kind) | statement | what it is for | statement provenance | proof provenance |
|---|---|---|---|---|
| `def-almost-invariant-vectors-for-a-unitary-representation` (definition) | A representation has almost invariant unit vectors when every compact $Q\subset G$ and $\varepsilon>0$ admit a unit vector moved by less than $\varepsilon$ on $Q$. | Fixes the uniform-on-compacts quantifiers. | literature-derived | not-applicable |
| `def-kazhdans-property-t` (definition) | $G$ has property (T) when every unitary representation with almost invariant vectors has a nonzero invariant vector. | States the requested rigidity property. | literature-derived | not-applicable |
| `def-kazhdan-pair-and-kazhdan-constant` (definition) | Define a compact Kazhdan set $Q$, tolerance $\varepsilon$, and the associated displacement constant. | Quantifies the gap used in applications. | literature-derived | not-applicable |
| `thm-property-t-is-equivalent-to-the-existence-of-a-kazhdan-pair` (theorem) | In the source's locally compact hypotheses, property (T) is equivalent to a compact Kazhdan pair. | Replaces a universal qualitative condition by one uniform test. | literature-derived | literature-derived |
| `thm-property-t-is-equivalent-to-isolation-of-the-trivial-representation` (theorem) | $G$ has property (T) iff the trivial class is isolated in the Fell topology on $\widehat G$. | Connects rigidity to the topology built in RG-25. | literature-derived | literature-derived |
| `lem-almost-invariant-vectors-and-positive-type-functions` (lemma) | Almost invariant unit vectors yield normalized positive-type functions converging to $1$ uniformly on compact sets, and the GNS converse holds. | Gives the coefficient formulation used in proofs. | literature-derived | literature-derived |
| `thm-property-t-implies-compact-generation` (theorem) | A locally compact group with property (T) is compactly generated. | Records a major structural consequence and its needed topology. | literature-derived | literature-derived |
| `thm-property-t-passes-to-quotients` (theorem) | Every Hausdorff quotient of a property-(T) locally compact group has property (T). | Supplies a basic permanence result. | literature-derived | literature-derived |
| `thm-compact-groups-have-property-t` (theorem) | Haar averaging turns a sufficiently invariant vector into a nonzero invariant one. | Provides the compact endpoint. | literature-derived | literature-derived |
| `thm-an-amenable-property-t-locally-compact-group-is-compact` (theorem) | Under the source's locally compact hypotheses, simultaneous amenability and property (T) force compactness. | Locates the opposition between Følner approximation and spectral gap. | literature-derived | literature-derived |
| `def-spectral-gap-for-a-unitary-representation` (definition) | A representation has spectral gap when its restriction to the orthogonal complement of invariant vectors does not weakly contain the trivial representation. | States the representation-level form used by ergodic applications. | literature-derived | not-applicable |
| `thm-property-t-is-uniform-spectral-gap-for-representations` (theorem) | Property (T) is equivalent to a uniform compact-set displacement bound on every representation's noninvariant subspace. | Makes the slogan precise. | literature-derived | literature-derived |
| `thm-sl-n-r-has-property-t-for-n-at-least-three` (theorem) | $SL_n(\mathbb R)$ has property (T) for $n\ge3$. | Supplies a principal noncompact example and contrasts RG-29; it is statement-only and never a dependency target. | literature-derived | not-supplied |
| `prop-sl2-r-does-not-have-property-t` (proposition) | The complementary series approaches the trivial representation in Fell topology. | Uses the coming case study to exhibit failure in real rank one. | literature-derived | literature-derived |

**Hard proof plan.**  Translate between almost invariant vectors, positive-type
functions and Fell neighborhoods using RG-20/RG-25.  Extract a compact Kazhdan
set without assuming compact generation, then derive compact generation as a
consequence.  For amenable plus (T), combine Hulanicki weak containment with
isolation of the trivial representation to force it into the regular
representation and hence finite Haar volume.  The higher-rank example is
explicitly statement-only (`not-supplied`) and is never load-bearing; its full
proof needs the later higher-rank machinery of the cited monograph.

**B page:** `property-t-examples-and-boundaries`

| item id (kind) | statement | what it is for | statement provenance | proof provenance |
|---|---|---|---|---|
| `ex-a-kazhdan-pair-for-a-compact-group` (example) | Use the whole compact group and Haar averaging to give an explicit tolerance. | Computes the compact boundary rather than merely naming it. | literature-derived | literature-derived |
| `ex-property-t-for-a-finite-group` (example) | Specialize the compact argument to normalized counting measure. | Reconciles the definition with finite representation theory. | literature-derived | literature-derived |
| `cex-z-does-not-have-property-t` (counterexample) | Exhibit characters tending to the trivial character without becoming trivial. | Shows infinite amenable discrete groups fail (T) in the basic case. | literature-derived | literature-derived |
| `cex-sl2-r-complementary-series-destroys-property-t` (counterexample) | Track the spherical complementary parameter to the trivial endpoint. | Makes the RG-28/RG-29 connection explicit. | literature-derived | literature-derived |

### RG-29 — $SL_2(\mathbb R)$: principal and complementary series

**A page:** `sl2-r-principal-and-complementary-series`

**Requires:** RG-23–RG-25; **`RL-n`**, the final page of the concurrently
scaffolded Lie-algebra representation track, for $\mathfrak{sl}_2$ weights,
raising/lowering operators and infinitesimal characters.  No particular
numeric value of $n$ is assumed in this scaffold.

**Source backing read:** Kowalski, Chapter 7 §§7.2–7.4, pp. 292–317;
Serge Lang, *$SL_2(\mathbb R)$*, Chapters II–III, pp. 19–49, and
Chapter VII, pp. 89–126; Matt Kerr, *Notes on the Representation Theory of
$SL_2(\mathbb R)$*, §§1–2, pp. 1–12.

| item id (kind) | statement | what it is for | statement provenance | proof provenance |
|---|---|---|---|---|
| `def-iwasawa-and-minimal-parabolic-data-for-sl2-r` (definition) | Fix $G=SL_2(\mathbb R)$, $K=SO(2)$, $A$, $N$, $M=\{\pm I\}$ and $P=MAN$ with the source's coordinates. | Prevents later parameter and Haar-normalization ambiguity. | literature-derived | not-applicable |
| `thm-iwasawa-decomposition-for-sl2-r` (theorem) | Multiplication $K\times A\times N\to G$ is a diffeomorphism with the stated Haar integration formula. | Supplies the compact-picture model and integration measure. | literature-derived | literature-derived |
| `def-normalized-principal-series-i-epsilon-nu` (definition) | Define $I_{\varepsilon,\nu}=\operatorname{Ind}_P^G(\operatorname{sgn}^{\varepsilon}\otimes e^{\nu}\otimes1)$ using normalized induction and the adopted parameter. | Fixes parity and the half-modular shift once. | literature-derived | not-applicable |
| `thm-compact-picture-of-the-sl2-principal-series` (theorem) | Restriction to $K$ identifies $I_{\varepsilon,\nu}$ with parity-$\varepsilon$ functions on the circle, with action given by the Iwasawa cocycle. | Makes all series act on a common Hilbert/vector space. | literature-derived | literature-derived |
| `lem-k-type-decomposition-of-the-sl2-principal-series` (lemma) | The $K$-types are one-dimensional and indexed by integers congruent to $\varepsilon$ modulo $2$. | Provides the basis used for infinitesimal and intertwining calculations. | literature-derived | literature-derived |
| `lem-sl2-raising-and-lowering-formulas-in-the-compact-picture` (lemma) | The differentiated root operators shift the $K$-type index by $2$ with the source's linear coefficients in $\nu$ and the index. | Imports the RL interface into a concrete group representation. | literature-derived | literature-derived |
| `thm-generic-irreducibility-and-the-exceptional-parameter-lattice` (theorem) | $I_{\varepsilon,\nu}$ is irreducible off the parity-compatible exceptional integral parameters, and its subquotients at those parameters are determined by vanishing ladder coefficients. | Locates every reducibility point without suppressing parity. | literature-derived | literature-derived |
| `def-standard-intertwining-operator-for-sl2-r` (definition) | Define the rank-one integral intertwiner $A(\nu):I_{\varepsilon,\nu}\to I_{\varepsilon,-\nu}$ first in its convergence half-plane. | Creates the operator controlling equivalence and complementary unitarity. | literature-derived | not-applicable |
| `thm-meromorphic-continuation-and-intertwining-identity-for-a-nu` (theorem) | $A(\nu)$ continues meromorphically and intertwines $I_{\varepsilon,\nu}$ with $I_{\varepsilon,-\nu}$. | Extends the construction to the unitary axes and exceptional points. | literature-derived | literature-derived |
| `lem-k-type-eigenvalue-recurrence-for-the-sl2-intertwiner` (lemma) | $A(\nu)$ is diagonal on $K$-types and its eigenvalues obey the explicit adjacent-type recurrence. | Reduces positivity and poles to a scalar calculation. | literature-derived | literature-derived |
| `thm-unitarity-of-the-sl2-unitary-principal-series` (theorem) | For $\nu$ on the imaginary axis, the normalized principal series is unitary in the compact-picture $L^2$ norm. | Identifies the continuous tempered family. | literature-derived | literature-derived |
| `thm-unitarity-of-the-sl2-complementary-series` (theorem) | In the source normalization, the spherical real interval $|\nu|<1$ carries the positive invariant form defined by $A(\nu)$; $0<|\nu|<1$ gives the complementary series, while $\nu=0$ is the spherical unitary principal series. | Establishes the non-tempered unitary family and its exact endpoints. | literature-derived | literature-derived |
| `thm-equivalence-i-epsilon-nu-is-i-epsilon-minus-nu` (theorem) | Away from the singular normalization points, the standard intertwiner gives $I_{\varepsilon,\nu}\simeq I_{\varepsilon,-\nu}$, with the source's endpoint qualifications. | Prevents double counting in the unitary dual. | literature-derived | literature-derived |
| `cor-complementary-series-converge-to-the-trivial-representation` (corollary) | Spherical coefficients converge uniformly on compact sets to $1$ at the trivial endpoint. | Supplies RG-28's concrete failure of property (T). | literature-derived | literature-derived |

**Hard proof plan.**  Derive the compact picture from RG-23 normalized
induction.  Differentiate only after the smooth $K$-finite subspace is fixed,
and cite RL-n for the abstract $\mathfrak{sl}_2$ relations.  Reducibility is
split into the ladder-coefficient vanishing directions.  Diagonalize the
standard intertwiner on each $K$-type, solve its recurrence, and use sign of the
eigenvalues to find exactly the complementary interval.  Treat $\nu=0$ and
both endpoints separately; parameter identifications never erase the parity
label.

**B page:** `sl2-r-principal-and-complementary-series-calculations`

| item id (kind) | statement | what it is for | statement provenance | proof provenance |
|---|---|---|---|---|
| `ex-iwasawa-coordinates-and-haar-density-on-sl2-r` (example) | Compute $k(g),a(g),n(g)$ and the Haar Jacobian for a generic matrix in the source chart. | Checks the conventions feeding normalized induction. | literature-derived | literature-derived |
| `ex-first-k-types-and-ladder-coefficients-in-i-epsilon-nu` (example) | Tabulate several even and odd $K$-types and the two shift coefficients. | Makes the parity/reducibility mechanism visible. | literature-derived | literature-derived |
| `ex-intertwiner-eigenvalues-in-the-spherical-complementary-range` (example) | Compute the first eigenvalue ratios and verify positivity for $|\nu|<1$. | Finite-checks the invariant-form theorem. | literature-derived | literature-derived |
| `cex-the-complementary-form-loses-positivity-beyond-the-unitary-interval` (counterexample) | At the source's first parameter beyond the endpoint, exhibit two $K$-types with opposite signs. | Shows the interval is sharp. | literature-derived | literature-derived |

### RG-30 — $SL_2(\mathbb R)$: discrete series and the unitary dual

**A page:** `sl2-r-discrete-series-and-unitary-dual`

**Requires:** RG-25–RG-29 and `RL-n` for highest/lowest weight
$\mathfrak{sl}_2$ modules.

**Source backing read:** Lang, Chapters VII and X, pp. 89–126 and
pp. 179–190, together with Chapter IX, pp. 163–177; Kerr, §§1–2,
pp. 1–12, and §5, pp. 19–21; Kowalski, Chapter 7 §§7.3–7.4,
pp. 297–317.

| item id (kind) | statement | what it is for | statement provenance | proof provenance |
|---|---|---|---|---|
| `def-k-finite-and-smooth-vectors-for-sl2-r` (definition) | Define smooth and $K$-finite vectors and the resulting $(\mathfrak g,K)$-module. | Specifies the algebraic core on which the RL classification acts. | literature-derived | not-applicable |
| `lem-k-finite-vectors-are-dense-and-stable-under-the-derived-action` (lemma) | The $K$-finite smooth vectors are dense and stable under $U(\mathfrak{sl}_2)$ with compatible $K$-action. | Justifies passage between group and Harish–Chandra modules. | literature-derived | literature-derived |
| `lem-highest-and-lowest-weight-submodules-at-principal-series-reducibility-points` (lemma) | At each exceptional parameter, vanishing ladder coefficients cut out the stated highest- or lowest-weight submodule and finite-dimensional quotient. | Extracts discrete-series candidates from RG-29. | literature-derived | literature-derived |
| `def-holomorphic-and-antiholomorphic-discrete-series-models` (definition) | Define $D_n^+$ and $D_n^-$ in the weighted holomorphic/antiholomorphic upper-half-plane model for the source's integer range. | Gives concrete globalizations of the two ladder directions. | literature-derived | not-applicable |
| `lem-the-weighted-area-form-is-sl2-r-invariant` (lemma) | The automorphy factor and hyperbolic Jacobian preserve the discrete-series norm. | Proves the geometric model is unitary. | literature-derived | literature-derived |
| `thm-irreducibility-and-k-types-of-the-discrete-series` (theorem) | Each $D_n^\pm$ is irreducible, with one-sided multiplicity-one $K$-type ladder beginning at its extremal weight. | Identifies the representations and their parity. | literature-derived | literature-derived |
| `thm-square-integrability-of-sl2-r-discrete-series-matrix-coefficients` (theorem) | Nonzero $K$-finite coefficients of $D_n^\pm$ are square-integrable modulo the finite center, in fact on $G$ under the source normalization. | Explains the term “discrete series” and their regular-spectrum occurrence. | literature-derived | literature-derived |
| `def-limits-of-discrete-series-for-sl2-r` (definition) | Define the two endpoint highest/lowest weight representations at the limiting ladder parameter. | Includes the unitary boundary cases often lost in a coarse list. | literature-derived | not-applicable |
| `thm-unitarity-and-irreducibility-of-the-limits-of-discrete-series` (theorem) | The two limit representations are unitary and irreducible but not square-integrable. | Separates limit from genuine discrete series. | literature-derived | literature-derived |
| `def-tempered-unitary-representation` (definition) | A unitary representation is tempered when it is weakly contained in the left regular representation. | Connects the classification to RG-25 and Plancherel support. | literature-derived | not-applicable |
| `thm-tempered-status-of-the-sl2-r-unitary-series` (theorem) | Unitary principal, discrete and limit series are tempered; nontrivial complementary series and the trivial representation are not. | Organizes the dual by regular weak containment. | literature-derived | literature-derived |
| `thm-classification-of-the-irreducible-unitary-dual-of-sl2-r` (theorem) | Every irreducible unitary representation of $SL_2(\mathbb R)$ is, up to the stated parameter identifications and exceptional splittings, trivial, principal, complementary, discrete or a limit of discrete series. | Completes the requested worked noncompact theory. | literature-derived | literature-derived |
| `thm-plancherel-support-for-sl2-r` (theorem) | The regular representation disintegrates over the unitary principal series together with the discrete series, with the source's measures/formal degrees; complementary and trivial classes have zero Plancherel support. | Connects the concrete dual to RG-26's direct-integral theory. | literature-derived | literature-derived |
| `cor-the-unitary-dual-of-sl2-r-is-non-discrete-and-non-hausdorff-at-the-stated-limits` (corollary) | The source's parameter convergence and exceptional splittings describe the indicated Fell-topology limit behavior. | Gives a concrete topology rather than only a classification list. | literature-derived | literature-derived |

**Hard proof plan.**  Pass from each reducible principal-series
Harish–Chandra module to its extremal-weight submodules, then globalize them in
the upper-half-plane models and check the norm by a Jacobian computation.
Compute coefficient decay to separate discrete from limit series.  Prove the
classification by the Casimir/lowest-$K$-type alternatives cited from Lang and
Kerr, keeping reducible endpoint constituents separate.  Finally identify
tempered classes by weak containment and compare with Lang's Plancherel
formula.  No choice of an actual representative for every point of the dual is
made.

**B page:** `sl2-r-discrete-series-and-dual-calculations`

| item id (kind) | statement | what it is for | statement provenance | proof provenance |
|---|---|---|---|---|
| `ex-lowest-k-types-of-the-first-holomorphic-discrete-series` (example) | Compute the first holomorphic model's extremal vector and one-sided $K$-type ladder. | Checks the indexing of $D_n^+$. | literature-derived | literature-derived |
| `ex-weighted-norm-invariance-for-a-mobius-transformation` (example) | Verify the discrete-series norm under the inversion generator. | Finite-checks the automorphy/Jacobian calculation. | literature-derived | literature-derived |
| `ex-a-square-integrable-discrete-series-matrix-coefficient` (example) | Evaluate the source's extremal coefficient and its $G$-integral. | Demonstrates square integrability concretely. | literature-derived | literature-derived |
| `cex-a-limit-of-discrete-series-is-not-square-integrable` (counterexample) | Compute the endpoint decay and the divergent Haar integral. | Shows why the limits require their own class. | literature-derived | literature-derived |
| `ex-parameter-identifications-in-the-sl2-r-unitary-dual` (example) | Tabulate $\nu\sim-\nu$, parity, endpoints and discrete constituents in the adopted convention. | Prevents double counting in the final classification. | literature-derived | literature-derived |

---

## 6. Dependency-closure and well-definedness audit

The finite pages never infer a character identity from values on an unnamed
coefficient field.  RG-1 separates rational-valued characters from
$\mathbb Q$-realizable representations; RG-2 states whether coefficients are
rational or integral; RG-3 constructs a splitting extension before taking a
Galois orbit.  In Clifford theory, the normal subgroup, inertia group,
conjugation action and factor-set equivalence are fixed before induction.  In
the symmetric-group block, row and column stabilizers act on tabloids already
defined, and the branching filtration is proved before the direct-sum
statement in characteristic zero.  In the finite-$GL_n$ block, $B$, $T$, $U$,
the Weyl representatives and the Hecke normalization are fixed before an
intertwining algebra is identified.

The modular pages explicitly consume, rather than recreate, the following
existing group-theory items:
`def-relative-projectivity`,
`thm-higman-criterion-for-relative-projectivity`,
`def-vertex-and-source-of-an-indecomposable-module`,
`thm-green-vertex-source-existence-and-conjugacy`,
`def-p-blocks-by-primitive-central-idempotents`,
`thm-blocks-partition-ordinary-and-brauer-irreducible-characters`, and
`prop-decomposition-matrix-is-block-diagonal-after-block-ordering`.
RG-14 defines block defect only after the diagonal bimodule is available;
RG-15 assumes nonzero indecomposable modules and the normalizer hypothesis;
RG-16 distinguishes induction of blocks from induction of modules; RG-17
constructs generalized decomposition numbers before restricting their block
support.

The locally compact pages fix Hausdorffness and handedness at RG-18/RG-19.
Every integral is first defined on a source-owned dense/test class; every
almost-everywhere quotient is taken before completion.  GNS quotients its null
space before completing.  Peter–Weyl does not assume a faithful
finite-dimensional representation.  Unitary induction constructs a
quasi-invariant measure class and Radon–Nikodym cocycle before its Hilbert
space.  Mackey's theorem and direct-integral uniqueness are restricted to
standard Borel/separable hypotheses.  The full group $C^*$-norm is taken only
after integrated representations are proved contractive.  Amenability uses
nets for arbitrary locally compact groups and sequences only after a
countability hypothesis.  The two $SL_2(\mathbb R)$ pages define the normalized
parameter before stating an interval, parity rule or endpoint.

Every B page is a dependency leaf.  No A-page result cites an `ex-` or `cex-`
item.  Every iff in an A table has a proof plan for both directions.  The
boundary pass covers trivial groups, trivial subgroups, zero/one defect,
empty block sets, compact versus noncompact Haar mass, $H=G$, $H=\{e\}$,
zero versus normalized positive-type functions, atomic versus continuous
spectra, net versus sequence formulations, and the reducible/end-point
parameters of $SL_2(\mathbb R)$.

## 7. Choice-strength ledger

1. **Finite half.**  All subgroup, character, block and Brauer-pair indexing
   sets are finite.  Choosing conjugacy representatives or a maximal pair uses
   only finite choice.  A splitting field is exhibited cyclotomically on RG-2;
   the inherited existence of the splitting modular system is not reproved.

2. **Haar existence.**  The RG-18 proof follows the Tychonoff compactness
   construction for a product of compact intervals.  In its full arbitrary
   locally compact generality this invokes the compactness theorem in its
   usual choice-strength form; the page must say so.  Uniqueness and the
   compact normalization do not add a further global selection.

3. **General compact Peter–Weyl.**  The density and isotypic-space statements
   avoid choosing one representative and one basis for every irreducible.
   Displaying a literal global orthonormal coefficient basis does require a
   representative and finite orthonormal basis for each equivalence class;
   the canonical theorem is therefore phrased first as an orthogonal sum of
   coefficient spaces.  The common basis formulation uses ordinary set-indexed
   choice, especially for nonmetrizable compact groups.

4. **Homogeneous spaces and imprimitivity.**  Rho-functions use the standard
   locally finite partition/compact-exhaustion argument.  Mackey reconstruction
   uses regular conditional/disintegrated measures and measurable fields only
   for second-countable groups, standard Borel spaces and separable Hilbert
   spaces.  These hypotheses supply countable fundamental families and the
   measurable selections in the cited theorem; they are not cosmetic.

5. **The unitary dual and the universal completion.**  $\widehat G$ is a set of
   equivalence classes, not a chosen class-sized family of concrete models.
   For second-countable $G$, cyclic representations can be realized on a fixed
   separable Hilbert space and the $C^*(G)$ universal norm is a supremum over a
   set.  No global selector $[\pi]\mapsto\pi$ is used.  Outside that setting a
   cardinal bound on cyclic representations must be supplied before taking a
   universal supremum.

6. **Direct integrals.**  Central decomposition uses the spectral theorem for
   an abelian von Neumann algebra, measure-class disintegration and measurable
   selection.  Irreducible disintegration adds the smooth-standard-Borel
   structure of a type-I dual.  The resulting representatives and multiplicity
   fields are defined only almost everywhere.  For a non-type-I group no
   canonical irreducible selector or essentially unique irreducible
   decomposition is asserted.

7. **Amenability.**  Constructing an invariant mean from a Reiter net uses a
   weak-star compactness/cluster-point theorem; constructing Reiter functions
   from a mean uses Hahn–Banach separation.  These have the corresponding
   Boolean-prime-ideal/choice strength inherited from functional analysis.
   Følner nets themselves require no enumeration; a sequence requires a
   countable compact exhaustion.

8. **Property (T) and $SL_2(\mathbb R)$.**  Once the preceding coefficient,
   Fell-topology and direct-integral theorems are available, the stated
   arguments use no new transfinite or global selection principle.  The
   concrete $SL_2(\mathbb R)$ classification works with explicit parameter
   sets rather than a choice of representatives of an arbitrary dual.

## 8. Convention audit

| issue on which the sources differ | convention adopted here and reason |
|---|---|
| “rational character” | RG-1 always says either rational-valued or realizable over $\mathbb Q$; Artin's stated form records which is intended.  This must agree with the eventual abstract-algebra representation-ring item. |
| elementary versus hyperelementary | $p$-elementary means $C\times P$ and $p$-hyperelementary means $C\rtimes P$, $|C|$ prime to $p$.  Some sources call the latter elementary; RG keeps both names visible. |
| Schur index | Primary definition: common scalar-extension multiplicity.  Division-algebra index and minimal realization multiplicity are theorems, not competing silent definitions. |
| Clifford conjugation and factor sets | Left modules and ${}^g\theta(n)=\theta(g^{-1}ng)$; projective products are $T_gT_h=\alpha(g,h)T_{gh}$.  Sources using right conjugation or the reciprocal cocycle are translated. |
| “M-group” | A finite group is an M-group when every irreducible complex character is monomial.  It does not mean merely that the group has some monomial characters. |
| Frobenius terminology | “Frobenius kernel theorem” means that the nonidentity fixed-point-free set plus $1$ is normal.  “Frobenius normal $p$-complement theorem” is the distinct transfer/fusion criterion for a normal Hall $p'$-subgroup.  In that theorem RG uses “nontrivial $p$-local subgroup” for $N_G(Q)$, $1\ne Q\le P$; centralizers occur separately in the automizer criterion.  Neither theorem is Frobenius reciprocity. |
| Young diagrams and insertion | English diagrams; rows increase left-to-right and columns top-to-bottom; RSK uses row insertion.  Transposed/French conventions in other sources are translated before hook and descent statements. |
| Specht modules | Left $S_n$-modules; row tabloids are quotiented first and column antisymmetrizers use the sign character.  The characteristic-zero irreducible classification is not asserted in modular characteristic. |
| branching | “Branching rule” includes both restriction by removable boxes and induction by addable boxes; the restriction filtration is proved before semisimplicity turns it into a sum. |
| finite $GL_n$ | $B$ is upper triangular, $U$ its unipotent radical, $T$ diagonal, and simple reflections are the adjacent transpositions.  The spherical Hecke generators use the Dudas–Michel/Losev $q$-normalization; Taylor's reciprocal convention is translated. |
| modular coefficient system | Inherit the splitting system $(K,\mathcal O,k)$, with $k$ algebraically closed/splitting of characteristic $p$.  Arbitrary-field variants in BKY are outside the page because GT-18/GT-19 fix the split setting. |
| “block” | Primary object is a primitive central idempotent $b$; $B=kGb$ is its algebra and $M$ lies in $b$ when $bM=M$.  The three usages are not interchanged silently. |
| defect | A defect **group** is $D$; the numerical defect is $d$ with $|D|=p^d$.  The number $|D|$ is never itself called “the defect.” |
| Brauer homomorphism | Use the full $\operatorname{Br}_P:(kG)^P\to kC_G(P)$ projection, derive its restriction on centers, and define $\operatorname{Br}_{P/Q}$ only for $Q\trianglelefteq P$. |
| Brauer-pair order | $\operatorname{Br}_P(b)e=e$ is membership, not the order.  The order is built by unique normal subpairs and then proved independent of a normal chain. |
| vertices and sources | A vertex is a $G$-conjugacy class; after fixing $P$, sources are only unique up to $N_G(P)$-conjugacy.  Green's unique distinguished summand requires $H\ge N_G(P)$. |
| First/Second Main Theorem names | $c\mapsto c^G$ points from local to global.  “Brauer's Second Main Theorem” is reserved for generalized-decomposition-number block support; the modular Green/block result is “Brauer–Green (Nagao) compatibility.” |
| Haar modular function | Adopt $\int f(xg)d\mu=\Delta_G(g^{-1})\int f d\mu$.  Vogan and some operator-algebra texts use the reciprocal; every inversion, involution and induction formula is converted to this display. |
| inner products and positive type | Hilbert inner products are linear in the first variable, and positive type uses $(\varphi(g_i^{-1}g_j))$.  Sources linear in the second variable are conjugated consistently. |
| unitary induction | Normalized induction includes the square root of the quotient Radon–Nikodym cocycle.  Unnormalized algebraic induction is used only on the finite pages. |
| Peter–Weyl | “Peter–Weyl” on RG-22 means arbitrary compact Hausdorff groups.  The pre-existing DG page retains the compact-Lie/maximal-torus/Weyl-integration package. |
| Fell topology | Defined by compact-uniform coefficient approximation.  The primitive-ideal kernel map is not declared a homeomorphism until the type-I hypotheses are present. |
| type I | A group is type I when every factor representation is type I/equivalently its full group $C^*$-algebra is type I under the cited hypotheses.  “Every representation is a direct integral of irreducibles” alone is not used as a definition. |
| amenability and Følner handedness | Left-invariant means, left Haar measure and left translates throughout.  Reiter convergence is uniform on compact sets; nets are primary.  This permits amenable nonunimodular groups. |
| property (T) | Almost invariance is uniform on compact subsets, not merely on each element.  A Kazhdan set is compact, not silently finite; finite sets are available for discrete finitely generated examples. |
| $SL_2(\mathbb R)$ parameters | $I_{\varepsilon,\nu}$ is normalized induction from $MAN$, $\varepsilon\in\{0,1\}$ fixes central parity, the unitary principal axis is $\nu\in i\mathbb R$, and the spherical complementary interval is $|\nu|<1$.  Lang/Kerr parameters are translated before endpoint or reducibility claims. |

## 9. Amendments owed and concurrent interfaces

1. **RL anchor.**  The orchestrator must replace the literal relative label
   `RL-n` by the final page id of the concurrent Lie-algebra representation
   scaffold.  RG-29/RG-30 consume only its $\mathfrak{sl}_2$ weight,
   raising/lowering and infinitesimal-character interface.  This lane did not
   inspect or edit the RL file.

2. **Fourier analysis.**  FR owns Pontryagin duality, Bochner and LCA
   Plancherel, but Haar measure belongs here.  FR-14/FR-15 therefore owe a
   forward citation to RG-18 (and RG-20 for positive type where relevant).
   Conversely RG-20, RG-22, RG-25–RG-27 cite `FR-n`/FR-14/FR-15 only for their
   abelian specializations.  The splice must preserve this explicit
   cross-track dependency rather than duplicating Haar or Pontryagin theory.

3. **Differential geometry.**  The page
   `compact-lie-groups-maximal-tori-and-peter-weyl-theory` should state that its
   Peter–Weyl theorem is the compact-Lie specialization of RG-22 once both are
   built.  RG-22 cites that page for comparison but does not consume maximal
   tori or Weyl integration.

4. **Existing modular pages.**  At build time RG-14–RG-17 must cite the seven
   exact GT item ids listed in §6, not merely their page ids.  No amendment to
   their mathematical content is requested; the owed work is dependency
   resolution after those planned pages acquire nonempty `items` arrays.

5. **Planned dependencies generally.**  Every inherited page listed in §2 is
   currently a planned interface unless its `items` array is nonempty at build
   time.  The builder must not publish an RG item with a page-only phantom
   dependency.  This is a build-time resolution condition, not a request to
   edit any other scaffold now.

6. **One internal forward illustration.**  RG-28's
   `prop-sl2-r-does-not-have-property-t` is a non-load-bearing preview whose
   proof consumes the complementary-series convergence established on RG-29.
   At build time either order RG-29 before that illustration or retain the
   explicit forward dependency; do not duplicate the complementary-series
   construction on RG-28.

No blocker required a prompt.  The two unresolved relative labels are recorded
interfaces, not permissions being sought.

## 10. Full-treatment corpus and canonical-coverage harvest

All URLs below were opened as complete texts or complete publisher/archive
records, not as search-result snippets.  The range is the range actually read.
`RG-x/H1` through `RG-x/H5` identify the **included** heading dispositions
expanded in §12.  In a §12 label of the form “source A/source B,” source A's
heading is the counted included disposition and the synonymous source-B result
is `inline` proof corroboration for the item ids on that row; it is not counted
a second time.  Headings absorbed into proofs, inherited, or rejected are
enumerated in §13.  Thus no unlabelled heading in a reported read range is being
counted as coverage merely because a second treatment repeats it.

| source | exact range read | source's headings/results harvested in that range |
|---|---|---|
| [tom Dieck, *Representation Theory*](https://math.uchicago.edu/~margalit/repthy/tomDieck%20Representation%20Theory.pdf) | §4.2, pp. 53–56; §4.3, pp. 57–58; §§4.5–4.6, pp. 61–66 | “Restriction to Normal Subgroups,” “Monomial Representations,” “Cyclic Induction,” “Brauer Induction,” and their named propositions: RG-1/H1,H3; RG-2/H4; RG-4/H1,H3; RG-5/H1; RG-6/H1,H4. |
| [Kramár, *Artin and Brauer Induction Theorems*](https://www.math.toronto.edu/murnaghan/courses/mat445/artinbrauer.pdf) | §§1–3, pp. 1–7 | “Preliminaries,” “Artin's Theorem,” “Brauer's Theorem,” and the generator/localization lemmas: RG-1/H2,H4,H5; RG-2/H2,H3,H5. |
| [Li, *Yanqi Lake Lectures on Algebra I*](https://www.wwli.asia/downloads/YAlg1.pdf) | §12.5, pp. 146–148; Lecture 14 §§14.1–14.4, pp. 159–166 (PDF pp. 165–172) | monomial representations; induction ideals; $p$-elementary reduction; Brauer induction; local integrality: RG-2/H1,H3,H4; RG-6/H2,H3. |
| [Wiese, *Galois Representations*](https://math.uni.lu/wiese/notes/GalRep.pdf) | §§2.2, 2.3, 2.5, pp. 26–40 | “Scalar extensions,” “Splitting fields,” “Definability of Galois representations,” Galois-orbit multiplicity and endomorphism-algebra criteria: RG-3/H1–H5. |
| [Zheng, *Lectures on Algebra*](https://server.mcm.ac.cn/~zheng/algebra.pdf) | §4.3, printed pp. 145–151, especially Proposition 4.3.2 and Corollaries 4.3.3–4.3.4; Propositions 4.6.14–4.6.15, pp. 170–171 | “Characters of finite groups,” scalar extension and Schur index, splitting-field realization, character field as division-algebra center, and the finite-field index-one result: RG-3/H1–H5 as independent proof backing.  Character orthogonality in the same section is already-published in §13. |
| [Späth, *Clifford theory via projective representations*](https://www.darstellungstheorie.uni-wuppertal.de/fileadmin/mathe/darstellungstheorie/LausanneBS_final.pdf) | §§1.A–1.B, printed pp. 2–6 | ordinary Clifford correspondence; projective representations/factor sets; projective Clifford theorem: RG-4/H2,H4,H5; RG-5/H2–H5. |
| [Bartel, *Introduction to Representation Theory of Finite Groups*](https://www.maths.gla.ac.uk/~abartel/docs/reptheory.pdf) | §6.1, printed pp. 28–30 | Frobenius groups, Frobenius kernel theorem and induced-character proof: RG-7/H1–H3,H5. |
| [Craven, *Finite Group Theory*](https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/finitegroups2010.pdf) | §1.4, printed pp. 17–20 (PDF pp. 20–23) | fixed-point-free actions, Frobenius kernels and semidirect-product structure: RG-7/H4. |
| [Flavell, *An Introduction to Transfer and Fusion in Finite Groups*](https://web.mat.bham.ac.uk/P.J.Flavell/fusion.pdf) | §§2–5, PDF pp. 1–15 | “Transfer,” “Normal p-Complements,” “Fusion and abelian p-factor groups,” “Fusion and p-local subgroups,” Burnside's criterion and Theorem 5.10: RG-7/H6–H8. |
| [Kurzweil–Stellmacher, *The Theory of Finite Groups*](https://homes.psd.uchicago.edu/~sethi/Teaching/P342-W2017/Kurzweil-Stellmacher_Theory%20of%20finite%20groups.pdf) | §§7.1–7.2, printed pp. 161–171 (PDF pp. 174–183) | transfer and p-factor groups, weak closure, Grün's theorem, normal p-complements, Burnside and Frobenius 7.2.4: independent proof backing for RG-7/H6–H8. |
| [Chan, *Representation Theory of Symmetric Groups*](https://web.math.princeton.edu/~charchan/RepresentationTheorySymmetricGroupsNotes.pdf) | §§2–8, pp. 7–30 | tableaux/tabloids; Specht modules; branching; Young's rule; standard bases; hook formula; Robinson–Schensted: RG-8/H1–H5; RG-9/H1,H2,H4,H5; RG-10/H1–H3; RG-11/H1–H3,H5. |
| [Craven, *Groups, Geometries and Representation Theory*](https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/groupsgeomreptheory2013.pdf) | §§1.4–1.8 and §§2.1–2.4, pp. 7–32 | Young diagrams, tabloids, Specht irreducibility/classification, branching and hook formula: RG-9/H3; RG-10/H1,H4,H5; RG-11/H1,H4.  Modular decomposition-number headings are in §13. |
| [Etingof et al., MIT 18.712 Chapter 4](https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/84358595a02a73bced2c4e363a5d66f0_MIT18_712F10_ch4.pdf) | §§4.12–4.13 and §§4.17–4.21, pp. 11–20 | Specht construction, hook formula, Schur functors, Schur–Weyl duality and length cutoff: RG-9/H2; RG-10/H3,H4; RG-11/H4. |
| [Dudas–Michel, *Lectures on Finite Reductive Groups and Their Representations*](https://webusers.imj-prg.fr/~jean.michel/papiers/lectures_beijing_2015.pdf) | §§8–10, pp. 29–44; §§10.3–11.3, pp. 43–51 | BN-pairs, Bruhat decomposition, parabolics, Harish–Chandra induction/restriction, principal series and Hecke endomorphisms: RG-12/H1–H5; RG-13/H1–H3. |
| [Taylor, *Finite Reductive Groups*](https://pages.uoregon.edu/belias/WARTHOG/DLtheory/TaylorReductiveGroups.pdf) | “The Weyl group and Bruhat decomposition,” “Harish-Chandra Induction and Restriction,” pp. 36–42; “Hecke algebras,” pp. 42–45 | relative position, Bruhat cells, Harish–Chandra adjunction/transitivity, Hecke presentation: RG-12/H2–H4; RG-13/H2,H4. |
| [Losev, *Lecture 8: Representations of $GL_n(\mathbb F_q)$*](https://ivanloseu.github.io/RT/RT8.pdf) | §§2.1–2.3, PDF pp. 3–6 | flag convolution algebra, Hecke relations, generic deformation and Tits deformation: RG-13/H2–H5. |
| [Oi, *Representation Theory of Finite Groups of Lie Type*](https://masaooi.github.io/DL.pdf) | §2.3, pp. 10–12 | principal representations of $GL_2(\mathbb F_q)$, split and nonsplit rank-two cases: RG-13/H1,H5.  It is a scope check, not a second general-$n$ treatment. |
| [Martínez, *Modular Representation Theory of Finite Groups*](https://www.uv.es/jomimar8/pdfs/course%20notes.pdf) | Lectures 2–4, printed pp. 9–28 | blocks/idempotents; numerical defect and height; Brauer map; block induction; First Main Theorem: RG-14/H1–H3; RG-16/H1–H3.  Already-owned and peripheral headings are in §13. |
| [Jacobsen, thesis](https://www.math.ku.dk/bibliotek/arkivet/phd-theses/phd14mwj.pdf) | Chapter 1 §1, pp. 2–8; Chapter 2 §2, pp. 12–19 | algebra decomposition; Brauer pairs; unique subpairs; pair order; maximal pairs and defect groups; explicit pair examples: RG-14/H3–H5. |
| [Boltje–Kessar–Yılmaz, §2](https://yilmazdeniz.bilkent.edu.tr/wp-content/uploads/BKY1.pdf) | §2, pp. 2–3 | unique subpairs, equivalent inclusion criteria, maximal Brauer pairs/defect groups: RG-14/H4.  Arbitrary-field fusion/Galois extensions are in §13. |
| [Saunders, *Modular Representation Theory*](https://jpsaunders.uk/ModRep/NotesWebsite.pdf) | §4, printed pp. 22–37; §5, printed pp. 37–45 | relative projectivity and inherited vertices; Green correspondence proof; blocks/defects; block induction; First; Brauer–Green compatibility: RG-14/H1,H2,H5; RG-15/H1–H3,H5; RG-16/H1,H4,H5. |
| [Lassueur–Farrell, Chapter 7](https://www.niamhfarrell.com/uploads/6/9/2/8/69286633/upload2.pdf) | §§27–29, printed/PDF pp. 2–12 | relative projectivity and inherited vertices/sources; Green correspondence and its proof; worked distinguished summand: RG-15/H1–H4. |
| [Craven, thesis](https://web.mat.bham.ac.uk/D.A.Craven/docs/theses/2004diss.pdf) | Chapter 1 §§1.1–1.6, printed pp. 1–17 (PDF pp. 8–24); Chapter 2 §§2.1–2.5, printed pp. 18–30 (PDF pp. 25–37) | blocks, Brauer correspondence, p-sections/generalized decomposition numbers; relative projectivity, Green, Nagao and Second: RG-15/H2,H3; RG-16/H2–H5; RG-17/H1–H5.  Third Main Theorem is in §13. |
| [Meierfrankenfeld, *MTH 912 Class Notes*](https://users.math.msu.edu/users/meierfra/Classnotes/MTH912F04/912F04master.pdf) | §§6.6–6.7, printed pp. 156–171 | generalized decomposition numbers, subsections, support lemmas and Brauer's Second Main Theorem: RG-17/H1–H4. |
| [Kowalski, *Representation Theory*](https://people.math.ethz.ch/~kowalski/representation-theory.pdf) | Chapter 3 §§3.1–3.2, pp. 107–122; Chapter 5 §§5.2–5.5, pp. 212–242; Chapter 7 §§7.2–7.4, pp. 292–317 | topological/unitary representations; Haar/regular action/group algebra; general compact Peter–Weyl; $SL_2(\mathbb R)$: RG-18/H1,H3,H4; RG-19/H1–H3,H5; RG-20/H1,H2; RG-21/H1–H4; RG-22/H1–H4; RG-29/H1–H5; RG-30/H3,H5. |
| [Colojoară–Gheondea, *Lectures on Representations of Locally Compact Groups*](https://www.researchgate.net/publication/332548226_Lectures_of_representations_of_locally_compact_groups) | Chapter 2 §§1–2, pp. 31–48; Chapter 3, pp. 65–90; Chapter 4 §§1–5, pp. 91–126 | two Haar constructions/uniqueness; compact representations; rho-functions and induced representations; imprimitivity theorem: RG-18/H2,H5; RG-21/H2,H5; RG-22/H2,H5; RG-23/H1–H5; RG-24/H1–H4. |
| [Vogan, *Invariant measures on homogeneous spaces*](https://math.mit.edu/~dav/integration.pdf) | complete note, pp. 1–3 | modular character, invariant-measure criterion and quotient integration: RG-19/H1,H4; RG-23/H1,H5. |
| [Vogan, *Unitary induced representations*](https://math.mit.edu/~dav/ind.pdf) | complete note, pp. 1–5 | normalized induction, quotient densities and induction models: RG-23/H2–H4. |
| [Vogan, *Review of harmonic analysis on compact groups*](https://math.mit.edu/~dav/compactrev.pdf) | complete note, pp. 1–12 | Haar averaging, Schur orthogonality, matrix coefficients and Peter–Weyl decomposition: RG-21/H3–H5; RG-22/H1,H3,H4. |
| [Bekka–de la Harpe–Valette, *Kazhdan's Property (T)*](https://archive-ouverte.unige.ch/unige%3A10789) | Chapter 1 §§1.1–1.4, pp. 27–49; Appendix A §§A.1–A.5, pp. 289–307; Appendix C §§C.1–C.5, pp. 340–365; Appendix E §§E.1–E.3, pp. 383–393; Appendix F §§F.1–F.5, pp. 395–417; Appendix G §§G.1–G.5, pp. 420–445 | unitary representations/Schur/Haar/compact groups; positive type/GNS; induced representations; weak containment/Fell/group $C^*$-algebras/direct integrals; amenability/Følner; property (T): RG-19/H2,H4; RG-20/H1–H5; RG-21/H1,H2; RG-23/H2–H4; RG-25/H1–H5; RG-26/H2,H5; RG-27/H1–H5; RG-28/H1–H5. |
| [Bekka–de la Harpe, *Unitary Representations of Groups, Duals, and Characters*](https://arxiv.org/abs/1912.07262) | Chapter 1 §§1.A–1.I, pp. 13–66; Chapters 6–7, pp. 169–230; Chapter 8 §§8.A–8.D, pp. 231–260 | unitary dual, positive type/GNS, weak containment/Fell, induced representations, measurable fields/direct integrals, factors/type I/non-type I, group $C^*$-algebras/Glimm: RG-20/H2–H5; RG-25/H1–H5; RG-26/H1–H5. |
| [Bruhat, *Lectures on Lie Groups and Representations of Locally Compact Groups*](https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr14.pdf) | Part III, Chapters 10–12, printed pp. 91–126 | “Continuous sum of Hilbert Spaces I–II” and “The Plancherel formula”: measurable Hilbert fields, decomposable operators, factorial decomposition and Plancherel disintegration: independent proof backing for RG-26/H1–H5. |
| [Mackey, “Imprimitivity for Representations of Locally Compact Groups I”](https://pmc.ncbi.nlm.nih.gov/articles/PMC1063076/) | complete article, pp. 537–545 | systems of imprimitivity, transitive reconstruction and uniqueness: RG-24/H1–H5. |
| [Paterson, *Amenability*](https://openlibrary.org/books/OL2038124M/Amenability) | Chapter 1, pp. 25–50; Chapter 4, pp. 125–194 | invariant means; locally compact amenability; Reiter conditions; Følner conditions; closure properties: RG-27/H1–H5. |
| [Breuillard, *PCMI Lecture Notes on Property (T)*](https://www.math.utah.edu/pcmi12/lecture_notes/breuillard.pdf) | Lecture I §§I–III, pp. 1–12 | almost invariant vectors, Kazhdan pairs, spectral gap and basic examples: RG-28/H1–H5. |
| [Lang, *$SL_2(\mathbb R)$*](https://link.springer.com/book/10.1007/978-1-4612-5142-2) | Chapters I–III, pp. 1–49; Chapter VII, pp. 89–126; Chapter IX, pp. 163–177; Chapter X, pp. 179–190 | general/compact/induced pictures; derived action; Plancherel; discrete series: RG-29/H1–H5; RG-30/H1–H5. |
| [Kerr, *Notes on Representation Theory of $SL_2(\mathbb R)$*](https://www.math.wustl.edu/~matkerr/sl2notes.pdf) | §§1–2, pp. 1–12; §5, pp. 19–21 | principal series, $K$-types, ladder formulas, reducibility, unitary classification/tempered discussion: RG-29/H2–H5; RG-30/H1–H4. |

The canonical Isaacs Schur-index chapters were identified but not entered in
this table because the host did not deliver a complete readable text.  A
publisher preview and snippets are not a read range.

## 11. Per-pair independent-source matrix

“Treatment” here means a sustained proof-bearing chapter, paper or lecture-note
range, not a passing mention.  A third source is shown when it materially
cross-checked conventions.  URLs are in §10.

| pair | full treatment A, exact range read | independent full treatment B, exact range read | additional check |
|---|---|---|---|
| RG-1 | tom Dieck §4.5, pp. 61–63 | Kramár §§1–2, pp. 1–4 | — |
| RG-2 | Li Lecture 14 §§14.1–14.4, pp. 159–166 | Kramár §§1,3, pp. 1–2, 4–7 | tom Dieck §4.6, pp. 63–66 |
| RG-3 | Wiese §§2.2,2.3,2.5, pp. 26–40 | Zheng §4.3, pp. 145–151, and Propositions 4.6.14–4.6.15, pp. 170–171 | Isaacs Chs. 9–10 were identified but not counted because the host timed out |
| RG-4 | Späth §1.A, pp. 2–4 | tom Dieck §4.2, pp. 53–56 | — |
| RG-5 | Späth §§1.A–1.B, pp. 2–6 | tom Dieck §§4.2.5–4.2.7, pp. 55–56 | Späth cites Navarro/Navarro–Tiep for one projective proof; the component lemmas are exposed |
| RG-6 | tom Dieck §4.3 and §§4.6.3–4.6.7, pp. 57–58, 64–65 | Li §12.5 and §14.3, pp. 146–148, 161–165 | — |
| RG-7 | Bartel §6.1, pp. 28–30, plus Flavell §§2–5, pp. 1–15 | Craven *Finite Group Theory* §1.4, pp. 17–20, plus Kurzweil–Stellmacher §§7.1–7.2, pp. 161–171 | two independent treatments for each of the Frobenius-kernel and normal-$p$-complement halves |
| RG-8 | Chan §§2–3, pp. 7–13 | Craven *Groups, Geometries and Representation Theory* §§1.4,1.6–1.8, pp. 7–18 | — |
| RG-9 | Chan §§3–4, pp. 11–19 | Craven §§1.6–1.8, §2.1, pp. 13–21 | Etingof §§4.12–4.13, pp. 11–13 |
| RG-10 | Chan §4 and §6, pp. 18–19, 24–26 | Craven §§2.2,2.4, pp. 21–24, 28–32 | Etingof §§4.18–4.21, pp. 17–20 |
| RG-11 | Chan §§7–8, pp. 27–30 | Craven §§1.4–1.5, pp. 7–13 | Etingof §4.17, pp. 16–17 |
| RG-12 | Dudas–Michel §§8–10, pp. 29–44 | Taylor, Bruhat and Harish–Chandra sections, pp. 36–42 | — |
| RG-13 | Dudas–Michel §10.3, §§11.1–11.3, pp. 43–51 | Taylor, “Hecke algebras,” pp. 42–45, plus Losev §§2.1–2.3, pp. 3–6 for the spherical proof | Oi §2.3, pp. 10–12, rank-two arbitrary-character check; only Dudas–Michel is full general-$n$ for that subtopic |
| RG-14 | Martínez Lectures 2–4, pp. 9–28 | Jacobsen Ch. 1 §1, pp. 2–8, Ch. 2 §2, pp. 12–19 | BKY §2, pp. 2–3; Saunders §5, pp. 37–45 |
| RG-15 | Saunders §4, pp. 22–37 | Lassueur–Farrell Ch. 7 §§27–29, pp. 2–12 | Craven Ch. 2 §§2.1–2.3, pp. 18–25 |
| RG-16 | Martínez Lecture 4, pp. 23–28 | Craven Ch. 1 §§1.1–1.3, pp. 1–11 | Saunders §5, pp. 40–44 |
| RG-17 | Craven Ch. 1 §1.5 and Ch. 2 §§2.4–2.5, pp. 13–16, 26–30 | Meierfrankenfeld §§6.6–6.7, pp. 156–171 | — |
| RG-18 | Kowalski §5.2, pp. 212–225 | Colojoară–Gheondea Ch. 2 §§1–2, pp. 31–48 | — |
| RG-19 | Kowalski §§5.2–5.3, pp. 212–230 | Bekka–de la Harpe–Valette App. A §§A.3–A.4, pp. 299–306 | Vogan, *Invariant measures*, pp. 1–3 |
| RG-20 | Bekka–de la Harpe–Valette App. A §§A.1–A.2 and App. C, pp. 289–299, 340–365 | Bekka–de la Harpe Ch. 1 §§1.A–1.B, pp. 13–26 | Kowalski Ch. 3 §§3.1–3.2, pp. 107–122 |
| RG-21 | Kowalski §§5.3–5.5, pp. 225–242 | Vogan, *Compact harmonic analysis*, pp. 1–12 | Bekka–de la Harpe–Valette App. A §A.5, pp. 306–307 |
| RG-22 | Kowalski §§5.4–5.5, pp. 230–242 | Vogan, *Compact harmonic analysis*, pp. 1–12 | Colojoară–Gheondea Ch. 3, pp. 65–90 |
| RG-23 | Colojoară–Gheondea Ch. 4 §§1–4, pp. 91–115 | Bekka–de la Harpe–Valette App. E §§E.1–E.3, pp. 383–393 | Vogan's two notes, pp. 1–5 and 1–3 |
| RG-24 | Colojoară–Gheondea Ch. 4 §5, pp. 116–126 | Mackey, complete article, pp. 537–545 | — |
| RG-25 | Bekka–de la Harpe Ch. 1 §§1.A–1.F and Ch. 8, pp. 13–51, 231–260 | Bekka–de la Harpe–Valette App. F §§F.1–F.4, pp. 395–413 | — |
| RG-26 | Bekka–de la Harpe Ch. 1 §§1.G–1.I, Chs. 6–8, pp. 52–66, 169–260 | Bruhat Part III, Chapters 10–12, pp. 91–126 | Bekka–de la Harpe–Valette App. F §F.5, pp. 413–417, independently checks the interface |
| RG-27 | Bekka–de la Harpe–Valette App. G §§G.1–G.5, pp. 420–445 | Paterson Ch. 1 and Ch. 4, pp. 25–50, 125–194 | — |
| RG-28 | Bekka–de la Harpe–Valette Ch. 1 §§1.1–1.4, pp. 27–49 | Breuillard Lecture I §§I–III, pp. 1–12 | — |
| RG-29 | Kowalski Ch. 7 §§7.2–7.4, pp. 292–317 | Lang Chs. I–III,VII, pp. 1–49, 89–126 | Kerr §§1–2, pp. 1–12 |
| RG-30 | Lang Chs. VII,IX,X, pp. 89–126, 163–190 | Kerr §§1–2 and §5, pp. 1–12, 19–21 | Kowalski Ch. 7 §§7.3–7.4, pp. 297–317 |

Every pair therefore has at least two independent full treatments.  The
inaccessible Isaacs file and publisher previews remain uncounted; Zheng closed
RG-3 with an actually read proof treatment rather than a nominal citation.

## 12. Heading-to-item crosswalk for every `included` disposition

The harvest has five included source-heading or named-result dispositions per
pair except RG-7, whose two genuinely different Frobenius theorems require
three additional transfer/fusion headings.  Synonymous headings in independent
treatments are not used to mint duplicate items; they are either the second
proof source for the same row here or receive an `inline`/excluded disposition
in §13.  The item ids below are exhaustive: each proposed id occurs once in
this crosswalk.

| heading code | source's heading or named result | disposition | proposed item ids produced |
|---|---|---|---|
| RG-1/H1 | tom Dieck §4.5, “Cyclic Induction” | included | `def-rational-character-ring`; `def-cyclic-induction-subgroup`; `lem-induction-image-is-an-ideal-in-the-representation-ring` |
| RG-1/H2 | Kramár §2, “Artin's Theorem” | included | `lem-cyclic-generator-class-functions-by-moebius-inversion`; `lem-artin-cyclic-permutation-relation`; `thm-artin-induction-for-rational-characters` |
| RG-1/H3 | tom Dieck §4.5, cyclic-induction consequences | included | `cor-cyclic-fixed-points-detect-rational-representations`; `cor-rank-of-the-rational-representation-ring`; `cor-cyclic-local-integrality-criterion` |
| RG-1/H4 | tom Dieck §4.5, cyclic and $A_5$ induction examples | included | `ex-artin-induction-for-a-cyclic-group`; `ex-artin-permutation-relation-for-a5` |
| RG-1/H5 | Kramár §§1–2, rationality and denominator examples | included | `ex-cyclic-fixed-point-detection-for-s3`; `cex-rational-valued-character-need-not-be-defined-over-the-rationals` |
| RG-2/H1 | Li §14.1, elementary/hyperelementary groups and induction ideals | included | `def-p-elementary-and-p-hyperelementary-finite-groups`; `lem-elementary-and-hyperelementary-subgroups-are-subgroup-closed`; `def-induction-ideal-of-a-family-of-subgroups`; `lem-p-primary-character-value-congruence` |
| RG-2/H2 | Li §§14.2–14.3, localized elementary reduction | included | `lem-hyperelementary-permutation-subring-reduction`; `lem-banaschewski-prime-obstruction`; `lem-elementary-detection-at-a-fixed-element` |
| RG-2/H3 | Kramár §3, “Brauer's Theorem” | included | `lem-isaacs-linear-character-step`; `thm-brauer-induction`; `cor-elementary-restriction-detects-generalized-characters` |
| RG-2/H4 | tom Dieck §4.6, local integrality and splitting-field consequences | included | `cor-elementary-local-integrality-criterion`; `cor-cyclotomic-field-splits-a-finite-group`; `ex-elementary-and-hyperelementary-small-groups` |
| RG-2/H5 | Kramár §3, examples and the integral/cyclic boundary | included | `ex-brauer-induction-for-s3`; `ex-trivial-factors-in-an-elementary-group`; `cex-cyclic-subgroups-do-not-give-integral-induction-in-general` |
| RG-3/H1 | Wiese §2.2/Zheng Proposition 4.3.2, scalar extensions | included | `def-character-field-and-field-of-definition`; `def-splitting-field-for-a-finite-group`; `def-galois-conjugate-representation`; `lem-galois-conjugates-have-equal-scalar-extension-multiplicity` |
| RG-3/H2 | Wiese §2.3/Zheng Proposition 4.3.2, splitting fields and endomorphism algebras | included | `thm-scalar-extension-of-an-irreducible-finite-group-representation`; `lem-character-field-is-the-stabilizer-fixed-field`; `def-endomorphism-division-algebra-of-an-irreducible`; `thm-absolute-irreducibility-via-the-endomorphism-division-algebra` |
| RG-3/H3 | Wiese §2.5/Zheng §4.3, common multiplicity and Schur index | included | `def-schur-index-of-an-irreducible-character`; `lem-schur-index-is-independent-of-the-chosen-splitting-field`; `thm-character-of-an-irreducible-over-a-nonsplitting-field`; `cor-schur-index-divides-the-representation-degree` |
| RG-3/H4 | Wiese §2.5/Zheng Proposition 4.3.2, division-algebra and realization forms | included | `def-index-of-a-central-division-algebra`; `thm-schur-index-equals-division-algebra-index`; `thm-schur-index-as-minimal-realization-multiplicity`; `ex-galois-conjugate-characters-of-c3` |
| RG-3/H5 | Wiese §§2.3,2.5/Zheng Corollary 4.3.4 and Proposition 4.6.14, fields-of-definition examples | included | `ex-s3-is-split-over-the-rationals`; `ex-quaternion-character-has-schur-index-two`; `ex-trivial-character-has-schur-index-one` |
| RG-4/H1 | tom Dieck §4.2, “Restriction to Normal Subgroups” | included | `def-conjugate-representation-and-inertia-group`; `lem-restriction-to-a-normal-subgroup-is-semisimple`; `lem-normal-restriction-constituents-form-one-conjugacy-orbit` |
| RG-4/H2 | Späth §1.A, homogeneous restriction theorem | included | `thm-clifford-homogeneous-restriction-formula`; `def-clifford-ramification-index`; `lem-normal-isotypical-component-is-inertia-stable` |
| RG-4/H3 | tom Dieck §§4.2.3–4.2.5, inertia induction | included | `lem-induction-from-the-inertia-group-recovers-the-module`; `thm-clifford-correspondence`; `cor-normal-subgroup-induction-irreducibility-criterion` |
| RG-4/H4 | Späth §1.A, extension/Gallagher correspondence | included | `thm-gallagher-correspondence-for-an-extendible-character`; `ex-clifford-theory-for-s3-over-a3`; `ex-gallagher-correspondence-for-a-direct-product` |
| RG-4/H5 | tom Dieck §4.2, boundary examples for normal restriction | included | `ex-clifford-boundaries-n-equals-one-and-n-equals-g`; `cex-normal-restriction-of-an-irreducible-need-not-be-irreducible` |
| RG-5/H1 | Späth §1.A, invariant character extensions and factor sets | included | `def-extension-of-an-invariant-irreducible-representation`; `def-projective-representation-and-factor-set`; `lem-factor-set-is-a-normalized-two-cocycle`; `lem-rephasing-changes-the-factor-set-by-a-coboundary` |
| RG-5/H2 | Späth §1.B, projective representations and twisted algebras | included | `def-twisted-group-algebra-for-a-factor-set`; `lem-projective-representations-are-twisted-group-algebra-modules`; `lem-invariant-irrep-produces-a-projective-inertia-extension`; `def-clifford-obstruction-class` |
| RG-5/H3 | tom Dieck §§4.2.5–4.2.7, extension obstruction and central extension | included | `thm-extension-exists-iff-the-clifford-obstruction-vanishes`; `lem-cocycle-central-extension-is-a-group`; `lem-central-extension-linearizes-a-projective-representation` |
| RG-5/H4 | Späth §1.B, projective Clifford correspondence/little groups | included | `thm-projective-clifford-correspondence`; `thm-little-group-method-for-a-split-abelian-normal-subgroup`; `ex-q8-as-a-central-extension-of-c2-times-c2` |
| RG-5/H5 | Späth §1.B, obstruction and rephasing examples | included | `cex-invariant-character-need-not-extend-linearly`; `ex-little-groups-for-a-finite-dihedral-group`; `ex-coboundary-rephasing-of-a-projective-representation` |
| RG-6/H1 | tom Dieck §4.3, “Monomial Representations” | included | `def-monomial-representation-and-m-group`; `lem-monomial-representation-has-a-monomial-matrix-model`; `lem-faithful-irrep-with-a-noncentral-abelian-normal-subgroup-is-properly-induced` |
| RG-6/H2 | Li §12.5, supersolvable induction step | included | `lem-nonabelian-supersolvable-group-has-the-required-abelian-normal-subgroup`; `lem-induction-commutes-with-inflation`; `thm-supersolvable-groups-are-m-groups` |
| RG-6/H3 | Li §14.3, monomial induction consequences | included | `thm-monomial-induction-for-virtual-characters`; `cor-m-groups-are-solvable`; `rem-m-group-converses-and-boundary` |
| RG-6/H4 | tom Dieck §§4.3,4.6, monomial examples | included | `ex-dihedral-groups-are-m-groups`; `ex-unitriangular-group-of-order-p-cubed-is-an-m-group` |
| RG-6/H5 | Li §12.5, converses and degenerate cases | included | `cex-solvable-group-need-not-be-an-m-group`; `ex-one-dimensional-and-trivial-monomial-boundaries` |
| RG-7/H1 | Bartel §6.1, Frobenius groups and kernel candidate | included | `def-frobenius-complement-and-frobenius-group`; `prop-frobenius-permutation-action-characterization`; `def-frobenius-kernel-set` |
| RG-7/H2 | Bartel §6.1, induced class functions from a complement | included | `lem-frobenius-kernel-cardinality`; `lem-zero-at-identity-induction-restriction-for-a-frobenius-complement`; `lem-frobenius-character-extension-construction` |
| RG-7/H3 | Bartel §6.1, Frobenius kernel theorem | included | `lem-frobenius-character-extension-is-irreducible`; `lem-frobenius-kernel-is-an-intersection-of-character-kernels`; `thm-frobenius-kernel-theorem` |
| RG-7/H4 | Craven §1.4, fixed-point-free actions and semidirect products | included | `cor-frobenius-semidirect-product-decomposition`; `prop-frobenius-groups-and-fixed-point-free-actions`; `ex-s3-as-a-frobenius-group` |
| RG-7/H5 | Bartel/Craven Frobenius examples and boundary warnings | included | `ex-affine-linear-frobenius-groups-over-finite-fields`; `cex-a-transitive-action-need-not-be-frobenius`; `rem-frobenius-kernel-closure-is-the-content-of-the-theorem` |
| RG-7/H6 | Flavell §2, “Transfer” | included | `def-transfer-homomorphism-for-a-finite-index-subgroup`; `lem-transfer-is-independent-of-the-transversal`; `lem-transfer-is-a-homomorphism`; `lem-transfer-cycle-decomposition-formula` |
| RG-7/H7 | Flavell §3/Kurzweil–Stellmacher §7.2, “Normal p-Complements” and Burnside's theorem | included | `def-normal-p-complement-and-p-nilpotent-group`; `prop-equivalent-forms-of-having-a-normal-p-complement`; `def-p-residual-of-a-finite-group`; `thm-burnside-normal-p-complement-theorem`; `def-p-local-normalizer-for-normal-complement-theory`; `def-control-of-fusion-in-a-sylow-p-subgroup` |
| RG-7/H8 | Flavell §§4–5, fusion and Frobenius's Normal p-Complement Theorem | included | `lem-normal-p-complements-pass-to-subgroups-and-p-local-normalizers`; `lem-local-normal-p-complements-force-control-of-fusion`; `lem-fusion-control-gives-a-nontrivial-p-quotient-of-the-p-residual`; `thm-frobenius-normal-p-complement-theorem`; `cor-frobenius-automizer-criterion-for-p-nilpotence`; `ex-frobenius-normal-two-complement-for-s3`; `cex-cyclic-sylow-does-not-alone-imply-a-normal-p-complement` |
| RG-8/H1 | Chan §2, partitions, diagrams and tableaux | included | `def-partition-young-diagram-and-conjugate-partition`; `def-young-tableau-standard-tableau-and-shape`; `def-removable-and-addable-nodes-of-a-partition`; `lem-largest-entry-of-a-standard-tableau-is-removable` |
| RG-8/H2 | Chan §2, dominance and the basic tableau lemma | included | `def-dominance-order-on-partitions`; `lem-conjugation-reverses-dominance`; `lem-basic-combinatorial-lemma-for-tableaux` |
| RG-8/H3 | Chan §3, tabloids and Young permutation modules | included | `def-young-subgroup-tabloid-and-permutation-module`; `lem-young-permutation-module-is-induced-from-the-trivial-character`; `def-row-and-column-stabilizers-of-a-tableau` |
| RG-8/H4 | Craven §§1.6–1.8, tableau actions and semistandard tableaux | included | `lem-tableau-stabilizers-transform-by-conjugation`; `def-semistandard-tableau-and-kostka-number`; `ex-partitions-and-dominance-through-size-five` |
| RG-8/H5 | Chan §§2–3, small tableau/tabloid examples | included | `ex-removable-nodes-and-row-endpoints`; `ex-young-permutation-modules-for-row-and-column-partitions`; `ex-semistandard-tableaux-and-small-kostka-numbers` |
| RG-9/H1 | Chan §3, polytabloids and Specht modules | included | `def-column-antisymmetrizer-polytabloid-and-specht-module`; `lem-polytabloid-covariance-and-column-sign`; `def-invariant-inner-product-on-a-tabloid-module`; `lem-column-collision-causes-antisymmetrizer-cancellation` |
| RG-9/H2 | Chan §§3–4, dominance and the submodule theorem | included | `lem-column-antisymmetrizer-detects-dominance`; `lem-antisymmetrizer-image-on-its-tabloid-module-is-one-dimensional`; `thm-james-submodule-theorem-in-characteristic-zero`; `lem-specht-module-has-nondegenerate-self-pairing-in-characteristic-zero` |
| RG-9/H3 | Craven §§1.6–1.8, Specht irreducibility and classification | included | `thm-complex-specht-modules-are-irreducible`; `thm-specht-to-permutation-homomorphism-dominance`; `cor-distinct-specht-modules-are-inequivalent`; `thm-complex-irreducibles-of-symmetric-groups-are-specht-modules` |
| RG-9/H4 | Etingof §§4.12–4.13, standard polytabloid basis | included | `lem-leading-tabloid-coefficient-of-a-standard-polytabloid`; `thm-standard-polytabloid-basis`; `ex-polytabloids-for-shape-two-one` |
| RG-9/H5 | Chan/Craven Specht examples and modular boundary | included | `ex-trivial-and-sign-specht-modules`; `ex-specht-modules-of-s3`; `cex-specht-irreducibility-fails-without-the-characteristic-zero-hypothesis` |
| RG-10/H1 | Chan §4, branching filtration | included | `def-corner-order-and-specht-deletion-map`; `lem-specht-branching-subspaces-are-invariant`; `lem-specht-branching-successive-quotients`; `thm-specht-restriction-branching-filtration`; `cor-complex-specht-restriction-branching-rule` |
| RG-10/H2 | Chan §6, branching graph and Young's rule | included | `thm-complex-specht-induction-branching-rule`; `def-young-graph`; `cor-paths-in-the-young-graph-index-standard-tableaux`; `lem-semistandard-tableau-homomorphisms-to-young-permutation-modules` |
| RG-10/H3 | Chan §6/Etingof §4.18, Young's rule and commuting tensor actions | included | `lem-semistandard-homomorphisms-are-independent-and-dominance-triangular`; `thm-youngs-rule-for-permutation-modules`; `def-commuting-symmetric-and-linear-actions-on-tensor-power`; `lem-tensor-place-operators-span-the-symmetric-centralizer` |
| RG-10/H4 | Etingof §§4.19–4.21, Schur–Weyl duality | included | `thm-schur-weyl-double-centralizer`; `thm-schur-weyl-decomposition-with-length-cutoff`; `lem-schur-weyl-length-cutoff-by-column-antisymmetrization`; `ex-young-graph-through-s4` |
| RG-10/H5 | Craven §§2.2,2.4, branching/Young-rule examples and modular failure | included | `ex-youngs-rule-for-m-two-one`; `ex-schur-weyl-for-two-tensor-factors`; `ex-schur-weyl-for-c2-tensor-three`; `cex-branching-filtration-need-not-split-in-modular-characteristic` |
| RG-11/H1 | Chan §7, hook lengths and removal recursion | included | `def-hook-arm-leg-and-hook-length`; `lem-standard-tableau-removal-recursion`; `lem-hook-product-change-under-corner-removal`; `lem-hook-product-branching-identity` |
| RG-11/H2 | Chan §7, hook-length formula; §8, row insertion | included | `thm-hook-length-formula`; `def-row-insertion-and-bumping-route`; `lem-row-bumping-route-monotonicity`; `lem-robinson-schensted-recording-tableau-is-standard` |
| RG-11/H3 | Chan §8, reverse deletion and Robinson–Schensted | included | `def-reverse-row-deletion`; `lem-row-insertion-and-reverse-deletion-are-inverse`; `thm-robinson-schensted-correspondence`; `thm-rsk-correspondence-for-two-line-arrays` |
| RG-11/H4 | Craven §§1.4–1.5/Etingof §4.17, RSK and dimension consequences | included | `cor-rsk-symmetry-under-inversion`; `cor-sum-of-squares-of-standard-tableau-numbers`; `cor-involutions-are-counted-by-standard-tableaux`; `ex-hook-table-for-shape-three-two-one` |
| RG-11/H5 | Chan §§7–8, hook and insertion examples | included | `ex-hook-lengths-for-row-column-and-hook-shapes`; `ex-rsk-insertion-and-reverse-deletion`; `ex-rsk-for-involutions`; `ex-empty-and-singleton-rsk-boundaries` |
| RG-12/H1 | Dudas–Michel §8, standard subgroups, flags and parabolics | included | `def-standard-subgroups-of-gl-n-over-a-finite-field`; `thm-complete-flags-form-gl-n-over-b`; `def-compositions-partial-flags-and-standard-parabolics`; `thm-levi-decomposition-of-standard-parabolics-in-gl-n-fq`; `def-weyl-group-and-length-for-finite-gl-n` |
| RG-12/H2 | Dudas–Michel §9/Taylor, Bruhat decomposition | included | `lem-gaussian-elimination-produces-a-pivot-permutation`; `lem-rank-matrices-determine-the-pivot-permutation`; `thm-bruhat-decomposition-of-gl-n-over-a-finite-field`; `thm-relative-position-classifies-pairs-of-complete-flags`; `prop-cardinality-of-a-finite-bruhat-cell` |
| RG-12/H3 | Dudas–Michel §10, Harish–Chandra induction and restriction | included | `def-harish-chandra-induction-and-restriction-for-finite-gl-n`; `lem-unipotent-invariants-are-exact-over-c`; `thm-harish-chandra-adjunction-for-finite-gl-n`; `thm-transitivity-and-parabolic-independence-of-harish-chandra-induction` |
| RG-12/H4 | Taylor, Harish–Chandra Mackey formula and cuspidal support | included | `thm-parabolic-mackey-formula-for-finite-gl-n`; `def-cuspidal-support-and-harish-chandra-series`; `thm-existence-and-uniqueness-of-cuspidal-support-for-finite-gl-n`; `ex-gl-one-and-the-trivial-parabolic-boundary` |
| RG-12/H5 | Dudas–Michel §§8–10, finite flag examples | included | `ex-complete-flags-and-bruhat-cells-for-gl2-fq`; `ex-relative-position-of-flags-in-gl3-fq`; `ex-grassmannians-as-maximal-parabolic-quotients`; `ex-parabolic-induction-as-functions-on-partial-flags` |
| RG-13/H1 | Dudas–Michel §10.3, principal series and Weyl stabilizers | included | `def-diagonal-torus-characters-and-weyl-action`; `def-principal-series-module-for-finite-gl-n`; `lem-mackey-support-for-homs-between-finite-principal-series`; `thm-weyl-stabilizer-controls-principal-series-endomorphisms`; `cor-regular-finite-principal-series-is-irreducible`; `def-standard-intertwining-operators-for-finite-principal-series` |
| RG-13/H2 | Dudas–Michel §11.1/Losev §2.1, spherical Hecke algebra | included | `lem-spherical-principal-series-is-the-flag-permutation-module`; `thm-finite-hecke-algebra-as-convolution-corner-and-endomorphisms`; `def-bruhat-double-coset-basis-of-the-finite-hecke-algebra`; `lem-length-increasing-hecke-products`; `lem-rank-one-hecke-quadratic-relation`; `thm-type-a-iwahori-hecke-presentation` |
| RG-13/H3 | Losev §§2.2–2.3, generic Hecke algebra and deformation setup | included | `def-generic-type-a-hecke-algebra`; `thm-standard-basis-of-the-generic-type-a-hecke-algebra`; `prop-group-algebra-and-finite-field-specializations-of-the-generic-hecke-algebra`; `lem-semisimplicity-and-trace-form-for-the-finite-spherical-hecke-algebra`; `lem-lifting-idempotents-in-complete-deformation-algebras` |
| RG-13/H4 | Taylor/Losev, Tits deformation and principal-series constituents | included | `thm-tits-deformation-for-the-type-a-hecke-algebra`; `cor-type-a-finite-hecke-algebra-is-noncanonically-isomorphic-to-csn`; `thm-spherical-principal-series-constituents-of-gl-n-fq`; `thm-general-finite-principal-series-endomorphism-algebra`; `cor-constituents-of-general-principal-series-for-finite-gl-n` |
| RG-13/H5 | Losev/Oi, rank-two and parameter-boundary calculations | included | `ex-two-dimensional-hecke-algebra-for-gl2-fq`; `ex-trivial-and-steinberg-splitting-on-p1-fq`; `ex-regular-and-singular-torus-characters-in-gl3-fq`; `ex-q-equals-two-torus-boundary`; `rem-tits-isomorphism-is-noncanonical` |
| RG-14/H1 | Saunders §5, block bimodules, diagonal vertices and defect groups | included | `def-block-bimodule-for-the-double-group`; `lem-group-algebra-bimodule-is-induced-from-the-diagonal`; `thm-block-bimodule-has-a-diagonal-vertex`; `def-defect-group-and-numerical-defect-of-a-block`; `thm-defect-groups-of-a-block-are-conjugate`; `thm-vertices-of-modules-in-a-block-lie-in-a-defect-group` |
| RG-14/H2 | Martínez Lectures 3–4, defect extremes and the Brauer map | included | `prop-principal-block-has-sylow-defect`; `thm-defect-zero-blocks-are-simple-algebras`; `def-brauer-homomorphism-for-a-p-subgroup`; `thm-brauer-homomorphism-is-multiplicative`; `lem-brauer-homomorphism-is-conjugation-equivariant`; `def-relative-brauer-homomorphism` |
| RG-14/H3 | Jacobsen §2, relative maps, support and Brauer pairs | included | `lem-relative-brauer-homomorphisms-are-transitive`; `prop-central-idempotents-under-the-brauer-homomorphism`; `thm-defect-groups-are-maximal-brauer-support`; `def-brauer-pair-for-a-block`; `def-normal-inclusion-of-brauer-pairs`; `thm-unique-normal-subpair-below-a-brauer-pair` |
| RG-14/H4 | Jacobsen/BKY §2, Brauer-pair order and maximal pairs | included | `thm-brauer-pair-order-is-independent-of-the-normal-chain`; `thm-every-brauer-pair-determines-a-unique-global-block`; `thm-maximal-brauer-pairs-exist-and-are-conjugate`; `thm-maximal-brauer-pairs-detect-defect-groups`; `cor-normal-p-core-lies-in-every-block-defect-group` |
| RG-14/H5 | Jacobsen/Saunders, defect consequences and examples | included | `cor-block-defect-groups-are-p-radical`; `ex-defect-and-brauer-pairs-for-a4-in-characteristic-three`; `ex-brauer-pair-branching-for-c3-semidirect-c4-in-characteristic-two`; `ex-blocks-and-defect-groups-of-s3`; `ex-defect-zero-and-p-group-boundaries` |
| RG-15/H1 | Saunders §4, exceptional intersection families | included | `def-green-exceptional-intersection-families`; `lem-green-mackey-intersections-force-proper-vertices` |
| RG-15/H2 | Lassueur–Farrell §29, restriction and induction distinguished summands | included | `lem-green-restriction-has-one-distinguished-summand`; `lem-green-induction-has-one-distinguished-summand` |
| RG-15/H3 | Saunders Lemmas 4.35–4.38 and Theorem 4.34, Green correspondence | included | `lem-green-distinguished-summands-are-mutually-inverse`; `thm-green-correspondence-with-exceptional-families` |
| RG-15/H4 | Lassueur–Farrell Theorem 29.4 and Example 29.3 | included | `cor-green-correspondence-for-modules-of-vertex-exactly-p`; `ex-green-restriction-summand-with-the-same-vertex` |
| RG-15/H5 | Saunders TI-subgroup specialization and identity boundaries | included | `ex-green-correspondence-for-a-trivial-intersection-subgroup`; `ex-green-correspondence-identity-boundaries` |
| RG-16/H1 | Martínez Lecture 4/Saunders §5, block induction | included | `def-induced-block-from-a-subgroup`; `lem-induced-blocks-have-controlled-defect`; `lem-block-induction-exists-under-centralizer-containment`; `lem-block-induction-is-transitive` |
| RG-16/H2 | Craven §§1.1–1.3, local existence/injection/surjection | included | `lem-first-main-theorem-local-block-existence`; `lem-first-main-theorem-injectivity`; `lem-first-main-theorem-surjectivity` |
| RG-16/H3 | Martínez Lecture 4, Brauer's First Main Theorem | included | `thm-brauer-first-main-theorem`; `def-brauer-correspondent-of-a-block`; `thm-corresponding-block-bimodules-are-green-correspondents` |
| RG-16/H4 | Saunders §5/Craven §2.4, Brauer–Green (Nagao) compatibility | included | `thm-brauer-green-nagao-block-compatibility`; `cor-every-block-has-an-indecomposable-module-of-full-defect-vertex`; `ex-brauer-correspondence-in-s7` |
| RG-16/H5 | Saunders/Craven, block-induction and correspondence examples | included | `ex-brauer-correspondence-for-sl2-over-fp`; `cex-centralizer-containment-is-not-necessary-for-block-induction`; `ex-defect-one-first-main-theorem-boundary` |
| RG-17/H1 | Craven §1.5/Meierfrankenfeld §6.6, p-sections and generalized decomposition numbers | included | `lem-commuting-p-and-p-prime-parts-of-a-finite-group-element`; `def-p-section-of-a-p-element`; `def-generalized-decomposition-numbers` |
| RG-17/H2 | Meierfrankenfeld §§6.6–6.7, existence, subsections and vanishing | included | `thm-generalized-decomposition-numbers-exist-and-are-unique`; `def-brauer-subsection`; `lem-relative-projectivity-forces-p-section-character-vanishing` |
| RG-17/H3 | Craven §§2.4–2.5, Nagao decomposition and trace errors | included | `thm-nagao-decomposition-for-restriction-to-a-centralizer`; `lem-nagao-error-terms-have-zero-trace-on-the-relevant-p-section`; `lem-local-block-projection-controls-generalized-decomposition-support` |
| RG-17/H4 | Meierfrankenfeld Theorem 6.7.15, Brauer's Second Main Theorem | included | `thm-brauer-second-main-theorem`; `cor-generalized-decomposition-columns-have-corresponding-block-support`; `ex-p-sections-and-brauer-subsections-in-a-small-finite-group` |
| RG-17/H5 | Craven/Meierfrankenfeld, $u=1$ and empty-support boundaries | included | `ex-second-main-theorem-at-u-equals-one`; `ex-second-main-theorem-with-no-inducing-local-block` |
| RG-18/H1 | Kowalski §5.2, Haar integral and translate-cover setup | included | `def-left-haar-integral-and-left-haar-measure`; `lem-translations-preserve-compactly-supported-continuous-functions`; `def-haar-covering-ratio-of-test-functions`; `lem-haar-covering-ratios-are-finite-and-positive` |
| RG-18/H2 | Colojoară–Gheondea Ch. 2, Tychonoff proof of Haar existence | included | `lem-normalized-approximate-haar-functionals-are-positive-and-invariant-in-the-limit`; `lem-haar-candidate-sets-have-the-finite-intersection-property`; `thm-existence-of-a-left-haar-integral` |
| RG-18/H3 | Kowalski §5.2, Haar measure consequences and comparison | included | `cor-existence-of-left-and-right-haar-measures`; `lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets`; `lem-haar-integral-comparison-inequality` |
| RG-18/H4 | Kowalski/Colojoară–Gheondea, uniqueness and compact normalization | included | `thm-uniqueness-of-left-haar-measure-up-to-scale`; `cor-normalized-haar-probability-on-a-compact-group`; `ex-counting-measure-as-haar-measure-on-a-discrete-group` |
| RG-18/H5 | Colojoară–Gheondea Ch. 2, Haar models | included | `ex-lebesgue-measure-as-haar-measure-on-rn`; `ex-normalized-haar-measure-on-a-finite-group`; `ex-haar-measure-on-an-infinite-product-of-compact-groups` |
| RG-19/H1 | Kowalski §5.2/Vogan, modular function and inversion | included | `def-modular-function-of-a-locally-compact-group`; `lem-right-translation-scales-left-haar-measure`; `thm-the-modular-function-is-a-continuous-homomorphism`; `lem-haar-change-of-variables-under-inversion` |
| RG-19/H2 | Bekka–de la Harpe–Valette App. A.3–A.4, unimodularity and convolution | included | `def-unimodular-locally-compact-group`; `prop-compact-discrete-and-abelian-groups-are-unimodular`; `def-convolution-on-cc-and-l1-of-a-group`; `lem-convolution-preserves-cc-and-is-associative` |
| RG-19/H3 | Kowalski §5.3, the $L^1(G)$ Banach star algebra | included | `lem-l1-convolution-norm-inequality`; `def-involution-on-l1-of-a-group`; `lem-the-l1-involution-is-isometric-and-reverses-convolution`; `thm-l1-of-a-locally-compact-group-is-a-banach-star-algebra` |
| RG-19/H4 | Bekka–de la Harpe–Valette App. A.4, approximate identities and regular actions | included | `thm-l1-group-algebras-have-a-contractively-bounded-approximate-identity`; `def-left-and-right-regular-unitary-representations`; `thm-regular-representations-are-unitary-and-strongly-continuous`; `ex-modular-function-of-the-affine-group-of-the-line` |
| RG-19/H5 | Kowalski/Vogan, discrete, compact and nonunimodular calculations | included | `ex-convolution-on-a-discrete-group`; `ex-convolution-on-a-compact-group`; `cex-naive-inversion-is-not-the-l1-involution-for-a-nonunimodular-group` |
| RG-20/H1 | Bekka–de la Harpe–Valette App. A.1–A.2, unitary representations and Schur's lemma | included | `def-strongly-continuous-unitary-representation`; `lem-continuity-criteria-for-unitary-representations`; `def-cyclic-vector-and-cyclic-unitary-representation`; `thm-schurs-lemma-for-unitary-representations` |
| RG-20/H2 | Bekka–de la Harpe Ch. 1.A–1.B, coefficients and positive type | included | `def-matrix-coefficient-of-a-unitary-representation`; `lem-unitary-matrix-coefficients-are-bounded-and-uniformly-continuous`; `def-continuous-function-of-positive-type`; `lem-diagonal-unitary-coefficients-have-positive-type` |
| RG-20/H3 | Bekka–de la Harpe–Valette App. C, GNS construction | included | `lem-positive-type-functions-define-a-pre-hilbert-form`; `lem-the-gns-null-space-is-translation-invariant`; `lem-the-gns-translation-action-is-unitary-and-strongly-continuous`; `thm-gns-construction-for-topological-groups` |
| RG-20/H4 | Bekka–de la Harpe App. C/Ch. 1.B, cyclic uniqueness and purity | included | `thm-uniqueness-of-the-cyclic-gns-representation`; `cor-normalized-positive-type-functions-correspond-to-pointed-cyclic-representations`; `thm-pure-positive-type-functions-correspond-to-irreducible-gns-representations`; `ex-positive-type-functions-on-a-discrete-group` |
| RG-20/H5 | Bekka–de la Harpe/Valette, positive-type and GNS examples | included | `ex-gns-representation-of-a-one-dimensional-character`; `ex-positive-type-gaussian-on-the-real-line`; `cex-a-bounded-continuous-function-need-not-have-positive-type` |
| RG-21/H1 | Kowalski §5.3, compact averaging and invariant forms | included | `def-averaged-hermitian-form-for-a-compact-group`; `lem-averaging-makes-a-finite-dimensional-representation-unitary`; `lem-unitary-invariant-subspaces-have-invariant-orthogonal-complements` |
| RG-21/H2 | Bekka–de la Harpe–Valette App. A.5, complete reducibility and averaging intertwiners | included | `thm-finite-dimensional-compact-group-representations-are-completely-reducible`; `def-haar-averaging-operator-on-hom-spaces`; `lem-haar-averaging-projects-onto-the-intertwiner-space` |
| RG-21/H3 | Vogan/Kowalski, compact convolution and finite-dimensional irreducibles | included | `lem-compact-convolution-operators-are-hilbert-schmidt`; `thm-continuous-irreducible-unitary-representations-of-compact-groups-are-finite-dimensional`; `thm-schur-orthogonality-for-compact-groups` |
| RG-21/H4 | Kowalski §5.5, compact isotypic projections | included | `def-compact-group-isotypic-projection`; `thm-isotypic-projections-are-mutually-orthogonal-equivariant-projections`; `ex-averaging-a-form-for-a-circle-representation` |
| RG-21/H5 | Vogan/Colojoară–Gheondea, compact and noncompact boundary examples | included | `ex-isotypic-projections-for-a-finite-group-as-a-compact-group`; `ex-compact-group-with-no-faithful-finite-dimensional-representation`; `cex-haar-averaging-does-not-produce-a-finite-measure-for-a-noncompact-group` |
| RG-22/H1 | Kowalski §5.4/Vogan, representative functions and point separation | included | `def-representative-function-on-a-compact-group`; `lem-representative-functions-form-a-self-adjoint-translation-invariant-algebra`; `lem-compact-group-matrix-coefficients-separate-points` |
| RG-22/H2 | Colojoară–Gheondea/Kowalski, compact spectral pieces and uniform density | included | `lem-finite-rank-spectral-pieces-of-compact-convolution`; `thm-uniform-peter-weyl-density`; `def-normalized-irreducible-matrix-coefficient-basis` |
| RG-22/H3 | Vogan, Peter–Weyl $L^2$ and regular decomposition | included | `thm-l2-peter-weyl-orthonormal-basis`; `thm-regular-representation-peter-weyl-decomposition`; `thm-arbitrary-unitary-representations-of-compact-groups-decompose-discretely` |
| RG-22/H4 | Kowalski §5.5, Fourier consequences and isotypic support | included | `cor-parseval-and-fourier-inversion-for-compact-groups`; `cor-each-vector-in-a-compact-representation-has-countable-isotypic-support`; `ex-peter-weyl-for-a-profinite-group` |
| RG-22/H5 | Colojoară–Gheondea, general compact examples and noncompact failure | included | `ex-peter-weyl-for-an-infinite-product-of-finite-groups`; `ex-peter-weyl-for-the-circle-without-reminting-pontryagin-duality`; `cex-compact-peter-weyl-is-not-a-direct-sum-decomposition-for-noncompact-regular-representations` |
| RG-23/H1 | Colojoară–Gheondea Ch. 4.1/Vogan, homogeneous measures and rho-functions | included | `def-quasi-invariant-measure-on-a-homogeneous-space`; `def-rho-function-for-a-closed-subgroup`; `thm-existence-of-rho-functions-and-quasi-invariant-measures-on-g-mod-h`; `thm-weil-quotient-integration-formula-with-rho-function` |
| RG-23/H2 | Bekka–de la Harpe–Valette App. E.1, Radon–Nikodym cocycle and covariant functions | included | `lem-radon-nikodym-cocycle-of-a-homogeneous-measure`; `def-covariant-function-model-of-unitary-induction`; `lem-the-induced-inner-product-is-independent-of-coset-representatives` |
| RG-23/H3 | Colojoară–Gheondea Ch. 4.2–4.3, unitary strongly continuous induced action | included | `lem-the-induced-action-is-unitary`; `lem-the-induced-action-is-strongly-continuous`; `thm-unitary-induction-from-a-closed-subgroup` |
| RG-23/H4 | Bekka–de la Harpe–Valette App. E.2–E.3, independence and induction in stages | included | `thm-induced-representation-is-independent-of-rho-function-and-measure-representative`; `thm-unitary-induction-in-stages`; `ex-unitary-induction-from-the-trivial-subgroup` |
| RG-23/H5 | Vogan/Colojoară–Gheondea, quotient and induction examples | included | `ex-unitary-induction-from-a-cocompact-lattice`; `ex-unitary-induction-for-a-finite-group-recovers-the-counting-model`; `cex-g-mod-h-need-not-have-an-invariant-measure` |
| RG-24/H1 | Mackey/Colojoară–Gheondea, systems of imprimitivity | included | `def-system-of-imprimitivity`; `def-transitive-system-of-imprimitivity`; `lem-induced-representations-carry-a-canonical-system-of-imprimitivity` |
| RG-24/H2 | Mackey, transformation-algebra and spectral multiplicity model | included | `lem-a-system-of-imprimitivity-gives-a-representation-of-the-transformation-algebra`; `lem-spectral-measure-multiplicity-model-for-a-transitive-system`; `lem-the-stabilizer-action-on-an-imprimitivity-fiber-is-unitary` |
| RG-24/H3 | Colojoară–Gheondea Ch. 4.5, imprimitivity reconstruction and uniqueness | included | `lem-the-imprimitivity-reconstruction-map-is-isometric-and-intertwining`; `thm-mackey-imprimitivity-theorem`; `thm-uniqueness-in-mackey-imprimitivity` |
| RG-24/H4 | Mackey, little-group reduction and standard transitive models | included | `cor-mackey-little-group-reduction-for-an-abelian-normal-subgroup`; `ex-the-regular-position-momentum-imprimitivity-system`; `ex-imprimitivity-for-a-finite-transitive-g-set` |
| RG-24/H5 | Mackey/Colojoară–Gheondea, affine little groups and nontransitive boundary | included | `ex-little-groups-for-the-real-ax-plus-b-group`; `cex-a-nontransitive-system-is-not-classified-by-one-stabilizer` |
| RG-25/H1 | Bekka–de la Harpe Ch. 1.A–1.C, integrated forms and the full group algebra | included | `def-integrated-form-of-a-unitary-representation`; `lem-integrated-forms-are-nondegenerate-star-representations`; `thm-unitary-representations-and-nondegenerate-l1-star-representations-correspond`; `def-full-group-c-star-algebra` |
| RG-25/H2 | Bekka–de la Harpe–Valette App. F.1–F.2, full/reduced completions | included | `lem-the-full-group-c-star-seminorm-is-finite-and-separates-the-required-quotient`; `thm-nondegenerate-representations-of-c-star-g-are-unitary-representations-of-g`; `def-reduced-group-c-star-algebra`; `thm-the-canonical-map-from-full-to-reduced-group-c-star-algebra` |
| RG-25/H3 | Bekka–de la Harpe Ch. 1.C–1.D, unitary dual, weak containment and Fell topology | included | `def-unitary-dual-of-a-locally-compact-group`; `def-weak-containment-of-unitary-representations`; `thm-weak-containment-is-equivalent-to-kernel-inclusion`; `def-fell-topology-on-the-unitary-dual` |
| RG-25/H4 | Bekka–de la Harpe Ch. 8, closure, compact dual, primitive ideals and abelian boundary | included | `lem-fell-closure-is-characterized-by-weak-containment`; `cor-the-unitary-dual-of-a-compact-group-is-fell-discrete`; `def-primitive-ideal-space-of-a-group-c-star-algebra`; `prop-the-unitary-dual-to-primitive-ideal-map-is-continuous-and-surjective`; `cor-the-abelian-group-c-star-algebra-recovers-pontryagin-duality` |
| RG-25/H5 | Bekka–de la Harpe/Valette, group-$C^*$ and Fell examples | included | `ex-full-and-reduced-group-c-star-algebras-of-a-finite-group`; `ex-unitary-dual-and-full-group-c-star-algebra-of-the-integers`; `ex-fell-convergence-of-characters-of-the-real-line`; `cex-the-unitary-dual-need-not-be-hausdorff` |
| RG-26/H1 | Bekka–de la Harpe Ch. 1.G, measurable Hilbert fields and direct integrals | included | `def-measurable-field-of-separable-hilbert-spaces`; `def-direct-integral-of-a-measurable-hilbert-field`; `lem-direct-integral-norm-and-completeness`; `def-measurable-and-decomposable-operator-fields` |
| RG-26/H2 | Bekka–de la Harpe Ch. 1.H–1.I/Valette App. F.5, decomposable operators and representation fields | included | `thm-the-commutant-of-diagonal-multiplication-is-the-algebra-of-decomposable-operators`; `def-direct-integral-of-unitary-representations`; `lem-a-measurable-direct-integral-of-unitary-representations-is-strongly-continuous`; `def-factor-representation-and-primary-representation` |
| RG-26/H3 | Bekka–de la Harpe Ch. 6, central decomposition and type I criteria | included | `thm-central-decomposition-into-factor-representations`; `thm-essential-uniqueness-of-central-decomposition`; `def-type-i-factor-representation-and-type-i-group`; `thm-equivalent-characterizations-of-second-countable-type-i-groups` |
| RG-26/H4 | Bekka–de la Harpe Chs. 6–8, type-I irreducible disintegration and non-type-I boundary | included | `thm-irreducible-direct-integral-decomposition-for-type-i-groups`; `thm-essential-uniqueness-of-type-i-irreducible-disintegration`; `thm-non-type-i-groups-have-nonsmooth-irreducible-decomposition`; `cor-compact-groups-are-type-i-and-direct-integrals-collapse-to-discrete-sums` |
| RG-26/H5 | Bekka–de la Harpe/Valette, direct-integral and factor examples | included | `ex-direct-integral-of-characters-for-the-regular-representation-of-r`; `ex-compact-group-direct-integrals-are-atomic`; `ex-the-left-regular-factor-of-an-icc-discrete-group`; `cex-irreducible-multiplicity-data-is-not-canonical-outside-type-i` |
| RG-27/H1 | Paterson Ch. 1/Valette App. G.1, invariant means and Reiter $P_1$ | included | `def-left-invariant-mean-on-l-infinity-of-a-locally-compact-group`; `def-amenable-locally-compact-group`; `def-reiter-condition-p1`; `lem-an-invariant-mean-produces-a-reiter-net` |
| RG-27/H2 | Bekka–de la Harpe–Valette App. G.2, mean/Reiter equivalence and Følner sets | included | `lem-a-reiter-net-has-an-invariant-mean-cluster-point`; `thm-amenability-is-equivalent-to-reiter-p1`; `def-left-folner-net-for-a-locally-compact-group`; `lem-folner-nets-give-reiter-nets` |
| RG-27/H3 | Paterson Ch. 4, Følner criterion and Hulanicki criterion | included | `lem-reiter-functions-can-be-cut-down-to-folner-sets`; `thm-folner-criterion-for-locally-compact-groups`; `cor-folner-sequences-for-second-countable-compactly-generated-groups`; `thm-hulanicki-weak-containment-criterion-for-amenability` |
| RG-27/H4 | Paterson/Valette, amenable classes and closure properties | included | `prop-compact-and-locally-compact-abelian-groups-are-amenable`; `thm-amenability-is-stable-under-closed-subgroups-quotients-and-extensions`; `ex-folner-sets-in-rn` |
| RG-27/H5 | Bekka–de la Harpe–Valette App. G, examples and free-group failure | included | `ex-the-real-affine-group-is-amenable-and-nonunimodular`; `ex-compact-groups-have-a-constant-reiter-net`; `cex-the-free-group-on-two-generators-is-not-amenable` |
| RG-28/H1 | Bekka–de la Harpe–Valette §1.1/Breuillard I, almost invariance, property (T), Kazhdan pairs | included | `def-almost-invariant-vectors-for-a-unitary-representation`; `def-kazhdans-property-t`; `def-kazhdan-pair-and-kazhdan-constant`; `thm-property-t-is-equivalent-to-the-existence-of-a-kazhdan-pair` |
| RG-28/H2 | Bekka–de la Harpe–Valette §§1.2–1.3, Fell isolation and structure | included | `thm-property-t-is-equivalent-to-isolation-of-the-trivial-representation`; `lem-almost-invariant-vectors-and-positive-type-functions`; `thm-property-t-implies-compact-generation`; `thm-property-t-passes-to-quotients` |
| RG-28/H3 | Breuillard II–III, compact groups, amenability and spectral gap | included | `thm-compact-groups-have-property-t`; `thm-an-amenable-property-t-locally-compact-group-is-compact`; `def-spectral-gap-for-a-unitary-representation`; `thm-property-t-is-uniform-spectral-gap-for-representations` |
| RG-28/H4 | Bekka–de la Harpe–Valette §1.4, higher-rank and rank-one examples | included | `thm-sl-n-r-has-property-t-for-n-at-least-three`; `prop-sl2-r-does-not-have-property-t`; `ex-a-kazhdan-pair-for-a-compact-group` |
| RG-28/H5 | Breuillard, finite/abelian/complementary-series boundary examples | included | `ex-property-t-for-a-finite-group`; `cex-z-does-not-have-property-t`; `cex-sl2-r-complementary-series-destroys-property-t` |
| RG-29/H1 | Lang Chs. I–III, Iwasawa decomposition and normalized induced picture | included | `def-iwasawa-and-minimal-parabolic-data-for-sl2-r`; `thm-iwasawa-decomposition-for-sl2-r`; `def-normalized-principal-series-i-epsilon-nu`; `thm-compact-picture-of-the-sl2-principal-series` |
| RG-29/H2 | Kerr §§1–2, $K$-types, ladder operators and reducibility | included | `lem-k-type-decomposition-of-the-sl2-principal-series`; `lem-sl2-raising-and-lowering-formulas-in-the-compact-picture`; `thm-generic-irreducibility-and-the-exceptional-parameter-lattice`; `def-standard-intertwining-operator-for-sl2-r` |
| RG-29/H3 | Lang Ch. VII/Kowalski §7.3, intertwiner continuation and unitary ranges | included | `thm-meromorphic-continuation-and-intertwining-identity-for-a-nu`; `lem-k-type-eigenvalue-recurrence-for-the-sl2-intertwiner`; `thm-unitarity-of-the-sl2-unitary-principal-series`; `thm-unitarity-of-the-sl2-complementary-series` |
| RG-29/H4 | Kowalski §7.4, parameter equivalence and trivial endpoint | included | `thm-equivalence-i-epsilon-nu-is-i-epsilon-minus-nu`; `cor-complementary-series-converge-to-the-trivial-representation`; `ex-iwasawa-coordinates-and-haar-density-on-sl2-r` |
| RG-29/H5 | Kerr/Lang, $K$-type and complementary-form calculations | included | `ex-first-k-types-and-ladder-coefficients-in-i-epsilon-nu`; `ex-intertwiner-eigenvalues-in-the-spherical-complementary-range`; `cex-the-complementary-form-loses-positivity-beyond-the-unitary-interval` |
| RG-30/H1 | Kerr §§1–2/Lang Ch. VII, $K$-finite vectors and extremal-weight submodules | included | `def-k-finite-and-smooth-vectors-for-sl2-r`; `lem-k-finite-vectors-are-dense-and-stable-under-the-derived-action`; `lem-highest-and-lowest-weight-submodules-at-principal-series-reducibility-points`; `def-holomorphic-and-antiholomorphic-discrete-series-models` |
| RG-30/H2 | Lang Ch. X, discrete-series models, $K$-types and square integrability | included | `lem-the-weighted-area-form-is-sl2-r-invariant`; `thm-irreducibility-and-k-types-of-the-discrete-series`; `thm-square-integrability-of-sl2-r-discrete-series-matrix-coefficients`; `def-limits-of-discrete-series-for-sl2-r` |
| RG-30/H3 | Kerr §5/Kowalski §7.4, limits, temperedness and unitary classification | included | `thm-unitarity-and-irreducibility-of-the-limits-of-discrete-series`; `def-tempered-unitary-representation`; `thm-tempered-status-of-the-sl2-r-unitary-series`; `thm-classification-of-the-irreducible-unitary-dual-of-sl2-r` |
| RG-30/H4 | Lang Chs. IX–X, Plancherel support and Fell-limit topology | included | `thm-plancherel-support-for-sl2-r`; `cor-the-unitary-dual-of-sl2-r-is-non-discrete-and-non-hausdorff-at-the-stated-limits`; `ex-lowest-k-types-of-the-first-holomorphic-discrete-series`; `ex-weighted-norm-invariance-for-a-mobius-transformation` |
| RG-30/H5 | Lang/Kerr, coefficient decay and parameter-identification calculations | included | `ex-a-square-integrable-discrete-series-matrix-coefficient`; `cex-a-limit-of-discrete-series-is-not-square-integrable`; `ex-parameter-identifications-in-the-sl2-r-unitary-dual` |

## 13. Deliberately not decomposed

This is the anti-padding record.  The included headings are exhausted by §12.
The following headings or named results occurred in the ranges read but did not
become items.  `inline` means the result is a proof step inside the named item,
not an independent dependency.  `deferred` names the missing subject or owner;
`out-of-scope` is used only where the result is genuinely peripheral to the
commissioned route.

| source heading or named result read | disposition | heading-specific reason |
|---|---|---|
| Kramár §1, ordinary characters, restriction and Frobenius reciprocity | deferred | The abstract-algebra page `induced-representations-and-frobenius-reciprocity` owns these prerequisites; re-minting them would violate the seam. |
| tom Dieck §4.2, Mackey restriction formula | deferred | The same abstract-algebra induction page owns the finite Mackey formula; RG-4 only applies it to a normal subgroup. |
| tom Dieck §4.5, the Burnside-ring formulation of Artin induction | inline | Its mark calculation is absorbed into `lem-artin-cyclic-permutation-relation`; a second Burnside-ring theorem would not be used downstream. |
| tom Dieck §4.6, hyperelementary permutation relation stated without proof | inline | RG-2 uses Li/Kramár's proof-bearing localized reduction in `lem-hyperelementary-permutation-subring-reduction` rather than minting an externally unsupported duplicate. |
| Li §12.5, definitions of induction and inflation | deferred | Finite induction belongs to abstract algebra; only `lem-induction-commutes-with-inflation` is new and needed for the monomial proof. |
| Li §14.4, Artin $L$-function application of Brauer induction | deferred | It requires analytic number theory not reached by this group-representation track and is not used by any RG theorem. |
| Zheng §4.3, first orthogonality relation for characters | deferred | Ordinary character orthogonality is expressly owned by `characters-and-the-orthogonality-relations`. |
| Zheng §4.3, primitive central idempotent formula from ordinary characters | deferred | The abstract-algebra semisimple group-algebra pages own the ordinary formula; the modular idempotent partition is separately owned by GT-19. |
| Zheng Proposition 4.6.15, Schur index one in nondefining positive characteristic | out-of-scope | RG-3 concerns characteristic-zero fields of definition; modular representations in characteristic $p$ enter through GT-18/GT-19, not by extending this page sideways. |
| Wiese §2.5, Galois-representation definability beyond finite images | out-of-scope | Continuous absolute Galois representations require profinite/Galois infrastructure and are not needed for finite-group Schur indices. |
| Späth §1.B, isomorphisms of character triples | deferred | Character triples beyond the projective Clifford correspondence form successor Clifford theory; no later RG page consumes them. |
| Späth's cited Navarro/Navarro–Tiep proof of the projective Clifford theorem | inline | The accessible Späth range states the result but cites the proof; RG-5 exposes the cocycle, twisted-algebra and linearization lemmas instead of adding a `proved_here:false` surrogate. |
| tom Dieck §4.6, further examples of monomial induction relations | inline | They are finite checks absorbed into the RG-6 B examples and add no distinct hypothesis or result. |
| Li §12.5, classification questions for M-groups | out-of-scope | A classification of M-groups is far beyond the requested monomial/supersolvable spine; the sourced false converse is retained as the useful boundary. |
| Craven §1.4, conjugacy and structure theorems for Frobenius complements | deferred | These are finite-group structure results owned by group theory; RG-7 needs only the kernel/normal-complement theorem. |
| Flavell §3, Odd Order Theorem statement and its simple-group corollaries | out-of-scope | The theorem is stated without proof there, belongs to finite-group structure, and is not used in the transfer proof of Frobenius's criterion. |
| Flavell §5, Alperin's Fusion Theorem | deferred | The notes expressly do not prove it; RG-7 uses Flavell's elementary local-fusion sequence instead, while full fusion systems remain a group-theory successor. |
| Kurzweil–Stellmacher §7.1, Grün's theorem and weak closure | inline | These are absorbed as the alternative proof route for `lem-fusion-control-gives-a-nontrivial-p-quotient-of-the-p-residual`; the planned RG proof follows Flavell's transfer route and does not need duplicate theorem items. |
| Chan §4, Garnir straightening relations as an alternative standard-basis proof | inline | The straightening move is absorbed into `thm-standard-polytabloid-basis`; a second presentation of the same basis would be duplication. |
| Chan/Craven, modular Specht filtrations and decomposition numbers | deferred | Modular symmetric-group theory needs the block/decomposition program beyond the characteristic-zero Specht classification and is not a prerequisite here. |
| Craven §2, projective-geometric applications of symmetric-group modules | out-of-scope | Those geometric incidence calculations do not support branching, Young's rule or RSK. |
| Etingof §§4.18–4.21, general polynomial $GL(V)$ Schur functors | deferred | RG-10 retains only the Schur–Weyl interface.  Polynomial functor/highest-weight theory belongs to the Lie/algebraic representation tracks. |
| Chan §8, longest-increasing-subsequence consequences of RSK | out-of-scope | Probabilistic/asymptotic subsequence theory is not used by the representation-theoretic dimension and involution consequences. |
| Dudas–Michel §§8–10, arbitrary finite reductive groups with a split BN-pair | inline | RG-12 specializes the machinery to $GL_n(\mathbb F_q)$, the group commissioned; the general notation is absorbed in its proofs. |
| Dudas–Michel after §11.3, Deligne–Lusztig induction and varieties | deferred | Étale cohomology and algebraic varieties are whole missing prerequisites; the dispatch asks only at least through principal series. |
| Taylor, cuspidal/unipotent character classification beyond Harish–Chandra series | deferred | Classification beyond principal series requires Deligne–Lusztig theory and is not used by RG-13. |
| Oi §2.3, nonsplit/cuspidal and discrete-series characters of finite $GL_2$ | out-of-scope | The rank-two notes were read to test arbitrary torus characters; their full cuspidal classification does not generalize the commissioned general-$n$ principal-series page. |
| Losev Lecture 8, representation theory beyond the spherical Hecke block | out-of-scope | The accessible range proves Tits deformation for the spherical principal series; further classification would exceed the available general-$n$ treatment. |
| Martínez Lecture 2 §2.1, Brauer graph and block orthogonality | deferred | GT-19 owns the block partition/decomposition-matrix material, and ordinary/generalized orthogonality may not be re-minted here. |
| Martínez Lecture 3, numerical height and Min–Max refinements | out-of-scope | Height theory is not required for defect groups, Brauer pairs, Green correspondence or the two main theorems; the numerical-defect convention alone is retained. |
| Jacobsen after Definition 2.27, fusion systems and saturation | deferred | Fusion systems are a successor group-theory subject and not needed to define/order Brauer pairs. |
| Boltje–Kessar–Yılmaz §§3–6, Galois/fusion theory over arbitrary fields | deferred | RG inherits the split modular system from GT-18/GT-19; arbitrary-field descent is a different coefficient-field program. |
| Saunders §4, relative projectivity, Higman's criterion, vertex/source existence | deferred | Exact GT-18 ids are listed in §6; these results are inherited and expressly forbidden to re-mint. |
| Saunders Theorem 4.39, summand detection | out-of-scope | The note states the result but sends the proof to Alperin; the two complete open Green proofs read do not need it, so it is not sold as proof-backed decomposition. |
| Saunders §5, block partition and decomposition matrices | deferred | Exact GT-19 items own these definitions and block diagonalization. |
| Saunders Theorem 5.21 and Craven §1.4, Brauer's Third Main Theorem | out-of-scope | The dispatch names First and Second; Third is not consumed by any requested result. |
| the common-source corollary sometimes attached to Green correspondence | deferred | Saunders guarantees the same vertex but the ranges read did not state/prove common sources as a named result; no literature-derived item was minted on recollection alone. |
| Craven later thesis chapters, Brauer trees and finite representation type | deferred | These are successor block theories, not prerequisites for First/Second. |
| generalized decomposition-number orthogonality | deferred | It risks re-minting the character-orthogonality seam and is not needed for Second's block-support theorem. |
| a complete small generalized-decomposition-number table | deferred | Neither Craven nor Meierfrankenfeld supplies one in the range read.  The scaffold records the B-example gap rather than fabricating a table. |
| Kowalski Chapter 3, nonunitary Banach-space representations | out-of-scope | The infinite commission is explicitly unitary after the topological definitions; nonisometric Banach representations need separate operator theory. |
| Colojoară–Gheondea Chapter 2, the second Haar-existence proof | inline | It is independent confirmation of `thm-existence-of-a-left-haar-integral`; publishing two existence theorems with the same conclusion would be padding. |
| Colojoară–Gheondea Chapter 3, compact-group results specialized to metrizable groups | inline | RG-21/RG-22 use the more general compact-Hausdorff statements and cite this treatment as an independent proof check. |
| Vogan, invariant-measure criterion $\Delta_G|_H=\Delta_H$ | inline | It is the calculation inside `cex-g-mod-h-need-not-have-an-invariant-measure` and `thm-existence-of-rho-functions-and-quasi-invariant-measures-on-g-mod-h`, not a later dependency. |
| Bekka–de la Harpe–Valette Appendix A, direct sums, tensor products and contragredients | inline | These elementary operations are used inside coefficient proofs but do not carry a long proof or later dependency of their own. |
| Bekka–de la Harpe–Valette Appendix C, conditionally negative type and Schoenberg correspondence | deferred | This leads to affine isometric actions/Haagerup property, a substantial successor topic not requested here. |
| Bekka–de la Harpe–Valette Appendix F, tensor-product absorption refinements | out-of-scope | Fell absorption beyond the kernel/weak-containment criteria is not consumed by amenability, property (T), or the $SL_2$ pages. |
| Bekka–de la Harpe–Valette Appendix G, Kesten spectral-radius criterion | out-of-scope | It belongs with random walks and Markov operators; RG-27 already has the requested invariant-mean/Reiter/Følner equivalences. |
| Bekka–de la Harpe–Valette Appendix G, co-amenable subgroups and amenable actions | deferred | These require a separate action/groupoid treatment and are not needed for group amenability itself. |
| Bekka–de la Harpe Chapters 6–7, quasi-dual and quasi-equivalence refinements | inline | The notions are absorbed into `thm-essential-uniqueness-of-central-decomposition`; a separate quasi-dual page would not advance the requested type-I boundary. |
| Bekka–de la Harpe Chapter 7, character theory of factor representations | deferred | Infinite characters/traces and finite von Neumann algebras form a successor theory beyond direct-integral classification. |
| Bekka–de la Harpe Chapter 8, full descriptive-set-theoretic Glimm dichotomy | out-of-scope | RG-26 retains the exact smooth/type-I consequence needed to explain decomposition failure; the descriptive-set-theory proof needs a new prerequisite track. |
| Bruhat Chapter 12, abelian Plancherel formula | deferred | FR owns LCA Plancherel.  RG-26 uses Bruhat's continuous-sum/factorial architecture but does not duplicate the abelian transform. |
| Mackey 1949, decomposition of nontransitive systems over orbit space | deferred | The commissioned theorem is transitive imprimitivity; arbitrary orbit decompositions require the RG-26 measurable-field machinery and regularity of orbit spaces. |
| Paterson Chapter 4, amenable semigroups and groupoids | out-of-scope | The object is no longer a locally compact group; no later RG page consumes these variants. |
| Paterson, fixed-point formulations of amenability | inline | The separation/fixed-point argument is absorbed into `lem-an-invariant-mean-produces-a-reiter-net`; a separate fixed-point theory is not needed. |
| Breuillard Lecture I, relative property (T) | deferred | Relative (T), lattices and semidirect-product criteria require their own subgroup/ergodic development; RG-28 establishes the group property requested. |
| Bekka–de la Harpe–Valette §1.4, lattice inheritance and cohomological criteria | deferred | These require invariant measures on quotients and first cohomology of unitary representations beyond the current spectral-gap page. |
| Lang Chapters I–III, finite-dimensional nonunitary $SL_2(\mathbb R)$ representations | deferred | Their Lie-algebra classification is owned by RL; RG-29 uses only the Iwasawa/induced models. |
| Lang Chapter IX, explicit Plancherel density derivation | inline | Its conclusion and formal degrees are part of `thm-plancherel-support-for-sl2-r`; reproducing every transform calculation would turn the concrete case study into a general Plancherel track. |
| Lang Chapter X, distribution characters of the discrete series | deferred | Harish–Chandra character distributions require distribution theory and are explicitly outside the one-group unitary classification requested. |
| Kerr's note that complementary series are not treated there | out-of-scope | It is not promoted into evidence; Lang and Kowalski are the two proof treatments for complementary unitarity. |
| compact-Lie maximal tori and Weyl integration | deferred | The differential-geometry page owns them; general compact Peter–Weyl on RG-22 uses neither. |
| Pontryagin duality, Bochner's theorem and LCA Plancherel | deferred | FR owns these abelian results.  RG cites them only when specializing noncommutative constructions. |
| abstract $\mathfrak{sl}_2$ highest/lowest-weight classification | deferred | RL owns the Lie-algebra statements; RG-29/RG-30 consume them through `RL-n` and prove the group-globalization facts. |

## 14. Verified measurements from this finished file

These figures were re-derived from the file after the crosswalk was complete;
no estimate from the dispatch was reused.

| measurement | verified result |
|---|---|
| pre-scaffold RG item count | **0**: this file is new and no other research/brief file contains an `RG-n` pair heading |
| inherited entry-page item count | **0** across the four abstract-algebra and three group-theory page ids listed in §2; all seven live `plan-spec.json` `items` arrays were rechecked and remain empty/planned |
| proposed post-scaffold item ids | **544 distinct ids**: 419 on A pages and 125 on B pages; these are proposals, not authored library items |
| finite/infinite split | RG-1–RG-17: **316** items; RG-18–RG-30: **228** items, so the locally compact half is 41.9% of the item inventory and 13 of 30 pairs |
| A/B pair and page count | **30 pairs / 60 proposed pages**, exactly RG-1 through RG-30 with one B companion each |
| included heading dispositions | **153**, the 153 explicit `included` rows in §12; a synonymous heading from an independent proof treatment is `inline` into the same listed proof and is not double-counted |
| decomposition ratio | **544 / 153 = 3.56×**.  The denominator is the auditable included-heading disposition count, not the number of sources, sections read, or excluded headings |
| largest A page | **RG-7 with 26 items**; the next is RG-14 with 24.  No A page approaches 60, so no split was required |
| provenance coverage | **544/544** statements are `literature-derived`; proofs are 430 `literature-derived`, 113 `not-applicable`, and one non-load-bearing `not-supplied` higher-rank example theorem; no other value occurs |
| crosswalk integrity | **544/544** proposed ids appear exactly once in §12; there are no missing, extra or duplicated item ids |
| id/page integrity | **30 distinct A ids, 30 distinct B ids, 544 distinct item ids**, and no `RG` pair prefix occurs elsewhere under `research/` or `briefs/` |
| source breadth | **37 full-text/publisher/archive URLs on 32 distinct hosts**; every pair has two full treatments, with the scope qualification on arbitrary-character general-$n$ principal series recorded at RG-13 |

The measured 3.56× ratio comes from decomposing long proofs—most visibly
Brauer induction, Specht branching, Tits deformation, Brauer pairs, Haar
existence, GNS, imprimitivity and direct-integral uniqueness—not from adding
unsourced corollaries.  §13 records the tempting material deliberately left
unminted.  No item was dropped to meet the page-size ceiling, and no split was
made.
