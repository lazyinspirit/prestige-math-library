---
id: lem-easton-head-cardinality-and-name-count
kind: lemma
title: GCH counts Easton head conditions and subset names
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-easton-function, def-easton-support-product, lem-easton-head-cc-and-tail-closure, def-nice-name-for-a-subset, def-kappa-closure-distributivity-and-chain-condition, lem-cardinal-arithmetic-basic-laws, cor-cardinal-absorption, thm-cofinality-basics, def-cofinality, def-aleph-and-beth-hierarchies, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Thomas Jech, Set Theory, Chapter 15, head cardinality and nice-name count, printed p.234"
      url: "https://fa.ewi.tudelft.nl/~hart/onderwijs/set_theory/Jech/15-applications_of_forcing.pdf"
    - title: "Kameryn J. Williams, Math 655 Lecture Notes 2.2, Theorem 58 proof, PDF p.12"
      url: "https://juliakw.net/teaching/2019/math655/part2.2.pdf"
verification:
  audited: 2026-09-27
  precheck: pass
---

## Statement

Work in ZFC and assume the Generalized Continuum Hypothesis ([[def-axiom-of-choice]], [[def-aleph-and-beth-hierarchies]]);
let $F$ be an Easton function ([[def-easton-function]]) and let $\kappa$ be an
infinite regular cardinal of $\operatorname{dom}(F)$ with
$\operatorname{cf}(F(\kappa))>\kappa$. Write $P^{\le\kappa}$ for the head of the
Easton product at $\kappa$ ([[def-easton-support-product]]).

Then $\lvert P^{\le\kappa}\rvert=F(\kappa)$, and there are at most $F(\kappa)$
nice $P^{\le\kappa}$-names for subsets of $\kappa$
([[def-nice-name-for-a-subset]]). The count uses the $\kappa^{+}$-chain
condition of the head and only the GCH computation
$\lambda^{\mu}=\lambda$ for cardinals $0<\mu\le\kappa$ and $\lambda\ge\kappa$ with
$\operatorname{cf}(\lambda)>\kappa$; the zero exponent has value $\lambda^0=1$.

## Facts & Assumptions

**Given:** ZFC + GCH, an Easton function $F$, an infinite regular cardinal $\kappa\in\operatorname{dom}(F)$ with $\operatorname{cf}(F(\kappa))>\kappa$, and the head $P^{\le\kappa}$ of the Easton product.

[F1] Under GCH $2^{\aleph_{\alpha}}=\aleph_{\alpha+1}$ for every ordinal $\alpha$, and cardinal arithmetic uses Choice. ([[def-aleph-and-beth-hierarchies]])

[F2] An Easton function $F$ has cardinal values, is nondecreasing, and satisfies $\operatorname{cf}(F(\gamma))>\gamma$ for every $\gamma\in\operatorname{dom}(F)$; hence $F(\gamma)>\gamma$ and $F(\gamma)\le F(\kappa)$ for $\gamma\le\kappa$ in $\operatorname{dom}(F)$. ([[def-easton-function]])

[F3] A condition of $P(F)$ is a partial function on triples $(\kappa,\alpha,\beta)$ with $\kappa\in\operatorname{dom}(F)$, $\alpha<\kappa$, $\beta<F(\kappa)$ and values in $\{0,1\}$, with fewer than $\gamma$ triples of first coordinate $\le\gamma$ for every infinite regular $\gamma$, and $p\mapsto(p^{\le\kappa},p^{>\kappa})$ splits conditions by first coordinate into the head and the tail. ([[def-easton-support-product]])

[F4] Under GCH the head $P^{\le\kappa}$ has the $\kappa^{+}$-chain condition, that is, every antichain of $P^{\le\kappa}$ has cardinality below $\kappa^{+}$ ([[def-kappa-closure-distributivity-and-chain-condition]]); the head is the Easton product of the Cohen fibres with first coordinate $\le\kappa$ and is a set. ([[lem-easton-head-cc-and-tail-closure]])

[F5] A nice $P$-name for a subset of a ground-model set $A$ is a name $\{\langle\check a,p\rangle:a\in A,\ p\in A_a\}$ with each $A_a\subseteq P$ an antichain. ([[def-nice-name-for-a-subset]])

[F6] Cardinal exponentiation satisfies $\kappa^{\mu\oplus\nu}=\kappa^{\mu}\otimes\kappa^{\nu}$ and $(\kappa^{\mu})^{\nu}=\kappa^{\mu\otimes\nu}$ and is monotone in the base and in the exponent for nonzero base, and for cardinals with $\nu\le\mu$, $\mu$ infinite, $\mu\oplus\nu=\mu$ and $\mu\otimes\nu=\mu$ when $\nu\ne0$, while $\mu\otimes0=0$; cardinals compare by injections. ([[lem-cardinal-arithmetic-basic-laws]], [[cor-cardinal-absorption]])

[F7] $\operatorname{cf}(\alpha)\le\alpha$; a cofinal map of length $\operatorname{cf}(\alpha)$ may be taken strictly increasing; an infinite cardinal $\gamma$ is regular exactly when $\operatorname{cf}(\gamma)=\gamma$. ([[thm-cofinality-basics]], [[def-cofinality]])

[F8] The Axiom of Choice: every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

## Proof

1.1 Preliminary computation: if $\lambda>\aleph_0$ is a cardinal and $0<\mu<\operatorname{cf}(\lambda)$ is a cardinal, then $\lambda^{\mu}=\lambda$; consequently $\lambda^{<\rho}=\lambda$ whenever $1<\rho<\operatorname{cf}(\lambda)$. Fix a cofinal sequence $\langle\lambda_{\alpha}:\alpha<\operatorname{cf}(\lambda)\rangle$ of ordinals below $\lambda$. A function $f:\mu\to\lambda$ has bounded range because $\mu<\operatorname{cf}(\lambda)$, so its range lies in some $\lambda_{\alpha}$. Let $\rho_{\alpha}=|\lambda_{\alpha}|$ and $\tau_{\alpha}=\max\{\rho_{\alpha},\mu,\aleph_0\}<\lambda$. Under GCH, $\rho_{\alpha}^{\mu}\le\tau_{\alpha}^{\tau_{\alpha}}=2^{\tau_{\alpha}}=\tau_{\alpha}^{+}\le\lambda$. Thus $\lambda^{\mu}\le\sum_{\alpha<\operatorname{cf}(\lambda)}\rho_{\alpha}^{\mu}\le\lambda$ by Choice and cardinal absorption; the reverse inequality follows from constant functions. The case $\mu=0$ has value $1$ and does not affect the displayed supremum, which includes $\mu=1$. [F1, F6, F7, F8]

1.2 Write $B_{\gamma}=\{(\gamma,\alpha,\beta):\alpha<\gamma,\ \beta<F(\gamma)\}$ for each $\gamma\in\operatorname{dom}(F)$ with $\gamma\le\kappa$; all block indices below are restricted to these $\gamma$. A condition $p\in P^{\le\kappa}$ is a partial bit function on $\bigcup_{\gamma\le\kappa}B_{\gamma}$ satisfying the Easton support bounds. In particular, the graph of its $\gamma$-block is a subset of $B_{\gamma}\times 2$ of size below $\gamma$. There are at most $\kappa$ indices $\gamma$, $|B_{\gamma}\times 2|=F(\gamma)\le F(\kappa)$, and by [F4] every antichain of the head has cardinality at most $\kappa$. [F2, F3, F4, F6]

1.3 $\lvert P^{\le\kappa}\rvert\ge F(\kappa)$: for each $\beta<F(\kappa)$ the singleton bit condition $\{(\kappa,0,\beta)\mapsto 1\}$ satisfies every Easton support bound. These $F(\kappa)$ conditions are distinct, giving the lower bound. [F3]


2.1 $\lvert P^{\le\kappa}\rvert\le F(\kappa)$: by step 1.2 the graph of each $\gamma$-block has size below $\gamma$, so the number of possible blocks is at most $\sum_{\eta<\gamma}(2\cdot F(\gamma))^{|\eta|}\le\gamma\cdot F(\gamma)=F(\gamma)$ by step 1.1 and absorption; the term for $\eta=0$ is $1$. Here the cofinality of $F(\gamma)$ exceeds $\gamma$. Coding a condition by its at most $\kappa$ blocks therefore gives $|P^{\le\kappa}|\le\prod_{\gamma\le\kappa}F(\gamma)\le F(\kappa)^{\kappa}=F(\kappa)$. [F2, F6, step 1.1, step 1.2]

3.1 Steps 2.1 and 1.3 give injections in both directions between $P^{\le\kappa}$ and $F(\kappa)$, so $\lvert P^{\le\kappa}\rvert=F(\kappa)$ by antisymmetry of cardinal comparison. [F6, step 2.1, step 1.3]

4.1 There are at most $F(\kappa)$ nice $P^{\le\kappa}$-names for subsets of $\kappa$: by [F5] such a name is coded by the function $\kappa\to\{A\subseteq P^{\le\kappa}:A$ is an antichain$\}$ sending $a\mapsto A_a$, and two such functions that differ at an $a$ with $A_a\ne A'_a$ give different names, since then either $A_a\setminus A'_a$ or $A'_a\setminus A_a$ contains some $p$ and $\langle\check a,p\rangle$ lies in exactly one of the two names; by step 1.2 every antichain has cardinality at most $\kappa$, so there are at most $\lvert P^{\le\kappa}\rvert^{\kappa}=F(\kappa)^{\kappa}=F(\kappa)$ antichains by steps 3.1 and 1.1, and at most $F(\kappa)^{\kappa}=F(\kappa)$ such coding functions by step 1.1. The exponent laws and products used are those of [F6], which hold under the Axiom of Choice [F8]. [F5, F6, F8, step 1.1, step 1.2, step 3.1]

5.1 Steps 3.1 and 4.1 give $\lvert P^{\le\kappa}\rvert=F(\kappa)$ and at most $F(\kappa)$ nice $P^{\le\kappa}$-names for subsets of $\kappa$, which is the statement. ∎ [step 3.1, step 4.1]
