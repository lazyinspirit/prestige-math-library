---
id: thm-upper-envelope-theorem-for-plurisubharmonic-functions
kind: theorem
title: "Upper envelopes of locally upper-bounded plurisubharmonic families"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-plurisubharmonic-function,
       thm-upper-envelope-theorem-for-plane-subharmonic-functions]
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
    - title: "Harold P. Boas, Lecture Notes on Several Complex Variables, Theorem 7"
      url: "https://haroldpboas.gitlab.io/courses/650-2007c/notes.pdf"
pipeline_run: null
---

## Statement

Let $\mathcal F$ be a nonempty family of plurisubharmonic functions on a domain
$\Omega\subseteq\mathbb C^m$, and suppose that for every compact set
$K\subseteq\Omega$ there is a real number $M_K$ with $u\le M_K$ on $K$ for every
$u\in\mathcal F$. Define

$$v(z)=\sup_{u\in\mathcal F}u(z).$$

Assume also that $v$ is upper semicontinuous. Then $v$ is plurisubharmonic on
$\Omega$.

## Facts & Assumptions

**Given:** A locally bounded-above family $\mathcal F$ of plurisubharmonic functions on a domain $\Omega\subseteq\mathbb C^m$.

[L1] Plurisubharmonicity is tested on affine complex lines ([[def-plurisubharmonic-function]]).

[L2] The upper-semicontinuous regularization of a locally bounded-above subharmonic supremum is subharmonic ([[thm-upper-envelope-theorem-for-plane-subharmonic-functions]]).

## Proof

**Proof technique:** direct.

1.1 The local upper bounds imply that $v$ never takes the value $+\infty$. By the added hypothesis, $v$ is upper semicontinuous. Because $\mathcal F$ is nonempty and each member is not identically $-\infty$ on a component, the same is true of $v$. [given]

1.2 Fix an affine complex line in $\Omega$ and one of the connected components of its line domain. Restricting the family $\mathcal F$ there, [L1] gives a nonempty family of subharmonic functions that is still locally bounded above. Its restricted supremum is exactly the restriction of $v$, and that restriction is upper semicontinuous because $v$ is. Therefore [L2] makes the restriction of $v$ subharmonic on that component. Thus the line test from [L1] is satisfied. [L1, L2, given]

2.1 Step 1.1 gives the upper-semicontinuity and nontriviality conditions, and step 1.2 gives the line test. By [L1], $v$ is plurisubharmonic on $\Omega$. [L1, step 1.1, step 1.2] ∎
