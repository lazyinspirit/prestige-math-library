---
page: balanced-triples-and-global-crystal-bases
title: "Balanced Triples and Global Crystal Bases"
status: draft
requires: [divided-powers-integral-forms-and-quantum-highest-weights, kashiwara-operators-and-crystal-lattices, tensor-product-crystals-and-highest-weight-crystal-uniqueness]
items: [       lem-lusztig-and-kashiwara-normalizations-match-by-root-color,
       def-the-bar-lattice-and-integral-lattice-of-a-based-module,
       def-balanced-triple-and-globalization-map,
       def-integral-residue-lattices-of-the-negative-half-and-highest-weight-modules,
       def-root-height-completion-for-weightwise-quasi-r-intertwiners,
       def-drinfeld-hopf-pairing-between-positive-and-negative-quantum-halves,
       lem-balanced-triple-linear-algebra-over-the-projective-line,
       lem-integral-crystal-residues-of-the-negative-half-represent-the-crystal-basis,
       lem-negative-half-reversal-preserves-integral-and-crystal-lattices,
       lem-string-ideal-decomposition-of-the-integral-lattices,
       lem-the-drinfeld-hopf-pairing-is-nondegenerate-in-each-root-degree,
       lem-homogeneous-dual-basis-sums-are-basis-independent-and-weightwise-finite,
       lem-string-ideal-triples-are-balanced,
       thm-the-highest-weight-crystal-triple-is-balanced,
       thm-the-weightwise-quasi-r-intertwiner-exists-and-is-unique,
       def-lower-global-basis-of-a-quantum-highest-weight-module,
       lem-quasi-r-intertwining-determines-the-inverse-and-coproduct-factorizations,
       thm-existence-bar-invariance-and-uniqueness-of-the-lower-global-basis,
       def-upper-global-basis-by-the-contravariant-form,
       thm-global-basis-projection-from-the-negative-half-to-a-highest-weight-module,
       thm-integral-triangular-decomposition-for-the-lusztig-form,
       prop-global-bases-specialize-to-integral-weight-bases,
       thm-lusztig-canonical-and-kashiwara-global-bases-agree-in-symmetric-type,
       thm-quantum-highest-weight-modules-deform-the-classical-weight-character,
       thm-upper-and-lower-global-bases-are-dual-and-crystal-compatible,
       lem-distinct-cyclotomic-shears-give-integrable-based-sl-two-chains,
       lem-two-cyclotomic-shears-give-a-periodic-integrable-based-sl-two-chain,
       lem-periodic-cyclotomic-based-sl-two-tensor-corrections-escape-every-finite-cut,
       lem-quasi-r-divided-power-integrality-on-based-lattices,
       thm-quasi-r-tensor-bars-on-finite-products-of-based-integrable-modules]
examples: []
---

**Objective.** This page globalizes integral crystal bases at the level of
the divided-power form $A=\mathbb Z[q,q^{-1}]$. Its central objects are the
**balanced triples** of Kashiwara's chart lemma: a spanning $A$-submodule
$M$, a zero chart $L_0$ over $A_0$, an infinity chart $L_\infty$ over
$A_\infty$, and the requirement that the integral balanced intersection
$M\cap L_0\cap L_\infty$ map isomorphically onto the integral residue
$(M\cap L_0)/(M\cap qL_0)$. On that foundation the page constructs the
lower and upper global bases of the negative half and of integrable highest
weight modules, proves the based-quotient presentation
$\pi_\lambda:U_A^-\twoheadrightarrow V_A(\lambda)$, relates the
normalized quasi-$R$ intertwiner $\Theta$ to the Drinfeld pairing $D$, and
computes the tensor bars on finite products in exactly the admissible
classes.

**Scope and dependence.** The page is the globalization layer of
[[divided-powers-integral-forms-and-quantum-highest-weights]],
[[kashiwara-operators-and-crystal-lattices]] and
[[tensor-product-crystals-and-highest-weight-crystal-uniqueness]]: it
imports the divided-power integral form, the Kashiwara lattices and
operators, the grand loop and the crystal tensor rule, and it proves the
integral balancedness, freeness, base change and duality statements that
those pages leave open. The in-run prerequisites supply the normalized half form, the integrable
highest weight module and the local $q=1$ comparison. Their exact hypotheses
and conclusions are used in the items below. The historical supplier defects
recorded in `research/frontier-44-special-representation-examples-28-six-step-reader-8.md`
were corrected; the current proofs are reviewed separately in
`research/frontier-44-special-representation-examples-28-six-step-alpha-batch-8-3a.md`.

## Normalizations and the two charts

The page begins with the convention dictionary
[[lem-lusztig-and-kashiwara-normalizations-match-by-root-color]], which
transports Lusztig's parameter $v=q^{-1}$ to the library's Drinfeld-Jimbo
presentation, matches the coproducts up to the tensor flip, and computes
the exact root-color factor $B_L=C_\nu B_K$ between the source and
normalized half forms. The local chart algebra is isolated in
[[def-the-bar-lattice-and-integral-lattice-of-a-based-module]] and
[[def-balanced-triple-and-globalization-map]], with the integral residue
lattices of
[[def-integral-residue-lattices-of-the-negative-half-and-highest-weight-modules]]
and the projective-line form of the lifting criterion proved in
[[lem-balanced-triple-linear-algebra-over-the-projective-line]]: a finite
free simultaneous lift module generating the integral module over $A$, with
injective images in both chart residues, is what
turns a triple into a balanced triple, and the relative form of the
criterion applies modulo an already balanced submodule.

## The quasi-$R$ intertwiner and the Drinfeld pairing

The normalized Drinfeld pairing is defined in
[[def-drinfeld-hopf-pairing-between-positive-and-negative-quantum-halves]]
and proved perfect in each root degree in
[[lem-the-drinfeld-hopf-pairing-is-nondegenerate-in-each-root-degree]].
The diagonal root-height completion of
[[def-root-height-completion-for-weightwise-quasi-r-intertwiners]] and the
dual-basis sums of
[[lem-homogeneous-dual-basis-sums-are-basis-independent-and-weightwise-finite]]
then make sense of the quasi-$R$ family, and
[[thm-the-weightwise-quasi-r-intertwiner-exists-and-is-unique]] identifies
it as the unique normalized bar-coproduct intertwiner
$\Delta(u)\Theta=\Theta\bar\Delta(u)$ with its two generator recursions
and the rank-one coefficient $(q_i-q_i^{-1})^n[n]_{q_i^2}!$. Its inverse
and coproduct factorizations, including the field cocycle, are
[[lem-quasi-r-intertwining-determines-the-inverse-and-coproduct-factorizations]],
used later for the tensor construction.

## Integral string ideals and their balance

The negative-half input is organized by the string ideals
$I_{(i,n)}^A=U_A^-\cap F_i^nU_q^-$ and their module images: the integral
projector, the adapted decompositions and the boundary-generation identity
are [[lem-string-ideal-decomposition-of-the-integral-lattices]], the
saturation of integral lattice intersections under the reversal
anti-involution is [[lem-negative-half-reversal-preserves-integral-and-crystal-lattices]],
and the induction step that balances every string ideal from the
lower-height hypotheses is [[lem-string-ideal-triples-are-balanced]]. The
integral crystal residues that these ideals compute are identified with
the $\mathbb Z$-spans of the crystal sets in
[[lem-integral-crystal-residues-of-the-negative-half-represent-the-crystal-basis]].

## Globalization

[[thm-the-highest-weight-crystal-triple-is-balanced]] is the main induction:
it produces the balanced triples of $U_A^-$ and of every $V_A(\lambda)$,
the bar-invariant lower global bases $G_\infty(b),G_\lambda(b)$, the free
$A$-bases with their classical ranks, the string-ideal decompositions and
the exact top-string transition
$G_\infty(\tilde f_i^nb)-F_i^{(n)}G_\infty(b)\in I_{(i,n+1)}^A$.
[[def-lower-global-basis-of-a-quantum-highest-weight-module]] and
[[thm-existence-bar-invariance-and-uniqueness-of-the-lower-global-basis]]
record the definition and the uniqueness that every later consumer uses,
and [[thm-global-basis-projection-from-the-negative-half-to-a-highest-weight-module]]
proves that the projection $\pi_\lambda$ is a based quotient over
$\mathbb Z[q,q^{-1}]$, with the exact integral kernel
$\sum_i\sum_{s>\lambda(h_i)}U_A^-F_i^{(s)}$.

The form-dual side is developed in
[[def-upper-global-basis-by-the-contravariant-form]] and
[[thm-upper-and-lower-global-bases-are-dual-and-crystal-compatible]]:
restricted graded perfectness of the integral pairing, the genuine dual
charts, adjoint bar invariance and the exact weighted mixed adjunctions of
the upper operators. Two structural consequences follow:
[[thm-integral-triangular-decomposition-for-the-lusztig-form]] proves the
integral triangular decomposition and freeness of the Lusztig form, and
[[prop-global-bases-specialize-to-integral-weight-bases]] and
[[thm-quantum-highest-weight-modules-deform-the-classical-weight-character]]
compute base change and the characteristic-zero $q=1$ fibre with the
classical Weyl-Kac character. The symmetric finite ADE comparison with Lusztig's
canonical basis is
[[thm-lusztig-canonical-and-kashiwara-global-bases-agree-in-symmetric-type]],
proved by the signed norm characterization, the exact $T_{i,n}$
top-string recursion and the based quotient.

## Tensor bars

The final layer transfers the quasi-$R$ action to tensor products:
[[lem-quasi-r-divided-power-integrality-on-based-lattices]] develops the
integral action in the stated highest-first, lowest-second, finite-type
and $C_{\mathrm{high}}/C_{\mathrm{low}}$ cases, with the
affine counterexample showing that the unrestricted arbitrary-based
assertion fails, and
[[thm-quasi-r-tensor-bars-on-finite-products-of-based-integrable-modules]]
turns this into the well-defined semilinear tensor bar, its triangular
weight transfer and the corrected tensor global basis in the admissible
cases. Both items keep the distinction between the raw tensor products of
lower basis vectors and the corrected bar-fixed lifts. The local action-finiteness
and supported-correction prerequisites for arbitrary finite-type based modules
remain open review obligations, recorded in
`research/frontier-44-special-representation-examples-28-six-step-alpha-batch-8-3a.md`.

## Choice

The Axiom of Choice is declared once in the prerequisite pages and
propagates through the grand-loop, negative-half-form and generic PBW-rank suppliers;
each item above states its exact use. The chart lemmas, the string-ideal
inductions, the dual-basis and tensor-correction computations are
choice-free, and no item on this page uses AC for any statement not already
carrying it.

## How to read this page

Items are ordered by dependency level and then by page order. The first
group fixes normalizations, charts and the quasi-$R$ calculus; the second
proves the integral balancedness and globalization; the third develops
duality, specialization and the canonical comparison; the last two treat
the tensor action, its exact scope and its boundary counterexamples. The
companion page [[balanced-triples-and-global-crystal-bases-examples]] works
the same machinery on the smallest explicit lattices and on the two known
failure modes.
