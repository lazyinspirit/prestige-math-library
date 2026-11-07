---
dependency_level: 0
id: lem-centred-covering-for-positive-lower-semicontinuous-radii
kind: lemma
title: "Finite centred covering for positive lower-semicontinuous radii"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - thm-heine-borel-rn
  - thm-extreme-value-metric
proof_strategy: direct
sources:
  references:
    - title: "Kleinbock–Margulis, Flows on homogeneous spaces and Diophantine approximation on manifolds"
      url: "https://arxiv.org/pdf/math/9810036v1"
      locator: "Theorem 4.1, final covering step; the specialized finite selection is proved here"
---

## Statement

Let $d\ge1$, let $K\subset\mathbb R^d$ be compact, and let $r:K\to(0,R]$ be lower semicontinuous, where $R<\infty$. A finite collection of the prescribed open balls $B(x,r(x))$, with centres in $K$, covers $K$ and has multiplicity at most
$$N_d=4\lceil4\sqrt d\rceil^d+1.$$
Here multiplicity means the number of selected balls containing a point of $\mathbb R^d$. The assertion includes $K=\varnothing$, with the empty collection.

## Statement references

[Kleinbock–Margulis, Theorem 4.1](https://arxiv.org/pdf/math/9810036v1) — a specialized version of its covering input, with a direct selection proof below.

## Facts & Assumptions

**Given:** $d,K,r,R$ as stated.

[F1] Closed bounded subsets of $\mathbb R^d$ are compact; continuous real functions on nonempty compact sets attain their extrema. In particular successive coordinate minimization gives a unique lexicographically least point of any nonempty compact set. [[thm-heine-borel-rn]], [[thm-extreme-value-metric]]

## Proof

**Proof technique:** direct finite selection and packing.

1.1 If $K$ is empty there is nothing to select. Otherwise the relatively open sets $\{r>1/n\}$, $n\ge1$, cover $K$. A finite subcover gives $r(x)>a>0$ on $K$ for some $a$. Also $K$ is bounded. Fix an enumeration of all closed boxes with rational endpoints and nonempty interior. Every nonempty relatively open subset $U$ of a compact set $L$ contains a nonempty intersection $Q\cap L\subset U$ for some such box $Q$: take a sufficiently small box around one point of $U$. [given, F1]

2.1 Start with $K_0=K$. If $K_j\ne\varnothing$, let $R_j=\sup_{K_j}r$. The eligible set $U_j=\{x\in K_j:r(x)>R_j/2\}$ is nonempty and relatively open. Take the first rational box $Q$ satisfying $\varnothing\ne Q\cap K_j\subset U_j$, and let $x_j$ be its lexicographically least point. Put $r_j=r(x_j)$ and $K_{j+1}=K_j\setminus B(x_j,r_j)$. Each remaining set is compact, and each next choice is uniquely specified. Thus ordinary recursion defines this procedure without an axiom of dependent choice. For $i<j$ one has $|x_j-x_i|\ge r_i$ and $r_j\le R_i<2r_i$. [step 1.1, F1, construct]

3.1 The procedure terminates. Indeed all chosen centres lie in the fixed bounded set $K$ and are pairwise at distance at least $a$. Partition a bounded containing box into finitely many half-open boxes of diameter less than $a$, assigning its outer faces consistently. Each small box contains at most one chosen centre. More choices than boxes are therefore impossible. At termination the selected balls cover $K$ by the definition of the remaining set. [step 1.1, step 2.1]

3.2 Fix $z\in\mathbb R^d$ and only consider selected balls containing $z$. At most one of their centres equals $z$. For the other centres write $x_i-z=a_i u_i$, where $0<a_i<r_i$ and $|u_i|=1$. Let $M=\lceil4\sqrt d\rceil$ and partition $[-1,1]^d$ into $M^d$ boxes of side $2/M$, again assigning common faces consistently. Two unit vectors in one box have distance at most $2\sqrt d/M\le1/2$, so their inner product is at least $7/8$. If $i<j$ lie in this same direction box, the separation in step 2.1 implies $|a_i u_i-a_j u_j|\ge r_i>a_i$, hence $a_j>2a_i\langle u_i,u_j\rangle\ge7a_i/4$. [step 2.1, algebra]

4.1 In one direction box, fix the earliest selected centre $i$. Any later member has both $a_j>7a_i/4>a_i$ and $a_j\ge r_i-a_i$, the latter by the triangle inequality and centre separation. Consequently $a_j\ge r_i/2$. It also has $a_j<r_j<2r_i$. If there were four later members in this box, their increasing selection order and step 3.2 would give for the last one $a_j>(7/4)^3r_i/2>2r_i$, a contradiction. There are therefore at most four members per direction box, and at most one additional centre equal to $z$. The required multiplicity bound follows for every $z$. [step 2.1, step 3.2, algebra] ∎

