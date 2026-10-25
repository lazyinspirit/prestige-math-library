---
id: ex-qftx-su2-wilson-lattice-transfer-sector
kind: example
title: A finite SU(2) Wilson lattice and its gauge-invariant transfer sector
status: "published"
origin: session
dependency_level: 4
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
deps:
  - def-axiom-of-choice
  - cor-normalized-haar-probability-on-a-compact-group
  - lem-qftx-su2-compact-nonabelian-group
  - lem-qftx-su2-wilson-transfer-well-defined
  - post-qftx-nonabelian-lattice-regulator
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  cor-normalized-haar-probability-on-a-compact-group: mathematical-premise
  lem-qftx-su2-compact-nonabelian-group: mathematical-premise
  lem-qftx-su2-wilson-transfer-well-defined: mathematical-premise
  post-qftx-nonabelian-lattice-regulator: physical-assumption
physical_scope: "One bounded Wilson-loop observable and the group-invariant slice sector of the adopted pure SU(2) Euclidean regulator at fixed finite spatial and temporal sizes."
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Michael Creutz, Quarks, Gluons and Lattices, Chapter 7, Lattice gauge theory"
      url: "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/8BE1322C90332E2092E3945035525382/9781009290388c7_34-38.pdf/lattice_gauge_theory.pdf"
    - title: "Michael Creutz, Quarks, Gluons and Lattices, Chapter 8, Group integration"
      url: "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/D249BE42514DA3218D7060836C8438ED/9781009290388c8_39-50.pdf/group_integration.pdf"
    - title: "Michael Creutz, Quarks, Gluons and Lattices, Chapter 15, The Hamiltonian approach"
      url: "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/1B676F70F134E1133DD3D1E56C42C0D3/9781009290388c15_101-107.pdf/the-hamiltonian-approach.pdf"
    - title: "David Tong, Gauge Theory, Chapter 4, Lattice Gauge Theory"
      url: "https://davidtong.org/pdfs/teaching/gauge-theory/gauge4.pdf"
generation:
  role: example
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Example

Take $N_s=N_t=3$, $a>0$, and $g_0>0$ in the adopted pure SU(2) Euclidean Wilson regulator. Let $E_\Lambda^+$ be the finite set of its positively oriented spatial and temporal links, and let $\mathcal C_\Lambda:=SU(2)^{E_\Lambda^+}$ be the full link-configuration space with its finite-product topology and product Borel sigma-algebra. For $U\in\mathcal C_\Lambda$, let $u_0(U)$ be its positive spatial links at $t=0$. Let $C$ be the elementary spatial plaquette at the origin in the $(1,2)$-plane at $t=0$, with positive boundary orientation, and let $U_C(u_0)$ be the ordered product of its four links, using inverse matrices for reversed traversals. Define $W_C:\mathcal C_\Lambda\to\mathbb R$ by $W_C(U)=\tfrac12\operatorname{ReTr}_2(U_C(u_0(U)))$. For a vertex function $\Omega:\Lambda\to SU(2)$, let $\Omega\cdot U$ denote the link configuration with $(\Omega\cdot U)_{vw}=\Omega_vU_{vw}\Omega_w^{-1}$ on each positively oriented edge $v\to w$; the gauge-invariance claim is $W_C(\Omega\cdot U)=W_C(U)$. Under the model's unit convention $W_C$ is dimensionless. At the configuration with every link matrix equal to $I_2$, the Wilson action is zero and $W_C=1$. Thus $W_C$ is a continuous, hence Borel-measurable, bounded gauge-invariant multiplication observable. Its normalized expectation exists; the one-step transfer operator is bounded and maps the group-invariant Gauss sector into itself, which contains the nonzero constant wavefunction; and cyclic iteration of its kernel reproduces the finite periodic Euclidean integral. These are exact finite-regulator statements; they assert no continuum area law or Lorentzian energy spectrum.

## Example references

[Creutz, *Quarks, Gluons and Lattices*, Chapter 7, pp. 34–38](https://www.cambridge.org/core/services/aop-cambridge-core/content/view/8BE1322C90332E2092E3945035525382/9781009290388c7_34-38.pdf/lattice_gauge_theory.pdf)

[Creutz, *Quarks, Gluons and Lattices*, Chapter 8, pp. 39–43](https://www.cambridge.org/core/services/aop-cambridge-core/content/view/D249BE42514DA3218D7060836C8438ED/9781009290388c8_39-50.pdf/group_integration.pdf)

[Creutz, *Quarks, Gluons and Lattices*, Chapter 15, pp. 101–107](https://www.cambridge.org/core/services/aop-cambridge-core/content/view/1B676F70F134E1133DD3D1E56C42C0D3/9781009290388c15_101-107.pdf/the-hamiltonian-approach.pdf)

[Tong, *Gauge Theory*, Chapter 4, §§4.2.1–4.2.3, pp. 206–215](https://davidtong.org/pdfs/teaching/gauge-theory/gauge4.pdf)

## Facts & Assumptions

**Given:** The exact finite SU(2) lattice, Haar product measure, action, spatial gauge action, physical slice sector, and transfer kernel of [[post-qftx-nonabelian-lattice-regulator]], with $N_s=N_t=3$, $a>0$, $g_0>0$, and natural units $\hbar=c=1$.

[A1] The regulator is adopted in [[post-qftx-nonabelian-lattice-regulator]]; all deductions below are conditional on that Euclidean finite-volume model.

[F1] [[lem-qftx-su2-wilson-transfer-well-defined]]: conditionally on its finite-lattice data input, bounded Wilson-loop expectations exist, the transfer operator is a contraction mapping into the closed group-invariant sector, the constant state is nonzero, and cyclic transfer kernels reconstruct the finite Euclidean integral.

[A2] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function; full AC is used for normalized Haar probability and the $L^2$ transfer-operator framework.

[F2] [[cor-normalized-haar-probability-on-a-compact-group]]: under full AC, a compact Hausdorff group has a unique normalized left Haar probability that is right invariant.

[F3] [[lem-qftx-su2-compact-nonabelian-group]]: every SU(2) element has matrix form $\begin{pmatrix}\alpha&\beta\\-\overline{\beta}&\overline{\alpha}\end{pmatrix}$ with $|\alpha|^2+|\beta|^2=1$, so $\tfrac12\operatorname{ReTr}_2 U\in[-1,1]$.

## Proof

1.1 When every link is $I_2$, every plaquette product is $I_2$. Each action term is $\beta(1-\tfrac12\operatorname{ReTr}_2 I_2)=0$, so $S_\Lambda=0$; the ordered product around $C$ is $I_2$, hence $W_C=1$. This evaluates the observable on one configuration only, not its probability or expectation. [given, A1, algebra]

1.2 The coordinate projection $U\mapsto u_0(U)$ is continuous for the finite-product topology, and matrix multiplication, inversion, and trace are continuous; hence $W_C:\mathcal C_\Lambda\to\mathbb R$ is continuous and Borel-measurable for the stated product Borel sigma-algebra. For a closed path $C=(x_0,\ell_1,x_1,\ldots,\ell_m,x_m)$ with $x_m=x_0$, each oriented factor transforms by the gauge matrix at its start and the inverse gauge matrix at its end. Adjacent factors cancel, leaving $U_C\mapsto\Omega_{x_0}U_C\Omega_{x_0}^{-1}$; cyclicity of trace proves gauge invariance. By [F3], for $V\in SU(2)$ one has $\tfrac12\operatorname{ReTr}_2V=\operatorname{Re}\alpha\in[-1,1]$. Thus $W_C$ is bounded by one in absolute value. [given, A1, F3, algebra]

1.3 The choices $N_s=N_t=3$, $a>0$, and $g_0>0$ satisfy the finite-lattice hypotheses of [F1]. Applying [F1] gives a finite positive partition function, a defined normalized expectation for this bounded $W_C$, a bounded transfer operator preserving the Gauss sector, and a nonzero constant vector in that sector. [given, A1, F1, A2, F2]

2.1 The same application of [F1] gives that the cyclic product of the one-step kernels integrates to the full periodic Euclidean Wilson weight, and that inserting $W_C$ on the chosen slice yields its stated finite-volume expectation. This is a fixed-lattice calculation; it contains no continuum or Lorentzian spectral assertion. [given, A1, F1, step 1.3] ∎
