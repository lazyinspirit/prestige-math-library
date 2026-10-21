---
id: thm-lickorish-wallace-framed-link-presentation
kind: theorem
title: "Lickorish–Wallace framed-link presentation theorem"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-integral-framed-link-surgery-diagram
  - lem-relative-three-manifolds-admit-parametrized-link-surgery-presentations
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Justin Roberts, Kirby calculus in manifolds with boundary"
      url: "https://arxiv.org/pdf/math/9812086"
      locator: "pp. 1–4; the complete smooth oriented relative existence and marked calculus arguments are supplied by the proved local dependencies."
    - title: "Nikolai Saveliev, Lectures on the Topology of 3-Manifolds"
      url: "https://poisson.phc.dm.unipi.it/~camponovo/libri/3mani.pdf"
      locator: "Theorem 2.1 and proof, Lecture 2 §2.2, printed pp. 33–34"
    - title: "Qiang E, Fengchun Lei, and Fengling Li, A Proof of Lickorish and Wallace’s Theorem"
      url: "https://arxiv.org/pdf/1306.1376"
      locator: "Theorem 1.1 and proof, pp. 1–4"
---

## Statement

Assume the Axiom of Choice. For every nonempty closed connected oriented smooth $3$-manifold $M$, there is a finite oriented link $L=\bigcup_{i\in I}K_i\subset S^3$ and an integer $n_i$ for each component such that the oriented manifold obtained by simultaneous surgery with meridian slopes $n_i[\mu_i]+[\lambda_i]$ is orientation-preservingly diffeomorphic to $M$. The empty link is allowed and presents $S^3$.

## Statement references

[[def-integral-framed-link-surgery-diagram|Integral framed-link surgery convention]]

[[lem-relative-three-manifolds-admit-parametrized-link-surgery-presentations|Proved smooth oriented link-surgery existence]]

[Saveliev, Lecture 2 §2.2, Theorem 2.1 and proof](https://poisson.phc.dm.unipi.it/~camponovo/libri/3mani.pdf)

[E, Lei, and Li, A Proof of Lickorish and Wallace’s Theorem](https://arxiv.org/pdf/1306.1376)


## Facts & Assumptions

**Given:** Full AC and a nonempty closed connected oriented smooth $3$-manifold $M$.

[A1] [[def-axiom-of-choice]] is the hypothesis of both local suppliers.

[F1] [[lem-relative-three-manifolds-admit-parametrized-link-surgery-presentations]]: for connected nonempty compact oriented smooth $N,M$ with their prescribed common parametrized boundary, a finite framed link in $N$ has surgery orientation-preservingly diffeomorphic to $M$. The proof supplies actual normal disk framings and the prescribed smooth output identification, including the closed case $N=S^3$.

[F2] [[def-integral-framed-link-surgery-diagram]]: a component's preferred longitude is the unique degree-one parallel with zero homology class in its individual knot exterior. Its positive meridian and preferred longitude form the peripheral basis, and integer surgery fills along $n\mu+\lambda$. The empty diagram gives $S^3$.

## Proof

1.1 Apply [F1] with the standard oriented $N=S^3$, target $M$, and empty external boundary. The hypotheses hold: both manifolds are connected, nonempty, compact and oriented, and their boundaries have the unique empty identification. The supplier gives a finite framed link $L\subset S^3$ with disjoint actual attaching tubes and an orientation-preserving diffeomorphism from its simultaneous framed surgery to $M$. Its normal disk framings are the actual attaching framings of its four-dimensional two-handle trace; no arbitrary rational filling has been introduced. [given, A1, F1, construct]

2.1 Orient each of the finitely many components. In a component's oriented framed tube $S^1\times D^2$, the framed parallel is $t\mapsto(t,v)$ for a fixed nonzero normal vector $v$. Its projection to the core has degree $+1$. In the positive-meridian/preferred-longitude basis from [F2], the meridian has degree zero and the preferred longitude has degree one, so this parallel has class $n_i[\mu_i]+[\lambda_i]$ for an integer $n_i$. This also follows by writing the normal vector in the preferred trivialization: its winding is the integer $n_i$. The surgery meridian of a framed two-handle is precisely this parallel, by the explicit exchanged disk-factor construction in [F1]. Thus every component has exactly the required integer slope, with the full original normal framing retained. [F1, F2, step 1.1, construct]

3.1 The disjoint attaching tubes in step 1.1 permit these fillings simultaneously; step 2.1 identifies each of them with the integral convention in [F2]. Their result is therefore the stated integral surgery manifold and has the orientation-preserving diffeomorphism to $M$ supplied in step 1.1. If the link is empty, [F2] identifies its result with $S^3$; conversely the empty diagram is an allowed presentation of $S^3$. This proves the full claim. [F1, F2, step 1.1, step 2.1] ∎
