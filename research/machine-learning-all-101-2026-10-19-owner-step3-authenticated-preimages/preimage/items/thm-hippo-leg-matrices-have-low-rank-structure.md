---
id: thm-hippo-leg-matrices-have-low-rank-structure
kind: theorem
title: HiPPO LegS, LegT, and LagT generators have normal-plus-low-rank form
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps: [def-s4-dplr-parameterization, thm-complex-spectral-theorem-for-normal-endomorphisms]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gu, Goel, and Ré, Efficiently Modeling Long Sequences with Structured State Spaces, Theorem 1 and Appendix C.1"
      url: "https://arxiv.org/pdf/2111.00396"
    - title: "Gu et al., HiPPO: Recurrent Memory with Optimal Polynomial Projections, §2.3 and Appendices D.1–D.3"
      url: "https://arxiv.org/pdf/2008.07669"
---

## Statement

Index rows and columns by $0,\ldots,N-1$. Define the real LegS coefficient matrix $G^S$ by $G^S_{nk}=-\sqrt{(2n+1)(2k+1)}$ when $n>k$, $G^S_{nn}=-(n+1)$, and $G^S_{nk}=0$ when $n<k$. In the LegS coefficient ODE for $t>0$ this matrix is multiplied by the time-dependent scalar $1/t$; the matrix assertion below does not make that ODE time-invariant. For $\theta>0$, define the LegT state generator by $G^T_{nk}=-(2n+1)(-1)^{n-k}/\theta$ when $n\ge k$ and $G^T_{nk}=-(2n+1)/\theta$ when $n<k$. Define the original HiPPO LagT state generator by $G^L_{nk}=-1$ when $n\ge k$ and $G^L_{nk}=0$ when $n<k$. Here $X^*$ is conjugate transpose, a complex matrix $H$ is normal when $H^*H=HH^*$, and a square matrix $V$ is unitary when $V^*V=VV^*=I$. For LegS and LagT use the identity similarity; for LegT use the invertible diagonal similarity $S_0=\operatorname{diag}(\sqrt{2n+1})_{n=0}^{N-1}\operatorname{diag}((-1)^n)_{n=0}^{N-1}$. Each transformed matrix is a difference $H-UV^*$ with $H$ normal and $\operatorname{rank}(UV^*)\le1$ for LegS and LagT and $\operatorname{rank}(UV^*)\le2$ for LegT. Consequently the equivalent finite-dimensional complex state-space matrix has a normal-plus-low-rank representation, and a unitary change of state coordinates gives diagonal-plus-low-rank form. Under any state change $x=S\widetilde x$, the input and output vectors change to $S^{-1}B$ and $S^*C$, respectively.

## Statement references

[Gu, Goel, and Ré, “Efficiently Modeling Long Sequences with Structured State Spaces,” Theorem 1 and Appendix C.1](https://arxiv.org/pdf/2111.00396)

[Gu et al., “HiPPO: Recurrent Memory with Optimal Polynomial Projections,” §2.3 and Appendices D.1–D.3](https://arxiv.org/pdf/2008.07669)

## Facts & Assumptions

**Given:** The finite matrices in the Statement, the parameter $\theta>0$ for LegT, and finite-dimensional complex state coordinates.

[F1] [[def-s4-dplr-parameterization]]: a normal-plus-low-rank matrix has form $A=V\Lambda V^*-PQ^*$ with unitary $V$ and diagonal $\Lambda$; under the state change $\widetilde x=V^*x$, the input and output vectors become $V^*B$ and $V^*C$.

[F2] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: every normal endomorphism of a finite-dimensional complex inner product space has an orthonormal basis of eigenvectors.

## Proof

1.1 Put $w_n=\sqrt{2n+1}$ and define the real skew-symmetric matrix $S$ by $S_{nk}=-w_nw_k/2$ for $n>k$, $S_{nk}=w_nw_k/2$ for $n<k$, and $S_{nn}=0$. The transpose is $-S$, so over $\mathbb C$ its conjugate transpose is also $-S$; hence $S$ is normal. With $v=w/\sqrt2$, entrywise comparison gives $G^S=(S-\tfrac12I)-vv^*$: below the diagonal the entries are $-w_nw_k$, above they cancel to zero, and on the diagonal they are $-\tfrac12-(2n+1)/2=-(n+1)$. Since a scalar shift of a normal matrix is normal and $vv^*$ has rank at most one, this is the required LegS decomposition. This assertion concerns the finite coefficient matrix only; the factor $1/t$ in the LegS ODE remains time-dependent. [F1, algebra]

1.2 Define $S$ with entries $-1/2$ below the diagonal, $+1/2$ above it, and zero on the diagonal. It is real skew-symmetric and therefore normal. For $e=(1,\ldots,1)^T$, entrywise comparison gives $G^L=(S-\tfrac12I)-\tfrac12ee^*$: below the diagonal the two terms sum to $-1$, above they sum to zero, and on the diagonal they sum to $-1$. Thus the original LagT generator is a normal matrix minus a rank-at-most-one matrix. [F1, algebra]

1.3 For LegT let $D=\operatorname{diag}(2n+1)_{n=0}^{N-1}$ and $E=\operatorname{diag}((-1)^n)_{n=0}^{N-1}$. Define $T_{nk}=1$ for $n\ge k$, and $T_{nk}=(-1)^{k-n}$ for $n<k$. Then direct entry evaluation gives $G^T=-DETE/\theta$: for $n\ge k$, $(-1)^n(-1)^k=(-1)^{n-k}$, while for $n<k$, $(-1)^n(-1)^{k-n}(-1)^k=1$. Write $T=S+R$, where $R_{nk}=1$ when $n$ and $k$ have the same parity and is zero otherwise. The matrix $R$ is the sum of the outer products of the even-index and odd-index indicator vectors, so its rank is at most two. For opposite parities, $S_{nk}=1$ below the diagonal and $S_{nk}=-1$ above it; for equal parities and on the diagonal, $S_{nk}=0$. Thus $S^T=-S$. The invertible diagonal matrix $S_0=D^{1/2}E$ gives $S_0^{-1}G^TS_0=-\theta^{-1}D^{1/2}SD^{1/2}-\theta^{-1}D^{1/2}RD^{1/2}$. The first term is real skew-symmetric and hence normal; the second has rank at most two. The diagonal similarity is essential: this proves the claim for an equivalent state-space matrix, not unitary similarity of the raw LegT matrix. [F1, algebra]

2.1 In each case write the resulting generator as $H-UV^*$ with $H$ normal: for LegS and LagT the factors are the displayed real vectors divided by $\sqrt2$, and for LegT use the even and odd indicator columns multiplied by $D^{1/2}/\sqrt\theta$ as both factors. By [F2], choose a unitary matrix $V_0$ with $V_0^*HV_0=\Lambda$ diagonal. Then $V_0^*(H-UV^*)V_0=\Lambda-(V_0^*U)(V_0^*V)^*$, preserving the low-rank bound. If the original coordinates were changed by $S_0$, the total state change is $x=S_0V_0z$; substitution into $x'=Gx+Bu$, $y=C^*x$ gives $z'=(V_0^*S_0^{-1}GS_0V_0)z+V_0^*S_0^{-1}Bu$ and output vector $V_0^*S_0^*C$. These are exactly the state-coordinate transformations required for an equivalent DPLR model. [F1, F2, step 1.1, step 1.2, step 1.3, algebra] ∎
