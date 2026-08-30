---
id: lem-deterministic-nonhalting-configurations-have-unique-successors
kind: lemma
title: "Every nonhalting deterministic configuration has a unique successor"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-deterministic-one-tape-turing-machine, def-one-step-configuration-relation]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John E. Savage, Models of Computation: Exploring the Power of Computing, Chapter 5"
      url: "https://cs.brown.edu/people/jsavage/book/pdfs/ModelsOfComputation_Chapter5.pdf"
    - title: "Richard Zach, Sets, Logic, Computation: An Open Introduction to Metalogic"
      url: "https://slc.openlogicproject.org/slc-screen.pdf"
---

## Statement

Let $M$ be a deterministic one-tape Turing machine. Every nonhalting
configuration of $M$ has exactly one one-step successor.

## Facts & Assumptions

**Given:** A deterministic one-tape Turing machine
$M=(Q,\Sigma,\Gamma,\sqcup,q_0,q_{\mathrm{acc}},q_{\mathrm{rej}},\delta)$ and a
nonhalting configuration $C=(q,h,t)$ of $M$.

[L1] The transition function of a deterministic one-tape Turing machine is a
function
$$ \delta:(Q\setminus\{q_{\mathrm{acc}},q_{\mathrm{rej}}\})\times\Gamma\to Q\times\Gamma\times\{L,R\}, $$
by [[def-deterministic-one-tape-turing-machine]].

[L2] The relation $C\vdash_M C'$ is obtained by applying the unique transition
value $\delta(q,t(h))$, rewriting only the scanned tape cell, and updating the
head position by the stated left/right rule, by
[[def-one-step-configuration-relation]].

## Proof

**Proof technique:** direct.

1.1 Since $C$ is nonhalting, $q\in Q\setminus\{q_{\mathrm{acc}},q_{\mathrm{rej}}\}$. Therefore $(q,t(h))$ lies in the domain of the function $\delta$, so there is a unique triple $(p,b,D)=\delta(q,t(h))$. [given, L1]

2.1 Define $t'$ by $t'(h)=b$ and $t'(i)=t(i)$ for $i\ne h$, and define $h'$ from $h$ and $D$ by the rule in [L2]. Then $C':=(p,h',t')$ satisfies $C\vdash_M C'$. [L2, step 1.1, construct]

3.1 If also $C\vdash_M C''$, then [L2] forces $C''$ to use the same unique transition value from step 1.1, the same rewritten tape cell, and the same updated head position. Hence $C''=C'$. [L1, L2, step 1.1, step 2.1]

4.1 So $C$ has exactly one one-step successor. [step 2.1, step 3.1] ∎
