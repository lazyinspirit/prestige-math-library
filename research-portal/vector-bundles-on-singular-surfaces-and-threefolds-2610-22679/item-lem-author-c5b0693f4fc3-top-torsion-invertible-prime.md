---
title: Top-weight degree-five vanishing away from the characteristic
status: published
research_item: lem-author-c5b0693f4fc3-top-torsion-invertible-prime
dependency_level: 11
---

PDF p. 5: Proposition 2.6: torsion freeness

## Prerequisites

- [def-motivic-cohomology](item-def-motivic-cohomology)
- [thm-author-c5b0693f4fc3-top-torsion-topweight-comparison](item-thm-author-c5b0693f4fc3-top-torsion-topweight-comparison)
- [thm-author-c5b0693f4fc3-top-torsion-artin-affine](item-thm-author-c5b0693f4fc3-top-torsion-artin-affine)

## Statement
Let $X$ be an affine finite-type scheme of dimension three over an algebraically closed field $k$. If $\ell$ is invertible in $k$, then $H^{5,3}_{\rm mot}(X,\mathbb Z/\ell)=0$.

## Facts & Assumptions
[F1] [thm-author-c5b0693f4fc3-top-torsion-topweight-comparison](item-thm-author-c5b0693f4fc3-top-torsion-topweight-comparison) identifies the actual finite-coefficient motivic complex with syntomic cohomology in weight three, since $3=\dim X$; at an invertible prime this is $R\Gamma_{\acute et}(X,\mu_\ell^{\otimes3})$.

[F2] [thm-author-c5b0693f4fc3-top-torsion-artin-affine](item-thm-author-c5b0693f4fc3-top-torsion-artin-affine) gives affine étale vanishing above dimension.

## Proof
**Given:** $X,k,\ell$ as stated.

**Goal:** Prove the vanishing for the supplied motivic theory.

1.1 The quotient in [F1] is the objectwise derived quotient used in [def-motivic-cohomology](item-def-motivic-cohomology), not a different finite-coefficient theory. Thus its degree-five cohomology is $H^5_{\acute et}(X,\mu_\ell^{\otimes3})$. [F1]

2.1 The twist is an étale $\ell$-torsion local system; [F2] makes this group zero since $5>3$. This does not require $X$ reduced or smooth. [F2, step 1.1] ∎
