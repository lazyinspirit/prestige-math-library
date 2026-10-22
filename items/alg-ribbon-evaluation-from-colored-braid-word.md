---
id: alg-ribbon-evaluation-from-colored-braid-word
kind: algorithm
title: "Ribbon evaluation from a colored braid word"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-the-categorical-trace-of-a-morphism-into-the-double-dual
  - thm-a-braided-rigid-category-has-a-drinfeld-morphism
  - def-twist-and-ribbon-structure
  - def-left-dual-and-right-dual-object
  - def-braid-group-by-the-artin-presentation
  - def-symmetric-group
justified_by:
  - thm-ribbon-evaluation-from-colored-braid-word-procedure-properties
proof_strategy: not-applicable
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "V. G. Turaev, Quantum Invariants of Knots and 3-Manifolds, Chapter I, Theorem 2.5 and §§3–4"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/turaev5.pdf"
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, §§8.9–8.10"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Definition

An **effective field** is a field whose elements have finite encodings and whose exact addition, subtraction, multiplication, equality test, and inversion of nonzero elements are terminating procedures. Input a finite-dimensional strict matrix realization over an effective field $k$ of a $k$-linear ribbon category with $\operatorname{End}(\mathbf1)=k$, finite-dimensional color objects with fixed bases, exact matrices for every braiding and inverse braiding used, the evaluation and coevaluation maps for the closure, the twist matrices, and the matrix $J_W$ of the ribbon-induced pivotal comparison $j_W=u_W\circ\theta_W:W\to W^{\vee\vee}$ for $W=V_{a_1}\otimes\cdots\otimes V_{a_n}$, where $u_W$ is the Drinfeld morphism. Also input a finite braid word $\beta$ on $n\ge1$ strands and the top color tuple $(a_1,\ldots,a_n)$. The matrices are assumed to satisfy the stated ribbon-category axioms; an implementation does not infer those axioms from arbitrary matrices.

Use the strand-position permutation homomorphism $\pi:B_n\to\operatorname{Sym}(\{1,\ldots,n\})$ given by $\pi(\sigma_i)=(i\ i+1)$. Read the braid letters in composition order, updating the current color tuple at each crossing by swapping its adjacent colors. For a positive letter $\sigma_i$, use the matrix of
$$1\otimes\cdots\otimes c_{V_{a_i},V_{a_{i+1}}}\otimes\cdots\otimes1,$$
and for a negative letter $\sigma_i^{-1}$ use $1\otimes\cdots\otimes c_{V_{a_{i+1}},V_{a_i}}^{-1}\otimes\cdots\otimes1$, whose source adjacent factors are $V_{a_i}\otimes V_{a_{i+1}}$. Here the subscripts always refer to the current tuple before the swap. Let the blackboard-framed closure join the bottom and top endpoint at each position by the identity pairing. Reject the input if the final color tuple differs from the initial tuple: the tuple records the colors at the paired endpoints, so equality is exactly the condition that the closure carries a consistent color on every component. Starting with the identity matrix, multiply the typed crossing matrices in word order to obtain $M_\beta:W\to W$, then return the finite matrix contraction
$$\operatorname{ev}_{W^\vee}\bigl((J_WM_\beta)\otimes1_{W^\vee}\bigr)\operatorname{coev}_W\in k.$$
In ordinary dual-basis coordinates this contraction is the matrix trace $\operatorname{Tr}(J_WM_\beta)$.
No algorithm is asserted for arbitrary abstract ribbon categories without effective finite matrix data.

## Definition references

[[thm-ribbon-evaluation-from-colored-braid-word-procedure-properties|Correctness and termination of this procedure]]

[[def-colored-framed-knot-evaluation-from-ribbon-category|Colored framed-link value]]

[[lem-multicolored-ribbon-coupon-evaluation|Mixed-color ribbon-tangle evaluation]]

[[def-the-categorical-trace-of-a-morphism-into-the-double-dual|Categorical trace contraction]]

[[thm-a-braided-rigid-category-has-a-drinfeld-morphism|Drinfeld morphism and its tensor relation]]

[[def-twist-and-ribbon-structure|Balancing and ribbon dual compatibility]]

[[def-left-dual-and-right-dual-object|Duality maps and snake identities]]

[[def-braid-group-by-the-artin-presentation|Artin braid words]]

[[def-symmetric-group|Permutations of the strand labels]]

[Turaev, *Quantum Invariants of Knots and 3-Manifolds*, Chapter I, Theorem 2.5 and §§3–4](https://www.maths.ed.ac.uk/~v1ranick/papers/turaev5.pdf)

[Etingof, Gelaki, Nikshych, and Ostrik, *Tensor Categories*, §§8.9–8.10](https://math.mit.edu/~etingof/egnobookfinal.pdf)

## Facts & Assumptions

**Given:** The effective field, valid finite-dimensional matrix ribbon data, the braid word, and its top color tuple.

[F1] For $f:W\to W^{\vee\vee}$, the left categorical trace is the composite $\operatorname{ev}_{W^\vee}(f\otimes1_{W^\vee})\operatorname{coev}_W$ ([[def-the-categorical-trace-of-a-morphism-into-the-double-dual]]).

[F2] The Drinfeld morphism $u_W:W\to W^{\vee\vee}$ is a natural isomorphism defined by the displayed evaluation/braiding/coevaluation composite, and satisfies $d_{Y,Z}(u_Y\otimes u_Z)=u_{Y\otimes Z}c_{Z,Y}c_{Y,Z}$ ([[thm-a-braided-rigid-category-has-a-drinfeld-morphism]]).

[F3] For current adjacent colors $A,B$, the supplied positive crossing is $c_{A,B}:A\otimes B\to B\otimes A$ and the negative crossing is $c_{B,A}^{-1}:A\otimes B\to B\otimes A$. The matrices satisfy the ribbon-category axioms by the input condition.

[F4] For $n\ge2$, $B_n$ is generated by $\sigma_1,\ldots,\sigma_{n-1}$ with the Artin braid and distant-commutativity relations, and $B_1$ is trivial ([[def-braid-group-by-the-artin-presentation]]).

[F5] $\operatorname{Sym}(\{1,\ldots,n\})$ is the group of bijections of the strand-label set under composition, and $(i\ i+1)$ is the transposition interchanging $i$ and $i+1$ ([[def-symmetric-group]]).

[F6] The twist is natural and satisfies $\theta_{Y\otimes Z}=(\theta_Y\otimes\theta_Z)c_{Z,Y}c_{Y,Z}$ and ribbon dual compatibility ([[def-twist-and-ribbon-structure]]).

[F7] The chosen evaluation and coevaluation maps satisfy the two snake identities ([[def-left-dual-and-right-dual-object]]).
