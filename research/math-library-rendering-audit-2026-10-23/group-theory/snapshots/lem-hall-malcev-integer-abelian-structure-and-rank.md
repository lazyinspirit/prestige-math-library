---
id: lem-hall-malcev-integer-abelian-structure-and-rank
kind: lemma
title: Integer abelian structure and rank by finite reduction
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Keith Conrad, Modules over a PID
      url: https://kconrad.math.uconn.edu/blurbs/linmultialg/modulesoverPID.pdf
      locator: Theorem 2.2, pp.2–3; finite coordinate induction specialized to Z
    - title: Michael Brussel, Finitely Generated Modules over a PID
      url: https://content-calpoly-edu.s3.amazonaws.com/math/1/images/FG%20Modules%20Over%20A%20PID.pdf
      locator: Theorem 1.0.1, p.3; Theorem 2.1.2, pp.4–5, Euclidean branch; section 3.2, p.8. Rank invariance via Hom(-,Q) is proved locally.
status: published
origin: pipeline
verification:
  audited: 2026-09-09
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
proof_strategy: direct
deps: ["lem-subgroups-of-z-are-cyclic", "thm-division-algorithm-in-z", "thm-well-ordering-principle", "thm-first-isomorphism-theorem-groups", "thm-rat-field", "cor-independent-set-is-no-larger-than-a-finite-spanning-set", "prop-abelian-groups-are-z-modules"]
---
## Statement

Every subgroup of $\mathbb Z^n$ is free of rank at most $n$. Every subgroup of a finitely generated abelian group is finitely generated. Every finitely generated abelian group $M$ has a decomposition $M\cong\mathbb Z^r\oplus\bigoplus_{j=1}^t\mathbb Z/d_j\mathbb Z$, where $d_j>1$. Its torsion subgroup is precisely the finite summand, and $r$ is intrinsic. A surjection between finitely generated abelian groups with finite kernel preserves $r$. Empty sums and $n=0$ are allowed.

## Facts & Assumptions

**Given:** $n$ is a nonnegative integer; all groups in the decomposition and rank assertions are abelian.

[F1] A subgroup of $\mathbb Z$ is $d\mathbb Z$ for a unique $d\ge0$ ([[lem-subgroups-of-z-are-cyclic]]).

[F2] Integer division by $d>0$ gives a unique remainder in $[0,d)$ ([[thm-division-algorithm-in-z]]).

[F3] A nonempty set of natural numbers has a least member ([[thm-well-ordering-principle]]).

[F4] The quotient by a homomorphism kernel is its image ([[thm-first-isomorphism-theorem-groups]]).

[F5] $\mathbb Q$ is a field ([[thm-rat-field]]).

[F6] An independent set is no larger than a finite spanning set ([[cor-independent-set-is-no-larger-than-a-finite-spanning-set]]).

[F7] Integer multiplication identifies abelian groups with $\mathbb Z$-modules ([[prop-abelian-groups-are-z-modules]]).

## Proof

1.1 For $K\le\mathbb Z^n$, induct on $n$. When $n=0$, $K=0$ has the empty basis. For $n>0$, project to the last coordinate: its image is $d\mathbb Z$. If $d=0$, apply the induction hypothesis in $\mathbb Z^{n-1}$. If $d>0$, take $v\in K$ projecting to $d$. For each $x\in K$, write its last coordinate uniquely as $ad$; then $x-av$ lies in the projection kernel $K_0$. Thus $K=\mathbb Zv\oplus K_0$: the intersection is zero because $ad=0$ implies $a=0$. A basis of $K_0$ together with $v$ spans and is independent, so has at most $n$ members. Only one lift at each of at most $n$ stages is selected. [F1, F7, given]

2.1 Choose a finite ordered generating list of $M$, giving $\pi:\mathbb Z^n\twoheadrightarrow M$. For any subgroup $L\le M$, its inverse image under $\pi$ is free with a finite basis by step 1.1. Images of that basis generate $L$, since every $l\in L$ has a preimage. In particular $K=\ker\pi$ has a finite basis, whose columns form an integer matrix $A$. [F7, step 1.1]

3.1 Row swaps, column swaps, sign changes, and adding an integer multiple of another row or column are invertible: undo the swap or sign, or subtract the same multiple. Column operations preserve the image subgroup, while a row operation carries it by an automorphism of $\mathbb Z^n$ and therefore induces an isomorphism of quotients. If the current rectangle is zero, stop. Otherwise move a nonzero entry to its top left and change its sign to obtain a positive pivot $d$. [step 2.1, algebra]

4.1 If an entry in the pivot row is $a=qd+r$ with $0<r<d$, subtract $q$ times the pivot column and swap that column into the pivot position. The new positive pivot is $r<d$. The same procedure with rows treats the pivot column. If all row and column entries are divisible by $d$, clear them. If the remaining rectangle has an entry $b$ not divisible by $d$, add its row to the pivot row. The first pivot stays $d$, while the pivot row now contains $b$; column division again decreases the pivot. Each failed divisibility therefore strictly decreases a positive integer. Such descents terminate, since the attained pivots have a least member. [F2, F3, step 3.1]

5.1 The terminal pivot divides the entire rectangle. Clear its row and column and repeat on the smaller rectangle. There are at most $\min(n,\operatorname{columns}(A))$ pivots. The resulting diagonal $d_1,\ldots,d_k>0$ presents the quotient as $\bigoplus_{j=1}^k\mathbb Z/d_j\mathbb Z\oplus\mathbb Z^{n-k}$: the coordinate quotient map is onto and its kernel is exactly the diagonal image. Delete unit summands, which are zero. A zero matrix has $k=0$; an empty matrix gives the same rule. [F4, step 3.1, step 4.1]

6.1 Each finite cyclic summand has exactly the $d_j$ residues $0,\ldots,d_j-1$. Their finite product is finite and torsion. A nonzero integer vector has infinite order, since a nonzero coordinate cannot be annihilated by a nonzero integer. Hence the displayed finite summand is exactly the torsion subgroup. In particular a finitely generated torsion group is finite, and a finitely generated torsion-free abelian group is free. [F2, step 5.1]

7.1 Let $V(M)=\operatorname{Hom}(M,(\mathbb Q,+))$ with pointwise rational addition and scalar multiplication. The vector space laws follow pointwise from the field laws. A map to $\mathbb Q$ kills every finite-order element: $da=0$ implies $a=0$. Evaluation on the $r$ free generators identifies $V(M)$ with $\mathbb Q^r$: any assigned rational values extend by $\sum n_j e_j+t\mapsto\sum n_j a_j$, and this is the only extension. If a second decomposition has $r^{\prime}$ free generators, the resulting two bases of $V(M)$ give $r\le r^{\prime}$ and $r^{\prime}\le r$. Thus $r=r^{\prime}$, including $r=0$. [F5, F6, step 5.1, step 6.1]

8.1 If $f:M\twoheadrightarrow N$ has finite kernel, every $u:M\to\mathbb Q$ kills that kernel by step 7.1. Define $\bar u(f(x))=u(x)$; different lifts differ by the kernel, so this is well-defined, additive and unique. Thus precomposition by $f$ is a rational-linear bijection $V(N)\to V(M)$. Transporting bases and applying the independence bound twice proves equal ranks. [F6, step 7.1] ∎

## Source notes

[Keith Conrad, Modules over a PID](https://kconrad.math.uconn.edu/blurbs/linmultialg/modulesoverPID.pdf), Theorem 2.2, pp.2–3; finite coordinate induction specialized to Z; [Michael Brussel, Finitely Generated Modules over a PID](https://content-calpoly-edu.s3.amazonaws.com/math/1/images/FG%20Modules%20Over%20A%20PID.pdf), Theorem 1.0.1, p.3; Theorem 2.1.2, pp.4–5, Euclidean branch; section 3.2, p.8. Rank invariance via Hom(-,Q) is proved locally. Conrad Theorem 2.2 supports the finite projection splitting; Brussel Theorem 2.1.2 supports integer pivot descent. Both passages were read in full. Rank invariance is derived here using Hom(-,Q); no general PID factorization, maximal ideal, or choice axiom is used.
