---
id: def-st-bosonic-bc-ghost-system
kind: definition
title: "Bosonic Bc Ghost System"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
dependency_level: 4
deps:
  - def-st-conformal-gauge-and-residual-symmetry
  - post-st-bosonic-polyakov-model
dependency_roles:
  def-st-conformal-gauge-and-residual-symmetry: formulation-prerequisite
  post-st-bosonic-polyakov-model: physical-assumption
physical_scope: "The conformal-gauge reparametrization ghost system of the tensile flat Polyakov model on its algebraic finite-particle domain; no BRST nilpotence or positivity is asserted here."
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "David Tong, Lectures on String Theory, arXiv:0908.0333v3, full 218-page lecture notes"
      url: "https://arxiv.org/pdf/0908.0333v3"
      locator: "§§5.1.2–5.2 (PDF file pp.119–124; printed pp.112–117); Faddeev–Popov determinant, ghost action, OPE, stress tensor, and weights. The Laurent modes, CAR, vacuum, and ghost-number conventions are adopted locally, not attributed to these sections."
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Use a separate Euclidean worldsheet for the radial ghost formulation. Its local coordinates are dimensionless $(t,\sigma)$, its complex coordinate is $w=t+i\sigma$, and its metric is $g=e^{2\phi_E}(dt^2+d\sigma^2)$ for a specified smooth real function $\phi_E$. The closed cylinder has $\sigma\in\mathbb R/(2\pi\mathbb Z)$; the open strip has $0\le\sigma\le\pi$. The coordinate convention relating this presentation to the Lorentzian conformal metric $h=e^{2\phi}(-d\tau^2+d\sigma^2)$ is the formal substitution $\tau=-it$. This convention does not assume that arbitrary smooth Lorentzian fields admit analytic continuation: the Euclidean fields and $\phi_E$ are independent formulation data. Where analytic continuation exists and the continued conformal factor is real and positive, this substitution gives the indicated Euclidean signature. Locally $z=e^w$ identifies the Euclidean cylinder with the punctured plane and the strip interior with the upper half-plane.

Fix a finite complex exterior algebra $\Lambda$, whose odd elements anticommute. Off shell take smooth $\Lambda$-odd sections $c\in\Gamma(T\Sigma_E\otimes\mathbb C)\otimes\Lambda_{\rm odd}$ and $b\in\Gamma(\operatorname{Sym}^2T^*\Sigma_E\otimes\mathbb C)\otimes\Lambda_{\rm odd}$ with $g^{ab}b_{ab}=0$. With $\nabla$ the Levi-Civita covariant derivative of $g$, define the local Faddeev-Popov action
$$
S_{gh}[b,c;g]=\frac1{2\pi}\int_{\Sigma_E}\sqrt{\det g}\,b_{ab}g^{ad}\nabla_d c^b\,dt\,d\sigma.
$$
On a noncompact domain the action is defined for compactly supported off-shell fields, or as a local action density. In a conformal coordinate $z=x+iy$, put $b=b_{zz}$, $c=c^z$, $\bar b=b_{\bar z\bar z}$, $\bar c=c^{\bar z}$, $\partial=(\partial_x-i\partial_y)/2$, $\bar\partial=(\partial_x+i\partial_y)/2$, and $d^2z=2\,dx\,dy$. The action is $(2\pi)^{-1}\int d^2z\,(b\bar\partial c+\bar b\partial\bar c)$. Away from insertions its equations give $\bar\partial b=\bar\partial c=0$ and their antiholomorphic counterparts. Thus $b(z)dz^2$ is a quadratic differential and $c(z)\partial_z$ a vector field: under $z'=f(z)$ their components transform as $b'(z')=(f'(z))^{-2}b(z)$ and $c'(z')=f'(z)c(z)$, which defines the weights $2$ and $-1$.

Quantization here means adopting odd operator-valued formal Laurent series $b(z)=\sum_{n\in\mathbb Z}b_nz^{-n-2}$, $c(z)=\sum_{n\in\mathbb Z}c_nz^{-n+1}$, with $\{b_m,c_n\}=\delta_{m+n,0}$ and $\{b_m,b_n\}=\{c_m,c_n\}=0$. Their radially ordered singular contraction is $b(z)c(w)\sim(z-w)^{-1}$, where $\sim$ denotes equality of singular parts. Normal ordering moves annihilators to the right with the signs from odd interchanges. Adopt the chiral stress tensor $T_{gh}=-2:b\partial c:-:\partial b\,c:$ with this ordering. These are algebraic local data, not a construction of a functional measure or an analytic continuation of every classical configuration.

The algebraic radial Fock domain uses finite mode products from the SL(2)-invariant vacuum $|0\rangle$, with $b_n|0\rangle=0$ for $n\ge -1$, $c_n|0\rangle=0$ for $n\ge 2$, $gh(|0\rangle)=0$, $gh(c_n)=+1$, $gh(b_n)=-1$, and normal ordering relative to that vacuum. Closed strings have independent left/right copies; open strings on the conformal strip $0\le \sigma\le \pi$ use boundary-preserving reparametrization ghosts. In strip light-cone components at each endpoint $\sigma=0,\pi$ impose $c^+(\tau,\sigma)=c^-(\tau,\sigma)$ and $b_{(++)}(\tau,\sigma)=b_{(--)}(\tau,\sigma)$; equivalently the normal ghost component $c^{\sigma}$ and the mixed antighost component $b_{(\tau \sigma)}$ vanish. In an upper-half-plane coordinate with the boundary on the real axis these conditions are $c(z)=\bar c(\bar z)$ and $b(z)=\bar b(\bar z)$ on $z=\bar z$. Doubling reflects the antiholomorphic field to the lower half-plane using these equalities. On the doubled strip the common chiral fields are 2pi-periodic, so there is one integer-moded bc system, rather than two independent endpoint systems.

## Definition references

[David Tong, Lectures on String Theory, arXiv:0908.0333v3, full 218-page lecture notes](https://arxiv.org/pdf/0908.0333v3), §§5.1.2–5.2 (PDF file pp.119–124; printed pp.112–117); Faddeev–Popov determinant, ghost action, OPE, stress tensor, and weights. The Laurent modes, CAR, vacuum, and ghost-number conventions are adopted locally, not attributed to these sections.

## Remarks

[[post-st-bosonic-polyakov-model]] is the adopted flat tensile Polyakov model. [[def-st-conformal-gauge-and-residual-symmetry]] fixes the local conformal gauge and its boundary-compatible residual transformations. The standard local Faddeev–Popov gauge-fixing calculation in Tong, §§5.1.2–5.2, motivates the displayed action and weights; the action, mode expansions, CAR, vacuum, and grading are the formulation data adopted here. This item does not assert a global determinant or the ghost central charge.
