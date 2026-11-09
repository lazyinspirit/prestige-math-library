---
title: Torsion freeness of top threefold motivic cohomology
status: draft
research_item: prop-top-motivic-torsion-free
dependency_level: 12
---

PDF p. 5: Proposition 2.6: torsion freeness

## Prerequisites

- [def-motivic-cohomology](item-def-motivic-cohomology)
- [lem-author-c5b0693f4fc3-top-torsion-bockstein](item-lem-author-c5b0693f4fc3-top-torsion-bockstein)
- [lem-author-c5b0693f4fc3-top-torsion-primewise](item-lem-author-c5b0693f4fc3-top-torsion-primewise)
- [lem-author-c5b0693f4fc3-top-torsion-invertible-prime](item-lem-author-c5b0693f4fc3-top-torsion-invertible-prime)
- [lem-author-c5b0693f4fc3-top-torsion-characteristic-prime](item-lem-author-c5b0693f4fc3-top-torsion-characteristic-prime)


## Statement
For an affine threefold $X$ over an algebraically closed field $k$, $H^{6,3}_{\rm mot}(X,\mathbb Z)$ is torsion-free. Threefold means finite type and dimension three, without any smoothness, reducedness or irreducibility assumption.

## Facts & Assumptions
[F1] [def-motivic-cohomology](item-def-motivic-cohomology) defines $C=\mathbb Z(3)_{\rm mot}(X)$ and its finite coefficients by objectwise derived tensor.

[F2] [lem-author-c5b0693f4fc3-top-torsion-invertible-prime](item-lem-author-c5b0693f4fc3-top-torsion-invertible-prime) gives $H^5(C/\ell)=0$ for invertible primes. [lem-author-c5b0693f4fc3-top-torsion-characteristic-prime](item-lem-author-c5b0693f4fc3-top-torsion-characteristic-prime) gives the same for the characteristic prime.

[F3] [lem-author-c5b0693f4fc3-top-torsion-bockstein](item-lem-author-c5b0693f4fc3-top-torsion-bockstein) turns this vanishing into injectivity; [lem-author-c5b0693f4fc3-top-torsion-primewise](item-lem-author-c5b0693f4fc3-top-torsion-primewise) detects torsion-freeness.

## Proof
**Given:** $X$ and $k$ as stated.

**Goal:** Prove the unrestricted characteristic-independent assertion.

1.1 Fix any prime $\ell$. If $\ell$ is invertible in $k$, apply the first part of [F2]. Otherwise $\operatorname{char}k=\ell>0$, and apply its second part. Hence $H^5(C/\ell)=0$ for every prime, including the characteristic prime. [F1, F2]

2.1 By [F3], multiplication by every prime on $H^6(C)$ is injective. The primewise criterion makes $H^6(C)$ torsion-free. By [F1] this is precisely $H^{6,3}_{\rm mot}(X,\mathbb Z)$. [F3, step 1.1] ∎

## Source qualifications
The article's Proposition 2.6, pp. 5–6, states the full assertion but supplies only a characteristic-zero proof. This is a nonfatal omission in that source. The current argument uses the separate published report Theorem 4 at weight three and EM v1 Lemma 4.16, rather than treating the article's deferred positive-characteristic proof as a premise. The report's separate reducedness hypothesis in Theorem 1 is not imposed in its Theorem 4.

The report Theorem 3(2) prints an étale lower-right corner, while EM v1 Theorem 4.28 prints the éh corner. The printed discrepancy is verified; a theorem-level error in that square is not established here. The proof above uses the precise EM comparison through its declared suppliers. The report's Theorem 4 proof also omits the shift from its description of the comparison cofiber: EM v1 Corollary 4.32 gives $R\Gamma_{\rm cdh}(X,\widetilde\nu_1(3))[-4]$. This confirmed source omission is nonfatal because the report proves vanishing of the obstruction itself.

The report Remark 5 has a separate incorrect duality exponent. With its stated higher-Chow homological indexing, $X=\mathbb P^1$, $j=1$, $i=0$ and invertible prime coefficients give a nonzero left side and a zero degree-three right side. This display is not used above. In the smooth proper prime-to-characteristic setting the compatible degree is $2d-2j+i$; no replacement for the report's full quasiprojective or syntomic scope is asserted.
