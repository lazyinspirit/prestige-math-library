---
id: lem-good-clopen-family-for-summable-slaloms
kind: lemma
title: A good clopen family for summable slaloms
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-product-topology]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Tomek Bartoszyński, Invariants of Measure and Category, Lemma 3.15, printed pp.10–11"
      url: "https://arxiv.org/pdf/math/9910015"
verification:
  precheck: pending
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Statement

In Cantor space $2^{\omega}$ there are fixed, countably indexed clopen sets
$S^n_m$ ($n,m\in\omega$) and a sequence $(U_n)_{n\in\omega}$ in which every
nonempty basic cylinder occurs infinitely often, with these properties:

1. $S^n_m\cap U_n\ne\varnothing$ for every $n,m$;
2. for every dense open $D\subseteq2^{\omega}$ and every $n$, some
   $S^n_m\subseteq D$;
3. whenever $J\subseteq\omega$ has $|J|\le 2^n$, the intersection
   $U_n\cap\bigcap_{m\in J}S^n_m$ is nonempty.

The array has a fixed countable clopen code, and the construction uses no
choice beyond finite, explicit least-index searches.

## Facts & Assumptions

**Given:** Cantor space with its finite binary cylinder base.

[F1] Finite unions and intersections of cylinders are clopen; every nonempty
open set contains a cylinder. ([[def-product-topology]])

## Proof

**Proof technique:** direct construction and finite diagonal argument.

1.1 Enumerate all clopen subsets of $2^{\omega}$ as $(C_l)_{l\in\omega}$, with every clopen occurring infinitely often. Such sets are finite unions of basic cylinders: compactness of $2^{\omega}$ gives a finite subcover by cylinders, and compactness follows directly from the finite-branching binary tree. Fix a repeating enumeration $(U_n)$ of the nonempty basic cylinders. All enumerations can be obtained by listing finite binary words and finite lists, so their codes are fixed without a choice. [F1]
2.1 Fix $n$. For each $k$, let $A_k$ consist of indices $l>k$ such that for every $I\subseteq\{0,\ldots,k\}$, $$U_n\cap\bigcap_{i\in I}C_i\ne\varnothing \quad\Longrightarrow\quad U_n\cap C_l\cap\bigcap_{i\in I}C_i\ne\varnothing.$$ The empty $I$ is included. These are finite tests on clopen codes, so each $A_k$ is a fixed, decidable set of indices. [step 1.1]
3.1 If $D$ is dense open, then $A_k$ contains arbitrarily large indices $l$ with $C_l\subseteq D$. Indeed, there are only finitely many nonempty clopen sets $W_I=U_n\cap\bigcap_{i\in I}C_i$ in step 2.1. For each such $I$ choose the least coded basic cylinder $B_I\subseteq D\cap W_I$. Their finite union $C$ is clopen, lies in $D$, and meets every nonempty $W_I$. The repeating clopen enumeration lists $C$ beyond every prescribed $k$. Thus the required $l$ exists, and all choices were finite least-index choices. [step 2.1, F1]
4.1 Put $q=2^n$. List, with repetitions if necessary, every clopen set of the form $C_{m_0}\cup\cdots\cup C_{m_q}$ where $U_n\cap C_{m_0}\ne\varnothing$ and $m_{i+1}\in A_{m_i}$ for $i<q$; call the resulting enumeration $(S^n_m)_m$. There are infinitely many such tuples by step 3.1 with $D=2^{\omega}$. Every listed union meets $U_n$ through its first term. For a dense open $D$, choose $m_0$ with $C_{m_0}\subseteq D\cap U_n$, then recursively choose $m_{i+1}\in A_{m_i}$ with $C_{m_{i+1}}\subseteq D$ by step 3.1. The resulting $S^n_m$ lies in $D$. [step 3.1]
5.1 Take $1\le r\le q$ listed unions, writing the $a$-th one as $V_a=\bigcup_{i=0}^q C_{m_i^a}$ with $m_{i+1}^a\in A_{m_i^a}$. Select distinct rows $a_0,\ldots,a_{r-1}$ as follows: at stage $j$, among rows not yet selected, choose one with the least $j$-th index $m_j^a$. We claim by induction that $$U_n\cap\bigcap_{i\le j}C_{m_i^{a_i}}\ne\varnothing \qquad(j<r).$$ At $j=0$ this is the condition on $m_0^{a_0}$. For $j>0$, row $a_j$ was available at every earlier stage $i<j$, so $m_i^{a_i}\le m_i^{a_j}\le m_{j-1}^{a_j}$. Hence all previously selected indices belong to $\{0,\ldots,m_{j-1}^{a_j}\}$. As $m_j^{a_j}\in A_{m_{j-1}^{a_j}}$, the defining implication of step 2.1 preserves the nonempty intersection when $C_{m_j^{a_j}}$ is added. [step 2.1, step 4.1]
6.1 Each selected diagonal clopen $C_{m_j^{a_j}}$ lies in its row union $V_{a_j}$. Thus step 5.1 gives $U_n\cap\bigcap_{a<r}V_a\ne\varnothing$ for $1\le r\le q$; the empty intersection is $U_n$ and is nonempty. Removing repeated members from a family of at most $q$ sets only reduces $r$, so this proves the third property. The first two properties were proved in step 4.1. ∎ [step 4.1, step 5.1]
