---
id: "def-domain-and-exponential-map-of-a-connection"
kind: "definition"
title: "Domain and exponential map of a connection"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["thm-existence-uniqueness-and-smooth-dependence-of-geodesics","def-countable-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry, Definition 17.1.2, pp.127--128
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Definition

Assume $\mathrm{AC}_\omega$. Let $M$ be a smooth manifold without boundary with an affine connection. For $v\in T_pM$, let $\gamma_{p,v}:I_{p,v}\to M$ be its unique maximal geodesic. The **domain of the exponential map** is
$$\mathcal E=\{v\in TM:1\in I_{p,v}\text{ for }p=\pi(v)\}.$$
The **exponential map** and its fibrewise restrictions are
$$\exp:\mathcal E\longrightarrow M,\qquad \exp(v)=\gamma_{p,v}(1),\qquad \exp_p=\exp|_{\mathcal E_p}:\mathcal E_p\longrightarrow M,$$
where $\mathcal E_p=\mathcal E\cap T_pM$.

## Facts & Assumptions

**Given:** A boundaryless smooth manifold $M$ with an affine connection, and the bundle projection $\pi:TM\to M$.

[F1] [[def-countable-choice]] is the assumed $\mathrm{AC}_\omega$, and [[thm-existence-uniqueness-and-smooth-dependence-of-geodesics]] supplies, for each $v\in T_pM$, the unique maximal geodesic $\gamma_{p,v}$ on an open interval $I_{p,v}$ containing zero.

## Verification

1.1 Every tangent vector $v\in TM$ has the unique base point $p=\pi(v)$, and [F1] uniquely determines both $I_{p,v}$ and $\gamma_{p,v}$. Thus membership in $\mathcal E$ and the value $\gamma_{p,v}(1)$ are well-defined. The definition only evaluates curves whose maximal interval actually contains $1$ and therefore does not presume geodesic completeness. [F1, given]

2.1 The zero vector $0_p$ gives the constant geodesic on all of $\mathbb R$, so $0_p\in\mathcal E_p$ and $\exp_p(0_p)=p$. In dimension zero all tangent vectors are zero; if $M$ is empty, then $TM$ and $\mathcal E$ are empty and the displayed map is the unique empty function. Because $I_{p,v}$ is open, $1\in I_{p,v}$ is an interior-time condition rather than an included-endpoint convention; $\mathcal E$ may still be a proper subset of $TM$. The only choice principle used is the stated $\mathrm{AC}_\omega$ inherited through [F1]. [F1, step 1.1] ∎
