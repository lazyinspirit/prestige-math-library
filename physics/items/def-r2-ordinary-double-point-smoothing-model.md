---
id: def-r2-ordinary-double-point-smoothing-model
kind: definition
title: "The local ordinary-double-point smoothing and residue form"
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
dependency_level: 0
deps: []
dependency_roles: {}
physical_scope: null
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Steven B. Giddings, Shamit Kachru, and Joseph Polchinski, Hierarchies from Fluxes in String Compactifications, hep-th/0105097v2"
      url: "https://arxiv.org/pdf/hep-th/0105097v2"
    - title: "Igor R. Klebanov and Matthew J. Strassler, Supergravity and a Confining Gauge Theory: Duality Cascades and χSB–Resolution of Naked Singularities, hep-th/0007191v4"
      url: "https://arxiv.org/pdf/hep-th/0007191v4"
    - title: "S. Stark, The Ordinary Double Point (notes based on R. Thomas's lectures)"
      url: "https://lekili.freemath.xyz/teaching/topics/ODP.pdf"
---

## Statement

Let $q(w):=w_1^2+w_2^2+w_3^2+w_4^2$ on $\mathbb C^4$, with complex coordinates $w=(w_1,w_2,w_3,w_4)$, and let $\Delta_\epsilon:=\{t\in\mathbb C:|t|<\epsilon\}$. The one-parameter family $Q_t:=\{w:q(w)=t\}$ is smooth for $t\ne0$ and has one ordinary double point at $w=0$ for $t=0$. For real $t>0$, its real vanishing sphere is $A_t:=\{\sqrt t\,u:u\in S^3\}$, oriented as the boundary of the unit ball in $\mathbb R^4$. Set $dw:=dw_1\wedge dw_2\wedge dw_3\wedge dw_4$ and use the Poincare-residue convention $d(q-t)\wedge\omega_t=dw$ on $Q_t$; thus on $w_4\ne0$, $\omega_t=-dw_1\wedge dw_2\wedge dw_3/(2w_4)$. For $R>0$ and $t$ in a slit disk $0<|t|<R^2$, the oriented local relative chain $B_R^{\rm loc}(t)$ is parameterized by $w_j=iy_j$ for $j=1,2,3$, $w_4=\sqrt{t+|y|^2}$, $|y|\le R$, with orientation $dy_1\wedge dy_2\wedge dy_3$ and the branch positive for positive real $t$. Its boundary is the image of $|y|=R$; this is a relative chain, not a closed global cycle.

## Facts & Assumptions

**Given:** $q$, $Q_t$, the complex orientation, the residue convention and the chain orientation in the Statement.

## Proof

**Given:** $q(w)=\sum_{j=1}^4w_j^2$ and the definitions above.

1.1 The complex differential is $dq=2\sum_{j=1}^4w_j\,dw_j$, which vanishes only at $w=0$. Since $q(0)=0$, the level $Q_t$ has no critical point when $t\ne0$. At $t=0$ its Hessian at the origin is $2I_4$, which is nondegenerate, so that isolated singularity is an ordinary double point. [given, algebra]

2.1 For $t>0$, $q(\sqrt t\,u)=t$ for every unit real $u$. The sphere has radius $\sqrt t$, hence collapses to the origin as $t\downarrow0$; it is the stated vanishing sphere. [given, step 1.1, algebra] ∎

## Remarks

The residue sign is fixed by $d(q-t)\wedge\omega_t=dw$. The local chain $B_R^{\rm loc}$ is only a relative chain. A compact dual cycle requires a cap in a smooth compact complement; the affine model alone provides no closed global dual cycle.

