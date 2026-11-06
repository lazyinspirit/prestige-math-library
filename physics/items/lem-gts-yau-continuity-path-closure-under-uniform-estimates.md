---
id: lem-gts-yau-continuity-path-closure-under-uniform-estimates
kind: lemma
title: "Closure of the Calabi continuity path under uniform estimates"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
domain: mathematics
library: physics
category: string-theory
axiom_strength: "ZF + AC; sequential compactness is used for a countable diagonal subsequence."
deps:
  - def-gts-kahler-class-canonical-bundle-and-ricci-form
  - def-axiom-of-choice
  - cor-real-and-euclidean-vector-valued-ascoli-arzela
dependency_roles:
  def-gts-kahler-class-canonical-bundle-and-ricci-form: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  cor-real-and-euclidean-vector-valued-ascoli-arzela: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry, author manuscript (2012)"
      url: "https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf"
      locator: "Chapter VIII §6, printed pp. 378–379, for the fixed Kähler and volume-form conventions used in the continuity path."
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
---

## Statement

Let $(X,\omega_0)$ be a compact connected Kähler $n$-fold, $n\ge1$. Fix finitely many smooth charts $\kappa_\nu:U_\nu\to V_\nu\subseteq\mathbb R^{2n}$ and closed Euclidean balls $D_\nu\Subset V_\nu$ such that the sets $\kappa_\nu^{-1}(\operatorname{int}D_\nu)$ cover $X$. For a smooth real function $u$ and integer $m\ge0$, define
$$\|u\|_{C^m(\omega_0)}:=\max_{\nu}\max_{|\beta|\le m}\sup_{x\in D_\nu}\left|\partial^\beta(u\circ\kappa_\nu^{-1})(x)\right|.$$
Convergence in $C^\infty$ means convergence in these norms for every integer $m\ge0$. Let $\mu_t$ be a smooth path of positive volume forms with $\int_X\mu_t=\int_X\omega_0^n$ for every $t\in[0,1]$. Suppose $t_j\to t_\infty$ and smooth real functions $\phi_j$ satisfy $\int_X\phi_j\omega_0^n=0$, $\omega_0+i\partial\bar\partial\phi_j>0$, $(\omega_0+i\partial\bar\partial\phi_j)^n=\mu_{t_j}$, and $\sup_j\|\phi_j\|_{C^m(\omega_0)}<\infty$ for every integer $m\ge0$. Then a subsequence converges in $C^\infty$ to a normalized smooth real $\phi_\infty$ satisfying $\omega_0+i\partial\bar\partial\phi_\infty>0$ and $(\omega_0+i\partial\bar\partial\phi_\infty)^n=\mu_{t_\infty}$.

## Statement references

[[def-gts-kahler-class-canonical-bundle-and-ricci-form]]

## Facts & Assumptions

**Given:** A compact connected Kähler manifold $X$, its fixed Kähler form $\omega_0$, the fixed chart balls in the Statement, the smooth path $\mu_t$, and the sequence $(t_j,\phi_j)$ with the stated bounds and equations.

[F1] A Kähler form is a smooth real, closed, positive $(1,1)$-form, and the adopted local convention is $\omega=i g_{a\bar b}dz^a\wedge d\bar z^b$ ([[def-gts-kahler-class-canonical-bundle-and-ricci-form]]).

[F2] [[cor-real-and-euclidean-vector-valued-ascoli-arzela]] supplies uniform subsequences for bounded equicontinuous finite derivative arrays on each compact coordinate subchart; the arrays are finite-dimensional real vectors, and compact chart balls are nonempty compact metric domains.

[A1] Full AC is assumed for countable sequential selections; it is the choice-function principle recorded in [[def-axiom-of-choice]].

## Proof

**Proof technique:** compactness and passage to the limit.

1.1 Use the fixed chart balls $D_\nu$ from the Statement. For every multi-index $\beta$ of order at most $r$, the uniform $C^{r+1}(\omega_0)$ bound makes $\partial^\beta(\phi_j\circ\kappa_\nu^{-1})$ uniformly bounded and equicontinuous on each closed ball: the mean-value inequality bounds its oscillation by a constant times the Euclidean distance, using the uniform bounds on derivatives of order $|\beta|+1$. Apply the Euclidean Arzelà–Ascoli theorem [F2] to the finite collection of derivative arrays and take a finite diagonal subsequence. Uniform convergence of all derivatives through order $r$ gives convergence in the stated $C^r(\omega_0)$ norm. Successively do this for $r=0,1,2,\ldots$ and take the diagonal subsequence. On each chart interior the derivative limits are the derivatives of the limiting function, by the fundamental theorem of calculus on coordinate line segments; the limits agree on overlaps because each $\phi_j$ does. They therefore define a smooth real $\phi_\infty$, and the subsequence converges in every stated $C^r$ norm. [A1, F2, given, choose, algebra]

2.1 Convergence in $C^0$ preserves $\int_X\phi_\infty\omega_0^n=0$. Convergence in $C^2$ gives $\omega_\infty=\omega_0+i\partial\bar\partial\phi_\infty$ as the limit of positive forms, so $\omega_\infty$ is semipositive. Smooth dependence of $\mu_t$ on $t$ and $C^2$ convergence let the determinant equation pass to $\omega_\infty^n=\mu_{t_\infty}$; the right side is strictly positive. At each point the eigenvalues of $\omega_\infty$ relative to $\omega_0$ are nonnegative and their product is positive, so each is positive. Thus $\omega_\infty$ is Kähler and the limit has every required property. [F1, given, step 1.1, algebra] ∎
