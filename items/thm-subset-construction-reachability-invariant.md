---
id: thm-subset-construction-reachability-invariant
kind: theorem
title: "Subset construction and its exact reachability invariant"
status: draft
origin: pipeline
deps: [def-epsilon-nfa-word-transition, def-deterministic-finite-automaton, thm-existence-and-uniqueness-of-extended-dfa-transition, def-dfa-acceptance-and-recognized-language, cor-cardinality-of-the-power-set, thm-induction-principle]
justified_by: []
landmark: false
verification:
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

Let $N=(Q,\Sigma,\delta,q_0,F)$ be an epsilon-NFA, with $E=\operatorname{ECl}$ and $\widehat\delta$ as in [[def-epsilon-nfa-word-transition]]. Define
$$D_N=(\mathcal P(Q),\Sigma,\mu,S_0,G),\qquad S_0=E(\{q_0\}),\qquad G=\{T\subseteq Q:T\cap F\ne\varnothing\},$$
$$\mu(T,a)=E\left(\bigcup_{q\in T}\delta(q,a)\right).$$
This is a total DFA with $2^{|Q|}$ states. Its extended transition satisfies, for every $S\subseteq Q$ and $w\in\Sigma^*$,
$$\mu^*(E(S),w)=\widehat\delta(S,w).$$
In particular $\mu^*(S_0,w)=\widehat\delta(q_0,w)$ and $L(D_N)=L(N)$. The empty subset is a legitimate absorbing state, whether or not it is reachable from $S_0$.

## Facts & Assumptions

**Given:** The epsilon-NFA $N$ above, and the displayed definitions of $\mu,S_0,G$.

[F1] Epsilon closure maps subsets to subsets, has $E(\varnothing)=\varnothing$, and the NFA word transition satisfies the initial and successor equations and the final-set intersection test ([[def-epsilon-nfa-word-transition]]).

[F2] For finite $Q$, its power set is finite with cardinality $2^{|Q|}$ ([[cor-cardinality-of-the-power-set]]).

[F3] A DFA requires a finite state set, an element chosen as start, a subset of accepting states, and a total letter transition into its state set ([[def-deterministic-finite-automaton]]).

[F4] Every DFA has a unique extended transition with $d^*(q,\varepsilon)=q$ and $d^*(q,ua)=d(d^*(q,u),a)$ ([[thm-existence-and-uniqueness-of-extended-dfa-transition]]).

[F5] A DFA accepts $w$ exactly when its extended transition from the start belongs to its accepting set ([[def-dfa-acceptance-and-recognized-language]]).

[F6] Zero and successor establish a property for every natural length ([[thm-induction-principle]]).

## Proof

1.1 Since $Q$ is finite, $\mathcal P(Q)$ is finite with $2^{|Q|}$ elements. It is nonempty because $\varnothing\subseteq Q$. For every $T\subseteq Q$ and $a\in\Sigma$, all $\delta(q,a)$ lie in $\mathcal P(Q)$, so their union and its closure are subsets of $Q$. Thus $\mu$ is defined on all $\mathcal P(Q)\times\Sigma$ and takes values in $\mathcal P(Q)$. Moreover $S_0\subseteq Q$ and $G\subseteq\mathcal P(Q)$. These verify the DFA hypotheses and give its extended transition $\mu^*$. [F1, F2, F3, F4]

1.2 Fix any $S\subseteq Q$. At length zero, $\mu^*(E(S),\varepsilon)=E(S)=\widehat\delta(S,\varepsilon)$. This includes $S=\varnothing$ and subsets that are not epsilon-closed. [F1, F4, base]

1.3 Assume the equality holds for every word $u$ of length $k$, and write a word of length $k+1$ uniquely as $ua$. Then $\mu^*(E(S),ua)=\mu(\mu^*(E(S),u),a)=\mu(\widehat\delta(S,u),a)=E(\bigcup_{q\in\widehat\delta(S,u)}\delta(q,a))=\widehat\delta(S,ua)$. The second equality uses the induction hypothesis, and the last uses the NFA recursion. [F1, F4, ih, given]

2.1 Induction on length proves the equality for every $w$; since $S$ was arbitrary, it holds for every subset. Taking $S=\{q_0\}$ gives $\mu^*(S_0,w)=\widehat\delta(q_0,w)$. [step 1.2, step 1.3, F6, discharge-induction]

3.1 If $D_N$ accepts $w$, then $\mu^*(S_0,w)\in G$, so $\widehat\delta(q_0,w)\cap F\ne\varnothing$ and $N$ accepts $w$. Conversely if $N$ accepts $w$, that intersection is nonempty, so $\mu^*(S_0,w)\in G$ and $D_N$ accepts $w$. This proves equality of the two languages, also for $F=\varnothing$ (neither accepts) and $F=Q$ (acceptance is exactly nonemptiness of the reached subset). [step 2.1, F1, F5, given]

4.1 For any letter $a$, the union indexed by the empty set is empty, whence $\mu(\varnothing,a)=E(\varnothing)=\varnothing$. Its extended transition stays empty: the empty-word value is empty, and if the value at $u$ is empty, the successor value is $\mu(\varnothing,a)=\varnothing$. Induction gives absorption for every word. If $\Sigma=\varnothing$, the transition has empty domain and the same empty-word calculation applies; a one-state $Q$ causes no exception to the power-set count or the proof. [F1, F4, F6, step 1.1, step 3.1, discharge-induction] ∎

## Source conventions

[Aho, Lecture 3 §2](https://www.cs.columbia.edu/~aho/cs3261/Lectures/L3-Regular_Expressions.html) uses the full power set as here. [Gallier, §3.5, pp. 33–34](https://www.cis.upenn.edu/~jean/tcbook.pdf) restricts to epsilon-closed subsets. Our invariant starts at $E(S)$; replacing that by an arbitrary unclosed $S$ would already make the empty-word equality false. No minimization claim is made.
