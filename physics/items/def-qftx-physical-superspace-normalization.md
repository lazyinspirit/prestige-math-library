---
id: def-qftx-physical-superspace-normalization
kind: definition
title: Physical superspace action brackets and canonical chiral components
status: draft
origin: session
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-susy-n1-superspace-and-actions
dependency_level: 3
deps:
  - def-qftx-superspace-grassmann-algebra
  - def-qftx-n1-chiral-superfield
dependency_roles:
  def-qftx-superspace-grassmann-algebra: mathematical-premise
  def-qftx-n1-chiral-superfield: mathematical-premise
axiom_base: ZF; fixed finite coefficient conventions add no choice principle.
proof_strategy: not-applicable
physical_scope: Classical physical action and component conventions on the supplied flat N=1 superspace; no quantum change of variables, measure identity, regulator or empirical assertion.
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Stephen P. Martin, A Supersymmetry Primer, version 7
      url: https://arxiv.org/pdf/hep-ph/9709356v7
      locator: §§4.4, 4.7 and 4.9; the explicit conversion from the local ordered coefficient-extraction algebra is reconstructed here and is not an identification of raw source measures by notation alone.
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Definition

Use the smooth finite Grassmann-valued chiral fields, conjugate-linear anti-automorphism, left derivatives and ordered coefficient-extraction integrals of Four-dimensional $N=1$ superspace Grassmann algebra and Berezin integration and Four-dimensional $N=1$ chiral superfield on flat superspace. Write $I_D(U)$ for the coefficient of $\theta^1\theta^2\bar\theta^{\dot1}\bar\theta^{\dot2}$ and $I_F(Y)$ for the coefficient of $\theta^1\theta^2$ in a chiral field. These raw mathematical integrals are unchanged. Define the physical action brackets by

$$[U]_D:=-\frac14 I_D(U),\qquad [Y]_F:=\frac12 I_F(Y).$$

A Hermitian conjugate in a physical F action means the conjugate of the extracted coefficient, added once. It does not mean replacing that operation by an unadjusted raw ordered antichiral integral. Physical chiral component names are fixed by

$$\Phi(y,\theta)=\phi(y)+\sqrt2\theta^\alpha\psi_\alpha(y)+2\theta^1\theta^2F(y),\qquad y=x+i\theta\sigma\bar\theta.$$

Thus the earlier mathematical components satisfy $\psi_{\mathrm{raw},\alpha}=\sqrt2\psi_\alpha$ and $F_{\mathrm{raw}}=2F$, while $\phi$ is unchanged. A component variation means coefficient extraction followed by this fixed conversion; it is not a rescaling of an integrated quantum field. Dimensions remain $[\phi]=1$, $[\psi]=3/2$, $[F]=2$.

The anti-automorphism gives $(\theta^1\theta^2F_{\mathrm{raw}})^*=-\bar\theta^{\dot1}\bar\theta^{\dot2}\bar F_{\mathrm{raw}}$. Consequently $I_D(\Phi^*\Phi)=-|F_{\mathrm{raw}}|^2$ in the pure auxiliary case, so the physical bracket gives $|F|^2$. The scalar term of the raw D integral is $4\eta^{\mu\nu}\partial_\mu\bar\phi\partial_\nu\phi$ after compact-support integration by parts; the physical bracket gives $-\eta^{\mu\nu}\partial_\mu\bar\phi\partial_\nu\phi$. These identities specify why the raw and physical component notations cannot be identified. Physical component potentials and coupling coefficients use the physical names above.

At fixed chiral coordinates define $P_{\mathrm{raw}}=\partial^L_{\bar\theta^{\dot2}}\partial^L_{\bar\theta^{\dot1}}|_{\bar\theta=0}=\bar D_{\dot2}\bar D_{\dot1}$, identifying the resulting barred-independent expression with its chiral superfield. With $\epsilon_{12}=1$ and inverse $\epsilon^{12}=-1$, one has $\bar D^{\dot\alpha}\bar D_{\dot\alpha}=-2P_{\mathrm{raw}}$ and $\bar D_{\dot\alpha}\bar D^{\dot\alpha}=2P_{\mathrm{raw}}$. For an even smooth superfield $U$ whose finitely many coefficient functions are compactly supported on $\mathbb R^4$, the physical D-to-F transfer is the action identity

$$\int_{\mathbb R^4}d^4x\,[U]_D=\int_{\mathbb R^4}d^4x\,[P_{\mathrm{phys}}U]_F,\qquad P_{\mathrm{phys}}=-\frac12P_{\mathrm{raw}}=\frac14\bar D^{\dot\alpha}\bar D_{\dot\alpha}=-\frac14\bar D_{\dot\alpha}\bar D^{\dot\alpha}.$$

The order of contracted barred derivatives is therefore always part of a one-quarter projection formula. Coefficient extraction after the finite nilpotent coordinate translation gives $[U]_D-[P_{\mathrm{phys}}U]_F=\partial_\mu J_U^\mu$, where $J_U$ is a finite linear combination of derivatives of the coefficient functions of $U$. Thus the densities agree modulo a spacetime divergence, not pointwise. Compact support makes its integral zero, coefficientwise in the finite coefficient algebra. More generally the same action identity holds when both densities are absolutely integrable and this current has vanishing boundary flux, meaning $\lim_{R\to\infty}\int_{\partial[-R,R]^4}J_U^\mu n_\mu\,dS=0$ coefficientwise, with the Euclidean outward normal and surface measure. No boundary cancellation is asserted without such a hypothesis.
## Definition references

[[def-qftx-superspace-grassmann-algebra]]

[[def-qftx-n1-chiral-superfield]]

