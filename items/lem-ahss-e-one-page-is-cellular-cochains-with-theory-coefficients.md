---
id: lem-ahss-e-one-page-is-cellular-cochains-with-theory-coefficients
kind: lemma
title: The AHSS E-one page is cellular cochains with theory coefficients
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-skeletal-filtration-for-generalized-cohomology, def-coefficient-groups-of-a-generalized-cohomology-theory, def-reduced-generalized-cohomology-theory, prop-reduced-and-unreduced-generalized-cohomology-theories-correspond, lem-cw-quotients-and-collapse-of-a-contractible-subcomplex, lem-cofiber-of-a-based-cofibration-is-equivalent-to-the-quotient, def-wedge-of-pointed-spaces, def-oriented-cellular-chain-group]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Yiannis Loizides, The Atiyah–Hirzebruch Spectral Sequence, §3, printed pp. 4–6"
      url: https://math.gmu.edu/~yloizide/Atiyah-Hirzebruch.pdf
      locator: "§3, E-one page, printed pp. 4–6"
---

## Statement

Let $X$ be a finite CW complex with a chosen set of cells and orientations, let
$h$ be the CW-pair theory of a reduced generalized cohomology theory
$\widetilde h$, and let $E_1^{p,q}=h^{p+q}(X^p,X^{p-1})$ be the first page of
the skeletal exact couple (with $X^p=\varnothing$ for every $p<0$). Then for every $p,q$ there
is a natural isomorphism
$$E_1^{p,q}\cong C^p_{\mathrm{cell}}\bigl(X;h^q(*)\bigr) =\operatorname{Hom}\bigl(C_p^{\mathrm{cell}}(X),h^q(*)\bigr),$$
where $C_p^{\mathrm{cell}}(X)$ is the free abelian cellular chain group on the
$p$-cells and the right-hand Hom group is the cellular cochain group with
coefficients in the coefficient group $h^q(*)
=\widetilde h^q(S^0)$ of
[[def-coefficient-groups-of-a-generalized-cohomology-theory]]. The identification
is induced by the wedge decomposition of $X^p/X^{p-1}$ and the suspension
isomorphisms; it is functorial in the coefficient group and compatible with
cellular maps after the induced cellular chain maps are fixed.

## Facts & Assumptions

[F1] For $p\geq1$, collapsing $X^{p-1}$ presents the quotient $X^p/X^{p-1}$ as the wedge of the $p$-spheres belonging to the $p$-cells, and $X^0$ is a finite discrete set, that is, a finite wedge of $0$-spheres ([[lem-cw-quotients-and-collapse-of-a-contractible-subcomplex]], [[def-wedge-of-pointed-spaces]]).

[F2] For $A\ne\varnothing$ the pair group of the associated CW-pair theory is $h^n(X^p,X^{p-1})\cong\widetilde h^n(X^p/X^{p-1})$, and $h^n(X^0,\varnothing)=\widetilde h^n(X^0_+)$, the identification being natural ([[prop-reduced-and-unreduced-generalized-cohomology-theories-correspond]], [[lem-cofiber-of-a-based-cofibration-is-equivalent-to-the-quotient]]).

[F3] The reduced theory satisfies the wedge axiom, so for a finite wedge the summand inclusions induce $\widetilde h^n(\bigvee_\alpha S^p) \cong\prod_\alpha\widetilde h^n(S^p)=\bigoplus_\alpha\widetilde h^n(S^p)$ ([[def-reduced-generalized-cohomology-theory]]).

[F4] Iterated suspension identifies $\widetilde h^{p+q}(S^p)\cong h^q(*)$ for every $p\geq0$ ([[def-coefficient-groups-of-a-generalized-cohomology-theory]]).

[F5] The cellular $p$-chains are the free abelian group on the oriented $p$-cells, and $\operatorname{Hom}(\bigoplus_\alpha\mathbb Z,G)\cong \prod_\alpha G$ by the dual basis ([[def-oriented-cellular-chain-group]]).

## Proof

**Proof technique:** direct.

**Given:** A finite CW complex $X$ with chosen cells and orientations, integers $p,q$, and the skeletal exact-couple term $E_1^{p,q}=h^{p+q}(X^p,X^{p-1})$.

1.1 For $p<0$ both skeleta are empty, so $E_1^{p,q}=h^{p+q}(\varnothing,\varnothing)=0$ by the pair exactness axiom, while $C_p^{\mathrm{cell}}(X)=0$ and hence the cellular cochain group is zero. [F2, F5, given]

1.2 For $p\geq1$ the quotient $X^p/X^{p-1}$ is the finite wedge $\bigvee_{\alpha\in I_p}S^p_\alpha$ indexed by the $p$-cells, and for $p=0$ the space $X^0$ with a disjoint basepoint is the finite wedge $\bigvee_{\alpha\in I_0}S^0$; both statements are the cellwise description of the quotient. [F1, given]

1.3 Substituting the cellwise quotient description into the pair-to-quotient identification of [F2] gives $E_1^{p,q}\cong\widetilde h^{p+q}\bigl(\bigvee_{\alpha\in I_p}S^p_\alpha\bigr)$ for $p\geq1$, and for $p=0$ gives $h^{q}(X^0,\varnothing)\cong\widetilde h^{q}(X^0_+)=\widetilde h^{q}\bigl(\bigvee_{\alpha\in I_0}S^0\bigr)$, so the same formula holds for every $p\ge0$. [F1, F2, given]

2.1 For $p\ge0$, the wedge axiom [F3] identifies $\widetilde h^{p+q}\bigl(\bigvee_{\alpha\in I_p}S^p_\alpha\bigr)$ with the direct sum $\bigoplus_{\alpha\in I_p}\widetilde h^{p+q}(S^p_\alpha)$. [F3, step 1.3]

2.2 Iterated suspension [F4] identifies each summand $\widetilde h^{p+q}(S^p_\alpha)$ with the coefficient group $h^q(*)$. [F4, step 1.3]

3.1 For $p\ge0$, combining steps 2.1 and 2.2 gives $E_1^{p,q}\cong\bigoplus_{\alpha\in I_p}h^q(*)$, and the dual-basis identification of [F5] turns this direct sum into $\operatorname{Hom}(C_p^{\mathrm{cell}}(X),h^q(*))=C^p_{\mathrm{cell}}(X;h^q(*))$; for $p<0$ the same formula is the zero isomorphism of step 1.1. Each summand records the evaluation of the class on the oriented $p$-cell, and the identification is functorial in $h^q(*)$ and in the cellwise decomposition. [F5, step 1.1, step 2.1, step 2.2, algebra]

4.1 Steps 1.1, 1.3 and 3.1 give the asserted natural isomorphism $E_1^{p,q}\cong C^p_{\mathrm{cell}}(X;h^q(*))$, with the stated compatibility for cellular maps following from naturality of [F2] and of the wedge and suspension identifications. [step 1.1, step 1.3, step 3.1] ∎

## Source notes

Compare [Loizides](https://math.gmu.edu/~yloizide/Atiyah-Hirzebruch.pdf), §3, printed pp. 4–6, where $E_1^{p,q}=h^{p+q}(X^p/X^{p-1})=\bigoplus_{I_p}h^q$ and the quotient is identified with the wedge of the $p$-cells.
