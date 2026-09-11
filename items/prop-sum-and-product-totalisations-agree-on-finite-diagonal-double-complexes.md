---
id: prop-sum-and-product-totalisations-agree-on-finite-diagonal-double-complexes
kind: proposition
title: Sum and product totalisations agree on finite diagonal double complexes
status: published
origin: pipeline
pipeline_run: phase-2-next-20
deps: [def-direct-sum-total-complex-of-a-double-complex, lem-the-total-differential-squares-to-zero, def-product-total-complex-of-a-double-complex, def-additive-category, def-biproduct, def-products-and-coproducts]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Stacks Project, Section 12.18, finite diagonal totalisation"
      url: https://stacks.math.columbia.edu/tag/0FNB
---

## Statement

If each diagonal of a homological double complex $C$ in an abelian category
contains only finitely many nonzero objects, both totalisations exist and the
canonical comparison $\eta:\operatorname{Tot}^{\oplus}(C)\to\operatorname{Tot}^{\Pi}(C)$
is an isomorphism of chain complexes.

## Facts & Assumptions

[F1] [[def-additive-category]] supplies finite biproducts; [[def-biproduct]] identifies the finite coproduct-to-product comparison as an isomorphism.

[F2] [[def-products-and-coproducts]] supplies the universal properties of both constructions.

[F3] [[def-direct-sum-total-complex-of-a-double-complex]] specifies the differential on each injection; [[lem-the-total-differential-squares-to-zero]] proves its chain condition.

[F4] [[def-product-total-complex-of-a-double-complex]] specifies the differential after each projection and verifies its chain condition.

## Proof

**Given:** $C$ as stated. Write $T_n,P_n$ for the sum and product total objects, and $\iota^n_{p,q},\pi^n_{p,q}$ for their structure maps whenever constructed.

1.1 Fix $n$ and let $I_n=\{(p,q):p+q=n,\ C_{p,q}\ne0\}$. A finite biproduct of the objects indexed by $I_n$ exists. Adjoining the unique maps from and to each omitted zero object makes its coproduct and product structures satisfy the universal properties for the whole diagonal: those omitted components impose no conditions on a family of maps. This constructs $T_n$ and $P_n$, including $I_n=\varnothing$, when both are zero. [F1, F2, given]

2.1 Define $\eta_n:T_n\to P_n$ by $\pi^n_{a,b}\eta_n\iota^n_{p,q}=1_{C_{p,q}}$ if $(a,b)=(p,q)$ and zero otherwise. Successive coproduct and product universal properties give its existence and uniqueness. Under the identifications in the preceding step it is precisely the finite biproduct comparison, so it is invertible. If $I_n$ has one element, it is the identity on that component. [F1, F2, step 1.1]

3.1 Test $d^P_n\eta_n$ and $\eta_{n-1}d^T_n$ by precomposing with $\iota^n_{p,q}$ and postcomposing with $\pi^{n-1}_{a,b}$. Both composites are $h_{p,q}$ for $(a,b)=(p-1,q)$, $v_{p,q}$ for $(a,b)=(p,q-1)$, and zero otherwise, by the two differential formulas. Universal-property uniqueness gives $d^P_n\eta_n=\eta_{n-1}d^T_n$. [F2, F3, F4, step 2.1]

4.1 Multiplying this equation by the inverses gives $d^T_n\eta_n^{-1}=\eta_{n-1}^{-1}d^P_n$. Hence the degreewise inverse is also a chain map. All components of the comparison are uniquely specified, and its inverses are unique; no simultaneous choice of lifts or representatives is involved. The conclusion holds for the zero complex and for a complex supported on one row or column as well. [step 2.1, step 3.1, algebra] ∎
