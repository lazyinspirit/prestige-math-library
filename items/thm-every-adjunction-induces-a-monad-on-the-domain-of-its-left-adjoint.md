---
id: thm-every-adjunction-induces-a-monad-on-the-domain-of-its-left-adjoint
kind: theorem
title: "Every adjunction induces a monad on the domain of its left adjoint"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-monad, def-adjunction-by-unit-counit-and-triangle-identities]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Lemma 5.1.3"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "B. Richter, From Categories to Homotopy Theory, Theorem 6.1.3"
      url: "https://www.math.uni-hamburg.de/personen/richter/bookdraft.pdf"
pipeline_run: null
---

## Statement

Let $F:\mathcal C\to\mathcal D$ be left adjoint to $G:\mathcal D\to\mathcal C$, with unit $\eta:1_{\mathcal C}\Rightarrow GF$ and counit $\varepsilon:FG\Rightarrow1_{\mathcal D}$. Then

$$T:=GF,\qquad \eta:1_{\mathcal C}\Rightarrow T,\qquad \mu:=G\varepsilon F:T^2\Rightarrow T$$

define a monad on $\mathcal C$ ([[def-monad]]).

## Facts & Assumptions

**Given:** An adjunction $F\dashv G$ with unit $\eta$ and counit $\varepsilon$ as in [[def-adjunction-by-unit-counit-and-triangle-identities]].

[L1] The triangle identities are $(\varepsilon F)\circ(F\eta)=1_F$ and $(G\varepsilon)\circ(\eta G)=1_G$ ([[def-adjunction-by-unit-counit-and-triangle-identities]]).

## Proof

**Proof technique:** direct.

1.1 Put $T=GF$ and $\mu=G\varepsilon F$. Whiskering preserves naturality, so $T$ is an endofunctor and $\eta:1_{\mathcal C}\Rightarrow T$ and $\mu:T^2\Rightarrow T$ are natural transformations. [given]

2.1 At an object $A$, the two associativity composites are $\mu_A\circ T(\mu_A)=G(\varepsilon_{FA}\circ FG(\varepsilon_{FA}))$ and $\mu_A\circ\mu_{TA}=G(\varepsilon_{FA}\circ\varepsilon_{FGFA})$; naturality of $\varepsilon$ at $\varepsilon_{FA}:FGFA\to FA$ identifies the expressions inside $G$, so $\mu\circ T\mu=\mu\circ\mu T$. [given, step 1.1, L1]

3.1 Componentwise, $\mu_A\circ\eta_{TA}=G(\varepsilon_{FA})\circ\eta_{GFA}=1_{GFA}$ by the second triangle identity, while $\mu_A\circ T(\eta_A)=G(\varepsilon_{FA}\circ F(\eta_A))=1_{GFA}$ by the first; hence both unit laws hold and $(T,\eta,\mu)$ is a monad. [step 1.1, L1] ∎
