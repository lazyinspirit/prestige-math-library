---
id: lem-rabinowitsch-unit-ideal-consequence
kind: lemma
title: "The auxiliary ideal is the unit ideal"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-proper-ideal-contained-in-maximal-ideal, cor-weak-nullstellensatz-algebraically-closed-coordinate-form, lem-rabinowitsch-auxiliary-ideal-has-empty-zero-locus]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Theorem 13.10"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice.

Let $k$ be an algebraically closed field, let $I\subseteq k[x_1,\ldots,x_n]$
be an ideal, and let $f$ vanish on $V(I)$. Then the auxiliary ideal
$$ J:=I+(1-yf)\subseteq k[x_1,\ldots,x_n,y] $$
is the unit ideal.

## Facts & Assumptions

**Given:** The Axiom of Choice, an algebraically closed field $k$, an ideal $I\subseteq k[x_1,\ldots,x_n]$, and a polynomial $f$ vanishing on $V(I)$.

[L1] Every proper ideal lies in a maximal ideal ([[thm-proper-ideal-contained-in-maximal-ideal]]).

[L2] Over an algebraically closed field, every maximal ideal of a polynomial ring is an evaluation ideal ([[cor-weak-nullstellensatz-algebraically-closed-coordinate-form]]).

[L3] The auxiliary ideal $J$ has empty zero locus ([[lem-rabinowitsch-auxiliary-ideal-has-empty-zero-locus]]).

## Proof

**Proof technique:** contradiction.

1.1 Assume, for contradiction, that $J$ is proper. By [L1], $J$ lies in some maximal ideal $\mathfrak m\subseteq k[x_1,\ldots,x_n,y]$. [L1, given, assume-contra]

2.1 By [L2], there is a point $(a,b)\in k^{n+1}$ with $\mathfrak m=(x_1-a_1,\ldots,x_n-a_n,y-b)$. Since $J\subseteq\mathfrak m$, every element of $J$ vanishes at $(a,b)$. [L2, step 1.1, choose]

3.1 Step 2.1 contradicts [L3], which says that $J$ has no common zero. Therefore $J$ is not proper, so $J=(1)$. [L3, step 2.1, discharge-contradiction] ∎
