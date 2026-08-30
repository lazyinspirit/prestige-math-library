---
id: cor-strong-nullstellensatz-two-inclusions
kind: corollary
title: "Strong Nullstellensatz: I(V(I)) equals the radical of I"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-radical-of-an-ideal, lem-rabinowitsch-auxiliary-ideal-has-empty-zero-locus, lem-rabinowitsch-unit-ideal-consequence, lem-rabinowitsch-substitution-clears-denominators]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Theorem 13.10"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., Theorem (15.7)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice.

Let $k$ be an algebraically closed field and let
$I\subseteq k[x_1,\ldots,x_n]$ be an ideal. Then
$$
I(V(I))=\sqrt I.
$$

## Facts & Assumptions

**Given:** The Axiom of Choice, an algebraically closed field $k$, and an ideal $I\subseteq k[x_1,\ldots,x_n]$.

[L1] The radical $\sqrt I$ consists of the polynomials whose some positive power lies in $I$ ([[def-radical-of-an-ideal]]).

[L2] If $f$ vanishes on $V(I)$, then the auxiliary ideal $I+(1-yf)$ has empty zero locus ([[lem-rabinowitsch-auxiliary-ideal-has-empty-zero-locus]]).

[L3] Under the same hypothesis, the auxiliary ideal is the unit ideal ([[lem-rabinowitsch-unit-ideal-consequence]]).

[L4] A unit-ideal identity for the auxiliary ideal yields a power of $f$ in $I$ ([[lem-rabinowitsch-substitution-clears-denominators]]).

## Proof

**Proof technique:** direct.

1.1 If $f\in \sqrt I$, then [L1] gives $f^N\in I$ for some $N\ge 1$. For every $a\in V(I)$ we have $f(a)^N=0$, and a field has no nonzero nilpotents, so $f(a)=0$. Thus $f\in I(V(I))$, proving $\sqrt I\subseteq I(V(I))$. [L1, given]

1.2 Conversely, let $f\in I(V(I))$, so $f$ vanishes on $V(I)$. Then [L2] and [L3] give a unit-ideal identity for $I+(1-yf)$, and [L4] turns it into $f^N\in I$ for some $N\ge 1$. By [L1], this means $f\in \sqrt I$. Therefore $I(V(I))\subseteq \sqrt I$. [L1, L2, L3, L4]

2.1 The two inclusions from steps 1.1 and 1.2 yield $I(V(I))=\sqrt I$. [step 1.1, step 1.2] ∎
