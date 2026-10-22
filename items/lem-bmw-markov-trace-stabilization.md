---
id: lem-bmw-markov-trace-stabilization
kind: lemma
title: BMW closure trace and stabilization scalars
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-bmw-algebra-with-fixed-kauffman-skein-convention
  - def-dubrovnik-tangle-skein-algebra
  - lem-bmw-presentation-tangle-evaluation-is-well-defined
  - lem-bmw-relations-dubrovnik-parameter-dictionary
  - lem-framed-kauffman-link-evaluation
proof_strategy: direct
axiom_use: "Choice-free: closure, cyclicity, tower compatibility, and stabilization are finite tangle isotopies and scalar evaluations."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Frederick M. Goodman and Holly Hauschild, Affine Birman–Wenzl–Murakami Algebras and Tangles in the Solid Torus, §§2.3, 3.5, and 5.1"
      url: "https://arxiv.org/pdf/math/0411155"
      locator: "PDF pp. 6–8 and 25–26: closure evaluation, generator map, and ordinary Markov trace scalars"
    - title: "Louis H. Kauffman, An Invariant of Regular Isotopy, Transactions of the AMS 318(2) (1990), §§VI–VII"
      url: "https://homepages.math.uic.edu/~kauffman/IRH.pdf"
      locator: "PDF pp. 38–54/printed pp. 453–469: regular-isotopy closure evaluation and curl factors"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

For $n\ge1$, let $\Phi_n$ be the BMW-to-Dubrovnik tangle homomorphism over $T$, let $\widehat{t}$ denote closure of an $(n,n)$ tangle by joining corresponding top and bottom endpoints without a twist, and define
$$\tau_n(x)=d^{-n}P\!\left(\widehat{\Phi_n(x)}\right),\qquad x\in BMW_n(T;q,\rho,\delta).$$
Then $\tau_n$ is a cyclic $T$-linear trace, compatible with the tower inclusion $\iota_n:BMW_n\to BMW_{n+1}$ that adds one straight strand, and for every $x\in BMW_n$,
$$\tau_{n+1}(\iota_n(x))=\tau_n(x),\quad \tau_{n+1}(\iota_n(x)g_n)=a d^{-1}\tau_n(x),\quad \tau_{n+1}(\iota_n(x)g_n^{-1})=a^{-1}d^{-1}\tau_n(x),\quad \tau_{n+1}(\iota_n(x)e_n)=d^{-1}\tau_n(x),$$
where $a=\rho$ and $d=\delta$.

## Statement references

[[lem-bmw-presentation-tangle-evaluation-is-well-defined|Generator images in the tangle algebra]]

[[lem-framed-kauffman-link-evaluation|Scalar Dubrovnik evaluation]]

[Goodman and Hauschild, *Affine Birman–Wenzl–Murakami Algebras and Tangles in the Solid Torus*](https://arxiv.org/pdf/math/0411155)

[Kauffman, *An Invariant of Regular Isotopy*](https://homepages.math.uic.edu/~kauffman/IRH.pdf)

## Facts & Assumptions

**Given:** The BMW tower, its tangle realization, the scalar Dubrovnik evaluation, and closure by untwisted endpoint arcs.

[F1] The natural assignment from the BMW presentation to the Dubrovnik tangle skein algebra is a well-defined algebra homomorphism for each $n$ ([[lem-bmw-presentation-tangle-evaluation-is-well-defined]]).

[F2] The scalar $P$ is invariant under regular isotopy, multiplies by $a$ and $a^{-1}$ under positive and negative curls, and by $d$ under addition of a disjoint trivial circle ([[lem-framed-kauffman-link-evaluation]]).

[F3] $g_n$ is the positive Artin crossing, $g_n^{-1}$ its negative crossing, and $e_n$ the adjacent cup-cap tangle ([[lem-bmw-presentation-tangle-evaluation-is-well-defined]]).

[F4] The Dubrovnik parameters satisfy $a=\rho$ and $d=\delta$ under the specified coefficient map ([[lem-bmw-relations-dubrovnik-parameter-dictionary]]).

## Proof


1.1 By [F1], the tangle class $\Phi_n(x)$ depends only on the BMW algebra element $x$, so closing it and applying $P$ defines a $T$-linear scalar. For $x,y\in BMW_n$, the two closed tangles obtained by closing the stacked products $\Phi_n(x)\Phi_n(y)$ and $\Phi_n(y)\Phi_n(x)$ differ only by moving the chosen cut between the factors once around the closed tangle. This is an isotopy of the closed diagram and preserves its framing; therefore $P(\widehat{\Phi_n(xy)})=P(\widehat{\Phi_n(yx)})$, proving cyclicity after multiplication by $d^{-n}$. [F1, F2]

2.1 Under tower inclusion, the new straight strand closes to a disjoint trivial circle. By [F2], $P(\widehat{\Phi_{n+1}(\iota_n(x))})=dP(\widehat{\Phi_n(x)})$. Thus $d^{-(n+1)}dP(\widehat{\Phi_n(x)})=\tau_n(x)$, which proves tower compatibility. [F1, F2, step 1.1, algebra]

2.2 Closing $\iota_n(x)g_n$ turns the added positive crossing into a positive curl on the last closure arc of $\widehat{\Phi_n(x)}$; closing $\iota_n(x)g_n^{-1}$ gives a negative curl on the same arc. By [F2] and [F3], the respective scalar factors are $a$ and $a^{-1}$. Normalization by $d^{-(n+1)}$ gives $a d^{-1}\tau_n(x)$ and $a^{-1}d^{-1}\tau_n(x)$. [F2, F3, F4, step 1.1, algebra]

3.1 In the closure of $\iota_n(x)e_n$, the added cup and cap and the two added closure arcs form a detour joining the top and bottom ends of the last strand of $\Phi_n(x)$. Following that component through the cup, cap, and closure arcs gives exactly the same connection as the untwisted closure arc for $\Phi_n(x)$; the other components and crossings are unchanged. Pulling this detour into the closing collar is a planar isotopy, so the unnormalized evaluations agree. The normalization changes from $d^{-n}$ to $d^{-(n+1)}$, giving $d^{-1}\tau_n(x)$. [F1, F2, F3, step 1.1, algebra] ∎
