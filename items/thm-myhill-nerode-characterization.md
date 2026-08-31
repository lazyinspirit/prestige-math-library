---
id: thm-myhill-nerode-characterization
kind: theorem
title: "A language is regular if and only if its Nerode equivalence has finite index"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-nerode-equivalence, lem-nerode-equivalence-is-a-right-congruence, lem-dfa-states-refine-nerode-classes, def-deterministic-finite-automaton, def-dfa-acceptance-and-recognized-language, def-regular-language-by-dfa-recognition]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
    - title: "Eric Blais, Models of Computation, 20. Nonregular Languages"
      url: "https://cs.uwaterloo.ca/~eblais/cs365/w26/nonregular"
---

## Statement

Let $L\subseteq\Sigma^*$ be a language. Then $L$ is regular if and only if its
Nerode equivalence relation $\equiv_L$ has finite index.

## Facts & Assumptions

**Given:** A language $L\subseteq\Sigma^*$ over an alphabet $\Sigma$.

[L1] By [[def-regular-language-by-dfa-recognition]], a language is regular
exactly when some DFA recognizes it; acceptance and the recognized language
are those of [[def-dfa-acceptance-and-recognized-language]].

[L2] By [[lem-dfa-states-refine-nerode-classes]], if a DFA recognizes $L$ then distinct Nerode classes of $L$ must reach distinct reachable states of that DFA.

[L3] By [[lem-nerode-equivalence-is-a-right-congruence]], $u\equiv_L v$ implies $ua\equiv_L va$ for every letter $a\in\Sigma$, so the transition rule $[u]\mapsto[ua]$ on Nerode classes is well defined.

[L4] By [[def-deterministic-finite-automaton]], a DFA is determined by a finite state set, a start state, a total transition rule on letters, and a chosen accepting subset.

## Proof

**Proof technique:** direct.

1.1 Assume $L$ is regular. By [L1], choose a DFA $D$ recognizing $L$. Step [L2] gives an injection from the set of Nerode classes of $L$ into the reachable state set of $D$, so the index of $\equiv_L$ is finite because a DFA has only finitely many states. [L1, L2, given]

1.2 Assume conversely that $\equiv_L$ has finite index. Let $Q$ be its finite set of equivalence classes, let the start state be $[\varepsilon]$, define $\delta([u],a):=[ua]$, and let $F:=\{[u]\in Q:u\in L\}$. By [L3], the transition rule is well defined, so [L4] gives a DFA $D_L=(Q,\Sigma,\delta,[\varepsilon],F)$. [L3, L4, construct]

2.1 For every word $u\in\Sigma^*$, induction on $u$ shows that the state reached by $D_L$ from $[\varepsilon]$ is exactly $[u]$. Hence $u\in L(D_L) \iff [u]\in F \iff u\in L$, so $D_L$ recognizes $L$ and [L1] implies that $L$ is regular. [L1, step 1.2, induction]

3.1 Steps 1.1 and 2.1 prove both implications. [step 1.1, step 2.1] ∎
