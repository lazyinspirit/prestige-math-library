---
id: lem-pbw-for-countably-presented-kac-moody-lie-algebras
kind: lemma
title: "PBW for countably presented Kac Moody Lie algebras"
status: draft
origin: pipeline
deps: ["def-universal-enveloping-algebra-as-a-tensor-quotient"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Kleshchev, Lectures on Infinite Dimensional Lie Algebras — local PBW reduction supporting §1.3 and §9.3 (the finite-dimensional PBW theorem is not imported)"
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
proof_strategy: direct
---

## Statement

Let $L$ be a complex Lie algebra with a supplied finite or countable ordered basis $(x_i)$. The products $x_{i_1}\cdots x_{i_m}$ with $i_1\le\cdots\le i_m$, including $1$ for $m=0$, form a basis of $U(L)$. Consequently $L\to U(L)$ is injective. For the finite-word graded algebras here, compatible homogeneous bases of subalgebras and quotients can be obtained without AC.

## Facts & Assumptions

**Given:** A supplied ordered basis and finite expansions of brackets in that basis.

[F1] The enveloping quotient imposes the bracket relations. ([[def-universal-enveloping-algebra-as-a-tensor-quotient]]).

## Proof

1.1 Replace an adjacent inversion $x_jx_i$, $j>i$, by $x_ix_j+[x_j,x_i]$, expanding the bracket into basis vectors. On each term order the measure lexicographically by word length and number of inversions. The switched term decreases inversions; every bracket term decreases length. Each replacement has finitely many terms. The finitely branching reduction tree has finite depth: otherwise recursively selecting its first child with arbitrarily deep descendants gives an infinite descending sequence of measures. Thus reduction terminates in ordered words. [F1, given]

2.1 Two reductions on disjoint pairs commute, including their lower-length terms. The only overlapping pair is $zyx$ with $z>y>x$. Reducing the length-three terms in the two orders gives respectively $xyz+[y,x]z+y[z,x]+[z,y]x$ and $xyz+x[z,y]+[z,x]y+z[y,x]$. Their difference is $[ [y,x],z]+[y,[z,x]]+[ [z,y],x]$ after reducing length-two commutators. This is zero by Jacobi. Those length-two reductions are already unambiguous by induction on length, and this reasoning also holds inside a fixed word context. [step 1.1, given]

3.1 Induct on the reduction measure to compare any two first reductions: the disjoint case joins exactly, and the overlap difference has zero normal form by step 2.1; all subsequent comparisons involve smaller measures. Linearity then gives a unique normal form $N$ for every finite polynomial. For any words $u,v$, $N(u(x_jx_i-x_ix_j-[x_j,x_i])v)=0$; the relations with the other order follow by antisymmetry and those with equal indices are zero. Hence $N$ kills the two-sided defining ideal. Conversely each reduction changes a polynomial by an element of that ideal. The ordered-word inclusion and $N$ are inverse maps after taking the quotient. In particular distinct length-one basis vectors remain independent. [F1, step 1.1, step 2.1]

4.1 Fix one homogeneous component $V$. Its spanning finite bracket words inherit a finite or countable enumeration; retaining each first word outside the span of its predecessors gives an ordered basis $b_0,b_1,\ldots$ of $V$. For a specified subspace $W\le V$, put $E_r=\operatorname{span}(b_0,\ldots,b_r)$ and $W_r=W\cap E_r$. These finite-dimensional spaces exhaust $W$, and $\dim W_r-\dim W_{r-1}$ is zero or one. Starting with the empty basis, do nothing when the dimension is unchanged. When it rises at $r$, finite row reduction gives the unique $v_r\in W_r$ whose $b_r$-coefficient is $1$ and whose coefficients in the previous pivot columns are zero; append $v_r$. Indeed, existence comes from normalizing any element of $W_r\setminus W_{r-1}$ and eliminating its old pivots, while two such vectors differ by an element of $W_{r-1}$ with every pivot coefficient zero and hence are equal. Induction now shows that the vectors obtained through stage $r$ form a basis of $W_r$, so their union is a basis of $W$. Extend it to a basis of $V$ by scanning the $b_r$ and retaining the first vectors outside the span already obtained; the images of the added vectors form a quotient basis of $V/W$. Applying this fixed construction to the supplied countable list of degrees gives compatible homogeneous bases without a family of choices. The same finite-coordinate exhaustion handles a countably spanned ungraded algebra. No basis for an arbitrary unbased vector space is asserted. [step 3.1, given] ∎

## Sources

Source comparison: [Kleshchev](https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf), local PBW reduction supporting §1.3 and §9.3 (the finite-dimensional PBW theorem is not imported).
