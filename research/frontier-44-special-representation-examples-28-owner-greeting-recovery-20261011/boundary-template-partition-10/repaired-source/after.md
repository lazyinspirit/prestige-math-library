---
id: thm-quasi-r-tensor-bars-on-finite-products-of-based-integrable-modules
kind: theorem
title: "Tensor bars on finite products of based integrable modules"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-quasi-r-intertwining-determines-the-inverse-and-coproduct-factorizations, lem-quasi-r-divided-power-integrality-on-based-lattices, thm-the-weightwise-quasi-r-intertwiner-exists-and-is-unique, def-lower-global-basis-of-a-quantum-highest-weight-module, thm-crystal-basis-tensor-product-rule, def-balanced-triple-and-globalization-map]
justified_by: []
aliases: []
landmark: false
dependency_level: 18
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jonathan Brundan, Dual Canonical Bases and Kazhdan–Lusztig Polynomials, arXiv:math/0509700v2 (Transform. Groups 14 (2009), 535–558)"
      url: "https://arxiv.org/pdf/math/0509700v2"
      locator: "§3, printed pp. 8–10: (3.1) the tensor bar $\\overline{v\\otimes w}=\\Theta(\\bar v\\otimes\\bar w)$, the inductive definition for $d$ factors, independence of $k$ via [L, 27.3.6], and the braiding formulation (3.2)–(3.3); §§4–5, printed pp. 10–18, for the type-A lattice triangularity."
    - title: "George Lusztig, Introduction to Quantum Groups (Progress in Mathematics 110, Birkhauser, 1993; second printing 1994; author-hosted scan)"
      url: "https://math.mit.edu/~gyuri/papers/quant.gr.pdf"
      locator: "§§27.3.1–27.3.6 printed221–223/PDF230–232: full finite-type tensor correction/association; §§24.1.4–24.1.6 printed193–194/PDF202–203: integral actions. General highest/lowest ordered cases use the full Bao–Wang proof and local inheritance, not an arbitrary affine based-pair inference."
    - title: "Antoine Lacabanne, Drinfeld Double of Quantum Groups, Tilting Modules and Z-Modular Data Associated to Complex Reflection Groups, arXiv:1807.00770v2"
      url: "https://arxiv.org/pdf/1807.00770v2"
      locator: "§1.7 and §2.3, printed pp. 8–11 and 22–24: the quasi-$R$-matrix and its use to braid the module category; the source is the finite-type double over $\\mathbb Q(q)$."
    - title: "Bao–Wang, Canonical bases in tensor products revisited"
      url: "https://arxiv.org/pdf/1403.0039"
      locator: "Complete§2.1–2.3, Lemmas2.2–2.3, Propositions2.4/2.6, Theorems2.7/2.9 and exact conditional associativity discussion onp5; general ordered cases, NOT arbitrary based pairs."
---

## Statement

For any finite sequence of based integrable modules in the finite-weight-space category $O_{\mathrm{int}}$, the field tensor bar $\Psi=\Theta(\text{composite factor bars})$, built from the normalized intertwiner $\Theta$ of [[thm-the-weightwise-quasi-r-intertwiner-exists-and-is-unique]], is well defined, semilinear, $U$- and bar-compatible, involutive and independent of all parenthesizations; all root-height sums are vectorwise finite.

This field assertion holds for arbitrary based pairs and does not imply integral action. Its integral and based assertion holds for exactly the admissible cases proved by the integral-action supplier [[lem-quasi-r-divided-power-integrality-on-based-lattices]]: highest-first or first $C_{\mathrm{high}}$ with arbitrary based second; arbitrary based first with lowest or $C_{\mathrm{low}}$ second under finite action; all finite highest products and exact based subquotients and direct sums of their tensor constructions; ordered highest-prefix, based-middle, lowest-suffix products with explicit local support bounds; and arbitrary based pairs and products in finite Cartan type. For any other pair the same conclusion is conditional on an independently proved integral $\Theta$ action, not on field semisimplicity or lattice freeness.

In these cases: $\Psi$ preserves the divided-power integral tensor lattice; its action on raw tensor lower basis vectors is locally weight-transfer triangular with diagonal $1$; the actual tensor global vectors are its uniquely corrected bar-fixed lifts congruent to those raw tensor vectors modulo $q$, with corrections in $q\mathbb Z[q]$; they form a genuine $A$-basis and give the integral balanced tensor triple; the $q=0$ tensor lattice and crystal basis are supplied separately by the completed crystal tensor rule [[thm-crystal-basis-tensor-product-rule]], and the infinity chart is $\Psi(L_0^{\mathrm{tensor}})$, not an asserted bar containment in $L_0$, since semilinearity sends $q$ to $q^{-1}$. The raw tensor lower vectors are generally not bar fixed. Exact based integral and bar-compatible subquotient maps preserve the corrected global bases by balanced uniqueness. No assertion covers arbitrary two-sided-unbounded evaluation, semi-infinite limits, a universal-$R$ braiding, or general arbitrary-based integral action; the affine boundary in the supplier disproves the latter.

## Facts & Assumptions

**Given:** The normalized intertwiner $\Theta$, its unitarity and coproduct factorizations ([[thm-the-weightwise-quasi-r-intertwiner-exists-and-is-unique]], [[lem-quasi-r-intertwining-determines-the-inverse-and-coproduct-factorizations]]); the integral action cases and their closed classes ([[lem-quasi-r-divided-power-integrality-on-based-lattices]]); the lower global tensor bases and balanced triples ([[def-lower-global-basis-of-a-quantum-highest-weight-module]], [[def-balanced-triple-and-globalization-map]]); and the crystal tensor rule ([[thm-crystal-basis-tensor-product-rule]]).

[F1] Intertwiner calculus ([[thm-the-weightwise-quasi-r-intertwiner-exists-and-is-unique]], [[lem-quasi-r-intertwining-determines-the-inverse-and-coproduct-factorizations]]): $\Theta_0=1$, $\Theta^{-1}=\overline\Theta=(\psi\otimes\psi)(\Theta)$, $\Delta(u)\Theta=\Theta\overline\Delta(u)$ for all $u$, the field cocycle $((\Delta\otimes\mathrm{id})\Theta)\Theta_{12}=((\mathrm{id}\otimes\Delta)\Theta)\Theta_{23}$ holds coefficientwise, and the action of $\Theta$ is vectorwise finite on the completed pairs.

[F2] Integral action ([[lem-quasi-r-divided-power-integrality-on-based-lattices]]): in the listed cases $\Theta$ preserves the divided-power integral tensor lattice, has $A$-valued coefficients, is locally weight-transfer triangular with diagonal $1$, and admits the finite semilinear correction construction of the corrected tensor global basis with $q\mathbb Z[q]$ corrections and finite intervals.

[F3] Balanced triples and uniqueness ([[def-balanced-triple-and-globalization-map]], [[def-lower-global-basis-of-a-quantum-highest-weight-module]]): an integral balanced lift with prescribed residue is unique; adapted tensor global bases give the $\mathbb Z$-span, the $A_0$-chart, the actual infinity chart and the integral globalization isomorphisms.

[F4] Crystal tensor rule ([[thm-crystal-basis-tensor-product-rule]]): the tensor product of crystal lattices is a crystal lattice with residue set the nonzero classes $\tilde f_i(b\otimes b')$ and saturated tensor lattice structure on the finite-weight-space category.

## Proof

**Proof technique:** direct.

1.1 **The field tensor bar.** For the empty sequence take the tensor unit $\mathbf 1=\mathbb Q(q)1$ of weight zero, with $u\cdot1=\varepsilon(u)1$: the counit of the quantum-group structure underlying [F1] has $\varepsilon(E_i)=\varepsilon(F_i)=0$ and $\varepsilon(K_h)=1$. Its basis is $\{1\}$, its crystal operators vanish, and its bar is $\Psi_{\varnothing}(f(q)1)=f(q^{-1})1$. These generator actions show integrability and bar compatibility; the divided-power lattice is $A1$, stable because positive divided powers act by zero and the toral generators act by one. Its zero and infinity charts are $A_01$ and $A_\infty1=\Psi_{\varnothing}(A_01)$. A Laurent polynomial regular at zero has no negative powers and one regular at infinity has no positive powers, so $A\cap A_0\cap A_\infty=\mathbb Z$ and $A\cap A_0=\mathbb Z[q]$. Thus the balanced map of [F3] is $\mathbb Z1\to\mathbb Z[q]1/q\mathbb Z[q]1$, an isomorphism, and its unique global lift is $1$, with no correction. Every positive-root component of $\Theta$ annihilates a tensor pair containing this unit, since its positive or negative quantum half acts trivially there, while $\Theta_0=1$ acts as the identity; hence adjoining a unit leaves the tensor bar unchanged under the canonical unit identifications. The empty case is therefore vectorwise finite, involutive, integral, balanced and independent of parenthesization. For a single factor use its given bar. Define the binary bar $\Psi_{M,N}=\Theta(\psi_M\otimes\psi_N)$ and, for a finite sequence, the iterated composition; on each factor pair the action of $\Theta$ is vectorwise finite because an $O_{\mathrm{int}}$ pair has finite tensor weight components and, for ordered lowest inputs, the supplied lower-cone bounds hold before evaluation. $\Psi$ is semilinear because $\psi$ sends $q$ to $q^{-1}$. Since $\Theta^{-1}=\overline\Theta$ by [F1], applying the binary bar twice gives $\Theta\overline\Theta=\mathrm{id}$, so $\Psi^2=\mathrm{id}$; and $\Delta(u)\Theta=\Theta\overline\Delta(u)$ gives $\Psi(u x)=\psi(u)\Psi(x)$ for every $u$ and every tensor $x$ on which the action is defined. [F1, F3, construct, algebra]

1.2 **Integral preservation and triangularity.** In the cases of [F2], $\Psi$ preserves the divided-power integral tensor lattice and is an $A$-bijection because $\Psi^2=\mathrm{id}$; every positive-root component of $\Theta$ raises the first label and lowers the second, and only the degree-$0$ component fixes a label pair, so the action on raw tensor lower basis vectors is triangular with diagonal $1$ in the weight-transfer order, with finite intervals as in the supplier. [F1, F2]

2.1 **Independence of parenthesizations.** For three factors the two bracketings compute $((\Delta\otimes\mathrm{id})\Theta)\Theta_{12}$ and $((\mathrm{id}\otimes\Delta)\Theta)\Theta_{23}$ composed with the factor bars, and the field cocycle of [F1] makes them equal coefficientwise; since every rebracketing of a finite sequence is generated by binary reassociations, all parenthesizations give the same $\Psi$, with all sums finite in each total root degree. This is the field-level assertion and requires no integral action. [F1, step 1.1]

2.2 **The corrected tensor global vectors.** Apply the finite semilinear correction algorithm of [F2]: in each finite transfer interval solve $g_t=e_t+\sum_{s>t}a_{ts}e_s$ with $a_{ts}\in q\mathbb Z[q]$ for the bar-fixed lift of the raw vector $e_t$. Involutivity forces the remainder to satisfy $f+\bar f=0$, whose unique positive $q$-part supplies the next coefficient; finite induction yields existence and uniqueness of the corrected family, which is an $A$-basis of the tensor lattice congruent to the raw basis modulo $q$, and an $A_0$-basis whose residues are precisely the raw tensor crystal basis supplied by [F4]. The raw vectors themselves are generally not bar fixed, which is why the correction is needed. [F2, F4, step 1.2]

3.1 **The integral balanced tensor triple.** Since the corrected family is $\Psi$-fixed, its $A_\infty$-span is the actual infinity chart $\Psi(L_0^{\mathrm{tensor}})$ and its $A_0$-span is the original tensor zero chart; intersecting the Laurent coefficient rings in this common basis gives the $\mathbb Z$-span as the balanced intersection $L_0^{\mathrm{tensor}}\cap\Psi(L_0^{\mathrm{tensor}})\cap A$-lattice, so the integral globalization isomorphisms of [F3] identify the corrected family as the genuine tensor global basis and prove integral balancedness. This uses the crystal lattice only as the residue datum and does not assert that $\Psi$ preserves $A_0$ or that the bar chart equals $L_0^{\mathrm{tensor}}$. [F3, step 2.2]

4.1 **Based subquotients and scope.** Exact based subobjects are saturated basis subsets and based quotients have basis-subset kernels; both commute with bars and crystal operators, and the image of a corrected global vector is integral and bar fixed with one raw residue or $0$, so balanced uniqueness [F3] proves the basis-or-$0$ compatibility and the corrected bases descend to exact tensor subquotients and direct sums within the stated bounds. Outside the listed cases no integral action is claimed, and the affine counterexample of the supplier shows it can fail; no universal braiding or semi-infinite evaluation is asserted. [F2, F3, step 3.1]

5.1 **Conclusion.** Steps 1.1–1.2 prove the well-defined semilinear involutive field bar and its parenthesization independence; steps 2.1–3.1 prove integral preservation, the triangular correction, the corrected global basis and the balanced tensor triple in exactly the admissible cases; step 4.1 proves subquotient inheritance and records the scope exclusions. [step 2.1, step 3.1, step 4.1] ∎
