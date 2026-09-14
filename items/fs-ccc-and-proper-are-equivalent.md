---
id: fs-ccc-and-proper-are-equivalent
kind: false-statement
title: "Ccc and proper are not equivalent"
status: draft
origin: pipeline
deps: [thm-ccc-and-countably-closed-forcings-are-proper, def-cohen-collapse-and-levy-collapse-forcings, def-poset-ccc-and-knaster-property, thm-countable-union-of-countable, def-axiom-of-choice]
justified_by: []
forward_refs: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: counterexample
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Karagila, Forcing & Symmetric Extensions, Theorems 8.7-8.8"
      url: https://karagila.org/files/Forcing-2023.pdf
---

## False statement

A forcing preorder is proper if and only if it is ccc.

## Facts & Assumptions

**Given:** ZFC, with stronger forcing conditions ordered smaller.

[F1] Every ccc forcing preorder and every countably closed forcing preorder is proper. [[thm-ccc-and-countably-closed-forcings-are-proper]]

[F2] The notation $\operatorname{Fn}(I,J,{<}\kappa)$ denotes partial functions from $I$ to $J$ whose domains have size ${<}\kappa$, ordered by reverse inclusion; the standard forcing orders using this notation have the empty function as their greatest condition. [[def-cohen-collapse-and-levy-collapse-forcings]]

[F3] A forcing is ccc exactly when every set of pairwise incompatible conditions is countable. [[def-poset-ccc-and-knaster-property]]

[F4] A countable union of at most countable sets is at most countable, using the Axiom of Countable Choice. [[thm-countable-union-of-countable]]

[A1] AC, and hence its countable fragment, is available in ZFC. [[def-axiom-of-choice]]

## Counterexample

1.1 Let $$P=\operatorname{Fn}(\omega_1,2,{<}\omega_1),$$ ordered by reverse inclusion. By F2 its conditions are the countable partial functions from $\omega_1$ to $2$, and the empty function is its greatest condition. In particular, $P$ is nonempty. (It is not being identified with $\operatorname{Col}(\omega_1,2)$, whose displayed parameters would violate that definition's requirement $\kappa\leq\lambda$.) [F2]

1.2 For every $\alpha<\omega_1$, define $p_\alpha\in P$ on $\alpha+1$ by $$p_\alpha(\xi)= \begin{cases} 0,&\xi<\alpha,\\ 1,&\xi=\alpha. \end{cases}$$ The domain is countable because $\alpha$ is a countable ordinal. If $\alpha<\beta<\omega_1$, then $p_\alpha(\alpha)=1$ whereas $p_\beta(\alpha)=0$. No function can extend both, so $p_\alpha$ and $p_\beta$ are incompatible. Consequently $\{p_\alpha:\alpha<\omega_1\}$ is an uncountable antichain, and F3 shows that $P$ is not ccc. Notice that $p_0=\{(0,1)\}$, so the zero endpoint also obeys the displayed definition. [F2, F3]

2.1 Suppose $\langle q_n:n<\omega\rangle$ is descending in $P$. Reverse inclusion means $q_n\subseteq q_{n+1}$, so $q=\bigcup_{n<\omega}q_n$ is a function extending every $q_n$. Each $\operatorname{dom}(q_n)$ is countable, and F4 with A1 makes their union countable. Hence $q\in P$ and $q\leq q_n$ for every $n$. Thus $P$ is countably closed. Constant sequences, including the constant empty-condition sequence, are covered by the same union calculation. [F2, F4, A1, step 1.1]

3.1 By F1, the countably closed forcing $P$ is proper. [F1, step 2.1]

4.1 The forward implication, ccc implies proper, is true by F1. Steps 3.1 and 1.2 give one proper forcing that is not ccc, so the reverse implication and therefore the advertised equivalence are false. AC is spent only through the countable-union assertion in step 2.1; no generic filter or further choice is used in the antichain witness. [F1, F4, A1, step 2.1, step 3.1, step 1.2] ∎
