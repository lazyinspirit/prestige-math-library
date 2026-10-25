---
id: post-qftx-nonabelian-lattice-regulator
kind: postulate
title: Compact Non-Abelian Finite-Lattice Regulator
status: "published"
origin: session
dependency_level: 3
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
deps:
  - def-axiom-of-choice
  - cor-normalized-haar-probability-on-a-compact-group
  - def-qftx-nonabelian-lattice-gauge-data
  - lem-qftx-su2-compact-nonabelian-group
  - lem-qftx-su2-wilson-transfer-well-defined
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  cor-normalized-haar-probability-on-a-compact-group: mathematical-premise
  def-qftx-nonabelian-lattice-gauge-data: formulation-prerequisite
  lem-qftx-su2-compact-nonabelian-group: mathematical-premise
  lem-qftx-su2-wilson-transfer-well-defined: mathematical-premise
physical_scope: "Pure SU(2) Euclidean Wilson gauge model on a finite periodic four-dimensional hypercubic lattice, with a finite spatial-slice gauge-invariant sector and one-step Euclidean transfer operator. No dynamical matter, continuum limit, infinite-volume limit, Lorentzian Hamiltonian spectrum, confinement claim, or empirical assertion is included."
provenance:
  statement: literature-derived
  proof: not-applicable
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
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Postulate

Adopt the following pure-gauge Euclidean regulator. Assume full AC for normalized Haar-probability existence and for the L² transfer-operator framework. Let $N_s,N_t\geq3$ be integers, $a>0$ a common lattice spacing, and $g_0>0$ a dimensionless bare coupling. Use natural units $\hbar=c=1$. The finite periodic lattice is

$$\Lambda=(\mathbb Z/N_s\mathbb Z)^3\times(\mathbb Z/N_t\mathbb Z),$$

with spatial extent $L_s=N_sa$ in each spatial direction and Euclidean time extent $L_t=N_ta$. The global gauge group supplied by the finite non-Abelian lattice datum is

$$SU(2)=\{U\in M_2(\mathbb C):U^*U=I_2,\ \det U=1\},$$

the compact Hausdorff non-Abelian Lie group established in the preceding local lemma, with its smooth defining two-dimensional unitary representation. Use that representation; $U^*$ denotes conjugate transpose and $\operatorname{Tr}_2$ its matrix trace. All link variables are dimensionless.

For each positive spatial direction $i\in\{1,2,3\}$, assign a link matrix $U_{x,i,t}\in SU(2)$ from $(x,t)$ to $(x+\hat i,t)$. Assign a temporal link matrix $\eta_{x,t}\in SU(2)$ from $(x,t)$ to $(x,t+1)$, with time understood modulo $N_t$. A reversed link carries the inverse matrix. Vertex gauge transformations are all functions $\Omega:\Lambda\to SU(2)$, acting by

$$U_{x,i,t}\mapsto \Omega_{x,t}U_{x,i,t}\Omega_{x+\hat i,t}^{-1},\qquad \eta_{x,t}\mapsto\Omega_{x,t}\eta_{x,t}\Omega_{x,t+1}^{-1}.$$

Let $E_\Lambda^+$ be the finite set of these positively oriented spatial and temporal links, let $\mathcal C_\Lambda:=SU(2)^{E_\Lambda^+}$ be the full link-configuration space with its finite-product topology, and equip it with the product Borel sigma-algebra $\mathcal B_\Lambda:=\bigotimes_{\ell\in E_\Lambda^+}\mathcal B(SU(2))$.

For $i<j$, define the spatial plaquette product

$$U_{x,ij,t}=U_{x,i,t}U_{x+\hat i,j,t}U_{x+\hat j,i,t}^{-1}U_{x,j,t}^{-1},$$

and define the temporal-spatial plaquette product

$$Q_{x,i,t}=\eta_{x,t}U_{x,i,t+1}\eta_{x+\hat i,t}^{-1}U_{x,i,t}^{-1}.$$

Set $\beta=4/g_0^2$, a positive dimensionless parameter. For a spatial slice $u=(U_{x,i})$, set

$$S_s(u)=\beta\sum_{x,\ i<j}\left(1-\tfrac12\operatorname{ReTr}_2 U_{x,ij}\right),$$

and for adjacent slices $u',u$ and temporal links $\eta=(\eta_x)$, set

$$S_t(u',u;\eta)=\beta\sum_{x,\ i}\left(1-\tfrac12\operatorname{ReTr}_2(\eta_xU'_{x,i}\eta_{x+\hat i}^{-1}U_{x,i}^{-1})\right).$$

The adopted Wilson action is $S_\Lambda=\sum_{t=0}^{N_t-1}\big(S_s(u_t)+S_t(u_{t+1},u_t;\eta_t)\big)$, with $u_{N_t}=u_0$. The compact Hausdorff group $SU(2)$ has the unique normalized left Haar probability measure $dU$, which is also right invariant under the assumed Axiom of Choice. On each positively oriented link use this measure; $d\mu_\Lambda$ is its finite product over the link set. For a bounded $\mathcal B_\Lambda$-measurable function $O:\mathcal C_\Lambda\to\mathbb C$, call $O$ gauge-invariant when $O(\Omega\cdot U)=O(U)$ for every vertex transformation $\Omega:\Lambda\to SU(2)$ and every $U\in\mathcal C_\Lambda$, where $\Omega\cdot U$ is the link configuration whose coordinates are the transformed links displayed above. The exact finite-volume partition function and the expectation of each such observable are

$$Z_\Lambda=\int e^{-S_\Lambda}\,d\mu_\Lambda,\qquad \langle O\rangle_\Lambda=Z_\Lambda^{-1}\int Oe^{-S_\Lambda}\,d\mu_\Lambda.$$

If $O$ represents a physical observable with assigned units, $\langle O\rangle_\Lambda$ has those same units; this postulate assigns no unit to the generic mathematical function $O$.

For the transfer convention, let $V_s=(\mathbb Z/N_s\mathbb Z)^3$ be the finite vertex set of one slice and $E_s=V_s\times\{1,2,3\}$ its positive spatial-link set. Define $d\mu_s:=\bigotimes_{(x,i)\in E_s}dU$ on $SU(2)^{E_s}$, where each factor is the normalized Haar Borel probability; let $\mathcal H_{\rm kin}=L^2(SU(2)^{E_s},d\mu_s;\mathbb C)$ be the complex $L^2$ space. Define $\mathcal H_{\rm phys}=\{\psi\in\mathcal H_{\rm kin}:\mathcal U(h)\psi=\psi\text{ for every }h\in SU(2)^{V_s}\}$, where $\mathcal U(h)\psi(u)=\psi(h^{-1}\!\cdot u)$ in $L^2$. The finite-lattice well-definedness result establishes that this fixed subspace is closed. It is the group-invariant finite-slice Gauss sector. For one transfer step let $\eta=(\eta_x)_{x\in V_s}\in SU(2)^{V_s}$ denote its temporal-link tuple, and define $d\mu_V:=\bigotimes_{x\in V_s}dU$ on those coordinates, with each factor the normalized Haar Borel probability $dU$. Thus $d\mu_V$ is the finite product probability over all temporal links in one time step. Define

$$K(u',u)=e^{-\frac12S_s(u')-\frac12S_s(u)}\int_{SU(2)^{V_s}}e^{-S_t(u',u;\eta)}\,d\mu_V(\eta),\qquad (T\psi)(u')=\int K(u',u)\psi(u)\,d\mu_s(u).$$

The finite Euclidean time direction is assembled by iterating this one-step transfer operator, with the periodic boundary identification stated above. This is a Euclidean transfer convention only: no self-adjoint or positive-spectrum claim for $T$, no Lorentzian Hamiltonian identification, and no continuum or infinite-volume limit are postulated. The model has no dynamical matter fields, so it makes no matter-screening, confinement, or string-breaking claim. The regulator is adopted, not derived from a continuum theory or empirical evidence.

The quantities $a,L_s,L_t$ have units of length; $g_0,\beta,U_{x,i,t},\eta_{x,t},S_\Lambda,Z_\Lambda$ are dimensionless in the stated natural-unit convention. No measured parameter is supplied.

## Postulate references

[Creutz, *Quarks, Gluons and Lattices*, Chapter 7, pp. 34–38](https://www.cambridge.org/core/services/aop-cambridge-core/content/view/8BE1322C90332E2092E3945035525382/9781009290388c7_34-38.pdf/lattice_gauge_theory.pdf)

[Creutz, *Quarks, Gluons and Lattices*, Chapter 8, pp. 39–43](https://www.cambridge.org/core/services/aop-cambridge-core/content/view/D249BE42514DA3218D7060836C8438ED/9781009290388c8_39-50.pdf/group_integration.pdf)

[Creutz, *Quarks, Gluons and Lattices*, Chapter 15, pp. 101–107](https://www.cambridge.org/core/services/aop-cambridge-core/content/view/1B676F70F134E1133DD3D1E56C42C0D3/9781009290388c15_101-107.pdf/the-hamiltonian-approach.pdf)

[Tong, *Gauge Theory*, Chapter 4, §§4.2.1–4.2.3, pp. 206–215](https://davidtong.org/pdfs/teaching/gauge-theory/gauge4.pdf)

[[def-axiom-of-choice|Axiom of Choice for normalized Haar-probability existence]]

[[cor-normalized-haar-probability-on-a-compact-group|Normalized Haar probability on a compact group]]

[[lem-qftx-su2-compact-nonabelian-group|Compact non-Abelian Lie-group structure and smooth defining representation of SU(2)]]

[[def-qftx-nonabelian-lattice-gauge-data|Finite non-Abelian lattice-data formulation and face-potential interface]]

[[lem-qftx-su2-wilson-transfer-well-defined|Finite-volume integral and transfer-operator well-definedness]]
