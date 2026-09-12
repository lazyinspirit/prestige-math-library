---
id: "def-tensor-product-of-distributions"
kind: "definition"
title: "Tensor product of distributions"
deps: ["lem-distribution-pairing-with-smooth-parameter-families", "def-distribution"]
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - url: "https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      title: "Semyon Dyatlov, Lecture notes for 18.155 (2022)"
status: published
origin: "pipeline"
---

## Definition

For $u\in\mathcal D'(U)$, $v\in\mathcal D'(V)$, where $U\subseteq\mathbb R^p$ and $V\subseteq\mathbb R^q$ are open, define the **tensor-product candidate** on $\Phi\in\mathcal D(U\times V)$ by
$$\langle u\otimes v,\Phi\rangle=\left\langle u,\ x\mapsto\langle v,\Phi(x,\cdot)\rangle\right\rangle.$$
The pairings are complex-bilinear as in [[def-distribution]]. To check that the outer pairing is meaningful, let $K_U,K_V$ be the compact coordinate projections of $\operatorname{supp}\Phi$. Every inner test is supported in $K_V$, so [[lem-distribution-pairing-with-smooth-parameter-families]] makes its pairing a smooth function of $x$. That function is zero off $K_U$, since those slices are zero, so it is a test in $\mathcal D(U)$.

The candidate is complex-linear in $\Phi$ and separately linear in $u,v$ by linearity of each pairing. For $\Phi(x,y)=\varphi(x)\psi(y)$ its value is $u(\varphi)v(\psi)$. If either distribution is zero, the value is zero; if either open domain is empty, the test space on the product is zero. This construction uses no choice axiom. Continuity of the candidate on the product test space, uniqueness from product tests, and equality with the reversed iterated pairing are proved in the tensor-product theorem below; they are not inferred from the notation.
