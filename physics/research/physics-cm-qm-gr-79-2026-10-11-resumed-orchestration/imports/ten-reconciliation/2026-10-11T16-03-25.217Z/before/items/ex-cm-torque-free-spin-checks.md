---
id: ex-cm-torque-free-spin-checks
kind: example
title: "Finite checks of the torque-free spin results: stability certificates, an escape-time bound, and the linearized dichotomy"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 7
deps: [thm-cm-stability-of-extreme-principal-axes, thm-cm-instability-of-the-intermediate-axis, thm-cm-linearized-torque-free-euler-equations, thm-cm-euler-equations-and-torque-free-invariants, cor-cm-principal-axes-of-the-inertia-matrix, lem-cm-inertia-matrix-properties, def-euclidean-inner-product, thm-cross-product-norm-is-the-two-vector-gram-determinant, def-cross-product-in-r3, def-hyperbolic-functions, cor-exponential-is-a-bijection-onto-positive-reals]
dependency_roles:
  thm-cm-stability-of-extreme-principal-axes: mathematical-premise
  thm-cm-instability-of-the-intermediate-axis: mathematical-premise
  thm-cm-linearized-torque-free-euler-equations: mathematical-premise
  thm-cm-euler-equations-and-torque-free-invariants: mathematical-premise
  cor-cm-principal-axes-of-the-inertia-matrix: mathematical-premise
  lem-cm-inertia-matrix-properties: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  thm-cross-product-norm-is-the-two-vector-gram-determinant: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-hyperbolic-functions: mathematical-premise
  cor-exponential-is-a-bijection-onto-positive-reals: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, 2015), §§3.4.1-3.4.3, printed pp. 55-58: free-top invariants and the intermediate-axis stability criterion used in these arithmetic checks"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. Likharev, Essential Graduate Physics: Classical Mechanics, Ch. 4 §4.4: principal-axis rotation stability, checked numerically here"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
---

## Example

Fix the diagonal inertia map with principal moments $(I_1,I_2,I_3)=(1,2,3)$ ([[cor-cm-principal-axes-of-the-inertia-matrix]]) and the torque-free Euler system $l'=l\times(I^{-1}l)$ of [[thm-cm-euler-equations-and-torque-free-invariants]] on $\mathbb R^3$. The three computations below check the certificates of [[thm-cm-stability-of-extreme-principal-axes]], the escape bound of [[thm-cm-instability-of-the-intermediate-axis]], and the linearized formulas of [[thm-cm-linearized-torque-free-euler-equations]] at explicit numerical data. All numbers are exact rationals or explicit square roots; no measurement or simulation is involved, and no claim about a physical top is made.

## Facts & Assumptions

**Given:** The moments $(I_1,I_2,I_3)=(1,2,3)$, the field $l'=l\times(I^{-1}l)$, the certificates $D=C/(2I_1)-E$ and $D_3=E-C/(2I_3)$ of the stability theorem, the constants $a,c_0,\delta_0,\varepsilon_0$ of the instability theorem, and the linearization data of the linearized theorem.

[L1] Along every solution $C=\sum_jl_j^2$ and $E=\sum_jl_j^2/(2I_j)$ are constant; the torque-free equations in components are $l_1'=(1/I_3-1/I_2)l_2l_3$ and cyclic analogues; and $l_0=Le_j$ is an equilibrium for $L\ne0$ [[thm-cm-euler-equations-and-torque-free-invariants]].

[L2] For the extreme axes: $D=\tfrac12\sum_{j>1}(1/I_1-1/I_j)l_j^2\ge c(l_2^2+l_3^2)$ with $c=\tfrac12(1/I_1-1/I_2)$, and $D_3=E-C/(2I_3)=\tfrac12\sum_{j<3}(1/I_j-1/I_3)l_j^2\ge c_3(l_1^2+l_2^2)$ with $c_3=\tfrac12(1/I_2-1/I_3)$; both $D$ and $D_3$ are constant along solutions [[thm-cm-stability-of-extreme-principal-axes]].

[L3] For the intermediate axis with $L>0$: $a=\sqrt{(1/I_1-1/I_2)/(1/I_2-1/I_3)}$, $c_0=a(1/I_2-1/I_3)\tfrac{\sqrt3}{2}L$, $\delta_0=L/(2\sqrt{1+a^2})$, $\varepsilon_0=L/2$; the initial point $(\eta,\sqrt{L^2-(1+a^2)\eta^2},-a\eta)$ lies on the level set $C=L^2$, $E=L^2/(2I_2)$ and its solution reaches $\lVert l-l_0\rVert_2\ge\varepsilon_0$ by time $\le c_0^{-1}\log(\delta_0/\eta)$ [[thm-cm-instability-of-the-intermediate-axis]].

[L4] For the spin $\omega_0=\Omega e_3$ the linearized system is $\delta_1'=\Omega(I_2-I_3)\delta_2/I_1$, $\delta_2'=\Omega(I_3-I_1)\delta_1/I_2$, $\delta_3'=0$, with $\lambda=\Omega^2(I_2-I_3)(I_3-I_1)/(I_1I_2)$; for $\lambda<0$, $\kappa=\sqrt{-\lambda}$ and the solution with data $(\delta_1(0),\delta_2(0))$ is $\delta_1(t)=\delta_1(0)\cos(\kappa t)+\frac{\Omega(I_2-I_3)}{I_1\kappa}\delta_2(0)\sin(\kappa t)$, $\delta_2(t)=\delta_2(0)\cos(\kappa t)+\frac{\Omega(I_3-I_1)}{I_2\kappa}\delta_1(0)\sin(\kappa t)$; for $\lambda>0$ the same with $\cosh,\sinh$, and $\delta_2(0)=0\ne\delta_1(0)$ gives an unbounded solution [[thm-cm-linearized-torque-free-euler-equations]], [[def-hyperbolic-functions]].

[L5] $\lVert\omega\times\rho\rVert_2^2=\lVert\omega\rVert_2^2\lVert\rho\rVert_2^2-\langle\omega,\rho\rangle^2$ and the Euclidean norm is computed componentwise [[thm-cross-product-norm-is-the-two-vector-gram-determinant]], [[def-euclidean-inner-product]], [[def-cross-product-in-r3]]; $e^{\kappa t}\to+\infty$ for $\kappa>0$ [[cor-exponential-is-a-bijection-onto-positive-reals]].

## Verification

**Proof technique:** direct.

1.1 Certificates at $(1,2,3)$: $c=\tfrac12(1-\tfrac12)=\tfrac14$ and $c_3=\tfrac12(\tfrac12-\tfrac13)=\tfrac1{12}$; the instability data are $a=\sqrt{(1-\tfrac12)/(\tfrac12-\tfrac13)}=\sqrt3$, $1+a^2=4$, $\delta_0=\tfrac14$, $c_0=\sqrt3\cdot\tfrac16\cdot\tfrac{\sqrt3}{2}=\tfrac14$ and $\varepsilon_0=\tfrac12$ for $L=1$. [given, L2, L3, algebra]

2.1 Stability certificate check about $e_3$ with $L=1$ and initial data $l(0)=\tfrac1{10}e_1+\tfrac{3\sqrt{11}}{10}e_3$ on the unit sphere, where $\tfrac{3\sqrt{11}}{10}=\sqrt{\tfrac{99}{100}}$: $D_3(0)=\tfrac12(1/I_1-1/I_3)l_1(0)^2=\tfrac12\cdot\tfrac23\cdot\tfrac1{100}=\tfrac1{300}$ (the $l_2$-term of $D_3$ vanishes at $t=0$), so the bound $l_1(t)^2+l_2(t)^2\le D_3(0)/c_3=\tfrac{12}{300}=\tfrac1{25}$ holds at all times by [L2]; moreover $C(0)=\tfrac1{100}+\tfrac{99}{100}=1$, so $l_3(t)^2=1-(l_1^2+l_2^2)\ge\tfrac{24}{25}$, and since $l_3$ is continuous with $l_3(0)=\tfrac{3\sqrt{11}}{10}>0$ we have $l_3(t)\ge\sqrt{\tfrac{24}{25}}\ge\tfrac{97}{100}$, whence $|l_3(t)-1|=\frac{l_1(t)^2+l_2(t)^2}{1+l_3(t)}\le\tfrac{4}{197}<\tfrac{21}{1000}$; hence $\lVert l(t)-e_3\rVert_2^2\le\tfrac1{25}+\bigl(\tfrac{21}{1000}\bigr)^2=\tfrac{40441}{10^6}<\tfrac{41}{1000}$ for all $t\ge0$: the certificate inequality of [L2] is verified at explicit data, $e_3$ being the extreme axis of largest moment. [step 1.1, given, L1, L2, L5, algebra]

2.2 Instability check about $e_2$ with $L=1$ and $\eta=\tfrac1{100}$: with $a=\sqrt3$ the initial point is $l^\eta=\bigl(\tfrac1{100},\ \tfrac{\sqrt{2499}}{50},\ -\tfrac{\sqrt3}{100}\bigr)$, with $C(l^\eta)=\tfrac1{10^4}+\tfrac{2499}{2500}+\tfrac3{10^4}=1$ and $E(l^\eta)=\tfrac12\bigl(\tfrac1{10^4}+\tfrac{2499}{5000}+\tfrac1{10^4}\bigr)=\tfrac14=\tfrac{L^2}{2I_2}$ exactly, so it lies on the invariant level set of [L1] and [L3] requires no further hypothesis; the escape time is bounded by $c_0^{-1}\log(\delta_0/\eta)=4\log 25$, at which time the solution is at distance at least $\varepsilon_0=\tfrac12$ from $e_2$. [step 1.1, given, L1, L3, algebra]

2.3 Linearization check, first case: keep $(I_1,I_2,I_3)=(1,2,3)$ and take $\Omega=2$, so $\lambda=4\cdot(2-3)(3-1)/(1\cdot2)=-4$ and $\kappa=2$; with data $(1,0,0)$ the formulas of [L4] give $\delta_1=\cos2t$, $\delta_2=\sin2t$, and indeed $\delta_1'=-2\sin2t=\Omega(I_2-I_3)\delta_2/I_1=-2\sin2t$ and $\delta_2'=2\cos2t=\Omega(I_3-I_1)\delta_1/I_2=2\cos2t$: the solution is bounded, in the oscillatory branch, and $e_3$ is an extreme moment for these data. [step 1.1, given, L4, L5, algebra]

3.1 Linearization check, second case: take $(I_1,I_2,I_3)=(1,3,2)$, so $I_3=2$ is the intermediate moment, and $\Omega=2$: then $\lambda=4\cdot(3-2)(2-1)/(1\cdot3)=\tfrac43>0$, $\kappa=\tfrac{2}{\sqrt3}$, and the data $(1,0,0)$ give $\delta_1(t)=\cosh(\kappa t)$ and $\delta_2(t)=\frac{\Omega(I_3-I_1)}{I_2\kappa}\sinh(\kappa t)=\frac{2\cdot1}{3\kappa}\sinh(\kappa t)$, both unbounded as $t\to+\infty$ because $\cosh(\kappa t)\ge\tfrac12e^{\kappa t}$ by [L5]; this exhibits the exponential branch of the dichotomy and the linearized instability of the intermediate axis. [step 1.1, given, L4, L5, algebra] ∎
