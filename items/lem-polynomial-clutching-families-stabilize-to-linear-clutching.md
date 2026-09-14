---
id: lem-polynomial-clutching-families-stabilize-to-linear-clutching
kind: lemma
title: Polynomial clutching families stabilize to linear clutching
status: draft
origin: pipeline
deps: [def-clutching-construction-for-bundles-over-a-suspension, def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles, thm-vector-bundles-glued-from-transition-cocycles, thm-homotopy-invariance-of-vector-bundle-pullback, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, Proposition 2.6"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Explicit block linearization, printed pp.45–46"
---

## Statement

Assume AC and let $X$ be compact Hausdorff. Let
$q(z)=a_0+a_1z+\cdots+a_nz^n$ be polynomial clutching data for a bundle
$E\to X$ that
is invertible for $|z|=1$. After adding $n$ identity clutching summands, it is
homotopic through invertible clutching maps to a general linear family
$L_nq=a(x)z+b(x)$ on $(n+1)E$. The construction is continuous in $x$ and
preserves the stabilized clutching class.

## Facts & Assumptions

**Given:** AC, a compact Hausdorff $X$, $n\geq0$, a finite-rank complex bundle
$E\to X$, and coefficient endomorphisms $a_0,\ldots,a_n$ such that $q(z)$ is
invertible on $S^1$.

[F1] Whitney sums are defined by block-direct-sum transition maps
([[def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles]]).

[F2] A homotopy of clutching automorphisms gives, by the transition-cocycle
construction, a bundle over $(X\times S^2)\times I$; its endpoint restrictions
are isomorphic by homotopy invariance under AC
([[thm-vector-bundles-glued-from-transition-cocycles]],
[[thm-homotopy-invariance-of-vector-bundle-pullback]],
[[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 For $n=0$, take $L_0q=q=0\cdot z+a_0$ and add no summand. Suppose $n\geq1$. On $(n+1)E$ define the block endomorphism. [F1, construct]
$$L_nq(z)=\begin{pmatrix}I&-zI&0&\cdots&0\\0&I&-zI&\cdots&0\\\vdots&&\ddots&\ddots&\vdots\\0&\cdots&0&I&-zI\\a_n&a_{n-1}&\cdots&a_1&a_0\end{pmatrix}.$$
Every entry is a finite polynomial in $z$ and the coefficient bundle maps, and only the superdiagonal entries depend on $z$. Thus $L_nq=a(x)z+b(x)$ varies continuously with $x$. [F1, construct]

2.1 Starting with $L_nq$, add $z$ times column $1$ to column $2$, then $z$ times the new column $2$ to column $3$, and continue. The first $n$ rows become the first $n$ rows of the identity, while the final entry of the last row becomes $a_nz^n+\cdots+a_1z+a_0=q(z)$. Subtract suitable coefficient multiples of the first $n$ rows from the last row to clear its first $n$ entries. The resulting block matrix is $B(z)=\operatorname{diag}(I,\ldots,I,q(z))$. [step 1.1, algebra]

3.1 Each column or row operation in step 2.1 is multiplication by an elementary triangular block matrix. Replacing its off-diagonal entry $c$ by $tc$, $0\leq t\leq1$, is a path of invertible elementary matrices. Since $B(z)$ is invertible on $S^1$ by hypothesis, reversing the finite sequence gives a homotopy through invertible clutching maps from $B$ to $L_nq$. No fiber bases are selected globally: the block operations are bundle maps, and their invertibility can be checked in any local frame. [step 2.1, algebra, construct]

4.1 By [F1], $B$ clutches $[nE,I]\oplus[E,q]$. By [F2] and step 3.1, the corresponding stabilized bundles satisfy the following isomorphism. [F1, F2, step 3.1]
$$[E,q]\oplus[nE,I]\cong[(n+1)E,L_nq].$$
This is the promised stable linearization. The matrix homotopy is a finite
formula; AC is used only through [F2] to identify the endpoint bundles.
[F1, F2, step 3.1] ∎
