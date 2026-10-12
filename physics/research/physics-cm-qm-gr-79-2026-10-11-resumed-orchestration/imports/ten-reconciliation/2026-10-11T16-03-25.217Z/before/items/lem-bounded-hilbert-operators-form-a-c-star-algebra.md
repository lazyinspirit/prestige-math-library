---
id: lem-bounded-hilbert-operators-form-a-c-star-algebra
kind: lemma
title: Bounded Hilbert operators form a C star algebra
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-hilbert-adjoint-properties, thm-bounded-operator-space-is-banach, def-countable-choice, def-hilbert-space, def-banach-space, def-c-star-algebra, def-unital-banach-algebra, def-space-of-bounded-linear-operators, def-operator-norm]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, §5.3, printed pp.235–245"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem, §3, pp.6–10"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
verification:
  audited: 2026-09-22
---

## Statement

Assume Countable Choice. For every nonzero complex Hilbert space $H$, $\mathcal B(H)$, with the operator norm, composition, identity, and Hilbert adjoint, is a unital C\*-algebra and $\|T^*T\|=\|T\|^2$.

## Facts & Assumptions

[A1] A Hilbert space is an inner-product space complete for its induced norm, that is, a Banach space for that norm ([[def-hilbert-space]], [[def-banach-space]]).

[A2] $\mathcal B(X,Y)$ is the vector space of bounded linear operators with pointwise operations and the operator norm $\|T\|=\sup\{\|Tx\|:\|x\|\le1\}$, which is the least bound of $T$, so that $\|Tx\|\le\|T\|\,\|x\|$ for every $x$ ([[def-space-of-bounded-linear-operators]], [[def-operator-norm]]).

[A3] If $Y$ is a Banach space then $\mathcal B(X,Y)$ is complete for the operator norm ([[thm-bounded-operator-space-is-banach]]).

[A4] The Hilbert adjoint $T^*$ is the unique operator with $\langle Tx,y\rangle=\langle x,T^*y\rangle$; the assignment $T\mapsto T^*$ is conjugate-linear, involutive and isometric, satisfies $(ST)^*=T^*S^*$, and obeys $\|T^*T\|=\|T\|^2$ ([[thm-hilbert-adjoint-properties]]).

[A5] A unital complex Banach algebra is a nonzero complex Banach algebra with submultiplicative norm and a unit of norm one; a complex C\*-algebra is a complex Banach algebra carrying a conjugate-linear involution with $(a^*)^*=a$, $(ab)^*=b^*a^*$ and $\|a^*a\|=\|a\|^2$ ([[def-unital-banach-algebra]], [[def-c-star-algebra]]).

[A6] Countable Choice is the hypothesis under which the Hilbert-adjoint and completeness suppliers below are stated ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

**Given:** A nonzero complex Hilbert space $H$ and operators $S,T\in\mathcal B(H)$.

1.1 Composition in $\mathcal B(H)$ is bilinear and associative, and the operator norm is submultiplicative: $\|ST\|\le\|S\|\,\|T\|$. [A2, algebra]

1.2 The identity operator $I$ lies in $\mathcal B(H)$ and satisfies $IT=TI=T$, and $\|I\|=1$: since $H\ne\{0\}$ every nonzero $x$ has $\|x/\|x\|\|=1$, so the unit-ball supremum defining $\|I\|$ equals $1$. Thus $\mathcal B(H)$ is a nonzero algebra whose unit $I$ has norm one. [A2, algebra]

1.3 The Hilbert adjoint is a map $\mathcal B(H)\to\mathcal B(H)$ which is conjugate-linear, involutive and isometric, satisfies $(ST)^*=T^*S^*$, and satisfies $\|T^*T\|=\|T\|^2$ for every $T$. [A4, A6]

2.1 The space $H$ is Banach for its norm by [A1], so $\mathcal B(H)$ is complete for the operator norm by [A3]; together with the submultiplicativity, the identity of norm one and the nonvanishing just recorded, this makes $\mathcal B(H)$ a unital complex Banach algebra in the sense of [A5]. [step 1.1, step 1.2, A1, A3, A5]

3.1 The space $\mathcal B(H)$, with the operator norm, composition, the identity and the Hilbert adjoint, fulfils every axiom of a unital complex C\*-algebra listed in [A5], and the identity $\|T^*T\|=\|T\|^2$ holds. [step 2.1, step 1.3, A5] ∎
