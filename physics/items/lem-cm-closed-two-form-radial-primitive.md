---
id: lem-cm-closed-two-form-radial-primitive
kind: lemma
title: "A closed smooth two-form on a star-shaped domain has the radial primitive $\\alpha_x(v)=\\int_0^1 t\\,\\tau_{tx}(x,v)\\,dt$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 0
deps: [thm-poincare-lemma-for-differential-forms-on-star-shaped-domains, def-star-shaped-open-subset-of-rn, def-smooth-differential-k-form, def-closed-and-exact-differential-forms, thm-local-coordinate-formula-for-the-exterior-derivative, thm-differentiation-under-the-integral-sign-on-a-compact-rectangle, thm-newton-leibniz-with-interior-derivative, thm-chain-rule-for-total-derivatives, def-ck-euclidean-maps-and-diffeomorphisms, def-directional-and-partial-derivatives, def-metric-ball, def-interval, thm-heine-borel-rn, thm-continuous-image-of-a-compact-space-is-compact]
dependency_roles:
  thm-poincare-lemma-for-differential-forms-on-star-shaped-domains: mathematical-premise
  def-star-shaped-open-subset-of-rn: mathematical-premise
  def-smooth-differential-k-form: mathematical-premise
  def-closed-and-exact-differential-forms: mathematical-premise
  thm-local-coordinate-formula-for-the-exterior-derivative: mathematical-premise
  thm-differentiation-under-the-integral-sign-on-a-compact-rectangle: mathematical-premise
  thm-newton-leibniz-with-interior-derivative: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-metric-ball: mathematical-premise
  def-interval: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-continuous-image-of-a-compact-space-is-compact: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition, Theorem 17.14 and its proof (the homotopy formula gives the radial primitive of a closed form on a star-shaped domain)"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
    - title: "Nigel Hitchin, Differentiable Manifolds (2014), the Poincare lemma and the explicit radial contraction formula"
      url: "https://people.maths.ox.ac.uk/~joyce/Nairobi2019/Hitchin-DifferentiableManifolds.pdf"
verification:
  precheck: pass
---

## Statement

Let $n\ge1$, let $U\subseteq\mathbb R^n$ be an open set star-shaped with respect to $0$
([[def-star-shaped-open-subset-of-rn]]), and let $\tau$ be a smooth closed two-form on $U$
([[def-smooth-differential-k-form]], [[def-closed-and-exact-differential-forms]]). Write
$\tau=\sum_{i<j}\tau_{ij}\,dx^i\wedge dx^j$ with smooth coefficient functions $\tau_{ij}$, and extend
the coefficients by $\tau_{ji}:=-\tau_{ij}$ and $\tau_{ii}:=0$. Define
$\alpha:U\to(\mathbb R^n)^*$ by

$$\alpha_x(v):=\int_0^1 t\,\tau_{tx}(x,v)\,dt .$$

Then $\alpha$ is a smooth one-form on $U$, in coordinates

$$\alpha=\sum_{i=1}^n\alpha_i\,dx^i,\qquad \alpha_i(x)=\int_0^1 t\sum_{j=1}^n x^j\,\tau_{ji}(tx)\,dt ,$$

and $d\alpha=\tau$ on $U$. In particular every smooth closed two-form on a star-shaped
open subset of $\mathbb R^n$ is exact, with the displayed explicit primitive.

## Facts & Assumptions

**Given:** The open star-shaped set $U$, the smooth closed two-form $\tau$, and the coefficients $\tau_{ij}$ with $\tau_{ji}=-\tau_{ij}$, $\tau_{ii}=0$ ([[def-smooth-differential-k-form]], [[def-ck-euclidean-maps-and-diffeomorphisms]]).

[F1] Poincare lemma for differential forms ([[thm-poincare-lemma-for-differential-forms-on-star-shaped-domains]]): every closed smooth $k$-form on a star-shaped open domain is exact for $k\ge1$, and for centre $0$ one primitive is $\eta_x(v_1,\dots,v_{k-1})=\int_0^1 t^{k-1}\omega_{tx}(x,v_1,\dots,v_{k-1})\,dt$.

[F2] Differentiation under the integral sign on a rectangle ([[thm-differentiation-under-the-integral-sign-on-a-compact-rectangle]]): if $g$ is continuous on $[a,b]\times[c,d]$, if $x\mapsto g(x,t)$ is differentiable with continuous derivative $h$, then $G(x)=\int_c^d g(x,t)\,dt$ is differentiable with $G'(x)=\int_c^d h(x,t)\,dt$.

[F3] The fundamental theorem of calculus in the form $\int_a^b G'=G(b)-G(a)$ for $G$ continuous on $[a,b]$, differentiable on $(a,b)$, with Riemann integrable derivative ([[thm-newton-leibniz-with-interior-derivative]]).

[F4] Chain rule, partial derivatives and coordinate formula for the exterior derivative ([[thm-chain-rule-for-total-derivatives]], [[def-directional-and-partial-derivatives]], [[thm-local-coordinate-formula-for-the-exterior-derivative]]): for a smooth curve $t\mapsto tx$ one has $\frac{d}{dt}\tau_{ki}(tx)=\sum_j x^j\,\partial_j\tau_{ki}(tx)$, and for $\alpha=\sum_i\alpha_i\,dx^i$ the coefficients of $d\alpha$ are $(d\alpha)_{ki}=\partial_k\alpha_i-\partial_i\alpha_k$.

## Proof

**Proof technique:** direct; first specialise the published $k$-form Poincare lemma to $k=2$, then verify the displayed coefficient formula by differentiating under the integral sign and using the fundamental theorem of calculus.

1.1 Specialise [F1] to $k=2$ and $\omega=\tau$: since $\tau$ is a smooth closed two-form on the star-shaped domain $U$ with centre $0$, it is exact and the one-form $\eta_x(v)=\int_0^1 t\,\tau_{tx}(x,v)\,dt$ is a smooth primitive with $d\eta=\tau$; this $\eta$ is the displayed $\alpha$, so the claim holds. [F1, given]

1.2 Independent coefficient verification of the display: fix an arbitrary $x_0\in U$. The radial segment $\{tx_0:0\le t\le1\}$ is compact and contained in $U$. For each $t$ choose a product neighbourhood of $(t,x_0)$ mapped into $U$ by $(s,x)\mapsto sx$; finitely many such neighbourhoods cover $[0,1]\times\{x_0\}$, and intersection of their $x$-neighbourhoods contains a ball $B(x_0,r)$ whose closed ball still lies in that intersection. Hence $tx\in U$ for every $x\in\overline B(x_0,r)$ and $t\in[0,1]$. On the compact parameter set $\overline B(x_0,r)\times[0,1]$ the integrand $(x,t)\mapsto t\,\tau_{tx}(x,\cdot)$ and its $x$-derivatives are continuous, so [F2], applied to the one-variable functions $s\mapsto x+s\,e_k$ along the coordinate directions $e_k$, permits differentiation under the integral sign in every partial derivative, and $\partial_k\alpha_i(x)-\partial_i\alpha_k(x)=\int_0^1\bigl[2t\,\tau_{ki}(tx)+t^2\sum_j x^j(\partial_k\tau_{ji}-\partial_i\tau_{jk})(tx)\bigr]dt$. Closedness of $\tau$ reads $\partial_k\tau_{ji}+\partial_j\tau_{ik}+\partial_i\tau_{kj}=0$, which with $\tau_{kj}=-\tau_{jk}$ gives $\partial_k\tau_{ji}-\partial_i\tau_{jk}=\partial_j\tau_{ki}$; hence the bracket equals $2t\,\tau_{ki}(tx)+t^2\frac{d}{dt}\tau_{ki}(tx)=\frac{d}{dt}\bigl[t^2\tau_{ki}(tx)\bigr]$ by [F4], and [F3] gives $\partial_k\alpha_i(x)-\partial_i\alpha_k(x)=\tau_{ki}(x)$; by [F4] this says $d\alpha=\tau$ near the arbitrary point $x_0$, hence on all of $U$. [F2, F3, F4, algebra]

2.1 By step 1.1 the displayed $\alpha$ is a smooth one-form with $d\alpha=\tau$, and step 1.2 confirms the same identity coefficientwise for that explicit formula; both conclusions agree, so $\alpha$ is a smooth primitive of $\tau$ on $U$. [step 1.1, step 1.2] ∎

## Remarks

- The coefficient computation of step 1.2 is the explicit form in which the local action-angle consumer uses this lemma: the two-form there is the pullback $\sigma^*\omega$ of the symplectic form along a section, and the primitive produced is a one-form on a star-shaped ball of the action coordinates.
- The published [[thm-liouville-arnold-action-angle-theorem]] cites, at its step 5.2, the one-form Poincare lemma [[thm-poincare-lemma-for-star-shaped-domains]] for a closed two-form. That direct supplier use is inadequate for the two-form; this lemma records the two-form case at $k=2$ of [F1] with its explicit primitive, and the local theorem [[thm-cm-liouville-arnold-action-angle-repaired]] uses it instead. No published or imported item is edited by this page.
