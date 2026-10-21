---
id: lem-kontsevich-morse-tangle-composition
kind: lemma
title: Convergence and composition of Morse tangle integrals
status: draft
origin: pipeline
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-kontsevich-integral-on-parenthesized-braids
  - lem-kontsevich-configuration-integral-convergence-needle-estimates
justified_by: []
dependency_level: 6
sources:
  references:
    - title: Introduction to Vassiliev Knot Invariants, §§8.4.1 and 8.5
      url: https://www.math.cinvestav.mx/~mostovoy/cdbook/cdbook-as-submitted.pdf
    - title: The Universal Vassiliev–Kontsevich Invariant for Framed Oriented Links, §3
      url: https://letu.math.gatech.edu/Papers/UN_PAPER.pdf

---

## Statement

Let $T_1\subset\mathbb C\times[a,c]$ and $T_2\subset\mathbb C\times[c,b]$ be compact strict Morse tangles whose boundary points and orientations match at the regular level $c$, with the joined tangle $T=T_2\circ T_1$ smooth and embedded. Their unframed configuration integrals converge absolutely degreewise and satisfy
$$
Z(T_2\circ T_1)=Z(T_2)\,Z(T_1),
$$
where multiplication stacks tangle diagrams with $T_2$ above $T_1$. The equality holds in the completed unframed tangle diagram space and uses only the finite-degree integrals defined on the matched pieces.

## Statement references

[[def-kontsevich-integral-on-parenthesized-braids|Morse tangle integral and vertical stacking convention]]

[[lem-kontsevich-configuration-integral-convergence-needle-estimates|Absolute convergence for strict Morse tangles]]

[Chmutov, Duzhin, and Mostovoy, §§8.4.1 and 8.5, printed pp. 229–232](https://www.math.cinvestav.mx/~mostovoy/cdbook/cdbook-as-submitted.pdf)

[Le and Murakami, §3, PDF pp. 4–5](https://letu.math.gatech.edu/Papers/UN_PAPER.pdf)

## Facts & Assumptions

**Given:** Matched compact strict Morse tangles $T_1,T_2$, their regular joining level $c$, and the unframed degreewise tangle integrals.

[F1] [[def-kontsevich-integral-on-parenthesized-braids]]: $Z(T)$ integrates over the ordered levels on a compact tangle skeleton, sums pairings at each level, and places the upper tangle factor to the left in the vertical-stacking product.

[F2] [[lem-kontsevich-configuration-integral-convergence-needle-estimates]]: for each fixed degree, the tangle pairing sum is an absolutely convergent improper integral in the unframed 4T+1T quotient.

## Proof

**Given:** As above. Fix a degree $m$ and work with its finitely many branch chambers and pairing types.

1.1 In the degree-$m$ ordered simplex, the set where some level $t_j=c$ has measure zero. Absolute convergence from [F2] allows removal of this set without changing the integral. The remaining domain is the disjoint union, for $k=0,\ldots,m$, of regions with exactly $k$ levels above $c$ and $m-k$ below it; each such region is the product of the corresponding ordered simplex for $T_2$ and that for $T_1$. [given, F1, F2, algebra]

2.1 On the region indexed by $k$, every selected pair at a level above $c$ lies on $T_2$, and every pair below $c$ lies on $T_1$. Thus a pairing on the composite decomposes uniquely into a pairing on each piece. The product differential form separates into the upper and lower factors in height order, and the resulting chord diagram is their vertical stack. [F1, step 1.1, construct, algebra]

3.1 Fubini's theorem applies to each product region because both factors are absolutely integrable by [F2]. Therefore its integral is the product of the degree-$k$ coefficient for $T_2$ and the degree-$(m-k)$ coefficient for $T_1$. Summing over the finite set $k=0,\ldots,m$ is exactly the degree-$m$ coefficient convolution of $Z(T_2)Z(T_1)$. Since $m$ was arbitrary, the displayed completed-series identity follows. [F1, F2, step 2.1, algebra] ∎
