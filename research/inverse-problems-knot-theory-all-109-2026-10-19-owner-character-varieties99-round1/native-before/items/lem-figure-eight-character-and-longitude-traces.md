---
id: lem-figure-eight-character-and-longitude-traces
kind: lemma
title: "Figure-eight character curve and longitude trace"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 10
deps:
  - def-sl-two-character-variety-and-peripheral-eigenvalues
  - lem-sl-two-character-trace-coordinate-model
  - thm-knot-wirtinger-presentation-correctness
  - ex-knot-kt-01-worked-cases
  - def-knot-meridian-and-preferred-longitude
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Léo Bénard, François Florens, and Adrien Rodau, A slope invariant and the A-polynomial of knots, Example 3.20"
      url: "https://arxiv.org/html/2103.14151"
    - title: "Kathleen L. Petersen, A-polynomials of a family of two-bridge knots, §§3–4"
      url: "https://nyjm.albany.edu/j/2015/21-39v.pdf"
---

## Statement

Assume full AC and let $K=J(2,-2)$ be the figure-eight knot. Use the two-bridge group presentation $\pi_1(E_K)=\langle u,v\mid v w=w u\rangle$, where $w=uv^{-1}u^{-1}v$, and take $\mu=u$. On the one-dimensional irreducible character component, define $x(\chi)=\operatorname{tr}(\rho(u))=\operatorname{tr}(\rho(v))$ and $y(\chi)=\operatorname{tr}(\rho(uv))$. Then
$$2x^2+y^2-x^2y-y-1=0,$$
and the preferred-longitude trace is $\operatorname{tr}(\rho(\lambda))=x^4-5x^2+2$. The displayed curve equation is irreducible over $\mathbb C$, and $x$ is nonconstant on it.

## Statement references

[Bénard, Florens, and Rodau, Example 3.20](https://arxiv.org/html/2103.14151)

[Petersen, §§3–4](https://nyjm.albany.edu/j/2015/21-39v.pdf)

## Facts & Assumptions

**Given:** Full AC, the standard figure-eight knot, its positive meridian and preferred longitude, and the two-bridge group presentation in the Statement.

[F1] The four-crossing figure-eight code gives a one-component Wirtinger presentation ([[ex-knot-kt-01-worked-cases]]; [[thm-knot-wirtinger-presentation-correctness]]).

[A1] The passage from that presentation to the irreducible trace-coordinate equation and the preferred-longitude trace requires the full SL2 trace-coordinate and peripheral-word calculation; that local calculation is not supplied ([[lem-sl-two-character-trace-coordinate-model]]). The Bénard–Florens–Rodau source states the resulting curve and trace formula but its citation does not replace this proof.

## Proof obligation

The missing derivation must substitute the two-generator relation into the SL2 trace identities, identify the irreducible component of the quotient, evaluate the preferred-longitude word, and verify irreducibility of the resulting plane curve. The source locators provide an exact target formula; they do not supply a locally checked proof of each reduction. This lemma is escalated.
