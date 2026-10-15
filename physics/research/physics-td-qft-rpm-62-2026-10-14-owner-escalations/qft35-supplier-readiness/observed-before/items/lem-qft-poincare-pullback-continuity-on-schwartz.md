---
id: lem-qft-poincare-pullback-continuity-on-schwartz
kind: lemma
title: Proper-orthochronous Poincaré pullbacks act continuously on Schwartz space
status: draft
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - def-qft-poincare-test-action
  - def-qft-positive-tempered-moments
  - def-schwartz-space-and-its-seminorms
  - def-schwartz-topology-and-convergence
dependency_roles:
  def-qft-poincare-test-action: mathematical-premise
  def-qft-positive-tempered-moments: mathematical-premise
  def-schwartz-space-and-its-seminorms: mathematical-premise
  def-schwartz-topology-and-convergence: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jens Mund, General Aspects of Relativistic Quantum Field Theory, lecture notes, DF-UFJF (2012), §2.1"
      url: https://www.ufjf.br/fisica/files/2022/03/AQFT.pdf
      locator: "PDF pp. 12–17: proper-orthochronous Poincaré pullback on test functions in the Wightman framework."
---

## Statement

For every $g\in P^\uparrow_+$, the pullback $T_gf(x)=f(g^{-1}x)$ of
[[def-qft-poincare-test-action]] maps $S=\mathcal S(\mathbb R^4;\mathbb C)$
continuously to itself. For each fixed $f\in S$, the map
$g\mapsto T_gf$ from $P^\uparrow_+$ to $S$ is continuous. Consequently,
$\alpha_g(f_1\otimes\cdots\otimes f_n):=T_gf_1\otimes\cdots\otimes T_gf_n$
extends algebraically to a unital star-automorphism of the algebraic tensor
test algebra [[def-qft-positive-tempered-moments]], and
$\alpha_g\alpha_h=\alpha_{gh}$. No topology on the algebraic direct sum is
asserted.

## Facts & Assumptions

**Given:** $P^\uparrow_+$ and $T_g$ as in [[def-qft-poincare-test-action]],
$S=\mathcal S(\mathbb R^4;\mathbb C)$, and the algebraic tensor test algebra
of [[def-qft-positive-tempered-moments]].

[F1] [[def-qft-poincare-test-action]]: $g=(\Lambda,a)$ acts by
$T_gf(x)=f(\Lambda^{-1}(x-a))$, and the group has its matrix/translation
topology.

[F2] [[def-schwartz-space-and-its-seminorms]]: the seminorms are
$p_{\alpha\beta}(f)=\sup_x|x^\alpha\partial^\beta f(x)|$.

[F3] [[def-schwartz-topology-and-convergence]]: neighborhoods constrain only
finitely many such seminorms.

[F4] [[def-qft-positive-tempered-moments]]: $T(S)$ has finite sums,
concatenation product, and the involution reverses tensor order and conjugates
the factors.

## Proof

1.1 Fix $g=(\Lambda,a)$. The affine chain rule expresses each
$\partial^\beta(T_gf)(x)$ as a finite sum
$c_{\beta\gamma}(\Lambda)(\partial^\gamma f)(\Lambda^{-1}(x-a))$, where
$|\gamma|=|\beta|$ and the coefficients are polynomials in the entries of
$\Lambda^{-1}$. Substituting $y=\Lambda^{-1}(x-a)$ gives $x=\Lambda y+a$;
expanding each monomial $x^\alpha$ therefore bounds every
$p_{\alpha\beta}(T_gf)$ by a finite sum of Schwartz seminorms of $f$ with
coefficients depending on $g$. Hence $T_gf\in S$ and $T_g:S\to S$ is a
continuous linear map. [F1, F2, algebra]

1.2 For $g$ near $e$, put $\varepsilon_g:=\|\Lambda^{-1}-I\|+|\Lambda^{-1}a|$
and $y_t:=(I+t(\Lambda^{-1}-I))x-t\Lambda^{-1}a$ for $0\le t\le1$. Choose
the neighborhood so $\|t(\Lambda^{-1}-I)\|<1/2$ for every $t$; the geometric
series for the inverse then gives $\|(I+t(\Lambda^{-1}-I))^{-1}\|\le2$. Thus
$1+|x|\le C(1+|y_t|)$ uniformly in $x,t,g$. Writing
$\delta_g(x):=(\Lambda^{-1}-I)x-\Lambda^{-1}a$, the fundamental theorem of
calculus gives
$$\partial^\beta f(y_1)-\partial^\beta f(x)=\int_0^1\sum_{j=1}^4\partial^{\beta+e_j}f(y_t)\,\delta_{g,j}(x)\,dt.$$
Here $|\delta_{g,j}(x)|\le\varepsilon_g(1+|x|)$. After multiplying by
$x^\alpha$, the weight comparison bounds the absolute value by
$C_{\alpha\beta}\varepsilon_g$ times a finite sum of seminorms
$p_{\gamma,\beta+e_j}(f)$ with $|\gamma|\le|\alpha|+1$: expand
$(1+|y_t|)^{|\alpha|+1}$ into finitely many coordinate monomials and use the
definition of each seminorm. In step 1.1 the chain-rule coefficients are
polynomials in $\Lambda^{-1}$ and tend to their identity coefficients as
$g\to e$; their differences are bounded by $C_{\alpha\beta}\varepsilon_g$,
while each remaining weighted derivative is bounded by finitely many
Schwartz seminorms using the same comparison. Therefore
$p_{\alpha\beta}(T_gf-f)\to0$ for every $\alpha,\beta$ as $g\to e$. By [F3]
this is convergence in the Schwartz topology. [F1, F2, F3, step 1.1, algebra]

2.1 For any $g_0$, the group law gives
$T_gf=T_{g_0}(T_{g_0^{-1}g}f)$. Step 1.2 and continuity of the fixed map
$T_{g_0}$ from step 1.1 show $T_gf\to T_{g_0}f$ as $g\to g_0$. Thus the
pullback is continuous in the group parameter everywhere. The universal
property of algebraic tensor products defines $\alpha_g$ on each tensor
degree; concatenation, conjugation, reversal, and
$T_gT_h=T_{gh}$ give the unital star-automorphism and action identities.
[F1, F4, step 1.1, step 1.2, algebra] \(\square\)
