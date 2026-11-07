---
id: ex-michel-venkatesh-fixed-second-factor-family
kind: example
title: "A GL2 Family with Fixed Second Rankin–Selberg Factor"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 8
deps:
  - def-general-gl2-rankin-selberg-l-function
  - def-analytic-conductor-of-a-gl2-automorphic-representation
  - def-analytic-conductor-of-a-gl2-rankin-selberg-pair
  - thm-michel-venkatesh-subconvexity-for-gl2-rankin-selberg
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
sources:
  references:
    - title: "Philippe Michel and Akshay Venkatesh, The Subconvexity Problem for GL2, arXiv:0903.3591v2"
      url: "https://arxiv.org/pdf/0903.3591v2"
      locator: "§1.1, Theorem 1.2; §5.2, proof for a fixed second factor."
    - title: "Akshay Venkatesh, Sparse Equidistribution Problems, Period Bounds and Subconvexity"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v172-n2-p05-p.pdf"
      locator: "§§4–5, level-aspect triple-product and Rankin–Selberg comparison only."
    - title: "James W. Cogdell, L-functions and Converse Theorems for GL(n), PCMI lecture notes (2003)"
      url: "https://people.math.osu.edu/cogdell.1/pcmi-www.pdf"
      locator: "Lecture 2, §2.3; Lecture 3, §§3.1–3.2; Lecture 4, §4.1, cuspidal setting."
forward_refs: []
---

## Example

Let $F$ be a number field and fix an automorphic representation $\pi_2$ of $\mathrm{GL}_2(\mathbb A_F)$ in the generic standard cuspidal-or-unitary-Eisenstein class of the pair subconvexity theorem, with unitary central character. Let $\mathcal F$ be any family of automorphic representations $\pi_1$ of $\mathrm{GL}_2(\mathbb A_F)$ in that same generic standard class, with unitary central characters. For each $\pi_1\in\mathcal F$, Theorem 1.2 gives
$$|L(1/2,\pi_1\times\pi_2)|\ll_{F,\pi_2}C(\pi_1\times\pi_2)^{1/4-\delta},$$
and more precisely
$$|L(1/2,\pi_1\times\pi_2)|\ll_{F,\pi_2}C(\pi_1)^{1/2-2\delta},$$
with the same absolute $\delta>0$ for the whole family. The two displayed bounds are the product-conductor form and the refined fixed-$\pi_2$ form of the theorem, respectively.

## Example references

[[def-general-gl2-rankin-selberg-l-function|the finite Rankin–Selberg L-function convention]]

[[def-analytic-conductor-of-a-gl2-automorphic-representation|the conductor of the varying GL2 factor]]

[[def-analytic-conductor-of-a-gl2-rankin-selberg-pair|the conductor of the pair]]

[[thm-michel-venkatesh-subconvexity-for-gl2-rankin-selberg|Michel–Venkatesh Theorem 1.2]]

[Michel and Venkatesh, *The Subconvexity Problem for GL2*, Theorem 1.2](https://arxiv.org/pdf/0903.3591v2)

[Venkatesh, *Sparse Equidistribution Problems, Period Bounds and Subconvexity*, level-aspect comparison](https://annals.math.princeton.edu/wp-content/uploads/annals-v172-n2-p05-p.pdf)

[Cogdell, *L-functions and Converse Theorems for GL(n)*, cuspidal Rankin–Selberg background](https://people.math.osu.edu/cogdell.1/pcmi-www.pdf)

## Facts & Assumptions

**Given:** A number field $F$, a fixed automorphic representation $\pi_2$ of $\mathrm{GL}_2(\mathbb A_F)$ with unitary central character, and a family $\mathcal F$ of GL2 automorphic representations with unitary central characters.

[F1] [[thm-michel-venkatesh-subconvexity-for-gl2-rankin-selberg]]: for fixed $F$ and $\pi_2$, Theorem 1.2 gives the stated bounds with an absolute saving $\delta>0$.

[F2] [[def-general-gl2-rankin-selberg-l-function]] and [[def-analytic-conductor-of-a-gl2-rankin-selberg-pair]]: the pair L-function is the finite Euler product of the tensor local factors, and its conductor uses the degree-four tensor parameter.

[F3] [[def-analytic-conductor-of-a-gl2-automorphic-representation]]: $C(\pi_1)$ is the GL2 analytic conductor defined from its finite local Artin conductors and archimedean gamma shifts.

## Verification

**Given:** The Example data.

1.1 For every $\pi_1\in\mathcal F$, the number field is the same $F$, the second representation is the fixed $\pi_2$, both representations are in the stated generic standard class, and both central characters are unitary. Thus every pair in the family satisfies the hypotheses of [F1]. [given, F1]

2.1 Applying [F1] to each pair gives both displayed conductor bounds with the same absolute $\delta$. Since $C(\pi_1\times\pi_2)$ is the tensor-product conductor from [F2] and $C(\pi_1)$ is the individual GL2 conductor from [F3], the first bound is subconvex in the pair conductor and the second is the source's refined fixed-second-factor form. [F1, F2, F3, step 1.1, algebra] ∎
