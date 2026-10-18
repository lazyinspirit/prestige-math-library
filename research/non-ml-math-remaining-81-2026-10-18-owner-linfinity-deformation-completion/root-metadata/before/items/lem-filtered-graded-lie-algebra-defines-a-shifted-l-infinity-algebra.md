---
id: lem-filtered-graded-lie-algebra-defines-a-shifted-l-infinity-algebra
kind: lemma
title: "The precise shifted L-infinity structure of a complete filtered differential graded Lie algebra"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-complete-filtered-l-infinity-algebra
  - lem-square-zero-coderivation-is-higher-jacobi-identities
  - def-filtered-maurer-cartan-gauge-path
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification: {}
sources:
  references:
    - title: "Dolgushev and Rogers, A Version of the Goldman–Millson Theorem for Filtered L-infinity-Algebras, section 2 and Appendix A"
      url: "https://arxiv.org/pdf/1407.6735v2"
    - title: "Manetti, Deformation theory via differential graded Lie algebras, section 5"
      url: "https://arxiv.org/pdf/math/0507284v1"
---

## Statement

Let $\mathfrak g$ be a cohomologically graded Lie algebra over a characteristic-zero field: its degree-zero bracket is graded skew, satisfies graded Jacobi, and a degree-one map $d$ satisfies $d^2=0$ and $d[x,y]=[dx,y]+(-1)^{|x|}[x,dy]$. Suppose its degreewise separated complete positive filtration is preserved by $d$ and satisfies $[F^r\mathfrak g,F^s\mathfrak g]\subseteq F^{r+s}\mathfrak g$. With $s:\mathfrak g\to\mathfrak g[1]$ of degree $-1$, set

$$q_1(sx)=-s(dx),\qquad q_2(sx,sy)=(-1)^{|x|}s[x,y],\qquad q_n=0\ (n\ge3).$$

These operations define a complete filtered shifted L∞-algebra. Its degree-zero Maurer–Cartan elements are exactly $sR$, where $R\in F^1\mathfrak g^1$ satisfies $dR+[R,R]/2=0$. Its elementary gauge paths are exactly $R'=-d\xi+[\xi,R]$ with $\xi\in F^1\mathfrak g^0[t]^{\wedge}$, under $w=sR$, $a=s\xi$.

## Facts & Assumptions

**Given:** The differential graded Lie identities and filtration hypotheses in the statement.

[F1] [[lem-square-zero-coderivation-is-higher-jacobi-identities]] gives the shifted unshuffle identities equivalent to a square-zero coderivation.

[F2] [[def-complete-filtered-l-infinity-algebra]] specifies the complete additive filtration conditions.

[F3] [[def-filtered-maurer-cartan-gauge-path]] specifies curvature and polynomial gauge paths in the shifted convention.

## Proof

1.1 The degree of each displayed operation is one. If $a=|x|$, $b=|y|$, skewsymmetry gives $q_2(sy,sx)=(-1)^{b+1+ab}s[x,y]$, so $q_2(sx,sy)=(-1)^{(a-1)(b-1)}q_2(sy,sx)$. Hence $q_2$ descends to $S^2(\mathfrak g[1])$. The unary shifted identity is $q_1^2(sx)=s(d^2x)=0$. [given, F1, algebra]

2.1 On $(sx,sy)$ the three arity-two terms are $q_1q_2(sx,sy)=(-1)^{a+1}s[dx,y]-s[x,dy]$, $q_2(q_1sx,sy)=(-1)^a s[dx,y]$, and $(-1)^{a-1}q_2(sx,q_1sy)=s[x,dy]$. They sum to zero by the differential derivation identity. [given, F1, step 1.1, algebra]

2.2 Put $c=|z|$. The three arity-three unshuffle terms, with their Koszul signs, sum to $(-1)^b s\bigl(\bigl[ [x,y],z\bigr]-(-1)^{bc}\bigl[ [x,z],y\bigr]+(-1)^{a(b+c)}\bigl[ [y,z],x\bigr]\bigr)$. Skewsymmetry rewrites the parenthesis as $\bigl[ [x,y],z\bigr]+(-1)^{ab}[y,[x,z]]-[x,[y,z]]$, which is zero by graded Jacobi. In arities at least four every composition contains an operation of arity at least three and vanishes. Thus [F1] gives square zero. [given, F1, step 1.1, algebra]

3.1 The shifted filtration is complete and separated in each degree because the original one is; $q_1$ preserves it and $q_2$ adds filtration indices. All higher operations vanish. These are exactly [F2]. For $R\in F^1\mathfrak g^1$, the curvature is $C(sR)=-s(dR+[R,R]/2)$ by substituting $|R|=1$. Thus the asserted Maurer–Cartan equation is equivalent to $C(sR)=0$. [given, F2, F3, step 2.2, algebra]

4.1 For $\xi\in F^1\mathfrak g^0$, $q_1^{sR}(s\xi)=-s(d\xi)-s[R,\xi]=s(-d\xi+[\xi,R])$ by skewsymmetry. Applying this quotientwise to polynomial coefficients translates [F3] exactly to $R'=-d\xi+[\xi,R]$. The degree of $s\xi$ is $-1$, as required for the path parameter. [given, F3, step 3.1, algebra] ∎
