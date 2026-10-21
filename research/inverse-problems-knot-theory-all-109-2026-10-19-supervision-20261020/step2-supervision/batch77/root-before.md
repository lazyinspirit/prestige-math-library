---
id: lem-linking-pairing-on-rational-homology-sphere-is-nonsingular
kind: lemma
title: The torsion linking pairing of a rational homology sphere is nonsingular
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-bounding-chain-torsion-linking-pairing
  - thm-poincare-duality-for-oriented-topological-manifolds
  - thm-universal-coefficient-theorem-for-cohomology-over-a-pid
  - thm-long-exact-sequence-in-cohomology
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Charles Livingston and Swatee Naik, Introduction to Knot Concordance
      url: https://chuck-livingston.github.io/math/Concordance_Book.pdf
      locator: Chapter 7, §7.6, pp. 140–141; complete linking-form section read
    - title: Patrick Gilmer, Slice Knots in S3
      url: https://www.maths.ed.ac.uk/~v1ranick/papers/gilmer3.pdf
      locator: §1, printed pp. 306–307; complete relevant linking-form and metabolizer discussion read
---

## Statement

Assume AC. If $Y$ is a closed connected oriented $3$-manifold with finite $H_1(Y;\mathbb Z)$, then the bounding-chain torsion linking pairing $\lambda_Y$ is symmetric and nonsingular: its adjoint $H_1(Y;\mathbb Z)\to\operatorname{Hom}(H_1(Y;\mathbb Z),\mathbb Q/\mathbb Z)$ is an isomorphism.

## Statement references

[[def-bounding-chain-torsion-linking-pairing|The signed bounding-chain formula]]

[Charles Livingston and Swatee Naik, *Introduction to Knot Concordance*, §7.6, pp. 140–141](https://chuck-livingston.github.io/math/Concordance_Book.pdf)

[Patrick Gilmer, *Slice Knots in S3*, §1, pp. 306–307](https://www.maths.ed.ac.uk/~v1ranick/papers/gilmer3.pdf)

[[def-axiom-of-choice|Axiom of Choice]]

## Facts & Assumptions

**Given:** Full AC and a closed connected oriented $3$-manifold $Y$ with finite $H_1(Y;\mathbb Z)$.

[A1] Full AC is assumed wherever the cover and orientation conventions use the choice axiom. [[def-axiom-of-choice]]

[F1] Poincaré duality for closed oriented manifolds gives $H^2(Y;\mathbb Z)\cong H_1(Y;\mathbb Z)$ and $H^2(Y;\mathbb Q)\cong H_1(Y;\mathbb Q)$. [[thm-poincare-duality-for-oriented-topological-manifolds]]

[F2] The cohomology universal coefficient sequence over $\mathbb Z$ identifies $H^1(Y;\mathbb Q)$ with $\operatorname{Hom}(H_1(Y;\mathbb Z),\mathbb Q)$ and $H^1(Y;\mathbb Q/\mathbb Z)$ with $\operatorname{Hom}(H_1(Y;\mathbb Z),\mathbb Q/\mathbb Z)$, since $H_0(Y;\mathbb Z)=\mathbb Z$ is free. [[thm-universal-coefficient-theorem-for-cohomology-over-a-pid]]

[F3] The coefficient sequence $0\to\mathbb Z\to\mathbb Q\to\mathbb Q/\mathbb Z\to0$ gives the long exact cohomology sequence and its natural Bockstein map $\beta:H^1(Y;\mathbb Q/\mathbb Z)\to H^2(Y;\mathbb Z)$. [[thm-long-exact-sequence-in-cohomology]]

[F4] The bounding-chain formula is the evaluation pairing obtained by applying the Bockstein inverse to the Poincaré dual of the first torsion class and evaluating on the Poincaré dual of the second. At chain level, a rational cochain lifting a torsion cocycle evaluates on a cycle as the signed intersection of a bounding multiple divided by that multiple. [[def-bounding-chain-torsion-linking-pairing]]

## Proof

1.1 Since $H_1(Y;\mathbb Z)$ is finite, $H^1(Y;\mathbb Q)=0$ by [F2], and $H^2(Y;\mathbb Q)=0$ by [F1]. Exactness of the coefficient sequence in [F3] makes $\beta:H^1(Y;\mathbb Q/\mathbb Z)\to H^2(Y;\mathbb Z)$ an isomorphism. Composing it with [F1] identifies $H^1(Y;\mathbb Q/\mathbb Z)$ isomorphically with $H_1(Y;\mathbb Z)$. [F1, F2, F3, given, algebra, A1]

2.1 By [F2], $H^1(Y;\mathbb Q/\mathbb Z)$ is the full character group of $H_1(Y;\mathbb Z)$. The isomorphism of step 1.1 therefore says that the adjoint of the pairing in [F4] is an isomorphism, proving nonsingularity. [F2, F4, step 1.1, algebra]

3.1 For torsion classes $x,y$, choose $n,m>0$ and chains $C,D$ with $\partial C=nx$ and $\partial D=my$. Put the chains and cycles in general position. Their intersection $C\cap D$ is a $1$-chain; its oriented boundary is the signed sum of $nx\cap D$ and $C\cap my$. The boundary has total algebraic count zero, so $n(x\cdot D)=m(C\cdot y)$ with the boundary-orientation convention. Dividing and reducing modulo $\mathbb Z$ gives $(C\cdot y)/n=(D\cdot x)/m$, hence $\lambda_Y(x,y)=\lambda_Y(y,x)$. [F4, given, construct, algebra] ∎
