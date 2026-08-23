---
id: cor-local-holomorphic-roots-nonvanishing-function
kind: corollary
title: "Holomorphic roots of a nonvanishing function on a disc"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-local-holomorphic-logarithm-nonvanishing-function-on-disc, thm-complex-exponential-is-entire-with-derivative-itself, thm-chain-rule-for-complex-derivatives, thm-complex-exponential-addition-and-real-extension, thm-complex-nth-roots-and-roots-of-unity]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, Corollary 4.3.5"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Statement

For every positive natural $m$, a nowhere-zero holomorphic function on a disc has a holomorphic $m$th root.

More precisely, if $h$ is nowhere zero and holomorphic on $D(a,r)$ and $m\in\mathbb N$ satisfies $m\ge1$, then there is a holomorphic $q$ on $D(a,r)$ with $q^m=h$. If $\xi^m=h(a)$ is a prescribed scalar root, $q$ may be chosen so that $q(a)=\xi$.

## Facts & Assumptions

**Given:** A disc $D(a,r)$ with $r>0$, a nowhere-zero holomorphic function $h$ on it, a natural $m\ge1$, and, for the normalized form, a scalar $\xi$ satisfying $\xi^m=h(a)$. The complex exponential is entire ([[thm-complex-exponential-is-entire-with-derivative-itself]]), holomorphic compositions obey the complex chain rule ([[thm-chain-rule-for-complex-derivatives]]), and every nonzero complex number has exactly $m$ distinct $m$th roots ([[thm-complex-nth-roots-and-roots-of-unity]]).

[L1] If $h$ is nowhere zero and holomorphic on a disc, then there is a holomorphic $L$ on that disc with $\exp L=h$ ([[lem-local-holomorphic-logarithm-nonvanishing-function-on-disc]]).

[L2] For all complex $z,w$, $\exp(z+w)=\exp z\exp w$ ([[thm-complex-exponential-addition-and-real-extension]]).

## Proof

**Proof technique:** direct.

1.1 Take from [L1] a holomorphic function $L$ with $\exp L=h$. [L1]

2.1 Because $m\ge1$, division by $m$ is defined. Put $q:=\exp(L/m)$. Repeated use of [L2] gives $q^m=\exp L=h$, and $q$ is holomorphic; for $m=1$ this construction gives $q=h$. [step 1.1, L2, given, algebra]

3.1 For the prescribed value, both $q(a)$ and $\xi$ are nonzero and have $m$th power $h(a)$. Thus $c:=\xi/q(a)$ satisfies $c^m=1$, and $\widetilde q:=cq$ is holomorphic with $\widetilde q^m=h$ and $\widetilde q(a)=\xi$. [step 1.1, step 2.1, given, algebra] ∎
