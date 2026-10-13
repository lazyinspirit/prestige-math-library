---
id: ex-gr-tt-screen-projection-computation
kind: example
title: "Explicit screen projection of a symmetric spatial tensor: projection, transverse-traceless part, amplitudes and idempotence"
status: published
origin: session
domain: mathematics
dependency_level: 8
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-wave-screen-and-tt-projection, lem-gr-tt-screen-projector, def-gr-minkowski-model-and-inertial-chart, def-inner-product-space, def-linear-map]
dependency_roles:
  def-gr-wave-screen-and-tt-projection: mathematical-premise
  lem-gr-tt-screen-projector: mathematical-premise
  def-gr-minkowski-model-and-inertial-chart: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-linear-map: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 6 (6.55)-(6.57): the projector P_{mu nu} = eta_{mu nu} - n_mu n_nu with n the propagation direction and the transverse-traceless projection with the half-trace subtraction, printed pp. 151-152 (PDF pp. 158-159)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 5.2.1: the transverse-traceless restriction of the polarisation matrix to the (x,y) screen (5.22), printed pp. 211-212 (PDF pp. 218-219)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: pass
---

## Example

Work in the inertial chart of the flat model
([[def-gr-minkowski-model-and-inertial-chart]]) with the observer
$n=\partial_0$ and propagation direction $s=\partial_3$, so that the screen is
$\Sigma=\mathbb R e_1\oplus\mathbb R e_2$ and, in the basis
$(e_0,e_1,e_2,e_3)$, the screen and spatial projectors of
[[def-gr-wave-screen-and-tt-projection]] have the component matrices

$$p=\operatorname{diag}(0,1,1,0),\qquad h=\operatorname{diag}(0,1,1,1).$$

Let $A$ be the symmetric spatial tensor with component matrix

$$(A_{ab})=\begin{pmatrix}0&0&0&0\\0&3&1&2\\0&1&-1&0\\0&2&0&5\end{pmatrix},$$

so $A(n,\cdot)=0$. Then:

1. The screen projection and the trace of $A$ on the screen are
   $$p_a{}^cp_b{}^dA_{cd}=\begin{pmatrix}0&0&0&0\\0&3&1&0\\0&1&-1&0\\0&0&0&0\end{pmatrix},\qquad p^{cd}A_{cd}=A_{11}+A_{22}=2 .$$
2. The TT projection is
   $$\Pi_{n,s}(A)=\begin{pmatrix}0&0&0&0\\0&2&1&0\\0&1&-2&0\\0&0&0&0\end{pmatrix},$$
   which is transverse ($\Pi_{n,s}(A)(s,\cdot)=0$), traceless
   ($\eta^{ab}\Pi_{n,s}(A)_{ab}=2-2=0$) and equals its own TT projection:
   $\Pi_{n,s}(\Pi_{n,s}(A))=\Pi_{n,s}(A)$.
3. Its amplitudes are $A_+=2$ and $A_\times=1$, and it is the tensor
   $2(e^1\otimes e^1-e^2\otimes e^2)+(e^1\otimes e^2+e^2\otimes e^1)$.

## Verification

**Given:** The inertial chart, $n=\partial_0$, $s=\partial_3$, the component matrices $p$ and $h$ of the screen and spatial projectors, and the symmetric spatial tensor $A$ above.

[L1] In the adapted basis, $p^{cd}=p_{cd}=\operatorname{diag}(0,1,1,0)$, the TT projection acts on a symmetric $A$ by $(\Pi_{n,s}A)_{11}=\tfrac12(A_{11}-A_{22})$, $(\Pi_{n,s}A)_{22}=-\tfrac12(A_{11}-A_{22})$, $(\Pi_{n,s}A)_{12}=(\Pi_{n,s}A)_{21}=A_{12}$ and all other components zero; the TT tensors are exactly the tensors with $A_{11}=-A_{22}$, $A_{12}=A_{21}$ and all other components zero, with amplitudes $A_+=A_{11}$, $A_\times=A_{12}$ ([[lem-gr-tt-screen-projector]] clauses (c)-(d), [[def-gr-wave-screen-and-tt-projection]] clauses (b)-(d)).

[L2] The screen projection of a spatial tensor is obtained by keeping the components with indices in $\{1,2\}$ and setting the others to zero, and $p^{cd}A_{cd}=A_{11}+A_{22}$ ([[def-gr-wave-screen-and-tt-projection]] clauses (a)-(b), [[def-linear-map]], [[def-inner-product-space]]).

1.1 (Screen projection and trace.) In the adapted basis, $p^a{}_b=\operatorname{diag}(0,1,1,0)$, so $p_a{}^cp_b{}^dA_{cd}$ keeps exactly the $11,12,21,22$ entries of $A$, namely $3,1,1,-1$, and kills the $13,23,33$ entries; the trace over the screen is $p^{cd}A_{cd}=A_{11}+A_{22}=3+(-1)=2$. This is clause 1. [L2, algebra]

2.1 (TT projection.) By [L1] and step 1.1, $(\Pi_{n,s}A)_{11}=\tfrac12(3-(-1))=2$, $(\Pi_{n,s}A)_{22}=-2$, $(\Pi_{n,s}A)_{12}=(\Pi_{n,s}A)_{21}=1$, all other components zero, which is the displayed matrix. Its contraction with $s=\partial_3$ vanishes because the $3$-row and $3$-column are zero; its trace is $\eta^{ab}(\Pi_{n,s}A)_{ab}=2+(-2)=0$; and applying the same rule to $\Pi_{n,s}(A)$, whose nonvanishing entries satisfy $2=-(-2)$ and $1=1$, returns the same matrix, so $\Pi_{n,s}^2(A)=\Pi_{n,s}(A)$. This is clause 2. [L1, step 1.1, algebra]

3.1 (Amplitudes and reconstruction.) By [L1] applied to the matrix of step 2.1, $A_+=2$, $A_\times=1$, and the tensor is $A_+(e^1\otimes e^1-e^2\otimes e^2)+A_\times(e^1\otimes e^2+e^2\otimes e^1)$. This is clause 3. [L1, step 2.1, algebra] ∎

## Remarks

- **The projection kills the $3$-components.** The longitudinal entries $A_{13}=2$, $A_{23}=0$ and the trace component $A_{33}=5$ are removed by the screen projection; the screen trace $A_{11}+A_{22}=2$ is then removed by the half-trace subtraction, leaving the traceless screen block with amplitudes $(2,1)$.

- **No physical reading.** The example computes a projection of a chosen matrix in the flat model; the tensor $A$ is not a metric perturbation and no wave, source or observation is involved.
