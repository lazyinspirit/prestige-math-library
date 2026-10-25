---
id: post-qftx-n2-pure-su2-ultraviolet-model
kind: postulate
title: Independent pure $N=2$ SU(2) ultraviolet vector-multiplet datum
status: "published"
origin: session
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-susy-moduli-and-dualities
dependency_level: 5
axiom_base: ZF + AC_omega inherited from the supplied gauge and superspace data.
deps:
- def-qftx-physical-superspace-normalization
- def-qftx-super-poincare-algebra-4d
- def-qftx-superspace-grassmann-algebra
- def-qftx-n1-chiral-superfield
- def-qftx-n1-vector-superfield
- post-qftx-nonabelian-yang-mills-model
dependency_roles:
  def-qftx-physical-superspace-normalization: formulation-prerequisite
  def-qftx-super-poincare-algebra-4d: formulation-prerequisite
  def-qftx-superspace-grassmann-algebra: formulation-prerequisite
  def-qftx-n1-chiral-superfield: formulation-prerequisite
  def-qftx-n1-vector-superfield: formulation-prerequisite
  post-qftx-nonabelian-yang-mills-model: formulation-prerequisite
physical_scope: Independently adopted classical pure rigid N=2 SU(2) ultraviolet vector-multiplet model, no microscopic matter hypermultiplets; no constructed quantum continuum or empirical assertion.
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
  - title: N. Seiberg and E. Witten, Electric-Magnetic Duality, Monopole Condensation, and Confinement in N=2 Supersymmetric Yang-Mills Theory
    url: https://arxiv.org/pdf/hep-th/9407087v1
    locator: '§§2.1–2.3, printed pp.4–7: vector/hyper distinction, pure no-quark SU(2), adjoint scalar normalization, and prepotential action; notation/overall coefficients explicitly adopted in local superspace convention.'
verification:
  precheck: pass
---

## Postulate

Adopt independently a rigid four-dimensional $\mathcal N=2$ pure Yang–Mills model on oriented and time-oriented $M=\mathbb R^{1,3}$, $\eta=\operatorname{diag}(-1,1,1,1)$, with increasing $x^0$ time orientation and natural units $c=\hbar=1$. The global group is $SU(2)$, with one supplied smooth right principal bundle $P\to M$ and smooth equivariant local trivializations. The connection and its curvature are $A$ and $F_A=dA+\tfrac12[A\wedge A]$, in the right-action convention of the Yang–Mills model supplier. Use anti-Hermitian $T_a=-i\sigma_a/2$ and $\kappa(X,Y)=-2\operatorname{tr}_{\mathbf2}(XY)$; let $\kappa_{\mathbb C}$ be its complex-bilinear extension and $\kappa_H(\bar X,Y)=\kappa_{\mathbb C}(\bar X,Y)$. Write $g=g_{\mathrm{YM}}>0$ for the supplied vector/connection normalization, so $A_\mu=-igB_\mu$ for its canonical Hermitian vector component $B_\mu$. Every microscopic prepotential exponential, curvature/component dictionary and $1/g^2$ action coefficient below uses this same fixed dimensionless coupling. Fix theta angle zero. A bundle sector means its smooth equivariant isomorphism class over $M$; only the supplied sector is used.

The microscopic matter-hypermultiplet index set is empty. The vector multiplet comprises the connection, one complex adjoint scalar $\phi$, and two adjoint left-Weyl fermions. In $\mathcal N=1$ packaging it is a real adjoint vector superfield $V$ and an adjoint chiral superfield $\Phi$, not a matter hypermultiplet. Use the supplied superspace derivatives, chirality, ordered Berezin measures and vector-supergauge convention, including

$$\mathcal C_{\alpha,R}=-\tfrac14\bar D^2(e^{-2gV_R}D_\alpha e^{2gV_R}),\qquad [X]_D=-\tfrac14 I_D(X),\qquad [Y]_F=\tfrac12 I_F(Y).$$

Here $\mathcal C_{\alpha,R}$ is the represented matrix curvature, not the abstract Lie-algebra curvature used in the action. With Hermitian $t_{a,R}=i\rho_{R*}(T_a)$, let $W_{\mathrm{can},\alpha}^a$ denote the canonically normalized component field-strength superfields, so $\mathcal C_{\alpha,R}=2g\,t_{a,R}W_{\mathrm{can},\alpha}^a$. Define the abstract connection-normalized curvature by

$$\mathcal W_{\mathrm{conn},\alpha}=gT_aW_{\mathrm{can},\alpha}^a,\qquad \rho_{R*}(\mathcal W_{\mathrm{conn},\alpha})=\frac{\mathcal C_{\alpha,R}}{2i}.$$

In the fundamental representation, $\kappa_{\mathbb C}=-2\operatorname{tr}_{\mathbf2}$ therefore gives $\kappa_{\mathbb C}(\mathcal W_{\mathrm{conn}}^\alpha,\mathcal W_{\mathrm{conn},\alpha})=\tfrac12\operatorname{tr}_{\mathbf2}(\mathcal C^\alpha\mathcal C_\alpha)$, with the same ordered spinor product on both sides. This is a classical representation/component normalization, not a quantum field-rescaling or threshold-matching theorem.

Adopt the connection-normalized microscopic action

$$S_{\mathrm{pure}}=\int_M d^4x\left\{\frac1{g^2}[\kappa_H(\bar\Phi,e^{2gV_{\mathrm{ad}}}\Phi)]_D+\left(\left[\frac1{4g^2}\kappa_{\mathbb C}(\mathcal W_{\mathrm{conn}}^\alpha,\mathcal W_{\mathrm{conn},\alpha})\right]_F+\mathrm{h.c.}\right)\right\}.$$

Here $I_D,I_F$ are the raw ordered mathematical integrals, and the physical action brackets and chiral components use Physical superspace action brackets and canonical chiral components. The Hermitian-conjugate operation applies only to the chiral F term; the D term is real. Equivalently, the fundamental matrix F integrand is $\operatorname{tr}_{\mathbf2}(\mathcal C^\alpha\mathcal C_\alpha)/(8g^2)$, plus its Hermitian conjugate. Its bosonic gauge density is fixed to $-\kappa(F_A\wedge *_\eta F_A)/(2g^2)$. There is no chiral superpotential, hypermultiplet, hypermultiplet mass, or FI parameter in this ultraviolet datum. The scalar is connection-normalized; its canonical version is $\phi_{\mathrm{can}}=\phi/g$. In the same local Berezin normalization the quadratic microscopic prepotential is $\mathcal F_{\mathrm{UV}}(\Phi)=i\kappa_{\mathbb C}(\Phi,\Phi)/(2g^2)$, with positive imaginary Hessian $\kappa/g^2$. The prepotential has mass dimension two. The dimensions are $[x]=-1$, $[\theta]=-1/2$, $[A]=[\phi]=1$, $[F_A]=2$, $[\mathcal W_{\mathrm{conn}}]=[\mathcal C]=3/2$, and $[g]=0$.

Eight real rigid supercharges, their $\mathcal N=2$ algebra and invariance of this adopted action are model premises, not a locally proved invariance theorem. Variations are smooth and compactly supported; actions are on relatively compact regions or where integrable. A small $\mathcal N=1$ adjoint-mass perturbation and the Seiberg–Witten solution are separate subsequent inputs. In particular an emergent infrared monopole hypermultiplet is not microscopic matter added to this pure model. This postulate defines classical ultraviolet field/action data; it constructs no quantum measure, regulator limit, interacting continuum theory, or empirical verification.

## Postulate references

[[def-qftx-physical-superspace-normalization]]

[Seiberg and Witten, §§2.1–2.3](https://arxiv.org/pdf/hep-th/9407087v1).

[[def-qftx-super-poincare-algebra-4d]]

[[def-qftx-superspace-grassmann-algebra]]

[[def-qftx-n1-chiral-superfield]]

[[def-qftx-n1-vector-superfield]]

[[post-qftx-nonabelian-yang-mills-model]]
