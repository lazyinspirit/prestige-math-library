---
id: thm-nonhalting-is-productive-and-halting-is-creative
kind: theorem
title: "The nonhalting set is productive and the halting set is creative"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-productive-and-creative-set, prop-fixed-machine-coding-is-acceptable, lem-machine-encoding-is-injective-and-decodable, def-effective-encoding-of-turing-machines]
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Robert I. Soare, Turing Computability: Theory and Applications"
      url: "https://www.scribd.com/document/620633428/Theory-and-Applications-of-Computability-In-cooperation-with-the-association-Computability-in-Europe-Robert-I-Soare-Turing-Computability-Theory"
---

## Statement

For the fixed machine-coding acceptable numbering of
[[prop-fixed-machine-coding-is-acceptable]], let
$$ K:=\{e\in\mathbb N:\varphi_e(e)\downarrow\}. $$
Then $\mathbb N\setminus K$ is productive, and therefore $K$ is creative.

## Facts & Assumptions

**Given:** The diagonal halting set $$ K:=\{e:\varphi_e(e)\downarrow\} $$ for the fixed machine-coding numbering.

[L1] A set is productive when it has a partial computable function defined with an escaping value on every index of a c.e. subset, and a set is creative when it is c.e. and its complement is productive, by [[def-productive-and-creative-set]].

[L2] The fixed machine-coding family $(\varphi_e)$ is an acceptable numbering of the partial computable functions, by [[prop-fixed-machine-coding-is-acceptable]].

[L3] The chosen machine coding is injective and has a total decoder, by [[lem-machine-encoding-is-injective-and-decodable]].

## Proof

**Proof technique:** direct.

1.1 The set $K$ is computably enumerable: dovetail over all indices $e$, decode each one using [L3], and simulate the decoded machine on input $e$. Enumerate $e$ exactly when that simulation halts. By [L2], this lists precisely the numbers in $K$. [L2, L3, given, construct]

1.2 For each $e$, build a coded machine $Q_e$ that on input $x$ simulates the enumeration of $W_e$ and halts exactly when the number $x$ appears in that enumeration. Let $p(e):=\ulcorner Q_e\urcorner$. The effective machine coding makes $p$ total computable; productivity in [L1] does not require this particular witness to be injective. [L3, given, construct]

2.1 Assume $W_e\subseteq\mathbb N\setminus K$. If $p(e)\in W_e$, then by the definition of $Q_e$ the computation $Q_e(p(e))$ halts, so $p(e)\in K$, which contradicts $W_e\subseteq\mathbb N\setminus K$. Therefore $p(e)\notin W_e$. But then the simulation inside $Q_e$ never sees $p(e)$ enter $W_e$, so $Q_e(p(e))$ diverges and hence $p(e)\notin K$. Thus $p(e)\in(\mathbb N\setminus K)\setminus W_e$. [step 1.2, contradiction]

3.1 Step 2.1 shows that $p$ is a productive function for $\mathbb N\setminus K$. By [L1], the complement of $K$ is productive. Together with step 1.1, [L1] gives that $K$ is creative. [L1, step 1.1, step 2.1] ∎
