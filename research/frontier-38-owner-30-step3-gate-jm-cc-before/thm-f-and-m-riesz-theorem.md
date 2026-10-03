---
id: thm-f-and-m-riesz-theorem
kind: theorem
title: "The F. and M. Riesz theorem"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-axiom-of-choice, def-countable-choice, def-analytic-hardy-space-disc, thm-fatou-boundary-theorem-analytic-hardy-spaces, lem-analytic-poisson-integrals-have-vanishing-negative-coefficients, thm-harmonic-hardy-one-measure-representation, def-poisson-integral-of-finite-boundary-measure, thm-poisson-extension-lp-contraction-and-norm-limit, def-fourier-coefficients-and-trigonometric-polynomials, def-regular-complex-borel-measure-on-an-lch-space, cor-second-countable-lch-locally-finite-borel-measures-are-regular, thm-integrals-against-signed-or-complex-measures-are-bounded-by-total-variation]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "L. Ryzhik, Stanford Math 215 Course Notes, Chapter 5"
      url: "https://math.stanford.edu/~ryzhik/STANFORD/STANF215-13/stanf215-notes.pdf"
      locator: "§5.4, Theorem 5.13: the F. and M. Riesz theorem for measures with vanishing negative Fourier coefficients."
    - title: "J. B. Garnett, Bounded Analytic Functions, revised first edition, Chapter II §3, Theorem 3.6"
      url: "https://dokumen.pub/bounded-analytic-functions-0387336214-9780387336213.html"
      locator: "printed p. 59: a finite complex measure whose Poisson integral is analytic on the disc has an absolutely continuous representative."
---

## Statement

Let $\mu$ be a finite complex Borel measure on $\mathbb T$ whose Fourier
coefficients $\widehat\mu(n)=\int_{\mathbb T}\zeta^{-n}\,d\mu(\zeta)$ vanish
for every $n<0$. Then $\mu$ is absolutely continuous with respect to $m$. More
precisely, $f:=P[\mu]$ is holomorphic on $\mathbb D$ and lies in
$H^1(\mathbb D)$, and if $f^*$ is the boundary function of the Fatou theorem
for analytic $H^1$ then $\mu=f^*m$; consequently
$|\mu|(\mathbb T)=\|f^*\|_1=\|f\|_{H^1}$.

## Facts & Assumptions

**Given:** A finite complex Borel measure $\mu$ on $\mathbb T$ with $\widehat\mu(n)=0$ for every $n<0$, and the function $f=P[\mu]$.

[L1] Analytic Poisson integrals: if $\mu$ is a finite complex Borel measure on $\mathbb T$ and $\widehat\mu(n)=0$ for every $n<0$, then $f=P[\mu]$ is holomorphic on $\mathbb D$ and lies in $H^1(\mathbb D)$ with $\|f\|_{H^1}\le|\mu|(\mathbb T)$, its Taylor coefficients being the $\widehat\mu(n)$ for $n\ge0$ ([[lem-analytic-poisson-integrals-have-vanishing-negative-coefficients]], [[def-fourier-coefficients-and-trigonometric-polynomials]]).

[L2] $h^1$ measure representation: every $u\in h^1(\mathbb D)$ has a unique finite regular complex Borel measure $\nu$ on $\mathbb T$ with $u=P[\nu]$, and $\|u\|_{h^1}=|\nu|(\mathbb T)$ with $(P[\nu])_rm$ weak-star convergent to $\nu$ against $C(\mathbb T)$ ([[thm-harmonic-hardy-one-measure-representation]], [[def-analytic-hardy-space-disc]]).

[L3] Fatou's boundary theorem for analytic $H^1$: $f\in H^1(\mathbb D)$ has finite nontangential limits $f^*$ $m$-almost everywhere with $\|f_r-f^*\|_1\to0$, $\|f^*\|_1=\|f\|_{H^1}$ and $f=P[f^*]$ ([[thm-fatou-boundary-theorem-analytic-hardy-spaces]]).

[L4] A finite complex Borel measure on the compact metric space $\mathbb T$ is regular, integrations against it are bounded by the total variation, and continuous functions separate such measures: if $\int g\,d\nu=\int g\,d\lambda$ for all $g\in C(\mathbb T)$ then $\nu=\lambda$ ([[def-regular-complex-borel-measure-on-an-lch-space]], [[cor-second-countable-lch-locally-finite-borel-measures-are-regular]], [[thm-integrals-against-signed-or-complex-measures-are-bounded-by-total-variation]], [[thm-harmonic-hardy-one-measure-representation]], [[def-poisson-integral-of-finite-boundary-measure]], [[thm-poisson-extension-lp-contraction-and-norm-limit]]).



## Proof

**Proof technique:** direct.

1.1 $f$ is holomorphic and in $H^1$. By [L1] the function $f=P[\mu]$ is holomorphic on $\mathbb D$ with $\|f\|_{H^1}\le|\mu|(\mathbb T)$; being holomorphic, it is complex harmonic, so $f\in h^1(\mathbb D)$ with $\|f\|_{h^1}=\|f\|_{H^1}$ ([[def-analytic-hardy-space-disc]]). [given, L1]

2.1 The representing measure is $f^*m$. By [L2] there is a unique finite regular complex Borel measure $\nu$ with $f=P[\nu]$ and $\|f\|_{h^1}=|\nu|(\mathbb T)$; by [L3] the function $f^*\in L^1(\mathbb T,m)$ satisfies $\|f_r-f^*\|_1\to0$ and $f=P[f^*]=P[f^*m]$. Hence $f^*m$ is a finite regular complex measure representing $f$; by uniqueness in [L2], $\nu=f^*m$. [step 1.1, L2, L3]

3.1 Identification of $\mu$. Since $f=P[\mu]$ by definition and $f=P[\nu]$ by step 2.1, the two finite measures $\mu$ and $\nu$ have the same Poisson integral. The uniqueness clause of [L2] applied to the $h^1$ function $f$ gives $\mu=\nu$; more explicitly, for every continuous $g$ the weak-star convergence of $(P[\nu])_rm$ to $\nu$ and of $(P[\mu])_rm$ to $\mu$, together with $P[\mu]=P[\nu]$, give $\int g\,d\mu=\int g\,d\nu$, and [L4] yields $\mu=\nu$. Therefore $\mu=f^*m$ is absolutely continuous with respect to $m$. [step 2.1, L2, L4, algebra]

4.1 Norm identity. By step 3.1, $\mu=f^*m$, so $|\mu|(\mathbb T)=\int_{\mathbb T}|f^*|\,dm=\|f^*\|_1$; by [L3], $\|f^*\|_1=\|f\|_{H^1}$; hence $|\mu|(\mathbb T)=\|f^*\|_1=\|f\|_{H^1}$. [step 3.1, L3, algebra]

5.1 Assembly. Steps 1.1, 2.1 and 3.1 prove that a finite complex Borel measure with vanishing negative Fourier coefficients has the absolutely continuous representative $f^*m$ with $f=P[\mu]=P[f^*]$ holomorphic in $H^1$, and step 4.1 gives the norm identity. This is the F. and M. Riesz theorem in the disc form stated. [step 1.1, step 2.1, step 4.1] ∎
