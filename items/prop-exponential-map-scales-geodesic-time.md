---
id: "prop-exponential-map-scales-geodesic-time"
kind: "proposition"
title: "The exponential map scales geodesic time"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-domain-and-exponential-map-of-a-connection","lem-geodesic-scaling-identity","def-countable-choice"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry, Proposition 17.1.4(2)--(3), p.128
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Assume $\mathrm{AC}_\omega$. For $v\in T_pM$ and $t\in\mathbb R$,
$$t\in I_{p,v}\quad\Longleftrightarrow\quad tv\in\mathcal E_p,$$
and whenever these equivalent conditions hold,
$$\exp_p(tv)=\gamma_{p,v}(t).$$
In particular, if $v\in\mathcal E_p$, then $sv\in\mathcal E_p$ for every $s\in[0,1]$.

## Facts & Assumptions

**Given:** A boundaryless smooth manifold with an affine connection, $v\in T_pM$, and $t\in\mathbb R$.

[F1] Under [[def-countable-choice]], [[lem-geodesic-scaling-identity]] gives $\gamma_{p,av}(u)=\gamma_{p,v}(au)$ and, for $a\ne0$, $I_{p,av}=a^{-1}I_{p,v}$; for $a=0$ the scaled geodesic is constant on $\mathbb R$.

[F2] [[def-domain-and-exponential-map-of-a-connection]] says $w\in\mathcal E_p$ exactly when $1\in I_{p,w}$ and then $\exp_p(w)=\gamma_{p,w}(1)$.

## Proof

**Proof technique:** direct.

1.1 Suppose first that $t\ne0$. By [F1], $1\in I_{p,tv}$ iff $t\in I_{p,v}$, and on that domain $\gamma_{p,tv}(1)=\gamma_{p,v}(t)$. Applying [F2] proves both the domain equivalence and the exponential identity. [F1, F2]

1.2 If $t=0$, then $0\in I_{p,v}$, while [F1] makes $\gamma_{p,0}$ the constant curve on $\mathbb R$; hence $0v\in\mathcal E_p$ and $\exp_p(0)=p=\gamma_{p,v}(0)$. Thus the equivalence and identity also hold at zero. [F1, F2]

2.1 Let $v\in\mathcal E_p$ and $s\in[0,1]$. Then $1\in I_{p,v}$ by [F2]. Since $I_{p,v}$ is an interval containing $0$, it contains $s$, so step 1.1 or 1.2 gives $sv\in\mathcal E_p$. Thus every fibre domain is star-shaped about zero. Negative parameters are covered by step 1.1 whenever the corresponding geodesic time lies in the maximal interval. [F1, F2, step 1.1, step 1.2]

3.1 On an empty manifold there are no initial vectors. In dimension zero only step 1.2 occurs, and in dimension one the proof is unchanged. Zero velocity and zero scale were handled explicitly; membership is always at the interior time $1$ of an open maximal interval, including when the original time is a finite endpoint candidate. The stated $\mathrm{AC}_\omega$ is inherited through [F1]--[F2], and no additional selection is made. [F1, F2, step 1.1, step 1.2, step 2.1] ∎
