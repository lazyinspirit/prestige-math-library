---
id: ex-unreduced-and-reduced-burau-matrices-for-b-three
kind: example
title: "Unreduced and reduced Burau matrices for three strands"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 10
deps:
  - def-unreduced-burau-matrices
  - thm-topological-and-matrix-burau-representations-agree
  - def-reduced-burau-representation
  - lem-the-invariant-vector-and-covector-of-the-unreduced-burau
  - lem-the-reduced-burau-module-is-free-of-rank-n-minus-one
  - prop-unreduced-burau-fits-an-exact-sequence-with-the-reduced-module
  - lem-units-and-powers-of-the-laurent-polynomial-ring
  - def-axiom-of-choice
  - def-the-laurent-polynomial-ring
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey (background on Burau matrices, the cyclic cover and absolute homology)"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
      locator: "Section 4.2, printed pp. 46-47; section 4.4, printed p. 52. Relative-module, basis and specialization calculations are supplied locally."
    - title: "Vasudha Bharathram, Joan S. Birman and Tara E. Brendle, The Burau representation is faithful for n = 4, arXiv:2607.05283v1 (6 July 2026), Introduction and section 2 (printed pp. 1-5)"
      url: "https://arxiv.org/pdf/2607.05283v1"
      locator: "Introduction and section 2, printed pp. 1-5"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Example

Assume AC (inherited through the identification of the reduced matrices with
the topological representation). For $n=3$ the unreduced Burau matrices over
$\Lambda_1=\mathbb Z[t^{\pm1}]$ are
$$\rho_3(\sigma_1)=\begin{pmatrix}1-t&t&0\\1&0&0\\0&0&1\end{pmatrix},\qquad \rho_3(\sigma_2)=\begin{pmatrix}1&0&0\\0&1-t&t\\0&1&0\end{pmatrix},$$ and
they satisfy
$\rho_3(\sigma_1)\rho_3(\sigma_2)\rho_3(\sigma_1)=\rho_3(\sigma_2)\rho_3(\sigma_1)\rho_3(\sigma_2)$.
The reduced matrices in the basis
$(g_1,g_2)=(te_1-e_2,\,te_2-e_3)$ of the invariant-covector kernel
$\ker\sigma$ are
$$\bar\rho_3(\sigma_1)=\begin{pmatrix}-t&t\\0&1\end{pmatrix},\qquad \bar\rho_3(\sigma_2)=\begin{pmatrix}1&0\\1&-t\end{pmatrix},$$ and they also
satisfy the braid relation; they are the matrices of the restriction of the
unreduced matrices to $\ker\sigma$, that is, the reduction of the unreduced
matrices to the invariant-covector kernel, in agreement with clause (2) of
[[thm-topological-and-matrix-burau-representations-agree]].

## Verification

**Given:** the ring $\Lambda_1=\mathbb Z[t^{\pm1}]$ with its element $t$;
$n=3$; the unreduced matrices $B_1,B_2$ of
[[def-unreduced-burau-matrices]]; the vectors
$\sigma=(1,t,t^2)$, $g_1=te_1-e_2$, $g_2=te_2-e_3$; the reduced
representation $\bar\rho_3$ of [[def-reduced-burau-representation]].

[A1] $B_i$ is the identity outside rows and columns $i,i+1$ and has the block
$\begin{pmatrix}1-t&t\\1&0\end{pmatrix}$ there, acting on column vectors by
$e_i\mapsto(1-t)e_i+e_{i+1}$, $e_{i+1}\mapsto te_i$; matrices compose in the
library order, so a word acts by the product of its matrices
([[def-unreduced-burau-matrices]]).

[A2] In the basis $(g_1,\dots,g_{n-1})$, $g_i=te_i-e_{i+1}$
$(1\le i\le n-1)$, of $\ker\sigma=\{x:\sigma(x)=0\}$ with
$\sigma=(1,t,\dots,t^{n-1})$, the reduced representation acts by the three-term
formulas $g_{j-1}\mapsto g_{j-1}+g_j$, $g_j\mapsto -tg_j$,
$g_{j+1}\mapsto tg_j+g_{j+1}$, all other $g_i$ fixed; for $n=3$ this gives the
two displayed $2\times2$ matrices
([[thm-topological-and-matrix-burau-representations-agree]], clause (2);
[[def-reduced-burau-representation]]).

[A3] $\sigma B_i=\sigma$ for $i=1,2$, so $\ker\sigma$ is invariant under both
$B_1$ and $B_2$: if $\sigma(x)=0$ then $\sigma(B_ix)=\sigma(x)=0$
([[lem-the-invariant-vector-and-covector-of-the-unreduced-burau]], clause (b)).

[A4] $M_{\mathrm{red}}$ is free of rank $n-1$ and is carried onto
$\ker\sigma$ by the basis identification of the pair sequence
([[lem-the-reduced-burau-module-is-free-of-rank-n-minus-one]],
[[prop-unreduced-burau-fits-an-exact-sequence-with-the-reduced-module]]); in
particular $\ker\sigma$ is free of rank $2$ for $n=3$.

[A5] $\Lambda_1$ is an integral domain in which $t\ne0$; hence $at=0$ implies
$a=0$. Matrices record the images of basis vectors as columns
([[lem-units-and-powers-of-the-laurent-polynomial-ring]] (a),
[[def-the-laurent-polynomial-ring]]).

**Proof technique:** direct.

1.1 *The unreduced matrices.* For $n=3$ the block of [A1] sits in rows and columns $1,2$ for $B_1$ and in rows and columns $2,3$ for $B_2$, with all other entries those of the identity: $B_1=\begin{pmatrix}1-t&t&0\\1&0&0\\0&0&1\end{pmatrix}$ and $B_2=\begin{pmatrix}1&0&0\\0&1-t&t\\0&1&0\end{pmatrix}$, as displayed. [A1, algebra]

1.2 *The braid relation for the unreduced matrices.* Direct matrix multiplication gives $B_1B_2=\begin{pmatrix}1-t&t-t^2&t^2\\1&0&0\\0&1&0\end{pmatrix}$ and $B_2B_1=\begin{pmatrix}1-t&t&0\\1-t&0&t\\1&0&0\end{pmatrix}$; multiplying on the right by $B_1$ respectively $B_2$ gives in both cases the matrix $\begin{pmatrix}1-t&t-t^2&t^2\\1-t&t&0\\1&0&0\end{pmatrix}$, so $B_1B_2B_1=B_2B_1B_2$. [A1, algebra]

1.3 *The kernel basis and the restricted action.* $\sigma(g_1)=t-t=0$ and $\sigma(g_2)=t\cdot t-t^2=0$, so $g_1,g_2\in\ker\sigma$; they are independent, because $ag_1+bg_2=0$ reads $(at,\,-a+bt,\,-b)=0$ with $t\ne0$, so $b=0$, then $a=0$ by [A5]. They also span: if $x=x_1e_1+x_2e_2+x_3e_3$ satisfies $x_1+tx_2+t^2x_3=0$, set $b=-x_3$ and $a=-x_2-tx_3$. Then $ag_1+bg_2$ has coordinates $(at,-a+bt,-b)=(-tx_2-t^2x_3,x_2,x_3)=(x_1,x_2,x_3)$. Thus independence and this explicit spanning prove that $(g_1,g_2)$ is a $\Lambda_1$-basis of $\ker\sigma$. Since $\ker\sigma$ is $B_1$- and $B_2$-invariant by [A3], the matrices act on this basis: using the actions of [A1], $B_1g_1=t((1-t)e_1+e_2)-te_1=-t^2e_1+te_2=-tg_1$ and $B_1g_2=t(te_1)-e_3=t^2e_1-e_3=tg_1+g_2$; likewise $B_2g_1=te_1-((1-t)e_2+e_3)=te_1+(t-1)e_2-e_3=g_1+g_2$ and $B_2g_2=t((1-t)e_2+e_3)-te_2=-t^2e_2+te_3=-tg_2$. Reading the two images as columns gives $\bar\rho_3(\sigma_1)=\begin{pmatrix}-t&t\\0&1\end{pmatrix}$ and $\bar\rho_3(\sigma_2)=\begin{pmatrix}1&0\\1&-t\end{pmatrix}$, the displayed reduced matrices. [A1, A2, A3, A4, A5, algebra]

2.1 *The braid relation for the reduced matrices.* Direct multiplication gives $M_1M_2=\begin{pmatrix}0&-t^2\\1&-t\end{pmatrix}$ and $M_2M_1=\begin{pmatrix}-t&t\\-t&0\end{pmatrix}$ for $M_1=\begin{pmatrix}-t&t\\0&1\end{pmatrix}$, $M_2=\begin{pmatrix}1&0\\1&-t\end{pmatrix}$; multiplying by $M_1$ respectively $M_2$ gives $M_1M_2M_1=M_2M_1M_2=\begin{pmatrix}0&-t^2\\-t&0\end{pmatrix}$, so the reduced matrices satisfy the braid relation. [step 1.3, algebra]

3.1 *Reduction of the unreduced matrices.* Step 1.3 exhibited the restricted actions of $B_1,B_2$ on the invariant kernel $\ker\sigma$ in the basis $(g_1,g_2)$ as exactly $M_1,M_2$, and step 2.1 verified the braid relation at both levels; hence the displayed reduced matrices are the reduction of the displayed unreduced matrices to the invariant-covector kernel, and they agree with clause (2) of [A2]. AC is inherited through the cited identification of the reduced matrices with the topological representation; the matrix computations are choice free. [A2, step 1.3, step 2.1] ∎
