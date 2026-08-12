---
id: ex-minimal-polynomial-of-nested-radical-two-plus-root-three
kind: example
title: 'The minimal polynomial of $\sqrt{2+\sqrt3}$ over $\mathbb Q$ is $x^4-4x^2+1$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-evaluation-kernel-and-minimal-polynomial, thm-simple-algebraic-extension-quotient-power-basis-and-degree, thm-eisenstein-irreducibility-criterion, thm-universal-property-of-a-polynomial-ring, thm-of-square-roots]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
pipeline_run: frontier-11
---

## Example

Let $a=\sqrt{2+\sqrt3}$, with the nonnegative real square roots supplied by
[[thm-of-square-roots]]. Its minimal polynomial over $\mathbb Q$ is
$$p(x)=x^4-4x^2+1,$$
so $[\mathbb Q(a):\mathbb Q]=4$.

## Facts & Assumptions

**Given:** The real number $a=\sqrt{2+\sqrt3}$.

[F1] Eisenstein's criterion proves irreducibility over $\mathbb Q$ under its prime divisibility hypotheses ([[thm-eisenstein-irreducibility-criterion]]).

[F2] The polynomial-ring universal property gives substitution homomorphisms such as $f(x)\mapsto f(x+1)$ ([[thm-universal-property-of-a-polynomial-ring]]).

[F3] The minimal polynomial is the monic irreducible polynomial generating the evaluation kernel ([[thm-evaluation-kernel-and-minimal-polynomial]]).

[F4] Its degree equals the degree of the associated simple extension ([[thm-simple-algebraic-extension-quotient-power-basis-and-degree]]).

## Verification

**Proof technique:** direct.

1.1 From $a^2=2+\sqrt3$ one obtains $(a^2-2)^2=3$, hence $p(a)=a^4-4a^2+1=0$. [algebra]

1.2 Substitution from [F2] gives $p(x+1)=x^4+4x^3+2x^2-4x-2$, which satisfies [F1] at $2$ and is therefore irreducible. [F1, F2, algebra]

2.1 Substitution by $x-1$ is inverse to substitution by $x+1$, so a factorization of $p$ would produce one of $p(x+1)$. Thus $p$ is irreducible. [F2, step 1.2, algebra]

3.1 Since $p$ is monic, irreducible, and annihilates $a$, [F3] identifies it as the minimal polynomial; [F4] gives degree $4$. [F3, F4, step 1.1, step 2.1] ∎
