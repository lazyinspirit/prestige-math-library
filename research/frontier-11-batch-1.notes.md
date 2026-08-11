# Frontier 11, batch 1 — Beta scaffold notes

## Batch result

This scaffold contains 53 items: 20 on `field-extensions-and-the-complex-numbers`, 7 on its B page, 18 on `conjugacy-and-simplicity-in-the-symmetric-groups`, and 8 on its B page. The two A pages are below the run-specific 60-item ceiling, so **no page split is proposed**.

The canonical harvest records 80 source or canonical-result headings. Of these, 60 are `included`, 11 are `inline`, 2 are `already-published`, 1 is `deferred`, and 6 are `out-of-scope`. Thus 73 headings are retained in this batch or by an opened published dependency and 7 are declined. Counts are source-heading dispositions, so independently sourced headings that support the same item are deliberately counted separately.

The proof-contract file begins contracts for all 48 proof-bearing scaffold items. It records the intended citation graph, proof route, boundary obligations, and selected finite smoke tests. Exact quotation matching, numbered proof-step partitioning, and synchronization to the authored item text remain step-5 work, as required by the proof-contract workflow; the five definitions correctly have no contract.

## Proposed A-page summaries

### `field-extensions-and-the-complex-numbers`

A field extension enlarges a field while preserving its arithmetic. This page distinguishes algebraic and transcendental generators, describes a simple transcendental extension by rational expressions and its generator-preserving isomorphisms, and identifies the composite of two subfields. For algebraic generators it develops evaluation kernels and minimal polynomials, constructs roots in irreducible quotients, proves the root-adjunction universal property and the uniqueness of stem fields, and obtains power-basis coordinates and degree.

The construction is then carried out for $x^2+1$ over the reals. It defines $\mathbb C=\mathbb R[x]/(x^2+1)$, verifies the field operations and inverse formula, and proves the unique form $a+bi$. Conjugation, real and imaginary parts, modulus, its algebraic and triangle-inequality laws, the real automorphisms of $\mathbb C$, and an explicit Cartesian square-root formula follow without using polar form or the fundamental theorem of algebra.

### `conjugacy-and-simplicity-in-the-symmetric-groups`

Conjugation in a symmetric group is relabelling. From that calculation, this page classifies the conjugacy classes of $S_n$ by cycle type, derives the centralizer formula and the corresponding class equation, and proves the triviality of the center for $n\ge3$. It also refines the published transposition generation theorem to adjacent transpositions and to the standard generating pair consisting of an $n$-cycle and a neighbouring transposition.

Inside $A_n$, an $S_n$-class either stays whole or splits into two equal classes; the split occurs exactly for distinct odd cycle lengths, with fixed points counted as $1$-cycles. The page proves separately that $3$-cycles generate $A_n$, that a normal subgroup containing one $3$-cycle is all of $A_n$, and that every nontrivial normal subgroup contains one. These ingredients yield simplicity for $n\ge5$, the normal-subgroup classification of $S_n$, and the derived-subgroup formulas.

## Step-4 plan amendments required

1. Add `roots-and-rational-powers` to the `requires` list of order 54. The modulus and Cartesian complex-square-root proofs use the published existence and uniqueness of nonnegative real square roots and the relevant order lemmas. Keeping this dependency explicit is preferable to hiding those facts as arithmetic.
2. Relocate the following four planned global IDs from order 189, `the-complex-exponential-and-eulers-formula`, to order 54: `def-complex-numbers-and-arithmetic`, `thm-complex-numbers-form-a-field`, `def-complex-conjugate-real-imaginary-part-and-modulus`, and `lem-complex-conjugation-and-modulus-laws`. Order 189 should require order 54 and begin with polar/exponential material rather than define $\mathbb C$ a second time. The quotient construction here and the unique $a+bi$ representation supply the later bridge to the $\mathbb R^2$ model.

No split amendment is needed. The exact proposed cuts are therefore the existing A/B boundaries: order 54 has 20 A items and order 64 has 18 A items.

## Step-3 Alpha findings applied

- **T1 — transcendental rational-expression structure.** Added `thm-simple-transcendental-extension-is-rational-expressions-in-the-generator`. Its direct route is `def-field-extension-generated-subfields-and-simple-extension` + `def-algebraic-and-transcendental-elements` + the zero-kernel alternative of `thm-evaluation-kernel-and-minimal-polynomial`. The proof forms the displayed rational-expression subset inside the ambient field, verifies the field operations including the zero-numerator boundary before inversion, and invokes generated-subfield minimality. It never constructs or names a field of fractions.
- **T2 — uniqueness of simple transcendental extensions.** Added `thm-simple-transcendental-extensions-are-uniquely-f-isomorphic`. Its direct route is the transcendence definition plus T1. Cross-multiplication and injectivity of evaluation prove the rational-expression map well-defined; the reversed generator map proves bijectivity, and T1 proves uniqueness.
- **T3 — composite of subfields.** Added `cor-composite-of-two-subfields`. Its direct route is `def-field-extension-generated-subfields-and-simple-extension`: $E(E')$, $E'(E)$, and the subfield generated by $E\cup E'$ are intersections of the same class of subfields of the ambient field. No item on `splitting-fields` is cited or needed.
- **T4 — uniqueness of stem fields.** Added `cor-stem-fields-are-uniquely-f-isomorphic`. Its direct route is `thm-evaluation-kernel-and-minimal-polynomial` + `thm-universal-property-of-adjoining-an-irreducible-root` + `thm-simple-algebraic-extension-quotient-power-basis-and-degree`: divisibility identifies $p$ as both minimal polynomials, and the two generator-preserving maps are inverse by the universal property's uniqueness clause.

The published foundations reached by those local routes were reopened on disk: `def-field`, `def-polynomial-evaluation-and-root`, `thm-universal-property-of-a-polynomial-ring`, `cor-polynomial-ring-over-a-field-is-a-pid`, `thm-polynomial-quotient-is-a-field-iff-irreducible`, `thm-polynomial-division-algorithm-over-a-field`, `thm-quotient-ring-universal-property`, and `thm-first-isomorphism-theorem-rings`. Each is `status: published`; its displayed Definition or Statement supplies the exact clause used by the pre-existing local result. None has `provenance.statement: ai-generated`.

Source verification was repeated with working web access on 2026-08-12. Judson Theorem 21.9 states the transcendental simple-extension classification and proves the injective-evaluation route. Milne Chapter 1, pp. 16–19 explicitly gives rational expressions in a transcendental generator, the composite identity $F(F')=F\cdot F'=F'(F)$, and the unique distinguished-root-preserving isomorphism between stem fields. These are the same two sources already recorded below; no new external source or unsupported bridge was introduced.

Coverage now records Judson Theorem 21.9 as `included` at T2, Milne Example 1.24 as `included` at T1, and Milne's composite paragraph as `included` at T3. The already-`included` unique-stem-field row is retargeted from the universal-property theorem to T4 so that its item actually states the harvested result. The field-of-fractions construction itself remains outside this run under Alpha §0 and is not made load-bearing. Judson Example 21.7's claims about $\pi$ and $e$ remain a non-load-bearing reader-facing illustration on the algebraic/transcendental definition; Step 5 must not present them as proved locally.

## Source ledger and harvest rationale

### Field extensions and the complex numbers

- Thomas W. Judson, *Abstract Algebra: Theory and Applications*, Chapter 21 §21.1, through the degree paragraph after Example 21.14: <https://judsonbooks.org/aata-files/aata-html/fields-section-extension-fields.html>. This textbook treatment supplied the root-extension existence theorem, algebraic/transcendental distinction, the classification of simple transcendental extensions, minimal polynomials, quotient description, power-basis theorem, degree, and the $\mathbb C$ quotient example.
- J. S. Milne, *Fields and Galois Theory*, Chapter 1, pp. 16–19, from “The subfield generated by a subset” through Example 1.28: <https://www.jmilne.org/math/CourseNotes/FT.pdf>. This independent full lecture-note treatment supplied generated subfields, rational expressions in a transcendental generator, composites of subfields, irreducible quotients, reduced representatives, stem fields and their uniqueness, evaluation kernels, and minimal polynomials.
- R. K. Srivastava, *MA 547 Complex Analysis Lecture Notes*, §1.1, pp. 3–5: <https://fac.iitg.ac.in/rksri/MA547%20Complex%20Analysis%20lecture%20notes%202025.pdf>. This supplied the independent complex-field arithmetic, conjugation, modulus identities, and triangle inequality.
- John McCuan, *Notes on Complex Analysis*, “The complex square root (computation),” pp. 20–21: <https://mccuan.math.gatech.edu/courses/6321-spring2018/notes/spring18.pdf>. This supplied the Cartesian square-root calculation and its negative-real exceptional case.
- The quotient-ring, polynomial-division, PID, irreducibility, and real-order facts were also checked against the exact published items listed in the dependency ledger below. The universal properties in the scaffold synthesize the polynomial-ring and quotient-ring universal properties with Milne's stem-field uniqueness result.

The three remaining field-page declines are specific rather than count-driven. Milne Examples 1.27 and 1.28 are `out-of-scope` because their repeated cubic arithmetic adds no new structural result after the retained general theorems and B-page computations. Srivastava's polar representation is `deferred` to order 189, whose trigonometric and exponential dependencies can support it. The simple-transcendental theorem and Milne's $\mathbb Q(\pi)$ example are now retained without identifying the result with a separately constructed field $F(x)$, and the composite of subfields is retained as an immediate generated-subfield corollary. The absent field-of-fractions construction remains intentionally unbuilt under Alpha's cross-cutting §0 ruling and no retained item depends on that term.

### Conjugacy and simplicity

- J. S. Milne, *Group Theory*, §4, Corollary 4.28 through Lemma 4.36, pp. 67–70: <https://www.jmilne.org/math/CourseNotes/GT.pdf>. This full lecture-note treatment supplied $3$-cycle generation, conjugation by relabelling, the $S_n$ conjugacy classification, the $S_4$ class table, the $A_4$ exception, and both load-bearing simplicity lemmas.
- Thomas W. Judson, *Abstract Algebra: Theory and Applications*, complete Chapter 10 §10.2: <https://judsonbooks.org/aata-files/aata-html/normal-section-simplicity-of-an.html>. This independent textbook treatment supplied the definition of simplicity, $3$-cycle generation, both normal-subgroup lemmas, and simplicity of $A_n$.
- Keith Conrad, *Conjugation in a Group*, §5, Theorems 5.1–5.13: <https://kconrad.math.uconn.edu/blurbs/grouptheory/conjclass.pdf>. This supplied a second detailed treatment of relabelling, equal-cycle-type conjugacy, the fixed-point convention, small alternating-group counterexamples, and the $A_n$ splitting criterion.
- David A. Craven, *Groups, Geometries and Representation Theory*, Chapter 1 §1.1, p. 1: <https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/groupsgeomreptheory2013.pdf>. This supplied the exact centralizer product formula and its cycle-swap explanation.
- Matthew Macauley, *Lecture 2.3: Symmetric and Alternating Groups*, slide 10: <https://www.math.clemson.edu/~macaule/classes/m20_math4120/slides/math4120_lecture-2-03_h.pdf>. This independently supplied adjacent-transposition generation. The $n$-cycle generating-pair theorem is proved from that retained theorem by conjugating $(1\,2)$ around the cycle.
- Keith Conrad, *Simplicity of $A_n$*, especially §§2 and 6: <https://kconrad.math.uconn.edu/blurbs/grouptheory/Ansimple.pdf>. This was consulted as an additional proof-route check for normal subgroups of $S_n$, the $A_4$ boundary, and simplicity; the canonical checklist already has two complete primary treatments, so this corroborating note is recorded here rather than used to pad the harvest.

The four conjugacy-page declines are the Judson historical note on finite simple groups; Conrad's Enigma/partition-number historical remark; Conrad Corollary 5.9 about embedding arbitrary equal-order finite-group elements in a larger symmetric group; and its numerical $\mathbb Z/10\mathbb Z$ example. The last two belong with Cayley embeddings, not the internal conjugacy theory of $S_n$ or $A_n$. None is prerequisite machinery for a retained result.

### Licensing and use

Judson's AATA is distributed under the GNU Free Documentation License. Milne's current course-note PDFs carry the author's stated noncommercial Creative Commons terms. The Conrad, Craven, Macauley, Srivastava, and McCuan materials are university-hosted author/course notes; no broader reuse license was assumed. The scaffold copies no source prose or diagrams: statements, notation decisions, and proof routes are paraphrased, with exact section ranges and URLs retained for later citation synchronization.

## Convention decisions and disagreements

- Permutation products use the repository convention that the right-hand factor acts first, matching `def-symmetric-group`. Craven explicitly uses left-to-right multiplication, so his centralizer formula and structural explanation were used, but none of his raw word calculations is imported unchanged.
- The published cycle type is the multiplicity tuple $(c_1,\ldots,c_n)$. Milne, Judson, and Conrad often use a partition/list, while Craven writes $1^{c_1}\cdots n^{c_n}$. The scaffold translates all formulas to the published tuple and requires $\sum k c_k=n$.
- Fixed points count as $1$-cycles in the $A_n$ class-splitting criterion. Omitting them makes the criterion false; Conrad's statement and the published cycle-type definition agree on their inclusion.
- “Simple” means a nontrivial group whose only normal subgroups are the identity subgroup and the whole group. This removes any ambiguity in the phrase “no nontrivial normal subgroups” and keeps $A_4$ as the explicit B-page boundary.
- Field extensions are literal inclusions $F\subseteq E$, and homomorphisms in an adjoining-root universal property fix that displayed copy of $F$. This matches both field sources and the published `def-field` conventions.
- For algebraic $a$, the quotient proof shows $F[a]=F(a)$. For transcendental $a$ these differ: $F[a]$ is polynomial and $F(a)$ rational. The scaffold therefore does not use the two notations interchangeably.
- The older prose plan said degree would appear later, but the run-specific dispatch explicitly requires the degree and power basis here. The scaffold resolves this by defining $[F(a):F]=n$ through the proved unique coordinates $1,a,\ldots,a^{n-1}$, without importing the later general dimension theory.
- The older order-189 prose used an $\mathbb R^2$ construction of $\mathbb C$. This batch makes the requested quotient construction canonical; the theorem giving unique $a+bi$ coordinates is the explicit isomorphism-level bridge to coordinate-pair arithmetic later.
- Conjugation is written $g\sigma g^{-1}$ throughout. The relabelling formula is checked against that orientation, not recalled from a source using an unstated opposite convention.
- “An $n$-cycle and a transposition generate $S_n$” is false without a relative-position hypothesis. The A page proves the standard pair $(1\,2\,\ldots\,n)$ and $(1\,2)$; the B page refutes the unrestricted claim.
- The complex square-root proof is Cartesian and uses only real nonnegative square roots. No polar representation and no fundamental theorem of algebra is assumed or forward-cited.

## Published dependency provenance and confidence route

Every item below was opened on disk and its exact statement, hypotheses, conventions, and component provenance were inspected. No published dependency was found to be unambiguously false.

**Route S — exact statement independently matched to the harvested textbook/full-note sources and to the published proof where present:**

- `def-field`; `def-polynomial-ring-over-a-commutative-ring`; `def-polynomial-evaluation-and-root`; `thm-universal-property-of-a-polynomial-ring`; `thm-polynomial-division-algorithm-over-a-field`; `cor-polynomial-ring-over-a-field-is-a-pid`; `thm-polynomial-quotient-is-a-field-iff-irreducible`; `thm-quotient-ring-universal-property`; `thm-first-isomorphism-theorem-rings`; `thm-quadratic-and-cubic-irreducibility-test`; `lem-polynomial-factorisation-into-irreducibles`; `thm-eisenstein-irreducibility-criterion`.
- `def-symmetric-group`; `def-permutation-support-disjoint-cycles-and-cycle-type`; `thm-disjoint-cycle-decomposition`; `thm-transpositions-generate-the-symmetric-group`; `thm-sign-is-a-homomorphism`; `cor-sign-from-disjoint-cycle-structure`; `def-alternating-group`; `cor-alternating-group-is-normal-and-has-half-the-elements`; `def-conjugacy-class-and-centralizer`; `thm-conjugacy-class-cardinality`; `thm-class-equation`; `def-normal-subgroup`; `def-generated-subgroup`; `def-center-of-a-group`.

This route is used for the load-bearing polynomial quotient/evaluation chain and the symmetric/alternating-group chain. Even where a published component is `legacy-unclassified` or AI-altered, the exact claim was confirmed against Judson, Milne, Conrad, Craven, or Macauley before being admitted as a dependency.

**Route K — exact statement and proof opened, then independently confirmed from standard field/order, quotient, arithmetic, or elementary group theory with its repository convention:**

- `thm-reals-ordered-field`; `thm-of-square-roots`; `cor-cauchy-reals-lub-complete`; `lem-of-square-monotone`; `lem-of-square-positive`; `thm-rat-field`; `prop-integers-modulo-n-as-a-quotient-ring`; `thm-z-mod-p-is-a-field`.
- `def-commutator-and-commutator-subgroup`; `lem-commutator-subgroup-is-normal`; `thm-quotient-abelian-iff-contains-commutator-subgroup`; `def-monoid-finite-product`; `def-factorial-and-falling-factorial`; `thm-number-of-bijections-of-a-finite-set`.

For Route K, I explicitly checked the load-bearing edge rather than relying on a provenance label: positivity and square-root uniqueness support modulus and the Cartesian root formula; quotient and finite-field facts support the examples; the commutator criterion supports the final derived-subgroup corollary; finite products, factorials, and bijection counts support the centralizer and class-size formulas.

## Per-item component provenance rationales

`not-applicable` proof provenance is used only for definitions. No `ai-generated` Statement or Construction is a scaffold item or dependency target.

| Item | Statement provenance | Proof provenance | Rationale |
|---|---|---|---|
| `def-field-extension-generated-subfields-and-simple-extension` | `literature-derived` | `not-applicable` | Judson §21.1 and Milne Chapter 1 give the extension, generated-subfield, and simple-extension conventions; the scaffold makes the $F[S]$/$F(S)$ distinction explicit. |
| `cor-composite-of-two-subfields` | `literature-derived` | `ai-altered` | Milne Chapter 1 states the composite identity; the local proof is recast as a direct comparison of the three generated-subfield minimality clauses. |
| `def-algebraic-and-transcendental-elements` | `literature-derived` | `not-applicable` | Both field sources state the annihilating-polynomial definition and its negation. |
| `thm-evaluation-kernel-and-minimal-polynomial` | `literature-derived` | `literature-derived` | Judson Theorem 21.10 and Milne's kernel characterization independently supply the claim and standard PID/minimal-degree proof. |
| `thm-simple-transcendental-extension-is-rational-expressions-in-the-generator` | `literature-derived` | `ai-altered` | Judson Theorem 21.9 and Milne Example 1.24 supply the structure statement; the proof is rewritten as an internal subfield-minimality argument that does not construct a field of fractions. |
| `thm-simple-transcendental-extensions-are-uniquely-f-isomorphic` | `ai-altered` | `ai-altered` | This is Judson Theorem 21.9's generator-preserving classification with the unavailable object $F(x)$ replaced by a second simple transcendental extension; the rational-expression map and its inverse are proved locally. |
| `thm-irreducible-quotient-adjoins-a-root` | `literature-derived` | `ai-altered` | Milne Result 1.25 supplies the theorem; the proof is adapted to cite the library's quotient-field and division results and to expose constant/linear boundaries. |
| `cor-every-nonconstant-polynomial-has-a-root-in-an-extension` | `literature-derived` | `literature-derived` | Judson Theorem 21.5 gives both the statement and irreducible-factor quotient route. |
| `thm-universal-property-of-adjoining-an-irreducible-root` | `ai-altered` | `ai-altered` | The exact universal-property formulation synthesizes Milne's unique stem-field isomorphism with the published polynomial and quotient universal properties. |
| `thm-simple-algebraic-extension-quotient-power-basis-and-degree` | `literature-derived` | `literature-derived` | Judson Proposition 21.12/Theorem 21.13 and Milne's reduced representatives supply the quotient, basis, and degree argument. |
| `cor-stem-fields-are-uniquely-f-isomorphic` | `literature-derived` | `ai-altered` | Milne's “Stem fields” paragraph states the exact distinguished-root-preserving uniqueness result; the proof is organized through the scaffold's root-adjunction universal property in both directions. |
| `lem-x-squared-plus-one-is-irreducible-over-the-reals` | `literature-derived` | `ai-altered` | The conclusion underlies both sources' complex quotient; the proof is recast through the published real-order and quadratic irreducibility results. |
| `def-complex-numbers-and-arithmetic` | `literature-derived` | `not-applicable` | Judson Example 21.14 and Milne Example 1.26 define the same quotient model and distinguished class $i$. |
| `thm-complex-numbers-form-a-field` | `literature-derived` | `ai-altered` | Milne and Srivastava supply quotient/coordinate arithmetic; the proof explicitly combines inherited quotient axioms, positivity, and the inverse calculation. |
| `cor-complex-numbers-are-a-quadratic-real-extension` | `ai-altered` | `ai-altered` | This is the direct specialization of the retained power-basis theorem to the already proved minimal polynomial $x^2+1$. |
| `cor-universal-property-of-the-complex-numbers` | `ai-altered` | `ai-altered` | This is the exact specialization of the preceding root-adjunction universal property and is phrased to fix the chosen real embedding. |
| `def-complex-conjugate-real-imaginary-part-and-modulus` | `literature-derived` | `not-applicable` | Srivastava §1.1 supplies these standard coordinate definitions; the modulus uses the published nonnegative real square root. |
| `lem-complex-conjugation-and-modulus-laws` | `literature-derived` | `ai-altered` | Srivastava lists the identities and triangle inequality; the proof is rebuilt algebraically from coordinates and the published order lemmas. |
| `thm-real-automorphisms-of-the-complex-numbers` | `ai-altered` | `ai-altered` | The statement is a standard consequence selected to expose the quotient's rigidity; the proof uses only the two roots of $x^2+1$, unique coordinates, and the established conjugation map. |
| `thm-every-complex-number-has-a-square-root` | `literature-derived` | `ai-altered` | McCuan gives the Cartesian calculation; the scaffold reorganizes it into total cases and cites only earlier real-square-root facts. |
| `ex-rational-square-root-two-as-a-simple-extension` | `literature-derived` | `ai-altered` | Judson uses the same basic extension; the B-page computation specializes the quotient/power-basis machinery and proves irreducibility over $\mathbb Q$. |
| `ex-the-four-element-field-from-an-irreducible-quadratic` | `literature-derived` | `literature-derived` | Judson Example 21.2 and its operation tables supply the exact finite-field example and calculation. |
| `cex-reducible-polynomial-quotient-is-not-a-field` | `ai-altered` | `ai-altered` | This canonical converse boundary is tailored to the published quotient theorem and verified by the displayed nonzero zero-divisor factors. |
| `ex-minimal-polynomial-of-nested-radical-two-plus-root-three` | `literature-derived` | `ai-altered` | Judson Examples 21.8/21.11 supply the nested radical and polynomial; irreducibility/minimality is expanded using the library's rational polynomial tools. |
| `ex-square-roots-of-the-imaginary-unit` | `ai-altered` | `ai-altered` | This specializes the Cartesian square-root theorem and verifies both displayed roots by squaring. |
| `fs-complex-numbers-form-an-ordered-field` | `literature-derived` | `ai-altered` | The non-orderability is a canonical complex-field boundary; the refutation is the standard $i^2=-1$ contradiction in an ordered field. |
| `cex-an-annihilating-polynomial-need-not-be-minimal` | `ai-altered` | `ai-altered` | The example is constructed from $x^4-4=(x^2-2)(x^2+2)$ to separate annihilation from the divisibility-minimal generator. |
| `lem-conjugating-a-cycle-relabels-its-entries` | `literature-derived` | `literature-derived` | Milne Example 4.29 and Conrad Theorem 5.1 give the exact formula and pointwise proof. |
| `thm-symmetric-permutations-are-conjugate-iff-same-cycle-type` | `literature-derived` | `literature-derived` | Milne Proposition 4.30, Conrad Theorem 5.7, and Craven Proposition 1.1 independently give both directions. |
| `cor-symmetric-conjugacy-classes-are-indexed-by-cycle-types` | `literature-derived` | `ai-altered` | The partition-indexing conclusion is explicit in the sources; the statement is translated to the repository's multiplicity tuple. |
| `thm-centralizer-cardinality-from-cycle-type` | `literature-derived` | `ai-altered` | Craven Theorem 1.2 supplies the product; the proof will separately count rotations and permutations among equal-length cycles. |
| `cor-symmetric-group-class-equation-by-cycle-type` | `ai-altered` | `ai-altered` | This exact displayed sum combines the centralizer product with the opened conjugacy-class cardinality and class-equation theorems. |
| `cor-center-of-symmetric-group-is-trivial` | `literature-derived` | `ai-altered` | The standard result follows directly from the retained class classification; the proof isolates $n=3$ before the general support argument. |
| `thm-adjacent-transpositions-generate-the-symmetric-group` | `literature-derived` | `literature-derived` | Macauley states it; the proof expands arbitrary transpositions into adjacent ones and uses the published transposition-generation theorem. |
| `thm-an-n-cycle-and-a-neighbour-transposition-generate-the-symmetric-group` | `literature-derived` | `ai-altered` | The standard generating pair is obtained by conjugating $(1\,2)$ to all cyclic neighbours and invoking adjacent generation, with $n=2$ checked separately. |
| `thm-alternating-group-is-generated-by-three-cycles` | `literature-derived` | `literature-derived` | Milne Corollary 4.28 and Judson Lemma 10.8 supply the exact load-bearing lemma and the paired-transposition rewrite. |
| `lem-conjugacy-class-splitting-over-an-index-two-normal-subgroup` | `literature-derived` | `ai-altered` | Conrad Theorem 5.13 supplies the index-two dichotomy; the scaffold extracts its general centralizer criterion as a reusable lemma. |
| `thm-alternating-conjugacy-class-splitting-criterion` | `literature-derived` | `literature-derived` | Conrad Theorem 5.13 supplies the exact distinct-odd-length condition and includes fixed points. |
| `cor-three-cycles-form-one-conjugacy-class-in-a-n` | `ai-altered` | `ai-altered` | This follows by applying the split criterion to type $(3,1^{n-3})$; the $n\ge5$ hypothesis prevents the $A_3/A_4$ exceptions documented on B. |
| `def-simple-group` | `literature-derived` | `not-applicable` | Judson §10.2 supplies the definition; the scaffold spells out nontriviality and both allowed normal subgroups. |
| `lem-normal-subgroup-containing-a-three-cycle-is-a-n` | `literature-derived` | `literature-derived` | Milne Lemma 4.35 and Judson Lemma 10.9 give the statement; normality plus the one-class and generation lemmas give the proof. |
| `lem-nontrivial-normal-subgroup-of-a-n-contains-a-three-cycle` | `literature-derived` | `literature-derived` | Milne Lemma 4.36 and Judson Lemma 10.10 independently give the statement and commutator/case proof. |
| `thm-alternating-group-is-simple-for-n-at-least-five` | `literature-derived` | `literature-derived` | Milne Theorem 4.33 and Judson Theorem 10.11 supply the result, whose proof explicitly composes the two retained load-bearing lemmas. |
| `cor-only-proper-nontrivial-normal-subgroup-of-s-n` | `literature-derived` | `ai-altered` | Conrad's simplicity note corroborates the classification; the proof uses sign, the intersection with $A_n$, simplicity of $A_n$, and the established trivial center of $S_n$. |
| `cor-derived-subgroups-of-symmetric-and-alternating-groups` | `literature-derived` | `ai-altered` | The standard formulas are rebuilt from the sign quotient, explicit commutators producing $3$-cycles, generation, and $A_n$ simplicity. |
| `ex-conjugating-permutations-by-relabeling` | `literature-derived` | `ai-altered` | Milne and Conrad provide explicit relabelling examples; the chosen $S_5$ calculation is adapted to the repository's composition convention. |
| `ex-s-four-conjugacy-classes-and-class-equation` | `literature-derived` | `literature-derived` | Milne's $S_4$ table and the centralizer formula give the five exact sizes and displayed sum. |
| `ex-s-five-conjugacy-classes-and-class-equation` | `ai-altered` | `ai-altered` | The table is generated transparently from all seven partitions of $5$ and the retained centralizer formula, with the sum checked. |
| `ex-a-five-conjugacy-classes-and-split-five-cycles` | `literature-derived` | `ai-altered` | The standard $A_5$ class table follows from the retained splitting theorem and the $S_5$ centralizer counts. |
| `ex-klein-four-is-normal-in-a-four` | `literature-derived` | `literature-derived` | Milne's $S_4$ discussion supplies the exact subgroup; closure, conjugation stability, and proper nontriviality make the $A_4$ failure explicit. |
| `fs-same-cycle-type-implies-conjugate-in-a-n` | `literature-derived` | `literature-derived` | Conrad Examples 5.11–5.12 supply concrete failures caused by class splitting. |
| `fs-a-n-is-simple-for-all-n-at-least-four` | `literature-derived` | `literature-derived` | Milne Remark 4.34 and the retained normal $V_4$ example give the precise $n=4$ refutation. |
| `fs-arbitrary-transposition-and-n-cycle-generate-s-n` | `ai-altered` | `ai-altered` | The counterexample is chosen from an $n$-cycle and a transposition whose cyclic distance has a nontrivial common divisor with $n$, yielding an imprimitive proper subgroup. |

## Blockers and scope declaration

There is no blocker for this step-3 fix. I did not edit `plan-spec.json`, any published item, any library page, another batch's files, Alpha's review, or a normative document. I did not use the fundamental theorem of algebra. The simple-transcendental mathematics is now scaffolded without a field-of-fractions construction; that separate commutative-algebra construction remains intentionally outside this run under Alpha §0. All locally buildable prerequisite machinery for the requested algebraic and transcendental simple extensions, complex field, conjugacy theory, generation results, and simplicity theorem is scaffolded.

## Gate results

Re-run from the repository root after the step-3 fixes on 2026-08-12:

- `node tools/validate-plan.mjs research/plan-spec.json` — passed: declared page order is acyclic and consistent, with no item-level cycles, forward references, B-page dependencies, or unresolved IDs among pages with item lists.
- `node tools/coverage-checklist.mjs research/frontier-11-batch-1.coverage.json` — passed: 2 pages, 80 harvested results, 0 errors, 0 warnings.

The additional cross-artifact check found 53 unique scaffold IDs, no unresolved or forward local dependency, no invalid coverage target, and exact agreement between the 48 proof-bearing IDs, proof-contract scope, and contract keys. No applied canonical-embedding notation occurs.
