---
id: cor-hodge-star-is-an-isometry-and-squares-to-a-sign
kind: corollary
title: "The Hodge star is an isometry and satisfies $\\star^2=(-1)^{k(n-k)}$ on $\\Lambda^kV$"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-hodge-star-exists-uniquely-and-has-the-orthonormal-basis-formula]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Reyer Sjamaar, Manifolds and Differential Forms, §2.4"
      url: "https://pi.math.cornell.edu/~sjamaar/manifolds/manifold.pdf"
---

## Statement

On $\Lambda^kV$ of an oriented $n$-dimensional real inner product space, the Hodge star preserves the Gram pairing,

$$\langle\star\alpha,\star\beta\rangle=\langle\alpha,\beta\rangle,$$

and satisfies

$$\star\circ\star=(-1)^{k(n-k)}\operatorname{id}_{\Lambda^kV}.$$

## Facts & Assumptions

**Given:** An oriented $n$-dimensional real inner product space $V$, a degree $k$, and a positively oriented orthonormal basis $(e_1,\ldots,e_n)$.

[L1] In a positively oriented orthonormal basis, $\star e_I=\varepsilon_I e_{I^c}$, where $\varepsilon_I$ is the sign of the permutation listing $I$ followed by its complement ([[thm-hodge-star-exists-uniquely-and-has-the-orthonormal-basis-formula]]).

## Proof

**Proof technique:** direct.


1.1 By [L1], $\star$ sends the orthonormal wedge basis $(e_I)_I$ to the family $(\varepsilon_I e_{I^c})_I$, which is the complementary orthonormal wedge basis with signs attached; hence $\langle\star e_I,\star e_J\rangle=\delta_{I,J}=\langle e_I,e_J\rangle$, and bilinearity gives the isometry on all of $\Lambda^kV$. [L1, algebra]

1.2 For each $I$, apply [L1] twice: $\star(\star e_I)=\varepsilon_I\,\star e_{I^c}=\varepsilon_I\varepsilon_{I^c}e_I$, where $\varepsilon_{I^c}$ is the sign of the permutation listing $I^c$ followed by $I$. The two permutations differ by interchanging a block of size $k$ with a block of size $n-k$, whose sign is $(-1)^{k(n-k)}$, so $\varepsilon_{I^c}=(-1)^{k(n-k)}\varepsilon_I$ and $\star^2e_I=(-1)^{k(n-k)}e_I$. [L1, algebra]

2.1 Since the $e_I$ form a basis, step 1.2 gives $\star\circ\star=(-1)^{k(n-k)}\operatorname{id}$ on $\Lambda^kV$. [step 1.2] ∎
