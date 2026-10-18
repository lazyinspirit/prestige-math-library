---
id: lem-modc-module-category-rank-bound
kind: lemma
title: A uniform rank and action-multiplicity bound for module categories
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-finite-semisimple-module-category-over-fusion-category
  - def-fusion-and-multifusion-category
sources:
  references:
    - title: Etingof, Gelaki, Nikshych, and Ostrik, Tensor Categories, Corollary 9.1.6
      url: https://math.mit.edu/~etingof/egnobookfinal.pdf
    - title: Etingof, Nikshych, and Ostrik, On fusion categories, Section 8.1
      url: https://annals.math.princeton.edu/wp-content/uploads/annals-v162-n2-p01.pdf
---

## Statement

For a fixed fusion category $\mathcal C$ over an algebraically closed field of characteristic zero, there is a finite integer $R(\mathcal C)$ such that every indecomposable finite semisimple right $\mathcal C$-module category has at most $R(\mathcal C)$ isomorphism classes of simple objects. More explicitly, write $I$ for its simple labels, $0$ for the unit, and $N_{ij}^k$ for its fusion coefficients. There are positive real numbers $d_i=d_{i^*}$, determined by these coefficients, with $d_0=1$ and $d_id_j=\sum_kN_{ij}^kd_k$. Put $D=\sum_i d_i^2$. One may take $R(\mathcal C)=\lfloor D\rfloor$. For every finite semisimple right module category, indecomposable or otherwise, the multiplicity $n_{ai}^b=[m_a\odot X_i:m_b]$ satisfies $n_{ai}^b\le D/d_i$. Consequently there are finitely many possible action multiplicity arrays at any specified rank, and finitely many indecomposable arrays at all ranks.

The real numbers used here concern the fusion ring, and are not categorical traces. No pivotal structure or positivity of categorical dimensions is assumed.

## Facts & Assumptions

**Given:** The category and module categories in the statement.

[F1] Fusion categories are finite semisimple and rigid with simple unit ([[def-fusion-and-multifusion-category]]).

[F2] Right module categories have associative unital actions ([[def-finite-semisimple-module-category-over-fusion-category]]). Indecomposable means not a direct sum of two nonzero action-stable full semisimple subcategories.

## Proof

1.1 On the real vector space with orthonormal basis $b_i=[X_i]$, rigidity gives Frobenius reciprocity $N_{ij}^k=N_{i^*k}^j=N_{kj^*}^i$, and $N_{ij}^0=\delta_{j,i^*}$. Indeed the adjunctions $\operatorname{Hom}(X_i\otimes X_j,X_k)\cong\operatorname{Hom}(X_j,X_i^*\otimes X_k)$ and $\operatorname{Hom}(X_i\otimes X_j,X_k)\cong\operatorname{Hom}(X_i,X_k\otimes X_j^*)$ give the first equalities by dimensions; simplicity of the unit gives the second. Left and right multiplication matrices $L_i,R_i$ therefore have transposes $L_{i^*},R_{i^*}$, respectively, and $L_iR_j=R_jL_i$ by associativity. The matrix $S=\sum_i L_i$ is real symmetric and strictly positive entrywise: for any $a,b$, the nonzero object $X_b\otimes X_a^*$ has a simple summand $X_i$, and reciprocity then gives $N_{ia}^b>0$. The object is nonzero because tensoring by a nonzero rigid object is faithful: the unit is a summand of its dual times itself, so a zero tensor product would force the other factor to be zero. [F1, algebra]

2.1 Here is the required positive-matrix argument without an unproved Perron theorem. A real symmetric strictly positive matrix $T$ has a largest eigenvalue $\lambda$ by the finite-dimensional spectral theorem, equivalently the maximum of $v^tTv$ on the real unit sphere. Replacing a maximizing vector by its coordinatewise absolute value cannot decrease this expression; take a nonnegative maximizer $v$. The equation $Tv=\lambda v$ implies $\lambda>0$ and every coordinate of $v$ is positive. Every maximizing vector has coordinates of one sign: if both signs occur, taking absolute values strictly increases its quadratic form because every cross entry is positive. Hence the top eigenspace is one-dimensional, for an independent top eigenvector could be chosen orthogonal to $v$ and would necessarily have both signs. Apply this to $S$ and normalize its positive top eigenvector $v$ by $v_0=1$. [step 1.1, algebra]

3.1 Since $R_i$ commutes with $S$, $R_iv=d_iv$ for a scalar $d_i$; it is positive because $R_i$ is nonzero and nonnegative and $v$ is strictly positive. Transposition and the scalar product give $d_i\langle v,v\rangle=\langle v,R_iv\rangle=\langle R_{i^*}v,v\rangle=d_{i^*}\langle v,v\rangle$. The coefficient of $b_0$ in $v b_i$ is $v_{i^*}$, so $d_i=v_{i^*}=v_i$. Right multiplication by a product now gives $d_id_j=\sum_kN_{ij}^kd_k$, and $R_0=1$ gives $d_0=1$. These numbers are fixed by the fusion data, since $S$ and the normalization of its unique positive top eigenvector are fixed. Writing $\Omega=\sum_i d_i b_i=v$, we have $\Omega b_i=d_i\Omega$ and therefore $\Omega^2=D\Omega$ for $D=\sum_i d_i^2$. [step 1.1, step 2.1, algebra]

4.1 For a module category let $A_i$ have entry $(b,a)$ equal to $n_{ai}^b$. Adjunction for the action, obtained by applying its associator to the evaluation and coevaluation of $X_i$, gives $\operatorname{Hom}(m_a\odot X_i,m_b)\cong\operatorname{Hom}(m_a,m_b\odot X_i^*)$, hence $A_i^t=A_{i^*}$. The matrices represent the fusion ring in the opposite order, which does not affect the equation for the square of a single element. Thus $B=\sum_i d_iA_i$ is symmetric, has nonnegative entries, satisfies $B^2=DB$, and has diagonal entries at least one since $A_0=1$. If the category is indecomposable, $B$ is strictly positive: the undirected graph joining simples whenever some $A_i$ has a positive connecting entry is connected, since its connected components are exactly action-stable summands. A path from $a$ to $b$ gives a positive entry in the product of its action matrices. Associativity expands that product as a nonnegative integer sum of the $A_i$, so some $A_i$ already connects $a$ to $b$. [F1, F2, step 3.1, algebra]

5.1 Every eigenvalue of symmetric $B$ is either $0$ or $D$, by $B^2=DB$. In the indecomposable case strict positivity and step 2.1 make its top eigenspace one-dimensional; since $B\ne0$, its nonzero eigenvalue is $D$ and it has rank one. Thus $r\le\operatorname{tr}B=D$, as each of its $r$ diagonal entries is at least one. For the multiplicity bound in any module category, no indecomposability is needed: the same polynomial identity and symmetry show that the operator norm of $B$ is $D$, so $0\le d_i(A_i)_{ba}\le B_{ba}\le D$ by applying the norm inequality to the unit coordinate vectors. Each entry is therefore a nonnegative integer bounded by $D/d_i$. At rank $r$ there are only $|I|r^2$ entries and finitely many such arrays. For indecomposable arrays $1\le r\le\lfloor D\rfloor$, so their union is finite. The empty category, if allowed, adds the single rank-zero array and is not indecomposable. [step 2.1, step 3.1, step 4.1, algebra] ∎
