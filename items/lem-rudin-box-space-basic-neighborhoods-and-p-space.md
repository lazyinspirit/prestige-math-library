---
id: lem-rudin-box-space-basic-neighborhoods-and-p-space
kind: lemma
title: Clopen boxes and the P-space property
status: draft
origin: pipeline
deps: [def-rudin-ordinal-box-space, thm-cofinality-basics, def-axiom-of-choice, def-rudin-ambient-ordinal-box-space, def-order-topology-on-an-ordinal]
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
    - title: "K. P. Hart, Set-Theoretic Methods in General Topology, Chapter 6 section 1, printed p. 35, Exercises 1–2"
      url: https://fa.ewi.tudelft.nl/~hart/onderwijs/old-courses/settop/settop.pdf
---

## Statement

Assume AC and fix the infinite coordinate set $B$ of the Rudin definitions. In each of $Z=Y_B$ and $Z=X_R(B)$, the boxes

$$(a,h]_Z=\{x\in Z:a(n)<x(n)\le h(n)\text{ for every }n\in B\},\qquad a<h,$$

form a clopen local base at each $h\in Z$. More generally $(a,b]_Z$ is clopen for all $a,b\in P_B$ with $a<b$, even when $b\notin Z$. Every countable intersection of open subsets of either space is open; thus both are P-spaces. The empty intersection means the whole space.

## Facts & Assumptions

**Given:** AC and either of the spaces $Z$ in the statement.

[F1] The Rudin space uses the relative box topology on the ordinal product ([[def-rudin-ordinal-box-space]]).

[F2] The ambient space uses that same relative topology, and every point in either space has coordinate cofinalities greater than $\omega$ ([[def-rudin-ambient-ordinal-box-space]]).

[F3] In an ordinal, initial intervals $[0,\beta]$ and half-open intervals $(\alpha,\beta]$ form an open basis; at a nonzero limit point $h$ every neighborhood contains some $(a,h]$ with $a<h$ ([[def-order-topology-on-an-ordinal]]).

[F4] A countable set of ordinals below an ordinal of uncountable cofinality has supremum strictly below that ordinal ([[thm-cofinality-basics]], (d)).

[A1] AC chooses members of nonempty sets of local bounds ([[def-axiom-of-choice]]).

## Proof

1.1 For $a(n)<b(n)\le\aleph_n$, F3 makes $(a(n),b(n)]$ open in the factor $[0,\aleph_n]$. Its complement is $[0,a(n)]\cup(b(n),\aleph_n]$; the first is basic open, and the second is basic open if $b(n)<\aleph_n$ and empty otherwise. Thus the coordinate interval is also closed. The box $\prod_{n\in B}(a(n),b(n)]$ is open by the definition of the box topology. Its complement is the union over $n$ of cylinders restricting just that coordinate to its open complement, with all other factors unrestricted, and hence is box-open. Intersecting with either $Z$ in F1–F2 shows $(a,b]_Z$ is clopen, including the possibility it is empty. No condition on the cofinalities of $a$ or $b$ was used. [F1, F2, F3]

2.1 Let $h\in Z$ and let $U$ be an open neighborhood of $h$. By F1–F2 choose an open factor box $\prod O_n$ with $h\in Z\cap\prod O_n\subseteq U$. Each $h(n)$ has uncountable cofinality by F2, hence is a nonzero limit ordinal. F3 supplies some $a(n)<h(n)$ with $(a(n),h(n)]\subseteq O_n$. One may take the least such ordinal separately at each coordinate, so these lower bounds form a specified $a\in P_B$. Now $h\in(a,h]_Z\subseteq U$, and step 1.1 makes this box clopen. This proves the local-base assertion, including at coordinate tops $h(n)=\aleph_n$. [step 1.1, F1, F2, F3]

3.1 Let $(U_j)_{j<\omega}$ be open in $Z$ and let $h\in\bigcap_jU_j$. By step 2.1 each $U_j$ has a nonempty set of lower bounds $a_j<h$ whose local boxes lie in $U_j$. Apply A1 to select them. Put $a(n)=\sup_{j<\omega}a_j(n)$. By F2 and F4 this is strictly below $h(n)$ at every coordinate, so $a\in P_B$ and $a<h$. For $x\in(a,h]_Z$, the inequalities $a_j(n)\le a(n)<x(n)\le h(n)$ place $x$ in every $(a_j,h]_Z\subseteq U_j$. Thus step 1.1 gives an open neighborhood $(a,h]_Z$ of $h$ inside the intersection. Every point in the intersection has such a neighborhood, so it is open; if $\bigcap_j U_j$ has no points, it is the empty open set. Finite nonempty families reduce to this case by adding whole-space terms, and the intersection of a family with no members is $Z$, also open. Only individual coordinate cofinalities were used, so the argument applies to both spaces without any uniform bound. QED. [step 1.1, step 2.1, F2, F4, A1]
