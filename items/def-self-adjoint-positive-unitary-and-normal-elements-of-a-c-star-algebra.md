---
id: def-self-adjoint-positive-unitary-and-normal-elements-of-a-c-star-algebra
kind: definition
title: Self-adjoint positive unitary and normal elements
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-c-star-algebra, def-unital-banach-algebra]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras, v2 — Definition 3.1.27 and Remark 3.1.28, printed pp. 63–64"
      url: "https://arxiv.org/pdf/1211.3404"
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem — §4 and Theorem 4.5, printed pp. 9–11"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
---

## Definition

Let $A$ be a complex C\*-algebra ([[def-c-star-algebra]]) and let $a \in A$.

- $a$ is **self-adjoint** when $a^* = a$;
- $a$ is **normal** when $a^*a = aa^*$;
- $a$ is **positive** when $a = b^*b$ for some $b \in A$. (At this stage
  positivity is a purely algebraic condition; its pointwise description as
  nonnegativity of the transformed function is proved later, from
  [[thm-nonunital-commutative-gelfand-naimark]].)

If in addition $A$ is unital, with unit $1$
([[def-unital-banach-algebra]]), then:

- $a$ is **unitary** when $a^*a = aa^* = 1$.

No unitary notion is claimed here for a genuinely nonunital C\*-algebra, where
the equation $u^*u = uu^* = 1$ has no solution since a noninvertible element
cannot satisfy it and a left identity in a C\*-algebra is an identity, forcing
unitality.

## Remarks

- **Self-adjoint elements are normal**, since $a^*a = aa = a^2 = aa^*$ when $a^* = a$; and $b^*b$ is self-adjoint for every $b$, because $(b^*b)^* = b^*b$.
- **The real and imaginary parts.** Every $a$ can be written $a = s + it$ with $s := \frac12(a+a^*)$ and $t := \frac{1}{2i}(a-a^*)$ self-adjoint; both identities are algebraic, and they are the decomposition used in [[lem-characters-on-a-commutative-c-star-algebra-preserve-star]].
- **Positivity is preserved by star-homomorphisms**, since $\varphi(b^*b) = \varphi(b)^*\varphi(b)$; no positivity notion outside the given algebra is imported.
