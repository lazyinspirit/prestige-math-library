---
id: "thm-the-exponential-domain-is-open-and-the-exponential-map-is-smooth"
kind: "theorem"
title: "The exponential domain is open and the exponential map is smooth"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-domain-and-exponential-map-of-a-connection","thm-existence-uniqueness-and-smooth-dependence-of-geodesics","def-countable-choice"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry, Proposition 17.1.4(1), p.128
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Assume $\mathrm{AC}_\omega$. The exponential domain $\mathcal E$ is an open subset of $TM$ containing the zero section, and $\exp:\mathcal E\to M$ is smooth. Consequently every fibre domain $\mathcal E_p=\mathcal E\cap T_pM$ is open in $T_pM$ and $\exp_p$ is smooth.

## Facts & Assumptions

**Given:** The exponential domain and map of a boundaryless smooth manifold with an affine connection.

[F1] [[def-domain-and-exponential-map-of-a-connection]] defines $\mathcal E=\{v:1\in I_{\pi(v),v}\}$ and $\exp(v)=\gamma_{\pi(v),v}(1)$ under $\mathrm{AC}_\omega$.

[F2] Under [[def-countable-choice]], [[thm-existence-uniqueness-and-smooth-dependence-of-geodesics]] says that $\mathcal G=\{(t,v):t\in I_{\pi(v),v}\}$ is open in $\mathbb R\times TM$ and that $G(t,v)=\gamma_{\pi(v),v}(t)$ is smooth on $\mathcal G$.

## Proof

**Proof technique:** direct.

1.1 The map $j:TM\to\mathbb R\times TM$, $j(v)=(1,v)$, is smooth. By [F1] and [F2], $\mathcal E=j^{-1}(\mathcal G)$, so $\mathcal E$ is open in $TM$. Every zero vector $0_p$ lies in $\mathcal E$ because its maximal geodesic is the constant curve on $\mathbb R$. [F1, F2]

2.1 The restriction $j|_{\mathcal E}:\mathcal E\to\mathcal G$ is smooth, and [F1] gives $\exp=G\circ j|_{\mathcal E}$. Hence $\exp$ is smooth. For fixed $p$, $\mathcal E_p$ is the inverse image of the open set $\mathcal E$ under the smooth linear inclusion $T_pM\hookrightarrow TM$ and is therefore open in $T_pM$; the restriction $\exp_p$ is smooth. [F1, F2, step 1.1]

3.1 If $M$ is empty, then $TM$, $\mathcal E$, and the zero section are empty, and openness and smoothness are vacuous. In dimension zero, $TM$ is the zero section and $\mathcal E=TM$; in dimension one the same slice and composition arguments apply unchanged. The zero-vector case was checked in step 1.1, and time $1$ is an interior point of each relevant open interval. The stated $\mathrm{AC}_\omega$ is used only through [F1] and [F2] to obtain the global smooth tangent-bundle/geodesic construction; taking a preimage and restricting a map require no further choice. [F1, F2, step 1.1, step 2.1] ∎
