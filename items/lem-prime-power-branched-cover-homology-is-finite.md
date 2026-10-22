---
id: lem-prime-power-branched-cover-homology-is-finite
kind: lemma
title: Prime-power cyclic branched covers of knots have finite first homology
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 13
deps:
  - lem-cyclic-cover-order-root-product-and-rational-sphere-test
  - lem-seifert-matrix-skew-part-is-surface-intersection
  - thm-cyclotomic-polynomials-are-irreducible-over-the-rationals
  - def-axiom-of-choice
  - lem-linking-pairing-on-rational-homology-sphere-is-nonsingular
  - thm-universal-coefficient-theorem-for-homology-over-a-pid
  - thm-poincare-duality-for-oriented-topological-manifolds
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Charles Livingston, Seifert Forms and Concordance
      url: https://arxiv.org/pdf/math/0101035v3
      locator: §3, Theorem 3.1, pp. 406–407; the root-product criterion is cited, and the prime-power argument is supplied locally
    - title: Dale Rolfsen, Knots and Links
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rolfsen.pdf
      locator: Chapter 8.D, printed pp. 212–215; cyclic-cover presentations read
---

## Statement

Assume AC. Let $K$ be a smooth oriented knot and let $q=p^k$ for a prime $p$ and $k\ge1$. Then $H_1(\Sigma_q(K);\mathbb Z)$ is finite, so $\Sigma_q(K)$ is a rational homology sphere and carries a nonsingular torsion linking form.

## Statement references

[[lem-cyclic-cover-order-root-product-and-rational-sphere-test|The cyclic-cover root-product criterion]]

[[lem-seifert-matrix-skew-part-is-surface-intersection|The Seifert skew part is the unimodular surface intersection form]]

[[thm-cyclotomic-polynomials-are-irreducible-over-the-rationals|Irreducibility of cyclotomic polynomials]]

[[thm-universal-coefficient-theorem-for-homology-over-a-pid|The homology universal coefficient theorem]]

[[thm-poincare-duality-for-oriented-topological-manifolds|Poincaré duality]]

[[def-axiom-of-choice|Axiom of Choice]]

## Facts & Assumptions

**Given:** Full AC, a smooth oriented knot $K$, and $q=p^k$ with $p$ prime and $k\ge1$.

[A1] Full AC is assumed wherever the cover and orientation conventions use the choice axiom. [[def-axiom-of-choice]]

[F1] For any connected Seifert surface with positive-push matrix $V$, the group $H_1(\Sigma_q(K);\mathbb Z)$ is finite exactly when $D(\zeta_q^j)\ne0$ for all $1\le j<q$, where $D(t)=\det(V-tV^T)$. [[lem-cyclic-cover-order-root-product-and-rational-sphere-test]]

[F2] $D(1)=\det(V-V^T)=\pm1$, since $V-V^T$ is the integral intersection matrix of the Seifert surface. [[lem-seifert-matrix-skew-part-is-surface-intersection]]

[F3] For each $s\ge1$, the minimal polynomial over $\mathbb Q$ of a primitive $p^s$-th root is the monic cyclotomic polynomial $\Phi_{p^s}(t)$, which has integer coefficients and $\Phi_{p^s}(1)=p$. [[thm-cyclotomic-polynomials-are-irreducible-over-the-rationals]]

[F4] If $Y$ is closed, connected, oriented and has finite first homology, its bounding-chain torsion linking pairing is nonsingular. [[lem-linking-pairing-on-rational-homology-sphere-is-nonsingular]]

[F5] For a closed oriented $3$-manifold with finite first homology, the homology universal coefficient theorem and Poincaré duality give rational homology of $S^3$. [[thm-universal-coefficient-theorem-for-homology-over-a-pid]] [[thm-poincare-duality-for-oriented-topological-manifolds]]

## Proof

1.1 Suppose a nontrivial $q$-th root of unity $\omega$ were a zero of $D$. Its order is $p^s$ for some $1\le s\le k$. By [F3], the minimal polynomial $\Phi_{p^s}$ divides $D$ in $\mathbb Q[t]$. Since $\Phi_{p^s}$ is monic and both polynomials have integer coefficients, polynomial long division gives an integer-coefficient quotient with zero remainder. Thus $p=\Phi_{p^s}(1)$ divides $D(1)$. [F3, given, algebra, A1]

2.1 This contradicts $D(1)=\pm1$ from [F2]. Therefore $D$ has no zero at any nontrivial $q$-th root of unity. The criterion [F1] gives finiteness of $H_1(\Sigma_q(K);\mathbb Z)$. [F1, F2, step 1.1, algebra]

3.1 By [F5], the finite first homology from step 2.1 makes $\Sigma_q(K)$ a rational homology sphere. Its torsion linking form is nonsingular by [F4], which proves the final assertion. [F1, F4, F5, step 2.1, algebra] ∎
