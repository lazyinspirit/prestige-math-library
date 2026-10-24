---
id: lem-weak-stability-of-sobolev-derivatives
kind: lemma
title: Weak derivatives persist under local Lp limits
status: published
origin: pipeline
deps: [def-weak-derivative-of-a-locally-integrable-function, lem-weak-derivatives-are-unique-almost-everywhere, lem-weak-derivative-is-independent-of-lp-representatives, thm-holder-inequality-for-integrals, thm-complex-holder-minkowski-and-the-quotient-norm, prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets, def-sobolev-space-wkp-and-its-norm, def-l-p-space-as-a-quotient-by-null-functions, def-complex-lp-and-euclidean-test-function-conventions, def-countable-choice]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: Juha Kinnunen, Sobolev Spaces (2026)
      url: https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf
      locator: Chapter 1 §1.4, Theorem 1.15 (completeness), printed pp. 11–13
    - title: John K. Hunter, Notes on Partial Differential Equations (2014)
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: Chapter 3 §3.4, Theorem 3.20, printed p. 56
---

## Statement

Assume Countable Choice. Let $\Omega\subseteq\mathbb R^n$ be open with
$n\ge1$, let $\mathbb K\in\{\mathbb R,\mathbb C\}$, choose
$1\le p,q\le\infty$ and $\alpha\in\mathbb N_0^n$, and let
$u_j,u\in L^p_{\mathrm{loc}}(\Omega;\mathbb K)$ and
$v_j,v\in L^q_{\mathrm{loc}}(\Omega;\mathbb K)$ for $j\in\mathbb N$.
Assume each $v_j$ is a weak $\alpha$-derivative of $u_j$, and
$$u_j\longrightarrow u\ \text{in }L^p_{\mathrm{loc}},\qquad v_j\longrightarrow v\ \text{in }L^q_{\mathrm{loc}}.$$
Here $f\in L^r_{\mathrm{loc}}$ means $f|_K\in L^r(K)$ for every compact
$K\subseteq\Omega$, and convergence means convergence in $L^r(K)$ on every
such $K$, with Lebesgue measure restricted to $K$.
Then $v$ is a weak $\alpha$-derivative of $u$:
$$D^\alpha u=v\quad\text{weakly on }\Omega.$$
It is the unique locally integrable value class under Countable Choice. In
particular, if $u_j\in W^{k,p}_{\mathrm{loc}}(\Omega;\mathbb K)$ and
$|\alpha|\le k$, the limit of the derivative sequence $D^\alpha u_j$ in
$L^q_{\mathrm{loc}}$ is the weak derivative class $D^\alpha u$ whenever the
stated convergences hold.

If $\Omega=\varnothing$, all classes and tests are zero and the assertion is
vacuous. No almost-everywhere convergence of the sequence is assumed.

## Facts & Assumptions

**Given:** Countable Choice, an open $\Omega\subseteq\mathbb R^n$, a scalar field $\mathbb K\in\{\mathbb R,\mathbb C\}$, conjugate exponents $p,p'\in[1,\infty]$ and $q,q'\in[1,\infty]$, a multi-index $\alpha$, and the two local $L^p$ convergence hypotheses.

[F1] A weak derivative is characterized by the signed test identity ([[def-weak-derivative-of-a-locally-integrable-function]]).

[F2] Locally integrable weak-derivative value classes are unique under Countable Choice ([[lem-weak-derivatives-are-unique-almost-everywhere]]).

[F3] Real Hölder gives the product-integral estimate for conjugate exponents, including $(1,\infty)$ and $(\infty,1)$ ([[thm-holder-inequality-for-integrals]]).

[F4] The same Hölder estimate holds for complex-valued representatives and includes both endpoints ([[thm-complex-holder-minkowski-and-the-quotient-norm]]).

[F5] Countable Choice makes every compact subset of $\mathbb R^n$ have finite Lebesgue measure ([[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]]).

[F6] The notation $W^{k,p}_{\mathrm{loc}}$ means membership on every relatively compact open restriction, and each Sobolev derivative has an $L^p$ value class ([[def-sobolev-space-wkp-and-its-norm]]).

[F7] Real $L^p$ classes identify representatives equal almost everywhere ([[def-l-p-space-as-a-quotient-by-null-functions]]).

[F8] Complex $L^p$ classes use the same almost-everywhere quotient convention ([[def-complex-lp-and-euclidean-test-function-conventions]]).

[F9] Countable Choice is the assertion that every countable family of nonempty sets has a choice function ([[def-countable-choice]]).

[F10] Under Countable Choice, locally integrable representatives of $L^p$ classes give the same weak-derivative relation, and the representatives are locally integrable on compact test supports ([[lem-weak-derivative-is-independent-of-lp-representatives]]).

**Choice accounting:** Countable Choice is used for the finite-measure property [F5], representative and local-integrability interface [F10], and uniqueness conclusion [F2]. The test-identity limit uses no subsequence, pointwise convergence, or full Axiom of Choice.

## Proof

**Proof technique:** pass each weak test identity to the limit using Hölder against the compactly supported test and its derivative.

1.1 Fix $\varphi\in C_c^\infty(\Omega)$ and let $K=\operatorname{supp}\varphi$. By [F5], $K$ has finite measure. Both $\varphi$ and $D^\alpha\varphi$ are bounded and supported in $K$, so they belong to every finite-exponent $L^r(K)$ and to $L^\infty(K)$. For $1<r<\infty$, Hölder with the constant function $1$ shows that every $L^r(K)$ class is integrable; at $r=1$ this is the definition, and at $r=\infty$ its integral is bounded by the essential supremum times $|K|$. By [F10], the assumed local Lp classes and weak derivative data have locally integrable representatives, independent of their choice in the test identity. Thus all data in the weak identities are locally integrable, including when $p$ or $q$ is an endpoint. [F3, F4, F5, F7, F8, F9, F10, given]

2.1 For each $j$, [F1] gives $$\int_\Omega u_jD^\alpha\varphi\,dx =(-1)^{|\alpha|}\int_\Omega v_j\varphi\,dx.$$ By [F10], these test identities and pairings are independent of the chosen locally integrable representatives. Hölder on $K$, using [F3] for real values and [F4] for complex values, gives $$\left|\int_\Omega (u_j-u)D^\alpha\varphi\,dx\right| \le\|u_j-u\|_{L^p(K)}\|D^\alpha\varphi\|_{L^{p'}(K)}\longrightarrow0,$$ and $$\left|\int_\Omega (v_j-v)\varphi\,dx\right| \le\|v_j-v\|_{L^q(K)}\|\varphi\|_{L^{q'}(K)}\longrightarrow0.$$ These estimates also hold at $p=1,\infty$ and $q=1,\infty$ with the conjugate endpoint exponents. Passing to the limit in the identity therefore gives $$\int_\Omega uD^\alpha\varphi\,dx =(-1)^{|\alpha|}\int_\Omega v\varphi\,dx.$$ [F1, F3, F4, F5, F9, F10, step 1.1, given]

3.1 Since $\varphi$ was arbitrary, the last identity is exactly the weak $\alpha$-derivative definition, so $v=D^\alpha u$ weakly. By [F2] this locally integrable value is unique as an almost-everywhere class. The statement about local Sobolev sequences is the same conclusion applied to their derivative classes from [F6]; no convergence of derivatives other than the indicated $D^\alpha u_j$ is asserted. [F1, F2, F6, F9, step 2.1, given]

4.1 If $\alpha=0$, the test identity and uniqueness identify $v$ with the class $u$, so the argument covers order zero. In dimension $n=1$ the same test and compact-support estimates apply with the single coordinate. If $K=\varnothing$, then $\varphi=0$ and both sides vanish. On the empty domain, or when all sequence and limit classes are zero, the identity is zero on both sides. The arguments for $p=1,\infty$ and $q=1,\infty$ were included in step 2.1. [F1, F2, F3, F4, F5, F9, step 3.1, given]

The proof transfers the test identities directly. It does not infer almost-everywhere convergence from norm convergence or exchange the limit with an integral without the displayed Hölder estimates. $\square$
