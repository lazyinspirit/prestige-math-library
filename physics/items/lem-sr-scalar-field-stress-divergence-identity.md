---
id: lem-sr-scalar-field-stress-divergence-identity
kind: lemma
title: "Divergence identity for the scalar-field stress-energy tensor"
status: published
origin: pipeline
domain: mathematics
deps: [lem-sr-scalar-field-hilbert-stress-energy, lem-sr-scalar-field-euler-lagrange, def-sr-stress-energy-tensor-and-force-density, def-directional-and-partial-derivatives, thm-young-mixed-partial-theorem, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, def-lorentz-form-and-inertia, def-sr-affine-minkowski-model, def-ck-tensor-field-on-minkowski-space]
dependency_roles:
  lem-sr-scalar-field-hilbert-stress-energy: mathematical-premise
  lem-sr-scalar-field-euler-lagrange: mathematical-premise
  def-sr-stress-energy-tensor-and-force-density: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  thm-young-mixed-partial-theorem: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  def-ck-tensor-field-on-minkowski-space: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "D. Tong, General Relativity, University of Cambridge Part III Mathematical Tripos (Michaelmas Term 2019); c = 1 formulas converted to x^0 = c t; 4.5.1-4.5.5 printed pp. 181-191: scalar-field action (4.42)-(4.43) and equation of motion, Hilbert energy-momentum tensor (4.46), diffeomorphism invariance and conservation (4.50), flat-space Noether form, scalar tensor (4.51), Maxwell tensor (4.52), perfect fluid (4.53) with conservation equations (4.54)-(4.55), and the flat-space conserved-charge box argument of 4.5.5"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 1 printed pp. 28-30 (energy-momentum tensor, dust T^{mu nu}=rho U^mu U^nu (1.106), perfect fluid (1.107)-(1.110), scalar and Maxwell tensors (1.111)-(1.112), conservation (1.113) with the remark that the proof follows from each matter model's equations of motion) and Chapter 5 printed pp. 138-139 (on-shell conservation from diffeomorphism invariance with compact-support variations, (5.34)-(5.38))"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t; Chapter 9 pp. 179-197: 9.1 pp. 179-182 (current vector, flux, charge conservation), 9.2 pp. 183-191 (stress-energy tensor, conservation and flux, symmetry, dust, rank-2 transformation law, pressure, perfect fluid, worked examples, energy conditions), 9.3 pp. 192-197 (Gauss's theorem, integral conservation laws, the energy-momentum vector, angular momentum); the printed 9.2.8 dominant energy condition p. 191 has the defective |P| > rho and is not used"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
---

## Statement

In the setting of [[lem-sr-scalar-field-hilbert-stress-energy]], with $\varphi$ smooth and $T$ the Hilbert stress-energy tensor of the scalar-field action, $$\partial_aT^{ab}=K\big(\Box\varphi-V'(\varphi)\big)\partial^b\varphi\qquad\text{on }\Omega,$$ where $\partial^b=\eta^{bc}\partial_c$ and $\Box\varphi=\eta^{ab}\partial_a\partial_b\varphi$. In particular every solution of the scalar-field equation $\Box\varphi=V\prime(\varphi)$ has conserved tensor, $\partial_aT^{ab}=0$. Conversely conservation implies the scalar-field equation at every point where $d\varphi\ne0$, and hence throughout an open set on which $d\varphi$ is nowhere zero. In full generality conservation is equivalent to the pointwise product condition $(\Box\varphi-V\prime(\varphi))d\varphi=0$; it need not imply the scalar equation where $d\varphi=0$. Off shell the balance holds with the four-force density $f^b=K(\Box\varphi-V'(\varphi))\partial^b\varphi$. No choice principle is used.

## Facts & Assumptions

**Given:** The setting of [[lem-sr-scalar-field-hilbert-stress-energy]]: the affine Minkowski model with inertial chart $x$, constant metric components $\eta_{ab}=\eta^{ab}=\operatorname{diag}(-1,1,1,1)$, smooth $V:\mathbb R\to\mathbb R$ and smooth $\varphi:\Omega\to\mathbb R$ on an open $\Omega$ ([[def-sr-affine-minkowski-model]], [[def-lorentz-form-and-inertia]], [[def-ck-tensor-field-on-minkowski-space]]), and the field $$T^{ab}=K\big[\partial^a\varphi\partial^b\varphi-\eta^{ab}\big(\tfrac12\partial_d\varphi\partial^d\varphi+V(\varphi)\big)\big]$$ with $\partial^a\varphi=\eta^{ab}\partial_b\varphi$ and $\Box\varphi=\eta^{ab}\partial_a\partial_b\varphi$. The force density of a $C^1$ symmetric field is $f^b=\partial_aT^{ab}$ ([[def-sr-stress-energy-tensor-and-force-density]]), and only the coordinate partial derivatives $\partial_a$ of [[def-directional-and-partial-derivatives]] are used.

[F1] The Hilbert tensor of the scalar-field density is the field displayed in the Given, and it is smooth and symmetric. ([[lem-sr-scalar-field-hilbert-stress-energy]])

[F2] Product, sum and constant-multiple rules for coordinate partial derivatives: $\partial_a(fg)=(\partial_af)g+f(\partial_ag)$, and $\partial_a(\eta^{ab}\Phi)=\eta^{ab}\partial_a\Phi$ for constant $\eta^{ab}$. ([[thm-algebra-of-derivatives]], [[def-directional-and-partial-derivatives]])

[F3] Young's theorem: if the first partials of a function defined on a disk about a point exist there and are totally differentiable at the point, then the two mixed second partials at the point agree. In particular, for a smooth function all mixed second partials commute at every point. ([[thm-young-mixed-partial-theorem]])

[F4] The scalar-field equation of this model is $\Box\varphi=V'(\varphi)$ on $\Omega$. ([[lem-sr-scalar-field-euler-lagrange]])

## Proof

**Proof technique:** direct.

1.1 Differentiating the Hilbert tensor. By [F1] and [F2], using that the components $\eta^{ab}$ are constant, $$\partial_aT^{ab}=K\big[\partial_a\big(\partial^a\varphi\,\partial^b\varphi\big)-\partial^b\big(\tfrac12\partial_d\varphi\partial^d\varphi+V(\varphi)\big)\big]=K\big[(\Box\varphi)\partial^b\varphi+\partial^a\varphi\,\partial_a\partial^b\varphi-\partial^b\big(\tfrac12\partial_d\varphi\partial^d\varphi+V(\varphi)\big)\big].$$ [F1, F2]

2.1 Cancellation of the second-order terms. For a smooth $\varphi$ the two second-order terms of step 1.1 coincide: the first is $X^b:=\partial^a\varphi\,\partial_a\partial^b\varphi=\eta^{ad}\eta^{bc}\partial_d\varphi\,\partial_a\partial_c\varphi$, while expanding the derivative of the kinetic term by [F2] gives $\partial^b\big(\tfrac12\partial_d\varphi\partial^d\varphi\big)=\eta^{de}\partial_d\varphi\,\partial^b\partial_e\varphi=:Y^b$ and adding $V'(\varphi)\partial^b\varphi$ for the potential term; after substituting $\partial^b\partial_e\varphi=\eta^{bc}\partial_c\partial_e\varphi$ and relabelling the dummy indices, both $X^b$ and $Y^b$ equal the same contraction $\eta^{ad}\eta^{bc}\partial_a\varphi\,\partial_c\partial_d\varphi$, the identification of the mixed second partials $\partial_a\partial_c\varphi=\partial_c\partial_a\varphi$ being [F3]. Hence the second-order terms cancel and $\partial_aT^{ab}=K(\Box\varphi-V'(\varphi))\partial^b\varphi$ on $\Omega$. [F2, F3, step 1.1]

3.1 Consequences. If $\Box\varphi=V'(\varphi)$ then the right-hand side vanishes, so $T$ is conserved; conversely if $\partial_aT^{ab}=0$ for all $b$ then $(\Box\varphi-V'(\varphi))\partial^b\varphi=0$ for all $b$, and since $\partial^b\varphi=\eta^{bc}\partial_c\varphi$ with $\eta^{bc}$ invertible this is equivalent to $(\Box\varphi-V'(\varphi))\partial_c\varphi=0$ for every $c$, i.e. to the vanishing of the pointwise product of the scalar $\Box\varphi-V'(\varphi)$ with the covector $d\varphi$; at a point where some $\partial_c\varphi\ne0$ this forces $\Box\varphi=V'(\varphi)$ there, hence on any open set on which $d\varphi$ is nowhere zero. Off shell the identity is a balance with the four-force density $f^b=K(\Box\varphi-V'(\varphi))\partial^b\varphi$. [F4, step 2.1]

4.1 The divergence identity and all its consequences are proved in steps 2.1 and 3.1; the identity holds for every smooth $\varphi$, the on-shell statement is the specialization of [F4], the converse is stated with its exact $d\varphi=0$ caveat, and no choice principle is used. [step 2.1, step 3.1] ∎
