---
id: lem-a-vanishing-group-ring-coefficient-sum-pairs-off-opposite-signed-equal-labels
kind: lemma
title: "A vanishing group-ring coefficient sum pairs off opposite-signed equal labels"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-group-ring, thm-group-ring-is-a-unital-algebra-with-basis-g]
dependency_level: 0
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "Wolfgang Lück, A Basic Introduction to Surgery Theory (ICTP lecture notes, 27 October 2004; complete author text)"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "Chapter 1 §1.3, proof of Lemma 1.22, printed pp. 14--15"
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, electronic edition)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/books/surgery.pdf"
      locator: "Corollary 7.30, printed pp. 160--161; PDF pages 168, 169"
---
## Statement

Let $\pi$ be a group and let $g_1,\dots,g_r\in\pi$ and
$\varepsilon_1,\dots,\varepsilon_r\in\{\pm1\}$ satisfy
$\sum_{j=1}^r\varepsilon_j[g_j]=0$ in $\mathbb Z[\pi]$, or
$\sum_{j=1}^r\varepsilon_j[g_j]=[h]$ for a single element $h\in\pi$. If $r\ge2$,
then there are indices $j_1\ne j_2$ with $g_{j_1}=g_{j_2}$ and
$\varepsilon_{j_1}=-\varepsilon_{j_2}$. In particular, in the single-monomial
case with $r\ge2$ the multiset of signed labels contains an opposite-signed
pair of equal labels.

## Facts & Assumptions

**Given:** A group $\pi$, a finite list $g_1,\dots,g_r\in\pi$ of elements and signs $\varepsilon_1,\dots,\varepsilon_r\in\{\pm1\}$, together with the equality $\sum_{j=1}^r\varepsilon_j[g_j]=0$, or the equality $\sum_{j=1}^r\varepsilon_j[g_j]=[h]$ for a single element $h\in\pi$.

[F1] The classes $[g]$, $g\in\pi$, form a $\mathbb Z$-basis of $\mathbb Z[\pi]$: the group ring is the free left $\mathbb Z$-module on the set $\pi$, and every element of $\mathbb Z[\pi]$ has a unique expression $\sum_{g\in F}r_g[g]$ with $F\subseteq\pi$ finite and $r_g\in\mathbb Z$, so two such expressions are equal if and only if they have the same coefficient at every label; in particular the expression of $0$ has every coefficient $0$, and the expression of a single basis vector $[h]$ has coefficient $1$ at $h$ and coefficient $0$ at every other label ([[def-group-ring]], [[thm-group-ring-is-a-unital-algebra-with-basis-g]]).

## Proof

1.1 Group the terms of the sum by label: for each $g\in\pi$ set $k_g:=\sum_{j:\,g_j=g}\varepsilon_j\in\mathbb Z$, a finite sum that is nonzero only for the finitely many occurring labels, so that $\sum_{j=1}^r\varepsilon_j[g_j]=\sum_{g\in\pi}k_g[g]$ is the expansion of the left-hand side in the basis of [F1]. By the uniqueness of that expansion, the equality $\sum_{j=1}^r\varepsilon_j[g_j]=0$ holds exactly when $k_g=0$ for every $g\in\pi$, and the equality $\sum_{j=1}^r\varepsilon_j[g_j]=[h]$ holds exactly when $k_h=1$ and $k_g=0$ for every $g\ne h$. [F1, algebra]

2.1 Assume no two indices carry equal labels with opposite signs, so that for every occurring label $g$ all terms with $g_j=g$ share one sign and $k_g$ is $\pm$ the number of occurrences of $g$, hence a nonzero integer. If $\sum_{j=1}^r\varepsilon_j[g_j]=0$, then step 1.1 forces $k_g$ to vanish for every label, contradicting the nonzero coefficient of each occurring label; therefore in the zero-sum case some pair of indices has equal labels and opposite signs. [step 1.1, contradiction]

2.2 Assume no two indices carry equal labels with opposite signs and consider the single-monomial case $\sum_{j=1}^r\varepsilon_j[g_j]=[h]$ with $r\ge2$. By step 1.1 every label $g\ne h$ must have $k_g=0$, and under the assumption every occurring label has a nonzero coefficient, so no label other than $h$ occurs and all $r$ terms carry the label $h$. Then $k_h=\sum_{j=1}^r\varepsilon_j=r-2m$, where $m$ counts the indices with $\varepsilon_j=-1$, and the equation $k_h=1$ with $r\ge2$ gives an odd $r\ge3$ and $1\le m\le r-1$; hence some index has sign $+1$ and some index has sign $-1$, both with label $h$, so an opposite-signed pair of equal labels exists in the single-monomial case as well. [step 1.1, algebra]

3.1 Steps 2.1 and 2.2 settle the zero-sum and the single-monomial case respectively, so under the stated hypotheses and $r\ge2$ there are always indices $j_1\ne j_2$ with $g_{j_1}=g_{j_2}$ and $\varepsilon_{j_1}=-\varepsilon_{j_2}$. The argument used only the basis expansion of $\mathbb Z[\pi]$, no property of $\pi$ beyond it and no choice principle. [step 2.1, step 2.2] ∎
