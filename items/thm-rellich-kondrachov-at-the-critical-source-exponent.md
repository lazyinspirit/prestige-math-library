---
id: thm-rellich-kondrachov-at-the-critical-source-exponent
kind: theorem
title: "Rellich--Kondrachov at the critical source exponent $p=n$"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 4
deps: [thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain, thm-critical-sobolev-embedding-into-every-finite-lq, thm-lyapunov-interpolation-inequality-for-l-p-norms, thm-holder-inequality-for-integrals, def-sobolev-extension-domain-and-extension-operator, def-sobolev-space-wkp-and-its-norm, def-l-p-space-as-a-quotient-by-null-functions, def-compactly-embedded-normed-spaces, def-countable-choice, def-dependent-choice, def-axiom-of-choice, thm-riesz-fischer-completeness-of-l-p, thm-higher-order-sobolev-embedding]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (archived 2025 author manuscript)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Theorem 9.31 together with the interpolation remark in its proof (replace $p^{*}$ by any value larger than $q$ when $p=n$), printed p. 218"
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Theorem 3.49(2), the $kp=n$ clause, printed p. 76"
    - title: "Juha Kinnunen, Sobolev Spaces (Aalto University, 2026, complete graduate lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf"
      locator: "Chapter 3, Section 3.6, the compactness theorem and the discarded endpoint, printed pp. 85-89"
---

## Statement

Assume the Axiom of Choice. Let $n\ge2$ and let $\Omega\subseteq\mathbb R^n$
be a bounded extension domain. Then $W^{1,n}(\Omega)$ is compactly embedded in
$L^q(\Omega)$ for every finite $q$: for each fixed $1\le q<\infty$, every
sequence bounded in $W^{1,n}(\Omega)$ has a subsequence converging in
$L^q(\Omega)$. There is no claim of compactness into $L^\infty$.

## Facts & Assumptions

**Given:** the Axiom of Choice, a bounded extension domain $\Omega\subseteq\mathbb R^n$, $n\ge2$, and a sequence $(u_j)$ with $M:=\sup_j\|u_j\|_{W^{1,n}(\Omega)}<\infty$.

[F1] *$L^n$-compactness.* Some subsequence converges in $L^n(\Omega)$. ([[thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain]], [[def-sobolev-extension-domain-and-extension-operator]], [[def-compactly-embedded-normed-spaces]])

[F2] *Critical embedding into every finite $L^{q'}$.* For every finite $q'>1$ there is $C(q')$ with $\|v\|_{L^{q'}(\Omega)}\le C(q')\|v\|_{W^{1,n}(\Omega)}$ for all $v\in W^{1,n}(\Omega)$; the sequence is therefore uniformly bounded in $L^{q'}(\Omega)$ for each fixed finite $q'$. ([[thm-higher-order-sobolev-embedding]] (case $k=1$, $p=n$), [[def-sobolev-space-wkp-and-its-norm]])

[F3] *Interpolation and H\"older.* For $n\le b<q'$, $\|g\|_b\le\|g\|_n^{\theta}\|g\|_{q'}^{1-\theta}$ with $1/b=\theta/n+(1-\theta)/q'$; for $b\le n$, $\|g\|_{L^b(\Omega)}\le|\Omega|^{1/b-1/n}\|g\|_{L^n(\Omega)}$. ([[thm-lyapunov-interpolation-inequality-for-l-p-norms]], [[thm-holder-inequality-for-integrals]], [[def-l-p-space-as-a-quotient-by-null-functions]])

[F4] Under Countable Choice, each $L^q(\Omega)$, $1\le q<\infty$, is complete. ([[thm-riesz-fischer-completeness-of-l-p]])

## Proof

**Proof technique:** direct.

1.1 If $\Omega=\varnothing$, all classes are zero and the claim is immediate. Otherwise fix $1\le q<\infty$ and choose $q'>\max\{q,n\}$. By [F1] extract a subsequence converging in $L^n(\Omega)$ and write $w_k:=u_{j_k}$; by [F2] the differences satisfy $\|w_k-w_\ell\|_{L^{q'}(\Omega)}\le2C(q')M$. [F1, F2, given]

2.1 If $q\le n$, then $\|w_k-w_\ell\|_{L^q}\le|\Omega|^{1/q-1/n}\|w_k-w_\ell\|_{L^n}\to0$ by [F3] and step 1.1. If $q>n$, then $n<q<q'$ and [F3] gives $\|w_k-w_\ell\|_{L^q}\le\|w_k-w_\ell\|_{L^n}^{\theta}(2C(q')M)^{1-\theta}\to0$ for the corresponding $\theta\in(0,1)$. In both cases $(w_k)$ is Cauchy, hence convergent by [F4], in $L^q(\Omega)$. [F1, F3, F4, step 1.1]

3.1 Every bounded sequence in $W^{1,n}(\Omega)$ therefore has a subsequence converging in $L^q(\Omega)$ for each fixed finite $q$, so $W^{1,n}(\Omega)\Subset L^q(\Omega)$ in the sense of [[def-compactly-embedded-normed-spaces]]. No compactness into $L^\infty$ is asserted. The proof uses only finite target exponents. The Axiom of Choice is inherited through [F1] and the supplier [F2]. [F1, F2, step 1.1, step 2.1] ∎ 