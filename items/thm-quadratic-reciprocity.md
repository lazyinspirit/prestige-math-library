---
id: thm-quadratic-reciprocity
kind: theorem
title: "Quadratic reciprocity for distinct odd primes"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-gauss-lower-half-lattice-count,
       lem-reciprocity-rectangle-lattice-count]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. Hackman, Elementary Number Theory, §D.V"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
    - title: "W. Stein, Elementary Number Theory, §§4.1 and 4.3"
      url: "https://wstein.org/ent/ent.pdf"
    - title: "A. Gorodnik, Number Theory, Lecture 9, §2"
      url: "https://www.math.uzh.ch/gorodnik/nt/lecture9.pdf"
pipeline_run: null
---

## Statement

For distinct odd primes $p,q$, $\left(\frac pq\right)\left(\frac qp\right)=(-1)^{(p-1)(q-1)/4}$.

Equivalently, the two Legendre symbols agree unless $p\equiv q\equiv3\pmod4$, in which case they have opposite signs.

## Facts & Assumptions

**Given:** Distinct odd primes $p$ and $q$.

[L1] For distinct odd primes $p,q$, the lower-half count satisfies $\left(\frac qp\right)=(-1)^{S_{p,q}}$ ([[lem-gauss-lower-half-lattice-count]]).

[L2] For the two orientations of the rectangle, $S_{p,q}+S_{q,p}=(p-1)(q-1)/4$ ([[lem-reciprocity-rectangle-lattice-count]]).

## Proof

**Proof technique:** direct.

1.1 Applying [L1] in both orientations, multiplying, and then using [L2] gives $\left(\frac pq\right)\left(\frac qp\right)=(-1)^{S_{q,p}+S_{p,q}}=(-1)^{(p-1)(q-1)/4}$. [L1, L2, algebra]

2.1 The exponent is $((p-1)/2)((q-1)/2)$, which is odd exactly when both factors are odd, equivalently when $p\equiv q\equiv3\pmod4$. Since the Legendre symbols are signs for distinct primes, their product is then $-1$, and in every other case it is $1$, proving the equivalent formulation. [step 1.1, algebra] ∎
