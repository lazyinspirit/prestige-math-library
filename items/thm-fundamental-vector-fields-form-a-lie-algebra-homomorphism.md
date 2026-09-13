---
id: thm-fundamental-vector-fields-form-a-lie-algebra-homomorphism
kind: theorem
title: Fundamental vector fields form a Lie-algebra homomorphism
status: draft
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-countable-choice, def-fundamental-vector-field-of-a-left-action, def-pushforward-and-pullback-of-a-vector-field-by-a-diffeomorphism, def-lie-derivative-of-a-vector-field, thm-lie-derivative-of-a-vector-field-equals-the-lie-bracket, thm-the-differential-of-adjoint-is-ad, prop-adjoint-intertwines-the-exponential-map]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John M. Lee, Introduction to Smooth Manifolds, 2nd ed.
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
      locator: Theorem 20.18 and complete proof, printed pages 529–530; signs translated to the exp(-tX) convention
    - title: Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
      locator: Proposition 9.1 and proof, printed page 53; opposite convention translated explicitly
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. For a smooth left action of $G$ on $M$, with
the standing convention

$$X_M(x)=\left.\frac d{dt}\right|_0\exp(-tX)\cdot x,$$

one has

$$[X_M,Y_M]=[X,Y]_M.$$

Thus $X\mapsto X_M$ is a Lie-algebra homomorphism.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a smooth left action of a
finite-dimensional real Lie group $G$ on a smooth manifold $M$, and
$X,Y\in\mathfrak g$.

[A1] The fundamental-field convention uses $\exp(-tX)$ and gives smooth
vector fields. [[def-countable-choice]],
[[def-fundamental-vector-field-of-a-left-action]].

[F1] Pushforward by a diffeomorphism transports a smooth vector field by its
differential. [[def-pushforward-and-pullback-of-a-vector-field-by-a-diffeomorphism]].

[F2] The inverse-time-flow definition of the Lie derivative satisfies
$\mathcal L_UV=[U,V]$.
[[def-lie-derivative-of-a-vector-field]],
[[thm-lie-derivative-of-a-vector-field-equals-the-lie-bracket]].

[F3] The identity differential of the group adjoint representation is
$\operatorname{ad}$, so
$\left.\frac d{dt}\right|_0\operatorname{Ad}_{\exp(tX)}Y=[X,Y]$.
[[thm-the-differential-of-adjoint-is-ad]].

[F4] Conjugation intertwines the exponential map:
$g\exp_G(Z)g^{-1}=\exp_G(\operatorname{Ad}_gZ)$ for every $g\in G$ and
$Z\in\mathfrak g$. [[prop-adjoint-intertwines-the-exponential-map]].

## Proof

**Proof technique:** differentiate the equivariance of fundamental fields along their action flows.

1.1 For $p\in M$, write $a_p(g)=g\cdot p$. Since the identity differential of the exponential is the identity, $X_M(p)=-d(a_p)_eX$, so $X\mapsto X_M$ is linear. The curve $\Phi_t(p)=\exp(-tX)\cdot p$ has velocity $X_M$ at every time, because $\exp(-(t+s)X)=\exp(-sX)\exp(-tX)$; hence $\Phi$ is the global flow of $X_M$. [A1, algebra]

2.1 For fixed $g\in G$, [F4] gives $g\exp(-tY)g^{-1}=\exp(-t\operatorname{Ad}_gY)$; differentiating this identity in its action on $g\cdot p$ gives $(g\mathbin{\cdot})_*Y_M=(\operatorname{Ad}_gY)_M$. Apply this with $g=\exp(tX)$, which acts as $\Phi_{-t}$ by step 1.1, to obtain $(\Phi_{-t})_*Y_M=(\operatorname{Ad}_{\exp(tX)}Y)_M$. [A1, F1, F4, step 1.1, algebra]

3.1 By [F2], the derivative at $t=0$ of the left side in step 2.1 is $\mathcal L_{X_M}Y_M=[X_M,Y_M]$. By [F3] and linearity from step 1.1, the derivative of the right side is $(\operatorname{ad}_XY)_M=[X,Y]_M$. This proves the formula. The action need not be effective, free, or transitive; if either vector is zero or the group is zero-dimensional, both sides vanish. All flows used are global, so there is no endpoint issue. Countable choice is inherited exactly through [A1], [F1], [F3], and [F4]. [A1, F1, F2, F3, F4, step 1.1, step 2.1] ∎
