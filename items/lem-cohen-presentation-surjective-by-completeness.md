---
id: lem-cohen-presentation-surjective-by-completeness
kind: lemma
title: "The Cohen map is surjective by completeness"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-formal-power-series-evaluation-converges, lem-cohen-presentation-surjective-mod-maximal-square]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Melvin Hochster, The structure theory of complete local rings"
      url: "https://sites.lsa.umich.edu/hochster/wp-content/uploads/sites/1337/2026/04/Structure.pdf"
    - title: "The Stacks Project, Section 10.160: The Cohen structure theorem"
      url: "https://stacks.math.columbia.edu/tag/0323"
pipeline_run: null
---

## Statement

Let $(A,\mathfrak m)$ be a complete equicharacteristic Noetherian local ring,
let $k \subseteq A$ be a coefficient field, let
$x_1,\ldots,x_e \in \mathfrak m$ lift a $k$-basis of
$\mathfrak m/\mathfrak m^2$, and let
$$\phi:k\llbracket X_1,\ldots,X_e\rrbracket \to A$$
be the continuous $k$-algebra homomorphism with $\phi(X_i)=x_i$. Then $\phi$ is
surjective.

## Facts & Assumptions

**Given:** A complete equicharacteristic Noetherian local ring $(A,\mathfrak m)$, a coefficient field $k \subseteq A$, lifts $x_1,\ldots,x_e \in \mathfrak m$ of a $k$-basis of $\mathfrak m/\mathfrak m^2$, and the resulting continuous $k$-algebra map $\phi$.

[L1] Degreewise formal-series substitution converges in a complete local ring ([[lem-formal-power-series-evaluation-converges]]).

[L2] For every $n\ge1$, each class in $\mathfrak m^n/\mathfrak m^{n+1}$ has a homogeneous degree-$n$ polynomial preimage under the Cohen map ([[lem-cohen-presentation-surjective-mod-maximal-square]]).

## Proof

**Proof technique:** build a compatible inverse system of polynomial approximations.

1.1 Let $a \in A$. Because $k \to A/\mathfrak m$ is an isomorphism, choose $F_0 \in k$ with $\phi(F_0) \equiv a \pmod{\mathfrak m}$. Inductively, if $F_{n-1}$ is chosen with $\phi(F_{n-1}) \equiv a \pmod{\mathfrak m^n}$, then [L2] applied to the error class in $\mathfrak m^n/\mathfrak m^{n+1}$ gives a homogeneous polynomial correction $H_n$ of degree $n$ such that $$\phi(F_n) \equiv a \pmod{\mathfrak m^{n+1}}, \qquad F_n:=F_{n-1}+H_n.$$ [L2, given, choose, induction]

2.1 The formal sum $F=\sum_{n \ge 0} H_n$ defines an element of $k\llbracket X_1,\ldots,X_e\rrbracket$. By [L1], the series $\phi(F)=\sum_{n \ge 0} \phi(H_n)$ converges in $A$, and step 1.1 says its partial sums are congruent to $a$ modulo arbitrarily high powers of $\mathfrak m$. Since $A$ is separated, the limit must equal $a$. [L1, step 1.1, algebra]

3.1 Therefore every $a \in A$ lies in the image of $\phi$, so $\phi$ is surjective. [step 2.1] ∎
