---
id: thm-rellich-kondrachov-for-p-less-than-n
kind: theorem
title: "The Rellich--Kondrachov theorem for $1\\le p<n$ on bounded extension domains"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
deps: [thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain, thm-sobolev-embedding-on-bounded-extension-domains-for-p-less-than-n, def-sobolev-conjugate-exponent, thm-lyapunov-interpolation-inequality-for-l-p-norms, thm-holder-inequality-for-integrals, def-sobolev-extension-domain-and-extension-operator, def-sobolev-space-wkp-and-its-norm, def-l-p-space-as-a-quotient-by-null-functions, def-compactly-embedded-normed-spaces, def-countable-choice, def-dependent-choice, def-axiom-of-choice, thm-riesz-fischer-completeness-of-l-p, thm-gagliardo-nirenberg-sobolev-inequality-for-p-one, cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn, cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences]
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
    - title: "Juha Kinnunen, Sobolev Spaces (Aalto University, 2026, complete graduate lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf"
      locator: "Theorem 3.44 (Rellich--Kondrachov) and its proof, printed pp. 85-89"
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, complete graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "Theorem 3.27, printed pp. 76-77"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (archived 2025 author manuscript)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Theorem 9.31, printed p. 218"
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Springer Universitext, 2011, complete text)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
      locator: "Theorem 9.16 (Rellich--Kondrachov), printed pp. 285-288"
---

## Statement

Assume the Axiom of Choice. Let $n\ge2$, let $\Omega\subseteq\mathbb R^n$ be a
bounded extension domain, let $1\le p<n$ and $p^{*}=\frac{np}{n-p}$. Then for
every $1\le q<p^{*}$ the inclusion $W^{1,p}(\Omega)\hookrightarrow L^q(\Omega)$
is bounded and compact: every sequence bounded in $W^{1,p}(\Omega)$ has a
subsequence converging in $L^q(\Omega)$.

## Facts & Assumptions

**Given:** the Axiom of Choice, a bounded extension domain $\Omega\subseteq\mathbb R^n$, $1\le p<n$, $p^*=np/(n-p)$, a target exponent $1\le q<p^*$, and a sequence $(u_j)$ with $M:=\sup_j\|u_j\|_{W^{1,p}(\Omega)}<\infty$.

[F1] *$L^p$-compactness.* Some subsequence converges in $L^p(\Omega)$. ([[thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain]], [[def-sobolev-extension-domain-and-extension-operator]], [[def-compactly-embedded-normed-spaces]])

[F2] *Sobolev embedding on bounded extension domains.* $\|v\|_{L^{p^*}(\Omega)}\le C\|v\|_{W^{1,p}(\Omega)}$ for all $v\in W^{1,p}(\Omega)$, $C=C(n,p,\Omega)$, hence $\|u_j\|_{L^{p^*}(\Omega)}\le CM$ and $\|u_k-u_\ell\|_{L^{p^*}(\Omega)}\le2CM$. ([[thm-sobolev-embedding-on-bounded-extension-domains-for-p-less-than-n]], [[def-sobolev-conjugate-exponent]], [[def-sobolev-space-wkp-and-its-norm]])

[F5] For $p=1$, supply the endpoint separately: take the given extension $v=Eu\in W^{1,1}(\mathbb R^n)$ and smooth compactly supported $v_j\to v$ in $W^{1,1}$ by [[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]]. The endpoint [[thm-gagliardo-nirenberg-sobolev-inequality-for-p-one]] on differences makes $(v_j)$ Cauchy in $L^{n/(n-1)}$; completeness and almost-everywhere subsequences identify this limit with $v$, since $v_j\to v$ in $L^1$. Passing to the limit gives $\|v\|_{n/(n-1)}\le C\|Dv\|_1\le C\|E\|\|u\|_{W^{1,1}}$, and restriction gives [F2]. ([[thm-riesz-fischer-completeness-of-l-p]], [[cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences]])

[F3] *Interpolation and H\"older.* For $p\le b<p^*$, $\|g\|_b\le\|g\|_p^{\theta}\|g\|_{p^*}^{1-\theta}$ with $1/b=\theta/p+(1-\theta)/p^*$; for $b\le p$, $\|g\|_{L^b(\Omega)}\le|\Omega|^{1/b-1/p}\|g\|_{L^p(\Omega)}$. ([[thm-lyapunov-interpolation-inequality-for-l-p-norms]], [[thm-holder-inequality-for-integrals]], [[def-l-p-space-as-a-quotient-by-null-functions]])

[F4] Under Countable Choice, each $L^q(\Omega)$, $1\le q<\infty$, is complete. ([[thm-riesz-fischer-completeness-of-l-p]])

## Proof

**Proof technique:** direct.

1.1 If $\Omega=\varnothing$, all classes are zero and the claim is immediate. Otherwise, by [F1] extract a subsequence converging in $L^p(\Omega)$ and write $w_k:=u_{j_k}$; by [F2] the differences satisfy $\|w_k-w_\ell\|_{L^{p^*}(\Omega)}\le2CM$. [F1, F2, F5, given]

2.1 Fix $1\le q<p^*$. If $q\le p$ then $\|w_k-w_\ell\|_{L^q}\le|\Omega|^{1/q-1/p}\|w_k-w_\ell\|_{L^p}\to0$ by [F3] and step 1.1; if $p<q<p^*$ then [F3] gives $\|w_k-w_\ell\|_{L^q}\le\|w_k-w_\ell\|_{L^p}^{\theta}(2CM)^{1-\theta}\to0$. Completeness [F4] therefore makes $(w_k)$ converge in $L^q(\Omega)$. [F1, F3, F4, step 1.1]

3.1 Boundedness of the inclusion holds for every $q\ge p$ by [F2] and the interpolation bound of [F3], and for $q<p$ by H\"older's inequality of [F3]; compactness is the extraction just proved, so $W^{1,p}(\Omega)\Subset L^q(\Omega)$ in the sense of [[def-compactly-embedded-normed-spaces]]. The Axiom of Choice is inherited through [F1] and the supplier [F2]. [F1, F2, F3, step 1.1, step 2.1] ∎ 