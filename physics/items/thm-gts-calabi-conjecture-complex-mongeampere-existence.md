---
id: thm-gts-calabi-conjecture-complex-mongeampere-existence
kind: theorem
title: "Calabi conjecture / complex Monge–Ampère existence"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 3
domain: mathematics
library: physics
category: string-theory
axiom_strength: "ZF + full AC; inherited from compact elliptic theory and used for the continuity argument."
deps:
  - def-gts-kahler-class-canonical-bundle-and-ricci-form
  - def-axiom-of-choice
  - thm-general-stokes-theorem
  - lem-gts-yau-continuity-path-closure-under-uniform-estimates
  - lem-gts-yau-uniform-a-priori-bounds-by-calabi-third-order-estimate
  - lem-gts-weighted-holder-poisson-isomorphism-and-mongeampere-openness
dependency_roles:
  def-gts-kahler-class-canonical-bundle-and-ricci-form: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-general-stokes-theorem: mathematical-premise
  lem-gts-yau-continuity-path-closure-under-uniform-estimates: mathematical-premise
  lem-gts-yau-uniform-a-priori-bounds-by-calabi-third-order-estimate: mathematical-premise
  lem-gts-weighted-holder-poisson-isomorphism-and-mongeampere-openness: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Zbigniew Błocki, The Complex Monge–Ampère Equation in Kähler Geometry"
      url: "https://gamma.im.uj.edu.pl/~blocki/publ/ln/cetr.pdf"
      locator: "Theorem 18 and the uniqueness and continuity-method treatment, §§7–13, printed pp. 123–140."
    - title: "Ved V. Datar, Lecture Notes on Calabi’s Conjectures and Kähler–Einstein Metrics"
      url: "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/Calabi_Yau.pdf"
      locator: "Lectures 3–5: continuity method and openness, uniqueness, C⁰/Moser and C²/C³ estimates."
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

Let $X$ be a compact connected Kähler manifold of complex dimension $n\ge1$, let $\omega_0$ be a Kähler form, and let $\mu$ be a smooth strictly positive volume form satisfying $\int_X\mu=\int_X\omega_0^n$. Then there is a unique real smooth function $\phi$ with $\int_X\phi\,\omega_0^n=0$ such that $\omega_0+i\partial\bar\partial\phi$ is Kähler and $(\omega_0+i\partial\bar\partial\phi)^n=\mu$.

## Statement references

[[def-gts-kahler-class-canonical-bundle-and-ricci-form]]

[[lem-gts-yau-continuity-path-closure-under-uniform-estimates]]

## Facts & Assumptions

**Given:** Full AC; a compact connected Kähler $n$-fold $(X,\omega_0)$, $n\ge1$; and a smooth strictly positive volume form $\mu$ with $\int_X\mu=\int_X\omega_0^n=:V$.

[F1] The Kähler convention is $\omega=i g_{a\bar b}dz^a\wedge d\bar z^b$, with $\omega$ real, closed, and positive ([[def-gts-kahler-class-canonical-bundle-and-ricci-form]]).

[F3] A sequence of normalized smooth solutions along a smooth positive volume path with uniform bounds in every $C^m$ has a smooth convergent subsequence solving the limiting path equation, with strict positivity recovered from the positive determinant ([[lem-gts-yau-continuity-path-closure-under-uniform-estimates]]).

[F4] On a compact oriented manifold, the integral of an exact top-degree form vanishes; Stokes also supplies integration by parts for smooth forms ([[thm-general-stokes-theorem]]).

[F5] [[lem-gts-yau-uniform-a-priori-bounds-by-calabi-third-order-estimate]] proves uniform estimates for every normalized smooth positive solution of the fixed-volume equation over an arbitrary compact connected Kähler manifold, in all dimensions $n\ge1$. It supplies the actual C⁰/Moser, trace, connection-difference Calabi estimate and Schauder bootstrap; the dimension-one case is treated directly as a Poisson equation. Its constants depend only on the fixed geometry and the positive-density derivative bounds.

[F6] [[lem-gts-weighted-holder-poisson-isomorphism-and-mongeampere-openness]] proves the bounded Hölder inverse of $\rho\Delta_{\omega_\phi}$ from $C^{k+2,\alpha}_0$ onto $C^{k,\alpha}_0$, with both means taken against $\omega_0^n$, for each fixed positive smooth metric and every $k\ge0$. It also proves Banach-space openness and the smooth bootstrap of the resulting solutions.

[A3] Full AC is the choice-function principle of [[def-axiom-of-choice]]; the analytic suppliers [F5] and [F6] assume it.

## Proof

**Proof technique:** continuity method, with local uniform estimates and weighted Hölder inversion.

1.1 Define $\mu_t=(1-t)\omega_0^n+t\mu$ for $0\le t\le1$. This is a smooth path of positive volume forms because it is a convex combination of positive top-degree forms, and $\int_X\mu_t=(1-t)V+tV=V$. Set $T$ equal to the set of $t$ for which there is a smooth real normalized $\phi_t$ with $\omega_{\phi_t}:=\omega_0+i\partial\bar\partial\phi_t>0$ and $\omega_{\phi_t}^n=\mu_t$. [F1, given, algebra]

2.1 At $t=0$, $\phi_0=0$ is normalized and solves the equation, so $0\in T$. For every positive potential define the density residual $\mathcal F(t,\phi)=\omega_\phi^n/\omega_0^n-\mu_t/\omega_0^n$. Its integral against $\omega_0^n$ is zero: the volume forms in the same Kähler class have equal total volume by expanding $\omega_\phi^n-\omega_0^n$ as an exact form and applying [F4], and $\int_X\mu_t=V$. [F1, F4, given, step 1.1, algebra]

2.2 By [F5], any sequence $t_j\in T$ converging to $t_\infty$ has corresponding normalized solutions uniformly bounded in every $C^m$. Apply [F3] to obtain a smooth normalized limit with positive Kähler form solving the equation at $t_\infty$. Hence $t_\infty\in T$ and $T$ is closed in $[0,1]$. [F5, F3, step 1.1, algebra]

3.1 At a solution, differentiating the determinant gives $D_\phi\mathcal F[\psi]=(\operatorname{tr}_{\omega_\phi}(i\partial\bar\partial\psi))(\omega_\phi^n/\omega_0^n)$. The trace operator is uniformly elliptic at this fixed positive metric. Differentiating the zero-integral identity from step 2.1 shows the derivative has zero $\omega_0^n$-mean. If it vanishes, then the trace vanishes; Stokes [F4] gives $\int_X i\partial\psi\wedge\bar\partial\psi\wedge\omega_\phi^{n-1}=-\int_X\psi i\partial\bar\partial\psi\wedge\omega_\phi^{n-1}=0$, so $\partial\psi=0$ and $\psi$ is constant. Restricting to zero $\omega_0^n$-mean removes that kernel. The exact weighted Hölder isomorphism is supplied by [F6]: solving for a target $f$ of zero reference mean requires $\Delta_{\omega_\phi}\psi=f/\rho$, whose compatibility is $\int_X(f/\rho)\omega_\phi^n=\int_Xf\omega_0^n=0$. Its constant is then fixed by the reference normalization. Thus the fixed domain and target here match the actual inverse, rather than imposing the wrong mean on the unweighted Laplacian. [F6, A3, F1, F4, given, step 2.1, algebra]

4.1 The map $(t,\phi)\mapsto\mathcal F(t,\phi)$ is smooth in the Hölder spaces on the open positive cone. By [F6] and step 3.1, its derivative in the normalized potential variable is a bounded isomorphism between the fixed-reference mean-zero spaces. The Banach implicit-function argument of [F6], using $k=1$, gives positive normalized $C^{3,\alpha}$ solutions for all sufficiently close density parameters; the difference-quotient Schauder bootstrap proved there makes them smooth. The density-neighbourhood formulation works also at the endpoints, with parameters restricted to $[0,1]$. Hence $T$ is relatively open. [F6, step 3.1, algebra]

5.1 The interval $[0,1]$ is connected; since $T$ is nonempty by step 2.1, open by step 4.1, and closed by step 2.2, $T=[0,1]$. In particular a normalized solution exists at $t=1$. [F5, F6, step 2.1, step 4.1, step 2.2, algebra]

6.1 Suppose $\phi$ and $\psi$ are two normalized solutions at $t=1$. Put $u=\phi-\psi$ and $S=\sum_{j=0}^{n-1}\omega_\phi^j\wedge\omega_\psi^{n-1-j}$, a closed positive $(n-1,n-1)$-form. The algebraic identity for the difference of powers gives $0=\omega_\phi^n-\omega_\psi^n=i\partial\bar\partial u\wedge S$. Stokes [F4] applied to $u i\bar\partial u\wedge S$ gives $0=\int_Xu i\partial\bar\partial u\wedge S=-\int_X i\partial u\wedge\bar\partial u\wedge S$. Positivity of $S$ forces $\partial u=0$, so $u$ is constant; its zero mean forces $u=0$. Thus uniqueness is proved independently of the a priori estimates. [F1, F4, given, step 1.1, algebra] ∎

## Remarks

The proof uses the local estimates and weighted Hölder inversion at their exact hypotheses; the classical Calabi third-order route provides the required regularity without an additional Evans–Krylov premise. The fixed-potential PDE does not use the compact $\partial\bar\partial$ lemma; that lemma first enters the next Ricci-flat reduction. The smooth positive density path has a uniform positive lower bound and bounds for every derivative of its logarithm by compactness, so the uniform-estimate supplier applies to the full path and every normalized solution. No projectivity, curvature sign, or narrower Kähler class is imposed.
