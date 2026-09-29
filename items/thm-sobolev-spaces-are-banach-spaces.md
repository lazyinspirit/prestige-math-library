---
id: thm-sobolev-spaces-are-banach-spaces
kind: theorem
title: Integer-order Sobolev spaces are Banach
status: draft
origin: pipeline
deps: [def-sobolev-space-wkp-and-its-norm, lem-sobolev-norm-is-well-defined-and-definite, thm-riesz-fischer-completeness-of-l-p, thm-complex-lp-completeness-and-almost-everywhere-subsequences, thm-holder-inequality-for-integrals, thm-complex-holder-minkowski-and-the-quotient-norm, prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration, def-axiom-of-choice]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: Juha Kinnunen, Sobolev Spaces (2026), Chapters 1–2
      url: https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf
      locator: Chapter 1 §1.4, Theorem 1.15 (completeness), printed pp. 11–13
    - title: Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (2011), Chapter 9 §9.1
      url: https://www.math.utoronto.ca/almut/Brezis.pdf
      locator: definition and elementary properties of the Sobolev spaces $W^{m,p}(\Omega)$ in $n$ dimensions; Chapter 8 §8.2 is the one-dimensional case
---

## Statement

Assume the Axiom of Choice, used to invoke the published real and complex
$L^p$ completeness results through their Countable-Choice interface. Let
$\Omega\subseteq\mathbb R^n$ be open, $n\ge1$, let $k\in\mathbb N_0$,
$1\le p\le\infty$, and $\mathbb K\in\{\mathbb R,\mathbb C\}$. Then
$W^{k,p}(\Omega;\mathbb K)$, equipped with the displayed norm of
[[def-sobolev-space-wkp-and-its-norm]], is a complete normed space over
$\mathbb K$.

Both endpoints $p=1$ and $p=\infty$ are included, as is $k=0$, where the
assertion reduces to the completeness of $L^p$. If $\Omega=\varnothing$, then
$W^{k,p}(\Omega;\mathbb K)$ is the zero space and the assertion is trivial.
The Axiom of Choice is used only to derive Countable Choice for the two
published completeness interfaces; no other selection is made. Representative
selection inside the finitely many coordinate classes is finite and
choice-free.

## Facts & Assumptions

**Given:** AC, an open $\Omega\subseteq\mathbb R^n$, $k\in\mathbb N_0$, $1\le p\le\infty$, a scalar field $\mathbb K\in\{\mathbb R,\mathbb C\}$, and a sequence $(u_j)_{j\in\mathbb N}$ that is Cauchy in $W^{k,p}(\Omega;\mathbb K)$ for the displayed norm.

[F1] $W^{k,p}(\Omega;\mathbb K)$ consists of the classes $u\in L^p(\Omega;\mathbb K)$ for which every $\alpha$ in the finite set $\mathcal A_k=\{\alpha:|\alpha|\le k\}$ has an $L^p$ weak-derivative class $D^\alpha u$, and the displayed formula is its norm ([[def-sobolev-space-wkp-and-its-norm]]).

[F2] That displayed formula is finite, independent of representatives, absolutely homogeneous, subadditive, and vanishes exactly on the zero class ([[lem-sobolev-norm-is-well-defined-and-definite]]).

[F3] Under Countable Choice, real $L^p(\mu)$ is complete for every $1\le p\le\infty$ and every measure space ([[thm-riesz-fischer-completeness-of-l-p]]).

[F4] Under countable choice, complex $L^p(\mu;\mathbb C)$ is complete for every $1\le p\le\infty$ ([[thm-complex-lp-completeness-and-almost-everywhere-subsequences]]).

[F5] Real Hölder gives $\int|fg|\le\|f\|_p\|g\|_{p'}$ for conjugate exponents, including the endpoint pairs $(1,\infty)$ and $(\infty,1)$ ([[thm-holder-inequality-for-integrals]]).

[F6] The same Hölder estimate holds for complex-valued representatives and includes both endpoints ([[thm-complex-holder-minkowski-and-the-quotient-norm]]).

[F7] Under Countable Choice every compact subset of $\mathbb R^n$ has finite Lebesgue measure ([[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]]).

[F8] In ZF, the Axiom of Choice implies the Axiom of Countable Choice ([[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]]).

[F9] The Axiom of Choice is the assertion that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** coordinatewise $L^p$ completeness plus passage of each weak test identity to the limit.

1.1 By [F8], AC gives Countable Choice, so the completeness interfaces [F3] and [F4] and the finite-measure property [F7] are available. The index set $\mathcal A_k$ of [F1] is finite. For every $\alpha\in\mathcal A_k$ the classes $D^\alpha u_j$ exist, and comparing the displayed norm formula with the corresponding real or complex $L^p$ norm of one coordinate gives $$\|D^\alpha u_j-D^\alpha u_l\|_{L^p(\Omega)}\le\|u_j-u_l\|_{W^{k,p}(\Omega)}$$ for the finite-$p$ sum and for the $p=\infty$ maximum alike. Hence $(D^\alpha u_j)_j$ is Cauchy in $L^p(\Omega;\mathbb K)$ for every $\alpha$, and $(u_j)_j$ is Cauchy in $L^p(\Omega;\mathbb K)$ because $D^0u_j=u_j$. [F1, F2, F3, F4, F7, F8, F9, given]

2.1 By the completeness results [F3] for $\mathbb K=\mathbb R$ and [F4] for $\mathbb K=\mathbb C$, each coordinate Cauchy sequence converges in $L^p(\Omega;\mathbb K)$: there are classes $v_\alpha\in L^p(\Omega;\mathbb K)$ with $$D^\alpha u_j\longrightarrow v_\alpha\quad\text{in }L^p(\Omega;\mathbb K),\qquad \alpha\in\mathcal A_k.$$ Put $u:=v_0$, so $u_j\to u$ in $L^p(\Omega;\mathbb K)$. Each class $v_\alpha$ has some measurable representative, and $\mathcal A_k$ is finite, so choosing one representative per coordinate is a finite selection, provable without any choice principle. [F1, F3, F4, step 1.1, given]

3.1 Fix $\varphi\in C_c^\infty(\Omega)$ and put $K=\operatorname{supp}\varphi$. By [F7], $K$ has finite measure, and both $\varphi$ and $D^\alpha\varphi$ are bounded and supported in $K$ for every $\alpha$. For each $j$ and $\alpha$, [F1] gives the weak identity $$\int_\Omega u_j\,D^\alpha\varphi\,dx=(-1)^{|\alpha|}\int_\Omega (D^\alpha u_j)\varphi\,dx.$$ Since $D^\alpha u_j\to v_\alpha$ and $u_j\to u$ in $L^p(\Omega)$, restriction to $K$ gives norm convergence in $L^p(K)$, and Hölder [F5] for real and [F6] for complex representatives, including the endpoint pairs, yields $$\left|\int_\Omega(u_j-u)D^\alpha\varphi\,dx\right|\le\|u_j-u\|_{L^p(K)}\|D^\alpha\varphi\|_{L^{p'}(K)}\longrightarrow0$$ and $$\left|\int_\Omega(D^\alpha u_j-v_\alpha)\varphi\,dx\right|\le\|D^\alpha u_j-v_\alpha\|_{L^p(K)}\|\varphi\|_{L^{p'}(K)}\longrightarrow0.$$ Passing to the limit in the identity gives $$\int_\Omega u\,D^\alpha\varphi\,dx=(-1)^{|\alpha|}\int_\Omega v_\alpha\varphi\,dx.$$ [F1, F5, F6, F7, step 2.1]

4.1 The test function in step 3.1 was arbitrary and each $v_\alpha$ is an $L^p$ class, so the displayed identity exhibits $v_\alpha$ as a weak $\alpha$-derivative of $u$ in the sense of [F1]; hence $u\in W^{k,p}(\Omega;\mathbb K)$ and $D^\alpha u=v_\alpha$ for every $\alpha\in\mathcal A_k$. [F1, F2, step 3.1]

5.1 Finally, $\|u_j-u\|_{W^{k,p}(\Omega)}\to0$: for finite $p$ the displayed norm of the difference is the $p$-th root of the finite sum of the numbers $\|D^\alpha u_j-v_\alpha\|_{L^p}^p$, each of which tends to $0$, and for $p=\infty$ it is the maximum of the finitely many numbers $\|D^\alpha u_j-v_\alpha\|_{L^\infty}$, which likewise tends to $0$. Therefore every Cauchy sequence in $W^{k,p}(\Omega;\mathbb K)$ converges in its norm, and by [F2] that norm makes $W^{k,p}(\Omega;\mathbb K)$ a normed space. [F1, F2, step 2.1, step 4.1]

6.1 The boundary cases are included. For $k=0$ we have $\mathcal A_0=\{0\}$, so the argument reduces to the single convergence $u_j\to u$ and is exactly the completeness used in step 2.1. If $\Omega=\varnothing$, then every $L^p$ class is zero by [F1], the sum over $\mathcal A_k$ is a finite sum of zeros, and the unique class is its own limit. The endpoints $p=1$ and $p=\infty$ were handled in steps 1.1 and 3.1 through the endpoint clauses of [F5] and [F6]. The only choice used is Countable Choice, obtained from AC by [F8]; no subsequence or pointwise convergence of the full sequence is used. $\square$ [F1, F3, F4, F5, F6, F8, step 5.1]

## Sources

- Juha Kinnunen, *Sobolev Spaces*, Chapter 1 §1.4, Theorem 1.15
  (completeness of $W^{k,p}$), printed pp. 11–13: a Cauchy sequence is
  Cauchy in every derivative coordinate, the coordinate limits are obtained
  from $L^p$ completeness, and each limit is identified as the weak
  derivative of the limit class by passing the test identities to the limit.
- Haim Brezis, *Functional Analysis, Sobolev Spaces and Partial Differential
  Equations*, Chapter 8 §8.2: $W^{k,p}$ is a Banach space, proved by the same
  coordinate argument.
- The endpoint Hölder clauses are those of
  [[thm-holder-inequality-for-integrals]] and
  [[thm-complex-holder-minkowski-and-the-quotient-norm]]; the completeness
  interfaces are [[thm-riesz-fischer-completeness-of-l-p]] and
  [[thm-complex-lp-completeness-and-almost-everywhere-subsequences]].
