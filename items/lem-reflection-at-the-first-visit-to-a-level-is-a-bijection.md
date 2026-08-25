---
id: lem-reflection-at-the-first-visit-to-a-level-is-a-bijection
kind: lemma
title: "Reflecting the initial segment at the first visit to level $c$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-diagonal-lattice-path-and-its-height, lem-a-diagonal-path-that-changes-side-of-a-level-meets-it, thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse, thm-well-ordering-principle]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
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

Let $c\in\mathbb{Z}$, let $n\in\mathbb{N}$, and let $a,b\in\mathbb{Z}$ with $a>c$
and $b>c$. Write $\mathcal{T}$ for the set of diagonal paths
$v\in\mathcal{W}((0,a),(n,b))$ that touch the level $c$
([[def-diagonal-lattice-path-and-its-height]]).

For $v\in\mathcal{T}$ with height function $h$, let $\tau$ be the least index with
$h(\tau)=c$ and define $\rho(v)$ to be the diagonal path whose height function is

$$h'(i) := \begin{cases} 2c-h(i), & 0\le i\le\tau,\\ h(i), & \tau\le i\le n.\end{cases}$$

The two clauses agree at $i=\tau$, and

$$\rho : \mathcal{T}\longrightarrow \mathcal{W}((0,2c-a),(n,b))$$

is a bijection. Its inverse is given by the same recipe, applied to a path
starting at height $2c-a$.

## Facts & Assumptions

**Given:** an integer $c$, a natural number $n$, and integers $a>c$ and $b>c$.

[F1] A diagonal path of length $n$ from $(0,\alpha)$ is the same datum as a function $h:\{0,\dots,n\}\to\mathbb{Z}$ with $h(0)=\alpha$ and $h(i)-h(i-1)\in\{1,-1\}$ for $1\le i\le n$; it touches the level $c$ when $h(i)=c$ for some $i\le n$ ([[def-diagonal-lattice-path-and-its-height]]).

[L1] If a diagonal path of length $n$ has $h(0)\le c\le h(n)$ or $h(n)\le c\le h(0)$, then $h(i)=c$ for some $i$ with $0\le i\le n$ ([[lem-a-diagonal-path-that-changes-side-of-a-level-meets-it]]).

[L2] For $f:A\to B$: $f$ is a bijection if and only if there is a function $g:B\to A$ with $g\circ f=\Delta_A$ and $f\circ g=\Delta_B$ ([[thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse]]).

[L3] Every nonempty subset $S \subseteq \mathbb{N}$ has a least element: there is $\ell \in S$ with $\ell \le s$ for all $s \in S$ ([[thm-well-ordering-principle]]).

## Proof

**Proof technique:** direct.

1.1 Let $\alpha\in\mathbb{Z}$ and let $v$ be a diagonal path of length $n$ from $(0,\alpha)$ with height function $h$ and $h(n)=b$, touching the level $c$. The set of indices $i\le n$ with $h(i)=c$ is a nonempty subset of $\mathbb{N}$, so it has a least element $\tau$, and $\tau<n$ because $h(n)=b>c$. The function $h'$ displayed in the statement is well defined, since at $i=\tau$ the first clause gives $2c-h(\tau)=c$ and the second gives $h(\tau)=c$; it satisfies $h'(0)=2c-\alpha$ and $h'(n)=h(n)=b$; and for $1\le i\le\tau$ one has $h'(i)-h'(i-1)=-(h(i)-h(i-1))\in\{1,-1\}$ while for $\tau<i\le n$ one has $h'(i)-h'(i-1)=h(i)-h(i-1)\in\{1,-1\}$. So $h'$ is the height function of a diagonal path of length $n$ from $(0,2c-\alpha)$ ending at $b$. [F1, L3, construct]

1.2 Every $v'\in\mathcal{W}((0,2c-a),(n,b))$ touches the level $c$: its height function has $h'(0)=2c-a<c$ because $a>c$, and $h'(n)=b>c$, so $h'(0)\le c\le h'(n)$ and [L1] supplies an index with height $c$. Likewise every $v\in\mathcal{W}((0,a),(n,b))$ that touches $c$ is in $\mathcal{T}$ by definition. [F1, L1]

2.1 The first visit to $c$ is at the same index for $v$ and for the path built in step 1.1: for $i<\tau$ we have $h(i)\ne c$, hence $h'(i)=2c-h(i)\ne c$, while $h'(\tau)=c$. [step 1.1, algebra]

3.1 Applying step 1.1 with $\alpha=a$ shows $\rho$ maps $\mathcal{T}$ into $\mathcal{W}((0,2c-a),(n,b))$, and applying it with $\alpha=2c-a$, which is legitimate by step 1.2, shows the same recipe maps $\mathcal{W}((0,2c-a),(n,b))$ into $\mathcal{W}((0,a),(n,b))$ and, since the image touches $c$, into $\mathcal{T}$. Applying the recipe twice returns the original path: by step 2.1 the first visit index is the same at both applications, and $2c-(2c-h(i))=h(i)$ for $i\le\tau$ while the second segment is untouched. So the two maps are two-sided inverses of one another and $\rho$ is a bijection by [L2]. [L2, step 1.1, step 1.2, step 2.1, algebra] ∎

## Remarks

- **The proof is the two-sided inverse, and that is deliberate.** A count of the reflected paths that argued only that reflection produces a path of the right kind would not show that every such path arises, and it is exactly the surjectivity that step 1.2 supplies, from the intermediate-value lemma.

- **The endpoint hypothesis.** The stated form assumes $b>c$, as required by the reflection principle that uses it, and then the first visit satisfies $\tau<n$. The same construction also remains a bijection when $b=c$; in that boundary case the first visit may be the final index and reflection fixes that endpoint.
