---
id: lem-analytic-subsets-of-baire-space-have-tree-projections
kind: lemma
title: "Analytic subsets of Baire space have tree projections"
status: published
origin: pipeline
deps: ["def-synchronous-trees-and-projection-bodies", "def-analytic-and-coanalytic-by-closed-projection", "lem-closed-subsets-of-baire-space-are-tree-bodies"]
justified_by: []
forward_refs: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Exercise 5.2 and the paragraph preceding Theorem 5.3"
      url: "https://homepages.math.uic.edu/~marker/math512/dst.pdf"
---
## Statement

In ZF, $A\subseteq\mathcal N$ is analytic in the closed-projection convention if and only if $A=p[T]$ for a synchronous tree $T$. For this representation and each $x\in\mathcal N$,

$$x\in A\quad\Longleftrightarrow\quad[T_x]\ne\varnothing,\qquad T_x=\{t:(x\upharpoonright |t|,t)\in T\}.$$

## Facts & Assumptions

[F1] Synchronous trees, their bodies and sections are defined in [[def-synchronous-trees-and-projection-bodies]].

[F2] Analytic means projection of a closed subset of the binary product with Baire space; see [[def-analytic-and-coanalytic-by-closed-projection]].

[F3] The cylinder-complement argument characterizes closed sets as prefix-tree bodies in one coordinate; see [[lem-closed-subsets-of-baire-space-are-tree-bodies]]. We give its two-coordinate form explicitly.

## Proof

**Given:** $A\subseteq\mathcal N$, with synchronous restrictions and the product topology as in F1–F2.

1.1 A basic neighbourhood of $(x,y)$ contains $N_{x\upharpoonright k}\times N_{y\upharpoonright l}$ for some $k,l$. Setting $n=\max(k,l)$ gives a contained product of equal-length cylinders. If $(x,y)\notin[T]$, some paired prefix of length $n$ is absent; every point of that product cylinder has the same absent prefix. The complement of $[T]$ is therefore open, precisely as in the argument for F3. [F1, F2, F3]

2.1 Conversely, for closed $F\subseteq\mathcal N\times\mathcal N$, put $T=\{(x\upharpoonright n,y\upharpoonright n):(x,y)\in F,\ n\in\mathbb N\}$. Restrictions of witnessed pairs have the same witness, so $T$ is a synchronous tree and $F\subseteq[T]$. A point of $[T]\setminus F$ would have an equal-length product cylinder disjoint from $F$ by step 1.1's neighbourhood observation, but its paired prefix in $T$ supplies a point of $F$ in that cylinder. Thus $[T]=F$. For $F=\varnothing$ the constructed tree is empty. [F1, step 1.1]

3.1 If $A$ is analytic, choose its one closed witness $F$ and apply step 2.1 to obtain $A=p[T]$. Conversely, if $A=p[T]$, step 1.1 makes $[T]$ a closed witness for analyticity. These choices concern one asserted witness and do not require AC. [F2, step 1.1, step 2.1]

4.1 For each fixed $x$, restricting a pair in $T$ proves prefix closure of $T_x$. For any $y$, the assertions $y\upharpoonright n\in T_x$ for all $n$ and $(x\upharpoonright n,y\upharpoonright n)\in T$ for all $n$ are identical. Existence of such $y$ is exactly $x\in p[T]=A$, proving the section equivalence. QED. [F1, step 3.1]
