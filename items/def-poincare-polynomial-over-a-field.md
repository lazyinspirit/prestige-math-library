---
id: def-poincare-polynomial-over-a-field
kind: definition
title: "Poincare polynomial of a space and of a pair over a field"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-field, def-singular-chain-complex-and-singular-homology, def-relative-singular-homology, def-dimension, def-smooth-manifold, def-compact-space, def-countable-choice, thm-adapted-excellent-morse-functions-exist-on-compact-cobordisms]
justified_by: [thm-morse-polynomial-identity]
aliases: []
landmark: false
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "Liviu Nicolaescu, An Invitation to Morse Theory (2nd ed.), Chapter 2 Section 2.3, printed pp. 46-53 (PDF pp. 56-63)"
      url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology, Part I Chapter 4 Section 4.4, printed pp. 88-91 (PDF pp. 98-100)"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
dependency_level: 0
---

## Definition

Let $F$ be a field ([[def-field]]) and let $(X,A)$ be a pair of spaces whose
relative singular homology $H_k(X,A;F)$
([[def-singular-chain-complex-and-singular-homology]],
[[def-relative-singular-homology]]) is finite-dimensional over $F$
([[def-dimension]]) for every $k$ and vanishes for all sufficiently large $k$.
Write
$$b_k(X,A;F):=\dim_F H_k(X,A;F)$$
and define the **relative Poincare polynomial over $F$** by
$$P_{X,A}(t):=\sum_k b_k(X,A;F)\,t^k\in\mathbb Z[t].$$
When $A=\varnothing$, so that $H_k(X,\varnothing;F)=H_k(X;F)$, the polynomial
$P_X(t):=P_{X,\varnothing}(t)=\sum_k b_k(X;F)\,t^k$ is the **Poincare polynomial
of $X$ over $F$**.

Under $\mathrm{AC}_\omega$ ([[def-countable-choice]]), for a closed smooth $n$-manifold the hypotheses hold: all $b_k$ are finite and
vanish for $k>n$. The coefficients are the **$F$-Betti numbers** and generally
depend on $F$ when $H_*(X;\mathbb Z)$ has torsion.

## Remarks

- **Well-definedness.** Each coefficient $b_k(X,A;F)$ is the dimension of a
  finite-dimensional $F$-vector space, an invariant of that space independent of
  bases ([[def-dimension]]); the sum is finite by the vanishing hypothesis.
- **The finiteness claim for closed manifolds.** Under $\mathrm{AC}_\omega$, an excellent Morse function exists by [[thm-adapted-excellent-morse-functions-exist-on-compact-cobordisms]] applied to the empty-face triad. Finiteness is then proved on this page by the
  handle chain complex of a Morse function: the
  sublevel filtration supplies a finite-dimensional homology computation, and
  an index-ordered handle presentation supplies a finite CW model homotopy equivalent to $M$, so $H_k(M;F)$ is finite-dimensional for every $k$ and vanishes
  for $k>\dim M$. The definition itself is conditional on the stated
  hypotheses, so no circularity arises.
- **The empty case.** If $X=\varnothing$ then $H_k(\varnothing;F)=0$ for all
  $k$ and $P_\varnothing(t)=0$; if $A=X$ then all relative homology vanishes and
  $P_{X,X}(t)=0$. Both are consistent with the sum over an empty family of
  nonzero terms.
