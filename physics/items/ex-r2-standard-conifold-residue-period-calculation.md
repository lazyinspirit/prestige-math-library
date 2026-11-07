---
id: ex-r2-standard-conifold-residue-period-calculation
kind: example
title: "The affine quadric and its local conifold periods"
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-r2-ordinary-double-point-smoothing-model
  - lem-r2-standard-conifold-residue-periods
dependency_roles:
  def-r2-ordinary-double-point-smoothing-model: mathematical-premise
  lem-r2-standard-conifold-residue-periods: mathematical-premise
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
    - title: "Steven B. Giddings, Shamit Kachru, and Joseph Polchinski, Hierarchies from Fluxes in String Compactifications, hep-th/0105097v2, §3, equations (3.3)–(3.9)"
      url: "https://arxiv.org/pdf/hep-th/0105097v2"
    - title: "S. Stark, The Ordinary Double Point (notes based on R. Thomas's lectures), §§1–2"
      url: "https://lekili.freemath.xyz/teaching/topics/ODP.pdf"
---

## Statement

Fix $t>0$ and let $Q_t=\{w\in\mathbb C^4:\sum_{j=1}^4w_j^2=t\}$ with the residue form $\omega_t$ of [[def-r2-ordinary-double-point-smoothing-model]]. Writing $w=x+iy$ identifies $Q_t$ diffeomorphically with $T^*S^3=\{(u,y):|u|=1,\ u\cdot y=0\}$ by $w=\sqrt{t+|y|^2}\,u+iy$. The real zero section is the vanishing $S^3$, its period is $-\pi^2t$, and the relative chain $w=(iy_1,iy_2,iy_3,\sqrt{t+|y|^2})$, $|y|\le R$, has period
$$\pi iR\sqrt{R^2+t}-\pi i t\log\!\bigl(R+\sqrt{R^2+t}\bigr)+\frac{\pi i}{2}t\log t.$$
This affine example has no compact gluing: the displayed dual chain is relative, not a closed cycle, so the calculation asserts no compact Calabi–Yau or global period.

## Facts & Assumptions

**Given:** $t>0$, $R>0$, and the explicit affine model in the Statement.

[F1] [[def-r2-ordinary-double-point-smoothing-model]]: $Q_t$ is smooth for $t\ne0$ and $\omega_t=-dw_1\wedge dw_2\wedge dw_3/(2w_4)$ on $w_4\ne0$.

[F2] [[lem-r2-standard-conifold-residue-periods]]: the oriented vanishing sphere and relative dual chain have the periods and logarithmic primitive shown in the Statement.

## Proof

**Given:** The quadratic equation and local residue normalization [F1].

1.1 For $w=x+iy$, the equation $q(w)=t$ has real and imaginary parts $|x|^2-|y|^2=t$ and $2x\cdot y=0$. Since $t>0$, $x\ne0$; put $u=x/|x|$. Then $|u|=1$, $u\cdot y=0$, and $|x|=\sqrt{t+|y|^2}$. Conversely any such $(u,y)$ gives $q(\sqrt{t+|y|^2}u+iy)=t$. These mutually inverse smooth maps prove the asserted diffeomorphism with $T^*S^3$. [F1, given, algebra]

1.2 On the relative chain, $dw_1\wedge dw_2\wedge dw_3=-i\,dy_1\wedge dy_2\wedge dy_3$ and $w_4=\sqrt{t+|y|^2}$. Substituting in [F1] and integrating over angular directions in $\mathbb R^3$ gives $2\pi i\int_0^Rr^2/\sqrt{t+r^2}\,dr$. [F1, given, algebra]

2.1 The subset $y=0$ maps to $w=\sqrt t\,u$, precisely the real vanishing sphere; multiplying its radius by $\sqrt t$ makes it collapse at $t=0$. [step 1.1, F1, algebra]

3.1 The primitive and endpoint evaluation in [F2] give the displayed closed form. The boundary $|y|=R$ is nonempty, so this chain is relative; without an independently supplied cap it defines no closed homology class and its integral is not a compact global period. [F2, step 1.2, algebra] ∎

## Remarks

Giddings–Kachru–Polchinski use the same noncompact local slice as a conifold model in §3. The affine diffeomorphism and residue integral are directly verified here; no global compactification, flux solution, or string-theory realization is inferred.

