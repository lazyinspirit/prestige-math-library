---
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading, followed by recorded Step 7 current repair argument acceptance. The repair receipt records local author review; no independent repair audit is claimed. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-5.md"
      - "research/frontier-38-owner-30-alpha-batch-5-5a.md"
      - "research/frontier-38-owner-30-step7-v2/step7-v2-initial-r1-u5.json"
    content_sha256: "7f04697e80e8a7032ca19844c3067a7838342129f21d178667a52564508d3478"
id: lem-dyadic-cubes-all-generations-partition-and-nesting
kind: lemma
title: "All-generation dyadic cubes: partition, volume and nesting"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-countable-choice, def-dyadic-cube-in-rn-all-generations, def-finite-sum, def-half-open-box, def-integer-power, def-integers, lem-finite-sum-laws, lem-integer-part, lem-nat-embeds-int, lem-power-laws, thm-int-ordered-ring, thm-lebesgue-measure-of-a-box-of-every-kind]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, third edition"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "§5.3.1, printed p. 355: dyadic cubes of all integer generations are disjoint or nested"
    - title: "Juha Kinnunen, Harmonic Analysis"
      url: "https://math.aalto.fi/~jkkinnunen/files/harmonic_analysis.pdf"
      locator: "ch. 1 §1.2, printed pp. 9–10: $C_k$ covers $R^n$, pairwise disjointness, and properties (2)–(5) of Remark 1.1"
---

## Statement

Assume Countable Choice ([[def-countable-choice]]).

Let $n\ge1$ and use the all-generations dyadic cubes of
[[def-dyadic-cube-in-rn-all-generations]]. Then:

1. For every $k\in\mathbb Z$ the generation-$k$ dyadic cubes are pairwise
   disjoint and cover $\mathbb R^n$, and each has volume
   $|Q_{k,m}|=2^{-kn}$.
2. Every dyadic cube $Q$ of generation $k$ has, for each $j<k$, exactly one
   ancestor dyadic cube of generation $j$ containing $Q$; in particular the
   parent of $Q$ has generation $k-1$ and volume $2^n|Q|$.
3. If dyadic cubes $Q,Q'$ of generations $k\le k'$ intersect, then
   $Q'\subseteq Q$; consequently two dyadic cubes are either disjoint or one
   contains the other, and cubes of one generation are equal or disjoint.

## Facts & Assumptions

**Given:** An integer $n\ge1$; dyadic cubes $Q=Q_{k,m}$ and $Q'=Q_{k',m'}$ of generations $k\le k'$; an ancestor generation $j<k$; Countable Choice ([[def-countable-choice]]) is assumed only in claim 1, for the identification of the box volume with Lebesgue measure.

[L1] $Q_{k,m}=\{x\in\mathbb R^n:m_i2^{-k}<x_i\le(m_i+1)2^{-k}\text{ for every }i<n\}$ with $k\in\mathbb Z$, the side length is $2^{-k}$, and every dyadic cube is nonempty ([[def-dyadic-cube-in-rn-all-generations]]).

[L2] $B(a,b)=\{x\in\mathbb R^n:a_i<x_i\le b_i\text{ for every }i<n\}$ for real parameters; when $a_i<b_i$ for every $i<n$, its box volume is $\operatorname{vol}(B)=\prod_{i<n}(b_i-a_i)$. Empty boxes have volume zero ([[def-half-open-box]]).

[F1] For every real $t$ there is exactly one integer $m$ with $m\le t<m+1$ ([[lem-integer-part]]).

[F2] For $a\ne0$ and integers $r,s$ one has $a^{r+s}=a^ra^s$ and $(a^r)^s=a^{rs}$; in particular $2^k2^{-k}=1$ and $2^k>0$ for every $k\in\mathbb Z$ ([[lem-power-laws]], [[def-integer-power]]).

[F3] The order on $\mathbb Z$ is total and compatible with addition, and $x\le y$ implies $x+z\le y+z$ ([[thm-int-ordered-ring]]); the canonical embedding $\mathbb N\to\mathbb Z$ is injective, preserves the order, and has image exactly the nonnegative integers, so every positive integer is the image of a unique natural number $\ge1$ ([[lem-nat-embeds-int]], [[def-integers]]).

[F4] Finite products are defined by the recursion $\Pi_0=1$, $\Pi_{\sigma(n)}=\Pi_n\cdot a_n$, and $\prod_{i<n}(a_ib_i)=(\prod_{i<n}a_i)(\prod_{i<n}b_i)$ ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[F5] Every half-open box $B(a,b)$ with real parameters satisfying $a_i\le b_i$ for every $i<n$ is Lebesgue measurable with $\lambda_n(B(a,b))=\prod_{i<n}(b_i-a_i)$ ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

## Proof

**Proof technique:** direct.

1.1 For a real $t$ there is exactly one integer $m$ with $m<t\le m+1$: applying [F1] to $-t$ gives a unique $p$ with $p\le-t<p+1$, and $m:=-p-1$ satisfies $m<t\le m+1$; uniqueness follows because any integer $m'$ with $m'<t\le m'+1$ gives $-m'-1\le-t<-m'$, so $-m'-1=p$ and $m'=m$. [F1, F3, algebra]

1.2 For $k\in\mathbb Z$ and real $x_i$, the condition $m_i2^{-k}<x_i\le(m_i+1)2^{-k}$ is equivalent to $m_i<2^kx_i\le m_i+1$, because $2^k>0$ and $2^k\cdot2^{-k}=1$ by [F2]; multiplying the chain by $2^k$ preserves the two inequalities. [F2, given, algebra]

1.3 For integers $u<v$ one has $u+1\le v$: by [F3] the positive integer $v-u$ is the image of a natural number $d\ne0$, and every nonzero natural number satisfies $1\le d$ (its predecessor is a natural number), so $v-u\ge1$. Consequently, if integers $A<B$ and $C$, and a real $t$, satisfy $A<t\le B$ and $C<t\le C+1$, then $A\le C$ and $C+1\le B$: if $C<A$ then $C+1\le A$ and $t\le C+1\le A<t$, a contradiction, and if $B<C+1$ then $B\le C<t$, contradicting $t\le B$. [F3, algebra]

1.4 The box $Q_{k,m}$ has Lebesgue measure $|Q_{k,m}|=\prod_{i<n}\bigl((m_i+1)2^{-k}-m_i2^{-k}\bigr)=\prod_{i<n}2^{-k}=(2^{-k})^n=2^{-kn}$, the last two equalities by the finite-product recursion and the power laws; here $|Q|$ denotes Lebesgue measure, identified with the box volume by [F5]. [L2, F2, F4, F5, algebra]

2.1 Given $x\in\mathbb R^n$, step 1.1 applied in each coordinate to the real $2^kx_i$ produces exactly one integer $m_i$ with $m_i<2^kx_i\le m_i+1$; by step 1.2 the function $m$ is the unique index of a generation-$k$ dyadic cube containing $x$. Hence the generation-$k$ cubes cover $\mathbb R^n$ and no two distinct ones share a point, and by step 1.4 each has volume $2^{-kn}$. [L1, step 1.1, step 1.2, step 1.4]

2.2 Put $d:=k'-k\ge0$ and $M_i:=m_i2^{d}\in\mathbb Z$; by [F2], $m_i2^{-k}=M_i2^{-k'}$ and $(m_i+1)2^{-k}=(M_i+2^{d})2^{-k'}$, so in coordinate $i$ the cube $Q$ is cut out by $M_i2^{-k'}<x_i\le(M_i+2^{d})2^{-k'}$ while $Q'$ is cut out by $m_i'2^{-k'}<x_i\le(m_i'+1)2^{-k'}$. If $x\in Q\cap Q'$, step 1.3 with $A:=M_i$, $B:=M_i+2^{d}$, $C:=m_i'$ and $t:=2^{k'}x_i$ gives $M_i\le m_i'$ and $m_i'+1\le M_i+2^{d}$ in every coordinate, so $Q'\subseteq Q$. [L1, L2, F2, step 1.3, algebra]

3.1 Fix $j<k$ and take the upper corner $x_i=(m_i+1)2^{-k}$ of $Q$; the half-open convention places $x$ in $Q$. By step 2.1 there is exactly one generation-$j$ cube $P$ containing $x$. Since $P$ and $Q$ intersect and $j<k$, step 2.2 gives $Q\subseteq P$. If $P'$ is another generation-$j$ cube containing $Q$, it contains $x$, hence $P'=P$ by step 2.1. This proves unique ancestry without any erroneous scaling of the integer index. For the parent $j=k-1$, step 1.4 gives $|P|=2^{-(k-1)n}=2^n2^{-kn}=2^n|Q|$. [L1, F2, step 1.4, step 2.1, step 2.2, algebra]

4.1 Claim 1 is steps 2.1 and 1.4, claim 2 is step 3.1, and claim 3 is step 2.2 together with its same-generation special case; this proves the lemma. [step 2.1, step 2.2, step 3.1] ∎
