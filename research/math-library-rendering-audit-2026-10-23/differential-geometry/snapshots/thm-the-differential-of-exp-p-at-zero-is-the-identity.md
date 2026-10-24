---
id: "thm-the-differential-of-exp-p-at-zero-is-the-identity"
kind: "theorem"
title: "The differential of exp at zero is the identity"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["prop-exponential-map-scales-geodesic-time","thm-the-exponential-domain-is-open-and-the-exponential-map-is-smooth","def-countable-choice"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry, Proposition 17.1.4(2), p.128
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Assume $\mathrm{AC}_\omega$. Under the canonical vector-space identification $T_{0_p}(T_pM)\cong T_pM$,
$$d(\exp_p)_{0_p}=\operatorname{id}_{T_pM}.$$

## Facts & Assumptions

**Given:** A point $p$ of a boundaryless smooth manifold with an affine connection.

[F1] Under [[def-countable-choice]], [[thm-the-exponential-domain-is-open-and-the-exponential-map-is-smooth]] makes $\mathcal E_p$ an open neighbourhood of $0_p$ in $T_pM$ and $\exp_p$ smooth there.

[F2] [[prop-exponential-map-scales-geodesic-time]] gives $\exp_p(sw)=\gamma_{p,w}(s)$ whenever the two sides are defined.

## Proof

**Proof technique:** direct.

1.1 Fix $w\in T_pM$. By [F1], the straight line $c(s)=sw$ lies in $\mathcal E_p$ for all sufficiently small $s$, and $c'(0)$ corresponds to $w$ under $T_{0_p}(T_pM)\cong T_pM$. The curve definition of the differential and [F2] give $$d(\exp_p)_{0_p}(w)=\left.\frac{d}{ds}\right|_{0}\exp_p(sw)=\left.\frac{d}{ds}\right|_{0}\gamma_{p,w}(s)=w,$$ because $\gamma'_{p,w}(0)=w$. Hence the differential is the identity. [F1, F2]

2.1 For $w=0_p$, both sides in step 1.1 are zero. In dimension zero the identity is the unique map on the zero vector space; dimension one is the same one-vector computation. If $M$ is empty there is no point $p$, so the statement is vacuous. Only an arbitrarily small open parameter interval around zero is used, not an endpoint of the exponential domain. The stated $\mathrm{AC}_\omega$ is inherited through [F1]--[F2], and differentiating a fixed curve introduces no choice. [F1, F2, step 1.1] ∎
