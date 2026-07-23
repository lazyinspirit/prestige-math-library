---
id: thm-rat-field
kind: theorem
title: "The rationals form a field"
status: draft
origin: session
deps: [def-rat-operations, lem-rat-ops-well-defined, thm-int-comm-ring, lem-int-cancellation]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §4.2"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

$(\mathbb{Q}, +, \cdot, 0, 1)$ with the operations of [[def-rat-operations]]
is a field: a commutative ring with $1 \ne 0$ in which every nonzero element
has a multiplicative inverse.

## Facts & Assumptions

**Given:** Rationals with representatives $(a,b), (c,d), (e,f)$, second components nonzero.

[L1] The operations are independent of representatives ([[lem-rat-ops-well-defined]]).

[L2] $\mathbb{Z}$ is a commutative ring ([[thm-int-comm-ring]]).

[L3] $\mathbb{Z}$ has no zero divisors and admits cancellation ([[lem-int-cancellation]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], each axiom may be verified on fixed representatives. [L1, suffices]

1.2 Associativity of $+$: both $((a,b)+(c,d))+(e,f)$ and $(a,b)+((c,d)+(e,f))$ have representative $(adf + cbf + ebd,\; bdf)$. [L2]

1.3 Commutativity of $+$: $(ad+cb,\, bd)$ and $(cb+ad,\, db)$ are equal pairs. [L2]

1.4 Additive identity: $(a,b) + (0,1) = (a \cdot 1 + 0 \cdot b,\; b \cdot 1) = (a,b)$. [L2]

1.5 Additive inverses: $(a,b) + (-a,b) = (ab - ab,\; b^2) = (0, b^2) \sim (0,1)$. [L2]

1.6 Associativity and commutativity of $\cdot$: $((ac)e,\, (bd)f) = (a(ce),\, b(df))$ and $(ac,\, bd) = (ca,\, db)$. [L2]

1.7 Multiplicative identity: $(a,b)(1,1) = (a,b)$; and $1 \ne 0$ since $1 \cdot 1 \ne 0 \cdot 1$. [L2]

1.8 Distributivity: $(a,b)\bigl((c,d)+(e,f)\bigr)$ has representative $(a(cf+ed),\; b(df))$, while $(a,b)(c,d) + (a,b)(e,f)$ has representative $(acbf + aebd,\; b^2 df) = (b(acf + aed),\; b(bdf))$; cancelling the common nonzero factor $b$ these are equivalent. [L2, L3]

1.9 Inverses: $[(a,b)] = 0$ iff $a \cdot 1 = 0 \cdot b$ iff $a = 0$; for $a \ne 0$, $(a,b)(b,a) = (ab,\, ba) \sim (1,1)$. [L2]

2.1 All field axioms hold: $\mathbb{Q}$ is a field. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, step 1.6, step 1.7, step 1.8, step 1.9] ∎
