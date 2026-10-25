---
id: thm-subcritical-compactness-of-the-sobolev-trace
kind: theorem
title: "Subcritical compactness of the Sobolev trace"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 6
deps: [thm-extension-theorem-for-bounded-smooth-domains, thm-sharp-trace-theorem-for-w-one-p, thm-lp-trace-operator-on-a-bounded-c-one-domain, thm-fractional-rellich-kondrachov-compactness-on-bounded-sets, def-fractional-sobolev-space-on-a-compact-c-one-boundary, lem-fractional-boundary-norm-is-independent-of-atlas, lem-trace-commutes-with-smooth-boundary-cutoffs-and-charts, thm-morrey-rellich-compactness-for-p-greater-than-n, lem-sobolev-trace-agrees-with-continuous-boundary-values, def-surface-integral-on-a-compact-c-one-hypersurface, def-bounded-c-one-domain-boundary-charts-and-outward-normal, lem-finite-ambient-partitions-for-euclidean-boundary-integration, def-l-p-space-as-a-quotient-by-null-functions, def-countable-choice, def-dependent-choice, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, complete graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "Chapter 3, Sections 3.7 and 3.9: the boundary trace theorem and the compact imbedding theorem, printed pp. 62-64 and 74-77"
    - title: "Eleonora Di Nezza, Giampiero Palatucci and Enrico Valdinoci, Hitchhiker's guide to the fractional Sobolev spaces (arXiv:1104.4345, survey)"
      url: "https://arxiv.org/pdf/1104.4345"
      locator: "Theorem 7.1 and Corollary 7.2, printed pp. 49-54, supply the fractional compactness model. The trace result here is derived by composing the named published sharp trace theorem with compactness in finitely many boundary charts."
---

## Statement

Assume the Axiom of Choice. Let $n\ge2$, let $\Omega\subset\mathbb R^n$ be a
bounded $C^1$ domain, let
$T:W^{1,p}(\Omega)\to L^p(\partial\Omega)$ be the trace of
[[thm-lp-trace-operator-on-a-bounded-c-one-domain]], and let $1<p<n$ with
$p_\ast:=\frac{(n-1)p}{n-p}$. Then $T$ is compact as a map into
$L^q(\partial\Omega)$ for every $1\le q<p_\ast$: every sequence bounded in
$W^{1,p}(\Omega)$ has a subsequence whose traces converge in
$L^q(\partial\Omega)$. If $n<p<\infty$, then the traces of a suitable subsequence
converge in $C^{0,\beta}(\partial\Omega)$ for every $0\le\beta<1-\frac np$,
hence also in every $L^q(\partial\Omega)$, $1\le q<\infty$; the endpoint case
$p=n$ is not claimed.

## Facts & Assumptions

**Given:** the Axiom of Choice, a bounded $C^1$ domain $\Omega\subset\mathbb R^n$, $n\ge2$, and $1<p<\infty$, $p\ne n$, with a sequence $(u_j)$ bounded in $W^{1,p}(\Omega)$.

[F1] *Sharp trace boundedness.* For $1<p<\infty$ and $\theta=1-\frac1p$, the trace satisfies $\|Tu\|_{W^{\theta,p}(\partial\Omega)}\le C\|u\|_{W^{1,p}(\Omega)}$, where the boundary norm is the finite sum over a finite atlas of Euclidean $W^{\theta,p}$-norms of compactly supported chart representations, and it is independent of the atlas up to equivalence. ([[thm-sharp-trace-theorem-for-w-one-p]], [[def-fractional-sobolev-space-on-a-compact-c-one-boundary]], [[lem-fractional-boundary-norm-is-independent-of-atlas]])

[F2] *Fractional compactness in dimension $n-1$.* For $1<p<n$ and $\theta=1-\frac1p$ one has $(n-1)-p\theta=n-p>0$ and the critical exponent of $W^{\theta,p}(\mathbb R^{n-1})$ is $\frac{(n-1)p}{n-p}=p_\ast$; a family of functions supported in one fixed bounded set and bounded in $W^{\theta,p}(\mathbb R^{n-1})$ is therefore relatively compact in $L^q(\mathbb R^{n-1})$ for every $1\le q<p_\ast$. ([[thm-fractional-rellich-kondrachov-compactness-on-bounded-sets]], [[def-fractional-sobolev-space-on-a-compact-c-one-boundary]])

[F3] *Trace and chart cutoffs.* The trace commutes with multiplication by smooth ambient cutoffs and with the chart parametrisations; on a compact boundary patch the surface-measure density of the parametrisation is continuous and positive, so $L^q$ convergence of the finitely many chart representations gives $L^q(\partial\Omega)$ convergence of their sum. ([[lem-trace-commutes-with-smooth-boundary-cutoffs-and-charts]], [[def-surface-integral-on-a-compact-c-one-hypersurface]], [[lem-finite-ambient-partitions-for-euclidean-boundary-integration]], [[def-bounded-c-one-domain-boundary-charts-and-outward-normal]])

[F4] *The Morrey branch.* For $n<p<\infty$, the extension theorem at $k=1$ makes the bounded $C^1$ domain $\Omega$ a $W^{1,p}$-extension domain; hence a bounded sequence in $W^{1,p}(\Omega)$ has a subsequence whose representatives converge in $C^{0,\beta}(\overline\Omega)$ for every $0\le\beta<1-\frac np$, and the trace of such a class is its classical boundary restriction. ([[thm-extension-theorem-for-bounded-smooth-domains]], [[thm-morrey-rellich-compactness-for-p-greater-than-n]], [[lem-sobolev-trace-agrees-with-continuous-boundary-values]])

## Proof

**Proof technique:** bound the traces in the boundary fractional space, apply fractional compactness chart by chart, and take the Morrey branch for $p>n$.

1.1 Assume $1<p<n$. By [F1] the traces satisfy $\sup_j\|Tu_j\|_{W^{\theta,p}(\partial\Omega)}\le C\sup_j\|u_j\|_{W^{1,p}(\Omega)}<\infty$ with $\theta=1-\frac1p$; by the definition of the boundary norm this means that each of the finitely many compactly supported chart representations of the traces is bounded in $W^{\theta,p}(\mathbb R^{n-1})$. [F1, given]

2.1 Choose exponents $q_\ell\uparrow p_\ast$ with $1\le q_\ell<p_\ast$. For each $\ell$, [F2] applied successively on the finitely many charts supplies a common subsequence converging in every chart in $L^{q_\ell}$. Dependent Choice selects nested subsequences for $\ell=1,2,\ldots$; their diagonal converges in each chart for each $q_\ell$. For any $1\le q<p_\ast$, choose $\ell$ with $q<q_\ell$ and use finite-measure inclusion on the common bounded chart supports. The chart Jacobian is bounded on each compact support, so [F3] transfers convergence of the finitely many chart pieces to convergence of their sum in $L^q(\partial\Omega)$. Thus the same subsequence works throughout the stated range. [F2, F3, step 1.1, given]

3.1 If $n<p<\infty$, [F4] first verifies the extension-domain hypothesis and then provides a subsequence of the $u_j$ whose representatives converge in $C^{0,\beta}(\overline\Omega)$ for every $0\le\beta<1-\frac np$, and their traces, being the classical boundary restrictions, converge in $C^{0,\beta}(\partial\Omega)$ and hence in every $L^q(\partial\Omega)$, $1\le q<\infty$. The endpoint $p=n$ would require the limiting fractional embedding at $\theta=1-1/n=d/p$ in dimension $d=n-1$ and is deliberately not claimed. The Axiom of Choice is inherited through the published trace theorem [F1] and the Morrey branch [F4]. [F1, F2, F3, F4, step 2.1] ∎ 