---
id: ex-aqft-smeft-heft-observable-map
kind: example
title: Tree-level scalar normalization and the charged-vector coupling
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 8
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
proof_strategy: direct
deps:
  - pthm-aqft-smeft-as-restricted-heft-branch
  - def-aqft-warsaw-basis-contract
  - def-aqft-chiral-power-counting
  - post-aqft-smeft-model
  - def-axiom-of-choice
dependency_roles:
  pthm-aqft-smeft-as-restricted-heft-branch: physical-result
  def-aqft-warsaw-basis-contract: formulation-prerequisite
  def-aqft-chiral-power-counting: formulation-prerequisite
  post-aqft-smeft-model: physical-assumption
  def-axiom-of-choice: mathematical-premise
axiom_base: "ZF + AC, inherited through the exact selected reductive/Reynolds mathematical premise chain for the finite invariant-operator contract; this finite calculation uses no choice principle."
physical_scope: "A conditional tree-level calculation for the selected SMEFT coefficient point with only Q_HBox nonzero at dimension six. It derives a local scalar kinetic coefficient and charged-vector coupling in the nonzero-doublet patch; it is not a measurement, general HEFT result, continuum statement, or numerical uncertainty estimate."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "B. Grzadkowski, M. Iskrzynski, M. Misiak and J. Rosiek, Dimension-Six Terms in the Standard Model Lagrangian"
      url: "https://arxiv.org/pdf/1008.4884"
      locator: "§5, printed pp. 8–9, definition of Q_HBox and the scalar-sector representatives; §2, printed pp. 2–3, Higgs and gauge conventions."
    - title: "Adam Falkowski, Lectures on SMEFT"
      url: "https://scoap3-prod-backend.s3.cern.ch/media/files/79196/10.1140/epjc/s10052-023-11821-3_a.pdf"
      locator: "§4, printed pp. 15–20, basis changes and dimension-six Higgs interactions; used only as context for the stated finite coefficient choice."
    - title: "Rodrigo Alonso, A Primer on Higgs Effective Field Theory with Geometry"
      url: "https://www.ippp.dur.ac.uk/~ralonso/PoHEFT.pdf"
      locator: "§3.2, printed pp. 14–15, nonlinear scalar and Goldstone coordinates; the kinetic and coupling calculation below is derived directly."
verification:
  precheck: pending
---
## Example

Use the selected mostly-plus, four-dimensional electroweak model with $v>0$, dimensionless gauge coupling $g>0$, and coefficient scale $\Lambda_{\mathrm{op}}>0$. Choose a real dimensionless coefficient $C_{H\Box}$, set all other dimension-six coefficients to zero, and retain
$$Q_{H\Box}=(H^\dagger H)\Box(H^\dagger H),\qquad \Box=\eta^{\mu\nu}\partial_\mu\partial_\nu,$$
with Lagrangian contribution $C_{H\Box}Q_{H\Box}/\Lambda_{\mathrm{op}}^2$. On the nonzero-doublet patch use the local unitary-gauge field configuration $U=I$ and $H=(0,(v+h)/\sqrt2)^T$. Impose compact support or boundary conditions that make the surface term in the action vanish.

The quadratic scalar coefficient after integration by parts is
$$K(h)=1+\frac{2C_{H\Box}(v+h)^2}{\Lambda_{\mathrm{op}}^2}.$$
If
$$K(0)=1+\frac{2C_{H\Box}v^2}{\Lambda_{\mathrm{op}}^2}>0,$$
then $K$ is positive on some open interval about $h=0$. In that interval define the locally canonical radial coordinate $\widehat h(h)=\int_0^h\sqrt{K(s)}\,ds$. Define $W_\mu^\pm=(W_\mu^1\mp iW_\mu^2)/\sqrt2$ and define $m_W^2(h)$ as the coefficient in the vector mass term $-m_W^2(h)W_\mu^+W^{-\mu}$. The charged-vector mass parameter and its dimensionless linear coupling in this coordinate are
$$m_W^2(h)=\frac{g^2(v+h)^2}{4},\qquad \kappa_W:=\left.\frac{v}{2m_W^2(0)}\frac{dm_W^2}{d\widehat h}\right|_{h=0}=\frac{1}{\sqrt{1+2C_{H\Box}v^2/\Lambda_{\mathrm{op}}^2}}.$$
These are conditional tree-level coefficient predictions of this selected local action. Interpret $h=0$ as a vacuum only when the supplied total scalar potential has the local minimum required by the SMEFT model; otherwise these are coefficients at the reference configuration. No measured value, coefficient fit, loop correction, discarded-order bound, or general HEFT relation is asserted.

## Example references

[[post-aqft-smeft-model|Mostly-plus metric, Higgs kinetic term and coefficient scale]]

[[def-aqft-warsaw-basis-contract|Warsaw representative and Wilson-coefficient convention]]

[[pthm-aqft-smeft-as-restricted-heft-branch|Nonzero-doublet radial and Goldstone field map]]

[[def-aqft-chiral-power-counting|Separate HEFT chiral and loop ordering]]

[[def-axiom-of-choice|Full Axiom of Choice inherited by the selected invariant chain]]

[Grzadkowski et al., full dimension-six operator article](https://arxiv.org/pdf/1008.4884)

[Falkowski, full Lectures on SMEFT](https://scoap3-prod-backend.s3.cern.ch/media/files/79196/10.1140/epjc/s10052-023-11821-3_a.pdf)

[Alonso, full HEFT geometry lecture notes](https://www.ippp.dur.ac.uk/~ralonso/PoHEFT.pdf)

## Facts & Assumptions

**Given:** The selected coefficient point, nonzero-doublet patch, compact-support action comparison and local positivity condition in the Example.

[F1] [[post-aqft-smeft-model]]: the spacetime metric is $\eta=\operatorname{diag}(-1,1,1,1)$, the Higgs kinetic term is $-(D_\mu H)^\dagger D^\mu H$, and $v$, $g$, and $\Lambda_{\mathrm{op}}$ have the units and meanings stated in the model.

[F2] [[def-aqft-warsaw-basis-contract]]: $Q_{H\Box}=(H^\dagger H)\Box(H^\dagger H)$ is a dimension-six representative and its coefficient is dimensionless in $C_{H\Box}Q_{H\Box}/\Lambda_{\mathrm{op}}^2$; the density is real for real $C_{H\Box}$.

[F3] [[pthm-aqft-smeft-as-restricted-heft-branch]]: on the patch $H=(v+h)Ue_2/\sqrt2$ with $h>-v$; this identifies the local radial coordinate but excludes $H=0$.

[F4] [[def-aqft-chiral-power-counting]]: canonical dimension and HEFT chiral/loop ordering are distinct formal countings, neither of which supplies a numerical remainder estimate.

[F5] [[post-aqft-smeft-model]]: if $v$ is interpreted as a vacuum radius, the supplied scalar-potential coefficients are assumed to make $H^\dagger H=v^2/2$ a local minimum; the model does not derive this parameter condition.

[A1] Only the displayed dimension-six coefficient is nonzero; all coefficient values are selected model parameters, not measurements.

[A2] Compact support or the stated boundary conditions make the integrated total divergence vanish.

[A3] $K(0)>0$; continuity of the displayed polynomial then gives an open interval around zero on which $K(h)>0$.

[A4] [[def-axiom-of-choice]]: the full Axiom of Choice is inherited from the exact selected reductive/Reynolds premise chain; it is not used in this finite calculation.

## Proof

**Proof technique:** Evaluate the selected operator in radial gauge, integrate by parts, and normalize the scalar coordinate locally at the vacuum.

**Given:** [F1]–[F4] and [A1]–[A4].

1.1 In the stated unitary-gauge configuration, $H^\dagger H=(v+h)^2/2$. Its d'Alembertian is $\Box(H^\dagger H)=\partial_\mu((v+h)\partial^\mu h)$. Therefore the selected operator is the product $(v+h)^2\partial_\mu h\partial^\mu h/2+(v+h)^3\Box h/2$ before integration by parts; equivalently, writing $s=H^\dagger H$, it is $s\Box s$. [given, F2, F3, algebra]

1.2 Integrating $s\Box s$ over spacetime and applying the divergence theorem to $\partial_\mu(s\partial^\mu s)$ gives $\int s\Box s=-\int\partial_\mu s\partial^\mu s$, since the boundary integral vanishes by [A2]. Here $\partial_\mu s=(v+h)\partial_\mu h$, so the action contribution is $-C_{H\Box}\int (v+h)^2\partial_\mu h\partial^\mu h/\Lambda_{\mathrm{op}}^2$. The sign uses the stated $\Box$ and mostly-plus contraction. [given, A2, step 1.1, algebra]

1.3 The renormalizable radial kinetic density is $-\tfrac12\partial_\mu h\partial^\mu h$. Adding the result of step 1.2 gives $-\tfrac12K(h)\partial_\mu h\partial^\mu h$ with $K(h)=1+2C_{H\Box}(v+h)^2/\Lambda_{\mathrm{op}}^2$. Since $C_{H\Box}$ is dimensionless and both $v+h$ and $\Lambda_{\mathrm{op}}$ have mass dimension one, $K$ is dimensionless. Under [A3], $K>0$ near zero. [given, F1, F2, A3, step 1.2, algebra]

1.4 With $U=I$, write $r=v+h$ and use $T_a=\sigma_a/2$. The upper component of the covariant derivative is $(D_\mu H)_1=ig r(W_\mu^1-iW_\mu^2)/(2\sqrt2)=ig rW_\mu^+/2$. Since $W^1,W^2$ are real, its norm squared is $g^2r^2W_\mu^-W^{+\mu}/4$. The Higgs kinetic term therefore contains $-g^2r^2W_\mu^+W^{-\mu}/4$. The chosen $Q_{H\Box}$ has no gauge field, so this coefficient is unchanged as a function of $h$; thus $m_W^2(h)=g^2(v+h)^2/4$ and $m_W^2(0)=g^2v^2/4$. [given, A1, F1, F2, step 1.1, algebra]

1.5 On an interval with $K>0$, $\widehat h'(h)=\sqrt{K(h)}>0$ and $\widehat h(0)=0$. For $h_1<h_2$, $\widehat h(h_2)-\widehat h(h_1)=\int_{h_1}^{h_2}\sqrt{K(s)}\,ds>0$, so $\widehat h$ is strictly increasing and maps a neighborhood of zero onto an interval with a continuous inverse. At every $h_0$ in this interval, the inverse difference quotient tends to $1/\widehat h'(h_0)$; hence its derivative is $1/\sqrt{K(\widehat h^{-1}(y))}$. This derivative is continuous, and induction in that identity makes the inverse smooth because $K$ and the square root are smooth where $K>0$. Also $\widehat h(h)/h\to\sqrt{K(0)}$ as $h\to0$. Hence the difference quotient in the new coordinate is
$$\lim_{h\to0}\frac{m_W^2(h)-m_W^2(0)}{\widehat h(h)-\widehat h(0)}=\frac{(dm_W^2/dh)|_0}{\widehat h'(0)}=\frac{g^2v/2}{\sqrt{K(0)}}.$$
Since $2m_W^2(0)/v=g^2v/2$, the defined coupling is $\kappa_W=1/\sqrt{K(0)}$, which yields the displayed expression. If this reference point is called a vacuum, the supplied potential must satisfy [F5]; otherwise the result is only a local expansion coefficient. It supplies no empirical measurement or numerical bound on discarded orders. [given, F4, F5, A1, A3, A4, step 1.3, step 1.4, algebra] ∎
