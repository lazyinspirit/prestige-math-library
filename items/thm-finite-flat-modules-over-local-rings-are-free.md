---
id: thm-finite-flat-modules-over-local-rings-are-free
kind: theorem
title: "A finite flat module over a local ring is free"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-axiom-of-choice, cor-nakayama-generators-modulo-an-ideal, thm-finite-generation-and-finite-presentation-over-a-noetherian-ring, thm-flat-quotients-preserve-short-exact-tensor-sequences]
aliases: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Stacks Project, Section 10.78: Finite projective modules"
      url: "https://stacks.math.columbia.edu/tag/00NV"
    - title: "Mihnea Mustata, Graduate Commutative Algebra, §10"
      url: "https://www.math.lsa.umich.edu/~mmustata/commalg.html"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-01-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]).
Let $(R,\mathfrak m)$ be a Noetherian local ring and let $M$ be a finite flat
$R$-module. Then $M$ is free.

## Facts & Assumptions

**Given:** The Axiom of Choice, a Noetherian local ring $(R,\mathfrak m)$ and a finite flat $R$-module $M$.

[L1] Under the assumed Axiom of Choice, if lifts of residue classes generate $M/\mathfrak mM$, they generate $M$; likewise a finite module $K$ with $K/\mathfrak mK=0$ vanishes by the same lifting corollary applied to the empty list ([[cor-nakayama-generators-modulo-an-ideal]]).

[L2] Over a Noetherian ring, finite modules are finitely presented, so the kernel of a map from a finite free module to a finite module is finite ([[thm-finite-generation-and-finite-presentation-over-a-noetherian-ring]]).

[L3] A short exact sequence with flat quotient remains short exact after tensoring with any module ([[thm-flat-quotients-preserve-short-exact-tensor-sequences]]).

## Proof

**Proof technique:** direct.


1.1 Choose elements $x_1,\ldots,x_r\in M$ whose residue classes form a basis of the vector space $M/\mathfrak mM$. By [L1], they generate $M$. Thus there is a surjection $ \varphi:R^r\twoheadrightarrow M $ sending the $i$th standard basis vector to $x_i$. [L1, given, choose]


1.2 Let $K=\ker\varphi$. Because $R$ is Noetherian and $R^r$ is finite, [L2] makes $K$ finitely generated. Tensoring $ 0\to K\to R^r\to M\to0 $ with the residue field $k=R/\mathfrak m$ remains exact by [L3], so $ 0\to K/\mathfrak mK\to k^r\to M/\mathfrak mM\to0. $ The last map is an isomorphism by the choice of the $x_i$, hence $K/\mathfrak mK=0$. [L2, L3, algebra]


2.1 Applying [L1] to the finite module $K$ and the empty list of generators gives $K=0$. Thus $\varphi$ is an isomorphism and $M\cong R^r$ is free. [L1, step 1.2, algebra]


3.1 Therefore every finite flat module over a Noetherian local ring is free. [algebra] ∎
