---
id: cex-clifford-square-sign-changes-low-rank-algebra
kind: counterexample
title: "Changing the Clifford square sign changes the low-rank algebra"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-clifford-modules-ko-and-abs-orientations-examples
dependency_level: 1
deps: [def-clifford-algebra-of-a-quadratic-space]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Jost-Hinrich Eschenburg and Bernhard Hanke, Bott–Thom isomorphism, Hopf bundles and Morse theory (2021)"
      url: "https://arxiv.org/pdf/2011.14368"
    - title: "M. F. Atiyah, R. Bott, and A. Shapiro, Clifford Modules, Topology 3, Supplement 1 (1964)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/abs.pdf"
    - title: "M. F. Atiyah, K-Theory (lectures, notes by D. W. Anderson, 1967), with K-Theory and Reality reprint"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/atiyahk.pdf"
---

## Statement refuted

The assertion that the one-generator real Clifford algebras for $v^2=+1$ and $v^2=-1$ are isomorphic is false: the former is $\mathbb R\oplus\mathbb R$ and the latter is $\mathbb C$.

## Facts & Assumptions
**Given:** The real one-generator Clifford quotient convention and the standard polynomial quotient construction.

[F1] The Clifford algebra is the quotient of the tensor algebra by the relations $\bar v^{\,2}=Q(v)1$ ([[def-clifford-algebra-of-a-quadratic-space]]).

## Counterexample

1.1 For one generator $e$, the tensor algebra is $\mathbb R[t]$ and the Clifford relation is $t^2=Q(e)$. Division by either monic quadratic leaves a unique remainder $a+bt$. The positive evaluation map sends this remainder to $(a+b,a-b)$, which determines $(a,b)$, so $\mathbb R[t]/(t^2-1)\cong\mathbb R\oplus\mathbb R$. The negative evaluation map sends it to $a+bi$, which determines $(a,b)$, so $\mathbb R[t]/(t^2+1)\cong\mathbb C$. [given, F1, algebra]


2.1 The element $(1,0)$ is a nontrivial idempotent in $\mathbb R\oplus\mathbb R$. If $z=a+bi\in\mathbb C$ satisfies $z^2=z$, comparing real and imaginary parts gives $2ab=b$ and $a^2-b^2=a$. If $b=0$, then $a=0$ or $a=1$. If $b\ne0$, then $a=1/2$ and $b^2=-1/4$, impossible because a real square is nonnegative. Thus $\mathbb C$ has no idempotents other than $0,1$. An algebra isomorphism preserves idempotents and $0,1$, so these algebras are not isomorphic. [step 1.1, algebra] ∎
