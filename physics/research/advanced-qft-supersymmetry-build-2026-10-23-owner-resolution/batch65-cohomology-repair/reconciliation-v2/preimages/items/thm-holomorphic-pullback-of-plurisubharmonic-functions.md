---
id: thm-holomorphic-pullback-of-plurisubharmonic-functions
kind: theorem
title: "Holomorphic pullbacks of $C^2$ plurisubharmonic functions are plurisubharmonic"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-plurisubharmonic-function,
       def-levi-form-and-strict-plurisubharmonicity,
       thm-c-two-levi-criterion-for-plurisubharmonicity,
       thm-chain-rule-for-holomorphic-maps-in-several-variables]
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

Let $\Omega\subseteq\mathbb C^m$ and $V\subseteq\mathbb C^n$ be domains, let
$F:\Omega\to V$ be holomorphic, and let $u\in C^2(V,\mathbb R)$ be
plurisubharmonic. Then $u\circ F$ is plurisubharmonic on $\Omega$.

## Facts & Assumptions

**Given:** Domains $\Omega\subseteq\mathbb C^m$ and $V\subseteq\mathbb C^n$, a holomorphic map $F:\Omega\to V$, and a $C^2$ plurisubharmonic function $u:V\to\mathbb R$.

[L1] In the $C^2$ setting, plurisubharmonicity is equivalent to semipositivity of the Levi form ([[thm-c-two-levi-criterion-for-plurisubharmonicity]], [[def-levi-form-and-strict-plurisubharmonicity]]).

[L2] Holomorphic maps compose holomorphically and satisfy the chain rule ([[thm-chain-rule-for-holomorphic-maps-in-several-variables]]).

## Proof

**Proof technique:** direct.

1.1 For $a\in\Omega$ and $v\in\mathbb C^m$, the chain rule [L2] gives $$\mathcal L_{u\circ F}(a;v)=\mathcal L_u(F(a); DF(a)v).$$ [L2, given]

2.1 Because $u$ is $C^2$ and plurisubharmonic, [L1] makes the right-hand side of step 1.1 nonnegative for every $a$ and $v$. Applying [L1] again, $u\circ F$ is plurisubharmonic on $\Omega$. [L1, step 1.1, given] ∎
