---
id: cor-subcritical-compactness-for-w-one-p-zero-on-arbitrary-bounded-open-sets
kind: corollary
title: "Subcritical compactness for $W^{1,p}_0$ on arbitrary bounded open sets"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
deps: [thm-rellich-compactness-from-w-one-p-zero-to-lp, cor-sobolev-inequality-for-w-one-p-zero, def-sobolev-conjugate-exponent, thm-lyapunov-interpolation-inequality-for-l-p-norms, thm-holder-inequality-for-integrals, def-sobolev-space-wkp-and-its-norm, def-wkp-zero-as-a-sobolev-closure, def-l-p-space-as-a-quotient-by-null-functions, def-countable-choice, def-dependent-choice, def-axiom-of-choice, thm-riesz-fischer-completeness-of-l-p, thm-gagliardo-nirenberg-sobolev-inequality-for-p-one, cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn, cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences]
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
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Theorem 3.45 and display (3.18): the interpolation of the $L^p$-rate with the Sobolev embedding to every $q<p^{*}$, printed p. 74"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (archived 2025 author manuscript)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Theorem 9.31, the $W^{1,p}_0(U)$ clause with the interpolation step of its proof, printed p. 218"
---

## Statement

Assume the Axiom of Choice. Let $n\ge2$, let $\Omega\subseteq\mathbb R^n$ be a
bounded open set with no boundary regularity assumed, let $1\le p<n$ and
$p^{*}=\frac{np}{n-p}$. For every $1\le q<p^{*}$ the space
$W^{1,p}_0(\Omega)$ is compactly embedded in $L^q(\Omega)$: every sequence
bounded in $W^{1,p}_0(\Omega)$ has a subsequence converging in $L^q(\Omega)$.

## Facts & Assumptions

**Given:** the Axiom of Choice, a bounded open set $\Omega\subseteq\mathbb R^n$, $1\le p<n$, $p^*=np/(n-p)$, a target exponent $1\le q<p^*$, and a sequence $(u_j)$ with $M:=\sup_j\|u_j\|_{W^{1,p}_0(\Omega)}<\infty$.

[F1] *$L^p$-compactness.* Some subsequence $(u_{j_k})$ converges in $L^p(\Omega)$; the extraction uses Countable and Dependent Choice. ([[thm-rellich-compactness-from-w-one-p-zero-to-lp]], [[def-countable-choice]], [[def-dependent-choice]])

[F2] *Sobolev inequality for $W^{1,p}_0$ of an arbitrary bounded open set.* $\|v\|_{L^{p^*}(\Omega)}\le C\|Dv\|_{L^p(\Omega)}$ for all $v\in W^{1,p}_0(\Omega)$, with $C=C(n,p)$; the zero extensions of the $u_j$ therefore satisfy $\|u_j\|_{L^{p^*}(\Omega)}\le CM$. ([[cor-sobolev-inequality-for-w-one-p-zero]], [[def-wkp-zero-as-a-sobolev-closure]], [[def-sobolev-space-wkp-and-its-norm]], [[def-sobolev-conjugate-exponent]])

[F5] For $p=1$, supply the endpoint separately: the zero extension $v$ of a zero-boundary class belongs to $W^{1,1}(\mathbb R^n)$. Choose smooth compactly supported $v_j\to v$ in $W^{1,1}$ by [[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]]. The endpoint [[thm-gagliardo-nirenberg-sobolev-inequality-for-p-one]] on differences makes $(v_j)$ Cauchy in $L^{n/(n-1)}$; completeness and the almost-everywhere subsequence theorem identify this limit with $v$, since $v_j\to v$ in $L^1$ as well. Passing to the limit in the endpoint inequality gives $\|v\|_{n/(n-1)}\le C\|Dv\|_1$, and restriction supplies the bound asserted in [F2]. ([[thm-riesz-fischer-completeness-of-l-p]], [[cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences]])

[F3] *Lyapunov interpolation and H\"older.* For $p\le b<p^*$ and $1/b=\theta/p+(1-\theta)/p^*$, $\|g\|_b\le\|g\|_p^{\theta}\|g\|_{p^*}^{1-\theta}$; for $b\le p$, $\|g\|_{L^b(\Omega)}\le|\Omega|^{1/b-1/p}\|g\|_{L^p(\Omega)}$. ([[thm-lyapunov-interpolation-inequality-for-l-p-norms]], [[thm-holder-inequality-for-integrals]], [[def-l-p-space-as-a-quotient-by-null-functions]])

[F4] Under Countable Choice, each $L^q(\Omega)$, $1\le q<\infty$, is complete. ([[thm-riesz-fischer-completeness-of-l-p]])

## Proof

**Proof technique:** direct.

1.1 If $\Omega=\varnothing$, all classes are zero and the claim is immediate. Otherwise, by [F1] extract a subsequence converging in $L^p(\Omega)$; write $w_k:=u_{j_k}$. By [F2] the differences satisfy $\|w_k-w_\ell\|_{L^{p^*}(\Omega)}\le2CM$ for all $k,\ell$. [F1, F2, F5, given]

2.1 Fix $1\le q<p^*$. If $q\le p$, then [F3] gives $\|w_k-w_\ell\|_{L^q(\Omega)}\le|\Omega|^{1/q-1/p}\|w_k-w_\ell\|_{L^p(\Omega)}\to0$ by step 1.1; at $q=p$ the factor is $1$. If $p<q<p^*$, choose $\theta\in(0,1)$ with $1/q=\theta/p+(1-\theta)/p^*$; [F3] gives $\|w_k-w_\ell\|_{L^q(\Omega)}\le\|w_k-w_\ell\|_{L^p(\Omega)}^{\theta}(2CM)^{1-\theta}\to0$ by step 1.1. In both cases $(w_k)$ is Cauchy in $L^q(\Omega)$, hence converges there by [F4]. [F1, F3, F4, step 1.1]

3.1 Every bounded sequence in $W^{1,p}_0(\Omega)$ therefore has a subsequence convergent in $L^q(\Omega)$, which is the asserted compact embedding; no property of $\partial\Omega$ was used. The Axiom of Choice is inherited through [F1] and the supplier [F2]; the extraction uses the Countable and Dependent Choice of [F1]. [F1, F2, step 1.1, step 2.1] ∎ 
