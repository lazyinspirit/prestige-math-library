---
id: thm-decreasing-limits-of-plurisubharmonic-functions
kind: theorem
title: "Decreasing limits of plurisubharmonic functions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-plurisubharmonic-function,
       thm-decreasing-limit-theorem-for-plane-subharmonic-functions]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
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

Let $\Omega\subseteq\mathbb C^m$ be a domain and let
$u_1\ge u_2\ge\cdots$ be a decreasing sequence of plurisubharmonic functions on
$\Omega$. Put $u(z)=\lim_{n\to\infty}u_n(z)$. Then either $u\equiv-\infty$ on
a connected component of $\Omega$, or $u$ is plurisubharmonic on $\Omega$.

## Facts & Assumptions

**Given:** A decreasing sequence $(u_n)$ of plurisubharmonic functions on a
domain $\Omega\subseteq\mathbb C^m$.

[L1] Plurisubharmonicity is the affine-line subharmonicity test together with
upper semicontinuity and the componentwise nontriviality condition
([[def-plurisubharmonic-function]]).

[L2] A decreasing limit of subharmonic functions is subharmonic or identically
$-\infty$ on the connected component
([[thm-decreasing-limit-theorem-for-plane-subharmonic-functions]]).

## Proof

**Proof technique:** direct.

1.1 A decreasing limit of upper semicontinuous functions is upper semicontinuous, so $u$ is upper semicontinuous on $\Omega$. If $u\equiv-\infty$ on some connected component, the first alternative of the statement holds and there is nothing further to prove. [given]

2.1 Fix $a\in\Omega$ and $v\ne0$. On every connected component of the line domain $\{\lambda: a+\lambda v\in\Omega\}$, each restriction $\lambda\mapsto u_n(a+\lambda v)$ is subharmonic or identically $-\infty$ by [L1]. Therefore [L2] makes the limit restriction $\lambda\mapsto u(a+\lambda v)$ subharmonic or identically $-\infty$ there. Since the componentwise $-\infty$ alternative was excluded in step 1.1, [L1] now shows that $u$ is plurisubharmonic on $\Omega$. [L1, L2, step 1.1] ∎
