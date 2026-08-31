---
id: ex-regular-expression-to-epsilon-nfa
kind: example
title: "Constructing an epsilon-NFA for $(a+b)^{*}abb$"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-regular-expression-to-epsilon-nfa]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://www.scribd.com/document/977881977/Tcbook-Lang"
---

## Example

After the standard Thompson construction and the obvious epsilon-edge
simplifications, one convenient epsilon-NFA for $(a+b)^*abb$ has states
$q_0,q_1,q_2,q_3$, start state $q_0$, accepting state $q_3$, and transitions

$$ q_0\xrightarrow{a}q_0,\quad q_0\xrightarrow{b}q_0,\quad q_0\xrightarrow{a}q_1,\quad q_1\xrightarrow{b}q_2,\quad q_2\xrightarrow{b}q_3. $$

It is an epsilon-NFA because ordinary NFA's are the special case with no
$\varepsilon$-moves.

## Facts & Assumptions

**Given:** The displayed machine with start state $q_0$ and accepting state
$q_3$.

[L1] By [[thm-regular-expression-to-epsilon-nfa]], a regular expression has an equivalent epsilon-NFA.

## Verification

**Proof technique:** direct.

1.1 Any word of the form $xabb$ with $x\in\{a,b\}^*$ is accepted: stay in $q_0$ while reading the prefix $x$, then use the branch $q_0\xrightarrow{a}q_1\xrightarrow{b}q_2\xrightarrow{b}q_3$ on the final three letters. [given]

2.1 Conversely, every accepting run must finish with the forced chain $q_0\xrightarrow{a}q_1\xrightarrow{b}q_2\xrightarrow{b}q_3$, because $q_3$ is reached only from $q_2$ by a $b$-edge and $q_2$ is reached only from $q_1$ by a $b$-edge. Therefore any accepted word ends in $abb$, and the earlier letters are exactly the ones read by the two loops at $q_0$. [step 1.1]

3.1 Hence this machine recognizes the words ending in $abb$, which is the language of $(a+b)^*abb$. This is the concrete instance promised by [L1]. [L1, step 1.1, step 2.1] ∎
