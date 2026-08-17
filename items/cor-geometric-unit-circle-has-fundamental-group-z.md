---
id: cor-geometric-unit-circle-has-fundamental-group-z
kind: corollary
title: "The trigonometric loops give $\\pi_1(\\{(x,y):x^2+y^2=1\\},(1,0))\\cong\\mathbb Z$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle, thm-fundamental-group-of-the-circle, thm-induced-fundamental-group-map-functoriality, def-group-isomorphism-and-automorphism, prop-standard-circle-loops-have-their-integer-degrees]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, Ch. 1, Section 1.1, Theorem 1.7"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
    - title: "J. Peter May, A Concise Course in Algebraic Topology, Ch. 1, Section 5"
      url: "https://math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
pipeline_run: null
---

## Statement

Let $C=\{(x,y)\in\mathbb R^2:x^2+y^2=1\}$ with basepoint $(1,0)$. Then

$$\pi_1(C,(1,0))\cong(\mathbb Z,+).$$

Under this isomorphism, the loop

$$t\longmapsto(\cos 2\pi nt,\sin 2\pi nt)$$

corresponds to $n$ for every $n\in\mathbb Z$.

## Facts & Assumptions

**Given:** The quotient-circle homeomorphism $h([t])=(\cos2\pi t,\sin2\pi t)$ and its inverse.

[L1] $[t]\mapsto(\cos 2\pi t,\sin 2\pi t)$ is a homeomorphism from $\mathbb R/\mathbb Z$ to the unit circle and sends $[0]$ to $(1,0)$ ([[thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle]]).

[L2] $\operatorname{Deg}:\pi_1(\mathbb R/\mathbb Z,[0])\to(\mathbb Z,+)$ is an isomorphism ([[thm-fundamental-group-of-the-circle]]).

[L3] Every pointed continuous map $f$ induces a well-defined group homomorphism $f_*$; moreover, for pointed continuous maps, $\operatorname{id}_*=\operatorname{id}$ and $(g\circ f)_*=g_*\circ f_*$ ([[thm-induced-fundamental-group-map-functoriality]]).

[L4] $\deg(\omega_n)=n$ for every integer $n$ ([[prop-standard-circle-loops-have-their-integer-degrees]]).

[L5] An isomorphism is a bijective group homomorphism ([[def-group-isomorphism-and-automorphism]]).

## Proof

**Proof technique:** direct.

1.1 The based homeomorphism $h$ and its inverse induce homomorphisms $h_*$ and $(h^{-1})_*$. By [L3], their composites are the induced maps of the two identity maps, so they are mutually inverse. Hence $h_*$ is a group isomorphism in the sense of [L5]. [L1, L3, L5]

2.1 Compose $(h^{-1})_*:\pi_1(C,(1,0))\to\pi_1(\mathbb R/\mathbb Z,[0])$ from step 1.1 with the degree isomorphism [L2]. The composite is an isomorphism from $\pi_1(C,(1,0))$ to $(\mathbb Z,+)$. [step 1.1, L2, algebra]

3.1 The homeomorphism sends $\omega_n(t)=[nt]$ to $h([nt])=(\cos2\pi nt,\sin2\pi nt)$ by [L1]. Under the isomorphism of step 2.1 this geometric loop is sent back to $[\omega_n]$ and then to $n$ by [L4]. This includes $n=0$ and negative integers. [step 2.1, L1, L4] ∎
