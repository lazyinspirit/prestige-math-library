---
id: cor-log-modulus-of-a-holomorphic-function-is-plurisubharmonic
kind: corollary
title: "The logarithm of the modulus of a holomorphic function is plurisubharmonic"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-plurisubharmonic-function,
       thm-log-modulus-of-a-holomorphic-function-is-subharmonic]
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
    - title: "Harold P. Boas, Lecture Notes on Several Complex Variables, §3.2.4"
      url: "https://haroldpboas.gitlab.io/courses/650-2007c/notes.pdf"
pipeline_run: null
---

## Statement

Let $\Omega\subseteq\mathbb C^m$ be a domain and let $f$ be holomorphic on
$\Omega$, not identically zero on any connected component. Define

$$u(z)=\log|f(z)|,$$

with the convention $u(z)=-\infty$ at the zeros of $f$. Then $u$ is
plurisubharmonic on $\Omega$.

## Facts & Assumptions

**Given:** A holomorphic function $f$ on a domain $\Omega\subseteq\mathbb C^m$,
not identically zero on any connected component.

[L1] Plurisubharmonicity is tested on affine complex lines
([[def-plurisubharmonic-function]]).

[L2] For a one-variable holomorphic function, the logarithm of the modulus is
subharmonic with the value $-\infty$ at its zeros
([[thm-log-modulus-of-a-holomorphic-function-is-subharmonic]]).

## Proof

**Proof technique:** direct.

1.1 Fix an affine complex line in $\Omega$. The restriction of $f$ to that line is a one-variable holomorphic function, and by the componentwise hypothesis it is not identically zero on the connected component under consideration. Therefore [L2] makes the restriction of $u=\log|f|$ subharmonic or identically $-\infty$ there. [L2, given]

2.1 The function $u$ is upper semicontinuous because it is a logarithm of a continuous modulus away from the zero set and has value $-\infty$ on the zero set. Step 1.1 is exactly the line test from [L1], so $u$ is plurisubharmonic on $\Omega$. [L1, step 1.1] ∎
