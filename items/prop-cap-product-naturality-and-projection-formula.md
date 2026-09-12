---
id: "prop-cap-product-naturality-and-projection-formula"
kind: "proposition"
title: "Cap naturality and projection formula"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["thm-cap-product-boundary-identity","def-singular-cup-product-on-cochains","prop-cup-product-is-natural-unital-and-associative"]
sources:
  references:
    - title: Hatcher cap formula (20); Miller Proposition 34.1
      url: https://math.mit.edu/~hrm/papers/notes-905.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

For continuous $f:X\to Y$, $\alpha\in H^p(Y;R)$ and $x\in H_n(X;R)$,
$$f_*(f^*\alpha\cap x)=\alpha\cap f_*x.$$
For $\alpha\in H^p(X;R)$, $\beta\in H^q(X;R)$ and $x\in H_n(X;R)$,
$$(\alpha\smile\beta)\cap x=\beta\cap(\alpha\cap x).$$
Here $R$ is commutative unital and cap evaluates the front face, retaining the back face. Both identities hold already on cochains and chains. No AC is needed.

## Facts & Assumptions

[F1] [[thm-cap-product-boundary-identity]] proves that the front-evaluation/back-retention cap descends to cohomology and homology, including zero output degrees.

[F2] [[def-singular-cup-product-on-cochains]] supplies the front/back evaluation formula. [[prop-cup-product-is-natural-unital-and-associative]] supplies its descent to cohomology together with naturality, the unit, and associativity.

## Proof

**Given:** Cochain representatives $a,b$ of degrees $p,q$ and a singular $n$-simplex $\sigma$. For the first identity $a$ is on $Y$; for the second both are on $X$.

1.1 If $n\ge p$, the left side of the first chain identity is $f_\#(a(f\sigma[0,\ldots,p])\sigma[p,\ldots,n])$, equal to $a(f\sigma[0,\ldots,p])(f\sigma)[p,\ldots,n]$. This is exactly $a\cap f_\#\sigma$, since postcomposition commutes with face restriction. If $n<p$, both sides are zero. Linearity gives the chain identity for every chain. [F1, given]

1.2 If $n\ge p+q$, evaluating the left side of the second identity yields $a(\sigma[0,\ldots,p])b(\sigma[p,\ldots,p+q])\sigma[p+q,\ldots,n]$. Capping first by $a$ leaves the chain $a(\sigma[0,\ldots,p])\sigma[p,\ldots,n]$; capping by $b$ gives the same scalar and back face by $R$-linearity. If $n<p$, the inner cap on the right is zero; if $p\le n<p+q$, its remaining degree $n-p$ is less than $q$, so the outer cap is zero. In both cases the left side also vanishes. Thus the equality holds on every simplex and extends bilinearly. [F1, F2, given]

2.1 For cocycles and cycles, [F1] and [F2] make every operation in steps 1.1–1.2 well-defined on the corresponding quotient classes. Passing the chain identities to classes proves the formulas. The case $p=0$ is initial-vertex multiplication; the case $p+q=n$ retains the last vertex with no sign, and zero degrees in either factor need no alteration. Empty spaces, zero inputs/ring, point spaces and degenerate simplices use the same formulas. All maps and products are explicit, without AC. [F1, F2, step 1.1, step 1.2] ∎
