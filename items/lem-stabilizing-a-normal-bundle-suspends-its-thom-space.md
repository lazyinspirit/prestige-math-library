---
id: lem-stabilizing-a-normal-bundle-suspends-its-thom-space
kind: lemma
title: "Adding a trivial normal line suspends the Thom space"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: ["def-disk-bundle-sphere-bundle-and-thom-space", "lem-compact-test-exponential-law-and-products-of-quotients"]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "May, A Concise Course in Algebraic Topology, Chapter 23 §5"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "printed pp.194–196; disk/sphere models, Thom normalization; stabilization on p.196"
---

## Statement

For a supplied metric real vector bundle $E\to B$, $\operatorname{Th}(E\oplus\varepsilon^1)\cong\operatorname{Th}(E)\wedge S^1=\Sigma\operatorname{Th}(E)$ naturally in bundle maps preserving the data. Quotients are taken in the compactly generated convention; for compact smooth $B$ these are ordinary compact Hausdorff quotient homeomorphisms.

## Facts & Assumptions

**Given:** $E$ with metric and the standard metric on its added trivial line.

[F1] [[def-disk-bundle-sphere-bundle-and-thom-space]] fixes the disk/sphere quotient.

[F2] Products of quotient maps between compactly generated spaces are quotient maps for their k-products, without a weak-Hausdorff hypothesis ([[lem-compact-test-exponential-law-and-products-of-quotients]]).

## Proof

1.1 Write points of $E\oplus\varepsilon^1$ as pairs $(v,t)$ with $v\in E$ and $t\in\mathbb R$, let $\|\cdot\|$ denote the metric of $E$ and $s(v,t)=\sqrt{\|v\|^2+t^2}$, $m(v,t)=\max(\|v\|,|t|)$ the sum and max norms. The fiberwise radial map $\chi(v,t)=\frac{s(v,t)}{m(v,t)}(v,t)$ for $(v,t)\neq(0,0)$ and $\chi(0,0)=(0,0)$ is continuous, has continuous inverse $y\mapsto\frac{m(y)}{s(y)}y$ on the punctured set, and is continuous at zero along every direction because $1\le s/m\le\sqrt2$ is bounded there. It carries the sum-norm disk onto the max-norm disk and, since $\|\chi(v,t)\|_{\max}=s(v,t)$, carries the sum-norm sphere onto the max-norm sphere $S(E)\times[-1,1]\cup D(E)\times\{-1,1\}$. Thus $\chi$ is a homeomorphism of the two disk/sphere pairs. [F1, construct, algebra]

2.1 When $S(E)\ne\varnothing$, by [F1] and step 1.1 the Thom quotient of $E\oplus\varepsilon^1$ is the quotient of $D(E)\times[-1,1]$ by the union $A=S(E)\times[-1,1]\cup D(E)\times\{-1,1\}$. By [F2] the product of the two disk-to-quotient maps is a quotient map onto $(D(E)/S(E))\times_k([-1,1]/\{-1,1\})$. Compose it with the smash quotient, which collapses the two basepoint axes. This composite is a quotient map with one fibre $A$ and singleton fibres elsewhere, so it induces a homeomorphism $$\operatorname{Th}(E\oplus\varepsilon^1)\cong\bigl(D(E)/S(E)\bigr)\wedge\bigl([-1,1]/\{-1,1\}\bigr)=\operatorname{Th}(E)\wedge S^1=\Sigma\operatorname{Th}(E).$$ When $B$ is compact the same identification is the ordinary quotient map of compact Hausdorff spaces. [F1, F2, step 1.1]

3.1 In rank zero $S(E)=\varnothing$, the convention $X/\varnothing=X_+$ supplies $B_+$ with its disjoint basepoint. The smash $B_+\wedge S^1$ is presented as $(B_+\times[-1,1])/(B_+\times\{-1,1\}\cup\{*\}\times[-1,1])$. Collapsing the added basepoint component and the two endpoint copies gives exactly $(B\times[-1,1])/(B\times\{-1,1\})$ with the based convention, which is the disk/sphere quotient of the trivial line bundle. Thus the same homeomorphism holds without treating $B\to B_+$ as an onto quotient map; for empty $B$ every space involved is a point. Every bundle map preserving the metrics and trivializations acts by the identity product formula and commutes with $\chi$ and with the quotient maps, so the homeomorphism is natural. Applying the result to the successive sums $E\oplus\varepsilon^1\oplus\cdots\oplus\varepsilon^1$ adds one suspension per specified trivial normal direction. [F1, F2, step 2.1] ∎
