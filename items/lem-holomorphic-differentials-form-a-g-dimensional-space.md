---
id: lem-holomorphic-differentials-form-a-g-dimensional-space
kind: lemma
title: The space of holomorphic differentials and the degree of the canonical divisor
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 14
deps:
  - def-axiom-of-choice
  - def-bigraded-complex-differential-forms
  - def-divisor-principal-and-canonical-divisor-riemann-surface
  - def-genus-and-euler-characteristic-compact-riemann-surface
  - def-line-bundle-associated-to-a-divisor
  - def-meromorphic-differential-on-a-riemann-surface
  - def-wirtinger-derivatives
  - thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann
  - thm-d-dbar-decomposition-and-identities
  - thm-isolated-zeros-holomorphic-function
  - thm-riemann-roch-compact-riemann-surfaces
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Karl Otto Forster, Lectures on Riemann Surfaces (GTM 81, Springer 1981), translated by Bruce Gilligan"
      url: "http://ronan.terpereau.math.cnrs.fr/Master_Class_2023_Dijon/FORSTER_Lectures%20on%20Riemann%20Surfaces.pdf"
      locator: "Ch. 2 §16.9, printed pp. 129–130: Riemann–Roch; §17.10, printed p. 138: dim H^0(X, Ω)=g; §17.12, printed pp. 139–140: every canonical divisor has degree 2g−2"
    - title: "Curtis T. McMullen, Riemann Surfaces, Harvard Math 213b course notes (2026)"
      url: "https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf"
      locator: "Ch. 6, Corollary 6.5 and Theorem 6.9, printed pp. 56–58: dim Ω(X)≤g and the degree of a nonzero meromorphic form; Ch. 15, Theorem 15.1 and proof, printed pp. 127–128: its full period lattice has rank 2g, which implies dim Ω(X)=g"
    - title: "Eduard Looijenga, Riemann Surfaces (2007 author lecture notes)"
      url: "https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf"
      locator: "Ch. 6 §2, printed pp. 54–56: meromorphic differentials, their orders, canonical divisors and the degree convention"
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Assume the full Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a compact connected Riemann surface of topological genus $g$ ([[def-genus-and-euler-characteristic-compact-riemann-surface]]) and let $\Omega(X)$ be its complex vector space of holomorphic differentials ([[def-meromorphic-differential-on-a-riemann-surface]]). The Riemann–Roch theorem supplies a nonzero meromorphic differential; for any such $\eta$, put $K:=(\eta)$ and define $\ell(K):=\dim_{\mathbb C}H^0(X,\mathcal O_X(K))$. Then:

1. $\dim_{\mathbb C}\Omega(X)=\ell(K)=g$; hence $\Omega(X)=0$ for $g=0$ and $\Omega(X)\ne0$ for $g\ge1$ ([[thm-riemann-roch-compact-riemann-surfaces]], [[def-line-bundle-associated-to-a-divisor]]).
2. Every nonzero $\omega\in\Omega(X)$ has effective divisor $(\omega)$ of degree $2g-2$, so it has exactly $2g-2$ zeros counted with multiplicity. In particular, for $g=1$ a nonzero holomorphic differential has no zeros, and for $g=0$ there is no nonzero holomorphic differential ([[thm-riemann-roch-compact-riemann-surfaces]], [[def-divisor-principal-and-canonical-divisor-riemann-surface]]).
3. If $\omega\ne0$, its zeros are isolated and its zero set is finite ([[thm-isolated-zeros-holomorphic-function]], [[def-meromorphic-differential-on-a-riemann-surface]]).
4. Every holomorphic differential is closed: $d\omega=0$ ([[thm-d-dbar-decomposition-and-identities]], [[def-bigraded-complex-differential-forms]], [[def-wirtinger-derivatives]], [[thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann]]).

Full AC enters through the genus and Riemann–Roch interfaces used for the dimension and canonical-degree claims; the local zero and closedness arguments use no choice.

## Facts & Assumptions

**Given:** Full AC, a compact connected Riemann surface $X$ of topological genus $g$, and its holomorphic differentials.

[F1] For every divisor $D$, Riemann–Roch gives $\ell(D)-h^0(X,K_X\otimes\mathcal O_X(D)^*)=\deg D+1-g$, with the relevant spaces finite-dimensional ([[thm-riemann-roch-compact-riemann-surfaces]]).

[F2] For a canonical divisor $K_\eta=(\eta)$, $\mathcal O_X(K_\eta)\cong K_X$ ([[def-line-bundle-associated-to-a-divisor]]).

[F3] The holomorphic sections of $K_X$ are exactly the holomorphic differentials ([[def-line-bundle-associated-to-a-divisor]]).

[F4] The divisor-bundle construction gives $\mathcal O_X(-D)\cong\mathcal O_X(D)^*$ and $\mathcal O_X(0)\cong X\times\mathbb C$ ([[def-line-bundle-associated-to-a-divisor]]).

[F5] Any two canonical divisors are linearly equivalent ([[def-divisor-principal-and-canonical-divisor-riemann-surface]]).

[F6] Principal divisors have degree zero, so degree is constant on linear-equivalence classes ([[def-divisor-principal-and-canonical-divisor-riemann-surface]]).

[F7] A nonzero meromorphic differential has no local coefficient that vanishes identically near a point; its local order defines its divisor ([[def-meromorphic-differential-on-a-riemann-surface]]).

[F8] Every divisor on compact $X$ has finite support ([[def-divisor-principal-and-canonical-divisor-riemann-surface]]).

[F9] A holomorphic function on a complex domain that is not identically zero has only isolated zeros ([[thm-isolated-zeros-holomorphic-function]]).

[F10] The exterior derivative decomposes as $d=\partial+\bar\partial$ on complex forms ([[thm-d-dbar-decomposition-and-identities]]).

[F11] On a complex curve, a local $(1,0)$-form is $h\,dz$ and $dz\wedge dz=0$ ([[def-bigraded-complex-differential-forms]]).

[F12] For a smooth coefficient, $\partial h=(\partial_z h)dz$ ([[def-wirtinger-derivatives]]).

[F13] A holomorphic function is real-totally differentiable and satisfies $\partial_{\bar z}h=0$ ([[thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann]]).

[F14] The genus $g$ is the nonnegative integer determined by the topological type of $X$ ([[def-genus-and-euler-characteristic-compact-riemann-surface]]).

[F15] Riemann–Roch on compact $X$ supplies a nonzero meromorphic differential $\eta$ ([[thm-riemann-roch-compact-riemann-surfaces]]).

[F16] Riemann–Roch states $\ell(0)=1$ ([[thm-riemann-roch-compact-riemann-surfaces]]).

[F17] Full AC is assumed by the genus and Riemann–Roch interfaces used for the dimension and canonical-degree claims ([[def-axiom-of-choice]]).
## Proof

**Proof technique:** Riemann–Roch at the zero and canonical divisors, followed by local differential calculations.

1.1 By [F15] choose a nonzero meromorphic differential $\eta$ and put $K:=(\eta)$. By [F2], $\mathcal O_X(K)\cong K_X$, so $\ell(K)=\dim_{\mathbb C}\Omega(X)$; also $\mathcal O_X(0)$ is trivial and $\ell(0)=1$. The degree of $K$ is independent of this choice by [F5, F6]. [F2, F3, F4, F5, F6, F15, F16, F17, given]

1.2 At any point choose a holomorphic coordinate and write $\omega=h\,dz$. For nonzero $\omega$, [F7] ensures $h$ is not identically zero near that point; [F9] makes its zeros isolated. The zero set is contained in the finite support of $(\omega)$ by [F8], so it is finite. [F7, F8, F9, given]

2.1 Apply [F1] with $D=0$. Since $K_X\otimes\mathcal O_X(0)^*\cong K_X$, this gives $\ell(0)-\dim\Omega(X)=1-g$. Using step 1.1 yields $\dim\Omega(X)=g$. Therefore $\Omega(X)=0$ for $g=0$ and is nonzero for $g\ge1$. [F1, F2, F3, F4, F14, step 1.1, algebra]

3.1 Apply [F1] with $D=K$. By [F2], $K_X\otimes\mathcal O_X(K)^*\cong X\times\mathbb C$, so the right-hand cohomology term has dimension $\ell(0)=1$. Step 2.1 gives $\ell(K)=g$, and hence $g-1=\deg K+1-g$. Thus $\deg K=2g-2$. [F1, F2, F4, F6, step 1.1, step 2.1, algebra]

4.1 If $\omega\ne0$ is holomorphic, it has no poles, so $(\omega)$ is effective. It is a canonical divisor, hence linearly equivalent to $K$ by [F5]; therefore $\deg(\omega)=\deg K$ by [F6] and equals $2g-2$ by step 3.1. This degree is the number of zeros counted with multiplicity. For $g=1$ the effective divisor has degree zero and is empty; for $g=0$ no such $\omega$ exists by step 2.1. [F5, F6, F7, F8, step 2.1, step 3.1, given]

5.1 In a holomorphic chart write $\omega=h\,dz$. By [F13], $\bar\partial h=0$. Using [F10], [F11] and [F12], $d\omega=dh\wedge dz=(\partial h+\bar\partial h)\wedge dz=(\partial_z h)dz\wedge dz=0$. This holds in every chart, so $d\omega=0$ globally. [F10, F11, F12, F13, given] ∎
