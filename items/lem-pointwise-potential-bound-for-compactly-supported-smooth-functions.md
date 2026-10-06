---
id: lem-pointwise-potential-bound-for-compactly-supported-smooth-functions
kind: lemma
title: "Pointwise potential bound for compactly supported smooth functions"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [thm-polar-coordinates-formula-for-lebesgue-measure, def-polar-surface-measure-on-the-unit-sphere, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant, cor-vector-valued-ftc-and-lipschitz-bound, thm-tonelli-theorem-for-sigma-finite-product-spaces, lem-euclidean-balls-have-positive-finite-lebesgue-measure, def-countable-choice]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Juha Kinnunen, Sobolev Spaces (Aalto University, 2026, complete graduate lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf"
      locator: "Chapter 5 §5.3, Lemma 5.22 and Remark 5.23(1), printed pp. 133-135."
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Chapter 3 §3.8, the potential representation in the proof of Theorem 3.36, display (3.14), printed pp. 68-70."
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). Let $n\ge2$ and $u\in C_c^{\infty}(\mathbb R^n;\mathbb K)$, $\mathbb K\in\{\mathbb R,\mathbb C\}$. Then for every $x\in\mathbb R^n$, $|u(x)|\le\frac1{\sigma(S^{n-1})}\int_{\mathbb R^n}|Du(y)|\,|x-y|^{1-n}\,dy$, where $\sigma$ is the polar surface measure of [[def-polar-surface-measure-on-the-unit-sphere]] and $|Du|$ is the Euclidean norm of the gradient. In particular $|u(x)|\le C(n)\int_{\mathbb R^n}|Du(y)|\,|x-y|^{1-n}dy$.

## Facts & Assumptions

**Given:** Countable Choice; an integer $n\ge2$; a field $\mathbb K\in\{\mathbb R,\mathbb C\}$; a function $u\in C_c^\infty(\mathbb R^n;\mathbb K)$; the polar surface measure $\sigma$ on $S^{n-1}$; and a point $x\in\mathbb R^n$.

[F2] Polar coordinates: for every Borel measurable $f:\mathbb R^n\to[0,\infty]$, $\int_{\mathbb R^n}f\,d\lambda_n=\int_0^\infty\int_{S^{n-1}}f(r\omega)r^{n-1}\,d\sigma(\omega)\,dr$ ([[thm-polar-coordinates-formula-for-lebesgue-measure]]).

[F3] Lebesgue measure is translation invariant ([[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]).

[F4] For a vector-valued differentiable $f$ with integrable derivative, $\int_a^bf'=f(b)-f(a)$ ([[cor-vector-valued-ftc-and-lipschitz-bound]]).

[F5] Tonelli's theorem on sigma-finite products ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F6] Every Euclidean ball has positive finite Lebesgue measure: $0<\lambda(B(x,r))<\infty$ ([[lem-euclidean-balls-have-positive-finite-lebesgue-measure]]).

[F7] Countable Choice ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 The radial primitive. Fix $\omega\in S^{n-1}$ and put $g(t):=u(x+t\omega)$ for $t\ge0$. Since $u$ is smooth and compactly supported, $g$ is differentiable with $g'(t)=Du(x+t\omega)\cdot\omega$, and $g(t)=0$ for all $t\ge T$ once $T$ is so large that $x+[0,\infty)\omega$ leaves the support of $u$. Applying the fundamental theorem [F4] on $[0,T]$ and letting $T\to\infty$ gives $g(0)=-\int_0^\infty g'(t)\,dt$, hence $|u(x)|\le\int_0^\infty|Du(x+t\omega)|\,dt$. [F4, given, algebra]

1.2 Surface normalisation. By [F2] applied to $\mathbf1_{B(0,1)}$, $\lambda_n(B(0,1))=\sigma(S^{n-1})\int_0^1t^{n-1}dt=\sigma(S^{n-1})/n$. Thus [F6] gives $0<\sigma(S^{n-1})=n\lambda_n(B(0,1))<\infty$. [F2, F6, algebra]

1.3 Translation to polar coordinates at $x$. Define $G(y):=|Du(y)|\,|x-y|^{1-n}$ for $y\ne x$ and $G(x):=0$; this is Borel measurable because $|Du|$ is continuous and $y\mapsto|x-y|^{1-n}$ is Borel. Applying [F2] to the nonnegative Borel function $z\mapsto G(x+z)$ and then [F3] gives $$\int_{S^{n-1}}\int_0^\infty|Du(x+t\omega)|\,dt\,d\sigma(\omega)=\int_{S^{n-1}}\int_0^\infty G(x+t\omega)t^{n-1}\,dt\,d\sigma(\omega)=\int_{\mathbb R^n}G(y)\,dy,$$ where the first equality uses $|x-(x+t\omega)|^{1-n}=t^{1-n}$ and the two integrations are the iterated polar integral of the nonnegative function $z\mapsto G(x+z)$; the singularity at $y=x$ is a single point and does not affect the value of the integral. [F2, F3, given, algebra]

2.1 Integrating the pointwise bound over the sphere. The function $(t,\omega)\mapsto|Du(x+t\omega)|$ is continuous on $[0,\infty)\times S^{n-1}$, hence product measurable, and it is nonnegative; by Tonelli [F5] its iterated integral over the sigma-finite product $[0,\infty)\times S^{n-1}$ is well defined. Integrating the inequality of step 1.1 over $S^{n-1}$ against $\sigma$ therefore gives $|u(x)|\,\sigma(S^{n-1})\le\int_{S^{n-1}}\int_0^\infty|Du(x+t\omega)|\,dt\,d\sigma(\omega)$. [F5, F7, step 1.1, algebra]

3.1 Conclusion. Combining steps 2.1 and 1.3 with the positivity of $\sigma(S^{n-1})$ from step 1.2 gives $|u(x)|\le\frac{1}{\sigma(S^{n-1})}\int_{\mathbb R^n}|Du(y)||x-y|^{1-n}\,dy$, and $C(n):=1/\sigma(S^{n-1})=1/(n\lambda_n(B(0,1)))$ is the asserted dimension-only constant. [step 1.2, step 2.1, step 1.3, algebra] ∎

## Source notes

Kinnunen's Lemma 5.22 proves the corresponding oscillation bound on a ball by slicing spheres and changing variables; the proof above uses the same radial computation in the global polar-coordinate form suited to compactly supported functions, with the sphere average normalised by $\sigma(S^{n-1})$. Hunter's display (3.14) gives the related ball-averaged oscillation bound; the compact-support ray argument above gives the global estimate with $1/\sigma(S^{n-1})$.
