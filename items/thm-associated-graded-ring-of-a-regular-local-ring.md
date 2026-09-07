---
id: "thm-associated-graded-ring-of-a-regular-local-ring"
kind: "theorem"
title: "associated graded ring of a regular local ring"
deps: ["lem-associated-graded-polynomial-surjection", "lem-regular-local-graded-surjection-has-zero-kernel", "thm-hilbert-samuel-dimension-theorem"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Proposition 25.6, p.67"
      url: "https://www.math.columbia.edu/~wenqili/commalg_notes.pdf"
provenance:
  statement: literature-derived
  proof: ai-altered
status: "draft"
origin: "pipeline"
proof_strategy: "Explicit algebraic derivation"
---

## Statement

If $(R,\mathfrak m,k)$ is regular local of dimension $d$, any cotangent basis induces a graded isomorphism $k[X_1,\ldots,X_d]\cong\operatorname{gr}_{\mathfrak m}R$. Conversely, if the associated graded ring of a nonzero Noetherian local ring is isomorphic as a graded $k$-algebra to $k[X_1,\ldots,X_d]$ with standard grading, then $R$ is regular of dimension $d$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement. We work with the Axiom of Choice; cited dependent-choice and resolution-existence hypotheses are retained.

[F1] [[lem-associated-graded-polynomial-surjection]]: Let $(R,\mathfrak m,k)$ be nonzero Noetherian local and let $x_1,\ldots,x_e$ lift a basis of $\mathfrak m/\mathfrak m^2$. There is a surjective graded $k$-algebra map $\phi:k[X_1,\ldots,X_e]\to\operatorname{gr}_{\mathfrak m}R$, determined by $X_i\mapsto x_i+\mathfrak m^2$, with every variable of degree one.

[F2] [[lem-regular-local-graded-surjection-has-zero-kernel]]: For the graded map $\phi:k[X_1,\ldots,X_e]\twoheadrightarrow\operatorname{gr}_{\mathfrak m}R$ defined by a cotangent basis in a nonzero Noetherian local ring, if $e=\dim R$, then $\ker\phi=0$.

[F3] [[thm-hilbert-samuel-dimension-theorem]]: Assume the Axiom of Choice. Let $(R,\mathfrak m)$ be a Noetherian local ring, let $M\neq0$ be a finite $R$-module, and let $I$ be an ideal of definition for $M$. Then the Hilbert-Samuel polynomial $P_{I,M}$ has degree $$ \deg P_{I,M}=\dim \operatorname{Supp}(M). $$

## Proof

1.1 In a regular local ring the cotangent dimension equals $d$. The polynomial map is surjective and has zero kernel, hence is the claimed isomorphism. [F1, F2]

2.1 Conversely, the degree-one component of a supplied graded isomorphism has dimension $d$, so $\operatorname{edim}R=d$. Its cumulative graded dimensions are $\binom{n+d}{d}$, also when $d=0$, where the count is one. These are the lengths of $R/\mathfrak m^{n+1}$. The Hilbert–Samuel dimension theorem gives $\dim R=d$, proving regularity. [F3, given, algebra] ∎
