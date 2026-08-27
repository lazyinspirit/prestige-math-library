---
id: thm-noetherian-ring-has-finitely-many-minimal-primes
kind: theorem
title: "A Noetherian ring has finitely many minimal prime ideals"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [cor-radical-ideal-has-finitely-many-minimal-primes-noetherian, def-nilradical-and-reduced-ring, lem-radical-is-an-ideal]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §14 The spectrum of a ring"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., §13 and §17"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "The Stacks Project, Section 10.31: Noetherian rings"
      url: "https://stacks.math.columbia.edu/tag/00FM"
pipeline_run: null
---

## Statement

Let $R$ be a Noetherian commutative ring. Then $R$ has only finitely many minimal prime ideals.

This theorem inherits only the dependent-choice cost already recorded in the cited Noetherian-induction corollary.

## Facts & Assumptions

**Given:** A Noetherian commutative ring $R$.

[L1] The nilradical is $\operatorname{Nil}(R)=\sqrt{(0)}$, and every ideal of the form $\sqrt{I}$ is radical ([[def-nilradical-and-reduced-ring]], [[lem-radical-is-an-ideal]]).

[L2] Every radical ideal of a Noetherian ring is a finite intersection of its minimal primes, and hence has only finitely many minimal primes ([[cor-radical-ideal-has-finitely-many-minimal-primes-noetherian]]).

## Proof

**Proof technique:** direct.

1.1 Let $N=\operatorname{Nil}(R)$. By [L1], $N$ is a radical ideal, so [L2] gives only finitely many prime ideals minimal over $N$. [L1, L2]

1.2 A prime ideal contains $(0)$ if and only if it contains every nilpotent element, hence if and only if it contains $N$. Therefore the prime ideals minimal over $(0)$ are exactly the prime ideals minimal over $N$. [L1, given, algebra]

2.1 Combining steps 1.1 and 1.2 shows that $R$ has only finitely many minimal prime ideals. [step 1.1, step 1.2] ∎
