---
id: rem-the-theta-seven-calculation-consumes-stable-stems-j-and-kervaire-milnor-arithmetic
kind: remark
title: "Scope of the finite Milnor-sphere calculation"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-milnor-constructed-manifolds-homeomorphic-but-not-diffeomorphic-to-s-seven, thm-milnor-lambda-invariant-is-well-defined-modulo-seven]
external_refs: []
justified_by: []
aliases: []
landmark: false
dependency_level: 0
sources:
  scraped: []
  references:
    - title: "Michel Kervaire and John Milnor, Groups of Homotopy Spheres I, Annals of Mathematics 77 (1963), 504-537"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/kervmiln.pdf"
      locator: "printed p. 504 (statement of the order-28 result in the introduction) and printed p. 512 (the table of Theta_n and bP_{n+1}); the surrounding sections import the stable stem, image-of-J and framed-surgery computations that are not reproduced on this page"
---

## Scope of the finite calculation

The local construction and invariant calculation establish the explicit exotic sphere $M_{2,-1}$ and the formula $\lambda(M_{h,j})=(h-j)^2-1\pmod7$ for $h+j=1$, under the choice assumptions of [[thm-milnor-constructed-manifolds-homeomorphic-but-not-diffeomorphic-to-s-seven]]. Substituting $(h,j)=(1,0)$ gives $\lambda(M_{1,0})=1^2-1=0$, while $(h,j)=(2,-1)$ gives $\lambda(M_{2,-1})=3^2-1=8\equiv1\pmod7$. The invariant is preserved by orientation-preserving diffeomorphisms and negated by orientation reversal ([[thm-milnor-lambda-invariant-is-well-defined-modulo-seven]]). Since neither $1$ nor $-1$ equals $0$ modulo seven, these two manifolds cannot be diffeomorphic in either orientation.

These are constructions and obstruction calculations for specified manifolds. This remark asserts no classification of all smooth homotopy seven-spheres, no group order, and no exhaustion of diffeomorphism types by this family. Such conclusions require additional proofs beyond the displayed local calculations.
