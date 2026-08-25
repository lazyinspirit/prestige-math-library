---
id: lem-half-open-boxes-form-an-elementary-family
kind: lemma
title: "Half-open boxes are closed under intersection, and the complement of a half-open box is a finite disjoint union of half-open boxes"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-half-open-box, def-extended-reals]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. A. Carlen, Notes on Lebesgue Measure on $\\mathbb{R}^n$ and $S^{n-1}$ (Rutgers Math 501), Section 1"
      url: "https://sites.math.rutgers.edu/~carlen/501F13/LebesgueMeas.pdf"
    - title: "T. Tao, An Introduction to Measure Theory (GSM 126), Section 1.1"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Statement

Let $n \ge 1$ and let half-open boxes $B(a,b) \subseteq \mathbb{R}^n$ be as in
[[def-half-open-box]].

1. **Intersection.** For parameter pairs $(a,b)$ and $(a',b')$,
   $$B(a,b) \cap B(a',b') \;=\; B(c,d), \qquad c_i := \max\{a_i,a'_i\}, \quad d_i := \min\{b_i,b'_i\} \quad (i<n),$$
   the extremes taken in the total order of $\overline{\mathbb{R}}$. Consequently
   the intersection of the members of a finite list of half-open boxes is a
   half-open box, the empty list giving $\mathbb{R}^n$.
2. **Complement.** For every parameter pair $(a,b)$ there is a finite list of
   pairwise disjoint half-open boxes whose union is
   $\mathbb{R}^n \setminus B(a,b)$. When $B(a,b) \ne \varnothing$ the list may be
   taken to have $2n$ members, indexed by a coordinate $i < n$ and a side.

## Facts & Assumptions

**Given:** A natural number $n \ge 1$ and parameter pairs $(a,b)$, $(a',b')$, that is, pairs of functions $n \to \overline{\mathbb{R}}$.

[L1] $B(a,b) := \{\, x \in \mathbb{R}^n : a_i < x_i \le b_i \ \text{ for every } i < n \,\}$, and $\mathbb{R}^n = (-\infty,+\infty]^n$ ([[def-half-open-box]]).

[L2] A box is nonempty exactly when $a_i < b_i$ for every $i < n$ ([[def-half-open-box]]).

[F1] $(\overline{\mathbb{R}}, \le)$ is a totally ordered set, and the inclusion of $\mathbb{R}$ preserves and reflects the order ([[def-extended-reals]]).

## Proof

**Proof technique:** direct.

1.1 For claim 1, a point $x \in \mathbb{R}^n$ lies in $B(a,b) \cap B(a',b')$ exactly when $a_i < x_i \le b_i$ and $a'_i < x_i \le b'_i$ for every $i<n$; the order being total, each two-element set $\{a_i,a'_i\}$ has a greatest member $c_i$ and each $\{b_i,b'_i\}$ a least member $d_i$, and for a real $x_i$ the conjunction $a_i < x_i$ and $a'_i < x_i$ says exactly $c_i < x_i$ while $x_i \le b_i$ and $x_i \le b'_i$ says exactly $x_i \le d_i$, so the intersection is $B(c,d)$; iterating along a list of length $m$ gives the finite case by induction on $m$, with the empty list giving $\mathbb{R}^n = B(\mathbf{-\infty},\mathbf{+\infty})$. [L1, F1, algebra]

1.2 For claim 2 in the degenerate case, if $B(a,b) = \varnothing$ then $\mathbb{R}^n \setminus B(a,b) = \mathbb{R}^n = (-\infty,+\infty]^n$, a list with the single member $\mathbb{R}^n$, whose members are vacuously pairwise disjoint. [L1]

1.3 For claim 2 in the remaining case, assume $B(a,b) \ne \varnothing$, so $a_i < b_i$ for every $i<n$, and for $i<n$ define two parameter pairs $(a^{i,0},b^{i,0})$ and $(a^{i,1},b^{i,1})$ by setting, in coordinates $j<i$, $a^{i,\epsilon}_j := a_j$ and $b^{i,\epsilon}_j := b_j$; in coordinate $i$, $(a^{i,0}_i,b^{i,0}_i) := (-\infty, a_i)$ and $(a^{i,1}_i, b^{i,1}_i) := (b_i, +\infty)$; and in coordinates $j > i$, $a^{i,\epsilon}_j := -\infty$ and $b^{i,\epsilon}_j := +\infty$. [L1, L2, construct]

2.1 Still for claim 2, every $x \notin B(a,b)$ lies in one of these $2n$ boxes: the set of $i<n$ with $\neg(a_i < x_i \le b_i)$ is a nonempty subset of $n$, so it has a least member $i$; then $a_j < x_j \le b_j$ for every $j<i$, and by totality either $x_i \le a_i$, putting $x$ in $B(a^{i,0},b^{i,0})$, or $x_i > b_i$, putting $x$ in $B(a^{i,1},b^{i,1})$, the coordinates $j>i$ being unconstrained in both. [step 1.3, F1, L1]

2.2 Still for claim 2, each of the $2n$ boxes is disjoint from $B(a,b)$, since its points satisfy $x_i \le a_i$ or $x_i > b_i$; and two of them are disjoint from one another, because for $i < i'$ a point of a box with index $i$ fails $a_i < x_i \le b_i$ while a point of a box with index $i'$ satisfies it, and for a common $i$ a point of both would satisfy $b_i < x_i \le a_i$, contradicting $a_i < b_i$. [step 1.3, L1, L2]

3.1 Claim 1 is step 1.1, and claim 2 is step 1.2 in the empty case and steps 2.1 and 2.2 in the nonempty case, the union of the $2n$ boxes being exactly $\mathbb{R}^n \setminus B(a,b)$. [step 1.1, step 1.2, step 2.1, step 2.2] ∎
