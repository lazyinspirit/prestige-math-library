---
id: prop-burau-determinant-recovers-the-alexander-polynomial-of-a-closed-braid
kind: proposition
title: "The Burau determinant recovers the Alexander polynomial of a closed braid"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 10
deps: [def-axiom-of-choice, def-reduced-burau-representation, def-coloured-reduced-burau-matrix,
       thm-the-burau-determinant-formula-for-a-closed-braid-and-its-axis,
       def-alexander-polynomial-from-the-first-elementary-ideal,
       thm-the-alexander-polynomial-is-an-oriented-link-invariant,
       def-closure-of-a-geometric-braid,
       def-unreduced-burau-matrices,
       prop-unreduced-burau-fits-an-exact-sequence-with-the-reduced-module,
       lem-the-reduced-burau-module-is-free-of-rank-n-minus-one,
       thm-topological-and-matrix-burau-representations-agree]
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
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey, section 4.2 equation (15) (printed p. 47): the reduced Burau determinant formula for the Alexander polynomial"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
    - title: "H. R. Morton, The multivariable Alexander polynomial for a closed braid, arXiv:math/9803138, Remark (1) and Remark (2) (printed pp. 3-4)"
      url: "https://arxiv.org/pdf/math/9803138"
---

## Statement

Assume AC. Let $n\ge2$, let $\beta\in B_n$ with closure $\widehat\beta$, and let
$$\bar\rho_n:B_n\longrightarrow\operatorname{GL}_{n-1}(\Lambda_1),\qquad \Lambda_1=\mathbb Z[t^{\pm1}],$$
be the reduced Burau representation of
[[def-reduced-burau-representation]]. Then the one-variable Alexander
polynomial of $\widehat\beta$ of
[[def-alexander-polynomial-from-the-first-elementary-ideal]] is given, up to
multiplication by a unit $\pm t^m$ of $\Lambda_1$, by
$$\Delta_{\widehat\beta}(t)\doteq \frac{(1-t)\,\det\bigl(I_{n-1}-\bar\rho_n(\beta)\bigr)}{1-t^{n}},$$
and if $\widehat\beta$ is a knot this equals
$\det(I_{n-1}-\bar\rho_n(\beta))/(1+t+\cdots+t^{n-1})$ up to units. In
particular for $n=2$ and $\beta=\sigma_1^{m}$ one has
$\bar\rho_2(\sigma_1^{m})=(-t)^{m}$ and
$$\Delta_{\widehat{\sigma_1^{m}}}(t)\doteq \frac{(1-t)\bigl(1-(-t)^{m}\bigr)}{1-t^{2}},$$
so for $m=3$ this is $t^2-t+1$, the trefoil value. The formula computes the
oriented link invariant $\Delta_{\widehat\beta}$ from any braid representative
of the link, with the stated unit ambiguity.

## Facts & Assumptions

**Given:** an integer $n\ge2$, a braid $\beta\in B_n$, its closure $\widehat\beta$, the reduced Burau representation $\bar\rho_n$ and the coloured reduced Burau matrix $\overline B_\beta(t_1,\dots,t_n)$ with equal-label specialisation $B_\beta(t)$. AC is inherited from the reduced Burau representation and Alexander-module suppliers.

[F1] The reduced Burau module $M_{\mathrm{red}}$ is free with the auxiliary basis $h_j=\varepsilon_j-\varepsilon_n$ ($h_n=0$), and $\bar\rho_n(\beta)$ is the action matrix in the fixed basis $b_j=t^j(h_j-h_{j+1})$, not in the $h$ basis ([[lem-the-reduced-burau-module-is-free-of-rank-n-minus-one]], [[def-reduced-burau-representation]]).

[F2] The unreduced Burau matrices of [[def-unreduced-burau-matrices]] are the matrices $B_i$ that are the identity outside rows and columns $i,i+1$, with block $\begin{pmatrix}1-t&t\\1&0\end{pmatrix}$, acting on column vectors in the relative lifted-edge basis $e_1,\dots,e_n$, and the topological action of $B_n$ on $U=H_1(\tilde X,p^{-1}d;\mathbb Z)$ in that basis is this matrix representation ([[thm-topological-and-matrix-burau-representations-agree]]).

[F3] $M_{\mathrm{red}}$ is the kernel of the connecting map $\partial_*:U\to\Lambda_1$, and in the relative basis $\partial_*(e_i)=t^{i-1}(t-1)$, so that the invariant covector is $\sigma(e_i)=t^{i-1}$ and $M_{\mathrm{red}}=\ker\sigma$; the exact sequence $0\to M_{\mathrm{red}}\to U\to\Lambda_1\to\mathbb Z\to0$ is $B_n$-equivariant, so the action on $M_{\mathrm{red}}$ is the restriction of the action on $U$. The level-$0$ class $\varepsilon_i$ of the $i$-th lifted edge satisfies $\varepsilon_i=t^{-(i-1)}e_i$ ([[prop-unreduced-burau-fits-an-exact-sequence-with-the-reduced-module]], [[def-unreduced-burau-matrices]], [[lem-the-reduced-burau-module-is-free-of-rank-n-minus-one]]).

[F4] The coloured reduced Burau matrix at equal labels $B_\beta(t)=\overline B_\beta(t,\dots,t)$ is the product of the matrices $\overline C_i(t)^{\pm1}$ of [[def-coloured-reduced-burau-matrix]] along an Artin word for $\beta$, where $\overline C_i(t)$ has $i$-th row entries $t$ at $(i,i-1)$, $-t$ at $(i,i)$ and $1$ at $(i,i+1)$, truncated at the boundary columns.

[F5] The Burau determinant formula of [[thm-the-burau-determinant-formula-for-a-closed-braid-and-its-axis]](2): in the one-variable specialisation the one-variable Alexander polynomial satisfies $\Delta_{\widehat\beta}(t)\doteq(1-t)\det(I-B_\beta(t))/(1-t^n)$, equivalently $D_{\widehat\beta}(t)\doteq\det(I-B_\beta(t))/(1-t^n)$ for a knot; the identifications of the strand variables are those of the closed braid.

[F6] $\Delta_{\widehat\beta}$ is an invariant of the oriented link type of $\widehat\beta$, well defined up to multiplication by a unit $\pm t^m$ ([[thm-the-alexander-polynomial-is-an-oriented-link-invariant]], [[def-alexander-polynomial-from-the-first-elementary-ideal]]).

## Proof

1.1 **The generators in the reduced basis.** Put $h_j:=\varepsilon_j-\varepsilon_n=t^{-(j-1)}e_j-t^{-(n-1)}e_n$ for $1\le j\le n-1$, the basis of [F1, F3]. For $1\le i\le n-2$ the matrix of $\sigma_i$ in this basis is the identity except for the block $\begin{pmatrix}1-t&1\\t&0\end{pmatrix}$ in rows and columns $i,i+1$; for $i=n-1$ it is the identity except for the last row $(-1,-1,\dots,-1,-t)$. Both assertions are the finite computation $B_i h_j=\sum_k(R_i)_{kj}h_k$ using $B_ih_j\in\ker\sigma$ and the expression of the result in the basis $h$, carried out on the two or three vectors moved by $B_i$. [F1, F2, F3, algebra]

2.1 **Conjugation with the equal-label matrices.** Put $P=I_{n-1}-S$, where $S$ is the subdiagonal shift, and $D=\operatorname{diag}(t,t^2,\ldots,t^{n-1})$. The columns of $Q=PD$ are the coordinates of the fixed basis $b_j=t^j(h_j-h_{j+1})$ in the auxiliary $h$ basis, so $\bar\rho_n(\sigma_i)=Q^{-1}R_iQ$. The matrices of step 1.1 satisfy $R_iP=P\overline C_i(t)$: for $i<n-1$ this is multiplication of the displayed two-row block; for $i=n-1$ the last row of $R_iP$ is zero before column $n-2$, then $t-1,-t$, as in $P\overline C_i(t)$. At $n=2$ the identity is the scalar $-t=-t$. Hence $\bar\rho_n(\sigma_i)=D^{-1}\overline C_i(t)D$. Multiplying these identities, including inverses, along the word gives $\bar\rho_n(\beta)=D^{-1}\overline B_\beta(t)D$, and therefore $\det(I_{n-1}-\overline B_\beta(t))=\det(I_{n-1}-\bar\rho_n(\beta))$. This also agrees with the frozen generator formulas of [[thm-topological-and-matrix-burau-representations-agree]]. [F1, F2, F3, F4, step 1.1, algebra]

3.1 **The Alexander formula.** Substituting the determinant identity of step 2.1 into the formula of [F5] gives $\Delta_{\widehat\beta}(t)\doteq(1-t)\det(I_{n-1}-\bar\rho_n(\beta))/(1-t^n)$, which is the displayed formula. For a knot, dividing by $1-t$ and using $1-t^n=(1-t)(1+t+\cdots+t^{n-1})$ gives $D_{\widehat\beta}(t)\doteq\det(I_{n-1}-\bar\rho_n(\beta))/(1-t^n)$, equivalently $\Delta_{\widehat\beta}(t)\doteq\det(I_{n-1}-\bar\rho_n(\beta))/(1+t+\cdots+t^{n-1})$, up to units. The right-hand side is computed from any braid representative of the link, while the left-hand side is the oriented link invariant of [F6]; this also shows that the right-hand side does not depend on the representative, up to the stated unit. [F5, F6, step 2.1, algebra]

4.1 **The two-strand case.** For $n=2$ the module $M_{\mathrm{red}}=\ker\sigma$ is one-dimensional with basis $h_1=e_1-t^{-1}e_2$ and, by step 1.1, $\bar\rho_2(\sigma_1)=-t$; hence $\bar\rho_2(\sigma_1^{m})=(-t)^{m}$ and the formula becomes $\Delta_{\widehat{\sigma_1^m}}\doteq \frac{(1-t)(1-(-t)^{m})}{1-t^{2}}$. For $m=1$ this is $\doteq1$ (the unknot); for $m=3$ it is $\frac{(1-t)(1+t^{3})}{1-t^{2}}=\frac{1+t^{3}}{1+t}=t^2-t+1$, the trefoil value; and for $m=2$ the closure $\widehat{\sigma_1^2}$ has two components and the same display gives $\Delta\doteq(1-t)(1-t^{2})/(1-t^{2})=1-t$, the one-variable Alexander polynomial of the Hopf link in the convention of [F5]. These computations prove the displayed specialisations of the statement. [F5, step 1.1, step 3.1, algebra] ∎

## Remarks

- The deps of this proposition include four items of the sibling pair `the-burau-representations` ([[def-unreduced-burau-matrices]], [[prop-unreduced-burau-fits-an-exact-sequence-with-the-reduced-module]], [[lem-the-reduced-burau-module-is-free-of-rank-n-minus-one]], [[thm-topological-and-matrix-burau-representations-agree]]). They supply the matrix realization of the abstract reduced representation used in steps 1.1–2.1; their current statements supply exactly the relative basis, invariant covector and topological action used here.
- The design listed Markov's theorem among the prerequisites of this item; it is not needed, because the identity is proved for each braid representative directly from the determinant theorem, and the invariance of the left-hand side is [[thm-the-alexander-polynomial-is-an-oriented-link-invariant]].
