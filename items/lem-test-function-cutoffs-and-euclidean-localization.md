---
id: "lem-test-function-cutoffs-and-euclidean-localization"
kind: "lemma"
title: "Test function cutoffs and euclidean localization"
deps: ["def-ck-and-multi-index-notation-in-several-variables", "lem-schwartz-cutoffs-from-the-standard-smooth-step"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - url: "https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      title: "Semyon Dyatlov, Lecture notes for 18.155 (2022)"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

In ZF, for compact $K\subseteq\Omega\subseteq\mathbb R^n$ with $\Omega$ open, there is $\chi\in C_c^\infty(\Omega)$ with $0\le\chi\le1$ and $\chi=1$ on a neighborhood of $K$. Every open cover of $\Omega$ admits an at most countable locally finite smooth partition of unity with compact supports, each support contained in some cover member. Subordination here asserts existence of such a member for each support; it does not select cover labels.

## Facts & Assumptions

[F1] The explicit smooth cutoff $b$ equals one on the closed unit ball, vanishes outside the radius-two ball, and satisfies $0\le b\le1$; translated dilates have the stated derivative scaling ([[lem-schwartz-cutoffs-from-the-standard-smooth-step]]).

[F2] Smoothness and multi-index notation are as in [[def-ck-and-multi-index-notation-in-several-variables]], applied componentwise.

## Proof

**Given:** the compact set and open set of the first assertion; an open cover $\mathcal U$ of $\Omega$ for the second.

1.1 For each point of $K$, there is a rational center $q$ and positive rational $r$ such that the point belongs to $B(q,r)$ and $\overline B(q,2r)\subseteq\Omega$. These inner balls cover $K$, so a finite list suffices by compactness. Put $b_j(x)=b((x-q_j)/r_j)$ and $\chi=1-\prod_j(1-b_j)$. Then $\chi$ is smooth, lies in $[0,1]$, equals one on the union of the inner balls, and has support in the finite union of the compact outer balls inside $\Omega$. For $K=\varnothing$ take the empty product and $\chi=0$. [given, F1, F2]

2.1 For nonempty $\Omega$, set $K_j=\{x:|x|\le j,\ \operatorname{dist}(x,\mathbb R^n\setminus\Omega)\ge1/j\}$ for $j\ge1$, interpreting distance to the empty set as infinity; set $K_0=K_{-1}=\varnothing$. These are compact subsets of $\Omega$, $K_j\subseteq\operatorname{int}K_{j+1}$, and their interiors cover $\Omega$. Closedness follows from continuity of distance (its absolute difference is at most the distance of the two points), and boundedness gives compactness. The shell $H_j=K_j\setminus\operatorname{int}K_{j-1}$ is compact and lies in the open set $G_j=\operatorname{int}K_{j+1}\setminus K_{j-2}$. [step 1.1, algebra]

3.1 Fix an enumeration of rational center/radius pairs and a coding of finite lists by natural numbers. For each $j$, consider pairs with $\overline B(q,2r)\subseteq G_j$ and with this closed ball contained in some $U\in\mathcal U$. Their inner balls cover $H_j$: at any shell point openness of $G_j$ and of one cover member gives a sufficiently small ball, then a rational center and radius. Compactness gives a finite subcover. Select the least code of a finite list that covers $H_j$, taking the empty list for an empty shell. This is a specified function of $j$, not Countable Choice. [step 2.1, given]

4.1 Form the corresponding translated dilates $b_{j,k}$ of F1. Their supports lie in $G_j$, and each support lies in some cover member. This family is locally finite: a point has a neighborhood inside some $K_N$, and supports with $j\ge N+2$ miss $K_N$, while only finitely many balls occur at each of the finitely many earlier stages. Every point belongs to some shell, so $s=\sum_{j,k}b_{j,k}$ is everywhere positive. The sum is locally finite and smooth; hence $\eta_{j,k}=b_{j,k}/s$ are smooth, nonnegative, have compact support in the same outer balls, and sum to one. The double index is countable. For empty $\Omega$ use the empty family. These constructions choose no cover labels and no arbitrary sequence of witnesses. $\square$ [step 3.1, F1, F2]
