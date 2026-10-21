---
id: lem-rational-homology-ball-boundary-kernel-is-linking-metabolizer
kind: lemma
title: The boundary kernel of a rational homology ball is a linking metabolizer
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-finite-linking-form-and-metabolizer
  - def-bounding-chain-torsion-linking-pairing
  - lem-linking-pairing-on-rational-homology-sphere-is-nonsingular
  - thm-poincare-lefschetz-duality
  - thm-universal-coefficient-theorem-for-cohomology-over-a-pid
  - def-axiom-of-choice
  - thm-long-exact-sequence-of-a-pair-in-singular-homology
  - thm-long-exact-sequence-in-cohomology
  - lem-compact-smooth-manifolds-have-finite-cw-models-under-countable-choice
  - def-countable-choice
  - thm-poincare-duality-for-oriented-topological-manifolds
  - thm-cap-product-boundary-identity
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
      locator: Chapter 2, §2.6, pp. 25–28, and Chapter 8, §8.2, pp. 167–168; the relevant boundary-kernel interface read
    - title: Patrick Gilmer, Slice Knots in S3
      url: https://www.maths.ed.ac.uk/~v1ranick/papers/gilmer3.pdf
      locator: §1, printed pp. 306–307; the kernel and metabolizer argument read
---
## Statement

Assume AC. Let $W$ be a compact connected smooth oriented $4$-manifold with rational homology of a point and connected boundary $Y$. Then $Y$ is a rational homology sphere, and $P=\ker(H_1(Y;\mathbb Z)\to H_1(W;\mathbb Z))$ is a metabolizer for the torsion linking form $\lambda_Y$.

## Statement references

[[def-finite-linking-form-and-metabolizer|Finite linking forms and metabolizers]]

[[def-bounding-chain-torsion-linking-pairing|The signed bounding-chain formula]]

[[lem-linking-pairing-on-rational-homology-sphere-is-nonsingular|Nonsingularity of the rational-sphere linking form]]

[[def-axiom-of-choice|Axiom of Choice]]

[[def-countable-choice|Countable Choice]]

## Facts & Assumptions

**Given:** Full AC, a compact connected oriented rational homology $4$-ball $W$, and its connected boundary $Y$.

[A1] Full AC is assumed wherever the cover and orientation conventions use the choice axiom. [[def-axiom-of-choice]]

[F1] Poincaré–Lefschetz duality identifies $H_i(W,Y;\mathbb Z)$ with $H^{4-i}(W;\mathbb Z)$ and carries the relative fundamental class to the boundary fundamental class. [[thm-poincare-lefschetz-duality]]

[F2] The integral homology-pair sequence is exact. [[thm-long-exact-sequence-of-a-pair-in-singular-homology]]

[F3] The cohomology universal coefficient sequence over $\mathbb Z$ is $0\to\operatorname{Ext}(H_{j-1}(W),\mathbb Z)\to H^j(W;\mathbb Z)\to\operatorname{Hom}(H_j(W),\mathbb Z)\to0$. [[thm-universal-coefficient-theorem-for-cohomology-over-a-pid]]

[F4] The finite-CW supplier assumes countable choice as defined by [def-countable-choice]; under [A1], full AC implies it by applying the choice function to the indexed family. [[lem-compact-smooth-manifolds-have-finite-cw-models-under-countable-choice]] [[def-countable-choice]] [[def-axiom-of-choice]]


[F5] The linking form on a closed oriented rational homology sphere is perfect and its bounding-chain expression is the Bockstein–duality evaluation. [[lem-linking-pairing-on-rational-homology-sphere-is-nonsingular]] [[def-bounding-chain-torsion-linking-pairing]]

[F6] In a finite nonsingular linking form, a subgroup $P$ is a metabolizer when $P=P^\perp$. [[def-finite-linking-form-and-metabolizer]]

[F7] Poincaré duality on $Y$ identifies $H_2(Y;\mathbb Z)$ with $H^1(Y;\mathbb Z)$; Poincaré–Lefschetz duality and the cap-product boundary identity identify the homology boundary map $H_2(W,Y)\to H_1(Y)$ with cohomology restriction $H^2(W)\to H^2(Y)$ under these dualities. [[thm-poincare-duality-for-oriented-topological-manifolds]] [[thm-poincare-lefschetz-duality]] [[thm-cap-product-boundary-identity]]

[F8] The coefficient sequence $0\to\mathbb Z\to\mathbb Q\to\mathbb Q/\mathbb Z\to0$ gives the natural long exact cohomology sequence and its Bockstein map. [[thm-long-exact-sequence-in-cohomology]]

## Proof

1.1 The rational homology-pair sequence and [F1], with $H_i(W;\mathbb Q)=0$ for $i>0$, give $H_1(Y;\mathbb Q)=H_2(Y;\mathbb Q)=0$; connectedness gives $H_0(Y;\mathbb Q)=\mathbb Q$, and orientation gives $H_3(Y;\mathbb Q)=\mathbb Q$. Thus $Y$ is a rational homology sphere. By [F4] and [A1], both $W$ and its smooth boundary $Y$ have finite CW type, so their integral homology groups are finitely generated. The groups $H_1(Y;\mathbb Z)$, $H_1(W;\mathbb Z)$ and $H_2(W;\mathbb Z)$ have vanishing rationalizations and are therefore finite. [F1, F4, given, construct, A1]

2.1 Put $A=H_1(Y;\mathbb Z)$, $B=H_1(W;\mathbb Z)$, and $C=H_2(W;\mathbb Z)$. Since $A$ is finite by step 1.1, the universal coefficient sequence [F3] gives $H^1(Y;\mathbb Z)=0$; [F7] then gives $H_2(Y;\mathbb Z)=0$. Also $H_3(W;\mathbb Z)=0$: [F1] identifies $H_4(W,Y)$ with $H^0(W)=\mathbb Z$, and its fundamental-class boundary maps to the generator of $H_3(Y)=\mathbb Z$; since $H_3(W,Y)\cong H^1(W)=0$, exactness forces $H_3(W)=0$. [F1, F2, F3, F7, step 1.1]

3.1 By [F3], $H^2(W;\mathbb Z)\cong\operatorname{Ext}(B,\mathbb Z)$ and $H^3(W;\mathbb Z)\cong\operatorname{Ext}(C,\mathbb Z)$, because $B,C$ are finite and $H_3(W)=0$. Their orders are $|B|$ and $|C|$. Under [F1], these are the orders of $H_2(W,Y)$ and $H_1(W,Y)$, respectively. The pair sequence [F2] shows that $P=\ker(A\to B)$ is the cokernel of the injective map $H_2(W)\to H_2(W,Y)$, while $B\to H_1(W,Y)$ is onto because the next map $H_0(Y)\to H_0(W)$ is an isomorphism. Hence $|P|=|B|/|C|$ and $|A/P|=|B|/|C|$, so $|A|=|P|^2$. [F1, F2, F3, step 1.1, step 2.1, algebra, A1]

3.2 To prove isotropy, [F2] and the naturality in [F7] identify $P$ under Poincaré duality with the image of $H^2(W;\mathbb Z)\to H^2(Y;\mathbb Z)$. For $x,y\in P$, choose lifts $\widetilde x,\widetilde y\in H^2(W;\mathbb Z)$. Since $W$ is a rational homology ball, the coefficient Bockstein $H^1(W;\mathbb Q/\mathbb Z)\to H^2(W;\mathbb Z)$ is onto by [F8]: the adjacent groups $H^1(W;\mathbb Q)$ and $H^2(W;\mathbb Q)$ vanish. Choose $\gamma\in H^1(W;\mathbb Q/\mathbb Z)$ with Bockstein $\widetilde y$. The Bockstein–duality formula in [F5] evaluates $\lambda_Y(y,x)$ as the restriction of $\gamma\smile\widetilde x$ on $[Y]$; symmetry of $\lambda_Y$ then gives the same value for $\lambda_Y(x,y)$. This cup class extends over $W$, and the inclusion sends $[Y]$ to zero in $H_3(W)$ because $Y=\partial W$. Thus $\lambda_Y(x,y)=0$. [F1, F2, F5, F7, F8, step 1.1, step 2.1, algebra, A1]

4.1 The isotropy from step 3.2 gives $P\subseteq P^\perp$. Nonsingularity [F5] implies $|P^\perp|=|A|/|P|=|P|$ by step 3.1. Therefore $P=P^\perp$, so $P$ is a metabolizer by [F6]. [F5, F6, step 3.1, step 3.2, algebra] ∎

## Unresolved proof obligations

The finite-CW step is supplied by [F4], and the boundary naturality and Bockstein steps are supplied by [F7] and [F8].
