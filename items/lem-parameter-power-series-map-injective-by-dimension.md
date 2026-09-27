---
id: lem-parameter-power-series-map-injective-by-dimension
kind: lemma
title: "The parameter power-series map is injective by dimension"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-parameter-power-series-subring-makes-ring-finite, def-system-of-parameters-and-parameter-ideal, lem-integral-extension-chain-contraction-is-strict, def-dependent-choice]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Melvin Hochster, The structure theory of complete local rings"
      url: "https://sites.lsa.umich.edu/hochster/wp-content/uploads/sites/1337/2026/04/Structure.pdf"
    - title: "The Stacks Project, Section 10.160: The Cohen structure theorem"
      url: "https://stacks.math.columbia.edu/tag/0323"
pipeline_run: null
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-03-height-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Assume the Axiom of Dependent Choice.

Let $(A,\mathfrak m)$ be a complete equicharacteristic Noetherian local domain
of dimension $d$, let $k \subseteq A$ be a coefficient field, and let
$x_1,\ldots,x_d$ be a system of parameters. Then the continuous map
$$\phi:k\llbracket X_1,\ldots,X_d\rrbracket \to A, \qquad X_i \mapsto x_i,$$
is injective.

## Facts & Assumptions

**Given:** A complete equicharacteristic Noetherian local domain $(A,\mathfrak m)$ of dimension $d$, a coefficient field $k$, a system of parameters $x_1,\ldots,x_d$, and the Axiom of Dependent Choice.

[L1] The map $\phi$ makes $A$ finite over its image ([[lem-parameter-power-series-subring-makes-ring-finite]]).

[L2] The given system of parameters has length $d$, and the statement already assumes $\dim A=d$ ([[def-system-of-parameters-and-parameter-ideal]]).

[L3] The formal power-series ring $k\llbracket X_1,\ldots,X_d\rrbracket$ is a Noetherian local domain of dimension $d$ (Stacks Project, Section 10.160, Remark 10.160.9).

[L4] A strict chain of primes contracts to a strict chain along an integral injection ([[lem-integral-extension-chain-contraction-is-strict]]).

## Proof

**Proof technique:** a nonzero kernel would force the source quotient to have dimension less than the target.

1.1 Let $B=k\llbracket X_1,\ldots,X_d\rrbracket$ and suppose $P:=\ker(\phi)\ne0$. Since $A$ is a domain, $P$ is prime. By [L1], $A$ is finite over the image $B/P$, hence integral over $B/P$. [L1, given, assume-contra, algebra]

2.1 By [L3], $B$ is a domain of dimension $d$. Every strict chain of primes in $B/P$ lifts to a strict chain of primes of $B$ containing $P$; adjoining $P$ at the bottom if necessary, write it as $$P=\mathfrak p_0\subsetneq\mathfrak p_1\subsetneq\cdots\subsetneq\mathfrak p_\ell.$$ This chain can be preceded by the strict inclusion $(0)\subsetneq P$. Hence $\ell+1\le d$, and therefore $\dim(B/P)\le d-1$. [L3, step 1.1, algebra]

3.1 By [L4], every strict chain of primes in $A$ contracts to a strict chain in $B/P$, so $\dim A\le\dim(B/P)$. Combining this with step 2.1 gives $d=\dim A\le d-1$, contradicting [L2]. [L2, L4, step 1.1, step 2.1, discharge-contradiction]

4.1 Therefore $\ker(\phi)=0$, so $\phi$ is injective. [step 3.1] ∎
