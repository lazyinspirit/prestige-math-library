---
id: lem-fd-finite-mode-compactness
kind: lemma
title: Fourier compactness with coefficient time control
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 3
deps:
  [
    def-fd-periodic-solenoidal-spaces,
    def-fd-weak-time-continuity,
    thm-tonelli-theorem-for-sigma-finite-product-spaces,
    def-countable-choice
  ]
dependency_roles:
  def-fd-periodic-solenoidal-spaces: mathematical-premise
  def-fd-weak-time-continuity: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
physical_scope: null
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Leonid Ryzhik, Math 256B Lecture Notes, version 2024"
      url: "https://virtualmath1.stanford.edu/~ryzhik/notes-256B-24.pdf"
      locator: "§§5.3–5.4, printed pp. 43–48; the present proof uses explicit Fourier
        tails."
    - title: "L. C. Berselli and S. Spirito, On the Existence of Leray–Hopf Weak
        Solutions to the Navier–Stokes Equations, Fluids 6(1), 42 (2021)"
      url: "https://www.mdpi.com/2311-5521/6/1/42/pdf"
      locator: "§4, printed pp. 8–12; the present proof supplies finite-mode tails
        directly."
---

## Statement

Assume Countable Choice. Let $d\ge2$, $L>0$, and $T>0$. Let $z_n:[0,T]\to H$ be continuous
finite-Fourier-sum curves such that, for constants $A,B<\infty$,
$$\sup_{n,t}\|z_n(t)\|_H\le A,\qquad \sup_n\int_0^T\|\nabla z_n(t)\|_2^2dt\le B,$$
and for each $k\in\mathbb Z^d$ there is $C_k<\infty$ with
$|\widehat z_n(k,t)-\widehat z_n(k,s)|\le C_k|t-s|$ for all $n,s,t$.
Then some subsequence converges uniformly in each Fourier coefficient to
$z\in C_w([0,T];H)\cap L^2(0,T;V)$, with
$\sup_t\|z(t)\|_H\le A$ and $\int_0^T\|\nabla z\|_2^2dt\le B$; it also
converges strongly to $z$ in $L^2(0,T;H)$ and, after a further subsequence,
strongly in $H$ for almost every $t$.

## Statement references

[Leonid Ryzhik, *Math 256B Lecture Notes*, §§5.3–5.4, pp. 43–48](https://virtualmath1.stanford.edu/~ryzhik/notes-256B-24.pdf).

[Berselli and Spirito, *On the Existence of Leray–Hopf Weak Solutions*, §4, pp. 8–12](https://www.mdpi.com/2311-5521/6/1/42/pdf).

## Facts & Assumptions

**Given:** Countable Choice, the sequence and bounds in the Statement, the Fourier convention of [[def-fd-periodic-solenoidal-spaces]], and the Bochner spaces of [[def-fd-weak-time-continuity]].

[F1] [[def-fd-periodic-solenoidal-spaces]]: under Countable Choice, Parseval identifies $H$ norms and gradient norms with the corresponding Fourier square sums; frequencies satisfy $|\kappa_k|=2\pi|k|/L$.

[F2] [[def-fd-weak-time-continuity]]: weak continuity is continuity of every fixed $H$ pairing, and $L^2(0,T;V)$ uses strong measurability and the integrated $V$ norm.

[F3] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: for nonnegative measurable functions on the product of the finite time interval and the countable index space, the sum and time integral may be interchanged.

[F4] [[def-countable-choice]]: a countable sequence of nonempty sets admits a choice function, used for the diagonal subsequence and summable-error subsequence.

## Proof

1.1 For each fixed $k$, the coefficients are bounded by $A$ and have common Lipschitz constant $C_k$. For any bounded sequence in the finite-dimensional real coefficient space underlying $\mathbb C^d$, enclose it in a closed cube and repeatedly bisect each side, retaining a closed subcube containing infinitely many sequence terms; at each finite stage one such subcube exists, and their diameters tend to zero. Countable Choice selects increasing indices from the nested infinite index sets, producing a convergent subsequence. Enumerate the countable pairs $(k,q)$ with $k\in\mathbb Z^d$ and rational $q\in[0,T]$, apply this finite-dimensional extraction successively and use Countable Choice for the resulting nested subsequences; the diagonal subsequence converges at every such pair. For each fixed $k$, its common Lipschitz bound and a finite rational mesh then make it uniformly Cauchy on $[0,T]$. Thus one subsequence converges uniformly in every Fourier coefficient. [given, F4, algebra]

2.1 At each time, every finite Fourier sum of squared limiting coefficients is at most $A^2$; Parseval therefore defines $z(t)\in H$ with norm at most $A$. Pairings with finite Fourier sums are continuous in time. For arbitrary $h\in H$, approximate $h$ by its finite Fourier truncations; the pairing error is at most $2A\|h-\Pi_Kh\|_2$, uniformly in time, so $t\mapsto(z(t),h)$ is continuous. Finite gradient sums integrated in time pass to the limit and are bounded by $B$; monotone convergence gives a finite gradient square sum for almost every $t$. On that full-measure set, the finite Fourier truncations $\Pi_Mz(t)$ converge to $z(t)$ in $V$. Each $\Pi_Mz$ is continuous with values in a finite-dimensional subspace of $V$, hence is a uniform limit of measurable simple maps by uniform continuity on $[0,T]$. Keep the actual map $z:[0,T]\to H$ defined by its limiting coefficients at every time. Define a separate $V$-valued representative $\widetilde z(t)=z(t)$ where the gradient square sum is finite and $\widetilde z(t)=0$ on the exceptional null set. The continuous finite-dimensional maps $\Pi_Mz$ converge to $\widetilde z$ in $V$ almost everywhere, so $\widetilde z$ is strongly measurable. Its $V$ norm is integrable in square because the integrated $H$ norm is at most $TA^2$ and the integrated gradient square sum is at most $B$. Thus $\widetilde z$ defines a class in $L^2(0,T;V)$ whose $H$-valued class is represented by the unchanged weakly continuous map $z$. The asserted pointwise $H$ bound and every limiting Fourier coefficient continue to refer to that unchanged map; only the Bochner representative has been assigned zero on the exceptional set. [given, F1, F2, F3, step 1.1]

3.1 If $|k|_\infty>K$, then $|\kappa_k|\ge2\pi K/L$, so Parseval and the gradient bound give
$\int_0^T\sum_{|k|_\infty>K}|\widehat z_n(k,t)|^2dt\le BL^2/(4\pi^2K^2)$; the same estimate holds for $z$. On the finitely many modes $|k|_\infty\le K$, uniform coefficient convergence gives strong $L^2$ convergence. Letting $K\to\infty$ proves strong convergence in $L^2(0,T;H)$. [given, F1, step 2.1]

4.1 The product estimate
$\|z_n\otimes z_n-z\otimes z\|_{L^1_{t,x}}\le(\|z_n\|_{L^2_{t,x}}+\|z\|_{L^2_{t,x}})\|z_n-z\|_{L^2_{t,x}}$
proves strong $L^1$ convergence of the quadratic tensors. Choose a further subsequence for which the squared $L^2_tH$ errors have finite sum. By [F3], their pointwise sum is finite for almost every time, so the subsequence converges strongly in $H$ at each such time. [F2, F3, step 3.1, algebra] ∎

