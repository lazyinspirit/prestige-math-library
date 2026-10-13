---
id: ex-cm-verlet-map-of-the-harmonic-oscillator
kind: example
title: 'Oscillator Verlet: a preserved quadratic form and bounded original-energy oscillation'
status: draft
origin: pipeline
domain: mathematics
dependency_level: 5
deps:
- def-cm-splitting-hamiltonian-and-verlet-map
- prop-cm-drift-kick-and-verlet-preserve-the-canonical-form
dependency_roles:
  def-cm-splitting-hamiltonian-and-verlet-map: mathematical-premise
  prop-cm-drift-kick-and-verlet-preserve-the-canonical-form: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
proof_strategy: direct
sources:
  references:
  - title: 'Hairer, Geometric Numerical Integration, Lecture 3: backward error analysis, Sections 1–3 and 5; local analytic estimates supplied here'
    url: https://www.unige.ch/~hairer/poly_geoint/week3.pdf
verification:
  precheck: pass
---

## Example

Take $d=1$, $U=\mathbb R^2$, $\Pi=\mathbb R$, $M=(1)$, and $V(q)=q^2/2$ in [[def-cm-splitting-hamiltonian-and-verlet-map]]. Thus the dimensionless oscillator has $H(q,p)=(q^2+p^2)/2$. For each initial state $z_0=(q_0,p_0)\in U$, velocity Verlet is the matrix map $z\mapsto S_hz$, where

$$S_h=\begin{pmatrix}1-h^2/2&h\\-h(1-h^2/4)&1-h^2/2\end{pmatrix}.$$

For $0<h<2$, put $\alpha=1-h^2/4$ and $I_h(q,p)=(\alpha q^2+p^2)/2$. This positive quadratic form is exactly preserved. Every iterate satisfies

$$|H(z_n)-H(z_0)|\le\frac{h^2}{4\alpha}I_h(z_0).$$

The conclusion is an explicit exact-arithmetic all-step fact for this linear example. At $h=2$ positivity fails; at $h>2$ the map has a real eigenvalue of modulus greater than one.

## Verification

**Given:** The domain, mass matrix, potential, arbitrary initial state $z_0\in U$, and the velocity-Verlet kick-drift-kick formula from the splitting definition; $0<h<2$.

[F1] [[def-cm-splitting-hamiltonian-and-verlet-map]] gives $K_{h/2}(q,p)=(q,p-hq/2)$ and $D_h(q,p)=(q+hp,p)$; [[prop-cm-drift-kick-and-verlet-preserve-the-canonical-form]] proves exact symplecticity.

1.1 Matrix and invariant. Multiplying the three displayed shear matrices gives $S_h$ as stated. Direct multiplication gives $S_h^{\mathsf T}\operatorname{diag}(\alpha,1)S_h=\operatorname{diag}(\alpha,1)$, using $(1-h^2/2)^2+h^2\alpha=1$. Thus $I_h(z_n)=I_h(z_0)$ and $q_j^2\le2I_h(z_0)/\alpha$. [given, F1, algebra]

2.1 Original energy and boundary. Since $H-I_h=h^2q^2/8$, $|H(z_n)-H(z_0)|=(h^2/8)|q_n^2-q_0^2|\le h^2I_h(z_0)/(4\alpha)$. At $h=2$ the invariant matrix is singular. For $h>2$, $\det S_h=1$ and $\operatorname{tr}S_h=2-h^2<-2$, so the real reciprocal eigenvalues have one modulus greater than one. This explains the step restriction without asserting stability at its excluded endpoint. [step 1.1, algebra] ∎
