---
id: cor-kleisli-and-eilenberg-moore-have-the-extremal-adjunction-universal-properties
kind: corollary
title: "Kleisli and Eilenberg–Moore adjunctions have the extremal universal properties"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: literature-derived
deps: [thm-the-kleisli-factorisation-functor-exists-and-is-unique, thm-the-comparison-functor-exists-and-is-unique]
aliases: []
landmark: false
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
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Proposition 5.2.13"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "B. Richter, From Categories to Homotopy Theory, Theorem 6.3.10"
      url: "https://www.math.uni-hamburg.de/personen/richter/bookdraft.pdf"
pipeline_run: null
---

## Statement

Fix a monad $T$ on $\mathcal C$. Among supplied adjunctions inducing $T$ on the nose, the Kleisli adjunction has the schematic initial universal property and the Eilenberg–Moore adjunction has the schematic terminal universal property: every such adjunction admits a unique morphism of adjunctions from the Kleisli resolution and a unique morphism of adjunctions to the Eilenberg–Moore resolution.

## Facts & Assumptions

**Given:** A fixed monad $T$ and an arbitrary supplied adjunction inducing it.

[L1] For an adjunction $F\dashv U$ with counit $\varepsilon$ inducing $T$ on the nose there is exactly one functor $J:\mathcal C_T\to\mathcal D$ with $JF_T=F$, $UJ=U_T$ and $J(\varepsilon^T_B)=\varepsilon_{FB}$ for every $B$ ([[thm-the-kleisli-factorisation-functor-exists-and-is-unique]]).

[L2] For the same adjunction there is exactly one functor $K:\mathcal D\to\mathcal C^T$ with $U^TK=U$, $KF=F^T$ and $K(\varepsilon_d)=\varepsilon^T_{Kd}$ for every $d$ ([[thm-the-comparison-functor-exists-and-is-unique]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] to the supplied adjunction; its unique factorisation is the required morphism from the Kleisli resolution. [L1]

1.2 Apply [L2] to the same adjunction; its unique comparison is the required morphism to the Eilenberg–Moore resolution. [L2]

2.1 Steps 1.1 and 1.2 give the two asserted existence-and-uniqueness properties for each supplied adjunction. This objectwise assertion does not form a category of all resolutions. [step 1.1, step 1.2] ∎
