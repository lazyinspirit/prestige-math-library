---
id: lem-integral-specht-garnir-straightening-and-field-basis
kind: lemma
title: Integral Garnir straightening and the field-uniform standard basis
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-polytabloid-specht-module-over-an-arbitrary-field, def-young-tableau-standard-tableau-and-shape, def-row-and-column-stabilizers-of-a-tableau, def-tabloid-and-column-orders-for-specht-straightening, lem-leading-tabloid-coefficient-of-a-standard-polytabloid, def-partition-young-diagram-and-conjugate-partition, thm-sign-is-a-homomorphism]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Mark Wildon, Representation Theory of the Symmetric Group, Section 6, printed pp. 26-33"
      url: "https://www.ma.rhul.ac.uk/~uvah099/Maths/Sym/SymGroup2014.pdf"
    - title: "Andrew Snowden, MATH 711 Representation Theory of Symmetric Groups, Lemmas 2.45-2.46 and Section 3.2, PDF pp. 23-24 and 36-39"
      url: "https://people.maths.ox.ac.uk/horawa/math_711.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Let $n\ge0$ and let $\lambda\vdash n$. Write $M^\lambda_R$ for the free
$R$-module on the $\lambda$-tabloids and $S^\lambda_R$ for the $R$-span of the
polytabloids over a commutative ring $R$
([[def-polytabloid-specht-module-over-an-arbitrary-field]]). Then:

1. **(Integral Garnir relation.)** Let $t$ be a $\lambda$-tableau, let
   $j,j+1$ be adjacent columns, let $X$ be a set of entries of column $j$ and
   $Y$ a set of entries of column $j+1$, with
   $|X|+|Y|>\lambda'_j$. Let $G_{X,Y}:=\sum_{g\in T}\operatorname{sgn}(g)g$,
   where $T$ is any set of representatives containing $1$ for the left cosets
   of $H:=S_X\times S_Y$ in $S_{X\cup Y}$ (the transpositions in $S_X$ and
   $S_Y$ act on the corresponding labels and fix all other labels). Then
   $$G_{X,Y}\,e_t=0\qquad\text{in }M^\lambda_{\mathbb Z};$$
   the same identity holds after base change in $M^\lambda_F$ for every field
   $F$, for the same transversal $T$.
2. **(Straightening over $\mathbb Z$.)** For every $\lambda$-tableau $t$, the
   polytabloid $e_t$ is a finite $\mathbb Z$-linear combination of standard
   $\lambda$-polytabloids.
3. **(Integral and field-uniform basis.)** The standard polytabloids
   $\{e_t:t\text{ standard}\}$ are a $\mathbb Z$-basis of $S^\lambda_{\mathbb Z}$;
   for every field $F$, their images under coefficient reduction are an
   $F$-basis of $S^\lambda_F$. In particular
   $\dim_F S^\lambda_F=f^\lambda$ for every field $F$, including $F$ of
   characteristic $2$.

## Facts & Assumptions

**Given:** $n\ge0$, $\lambda\vdash n$, a $\lambda$-tableau $t$, adjacent columns $j,j+1$, subsets $X,Y$ of their entry sets with $|X|+|Y|>\lambda'_j$, and a left-coset transversal $T$ for $S_{X\cup Y}/H$ containing $1$, where $H=S_X\times S_Y$.

[F1] $M^\lambda_R$ is free with the $\lambda$-tabloids as $R$-basis, and $e_s=\kappa_s\cdot\{s\}=\sum_{\gamma\in C_s}\operatorname{sgn}(\gamma)\{\gamma\cdot s\}$ for every tableau $s$; for $\gamma\in C_s$, $\gamma\cdot e_s=\operatorname{sgn}(\gamma)e_s$; moreover $e_{\sigma\cdot s}=\sigma\cdot e_s$ for every $\sigma\in S_n$, and $S^\lambda_R$ is the $R$-span of all $e_s$ ([[def-polytabloid-specht-module-over-an-arbitrary-field]]).

[F2] $\operatorname{sgn}$ is a homomorphism $S_n\to\{\pm1\}$ ([[thm-sign-is-a-homomorphism]]).

[F3] $C_s$ and $R_s$ are the subgroups of $S_n$ preserving each column set and each row set of $s$; they act by permuting labels within columns and within rows respectively ([[def-row-and-column-stabilizers-of-a-tableau]]).

[F4] Column $j$ of $[\lambda]$ has $\lambda'_j$ nodes and $\lambda'_{j+1}\le\lambda'_j$ ([[def-partition-young-diagram-and-conjugate-partition]]).

[F5] A $\lambda$-tableau is a bijection $[\lambda]\to\{1,\dots,n\}$; it is standard when entries strictly increase along rows and down columns, and it is column-standard when entries strictly increase down columns ([[def-young-tableau-standard-tableau-and-shape]], [[def-tabloid-and-column-orders-for-specht-straightening]]).

[F6] The tabloids carry a finite strict total order, and the column-standard tableaux carry a finite strict total order $\prec$ in which $s\prec u$ means that the largest label lying in different columns in $s$ and $u$ is farther left in $s$ ([[def-tabloid-and-column-orders-for-specht-straightening]]).

[F7] If $s$ is column-standard, then the coefficient of $\{s\}$ in $e_s$ is $1$ and every other tabloid occurring in $e_s$ is strictly below $\{s\}$ in the tabloid order of [F6]; moreover distinct standard tableaux have distinct tabloids ([[lem-leading-tabloid-coefficient-of-a-standard-polytabloid]]).

## Proof

**Proof technique:** constructive straightening.

1.1 [construct] Put $Z:=X\cup Y$ and $A_H:=\sum_{h\in H}\operatorname{sgn}(h)h$; then $G_{X\cup Y}:=\sum_{g\in S_Z}\operatorname{sgn}(g)g$ satisfies $G_{X\cup Y}=G_{X,Y}A_H$, because $S_Z$ is the disjoint union of the left cosets $gH$, $g\in T$, and $\operatorname{sgn}(gh)=\operatorname{sgn}(g)\operatorname{sgn}(h)$ by [F2]. Since $H$ permutes labels inside the two columns $j$ and $j+1$ and fixes all other labels, $H\subseteq C_t$ by [F3]; hence [F1] gives $A_He_t=\sum_{h\in H}\operatorname{sgn}(h)h\cdot e_t=\sum_{h\in H}e_t=|H|e_t$, a multiplication in $M^\lambda_{\mathbb Z}$ by the positive integer $|H|=|X|!\,|Y|!$. [given, F1, F2, F3, construct, algebra]

1.2 Let $h\in C_t$ and consider the tabloid $\{h\cdot t\}$ of the tableau $h\cdot t$. The labels of $X$ occupy, in the tableau $h\cdot t$, the positions $h^{-1}(x)$ for $x\in X$; these lie in column $j$, because $h$ preserves each column set by [F3], and they are pairwise distinct positions of that column, hence lie in pairwise distinct rows. Likewise the labels of $Y$ lie in pairwise distinct rows, all of them rows $\le\lambda'_{j+1}\le\lambda'_j$ by [F4], while the labels of $X$ lie in rows $\le\lambda'_j$. All $|X|+|Y|>\lambda'_j$ labels of $Z$ therefore lie in the first $\lambda'_j$ rows of the tabloid, and within this set two labels of $X$ never share a row and two labels of $Y$ never share a row; hence some row of $\{h\cdot t\}$ contains a label $x\in X$ and a label $y\in Y$. [given, F3, F4, F5, algebra]

1.3 [construct] Let $s$ be any $\lambda$-tableau. Sorting the entries of each column of $s$ increasingly gives the unique column-standard $\lambda$-tableau $s^{\mathrm{col}}$ with the same column sets as $s$, and the rule $\pi(s(i,j))=s^{\mathrm{col}}(i,j)$ defines a unique $\pi\in C_s$ with $\pi\cdot s=s^{\mathrm{col}}$. By [F1] and [F5], $e_{s^{\mathrm{col}}}=\pi\cdot e_s=\operatorname{sgn}(\pi)e_s$, so $e_s=\operatorname{sgn}(\pi)e_{s^{\mathrm{col}}}$: it suffices to straighten column-standard polytabloids over $\mathbb Z$. [given, F1, F3, F5, construct, algebra]

1.4 The standard polytabloids are linearly independent over $\mathbb Z$ and over every field $F$. Indeed, let $\sum_sc_se_s=0$ be a finite linear relation with coefficients in $\mathbb Z$ or in a field, not all zero, and let $s$ be a standard tableau whose leading tabloid $\{s\}$ is greatest, in the finite tabloid order of [F6], among the tabloids $\{s'\}$ attached to the tableaux $s'$ with $c_{s'}\ne0$. By [F7] the coefficient of $\{s\}$ in $e_{s'}$ is $0$ for every such $s'\ne s$ (its leading tabloid is $\{s'\}\ne\{s\}$, and all its other tabloids are strictly below $\{s'\}$, hence strictly below $\{s\}$), while the coefficient of $\{s\}$ in $e_s$ is $1$; the coefficient of $\{s\}$ in the relation is therefore $c_s\ne0$, a contradiction. [F6, F7, algebra]

2.1 For $h\in C_t$ let $x\in X$, $y\in Y$ be labels in one row of $\{h\cdot t\}$, as provided by step 1.2. Then $(xy)\cdot\{h\cdot t\}=\{h\cdot t\}$ because a transposition of two labels in one row preserves the row sets. Choose representatives $k$ for the right cosets $k\langle(xy)\rangle$ in $S_Z$. Since $\operatorname{sgn}((xy))=-1$ by [F2], $$G_{X\cup Y}=\sum_k\operatorname{sgn}(k)k\bigl(1-(xy)\bigr),$$ so $G_{X\cup Y}\cdot\{h\cdot t\}=0$. [given, F1, F2, F3, step 1.2, algebra]

2.2 Because $s$ is column-standard but not standard, some row contains adjacent entries with $s(q,j)>s(q,j+1)$; fix such a descent, put $h_0:=\lambda'_j$, and set $x_r:=s(r,j)$ for $q\le r\le h_0$ and $y_a:=s(a,j+1)$ for $1\le a\le q$. Column-standardness gives $x_q<x_{q+1}<\cdots<x_{h_0}$ and $y_1<\cdots<y_q$, while $x_q>y_q$; hence every element of $X:=\{x_q,\dots,x_{h_0}\}$ is larger than every element of $Y:=\{y_1,\dots,y_q\}$. Since the box $(q,j+1)$ lies in $[\lambda]$, we have $q\le\lambda'_{j+1}$, and $|X|+|Y|=(h_0-q+1)+q=\lambda'_j+1>\lambda'_j$. [given, F4, F5, step 1.3, algebra]

3.1 Summing step 2.1 over $h\in C_t$ with coefficients $\operatorname{sgn}(h)$ gives $G_{X\cup Y}e_t=\sum_{h\in C_t}\operatorname{sgn}(h)G_{X\cup Y}\{h\cdot t\}=0$ by [F1]. By step 1.1 this is $G_{X,Y}A_He_t=|H|G_{X,Y}e_t=0$ in $M^\lambda_{\mathbb Z}$. Expanding $G_{X,Y}e_t=\sum_Ta_T\{T\}$ in the tabloid basis, uniqueness of coefficients in the free module [F1] gives $|H|a_T=0$ in $\mathbb Z$ for every tabloid $T$, hence $a_T=0$ since $|H|>0$; therefore $G_{X,Y}e_t=0$ in $M^\lambda_{\mathbb Z}$, which is claim 1 for integral scalars, and its image under $\mathbb Z\to F$ gives the same identity in $M^\lambda_F$ for every field $F$. [given, F1, step 1.1, step 2.1, algebra]

4.1 [construct] Fix a column-standard tableau $s$ and the descent data $X$, $Y$ of step 2.2, with $p:=|X|$ and $Z=X\cup Y$. For each $p$-element subset $A\subseteq Z$ write $X\setminus A=\{a_1<\cdots<a_r\}$ and $A\setminus X=\{b_1<\cdots<b_r\}$ and put $g_A:=(a_1\,b_1)\cdots(a_r\,b_r)$, the empty product being the identity; then $g_A(X)=A$, the $g_A$ are pairwise distinct, and as $A$ runs over the $p$-element subsets of $Z$ they form a left-coset transversal for $H$ in $S_Z$ with $g_X=1$, because $H$ is exactly the setwise stabiliser of $X$ in $S_Z$ and the left cosets $gH$ are distinguished by $g(X)$. Applying step 3.1 to this transversal and using the covariance identity $g\cdot e_s=e_{g\cdot s}$ of [F1] yields, by isolating the identity term, $e_s=-\sum_{A\ne X}\operatorname{sgn}(g_A)\,e_{g_A\cdot s}$ with integer coefficients. [given, F1, step 2.2, step 3.1, construct, algebra]

5.1 For $A\ne X$ let $x_A$ be the greatest element of $X\setminus A$; then $g_A(x_A)\in Y\subseteq$ column $j+1$ of $s$, and every element of $X\setminus A$ other than $x_A$ is smaller than $x_A$, while every element of $Y$ is smaller than every element of $X$ by step 2.2. Under the left action $g_A\cdot s$, the changed labels are exactly the elements of $(X\setminus A)\cup(A\setminus X)\subseteq Z$, and $x_A$ is the greatest of them, moving from column $j$ in $s$ to column $j+1$ in $g_A\cdot s$; all labels greater than $x_A$ are fixed by $g_A$ and stay in their columns. Sorting the columns of $g_A\cdot s$ increasingly gives a column-standard tableau $u_A$ with the same column sets, so $x_A$ stays in column $j+1$, and by step 1.3 and [F5] we have $e_{g_A\cdot s}=\pm e_{u_A}$; since the largest label in different columns of $s$ and $u_A$ is $x_A$, with $c_s(x_A)=j<j+1=c_{u_A}(x_A)$, the order of [F6] gives $s\prec u_A$. [given, F1, F5, F6, step 2.2, step 4.1, algebra]

6.1 There are finitely many column-standard $\lambda$-tableaux, ordered by $\prec$ in [F6]; list them as $s_1\prec s_2\prec\cdots\prec s_N$. For the greatest element $s_N$, if it were not standard then step 4.1 would produce tableaux $u_A$ with $s_N\prec u_A$ by step 5.1, contradicting maximality, so $s_N$ is standard. Now let $k<N$ and suppose every $e_{s_l}$ with $l>k$ is a finite $\mathbb Z$-linear combination of standard polytabloids. If $s_k$ is standard there is nothing to prove; otherwise steps 4.1 and 5.1 express $e_{s_k}$ as a finite $\mathbb Z$-linear combination of elements $e_{u_A}=\pm e_{s_l}$ with $l>k$, which are of the required form by the supposition. Finite downward induction on $k$ therefore proves claim 2 for column-standard tableaux, and step 1.3 removes the column-standard hypothesis: every polytabloid over $\mathbb Z$ is a finite $\mathbb Z$-linear combination of standard polytabloids. [given, F6, step 1.3, step 4.1, step 5.1, algebra]

7.1 By claim 2 every element of $S^\lambda_{\mathbb Z}$, which is spanned by the polytabloids by [F1], lies in the $\mathbb Z$-span of the standard polytabloids, and step 1.4 shows that this family is $\mathbb Z$-linearly independent; hence it is a $\mathbb Z$-basis of $S^\lambda_{\mathbb Z}$. Reducing coefficients along $\mathbb Z\to F$, the images span $S^\lambda_F$ because the reduction of every $e_t$ is an $F$-linear combination of the images of standard polytabloids, and they are $F$-linearly independent by step 1.4 read in $F$; hence they form an $F$-basis of $S^\lambda_F$, so $\dim_FS^\lambda_F=f^\lambda$ by [F5]. Claim 1 for fields is step 3.1, and the empty shape is included since $S^\varnothing_R=R$ with its single standard polytabloid. This proves all three claims. [given, F1, F5, step 1.4, step 3.1, step 6.1, discharge-construct] ∎

## Remarks

- **No division by factorials.** The integral argument never divides by $|H|=|X|!\,|Y|!$: the proof of the Garnir relation first produces the identity $|H|G_{X,Y}e_t=0$ and then cancels the integer $|H|$ inside the free, hence torsion-free, module $M^\lambda_{\mathbb Z}$. This is why the result survives in characteristic $2$ and is not available from the complex-only Garnir relation ([[lem-adjacent-column-garnir-relation]]) by base change.

- **Unitriangularity.** The induction of step 6.1 straightens strictly upward in the column order $\prec$ of [F6], and each step has coefficients $\pm1$; combined with the leading-tabioid unitriangularity of [F7] this gives the standard basis without the hook-length formula or RSK.

- **Consistency with the complex basis.** For $F=\mathbb C$ the field case of claim 3 recovers the published [[thm-standard-polytabloid-basis]] without citing it; the two proofs use the same column order and the same Garnir mechanism, so they agree.

- **No choice.** The transversals in claims 1 and 2 are given by explicit finite rules (a supplied transversal in claim 1, the swapping products $g_A$ in step 4.1), and the induction of step 6.1 runs over a finite ordered set; no selection principle is used.
