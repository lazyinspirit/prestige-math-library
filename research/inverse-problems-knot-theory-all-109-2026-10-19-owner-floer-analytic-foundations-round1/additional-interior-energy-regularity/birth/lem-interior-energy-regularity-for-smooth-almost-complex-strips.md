---
id: lem-interior-energy-regularity-for-smooth-almost-complex-strips
kind: lemma
title: "Interior small-energy gradient control for almost complex maps"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-countable-choice, lem-heinz-small-energy-mean-value-estimate]
dependency_level: 1
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Dusa McDuff and Dietmar Salamon, J-holomorphic Curves and Symplectic Topology, §4.3"
      url: "https://bookstore.ams.org/coll-52"
---

## Statement

Assume Countable Choice. Let $(X,g)$ be a compact smooth Riemannian manifold without boundary, and let $J(s,t,x)$ be a smooth family of almost complex structures on $X$, defined for $(s,t)$ in an open subset $U\subset\mathbb R^2$. Suppose the norms of $J$ and its derivatives through total order two, using the Levi-Civita connection in $X$ and ordinary derivatives in $s,t$, are uniformly bounded. Then there are constants $a,b\ge0$, depending only on these bounds and $g$, such that every smooth solution
$$u_s+J(s,t,u)u_t=0$$
has energy density $e=(|u_s|_g^2+|u_t|_g^2)/2$ satisfying
$$\Delta e\ge-ae^2-be.$$
Consequently there are $r_0,\varepsilon_0>0$ depending only on the same data such that, whenever $\overline B_r(z)\subset U$, $0<r\le r_0$, and $\int_{B_r(z)}e<\varepsilon_0$, one has
$$|du(z)|_g^2\le\frac{32}{3\pi r^2}\int_{B_r(z)}e.$$
These are interior estimates for smooth actual solutions. No boundary estimate or higher-derivative compactness is asserted.

## Statement references

[[def-countable-choice]]

## Facts & Assumptions

**Given:** Countable Choice, the compact target, family, uniform bounds, and smooth solution in the statement.

[F1] If a nonnegative $C^2$ density satisfies $\Delta e\ge-ae^2-be$ on a disk, $br^2\le1$, and $a\int e<3\pi/64$, then its center value is at most $16/(3\pi r^2)$ times that integral, by [[lem-heinz-small-energy-mean-value-estimate]].

## Proof

1.1 Use the pullback Levi-Civita connection on $u^*TX$ and put $v=u_s$. The equation is equivalent to $u_t=Jv$, because $J^2=-I$. Torsion-freeness gives $\nabla_tu_s=\nabla_su_t$. Differentiating $u_t=Jv$ in both directions and using the chain rule therefore gives the following exact tension identity, where partial derivatives of $J$ mean derivatives with $x$ held fixed:
$$\tau:=\nabla_su_s+\nabla_tu_t=(\nabla_{Jv}J)v+J(\nabla_vJ)v+(\partial_tJ+J\partial_sJ)v.$$
Indeed $\nabla_t(Jv)=(\partial_tJ+\nabla_{u_t}J)v+J\nabla_tv$ and $\nabla_tv=\nabla_s(Jv)=(\partial_sJ+\nabla_vJ)v+J\nabla_sv$; the last term $J^2\nabla_sv$ cancels $\nabla_su_s$. Thus $\tau=Q(s,t,u)(v,v)+R(s,t,u)v$, with $Q$ bilinear and $R$ linear, and with uniformly bounded coefficients and first derivatives by the assumed order-two bounds. [given, construct, algebra]

2.1 Let $H=|\nabla du|$ and $P=|du|$. Differentiating the last expression for $\tau$ in a source direction gives a uniform bound
$$|\nabla\tau|\le c\bigl(P^3+P^2+P+(P+1)H\bigr).$$
For example differentiation of $Q(v,v)$ gives terms with coefficient derivatives times $|v|^2$, bounded by $c(P+1)P^2$, and terms bounded by $cPH$; differentiation of $Rv$ gives terms bounded by $c(P+1)P+cH$. This accounts for every source derivative, including the explicit domain dependence of $J$. A single $c$ works for all maps because its ingredients are the fixed tensor bounds. [step 1.1, algebra]

3.1 The needed energy identity follows by metric compatibility and commuting covariant derivatives. For source indices $\alpha,\beta\in\{s,t\}$, first differentiate $e=\frac12\sum_\alpha\langle u_\alpha,u_\alpha\rangle$ twice to obtain $\Delta e=H^2+\sum_{\alpha,\beta}\langle\nabla_\beta\nabla_\beta u_\alpha,u_\alpha\rangle$. Torsion-freeness replaces $\nabla_\beta u_\alpha$ by $\nabla_\alpha u_\beta$, and commuting the remaining derivatives replaces their sum by $\nabla_\alpha\tau$ plus curvature terms $R^X(u_\beta,u_\alpha)u_\beta$, with a sign determined by the curvature convention and irrelevant to the estimate. Compactness bounds their absolute contribution by $c_1P^4$. Thus $$\Delta e\ge H^2-|\nabla\tau|P-c_1P^4.$$ Using step 2.1 and $P^3\le(P^4+P^2)/2$, this is bounded below by $H^2-c_2(P^4+P^2)-c_3(P^2+P)H$. Finally $c_3(P^2+P)H\le H^2/2+c_4(P^4+P^2)$ by the elementary square inequality. Discard the remaining nonnegative $H^2/2$ and use $P^2=2e$ to obtain $\Delta e\ge-ae^2-be$ for uniform $a,b\ge0$. [step 1.1, step 2.1, algebra]

4.1 Set $r_0=1/\sqrt{\max\{b,1\}}$ and $\varepsilon_0=3\pi/(128\max\{a,1\})$. Then $r\le r_0$ implies $br^2\le1$, and $\int e<\varepsilon_0$ implies $a\int e<3\pi/64$. Smoothness makes $e$ a nonnegative $C^2$ function on a neighborhood of the closed disk. Apply [F1] to step 3.1 and multiply its conclusion by two, since $|du(z)|^2=2e(z)$. This proves the gradient bound, with constants independent of the chosen solution and disk. [F1, step 3.1, algebra] ∎
