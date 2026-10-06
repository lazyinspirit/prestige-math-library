---
id: lem-symmetric-group-conjugation-to-inverse-within-the-preceding-group
kind: lemma
title: "Every element of $S_n$ is inverted by an involution of $S_{n-1}$"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [lem-conjugating-a-cycle-relabels-its-entries, thm-disjoint-cycle-decomposition, def-permutation-support-disjoint-cycles-and-cycle-type, def-symmetric-group, def-partition-young-diagram-and-conjugate-partition, lem-disjoint-cycles-commute]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Okounkov-Vershik, A New Approach to the Representation Theory of the Symmetric Groups, Selecta Math. (N.S.) 2 (1996) 581-605; complete arXiv repost math/0503040, Lemma 2.2, printed p. 9; its deletion argument is replaced by the explicit cycle-reversal proof below"
      url: "https://arxiv.org/pdf/math/0503040"
    - title: "K. Conrad, Conjugacy Classes (cycle conjugation), as cited by the published cycle-conjugation lemma"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/conjclass.pdf"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-19.md"
      - "research/frontier-38-owner-30-alpha-batch-19-5a.md"
      - "research/frontier-38-owner-30-step5-hash-19-post-5a.json"
    content_sha256: "ade888a0d0332f4d2f563af917d059832e7d2d384167a9b17ac6bc33360ee0ed"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
---

## Statement

Let $n\ge1$, let $S_{n-1}\le S_n$ be the stabilizer of $n$, and let
$g\in S_n$. There is $h\in S_{n-1}$ with $h^2=1$ (the identity is allowed)
and $hgh^{-1}=g^{-1}$; here such a self-inverse permutation is called an involution. In
particular every element of $S_n$ is conjugate to its inverse by an element of
$S_{n-1}$.

## Facts & Assumptions

**Given:** An integer $n\ge1$ and a permutation $g\in S_n$, where $S_n=\operatorname{Sym}(\{1,\dots,n\})$ ([[def-partition-young-diagram-and-conjugate-partition]]).

[F1] Every permutation of a finite set is a product of pairwise disjoint cycles, uniquely up to reordering the factors and cyclically rotating the entries within each cycle; the identity has the empty such product ([[thm-disjoint-cycle-decomposition]]).

[F2] A cycle $(a_0\,a_1\,\dots\,a_{k-1})$ has support $\{a_0,\dots,a_{k-1}\}$, sends $a_i$ to $a_{i+1}$ for $i<k-1$ and $a_{k-1}$ to $a_0$, and fixes every point outside its support; cycles with disjoint supports are disjoint, and a cycle may be written starting at any of its entries ([[def-permutation-support-disjoint-cycles-and-cycle-type]], [[def-symmetric-group]]).

[F3] For every $g\in S_n$ and every cycle $c=(a_1\,a_2\,\dots\,a_k)$ one has $gcg^{-1}=(g(a_1)\,g(a_2)\,\dots\,g(a_k))$ ([[lem-conjugating-a-cycle-relabels-its-entries]]).

[F4] Cycles with disjoint supports commute ([[lem-disjoint-cycles-commute]]).

## Proof

**Proof technique:** explicit construction.

1.1 By [F1] write $g=c_1c_2\cdots c_r$ with the $c_i$ pairwise disjoint cycles of length at least $2$. If $g(n)\ne n$, exactly one factor meets $\{n\}$, say $c_s$; its support is the orbit of $n$ under $g$, and by [F2] we may write $c_s=(n\ a_1\ \dots\ a_{k-1})$ with $k\ge2$ and distinct $a_1,\dots,a_{k-1}\in\{1,\dots,n-1\}$. If $g(n)=n$, no factor meets $\{n\}$; in that case put $k=1$, leave the list $a_1,\dots,a_{k-1}$ empty and drop the discussion of $c_s$. [F1, F2]

2.1 Define $h\in\operatorname{Sym}(\{1,\dots,n\})$ by the following rules on the pairwise disjoint sets listed so far: $h(n):=n$; $h(a_i):=a_{k-i}$ for $1\le i\le k-1$ when $c_s$ exists; and for each remaining factor $c_i=(b_1\ \dots\ b_m)$ of the decomposition, $h(b_j):=b_{m+1-j}$ for $1\le j\le m$; every element of $\{1,\dots,n\}$ not yet mentioned is fixed by $h$. The listed points are distinct, so $h$ is a well-defined bijection: each rule pairs the listed points in pairs, possibly fixing a middle point, and in every case applying the rule twice returns the point. Hence $h$ is an involution; it fixes $n$ and every point outside $\{1,\dots,n-1\}$, so $h\in S_{n-1}$ and $h^{-1}=h$. [step 1.1, F1, F2, construct]

3.1 Conjugation by $h$ acts on each factor by [F3]: for $c_s=(n\ a_1\ \dots\ a_{k-1})$ we get $hc_sh^{-1}=(h(n)\ h(a_1)\ \dots\ h(a_{k-1}))=(n\ a_{k-1}\ \dots\ a_1)$, the cycle sending $n$ to $a_{k-1}$, sending $a_i$ to $a_{i-1}$ and sending $a_1$ to $n$, which is exactly $c_s^{-1}$; for every other factor $c_i=(b_1\ \dots\ b_m)$ we get $hc_ih^{-1}=(h(b_1)\ \dots\ h(b_m))=(b_m\ \dots\ b_1)=c_i^{-1}$. [step 2.1, F2, F3, algebra]

4.1 Inserting $h^{-1}h=1$ between consecutive factors gives $hgh^{-1}=(hc_1h^{-1})\cdots(hc_rh^{-1})=c_1^{-1}\cdots c_r^{-1}$ by step 3.1. Reversing a product inverts it, so $c_1^{-1}\cdots c_r^{-1}=(c_r\cdots c_1)^{-1}$; by [F4] the pairwise disjoint factors commute, hence $c_r\cdots c_1=c_1\cdots c_r=g$. Therefore $hgh^{-1}=g^{-1}$ with $h\in S_{n-1}$ an involution, which is the statement. [step 3.1, F4, algebra] ∎

## Remarks

- **The source's shorter argument is incomplete as printed.** The cited source proves the fact by deleting the letter $n$ from $g$ and choosing an element $h\in S_{n-1}$ that conjugates the deletion $g'$ to $g'^{-1}$; it then asserts that such an $h$ realizes $g^{-1}=hgh^{-1}$. That step is not correct for an arbitrary such $h$: for $g=(1\ 2\ 3\ 4)$ and $h=(2\ 3)$ one has $h\,(1\ 2\ 3)\,h^{-1}=(1\ 3\ 2)=(1\ 2\ 3)^{-1}$, while $hgh^{-1}=(1\ 3\ 2\ 4)\ne g^{-1}=(1\ 4\ 3\ 2)$. The construction above chooses the explicit cycle-reversing involution, which does satisfy $hgh^{-1}=g^{-1}$; only that corrected construction is used later, in [[lem-relative-centralizer-for-sn-minus-one-in-sn-is-commutative]].

- **No choice.** For each $g$ the involution $h$ is given by explicit formulas on the finitely many cycles of $g$, so the statement is proved without any selection principle, and the argument is integral and characteristic-free: it uses only the group structure of $S_n$.
