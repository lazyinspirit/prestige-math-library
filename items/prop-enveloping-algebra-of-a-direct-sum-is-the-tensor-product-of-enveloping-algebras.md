---
id: prop-enveloping-algebra-of-a-direct-sum-is-the-tensor-product-of-enveloping-algebras
kind: proposition
title: Enveloping algebra of a direct sum
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-direct-product-and-direct-sum-of-lie-algebras, prop-functoriality-of-the-universal-enveloping-algebra, thm-tensor-product-of-algebras-over-a-commutative-ring, thm-universal-property-of-module-tensor-products, thm-universal-property-of-the-universal-enveloping-algebra]
landmark: false
proof_strategy: constructive
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Etingof, MIT 18.745 notes, enveloping universal property in §12.1, printed pp. 69–70"
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
---

## Statement

For Lie algebras $\mathfrak g$ and $\mathfrak h$ over $k$, there is a unital
algebra isomorphism

$$U(\mathfrak g\oplus\mathfrak h)\cong U(\mathfrak g)\otimes_kU(\mathfrak h).$$

## Facts & Assumptions

**Given:** Lie algebras $\mathfrak g,\mathfrak h$ over the same field $k$.

[L1] The two summands commute in their direct sum ([[def-direct-product-and-direct-sum-of-lie-algebras]]).

[L2] Lie maps induce enveloping-algebra maps ([[prop-functoriality-of-the-universal-enveloping-algebra]]), and Lie maps into associative commutator algebras extend uniquely ([[thm-universal-property-of-the-universal-enveloping-algebra]]).

[L3] The algebra tensor product has multiplication $(a\otimes b)(a'\otimes b')=aa'\otimes bb'$ ([[thm-tensor-product-of-algebras-over-a-commutative-ring]]), and bilinear maps factor through the module tensor product ([[thm-universal-property-of-module-tensor-products]]).

## Proof

**Proof technique:** constructive comparison of the two universal maps.

1.1 Define $\phi:\mathfrak g\oplus\mathfrak h\to(U(\mathfrak g)\otimes U(\mathfrak h))_{\mathrm{Lie}}$ by $\phi(x,y)=\iota_{\mathfrak g}(x)\otimes1+1\otimes\iota_{\mathfrak h}(y)$. Same-summand commutators give the respective Lie brackets, while the two tensor factors commute, so [L1] makes $\phi$ a Lie map. By [L2] it extends uniquely to an algebra map $\Phi:U(\mathfrak g\oplus\mathfrak h)\to U(\mathfrak g)\otimes U(\mathfrak h)$. [L1, L2, L3, construct]

1.2 Let $\alpha:U(\mathfrak g)\to U(\mathfrak g\oplus\mathfrak h)$ and $\beta:U(\mathfrak h)\to U(\mathfrak g\oplus\mathfrak h)$ be induced by the summand inclusions. Their generator images commute by [L1] and the canonical enveloping relation, hence all of $\alpha(U(\mathfrak g))$ commutes with all of $\beta(U(\mathfrak h))$. Therefore $(a,b)\mapsto\alpha(a)\beta(b)$ is bilinear and [L3] gives a linear map $\Psi:U(\mathfrak g)\otimes U(\mathfrak h)\to U(\mathfrak g\oplus\mathfrak h)$. [L1, L2, L3, construct, algebra]

2.1 Commutation of the two images gives $\Psi((a\otimes b)(a'\otimes b'))=\alpha(aa')\beta(bb')=\alpha(a)\beta(b)\alpha(a')\beta(b')$, so $\Psi$ is a unital algebra homomorphism. [step 1.2, L3, algebra]

3.1 The composite $\Psi\Phi$ fixes the canonical images of $(x,0)$ and $(0,y)$, hence is the identity on $U(\mathfrak g\oplus\mathfrak h)$ by uniqueness in [L2]. The composites $\Phi\alpha$ and $a\mapsto a\otimes1$ agree on $\iota_{\mathfrak g}(\mathfrak g)$, and similarly $\Phi\beta(b)=1\otimes b$; thus $\Phi\Psi$ fixes every pure tensor $(a\otimes1)(1\otimes b)=a\otimes b$, hence is the identity. [step 1.1, step 1.2, step 2.1, L2, L3]

4.1 Therefore $\Phi$ and $\Psi$ are inverse unital algebra isomorphisms, including when either summand is zero. [step 3.1, discharge-construct: step 1.1] ∎
