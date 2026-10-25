---
id: lem-distributional-derivatives-commute-with-convolution-against-test-functions
kind: lemma
title: Distributional derivatives commute with test-function convolution
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (2014)"
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: §§2.5–2.7, printed pp. 32–42
status: published
origin: pipeline
proof_strategy: direct
deps: ["def-distributional-derivative", "def-convolution-of-a-distribution-with-a-test-function", "thm-convolution-with-a-test-function-is-smooth"]
---

## Statement

For a distribution $T$ on $\mathbb R^n$ and a test function $\varphi$, every multi-index $\alpha$ satisfies $\partial^\alpha(T*\varphi)=(\partial^\alpha T)*\varphi=T*(\partial^\alpha\varphi)$, as smooth functions on their common safe domain.

## Facts & Assumptions

**Given:** $T\in\mathcal D'(\mathbb R^n)$, $\varphi\in\mathcal D(\mathbb R^n)$, and a multi-index $\alpha\in\mathbb N_0^n$. The convolution is bilinear and uses the test $y\mapsto\varphi(x-y)$.

[F1] For $u\in\mathcal D'(\Omega)$ and $\psi\in\mathcal D(\mathbb R^n)$, $u*\psi$ is smooth on its open safe domain and $\partial^\alpha(u*\psi)=(\partial^\alpha u)*\psi=u*(\partial^\alpha\psi)$ there. ([[thm-convolution-with-a-test-function-is-smooth]]).

[F2] The convolution is $(T*\varphi)(x)=\langle T(y),\varphi(x-y)\rangle$ wherever the translated test is supported in the distribution domain. ([[def-convolution-of-a-distribution-with-a-test-function]]).

[F3] Distributional differentiation satisfies $\langle\partial^\alpha T,\psi\rangle=(-1)^{|\alpha|}\langle T,\partial^\alpha\psi\rangle$. ([[def-distributional-derivative]]).

## Proof

**Proof technique:** direct.

1.1 For $\Omega=\mathbb R^n$, every translated compact support $x-\operatorname{supp}\varphi$ lies in $\Omega$, so the safe domain is all of $\mathbb R^n$. Also $\partial^\alpha\varphi$ is a test function with support contained in $\operatorname{supp}\varphi$. Thus all three convolutions are defined there by [F2]. [given, F2]

1.2 By the smoothness and parameter-differentiation conclusion in [F1], differentiating the pairing in [F2] gives $\partial_x^\alpha(T*\varphi)(x)=\langle T(y),(\partial^\alpha\varphi)(x-y)\rangle=T*(\partial^\alpha\varphi)(x)$. [F1, F2]

2.1 The signed derivative definition [F3] gives $(\partial^\alpha T)*\varphi(x)=(-1)^{|\alpha|}\langle T(y),\partial_y^\alpha\varphi(x-y)\rangle$. Since $\partial_y^\alpha\varphi(x-y)=(-1)^{|\alpha|}(\partial^\alpha\varphi)(x-y)$, the two signs cancel and this equals the expression in step 1.2. Hence all three smooth functions agree on the safe domain. [step 1.2, F2, F3, algebra]

3.1 The same calculation includes $\alpha=0$; if $\varphi=0$ or $T=0$ each side is zero; for $n=1$ it is the same one-variable derivative calculation, and formally for $n=0$ the only multi-index is zero and the identity is tautological. There are no spatial boundary endpoints on $\mathbb R^n$, and no choice is used. [step 1.1, step 1.2, step 2.1, F1, cases] ∎

## Source notes

Hunter §§2.5–2.7, printed pp. 32–42. The exact identity is already a consequence of the published whole-domain convolution-smoothness theorem in the library; this item records the whole-space specialization and displays the signed derivative computation in the repository's bilinear convention.
