---
id: thm-maximum-principle-for-plurisubharmonic-functions
kind: theorem
title: "Maximum principle for plurisubharmonic functions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-plurisubharmonic-function,
       thm-maximum-principle-for-plane-subharmonic-functions]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, §2.4"
      url: "https://www.jirka.org/scv/scv.pdf"
    - title: "Harold P. Boas, Lecture Notes on Several Complex Variables, §3.2.4"
      url: "https://haroldpboas.gitlab.io/courses/650-2007c/notes.pdf"
pipeline_run: null
---

## Statement

Let $u$ be plurisubharmonic on a domain $\Omega\subseteq\mathbb C^m$. If $u$
attains its finite global maximum at a point of $\Omega$, then $u$ is constant
on $\Omega$.

## Facts & Assumptions

**Given:** A plurisubharmonic function $u$ on a domain $\Omega\subseteq\mathbb C^m$
and a point $a\in\Omega$ with $u(a)=\sup_\Omega u<+\infty$.

[L1] Plurisubharmonicity is tested by subharmonicity on every affine complex
line ([[def-plurisubharmonic-function]]).

[L2] A subharmonic function of one complex variable that attains a finite
interior maximum is constant on its connected component
([[thm-maximum-principle-for-plane-subharmonic-functions]]).

## Proof

**Proof technique:** direct.

1.1 Choose a small Euclidean ball $B(a,r)\subseteq\Omega$. Fix $z\in B(a,r)$, and restrict $u$ to the affine complex line through $a$ and $z$. By [L1], that restriction is subharmonic on the connected line-domain component containing the segment from $a$ to $z$, and the global bound makes its value at $a$ a finite maximum. Hence [L2] makes it constant on that component, so $u(z)=u(a)$. Thus $u$ is constant on $B(a,r)$. [L1, L2, given]

2.1 Put $S:=\{z\in\Omega:u(z)=u(a)\}$. It is nonempty. Every point of $S$ is another point where the finite global maximum is attained, so the argument of step 1.1 makes $S$ open. Since $u\le u(a)$ everywhere and upper semicontinuity makes $\{u\ge u(a)\}$ closed, $S=\{u\ge u(a)\}$ is closed. Connectedness of $\Omega$ gives $S=\Omega$, so $u$ is constant. [step 1.1, given] ∎
