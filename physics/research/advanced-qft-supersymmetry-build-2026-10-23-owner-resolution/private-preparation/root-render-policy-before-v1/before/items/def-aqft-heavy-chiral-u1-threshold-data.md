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
      locator: "Full 108-page PDF retrieved; read §8.2, Eqs. (8.20)–(8.25), §5.2.3, Eqs. (5.32)–(5.46), and §9.3, Eqs. (9.16)–(9.30), for gauge conventions, the Pauli–Villars subtraction, the positive-chirality anomaly, and its consistent representative."
    - title: "John Preskill, Gauge Anomalies in an Effective Field Theory"
      url: "https://preskill.caltech.edu/pubs/preskill-1991-effective.pdf"
      locator: "Full 78-page PDF retrieved; read §6.3–6.4, Eqs. (6.34)–(6.45), for the Goldstone-dependent mass term, anomalous Jacobian, mass-independent anomaly, Wess–Zumino functional, and heavy-mass expansion."
verification:
  precheck: pending
---
## Definition

Use natural units $c=\hbar=1$ on the four-dimensional affine Minkowski space $M=\mathbb R^{1,3}$ with metric $\eta=\operatorname{diag}(-1,1,1,1)$ and orientation $dx^0\wedge dx^1\wedge dx^2\wedge dx^3$, as in the selected HEFT spacetime convention. Use the trivial spin structure, spinor bundle $S=M\times\mathbb C^4$, gamma matrices satisfying $\{\gamma^\mu,\gamma^\nu\}=2\eta^{\mu\nu}I$, chirality operator $\gamma_5=i\gamma^0\gamma^1\gamma^2\gamma^3$, and eigensubbundles $S_\pm=\ker(\gamma_5\mp I)$. Take the trivial bundle for the fixed global symmetry group $H=SU(3)\times U(1)_V$, set the $SU(3)$ background connection to zero, and keep only the nondynamical $U(1)_V$ connection $B\in\Omega_c^1(M,\mathbb R)$ with curvature $G=dB$. Here $U(1)_V=\{z\in\mathbb C:|z|=1\}$ and its charge-$q$ representation is $\rho_q(z)=z^q$ on $\mathbb C$. The background $B$ is not integrated over as a quantum gauge redundancy.

Let $\psi_+\in C_c^\infty(M,S_+\otimes\mathbb C_{(\mathbf1,+1)})$ and $\psi_-\in C_c^\infty(M,S_-\otimes\mathbb C_{(\mathbf1,0)})$ be complex Weyl fields in the indicated $SU(3)\times U(1)_V$ representations. Use $D_q=d+iqB$ on charge-$q$ fields and the fixed Lorentz-scalar chiral Dirac pairing $\bar\psi_+\psi_-$. Let $\Phi=v e^{i\theta}$ be a nonvanishing order-parameter field in $(\mathbf1,+1)$ with fixed modulus $v>0$ and smooth real phase $\theta\in C_c^\infty(M,\mathbb R)$. A dimensionless nonzero Yukawa parameter $y$ gives the mass term $-y\Phi\bar\psi_+\psi_-+\mathrm{h.c.}$, where h.c. denotes Hermitian conjugation, and heavy mass $M_H=|y|v>0$. The fermion fields have mass dimension $3/2$, $v$ and $M_H$ have mass dimension one, $B_\mu$ has mass dimension one, $G_{\mu\nu}$ has mass dimension two, and $\theta$ is dimensionless.

For $\alpha\in C_c^\infty(M,\mathbb R)$, use $B\mapsto B+d\alpha$, $\psi_+\mapsto e^{-i\alpha}\psi_+$, $\psi_-\mapsto\psi_-$, and $\Phi\mapsto e^{-i\alpha}\Phi$, hence $\theta\mapsto\theta-\alpha$. These transformations leave the Yukawa term invariant. In the anti-Hermitian product-group convention, the selected singlet has connection $iB$ and covariant derivative $d+iB$; in Bilal's Hermitian convention write $\mathscr A=-B$ and $\epsilon=-\alpha$, so $d-i\mathscr A=d+iB$ and the transformations agree. Let $\Gamma_H[B,\theta]$ denote the formal one-loop effective-action contribution of this fermion pair with the Pauli–Villars subtraction used for the chiral triangle: include a physical loop with $M_0=0$ and three regulator loops with statistics weights $\eta_0=\eta_2=1$ and $\eta_1=\eta_3=-1$, choose a positive scale $M_{\mathrm{PV}}$ and masses $M_1=M_3=M_{\mathrm{PV}}$, $M_2=\sqrt2M_{\mathrm{PV}}$, and take $M_{\mathrm{PV}}\to\infty$ after the subtraction. Define the consistent anomaly as the infinitesimal variation of this effective action, rather than as a covariant-current divergence. Add no non-invariant local counterterm to $\Gamma_H$; gauge-invariant local counterterms may be added. For an undetermined real coefficient $c$, the candidate Wess–Zumino functional is $\Gamma_c[B,\theta]=c\int_M\theta G\wedge G$; the theorem on this page fixes $c$.

As a source-backed threshold input, adopt the following scope-limited consequence of the heavy-fermion field-redefinition argument: removing the phase of a Yukawa-generated heavy chiral mass by a chiral redefinition transfers that phase to the regulated measure, whose consistent anomalous variation is independent of the heavy mass. This supplies the local Wess–Zumino threshold interpretation when $\theta$ is retained; it is not a construction of the full determinant or a bound on all remaining terms. Let $E$ be a positive mass scale bounding absolute external momentum components in these coordinates. The threshold regime is $E/M_H\ll1$, with no Lorentz-invariant norm or expansion-remainder bound asserted. All determinant and anomaly data here are formal perturbative inputs; no exact functional integral or continuum limit is claimed.

## Definition references

[[post-aqft-heft-model|Adopted Minkowski spacetime and mostly-plus metric convention]]

[[def-aqft-anomaly-matching-data|Selected H=SU(3)×U(1)_V representation, regulator, and anomaly-descent data]]

[Bilal, full Lectures on Anomalies PDF](https://arxiv.org/pdf/0802.0634)

[Preskill, full Gauge Anomalies in an Effective Field Theory lecture notes](https://preskill.caltech.edu/pubs/preskill-1991-effective.pdf)
