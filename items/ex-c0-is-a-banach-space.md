---
id: ex-c0-is-a-banach-space
kind: example
title: "$c_0$ is Banach for the supremum norm"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [ex-ell-infinity-is-a-banach-space,
       lem-closed-subspace-of-a-banach-space-is-banach]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Theo Buhler and Dietmar A. Salamon, Functional Analysis"
      url: "https://www.scribd.com/document/978968885/Functional-Analysis-1st-Edition-Theo-Bhler-Dietmar-A-Salamon"
    - title: "Andrew Lin and Casey Rodriguez, MIT 18.102 Introduction to Functional Analysis"
      url: "https://ocw-preview.odl.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf"
pipeline_run: frontier-27
---

## Example

Let
$$c_0:=\{x=(x_n)_{n\ge 0}\in \ell^\infty : x_n\to 0\}.$$
With the supremum norm inherited from $\ell^\infty$, the space $c_0$ is Banach.

## Facts & Assumptions

**Given:** A sequence $x=(x_n)$ in $\ell^\infty$ that is a supremum-norm limit of a sequence $(x^{(m)})$ in $c_0$.

[L1] The space $\ell^\infty$ is Banach for the supremum norm ([[ex-ell-infinity-is-a-banach-space]]).

[L2] A closed subspace of a Banach space is Banach ([[lem-closed-subspace-of-a-banach-space-is-banach]]).

## Verification

**Proof technique:** direct.

1.1 Fix $\varepsilon>0$ and choose $m$ with $\|x-x^{(m)}\|_\infty<\varepsilon/2$. Because $x^{(m)}\in c_0$, there is $N$ with $|x^{(m)}_n|<\varepsilon/2$ for all $n\ge N$. [given, choose]

2.1 For $n\ge N$, $|x_n|\le |x_n-x^{(m)}_n|+|x^{(m)}_n|<\varepsilon/2+\varepsilon/2=\varepsilon$. Hence $x_n\to 0$, so $x\in c_0$. [step 1.1, algebra]

3.1 Step 2.1 shows that $c_0$ is closed in $\ell^\infty$. Since $\ell^\infty$ is Banach by [L1], [L2] makes $c_0$ Banach. [step 2.1, L1, L2] ∎
