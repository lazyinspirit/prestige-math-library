---
id: ex-cohomology-of-lens-spaces-from-uct
kind: example
title: Cohomology of lens spaces from UCT
status: draft
origin: pipeline
pipeline_run: phase-2-next-20
deps: [thm-topological-universal-coefficient-short-exact-sequence-for-cohomology, def-axiom-of-choice, thm-cellular-boundary-is-the-incidence-degree-matrix, thm-cellular-homology-computes-singular-homology, prop-cellular-maps-induce-cellular-chain-maps, lem-the-cellular-boundary-squares-to-zero, cor-homology-of-spheres, cor-integral-cohomology-detects-adjacent-homology-torsion]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Hatcher, Example 2.43, complete finite lens-space construction and boundaries, printed pages144–146
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf
---

## Example

Assume AC. For integers $p\ge1$ and $q$ with $\gcd(p,q)=1$, use the convention
$$L(p,q)=S^3/\langle\rho\rangle,\qquad\rho(z_1,z_2)=(\zeta z_1,\zeta^qz_2),\quad\zeta=e^{2\pi i/p}.$$
Its integral cohomology is $H^0=H^3=\mathbb Z$, $H^2=\mathbb Z/p$, $H^1=0$, and zero in all other degrees. In particular $p=1$ gives $S^3$ and $\mathbb Z/1=0$.

## Facts & Assumptions

[F1] [[thm-cellular-boundary-is-the-incidence-degree-matrix]] computes cellular boundary from incidence degree and endpoint difference; [[lem-the-cellular-boundary-squares-to-zero]] gives $d^2=0$.

[F2] [[thm-cellular-homology-computes-singular-homology]] and [[prop-cellular-maps-induce-cellular-chain-maps]] transfer cellular calculations and actual cellular maps to singular homology.

[F3] [[thm-topological-universal-coefficient-short-exact-sequence-for-cohomology]] gives UCT under [[def-axiom-of-choice]]. The explicit cyclic Hom/Ext computations in [[cor-integral-cohomology-detects-adjacent-homology-torsion]] give $\operatorname{Ext}^1(\mathbb Z/p,\mathbb Z)=\mathbb Z/p$, with zero Ext for free groups.

[F4] [[cor-homology-of-spheres]] gives the homology of $S^3$ for the separate case $p=1$.

## Proof

**Given:** $p,q$ as stated. For steps 1.1 through 4.1 assume $p>1$. Write $\theta=2\pi/p$.

1.1 The cyclic action is free: if $\rho^k$ fixes a point and $z_1\ne0$, then $p$ divides $k$; if $z_1=0$, then $z_2\ne0$ and $p$ divides $kq$, hence $k$ since $\gcd(p,q)=1$. The circle $A=\{(z_1,0):|z_1|=1\}$ is invariant and its quotient is a circle, explicitly by $z_1\mapsto z_1^p$. Give it one vertex and one oriented edge. Choose an integer $r$ with $rq\equiv1\pmod p$; it can be the least such integer in $0,\ldots,p-1$, so no selection principle is needed. The generator $\rho^r$ moves the argument of nonzero $z_2$ by $\theta$ modulo $2\pi$. [given]

2.1 A fundamental closed sector is the set of $(w,\sqrt{1-|w|^2}e^{it})$ with $|w|\le1$ and $0\le t\le\theta$. At $|w|=1$, all values of $t$ represent the same point of $A$. Thus the sector is $(D^2\times[0,\theta])/\sim$, collapsing each vertical interval over $\partial D^2$. The map sending its class to $(\operatorname{Re}w,\operatorname{Im}w,(2t/\theta-1)\sqrt{1-|w|^2})$ is a continuous bijection onto the unit $3$-ball. It is a homeomorphism by compactness and Hausdorffness. Its boundary consists of the two disk faces $t=0,\theta$, meeting in the rim $A$. In the orbit quotient, these faces are identified by $\rho^r$, and the rim is identified by the cyclic rotation on $A$. Every orbit outside the rim has a unique representative in the open sector, except that its two endpoint face representatives are identified. The quotient consequently attaches one open $2$-cell (the identified face interiors) and one open $3$-cell (the sector interior) to $A/\langle\rho\rangle$. These characteristic maps give the quotient topology: all spaces are finite compact quotients, and the orbit space is Hausdorff since finite disjoint orbits have disjoint invariant neighborhoods. This proves the claimed one-cell-per-degree CW structure in degrees zero through three. [step 1.1]

3.1 The attaching boundary of the face $t=0$ is its rim $|w|=1$, which maps to the quotient circle by $w\mapsto w^p$. This map has degree $p$, as can be checked without a winding-number assumption: subdivide its domain circle at the $p$th roots of unity, with oriented arcs $a_j$ in increasing angle. Each boundary is $v_{j+1}-v_j$, so the cellular $H_1$ generator is $\sum_j a_j$. In the target one-edge circle, the power map sends each arc to that edge with coefficient $+1$, since its angular parameter $t\mapsto 2\pi(j+t)/p$ maps to $t\mapsto2\pi t$ with the same orientation. Thus its cellular homology map multiplies by $p$, and [F2] identifies this as its singular degree. By [F1], orienting the face accordingly gives $d_2=p$. Also $d_1=0$ because the single edge has the same initial and terminal vertex. [F1, F2, step 1.1, step 2.1]

4.1 Since $d_2$ is multiplication by the nonzero integer $p$, it is injective. The identity $d_2d_3=0$ in [F1] forces $d_3=0$. The entire integral cellular complex is therefore $\mathbb Z\xrightarrow{0}\mathbb Z\xrightarrow{p}\mathbb Z\xrightarrow{0}\mathbb Z$ in degrees three down to zero. Its homology is $H_0=H_3=\mathbb Z$, $H_1=\mathbb Z/p$ and $H_2=0$, with no groups outside those degrees. This is the singular homology by [F2]. [F1, F2, step 2.1, step 3.1]

5.1 Apply [F3]. In degree zero evaluation gives $H^0=\mathbb Z$. In degree one both $\operatorname{Ext}^1(H_0,\mathbb Z)$ and $\operatorname{Hom}(H_1,\mathbb Z)$ vanish, so $H^1=0$. In degree two the Hom term is zero and the Ext term is $\mathbb Z/p$, giving $H^2=\mathbb Z/p$. In degree three the Ext term is zero and the Hom term is $\mathbb Z$, giving $H^3=\mathbb Z$. In degree four the only possible lower input is free $H_3$, whose Ext is zero; in all higher degrees both inputs vanish. Negative degrees are zero by the cochain convention. [F3, step 4.1]

6.1 For $p=1$ the group action is trivial and the space is $S^3$. Its free homology in degrees zero and three from [F4] gives, by the same UCT calculation, precisely the displayed answer with $\mathbb Z/1=0$. This case does not use a sector of angle $2\pi$ as an embedded ball. Negative or large $q$ cause no change: the action and the residue $r$ use only its class modulo $p$, and coprimality is exactly what step 1.1 needs. AC is inherited from [F3]; the finite quotient construction, the integer residue and the boundary calculations require none. The computation concerns additive cohomology and makes no claim that these groups determine the lens space up to homeomorphism. [F3, F4, step 1.1, step 5.1] ∎
