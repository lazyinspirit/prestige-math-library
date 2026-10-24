---
id: post-aqft-heft-model
kind: postulate
title: Nonlinear electroweak Goldstone and scalar-singlet EFT data
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 5
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
deps:
  - post-aqft-smeft-model
dependency_roles:
  post-aqft-smeft-model: formulation-prerequisite
axiom_base: "ZF + AC_omega inherited through the shared right-principal gauge data."
physical_scope: "An adopted nonlinear electroweak EFT field realization with a group-valued Goldstone field and an independent scalar singlet, sharing the stated Standard Model gauge and matter data. It supplies no path-integral measure, ultraviolet completion, continuum construction, measured coefficient, or claim that the postulate describes nature."
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Gerhard Buchalla, Oscar Catà and Claudius Krause, Complete Electroweak Chiral Lagrangian with a Light Higgs at NLO"
      url: "https://arxiv.org/pdf/1307.5017"
      locator: "§2, printed pp. 2–3, equations (1)–(9): nonlinear Goldstone matrix, singlet h, transformation law and leading scalar Lagrangian; Appendix A, printed pp. 22–23, arbitrary functions of h/v."
    - title: "Rodrigo Alonso, A Primer on Higgs Effective Field Theory with Geometry"
      url: "https://www.ippp.dur.ac.uk/~ralonso/PoHEFT.pdf"
      locator: "§3.2, printed pp. 14–15, HEFT building blocks and U/h transformation roles; §4, printed pp. 15–17, the HEFT expansion and separate scale."
verification:
  precheck: n/a
---
## Postulate

Use the same four-dimensional Minkowski spacetime, direct-product global gauge group, gauge connection, fermion representations, family content, and the preceding model's exact baryon- and lepton-number selection rules on formal local interactions. No anomaly-free quantum-current claim is made. In particular, the hypercharge-one-half Higgs doublet of that model is replaced in this realization by three angular Goldstone coordinates and a real scalar singlet; this is a distinct adopted model interface, not a deduction that the two models have identical field spaces.

Let $J=(-v,\infty)$, where $v>0$ is the mass-one reference radius from the preceding model. A scalar field is a smooth map $h:M\to J$ and is invariant under the electroweak gauge group. The Goldstone field is a smooth map $U:M\to SU(2)$, with $SU(2)$ represented by its defining $2\times2$ unitary matrices of determinant one. For smooth gauge transformations $g_L:M\to SU(2)_L$ and $z:M\to U(1)_Y$, set
$$g_R(z)=\operatorname{diag}(z^3,z^{-3}),\qquad U(x)\longmapsto g_L(x)U(x)g_R(z(x))^{-1},\qquad h(x)\longmapsto h(x).$$
Thus the left factor is the linearly represented $SU(2)_L$ gauge action, the right factor is the embedded hypercharge action, and $h$ is a gauge singlet. For explicitness, take
$$\sigma^1=\begin{pmatrix}0&1\\1&0\end{pmatrix},\qquad \sigma^2=\begin{pmatrix}0&-i\\i&0\end{pmatrix},\qquad \sigma^3=\begin{pmatrix}1&0\\0&-1\end{pmatrix},\qquad T_a=\frac{\sigma^a}{2}.$$
The exponential chart
$$U(\pi)=\exp\!\left(\frac{2i\pi^aT_a}{v}\right),\qquad \pi\in\mathbb R^3,\quad \|\pi\|<\pi v,$$
is a smooth coordinate chart near the identity; $U$ itself is the globally valued group field and is not identified with one global exponential-coordinate chart.

Write $W_\mu=W_\mu^aT_a$ and use the local covariant derivative
$$D_\mu U=\partial_\mu U+i g W_\mu U-i g' B_\mu U T_3,$$
with dimensionless gauge couplings $g,g'$ and the same right-principal connection convention as the shared gauge data. The adopted two-derivative scalar density is
$$\mathcal L_{\mathrm{scalar}}^{(2)}=-\frac12K(h)\,\partial_\mu h\,\partial^\mu h-\frac{v^2}{4}F_C(h)\operatorname{Tr}\!\left((D_\mu U)^\dagger D^\mu U\right)-V(h),$$
where $K$ and $F_C$ are supplied smooth real dimensionless functions on $J$, $K(h)>0$ and $F_C(h)>0$ on the field range used, $K(0)=F_C(0)=1$, and $V$ is a supplied real smooth potential of mass dimension four with $V'(0)=0$. Higher local interactions may use smooth coefficient functions of $h/v$, the same gauge and matter fields, covariant derivatives, and curvature tensors, with B and L conserved. This statement adopts no finite derivative or chiral truncation; the separate power-counting definition specifies those cutoffs.

The assigned mass dimensions are $[h]=[\pi^a]=[v]=[\Lambda_{\mathrm{HEFT}}]=[\Lambda_{\mathrm{op}}]=1$, $[U]=[g]=[g']=[K]=[F_C]=0$, and $[W_\mu]=[B_\mu]=1$; the potential $V$ has dimension four, $\partial_\mu$ has dimension one, and any separately supplied regulator cutoff has dimension one. Thus the exponent defining $U(\pi)$ is dimensionless and every term in $\mathcal L_{\mathrm{scalar}}^{(2)}$ has dimension four. The independent HEFT cutoff $\Lambda_{\mathrm{HEFT}}>0$, the radius $v$, the SMEFT coefficient scale $\Lambda_{\mathrm{op}}$, and any finite-regulator cutoff are separate data; no equality or hierarchy among them is imposed here. Its low-energy use assumes external momenta small compared with $\Lambda_{\mathrm{HEFT}}$; this is an applicability condition and supplies no numerical remainder bound. It adopts no functional measure or regulator and implies no path integral, ultraviolet completion, infinite-volume limit, or empirical realization.

## Postulate references

[[post-aqft-smeft-model|Shared gauge group, non-scalar fields, units and global symmetries]]

[Buchalla, Catà and Krause, full electroweak chiral EFT paper](https://arxiv.org/pdf/1307.5017)

[Alonso, full HEFT geometry lecture notes](https://www.ippp.dur.ac.uk/~ralonso/PoHEFT.pdf)
