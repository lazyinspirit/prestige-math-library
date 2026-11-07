---
id: lem-monotone-totient-weighted-series-diverges
kind: lemma
title: "A monotone divergent weight remains divergent after totient weighting"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-unit-group-modulo-n-and-euler-totient
  - thm-standard-representatives-modulo-n
  - thm-unit-criterion-modulo-n
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Victor Beresnevich and Sanju Velani, Classical Metric Diophantine Approximation Revisited: the Khintchine–Groshev Theorem, Lemma 5"
      url: "https://arxiv.org/pdf/0811.0809v3"
    - title: "Glyn Harman, Metric Number Theory, Chapter 4"
      url: "https://djvu.online/file/DZdHsCBaK3OrN"
---

## Statement

Let $a_h\ge0$ be a non-increasing sequence. If

$$\sum_{h=1}^{\infty}h\,a_h=\infty,$$

then

$$\sum_{h=1}^{\infty}\varphi(h)a_h=\infty,$$

where $\varphi(h)$ is the number of invertible residue classes modulo $h$.

## Statement references

[Beresnevich and Velani, *Classical Metric Diophantine Approximation Revisited*, Lemma 5](https://arxiv.org/pdf/0811.0809v3)

[Harman, *Metric Number Theory*, Chapter 4](https://djvu.online/file/DZdHsCBaK3OrN)

## Facts & Assumptions

**Given:** A nonnegative non-increasing sequence and the divergent weighted sum in the statement.

[F1] $\varphi(h)$ counts the integers $a$ with $1\le a\le h$ and $\gcd(a,h)=1$. ([[def-unit-group-modulo-n-and-euler-totient]], [[thm-standard-representatives-modulo-n]], [[thm-unit-criterion-modulo-n]])

## Proof




1.1 Let $A(N):=\sum_{h=1}^N\varphi(h)$. By [F1], $A(N)$ counts the pairs of integers $(a,b)$ with $1\le a\le b\le N$ and $\gcd(a,b)=1$. There are $N(N+1)/2$ pairs in total. Every non-coprime pair is divisible in both coordinates by some integer $d\ge2$, so $\displaystyle A(N)\ge\frac{N(N+1)}2-\sum_{d=2}^{N}\frac{\lfloor N/d\rfloor(\lfloor N/d\rfloor+1)}2.$ Using $\lfloor N/d\rfloor\le N/d$, $\sum_{d=2}^{\infty}d^{-2}\le3/4$, and $\sum_{d=2}^N d^{-1}\le1+\log N$, the subtracted sum is at most $3N^2/8+O(N\log N)$. Thus $A(N)\ge N^2/16$ for all sufficiently large $N$. [given, F1, algebra, algebra]

2.1 Finite summation by parts gives $\displaystyle \sum_{h=1}^{N}\varphi(h)a_h=A(N)a_N+\sum_{h=1}^{N-1}A(h)(a_h-a_{h+1}).$ All terms on the right are nonnegative because $a_h$ is non-increasing. For $N>N_0$ with $N_0$ large enough for step 1.1, this is at least $\displaystyle \frac1{16}\left(N^2a_N+\sum_{h=N_0}^{N-1}h^2(a_h-a_{h+1})\right) =\frac1{16}\left(N_0^2a_{N_0}+\sum_{h=N_0+1}^{N}(2h-1)a_h\right).$ Since $2h-1\ge h$, the lower bound diverges with $\sum h a_h$. Therefore the totient-weighted series diverges. [given, step 1.1, algebra] ∎
