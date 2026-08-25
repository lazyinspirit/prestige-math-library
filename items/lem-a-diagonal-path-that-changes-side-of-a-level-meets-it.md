---
id: lem-a-diagonal-path-that-changes-side-of-a-level-meets-it
kind: lemma
title: "A diagonal path with $h(0)\\le c\\le h(n)$ or $h(n)\\le c\\le h(0)$ satisfies $h(i)=c$ for some $i$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-diagonal-lattice-path-and-its-height, thm-well-ordering-principle]
justified_by: []
aliases: []
landmark: true
proof_strategy: cases
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: 'C. Krattenthaler, "Lattice Path Enumeration", ch. 10 of the Handbook of Enumerative Combinatorics, §10.3'
      url: "https://arxiv.org/pdf/1503.05930"
pipeline_run: null
---

## Statement

Let $v$ be a diagonal lattice path of length $n$ from $(0,a)$ with height
function $h$ ([[def-diagonal-lattice-path-and-its-height]]), and let
$c\in\mathbb{Z}$. If

$$h(0)\le c\le h(n) \qquad\text{or}\qquad h(n)\le c\le h(0),$$

then $h(i)=c$ for some $i$ with $0\le i\le n$; that is, $v$ touches the level $c$.

## Facts & Assumptions

**Given:** a diagonal path $v$ of length $n$ from $(0,a)$ with height function $h$, an integer $c$, and the hypothesis that $c$ lies weakly between $h(0)$ and $h(n)$ in one order or the other.

[F1] The height function of a diagonal path of length $n$ from $(0,a)$ satisfies $h(0)=a$ and $h(i)-h(i-1)\in\{1,-1\}$ for $1\le i\le n$, and $v$ touches the level $c$ when $h(i)=c$ for some $i$ with $0\le i\le n$ ([[def-diagonal-lattice-path-and-its-height]]).

[L1] Every nonempty subset $S \subseteq \mathbb{N}$ has a least element: there is $\ell \in S$ with $\ell \le s$ for all $s \in S$ ([[thm-well-ordering-principle]]).

## Proof

**Proof technique:** cases.

1.1 Assume first that $h(0)\le c\le h(n)$. The set $I:=\{\, i\in\mathbb{N} : i\le n,\ h(i)\ge c \,\}$ contains $n$, so it is nonempty and has a least element $\tau$. [F1, L1, assume-case up]

1.2 Assume instead that $h(n)\le c\le h(0)$. The set $J:=\{\, i\in\mathbb{N} : i\le n,\ h(i)\le c \,\}$ contains $n$, so it is nonempty and has a least element $\theta$. [F1, L1, assume-case down]

2.1 In the case $h(0)\le c\le h(n)$ of step 1.1: if $\tau=0$ then $h(0)\ge c$ and $h(0)\le c$, so $h(0)=c$; and if $\tau\ge1$ then $\tau-1$ is not in $I$, so $h(\tau-1)<c\le h(\tau)$, whence $h(\tau)-h(\tau-1)$ is positive and therefore equal to $1$, giving $h(\tau)=h(\tau-1)+1\le c$ and so $h(\tau)=c$. [F1, step 1.1]

2.2 In the case $h(n)\le c\le h(0)$ of step 1.2: if $\theta=0$ then $h(0)\le c$ and $c\le h(0)$, so $h(0)=c$; and if $\theta\ge1$ then $\theta-1$ is not in $J$, so $h(\theta-1)>c\ge h(\theta)$, whence $h(\theta)-h(\theta-1)$ is negative and therefore equal to $-1$, giving $h(\theta)=h(\theta-1)-1\ge c$ and so $h(\theta)=c$. [F1, step 1.2]

3.1 The hypothesis puts $c$ weakly between $h(0)$ and $h(n)$ in one of the two orders, so one of the two cases applies, and each produces an index at which the height is exactly $c$. [step 2.1, step 2.2, cases-exhaustive] ∎

## Remarks

- **Where the step set is spent.** The argument uses only that consecutive
  heights differ by exactly $1$, and it fails for a step set whose steps change
  the height by more than one unit: such a path can pass from above a level to
  below it without ever meeting it. The companion page carries that witness.

- **Both orders are needed.** The reflection argument applies the lemma once with
  the start above the level and the end below it, and once the other way round,
  so neither inequality may be dropped.
