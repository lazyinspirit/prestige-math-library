---
id: cex-the-pumping-lemma-characterizes-regular-languages
kind: counterexample
title: "A nonregular language can still satisfy the regular pumping lemma"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [fs-the-pumping-lemma-characterizes-regular-languages, cor-distinguishable-prefix-nonregularity-criterion]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Eric Blais, Models of Computation, 20. Nonregular Languages"
      url: "https://cs.uwaterloo.ca/~eblais/cs365/w26/nonregular"
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
---

## Statement refuted

Every language satisfying the regular pumping conclusion is regular.

## Facts & Assumptions

**Given:** The language
$$ G:=\{ww^Rv:w,v\in\{0,1\}^+,\ w\neq\varepsilon\}. $$

[L1] By [[fs-the-pumping-lemma-characterizes-regular-languages]], the claim would be true only if every pumpable language were regular.

[L2] By [[cor-distinguishable-prefix-nonregularity-criterion]], it is enough to exhibit infinitely many pairwise distinguishable prefixes in $G$.

[L3] For $p_n=(01)^n$ and $x_n=(10)^n1$, the companion refutation proves
$p_nx_n\in G$ and $p_mx_n\notin G$ whenever $m>n$: the unique doubled pair in
$(01)^m(10)^n1$ forces any palindromic prefix $rr^R$ to have length $4m$,
which leaves no room for the required nonempty suffix
([[fs-the-pumping-lemma-characterizes-regular-languages]]).

## Counterexample

**Proof technique:** direct.

1.1 The same decomposition used in [[fs-the-pumping-lemma-characterizes-regular-languages]] shows that $G$ satisfies the regular pumping conclusion: words with $|w|\geq 2$ pump on the first letter of the front copy of $w$, while words with $|w|=1$ pump inside the nonempty tail $v$. [L1, given]

1.2 For each $n\geq 1$, the prefix $p_n=(01)^n$ is distinguished from every longer $p_m=(01)^m$ by the suffix $x_n=(10)^n1$, because [L3] gives $p_nx_n\in G$ and $p_mx_n\notin G$ when $m>n$. Hence the prefixes $p_n$ are pairwise distinguishable, so [L2] shows that $G$ is not regular. [L2, L3]

2.1 Thus $G$ is a concrete nonregular language that still satisfies the pumping conclusion, so it is a counterexample to the refuted statement. [step 1.1, step 1.2] ∎
