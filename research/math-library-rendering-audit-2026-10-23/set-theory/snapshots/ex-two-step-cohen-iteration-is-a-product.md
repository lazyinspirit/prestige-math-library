---
id: ex-two-step-cohen-iteration-is-a-product
kind: example
title: A two-step Cohen iteration is a product
status: published
origin: pipeline
deps: [def-two-step-forcing-iteration, thm-two-step-generic-factorization-and-ccc, thm-mutually-generic-cohen-coordinate-reals]
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
    - {title: "Karagila, Forcing & Symmetric Extensions, Chapter 6", url: "https://karagila.org/files/Forcing-2023.pdf"}
---

## Statement

When $\dot Q$ is the constant check-name for $\operatorname{Add}(\omega,1)$, $\operatorname{Add}(\omega,1)*\dot Q$ is forcing-equivalent to $\operatorname{Add}(\omega,2)$, and its extension adjoins two mutually generic Cohen reals in either order.

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[def-two-step-forcing-iteration]] defines the pair order.

[F2] [[thm-two-step-generic-factorization-and-ccc]] factors its generic.

[F3] [[thm-mutually-generic-cohen-coordinate-reals]] identifies the two coordinates.

## Proof

1.1 The check names $\check q$ for $q\in\operatorname{Add}(\omega,1)$ occur in the constant name $\dot Q$, hence lie in F1's bounded carrier $R$. They form a dense suborder of the restricted iteration: for any $(p,\dot q)$, the forcing membership clause gives a strengthening $p'\le p$ that forces $\dot q=\check q$ for some ground $q$, and $(p',\check q)$ extends $(p,\dot q)$. On this dense check-name suborder, $(p,\check q)\le(p',\check q')$ exactly when $p\le p'$ and $q\le q'$. Send this pair to the finite function $r$ on $2\times\omega$ with $r(0,n)=p(n)$ and $r(1,n)=q(n)$. Restriction is the inverse on the dense suborder, proving forcing equivalence. [F1]

2.1 F2 factors the generic into the two one-coordinate generics; F3 says their union reconstitutes the full generic and either coordinate is Cohen-generic over the extension by the other. [F2, F3] ∎
