---
id: thm-existence-of-a-maximal-orthonormal-family
kind: theorem
title: Existence of a maximal orthonormal family, and maximality as completeness
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-zorn, thm-parseval-equivalences-for-a-complete-orthonormal-family, def-axiom-of-choice, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-orthogonality-and-orthogonal-complement, thm-cauchy-schwarz-in-an-inner-product-space, def-real-and-complex-inner-product-space]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §2.1, p.52, Theorem 2.7"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Andrew Lin and Casey Rodriguez, MIT 18.102 Introduction to Functional Analysis, printed pp.72–80"
      url: "https://live.ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf"
verification:
  audited: 2026-09-22
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $H$ be a real or
complex Hilbert space and let an orthonormal set in $H$ be one that is
orthonormal as an indexed family when indexed by itself
([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]). Then:

1. $H$ contains an orthonormal set that is maximal under inclusion, that is, an
   orthonormal set contained in no strictly larger orthonormal set;
2. an orthonormal set $S\subseteq H$ is maximal if and only if it is complete,
   that is, if and only if its closed linear span is $H$;
3. consequently every Hilbert space has a complete orthonormal family, and
   therefore a Hilbert basis, and every orthonormal family whose image is
   maximal is complete.

**The hypothesis is full AC.** It is used directly through Zorn's lemma and
also supplies the $\mathrm{AC}_\omega$ hypothesis of the Parseval-equivalence
supplier used in the second claim.

## Facts & Assumptions

[A1] Assuming AC, a nonempty poset in which every chain has an upper bound has a maximal element ([[thm-zorn]], [[def-axiom-of-choice]]).

[A2] A set $S$ is orthonormal when $\|s\|=1$ for all $s\in S$ and $\langle s,t\rangle=0$ for distinct $s,t\in S$; the union of a chain of orthonormal sets is orthonormal, because two elements of the union lie in members of the chain, one of which contains both ([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]).

[A3] For an orthonormal family in a Hilbert space, completeness, the vanishing of the orthogonal complement of its span, and Parseval's identity are equivalent, and this uses Countable Choice, hence AC ([[thm-parseval-equivalences-for-a-complete-orthonormal-family]]).

[A4] $S^\perp=\{v : \langle v,s\rangle=0\text{ for all }s\in S\}$ is a linear subspace, and $z\in S^\perp$ with $z\ne0$ normalises to $z/\|z\|$, a unit vector orthogonal to every element of $S$ ([[def-orthogonality-and-orthogonal-complement]], [[def-real-and-complex-inner-product-space]]).

[A5] If $z$ is orthogonal to every element of $S$, then $z$ is orthogonal to every element of the closed linear span of $S$, since $|\langle z,v\rangle|\le\|z\|\|v\|$ passes the vanishing to limits ([[thm-cauchy-schwarz-in-an-inner-product-space]]).

## Proof

**Proof technique:** direct.

**Given:** The Axiom of Choice and a real or complex Hilbert space $H$.

1.1 The family of orthonormal subsets of $H$, ordered by inclusion, is a nonempty poset: the empty set is orthonormal. Every chain of orthonormal sets has an upper bound, namely its union, which is orthonormal by [A2] and contains each member of the chain. [A2]

1.2 **Complete orthonormal sets are maximal.** Suppose the closed linear span of an orthonormal set $S$ is $H$ and let $T\supseteq S$ be orthonormal. If $t\in T\setminus S$, then $t$ is orthogonal to every element of $S$ because $T$ is orthonormal; the vector $t$ also lies in the closed linear span of $S$, so $t$ is orthogonal to itself by [A5], whence $\|t\|^2=\langle t,t\rangle=0$ and $t=0$, contradicting $\|t\|=1$. Thus no orthonormal set strictly contains $S$, so $S$ is maximal. [A4, A5]

1.3 **Non-complete orthonormal sets are not maximal.** Suppose the closed linear span of an orthonormal set $S$, indexed by itself, is not $H$. By the equivalence of completeness with the vanishing of the orthogonal complement, $S^\perp\ne\{0\}$, so there is $z\ne0$ orthogonal to every element of $S$; then $u:=z/\|z\|$ has $\|u\|=1$ and is orthogonal to every element of $S$, so $S\cup\{u\}$ is orthonormal and strictly larger than $S$. Hence $S$ is not maximal. [A3, A4]

2.1 By Zorn's lemma applied to the poset of orthonormal subsets, whose chains are bounded by step 1.1, there is an orthonormal set $S_0\subseteq H$ maximal under inclusion, which is claim 1. [step 1.1, A1]

3.1 Steps 1.2 and 1.3 prove that an orthonormal set is maximal exactly when it is complete, which is claim 2; the maximal set $S_0$ is then complete. Indexing a complete orthonormal set by itself gives a complete orthonormal family and hence a Hilbert basis, and an orthonormal family whose image is maximal is complete by claim 2, which is claim 3. [step 1.2, step 1.3, step 2.1] ∎
