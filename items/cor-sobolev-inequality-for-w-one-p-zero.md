---
id: cor-sobolev-inequality-for-w-one-p-zero
kind: corollary
title: "The Sobolev inequality for zero-boundary Sobolev closures on open sets"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
deps: [def-axiom-of-choice, def-sobolev-conjugate-exponent, def-wkp-zero-as-a-sobolev-closure, def-sobolev-space-wkp-and-its-norm, def-l-p-space-as-a-quotient-by-null-functions, lem-zero-extension-from-w-one-p-zero, thm-gagliardo-nirenberg-sobolev-inequality, thm-gagliardo-nirenberg-sobolev-inequality-for-p-one, thm-riesz-fischer-completeness-of-l-p, thm-complex-lp-completeness-and-almost-everywhere-subsequences]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Juha Kinnunen, Sobolev Spaces (Aalto University, 2026, complete graduate lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf"
      locator: "Chapter 3 §3.1, Remark 3.4(3), printed p. 65."
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "Chapter 3, Theorem 3.18, printed pp. 66-67."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $\Omega\subseteq\mathbb R^n$ be open, $n\ge2$, $1\le p<n$ and $p^{*}=\frac{np}{n-p}$. There is $C(n,p)$ with
$$\|u\|_{L^{p^{*}}(\Omega)}\le C(n,p)\|Du\|_{L^p(\Omega)}$$
for every $u\in W^{1,p}_0(\Omega;\mathbb K)$.

## Facts & Assumptions

**Given:** The Axiom of Choice; an open set $\Omega\subseteq\mathbb R^n$; $n\ge2$; $1\le p<n$; a field $\mathbb K\in\{\mathbb R,\mathbb C\}$; and a class $u\in W^{1,p}_0(\Omega;\mathbb K)$.

[F1] $W^{1,p}_0(\Omega)$ is the closure of $C_c^\infty(\Omega)$ in the $W^{1,p}$ norm, and its elements are $L^p$ classes with weak gradients in $L^p$ ([[def-wkp-zero-as-a-sobolev-closure]], [[def-sobolev-space-wkp-and-its-norm]]).

[F2] Extension by zero sends $W^{1,p}_0(\Omega;\mathbb K)$ into $W^{1,p}(\mathbb R^n;\mathbb K)$, the weak derivatives of the extension are the zero extensions of the weak derivatives, and all $L^p$ component norms are preserved ([[lem-zero-extension-from-w-one-p-zero]]).

[F3] For $1<p<n$, the whole-space inequality holds for every $v\in W^{1,p}(\mathbb R^n)$ ([[thm-gagliardo-nirenberg-sobolev-inequality]]). For $p=1$ it holds for $v\in C_c^\infty$ ([[thm-gagliardo-nirenberg-sobolev-inequality-for-p-one]]). Here $p^*=np/(n-p)$ ([[def-sobolev-conjugate-exponent]]).

[F4] Every $L^r$ space for $1\le r\le\infty$ is complete and norm convergence has an almost-everywhere convergent subsequence ([[thm-riesz-fischer-completeness-of-l-p]], [[thm-complex-lp-completeness-and-almost-everywhere-subsequences]]).

## Proof

**Proof technique:** direct.

1.1 Zero extension. Let $E_0u$ be the extension of $u$ by zero. By [F2], $E_0u\in W^{1,p}(\mathbb R^n;\mathbb K)$, its weak gradient is the zero extension of $Du$, and $\|E_0u\|_{L^{p^{*}}(\mathbb R^n)}=\|u\|_{L^{p^{*}}(\Omega)}$, $\|D(E_0u)\|_{L^p(\mathbb R^n)}=\|Du\|_{L^p(\Omega)}$ componentwise. [F1, F2, given, algebra]

2.1 For $1<p<n$, apply [F3] to $E_0u$ and use step 1.1. For $p=1$, choose $\varphi_j\in C_c^\infty(\Omega)$ converging to $u$ in $W^{1,1}(\Omega)$ by [F1]; their zero extensions converge to $E_0u$ in $W^{1,1}(\mathbb R^n)$ by [F2]. The endpoint estimate [F3] applied to differences shows that these extensions are Cauchy in $L^{n/(n-1)}$. By [F4] their limit in that space exists; an almost-everywhere subsequence, followed by an $L^1$ almost-everywhere subsequence, identifies it with $E_0u$. Passing to the limit in the endpoint estimate gives $\|E_0u\|_{n/(n-1)}\le C(n)\|D(E_0u)\|_1$. Step 1.1 transfers both cases to $\Omega$, proving the assertion. [F1, F2, F3, F4, step 1.1, algebra] ∎

## Source notes

The corollary is the zero-trace case of the whole-space Sobolev inequality, Kinnunen's Remark 3.4(3) and Laugesen's Theorem 3.18: the extension by zero has the same weak gradient up to the boundary of $\Omega$, so the whole-space result transfers verbatim. At $p=1$ the smooth endpoint estimate is extended by the closure approximation and $L^{n/(n-1)}$ completeness.
