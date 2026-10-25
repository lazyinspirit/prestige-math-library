---
id: ex-trigonometric-circle-loops-have-their-integer-degrees
kind: example
title: "The geometric loops $t\\mapsto(\\cos 2\\pi nt,\\sin 2\\pi nt)$ have degree $n$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle, def-standard-integer-loops-in-the-circle, prop-standard-circle-loops-have-their-integer-degrees]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, Ch. 1, Section 1.1"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
    - title: "J. Peter May, A Concise Course in Algebraic Topology, Ch. 1, Section 5"
      url: "https://math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
    - title: "Jonathan Wise, Math 6210 Lecture Notes, Week 3, Section 3.4"
      url: "https://math.colorado.edu/~jonathan.wise/teaching/math6210-fall-2012/notes.pdf"
pipeline_run: null
---

## Example

For every integer $n$, the based geometric loop

$$\gamma_n(t)=(\cos2\pi nt,\sin2\pi nt)$$

has degree $n$, where degree is transported from the quotient-circle model by
the based homeomorphism.

## Facts & Assumptions

**Given:** An integer $n$ and the quotient-circle dictionary.

[L1] $[t]\mapsto(\cos 2\pi t,\sin 2\pi t)$ is a homeomorphism from $\mathbb R/\mathbb Z$ to the unit circle and sends $[0]$ to $(1,0)$ ([[thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle]]).

[L2] $\deg(\omega_n)=n$ for every integer $n$ ([[prop-standard-circle-loops-have-their-integer-degrees]]).

[L3] For every integer $n$, $\omega_n(t)=[nt]$ ([[def-standard-integer-loops-in-the-circle]]).

## Verification

**Proof technique:** direct.

1.1 Under the homeomorphism of [L1], the loop in [L3] has image $t\mapsto(\cos(2\pi nt),\sin(2\pi nt))=\gamma_n(t)$. [L1, L3, algebra]

2.1 The quotient loop has degree $n$ by [L2], so the transported degree of its geometric image $\gamma_n$ is also $n$. At $n=0$ this is the constant loop, and the same computation covers every negative $n$. [step 1.1, L2] ∎
