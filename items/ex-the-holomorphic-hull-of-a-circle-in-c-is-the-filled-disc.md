---
id: ex-the-holomorphic-hull-of-a-circle-in-c-is-the-filled-disc
kind: example
title: "The holomorphic hull of a circle in C is the filled disc"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-holomorphically-convex-hull-and-domain,
       thm-boundary-maximum-modulus-principle]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, §2.6"
      url: "https://www.jirka.org/scv/scv.pdf"
    - title: "Harold P. Boas, Lecture Notes on Several Complex Variables, §3.2.3"
      url: "https://haroldpboas.gitlab.io/courses/650-2007c/notes.pdf"
pipeline_run: null
---

## Example

In the domain $\Omega=\mathbb C$, the holomorphic hull of the unit circle

$$E=\{z\in\mathbb C: |z|=1\}$$

is the closed unit disc

$$\widehat E_{\mathbb C}=\{z\in\mathbb C: |z|\le1\}.$$

## Facts & Assumptions

**Given:** The unit circle $E\subseteq\mathbb C$.

[L1] Hull membership is tested by comparison with the boundary suprema of all
holomorphic functions on the ambient domain
([[def-holomorphically-convex-hull-and-domain]]).

[L2] A holomorphic function on the unit disc is bounded on the interior by its
boundary maximum
([[thm-boundary-maximum-modulus-principle]]).

## Verification

**Proof technique:** direct.

1.1 Let $a$ satisfy $|a|\le1$, and let $f$ be entire. Then $f$ is holomorphic on the unit disc and continuous on its closure, so [L2] gives $|f(a)|\le\sup_{|z|=1}|f(z)|$. By [L1], this shows $a\in\widehat E_{\mathbb C}$. Hence the closed unit disc lies in the hull. [L1, L2, given]

2.1 If $|a|>1$, take the entire function $f(z)=z$. Then $|f(a)|=|a|>1=\sup_{z\in E}|f(z)|$, so [L1] excludes $a$ from the hull. Therefore no point outside the closed unit disc lies in $\widehat E_{\mathbb C}$. Together with step 1.1, this identifies the hull exactly. [L1, step 1.1, algebra] ∎
