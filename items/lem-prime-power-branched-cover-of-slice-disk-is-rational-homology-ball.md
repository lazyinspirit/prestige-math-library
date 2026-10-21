---
id: lem-prime-power-branched-cover-of-slice-disk-is-rational-homology-ball
kind: lemma
title: A prime-power branched cover of a smooth proper disk is a rational homology ball
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-q-fold-branched-cover-of-a-slice-disk
  - lem-prime-power-cyclic-cover-homology-of-slice-disk-exterior
  - thm-mayer-vietoris-sequence-in-singular-homology
  - thm-universal-coefficient-theorem-for-homology-over-a-pid
  - def-axiom-of-choice
  - lem-compact-smooth-manifolds-have-finite-cw-models-under-countable-choice
  - def-countable-choice
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
      locator: Chapter 7, §7.8, pp. 142–145, Theorem 7.8.4 and its proof; the complete section read
    - title: Patrick Aceto, Joshua Meier, Allison N. Miller, Matthew Miller, JungHwan Park, and Andras I. Stipsicz, Branched covers bounding rational homology balls
      url: https://par.nsf.gov/servlets/purl/10329610
      locator: §2, Lemma 2.4; its odd-prime special case was inspected and not used as the complete proof here
---
## Statement

Assume AC. Let $D\subset B^4$ be a smooth proper disk, let $p$ be prime, and let $q=p^k$ with $k\ge1$. The $q$-fold cyclic cover $W_{D,q}$ of $B^4$ branched along $D$ is a compact connected oriented $4$-manifold with $H_i(W_{D,q};\mathbb Q)=0$ for every $i>0$ and boundary $\Sigma_q(\partial D)$.

## Statement references

[[def-q-fold-branched-cover-of-a-slice-disk|The cyclic branched cover of the disk]]

[[lem-prime-power-cyclic-cover-homology-of-slice-disk-exterior|Homology of the prime-power exterior cover over its defining field]]

[Charles Livingston and Swatee Naik, *Introduction to Knot Concordance*, Theorem 7.8.4, pp. 142–145](https://chuck-livingston.github.io/math/Concordance_Book.pdf)

[[def-axiom-of-choice|Axiom of Choice]]

[[def-countable-choice|Countable Choice]]

## Facts & Assumptions

**Given:** Full AC, a smooth proper disk $D$, a prime $p$, and $q=p^k$ with $k\ge1$.

[A1] Full AC is assumed wherever the cover and orientation conventions use the choice axiom. [[def-axiom-of-choice]]

[F1] $W_{D,q}$ is obtained by gluing the $q$-fold exterior cover $X_{D,q}$ to $D^2\times D^2$ along $D^2\times S^1$; the overlap circle maps to the closed lift of the $q$th meridian. [[def-q-fold-branched-cover-of-a-slice-disk]]

[F2] $H_1(X_{D,q};\mathbb F_p)\cong\mathbb F_p$ and $H_i(X_{D,q};\mathbb F_p)=0$ for $i\ge2$. [[lem-prime-power-cyclic-cover-homology-of-slice-disk-exterior]]

[F3] Compact smooth manifolds have finite CW models under countable choice, so the integral homology groups of $W_{D,q}$ are finitely generated. Full AC supplies countable choice. [[lem-compact-smooth-manifolds-have-finite-cw-models-under-countable-choice]] [[def-countable-choice]] [[def-axiom-of-choice]]

[F4] Mayer–Vietoris is exact for the collar-thickened gluing in [F1]. [[thm-mayer-vietoris-sequence-in-singular-homology]]

[F5] The homology universal coefficient sequence over $\mathbb Z$ applies with coefficients $\mathbb F_p$. [[thm-universal-coefficient-theorem-for-homology-over-a-pid]]

## Proof

1.1 The core circle of $D^2\times S^1$ is the lift of $\mu^q$. Lift that loop to the infinite cyclic cover $X_{D,\infty}$: it is a path from a point $\widetilde x$ to $t^q\widetilde x$. The connecting map of the chain sequence for the $q$-fold quotient sends its homology class to $[\widetilde x]\in H_0(X_{D,\infty};\mathbb F_p)$. By the proof of [F2], this connecting map is an isomorphism in degree one, so the overlap map $H_1(D^2\times S^1;\mathbb F_p)\to H_1(X_{D,q};\mathbb F_p)$ is an isomorphism. [F1, F2, given, construct, A1]

2.1 The filling piece $D^2\times D^2$ is contractible and the overlap has homology only in degrees zero and one. The Mayer–Vietoris sequence [F4], using the isomorphism from step 1.1, gives $H_i(W_{D,q};\mathbb F_p)=0$ for every $i>0$. The two glued pieces and their overlap are connected, so $W_{D,q}$ is connected; orientation is inherited from the cyclic branched covering map away from the branch set and extends over the local model. [F1, F2, F4, step 1.1, algebra]

3.1 By [F3], each integral homology group $H_i(W_{D,q};\mathbb Z)$ is finitely generated. The injection $H_i(W_{D,q};\mathbb Z)\otimes\mathbb F_p\hookrightarrow H_i(W_{D,q};\mathbb F_p)$ from [F5] makes that tensor product zero for $i>0$. A finitely generated abelian group with zero tensor product with $\mathbb F_p$ has rank zero; hence $H_i(W_{D,q};\mathbb Q)=0$. Its boundary is $\Sigma_q(\partial D)$ by [F1], proving the statement. [F1, F3, F5, step 2.1, algebra, A1] ∎
