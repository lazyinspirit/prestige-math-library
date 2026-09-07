---
id: ex-russells-socks
kind: example
title: "Russell's shoes and socks"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-axiom-of-choice, def-choice-function, lem-finite-choice]
justified_by: []
forward_refs: [def-countable]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "I. Khatchatourian, The Axiom of Choice (University of Toronto MAT327 notes)"
      url: "https://www.math.utoronto.ca/ivan/mat327/docs/notes/11-choice.pdf"
    - title: "B. Russell, Introduction to Mathematical Philosophy (1919), Ch. 12"
      url: "https://en.wikipedia.org/wiki/Introduction_to_Mathematical_Philosophy"
pipeline_run: null
---

## Example

Russell's illustration separates an explicit selection rule from a bare request
for simultaneous choices. For a family of pairs of shoes, suppose the data
includes a set $L$ meeting each pair in exactly one member—the left shoe. Then
ZF constructs a choice function. For a family of pairs of indistinguishable
socks, no such distinguisher is supplied; asking for a selection from every
pair is an instance of choice for pairs. This example proves the first claim and
identifies the second statement without asserting any model-theoretic
nonimplication.

## Facts & Assumptions

**Given:** A family $\mathcal F$ of two-element sets and a set $L$ such that
$S\cap L$ has exactly one element for every $S\in\mathcal F$.

[L1] A choice function for $\mathcal F$ is a function $g$ with domain
$\mathcal F$ such that $g(S)\in S$ for every $S\in\mathcal F$
([[def-choice-function]]).

[L2] The Axiom of Choice asserts that every family of nonempty sets has a
choice function ([[def-axiom-of-choice]]).

## Verification

**Proof technique:** direct.

1.1 For each $S\in\mathcal F$, the phrase “the unique element of $S\cap L$” defines one element of $S$ from the supplied data. [given]

2.1 By Separation, $g=\{(S,x)\in\mathcal F\times\bigcup\mathcal F:S\cap L=\{x\}\}$ is a set; the uniqueness hypothesis makes it single-valued and total on $\mathcal F$. [step 1.1, construct]

3.1 For every $S\in\mathcal F$, $g(S)$ is the unique member of $S\cap L$, so $g(S)\in S$. Thus $g$ is a choice function constructed in ZF from $\mathcal F$ and $L$. [step 2.1, L1]

4.1 If the distinguisher $L$ is omitted, step 2.1 has no defining predicate to use. The assertion that an arbitrary family of pairs nevertheless has a choice function is precisely the corresponding restricted instance of [L2]. This identifies the sock question but neither assumes nor proves an independence result. [step 2.1, L1, L2] ∎

## Remarks

- Boundedly many indexed pairs require no choice principle: if the family is
  listed as $F(0),\ldots,F(n-1)$, [[lem-finite-choice]] builds a selection one
  value at a time. The definition of an arbitrary finite set appears later in
  [[def-countable]], so this remark uses only the indexed-family form.
- The argument never uses pairwise disjointness or cardinality two. It uses only
  the supplied predicate selecting exactly one member of every set.
