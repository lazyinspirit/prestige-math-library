---
id: ex-levy-collapse-of-a-regular-cardinal
kind: example
title: The Lévy collapse of a regular uncountable cardinal
status: published
origin: pipeline
deps: [thm-collapse-and-levy-collapse-effects]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Karagila, Forcing & Symmetric Extensions, Lévy collapse", url: "https://karagila.org/files/Forcing-2023.pdf"}
---

## Statement

For regular uncountable $\theta$, $\operatorname{Lv}(\theta)$ makes every $\alpha<\theta$ countable while preserving $\theta$, so $\theta$ is exactly the new $\aleph_1$; the example displays the dense sets making each coordinate map $\omega$ onto $\alpha$.

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[thm-collapse-and-levy-collapse-effects]] proves the general effect and preservation statement.

## Proof

1.1 Fix $0<\alpha<\theta$. For $n\in\omega$ let $D_n=\{p:(\alpha,n)\in\operatorname{dom}p\}$, and for $\beta<\alpha$ let $E_\beta=\{p:\exists n\ p(\alpha,n)=\beta\}$. Extend a finite condition at the requested coordinate, choosing a fresh $n$ for $E_\beta$, so both families are dense. A generic meets them all, and $g_\alpha(n)=(\bigcup G)(\alpha,n)$ is a surjection $\omega\twoheadrightarrow\alpha$. [F1]

2.1 F1 gives $\theta$-cc, hence preserves the cardinal $\theta$. Since every infinite ordinal below it is countable by step 1.1, $\theta$ is the least uncountable cardinal in the extension, namely $\aleph_1$. [F1, step 1.1] ∎