---
id: lem-module-finite-domain-extension-lifts-finite-prime-chains
kind: lemma
title: "Finite prime chains lift through module-finite domain extensions without Choice"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-determinant-trick-for-nakayama, thm-localisation-at-a-prime-is-local, thm-prime-spectrum-of-a-localisation-bijection, thm-prime-spectrum-of-a-quotient-bijection]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references: []
pipeline_run: null
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical new_item review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-03-height-new-item-receipt.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Let $B\subseteq A$ be an injective module-finite extension of commutative
domains, and let
$$\mathfrak p_0\subsetneq\mathfrak p_1\subsetneq\cdots\subsetneq\mathfrak p_r$$
be a supplied finite strict chain of primes of $B$. Then there are primes
$\mathfrak q_0\subsetneq\cdots\subsetneq\mathfrak q_r$ of $A$ with
$\mathfrak q_i\cap B=\mathfrak p_i$ for every $i$. This finite-chain assertion
uses no choice principle.

## Facts & Assumptions

**Given:** An injective module-finite extension of domains $B\subseteq A$ and a supplied finite strict prime chain in $B$.

[L1] If $M$ is a finite module over a commutative ring $R$ and $IM=M$, the determinant trick gives $a\in I$ such that $(1-a)M=0$ ([[lem-determinant-trick-for-nakayama]]).

[L2] For a prime $\mathfrak p\subset B$, the localization $B_{\mathfrak p}$ is local with maximal ideal $\mathfrak pB_{\mathfrak p}$ ([[thm-localisation-at-a-prime-is-local]]). Prime ideals of a localization and quotient pull back to primes upstairs with the stated contractions ([[thm-prime-spectrum-of-a-localisation-bijection]], [[thm-prime-spectrum-of-a-quotient-bijection]]).

## Proof

**Proof technique:** direct.

1.1 First establish finite-module lying over. Fix any prime $\mathfrak p$ of $B$, put $S=B\setminus\mathfrak p$, $R=B_{\mathfrak p}$, $M=S^{-1}A$, and $\mathfrak m=\mathfrak pR$. The module $M$ is finite over $R$; it is a nonzero ring because $B\subseteq A$ are domains and no element of $S$ annihilates $1\in A$. If $\mathfrak mM=M$, [L1] gives $a\in\mathfrak m$ with $(1-a)M=0$. Write $a=b/s$ with $b\in\mathfrak p$ and $s\notin\mathfrak p$. Then $1-a=(s-b)/s$ is an explicit unit of $R$, since $s-b\notin\mathfrak p$. It would force $M=0$, a contradiction. Thus $M/\mathfrak mM\ne0$. [L1, L2, given, algebra]

2.1 The quotient $C=M/\mathfrak mM$ is a nonzero finite-dimensional algebra over the residue field $\kappa(\mathfrak p)=R/\mathfrak m$. Among its proper ideals, choose one $J$ of maximal $\kappa(\mathfrak p)$-vector-space dimension; this is possible because the zero ideal is proper and the dimensions form a nonempty subset of the finite set $\{0,\ldots,\dim_{\kappa(\mathfrak p)}C-1\}$. A strictly larger proper ideal would have larger vector-space dimension, so $J$ is a maximal, hence prime, ideal of $C$. The field map $\kappa(\mathfrak p)\to C$ is injective because $C\ne0$, and therefore the preimage of $J$ in $M$ contracts to $\mathfrak m$ in $R$. Pulling it back along the localization $A\to M$ gives a prime of $A$ contracting to $\mathfrak p$ in $B$. [L2, step 1.1, algebra, choose]

3.1 Apply steps 1.1–2.1 to $B\subseteq A$ at $\mathfrak p_0$ to obtain $\mathfrak q_0$ above $\mathfrak p_0$. Suppose $\mathfrak q_i$ has been selected above $\mathfrak p_i$. The induced inclusion $B/\mathfrak p_i\subseteq A/\mathfrak q_i$ is again an injective module-finite extension of domains. Apply the finite-module lying-over construction to the prime $\mathfrak p_{i+1}/\mathfrak p_i$ in the lower quotient. By [L2], its prime above pulls back to a prime $\mathfrak q_{i+1}\supseteq\mathfrak q_i$ of $A$ contracting to $\mathfrak p_{i+1}$. The inclusion is strict because its contractions are strict. [L2, step 2.1, given, algebra]

4.1 Repeating step 3.1 for the supplied finite number $r$ of links produces $\mathfrak q_0\subsetneq\cdots\subsetneq\mathfrak q_r$ with the required contractions. Only finite choices of witnesses occurred: the finite-dimensional ideal in step 2.1 is selected from a bounded set of integer dimensions, and the chain has a supplied finite length. [step 3.1] ∎
