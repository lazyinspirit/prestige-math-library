---
id: thm-equivalent-psh-exhaustion-and-boundary-distance-pseudoconvexity
kind: theorem
title: "Hartogs pseudoconvexity yields a continuous plurisubharmonic exhaustion"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [rem-complex-euclidean-space-dictionary,
       def-polydisc-boundary-radius,
       def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity,
       def-levi-form-and-strict-plurisubharmonicity,
       thm-c-two-levi-criterion-for-plurisubharmonicity,
       thm-stability-operations-for-plurisubharmonic-functions]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  repair: research/frontier-37-owner-30-published-repair-evidence/thm-equivalent-psh-exhaustion-and-boundary-distance-pseudoconvexity.repair.json
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

[L3] With the canonical indices $j<m$, the squared norm $q(z)=\sum_{j<m}|z_j|^2$ has Levi matrix equal to the identity (reindexing the Levi Definition), so it is plurisubharmonic ([[def-levi-form-and-strict-plurisubharmonicity]], [[thm-c-two-levi-criterion-for-plurisubharmonicity]]).

[L4] Canonical complex coordinates are indexed by $j<m$, and their squared norm is $\sum_{j<m}|z_j|^2$; under the real coordinate identification, closed bounded subsets are compact. ([[rem-complex-euclidean-space-dictionary]])

[L5] The equal-radius polydisc boundary function is the sup-norm distance to the complement. For a proper domain it is finite and positive at every point. ([[def-polydisc-boundary-radius]])

## Proof

**Proof technique:** direct.

1.1 Write $b(z)=-\log\delta_\Omega(z)$, with $b\equiv0$ when $\Omega=\mathbb C^m$ as specified in [L1], and assume $b$ is plurisubharmonic. The function $q(z)=\sum_{j<m}|z_j|^2$ is plurisubharmonic by [L3]. For a proper domain, the distance function $\delta_\Omega$ is positive and continuous on $\Omega$ by [L5]: the triangle inequality makes distance to its nonempty complement $1$-Lipschitz. Thus $b$ is continuous in that case, and the whole-space convention is continuous as well. Therefore [L2] makes $$u(z):=\max\{b(z),q(z)\}$$ a continuous plurisubharmonic function. [L1, L2, L3, L4, L5, given]

2.1 For $c<0$, the sublevel $K_c:=\{z\in\Omega:u(z)\le c\}$ is empty since $q\ge0$. For $c\ge0$, it is closed in $\Omega$ by continuity and lies in $\{q\le c\}$, so it is bounded. If $\Omega=\mathbb C^m$, it is closed in the whole space and hence compact by [L4]. For a proper domain, every $z\in K_c$ also satisfies $\delta_\Omega(z)\ge e^{-c}$. If a sequence from $K_c$ converges in $\mathbb C^m$ to $a$, the $1$-Lipschitz distance-to-complement function gives distance at least $e^{-c}$ at $a$, so $a\in\Omega$; continuity of $u$ then puts $a\in K_c$. Thus $K_c$ is closed in the whole space, bounded and contained in $\Omega$, hence compact by [L4]. All sublevels are compact, so [L1] gives the promised continuous plurisubharmonic exhaustion. [L1, L4, L5, step 1.1, given, algebra] ∎
