---
id: ex-nrqmx-three-spin-blocks
kind: example
domain: mathematics
library: mathematics
title: "Three spin-half factors: the quartet and the two exchange-coupled doublets"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 3
deps:
  - def-nrqmx-spin-half-tensor-chain
  - thm-nrqmx-spin-half-temperley-lieb
  - thm-nrqmx-heisenberg-exchange-tl
  - prop-nrqm-orbital-and-spin-finite-spin-matrices
  - thm-nrqmx-schur-weyl-exchange-blocks
  - thm-tensor-product-basis-from-bases
dependency_roles:
  def-nrqmx-spin-half-tensor-chain: mathematical-premise
  thm-nrqmx-spin-half-temperley-lieb: mathematical-premise
  thm-nrqmx-heisenberg-exchange-tl: mathematical-premise
  prop-nrqm-orbital-and-spin-finite-spin-matrices: mathematical-premise
  thm-nrqmx-schur-weyl-exchange-blocks: mathematical-premise
  thm-tensor-product-basis-from-bases: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Yacine Ikhlef, Jesper Lykke Jacobsen, and Hubert Saleur, A Temperley–Lieb quantum chain with two- and three-site interactions, §2"
      url: "https://arxiv.org/pdf/0901.4685"
    - title: "Representation Theory, CT, Lent 2005, complete course notes, Chapters 23–24"
      url: "https://math.uchicago.edu/~margalit/repthy/RepThry.pdf"
---

## Example

Use the standard Pauli matrices
$$\sigma^x=\begin{pmatrix}0&1\\1&0\end{pmatrix},\quad \sigma^y=\begin{pmatrix}0&-i\\i&0\end{pmatrix},\quad \sigma^z=\begin{pmatrix}1&0\\0&-1\end{pmatrix},$$
and let $\sigma_j^a$ act by $\sigma^a$ on tensor factor $j$ and identity on
the other factors. Let $|abc\rangle:=|a\rangle\otimes|b\rangle\otimes|c\rangle$ for
$a,b,c\in\{0,1\}$. In $\mathcal H_3=(\mathbb C^2)^{\otimes3}$ define
$$\begin{aligned} q_{3/2}&=|000\rangle,& q_{1/2}&=(|100\rangle+|010\rangle+|001\rangle)/\sqrt3,\\ q_{-1/2}&=(|110\rangle+|101\rangle+|011\rangle)/\sqrt3,& q_{-3/2}&=|111\rangle,\\ a_+&=(|010\rangle-|100\rangle)/\sqrt2,& a_-&=(|011\rangle-|101\rangle)/\sqrt2,\\ b_+&=(2|001\rangle-|010\rangle-|100\rangle)/\sqrt6,& b_-&=(|101\rangle+|011\rangle-2|110\rangle)/\sqrt6. \end{aligned}$$
These eight vectors form an orthonormal basis. With
$K_z:=\tfrac12\sum_{j=1}^3\sigma_j^z$ and
$K_+:=\tfrac12\sum_{j=1}^3(\sigma_j^x+i\sigma_j^y)$, the $q$-vectors form
the spin-$3/2$ ladder and the $a$- and $b$-pairs form two spin-$1/2$ ladders.
For $K_-:=\tfrac12\sum_{j=1}^3(\sigma_j^x-i\sigma_j^y)$, their lowering
actions are the adjoints of the raising actions displayed below:
$$K_+q_{1/2}=\sqrt3q_{3/2},\quad K_+q_{-1/2}=2q_{1/2},\quad K_+q_{-3/2}=\sqrt3q_{-1/2},\qquad K_+a_-=a_+,\quad K_+b_-=b_+,$$
with the highest vectors killed by $K_+$ and the stated subscripts giving the
$K_z$ eigenvalues. The adjacent swaps act as identity on the quartet and on
each magnetic pair $(a_+,b_+)$ and $(a_-,b_-)$ by
$$s_{12}=\begin{pmatrix}-1&0\\0&1\end{pmatrix},\qquad s_{23}=\begin{pmatrix}1/2&\sqrt3/2\\\sqrt3/2&-1/2\end{pmatrix}.$$
For $\hbar>0$, set $S_j^a=\hbar\sigma_j^a/2$, and for real couplings
$\mathcal J_{12},\mathcal J_{23}$ define
$$H_3:=\sum_{j=1}^{2}\mathcal J_{j,j+1}\hbar^{-2} \sum_{a=x,y,z}S_j^aS_{j+1}^a.$$
This finite-chain exchange operator is the scalar
$(\mathcal J_{12}+\mathcal J_{23})/4$ on the quartet and, on
each doublet multiplicity basis $(a_\pm,b_\pm)$, has matrix
$$\frac14\begin{pmatrix}-3\mathcal J_{12}&\sqrt3\mathcal J_{23}\\ \sqrt3\mathcal J_{23}&\mathcal J_{12}-2\mathcal J_{23}\end{pmatrix}.$$
The latter matrix has eigenvalues
$$-\frac{\mathcal J_{12}+\mathcal J_{23}}4\ \pm\ \frac12\sqrt{\mathcal J_{12}^2-\mathcal J_{12}\mathcal J_{23}+ \mathcal J_{23}^2},$$
each repeated for the two magnetic states.

## Example references

[[def-nrqmx-spin-half-tensor-chain]]

[[thm-nrqmx-spin-half-temperley-lieb]]

[[thm-nrqmx-heisenberg-exchange-tl]]

[[thm-nrqmx-schur-weyl-exchange-blocks]]

## Facts & Assumptions

**Given:** The ordered tensor basis of $\mathcal H_3$, the Pauli matrices,
and real couplings $\mathcal J_{12},\mathcal J_{23}$.

[F1] [[def-nrqmx-spin-half-tensor-chain]],
[[thm-tensor-product-basis-from-bases]]: the eight binary tensor words form a
basis of $\mathcal H_3$ and are orthonormal for the product inner product
linear in its first argument, whose elementary-tensor formula is
$\langle v_1\otimes v_2\otimes v_3,w_1\otimes w_2\otimes w_3\rangle
=\prod_{j=1}^3\langle v_j,w_j\rangle_{\mathbb C^2}$ with
$\langle(a,b),(c,d)\rangle_{\mathbb C^2}=a\bar c+b\bar d$;
$\sigma_j^a$ acts by the Pauli matrix on factor $j$.

[F2] [[prop-nrqm-orbital-and-spin-finite-spin-matrices]]: in the ordered
basis $|0\rangle,|1\rangle$, $\sigma^z|0\rangle=|0\rangle$,
$\sigma^z|1\rangle=-|1\rangle$, and
$\frac12(\sigma^x+i\sigma^y)|1\rangle=|0\rangle$,
$\frac12(\sigma^x+i\sigma^y)|0\rangle=0$,
$\frac12(\sigma^x-i\sigma^y)|0\rangle=|1\rangle$,
and $\frac12(\sigma^x-i\sigma^y)|1\rangle=0$; these raising and lowering
matrices are adjoints.

[F3] [[thm-nrqmx-spin-half-temperley-lieb]]: on three sites,
$e_{12}=I-s_{12}$ and $e_{23}=I-s_{23}$; these are the loop-weight-two
Temperley–Lieb generators.

[F4] [[thm-nrqmx-heisenberg-exchange-tl]]: a real-coupled finite chain has
the exact bond identity $S_i\cdot S_{i+1}/\hbar^2=I/4-e_i/2$.

[F5] [[thm-nrqmx-schur-weyl-exchange-blocks]]: permutation operators act on
Specht factors and collective unitary operators act on multiplicity factors.

## Verification

1.1 The coefficient vectors of $a_+$ and $b_+$ in the ordered one-down
subspace $(|001\rangle,|010\rangle,|100\rangle)$ are
$(0,1,-1)/\sqrt2$ and $(2,-1,-1)/\sqrt6$; their squared norms are $1$ and
their inner product is $0$. The one-up pair $a_-,b_-$ has coefficient vectors
$(0,-1,1)/\sqrt2$ and $(-2,1,1)/\sqrt6$ in the ordered basis
$(|110\rangle,|101\rangle,|011\rangle)$, again with norm $1$ and inner
product $0$. Each $q$-vector has norm $1$; the two three-term $q$-vectors
are orthogonal to the corresponding $a,b$ vectors because their coefficient
vectors are constant while the latter have coefficient sum zero. Vectors
with different numbers of entries equal to $1$ are orthogonal. Thus the eight
vectors are orthonormal, and [F1] says the ambient space has dimension eight;
they are a basis. [F1, algebra]

2.1 Applying $K_z$ counts $+1/2$ for each $0$ and $-1/2$ for each $1$,
which gives the subscripts in the statement. By [F2], $K_+$ changes one $1$
to $0$ with coefficient $1$. Summing over positions gives
$$K_+q_{1/2}=\sqrt3q_{3/2},\quad K_+q_{-1/2}=2q_{1/2},\quad K_+q_{-3/2}=\sqrt3q_{-1/2},\quad K_+a_-=a_+,\quad K_+b_-=b_+;$$
the top states $q_{3/2},a_+,b_+$ are killed because their coefficients
cancel or they contain no $1$. The lowering actions are the adjoints of these
raising actions because the displayed basis is orthonormal and each local
lowering matrix is the adjoint of its raising matrix by [F2]. This verifies
both ladder directions. [F2, step 1.1, algebra]

2.2 The swaps fix every symmetric $q$-vector. On both magnetic pairs,
$s_{12}$ changes the sign of $a_\pm$ and fixes $b_\pm$, by their displayed
coefficients. For the upper pair,
$$s_{23}a_+=(|001\rangle-|100\rangle)/\sqrt2 =\tfrac12a_++\tfrac{\sqrt3}{2}b_+,$$
and direct substitution gives
$s_{23}b_+=(\sqrt3/2)a_+-(1/2)b_+$. On the lower pair the same
substitution gives
$$s_{23}a_-=(|011\rangle-|110\rangle)/\sqrt2 =\tfrac12a_-+\tfrac{\sqrt3}{2}b_-,\qquad s_{23}b_-=(\sqrt3/2)a_--(1/2)b_-.$$
These are exactly the two matrices stated. [F1, step 1.1, algebra]

3.1 The two matrices act on the same coordinate pair $(a_+,b_+)$ and
$(a_-,b_-)$, while $K_z$ and $K_\pm$ act on the magnetic labels with the
same coefficients for either exchange coordinate. The two-dimensional
exchange representation is irreducible: the only invariant lines of
$s_{12}=\operatorname{diag}(-1,1)$ are the two coordinate axes, and
$s_{23}$ mixes both axes because its off-diagonal entries are nonzero.
Thus this basis displays a spin-$3/2$ block with trivial exchange and a
two-dimensional exchange factor repeated over the two spin-$1/2$ magnetic
states, in the factor placement of [F5]. [F5, step 2.1, step 2.2, algebra]

4.1 By [F3]–[F4], each bond contributes $\mathcal J(I/4-e/2)$.
On the quartet both swaps are $I$, so both $e$'s vanish and the total is
$(\mathcal J_{12}+\mathcal J_{23})I/4$. On either doublet pair,
$$e_{12}=\begin{pmatrix}2&0\\0&0\end{pmatrix},\qquad e_{23}=\begin{pmatrix}1/2&-\sqrt3/2\\-\sqrt3/2&3/2\end{pmatrix}.$$
Therefore the two bond matrices are
$$\begin{pmatrix}-3/4&0\\0&1/4\end{pmatrix},\qquad \begin{pmatrix}0&\sqrt3/4\\\sqrt3/4&-1/2\end{pmatrix},$$
and their real-coupled sum is the displayed doublet matrix, identical for
$+$ and $-$. For $a=\mathcal J_{12}$ and $b=\mathcal J_{23}$, its trace is
$-(a+b)/2$ and determinant is $-3(a-b)^2/16$; solving the quadratic
characteristic equation gives
$-(a+b)/4\pm\frac12\sqrt{a^2-ab+b^2}$. This proves the exact block
decomposition and multiplicity of these eigenvalues. [F3, F4, step 2.2,
algebra] ∎

## Remarks

The standard tableaux below label the Specht factors of shapes $(3)$ and
$(2,1)$. The spin-coupling basis $(a_\pm,b_\pm)$ is a singlet/triplet
coupling basis for the two-dimensional multiplicity space; it is not asserted
to be the displayed tableau basis. The diagram is an index convention, not
part of the proof.

```tikz
\begin{tikzpicture}[scale=.62]
  \draw (0,0) rectangle (1,1); \node at (.5,.5) {$1$};
  \draw (1,0) rectangle (2,1); \node at (1.5,.5) {$2$};
  \draw (2,0) rectangle (3,1); \node at (2.5,.5) {$3$};
  \node at (1.5,-.35) {shape $(3)$};
  \draw (4,0) rectangle (5,1); \node at (4.5,.5) {$1$};
  \draw (5,0) rectangle (6,1); \node at (5.5,.5) {$2$};
  \draw (4,-1) rectangle (5,0); \node at (4.5,-.5) {$3$};
  \node at (5,-1.45) {shape $(2,1)$};
  \draw (7,0) rectangle (8,1); \node at (7.5,.5) {$1$};
  \draw (8,0) rectangle (9,1); \node at (8.5,.5) {$3$};
  \draw (7,-1) rectangle (8,0); \node at (7.5,-.5) {$2$};
  \node at (8,-1.45) {shape $(2,1)$};
\end{tikzpicture}
```
