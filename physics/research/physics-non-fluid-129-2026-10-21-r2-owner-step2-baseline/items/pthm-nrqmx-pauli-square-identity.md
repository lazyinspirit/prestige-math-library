---
id: pthm-nrqmx-pauli-square-identity
kind: physics-theorem
domain: physics
library: physics
title: Pauli square identity and the formal g=2 coupling
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 3
deps:
  - post-nrqmx-magnetic-model-extension
  - def-nrqmx-magnetic-form-data
  - def-divergence-and-curl-of-a-c1-vector-field
  - thm-algebra-of-derivatives
dependency_roles:
  post-nrqmx-magnetic-model-extension: physical-assumption
  def-nrqmx-magnetic-form-data: mathematical-premise
  def-divergence-and-curl-of-a-c1-vector-field: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
physical_scope: "Formal differential-operator identity on compactly supported two-component spinors for a smooth static SI vector potential in three-dimensional nonrelativistic Pauli-model kinematics. It asserts neither a closed-domain identity nor a measured particle g-factor."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "V. P. Nair, Notes on Quantum Mechanics, §11.3, Pauli equation and commutator expansion"
      url: "https://nair.ccny.cuny.edu/Notes-QM.pdf"
    - title: "David Tong, Applications of Quantum Mechanics, §1.5.2, spin and Zeeman coupling"
      url: "https://www.damtp.cam.ac.uk/user/tong/aqm/aqm.pdf"
verification:
  precheck: pass
---

## Statement

Let $m>0$ be mass in kilograms, $q\in\mathbb R$ charge in coulombs,
$\hbar>0$ in joule-seconds, and let $A\in C^\infty(\mathbb R^3;\mathbb R^3)$
be a real SI vector potential in tesla-metres, with $B=\nabla\times A$ in
teslas. On the two-component
core $C_c^\infty(\mathbb R^3;\mathbb C^2)$ define
$\Pi_j=-i\hbar\partial_j-qA_j$. With the
spin-half matrices and $S_j=\hbar\sigma_j/2$ fixed in the effective Pauli
model, the following identity holds on that core:
$$\left(\sum_{j=1}^3\sigma_j\Pi_j\right)^2=\sum_{j=1}^3\Pi_j^2-q\hbar\sum_{j=1}^3\sigma_j B_j.$$
Consequently the quadratic Pauli expression
$\frac1{2m}(\sum_j\sigma_j\Pi_j)^2$ equals the minimally coupled kinetic
expression plus the spin term $-\frac{q}{m}S\cdot B$, which is the formal
effective Pauli coupling at $g=2$. This is a core identity only; it makes no
claim about closed operator domains or the measured magnetic moment of an
electron.

## Statement references

[[post-nrqmx-magnetic-model-extension]]

[[def-nrqmx-magnetic-form-data]]

[[def-divergence-and-curl-of-a-c1-vector-field]]

## Facts & Assumptions

**Given:** the effective spin-half model, $m>0$, real $q$, $\hbar>0$,
smooth real $A$, $B=\nabla\times A$, and compactly supported smooth
two-component spinors.

[A1] The spin matrices are
$$\sigma_1=\begin{pmatrix}0&1\\1&0\end{pmatrix},\quad \sigma_2=\begin{pmatrix}0&-i\\i&0\end{pmatrix},\quad \sigma_3=\begin{pmatrix}1&0\\0&-1\end{pmatrix},\qquad S_j=\frac{\hbar}{2}\sigma_j,$$
and $g$ is a declared real dimensionless effective coupling
([[post-nrqmx-magnetic-model-extension]]).

[F1] On the test core, $\Pi_j=-i\hbar\partial_j-qA_j$; the curl convention
is $B_k=\sum_{i,j}\epsilon_{kij}\partial_iA_j$
([[def-nrqmx-magnetic-form-data]],
[[def-divergence-and-curl-of-a-c1-vector-field]]).

[F2] The ordinary product rule holds for the smooth coefficient products
([[thm-algebra-of-derivatives]]).

## Proof

1.1 Direct multiplication of the matrices in [A1] gives
$\sigma_j^2=I_2$ for each $j$,
$\sigma_1\sigma_2=i\sigma_3$,
$\sigma_2\sigma_3=i\sigma_1$,
$\sigma_3\sigma_1=i\sigma_2$, and the reversed products have the opposite
sign. Hence
$$\sigma_i\sigma_j=\delta_{ij}I_2+i\sum_{k=1}^3\epsilon_{ijk}\sigma_k.$$
For a core spinor $u$, the product rule [F2] and the definition of $\Pi_j$
give
$$[\Pi_i,\Pi_j]u=iq\hbar(\partial_iA_j-\partial_jA_i)u=iq\hbar\sum_{k=1}^3\epsilon_{ijk}B_k u.$$
All terms remain compactly supported smooth spinors. [A1, F1, F2, algebra]

2.1 Since the Pauli matrices act only on the spin factor, they commute with
each $\Pi_j$. Expanding the square using step 1.1 gives
$$\left(\sum_i\sigma_i\Pi_i\right)^2=\sum_i\Pi_i^2 I_2+i\sum_{i,j,k}\epsilon_{ijk}\sigma_k\Pi_i\Pi_j=\sum_i\Pi_i^2 I_2+\frac{i}{2}\sum_{i,j,k}\epsilon_{ijk}\sigma_k[\Pi_i,\Pi_j].$$
Substitute the commutator from step 1.1. The finite identity
$\sum_{i,j}\epsilon_{ijk}\epsilon_{ij\ell}=2\delta_{k\ell}$ follows by
listing the two nonzero ordered pairs when $k=\ell$ and none when
$k\ne\ell$; the resulting term is $-q\hbar\sum_k\sigma_kB_k$. This proves
the displayed Pauli square. [step 1.1, algebra]

3.1 Dividing by $2m$ and using $S_j=\hbar\sigma_j/2$ from [A1] rewrites the
spin term as
$-q\hbar\sigma\cdot B/(2m)=-qS\cdot B/m=-2qS\cdot B/(2m)$.
Comparison with the adopted coupling $-gqS\cdot B/(2m)$ identifies its
formal coefficient as $g=2$. The conclusion is only the stated identity of
core differential expressions; the postulate separately requires a
closable semibounded form before assigning a self-adjoint Pauli Hamiltonian.
[A1, step 2.1, algebra] ∎
