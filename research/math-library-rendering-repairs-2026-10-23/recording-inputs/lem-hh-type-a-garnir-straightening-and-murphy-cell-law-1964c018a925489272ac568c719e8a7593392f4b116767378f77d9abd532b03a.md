---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/lem-hh-type-a-garnir-straightening-and-murphy-cell-law.json
  precheck: pass
id: lem-hh-type-a-garnir-straightening-and-murphy-cell-law
kind: lemma
title: "Integral type-A Garnir straightening and the Murphy cell law"
status: published
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 2
deps:
  - def-hh-cell-datum-dominance-and-cell-ideals
  - def-hh-multipartitions-standard-tableaux-and-generic-contents
  - def-hh-cyclotomic-murphy-elements
  - lem-hh-colored-permutation-rsk-and-tableau-square-count
  - lem-hh-finite-matrix-and-module-preliminaries
  - lem-dj-bridge-parabolic-double-coset-annihilation
  - lem-dj-bridge-sign-automorphism-and-star-dual
  - lem-bruhat-order-basic-properties-for-permutations
  - lem-hh-hecke-anti-involution-bar-and-normalization
  - thm-hh-parabolic-minimal-representatives-and-length-additivity
  - thm-hh-generic-coxeter-hecke-standard-basis
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete author-uploaded preliminary lecture manuscript (1998)"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Chapter 3, §§3.3–3.18, printed pp. 18–25 (PDF pp. 24–31): row-module action, Garnir belt identity, row-standard straightening, basis, column refinement, dominance ideals, and cell law. Complete passages inspected; the dominance refinement below uses the independent trace and double-coset proof rather than the incomplete coefficient-subtraction paragraph of Proposition 3.16."
    - title: "Richard Dipper, Gordon James, and Andrew Mathas, Cyclotomic q-Schur algebras, Mathematische Zeitschrift 229 (1998), 385–416"
      url: "https://pnp.mathematik.uni-stuttgart.de/iaz/iaz1/Dipper/papers/cyclo.ps"
      locator: "§3, printed pp. 387–397: ordinary Murphy straightening as input to the cyclotomic proof; full text inspected."
---

## Statement

Let $R_A=\mathbb Z[Q^{\pm1}]$ and let $H_n$ be the type-A Hecke algebra on $T_1,\ldots,T_{n-1}$ with braid relations and $(T_i-Q)(T_i+1)=0$. For a partition $\lambda\vdash n$, let $t^\lambda$ be row-filled, $S_\lambda$ its row subgroup, $x_\lambda=\sum_{w\in S_\lambda}T_w$, and
$$m_{st}=T_{d(s)}^*x_\lambda T_{d(t)}$$
for standard $\lambda$-tableaux, with the tableau action and distinguished representatives fixed in [[def-hh-cyclotomic-murphy-elements]]. Then the $m_{st}$ form an $R_A$-basis of $H_n$, $m_{st}^*=m_{ts}$, and the spans $H_n^{\trianglerighteq\lambda}$ and $H_n^{\triangleright\lambda}$ of shapes respectively dominating and strictly dominating $\lambda$ are two-sided ideals. For every $h\in H_n$ and standard $s,t$ of shape $\lambda$,
$$m_{st}h\equiv\sum_{v\in\operatorname{Std}(\lambda)}r_{t,v}(h)m_{sv}\pmod{H_n^{\triangleright\lambda}},$$
where $r_{t,v}(h)\in R_A$ does not depend on $s$. The proof is integral over $R_A$; it does not divide by $Q+1$ or assume semisimplicity.

## Facts & Assumptions

**Given:** $n\ge0$, the universal unit $Q$, the type-A Hecke presentation, partitions of $n$, and standard tableaux.

[F1] The generic Coxeter-Hecke algebra has basis $T_w$; its one-generator multiplication rules are $T_wT_i=T_{ws_i}$ when $\ell(ws_i)=\ell(w)+1$ and $T_wT_i=(Q-1)T_w+QT_{ws_i}$ when $\ell(ws_i)=\ell(w)-1$, by reduced-word independence and the quadratic relation. After $Q=v^2$ and $T_i=v\widetilde T_i$, the symmetric normalization $(\widetilde T_i-v)(\widetilde T_i+v^{-1})=0$ becomes $(T_i-Q)(T_i+1)=0$. ([[thm-hh-generic-coxeter-hecke-standard-basis]], [[lem-hh-hecke-anti-involution-bar-and-normalization]])

[F2] Parabolic cosets have unique distinguished representatives and length-additive decompositions; also every nonreduced Coxeter word can be shortened by deleting two letters, and iterating gives a reduced subword for the same group element. The standard right tableau action and the row subgroup are as in [[thm-hh-parabolic-minimal-representatives-and-length-additivity]] and [[def-hh-cyclotomic-murphy-elements]].

[F3] For one component, $\sum_{\lambda\vdash n}|\operatorname{Std}(\lambda)|^2=n!$. ([[lem-hh-colored-permutation-rsk-and-tableau-square-count]], specialized to $r=1$)

[F4] If a square family spans a free module of the same finite rank, its coordinate matrix has a right inverse and determinant a unit. ([[lem-hh-finite-matrix-and-module-preliminaries]])

[F5] A finite cell datum has an involution-swapped basis and right multiplication coefficients independent of the first index; its higher-cell spans are two-sided ideals. ([[def-hh-cell-datum-dominance-and-cell-ideals]])

[F6] The row symmetrizers, distinguished tableau permutations, and Murphy elements use the right tableau action and $*$ of [[def-hh-cyclotomic-murphy-elements]].

[F7] Bruhat order on $S_n$ is characterized by reduced subwords and rank inequalities. For row-standard tableaux of a fixed shape, the rank numbers at row boundaries are the cumulative counts of entries at most a given label in the first rows. ([[lem-bruhat-order-basic-properties-for-permutations]])

[F8] In this same multiplicative normalization, the signed row sum is $y_\rho=\sum_{w\in S_\rho}(-Q)^{-\ell(w)}T_w$. The involutive automorphism $\theta(T_i)=(Q-1)-T_i=-QT_i^{-1}$ commutes with $*$ and satisfies $\theta(x_\rho)=Q^{\ell(w_0(S_\rho))}y_\rho$. ([[lem-dj-bridge-sign-automorphism-and-star-dual]])

[F9] If $\alpha$ is not dominated by $\rho'$, then $x_\alpha H_ny_\rho=0$. The local double-coset proof uses $(1+T_i)(1-Q^{-1}T_i)=0$, so this is an identity over every commutative ring with unit parameter; it cancels no factor $Q+1$. ([[lem-dj-bridge-parabolic-double-coset-annihilation]])

[F10] **Extended tableau-permutation convention.** Let $\alpha$ be a composition or multicomposition of $n$, fill its rows consecutively in component order and then row order to obtain $t^\alpha$, and let $S_\alpha$ permute the labels within each row of $t^\alpha$. Under the right entry action $t\cdot w:=w^{-1}\cdot t$, every bijective filling $t$ of the same diagram by $1,\ldots,n$ has a unique permutation $d_\alpha(t)\in S_n$ such that $t^\alpha\cdot d_\alpha(t)=t$, because this action is free and transitive on bijective fillings. The permutation is the distinguished minimal representative of the left coset $S_\alpha d_\alpha(t)$ exactly when $t$ is row-standard: row increase is equivalent to $\ell(s_i d_\alpha(t))>\ell(d_\alpha(t))$ for every adjacent transposition $s_i$ in a row subgroup, and the parabolic criterion then gives minimality and length additivity. For a standard multipartition tableau this agrees with the published $d(t)$ of [[def-hh-cyclotomic-murphy-elements]]. In the row-standard composition and multicomposition arguments depending on this lemma, bare $d(t)$ for a tableau of shape $\alpha$ is shorthand for $d_\alpha(t)$; no minimality is asserted for a filling that is not row-standard. ([[def-hh-cyclotomic-murphy-elements]], [[thm-hh-parabolic-minimal-representatives-and-length-additivity]])

## Proof

**Given:** The type-A Hecke algebra $H_n$, its standard basis, and the Murphy elements in the Statement.

1.1 Put $R'_A=\mathbb Z[v^{\pm1}]$ and map $R_A\to R'_A$ by $Q\mapsto v^2$. Every Laurent polynomial in $v$ has a unique expression $f(Q)+vg(Q)$, so $R'_A$ is free over $R_A$ on $1,v$ and $R_A\hookrightarrow R'_A$. In the symmetric normalization of [F1], setting $T_i=v\widetilde T_i$ gives $(T_i-v^2)(T_i+1)=0$ and preserves braid relations; the generator rescaling multiplies $T_w$ by the unit $v^{\ell(w)}$. Thus the base-changed algebra over $R'_A$ has basis $\{T_w\}$ by [F1]. The quadratic relation spans products over $R_A$; any relation among the $T_w$ remains a relation over $R'_A$, where they are independent. Injectivity of $R_A\to R'_A$ proves that $\{T_w\}$ is an $R_A$-basis. [F1, algebra]

2.1 For a composition $\alpha$, let $x_\alpha=\sum_{w\in S_\alpha}T_w$. The elements $x_\alpha T_d$ for distinguished right coset representatives $d$ span $x_\alpha H_n$ because each group element factors uniquely as $yd$ with $y\in S_\alpha$ and $\ell(yd)=\ell(y)+\ell(d)$, while $x_\alpha T_y=Q^{\ell(y)}x_\alpha$. Their standard-basis supports are disjoint cosets and each has coefficient $1$ at its distinguished representative, so they are independent. The one-generator rules of [F1] give $x_\alpha T_i=Qx_\alpha$ by pairing $w$ and $ws_i$ in the row sum. Consequently, on the row-module basis $e_t=x_\alpha T_{d_\alpha(t)}$, multiplication by $T_i$ has the three cases: $Qe_t$ if $ts_i$ is not row standard, $e_{ts_i}$ if it is row standard and length increases, and $Qe_{ts_i}+(Q-1)e_t$ if it is row standard and length decreases. The left-action formulas follow by applying $*$. [F1, F2, F10, step 1.1]

2.2 Define $\tau(T_w)=\delta_{w,1}$. The two Hecke multiplication cases give $\tau(T_wT_i)=\tau(T_iT_w)=Q\delta_{w,s_i}$; moving the generator letters of a word around the trace one at a time therefore proves $\tau(ab)=\tau(ba)$ for arbitrary $a,b$. Define $B(T_u,T_v)=\delta_{u,v}Q^{\ell(u)}$. On each right-$s_i$ pair with $\ell(ws_i)=\ell(w)+1$, right multiplication has matrix $A=\begin{pmatrix}0&Q\\1&Q-1\end{pmatrix}$ and $B$ has matrix $D=\operatorname{diag}(Q^{\ell(w)},Q^{\ell(w)+1})$; direct multiplication gives $A^{\mathsf T}D=DA$. Distinct pairs are orthogonal, hence $B(aT_i,b)=B(a,bT_i)$. Moving the letters of a reduced word for $u$ from the first argument to the second now gives $B(T_u,T_v)=\tau(T_vT_u^*)=\tau(T_u^*T_v)$. Thus $\tau(a^*b)$ is a unimodular pairing: its standard-basis Gram matrix is diagonal with the units $Q^{\ell(w)}$. The pairing $\tau(ab)$ is also unimodular, since $*$ permutes the standard basis. [F1, step 1.1, algebra]

3.1 For $\alpha$ a composition and $\bar\alpha$ the partition obtained by sorting its parts, reorder the consecutive row blocks by a permutation $d$ so that $S_\alpha d=dS_{\bar\alpha}$. The blocks are intervals, so the intersections of the two block decompositions are intervals; parabolic length additivity gives $x_\alpha T_d=T_dx_{\bar\alpha}$ and hence $x_\alpha=T_dx_{\bar\alpha}T_d^{-1}$. The row-module bases from step 2.1 show that $Hx_{\bar\alpha}H$ is spanned by row-standard Murphy elements of partition shape $\bar\alpha$. Thus every row-standard Murphy element of composition shape $\alpha$ lies in that span. [F2, step 2.1, algebra]

4.1 Fix $\lambda\vdash n$ and a node $(i,j)$ with $\lambda_{i+1}\ge j$. Set $a=t^\lambda(i,j)$, $b=t^\lambda(i+1,j)$, and let $g$ be the Garnir tableau that fills the belt (row $i$ from column $j$ to its end and row $i+1$ from its start through column $j$) increasingly, first along the lower row segment and then along the upper segment. Put $\nu=(\lambda_1,\ldots,\lambda_{i-1},j-1,\lambda_i+1,\lambda_{i+1}-j,\lambda_{i+2},\ldots)$, a composition. The two parabolic decompositions of the interval-block product $S_\lambda S_\nu$ give $\sum_{w\in S_\nu\cap D_\lambda}x_\lambda T_w=\sum_{x\in S_\lambda S_\nu}T_x=\sum_{v\in S_\lambda\cap D_\nu}T_v^*x_\nu.$ Indeed each side lists every element of $S_\lambda S_\nu$ exactly once, with length-additive factors, by [F2]. The tableaux $t^\lambda w$ on the left consist of $g$ and the tableaux obtained by assigning any other $j$-element subset of belt labels to the lower segment; every other assignment gives a standard tableau: rows are filled increasingly, columns before $j$ compare unchanged upper entries below all belt labels, columns after $j$ compare belt entries above unchanged lower suffix labels, and in column $j$ some smaller belt label remains in the complement than a selected lower label, so the top entry (the smallest complementary label) is less than the bottom entry (the largest selected lower label). Each is strictly more dominant than $g$, since at the first label where the subset differs a smaller label moves to the upper row. Isolating the $g$ term expresses $x_\lambda T_{d_\lambda(g)}$ as a linear combination of row-standard Murphy elements of shape $\nu$ and row-standard right-tableau terms strictly more dominant than $g$. By step 3.1, the shape-$\nu$ terms reduce to partition shapes lexicographically greater than $\lambda$: the sorted $i$-tuple of $\lambda_1,\ldots,\lambda_{i-1},\lambda_i+1$ dominates $(\lambda_1,\ldots,\lambda_i)$, and the first $i$ parts of $\bar\nu$ dominate that tuple, so $\bar\nu$ is strictly lexicographically greater than $\lambda$. [F2, F10, step 3.1, algebra]

5.1 Let $t$ be a nonstandard row-standard $\lambda$-tableau and choose a column violation $t(i,j)>t(i+1,j)$. Order the boxes first by row order and add the relation $(i+1,j)<(i,j)$. Both $t$ and the Garnir tableau $g$ of step 4.1 are linear extensions. The inversions of $g$ relative to row reading are exactly the pairs consisting of a lower-belt box through column $j$ followed by an upper-belt box from column $j$ onward; the added relation and the two row orders force every such pair in every extension. Thus the inversion set of $g$ is contained in that of $t$. For row-standard tableaux the Coxeter length of $d_\lambda(t)$ counts these inversions, and $t=g\cdot w$ for the relative permutation $w$ has $\ell(w)$ equal to the number of pairs whose order differs between $g$ and $t$. Therefore $d_\lambda(t)=d_\lambda(g)w$ and $\ell(d_\lambda(t))=\ell(d_\lambda(g))+\ell(w)$. [F2, F6, F10, step 4.1, algebra]

6.1 For fixed shape, define tableau dominance by comparing, for every label cutoff $m$ and row cutoff $k$, the number of entries at most $m$ in the first $k$ rows. This relation agrees with Bruhat order on the distinguished permutations: at row boundaries the Bruhat rank numbers are exactly these counts by [F7]; inside a row, row standardness makes the count the minimum of the preceding-row count plus the partial row length and the count at the next row boundary, so boundary inequalities give all rank inequalities. Hence $u\triangleright_{\rm tab}t$ implies $d_\lambda(u)<d_\lambda(t)$. In step 4.1, each other row-standard tableau $u\triangleright_{\rm tab}g$ has $d_\lambda(u)$ a proper reduced subword of $d_\lambda(g)$. Iterating the one-generator rules of [F1] along the reduced word $T_w$ of step 5.1 shows that every standard-basis term $T_z$ in $T_{d_\lambda(u)}T_w$ is represented by a subword of the concatenated word $d_\lambda(u)w$, hence by a proper subword of the reduced expression $d_\lambda(t)=d_\lambda(g)w$. If that subword is nonreduced, the deletion property in [F2] reduces it to a reduced subword representing $z$, so $z<d_\lambda(t)$ by [F7]. Write $z=y d_\lambda(v)$ using the distinguished row-coset factorization; length additivity makes $d_\lambda(v)$ a reduced suffix of a reduced expression for $z$, hence $d_\lambda(v)\le z<d_\lambda(t)$. The fixed-shape Bruhat comparison therefore makes every same-shape row-standard output tableau strictly dominate $t$. Induction first on the finite lexicographic shape order and then on the finite tableau order, and applying $*$ for the first index, straightens every row-standard Murphy element to standard Murphy elements; higher-shape terms are handled before lower shapes. [F1, F2, F6, F7, F10, step 3.1, step 4.1, step 5.1]

7.1 When $\lambda=(1^n)$, $x_\lambda=1$ and the row-standard elements include every standard Hecke basis element $T_w$. Step 6.1 therefore shows that the standard Murphy elements span $H_n$. Their number is $\sum_{\lambda\vdash n}|\operatorname{Std}(\lambda)|^2=n!$ by [F3], equal to the rank of $H_n$ by step 1.1. The square coordinate matrix of this spanning family has a right inverse, hence unit determinant by [F4], so the Murphy elements form an $R_A$-basis. Reversal fixes $x_\lambda$ and sends $T_{d(s)}^*x_\lambda T_{d(t)}$ to $m_{ts}$. [F3, F4, F6, step 1.1, step 6.1]

8.1 Let $\lambda$ be maximal in lexicographic order. For $x_\lambda h\in x_\lambda H_n$, the row-module basis and step 6.1 express it modulo higher lexicographic shapes as $\sum_v r_vx_\lambda T_{d(v)}$, with coefficients independent of a later first tableau. Assume by descending induction that the higher lexicographic Murphy span is a two-sided ideal. Multiplying this congruence on the left by $T_{d(s)}^*$ gives the fixed-first-index law for shape $\lambda$; the higher terms remain in the higher ideal, and the same-shape terms become $m_{sv}$. The induction proves the lexicographic cell law for every shape. Together with the basis and involution, this gives a lexicographic cell datum, so the higher lexicographic spans are two-sided ideals by [F5]. [F5, F6, step 6.1, step 7.1]

8.2 Index a square matrix by standard Murphy pairs, grouping its rows by shape $\eta$ and its columns by a partition $\nu$, and set $P_{(\eta,s,t),(\nu,a,b)}=\tau(m^\eta_{st}\theta(m^{\nu'}_{ab}))$, where $a,b$ range over standard $\nu'$-tableaux. Transposition of tableaux gives $|\operatorname{Std}(\nu')|=|\operatorname{Std}(\nu)|$, so each diagonal shape block is square. Both the Murphy family and its $\theta$-image with conjugate shape labels are bases, by step 7.1 and [F8]; step 2.2 therefore makes $P$ invertible over $R_A$. Cyclically moving the leading factors inside the trace displays the factor $x_\eta H_n\theta(x_{\nu'})$, which is zero unless $\eta\unlhd\nu$ by [F8]–[F9]. Thus $P_{\eta,\nu}=0$ unless $\eta\unlhd\nu$. In any increasing lexicographic ordering of the partitions, $P$ is block upper triangular. Its determinant is the product of the determinants of its square diagonal blocks; since that product is a unit in a commutative ring, each factor is a unit. Every diagonal block $P_{\nu,\nu}$ is consequently invertible over $R_A$. [F8, F9, step 7.1, step 2.2, algebra]

9.1 Fix a partition $\kappa$ and $h\in H_nx_\kappa H_n$. Whenever $\nu$ does not dominate $\kappa$, cyclicity and [F8]–[F9] give $\tau(h\theta(m^{\nu'}_{ab}))=0$ for every pair $a,b$: expand $h$ as a finite sum of $c x_\kappa d$ and move $c$ to the end, leaving $x_\kappa H_n\theta(x_{\nu'})$ as a factor. Expand $h$ in the Murphy basis. Process the partitions $\nu$ not dominating $\kappa$ in increasing lexicographic order. In its pairing against the $\nu$ column, the only potentially nonzero row blocks have $\eta\unlhd\nu$ by step 8.2. If $\eta\ne\nu$, then $\eta$ is lexicographically smaller; moreover $\eta$ cannot dominate $\kappa$, since $\kappa\unlhd\eta\unlhd\nu$ would make $\nu$ dominate $\kappa$. Their coefficient blocks have therefore already vanished. The remaining equation is the coefficient row of shape $\nu$ times the invertible matrix $P_{\nu,\nu}$ equal to zero, forcing every shape-$\nu$ coefficient to vanish. Finite induction proves $H_nx_\kappa H_n\subseteq H_n^{\trianglerighteq\kappa}$. This proves, in particular, the requested dominance support of every $x_\kappa h$. [F8, F9, step 7.1, step 8.2, algebra]

10.1 Each Murphy element of shape $\eta$ belongs to $H_nx_\eta H_n$ by definition, while step 9.1 places the latter ideal in the span of shapes dominating $\eta$. Summing these inclusions and the reverse generator inclusions gives $H_n^{\trianglerighteq\lambda}=\sum_{\eta\unrhd\lambda}H_nx_\eta H_n$ and $H_n^{\triangleright\lambda}=\sum_{\eta\triangleright\lambda}H_nx_\eta H_n$. Thus both dominance spans are two-sided ideals. In the lexicographic cell law of step 8.1, put $j=m_{st}h-\sum_vr_{t,v}(h)m_{sv}$. It lies in the strictly higher lexicographic span by step 8.1 and in $H_n^{\trianglerighteq\lambda}$ by step 9.1, since every displayed term belongs to $H_nx_\lambda H_n$. These are spans of subsets of the same basis, so their intersection is the span of the common subset: shapes strictly lexicographically larger than $\lambda$ and dominating $\lambda$, which are precisely the shapes strictly dominating $\lambda$. Hence $j\in H_n^{\triangleright\lambda}$, proving the dominance cell law with the same coefficients, independent of $s$. [step 7.1, step 8.1, step 9.1, algebra]

11.1 Steps 7.1 and 10.1 prove every assertion of the Statement. All identities were proved over $R_A$ using only unit powers of $Q$ and finite free matrices with unit determinants. The extension $Q=v^2$ in step 1.1 is free on $1,v$ and hence faithfully flat; it is used only to identify the standard basis, and no inference from generic semisimplicity is used. Tensoring the established basis and its structure constants along any homomorphism $R_A\to R$ proves the same result for every commutative ring with unit image of $Q$, including $Q=-1$. No division or cancellation of a specialized quantum integer occurs. [step 1.1, step 7.1, step 10.1, algebra] ∎

## Remarks

For the belt in step 4.1, take $\lambda=(4,3)$ and $(i,j)=(1,2)$, so $a=2$ and $b=6$. The shaded boxes are the upper row from column $2$ onward and the lower row through column $2$; their labels in $t^\lambda$ are $2,3,4,5,6$. The middle tableau $g$ fills the lower belt first with $2,3$, then the upper belt with $4,5,6$. The right tableau $u$ instead assigns the subset $\{2,4\}$ to the lower belt.

```tikz
\begin{tikzpicture}[x=0.68cm,y=0.68cm]
\begin{scope}
\fill[blue!18] (1,1) rectangle (4,2);
\fill[blue!18] (0,0) rectangle (2,1);
\draw (0,1) rectangle (4,2);
\draw (0,0) rectangle (3,1);
\draw (1,0)--(1,2) (2,0)--(2,2) (3,1)--(3,2);
\node at (0.5,1.5) {$1$}; \node at (1.5,1.5) {$2$};
\node at (2.5,1.5) {$3$}; \node at (3.5,1.5) {$4$};
\node at (0.5,0.5) {$5$}; \node at (1.5,0.5) {$6$}; \node at (2.5,0.5) {$7$};
\node at (2,2.65) {$t^\lambda$};
\end{scope}
\begin{scope}[xshift=4cm]
\fill[blue!18] (1,1) rectangle (4,2);
\fill[blue!18] (0,0) rectangle (2,1);
\draw (0,1) rectangle (4,2);
\draw (0,0) rectangle (3,1);
\draw (1,0)--(1,2) (2,0)--(2,2) (3,1)--(3,2);
\node at (0.5,1.5) {$1$}; \node at (1.5,1.5) {$4$};
\node at (2.5,1.5) {$5$}; \node at (3.5,1.5) {$6$};
\node at (0.5,0.5) {$2$}; \node at (1.5,0.5) {$3$}; \node at (2.5,0.5) {$7$};
\node at (2,2.65) {$g$};
\end{scope}
\begin{scope}[xshift=8cm]
\fill[blue!18] (1,1) rectangle (4,2);
\fill[blue!18] (0,0) rectangle (2,1);
\draw (0,1) rectangle (4,2);
\draw (0,0) rectangle (3,1);
\draw (1,0)--(1,2) (2,0)--(2,2) (3,1)--(3,2);
\node at (0.5,1.5) {$1$}; \node at (1.5,1.5) {$3$};
\node at (2.5,1.5) {$5$}; \node at (3.5,1.5) {$6$};
\node at (0.5,0.5) {$2$}; \node at (1.5,0.5) {$4$}; \node at (2.5,0.5) {$7$};
\node at (2,2.65) {$u$};
\end{scope}
\end{tikzpicture}
```

All three fillings are row-standard. The middle filling has the column violation $g(1,2)=4>3=g(2,2)$, whereas $u$ is standard. At label cutoff $3$, the first row of $u$ contains two labels at most $3$, compared with one for $g$; at every other integer cutoff the first-row counts agree. The two-row totals always agree, so $u\triangleright_{\rm tab}g$ by step 6.1. This illustrates the lower-subset choice and dominance comparison of step 4.1; the proof above remains independent of the picture.
