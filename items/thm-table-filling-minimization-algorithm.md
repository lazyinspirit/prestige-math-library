---
id: thm-table-filling-minimization-algorithm
kind: theorem
title: "The table-filling algorithm computes state equivalence and DFA minimization"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-distinguishing-word, lem-state-equivalence-is-a-right-congruence, def-quotient-dfa-by-state-equivalence, lem-quotient-dfa-is-well-defined-and-equivalent, lem-removing-unreachable-states-preserves-language]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
---

## Statement

Fix a DFA $D$. Delete its unreachable states, mark every accepting/nonaccepting
pair, and then repeatedly mark any unmarked pair $\{p,q\}$ for which some
letter $a$ has already-marked successor pair
$\{\delta(p,a),\delta(q,a)\}$. When the process stabilizes, the unmarked pairs
are exactly the state-equivalent pairs of $D$, and merging each equivalence
class yields a minimal DFA for the same language.

## Facts & Assumptions

**Given:** A DFA $D$.

[L1] By [[lem-removing-unreachable-states-preserves-language]], we may delete unreachable states first without changing the recognized language.

[L2] By [[def-distinguishing-word]], a pair of states is distinguishable exactly when some continuation accepts from one state and rejects from the other.

[L3] By [[lem-state-equivalence-is-a-right-congruence]], state equivalence is preserved by every input word.

[L4] By [[lem-quotient-dfa-is-well-defined-and-equivalent]], quotienting by state equivalence gives an equivalent DFA.

## Proof

**Proof technique:** direct.

1.1 Replace $D$ by its reachable part using [L1]. Let $M_0$ be the set of accepting/nonaccepting pairs, and for $t\geq 0$ let $M_{t+1}$ be obtained from $M_t$ by also marking every pair $\{p,q\}$ for which some letter $a$ has $\{\delta(p,a),\delta(q,a)\}\in M_t$. Put $M:=\bigcup_t M_t$. [L1, construct]

2.1 We prove by induction on $t$ that every pair in $M_t$ has a distinguishing word of length at most $t$. For $M_0$, the empty word distinguishes every accepting/nonaccepting pair by [L2]. For the induction step, if $\{p,q\}$ is newly marked because $\{\delta(p,a),\delta(q,a)\}\in M_t$, prepend the letter $a$ to a distinguishing word for the successor pair. [L2, step 1.1, induction]

3.1 Conversely, we induct on the length of a distinguishing word $x$. If $x=\varepsilon$, then the pair is in $M_0$. If $x=ay$, then $y$ distinguishes $\delta(p,a)$ and $\delta(q,a)$, so the induction hypothesis puts the successor pair in some $M_t$, and the algorithm then marks $\{p,q\}$ at the next stage. Therefore a pair is marked exactly when it is distinguishable. [L2, step 2.1, induction]

4.1 Unmarked pairs are therefore precisely the indistinguishable pairs, hence precisely the state-equivalent pairs by [L2]. By [L3] this is an equivalence relation, and [L4] gives an equivalent quotient DFA $Q$. [L2, L3, L4, step 3.1]

4.2 Let $E$ be any reachable DFA equivalent to $D$. Because step 1.1 replaced $D$ by its reachable part, each state class $C$ of $Q$ has a representative state $q_C$ reached in $D$ by some word $u_C$. Send $C$ to the state reached by $E$ on $u_C$. If $C\neq C'$, then their representatives are distinguishable by step 3.1; choose a distinguishing word $x$. The words $u_Cx$ and $u_{C'}x$ are then accepted differently by $D$, hence also by the equivalent DFA $E$, so the reached states of $E$ are distinct. Thus this map from the states of $Q$ into the states of $E$ is injective. [L2, step 1.1, step 3.1, construct]

5.1 Therefore every reachable DFA equivalent to $D$ has at least as many states as $Q$. Since $Q$ itself is equivalent to $D$ by step 4.1, it is a minimal DFA for the same language. [step 4.1, step 4.2] ∎
