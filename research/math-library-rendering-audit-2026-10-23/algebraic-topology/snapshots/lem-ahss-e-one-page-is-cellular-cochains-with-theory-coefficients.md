---
id: lem-ahss-e-one-page-is-cellular-cochains-with-theory-coefficients
kind: lemma
title: The AHSS E-one page is cellular cochains with theory coefficients
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: ["def-reduced-generalized-cohomology-theory", "def-coefficient-groups-of-a-generalized-cohomology-theory", "def-reduced-cone-suspension-and-cofiber-sequence", "prop-relative-cw-inclusions-are-cofibrations", "lem-cofiber-of-a-based-cofibration-is-equivalent-to-the-quotient", "lem-cw-quotients-and-collapse-of-a-contractible-subcomplex", "def-wedge-of-pointed-spaces", "def-oriented-cellular-chain-group", "thm-relative-homology-of-consecutive-cw-skeleta", "thm-based-sphere-maps-are-classified-by-geometric-degree"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Yiannis Loizides, The Atiyah–Hirzebruch Spectral Sequence, §3, printed pp. 4–6"
      url: https://math.gmu.edu/~yloizide/Atiyah-Hirzebruch.pdf
      locator: "§3, E-one page, printed pp. 4–6"
verification:
  audited: 2026-09-22
---

## Statement

Let $X$ be a finite CW complex with supplied characteristic maps and cell orientations, and let $\widetilde h$ be a reduced generalized cohomology theory. Use the associated cofiber model for relative groups:
$$h^r(B,A):=\widetilde h^r(C_{A_+\hookrightarrow B_+}),$$
where $+$ adjoins a disjoint basepoint. Thus $h^r(B,\varnothing)=\widetilde h^r(B_+)$ and the coefficient group is $h^q(*)=\widetilde h^q(S^0)$. Set $X^p=\varnothing$ for $p<0$. The first skeletal groups $E_1^{p,q}=h^{p+q}(X^p,X^{p-1})$ have natural isomorphisms
$$E_1^{p,q}\cong C^p_{\mathrm{cell}}(X;h^q(*)):=\operatorname{Hom}(C_p^{\mathrm{cell}}(X;\mathbb Z),h^q(*))$$
for all integers $p,q$. In particular these identify the first page of the skeletal exact couple whenever $h$ is given as its CW-pair theory with this cofiber model. This assertion uses only these relative groups, not an equivalence between categories of theories.

The isomorphisms commute with cellular maps through their induced cellular chain maps, and with morphisms of reduced theories through the induced coefficient homomorphisms. Orientations fix the cell coordinates; a reversal of a chosen cellular generator reverses the corresponding coefficient coordinate.

## Facts & Assumptions

**Given:** The stated finite CW data, $\widetilde h$, and the displayed relative-group convention.

[F1] CW subcomplex inclusions are cofibrations; the reduced cofiber of a based cofibration maps by a based homotopy equivalence to the quotient ([[prop-relative-cw-inclusions-are-cofibrations]], [[lem-cofiber-of-a-based-cofibration-is-equivalent-to-the-quotient]], [[def-reduced-cone-suspension-and-cofiber-sequence]]).

[F2] Collapsing a nonempty CW subcomplex retains a vertex for that subcomplex and the remaining cells, with their quotient characteristic maps; the empty wedge is a point ([[lem-cw-quotients-and-collapse-of-a-contractible-subcomplex]], [[def-wedge-of-pointed-spaces]]).

[F3] The reduced functors are homotopy invariant and satisfy the wedge axiom by summand restrictions; the point has zero reduced groups. Their natural suspension isomorphisms identify $\widetilde h^{p+q}(S^p)$ with $h^q(*)$ for $p\ge0$ ([[def-reduced-generalized-cohomology-theory]], [[def-coefficient-groups-of-a-generalized-cohomology-theory]]).

[F4] Cellular chains in degree $p\ge0$ are the relative homology of consecutive skeleta and are free on their oriented $p$-cells; they vanish for $p<0$ ([[def-oriented-cellular-chain-group]], [[thm-relative-homology-of-consecutive-cw-skeleta]]).

[F5] For $p\ge1$, degree classifies based sphere self-maps, is an isomorphism $\pi_p(S^p)\cong\mathbb Z$, sends identity to $1$, and sends oriented pinch sum to addition ([[thm-based-sphere-maps-are-classified-by-geometric-degree]]).

## Proof

**Proof technique:** direct.

1.1 If $X=\varnothing$, all skeletal pairs are $(\varnothing,\varnothing)$. Their based cofiber is the cofiber of $*\to *$, hence a point, and [F3] gives $E_1^{p,q}=0$ for every $p,q$. There are no cells, so [F4] gives the zero Hom group. For any $X$ and $p<0$ the same argument applies. These cases are settled without taking the unbased quotient $\varnothing/\varnothing$. [F1, F3, F4, given]

1.2 Suppose now $X\ne\varnothing$ and $p\ge0$. For $p=0$, the cofiber of $*\hookrightarrow X^0_+$ is $X^0_+$ itself, which is the finite wedge of one $S^0$ for each vertex. For $p\ge1$, $X^{p-1}$ is nonempty since $X$ has a vertex. By [F1] the cofiber of $X^{p-1}_+\hookrightarrow X^p_+$ is based homotopy equivalent to $X^p_+/X^{p-1}_+=X^p/X^{p-1}$. This is a wedge of $p$-spheres: each supplied characteristic disk has its whole boundary collapsed to the single quotient vertex, and the quotient CW topology of [F2] is exactly the wedge topology. If there are no $p$-cells the quotient is a point. All comparisons commute with the quotient maps induced by cellular maps. [F1, F2, given]

1.3 We verify the degree action needed for cellular naturality directly. For $p\ge1$ let $P:S^p\to S^p\vee S^p$ be the oriented pinch and $r_1,r_2$ its two collapse projections. Each $r_iP$ is homotopic to identity (shrink the collapsed half of the sphere, or use its degree $1$ and [F5]). Under the wedge isomorphism [F3], a class with coordinates $(a,b)$ is $r_1^*a+r_2^*b$, since its two restrictions are $a,b$ and the off-diagonal composites are constant. Thus $P^*(a,b)=a+b$. For based self-maps $f,g$, their pinch sum therefore induces $(f+g)^*=f^*+g^*$. Constant maps induce zero because they factor through the point. By [F5], a degree-$d$ class is the $d$-fold sum of the identity class; the inverse class has pullback $-\mathrm{id}$ because its sum with identity is null. Hence every degree-$d$ self-map acts as multiplication by $d$, for positive, zero and negative $d$, in every reduced degree. [F3, F5, algebra]

2.1 Apply [F3] to step 1.2. Restriction to the finite wedge summands followed by inverse iterated suspension gives $E_1^{p,q}\cong\prod_{\alpha\in I_p}h^q(*)$. A homomorphism from the free cellular chain group is uniquely its values on the oriented cell basis [F4], so this is the required Hom group. Choose each sphere coordinate to match its oriented cell; independence of an orientation-preserving sphere coordinate change follows from [F5], since a degree-one self-map is based homotopic to identity for $p\ge1$. For vertices use the canonical generator of each singleton; if a negative generator was supplied, negate its coefficient coordinate. Empty cell sets give zero groups on both sides. [F3, F4, F5, step 1.1, step 1.2]

3.1 Let $f:X\to Y$ be cellular. For $p\ge1$ its skeletal quotient map is a based map between the sphere wedges of step 1.2. Under [F3], the matrix component from target cell $\beta$ to source cell $\alpha$ is the pullback of $r_\beta\bar f\iota_\alpha:S^p\to S^p$, where $\iota$ includes a summand and $r$ collapses the others: the insertion of one coefficient is $r_\beta^*$ and extraction is $\iota_\alpha^*$. By step 1.3 this component is multiplication by the integer degree $d_{\beta\alpha}$. The same integers are the cellular chain matrix of $f$, since those chains are relative homology [F4], and on the sphere quotients the matrix components are the same inclusions and collapses. To compare degree conventions explicitly, in ordinary reduced homology the pinch sends the sphere generator to the pair of generators and the fold adds them; thus a pinch sum acts by the sum of the integers, and identity acts by $1$. The classification [F5] therefore makes its integer degree exactly its action on top homology. The Hom pullback is therefore $(a_\beta)_\beta\mapsto(\sum_\beta d_{\beta\alpha}a_\beta)_\alpha$, exactly the reduced-theory pullback. For $p=0$, each vertex maps to a vertex and both formulas simply copy its target coordinate; changing chosen vertex signs conjugates both matrices by the same signs. Empty source, empty target when a map exists, and empty cell sets give the zero maps where appropriate. [F3, F4, F5, step 1.2, step 1.3, step 2.1]

4.1 A morphism of reduced theories commutes with maps and suspension by definition [F3]; hence it commutes with summand restriction and the inverse suspension identifications of step 2.1, acting on each coordinate by its homomorphism $h^q(*)\to k^q(*)$. Together with step 3.1 this proves both stated naturalities. Above the dimension of $X$ the skeletal quotient is a point and there are no cells. No dimension axiom, restriction on $q$, or compatibility between separately supplied connecting maps and suspension is needed for this first-page group calculation. [F3, step 2.1, step 3.1] ∎

## Source notes

Loizides, §2.1, Remark 2.2 and Lemma 2.3, and the opening of §3 (printed p.4) explain the degree-matrix action and wedge/suspension identification of the first page. The proof here includes negative degrees, empty spaces, the disjoint-basepoint convention at dimension zero, and the negative-degree-map argument explicitly. It uses the cofiber model of relative groups directly and does not invoke a converse reconstruction of all theory structure.
