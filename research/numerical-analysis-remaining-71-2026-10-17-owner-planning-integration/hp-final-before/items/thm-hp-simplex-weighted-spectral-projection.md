---
id: thm-hp-simplex-weighted-spectral-projection
kind: theorem
title: Weighted simplex polynomial projection has explicit p-rates
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  - def-matching-affine-simplicial-meshes
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: Matthias Braess and Christoph Schwab, Approximation on polyhedral domains with geometric meshes
      url: https://www.sam.math.ethz.ch/sam_reports/reports_final/reports1999/1999-08_fp.pdf
      locator: "§3, Theorem 3.3 and proof, printed pp. 6–8: weighted simplex orthogonal degree layers and eigenvalues n(n+d+|alpha|)."
    - title: Leszek F. Demkowicz, Mathematical Theory of Finite Elements
      url: https://users.oden.utexas.edu/~leszek/classes/EM394F/book.pdf
      locator: "§3.1.4, printed pp. 64–68: hierarchical Jacobi polynomial bases; used as independent weighted-polynomial context, not as an unweighted H1 supplier."
---

## Statement

Let $\widehat K$ be the reference simplex of [[def-matching-affine-simplicial-meshes]], let $\alpha=(\alpha_0,\ldots,\alpha_d)$ have nonnegative real entries, and let $\omega_\alpha=\prod_{j=0}^d\lambda_j^{\alpha_j}$, where $\lambda_j$ are its barycentric coordinates. Give polynomials the inner product $\langle f,g\rangle_\alpha=\int_{\widehat K}\omega_\alpha fg$. Put $\mathbb P_{-1}=\{0\}$ and let $E_n=\mathbb P_n(\widehat K)\ominus\mathbb P_{n-1}(\widehat K)$ in this weighted inner product. For a finite sum $u=\sum_{n\ge0}u_n$, $u_n\in E_n$, define
$$
\|u\|_{\mathcal H_\alpha^s}^2:=\sum_{n\ge0}(1+\mu_n)^s\|u_n\|_{L^2(\omega_\alpha)}^2,\qquad \mu_n=n(n+d+|\alpha|),
$$
and define $\mathcal H_\alpha^s$ as the completion of these finite sums. If $m\ge\ell\ge0$, its orthogonal degree truncation $P_pu=\sum_{n=0}^pu_n$ obeys
$$
\|u-P_pu\|_{\mathcal H_\alpha^\ell}\le(1+\mu_{p+1})^{-(m-\ell)/2}\|u\|_{\mathcal H_\alpha^m}.
$$
For $q\in\mathbb P_p(\widehat K)$, $\|q\|_{\mathcal H_\alpha^m}\le(1+\mu_p)^{(m-\ell)/2}\|q\|_{\mathcal H_\alpha^\ell}$. These are estimates in the explicitly coefficient-defined scale $\mathcal H_\alpha^s$; they do not identify that scale with ordinary unweighted $H^s(\widehat K)$.

## Facts & Assumptions

**Given:** A dimension $d\ge2$, $\alpha_j\ge0$, real exponents $m\ge\ell\ge0$, and degree $p\ge0$.

[F1] The reference simplex is a bounded nondegenerate simplex with barycentric coordinates; its matching-mesh and reference-map conventions are fixed by [[def-matching-affine-simplicial-meshes]].

[A1] $\mathbb P_n(\widehat K)$ is finite-dimensional, and $\omega_\alpha$ is positive in the open simplex and integrable. Thus its weighted $L^2$ inner product is positive definite on polynomials.

## Proof

1.1 Since $\omega_\alpha>0$ in the interior, a nonzero polynomial cannot have weighted square integral zero: continuity gives a ball on which its absolute value is bounded below by a positive number. Integrability follows from $\alpha_j\ge0$ on the bounded simplex. Hence the weighted inner product is positive definite on each finite-dimensional polynomial space. Orthogonal projection onto $\mathbb P_{n-1}$ therefore gives the finite-dimensional orthogonal decomposition $\mathbb P_n=E_0\oplus\cdots\oplus E_n$. The scale in the Statement is the completion of this orthogonal-sum norm, so its coefficient description and truncation are well-defined. [F1, A1, given, algebra]

2.1 For a finite sum $u=\sum u_n$, orthogonality gives $\|u-P_pu\|_{\mathcal H_\alpha^\ell}^2=\sum_{n>p}(1+\mu_n)^\ell\|u_n\|_\alpha^2\le(1+\mu_{p+1})^{\ell-m}\sum_{n>p}(1+\mu_n)^m\|u_n\|_\alpha^2$, because $\mu_n=n(n+d+|\alpha|)$ is increasing for $n\ge0$. Taking square roots proves the tail estimate for finite sums. [given, step 1.1, algebra]

3.1 Truncation is contractive in every coefficient norm $\mathcal H_\alpha^s$, and finite sums are dense by the definition of the completion. The finite-sum estimate in step 2.1 therefore passes to every $u\in\mathcal H_\alpha^m$. If $q\in\mathbb P_p$, each degree layer has $n\le p$, so $(1+\mu_n)^{m-\ell}\le(1+\mu_p)^{m-\ell}$ term by term; summing proves the inverse estimate. Neither argument invokes a derivative norm, which is why neither implies an unweighted Sobolev estimate. [step 1.1, step 2.1, algebra] ∎
