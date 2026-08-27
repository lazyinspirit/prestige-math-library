---
id: lem-levi-pseudoconvexity-is-independent-of-defining-function
kind: lemma
title: "Levi pseudoconvexity does not depend on the defining function"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-levi-pseudoconvex-domain]
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
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, §2.3"
      url: "https://www.jirka.org/scv/scv.pdf"
    - title: "Harold P. Boas, Lecture Notes on Several Complex Variables, §3.3.1"
      url: "https://haroldpboas.gitlab.io/courses/650-2007c/notes.pdf"
pipeline_run: null
---

## Statement

Let $\Omega\subseteq\mathbb C^m$ have $C^2$ boundary, let $p\in\partial\Omega$,
and let $\rho$ and $\widetilde\rho$ be two $C^2$ defining functions near $p$.
Then on complex tangent vectors at $p$, the Levi forms differ by a positive
scalar factor. In particular, the sign condition in the definition of Levi
pseudoconvexity is independent of the defining function.

## Facts & Assumptions

**Given:** A boundary point $p\in\partial\Omega$ and two $C^2$ defining
functions $\rho$ and $\widetilde\rho$ near $p$.

[L1] Levi pseudoconvexity is stated in terms of the Levi form on complex
tangent vectors of a defining function
([[def-levi-pseudoconvex-domain]]).

## Proof

**Proof technique:** direct.

1.1 Because $\rho$ and $\widetilde\rho$ vanish on the same $C^2$ hypersurface, have nonzero differentials there, and define the same negative side, one has $\widetilde\rho=h\rho$ near $p$ for a positive $C^1$ function $h$. [L1, given]

2.1 Let $v$ be a complex tangent vector at $p$, so $\partial\rho(p)\cdot v=0$. The second-order expansion of $h\rho$ at $p$ uses only first derivatives of $h$ because $\rho(p)=0$; every mixed product term contains $\partial\rho(p)\cdot v$ or its conjugate and therefore vanishes on $v$. Consequently $$\mathcal L_{\widetilde\rho}(p;v)=h(p)\mathcal L_\rho(p;v).$$ Since $h(p)>0$, the two Levi forms have the same sign on complex tangent vectors. [step 1.1, algebra] ∎
