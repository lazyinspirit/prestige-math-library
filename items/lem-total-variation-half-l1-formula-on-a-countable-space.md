---
id: lem-total-variation-half-l1-formula-on-a-countable-space
kind: lemma
title: "Half-$\\ell^1$ formula for total variation on a countable space"
status: draft
origin: pipeline
landmark: false
deps:
  - def-total-variation-distance-for-probability-laws
  - thm-measures-on-countable-discrete-spaces-are-weighted-dirac-sums
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "Levin–Peres–Wilmer, Markov Chains and Mixing Times, second edition, Proposition 4.2 and Appendix C.1"
      url: https://pages.uoregon.edu/dlevin/MARKOV/mcmt2e.pdf
    - title: "Aldous–Chewi, Probability Theory, Lectures 13–15"
      url: https://www.stat.berkeley.edu/~aldous/205B/chewi_notes.pdf
---

## Statement

Let $E$ be an at most countable set equipped with the power-set
$\sigma$-algebra $2^E$, and let $\mu,\nu$ be probability laws on $E$
([[def-total-variation-distance-for-probability-laws]]). Then

$$\lVert\mu-\nu\rVert_{\mathrm{TV}}=\frac12\sum_{x\in E}\bigl|\mu(x)-\nu(x)\bigr| ,$$

where $\mu(x),\nu(x)$ denote the singleton masses and the series on the right
is a series of nonnegative numbers in $[0,+\infty]$. The value is finite; it is
$0$ exactly when $\mu=\nu$. The supremum defining the total variation distance
is attained at the event $A_+=\{x\in E:\mu(x)>\nu(x)\}$.

## Facts & Assumptions

**Given:** An at most countable set $E$ with the power-set $\sigma$-algebra and probability laws $\mu,\nu$ on $E$.

[F1] $\lVert\mu-\nu\rVert_{\mathrm{TV}}:=\sup_{A\in 2^E}|\mu(A)-\nu(A)|$; for every event the difference is a real number in $[-1,1]$, so the supremum lies in $[0,1]$ and carries no factor $\tfrac12$. ([[def-total-variation-distance-for-probability-laws]])

[F2] Every measure on an at most countable discrete space is its weighted sum of Dirac masses: $\mu(A)=\sum_{x\in A}\mu(\{x\})$ for every $A\subseteq E$, and $\sum_{x\in E}\mu(\{x\})=\mu(E)$; for probability laws the total mass is one. ([[thm-measures-on-countable-discrete-spaces-are-weighted-dirac-sums]])

## Proof

**Given:** An at most countable set $E$ with the power-set $\sigma$-algebra and probability laws $\mu,\nu$ on $E$.

**Proof technique:** split the signed mass difference into its positive and negative parts, compare every event against them, and exhibit an attaining event.

1.1 Put $d(x):=\mu(x)-\nu(x)$ for $x\in E$. Each $d(x)$ is a real number, and $\sum_{x\in E}|d(x)|\le\sum_{x\in E}\mu(x)+\sum_{x\in E}\nu(x)=1+1=2$ by the triangle inequality and [F2], so the family $(d(x))_{x\in E}$ is absolutely summable and $\sum_{x\in E}d(x)=\mu(E)-\nu(E)=1-1=0$. [F1, F2, given]

2.1 Define $P:=\sum_{x:d(x)>0}d(x)$ and $N:=\sum_{x:d(x)<0}\bigl(-d(x)\bigr)$. Both are sums of nonnegative terms dominated by $\sum_x|d(x)|<\infty$, hence finite, and $\sum_{x\in E}d(x)=P-N$ while $\sum_{x\in E}|d(x)|=P+N$; by step 1.1, $P-N=0$, so $P=N=\tfrac12\sum_{x\in E}|d(x)|$. [step 1.1, given]

3.1 Let $A\subseteq E$. Since the family $(d(x))$ is absolutely summable, $\sum_{x\in A}d(x)=\sum_{x\in A,\,d(x)>0}d(x)+\sum_{x\in A,\,d(x)<0}d(x)$ is a real number equal to $\mu(A)-\nu(A)$ by [F2], and its positive part is at most $P$ while its negative part has absolute value at most $N$: restricting a sum of nonnegative terms to a subset cannot increase it. Hence $\mu(A)-\nu(A)\le P$ and $\nu(A)-\mu(A)\le N=P$, so $|\mu(A)-\nu(A)|\le P$. [F2, step 2.1, given]

4.1 For $A_+:=\{x\in E:d(x)>0\}$ one has $\mu(A_+)-\nu(A_+)=\sum_{x\in A_+}d(x)=P$, so the supremum defining the distance is at least $P$; together with step 3.1 the supremum is exactly $P=\tfrac12\sum_{x\in E}|d(x)|$, which is the asserted identity. [F1, step 2.1, step 3.1, given]

5.1 Boundary and axiom cases: if $E\subseteq\{x\}$ with a single point then $\mu=\nu$ on it by total mass one, and both sides of the identity are $0$; an empty $E$ carries no probability law, and the statement is then vacuous; when $\mu=\nu$ one has $d\equiv0$, $P=N=0$, and the event $A_+$ is empty; the series is bounded by $2$ throughout, so no infinite value arises and no subtraction of infinite quantities is performed; and no object is selected in steps 1.1–4.1 beyond the determined sets $\{d>0\}$, $\{d<0\}$ and $\{d>0\}$, so no choice principle is used and the identity is an equality, not an iff. [F1, F2, step 1.1, step 2.1, step 3.1, step 4.1, given] ∎
