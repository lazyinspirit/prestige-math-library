---
id: thm-rudin-tail-neighborhood-obstruction
kind: theorem
title: Rudin shrinking obstruction
status: draft
origin: pipeline
deps: [def-rudin-ordinal-box-space, lem-rudin-neighborhoods-of-initial-top-slices-contain-tails, thm-cofinality-basics, thm-regularity-of-the-alephs, def-axiom-of-choice, lem-ordinal-sum-as-an-order-type, cor-cardinal-absorption]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "K. P. Hart, Set-Theoretic Methods in General Topology, Chapter 6 section 3, Exercises 1–2 and Lemma 3.1, printed p. 37"
      url: https://fa.ewi.tudelft.nl/~hart/onderwijs/old-courses/settop/settop.pdf
---

## Statement

Assume AC. In $X=X_R(B)$ the sets $F_k=\{h\in X:h(n)=\aleph_n\text{ for every }n\in B\text{ with }n\le k\}$, $k<\omega$, are closed, decrease, and have empty intersection. For every sequence of open sets $U_k\supseteq F_k$ there is $b\in\prod_{n\in B}\aleph_n$ with

$$\varnothing\ne\{h\in X:b<h\}\subseteq\bigcap_{k<\omega}U_k.$$

All inequalities are pointwise. In particular, no such open neighborhoods have empty intersection.

## Facts & Assumptions

**Given:** The stated spaces, slices and open neighborhoods, in the AC setting.

[F1] $P_B$ is the box product of the ordinal intervals $[0,\aleph_n]$, $B$ is an infinite subset of $\omega\setminus\{0,1\}$, and $X_R(B)$ requires a uniform strict finite-aleph bound on uncountable coordinate cofinalities ([[def-rudin-ordinal-box-space]]).

[F2] Every open neighborhood of $F_k$ contains a pointwise tail above a function in $\prod_{n\in B}\aleph_n$ ([[lem-rudin-neighborhoods-of-initial-top-slices-contain-tails]]).

[F3] Under AC each positive finite aleph is regular ([[thm-regularity-of-the-alephs]]).

[F4] An ordinal of uncountable cofinality bounds every countable subset; a cofinal subset has size at least the ordinal's cofinality ([[thm-cofinality-basics]]).

[F5] $\alpha+\beta$ is the order type of a copy of $\alpha$ followed by a copy of $\beta$ ([[lem-ordinal-sum-as-an-order-type]]).

[F6] A sum of two cardinals at most an infinite cardinal $\mu$ has size at most $\mu$ ([[cor-cardinal-absorption]]).

[A1] AC supplies a countable choice of the existing tail bounds ([[def-axiom-of-choice]]).

## Proof

1.1 For a coordinate $n$, the set $\{h\in X:h(n)<\aleph_n\}$ is open: it is the intersection with $X$ of the box with factor $[0,\aleph_n)$ at $n$ and whole factors elsewhere, and $[0,\aleph_n)$ is an open initial ray of the ordinal interval. Thus the set with $h(n)=\aleph_n$ is closed. Each $F_k$ is the intersection of finitely many such sets, hence closed, and $F_{k+1}\subseteq F_k$ because it imposes all preceding equalities. The empty initial coordinate set gives $F_0=F_1=X$. If $h$ belonged to every $F_k$, taking $k=n$ would give $h(n)=\aleph_n$ for every $n\in B$. F3 would make these coordinate cofinalities $\aleph_n$, which have no finite uniform aleph bound: the infinite subset $B$ of the natural numbers is unbounded, since a bounded subset would be finite. This contradicts F1. Hence $\bigcap_k F_k=\varnothing$. [F1, F3]

1.2 For every $k$, F2 gives a nonempty set of functions $z_k\in\prod_{n\in B}\aleph_n$ whose tails are contained in $U_k$. Use A1 to choose one for each $k$ and put $b(n)=\sup_{k<\omega}z_k(n)$. Each $\aleph_n$ is uncountable regular by F3, so F4 gives $b(n)<\aleph_n$. Thus $b$ belongs to the product in the statement. If $b<h$ with $h\in X$, then $z_k(n)\le b(n)<h(n)$ at every coordinate and every $k$. The defining property of $z_k$ puts $h$ in every $U_k$. [F2, F3, F4, A1]

2.1 Define $h(n)=b(n)+\omega_1$ using ordinal addition. By F5 this is the order type of the disjoint ordered sum of $b(n)$ and $\omega_1$. With $\mu=\max(|b(n)|,\aleph_1)$, one has $\mu<\aleph_n$ because $b(n)<\aleph_n$ and $n\ge2$. F6 bounds that sum's cardinality by $\mu$, hence its order type $h(n)$ is below the initial ordinal $\aleph_n$: an ordinal at least $\aleph_n$ would contain a copy of $\aleph_n$ and have cardinality at least $\aleph_n$. The final copy of $\omega_1$ is cofinal in the sum, so $\operatorname{cf}(h(n))\le\omega_1$. A shorter cofinal set cannot exist. Its part in the final copy would be bounded there by regularity F3 and F4, and a larger point of that copy would then bound the entire set, including all points in the initial $b(n)$ part. Therefore $\operatorname{cf}(h(n))=\omega_1$. The final copy is nonempty and has no largest point, so $h(n)>b(n)$, also when $b(n)=0$. All coordinate cofinalities of $h$ are $\omega_1<\aleph_2$, so F1 gives $h\in X$. [step 1.2, F1, F3, F4, F5, F6]

3.1 The point $h$ in step 2.1 belongs to the tail above $b$, making that tail nonempty. Step 1.2 puts the entire tail in $\bigcap_k U_k$, and step 1.1 gives the decreasing closed sequence with empty intersection. These are all the stated conclusions. QED. [step 1.1, step 1.2, step 2.1]
