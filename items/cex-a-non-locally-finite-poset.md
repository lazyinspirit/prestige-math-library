---
id: cex-a-non-locally-finite-poset
kind: counterexample
title: "A poset with a bottom, a top and countably many incomparable middle elements has an infinite interval, so convolution of constant-one functions is not defined"
status: published
origin: session
deps: [fs-every-poset-has-an-incidence-algebra, def-incidence-algebra-and-convolution, def-poset-interval-and-finiteness-conditions, def-countable, def-natural-numbers]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "F. Gotti, Incidence Algebras, MIT 18.211 notes"
      url: "https://math.mit.edu/~fgotti/docs/Courses/C.%20Combinatorial%20Analysis/38.%20Mobius%20Inversion%20Formula/Incidence%20Algebras.pdf"
pipeline_run: null
---

## Statement refuted

Convolution of incidence functions is defined on every poset, even without local finiteness ([[fs-every-poset-has-an-incidence-algebra]]).

## Facts & Assumptions

**Given:** A nonzero commutative ring $R$, the set $P:=\{\bot,\top\}\cup(\mathbb N\times\{m\})$, with all three pieces disjoint, and the relation in which $\bot<\top$ and $\bot<(n,m)<\top$ for every $n\in\mathbb N$, distinct middle elements are incomparable, and equality is allowed.

[F1] $\mathbb N$ is the infinite set of natural numbers ([[def-natural-numbers]], [[def-countable]]).

[F2] A poset is locally finite exactly when every interval is finite ([[def-poset-interval-and-finiteness-conditions]]).

[F3] Incidence convolution is the finite ring sum $(f*g)(x,y)=\sum_{z\in[x,y]}f(x,z)g(z,y)$; local finiteness is what makes this sum defined ([[def-incidence-algebra-and-convolution]]).

## Counterexample

**Proof technique:** direct.

1.1 The relation is reflexive. Opposite inequalities force equality, so it is antisymmetric, and its only nontrivial two-step strict chains have the form $\bot<(n,m)<\top$, whose endpoints are already comparable; thus it is transitive. Hence $P$ is a poset. [given]

1.2 Every point of $P$ lies between $\bot$ and $\top$, so $[\bot,\top]=P$. It contains the countably infinite subset $\mathbb N\times\{m\}$, hence is infinite and $P$ is not locally finite. [given, F1, F2]

2.1 For constant-one functions $f$ and $g$, the formal endpoint value is $(f*g)(\bot,\top)=\sum_{z\in P}1_R$. This has one term for every natural-indexed middle point, in addition to the endpoints, and is not the finite ring sum required by convolution. [step 1.2, F3]

3.1 Thus the proposed convolution is not defined at $(\bot,\top)$, refuting the statement. [step 1.2, step 2.1] ∎
