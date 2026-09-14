---
id: thm-proper-forcing-preserves-stationary-subsets-of-omega-one
kind: theorem
title: "Proper forcing preserves stationary subsets of omega-one"
status: draft
origin: pipeline
deps: [lem-proper-master-condition-characterizations, def-club-filter-and-nonstationary-ideal, thm-forcing-theorem, def-axiom-of-choice]
justified_by: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Karagila, Forcing & Symmetric Extensions, Theorems 8.8-8.9 and complete proofs, printed pp. 39-40"
      url: https://karagila.org/files/Forcing-2023.pdf
---

## Statement

In ZFC, every proper forcing preserves every ground-model stationary subset
of $\omega_1$. In particular, proper forcing preserves $\omega_1$.

## Facts & Assumptions

**Given:** A proper forcing $P$, a stationary $S\subseteq\omega_1$ in the ground model, a condition $p\in P$, and a name $\dot C$ forced by $p$ to be club in $\omega_1$.

[F1] Master genericity is equivalent to forcing every ordinal-valued name in $M$ to have value in $M$. [[lem-proper-master-condition-characterizations]]

[F2] Clubs are closed and unbounded, and stationarity means meeting every club. [[def-club-filter-and-nonstationary-ideal]]

[F3] The forcing theorem supplies names, decision, and truth in the generic extension. [[thm-forcing-theorem]]

[A1] AC supplies ambient well-orders, Skolem functions, and the normal enumeration of a named club. [[def-axiom-of-choice]]

## Proof

1.1 Choose a sufficiently large well-ordered $H_\theta$ structure containing $P,p,S,\dot C$, and fix Skolem functions for it. We first derive the elementary-model trace fact needed here. For $\beta<\omega_1$, let $M_\beta$ be the Skolem hull of $\beta\cup\{P,p,S,\dot C\}$ and put $$f(\beta)=\sup(M_\beta\cap\omega_1)+1<\omega_1.$$ The set $E$ of nonzero limit ordinals $\delta<\omega_1$ closed under $f$ is club. If $\delta\in E$, finite character of Skolem terms gives $M_\delta=\bigcup_{\beta<\delta}M_\beta$, so $M_\delta\cap\omega_1=\delta$. By stationarity choose $\delta\in S\cap E$ and set $M=M_\delta$. Then $M$ is countable elementary, contains all the required parameters, and has trace $M\cap\omega_1=\delta$. Properness supplies an $(M,P)$-master $q\leq p$. [F1, F2, A1, Given]

2.1 In $M$ choose a name $\dot f$ which $p$ forces to be the increasing continuous enumeration of $\dot C$. For every $\alpha<\delta$, one has $\alpha\in M$ and hence the ordinal name $\dot f(\check\alpha)$ belongs to $M$. By F1, $q$ forces its value into $M\cap\omega_1=\delta$. Thus $q$ forces $\dot f``\delta\subseteq\delta$. Since an increasing enumeration satisfies $\dot f(\alpha)\geq\alpha$, its first $\delta$ values are cofinal in $\delta$; closure of $\dot C$ then gives $q\Vdash\delta\in\dot C$. As $\delta\in S$ is a ground ordinal, $q\Vdash\dot C\cap\check S\ne\varnothing$. [F1, F2, F3, A1, step 1.1]

3.1 The choices of $p$ and the club name were arbitrary, so no condition can force a ground stationary $S$ to become nonstationary. To see preservation of $\omega_1$ without a hidden cofinality inference, let $p$ force that $\dot g:\omega\to\omega_1^V$ is any function, choose a relevant countable model $M$ containing $p,\dot g$, and use properness to choose an $(M,P)$-master $q\leq p$. F1 then forces each $\dot g(n)$ into the fixed countable ordinal $M\cap\omega_1$, so the range is bounded and $\dot g$ is not cofinal, hence not surjective. Therefore $\omega_1^V$ remains uncountable and equals the extension's $\omega_1$. AC is used exactly in A1. [F1, F3, A1, step 2.1] ∎
