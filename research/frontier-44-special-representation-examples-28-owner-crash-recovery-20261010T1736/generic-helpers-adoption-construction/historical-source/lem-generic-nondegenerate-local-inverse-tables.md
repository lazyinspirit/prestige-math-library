---
id: lem-generic-nondegenerate-local-inverse-tables
kind: lemma
title: "Generic nondegenerate local inverse tables on integer colors"
status: draft
origin: session
deps: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Brundan and Kleshchev, Blocks of cyclotomic Hecke algebras and Khovanov-Lauda algebras, full arXiv:0808.2032v4"
      url: "https://arxiv.org/pdf/0808.2032v4"
---

## Statement

Work over a field $k$ of characteristic zero, with $q\in k^\times$ of infinite multiplicative order, integer colors, and the arrows $a\to a+1$. On any finite permutation-stable set of color words, complete the dot ring at the zero dots. The completed local affine Hecke presentation at spectral words $(q^{i_1},\ldots,q^{i_d})$ and the completed type-$A_\infty$ KLR presentation have mutually inverse changes of generators below. This is a local statement; it does not assert cyclotomic support, a tower comparison, or a Specht dictionary.

Write $x=q^a(1-u)$, $z=q^b(1-v)$ and set
$$P_{ab}(u,v)=\begin{cases}1&a=b,\\(1-q)/(1-x/z)&a\ne b,\end{cases}$$
$$Q_{ab}(u,v)=\begin{cases}1-q+qv-u&a=b,\\-q^a/(x-z)&a=b+1,\\(x-qz)/(x-z)&a\ne b,\ a\ne b+1.\end{cases}$$
These are explicit, invertible, rank-independent power series over $k$; in particular the result applies over $\mathbb C$. Use $y_r=1-q^{-i_r}X_r$ on $e(i)$ and the source convention $\psi_r=-\tau_r$, where $\tau$ is the native crossing. The changes of generators are
$$\psi_re(i)=(T_r+P_{i_ri_{r+1}}(y_r,y_{r+1}))Q_{i_ri_{r+1}}(y_r,y_{r+1})^{-1}e(i),$$
$$X_re(i)=q^{i_r}(1-y_r)e(i),\qquad T_re(i)=(\psi_rQ_{i_ri_{r+1}}(y_r,y_{r+1})-P_{i_ri_{r+1}}(y_r,y_{r+1}))e(i).$$
The quadratic polynomial is $K_{aa}=0$, $K_{a,a+1}(u,v)=v-u$, $K_{a+1,a}(u,v)=u-v$, and $K_{ab}=1$ otherwise. Equal-color dot-sliding constants for $\psi$ are $+1$. The braid order is $\psi_1\psi_2\psi_1-\psi_2\psi_1\psi_2$; on $(a,b,a)$ its value is $[K_{ab}(u,v)-K_{ab}(w,v)]/(w-u)$, hence respectively $+1,-1,0$ for forward, backward, nonadjacent colors.

## Facts & Assumptions

**Given:** The integer-color local presentations just stated. Their coefficient ring is the direct sum of one formal power-series ring per color word; no finite-$e$ definition or comparison theorem is being instantiated. In the Hecke presentation the spectral idempotents are the projections to these local rings. Multiplication by $X_r$ on its $i$-summand is $q^{i_r}(1-y_r)$. The usual affine Hecke relations are $T_r^2=(q-1)T_r+q$, $T_rX_rT_r=qX_{r+1}$, and the braid and distant commutation relations.

## Proof

**Given:** The displayed presentations and the formal series $P,Q$.

1.1 All coefficients are legal. For $a\ne b$, $x-z$ has constant $q^a-q^b\ne0$. In the last case of $Q$, $x-qz$ has nonzero constant because $a\ne b+1$. In the backward case $-q^a/(x-z)$ is a unit. In the equal case $1-q\ne0$. Thus every denominator is a unit and each $Q$ is a unit. The formulas depend only on the adjacent pair, so they make sense in every rank and in every finite color window. [given, algebra]



1.2 Use an explicit polynomial representation. On the $i$-component let dots multiply, and let a permutation simultaneously permute coordinates and colors. With $\partial_r=(s_r-1)/(y_r-y_{r+1})$, define $\psi_r$ on an equal pair to be $\partial_r$; on an unequal source pair $(a,b)$ let its output in the swapped component be $h_{ab}(u,v)s_r$, where $h_{ab}(u,v)=v-u$ if $a=b+1$ and $h_{ab}=1$ otherwise. The equal-color quotient is a power series because the numerator vanishes on $u=v$. Its product rule is $\partial(fg)=\partial(f)g+(sf)\partial(g)$. Consequently $\partial v=u\partial+1$, $v\partial=\partial u+1$, and $\partial^2=0$. On unequal pairs the square is multiplication by $h_{ba}(u,v)h_{ab}(v,u)=K_{ab}(u,v)$. These computations verify all mixed and quadratic relations, including the native sign $\tau=-\psi$. [given, algebra]



2.1 Three distinct colors. In both three-crossing words the coefficient of the longest permutation is the product of the three pair factors, transported to the same coordinates. Each pair is crossed once. The factors commute and $s_1s_2s_1=s_2s_1s_2$, so the two words agree. This argument does not require nonadjacency; some of the factors can be linear. [step 1.2, algebra]



2.2 First two colors equal. For $(a,a,b)$ write $h=h_{ab}$. The left word is $h(u,v)h(u,w)s_1s_2\partial_1$, and the right word is $\partial_2h(u,v)h(u,w)s_1s_2$. The product of factors is invariant under swapping $v,w$, so its $\partial_2$ is zero. Also $\partial_2s_1s_2=s_1s_2\partial_1$ by conjugating the displayed quotient. The words agree. For $(a,b,b)$ the left word is $\partial_1h(v,w)h(u,w)s_2s_1$, and the right word is $h(v,w)h(u,w)s_2s_1\partial_2$. Here the product is invariant under swapping $u,v$, and $\partial_1s_2s_1=s_2s_1\partial_2$. This verifies the third color pattern separately. [step 1.2, algebra]



2.3 Outer colors equal. On $(a,b,a)$ with $a\ne b$, put $h=h_{ab}$ and $g=h_{ba}$. Expanding the one equal-color crossing gives left and right words $\frac{g(u,v)}{u-w}\bigl(h(v,w)s_1s_2s_1-h(v,u)\bigr),\qquad\frac{h(v,w)}{u-w}\bigl(g(u,v)s_2s_1s_2-g(w,v)\bigr).$ Their longest-permutation terms cancel. Their difference is $[K_{ab}(w,v)-K_{ab}(u,v)]/(u-w)$, the stated braid correction. This equals $1$ when $b=a+1$, $-1$ when $a=b+1$, and zero otherwise. Thus the apparent denominator cancels identically. [step 1.2, algebra]



2.4 All three colors equal. Put $D=(u-v)(u-w)(v-w)$. Expanding the quotients and collecting each of the six permutations gives $\partial_1\partial_2\partial_1=\partial_2\partial_1\partial_2=-D^{-1}\sum_{t\in S_3}\operatorname{sgn}(t)t.$ The numerator is alternating and hence divisible by each of the three pair differences, so this is an operator on power series. This explicitly supplies the all-equal case omitted as an exercise in the source. Together with steps 2.1–2.3 it proves all five braid patterns. [step 1.2, algebra]



2.5 Compute the Hecke generators in the same representation. At an output component set $U=X_r$, $V=X_{r+1}$. For unequal colors the swapped input series $Q$ times $h$ is $(qU-V)/(U-V)$: in the backward case $qU-V=q^a(v-u)$, and the swapped input series is $-q^a/(V-U)=q^a/(U-V)$, so multiplying by $h=v-u$ gives exactly the stated coefficient. In every other unequal case this is the last row of $Q$ directly. Also $-P=(1-q)V/(U-V)$. For equal colors, expand $\partial Q-1$; its permutation coefficient is $(1-q+qu-v)/(u-v)$ and its identity coefficient is $-(1-q)(1-v)/(u-v)$. Thus in every case $T_r=A(U,V)s_r+B(U,V),\qquad A(U,V)=\frac{qU-V}{U-V},\quad B(U,V)=\frac{(1-q)V}{U-V}.$ The equal-color poles cancel on power series, as follows already from $T=\partial Q-1$. [step 1.1, step 1.2, algebra]



3.1 Mixed and quadratic Hecke identities. Write $A_{ij}=A(X_i,X_j)$ and $B_{ij}=B(X_i,X_j)$. Direct common-denominator expansion gives $B_{ij}+B_{ji}=q-1$, $A_{ij}=q-B_{ij}$, and $A_{ij}A_{ji}=q+(q-1)B_{ij}-B_{ij}^2$. Squaring $A_{ij}s+B_{ij}$ therefore gives $(q-1)T+q$. The identity $TX_i-X_{i+1}T=(1-q)X_{i+1}$ follows by cancellation of its permutation term. Combining this identity with the quadratic identity gives $TX_iT=qX_{i+1}$. Distant commutations follow from disjoint variables. [step 2.5, algebra]



4.1 The Hecke braid holds in every color pattern, including all equal. Set $c=q-1$. Clearing the three pair denominators gives the rational identity $B_{13}(c-B_{12}-B_{23})+B_{12}B_{23}=0$. The coefficients of the longest permutation, $s_1s_2$, and $s_2s_1$ in $T_1T_2T_1$ are $A_{12}A_{13}A_{23}$, $A_{12}A_{13}B_{23}$, and $B_{12}A_{23}A_{13}$; the right word has the same coefficients. The $s_1$ coefficients are $A_{12}(B_{13}B_{21}+B_{12}B_{23})$ and $A_{12}B_{23}B_{13}$; the displayed identity makes them equal. The $s_2$ comparison is its transposed version. The identity coefficients differ by $(B_{12}-B_{23})\bigl(B_{13}(c-B_{12}-B_{23})+B_{12}B_{23}\bigr)=0.$ This uses the quadratic product identity of step 3.1. These are all six permutations, so the braid is proved. It is a rational identity before any color specialization; the equal-color operators preserve power series by step 2.5. [step 2.5, step 3.1, algebra]



5.1 These operator checks imply presentation identities, rather than identities on a possibly nonfaithful module. For Hecke coefficients the relation is $T_rf=(s_rf)T_r+B(X_r,X_{r+1})(f-s_rf)$. It follows first on the Laurent generators from the affine mixed relation, then on products by its product rule, and on formal local coefficients by continuity. At equal colors $f-s_rf$ is divisible by $X_r-X_{r+1}$; at unequal colors that denominator is a unit. This also gives the spectral-idempotent relation by applying the same formula to the local projections. For KLR use its displayed divided-difference product rule. Thus in either presentation coefficients can be moved past crossings. A crossing word reduces to a chosen reduced word for a permutation: delete adjacent repeated simple reflections using the quadratic relation, and change reduced words using commuting and three-term braid moves. For KLR the braid correction has fewer crossings. Induction on crossing length therefore spans the algebra by coefficient multiples of one chosen word per permutation. The elementary adjacent-transposition sorting algorithm supplies the requisite Coxeter reductions. In the rational crossed-product action, each reduced word has a nonzero coefficient of its own permutation; all other terms have shorter permutation length. Distinct permutations are linearly independent over the rational function field: in a minimal nonzero relation of automorphisms, apply it to $fg$ and subtract one automorphism's value on $f$ times its application to $g$; choose a coordinate $f$ moved differently by two permutations to obtain a shorter relation, a contradiction. Color words in different output components are already independent. Hence the spanning words are independent and both actions are faithful. The argument extends to formal coefficients using their fraction fields and the same finite spanning words. [step 1.2, step 2.4, step 4.1, algebra]



6.1 Both directions and both composites. In the faithful KLR action, steps 2.5–4.1 prove the Hecke relations of the displayed inverse generators. In the faithful local Hecke action, solving step 2.5 gives precisely the polynomial crossings of step 1.2, whose relations were proved in steps 1.2 and 2.1–2.4. Since $Q$ is a unit, the two operator subalgebras generated by coefficients and their respective crossings coincide. Thus the presentations are isomorphic. On idempotents and dots the two composites are the identity by the spectral decomposition and $X_r=q^{i_r}(1-y_r)$. On crossings the composite is $(\psi_rQ-P+P)Q^{-1}=\psi_r$; on Hecke crossings it is $(T_r+P)Q^{-1}Q-P=T_r$. These are ordered products; no coefficient has been commuted past a crossing. This completes the local inverse comparison in both directions. [step 1.1, step 5.1, construct] ∎

## Remarks

The polynomial representation is used before cyclotomic quotienting, where it is faithful. No faithfulness of a cyclotomic polynomial quotient is asserted. A global cyclotomic comparison still requires support, nilpotence, quotient ideal transport and tower compatibility. This artifact is a proposed supplier and does not itself close either pending consumer or establish a standard-module identification.
