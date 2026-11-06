---
id: cor-gts-ricci-flat-metric-in-every-kahler-class-when-c1-0
kind: corollary
title: "Ricci-flat metric in every Kähler class when c₁=0"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 4
domain: mathematics
library: physics
category: string-theory
axiom_strength: "ZF + full AC; inherited from the compact Kähler and complex Monge–Ampère suppliers."
deps:
  - thm-gts-calabi-conjecture-complex-mongeampere-existence
  - def-gts-kahler-class-canonical-bundle-and-ricci-form
  - def-gts-compact-calabiyau-manifold-conventions
  - thm-gts-the-lemma-for-compact-kahler-manifolds
  - thm-general-stokes-theorem
  - def-axiom-of-choice
dependency_roles:
  thm-gts-calabi-conjecture-complex-mongeampere-existence: mathematical-premise
  def-gts-kahler-class-canonical-bundle-and-ricci-form: mathematical-premise
  def-gts-compact-calabiyau-manifold-conventions: mathematical-premise
  thm-gts-the-lemma-for-compact-kahler-manifolds: mathematical-premise
  thm-general-stokes-theorem: mathematical-premise
  def-axiom-of-choice: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry, author manuscript (2012)"
      url: "https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf"
      locator: "Chapter VIII §6, equations (6.6)–(6.7), printed pp. 378–379, Ricci-form variation and determinant convention."
    - title: "Ved V. Datar, Lecture Notes on Calabi’s Conjectures and Kähler–Einstein Metrics"
      url: "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/Calabi_Yau.pdf"
      locator: "Lectures 3–5, existence theorem, uniqueness, and Ricci-flat reduction."
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

If $X$ is a compact connected Kähler manifold of complex dimension $n\ge1$ and $c_1(T_X)=0$ in $H^2(X;\mathbb R)$, every Kähler class contains a unique Ricci-flat Kähler form; in particular this holds when $K_X$ is holomorphically trivial.

## Statement references

[[thm-gts-calabi-conjecture-complex-mongeampere-existence]]

[[def-gts-kahler-class-canonical-bundle-and-ricci-form]]

[[thm-gts-the-lemma-for-compact-kahler-manifolds]]

[[def-gts-compact-calabiyau-manifold-conventions]]

## Facts & Assumptions

**Given:** Full AC; a compact connected Kähler $n$-fold $(X,\omega_0)$, $n\ge1$, and $c_1(T_X)=0$ in real cohomology.

[F1] The complex Monge–Ampère theorem proves a unique normalized potential for every smooth positive volume form of total volume $\int_X\omega_0^n$; its local analytic suppliers prove the uniform a priori bounds and the exact normalized Hölder openness ([[thm-gts-calabi-conjecture-complex-mongeampere-existence]]).

[F2] The Ricci form is $\rho(\omega)=-i\partial\bar\partial\log\det(g_{a\bar b})$ and its class satisfies $[\rho(\omega)]/(2\pi)=c_1(T_X)_{\mathbb R}$ ([[def-gts-kahler-class-canonical-bundle-and-ricci-form]]).

[F3] A smooth $d$-closed, $d$-exact pure-type form on a compact Kähler manifold is $\partial\bar\partial$-exact with the fixed sign convention; in particular this applies to exact real $(1,1)$-forms ([[thm-gts-the-lemma-for-compact-kahler-manifolds]]).

[F4] Holomorphic triviality of $K_X$ implies $c_1(T_X)_{\mathbb R}=0$ in the broad compact Calabi–Yau convention ([[def-gts-compact-calabiyau-manifold-conventions]]).

[F5] Stokes' theorem makes the integral of an exact top-degree form vanish and supplies integration by parts on compact boundaryless $X$ ([[thm-general-stokes-theorem]]).

[A1] Full AC is the choice-function principle of [[def-axiom-of-choice]].

## Proof

**Proof technique:** Ricci-form reduction to the fixed-potential Monge–Ampère equation.

1.1 Fix a Kähler class and a representative $\omega_0$. The Ricci form $\rho_0$ is real, closed, and represents $2\pi c_1(T_X)_{\mathbb R}=0$ by [F2], so it is $d$-exact. It is a pure-type $(1,1)$-form; under the full AC hypothesis [A1], [F3] gives a smooth complex function $\beta$ with $\rho_0=\partial\bar\partial\beta$. [A1, F2, F3, given, algebra]

1.2 Let $\omega_1,\omega_2$ be Ricci-flat Kähler forms in the same class. Their difference is real, $d$-closed, $d$-exact, and of type $(1,1)$; under [A1], [F3] writes $\omega_1-\omega_2=\partial\bar\partial\gamma$ for a smooth complex function $\gamma$. The reality relation implies $\psi=(\gamma-\bar\gamma)/(2i)$ is real and $\omega_1-\omega_2=i\partial\bar\partial\psi$. [A1, F3, given, algebra]

2.1 Since $\rho_0$ is real, complex conjugation and $\overline{\partial\bar\partial\beta}=-\partial\bar\partial\bar\beta$ give $\partial\bar\partial\beta= -\partial\bar\partial\bar\beta$. Hence the real function $F=(\beta-\bar\beta)/(2i)$ satisfies $i\partial\bar\partial F=\rho_0$. Add the real constant $c=\log(V/\int_Xe^F\omega_0^n)$, where $V=\int_X\omega_0^n$, so that $\int_Xe^{F+c}\omega_0^n=V$. [given, step 1.1, algebra]

2.2 The Ricci variation formula in [F2] gives $\partial\bar\partial\log(\omega_1^n/\omega_2^n)=0$. Its trace is the scalar Laplace equation, so the real logarithm is harmonic. On compact connected $X$, integration by parts [F5] gives $\int_X|d\log(\omega_1^n/\omega_2^n)|^2\,dV=0$; hence the ratio is constant. Since [step 1.2] places the two forms in the same class, their top-volume integrals agree by Stokes [F5], the constant is $1$, and $\omega_1^n=\omega_2^n$. [F2, F5, given, step 1.2, algebra]

3.1 Set $\mu=e^{F+c}\omega_0^n$, a smooth positive volume form with the required total volume. Apply the theorem in [F1] to obtain a normalized real $\phi$ and $\omega_\phi=\omega_0+i\partial\bar\partial\phi>0$ with $\omega_\phi^n=\mu$. [F1, step 2.1, algebra]

4.1 In the fixed holomorphic coordinates of [F2], determinant multiplication gives $\rho(\omega_\phi)=\rho(\omega_0)-i\partial\bar\partial\log(\omega_\phi^n/\omega_0^n)$. The ratio is $e^{F+c}$, so the right side is $i\partial\bar\partial F-i\partial\bar\partial(F+c)=0$. Thus the constructed form is Ricci-flat. Its cohomology class is the chosen class because $i\partial\bar\partial\phi$ is exact. [F2, step 2.1, step 3.1, algebra]

5.1 If $K_X$ is holomorphically trivial, [F4] gives the real-class hypothesis, so the same construction applies to each Kähler class. [F1, F4, step 4.1, algebra]

6.1 Put $S=\sum_{j=0}^{n-1}\omega_1^j\wedge\omega_2^{n-1-j}$, which is closed and positive. The difference-of-powers identity, the real potential in [step 1.2], and the equal volume forms in [step 2.2] give $0=\int_X\psi(\omega_1^n-\omega_2^n)=\int_X\psi i\partial\bar\partial\psi\wedge S=-\int_Xi\partial\psi\wedge\bar\partial\psi\wedge S$ by [F5]. The last integrand is nonnegative and vanishes only where $d\psi=0$, so $\psi$ is constant on connected $X$ and $\omega_1=\omega_2$. This proves uniqueness independently of the existence estimates. [F5, given, step 1.2, step 2.2, algebra] ∎

## Remarks

The Ricci-flat existence part follows from the Calabi theorem with its locally proved analytic prerequisites. The reduction and uniqueness argument are complete at the stated suppliers. The compact $\partial\bar\partial$ lemma is needed here to pass from real $c_1=0$ to a global potential; it is not a prerequisite for the fixed-potential PDE itself.
