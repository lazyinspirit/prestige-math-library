---
id: cor-composition-with-an-identity-monad-adjunction-preserves-the-induced-monad
kind: corollary
title: "Composing with an adjunction that induces the identity monad on the nose does not change the induced monad"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-adjunctions-compose, thm-every-adjunction-induces-a-monad-on-the-domain-of-its-left-adjoint]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "S. Mac Lane, Categories for the Working Mathematician, 2nd ed., Exercise VI.5.5"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: null
---

## Statement

Let $F:\mathcal C\rightleftarrows\mathcal D:G$ and $F':\mathcal D\rightleftarrows\mathcal E:G'$ be adjunctions. Suppose the monad induced by $F'\dashv G'$ is the identity monad on $\mathcal D$ on the nose: $G'F'=1_{\mathcal D}$, $\eta'=1$, and $G'\varepsilon'F'=1$. Then the monad induced on $\mathcal C$ by the composite adjunction $F'F\dashv GG'$ is the monad induced by $F\dashv G$ on the nose.

## Facts & Assumptions

**Given:** The two adjunctions and the displayed strict identity-monad hypotheses.

[L1] The composite adjunction has unit $\bar\eta=(G\eta'F)\circ\eta$ and counit $\bar\varepsilon=\varepsilon'\circ(F'\varepsilon G')$ ([[thm-adjunctions-compose]]).

## Proof

**Proof technique:** direct.

1.1 The composite induced endofunctor is $GG'F'F=GF$, and [L1] with $\eta'=1$ gives $\bar\eta=\eta$. [L1]

2.1 Its multiplication is $GG'\bar\varepsilon F'F$. Expanding $\bar\varepsilon$ by [L1], then using $G'F'=1_{\mathcal D}$ and $G'\varepsilon'F'=1$, reduces this transformation to $G\varepsilon F$. [step 1.1, L1]

3.1 The endofunctor, unit, and multiplication obtained in steps 1.1 and 2.1 are exactly $GF$, $\eta$, and $G\varepsilon F$, so the two induced monads agree on the nose. [step 1.1, step 2.1] ∎
