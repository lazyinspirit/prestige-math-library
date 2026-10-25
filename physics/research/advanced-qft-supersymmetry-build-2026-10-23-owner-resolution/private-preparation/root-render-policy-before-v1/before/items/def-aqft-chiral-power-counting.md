---
id: def-aqft-chiral-power-counting
kind: definition
title: Finite electroweak HEFT chiral and loop counting
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 6
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
deps:
  - post-aqft-heft-model
  - def-aqft-local-operator-and-dimension
dependency_roles:
  post-aqft-heft-model: formulation-prerequisite
  def-aqft-local-operator-and-dimension: mathematical-premise
axiom_base: "ZF + AC_omega inherited from the selected gauge and field-data suppliers; this counting definition uses no stronger choice principle."
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "A source-convention chiral/loop ordering for local electroweak HEFT operators and diagrams through one-loop NLO. It is a formal truncation label, not a convergence proof, numerical uncertainty, coefficient calculation, or physical-validity measurement."
sources:
  references:
    - title: "Gerhard Buchalla, Oscar Catà and Claudius Krause, Complete Electroweak Chiral Lagrangian with a Light Higgs at NLO"
      url: "https://arxiv.org/pdf/1307.5017"
      locator: "§3, printed pp. 3–4, equations (10)–(12), for the diagram degree and the finite one-loop counterterm classes; §§4.1–4.6, printed pp. 4–11, for the operator structures."
    - title: "Rodrigo Alonso, A Primer on Higgs Effective Field Theory with Geometry"
      url: "https://www.ippp.dur.ac.uk/~ralonso/PoHEFT.pdf"
      locator: "§§3.2–4, printed pp. 14–17, on the h/v functions, Goldstone building blocks and the distinction between canonical-dimension and HEFT expansions."
    - title: "Adam Falkowski, Lectures on SMEFT"
      url: "https://scoap3-prod-backend.s3.cern.ch/media/files/79196/10.1140/epjc/s10052-023-11821-3_a.pdf"
      locator: "§3.1, printed pp. 7–8, on canonical-dimension power counting for SMEFT, used here only to state the separate counting."
verification:
  precheck: n/a
---
## Definition

Use the HEFT fields $U$, $h$, gauge curvatures, fermions and arbitrary smooth coefficient functions of $h/v$ from the preceding HEFT model. The canonical engineering dimension $\Delta$ is the mass weight of the local polynomial in fields and derivatives; it is the weight supplied by the finite-jet operator definition. The **chiral/loop count** is separate data and is not inferred from $\Delta$.

Adopt the electroweak chiral loop convention of Buchalla, Catà and Krause. A connected finite diagram has loop number $L\in\mathbb N_0$. Its external lines are counted by $F_L$ left-handed fermions, $F_R$ right-handed fermions, $V$ gauge bosons, $B$ Goldstone bosons, and $H_{\mathrm{ext}}$ scalar singlets. In the leading Lagrangian, let $\nu_k$ count Yukawa vertices with $k$ Goldstone legs, $m_l$ gauge-Goldstone vertices with $l$ Goldstone legs, $r_s$ two-gauge-boson vertices with $s$ Goldstone legs, $x$ quartic gauge vertices, $u$ triple-gauge vertices, $z_L,z_R$ left- and right-handed fermion-gauge vertices, $\tau_{tb}$ Yukawa vertices with $t$ Goldstone legs and $b$ scalar legs, and $\omega_q$ scalar-potential vertices with $q$ scalar legs. Set
$$\nu=\sum_k\nu_k+\sum_{t,b}\tau_{tb},\qquad m=\sum_lm_l,\qquad r=\sum_sr_s,\qquad z=z_L+z_R,\qquad \omega=\sum_q\omega_q.$$
For these counts the source chiral degree of the external-momentum factor is
$$d_\chi=2L+2-\frac{F_L+F_R}{2}-V-\nu-m-2r-2x-u-z-2\omega.$$
The factors $(\varphi/v)^B$ and $(h/v)^{H_{\mathrm{ext}}}$ contain any number of Goldstone and singlet fields and do not increase $d_\chi$. Vertices $\varphi^{2j}h^a$ from the leading two-derivative scalar sector likewise carry no additional term in this degree formula. Here $\varphi$ denotes the local Goldstone coordinates defined by $U=\exp(2i\varphi^aT_a/v)$ in its stated coordinate chart. The chiral cutoff and loop cutoff are supplied independently; this contract retains the leading order and the one-loop next-to-leading counterterm classes with $L\leq1$ and $d_\chi\geq0$.

The finite next-to-leading structural classes are $UhD^4$, $X^2Uh$, $XUhD^2$, $\psi^2UhD$, $\psi^2UhD^2$, and $\psi^4Uh$, where $U h$ means any number of $U,U^\dagger,h$ factors, $X_{\mu\nu}$ is a gauge curvature, $D$ is a covariant derivative, and $\psi$ is a fermion. Each class may carry a separate smooth function of $h/v$; the count does not truncate its Taylor series in $h$. No class list or operator-level coefficient relation from a finite canonical-dimension SMEFT basis is identified with this full HEFT list.

The scale $\Lambda_{\mathrm{HEFT}}>0$ controlling the derivative expansion and the symmetry-breaking scale $v>0$ are separate supplied mass scales. A condition such as external momentum small compared with $\Lambda_{\mathrm{HEFT}}$ is an applicability assumption only. Chiral order and loop order are formal organizing labels, not convergence claims or numerical bounds on omitted terms.

## Definition references

[[post-aqft-heft-model|Nonlinear Goldstone field, scalar singlet and smooth HEFT functions]]

[[def-aqft-local-operator-and-dimension|Canonical engineering dimension and local fields]]

[Buchalla, Catà and Krause, full HEFT loop-counting derivation](https://arxiv.org/pdf/1307.5017)

[Alonso, full HEFT geometry lecture notes](https://www.ippp.dur.ac.uk/~ralonso/PoHEFT.pdf)

[Falkowski, full SMEFT lecture notes and distinct canonical-dimension counting](https://scoap3-prod-backend.s3.cern.ch/media/files/79196/10.1140/epjc/s10052-023-11821-3_a.pdf)
