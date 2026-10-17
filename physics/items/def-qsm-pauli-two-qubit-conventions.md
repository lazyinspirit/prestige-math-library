---
id: def-qsm-pauli-two-qubit-conventions
kind: definition
title: "Pauli matrices and the two-qubit exchange operator"
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
deps:
  - def-complex-metric-convergence-and-continuity
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - thm-nth-roots-exist
dependency_roles:
  def-complex-metric-convergence-and-continuity: mathematical-premise
  def-complex-conjugate-real-imaginary-part-and-modulus: mathematical-premise
  thm-nth-roots-exist: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Doron Cohen, Lecture Notes in Statistical Mechanics and Mesoscopics, §§2.2–2.3"
      url: "https://physics.bgu.ac.il/~dcohen/ARCHIVE/sqm.pdf"
    - title: "Damian Markham et al., Survival of entanglement in thermal states, Example 1"
      url: "https://arxiv.org/pdf/quant-ph/0606103"
---

## Definition

Use the usual complex field $\mathbb C$; its scalar metric is $d_{\mathbb C}(z,w)=|z-w|$ from [[def-complex-metric-convergence-and-continuity]]. On $\mathbb C^2$, use the standard basis $e_0=(1,0)$, $e_1=(0,1)$ and inner product $\langle x,y\rangle=x_0\overline{y_0}+x_1\overline{y_1}$, linear in its first variable. On $\mathbb R^3$, define $a\cdot b:=a_xb_x+a_yb_y+a_zb_z$, $|a|:=\sqrt{a\cdot a}$ using the unique nonnegative square root from [[thm-nth-roots-exist]], and the standard unit vectors $\mathbf e_x=(1,0,0)$, $\mathbf e_y=(0,1,0)$, and $\mathbf e_z=(0,0,1)$.

For a finite complex matrix $A=(a_{jk})$, define its adjoint by $A^*:=(\overline{a_{kj}})_{j,k}=\overline A^{\,T}$, where the bar is entrywise complex conjugation from [[def-complex-conjugate-real-imaginary-part-and-modulus]] and $T$ is transpose. The matrix is **Hermitian** exactly when $A=A^*$. For vectors $u,v$ in a finite-dimensional complex inner-product space $V$ with the stated linear-first convention, define the rank-one operator $|u\rangle\langle v|:V\to V$ by

$$|u\rangle\langle v|(x):=\langle x,v\rangle u.$$

This action is linear in $x$ under the linear-first convention.

Use the ordered tensor-product basis $(e_0\otimes e_0,e_0\otimes e_1,e_1\otimes e_0,e_1\otimes e_1)$ of $\mathbb C^2\otimes\mathbb C^2$. Its inner product is the linear-first product inner product, specified on elementary tensors by $\langle u\otimes v,u'\otimes v'\rangle=\langle u,u'\rangle\langle v,v'\rangle$ and extended sesquilinearly. For two $2\times2$ matrices $A,B$, their tensor product acts by $(A\otimes B)(u\otimes v)=Au\otimes Bv$ and is extended linearly.

On elementary tensors this definition gives $(A_1\otimes B_1)(A_2\otimes B_2)=(A_1A_2)\otimes(B_1B_2)$. The product inner product also gives $(A\otimes B)^*=A^*\otimes B^*$: both sides have the adjoint pairing on elementary tensors, and those tensors span the product space.

Write $I_2:=\begin{pmatrix}1&0\\0&1\end{pmatrix}$ for the identity on $\mathbb C^2$, use $I:=I_2$ when its domain is clear, and set $I_4:=I_2\otimes I_2$. Define the everywhere-defined matrices

$$\sigma_x=\begin{pmatrix}0&1\\1&0\end{pmatrix},\qquad \sigma_y=\begin{pmatrix}0&-i\\i&0\end{pmatrix},\qquad \sigma_z=\begin{pmatrix}1&0\\0&-1\end{pmatrix}.$$

Define the dimensionless exchange matrix

$$C:=\sigma_x\otimes\sigma_x+\sigma_y\otimes\sigma_y+\sigma_z\otimes\sigma_z.$$

Direct conjugate-transpose and multiplication of the displayed matrices give $\sigma_x^*=\sigma_x$, $\sigma_y^*=\sigma_y$, $\sigma_z^*=\sigma_z$, and $\sigma_x^2=\sigma_y^2=\sigma_z^2=I_2$. In the ordered tensor-product basis,

$$C=\begin{pmatrix}1&0&0&0\\0&-1&2&0\\0&2&-1&0\\0&0&0&1\end{pmatrix},$$

so $C^*=C$ as well. These matrices have their full finite-dimensional domains. For a finite matrix $A$, $\operatorname{tr}(A)$ denotes the sum of its diagonal entries in the displayed basis.
