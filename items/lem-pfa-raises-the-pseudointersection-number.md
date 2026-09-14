---
id: lem-pfa-raises-the-pseudointersection-number
kind: lemma
title: "PFA implies the pseudointersection number exceeds omega-one"
status: draft
origin: pipeline
deps: [def-p-ideals-pid-pseudointersection-number-and-s-spaces, cor-pfa-implies-ma-aleph-one-and-suslin-hypothesis, def-martins-axiom, def-axiom-of-choice]
justified_by: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Todorcevic, Forcing with a coherent Souslin tree, Section 2 and discussion preceding Section 7"
      url: https://www.math.toronto.edu/~stevo/todorcevic_chain_cond.pdf
---

## Statement

In ZFC plus PFA, $\mathfrak p>\omega_1$: every family of at most
$\omega_1$ infinite subsets of $\omega$ with the strong finite intersection
property has an infinite pseudointersection.

## Facts & Assumptions

**Given:** PFA and a family $\mathcal A\subseteq[\omega]^\omega$ of cardinality at most $\omega_1$ with the strong finite intersection property.

[F1] The definitions of strong finite intersection, pseudointersection, and $\mathfrak p$ use modulo-finite containment and require the witness to be infinite. [[def-p-ideals-pid-pseudointersection-number-and-s-spaces]]

[F2] PFA implies $\mathrm{MA}(\aleph_1)$. [[cor-pfa-implies-ma-aleph-one-and-suslin-hypothesis]]

[F3] $\mathrm{MA}(\aleph_1)$ applies to ccc partial orders and at most $\omega_1$ dense sets with the stronger-is-smaller filter convention. [[def-martins-axiom]]

[A1] AC supplies an omega-one indexing when needed and is the ambient choice principle in the stated ZFC result. [[def-axiom-of-choice]]

## Proof

1.1 Let $P$ consist of pairs $(s,F)$ with $s\in[\omega]^{<\omega}$ and $F\in[\mathcal A]^{<\omega}$. Put $(t,G)\leq(s,F)$ exactly when $s\subseteq t$, $F\subseteq G$, and $t\setminus s\subseteq\bigcap F$, taking $\bigcap\varnothing=\omega$. For a fixed finite stem $s$, every finite collection of conditions with that stem has the common extension whose side set is the union of their side sets. Since there are countably many finite subsets of $\omega$, $P$ is sigma-centered and therefore ccc. [F1, A1, Given]

2.1 For each $a\in\mathcal A$, the set $E_a=\{(s,F):a\in F\}$ is dense, because adding $a$ to $F$ changes no stem. For each $n<\omega$, let $D_n=\{(s,F):(\exists k\in s)\ k\geq n\}$. Given $(s,F)$ outside $D_n$, the strong finite intersection property makes $\bigcap F$ infinite, so choose $k\in\bigcap F$ with $k\geq n$ and extend the stem by $k$; hence $D_n$ is dense. The family of all $E_a$ and $D_n$ has cardinality at most $\omega_1$. [F1, A1, step 1.1]

3.1 By F2 and F3, choose a filter $G\subseteq P$ meeting every set from step 2.1, and put $b=\bigcup\{s:(s,F)\in G\}$. Meeting all $D_n$ makes $b$ unbounded in $\omega$, hence infinite. Fix $a\in\mathcal A$ and choose $(s,F)\in G\cap E_a$. For any $(t,H)\in G$, directedness gives $(u,K)\in G$ below both; the order relative to $(s,F)$ gives $u\setminus s\subseteq\bigcap F\subseteq a$, and $t\subseteq u$. Thus $t\setminus a\subseteq s$, and after taking the union, $b\setminus a\subseteq s$ is finite. Therefore $b\subseteq^*a$ for every $a\in\mathcal A$, so $b$ is an infinite pseudointersection. [F1, F2, F3, A1, step 2.1]

4.1 Since every at-most-$\omega_1$ strong-finite-intersection family has such a pseudointersection, no family witnessing the definition of $\mathfrak p$ has cardinality at most $\omega_1$. By F1, $\mathfrak p>\omega_1$. Empty and finite $\mathcal A$ are included: the same forcing works, and for $\mathcal A=\varnothing$ the constructed $b$ is simply infinite. [F1, step 3.1] ∎
