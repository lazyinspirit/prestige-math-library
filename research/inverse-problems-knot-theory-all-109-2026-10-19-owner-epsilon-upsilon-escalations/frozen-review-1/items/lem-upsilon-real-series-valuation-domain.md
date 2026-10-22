---
id: lem-upsilon-real-series-valuation-domain
kind: lemma
title: "The real-exponent coefficient series form a valuation domain"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-ring
  - def-field
  - def-valuation-ring
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "All recursive selections below are uniquely specified by well-orders; no choice axiom is used."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Ozsvath, Stipsicz and Szabo, Concordance homomorphisms from knot Floer homology"
      url: "https://arxiv.org/pdf/1407.1795"
      locator: "Definition3.1 and the coefficient field in Section4; the support and inverse arguments are supplied locally"
---

## Statement

Let $\mathcal R$ consist of formal sums $\sum_{\alpha\in S}v^\alpha$ over $\mathbb F_2$, where $S$ is a well-ordered subset of $[0,\infty)$, including the empty support. Addition is coefficientwise and multiplication is convolution of exponents. These operations are well-defined and make $\mathcal R$ a commutative integral domain. Allowing well-ordered supports in all of $\mathbb R$ gives a field $\mathcal K$ containing $\mathcal R$. Every nonzero element of either ring is uniquely of the form $v^\alpha(1+h)$, where $\alpha$ is its least exponent and $h$ has strictly positive well-ordered support. The factor $1+h$ is a unit of $\mathcal R$. Consequently $\mathcal K$ is the field of fractions of $\mathcal R$, and $\mathcal R$ is its valuation ring: a nonzero series belongs to $\mathcal R$ exactly when its least exponent is nonnegative.

## Statement references

[[def-ring]]

[[def-field]]

[[def-valuation-ring]]

## Facts & Assumptions

**Given:** The field $\mathbb F_2$, the ordered additive real group, and formal sums with the supports specified in the Statement.

[F1] A subset of a linearly ordered set is well-ordered when every nonempty subset has a least element. Finite unions and translations of well-ordered subsets remain well-ordered; for the union, take the least of the finitely many existing minima.

## Proof

1.1 If $A,B\subseteq\mathbb R$ are well-ordered, then $A+B$ is well-ordered. To prove this, any sequence $a_n\in A$ has an infinite nondecreasing subsequence: take the least value in the first tail and its first occurrence, then the least value in the tail after that occurrence and its first occurrence, and repeat. These rules specify unique integers and values. If a nonempty subset $C\subseteq A+B$ had no least element, start with one of its elements and recursively choose the lexicographically least pair $(a,b)\in A\times B$ whose sum lies in $C$ below the preceding sum. The lexicographic order with $A$ first is a well-order, so this rule is unique at each stage. The sums strictly decrease. On a nondecreasing subsequence of the $a$ coordinates, the $b$ coordinates would strictly decrease, contradicting well-ordering of $B$. Thus no such $C$ exists. [F1, given, construct, algebra]

2.1 For any fixed real $\gamma$, only finitely many pairs $(a,b)\in A\times B$ can satisfy $a+b=\gamma$. Otherwise their distinct first coordinates form an infinite well-ordered set. Recursively taking its least element after deleting the previously selected finite set gives strictly increasing $a_n$ and strictly decreasing $b_n=\gamma-a_n$, impossible in $B$. Hence every convolution coefficient is a finite sum. Its support is a subset of $A+B$ and is well-ordered by step 1.1. A product of three series likewise has finitely many contributing triples at each exponent: first use the finite decompositions in $(A+B)+C$, then the finite decompositions in $A+B$. Thus regrouping those finite sums proves associativity. Symmetry of pairs proves commutativity, and coefficientwise finite distributivity proves both distributive laws. The empty support is zero, $v^0$ is one, and each series is its own additive inverse. This proves the ring axioms for supports in $\mathbb R$ and for the subring with nonnegative supports. [F1, step 1.1, given, algebra]

3.1 A nonzero series $f$ has a least exponent $\alpha$. Since its coefficient is one, write $f=v^\alpha(1+h)$, where $h$ has support in $(0,\infty)$, obtained by translating and removing that leading exponent. This representation is unique. If $f,g$ have least exponents $\alpha,\beta$, the coefficient at $\alpha+\beta$ in $fg$ is one: the unique pair attaining the sum of the two minima is $(\alpha,\beta)$. All other pairs have larger sum. Thus the product is nonzero and its least exponent is $\alpha+\beta$. In particular the rings have no zero divisors and $1\ne0$. [step 2.1, given, algebra]

4.1 If $h=0$, then $1+h$ is already a unit. Otherwise its well-ordered positive support has a least element $\varepsilon>0$. Form $u=\sum_{n\ge0}h^n$. For each upper exponent bound $L\ge0$, only the powers $n\le L/\varepsilon$ can contribute below $L$. Their supports are finite sums of the support of $h$, hence well-ordered by step 1.1; their finite union below $L$ is well-ordered. Any nonempty subset of the full proposed support has a least element, by restricting below one chosen element and using this finite union. Each coefficient is a finite sum, by the same bound and step 2.1. Therefore $u\in\mathcal R$. Coefficientwise multiplication gives $(1+h)u=1$, since each positive power occurs twice and the constant power occurs once. All coefficient sums used in this cancellation are finite. [F1, step 1.1, step 2.1, step 3.1, given, construct, algebra]

5.1 Every nonzero series in the real-support ring has inverse $v^{-\alpha}u$, with $u$ as in step 4.1; its translated support is well-ordered. This ring is therefore a field $\mathcal K$. A nonzero element is in $\mathcal R$ exactly when $\alpha\ge0$. If $\alpha<0$, its inverse has least exponent $-\alpha>0$ and lies in $\mathcal R$. Thus $\mathcal R$ is a valuation ring as defined in the Statement references. Finally, if $f\in\mathcal K$ has least exponent $\alpha$, take $c=\max(0,-\alpha)$. Then $v^cf\in\mathcal R$ and $f=(v^cf)/v^c$. This realizes every field element as a fraction of elements of $\mathcal R$, proving that $\mathcal K$ is its field of fractions. All recursions above choose well-order minima or first natural-number occurrences, and none chooses from an arbitrary infinite family. [step 2.1, step 3.1, step 4.1, given, algebra] ∎
