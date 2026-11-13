---
id: rem-classical-kpi-families-artin-tits-normalisers
kind: remark
title: Reported proved families for the classical conjecture
status: draft
domain: mathematics
origin: pipeline
deps:
  - def-coxeter-data-artin-tits-normalisers
  - def-classical-complement-artin-tits-normalisers
  - def-artin-pure-lifts-artin-tits-normalisers
  - math:def-eilenberg-maclane-space
  - math:def-cg-coxeter-diagram-components-and-finite-type
  - math:def-cg-irreducible-affine-coxeter-type
  - math:def-cg-standard-affine-diagrams
  - math:thm-cg-affine-gram-classification-and-euclidean-realization
  - math:lem-cg-diagram-products-and-invariant-form-comparison
  - def-coxeter-arrangement-artin-tits-normalisers
  - thm-salvetti-topology-input-artin-tits-prerequisites
  - prop-cover-asphericity-interface-artin-tits-prerequisites
  - math:def-homotopy-equivalence
dependency_roles:
  def-coxeter-data-artin-tits-normalisers: mathematical-premise
  def-classical-complement-artin-tits-normalisers: mathematical-premise
  def-artin-pure-lifts-artin-tits-normalisers: mathematical-premise
  math:def-eilenberg-maclane-space: mathematical-premise
  math:def-cg-coxeter-diagram-components-and-finite-type: mathematical-premise
  math:def-cg-irreducible-affine-coxeter-type: mathematical-premise
  math:def-cg-standard-affine-diagrams: mathematical-premise
  math:thm-cg-affine-gram-classification-and-euclidean-realization: mathematical-premise
  math:lem-cg-diagram-products-and-invariant-form-comparison: mathematical-premise
  def-coxeter-arrangement-artin-tits-normalisers: mathematical-premise
  thm-salvetti-topology-input-artin-tits-prerequisites: mathematical-premise
  prop-cover-asphericity-interface-artin-tits-prerequisites: mathematical-premise
  math:def-homotopy-equivalence: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF p. 1, §1.1, opening paragraph
      statement: The article reports the classical K(pi,1) conjecture as proved for
        spherical, FC and affine types, and mentions further cases through
        references [11,19,23].
      hypotheses: The classical Coxeter arrangement and associated Artin–Tits group in
        the opening paragraph.
      reading_limits: Inspected the frozen original PDF image p. 1 and its extracted
        opening paragraph for attribution only; this article is not a proof
        supplier.
    - title: Proof of the K(pi,1) conjecture for affine Artin groups
      url: https://arxiv.org/html/1907.11795v2
      locator: §1, Main Theorem; §2.1, Euclidean reflection realizations,
        affine-classification paragraph and Figure 1, definitions of Y and Y_W
        and Conjecture 2.1; §8, Theorem 8.15
      statement: For an irreducible affine Coxeter group acting by Euclidean
        reflections, the orbit configuration space Y_W, defined in §2.1 as the
        quotient of the complexified reflection-hyperplane complement, is a
        classifying space for its fundamental group G_W. Section 2.1 lists the
        four infinite affine families and five exceptional types and recalls the
        spherical and FC results.
      hypotheses: W is irreducible affine, in a faithful Euclidean reflection
        realization. The declared affine-realization theorem supplies such a
        realization on the canonical affine slice. Steps 1.1, 2.1 and 3.1 below
        compare its orbit configuration space with the canonical Tits-cone
        quotient; reducible cases use the later finite-product argument.
      reading_limits: Read the Main Theorem, §2.1 through its Salvetti-model
        paragraph, Figure 1 caption and type labels, and Theorem 8.15 with its
        concluding proof. No prerequisite proofs or diagram graphics were
        reviewed. The canonical-to-Euclidean comparison below is a local
        argument, not a reconstruction of the affine K(pi,1) theorem.
    - title: K(pi,1) conjecture for Artin groups
      url: https://www.numdam.org/item/AFST_2014_6_23_2_361_0.pdf
      locator: Introduction, printed pp. 361–362; §1, pp. 368–371, Theorem 1.2 and
        Conjecture 1.3; §3.2, Corollary 3.4, p. 394; §3.3, quotient CW
        decomposition, p. 398; §5, Corollary 5.8, p. 412
      statement: The survey uses the contractible-universal-cover definition for the
        product-complement quotient, identifies its fundamental group, supplies
        a homotopy-equivalent Salvetti quotient with a CW structure, reports the
        spherical case, and states the FC result and its finite-parabolic
        definition.
      hypotheses: Finite Coxeter generating set and its canonical Vinberg realization;
        the complement is (I×I) minus the union of H×H. The spherical and FC
        conclusions require their respective type hypotheses.
      reading_limits: Read these definitions, result statements, historical passages
        and quotient-cell description. No spherical, FC or Salvetti-comparison
        proof was reviewed.
    - title: Allen Hatcher, Algebraic Topology, Chapter 1
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch1.pdf
      locator: §1.B, definition on printed p. 87; Examples 1B.5–1B.6, p. 88
      statement: The K(G,1) convention uses a contractible universal cover. Finite
        products preserve this property, with product universal covers. Homotopy
        lifting compares universal covers of homotopy-equivalent spaces in the
        example.
      hypotheses: Path-connected spaces admitting universal covers; a finite product
        for the product assertion. The application here is to finite-dimensional
        quotient manifolds and their CW models.
      reading_limits: Read the definition and Examples 1B.5–1B.6 only. The book is
        used for the stated convention and covering facts, not to prove any
        Artin-group case.
    - title: Allen Hatcher, Algebraic Topology, Chapter 4
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf
      locator: §4.2, Eilenberg–MacLane Spaces, opening paragraph, printed p. 365
      statement: For n=1, vanishing higher homotopy groups is equivalent to
        contractibility of the universal cover when that cover has CW homotopy
        type.
      hypotheses: The space admits a universal cover of CW homotopy type. Here a
        lifted Salvetti-model homotopy equivalence supplies that hypothesis.
      reading_limits: Read only the opening definition-and-equivalence paragraph, not
        the later existence or uniqueness arguments.
dependency_level: 8
formulation_deps:
  - def-coxeter-data-artin-tits-normalisers
  - def-classical-complement-artin-tits-normalisers
  - def-artin-pure-lifts-artin-tits-normalisers
  - math:def-eilenberg-maclane-space
  - math:def-cg-coxeter-diagram-components-and-finite-type
  - math:def-cg-irreducible-affine-coxeter-type
  - math:def-cg-standard-affine-diagrams
  - math:thm-cg-affine-gram-classification-and-euclidean-realization
  - thm-salvetti-topology-input-artin-tits-prerequisites
  - prop-cover-asphericity-interface-artin-tits-prerequisites
  - math:def-homotopy-equivalence
argument_deps:
  - def-coxeter-data-artin-tits-normalisers
  - def-classical-complement-artin-tits-normalisers
  - def-artin-pure-lifts-artin-tits-normalisers
  - math:def-cg-coxeter-diagram-components-and-finite-type
  - math:lem-cg-diagram-products-and-invariant-form-comparison
  - def-coxeter-arrangement-artin-tits-normalisers
  - math:thm-cg-affine-gram-classification-and-euclidean-realization
proof_strategy: direct
---

## Statement

Let $(W,S)$ be a finite-rank Coxeter system, let $\mathcal X^{\mathbb C}$ be its classical complexified arrangement complement, and let $A=\pi_1(\mathcal X^{\mathbb C}/W)$ be the associated Artin–Tits group. The classical $K(\pi,1)$ assertion says that $\mathcal X^{\mathbb C}/W$ is a classifying space for $A$: it has fundamental group $A$ and contractible universal cover. Here the quotient uses the universal-cover convention for $K(A,1)$. Its Salvetti quotient is a connected CW model $C$ homotopy equivalent to it; equivalently, $\pi_1(C)\cong A$ with the induced group identification and $\pi_n(C)=0$ for every $n>1$, so $C$ is a $K(A,1)$ in the CW-complex definition.

The article reports this assertion as proved for spherical, FC and affine types, and cites further cases [11,19,23] without specifying them in that paragraph. Spherical type means that $W$ is finite. FC type means that every subset $T\subseteq S$ for which all Coxeter labels $m(s,t)$ with $s,t\in T$ are finite generates a finite subgroup $W_T$.

A Coxeter system is irreducible when its Coxeter diagram is connected. An irreducible system is affine when its Coxeter form $B$ is positive semidefinite of corank one, as in the affine-form convention. The standard diagrams in the four families are $\widetilde A_n$ for $n\geq1$, $\widetilde B_n$ for $n\geq3$, $\widetilde C_n$ for $n\geq2$, and $\widetilde D_n$ for $n\geq4$; the exceptional types are $\widetilde E_6$, $\widetilde E_7$, $\widetilde E_8$, $\widetilde F_4$, and $\widetilde G_2$. These exhaust the irreducible affine systems. Here the names denote the standard labelled Coxeter diagrams, including the two-vertex infinity-labelled diagram $\widetilde A_1$.

For disconnected systems, use the componentwise convention: affine type means a nonempty finite disjoint union of irreducible affine diagrams. The assertion holds for these reducible affine cases as well, and also when spherical components are included. The finite-product deduction is given below; the irreducible affine theorem is an imported result.

## Statement references

[[def-coxeter-data-artin-tits-normalisers]]

[[def-classical-complement-artin-tits-normalisers]]

[[def-artin-pure-lifts-artin-tits-normalisers]]

[[math:def-eilenberg-maclane-space]]

[[math:def-cg-coxeter-diagram-components-and-finite-type]]

[[math:def-cg-irreducible-affine-coxeter-type]]

[[math:def-cg-standard-affine-diagrams]]

[[math:thm-cg-affine-gram-classification-and-euclidean-realization]]

[[thm-salvetti-topology-input-artin-tits-prerequisites]]

[[prop-cover-asphericity-interface-artin-tits-prerequisites]]

[[math:def-homotopy-equivalence]]

## External input

The spherical and FC results and the irreducible affine theorem are imported from the references of Paris and Paolini–Salvetti. Their proofs are not reconstructed here.

Paris uses the same product complement and universal-cover convention (pp. 361–362, 368–369). His Corollary 3.4 and quotient-cell description (pp. 394, 398) supply the CW model, using the Coxeter instance of [[thm-salvetti-topology-input-artin-tits-prerequisites]]. Hatcher, §1.B and §4.2 p. 365, supplies the covering and CW equivalence: a lifted model equivalence gives a CW homotopy type for the universal cover, and its contractibility is then equivalent to vanishing higher homotopy groups. The CW-model interpretation also uses [[prop-cover-asphericity-interface-artin-tits-prerequisites]] and [[math:def-eilenberg-maclane-space]]. These are cited topological inputs, not an assertion that the quotient itself has been given a CW structure.

For the affine input, the Euclidean orbit configuration space in Paolini–Salvetti is distinguished from the canonical Tits-cone quotient. The existing affine-realization theorem [[math:thm-cg-affine-gram-classification-and-euclidean-realization]] supplies the slice and its tiling; steps 1.1, 2.1 and 3.1 give a local equivariant comparison, including the affine pair-coordinate change. No realization-independence theorem is assumed.

## Facts & Assumptions

[F1] The components of the Coxeter diagram partition $S$, and the corresponding Coxeter groups and canonical representations split as finite products and orthogonal sums. Each factor acts trivially on the other summands. [[math:def-cg-coxeter-diagram-components-and-finite-type]] [[math:lem-cg-diagram-products-and-invariant-form-comparison]]

[F2] Root hyperplanes are kernels of root evaluation, the closed chamber is the nonnegative simple-root-coordinate orthant, and the Tits cone is the union of its translates. The complement removes $H\times H$ from the product of the cone interiors. [[def-coxeter-data-artin-tits-normalisers]] [[def-coxeter-arrangement-artin-tits-normalisers]] [[def-classical-complement-artin-tits-normalisers]]

[F3] A spherical component satisfies the classical assertion by the spherical result reported by [Paris](https://www.numdam.org/item/AFST_2014_6_23_2_361_0.pdf), pp. 370–371. For an irreducible affine Euclidean reflection realization, write $Y_W$ for the quotient of the complement of its complexified reflecting hyperplanes. [Paolini–Salvetti](https://arxiv.org/html/1907.11795v2), §2.1 and Theorem 8.15, supplies the assertion that $Y_W$ has contractible universal cover. These are imported premises; the comparison with our canonical quotient is proved below.

[F4] A finite product of spaces with contractible universal covers has the product universal cover and again has a contractible universal cover: [Hatcher](https://pi.math.cornell.edu/~hatcher/AT/ATch1.pdf), Example 1B.5. The fundamental group of our quotient is $A$ by [[def-artin-pure-lifts-artin-tits-normalisers]].

[F5] For a connected affine-form system with the Coxeter form and simple-root basis of [F2], there is a positive radical vector $\delta=\sum_{s\in S}\delta_s\alpha_s$ with every $\delta_s>0$. The canonical dual action on $E=\{f\in\Theta:f(\delta)=1\}$ is a faithful Euclidean reflection action. Its closed fundamental simplex is $E\cap\overline C$, with facets $E\cap H_{\alpha_s}$, and the translates of this simplex cover $E$. The labelled action is similar to the matching crystallographic affine reflection realization. These are clauses (2)–(3) of [[math:thm-cg-affine-gram-classification-and-euclidean-realization]].

## Proof

**Given:** A finite-rank system whose nonempty diagram components are spherical or irreducible affine, the imported results [F3], and the affine realization [F5].

**Goal:** Compare the canonical and Euclidean affine quotients and then establish the finite-product deduction.

1.1 First consider an irreducible affine component, using [F5] to choose $\delta$ and $E$. Each simple reflection fixes $\delta$, since $B(\delta,\alpha_s)=0$ in the reflection formula of [F2]; hence all of $W$ fixes it and evaluation at $\delta$ is invariant under the dual action. For $f\in\overline C$, positivity of every $\delta_s$ shows $f(\delta)\geq0$, with equality only for $f=0$. Thus the same holds on every translate of $\overline C$. Conversely, if $t=f(\delta)>0$, then $p=f/t$ lies in $E$, and the tiling in [F5] puts $p$ in some $w(E\cap\overline C)$. Multiplication by $t>0$ then puts $f$ in $w\overline C$. Consequently $\mathrm{Cone}=\{0\}\cup\{f:f(\delta)>0\}$ and $\mathrm{Cone}^{\circ}=\{f:f(\delta)>0\}$; zero is not interior because $\delta\neq0$ and every neighbourhood of zero contains a functional negative on $\delta$. Radial normalization is the homeomorphism $f\mapsto(t,p)=(f(\delta),f/f(\delta))$ from $\mathrm{Cone}^{\circ}$ to $\mathbb R_{>0}\times E$, with inverse $(t,p)\mapsto tp$. It is $W$-equivariant with trivial action on $t$. [given, F2, F5]

1.2 Write $S_1,\ldots,S_k$ for the component vertex sets and $W_i=W_{S_i}$. By [F1], $W=\prod_i W_i$ and the dual representation splits into the component dual spaces. Every root lies in a single component summand, because a simple root does and the other factors act trivially. Thus each reflecting hyperplane is a component hyperplane times all the other dual spaces. The closed chamber is the product of the component closed chambers by its coordinate description in [F2]. Taking translates gives the product of the component Tits cones; since there are finitely many factors, taking interiors gives the product of their interiors. The condition that a pair avoid every $H\times H$ is therefore exactly the corresponding condition in each factor. Hence $\mathcal X^{\mathbb C}=\prod_i\mathcal X_i^{\mathbb C}$ with componentwise action. The induced bijection $\mathcal X^{\mathbb C}/W\to\prod_i(\mathcal X_i^{\mathbb C}/W_i)$ is a homeomorphism: each orbit map is open, since the preimage of the image of an open set is the union of its translates, and the finite product of these open quotient maps is again an open quotient map. [given, F1, F2]

2.1 Put $D=\{v\in\Theta:v(\delta)=0\}$, the direction space of $E$. Choose an origin $o\in E$ to describe its complexification $E_{\mathbb C}$ as points $p+iv$ with $p\in E$ and $v\in D$, meaning coordinates $(p-o)+iv$. For $\alpha\in\Phi$ set $h_\alpha(p)=p(\alpha)$ and $l_\alpha(v)=v(\alpha)$. Equivariance of root evaluation gives $H_{w\alpha_s}=wH_{\alpha_s}$, so [F5] identifies the traces $H_\alpha\cap E$ with exactly the Euclidean reflection hyperplanes on $E$. Their complexifications have equations $h_\alpha(p)+i l_\alpha(v)=0$. Since the original hyperplanes are linear, the two radial normalizations in step 1.1 identify $\mathcal X^{\mathbb C}$ with $\mathbb R_{>0}^2\times M_E$, where $M_E$ consists of pairs $(p,q)\in E\times E$ for which no $\alpha$ has $h_\alpha(p)=h_\alpha(q)=0$. Now $(p,q)\mapsto p+i(q-p)$ is a homeomorphism from $M_E$ to the Euclidean complexified reflection complement $Y$: its inverse is $p+iv\mapsto(p,p+v)$, and $l_\alpha(q-p)=h_\alpha(q)-h_\alpha(p)$ proves the required equivalence of the excluded sets. If $L_w$ is the linear part of the affine action on $E$, then $wq-wp=L_w(q-p)$, so this map intertwines the diagonal pair action with the complexified affine action $p+iv\mapsto wp+iL_wv$. Thus the comparison $\mathcal X^{\mathbb C}\cong\mathbb R_{>0}^2\times Y$ is $W$-equivariant. [F2, F5, step 1.1, choose, construct]

3.1 Passing to orbits in step 2.1 gives $\mathcal X^{\mathbb C}/W\cong\mathbb R_{>0}^2\times Y_W$ with $Y_W=Y/W$. This is a homeomorphism: an equivariant homeomorphism descends with its inverse, and the orbit map on $Y$ is open because the saturation of an open set is a union of translates, so its product with the identity on $\mathbb R_{>0}^2$ is an open quotient map. By [F5] the slice is an irreducible affine Euclidean reflection realization, exactly the hypothesis of the imported theorem [F3]. Let $\widetilde Y_W\to Y_W$ be its contractible universal cover. The convex space $\mathbb R_{>0}^2$ is contractible and simply connected, so [F4] gives the universal cover $\mathbb R_{>0}^2\times\widetilde Y_W$ of the canonical quotient. It is contractible by contracting the positive coordinates linearly to $(1,1)$ and using a contraction of $\widetilde Y_W$. This establishes the canonical assertion for each irreducible affine component without reconstructing the imported theorem. [F3, F4, F5, step 2.1]

4.1 Every factor quotient in step 1.2 has contractible universal cover: use [F3] for spherical components and step 3.1 for irreducible affine components. Apply [F4] to their finite product. Its universal cover is the product of the component covers and is contractible, with a contraction given coordinatewise. Its fundamental group is $A$ by [F4], so it is a classifying space for $A$ in the stated convention. If $S$ is empty, the complement and quotient are points, giving the same conclusion with trivial $A$. This proves the reducible affine and mixed spherical–affine cases while leaving the spherical, FC and Euclidean irreducible affine theorems as imported inputs. [F3, F4, step 3.1, step 1.2] ∎

## Remarks

This is the article's historical report, not a complete enumeration of known cases. Its reference numbers [11,19,23] are retained as attribution to the article's bibliography, without assigning individual conclusions to them here. The affine definitions, CW-model clarification, canonical-to-Euclidean comparison and finite-product argument are generated exposition, not claims of additional argument in the original article.
