---
id: cex-nonclosed-scheme-point-no-k-valued-coordinate
kind: counterexample
title: "The generic point of the affine line has no relative k-valued coordinate"
status: published
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-residue-field-scheme-point, def-generic-point-irreducible-closed-subset, def-polynomial-ring-over-a-commutative-ring, thm-field-of-fractions-is-a-field-and-the-domain-embeds, def-algebra-over-a-commutative-ring, thm-quotient-is-domain-iff-ideal-prime]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}
sources:
  references:
    - title: "James S. Milne, Algebraic Geometry, 10.83"
      url: "https://www.jmilne.org/math/CourseNotes/AG10.pdf"
---
## Statement refuted

“Every point $\mathfrak p$ of $\mathbb A^1_k$ is the kernel of a $k$-algebra
map $k[t]\to k$.”

## Facts & Assumptions

**Given:** A field $k$ and $\mathbb A^1_k=\operatorname{Spec}k[t]$.

[F1] The closure of a prime $\mathfrak p$ in a prime spectrum is
$V(\mathfrak p)$ ([[def-generic-point-irreducible-closed-subset]]).

## Counterexample

**Proof technique:** direct.

1.1 If $f,g\in k[t]$ are nonzero, the leading coefficient of $fg$ is the nonzero product of their leading coefficients; hence $k[t]$ is a domain and $(0)$ is a point of $\mathbb A^1_k$. By [F1], its closure is all of $\operatorname{Spec}k[t]$. [F1, given, algebra]

2.1 Evaluation at $0$ identifies $k[t]/(t)$ with the domain $k$, so $(t)$ is prime and strictly contains $(0)$. Thus the closure in step 1.1 is not a singleton, and $(0)$ is not closed. [[thm-quotient-is-domain-iff-ideal-prime|quotient-domain criterion]] [step 1.1, algebra]

3.1 A relative $k$-valued coordinate representing a point $\mathfrak p$ is a [F1, step 2.1, algebra]
[[def-algebra-over-a-commutative-ring|$k$-algebra]] map $k[t]\to k$ whose
kernel is $\mathfrak p$. Such a map fixes $k$, hence is surjective and has
maximal kernel. By [F1] its closure is the set of primes containing it, which
is the singleton consisting of that maximal ideal. Its kernel is therefore
closed, whereas $(0)$ is not, so the generic point $(0)$ has no relative
$k$-valued coordinate. [F1, step 2.1, algebra] ∎
 
