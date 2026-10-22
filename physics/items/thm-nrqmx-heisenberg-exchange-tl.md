---
id: thm-nrqmx-heisenberg-exchange-tl
kind: theorem
domain: mathematics
library: mathematics
title: "The finite isotropic spin-half exchange Hamiltonian is a Temperley–Lieb element"
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 2
deps:
  - def-nrqmx-spin-half-tensor-chain
  - thm-nrqmx-spin-half-temperley-lieb
  - prop-nrqm-orbital-and-spin-finite-spin-matrices
  - thm-nrqmx-schur-weyl-exchange-blocks
dependency_roles:
  def-nrqmx-spin-half-tensor-chain: mathematical-premise
  thm-nrqmx-spin-half-temperley-lieb: mathematical-premise
  prop-nrqm-orbital-and-spin-finite-spin-matrices: mathematical-premise
  thm-nrqmx-schur-weyl-exchange-blocks: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Yacine Ikhlef, Jesper Lykke Jacobsen, and Hubert Saleur, A Temperley–Lieb quantum chain with two- and three-site interactions, Introduction and §2"
      url: "https://arxiv.org/pdf/0901.4685"
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

Let $N\geq1$, let $\hbar>0$, and let real couplings
$\mathcal J_i\in\mathbb R$ be given for $1\leq i<N$. On
$\mathcal H_N=(\mathbb C^2)^{\otimes N}$, let $\sigma_i^a$ be the Pauli
matrix $\sigma^a$ acting on factor $i$ and identity on all other factors,
where
$$\sigma^x=\begin{pmatrix}0&1\\1&0\end{pmatrix},\quad \sigma^y=\begin{pmatrix}0&-i\\i&0\end{pmatrix},\quad \sigma^z=\begin{pmatrix}1&0\\0&-1\end{pmatrix}.$$
Let $s_i$ swap factors $i,i+1$ and put $e_i=I-s_i$. Set
$S_i^a:=\hbar\sigma_i^a/2$ for $a\in\{x,y,z\}$, and define the finite-chain
operator
$$H:=\sum_{i=1}^{N-1}\mathcal J_i\hbar^{-2}\sum_{a=x,y,z}S_i^aS_{i+1}^a.$$
For every bond,
$$\hbar^{-2}\sum_a S_i^aS_{i+1}^a=\tfrac12s_i-\tfrac14I =\tfrac14I-\tfrac12e_i.$$
Thus $H=\sum_i\mathcal J_i(\tfrac14I-\tfrac12e_i)$ is self-adjoint, belongs
to the represented Temperley–Lieb algebra, and on each summand of the unitary
decomposition
$$\mathcal H_N\cong\bigoplus_{\lambda\vdash N,\,\ell(\lambda)\le2} S^\lambda\otimes M_\lambda,\qquad M_\lambda:=\operatorname{Hom}_{S_N}(S^\lambda,\mathcal H_N),$$
acts on $S^\lambda$ and as identity on $M_\lambda$. For $N=1$ the sum is
empty and $H=0$.

## Statement references

[[def-nrqmx-spin-half-tensor-chain]]

[[thm-nrqmx-spin-half-temperley-lieb]]

[[thm-nrqmx-schur-weyl-exchange-blocks]]

## Facts & Assumptions

**Given:** A finite chain length $N\geq1$, $\hbar>0$, real couplings
$\mathcal J_i$, the local Pauli matrices, adjacent swaps and $e_i$.

[F1] [[def-nrqmx-spin-half-tensor-chain]]: $J_i^a=\sigma_i^a/2$,
$e_i=I-s_i$. The inner product is linear in its
first argument and on elementary tensors is
$\langle v_1\otimes\cdots\otimes v_N,w_1\otimes\cdots\otimes w_N\rangle
=\prod_{k=1}^N\langle v_k,w_k\rangle_{\mathbb C^2}$, where
$\langle(a,b),(c,d)\rangle_{\mathbb C^2}=a\bar c+b\bar d$.
The definition $S_i^a:=\hbar\sigma_i^a/2$ in this theorem's Statement
therefore gives $S_i^a=\hbar J_i^a$.

[F2] [[prop-nrqm-orbital-and-spin-finite-spin-matrices]]: in the ordered
basis $|0\rangle,|1\rangle$, the Pauli matrices are
$$\sigma_x=\begin{pmatrix}0&1\\1&0\end{pmatrix},\quad \sigma_y=\begin{pmatrix}0&-i\\i&0\end{pmatrix},\quad \sigma_z=\begin{pmatrix}1&0\\0&-1\end{pmatrix};$$
they are self-adjoint.

[F3] [[thm-nrqmx-spin-half-temperley-lieb]]: the $e_i$ are self-adjoint and
generate the represented loop-weight-two Temperley–Lieb algebra.

[F4] [[thm-nrqmx-schur-weyl-exchange-blocks]]: the permutation action is on
$S^\lambda$ and the diagonal $U(2)$ action is on $M_\lambda$.

## Proof

1.1 Since $S_i^a=\hbar\sigma_i^a/2$, the factors $\hbar^2$ cancel and
$$\hbar^{-2}\sum_aS_i^aS_{i+1}^a=\tfrac14\sum_a\sigma_i^a\sigma_{i+1}^a.$$
On the ordered basis $|00\rangle,|01\rangle,|10\rangle,|11\rangle$, the
operator $\frac12(I+\sum_a\sigma_a\otimes\sigma_a)$ sends these four
vectors respectively to $|00\rangle,|10\rangle,|01\rangle,|11\rangle$:
for the middle two, the Pauli sum is $2|10\rangle-|01\rangle$ and
$2|01\rangle-|10\rangle$. This is exactly the swap, so
$s_i=\frac12(I+\sum_a\sigma_i^a\sigma_{i+1}^a)$. Rearranging gives
$\frac12s_i-\frac14I$, and substituting $e_i=I-s_i$ gives
$\frac14I-\frac12e_i$. This proves the bond identity including its
normalization. [F1, F2, algebra]

2.1 Each $e_i$ is self-adjoint by [F3], $I$ is self-adjoint, and every
$\mathcal J_i$ is real; hence their finite real linear combination $H$ is
self-adjoint. By [F3] each $e_i$ lies in the represented Temperley–Lieb
algebra, so the displayed expression for $H$ is an element of that algebra's
image. [F3, step 1.1, algebra]

3.1 An adjacent swap commutes with the diagonal action $U^{\otimes N}$ for
every $U\in U(2)$: on an elementary tensor, swapping the two entries after
applying $U$ to each gives the same tensor as applying $U$ after the swap.
Thus $e_i=I-s_i$ and $H$ commute with that action. By [F4], the decomposition
places the permutation operators on $S^\lambda$ and the collective unitary
action on $M_\lambda$; therefore the formula for $H$ acts on $S^\lambda$ and
as identity on $M_\lambda$. When $N=1$ there are no bonds and all displayed
sums are zero. [F1, F4, step 2.1, algebra] ∎

## Remarks

With the usual SI interpretation, $S_i^a$ has units of joule-seconds,
$\hbar$ has units of joule-seconds, and $\mathcal J_i$ has units of energy;
each ratio in the bond identity is dimensionless and $H$ has units of energy.
These unit labels do not assert a measured coupling or a material realization.

For $N=2$, the singlet has $e_1=2$ and the triplet has $e_1=0$, so the two
eigenvalues of the single bond term are respectively $-3\mathcal J_1/4$ and
$+\mathcal J_1/4$.
