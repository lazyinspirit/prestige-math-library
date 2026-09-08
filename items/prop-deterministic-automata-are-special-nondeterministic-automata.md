---
id: prop-deterministic-automata-are-special-nondeterministic-automata
kind: proposition
title: "A DFA embeds as an epsilon-free NFA"
status: published
origin: pipeline
deps: [def-epsilon-nfa-word-transition, def-deterministic-finite-automaton, thm-existence-and-uniqueness-of-extended-dfa-transition, def-dfa-acceptance-and-recognized-language, thm-induction-principle]
justified_by: []
landmark: false
verification:
  audited: 2026-09-09
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
proof_strategy: induction
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Jean Gallier, Introduction to the Theory of Computation (2018), §§3.3–3.5"
      url: https://www.cis.upenn.edu/~jean/tcbook.pdf
    - title: "Alfred Aho, COMS W3261 Lecture 3, §§1–2"
      url: https://www.cs.columbia.edu/~aho/cs3261/Lectures/L3-Regular_Expressions.html
---

## Statement

For a total DFA $D=(Q,\Sigma,d,q_0,F)$, define $N_D$ with the same $Q,\Sigma,q_0,F$ and
$$\delta(q,a)=\{d(q,a)\}\quad(a\in\Sigma),\qquad \delta(q,\varepsilon)=\varnothing.$$
Then $N_D$ is an epsilon-NFA and for every $q\in Q$ and $w\in\Sigma^*$,
$$\widehat\delta_{N_D}(q,w)=\{d^*(q,w)\}.$$
Consequently $L(N_D)=L(D)$.

## Facts & Assumptions

**Given:** The total DFA $D$ and the displayed singleton/empty transition prescription.

[F1] A DFA has finite $Q,\Sigma$, start $q_0\in Q$, finals $F\subseteq Q$, and a total transition $d:Q\times\Sigma\to Q$ ([[def-deterministic-finite-automaton]]).

[F2] Epsilon-NFA closure is finite saturation; word transition starts with that closure and, after a letter, closes the union of successors; acceptance is nonempty intersection with $F$ ([[def-epsilon-nfa-word-transition]]).

[F3] The extended DFA transition exists and satisfies the empty-word and last-letter equations ([[thm-existence-and-uniqueness-of-extended-dfa-transition]]).

[F4] DFA acceptance is the condition $d^*(q_0,w)\in F$ ([[def-dfa-acceptance-and-recognized-language]]).

[F5] Induction holds for every natural length ([[thm-induction-principle]]).

## Proof

1.1 For each letter pair $(q,a)$ the element $d(q,a)$ exists in $Q$, so its singleton is a subset of $Q$. Each epsilon value is also a subset of $Q$, and the tagged epsilon domain is disjoint from the letter domain. Thus the prescription is total into $\mathcal P(Q)$; the other tuple requirements are inherited from $D$. It defines $N_D$. [F1, F2, given]

1.2 For any $S\subseteq Q$, the first saturation stage is $S\cup\bigcup_{q\in S}\varnothing=S$. Whenever a stage equals $S$, its next stage has the same value. Induction gives $C_k(S)=S$ for all $k$, hence $E(S)=S$, including $S=\varnothing$. [F2, F5, given]

2.1 Fix $q\in Q$. For the empty word, $\widehat\delta(q,\varepsilon)=E(\{q\})=\{q\}=\{d^*(q,\varepsilon)\}$. [step 1.2, F2, F3, base]

2.2 Assume $\widehat\delta(q,u)=\{d^*(q,u)\}$ for all words of length $k$. For a word $ua$ of length $k+1$, the union defining its next NFA state set has the single index $d^*(q,u)$. Therefore $\widehat\delta(q,ua)=E(\delta(d^*(q,u),a))=E(\{d(d^*(q,u),a)\})=\{d^*(q,ua)\}$. These equalities use the displayed singleton prescription, the identity closure, and the DFA successor equation. [step 1.2, F2, F3, given, ih]

3.1 Induction proves the singleton identity for every word and every initial state $q$. This remains valid when the alphabet is empty, since then there is only the empty word, and when $Q$ has one state. [step 2.1, step 2.2, F5, discharge-induction]

4.1 At $q=q_0$, nonempty intersection $\widehat\delta(q_0,w)\cap F\ne\varnothing$ implies its sole possible element $d^*(q_0,w)$ lies in $F$. Conversely membership of that element in $F$ witnesses the nonempty intersection. The NFA and DFA acceptance tests therefore agree for every word, giving $L(N_D)=L(D)$; in particular empty $F$ rejects all words and $F=Q$ accepts all words. [step 3.1, F2, F4, discharge-induction] ∎

## Source

This makes explicit the DFA-as-NFA observation in [Gallier, §3.5, p. 34](https://www.cis.upenn.edu/~jean/tcbook.pdf). The direction proved is DFA to epsilon-NFA; the subset construction is not a premise.
