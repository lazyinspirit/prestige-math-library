---
id: def-kronecker-evaluation-pairing
kind: definition
title: Kronecker evaluation pairing
status: published
origin: pipeline
pipeline_run: phase-2-next-20
deps: [def-singular-cohomology-with-coefficients, def-singular-chain-complex-and-singular-homology]
justified_by: [lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Hatcher, section 3.1, printed pages 198 and 200
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
---

## Definition

Fix a space $X$, abelian group $G$ and integer $n\ge0$. For a singular cocycle $\varphi\in Z^n(X;G)$ and an integral singular cycle $c\in Z_n(X;\mathbb Z)$, define their **evaluation** to be $\varphi(c)\in G$, using [[def-singular-cohomology-with-coefficients]] and [[def-singular-chain-complex-and-singular-homology]]. If $c=\sum_\sigma a_\sigma\sigma$ is its finite formal expansion, this value is $\sum_\sigma a_\sigma\varphi(\sigma)$.

The **Kronecker pairing** on quotient classes is the rule
$$\langle[\varphi],[c]\rangle=\varphi(c),\qquad H^n(X;G)\times H_n(X;\mathbb Z)\to G.$$
Its descent through both quotients, biadditivity and naturality are justified by the following lemma [[lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives]], before any use of the quotient pairing. It is not an assertion that evaluation gives an isomorphism to the full dual of homology.

For negative $n$, the two groups are zero and the pairing is the zero map. Empty $X$ and zero $G$ also give zero evaluation. When $G$ is an $R$-module, the cohomology variable is $R$-linear and the integral homology variable is additive; an $R$-bilinear pairing instead uses chains and homology over $R$ with $R$-linear cochains. No representative-selection function is included in the definition.
