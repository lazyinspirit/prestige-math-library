---
id: lem-tangent-space-of-affine-minkowski-space-is-v
kind: lemma
title: "The tangent space of the affine Minkowski model at any event is canonically V"
status: draft
origin: session
domain: mathematics
dependency_level: 7
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps: [def-sr-affine-minkowski-model, lem-affine-minkowski-charts-form-a-smooth-atlas, def-derivation-at-a-point-and-tangent-space, thm-coordinate-derivations-form-a-basis-of-the-tangent-space, thm-chain-rule-for-total-derivatives, def-ck-and-multi-index-notation-in-several-variables, def-c-r-and-smooth-maps-between-smooth-manifolds, thm-continuous-partial-derivatives-imply-total-differentiability, def-inertial-frame-and-inertial-chart, def-linear-isomorphism-and-invertible-linear-map, thm-algebra-of-derivatives, prop-identity-maps-and-composites-of-smooth-maps-are-smooth, def-germ-of-a-smooth-function-at-a-point]
dependency_roles:
  def-sr-affine-minkowski-model: mathematical-premise
  lem-affine-minkowski-charts-form-a-smooth-atlas: mathematical-premise
  def-derivation-at-a-point-and-tangent-space: mathematical-premise
  thm-coordinate-derivations-form-a-basis-of-the-tangent-space: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-ck-and-multi-index-notation-in-several-variables: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  thm-continuous-partial-derivatives-imply-total-differentiability: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-linear-isomorphism-and-invertible-linear-map: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  prop-identity-maps-and-composites-of-smooth-maps-are-smooth: mathematical-premise
  def-germ-of-a-smooth-function-at-a-point: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 1 pp. 2-7 (PDF pp. 9-14)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), sections 2.1-2.2 pp. 25-28 (PDF pp. 26-29); Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Statement

Let $(A,V,\eta,C^+)$ be an oriented time-oriented affine Minkowski space with
the smooth structure of [[lem-affine-minkowski-charts-form-a-smooth-atlas]], and
let $p\in A$. A smooth germ at $p$ is the equivalence class of a smooth real function on an
open neighbourhood of $p$, where representatives agreeing on a smaller
neighbourhood are equivalent ([[def-germ-of-a-smooth-function-at-a-point]]).
For such a germ $[f]$ define

$$\Phi_p(v)([f]):=\frac{\mathrm d}{\mathrm dt}\Bigr|_{t=0}f(p+tv),\qquad v\in V .$$

Then $\Phi_p:V\to T_pA$ is a linear isomorphism of $V$ onto the tangent space
$T_pA$; in particular $T_pA$ is canonically identified with $V$, independently
of any chart. If $x$ is an inertial chart and
$v=v^0e_0+v^1e_1+v^2e_2+v^3e_3$, then the coordinate derivations satisfy
$\Phi_p(v)=\sum_av^a\partial_a|_p$.

## Facts & Assumptions

**Given:** An event $p$ of $A$, an inertial chart $x$ with frame $(o;e_0,e_1,e_2,e_3)$ and $E(u)=\sum_au^ae_a$, and the map $\Phi_p$ of the Statement.

[L1] The tangent space $T_pA$ is the set of derivations at $p$, i.e. of $\mathbb R$-linear maps $v:C^\infty_p(A)\to\mathbb R$ satisfying $v([f][g])=f(p)v([g])+g(p)v([f])$ ([[def-derivation-at-a-point-and-tangent-space]]).

[L2] A smooth germ at $p$ has a coordinate representative smooth near $x(p)$, and composition with smooth maps is smooth: for a smooth curve $c:(-\varepsilon,\varepsilon)\to A$ through $p$ and a smooth germ $[f]$, the map $t\mapsto f(c(t))$ is smooth near $0$ ([[def-c-r-and-smooth-maps-between-smooth-manifolds]], [[def-ck-and-multi-index-notation-in-several-variables]], [[prop-identity-maps-and-composites-of-smooth-maps-are-smooth]]).

[L3] If a map $g$ between open subsets of Euclidean space has all partial derivatives continuous at $a$, then $g$ is totally differentiable at $a$ and $Dg(a)$ is the linear map with matrix the Jacobian of $g$ at $a$ ([[thm-continuous-partial-derivatives-imply-total-differentiability]]).

[L4] If $g$ is totally differentiable at $a$ and $h$ at $g(a)$, then $D(h\circ g)(a)=Dh(g(a))\circ Dg(a)$ ([[thm-chain-rule-for-total-derivatives]]).

[L7] Sum and scalar-multiple derivatives are linear ([[thm-algebra-of-derivatives]], claims 1 and 2). Let $A\subseteq\mathbb R$, $c$ a limit point of $A$, and $f,g$ differentiable at $c$; then $fg$ is differentiable at $c$ with $(fg)'(c)=f'(c)g(c)+f(c)g'(c)$ (the same source, claim 3).

[L5] The coordinate derivations $\partial_0|_p,\partial_1|_p,\partial_2|_p,\partial_3|_p$ of a smooth chart form a basis of $T_pA$ ([[thm-coordinate-derivations-form-a-basis-of-the-tangent-space]]).

[L6] In an inertial chart $x$, the affine structure gives $x(p+tv)=x(p)+tu$ with $u=E^{-1}(v)$ for every $v\in V$, and $E:\mathbb R^4\to V$ is a linear isomorphism ([[def-inertial-frame-and-inertial-chart]], [[def-linear-isomorphism-and-invertible-linear-map]]).

## Proof

1.1 Fix $v\in V$ and a smooth germ $[f]$ at $p$. By [L6] the curve $c(t):=p+tv$ has coordinate representation $x(c(t))=x(p)+tu$ with $u=E^{-1}(v)$, a smooth curve in $\mathbb R^4$; hence $c$ is a smooth curve through $p$ in the chart $x$, and $t\mapsto f(c(t))$ is smooth near $0$ by [L2], so its derivative at $0$ exists. If $g$ agrees with $f$ near $p$, then $f\circ c$ and $g\circ c$ agree near $0$, so the derivative depends only on the germ $[f]$; hence $\Phi_p(v)([f])$ is a well-defined real number. [L2, L6]

2.1 With $u=E^{-1}(v)=(u^0,u^1,u^2,u^3)$, set $F:=f\circ x^{-1}$, the smooth coordinate representative of $[f]$ near $x(p)$ [L2]. Then $f(c(t))=F(x(p)+tu)$ for $t$ near $0$, so by the chain rule [L4] applied to $t\mapsto x(p)+tu$ and to $F$, whose total derivative at $x(p)$ has matrix the Jacobian by [L3], $\Phi_p(v)([f])=\frac{\mathrm d}{\mathrm dt}\bigr|_0F\bigl(x(p)+tu\bigr)=D F(x(p))\cdot u=\sum_{a=0}^3u^a\partial_aF(x(p))$. [step 1.1, L2, L3, L4, algebra]

3.1 $\Phi_p$ is linear in $v$: by step 2.1 the value $\Phi_p(v)([f])=\sum_au^a\partial_aF(x(p))$ is a linear function of $u=E^{-1}(v)$, and $E^{-1}$ is linear by [L6]. [step 2.1, L6, algebra]

3.2 $\Phi_p(v)$ is a derivation at $p$: it is $\mathbb R$-linear in the germ because the sum and scalar-multiple derivative rules of [L7] apply to $t\mapsto f(p+tv)$ near $0$. For smooth germs $[f],[g]$, the coordinate representatives satisfy $((fg)\circ x^{-1})=(f\circ x^{-1})(g\circ x^{-1})$, so the one-variable product rule [L7] applied to the differentiable functions $t\mapsto F(y+t\mathbf e_a)$ and $t\mapsto G(y+t\mathbf e_a)$, where $y=x(p)\in\mathbb R^4$ and $\mathbf e_a\in\mathbb R^4$ is the $a$-th standard coordinate vector gives the product rule for the partial derivatives: $\partial_a((fg)\circ x^{-1})(x(p))=f(p)\partial_a(g\circ x^{-1})(x(p))+g(p)\partial_a(f\circ x^{-1})(x(p))$, since $f(x^{-1}(x(p)))=f(p)$ and likewise for $g$; substituting into step 2.1 gives $\Phi_p(v)([f][g])=f(p)\Phi_p(v)([g])+g(p)\Phi_p(v)([f])$, so $\Phi_p(v)\in T_pA$ by [L1]. [step 2.1, L1, L2, L7, algebra]

3.3 $\Phi_p$ is injective: suppose $\Phi_p(v)=0$ with coordinate vector $u=E^{-1}(v)$. Applying $\Phi_p(v)$ to the germ of the coordinate function $x^a$ gives, by step 2.1, $\Phi_p(v)([x^a])=\sum_bu^b\partial_b(x^a\circ x^{-1})(x(p))=\sum_bu^b\delta^a_b=u^a$; hence $u=0$, and since $E^{-1}$ is injective by [L6], $v=0$. [step 2.1, L6, algebra]

4.1 $\Phi_p$ carries the basis $(e_0,e_1,e_2,e_3)$ of $V$ to the coordinate derivations: for $v=e_a$ one has $u=E^{-1}(e_a)=(\delta^a_b)_b$ by [L6], so step 2.1 gives $\Phi_p(e_a)([f])=\partial_aF(x(p))=\partial_a|_p([f])$ for every smooth germ, that is, $\Phi_p(e_a)=\partial_a|_p$. By [L5] the derivations $\partial_a|_p$ form a basis of $T_pA$, so the linear map $\Phi_p$ carries a basis of $V$ to a basis of $T_pA$; hence $\Phi_p$ is surjective (its image contains a basis) and injective by step 3.3, so it is a linear isomorphism $V\to T_pA$. [step 2.1, step 3.1, step 3.3, L5, L6]

5.1 Finally, let $v=\sum_av^ae_a$; then $u=E^{-1}(v)=(v^0,v^1,v^2,v^3)$, so step 2.1 gives $\Phi_p(v)([f])=\sum_av^a\partial_aF(x(p))$, that is, $\Phi_p(v)=\sum_av^a\partial_a|_p$. The construction uses only the affine structure $p+tv$ and the smooth structure of the model, both fixed independently of any choice of chart, so the isomorphism $\Phi_p$ is canonical. [step 4.1, L6, algebra] ∎
