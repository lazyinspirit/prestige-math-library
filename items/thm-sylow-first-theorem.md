---
id: thm-sylow-first-theorem
kind: theorem
title: "Sylow I: every finite group has a Sylow $p$-subgroup"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-sylow-p-subgroup, lem-wielandt-sylow-binomial-valuation, thm-orbit-stabilizer, cor-orbit-stabilizer-cardinality, thm-lagrange, thm-strong-induction, thm-orbits-partition-the-set]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Amin Idelhaj, The Sylow Theorems and Their Applications, Section 3, Lemma 3.6 and the proof of Sylow's first theorem"
      url: "https://math.uchicago.edu/~may/REU2016/REUPapers/Idelhaj.pdf"
    - title: "Keith Conrad, The Sylow Theorems, Section 2, Proof of Sylow I"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowpf.pdf"
pipeline_run: null
---

## Statement

Let $G$ be finite, let $p$ be prime, and write $|G|=p^am$ with $p\nmid m$. Then $G$ has a subgroup of order $p^a$, hence a Sylow $p$-subgroup ([[def-sylow-p-subgroup]]). See [[def-sylow-p-subgroup]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] Let $G$ be a finite group, let $p$ be prime, and write $|G|=p^a m$ with $a\in\mathbb N$ and $p\nmid m$. A subgroup $P\le G$ is a Sylow $p$-subgroup when $|P|=p^a$. Equivalently, its order is the largest power of $p$ dividing $|G|$. This is a property of a subgroup and does not presume that such a subgroup exists; existence is proved in thm-sylow-first-theorem. ([[def-sylow-p-subgroup]]).

[L2] Let $p$ be prime and let $a,m\in\mathbb N$ satisfy $p\nmid m$. Then $$v_p\!\left(\binom{p^am}{p^a}\right)=0.$$ The valuation is applied only to nonzero integers. ([[lem-wielandt-sylow-binomial-valuation]]).

[L3] Let $G$ act on $X$ and let $x\in X$. The rule $$\Phi:G/G_x\longrightarrow G\cdot x,\qquad \Phi(gG_x)=g\cdot x,$$ is well-defined and bijective. Thus every orbit is naturally in bijection with the left cosets of its stabilizer. ([[thm-orbit-stabilizer]]).

[L4] For an action of $G$ on $X$ and $x\in X$, $$|G\cdot x|=[G:G_x]$$ whenever either side is finite. In particular, if $G$ is finite, then $$|G|=|G_x|\,|G\cdot x|.$$. ([[cor-orbit-stabilizer-cardinality]]).

[L5] Let $G$ be a finite group and $H\le G$. Then $$|G|=[G:H]\,|H|.$$ Consequently, under the canonical embedding $\iota:\mathbb N\to\mathbb Z$, $|H|$ divides $|G|$. ([[thm-lagrange]]).

[L6] Let $P$ be a property of naturals such that for every $n \in \mathbb{N}$, if $P(m)$ holds for all $m < n$ then $P(n)$. Then $P(n)$ holds for all $n \in \mathbb{N}$. (At $n = 0$ the hypothesis is vacuous, so $P(0)$ is forced.). ([[thm-strong-induction]]).

[L7] For a left action of $G$ on $X$, the relation $x\sim y$ defined by $y=g\cdot x$ for some $g\in G$ is an equivalence relation whose class at $x$ is $G\cdot x$, and the distinct orbits partition $X$ ([[thm-orbits-partition-the-set]]).

## Proof

**Proof technique:** direct.

1.1 Argue by strong induction [L6] on $|G|$, the induction statement being that every finite group of order $n$ has a subgroup of order $p^a$ whenever $n=p^am$ with $p\nmid m$. Let $\Omega$ be the set of subsets of $G$ of size $p^a$ and let $G$ act on $\Omega$ by left translation, $g\cdot A:=gA$; this is an action, and $|gA|=|A|$ because left translation is a bijection of $G$. Counting subsets gives $|\Omega|=\binom{p^am}{p^a}$, so [L2] yields $v_p(|\Omega|)=0$, that is $p\nmid|\Omega|$. [L2, L6, given, algebra]

2.1 By [L7] the orbits partition $\Omega$, so $|\Omega|$ is the sum of the orbit sizes. Were $p$ to divide every orbit size it would divide $|\Omega|$, so some orbit $\mathcal O$ has $p\nmid|\mathcal O|$. Choose $A\in\mathcal O$ and put $H=G_A=\{g\in G:gA=A\}$. The bijection of [L3] between $G/H$ and $\mathcal O$ gives $|\mathcal O|=[G:H]$, so [L4] gives $p^am=|G|=|H|\,|\mathcal O|$; since $p\nmid|\mathcal O|$, the full power $p^a$ divides $|H|$. [step 1.1, L3, L4, L7, choose]

3.1 Suppose $H=G$. Then $gA=A$ for every $g\in G$, so for any $x\in A$ the set $A$ contains $Gx=G$, whence $A=G$ and $p^a=|A|=|G|=p^am$. Thus $m=1$ and $G$ itself is a subgroup of order $p^a$. [step 2.1, given, algebra]

3.2 Suppose instead $H\ne G$, so $|H|<|G|$. By [L5], $|H|$ divides $p^am$; writing $|H|=p^bm'$ with $p\nmid m'$, step 2.1 gives $b\ge a$, while $p^b\mid p^am$ with $p\nmid m$ gives $b\le a$. Hence $|H|=p^am'$ with $p\nmid m'$, and the induction hypothesis applied to $H$ supplies a subgroup of $H$ of order $p^a$, which is a subgroup of $G$. [step 2.1, L5, L6, given, algebra]

4.1 Steps 3.1 and 3.2 are exhaustive, so $G$ has a subgroup $P$ of order $p^a$, and $|P|$ is the largest power of $p$ dividing $|G|$, so $P$ is a Sylow $p$-subgroup by [L1]. At $a=0$ the argument returns the trivial subgroup, of order $p^0=1$; for the trivial group $|G|=1$ this is $G$ itself, and $m=1$ is the case settled in step 3.1. [L1, step 3.1, step 3.2, given] ∎
