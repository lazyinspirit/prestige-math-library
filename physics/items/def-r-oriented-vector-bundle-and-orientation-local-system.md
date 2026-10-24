---
id: def-r-oriented-vector-bundle-and-orientation-local-system
kind: definition
title: R-oriented vector bundle and orientation local system
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-disk-sphere-and-thom-space-of-a-metric-vector-bundle, def-local-system-of-r-modules-and-its-pullback, lem-disk-pair-cohomology-over-an-arbitrary-commutative-ring]
proof_strategy: not-applicable
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "May, A Concise Course in Algebraic Topology, Chapter 23 §5"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "orientations and Thom classes, printed pp.194–196"
---

## Definition

Let $R$ be a commutative ring and let $\xi\to B$ be a metric rank-$n$ real
vector bundle.  Its **$R$-orientation local system** $\mathcal O_R(\xi)$ has
stalk
$$\mathcal O_R(\xi)_b=H^n(D(\xi_b),S(\xi_b);R).$$
On each bundle chart the fiber disk pairs identify with the standard disk
pair.  On overlaps, the linear transition functions induce units on its top
relative cohomology; these units are locally constant and satisfy the cocycle
law.  They therefore define a rank-one local system, whose path transport is
the corresponding composite of overlap units.  Metric changes give the same
system through the canonical radial pair isomorphisms.

The preceding disk-pair calculation identifies every stalk with a free
rank-one $R$-module.  An **$R$-orientation** is a section
$o=(o_b)$ of $\mathcal O_R(\xi)$ such that every $o_b$ generates its stalk;
equivalently it is a compatible locally constant family of fiber generators.
The bundle is **$R$-oriented** when such a section is supplied.

For $R=\mathbb F_2$, each one-dimensional stalk has exactly one nonzero
generator and every transition automorphism fixes it, so every real vector
bundle is canonically mod-two oriented.  Over $\mathbb Z$, a loop whose
monodromy sends a generator to its negative prevents an integral orientation:
compatibility would require $1=-1$ in $\mathbb Z$.

For rank zero the stalk is $H^0(*,\varnothing;R)=R$ and the unit gives the
standard orientation.  Empty bases have the unique empty section.  The zero
ring has its unique (zero) cyclic generator.  Identity and constant paths act
identically, reversed paths give inverse units, and no family of generators is
selected in making the definition.  It is choice-free.
