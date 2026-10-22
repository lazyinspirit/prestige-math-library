---
id: thm-qsmx-ising-bulk-symbol-gap
kind: theorem
title: Translation-invariant Ising Majorana symbol and bulk gap
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 3
deps:
  - def-bounded-linear-operator
  - def-countable-choice
  - def-hilbert-space-adjoint
  - def-qsmx-transverse-ising-majoranas
  - def-resolvent-and-spectrum-of-a-closed-unbounded-operator
  - def-square-summable-family-on-an-arbitrary-index-set
  - lem-qsmx-l2-fourier-unitarity
  - thm-qsmx-open-ising-quadratic
dependency_roles:
  def-bounded-linear-operator: mathematical-premise
  def-countable-choice: mathematical-premise
  def-hilbert-space-adjoint: mathematical-premise
  def-qsmx-transverse-ising-majoranas: mathematical-premise
  def-resolvent-and-spectrum-of-a-closed-unbounded-operator: mathematical-premise
  def-square-summable-family-on-an-arbitrary-index-set: mathematical-premise
  lem-qsmx-l2-fourier-unitarity: mathematical-premise
  thm-qsmx-open-ising-quadratic: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "G. B. Mbeng, A. Russomanno, and G. E. Santoro, The quantum Ising chain for beginners, arXiv:2009.09208v2, §3.1.1 and §6.2"
      url: "https://arxiv.org/pdf/2009.09208"
    - title: "Pieter Claeys, Quench dynamics in the Transverse Field Ising Model, Many-body Quantum Dynamics @ TU Dresden lecture notes, §6, equations (65)–(68)"
      url: "https://www.pks.mpg.de/fileadmin/user_upload/MPIPKS/group_pages/DQI/TFIM_2024.pdf"
---

## Statement

Assume Countable Choice. Let $h,J\in\mathbb R$ be energies in joules, with the finite-chain convention of the open transverse Ising definition. On $\mathcal K=\ell^2(\mathbb Z;\mathbb C^2)$, write $x_j=(u_j,v_j)$ and define the complex-linear operator
$$ (A_\infty x)_j=\bigl(2h v_j-2Jv_{j-1},\,-2h u_j+2Ju_{j+1}\bigr),\qquad K_\infty=iA_\infty. $$
Let $T^*$ denote the Hilbert adjoint ([[def-hilbert-space-adjoint]]). Use the Fourier unitary $\mathcal F x(k)=\sum_jx_je^{ijk}$ on $\mathbb T=\mathbb R/(2\pi\mathbb Z)$ with normalized measure. Then $\mathcal F K_\infty\mathcal F^{-1}$ is multiplication by the matrix
$$M(k)=\begin{pmatrix}0&2i(h-Je^{ik})\\-2i(h-Je^{-ik})&0\end{pmatrix},$$
whose eigenvalues are $\pm\epsilon(k)$ with
$$\epsilon(k)=2\sqrt{h^2+J^2-2hJ\cos k}.$$
With spectrum defined by failure of a bounded two-sided inverse, its spectrum is exactly $\bigcup_{k\in\mathbb T}\{-\epsilon(k),\epsilon(k)\}$. The bottom of its positive band is
$$\Delta_{\mathrm{bulk}}=\min_k\epsilon(k)=2\bigl||h|-|J|\bigr|,$$
so this one-particle band closes exactly when $|h|=|J|$. This statement does not assert uniqueness of an infinite spin-chain ground state or a thermodynamic-limit singularity.

## Statement references

[[def-qsmx-transverse-ising-majoranas]]

[[thm-qsmx-open-ising-quadratic]]

[[lem-qsmx-l2-fourier-unitarity]]

[[def-hilbert-space-adjoint]]

[[def-resolvent-and-spectrum-of-a-closed-unbounded-operator]]

## Facts & Assumptions

**Given:** Countable Choice; real $h,J$ in joules; and the finite-chain coefficient convention.

[A1] Countable Choice is assumed for the Fourier-unitarity and Hilbert-adjoint suppliers ([[def-countable-choice]]).

[F1] [[def-qsmx-transverse-ising-majoranas]] and [[thm-qsmx-open-ising-quadratic]]: the field and bond coefficients are $h$ and $J$, and the open-chain Majorana coefficient entries are $2h$ and $2J$ on the two alternating diagonals.

[F2] [[lem-qsmx-l2-fourier-unitarity]]: with normalized measure $dk/(2\pi)$, $\mathcal F x(k)=\sum_jx_je^{ijk}$ extends to a unitary from $\ell^2(\mathbb Z;\mathbb C^2)$ onto $L^2(\mathbb T;\mathbb C^2)$.

[F3] [[def-square-summable-family-on-an-arbitrary-index-set]]: $\ell^2(\mathbb Z;\mathbb C^2)$ has inner product $\langle x,y\rangle=\sum_j\langle x_j,y_j\rangle_{\mathbb C^2}$, linear in the first argument, and norm $\|x\|^2=\sum_j\|x_j\|^2$; finite shifts preserve this norm by reindexing.

[F4] [[def-bounded-linear-operator]]: a linear map is bounded when $\|Tx\|\le C\|x\|$ for one finite constant $C$ and all $x$.

[F5] [[def-resolvent-and-spectrum-of-a-closed-unbounded-operator]]: $\lambda$ is in the resolvent set when $\lambda I-T$ is bijective and its inverse is bounded everywhere; the spectrum is its complement.

[F6] [[def-hilbert-space-adjoint]]: under Countable Choice, the bounded Hilbert-space adjoint $T^*$ is the unique map satisfying $\langle Tx,y\rangle=\langle x,T^*y\rangle$ for every $x,y$.

## Proof

1.1 Let $S_+f$ have coordinates $(S_+f)_j=f_{j+1}$ and let $S_-f$ have $(S_-f)_j=f_{j-1}$. Reindexing gives $\|S_\pm f\|=\|f\|$ and $\langle S_-f,g\rangle=\langle f,S_+g\rangle$, so $S_-^*=S_+$ and $S_+^*=S_-$ by [F6]. The Fourier-unitarity fact [F2] makes $\mathcal K$ a Hilbert space, so the bounded shifts and their bounded linear combinations have Hilbert adjoints under [F6]. With $B=2hI-2JS_-$, $B^*=2hI-2JS_+$; the block formula $A_\infty=\bigl(\begin{smallmatrix}0&B\\-B^*&0\end{smallmatrix}\bigr)$ then gives $A_\infty^*=-A_\infty$. By [F3] and the triangle inequality, both $B$ and $B^*$ have bound $2(|h|+|J|)$, whence $\|A_\infty x\|^2=\|Bv\|^2+\|B^*u\|^2\le4(|h|+|J|)^2\|x\|^2$. Thus $A_\infty$ and $K_\infty=iA_\infty$ are everywhere-defined bounded operators by [F4]. Finally $\langle iA_\infty x,y\rangle=i\langle x,A_\infty^*y\rangle=\langle x,-iA_\infty^*y\rangle$, so $K_\infty^*=-iA_\infty^*=iA_\infty=K_\infty$ by [F6]. [given, A1, F1, F2, F3, F4, F6, algebra]

2.1 For a finitely supported sequence, $\mathcal F(v_{j-1})(k)=e^{ik}\widehat v(k)$ and $\mathcal F(u_{j+1})(k)=e^{-ik}\widehat u(k)$ by reindexing the sums. Therefore $\mathcal F A_\infty\mathcal F^{-1}$ is multiplication by $\bigl(\begin{smallmatrix}0&2(h-Je^{ik})\\-2(h-Je^{-ik})&0\end{smallmatrix}\bigr)$; boundedness and density extend the identity to all of $\ell^2$. Multiplication by $i$ gives the displayed $M(k)$. [A1, F2, step 1.1, algebra]

3.1 Put $a(k)=2i(h-Je^{ik})$. Then $M(k)=\bigl(\begin{smallmatrix}0&a(k)\\\overline{a(k)}&0\end{smallmatrix}\bigr)$ and $M(k)^2=|a(k)|^2I$. Its characteristic polynomial is $\lambda^2-|a(k)|^2$, so its two eigenvalues are $\pm|a(k)|=\pm2\sqrt{h^2+J^2-2hJ\cos k}$, including the double zero when $a(k)=0$. [step 2.1, algebra]

4.1 Let $\lambda\in\mathbb C$ lie outside the union of the two continuous bands in the Statement. By step 3.1, $\epsilon(k)=|a(k)|$ for every $k$. Compactness of $\mathbb T$ therefore makes $|\lambda^2-|a(k)|^2|$ bounded away from zero. The matrix identity $(M(k)-\lambda I)(M(k)+\lambda I)=(|a(k)|^2-\lambda^2)I$ gives a uniformly bounded pointwise inverse. Multiplication by this inverse is a bounded two-sided inverse for the Fourier-side operator $M-\lambda I$; conjugating by $\mathcal F$ puts $\lambda$ in the resolvent of $K_\infty$ by [F5]. Thus the spectrum is contained in the two bands. [A1, F2, F4, F5, step 1.1, step 2.1, step 3.1, algebra]

4.2 Fix $k_0\in\mathbb T$. When $a(k_0)\ne0$, the vectors $w_+=(a(k_0)/|a(k_0)|,1)/\sqrt2$ and $w_-=(-a(k_0)/|a(k_0)|,1)/\sqrt2$ are unit eigenvectors of $M(k_0)$ with eigenvalues $\pm\epsilon(k_0)$ by step 3.1; when $a(k_0)=0$, $M(k_0)=0$ and either standard unit vector is an eigenvector. For either eigenvalue $\lambda$, let $I_n$ be arcs about $k_0$ with positive normalized measure and lengths tending to zero, and set $\psi_n(k)=\mathbf1_{I_n}(k)w/\sqrt{\mu(I_n)}$ using the corresponding fixed vector $w$. Then $\|\psi_n\|_2=1$ and continuity of $M$ gives $\|(M-\lambda I)\psi_n\|_2\le\sup_{k\in I_n}\|(M(k)-M(k_0))w\|\to0$. If $M-\lambda I$ had a bounded inverse, these unit vectors would have residual norms bounded below by the reciprocal inverse norm, a contradiction. By [F5] and the unitary equivalence in step 2.1, every band value lies in the spectrum of $K_\infty$. [A1, F2, F5, step 2.1, step 3.1, algebra]

5.1 Steps 4.1 and 4.2 give both inclusions, so the spectrum is exactly $\bigcup_{k\in\mathbb T}\{-\epsilon(k),\epsilon(k)\}$. Since $\cos k\in[-1,1]$, step 3.1 gives $\min_k\epsilon(k)^2=4(h^2+J^2-2|hJ|)=4(|h|-|J|)^2$. The minimum is attained at $k=0$ when $hJ\ge0$ and at $k=\pi$ when $hJ<0$. Taking the nonnegative square root gives $\Delta_{\mathrm{bulk}}=2\bigl||h|-|J|\bigr|$, which vanishes exactly for $|h|=|J|$. This concerns the one-particle convolution operator only. [step 3.1, step 4.1, step 4.2, algebra] ∎
