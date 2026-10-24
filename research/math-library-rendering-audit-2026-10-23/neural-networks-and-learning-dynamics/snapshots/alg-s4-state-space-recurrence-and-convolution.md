---
id: alg-s4-state-space-recurrence-and-convolution
kind: algorithm
title: S4 state-space recurrence and convolution procedure
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps: [def-s4-dplr-parameterization, alg-radix-two-fft, alg-cauchy-matvec-at-roots-of-unity, lem-woodbury-dplr-bilinear-inverse]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Gu, Goel, and Ré, Efficiently Modeling Long Sequences with Structured State Spaces, Algorithm 1 and Appendix C"
      url: "https://arxiv.org/pdf/2111.00396"
---

## Definition

Let $N,r\ge1$ and $A=\Lambda-PQ^*$ with $\Lambda\in\mathbb C^{N\times N}$ diagonal and $P,Q\in\mathbb C^{N\times r}$, where $^*$ denotes conjugate transpose; let $B,C\in\mathbb C^N$, let $\Delta>0$, and put $\alpha=\Delta/2$. The bilinear step is defined only when $G=I-\alpha A$ is invertible. Given an input sequence $(u_t)$ and state $x_{-1}$, its recurrent mode computes
$$ b_t=(I+\alpha A)x_{t-1}+\Delta Bu_t,\qquad Gx_t=b_t,\qquad y_t=C^*x_t. $$
For a zero initial state, the equivalent matrices and length-$L$ kernel are $\bar A=G^{-1}(I+\alpha A)$, $\bar B=G^{-1}\Delta B$, and $K_j=C^*\bar A^j\bar B$ for $0\le j<L$; a direct term $Du_t$, if present, is added separately.

For the filter mode, fix an integer $L\ge1$, let $M$ be the least power of two with $M\ge L$, let $\omega=e^{-2\pi i/M}$, and let $\widetilde C\in\mathbb C^N$ be supplied as the length-$M$ truncated-output parameter. When a conventional output vector $C$ is used, this parameter is $\widetilde C=(I-\bar A^M)^*C$. Define the $M$ root values $z_k=\omega^k$. The algorithm returns the first $L$ coefficients of the inverse radix-two transform of the values $H(z_k)$ below.

For $z_k=-1$, set $H(z_k)=(\Delta/2)\widetilde C^*B$. For each $z=z_k\ne-1$, put $s(z)=(2/\Delta)(1-z)/(1+z)$. If $s(z)-\lambda_j=0$ for some diagonal entry $\lambda_j$ of $\Lambda$, return status `resonant-diagonal`. If no diagonal resonance is present, write $R(z)=\operatorname{diag}((s(z)-\lambda_j)^{-1})$ and $W(z)=I_r+Q^*R(z)P$. If $W(z)$ is singular, return status `resonant-correction`. When this correction is invertible, the target root value is
$$ H(z)=\frac{2}{1+z}\left(\widetilde C^*R(z)B-\widetilde C^*R(z)P\,W(z)^{-1}Q^*R(z)B\right). $$
The preceding resolvent expression specifies the target root values. The filter evaluation computes them using $1+2r+r^2=(r+1)^2$ scalar Cauchy products as follows. Put $a=2/\Delta$, and for each $j$ with $\lambda_j\ne-a$ define $\mu_j=(a-\lambda_j)/(a+\lambda_j)$. For any pair of vectors $u,v\in\mathbb C^N$, compute on the root grid
$$ S_{uv}(z)=\frac{2}{1+z}u^*R(z)v =\frac{\Delta}{2}\sum_{j:\lambda_j=-a}\overline{u_j}v_j-2\sum_{j:\lambda_j\ne-a}\frac{\overline{u_j}v_j}{a+\lambda_j}\frac{1}{z-\mu_j} $$
by calling the roots-of-unity Cauchy procedure with poles $\mu_j$ and weights $-2\overline{u_j}v_j/(a+\lambda_j)$, then adding the displayed constant. A collision $\mu_j=z_k$ returns status `resonant-diagonal`. For $z=z_k\ne-1$, set
$$ W(z)=I_r+\frac{1+z}{2}S_{Q,P}(z),\qquad H(z)=S_{\widetilde C,B}(z)-\frac{1+z}{2}S_{\widetilde C,P}(z)W(z)^{-1}S_{Q,B}(z). $$
If $W(z)$ is singular, return status `resonant-correction`. The four families $S_{\widetilde C,B}$, $S_{\widetilde C,P}$, $S_{Q,B}$, and $S_{Q,P}$ contain $1$, $r$, $r$, and $r^2$ scalar products, respectively. The root $-1$ is handled directly and is never included in this Cauchy evaluation. Matrix products and inversions of the $r\times r$ corrections are performed separately at each root.

The recurrent solver may exploit the diagonal-plus-low-rank structure as follows. Write $d_j=1-\alpha\lambda_j$, let $J=\{j:d_j\ne0\}$ and $Z=\{j:d_j=0\}$. If $Z$ is empty, use the Woodbury inverse with $D=\operatorname{diag}(d_j)$ and correction $I_r+\alpha Q^*D^{-1}P$; if this correction is singular, return status `singular-bilinear-matrix`. If $s=|Z|>0$, then when $s\le r$ solve the bordered system
$$ \begin{bmatrix} I_r+\alpha Q_J^*D_J^{-1}P_J&-Q_Z^*\\ \alpha P_Z&0 \end{bmatrix} \begin{bmatrix}z\\x_Z\end{bmatrix} = \begin{bmatrix}Q_J^*D_J^{-1}b_J\\b_Z\end{bmatrix}, \qquad x_J=D_J^{-1}(b_J-\alpha P_Jz), $$
where $D_J=\operatorname{diag}(d_j)_{j\in J}$; if $s>r$ or the bordered system is singular, return status `singular-bilinear-matrix`. Here $z=Q^*x$. This branch solves $Gx=b$ without assuming the diagonal base is invertible.

## Definition references

[Gu, Goel, and Ré, “Efficiently Modeling Long Sequences with Structured State Spaces,” Algorithm 1 and Appendix C](https://arxiv.org/pdf/2111.00396)

[[def-s4-dplr-parameterization]]

[[alg-radix-two-fft]]

[[alg-cauchy-matvec-at-roots-of-unity]]

[[lem-woodbury-dplr-bilinear-inverse]]
