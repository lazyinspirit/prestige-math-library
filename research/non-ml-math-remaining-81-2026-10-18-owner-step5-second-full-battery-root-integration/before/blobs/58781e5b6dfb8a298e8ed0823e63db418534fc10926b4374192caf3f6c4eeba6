---
id: thm-simply-laced-integral-convex-root-pbw-bases
kind: theorem
title: Integral convex root PBW bases in finite simply-laced type
status: draft
dependency_level: 1
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps: [lem-simply-laced-quantum-braid-symmetries-preserve-the-integral-form, thm-integral-triangular-decomposition-for-the-lusztig-form, thm-generic-quantum-serre-halves-have-classical-pbw-ranks-and-a-nondegenerate-hopf-pairing, lem-root-datum-combinatorics, thm-hh-matsumoto-reduced-word-theorem, thm-hh-parabolic-minimal-representatives-and-length-additivity, thm-cg-root-inversion-formulas-and-strong-exchange, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: George Lusztig, Introduction to Quantum Groups
      url: https://math.mit.edu/~gyuri/papers/quant.gr.pdf
      locator: Sections 40.1–40.2 and 41.1, printed pp.318–325, positivity, convex monomials and integral symmetries; the integral common-span argument is proved here.
---

## Statement

Assume the inherited Axiom of Choice. In finite simply-laced type choose a reduced word $w_0=s_{i_1}\cdots s_{i_N}$ and set $\beta_t=s_{i_1}\cdots s_{i_{t-1}}\alpha_{i_t}$ and $X_{\beta_t}=S_{i_1}\cdots S_{i_{t-1}}(E_{i_t})$, using [[lem-simply-laced-quantum-braid-symmetries-preserve-the-integral-form]]. Then every $X_{\beta_t}$ is positive and $X_{\beta_t}^{(r)}=X_{\beta_t}^r/[r]_q!$ lies in the positive divided half. The ordered monomials $X_{\beta_1}^{(a_1)}\cdots X_{\beta_N}^{(a_N)}$, $a_t\ge0$, are an actual $\mathbb Z[q,q^{-1}]$-basis of that half. Exchanging the positive and negative halves gives the negative root basis. Both bases remain bases after every scalar specialization. Over $A[(q-q^{-1})^{-1}]$, the corresponding ordinary root monomials span the ordinary-generator halves. The assertion includes every reduced convex word, rather than one unnamed PBW ordering.

## Facts & Assumptions

**Given:** The finite ADE root datum, the longest element and a reduced word.

[F1] The braid symmetries, their inverses, divided-power formulas, and the exact $A_2$ normal-order identity are proved in [[lem-simply-laced-quantum-braid-symmetries-preserve-the-integral-form]].

[F2] Integral triangular decomposition holds and gives $U_A\cap U^+=U_A^+$ inside the generic algebra ([[thm-integral-triangular-decomposition-for-the-lusztig-form]]).

[F3] Each generic half weight component has its classical PBW rank, namely the number of Kostant partitions in finite type ([[thm-generic-quantum-serre-halves-have-classical-pbw-ranks-and-a-nondegenerate-hopf-pairing]]).

[F4] Finite root combinatorics, parabolic coset decomposition and the reduced-word theorem are available ([[lem-root-datum-combinatorics]], [[thm-hh-matsumoto-reduced-word-theorem]], [[thm-hh-parabolic-minimal-representatives-and-length-additivity]], [[thm-cg-root-inversion-formulas-and-strong-exchange]]). In particular the positive prefix roots of a reduced word for $w_0$ enumerate $\Phi^+$ once. The Choice inherited through [F2]–[F3] is declared in [[def-axiom-of-choice]].



## Proof

**Given:** These data, and write $S_w$ for a reduced product, well defined by [F1].

1.1 If $\ell(ws_i)=\ell(w)+1$, then $S_w(E_i)$ is positive. Prove this by induction on $\ell(w)$. Choose a right descent $j$ of a nonidentity $w$; necessarily $j\ne i$. Write $w=w'v$ with $w'$ the minimal right coset representative for $\{i,j\}$ and $v$ in that rank-two parabolic. Both $i,j$ are ascents of $w'$. Since $i$ is an ascent and $j$ a descent of $v$, its alternating reduced word has length at most $m_{ij}-1$. The rank-two calculations in [F1] therefore make $S_v(E_i)$ either a simple generator or one of the two neighboring positive polynomials $E_jE_i-qE_iE_j$ and $E_iE_j-qE_jE_i$. Induction makes both $S_{w'}(E_i),S_{w'}(E_j)$ positive, hence also $S_w(E_i)$. Its divided powers belong to $U_A$ by [F1], so [F2] puts them in $U_A^+$. Apply this to every prefix in the chosen reduced word. [F1, F2, F4, induction]

2.1 Let $M_{\mathbf i}$ be the $A$-span of the ordered divided root monomials for the word $\mathbf i$. A braid move changes only its local root block; later factors agree by the braid relation. For commuting colors the block spans agree by commutation. For $A_2$ put $x=E_i$, $z=E_j$, $y=xz-q^{-1}zx$. Up to Laurent units its three root factors are $x,y,z$. The exact identity from [F1] is $$z^{(c)}x^{(a)}=\sum_{r=0}^{\min(a,c)}(-1)^rq^{(a-r)(c-r)+r}x^{(a-r)}y^{(r)}z^{(c-r)}.$$ It shows that the span of $x^{(a)}y^{(b)}z^{(c)}$ contains $1$ and is stable under every left divided power of $x$ and $z$: use $zy=q^{-1}yz$ and divided multiplication after the displayed formula. Thus it is the entire divided rank-two half. The reversed block has the same property, so both integral block spans agree. Applying their common preceding $S$ prefix preserves equality. By [F4] the space $M_{\mathbf i}$ is independent of the reduced word. [F1, F4, step 1.1, algebra]

3.1 Every simple color $i$ starts some reduced word for $w_0$. In that word $E_i^{(r)}$ multiplies the first root factor by the Gaussian coefficient $\begin{bmatrix}r+a_1\\r\end{bmatrix}_q\in A$. Hence the common space from step 2.1 is stable under every divided simple generator. It contains $1$ and lies in $U_A^+$ by step 1.1, so it equals $U_A^+$. In any fixed weight $\nu$, the ordered root monomials number the Kostant partitions of $\nu$, exactly the generic dimension in [F3]. Since they span, they are linearly independent over the generic field and therefore over $A$. They form an integral basis, not just a torsion-free spanning set. The half exchange gives the negative result. Base change of these actual free bases retains the bases at every scalar parameter. [F1, F2, F3, step 2.1, algebra]

4.1 Repeat the block-span argument for ordinary powers over $A[(q-q^{-1})^{-1}]$. In $A_2$ the relations $zx=qxz-qy$, $xy=qyx$ and $yz=qzy$ reorder ordinary words with coefficients in this ring and no divided factorial. Thus the ordinary block span is the entire ordinary rank-two algebra, and the common-span argument applies. A positive root vector belongs to the ordinary half: it lies in the ordinary full form by [F1], and projecting an ordinary mixed normal-order expansion onto negative degree zero and toral exponent zero maps each normal-ordered word into the ordinary positive half and fixes a pure positive element. Mixed reordering uses only the inverted $q-q^{-1}$. This justifies the positivity-intersection step for the ordinary form without assuming its integral PBW theorem. Its common root-monomial span is stable under all ordinary $E_i$, by choosing a word starting $i$, and hence equals its ordinary half. Exchanging halves completes the ordinary assertion. [F1, F2, step 1.1, step 2.1, algebra] ∎
