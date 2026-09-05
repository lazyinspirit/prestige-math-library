---
id: lem-regular-functions-form-sheaf-classical
kind: lemma
title: "Regular functions on a classical affine variety form a sheaf"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-regular-function-classical-variety]
justified_by: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Proposition 3.9"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Michael Artin, Notes for a Course in Algebraic Geometry, 2.5"
      url: "https://math.mit.edu/classes/18.721/notes/ag-jan26-2022.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

Let $X$ be a classical affine variety. The assignment
$$ U\longmapsto \mathcal O_X(U) $$
from Zariski-open subsets of $X$ to rings of regular functions is a sheaf of
$k$-algebras on $X$.

## Facts & Assumptions

**Given:** A classical affine variety $X$, an open subset $U \subseteq X$, and an open cover $U=\bigcup_{i\in I} U_i$.

[L1] A function on an open subset is regular exactly when each point has a neighbourhood on which the function is a quotient $a/b$ of elements of $k[X]$ with $b$ nowhere zero there ([[def-regular-function-classical-variety]]).

## Proof

**Proof technique:** direct.

1.1 If $f \in \mathcal O_X(U)$ and $V \subseteq U$ is open, then every point of $V$ has an open neighbourhood $W\subseteq U$ on which [L1] gives a quotient formula $f=a/b$. Then $W\cap V$ is an open neighbourhood of that point inside $V$, the denominator $b$ is still nowhere zero there, and $f|_V=a/b$ on $W\cap V$. Hence restriction maps are well defined. [L1, given]

1.2 If $f,g \in \mathcal O_X(U)$ and $f|_{U_i}=g|_{U_i}$ for every $i\in I$, then for each $x \in U$ some $U_i$ contains $x$, so $f(x)=g(x)$. Therefore $f=g$ on $U$. This is the uniqueness clause. [given]

1.3 Suppose for each $i\in I$ we are given $f_i \in \mathcal O_X(U_i)$, and suppose $f_i=f_j$ on $U_i \cap U_j$ for all $i,j$. Define $f:U \to k$ by $f(x)=f_i(x)$ whenever $x \in U_i$. This is well defined by the overlap hypothesis. [given, construct]

2.1 Fix $x \in U$. Choose $i$ with $x \in U_i$. Since $f_i$ is regular on $U_i$, [L1] gives an open neighbourhood $W \subseteq U_i$ of $x$ and elements $a,b \in k[X]$ with $b$ nowhere zero on $W$ and $f_i=a/b$ on $W$. On that same neighbourhood, the glued function $f$ equals $f_i$, so $f=a/b$ on $W$. By [L1], $f$ is regular at $x$. [L1, step 1.3, choose]

3.1 Step 1.1 gives restriction, step 1.2 gives uniqueness of gluing, and steps 1.3 and 2.1 give existence of gluing. Therefore $U \mapsto \mathcal O_X(U)$ is a sheaf of $k$-algebras on $X$. [step 1.1, step 1.2, step 1.3, step 2.1] ∎
