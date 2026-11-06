---
id: thm-gts-genus-zero-quantum-product-associativity
kind: theorem
title: Associativity from genus-zero WDVV under a splitting axiom
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 6
domain: mathematics
library: physics
proof_strategy: direct
deps:
  - thm-gts-r4-12b-algebraic-stable-map-descendants-and-deformation-splitting-identities
  - thm-gts-proper-delignemumford-stack-of-stable-pointed-curves
dependency_roles:
  thm-gts-r4-12b-algebraic-stable-map-descendants-and-deformation-splitting-identities: mathematical-premise
  thm-gts-proper-delignemumford-stack-of-stable-pointed-curves: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: "William Fulton and Rahul Pandharipande, Notes on Stable Maps and Quantum Cohomology"
      url: "https://people.math.ethz.ch/~rahul/sm.pdf"
      locator: "§§1.1, 4–5 for the stable-map and quantum-product conventions. The argument below is the formal WDVV implication under the explicitly assumed splitting axiom."
    - title: "The Stacks Project, Moduli of Curves"
      url: "https://stacks.math.columbia.edu/download/moduli-curves.pdf"
      locator: "The stable pointed curve stack results used for the proper boundary space; the identity M̄_{0,4}≅P¹ is the genus-zero four-point case."
---

## Statement

Let $V$ be smooth projective over $\mathbb C$. Put $H=H^*(V;\mathbb Q)$ with its nondegenerate graded Poincaré pairing $(a,b)=\int_V a\cup b$. Let $\Lambda$ be the Novikov completion of the semigroup ring of effective curve classes, completed with respect to an ample-degree filtration. Assume genus-zero primary Gromov–Witten classes with proper virtual pushforward, evaluation maps, and the splitting/gluing axiom for the two boundary divisors of $\overline M_{0,4}$. Define
$
(a*b,c)=\sum_{\beta\ge0}Q^\beta\,\langle a,b,c\rangle_{0,3,\beta},\qquad
\langle a,b,c\rangle_{0,3,\beta}=\int_{[\overline M_{0,3}(V,\beta)]^{\rm vir}}\operatorname{ev}_1^*a\,\operatorname{ev}_2^*b\,\operatorname{ev}_3^*c,
$
using the source graded tensor/Koszul sign convention. Then $*$ is associative. This is a formal conditional consequence of WDVV; the geometric stable-map POT and splitting axiom are assumed inputs, not proved here.

## Statement references

[[thm-gts-r4-12b-algebraic-stable-map-descendants-and-deformation-splitting-identities]]

[[thm-gts-proper-delignemumford-stack-of-stable-pointed-curves]]

## Facts & Assumptions

**Given:** $V$, $H$, the Novikov completion, the nondegenerate pairing, proper genus-zero virtual classes and evaluation maps, and the stated splitting/gluing axiom.

[F1] [[thm-gts-r4-12b-algebraic-stable-map-descendants-and-deformation-splitting-identities]] constructs the algebraic stable-map obstruction theory, rational Chow virtual class and refined-diagonal splitting identity. Its numerical insertions are algebraic Chow classes, and its dual-basis expansion requires an actual Chow decomposition of the diagonal. The cohomological invariants and graded splitting axiom for the full space $H$ in this Statement are separate assumed data; no comparison with cohomological integration is inferred from that algebraic theorem.

[F2] [[thm-gts-proper-delignemumford-stack-of-stable-pointed-curves]] supplies the proper stable four-pointed genus-zero curve stack. The cross-ratio and the boundary-point identification used here are proved in step 1.1.

## Proof

1.1 The stack $\overline M_{0,4}$ is isomorphic to $\mathbb P^1$: the cross-ratio identifies its smooth locus with $\mathbb P^1\setminus\{0,1,\infty\}$, and the three omitted values are the three nodal two-component curves. Hence the boundary divisors $D_{12|34}$ and $D_{14|23}$ are rationally equivalent. [F2, given]

1.2 Extend the pairing to $H\otimes\Lambda$ and put $C(a,b,c)=\sum_\beta Q^\beta\langle a,b,c\rangle_{0,3,\beta}=(a*b,c)$. Permutation symmetry of primary Gromov–Witten classes makes $C$ graded symmetric. The pairing and curve variables are even, so $|a*b|=|a|+|b|$ for parity-homogeneous inputs. These are the graded tensor conventions in the assumed Gromov–Witten data. [given]

2.1 Integrate the pullback of the equal boundary classes against the four-point virtual class with homogeneous insertions $a,b,c,d$. The assumed cohomological splitting axiom expands the $12|34$ boundary, coefficientwise in $Q$, as $(a*b,c*d)$; the $14|23$ boundary gives $(-1)^{|d|(|b|+|c|)}(a*d,b*c)$, since moving $d$ past $b,c$ is the permutation grouping the ordered insertions into those two pairs. These contractions use the graded inverse pairing, including its Koszul signs. Graded symmetry of $C$ gives $(a*b,c*d)=C(a*b,c,d)=((a*b)*c,d)$. For the other contraction, cyclic symmetry and graded symmetry of the pairing give $C(a,b*c,d)=(-1)^{|a|(|b|+|c|)}(b*c,a*d)=(-1)^{|d|(|b|+|c|)}(a*d,b*c)$. Hence equality of the boundary integrals is precisely $((a*b)*c,d)=(a*(b*c),d)$. The splitting here is the cohomological assumption in the Statement; [F1] records the distinct scope of the algebraic supplier. [F1, given, step 1.1, step 1.2]

3.1 By the definition of $*$, each contracted sum in WDVV is the pairing of the corresponding iterated quantum products with the remaining input. Thus WDVV gives $((a*b)*c,d)=(a*(b*c),d)$ coefficientwise in $\Lambda$ for every homogeneous $d$. The Novikov completion makes these coefficientwise sums well-defined, and nondegeneracy of the Poincaré pairing implies $(a*b)*c=a*(b*c)$. Bilinearity extends the identity to all classes. [F1, given, step 2.1] ∎
