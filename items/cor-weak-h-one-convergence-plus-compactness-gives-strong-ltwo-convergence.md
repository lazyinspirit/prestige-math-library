---
id: cor-weak-h-one-convergence-plus-compactness-gives-strong-ltwo-convergence
kind: corollary
title: "Weak $H^1$ convergence plus compactness gives strong $L^2$ convergence"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
deps: [thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain, def-hk-and-hk-zero-notation, def-weak-convergence-of-nets-and-sequences, thm-holder-inequality-for-integrals, def-l-p-space-as-a-quotient-by-null-functions, def-countable-choice, def-dependent-choice, def-axiom-of-choice]
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
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, complete graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "Corollary 3.28(ii), printed p. 77, and Exercise 3.26, printed p. 79; the whole-sequence conclusion is proved locally by compact extraction and indicator tests."
---

## Statement

Assume the Axiom of Choice. Let $n\ge1$, let $\Omega\subseteq\mathbb R^n$ be a
bounded extension domain and let $(u_j)$ be bounded in
$H^1(\Omega)=W^{1,2}(\Omega)$ with $u_j\rightharpoonup u$ weakly in
$H^1(\Omega)$. Then $u_j\to u$ in $L^2(\Omega)$.

## Facts & Assumptions

**Given:** the Axiom of Choice, a bounded extension domain $\Omega\subseteq\mathbb R^n$, $n\ge1$, and a bounded sequence $(u_j)$ with $u_j\rightharpoonup u$ weakly in $H^1(\Omega)$.

[F1] *First-order Rellich compactness.* Since $H^1(\Omega)=W^{1,2}(\Omega)$, every bounded sequence in $H^1(\Omega)$ has a subsequence converging in $L^2(\Omega)$ on this bounded extension domain. ([[thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain]], [[def-hk-and-hk-zero-notation]])

[F2] *Finite-measure indicators test both limits.* For each measurable $A\subseteq\Omega$, the functional $v\mapsto\int_Av$ is bounded on $H^1(\Omega)$ and on $L^2(\Omega)$ by H\"older's inequality. Weak $H^1$ convergence and strong $L^2$ convergence therefore give the same limit for these integrals. Since $\Omega$ is bounded, $u-v\in L^1(\Omega)$; if its integral over every measurable set is zero, then its real and imaginary parts vanish almost everywhere. ([[def-weak-convergence-of-nets-and-sequences]], [[thm-holder-inequality-for-integrals]], [[def-l-p-space-as-a-quotient-by-null-functions]])

## Proof

**Proof technique:** every subsequence has a further $L^2$-convergent subsequence; indicator tests identify its limit with the weak limit, forcing convergence of the whole sequence.

1.1 Let $(u_{j_k})$ be any subsequence. It is bounded in $H^1(\Omega)$, so by [F1] it has a further subsequence $(u_{j_{k_r}})$ converging in $L^2(\Omega)$ to some $v$. [F1, given]

2.1 For each measurable $A\subseteq\Omega$, [F2] gives $\int_Au_{j_{k_r}}\to\int_Au$ by weak convergence and $\int_Au_{j_{k_r}}\to\int_Av$ by strong $L^2$ convergence. Thus $\int_A(u-v)=0$ for every such $A$. Applying this to the sets where the real or imaginary part of $u-v$ is greater than $1/m$ or less than $-1/m$, for $m\ge1$, shows that each part vanishes almost everywhere; hence $u=v$ in $L^2(\Omega)$. [F2, step 1.1]

3.1 Every subsequence of $(u_j)$ therefore has a further subsequence converging in $L^2(\Omega)$ to $u$. If the whole sequence did not converge to $u$, some $\varepsilon>0$ would admit a subsequence staying at distance at least $\varepsilon$ from $u$, contradicting the further-subsequence conclusion. Thus $u_j\to u$ in $L^2(\Omega)$. The Axiom of Choice is inherited through [F1]. [F1, step 2.1, given] ∎