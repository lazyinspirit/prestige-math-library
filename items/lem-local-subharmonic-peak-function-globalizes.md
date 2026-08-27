---
id: lem-local-subharmonic-peak-function-globalizes
kind: lemma
title: "A local strict subharmonic peak function globalizes"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity, lem-gluing-lemma-for-plane-subharmonic-functions]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Harold P. Boas, Class Notes Math 618: Complex Variables II, Spring 2016"
      url: "https://haroldpboas.gitlab.io/courses/618-2016a/notes2016.pdf"
---

## Statement

Let $\Omega\subseteq\mathbb C$ be a bounded complex domain and let
$\zeta\in\partial\Omega$. Suppose there are a neighbourhood $U$ of $\zeta$ and a
subharmonic function $q$ on $\Omega\cap U$ such that:

1. $q(z)<0$ for every $z\in\Omega\cap U$;
2. $q(z)\to0$ as $z\to\zeta$ with $z\in\Omega$;
3. for some smaller neighbourhood $W\Subset U$ of $\zeta$, one has
   $$\sup\{q(z):z\in\Omega\cap\partial W\}<0.$$

Then $\Omega$ has a global barrier at $\zeta$.

## Facts & Assumptions

**Given:** A bounded complex domain $\Omega$, a boundary point $\zeta$, and local data $U$, $W$, and $q$ as in the Statement.

[L1] Positive scalar multiples and finite maxima of subharmonic functions are subharmonic ([[lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity]]).

[L2] Subharmonic pieces glue across a disc boundary under the limsup inequality ([[lem-gluing-lemma-for-plane-subharmonic-functions]]).

## Proof

**Proof technique:** direct.

1.1 Choose $\eta>0$ with $q\le-\eta$ on $\Omega\cap\partial W$, and then choose a constant $c>0$ so large that $cq\le-1$ on $\Omega\cap\partial W$. The function $cq$ is still subharmonic on $\Omega\cap W$ by [L1], remains negative there, and still tends to $0$ at $\zeta$. [L1, given, choose]

2.1 Define [L1, L2, step 1.1] $$b(z)=\begin{cases}\max\{cq(z),-1\},& z\in\Omega\cap W,\\ -1,& z\in\Omega\setminus W.\end{cases}$$ Inside $\Omega\cap W$ the function is subharmonic by [L1]. On the seam $\partial W$ one has $cq\le-1$, so the inside limsup is at most the outside value $-1$; [L2] therefore glues the inside and outside pieces into a global subharmonic function on $\Omega$. [L1, L2, step 1.1]

3.1 The function $b$ is negative on $\Omega$, tends to $0$ at $\zeta$ because near $\zeta$ the maximum chooses the $cq$ branch, and is identically $-1$ outside $W$, so it stays uniformly below a negative constant away from $\zeta$. Thus $b$ is a global barrier at $\zeta$. [step 2.1] ∎
