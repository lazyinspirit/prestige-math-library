---
id: thm-levi-and-hartogs-pseudoconvexity-for-c-two-domains
kind: theorem
title: "Hartogs pseudoconvexity implies Levi pseudoconvexity for $C^2$ domains"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity,
       def-plurisubharmonic-function,
       def-levi-pseudoconvex-domain,
       lem-levi-pseudoconvexity-is-independent-of-defining-function,
       thm-equivalent-psh-exhaustion-and-boundary-distance-pseudoconvexity,
       thm-maximum-principle-for-plane-subharmonic-functions]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, Theorem 2.5.8"
      url: "https://www.jirka.org/scv/scv.pdf"
    - title: "Harold P. Boas, Lecture Notes on Several Complex Variables, Theorems 9 and 10"
      url: "https://haroldpboas.gitlab.io/courses/650-2007c/notes.pdf"
pipeline_run: null
---

## Statement

Let $\Omega\subseteq\mathbb C^m$ be a domain with $C^2$ boundary. If $\Omega$
is Hartogs pseudoconvex, then $\Omega$ is Levi pseudoconvex.

## Facts & Assumptions

**Given:** A domain $\Omega\subseteq\mathbb C^m$ with $C^2$ boundary.

[L1] A Hartogs pseudoconvex domain admits a continuous plurisubharmonic
exhaustion ([[thm-equivalent-psh-exhaustion-and-boundary-distance-pseudoconvexity]],
[[def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity]]).

[L2] The restriction of a plurisubharmonic function to an affine complex line
is subharmonic or identically $-\infty$ ([[def-plurisubharmonic-function]]).

[L3] Levi pseudoconvexity is the tangential Levi-form condition and is independent of the chosen defining function ([[def-levi-pseudoconvex-domain]], [[lem-levi-pseudoconvexity-is-independent-of-defining-function]]).

[L4] A plane subharmonic function cannot exceed its finite boundary maximum on
a disc unless it is constant ([[thm-maximum-principle-for-plane-subharmonic-functions]]).

## Proof

**Proof technique:** direct.

1.1 Suppose toward a contradiction that $\Omega$ is not Levi pseudoconvex at a boundary point $p$. Choose a defining function $\rho$ and a complex tangent vector $v$ with $\mathcal L_\rho(p;v)<0$. Translate $p$ to $0$, make a complex-linear change of coordinates sending $v$ to the first coordinate direction and the real normal into the last coordinate, and normalize the last coordinate by subtracting the holomorphic pure-quadratic part of the Taylor expansion. After multiplying $\rho$ by a positive constant, its restriction to the resulting $(z_1,z_m)$-plane has the form $$\rho(z_1,0,\dots,0,z_m)=\operatorname{Re}z_m-c|z_1|^2+o(|z_1|^2+|z_m|^2)$$ for some $c>0$; subtracting that pure-quadratic part does not change the tangential Levi coefficient. Choose $\lambda>0$ and then $s_0>0$ small enough that the remainder is dominated by the two displayed negative terms. The affine analytic discs $$\Phi_s(\zeta)=(\lambda\zeta,0,\dots,0,-s)\qquad(|\zeta|\le1)$$ then lie in $\Omega$ for $0<s\le s_0$, their centres $\Phi_s(0)$ converge to $p$ as $s\downarrow0$, and $$K:=\bigcup_{0\le s\le s_0}\Phi_s(\partial\mathbb D)$$ is compactly contained in $\Omega$: on the boundary circles the term $-c\lambda^2$ stays uniformly negative even at $s=0$. [L3, given, assume-contra, construct, algebra]

2.1 By [L1], choose a continuous plurisubharmonic exhaustion $u$ of $\Omega$, and let $M:=\max_K u$. For $0<s\le s_0$, the function $u\circ\Phi_s$ is subharmonic on $\mathbb D$ by [L2] and continuous on its closure. Its boundary values are at most $M$, so [L4] gives $u(\Phi_s(0))\le M$. Thus all the centres lie in the compact sublevel set $\{u\le M\}\Subset\Omega$. But those centres converge to the boundary point $p$, contradicting compact containment. Therefore no negative tangential Levi direction exists, and [L3] makes $\Omega$ Levi pseudoconvex. [L1, L2, L3, L4, step 1.1, discharge-contradiction] ∎
