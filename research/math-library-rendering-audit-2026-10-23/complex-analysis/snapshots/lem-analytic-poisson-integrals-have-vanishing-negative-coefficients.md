---
id: lem-analytic-poisson-integrals-have-vanishing-negative-coefficients
kind: lemma
title: "Analytic Poisson integrals are exactly the measures with vanishing negative coefficients"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-countable-choice, lem-complex-circle-measures-have-finite-total-variation-under-countable-choice, def-poisson-integral-of-finite-boundary-measure, def-poisson-kernel-on-the-disc, lem-poisson-kernel-properties-on-the-disc, def-fourier-coefficients-and-trigonometric-polynomials, lem-trigonometric-characters-are-orthonormal, thm-complex-power-series-converge-locally-uniformly, thm-taylor-expansion-holomorphic-function, cor-complex-power-series-sums-are-analytic, thm-holomorphic-if-and-only-if-analytic, def-complex-differentiability-holomorphic-and-entire, def-the-one-dimensional-torus-and-normalized-haar-integral, thm-dominated-convergence, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-integrals-against-signed-or-complex-measures-are-bounded-by-total-variation, def-analytic-hardy-space-disc]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-20.md"
      - "research/frontier-38-owner-30-alpha-batch-20-5a.md"
      - "research/frontier-38-owner-30-step5-hash-20-post-5a.json"
    content_sha256: "3e2843645a9291eb5334de12a88d90d0e5d78efa0c6e69a9741fa76e080bbbdf"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "L. Ryzhik, Stanford Math 215 Course Notes, Chapter 5"
      url: "https://math.stanford.edu/~ryzhik/STANFORD/STANF215-13/stanf215-notes.pdf"
      locator: "§5.4, proof of Theorem 5.13"
    - title: "J. B. Garnett, Bounded Analytic Functions, revised first edition, Chapter II §3, Theorem 3.6"
      url: "https://dokumen.pub/bounded-analytic-functions-0387336214-9780387336213.html"
      locator: "printed p. 59: a finite complex measure whose Poisson integral is analytic on the disc or half-plane has an absolutely continuous representative."
---

## Statement

Assume countable choice, as in the circle conventions. Let $\mu$ be a finite complex Borel measure on $\mathbb T$ and let
$$\widehat\mu(n):=\int_{\mathbb T}\zeta^{-n}\,d\mu(\zeta),\qquad n\in\mathbb Z,$$
where exponents are read through the identification $\varphi([t])=e^{2\pi it}$
of $\mathbb T$ with the Euclidean unit circle, so that $\zeta^{-n}$ is the
character $e_{-n}(\zeta)$ of
[[def-fourier-coefficients-and-trigonometric-polynomials]]. The following are
equivalent:

(i) $P[\mu]$ is holomorphic on $\mathbb D$;

(ii) $P[\mu](z)=\sum_{n\ge0}\widehat\mu(n)z^n$ for $|z|<1$, the power series
obtained from the Poisson kernel expansion, with no negative powers of $z$;

(iii) $\widehat\mu(n)=0$ for every $n<0$.

When these hold, $P[\mu]\in H^1(\mathbb D)$ with
$\|P[\mu]\|_{H^1}\le|\mu|(\mathbb T)$, and its Taylor coefficients are the
$\widehat\mu(n)$, $n\ge0$.

## Facts & Assumptions

**Given:** Countable choice and a finite complex Borel measure $\mu$ on $\mathbb T$, its Poisson integral $P[\mu]$, and the coefficients $\widehat\mu(n)=\int_{\mathbb T}e_{-n}\,d\mu$, $n\in\mathbb Z$.

[L1] Setting $\mathbb T=\mathbb R/\mathbb Z$ identified with the Euclidean unit circle through $\varphi([t])=e^{2\pi it}$, the Poisson kernel is $P(z,\zeta)=P(z,\varphi(\zeta))=(1-|z|^2)/|\varphi(\zeta)-z|^2$ for $z\in\mathbb D$, $\zeta\in\mathbb T$, and $P[\mu](z)=\int_{\mathbb T}P(z,\zeta)\,d\mu(\zeta)$; for $z=re^{i\phi}$ one has $P(z,e^{it})=P_r(t-\phi)=(1-r^2)/(1-2r\cos(t-\phi)+r^2)$ ([[def-poisson-integral-of-finite-boundary-measure]], [[def-poisson-kernel-on-the-disc]], [[def-the-one-dimensional-torus-and-normalized-haar-integral]]).

[L2] The kernel is strictly positive with unit mass: $P_r(\theta)>0$ and $\frac{1}{2\pi}\int_0^{2\pi}P_r(\theta)\,d\theta=1$ for $0\le r<1$ ([[lem-poisson-kernel-properties-on-the-disc]]).

[L3] Characters satisfy $e_ke_l=e_{k+l}$, $|e_k|=1$, $\overline{e_k}=e_{-k}$, $e_k=\varphi^k$, and they are orthonormal: $\int_{\mathbb T}e_k\overline{e_l}\,dm=\delta_{kl}$ ([[def-fourier-coefficients-and-trigonometric-polynomials]], [[lem-trigonometric-characters-are-orthonormal]]).

[L4] Under CC every complex circle measure has finite regular total variation, and integration obeys $|\int u\,d\mu|\le\int|u|d|\mu|$. In particular $|\mu|(E)\le|\mu|(\mathbb T)<\infty$. ([[lem-complex-circle-measures-have-finite-total-variation-under-countable-choice]], [[thm-integrals-against-signed-or-complex-measures-are-bounded-by-total-variation]], [[def-countable-choice]])

[L5] Fubini's theorem applies to functions integrable for a product of sigma-finite measures, and Tonelli's theorem applies to nonnegative product-measurable functions ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[L6] A holomorphic function equals its Taylor series throughout the largest centred open disc contained in its domain, and the sum of a complex power series is analytic, hence holomorphic, on its open disc of convergence; a complex power series converges absolutely and uniformly on every closed subdisc strictly inside its disc of convergence ([[thm-taylor-expansion-holomorphic-function]], [[cor-complex-power-series-sums-are-analytic]], [[thm-holomorphic-if-and-only-if-analytic]], [[thm-complex-power-series-converge-locally-uniformly]]).

[L7] The classes $H^p(\mathbb D)$ with their (quasi-)norms are those of [[def-analytic-hardy-space-disc]]; in particular $\|f\|_{H^1}=\sup_{0\le r<1}\int_{\mathbb T}|f(r\zeta)|\,dm(\zeta)$ ([[def-analytic-hardy-space-disc]], [[def-complex-differentiability-holomorphic-and-entire]]).



## Proof

**Proof technique:** direct.

1.1 Expansion of the kernel. Fix $z\in\mathbb D$ and $\zeta\in\mathbb T$, put $\xi:=\varphi(\zeta)\in\mathbb C$, so that $|\xi|=1$ and $\xi^{-1}=\overline\xi$, and put $w:=z\xi^{-1}$, so $|w|=|z|<1$. Dividing numerator and denominator of $(\xi+z)/(\xi-z)$ by $\xi$ and using $P(z,\zeta)=\operatorname{Re}\bigl[(\xi+z)/(\xi-z)\bigr]$ gives $P(z,\zeta)=\operatorname{Re}\bigl[(1+w)/(1-w)\bigr]$; since $(1+w)/(1-w)=1+2\sum_{n\ge1}w^n$ for $|w|<1$, and $w^n=z^n\xi^{-n}=z^ne_{-n}(\zeta)$ while $\overline{w}^{\,n}=\overline z^{\,n}\xi^{n}=\overline z^{\,n}e_n(\zeta)$, taking real parts yields $$P(z,\zeta)=1+\sum_{n\ge1}\bigl(z^ne_{-n}(\zeta)+\overline z^{\,n}e_n(\zeta)\bigr),$$ a series that converges absolutely and uniformly in $\zeta\in\mathbb T$ for fixed $z$, because $|z^ne_{-n}(\zeta)|+|\overline z^{\,n}e_n(\zeta)|=2|z|^n$ and $\sum_n|z|^n<\infty$. [L1, L3, algebra]

1.2 (ii) implies (i). Assume (ii) and put $g(z):=\sum_{n\ge0}\widehat\mu(n)z^n$. Since $|\widehat\mu(n)|\le|\mu|(\mathbb T)$ for every $n$, the series converges for $|z|<1$; its sum $g$ is analytic on the open unit disc by [L6] and hence holomorphic there by [[thm-holomorphic-if-and-only-if-analytic]], and (ii) says $P[\mu]=g$. Thus (i) holds. [L4, L6, algebra]

1.3 The $H^1$ bound. For every $z\in\mathbb D$ and every radius $0<r<1$, [L1] and [L4] give $|P[\mu](z)|\le\int_{\mathbb T}P(z,\zeta)\,d|\mu|(\zeta)$ and hence, integrating over the circle $z=r\zeta'$ against $m$, $$\int_{\mathbb T}|P[\mu](r\zeta')|\,dm(\zeta')\le\int_{\mathbb T}\Bigl(\int_{\mathbb T}P(r\zeta',\eta)\,dm(\zeta')\Bigr)d|\mu|(\eta)=|\mu|(\mathbb T);$$ the interchange is Tonelli's theorem applied to the nonnegative product-measurable integrand $(\zeta',\eta)\mapsto P(r\zeta',\eta)$, and the inner integral equals the unit mass of the kernel by [L2] together with translation invariance of $m$, the substitution showing $\int_{\mathbb T}P(r\zeta',\eta)\,dm(\zeta')=\frac{1}{2\pi}\int_0^{2\pi}P_r(\theta)\,d\theta=1$. [L1, L2, L4, L5, algebra]

2.1 Termwise integration and the two-sided expansion. For fixed $z\in\mathbb D$ the partial sums of the series of step 1.1 converge uniformly on $\mathbb T$ to the continuous function $\zeta\mapsto P(z,\zeta)$, so integrating term by term against the finite complex measure $\mu$ gives $$P[\mu](z)=\mu(\mathbb T)+\sum_{n\ge1}\Bigl(\Bigl(\int_{\mathbb T}e_{-n}\,d\mu\Bigr)z^n+\Bigl(\int_{\mathbb T}e_{n}\,d\mu\Bigr)\overline z^{\,n}\Bigr)=\sum_{n\ge0}\widehat\mu(n)\,z^n+\sum_{n<0}\widehat\mu(n)\,\overline z^{\,-n},$$ since $\mu(\mathbb T)=\int e_0\,d\mu=\widehat\mu(0)$ and, for $n\ge1$, $\int e_n\,d\mu=\widehat\mu(-n)$ by the substitution $m=-n$. This identity holds for every finite complex Borel measure $\mu$ and every $z\in\mathbb D$. [step 1.1, L1, L3, L4, algebra]

3.1 Fourier coefficients of the radial traces. Fix $0<r<1$ and $m\in\mathbb Z$, and regard a torus element $\zeta'$ also as the unit-circle point $\varphi(\zeta')$, writing $\zeta'^{\,n}:=e_n(\zeta')$. Since $\overline{\varphi(\zeta')}^{\,|n|}=\varphi(\zeta')^{-|n|}=e_{-|n|}(\zeta')$, evaluating step 2.1 at $z=r\varphi(\zeta')$ gives $$P[\mu](r\zeta')=\sum_{n\ge0}\widehat\mu(n)r^n\zeta'^{\,n}+\sum_{n<0}\widehat\mu(n)r^{|n|}\zeta'^{\,n}=\sum_{n\in\mathbb Z}\widehat\mu(n)r^{|n|}\zeta'^{\,n},$$ a series that converges uniformly in $\zeta'\in\mathbb T$ because $\sum_n|\widehat\mu(n)|r^{|n|}\le|\mu|(\mathbb T)\sum_nr^{|n|}<\infty$ by [L4]; the function $\zeta'\mapsto P[\mu](r\zeta')$ is therefore continuous and its $m$-th Fourier coefficient is $$\int_{\mathbb T}P[\mu](r\zeta')e_{-m}(\zeta')\,dm(\zeta')=\sum_{n\in\mathbb Z}\widehat\mu(n)r^{|n|}\int_{\mathbb T}e_{n-m}\,dm=\widehat\mu(m)\,r^{|m|},$$ by termwise integration and orthonormality. [step 2.1, L3, L4, algebra]

4.1 Equivalence of (ii) and (iii). If (iii) holds, the second sum in the expansion of step 2.1 vanishes termwise, so $P[\mu](z)=\sum_{n\ge0}\widehat\mu(n)z^n$ for every $|z|<1$, which is (ii). Conversely assume (ii). For $m<0$ and $0<r<1$, the right side of (ii) is the uniformly convergent series $\sum_{k\ge0}\widehat\mu(k)r^k\zeta'^{\,k}$ on $\mathbb T$ (uniform convergence as in step 3.1, using $|\widehat\mu(k)|\le|\mu|(\mathbb T)$), so integrating it against $e_{-m}$ and using orthonormality gives $\int_{\mathbb T}P[\mu](r\zeta')e_{-m}(\zeta')\,dm(\zeta')=0$; by step 3.1 this equals $\widehat\mu(m)r^{|m|}$, hence $\widehat\mu(m)=0$ for every $m<0$, which is (iii). [step 2.1, step 3.1, L3, L4, algebra]

4.2 (i) implies (iii), and the Taylor coefficients. Assume (i). By [L6] the holomorphic function $P[\mu]$ equals its Taylor series $P[\mu](z)=\sum_{k\ge0}a_kz^k$ throughout $\mathbb D$, and this series converges uniformly on the closed subdisc $|z|\le r$ for every fixed $0<r<1$. Fix such an $r$ and $m\in\mathbb Z$. Evaluating at $z=r\varphi(\zeta')$ gives the uniformly convergent series $P[\mu](r\zeta')=\sum_{k\ge0}a_kr^k\zeta'^{\,k}$; integrating against $e_{-m}$ and using orthonormality, its $m$-th Fourier coefficient is $a_mr^m$ when $m\ge0$ and $0$ when $m<0$. Comparing with the identity of step 3.1 gives $a_mr^m=\widehat\mu(m)r^m$ for $m\ge0$, so $a_m=\widehat\mu(m)$ for every $m\ge0$ (take any $r\in(0,1)$), and $0=\widehat\mu(m)r^{|m|}$ for $m<0$, so $\widehat\mu(m)=0$ for every $m<0$, which is (iii). [step 3.1, L4, L6, algebra]

5.1 Assembly. Steps 4.1, 1.2 and 4.2 prove that (i), (ii) and (iii) are equivalent: (ii) and (iii) are equivalent by step 4.1, (ii) implies (i) by step 1.2, and (i) implies (iii) by step 4.2, while (iii) implies (ii) again by step 4.1. If the equivalent conditions hold, then by step 4.2 the Taylor coefficients of $P[\mu]$ are $a_m=\widehat\mu(m)$ for $m\ge0$, its holomorphy is (i), and step 1.3 gives $\sup_{0<r<1}\int_{\mathbb T}|P[\mu](r\zeta')|dm(\zeta')=:\|P[\mu]\|_{H^1}\le|\mu|(\mathbb T)<+\infty$ by [L7], so $P[\mu]\in H^1(\mathbb D)$ with the asserted bound. [step 4.1, step 1.2, step 4.2, step 1.3, L7] ∎
