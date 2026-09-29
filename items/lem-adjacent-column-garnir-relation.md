---
id: lem-adjacent-column-garnir-relation
kind: lemma
title: Adjacent-column Garnir relation over C
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps: [def-column-antisymmetrizer-polytabloid-and-specht-module, lem-polytabloid-covariance-and-column-sign, lem-column-collision-causes-antisymmetrizer-cancellation, def-partition-young-diagram-and-conjugate-partition, def-row-and-column-stabilizers-of-a-tableau, def-young-tableau-standard-tableau-and-shape, thm-sign-is-a-homomorphism]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Mark Wildon, Representation Theory of the Symmetric Group, Definition 6.6, Example 6.7 and Theorem 6.8, printed pp. 28-30; theorem translated from the source's right action to the library's left action over C"
      url: "https://www.ma.rhul.ac.uk/~uvah099/Maths/Sym/SymGroup2014.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
---

## Statement

Let $t$ be a $\lambda$-tableau. Let $X$ lie among entries of column $j$ and
$Y$ among entries of column $j+1$, with $|X|+|Y|>\lambda'_j$. Put
$H=S_X\times S_Y$, choose representatives $T$ containing $1$ for the left
cosets $gH$ in $S_{X\cup Y}$, and
$$G_{X,Y}:=\sum_{g\in T}\operatorname{sgn}(g)g.$$
Then $G_{X,Y}e_t=0$ in $M^\lambda$ over $\mathbb C$.

## Facts & Assumptions

**Given:** $n\ge0$, $\lambda\vdash n$, a $\lambda$-tableau $t$, adjacent
columns $j,j+1$, subsets $X,Y$ of their respective entries with
$|X|+|Y|>\lambda'_j$, and a left-coset transversal $T$ for
$S_{X\cup Y}/H$ containing $1$.

[F1] The polytabloid is $e_t=\kappa_t\cdot\{t\}$, where
$\kappa_t=\sum_{\gamma\in C_t}\operatorname{sgn}(\gamma)\gamma$
([[def-column-antisymmetrizer-polytabloid-and-specht-module]]).

[F2] For $h\in C_t$, $h\cdot e_t=\operatorname{sgn}(h)e_t$
([[lem-polytabloid-covariance-and-column-sign]]).

[F3] If two entries lie in one row of a tabloid and in one column of a
tableau, that tableau's column antisymmetrizer kills the tabloid
([[lem-column-collision-causes-antisymmetrizer-cancellation]]).

[F4] Column $j$ has height $\lambda'_j$, and these heights are weakly
decreasing with $j$
([[def-partition-young-diagram-and-conjugate-partition]]).

[F5] The column stabilizer preserves each column set
([[def-row-and-column-stabilizers-of-a-tableau]]).

[F6] A tableau of shape $\nu\vdash n$ is a bijection from $[\nu]$ to
$\{1,\dots,n\}$ ([[def-young-tableau-standard-tableau-and-shape]]).

[F7] Sign is multiplicative on products in $S_n$
([[thm-sign-is-a-homomorphism]]).

## Proof

**Proof technique:** direct.

1.1 Set $Z=X\cup Y$ and $A_Z=\sum_{z\in S_Z}\operatorname{sgn}(z)z$, where $S_Z$ fixes labels outside $Z$. The columns are disjoint, so $|Z|=|X|+|Y|>\lambda'_j$. If $\lambda'_j=0$, both $X$ and $Y$ are empty, contradicting this inequality; hence $|Z|\ge2$. For each $\gamma\in C_t$, every label in $Z$ lies in one of the first $\lambda'_j$ rows of $\gamma\cdot\{t\}$: its preimage under $\gamma$ is in column $j$ or $j+1$, and $\lambda'_{j+1}\le\lambda'_j$ by [F4]. Thus two labels of $Z$ lie in one row of that tabloid. Form $\nu=(n-|Z|+1,1^{|Z|-1})$ and the $\nu$-tableau $u$ that places the labels of $Z$ in increasing order down its first column and all remaining labels in increasing order along its first row; this is a tableau by [F6]. Its other columns are singletons, so $C_u=S_Z$ by [F5] and $\kappa_u=A_Z$. Applying [F3] to $u$ and each tabloid $\gamma\cdot\{t\}$ gives $A_Z(\gamma\cdot\{t\})=0$. Expanding $e_t$ by [F1] now gives $A_Ze_t=0$. [given, F1, F3, F4, F5, F6, algebra]

2.1 Since $H$ permutes labels within the two respective columns, $H\subseteq C_t$ by [F5]. Define $A_H=\sum_{h\in H}\operatorname{sgn}(h)h$; [F2] gives $A_He_t=|H|e_t$. The left-coset decomposition $S_Z=\bigsqcup_{g\in T}gH$ and multiplicativity [F7] give $A_Z=G_{X,Y}A_H$. Therefore step 1.1 yields $0=A_Ze_t=G_{X,Y}A_He_t=|H|G_{X,Y}e_t$. The positive integer $|H|$ is nonzero in $\mathbb C$, so division gives $G_{X,Y}e_t=0$. The proof works for every supplied transversal $T$ and makes no further choice. [given, F1, F2, F5, F7, step 1.1, algebra] ∎
