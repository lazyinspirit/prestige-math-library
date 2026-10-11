---
id: thm-existence-and-uniqueness-of-the-parabolic-kazhdan-lusztig-basis
kind: theorem
title: "Existence and uniqueness of the parabolic Kazhdan–Lusztig bases"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 2
deps: [lem-the-parabolic-hecke-modules-have-standard-bases-actions-and-compatible-bars,
       def-parabolic-hecke-module-and-antispherical-standard-basis,
       thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis,
       def-normalized-type-a-hecke-algebra-and-its-bar-involution,
       def-bruhat-order-on-the-symmetric-group,
       lem-bruhat-order-basic-properties-for-permutations]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Nicolas Libedinsky and Geordie Williamson, The anti-spherical category (author-hosted complete PDF of the article)"
      url: "https://nicolaslibedinsky.com/wp-content/uploads/2022/01/Antispherical.pdf"
      locator: "Theorem 2.2(2)-(3) (printed p. 8) and its proof: existence and uniqueness of the self-dual elements c_x in M and d_x in N with c_x in m_x + sum_{y in ^IW} vZ[v]m_y and d_x in n_x + sum vZ[v]n_y; the construction is attributed to Deodhar [Deo87] and Soergel; complete statement and proof sketch read."
---

## Statement

Retain the notation of
[[def-parabolic-hecke-module-and-antispherical-standard-basis]] and
[[lem-the-parabolic-hecke-modules-have-standard-bases-actions-and-compatible-bars]].
For every $x\in{}^JW$ there is a unique $C_x\in M^J$ and a unique
$D_x\in N^J$ with (i) $\overline{C_x}=C_x$ and $\overline{D_x}=D_x$, and (ii)
$C_x\in m_x+\sum_{y<x}v\mathbb Z[v]\,m_y$ and
$D_x\in n_x+\sum_{y<x}v\mathbb Z[v]\,n_y$, the sums over the lower Bruhat
ideal of $x$ inside ${}^JW$. The sets $\{C_x\}_{x\in{}^JW}$ and
$\{D_x\}_{x\in{}^JW}$ are $A$-bases of $M^J$ and $N^J$. No coefficientwise
positivity is asserted.

## Facts & Assumptions

**Given:** The modules $M^J,N^J$ with their standard bases $\{m_x\},\{n_x\}$ indexed by ${}^JW$, and the bar involutions of
[[lem-the-parabolic-hecke-modules-have-standard-bases-actions-and-compatible-bars]]; $A=\mathbb Z[v^{\pm1}]$.

[F1] $\{m_x:x\in{}^JW\}$ and $\{n_x:x\in{}^JW\}$ are $A$-bases of $M^J$ and $N^J$ ([[lem-the-parabolic-hecke-modules-have-standard-bases-actions-and-compatible-bars]] (1)).

[F2] The bar is an $A$-antilinear involution with $\overline{m_y}=m_y+\sum_{x<y}a_{x,y}m_x$ and $\overline{n_y}=n_y+\sum_{x<y}b_{x,y}n_x$, where the sums range over the lower Bruhat ideal of $y$ inside ${}^JW$ and $a_{x,y},b_{x,y}\in A$ ([[lem-the-parabolic-hecke-modules-have-standard-bases-actions-and-compatible-bars]] (3)).

[F3] Bruhat order on $S_n$ is a finite graded partial order: $y<x$ implies $\ell(y)<\ell(x)$, and lower ideals are finite, so the sets $\{y\in{}^JW:y\le x\}$ are finite and admit induction on length ([[def-bruhat-order-on-the-symmetric-group]], [[lem-bruhat-order-basic-properties-for-permutations]] (b),(e)).

[F4] $A=\mathbb Z[v^{\pm1}]$ and $v\mathbb Z[v]\cap v^{-1}\mathbb Z[v^{-1}]=\{0\}$ ([[def-normalized-type-a-hecke-algebra-and-its-bar-involution]]).

[F5] The ordinary Kazhdan--Lusztig triangular construction over a finite Bruhat ideal, with bar-duality matrix $R$ satisfying $\bar RR=I$, diagonal one and lower-triangular support, produces the unique bar-fixed elements with the prescribed triangular support and shows they form a basis ([[thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis]], steps 1.1--3.2 of its proof).

## Proof

**Proof technique:** direct: run the triangular bar-fixed induction of [[thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis]] over the finite lower Bruhat ideal inside ${}^JW$, for the two modules simultaneously.

1.1 **The coefficient matrices.** Define $r_{x,y}\in A$ for $x,y\in{}^JW$ by $\overline{m_y}=\sum_{x\le y}r_{x,y}m_x$, so $r_{x,y}=a_{x,y}$ for $x<y$, $r_{y,y}=1$, and $r_{x,y}=0$ when $x\not\le y$; define $s_{x,y}$ analogously from $\overline{n_y}=\sum_{x\le y}s_{x,y}n_x$. Applying bar to $\overline{m_y}=\sum_{x\le y}r_{x,y}m_x$ and using $\overline{\overline{m_y}}=m_y$ gives $m_y=\sum_{x\le y}\overline{r_{x,y}}\,\overline{m_x}=\sum_{x'\le y}\bigl(\sum_{x:x'\le x\le y}\overline{r_{x,y}}r_{x',x}\bigr)m_{x'}$; by [F1] the coefficient of $m_{x'}$ is $\delta_{x',y}$, that is, $\bar RR=I$ for the lower-triangular matrix $R$ with entries $r_{x,y}$; the same holds for the matrix $S=(s_{x,y})$. [F1, F2, algebra]

2.1 **Construction of the coefficients.** Fix $w\in{}^JW$ and descend on $d=\ell(w)-\ell(x)$ over the finite lower ideal $I_w=\{x\in{}^JW:x\le w\}$ of [F3], starting with $c_{w,w}=1$. Suppose $x<w$ and $c_{y,w}$ has been constructed for every $y\in I_w$ with $x<y\le w$, satisfying $c_{y,w}=\sum_{y\le z\le w}r_{y,z}\overline{c_{z,w}}$; note that all cited labels lie in $I_w$. Put $a_x:=\sum_{x<y\le w}r_{x,y}\overline{c_{y,w}}$. Then $\overline{a_x}=\sum_{x<y\le w}\overline{r_{x,y}}c_{y,w}=\sum_{x<y\le z\le w}\overline{r_{x,y}}r_{y,z}\overline{c_{z,w}}=-\sum_{x<z\le w}r_{x,z}\overline{c_{z,w}}=-a_x$, where the middle equality substitutes the induction equations and the third uses $\bar RR=I$ from step 1.1: the sum over $x\le y\le z$ is zero for $x<z$, and its omitted diagonal term is $\overline{r_{x,x}}r_{x,z}=r_{x,z}$. Write $a_x=\sum_{m\in\mathbb Z}\gamma_mv^m$; anti-invariance under $v\mapsto v^{-1}$ gives $\gamma_{-m}=-\gamma_m$, hence $\gamma_0=0$. Define $c_{x,w}:=\sum_{m>0}\gamma_mv^m$, so $c_{x,w}\in v\mathbb Z[v]$ and $c_{x,w}-\overline{c_{x,w}}=a_x$. The induction is finite and uses no choice principle. [F1, F2, F4, F5, step 1.1, algebra]

3.1 **Bar invariance and the coefficient equations.** Set $C_w:=\sum_{y\in I_w}c_{y,w}m_y$. The coefficient of $m_x$ in $\overline{C_w}$ is $\sum_{x\le y\le w}r_{x,y}\overline{c_{y,w}}$. For $x=w$ this is $\overline{c_{w,w}}=1=c_{w,w}$; for $x<w$ it is $\overline{c_{x,w}}+a_x=c_{x,w}$ by step 2.1, and for $x\notin I_w$ the support of $r_{x,y}$ makes the coefficient zero ($x\le y\le w$ would put $x\in I_w$). Hence $\overline{C_w}=C_w$ and the coefficient equation $c_{x,w}=\sum_{x\le y\le w}r_{x,y}\overline{c_{y,w}}$ holds for every $x\le w\in{}^JW$; this proves the existence, the bar invariance and the triangular support $C_w\in m_w+\sum_{y<w}v\mathbb Z[v]m_y$ of (i),(ii). Repeating the identical construction with the matrix $S$ in place of $R$ produces $D_w\in n_w+\sum_{y<w}v\mathbb Z[v]n_y$ with $\overline{D_w}=D_w$. [F1, F2, step 2.1, algebra]

4.1 **Uniqueness.** Suppose $h=\sum_{y<w}c_ym_y\in M^J$ is bar-fixed with every $c_y\in v\mathbb Z[v]$. If $h\ne0$, choose a Bruhat-maximal $x$ in its finite support $I_w\setminus\{w\}$. The coefficient of $m_x$ in $\overline h$ is $\overline{c_x}$: no $y>x$ is supported, and $r_{x,y}\ne0$ requires $x\le y$. Since $h=\overline h$ and the $m_y$ are independent, $c_x=\overline{c_x}$; but bar maps $v\mathbb Z[v]$ into $v^{-1}\mathbb Z[v^{-1}]$, so the common value lies in $v\mathbb Z[v]\cap v^{-1}\mathbb Z[v^{-1}]=\{0\}$ by [F4], a contradiction. Hence $h=0$: the bar-fixed element with the prescribed triangular support is unique, and likewise in $N^J$. [F1, F4, step 3.1, algebra]

5.1 **Bases.** The transition from $(m_x)_{x\in{}^JW}$ to $(C_x)_{x\in{}^JW}$ is unitriangular over the finite Bruhat order (each $C_x=m_x+\sum_{y<x}c_{y,x}m_y$), so it is invertible over $A$; hence $\{C_x\}$ is an $A$-basis of $M^J$. The same holds for $\{D_x\}$ in $N^J$. This proves the theorem for both modules. [F1, step 3.1, step 4.1, algebra] ∎

## Remarks

The construction is the ordinary Kazhdan--Lusztig triangular induction run
over the finite poset $({}^JW,\le)$ with the induced bar-duality matrix; the
only inputs are the bar involution, the top coefficient one of the induced
bar, and the lower-triangular support. Only the listed facts, hence no
coefficientwise positivity, degree or parity statement, enter; those are not
asserted here.
