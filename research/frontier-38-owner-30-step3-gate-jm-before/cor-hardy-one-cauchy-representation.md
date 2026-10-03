---
id: cor-hardy-one-cauchy-representation
kind: corollary
title: "Cauchy representation of an $H^1$ function from its boundary values"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-countable-choice, thm-f-and-m-riesz-theorem, thm-fatou-boundary-theorem-analytic-hardy-spaces, lem-analytic-poisson-integrals-have-vanishing-negative-coefficients, thm-harmonic-hardy-one-measure-representation, def-poisson-integral-of-finite-boundary-measure, thm-poisson-extension-lp-contraction-and-norm-limit, thm-cauchy-integral-formula-circle, def-analytic-hardy-space-disc, def-the-one-dimensional-torus-and-normalized-haar-integral]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "R. K. Srivastava, Lecture Notes on Hardy Spaces (MA650, IIT Guwahati), §5.7 and §5.11"
      url: "https://fac.iitg.ac.in/rksri/MA650%20Advanced%20Hardy%20Spaces%20Notes.pdf"
      locator: "Corollary 5.26 and the Cauchy representation, printed pp. 41-42: $f=P[f^*]$ and $f(z)=\\frac1{2\\pi i}\\oint\\frac{f^*(\\zeta)}{\\zeta-z}d\\zeta$ for $f\\in H^1$."
    - title: "L. Ryzhik, Stanford Math 215 Course Notes, Chapter 5"
      url: "https://math.stanford.edu/~ryzhik/STANFORD/STANF215-13/stanf215-notes.pdf"
      locator: "§5.4, consequences of Theorem 5.13: the analytic $h^1$ boundary measure is an $L^1$ density."
---

## Statement

Let $f\in H^1(\mathbb D)$ and let $\mu$ be the unique finite complex Borel
measure on $\mathbb T$ with $f=P[\mu]$ (the published $h^1$ representation).
Then $\mu\ll m$ and $\mu=f^*m$ for the boundary function $f^*$ of the Fatou
theorem, and for every $z\in\mathbb D$
$$f(z)=P[f^*](z)=\int_{\mathbb T}P(z,\zeta)f^*(\zeta)\,dm(\zeta)=\frac{1}{2\pi i}\oint_{\mathbb T}\frac{f^*(\zeta)}{\zeta-z}\,d\zeta .$$
Moreover $\|f\|_{H^1}=\|f^*\|_1=|\mu|(\mathbb T)$ and
$\|f_r-f^*\|_1\to0$ as $r\uparrow1$.

## Facts & Assumptions

**Given:** A function $f\in H^1(\mathbb D)$ and its unique representing measure $\mu$ from the $h^1$ representation; the boundary function $f^*$ of the Fatou theorem.

[L1] $h^1$ measure representation: $f\in h^1(\mathbb D)$ has a unique finite regular complex Borel measure $\mu$ with $f=P[\mu]$, $\|f\|_{h^1}=|\mu|(\mathbb T)$, and $(P[\mu])_rm$ weak-star convergent to $\mu$; for a holomorphic $f$ one has $\|f\|_{h^1}=\|f\|_{H^1}$ ([[thm-harmonic-hardy-one-measure-representation]], [[def-analytic-hardy-space-disc]]).

[L2] Analyticity criterion: $P[\mu]$ is holomorphic on $\mathbb D$ if and only if $\widehat\mu(n)=0$ for every $n<0$ ([[lem-analytic-poisson-integrals-have-vanishing-negative-coefficients]]).

[L3] F. and M. Riesz: a finite complex Borel measure with vanishing negative Fourier coefficients is absolutely continuous, equal to $f^*m$, and then $|\mu|(\mathbb T)=\|f^*\|_1=\|f\|_{H^1}$ ([[thm-f-and-m-riesz-theorem]]).

[L4] Fatou's boundary theorem for analytic $H^1$: $f^*\in L^1$, $f=P[f^*]$, $\|f_r-f^*\|_1\to0$ and $\|f^*\|_1=\|f\|_{H^1}$ ([[thm-fatou-boundary-theorem-analytic-hardy-spaces]]).

[L5] Cauchy's integral formula on a circle: if $g$ is holomorphic on a neighbourhood of the closed disc of radius $r<1$ and $|z|<r$, then $g(z)=\frac{1}{2\pi i}\oint_{|\zeta|=r}\frac{g(\zeta)}{\zeta-z}\,d\zeta$; the contour integral over $\mathbb T$ is computed by the parametrization $\zeta=\varphi([t])=e^{2\pi it}$ with $dm=dt$ in the normalized convention ([[thm-cauchy-integral-formula-circle]], [[def-the-one-dimensional-torus-and-normalized-haar-integral]]).

[L6] If $g_r\to g$ in $L^1(\mathbb T,m)$ and the functions $\zeta\mapsto w_r(\zeta)$ converge uniformly to $w$ and are uniformly bounded, then $\int g_rw_r\,dm\to\int gw\,dm$; the Poisson integral $P[f^*]$ is $\int P(z,\zeta)f^*(\zeta)dm(\zeta)$ ([[thm-poisson-extension-lp-contraction-and-norm-limit]], [[def-poisson-integral-of-finite-boundary-measure]]).



## Proof

**Proof technique:** direct.

1.1 The measure is absolutely continuous. Since $f=P[\mu]$ is holomorphic, [L2] gives $\widehat\mu(n)=0$ for every $n<0$; the F. and M. Riesz theorem [L3] then gives $\mu=f^*m$ with $|\mu|(\mathbb T)=\|f^*\|_1=\|f\|_{H^1}$. In particular $\mu\ll m$. [given, L2, L3]

2.1 Poisson representation. Since $f=P[\mu]=P[f^*m]=P[f^*]$ and [L4] gives $\|f_r-f^*\|_1\to0$, the first two equalities in the display and the norm identity $\|f\|_{H^1}=\|f^*\|_1=|\mu|(\mathbb T)$ follow from [L1], [L3] and [L4]. [step 1.1, L1, L3, L4]

3.1 The Cauchy formula. Fix $z\in\mathbb D$ and $r\in(|z|,1)$. The function $f$ is holomorphic on a neighbourhood of the closed disc of radius $r$, so [L5] gives $f(z)=\frac{1}{2\pi i}\oint_{|\zeta|=r}\frac{f(\zeta)}{\zeta-z}\,d\zeta$. Writing the circle integral in the torus parametrization, this equals $\int_{\mathbb T}\frac{r\zeta}{r\zeta-z}f(r\zeta)\,dm(\zeta)$ (the factor $r\zeta$ is $\frac{d\zeta}{2\pi i\,dm}$). As $r\uparrow1$, the weights $\frac{r\zeta}{r\zeta-z}$ converge uniformly on $\mathbb T$ to $\frac{\zeta}{\zeta-z}$ and are uniformly bounded because $|r\zeta-z|\ge1-|z|>0$; together with $\|f_r-f^*\|_1\to0$ from step 2.1, [L6] gives $$f(z)=\int_{\mathbb T}\frac{\zeta}{\zeta-z}f^*(\zeta)\,dm(\zeta)=\frac{1}{2\pi i}\oint_{\mathbb T}\frac{f^*(\zeta)}{\zeta-z}\,d\zeta,$$ the last equality being the same parametrization at $r=1$. [step 2.1, L5, L6, algebra]

4.1 Assembly. Step 1.1 gives $\mu=f^*m$ with the norm identity, step 2.1 gives $f=P[f^*]=\int P(z,\zeta)f^*dm$ and the $L^1$ convergence of the radial functions, and step 3.1 gives the Cauchy representation of $f$ by its boundary values. [step 1.1, step 2.1, step 3.1] ∎
