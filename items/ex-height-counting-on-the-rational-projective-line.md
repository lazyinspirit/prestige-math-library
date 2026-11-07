---
id: ex-height-counting-on-the-rational-projective-line
kind: example
title: The absolute-height count on the rational projective line
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - def-axiom-of-choice
  - def-number-field
  - def-ring-of-integers-of-a-number-field
  - cor-rational-algebraic-integers-are-integers
  - def-generated-and-principal-ideals
  - def-absolute-norm-of-an-ideal
  - thm-bezout-identity
  - def-absolute-multiplicative-weil-height-on-projective-space-over-a-number-field
  - cor-rational-projective-space-height-count
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Stephen H. Schanuel, Heights in number fields, Bulletin de la Société Mathématique de France 107 (1979), Theorem 3 and proof, printed pp. 445–447"
      url: "https://www.numdam.org/item/BSMF_1979__107__433_0.pdf"
    - title: "Joseph H. Silverman, An Introduction to Height Functions, expanded version of lectures presented at MSRI, January 2006"
      url: "https://legacy.slmath.org/attachments/workshops/301/HtSurveyMSRIJan06.pdf"
      locator: "Full 69-page PDF; projective height definitions, printed pp. 2–3; rational projective-line count, p. 5; Schanuel theorem and constant, p. 6."
verification: {}
proof_strategy: direct
---

## Example

Assume the Axiom of Choice. For a rational point $[a:b]\in\mathbb P^1(\mathbb Q)$, choose coprime integers $a,b$ that are not both zero. Its absolute multiplicative Weil height is $H([a:b])=\max(|a|,|b|)$, independent of the choice of the simultaneous sign. Let $N_1(T)$ count such projective points with $H([a:b])\le T$. Then, as $T\to\infty$,
$$N_1(T)=\frac{2}{\zeta(2)}T^2+O(T\log T),$$
where $\zeta(2)=\sum_{n=1}^{\infty}n^{-2}$.

## Example references

[[def-absolute-multiplicative-weil-height-on-projective-space-over-a-number-field]]

[[def-axiom-of-choice]]

[[def-ring-of-integers-of-a-number-field]]

[[def-generated-and-principal-ideals]]

[[def-absolute-norm-of-an-ideal]]

[[cor-rational-projective-space-height-count]]

[[def-riemann-zeta-function]]

## Facts & Assumptions

**Given:** The Axiom of Choice, a rational projective point $[a:b]$ with coprime integer coordinates not both zero, and a real threshold $T\ge1$.

[A1] The absolute-height definition uses the Axiom of Choice. ([[def-axiom-of-choice]])

[F1] The rational field has ring of integers $\mathbb Z$; the height formula is the inverse norm of the coordinate ideal times the maximum over the archimedean coordinates, and the absolute height is the relative height to power $1/[K:\mathbb Q]$. ([[def-number-field]], [[def-ring-of-integers-of-a-number-field]], [[cor-rational-algebraic-integers-are-integers]], [[def-absolute-multiplicative-weil-height-on-projective-space-over-a-number-field]], [[def-generated-and-principal-ideals]], [[def-absolute-norm-of-an-ideal]])

[F2] The rational-field count on $\mathbb P^1$ is $N_1(T)=2T^2/\zeta(2)+O(T\log T)$. ([[cor-rational-projective-space-height-count]])

[F3] If two integers are coprime, there are integer coefficients whose linear combination is $1$. ([[thm-bezout-identity]])

## Verification

1.1 Every rational point of $\mathbb P^1$ can be represented by a nonzero integer pair after clearing denominators; dividing by the positive greatest common divisor makes the pair coprime. If all coordinates are nonzero and $(c,d)=r(a,b)$ for two coprime pairs with $r=p/q$ in lowest terms, then $q$ divides both $a,b$ and $p$ divides both $c,d$, so $q=1$ and $|p|=1$. If one coordinate is zero, coprimality forces the other to be $1$ or $-1$, giving the same conclusion. Thus each point has exactly the two primitive representatives $(a,b)$ and $(-a,-b)$. [given, construct, algebra]

2.1 Since $a,b$ are coprime, [F3] gives integers $u,v$ with $ua+vb=1$, so the coordinate ideal $(a,b)$ in $\mathbb Z$ is $\mathbb Z$ and has norm $1$. The unique archimedean factor is $\max(|a|,|b|)$, and $[\mathbb Q:\mathbb Q]=1$; [F1] therefore gives $H([a:b])=\max(|a|,|b|)$. Thus the height condition in the Example is exactly the rational projective-line count in [F2], proving the formula. [F1, F2, F3, step 1.1, algebra] ∎
