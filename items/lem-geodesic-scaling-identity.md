---
id: "lem-geodesic-scaling-identity"
kind: "lemma"
title: "Geodesic scaling identity"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["thm-existence-uniqueness-and-smooth-dependence-of-geodesics","prop-affine-reparametrization-of-a-geodesic-is-a-geodesic","def-countable-choice"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry, Corollary 15.2.2, pp.115–116
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Assume $\mathrm{AC}_\omega$. For $a\in\mathbb R$,
$$\gamma_{p,av}(t)=\gamma_{p,v}(at)$$
whenever both sides are defined. If $a\ne0$, maximality gives $I_{p,av}=a^{-1}I_{p,v}$; for $a=0$, $I_{p,0}=\mathbb R$.

## Facts & Assumptions

**Given:** An initial vector $v\in T_pM$ and a scalar $a$.

[F1] [[def-countable-choice]] is the assumed $\mathrm{AC}_\omega$; [[thm-existence-uniqueness-and-smooth-dependence-of-geodesics]] gives unique maximal geodesics for the two initial vectors under that assumption.

[F2] [[prop-affine-reparametrization-of-a-geodesic-is-a-geodesic]] makes $t\mapsto\gamma_{p,v}(at)$ a geodesic and multiplies its initial velocity by $a$.

## Proof

1.1 On $a^{-1}I_{p,v}$, the curve $\eta(t)=\gamma_{p,v}(at)$ is geodesic by [F2], with $\eta(0)=p$ and $\eta'(0)=av$. The unique maximal solution in [F1] extends every solution with those initial data, so $a^{-1}I_{p,v}\subseteq I_{p,av}$ and $\eta(t)=\gamma_{p,av}(t)$ throughout that domain. [F1, F2, given]

2.1 If $a\ne0$ and $I_{p,av}$ were larger than $a^{-1}I_{p,v}$, then $s\mapsto\gamma_{p,av}(s/a)$ would extend $\gamma_{p,v}$ beyond $I_{p,v}$, contradicting maximality; applying the same argument in the other direction proves $I_{p,av}=a^{-1}I_{p,v}$. If $a=0$, both initial velocity and the right-hand curve are zero/constant, and [F1] gives the global domain $\mathbb R$. This also treats dimensions zero and one and all signs of $a$. The domains are open, so no finite endpoint is included. The only choice principle is the explicitly inherited $\mathrm{AC}_\omega$ for the geodesic-flow construction; no new selection is made. [F1, F2, step 1.1] ∎
