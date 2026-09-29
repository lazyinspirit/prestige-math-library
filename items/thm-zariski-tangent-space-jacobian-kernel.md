---
id: thm-zariski-tangent-space-jacobian-kernel
kind: theorem
title: "The Jacobian kernel computes the tangent space"
status: draft
origin: pipeline
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-jacobian-matrix-affine-algebraic-set
  - lem-tangent-vectors-as-dual-number-points
  - def-dual-numbers-scheme
  - def-scheme-over-base
  - thm-affine-scheme-ring-anti-equivalence
  - thm-universal-property-of-a-polynomial-ring-on-a-family
  - thm-quotient-ring-universal-property
  - lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, v6.10, §4d Definition 4.22 and §4f Proposition 4.26"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
---

## Statement

Let $k$ be any field, let $n\geq0$ be finite, let $I$ be an ideal of
$k[t_1,\ldots,t_n]$, and put
$$X=\operatorname{Spec}(k[t_1,\ldots,t_n]/I).$$
Let $a=(a_1,\ldots,a_n)\in X(k)$, and let
$f_1,\ldots,f_r$ be any finite generating list of the actual ideal $I$.
Then the coordinate-velocity map gives a canonical $k$-linear isomorphism
$$T_aX\cong\ker\!\left(J_{(f_1,\ldots,f_r)}(a):k^n\longrightarrow k^r\right).$$
The kernel is independent of the chosen finite generating list of $I$. No
reducedness, perfectness, or characteristic hypothesis is needed. Finiteness of
the list is available for every finite $n$ by the finite-variable polynomial
Noetherian result cited below.

## Facts & Assumptions

**Given:** A field $k$, finite $n\geq0$, an ideal $I\subseteq k[t_1,\ldots,t_n]$, the affine $k$-scheme $X=\operatorname{Spec}(A)$ with $A=k[t_1,\ldots,t_n]/I$, and a rational point $a\in X(k)$, represented by its coordinate tuple $(a_1,\ldots,a_n)$. Set $D=k[\epsilon]/(\epsilon^2)$.

[F1] [[def-jacobian-matrix-affine-algebraic-set]]: the equation-row Jacobian matrix uses formal monomial derivatives at a rational point and the actual scheme ideal.

[F2] [[lem-tangent-vectors-as-dual-number-points]]: $T_aX$ is naturally isomorphic as a $k$-vector space to the fibre of based dual-number maps over $a$; equivalently, its vectors are the coefficient derivations of those maps.

[F3] [[def-dual-numbers-scheme]]: $D=k[\epsilon]/(\epsilon^2)$, so every element is uniquely $c+\epsilon d$ with $c,d\in k$ and $\epsilon^2=0$.

[F4] [[def-scheme-over-base]]: a $k$-morphism commutes with the structure maps to $\operatorname{Spec}k$.

[F5] [[thm-affine-scheme-ring-anti-equivalence]]: ring maps $A\to B$ correspond contravariantly to morphisms $\operatorname{Spec}B\to\operatorname{Spec}A$; together with [F4], the maps over $k$ are the $k$-algebra maps.

[F6] [[thm-universal-property-of-a-polynomial-ring-on-a-family]]: a coefficient map and assigned images of the variables determine a unique polynomial-ring homomorphism.

[F7] [[thm-quotient-ring-universal-property]]: a ring map from $k[t_1,\ldots,t_n]$ that kills $I$ factors uniquely through $k[t_1,\ldots,t_n]/I$.

[F8] [[lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct]]: for every field and finite $n$, every ideal of $k[t_1,\ldots,t_n]$ has a finite generating list; the result is choice-free.

## Proof

**Proof technique:** direct.

1.1 By [F8], fix a finite list $f_1,\ldots,f_r$ generating $I$. Since $a$ is a $k$-rational point, the affine anti-equivalence [F5] and the base condition [F4] give a $k$-algebra map $A\to k$. Its composite with the quotient map is evaluation at $a$: the polynomial universal property [F6] identifies the composite as the unique map sending $t_j$ to $a_j$. It kills $I$, so $f_i(a)=0$ for each $i$. [F4, F5, F6, F8, given, algebra]

1.2 For any $v=(v_1,\ldots,v_n)\in k^n$, [F6] gives a unique $k$-algebra map $\phi_v:k[t_1,\ldots,t_n]\to D$ with $t_j\mapsto a_j+\epsilon v_j$. For a monomial $t^e=\prod_jt_j^{e_j}$, expansion and $\epsilon^2=0$ give $t^e(a+\epsilon v)=a^e+\epsilon\sum_{j:e_j>0}e_j a_1^{e_1}\cdots a_j^{e_j-1}\cdots a_n^{e_n}v_j$. Extending over its finitely many monomials yields $p(a+\epsilon v)=p(a)+\epsilon\sum_{j=1}^n(\partial p/\partial t_j)(a)v_j$; the integer $e_j$ is read in $k$, including in positive characteristic, and the empty sum and product conventions cover $n=0$. [F1, F3, F6, given, algebra]

2.1 The map $\phi_v$ kills $I$ exactly when it kills every generator $f_i$. By steps 1.1 and 1.2, $\phi_v(f_i)=\epsilon\sum_{j=1}^n(\partial f_i/\partial t_j)(a)v_j$, which is zero exactly when row $i$ of $J_{(f_1,\ldots,f_r)}(a)$ annihilates $v$. Thus $\phi_v$ factors uniquely through $A$ by [F7] exactly when $J(a)v=0$, and its reduction modulo $\epsilon$ is $a$. Conversely, any based $k$-morphism $\operatorname{Spec}D\to X$ corresponds by [F4, F5] to a $k$-algebra map $A\to D$ reducing to evaluation at $a$; the images of the coordinates have unique form $a_j+\epsilon v_j$. By [F6] its composite from the polynomial ring is $\phi_v$, and the same calculation forces $J(a)v=0$. The two constructions are inverse. Their coefficient derivations depend $k$-linearly on $v$, and [F2] identifies them with $T_aX$, proving the canonical linear isomorphism in the statement and both membership implications. [F2, F3, F4, F5, F6, F7, step 1.1, step 1.2, given, algebra]

2.2 Let $g_1,\ldots,g_s$ be another finite generating list of $I$, and write each $g_\ell=\sum_i h_{\ell i}f_i$. The coefficient-of-$\epsilon$ formula in step 1.2 is a derivation because each $\phi_v$ is a ring homomorphism. Its product rule in each coordinate direction, together with $f_i(a)=0$, gives $dg_\ell(a)=\sum_i h_{\ell i}(a)df_i(a)$, so each row of $J_g(a)$ lies in the row span of $J_f(a)$. Reversing the lists gives equality of row spans and hence equality of their annihilators, which are the kernels in $k^n$. For $n=0$ all rows are empty and both row spans are zero. [F1, step 1.1, step 1.2, algebra]

3.1 The boundary cases are explicit. If $X$ is empty there is no rational point, so the pointwise statement has no instance. If $r=0$, then $I=(0)$, the matrix has no rows, and the result says $T_a\mathbf A_k^n=k^n$. If $n=0$ and a rational point exists, its $k$-algebra map $k/I\to k$ composed with $k\to k/I$ is the identity, so $I=(0)$; hence $T_aX=k^0=0$. In one coordinate, $X=\operatorname{Spec}k[t]/(t^2)$ at $0$ has Jacobian row $2t|_0=0$ (also in characteristic $2$), so its tangent space is all of $k$, as the scheme-theoretic nilpotent structure requires. The zero vector corresponds to the constant based map $t_j\mapsto a_j$. No AC or DC is used: the finite generating tuple is chosen for this single ideal, and no basis or family of choices is made. Steps 2.1 and 2.2 prove both directions of the kernel characterization and generator independence. [F2, F3, F8, step 1.1, step 1.2, step 2.1, step 2.2, given, algebra] ∎
