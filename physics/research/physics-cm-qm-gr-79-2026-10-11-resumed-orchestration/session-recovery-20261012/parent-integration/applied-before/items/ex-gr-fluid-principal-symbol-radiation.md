---
id: ex-gr-fluid-principal-symbol-radiation
kind: example
title: "Worked fluid symbol: eigenvalues of the principal matrix for the radiation equation of state at an explicit timelike covector"
status: draft
origin: session
domain: mathematics
dependency_level: 14
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
deps: [def-gr-barotropic-enthalpy-variable, lem-gr-barotropic-fluid-symmetric-hyperbolic-system, def-gr-perfect-fluid-matter-model]
dependency_roles:
  def-gr-barotropic-enthalpy-variable: mathematical-premise
  lem-gr-barotropic-fluid-symmetric-hyperbolic-system: mathematical-premise
  def-gr-perfect-fluid-matter-model: mathematical-premise
sources:
  references:
    - title: "I. Rodnianski and J. Speck, The Stability of the Irrotational Euler-Einstein System with a Positive Cosmological Constant, arXiv:0911.5501 (v2, 2010), Sections 1 and 3: the Euler-Einstein system, the speed-of-sound hypotheses 0<cs<1 for a barotropic fluid (Postulate (4)), the sound cone and the wave-equation formulation of the fluid equations"
      url: "https://arxiv.org/pdf/0911.5501"
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 4.2 (The Einstein-Euler System): the hyperbolic reduction of the Einstein-Euler system, the positivity conditions on specific enthalpy and speed of sound (4.38), the frame variables and their reduced equations, and the pressure-free (dust) subsidiary system of Sections 4.2.4-4.2.5, equations (4.26)-(4.48) and (4.56)-(4.63)"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
verification:
  precheck: pending
---

## Example

Take the barotropic equation of state $p(\epsilon)=\tfrac13\epsilon$ (so
$c_s=1/\sqrt3$) and at a point choose a rest frame $n$ with spatial frame
$(e_1,e_2,e_3)$ and the future-directed timelike covector
$\zeta=n^\flat+\tfrac12 e_1^\flat$ (in the notation
$\zeta_0=1$, $\zeta_\perp=\tfrac12e_1$, so $\zeta_0=1>\tfrac12=|\zeta_\perp|$).
This example computes the matrix $A(\zeta)$ of
[[lem-gr-barotropic-fluid-symmetric-hyperbolic-system]] and verifies its
eigenvalues and positive definiteness explicitly.

## Facts & Assumptions

**Given:** the radiation equation of state, the rest frame and the covector $\zeta=\zeta_0n^\flat+\zeta_\perp$ with $\zeta_0=1$, $\zeta_\perp=\tfrac12e_1^\flat$.

[L1] The principal symbol of the fluid system in the variables $(r,n^1,n^2,n^3)$ at a covector $\zeta$ is the symmetric matrix $A(\zeta)=\begin{pmatrix}\zeta_0&c_s\zeta_\perp^{\mathsf T}\\ c_s\zeta_\perp&\zeta_0I_3\end{pmatrix}$ ([[lem-gr-barotropic-fluid-symmetric-hyperbolic-system]] clause (b)).

[L2] $c_s=\sqrt{p'}=\tfrac1{\sqrt3}$ for the radiation equation of state ([[def-gr-barotropic-enthalpy-variable]]). [L2]

## Verification

**Proof technique:** direct.

1.1 (The matrix.) By [L1], [L2] and the chosen data, $A(\zeta)=\begin{pmatrix}1&\frac1{2\sqrt3}&0&0\\ \frac1{2\sqrt3}&1&0&0\\0&0&1&0\\0&0&0&1\end{pmatrix}$. [L1, L2, algebra]

2.1 (Eigenvalues.) The upper-left block $\begin{pmatrix}1&\frac1{2\sqrt3}\\ \frac1{2\sqrt3}&1\end{pmatrix}$ has eigenvalues $1\pm\frac1{2\sqrt3}$; the remaining block is the identity with eigenvalue $1$ (multiplicity two). All three eigenvalues are positive: $1-\frac1{2\sqrt3}>0$ because $2\sqrt3>1$. [step 1.1, algebra]

3.1 (Consistency with the general criterion.) The general criterion of [L1] gives positivity because $\zeta_0=1>\tfrac12=|\zeta_\perp|$ and $c_s<1$; the explicit smallest eigenvalue $1-\frac1{2\sqrt3}\approx0.711>0$ matches exactly the lower bound $\zeta_0-c_s|\zeta_\perp|=1-\frac1{2\sqrt3}$ from that criterion. [step 2.1, L1, algebra] ∎
