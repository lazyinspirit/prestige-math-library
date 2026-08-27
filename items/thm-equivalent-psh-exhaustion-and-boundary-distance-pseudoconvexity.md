---
id: thm-equivalent-psh-exhaustion-and-boundary-distance-pseudoconvexity
kind: theorem
title: "Hartogs pseudoconvexity yields a continuous plurisubharmonic exhaustion"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity,
       def-levi-form-and-strict-plurisubharmonicity,
       thm-c-two-levi-criterion-for-plurisubharmonicity,
       thm-stability-operations-for-plurisubharmonic-functions]
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
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, Theorem 2.5.6"
      url: "https://www.jirka.org/scv/scv.pdf"
    - title: "Harold P. Boas, Lecture Notes on Several Complex Variables, Theorem 8"
      url: "https://haroldpboas.gitlab.io/courses/650-2007c/notes.pdf"
pipeline_run: null
---

## Statement

Let $\Omega\subseteq\mathbb C^m$ be a domain. If $\Omega$ is Hartogs
pseudoconvex, that is, if $-\log\delta_\Omega$ is plurisubharmonic on
$\Omega$, then $\Omega$ admits a continuous plurisubharmonic exhaustion
function.

## Facts & Assumptions

**Given:** A domain $\Omega\subseteq\mathbb C^m$.

[L1] Hartogs pseudoconvexity means exactly that $-\log\delta_\Omega$ is plurisubharmonic, while a continuous plurisubharmonic exhaustion is defined by compact sublevel sets ([[def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity]]).

[L2] Finite maxima preserve plurisubharmonicity ([[thm-stability-operations-for-plurisubharmonic-functions]]).

[L3] The squared norm has positive Levi form, so it is plurisubharmonic ([[def-levi-form-and-strict-plurisubharmonicity]], [[thm-c-two-levi-criterion-for-plurisubharmonicity]]).

## Proof

**Proof technique:** direct.

1.1 Assume that $-\log\delta_\Omega$ is plurisubharmonic. The function $q(z)=|z_1|^2+\cdots+|z_m|^2$ is plurisubharmonic by [L3]. Since $\delta_\Omega$ is a distance-to-the-complement function for the sup norm, it is continuous on $\Omega$, so $-\log\delta_\Omega$ is continuous as well. Therefore [L2] makes $$u(z):=\max\{-\log\delta_\Omega(z), q(z)\}$$ a continuous plurisubharmonic function. [L2, L3, given]

2.1 As $z$ approaches $\partial\Omega$, the term $-\log\delta_\Omega(z)$ tends to $+\infty$, and as $|z|\to\infty$ inside $\Omega$, the term $q(z)$ tends to $+\infty$. Hence the sublevel sets of $u$ are compact in $\Omega$, so $u$ is a continuous plurisubharmonic exhaustion. [L1, step 1.1, given] ∎
