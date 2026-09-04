---
id: thm-affine-variety-prime-coordinate-ring
kind: theorem
title: "A classical affine variety has a domain as its coordinate ring, and conversely"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-affine-variety-classical, def-coordinate-ring-affine-algebraic-set, thm-affine-nullstellensatz-correspondence, thm-quotient-is-domain-iff-ideal-prime]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Proposition 2.27"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Donu Arapura, Notes on Basic Algebraic Geometry, Lemma 1.5.4"
      url: "https://www.math.purdue.edu/~arapura/preprints/algeom.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
---

## Statement

Let $k$ be an algebraically closed field and let $X\subseteq \mathbf A_k^n$ be
a nonempty affine algebraic set. Then $X$ is a classical affine variety if and
only if its coordinate ring $k[X]$ is an integral domain.

## Facts & Assumptions

**Given:** An algebraically closed field $k$ and a nonempty affine algebraic set $X\subseteq \mathbf A_k^n$.

[L1] The coordinate ring of $X$ is $$ k[X]=k[x_1,\ldots,x_n]/I(X) $$ ([[def-coordinate-ring-affine-algebraic-set]]).

[L2] A nonempty affine algebraic set is irreducible exactly when its vanishing ideal is prime ([[thm-affine-nullstellensatz-correspondence]]).

[L3] For a commutative ring $R$ and ideal $P$, the quotient $R/P$ is an integral domain if and only if $P$ is prime ([[thm-quotient-is-domain-iff-ideal-prime]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], the set $X$ is a classical affine variety exactly when $I(X)$ is a prime ideal of $k[x_1,\ldots,x_n]$. [L2, given]

1.2 By [L1] and [L3], the coordinate ring $k[X]$ is an integral domain exactly when the ideal $I(X)$ is prime. [L1, L3]

2.1 Steps 1.1 and 1.2 prove that $X$ is a classical affine variety if and only if $k[X]$ is an integral domain. [step 1.1, step 1.2] ∎
