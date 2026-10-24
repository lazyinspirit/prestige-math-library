---
id: def-aqft-heavy-chiral-u1-threshold-data
kind: definition
title: Heavy chiral U(1)_V threshold model data
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 6
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: aqft-eft-anomalies
deps:
  - post-aqft-heft-model
  - def-aqft-anomaly-matching-data
justified_by: []
dependency_roles:
  post-aqft-heft-model: formulation-prerequisite
  def-aqft-anomaly-matching-data: formulation-prerequisite
physical_scope: "A selected perturbative U(1)_V-singlet chiral threshold sector inside H=SU(3)×U(1)_V on the trivial bundle over four-dimensional Minkowski space; no dynamical gauge-consistency or global-anomaly claim."
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Adel Bilal, Lectures on Anomalies"
      url: "https://arxiv.org/pdf/0802.0634"
      locator: "Targeted source passages: §2.4, Eq. (2.20), printed p. 7; §8.2, Eqs. (8.20)–(8.25), §5.2.3, Eqs. (5.32)–(5.47), and §9.3, Eqs. (9.16)–(9.30), for gauge conventions, the Pauli–Villars subtraction, the positive-chirality anomaly, and its consistent representative."
    - title: "John Preskill, Gauge Anomalies in an Effective Field Theory"
      url: "https://preskill.caltech.edu/pubs/preskill-1991-effective.pdf"
      locator: "Full 78-page PDF retrieved; read §6.3–6.4, Eqs. (6.34)–(6.45), for the Goldstone-dependent mass term, anomalous Jacobian, mass-independent anomaly, Wess–Zumino functional, and heavy-mass expansion."
verification:
  precheck: pending
---
## Definition

Use natural units $c=\hbar=1$ on the four-dimensional affine Minkowski space $M=\mathbb R^{1,3}$ with metric $\eta=\operatorname{diag}(-1,1,1,1)$ and orientation $dx^0\wedge dx^1\wedge dx^2\wedge dx^3$, as in the selected HEFT spacetime convention. Use the trivial spin structure, spinor bundle $S=M\times\mathbb C^4$, gamma matrices satisfying $\{\gamma^\mu,\gamma^\nu\}=2\eta^{\mu\nu}I$, chirality operator $\gamma_5=-i\gamma^0\gamma^1\gamma^2\gamma^3=i\gamma_0\gamma_1\gamma_2\gamma_3$, and eigensubbundles $S_\pm=\ker(\gamma_5\mp I)$. Here $\gamma_0=-\gamma^0$, $\gamma_j=\gamma^j$ for spatial $j$, and $\bar\psi=\psi^\dagger i\gamma^0$; choose $(i\gamma^0)^\dagger=i\gamma^0$ and $(\gamma^j)^\dagger=\gamma^j$. This matches the shared anomaly-matching data and Bilal's mostly-plus positive-chirality convention in Eq. (2.20), which fixes the sign of his anomaly formula. Take the trivial bundle for the fixed global symmetry group $H=SU(3)\times U(1)_V$, set the $SU(3)$ background connection to zero, and keep only the nondynamical $U(1)_V$ connection $B\in\Omega_c^1(M,\mathbb R)$ with curvature $G=dB$. Here $U(1)_V=\{z\in\mathbb C:|z|=1\}$ and its charge-$q$ representation is $\rho_q(z)=z^q$ on $\mathbb C$. The background $B$ is not integrated over as a quantum gauge redundancy.

Fix the complex exterior algebra $\Lambda=\bigwedge_{\mathbb C}\operatorname{span}_{\mathbb C}\{\xi_a,\bar\xi_a:a\in\mathbb N\}$, with algebraic finite sums, and let $\Lambda_{\mathrm{odd}}$ be its odd-degree subspace. Conjugation is the antilinear involution exchanging $\xi_a$ and $\bar\xi_a$ and reversing product order. Let $\psi_+\in C_c^\infty(M,S_+\otimes\mathbb C_{(\mathbf1,+1)})\otimes_{\mathbb C}\Lambda_{\mathrm{odd}}$ and $\psi_-\in C_c^\infty(M,S_-\otimes\mathbb C_{(\mathbf1,0)})\otimes_{\mathbb C}\Lambda_{\mathrm{odd}}$ be Weyl fields: finite sums of smooth compactly supported sections with Grassmann-odd coefficients in the indicated representations. Odd coefficients anticommute; the Dirac adjoint uses this conjugation and the spinor adjoint. This implements the shared anomaly-matching data's fermionic statistics for both the charged field and its neutral mass partner; the determinant and measure below remain formal perturbative inputs, not integrals over a fixed finite set of generators. Use $D_q=d+iqB$ on charge-$q$ fields and the fixed Lorentz-scalar chiral Dirac pairing $\bar\psi_+\psi_-$. Let $\Phi=v e^{i\theta}$ be a nonvanishing order-parameter field in $(\mathbf1,+1)$ with fixed modulus $v>0$ and smooth real phase $\theta\in C_c^\infty(M,\mathbb R)$. A dimensionless nonzero Yukawa parameter $y$ gives the mass term $-y\Phi\bar\psi_+\psi_-+\mathrm{h.c.}$, where h.c. denotes Hermitian conjugation, and heavy mass $M_H=|y|v>0$. The fermion fields have mass dimension $3/2$, $v$ and $M_H$ have mass dimension one, $B_\mu$ has mass dimension one, $G_{\mu\nu}$ has mass dimension two, and $\theta$ is dimensionless.

For $\alpha\in C_c^\infty(M,\mathbb R)$, use $B\mapsto B+d\alpha$, $\psi_+\mapsto e^{-i\alpha}\psi_+$, $\psi_-\mapsto\psi_-$, and $\Phi\mapsto e^{-i\alpha}\Phi$, hence $\theta\mapsto\theta-\alpha$. These transformations leave the Yukawa term invariant. In the anti-Hermitian product-group convention, the selected singlet has connection $iB$ and covariant derivative $d+iB$; in Bilal's Hermitian convention write $\mathscr A=-B$ and $\epsilon=-\alpha$, so $d-i\mathscr A=d+iB$ and the transformations agree. Let $\Gamma_H[B,\theta]$ denote the formal one-loop effective-action contribution of this Yukawa-massive pair, whose fermion mass is $M_H=|y|v>0$. For determining its local consistent-anomaly coefficient, separately use the Pauli–Villars-regulated one-loop triangle with one gauge-current insertion and two $U(1)_V$ background-connection insertions for a massless positive-chirality Weyl field in $(\mathbf1,+1)$. In this triangle calculation only, the physical loop has $M_0=0$ and weight $\eta_0=1$, while the three regulator loops have weights $\eta_1=\eta_3=-1$ and $\eta_2=1$, a positive scale $M_{\mathrm{PV}}$, and masses $M_1=M_3=M_{\mathrm{PV}}$, $M_2=\sqrt2M_{\mathrm{PV}}$, with $M_{\mathrm{PV}}\to\infty$ after subtraction. The $M_0=0$ physical loop belongs only to this massless triangle calculation; it is not the physical loop of $\Gamma_H$, whose mass remains $M_H>0$. Let $\mathcal A_{\mathrm{tri},0}(\alpha,B)$ denote the local consistent-anomaly variation computed from this massless triangle. It fixes the massless chiral representation's coefficient and is not the variation of the massive pair or a definition of its full determinant. Define the consistent anomaly as an infinitesimal effective-action variation, rather than as a covariant-current divergence. Add no non-invariant local counterterm to $\Gamma_H$; gauge-invariant local counterterms may be added. For an undetermined real coefficient $c$, the candidate Wess–Zumino functional is $\Gamma_c[B,\theta]=c\int_M\theta G\wedge G$; the theorem on this page fixes $c$.

After a constant rephasing of the neutral field absorbs the phase of $y$, the phase-dependent mass term is $-M_H e^{i\theta}\bar\psi_+\psi_-+\mathrm{h.c.}$. The pointwise invertible change of variables $\psi'_+=e^{-i\theta}\psi_+$, $\bar\psi'_+=e^{i\theta}\bar\psi_+$, and $\psi'_- =\psi_-$ removes $\theta$ from this mass term and changes the charged kinetic connection to $B_\theta:=B+d\theta$. Both $\psi'_+$ and $B_\theta$ are invariant under the simultaneous background transformation.

Use the Minkowski effective-action convention $Z_H[B,\theta]=\exp(i\Gamma_H[B,\theta])$, as a formal perturbative generating-functional notation. Let $\Gamma_R^M[B]$ denote the massless charged species' effective action in the selected consistent representative, with $\delta_\alpha\Gamma_R^M=\mathcal A_{\mathrm{tri},0}(\alpha,B)$. For compactly supported real $\theta$, define the local finite difference along the connected Abelian orbit by
$$\Delta_M[B,\theta]:=\Gamma_R^M[B+d\theta]-\Gamma_R^M[B]=\int_0^1\mathcal A_{\mathrm{tri},0}(\theta,B+t\,d\theta)\,dt.$$
This is a local perturbative difference, not a chosen global determinant phase. Adopt the scope-limited source-backed change-of-variables premise that the regulated old measure equals $J_M[B,\theta]$ times the new measure, with $J_M=\exp(-i\Delta_M)$ in this Minkowski convention. Its contribution to the effective action is therefore $\Gamma_J=(1/i)\log J_M=-\Delta_M$, on the perturbative logarithm branch vanishing at $\theta=0$. The transformed massive determinant is a functional $\mathcal F_M[B_\theta,M_H]$ of the invariant connection and constant mass, so the adopted local threshold relation is
$$\Gamma_H[B,\theta]=\mathcal F_M[B_\theta,M_H]-\Delta_M[B,\theta],\qquad \delta_\alpha\mathcal F_M[B_\theta,M_H]=0.$$
This source input concerns the anomalous local variation and its independence of $M_H$, not a construction or local expansion of the entire determinant. To compare signs with Preskill's Euclidean convention, continue as $\Gamma_E=-i\Gamma_M$ with oriented differential forms continued as in Bilal §10.1, and put $\Delta_E=-i\Delta_M$. Preskill's Eqs. (6.34), (6.43)–(6.45) then read $J_E=\exp(\Delta_E)$ and $\Gamma_{J,E}=-\log J_E=-\Delta_E$. Neither $J_E$ nor $\log J_E$ is the Minkowski effective-action term. Since $B_\theta$ is invariant, $\delta_\alpha\Delta_M=-\mathcal A_{\mathrm{tri},0}(\alpha,B)$, whereas $\delta_\alpha\Gamma_J=+\mathcal A_{\mathrm{tri},0}(\alpha,B)$. These opposite signs distinguish the finite difference from its effective-action contribution. No global or large-transformation claim about the Jacobian is made.

For low-energy use, a specified $n$-point background-field vertex of $\Gamma_H$, with $n\geq1$, is the coefficient multilinear in $n$ components chosen from $B_\mu$ and $\theta$ in the formal expansion about $B=0$, $\theta=0$, after Fourier-transforming each argument and removing the overall momentum-conservation delta. Its incoming real covectors $p_j=(p_{j0},p_{j1},p_{j2},p_{j3})\in\mathbb R^{1,3}$ satisfy $\sum_{j=1}^n p_j=0$; no on-shell condition is imposed. For that specified vertex set $E=\max_{1\leq j\leq n,\,0\leq\mu\leq3}|p_{j\mu}|$. The threshold condition $E/M_H\ll1$ concerns the finite set of external legs of that vertex, not the Fourier support of $B,\theta\in C_c^\infty(M)$, and supplies no Lorentz-invariant norm or quantitative expansion-remainder bound. The exact local anomaly variation below is independent of $E$. All determinant and anomaly data here are formal perturbative inputs; no exact functional integral or continuum limit is claimed.

## Definition references

[[post-aqft-heft-model|Adopted Minkowski spacetime and mostly-plus metric convention]]

[[def-aqft-anomaly-matching-data|Selected H=SU(3)×U(1)_V representation, regulator, and anomaly-descent data]]

[Bilal, full Lectures on Anomalies PDF](https://arxiv.org/pdf/0802.0634)

[Preskill, full Gauge Anomalies in an Effective Field Theory lecture notes](https://preskill.caltech.edu/pubs/preskill-1991-effective.pdf)
