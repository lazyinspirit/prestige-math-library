---
id: lem-affine-line-independence-in-the-definition-of-plurisubharmonicity
kind: lemma
title: "Affine reparametrization does not change the line-test definition"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-plane-subharmonic-function,
       def-plurisubharmonic-function]
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

In the definition of plurisubharmonicity, the condition on the restriction to an
affine complex line is unchanged if that line is reparametrized by a
nonconstant affine map of one complex variable.

## Facts & Assumptions

**Given:** A domain $\Omega\subseteq\mathbb C^m$, a function
$u:\Omega\to[-\infty,\infty)$, an affine line map $\lambda\mapsto a+\lambda v$
with $v\ne0$, and a nonconstant affine change of variable
$\phi(\mu)=\alpha\mu+\beta$ with $\alpha\ne0$.

[L1] Plurisubharmonicity is defined by asking the line restriction to be
subharmonic or identically $-\infty$ on each connected component
([[def-plurisubharmonic-function]]).

[L2] Plane subharmonicity is the upper-semicontinuous disc-submean condition
([[def-plane-subharmonic-function]]).

## Proof

**Proof technique:** direct.

1.1 The two parametrizations describe the same affine line because $a+(\alpha\mu+\beta)v=(a+\beta v)+\mu(\alpha v)$. Thus the second restriction is just $(u_{a,v})\circ\phi$ on the corresponding one-variable domain. [L1, given, algebra]

2.1 A nonconstant affine map sends discs to discs and is biholomorphic onto its image, so the upper-semicontinuity and disc-submean inequalities of [L2] are preserved under composition with $\phi$ and with $\phi^{-1}$. Therefore $u_{a,v}$ is subharmonic or identically $-\infty$ on one component exactly when $(u_{a,v})\circ\phi$ is subharmonic or identically $-\infty$ on the corresponding component. By [L1], the line-test definition is independent of the chosen affine parametrization. [L1, L2, step 1.1] ∎
