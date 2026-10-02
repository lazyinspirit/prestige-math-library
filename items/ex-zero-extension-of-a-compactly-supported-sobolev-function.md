---
id: ex-zero-extension-of-a-compactly-supported-sobolev-function
kind: example
title: Compactly supported Sobolev functions extend by zero without a jump
status: draft
origin: pipeline
deps: [lem-compact-support-zero-extension-in-wkp, def-sobolev-space-wkp-and-its-norm, def-wkp-zero-as-a-sobolev-closure, def-countable-choice]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  scraped: []
  references:
    - title: Juha Kinnunen, Sobolev Spaces (2026), Lemma 1.14(4)–(5) and Theorem 1.25
      url: https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf
      locator: Chapter 1 §1.3 and §1.6, printed pp. 9–11 and 22–23
    - title: John K. Hunter, Notes on Partial Differential Equations (2014), §3.4
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: Chapter 3, Propositions 3.17–3.18, printed pp. 54–55
---

## Example

Assume Countable Choice. Let $n\ge1$ and $\Omega\subseteq\mathbb R^n$ be open,
$1\le p\le\infty$ and $\mathbb K\in\{\mathbb R,\mathbb C\}$. If
$u\in W^{1,p}(\Omega;\mathbb K)$ vanishes almost everywhere outside a compact
set $K_0\subset\Omega$, then its extension by zero belongs to
$W^{1,p}(\mathbb R^n;\mathbb K)$, its first weak derivatives are the zero
extensions of the weak derivatives $D_iu$, and
$$\|E_0u\|_{W^{1,p}(\mathbb R^n)}=\|u\|_{W^{1,p}(\Omega)}.$$
Compact support inside $\Omega$ is what makes this work: the extension has no
jump at $\partial\Omega$, in contrast with the indicator of $(0,1)$ of the
companion page. Nothing here asserts membership of $u$ in
$W_0^{1,\infty}(\Omega)$, which is a statement about approximation by test
functions, not about extension.

## Facts & Assumptions

**Given:** Countable Choice; an open set $\Omega\subseteq\mathbb R^n$; $1\le p\le\infty$; $\mathbb K\in\{\mathbb R,\mathbb C\}$; and a class $u\in W^{1,p}(\Omega;\mathbb K)$ with a representative vanishing almost everywhere outside a compact set $K_0\subset\Omega$.

[L1] Compactly supported Sobolev classes extend by zero in every integer order $k$: under the stated hypotheses on $\Omega$, $p$, $\mathbb K$ and $k$, if $u\in W^{k,p}(\Omega;\mathbb K)$ vanishes almost everywhere outside a compact $K_0\subset\Omega$, then $E_0u\in W^{k,p}(\mathbb R^n;\mathbb K)$, $D^\alpha(E_0u)=E_0(D^\alpha u)$ almost everywhere for $|\alpha|\le k$, and $\|E_0u\|_{W^{k,p}(\mathbb R^n)}=\|u\|_{W^{k,p}(\Omega)}$ ([[lem-compact-support-zero-extension-in-wkp]]).

[L2] For $1\le p<\infty$, $\|w\|_{W^{1,p}(\Omega)}=(\|w\|_{L^p(\Omega)}^p+\sum_{i<n}\|D_iw\|_{L^p(\Omega)}^p)^{1/p}$; at $p=\infty$ the norm is $\max_{|\alpha|\le1}\|D^\alpha w\|_{L^\infty(\Omega)}$, and likewise on $\mathbb R^n$ ([[def-sobolev-space-wkp-and-its-norm]]).

[L3] $W_0^{1,\infty}(\Omega)$ is the closure of $C_c^\infty(\Omega)$ in the $W^{1,\infty}$ norm; membership is a density statement about test functions, not about extension or support ([[def-wkp-zero-as-a-sobolev-closure]]).

## Verification

**Proof technique:** direct.

1.1 The hypotheses of [L1] with $k=1$ hold: $u\in W^{1,p}(\Omega;\mathbb K)$ vanishes almost everywhere outside the compact set $K_0\subset\Omega$, and $1\le p\le\infty$ with the same scalar field. [L1, given]

2.1 Applying [L1] with $k=1$: the zero extension $E_0u$ lies in $W^{1,p}(\mathbb R^n;\mathbb K)$, its first weak derivatives are $D_i(E_0u)=E_0(D_iu)$ almost everywhere, and the norms agree, so $\|E_0u\|_{W^{1,p}(\mathbb R^n)}=\|u\|_{W^{1,p}(\Omega)}$ by [L2]. [L1, L2, step 1.1]

3.1 Scope. The conclusion is an extension statement for the class of $u$; it uses only compact essential support and $W^{1,p}$ regularity and yields no membership in $W_0^{1,\infty}(\Omega)$, which by [L3] would require approximating $u$ by test functions in the $W^{1,\infty}$ norm. [L3, step 2.1, given] ∎
