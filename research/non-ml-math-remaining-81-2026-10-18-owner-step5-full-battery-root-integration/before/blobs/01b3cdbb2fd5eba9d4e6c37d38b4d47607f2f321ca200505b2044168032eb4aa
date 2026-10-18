---
id: ex-a2-hall-products-and-quantum-serre
kind: example
title: "The A2 Hall products and their quantum Serre relation"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - lem-finite-acyclic-quiver-hall-category-is-hereditary-finitary
  - def-quiver-hall-positive-borel
  - def-untwisted-hall-algebra
  - thm-untwisted-hall-algebra-is-associative-and-unital
  - def-quantum-integers-factorials-and-divided-powers-at-q-i
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Olivier Schiffmann, Lectures on Hall Algebras, arXiv:math/0611617v2"
      url: "https://arxiv.org/pdf/math/0611617v2"
      locator: "§3.3, PDF pp. 37–38, Example 3.15 and equations (3.3)–(3.7): the A2 Hall products and the rank-two Serre relation."
    - title: "Claus Michael Ringel, The Hall Algebra Approach to Quantum Groups, E.L.A.M. Lectures (1993)"
      url: "https://www.math.uni-bielefeld.de/~ringel/opus/elam.pdf"
      locator: "§§3–4: the simple Hall products and divided-power Serre relation."
---

## Statement

For the one-arrow quiver $1\to2$, let $S_1,S_2$ be its simples and let $I$
be the nonzero-arrow representation of dimension $(1,1)$. Then
$$ [S_1]\star[S_2]=\nu^{-1}([S_1\oplus S_2]+[I]),\qquad [S_2]\star[S_1]=[S_1\oplus S_2], $$
and in degree $(2,1)$ the divided-power Serre relation is
$$ [S_1]^{(2)}\star[S_2]-[S_1]\star[S_2]\star[S_1] +[S_2]\star[S_1]^{(2)}=0. $$
Here $x^{(2)}=x^2/[2]_\nu!$ as in
[[def-quantum-integers-factorials-and-divided-powers-at-q-i]].

```tikzcd
1 \arrow[r, "a"] & 2
```

## Facts & Assumptions

**Given:** $k=\mathbb F_q$, $\nu=\sqrt q>1$, and the quiver above.

[F1] Its finite-dimensional representation category is a finite-field
hereditary Hall category with vertex simples
([[lem-finite-acyclic-quiver-hall-category-is-hereditary-finitary]]).

[F2] Hall products count subobjects with quotient on the left and subobject
on the right ([[def-untwisted-hall-algebra]]).

[F3] The untwisted Hall product is associative
([[thm-untwisted-hall-algebra-is-associative-and-unital]]).

[F4] Divided powers use $x^{(n)}=x^n/[n]_\nu!$
([[def-quantum-integers-factorials-and-divided-powers-at-q-i]]).

## Proof



**Proof technique:** classify arrow ranks and count stable subspaces.

1.1 The acyclic Euler form in [F1] is $\chi(\alpha,\beta)=\alpha_1\beta_1+\alpha_2\beta_2-\alpha_1\beta_2$; it is bilinear. Twisting the associative Hall product in [F3] by $\nu^{\chi(\alpha,\beta)}$ remains associative because $\chi(\alpha,\beta)+\chi(\alpha+\beta,\gamma)= \chi(\beta,\gamma)+\chi(\alpha,\beta+\gamma)$. In particular, $\chi(e_1,e_2)=-1$, $\chi(e_2,e_1)=0$, and $\chi(e_1,e_1)=1$. [F1, F3, algebra]

1.2 Let $R_0=S_1^{\oplus2}\oplus S_2$ be the zero-arrow representation of dimension $(2,1)$, and let $R_1=S_1\oplus I$ be the rank-one representation. These are all isoclasses because a map $k^2\to k$ has rank zero or one. In the semisimple one-vertex subcategory, $[S_1]^{(2)}=\nu^2[S_1^{\oplus2}]$: the ordinary square counts the $q+1$ lines, and dividing $\nu(q+1)$ by $[2]_\nu=\nu+\nu^{-1}$ gives $\nu^2$ using [F4]. [F1, F2, F4, construct]

2.1 A representation of dimension $(1,1)$ is one arrow scalar. Its rank is zero, giving $S_1\oplus S_2$, or nonzero, giving the unique isoclass $I$. For each middle object, the unique subobject isomorphic to $S_2$ has quotient $S_1$. Thus both Hall numbers in $[S_1]\star[S_2]$ are one, and [F2] with the Euler value in step 1.1 gives its displayed formula. [F1, F2, step 1.1, construct]

2.2 For $[S_2]\star[S_1]$, the required subobject is $S_1$ at vertex $1$ with quotient $S_2$. Stability forces the arrow to vanish, so the only middle object is $S_1\oplus S_2$, with coefficient one by [F2] and the Euler value in step 1.1. [F1, F2, step 1.1, construct]

2.3 The product $[S_1]^{(2)}\star[S_2]$ has twist $\nu^{\langle2S_1,S_2\rangle}=\nu^{-2}$, cancelled by the coefficient $\nu^2$ from step 1.2. In each of $R_0,R_1$, the full vertex-$2$ copy of $S_2$ is the unique subobject with quotient $S_1^{\oplus2}$. Hence this product is $[R_0]+[R_1]$. [F2, step 1.1, step 1.2, construct]

2.4 The last product $[S_2]\star[S_1]^{(2)}$ has twist $\nu^{\langle S_2,2S_1\rangle}=1$. The only subobject isomorphic to $S_1^{\oplus2}$ occurs in $R_0$, where it is the full vertex-$1$ space; no such subobject is stable in $R_1$ because its arrow is nonzero. The coefficient is $\nu^2$ from step 1.2, so this product is $\nu^2[R_0]$. [F2, step 1.1, step 1.2, construct]

3.1 By associativity from step 1.1, $[S_1]\star[S_2]\star[S_1]=[S_1]\star[S_1\oplus S_2]$. Its twist is $\nu^{\langle S_1,S_1+S_2\rangle}=1$. In $R_0$, a subobject $S_1\oplus S_2$ is obtained by choosing any line at vertex $1$, giving $q+1$ choices; in $R_1$, stability forces that line to be the one-dimensional kernel of the arrow, giving one choice. Thus the middle product is $(q+1)[R_0]+[R_1]$. [F2, F3, step 1.1, step 2.2, construct]

4.1 Subtracting the middle product in step 3.1 from the two outer products in steps 2.3 and 2.4 gives $\bigl(1-(q+1)+\nu^2\bigr)[R_0]+(1-1)[R_1]=0,$ since $q=\nu^2$. Multiplying by $[2]_\nu!$ and reindexing the two divided-power terms yields the ordinary symmetric quantum Serre relation from [[def-quiver-hall-positive-borel]]. [step 2.3, step 3.1, step 2.4, algebra] ∎

