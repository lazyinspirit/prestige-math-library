---
id: thm-relative-homology-of-consecutive-cw-skeleta
kind: theorem
title: Relative homology of consecutive CW skeleta
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-skeleta-cw-subcomplex-and-relative-cw-complex, prop-cw-skeleta-are-closed-and-cells-form-a-disjoint-partition, lem-compact-cw-images-have-finite-cell-support-without-choice, lem-cw-quotient-induces-relative-singular-homology-isomorphisms, thm-long-exact-sequence-of-a-pair-in-singular-homology, cor-homology-of-spheres, prop-zero-th-singular-homology-is-free-on-path-components]
proof_strategy: direct
sources:
  references:
    - title: Allen Hatcher, Algebraic Topology, Section 2.2
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
---

## Statement

For any abelian group $G$, $H_k(X^n,X^{n-1};G)$ is $0$ for $k\ne n$ and is naturally $\bigoplus_{e^n_\alpha}G$ for $k=n$.

## Facts & Assumptions

**Given:** A CW complex $X$ and an integer $n\geq0$.

[F1] CW skeleta are subcomplexes, and collapsing $X^{n-1}$ in $X^n$ identifies each attached $n$-disk boundary with the quotient basepoint ([[def-skeleta-cw-subcomplex-and-relative-cw-complex]], [[prop-cw-skeleta-are-closed-and-cells-form-a-disjoint-partition]]).

[F2] A continuous image of a compact space in a CW complex lies in a finite CW subcomplex, without any choice premise ([[lem-compact-cw-images-have-finite-cell-support-without-choice]]).

[F3] For a CW pair $(Y,A)$ with $A\ne\varnothing$, its quotient map induces $H_k(Y,A;G)\cong H_k(Y/A,\{*\};G)$ naturally ([[lem-cw-quotient-induces-relative-singular-homology-isomorphisms]]).

[F4] A pair has a long exact singular homology sequence for every abelian coefficient group ([[thm-long-exact-sequence-of-a-pair-in-singular-homology]]).

[F5] For $n\ge1$, the reduced homology of $S^n$ with coefficients $G$ is $G$ in degree $n$ and zero otherwise ([[cor-homology-of-spheres]]). A path-connected nonempty space has $H_0\cong G$ ([[prop-zero-th-singular-homology-is-free-on-path-components]]).

## Proof

**Proof technique:** direct.

1.1 If there are no $n$-cells, $X^n=X^{n-1}$ and both sides are zero. For $n=0$, $X^0$ is discrete and $X^{-1}=\varnothing$. Every singular simplex has constant image, so its singular chain complex splits over the vertices. A point has homology $G$ in degree zero and zero otherwise, giving the asserted direct sum. Hence assume $n\ge1$ and that an $n$-cell exists. Its attaching sphere makes $X^{n-1}$ nonempty. The CW quotient $W=X^n/X^{n-1}$ is the wedge of the spheres $D^n_\alpha/S^{n-1}_\alpha$, with one common basepoint $b$. The quotient comparison identifies $H_k(X^n,X^{n-1};G)$ naturally with $H_k(W,\{b\};G)$. [given, F1, F3]

2.1 First let $W_J$ be a finite wedge and split off one sphere $S^n_j$, leaving a subwedge $U$. The pair quotient $W_J/U$ is $S^n_j$, so the CW quotient comparison identifies $H_k(W_J,U;G)$ with $H_k(S^n_j,\{b\};G)$. The inclusion $U\hookrightarrow W_J$ has a retraction collapsing $S^n_j$; hence its homology map is injective. In the pair long exact sequence this also forces the connecting map into $H_{k-1}(U;G)$ to be zero. Thus, for $k>0$, the sequence from $H_k(U;G)$ to $H_k(W_J;G)$ to $H_k(S^n_j,\{b\};G)$ is short exact. It splits by the inclusion of $S^n_j$, since projection to the quotient is the identity on that sphere. Induction over the finite set $J$, together with sphere homology, gives $H_k(W_J;G)=\bigoplus_{j\in J}G$ for $k=n$ and zero for other positive $k$. Every finite wedge is path connected, including the empty wedge interpreted as a point, so $H_0(W_J,\{b\};G)=0$ and its positive relative homology equals its positive absolute homology. [F3, F4, F5, step 1.1]

3.1 The choice-free compact-image lemma puts the image of each singular simplex in the arbitrary wedge $W$ inside a finite CW subcomplex, hence inside a finite subwedge. Every singular chain is a finite sum of simplices, so it too is supported in a finite subwedge. A cycle in $W$ supported there is a cycle there, since singular chain inclusion is injective. If a finite supported cycle bounds in $W$, its bounding chain also lies in some finite subwedge; enlarging both finite supports makes it a boundary in one finite subwedge. Therefore the finite-wedge calculations of step 2.1 pass elementwise to $W$: classes have finite support, and any relation is already a finite-wedge relation. This gives $H_n(W,\{b\};G)\cong\bigoplus_{e^n_\alpha}G$ and zero in every other degree. Composing with step 1.1 proves the stated natural isomorphism, without a choice premise. [F2, step 1.1, step 2.1] ∎
