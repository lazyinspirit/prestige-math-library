---
id: lem-semilocal-artin-good-neighborhood-tower
kind: lemma
title: "Semilocal Artin good-neighborhood towers"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - lem-pointed-smooth-affine-elementary-curve-fibration
justified_by: []
proof_strategy: induction
axiom_use: "AC/DC are inherited from the elementary-fibration supplier."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "SGA 4, Exposé XI, section 3, Proposition 3.3"
      url: "https://grothendiecksga.com/read/sga4/en/XI-3.html"
      locator: "Proposition 3.3 and its semilocal footnote; the finite-marked induction is reconstructed below."
verification: {}
---

## Statement

Assume AC and DC. Let $k$ be an algebraically closed field, let $X$ be a smooth integral affine $k$-scheme of finite dimension $n$, and let $F\subset X(k)$ be finite and nonempty. There is an open neighborhood $U\subset X$ of $F$ and a tower
$$U=X_n\longrightarrow X_{n-1}\longrightarrow\cdots\longrightarrow X_0=\operatorname{Spec}k$$
such that each $X_i\to X_{i-1}$ is the complement of a finite étale surjective boundary in a smooth projective relative curve with geometrically connected nonempty fibres. For $n=0$ the tower is the identity. This geometric result does not assert cohomological finite-cover effacement.

## Facts & Assumptions

**Given:** The algebraically closed field, smooth integral affine scheme and finite nonempty set in the Statement.

[A1] AC and DC are assumed. [[def-axiom-of-choice]] [[def-dependent-choice]]

[F1] A finite marked set in a smooth integral affine variety of positive dimension has an elementary curve fibration over a smooth affine base of one lower dimension. [[lem-pointed-smooth-affine-elementary-curve-fibration]]

## Proof

**Proof technique:** induction on dimension, retaining the finite marked set at every stage.

1.1 Base case: if $n=0$, the integral finite-type $k$-scheme $X$ is the spectrum of a finite extension of $k$, hence $X=\operatorname{Spec}k$ because $k$ is algebraically closed. Take the identity tower. [given, base, algebra]

1.2 Induction hypothesis: let $n\geq1$ and suppose the assertion proved in dimension $n-1$. By [F1], there is an elementary curve fibration $p:U_1\to S$ with $U_1\subset X$ open and containing $F$, and $S$ smooth affine of dimension $n-1$. The open $U_1$ is integral and hence connected. The morphism $p$ is surjective because every connected projective curve fibre has a nonempty open complement of the finite boundary; therefore its base $S$ is connected. A smooth connected scheme over a field is regular and has disjoint irreducible components, so $S$ is integral. The image $p(F)$ is a finite nonempty set of $k$-points. [A1, F1, ih, given, algebra]

2.1 Apply the induction hypothesis to $S$ and $p(F)$. It gives an open $V\subset S$ containing $p(F)$ and a tower of length $n-1$ from $V$ to $\operatorname{Spec}k$. Set $U=p^{-1}(V)$, an open neighborhood of $F$ in $X$. Restricting the smooth projective compactification and its finite étale surjective boundary to $V$ gives an elementary curve fibration $U\to V$: smoothness, projectivity, geometric connectedness and finite étale surjectivity are stable under base change. Prepending it to the tower of $V$ proves the claim in dimension $n$ and completes the induction. [A1, step 1.2, discharge-induction, construct, algebra] ∎
