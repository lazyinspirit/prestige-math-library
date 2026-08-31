---
id: thm-dfa-to-regular-expression
kind: theorem
title: "Every DFA language is denoted by a regular expression"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-generalized-nfa, def-gnfa-state-elimination, lem-state-elimination-preserves-path-language, def-dfa-acceptance-and-recognized-language]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://www.scribd.com/document/977881977/Tcbook-Lang"
---

## Statement

If $D$ is a DFA over $\Sigma$, then there exists a regular expression $R$ over
$\Sigma$ such that
$$ \mathcal L(R)=L(D). $$

## Facts & Assumptions

**Given:** A DFA $D=(Q,\Sigma,\delta,q_0,F)$.

[L1] By [[def-generalized-nfa]], a GNFA accepts the words read along paths from its start state to its accept state, and the intermediate-state restriction is tracked by the sets $P_K(p,q)$.

[L2] By [[def-gnfa-state-elimination]], eliminating an interior GNFA state uses the update $\lambda'(p,q)=\lambda(p,q)+\lambda(p,r)(\lambda(r,r))^*\lambda(r,q)$.

[L3] By [[lem-state-elimination-preserves-path-language]], one elimination step preserves the path language between every surviving state pair.

[L4] By [[def-dfa-acceptance-and-recognized-language]], a word belongs to $L(D)$ exactly when the run of $D$ from $q_0$ ends in a state of $F$.

## Proof

**Proof technique:** direct.

1.1 Form a GNFA $G_0$ by adjoining a new start state $s$ and a new accept state $t$ to the DFA states. Put the label $\varepsilon$ on $s\to q_0$ and on each edge $f\to t$ with $f\in F$. For DFA states $p,q\in Q$, label $p\to q$ by the union of all letters $a\in\Sigma$ with $\delta(p,a)=q$, and use $\varnothing$ on every remaining ordered pair. By [L4], a word is accepted by $D$ exactly when it labels a path from $s$ to $t$ through the old DFA states, so $L(D)=P^{G_0}_Q(s,t)$. [L1, L4, given, construct]

2.1 Eliminate the states of $Q$ one at a time. At each step use the update from [L2]. By [L3], after each elimination the start-to-accept path language is unchanged. Therefore, when all interior states have been removed, the resulting two-state GNFA $G_f$ still satisfies $L(G_f)=L(D)$. [L2, L3, step 1.1]

3.1 In $G_f$ the only possible accepting paths go directly from $s$ to $t$, so by [L1] the accepted language is exactly the denotation of the sole label on that edge. Hence some regular expression denotes $L(D)$. [L1, step 2.1] ∎
