---
id: lem-jones-wenzl-idempotents-exist-below-root-order
kind: lemma
title: "Jones–Wenzl projectors exist up to the first zero quantum integer"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-sl-two-root-of-unity-skein-parameter
  - def-temperley-lieb-jones-wenzl-recursion-over-unit-denominators
  - lem-temperley-lieb-jones-wenzl-partial-trace-and-uniqueness
  - lem-temperley-lieb-closure-trace-component-identities
  - def-temperley-lieb-negligible-morphisms
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Choice-free: all calculations are finite Laurent-polynomial and complex-field computations."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Louis H. Kauffman and Sostenes L. Lins, Temperley-Lieb Recoupling Theory and Invariants of 3-Manifolds, Chapter 3"
      url: "https://api.pageplace.de/preview/DT0400.9781400882533_A27764847/preview-9781400882533_A27764847.pdf"
    - title: "C. Blanchet, N. Habegger, G. Masbaum, and P. Vogel, Topological Quantum Field Theories Derived from the Kauffman Bracket, §3"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bhmv.pdf"
    - title: "Joshua Chen, The Temperley-Lieb Categories and Skein Modules, §5.3"
      url: "https://arxiv.org/pdf/1502.06845v1"
---

## Statement

Let $p\ge4$ be even, let $A$ be a primitive $2p$-th root of unity, and use the quantum integers and Temperley–Lieb loop value $\delta=-A^2-A^{-2}$ specified above. Write $r=p/2$. The standard Jones–Wenzl recursion defines nonzero idempotents $p_n$ for $0\le n\le r-1$; their unnormalized closure traces are $[n+1]$. In particular, $p_{r-1}$ has trace zero and is negligible, while the next standard recursive formula for $p_r$ is undefined because its denominator is $[r]=0$. This statement concerns that recursion and does not assert that no differently constructed normalized idempotent can exist at rank $r$.

## Statement references

[[def-sl-two-root-of-unity-skein-parameter|Root, loop, and quantum-integer conventions]]

[[def-temperley-lieb-jones-wenzl-recursion-over-unit-denominators|Jones–Wenzl recursion and its exact denominator condition]]

[[lem-temperley-lieb-jones-wenzl-partial-trace-and-uniqueness|Idempotence, corner, and closure-trace properties]]

[Kauffman and Lins, *Temperley-Lieb Recoupling Theory and Invariants of 3-Manifolds*, Chapter 3](https://api.pageplace.de/preview/DT0400.9781400882533_A27764847/preview-9781400882533_A27764847.pdf)

[Blanchet, Habegger, Masbaum, and Vogel, *Topological Quantum Field Theories Derived from the Kauffman Bracket*, §3](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bhmv.pdf)

[Chen, *The Temperley-Lieb Categories and Skein Modules*, §5.3](https://arxiv.org/pdf/1502.06845v1)

## Facts & Assumptions

**Given:** An even integer $p\ge4$, a primitive $2p$-th root $A$, the BHMV loop value $\delta=-A^2-A^{-2}$, and the standard recursive idempotents.

[F1] [[def-sl-two-root-of-unity-skein-parameter]]: $q=-A^2$, $q^2=A^4$ has order $r=p/2$, $[j]=(q^j-q^{-j})/(q-q^{-1})$, and $\delta=q+q^{-1}$.

[F2] [[def-temperley-lieb-jones-wenzl-recursion-over-unit-denominators]]: the recursive element $p_n$ is defined only when every denominator $[2],\ldots,[n]$ is a unit; the recursion for $p_{n+1}$ uses $[n+1]^{-1}$.

[F3] [[lem-temperley-lieb-jones-wenzl-partial-trace-and-uniqueness]]: if $[2],\ldots,[n]$ are units, then $p_n$ is a nonzero idempotent, $p_n\mathrm{TL}_np_n=\mathbb C p_n$, and its unnormalized closure trace is $[n+1]$.

[F4] [[lem-temperley-lieb-closure-trace-component-identities]]: $\operatorname{Tr}_n(xy)=\operatorname{Tr}_n(yx)$, including when $\delta=0$.

[F5] [[def-temperley-lieb-negligible-morphisms]]: an endomorphism $f:n\to n$ is negligible when $\operatorname{Tr}_n(g\circ f)=0$ for every $g:n\to n$.

## Proof

**Given:** The data and hypotheses in the Statement.

1.1 Since $q^2$ has exact order $r$, for $1\le j<r$ one has $q^{2j}\ne1$. Also $q-q^{-1}\ne0$, because $q^2\ne1$. Thus $q^j-q^{-j}\ne0$ and $[j]\ne0$ for every $1\le j<r$. At $j=r$, $q^{2r}=1$, so $q^r=q^{-r}$ and $[r]=0$. [given, F1, algebra]

2.1 For $p\ge6$, one has $r\ge3$, so every denominator $[2],\ldots,[r-1]$ is nonzero and therefore invertible in $\mathbb C$. By [F2] and [F3], the recursion defines nonzero idempotents through $p_{r-1}$ and gives $\operatorname{Tr}_{r-1}(p_{r-1})=[r]=0$. For $p=4$, $r=2$ and $p_{r-1}=p_1=1_1$ is the initial projector; its closure is $\delta=[2]=0$, so the same conclusion holds without using a rank-two denominator. [given, F1, F2, F3, step 1.1, cases]

3.1 For any $g\in\mathrm{TL}_{r-1}$, [F3] gives $p_{r-1}gp_{r-1}=\lambda p_{r-1}$ for some $\lambda\in\mathbb C$. Cyclicity [F4] gives $\operatorname{Tr}(gp_{r-1})=\operatorname{Tr}(p_{r-1}gp_{r-1})=\lambda\operatorname{Tr}(p_{r-1})=0$. Thus $p_{r-1}$ is negligible by [F5]. [F3, F4, F5, step 2.1, algebra]

4.1 The recursive formula for $p_r$ requires the inverse of $[r]$, which does not exist because $[r]=0$. Therefore that formula has no value at this step; in particular, assigning a value by cancelling a zero denominator is not part of the recursion. This leaves open the separate existence question for normalized idempotents constructed by other methods. [F1, F2, step 1.1, algebra] ∎
