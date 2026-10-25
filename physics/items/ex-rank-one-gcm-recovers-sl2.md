---
id: ex-rank-one-gcm-recovers-sl2
kind: example
title: "Rank one gcm recovers sl2"
status: published
origin: pipeline
deps: ["thm-serre-presentation-of-a-kac-moody-algebra"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Kleshchev, Lectures on Infinite Dimensional Lie Algebras — Example 1.5.2, pp.20–21; explicit 2×2 computation"
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
proof_strategy: direct
---

## Example

For $A=(2)$, the minimal Cartan is $\mathbb Ch$ with $\alpha(h)=2$, and $\mathfrak g(A)\cong\mathfrak{sl}_2(\mathbb C)$.

## Facts & Assumptions

**Given:** A=(2) and D=(1).

[F1] The Cartan and Serre relations give exactly the algebra. ([[thm-serre-presentation-of-a-kac-moody-algebra]]).

## Verification

1.1 There are no distinct indices, so no Serre relations. The Cartan relations are $[h,e]=2e$, $[h,f]=-2f$, $[e,f]=h$. Their right sides lie in the span of $e,h,f$, which is closed under brackets and contains all generators; thus the algebra has dimension at most three. [F1, given]

2.1 In traceless $2\times2$ matrices put $E=E_{12}$, $F=E_{21}$ and $H=E_{11}-E_{22}$. Matrix multiplication gives $EF=E_{11}$, $FE=E_{22}$, $HE=E$, $EH=-E$, $HF=-F$, and $FH=F$. Thus $[E,F]=H$, $[H,E]=2E$ and $[H,F]=-2F$. These three matrices are independent and span every traceless matrix. The presentation map is onto this three-dimensional space and step 1.1 bounds its source dimension by three, so it is an isomorphism. [F1, step 1.1] ∎

## Sources

Source comparison: [Kleshchev](https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf), Example 1.5.2, pp.20–21; explicit 2×2 computation.
