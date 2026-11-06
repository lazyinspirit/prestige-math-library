---
id: post-rns-flat-worldsheet-model
kind: postulate
title: RNS Flat Worldsheet Model
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 2
domain: physics
library: physics
deps:
  - def-st-flat-bosonic-string-model
  - def-st-string-tension-alpha-prime
dependency_roles:
  def-st-flat-bosonic-string-model: formulation-prerequisite
  def-st-string-tension-alpha-prime: formulation-prerequisite
physical_scope: "The gauge-fixed free RNS matter model on a flat Lorentzian worldsheet and flat Minkowski target; no global spin-structure sum, ghost measure, interacting background, spacetime supersymmetry theorem, or path-integral existence is asserted."
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Timo Weigand, Introduction to String Theory, Winter term 2011/12"
      url: "https://www.thphys.uni-heidelberg.de/courses/weigand/Strings11-12.pdf"
      locator: "Chapter 6.1, printed pp. 128–131, equations (6.7)–(6.22), including the adopted supercurrent convention and residual constraints."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  sources_checked:
    date: 2026-11-05
    scope: Recorded source, statement and proof-status review for this postulate in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6.1-sol; native-step5-substantive-review; delegated by /root under owner authorization
---

## Postulate

Adopt the flat-target RNS model on a Lorentzian two-dimensional worldsheet with dimensionless coordinates and metric of signature $(-,+)$. Let $D\in\mathbb Z_{>0}$, set $M=\mathbb R^{1,D-1}$ with $\eta=\operatorname{diag}(-,+,\ldots,+)$, and represent a local coordinate patch by a bounded open rectangle $\Omega\subset\mathbb R^2$ with coordinates $(\tau,\sigma)$ and measure $d^2\sigma$. Fix a finite-dimensional unital real Grassmann algebra $\Lambda$ with odd subspace $\Lambda_{\bar1}$. The bosonic field is a map $X:\overline\Omega\to M$ of class $C^2$, with components $X^\mu$ of length dimension; the fermionic field is a map $\psi:\overline\Omega\to\Lambda_{\bar1}\otimes\mathbb R^{1,D-1}\otimes\mathbb R^2$ of class $C^1$, with dimensionless components $\psi^\mu$. The factor $\mathbb R^2$ is the real worldsheet Majorana representation fixed below. Grassmann-valued integrals are taken coefficientwise. For $p\in\Omega$, $dX_p:\mathbb R^2\to M$ denotes the derivative of $X$ and $(X^*\eta)_p(u,v)=\eta(dX_pu,dX_pv)$ for $u,v\in\mathbb R^2$ is its induced bilinear form. The adopted RNS field domain imposes neither rank two on $dX_p$ nor nondegeneracy of $(X^*\eta)_p$. Set $\alpha'=1/(2\pi T)>0$ with dimension $L^2$, where $T$ is the string tension of dimension $L^{-2}$ in units $\hbar=c=1$; with the stated coordinate and field dimensions, the action is dimensionless. In superconformal gauge adopt

$$S=-\frac1{8\pi}\int_\Omega d^2\sigma\left[\frac2{\alpha'}\partial_aX^\mu\partial^aX_\mu+2i\bar\psi^\mu\rho^a\partial_a\psi_\mu\right],$$

with $\{\rho^a,\rho^b\}=2\eta^{ab}I$ and the real representation $\rho^0=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$, $\rho^1=\begin{pmatrix}0&1\\1&0\end{pmatrix}$, $\bar\psi=\psi^T\rho^0$. Write $\psi^\mu=(\psi_+^\mu,\psi_-^\mu)^T$ in this ordered representation basis. Define $x^\pm=\tau\pm\sigma$ and $\partial_\pm=\frac12(\partial_\tau\pm\partial_\sigma)$. Adopt the residual stress and supercurrent conventions
$$T_{++}=-\frac1{\alpha'}\partial_+X\cdot\partial_+X-\frac i2\psi_+\cdot\partial_+\psi_+,\qquad T_{--}=-\frac1{\alpha'}\partial_-X\cdot\partial_-X-\frac i2\psi_-\cdot\partial_-\psi_-,\qquad J_\pm=-\frac12\sqrt{\frac2{\alpha'}}\,\psi_\pm\cdot\partial_\pm X.$$
The worldsheet metric and gravitino equations are retained as residual constraints $T_{++}=T_{--}=J_+=J_-=0$. These formulas are adopted gauge-fixed model data matched to Weigand, Chapter 6.1. Their Noether derivation from variations of the parent metric/gravitino action is not claimed here. This physical-model postulate asserts neither a spacetime supersymmetry theorem nor a global functional measure.

## Postulate references

[Timo Weigand, *Introduction to String Theory*, Chapter 6.1](https://www.thphys.uni-heidelberg.de/courses/weigand/Strings11-12.pdf)

## Remarks

The bosonic normalization uses the $\alpha'$ and tension convention in [[def-st-string-tension-alpha-prime]], but the bosonic supplier's $D\ge3$ immersive-map branch is not imported into this gauge-fixed RNS field domain. The dimensionless $\psi$ convention here matches the dimensionless worldsheet coordinates: if source coordinates $\xi$ have length dimension and $\psi_\xi$ has mass dimension $1/2$, then for a chosen coordinate length unit $\ell_0>0$ with $[\ell_0]=L$, the rescaling $\sigma=\xi/\ell_0$ and $\psi=\ell_0^{1/2}\psi_\xi$ gives the dimensionless coefficient used above and preserves the displayed kinetic normalization. The Euler–Lagrange equations are derived conditionally from this action in [[pthm-rns-flat-action-variation]]. The stress and supercurrent formulas are adopted source-backed conventions; their parent metric/gravitino Noether derivation is not attributed to the gauge-fixed action here. The local Euclidean OPE normalization used by the quantum calculations is fixed separately in [[def-rns-local-operator-algebra-conventions]]. This is a classical local field domain; global Euclidean spinor bundles and sectors are supplied separately, and quantum OPE items define their formal operator fields independently.
