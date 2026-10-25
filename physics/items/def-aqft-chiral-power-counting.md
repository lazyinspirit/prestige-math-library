---
id: def-aqft-chiral-power-counting
kind: definition
title: Finite electroweak HEFT chiral and loop counting
status: "published"
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

Use the HEFT fields $U$, $h$, gauge curvatures, fermions and smooth coefficient functions of $h/v$ from the preceding HEFT model. Since $h/v\in(-1,\infty)$ there, a coefficient function is a specified smooth map $F:(-1,\infty)\to\mathbb C$, with conjugation conditions chosen so the retained density is real. The canonical engineering dimension $\Delta$ is the mass weight of the local polynomial in fields and derivatives; it is the weight supplied by the finite-jet operator definition. The **chiral/loop count** is separate data and is not inferred from $\Delta$.

Adopt the electroweak chiral loop convention of Buchalla, Catà and Krause. For this count the **leading-order (LO) density** consists only of the preceding model's two-derivative scalar density, the shared gauge and fermion kinetic terms with no $h$-dependent prefactors, and derivative-free Yukawa interactions
$$-v\left(\bar q_LUe_1\mathcal Y_u(h/v)u_R+\bar q_LUe_2\mathcal Y_d(h/v)d_R+\bar\ell_LUe_2\mathcal Y_e(h/v)e_R+\mathrm{h.c.}\right),$$
where $e_1=(1,0)^T$, $e_2=(0,1)^T$, and each supplied $\mathcal Y_f:(-1,\infty)\to\operatorname{Mat}_{3\times3}(\mathbb C)$ is smooth and dimensionless and acts on family indices. The constant matrices and their $h$-derivatives are arbitrary model parameters. All other retained interactions are higher-order insertions and are excluded from the LO-only graphs to which the displayed degree formula applies. This does not remove those interactions from HEFT; the six NLO families below retain them at their stated order. Vertices mean finite Taylor coefficients at the reference configuration $h=0$, $U=I$ in the local Goldstone chart. Each finite graph uses only finitely many derivatives of the smooth coefficient functions; no equality of a smooth function with its infinite Taylor series is assumed. Quadratic kinetic pieces assigned to propagators are not also counted as interaction vertices. Boson and fermion propagators have the source ultraviolet momentum weights $p^{-2}$ and $p^{-1}$, respectively; ghosts are omitted in this source counting convention.

A **finite connected diagram for this count** is a finite multigraph with nonempty vertex set $\mathcal V_\Gamma$, internal edge set $\mathcal E_\Gamma$, and finitely many labelled external half-edges attached to its vertices, such that the graph on $\mathcal V_\Gamma$ is connected. Parallel internal edges and loops are allowed; each internal edge joins compatible field half-edges. Every vertex comes from this LO density, retaining its derivative and coupling content, and has one of the source-convention labels below with the indicated field half-edges. A label by valence alone does not admit a higher-order interaction with the same half-edges. Define its loop number by
$$L:=|\mathcal E_\Gamma|-|\mathcal V_\Gamma|+1\in\mathbb N_0.$$
Thus $L$ is the first Betti number of the connected graph. The external half-edges are counted by $F_L$ left-handed fermions and their conjugates, $F_R$ right-handed fermions and their conjugates, $V$ gauge bosons, $B$ Goldstone bosons, and $H_{\mathrm{ext}}$ scalar singlets. The source-convention vertex counts are nonnegative integers: $\nu_k$ counts Yukawa vertices with two opposite-chirality fermion half-edges and $k$ Goldstone half-edges but no singlet-$h$ half-edge; $m_l$ counts vertices from the LO covariant scalar kinetic term with one gauge, $l$ Goldstone and any nonnegative number of singlet-$h$ half-edges, aggregated over that singlet number; $r_s$ counts vertices from that term with two gauge, $s$ Goldstone and any nonnegative number of singlet-$h$ half-edges, again aggregated over that number; $x$ and $u$ count, respectively, vertices with four and three gauge half-edges; $z_L,z_R$ count vertices with one gauge half-edge and two left- or right-handed fermion half-edges; $\tau_{tb}$ counts singlet-dependent Yukawa vertices with two opposite-chirality fermion half-edges, $t$ Goldstone half-edges, and $b\geq1$ singlet-$h$ half-edges; and $\omega_q$ counts scalar-potential vertices with $q\geq2$ singlet-$h$ half-edges. Here $k,l,s,t\in\mathbb N_0$, $b\in\mathbb N$, and $q\in\mathbb N$ with $q\geq2$. The leading two-derivative scalar sector also has vertices with $2j$ Goldstone and $a$ singlet half-edges, $j,a\in\mathbb N_0$ and $(j,a)\ne(0,0)$; their counts do not enter the degree formula. The ungauged scalar kinetic vertices have two derivatives, the $m_l$ and triple-gauge vertices have one, and the $r_s$, quartic-gauge, fermion-gauge, Yukawa and potential vertices have none. Singlet decorations of $m_l$ and $r_s$, such as a two-gauge-one-$h$ vertex from $F_C$, change neither that derivative count nor their single or double gauge-coupling factor; they add no subtraction beyond $m$ or $2r$. Vertices from nonconstant $K$ have two derivatives and are included in the scalar kinetic class. Set
$$\nu=\sum_k\nu_k+\sum_{t,b}\tau_{tb},\qquad m=\sum_lm_l,\qquad r=\sum_sr_s,\qquad z=z_L+z_R,\qquad \omega=\sum_q\omega_q.$$
For these LO-only graphs the source chiral degree of the external-momentum factor is
$$d_\chi=2L+2-\frac{F_L+F_R}{2}-V-\nu-m-2r-2x-u-z-2\omega.$$
Here $p$ denotes the common external-momentum scale in the source power-counting expression, and $d_\chi$ is the exponent of its $p^{d_\chi}$ factor; the condition $d_\chi\geq0$ is the source-defined formal counterterm-counting filter. It is a superficial momentum count after writing external gauge legs as field-strength factors; it does not assert that the diagram or its divergence is nonzero. Applying it to a graph containing an NLO or other higher-order vertex requires additional insertion-order data and is not defined by these valence counts.
The factors $(\varphi/v)^B$ and $(h/v)^{H_{\mathrm{ext}}}$ contain the external Goldstone and singlet fields and do not increase $d_\chi$. Vertices $\varphi^{2j}h^a$ from the leading two-derivative scalar sector likewise carry no additional term in this degree formula. Here $\varphi=(\varphi^1,\varphi^2,\varphi^3)$ is the local Goldstone coordinate in the chart $\|\varphi\|<\pi v$ defined by $U=\exp(2i\varphi^aT_a/v)$, with $T_a=\sigma^a/2$ as in the adopted HEFT model. The chiral cutoff and loop cutoff are supplied independently; this contract retains the LO density and its one-loop next-to-leading counterterm classes, selected by $L=1$ and $d_\chi\geq0$, with loop cutoff $L_{\max}=1$. The counterterm filter is not a restriction on which tree vertices of the LO density are retained.

The source's six schematic next-to-leading structural families are $UhD^4$, $X^2Uh$, $XUhD^2$, $\psi^2UhD$, $\psi^2UhD^2$, and $\psi^4Uh$. Here $Uh$ denotes an arbitrary finite product of $U,U^\dagger,h$ factors, $X_{\mu\nu}$ is a gauge-curvature factor, $D$ is a covariant-derivative factor, and $\psi$ is a spinor-field factor; superscripts count the indicated factors. Each displayed monomial is understood with its Lorentz and gauge indices contracted to an invariant scalar and may be multiplied by its own smooth function of $h/v$. These are six structural families, not six finite lists of operators; the smooth-function dependence is not Taylor-truncated here. No class list or operator-level coefficient relation from a finite canonical-dimension SMEFT basis is identified with this full HEFT list.

The scale $\Lambda_{\mathrm{HEFT}}>0$ controlling the derivative expansion and the symmetry-breaking scale $v>0$ are separate supplied mass scales. A condition such as external momentum small compared with $\Lambda_{\mathrm{HEFT}}$ is an applicability assumption only. Chiral order and loop order are formal organizing labels, not convergence claims or numerical bounds on omitted terms.

## Definition references

[[post-aqft-heft-model|Nonlinear Goldstone field, scalar singlet and smooth HEFT functions]]

[[def-aqft-local-operator-and-dimension|Canonical engineering dimension and local fields]]

[Buchalla, Catà and Krause, full HEFT loop-counting derivation](https://arxiv.org/pdf/1307.5017)

[Alonso, full HEFT geometry lecture notes](https://www.ippp.dur.ac.uk/~ralonso/PoHEFT.pdf)

[Falkowski, full SMEFT lecture notes and distinct canonical-dimension counting](https://scoap3-prod-backend.s3.cern.ch/media/files/79196/10.1140/epjc/s10052-023-11821-3_a.pdf)
