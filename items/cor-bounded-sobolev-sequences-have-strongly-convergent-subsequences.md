---
id: cor-bounded-sobolev-sequences-have-strongly-convergent-subsequences
kind: corollary
title: "Bounded Sobolev sequences have strongly convergent subsequences with the weak limit as limit"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 4
deps: [thm-rellich-kondrachov-for-p-less-than-n, def-weak-convergence-of-nets-and-sequences, thm-weak-topology-is-hausdorff, thm-c-c-is-dense-in-l-p-for-radon-measures, thm-holder-inequality-for-integrals, def-sobolev-extension-domain-and-extension-operator, def-l-p-space-as-a-quotient-by-null-functions, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, def-measure-null-set-and-almost-everywhere, def-countable-choice, def-dependent-choice, def-axiom-of-choice]
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
      locator: "Remark 3.45 after Rellich--Kondrachov: the almost-everywhere and limit identification remarks, printed pp. 89-90"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (archived 2025 author manuscript)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Corollary 9.32 and its use, printed p. 219"
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, complete graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "The proof of Theorem 3.29 (Poincar\\'e), which upgrades weak limits by compactness, printed pp. 77-78"
---

## Statement

Assume the Axiom of Choice. Let $n\ge2$, let $\Omega\subseteq\mathbb R^n$ be a
bounded extension domain, let $1\le p<n$, $p^{*}=\frac{np}{n-p}$, and let
$(u_j)$ be bounded in $W^{1,p}(\Omega)$ with $u_j\rightharpoonup u$ weakly in
$W^{1,p}(\Omega)$. Then $u_j\to u$ in $L^q(\Omega)$ for every $1\le q<p^{*}$;
the convergence is of the whole sequence, not merely of a subsequence.

## Facts & Assumptions

**Given:** the Axiom of Choice, a bounded extension domain
$\Omega\subseteq\mathbb R^n$, $1\le p<n$, a bounded sequence $(u_j)$ with
$u_j\rightharpoonup u$ weakly in $W^{1,p}(\Omega)$, and $1\le q<p^*$.

[F1] *Rellich--Kondrachov.* Every bounded sequence in $W^{1,p}(\Omega)$ has a
subsequence converging in $L^q(\Omega)$.
([[thm-rellich-kondrachov-for-p-less-than-n]],
[[def-sobolev-extension-domain-and-extension-operator]])

[F2] *Weak convergence tested against $L^{p'}$.* For $g\in L^{p'}(\Omega)$
with $1/p+1/p'=1$, the functional $v\mapsto\int_\Omega gv$ is bounded on
$W^{1,p}(\Omega)$, so $\int_\Omega gu_j\to\int_\Omega gu$. In particular
$\int_Au_j\to\int_Au$ for every measurable $A$ of finite measure. For
complex-valued classes, these integral identities are read componentwise.
([[def-weak-convergence-of-nets-and-sequences]],
[[thm-holder-inequality-for-integrals]],
[[def-l-p-space-as-a-quotient-by-null-functions]])

[F3] *Strong convergence tested against $L^{q'}$.* If $v_k\to v$ in
$L^q(\Omega)$ and $g\in L^{q'}(\Omega)$, then $\int gv_k\to\int gv$ by
H\"older's inequality. ([[thm-holder-inequality-for-integrals]])

## Proof

**Proof technique:** every subsequence has a further $L^q$-convergent
subsequence; identify its limit with the weak limit $u$ by testing against
finite-measure set indicators; conclude that the whole sequence converges.

1.1 Let $(u_{j_k})$ be any subsequence. It is bounded in $W^{1,p}(\Omega)$, so by [F1] it has a further subsequence $(u_{j_{k_r}})$ converging in $L^q(\Omega)$ to some $v$. [F1, given]

2.1 For every measurable $A\subseteq\Omega$ of finite measure, [F2] applied to $g=\mathbf 1_A$ gives $\int_Au_{j_{k_r}}\to\int_Au$, while [F3] applied to $g=\mathbf 1_A\in L^{q'}(\Omega)$ gives $\int_Au_{j_{k_r}}\to\int_Av$; hence $\int_A(u-v)=0$. For each $m\ge1$, apply this to the sets where the real or imaginary part of $u-v$ is greater than $1/m$ or less than $-1/m$, intersected with $B(0,m)$. Each such set has measure zero, since the corresponding signed part of the integral has magnitude at least its measure divided by $m$. As $\Omega$ is bounded, these sets cover the nonzero real and imaginary parts, so $u=v$ almost everywhere on $\Omega$. [F2, F3, step 1.1, algebra]

3.1 Thus every subsequence of $(u_j)$ has a further subsequence converging in $L^q(\Omega)$ to the same limit $u$; in a metric space this forces the whole sequence to converge to $u$, because otherwise some $\varepsilon>0$ would admit a subsequence staying $\varepsilon$-away from $u$, and that subsequence would in turn have a further subsequence converging to $u$. The Axiom of Choice is inherited through [F1], and the weak topology is Hausdorff as recorded in [[thm-weak-topology-is-hausdorff]]. [F1, step 2.1] ∎

## Remarks

The identification of the strong limit with the weak limit does not use the
density of test functions in $L^{q'}$ for $q=1$: the finite-measure
indicator test functions lie in $L^{p'}\cap L^{q'}$ and separate almost-everywhere
classes.
