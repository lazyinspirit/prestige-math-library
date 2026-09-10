---
id: cor-finite-dimensional-subspaces-are-closed
kind: corollary
title: "A finite-dimensional normed subspace is closed"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-finite-dimensional-normed-spaces-are-banach, def-normed-subspace,
       def-linear-basis, thm-rationals-countable, thm-n-cross-n-countable,
       lem-q-and-irrationals-dense-r, thm-recursion, thm-well-ordering-principle,
       cor-archimedean-reciprocal, rem-real-and-complex-normed-space-convention,
       thm-complex-numbers-are-the-real-coordinate-plane]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-astra
    verdict: locally-repaired
    date: 2026-09-09
    scope: owner-authorized-local-ZF-finite-dimensional-closedness-repair
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Daniel Daners, Introduction to Functional Analysis"
      url: "https://www.maths.usyd.edu.au/u/athomas/FunctionalAnalysis/daners-functional-analysis-2017.pdf"
pipeline_run: frontier-29
---

## Statement

Let $V$ be a normed space over $\mathbb K\in\{\mathbb R,\mathbb C\}$ and let
$W\subseteq V$ be a normed subspace. If $W$ admits an ordered basis of finite
length, including length zero, then $W$ is closed in $V$. This holds in ZF,
without a choice axiom; the ambient space need not be complete.

## Facts & Assumptions

**Given:** A normed space $V$ over $\mathbb K\in\{\mathbb R,\mathbb C\}$,
a normed subspace $W\subseteq V$, and an ordered basis $(b_j)_{j<n}$ of $W$.

[L1] Such a normed space is Banach
([[cor-finite-dimensional-normed-spaces-are-banach]]).

[L2] An ordered basis is an independent finite list spanning its space; the
empty list spans exactly the zero subspace ([[def-linear-basis]]).

[L3] The restricted norm on a normed subspace is the ambient one
([[def-normed-subspace]]).

[L4] Fix an enumeration $q:\mathbb N\to\mathbb Q$ and a bijection
$p:\mathbb N^2\to\mathbb N$
([[thm-rationals-countable]], [[thm-n-cross-n-countable]]). Rational numbers,
identified with their real images, approximate every real number
([[lem-q-and-irrationals-dense-r]], clause 1).

[L5] A supplied total self-map and a starting value determine a sequence by
recursion ([[thm-recursion]]); every nonempty subset of $\mathbb N$ has a
least element ([[thm-well-ordering-principle]]).

[L6] For every $\varepsilon>0$ some integer $k\ge1$ satisfies
$1/k<\varepsilon$ ([[cor-archimedean-reciprocal]]).

[L7] Restricting a complex normed space to real scalars leaves its metric
unchanged ([[rem-real-and-complex-normed-space-convention]]). Every complex
number has a unique real-imaginary decomposition with the usual coordinate
arithmetic ([[thm-complex-numbers-are-the-real-coordinate-plane]]).

## Proof

**Proof technique:** direct.

1.1 If $n=0$, then $W=\{0\}$ by [L2]. Every $x\in V\setminus\{0\}$ has the open ball of radius $\|x\|/2$ disjoint from $W$, so its complement is open and $W$ is closed. It remains to treat $n>0$. [given, L2, algebra]

1.2 For $n>0$, in the real case put $m=n$ and $e_j=b_j$. In the complex case put $m=2n$, $e_{2j}=b_j$, and $e_{2j+1}=ib_j$, and use real scalars. Splitting complex coefficients proves real spanning; grouping a real relation into a complex relation among the $b_j$ proves independence. Thus $(e_j)_{j<m}$ is a supplied ordered real basis of $W$, and its norm is still the restricted ambient norm. By [L1], $W$ is complete for this metric. [given, L1, L2, L3, L7, algebra]

2.1 Define maps $E_j:\mathbb N\to\mathbb Q^j$ for $j\le m$ as follows: $E_0(s)$ is the empty tuple, and $$E_{j+1}(p(s,t))=(E_j(s),q(t)).$$ The unique inverse pair of each natural makes this a total definition. Finite recursion, or [L5] on states consisting of a stage and such a map, produces the maps uniformly; after stage $m$ keep the state fixed. By induction each $E_j$ is surjective: given a tuple of length $j+1$, its initial tuple has a preimage $s$ under $E_j$, its final coordinate has a preimage $t$ under $q$, and $p(s,t)$ maps to the entire tuple. This uses two witnesses for one tuple, not a family of selected enumerations. Define $$d(s)=\sum_{j<m}(E_m(s))_j e_j.$$ Its image is exactly the rational span of this finite basis. [L4, L5, step 1.2, construct]

3.1 This image is dense in $W$. For $w=\sum_{j<m}a_je_j$ and $\varepsilon>0$, let $t_j$ be the least index satisfying $$|a_j-q(t_j)|<\delta,\qquad \delta=\frac{\varepsilon}{2m(1+\sum_{j<m}\|e_j\|)}>0.$$ Existence follows from rational density and [L5] gives the least index. Surjectivity of $E_m$ gives a value of $d$ equal to $v=\sum_{j<m}q(t_j)e_j$, and $$\|w-v\|\le\delta\sum_{j<m}\|e_j\|<\varepsilon.$$ Hence every ball in $W$ meets $d[\mathbb N]$. [step 1.2, step 2.1, L4, L5, algebra]

4.1 Let $x$ be an ambient adherent point of $W$, meaning every ball about $x$ meets $W$. For each $k\in\mathbb N$, first such adherence and then step 3.1 give a point $w\in W$ within $1/(2(k+1))$ of $x$ and a value $d(s)$ within $1/(2(k+1))$ of $w$. Thus the set $$A_k=\{s\in\mathbb N:\|x-d(s)\|<1/(k+1)\}$$ is nonempty. Set $s_k=\min A_k$ and $u_k=d(s_k)$. This defines the sequence outright by a unique-index rule. By [L6] the error tends to zero, so $u_k\to x$ in $V$, and $\|u_k-u_l\|\le\|u_k-x\|+\|x-u_l\|$ makes it Cauchy in the restricted metric of $W$. [step 3.1, L3, L5, L6, construct]

5.1 Completeness from step 1.2 supplies $y\in W$ with $u_k\to y$ in the restricted norm. Since the norm agrees with the ambient one, $$\|x-y\|\le\|x-u_k\|+\|u_k-y\|\longrightarrow0,$$ so $x=y\in W$. Every ambient adherent point therefore belongs to $W$. A point outside $W$ consequently has a ball disjoint from $W$, making the complement open and $W$ closed. Together with step 1.1 this proves all cases, without manufacturing a sequence in an arbitrary subset or using countable choice. [step 1.1, step 1.2, step 4.1, L3, algebra] ∎
