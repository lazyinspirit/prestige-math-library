---
id: lem-reciprocity-rectangle-lattice-count
kind: lemma
title: "The two reciprocity lattice counts partition an open rectangle"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-gauss-lower-half-lattice-count, thm-euclids-lemma]
justified_by: []
aliases: []
landmark: true
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
    - title: "P. Hackman, Elementary Number Theory, §D.V"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
    - title: "A. Gorodnik, Number Theory, Lecture 9, §2"
      url: "https://www.math.uzh.ch/gorodnik/nt/lecture9.pdf"
pipeline_run: null
---

## Statement

Let $p$ and $q$ be distinct odd primes, and let $S_{p,q}$ and $S_{q,p}$ be the lower-half lattice counts of [[lem-gauss-lower-half-lattice-count]]. Then $S_{p,q}+S_{q,p}=(p-1)(q-1)/4$.

## Facts & Assumptions

**Given:** Distinct odd primes $p,q$ and the integer rectangle $R=\{(x,y):1\le x\le(p-1)/2,\ 1\le y\le(q-1)/2\}$.

[L1] Put $S_{p,q}:=|\{(x,y)\in\mathbb Z^2:1\le x\le(p-1)/2,\ 0<py<qx\}|$ ([[lem-gauss-lower-half-lattice-count]]).

[L2] If a prime $p$ divides a product $ab$, then $p\mid a$ or $p\mid b$ ([[thm-euclids-lemma]]).

## Proof

**Proof technique:** direct.

1.1 No point $(x,y)\in R$ lies on the diagonal $py=qx$: equality would give $p\mid qx$, so [L2] would give $p\mid q$ or $p\mid x$; distinctness of the primes rules out the first alternative, while $1\le x\le(p-1)/2<p$ rules out the second. Thus every point of $R$ satisfies exactly one of $py<qx$ and $qx<py$. [L2, given]

2.1 The points of $R$ with $py<qx$ are exactly those counted by $S_{p,q}$: the inequality itself forces $y<q/2$, hence $y\le(q-1)/2$; after interchanging the coordinates and the primes, the points with $qx<py$ are exactly those counted by $S_{q,p}$. By step 1.1 these two sets partition $R$, whose cardinality is $((p-1)/2)((q-1)/2)=(p-1)(q-1)/4$. [step 1.1, L1, algebra] ∎
