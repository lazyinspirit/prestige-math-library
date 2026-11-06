---
id: lem-gts-positive-energy-gap-on-a-fixed-closed-domain
kind: lemma
title: Positive energy gap for nonconstant curves on a fixed closed domain
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
proof_strategy: direct
axiom_strength: ZF + Countable Choice inherited from the local epsilon-regularity supplier.
deps:
  - def-countable-choice
  - lem-interior-energy-regularity-for-smooth-almost-complex-strips
dependency_roles:
  def-countable-choice: mathematical-premise
  lem-interior-energy-regularity-for-smooth-almost-complex-strips: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Aleksey Zinger, Notes on J-Holomorphic Maps
      url: https://arxiv.org/pdf/1706.00331v1
      locator: Small-energy estimates and energy quantization in §§4–5; the fixed-source gap below is proved directly from the local derivative estimate.
dependency_level: 2
---

## Statement

Assume Countable Choice. Fix a compact smooth almost-complex manifold $(X,J)$, a Riemannian target metric $g$, and a connected compact closed Riemann surface $(\Sigma,j)$ with a compatible source metric $h$. There exists $\hbar>0$, depending only on these fixed data, such that every nonconstant smooth $J$-holomorphic map $u:\Sigma\to X$ satisfies
$$E_g(u)=\frac12\int_\Sigma|du|_{g,h}^2\,d\mathrm{vol}_h\ge\hbar.$$
No symplectic form or area identity is assumed.

## Statement references

[[lem-interior-energy-regularity-for-smooth-almost-complex-strips]]

## Facts & Assumptions

**Given:** The fixed compact source and target data and Countable Choice.

[F1] The local interior epsilon-regularity theorem supplies uniform constants $r_0,\varepsilon_0$ and the pointwise gradient bound in terms of the Dirichlet energy on a coordinate disk, for any smooth almost-complex structure with bounded derivatives on a compact target. Its proof uses no boundary condition. [[lem-interior-energy-regularity-for-smooth-almost-complex-strips]]

[A1] Countable Choice is assumed only through [F1]. [[def-countable-choice]]

## Proof

1.1 If the target is empty or zero-dimensional, no nonconstant map from the connected source exists and any positive gap suffices. Otherwise cover the fixed compact source by finitely many conformal coordinate disks and smaller concentric disks, using a radius no larger than the $r_0$ in [F1]. On their compact closures the fixed conformal metric factors have positive finite upper and lower bounds. Energy is conformally invariant in two source dimensions. Consequently there are $\varepsilon>0$ and $C>0$ such that $E_g(u)<\varepsilon$ implies the global estimate $\sup_\Sigma|du|_{g,h}\le C\sqrt{E_g(u)}$: apply [F1] at each point on a disk of a fixed smaller radius in one of the finitely many charts, and use the finite metric comparison constants. [F1, A1, given, construct, algebra]

1.2 In target coordinates the autonomous equation is $u_x+J(u)u_y=0$. Differentiating in $x$ and $y$ and using $J^2=-I$ gives $$u_{xx}+u_{yy}=-(dJ(u)u_x)u_y+J(u)(dJ(u)u_y)u_y.$$ Thus on a relatively compact target chart $|\Delta u|\le C_0|du|^2$ with a uniform coefficient constant. For a coordinate center $a$ the function $f=|u-a|^2$ therefore satisfies $\Delta f\ge(2-2C_0|u-a|)|du|^2$. Choose a smaller coordinate ball so $2C_0|u-a|\le1$. A finite cover of compact $X$, with smaller chart neighborhoods inside the original ones, gives one target metric radius $\delta>0$ such that every metric ball $B_g(p,\delta)$ is contained in such a coordinate ball centered at the coordinates of $p$, with this inequality. If a closed-source map has image in that ball, integrate the inequality against its conformal source metric: the integral of its Laplacian is zero on the closed surface, by integration by parts in finitely many charts with a finite smooth partition of unity (the partition-derivative terms cancel), whereas the nonnegative right side vanishes only if $du=0$. Such a map is constant. [given, construct, algebra]

2.1 Let $D$ be a finite upper bound for lengths of source paths joining any two points of the connected compact Riemannian surface. To construct such a bound without a completeness theorem, choose finitely many smaller coordinate balls covering the source and larger relatively compact coordinate balls containing their closures. Their intersection graph is connected, since otherwise their two disjoint unions would disconnect the source. Choose one joining point for each edge of a finite spanning tree. Straight coordinate segments within a larger coordinate ball have a uniform finite length bound; concatenating them along the finite tree joins arbitrary source points with one uniform bound $D$. If $E_g(u)<\varepsilon$, step 1.1 bounds the diameter of its image by $CD\sqrt{E_g(u)}$. Choose $$\hbar=\min\left\{\frac{\varepsilon}{2},\frac{\delta^2}{4C^2\max\{D,1\}^2}\right\}>0.$$ Energy less than $\hbar$ puts the image inside $B_g(u(z_0),\delta)$ for any fixed $z_0$, so step 1.2 makes the map constant. The contrapositive proves the claimed gap. This is a fixed-domain gap and is not asserted uniform over degenerating source structures. [step 1.1, step 1.2, construct, algebra] ∎
