---
id: lem-local-holomorphic-logarithm-nonvanishing-function-on-disc
kind: lemma
title: "A nonvanishing holomorphic function on a disc has a holomorphic logarithm"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-holomorphic-primitive-on-star-shaped-domain, def-star-shaped-open-subset-of-rn, thm-cauchy-integral-formula-higher-derivatives, thm-algebra-of-complex-derivatives, thm-chain-rule-for-complex-derivatives, thm-complex-exponential-is-entire-with-derivative-itself, thm-complex-exponential-addition-and-real-extension, thm-zero-complex-derivative-on-a-domain-implies-constant, thm-classification-of-complex-logarithms, rem-plane-star-shaped-and-convex-dictionary, lem-euclidean-polygonal-paths-are-continuous, thm-path-connected-implies-connected]
justified_by: []
forward_refs: []
aliases: []
landmark: true
short: "A nonvanishing disc function has a logarithm"
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
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, Corollary 4.3.4"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Statement

If $h$ is nowhere zero and holomorphic on a disc, then there is a holomorphic $L$ on that disc with $\exp L=h$.

Precisely, if $D(a,r)$ is an open disc with $r>0$ and $h:D(a,r)\to\mathbb C$ is holomorphic and nowhere zero, then there is a holomorphic function $L:D(a,r)\to\mathbb C$ satisfying $\exp(L(z))=h(z)$ for every $z\in D(a,r)$.

## Facts & Assumptions

**Given:** A disc $D(a,r)$ with $r>0$ and a nowhere-zero holomorphic function $h$ on it. For $z,w\in D(a,r)$ and $t\in[0,1]$ the triangle inequality gives $|((1-t)z+tw)-a|\le(1-t)|z-a|+t|w-a|<r$, so every segment between two points of the disc stays in it; taking $z=a$ makes the disc star-shaped with respect to $a$ in the sense of [[rem-plane-star-shaped-and-convex-dictionary]] and [[def-star-shaped-open-subset-of-rn]], and [L4] makes the disc a connected, hence a complex, domain. Also $h'$ is itself holomorphic on the disc, because a holomorphic function has complex derivatives of all orders locally ([[thm-cauchy-integral-formula-higher-derivatives]]), so the quotient rule makes $h'/h$ holomorphic there, $h$ being nowhere zero ([[thm-algebra-of-complex-derivatives]]); and the complex chain rule, the derivative of $\exp$, and the exponential addition law are supplied by [[thm-chain-rule-for-complex-derivatives]], [[thm-complex-exponential-is-entire-with-derivative-itself]], and [[thm-complex-exponential-addition-and-real-extension]].

[L1] Every holomorphic function on an open set star-shaped with respect to $a$ has a primitive there ([[thm-holomorphic-primitive-on-star-shaped-domain]]).

[L2] A holomorphic function whose derivative vanishes everywhere on a complex domain is constant ([[thm-zero-complex-derivative-on-a-domain-implies-constant]]).

[L3] For every nonzero complex number $z$, the solutions of $\exp w=z$ are exactly $\operatorname{Log}z+2\pi i k$ with $k\in\mathbb Z$ ([[thm-classification-of-complex-logarithms]]).

[L4] A segment $t\mapsto(1-t)v_0+tv_1$ that lies in a subset $A$ is a continuous path in $A$, and a path-connected subset of a topological space is a connected subset ([[lem-euclidean-polygonal-paths-are-continuous]], [[thm-path-connected-implies-connected]], claim 2).

## Proof

**Proof technique:** direct.

1.1 By the star-shapedness in the Given and [L1], $h'/h$ has a holomorphic primitive $K$ on the disc. Put $H(z):=K(z)-K(a)$; then $H(a)=0$ and $H'=h'/h$. [L1, given, algebra]

2.1 The complex product and chain rules give $(h\exp(-H))'=h'\exp(-H)-hH'\exp(-H)=0$, so, the disc being a complex domain by [L4], [L2] makes $h\exp(-H)$ constant; its value at $a$ is $h(a)$. [step 1.1, L2, L4, given, algebra]

3.1 Since $h(a)\ne0$, choose by [L3] a complex number $c$ with $\exp c=h(a)$, and set $L:=H+c$. [step 2.1, L3, choose]

4.1 The exponential addition law and step 2.1 give $\exp L=\exp H\exp c=\exp H\,h(a)=h$ throughout the disc, so $L$ is the required holomorphic logarithm. [step 2.1, step 3.1, given, algebra] ∎
