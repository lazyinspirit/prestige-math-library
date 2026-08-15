---
id: cex-cube-root-of-two-is-not-algebraically-constructible
kind: counterexample
title: "The real cube root of two is algebraic but not algebraically constructible"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-algebraically-constructible-numbers-have-power-of-two-degree, thm-eisenstein-irreducibility-criterion, thm-simple-algebraic-extension-quotient-power-basis-and-degree, thm-nth-roots-exist]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. W. Knapp, Basic Algebra, 2nd ed., Chapter IX, Section 5"
      url: "https://www.math.stonybrook.edu/~aknapp/download/b2-alg-inside.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, consequence 1.41"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
pipeline_run: null
---

## Statement refuted

Every real algebraic number is algebraically constructible.

## Facts & Assumptions

**Given:** The unique positive real number $a=\sqrt[3]{2}$.

[L1] A constructible real algebraic number has degree over $\mathbb Q$ equal to a power of $2$ ([[cor-algebraically-constructible-numbers-have-power-of-two-degree]]).

[L2] Eisenstein's criterion proves a primitive integer polynomial irreducible when one prime divides every nonleading coefficient, its square does not divide the constant coefficient, and it does not divide the leading coefficient ([[thm-eisenstein-irreducibility-criterion]]).

[L3] The degree of a simple algebraic extension equals the degree of the element's minimal polynomial ([[thm-simple-algebraic-extension-quotient-power-basis-and-degree]]).

[L4] Every nonnegative real has a unique nonnegative $n$-th root for $n\ge1$ ([[thm-nth-roots-exist]]).

## Counterexample

**Proof technique:** contradiction.

1.1 By [L4], the real number $a$ exists and satisfies $a^3=2$, so it is algebraic over $\mathbb Q$. [given, L4]

2.1 The polynomial $t^3-2$ is Eisenstein at $2$, so [L2] makes it irreducible over $\mathbb Q$. Hence [L3] gives $[\mathbb Q(a):\mathbb Q]=3$. [step 1.1, L2, L3]

3.1 Suppose, for contradiction, that $a$ is algebraically constructible. Then [L1] makes its degree a power of $2$, contrary to step 2.1 because $3$ is odd and greater than $1$. [step 2.1, L1, assume-contra]

4.1 Therefore $a$ is algebraic but not algebraically constructible, refuting the universal statement. [step 3.1, discharge-contradiction] ∎
