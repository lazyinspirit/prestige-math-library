---
id: thm-prikry-forcing-adds-no-bounded-subsets
kind: theorem
title: Prikry forcing adds no bounded subsets of kappa
status: published
origin: pipeline
deps:
  - thm-prikry-property
  - def-lc-complete-ultrafilters-and-measurable-cardinals
  - thm-forcing-theorem
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Karagila, Forcing lecture notes, Section 9.2, Theorem 9.10(2)"
      url: https://karagila.org/files/Forcing-2023.pdf
---

## Statement

Let $\gamma<\kappa$, let $\dot x$ be a Prikry name, and suppose
$p\Vdash\dot x\subseteq\check\gamma$. There is a direct extension $q\le^*p$
and a ground-model $x\subseteq\gamma$ such that
$q\Vdash\dot x=\check x$. Thus Prikry forcing adds no bounded subset of
$\kappa$.

## Facts & Assumptions

**Given:** The forcing-theorem setting over a transitive ZFC ground model, a normal measure on $\kappa$, and $\gamma,\dot x,p$ as in the statement.

[F1] [[thm-prikry-property]]: Every sentence and condition have a direct extension deciding that sentence.

[F2] [[def-lc-complete-ultrafilters-and-measurable-cardinals]]: A normal measure is $\kappa$-complete, so fewer than $\kappa$ measure-one upper parts have measure-one intersection.

[F3] [[thm-forcing-theorem]]: Under generic existence through every condition, forcing is equivalent to truth in every generic extension containing that condition.

[F4] [[def-axiom-of-choice]]: Every family of nonempty sets has a choice function; it is used to fix a selector for the nonempty sets of direct deciding extensions.

## Proof

1.1 For each pair $(r,\xi)$ with $r\le^*p$ and $\xi<\gamma$, F1 makes the set of direct extensions of $r$ deciding ``$\check\xi\in\dot x$'' nonempty. By F4 choose one such extension for every pair. This fixed selector, rather than an unstated sequence of arbitrary choices, will drive the recursion. [F1, F4]

2.1 Write $p=(s,A_0)$. By transfinite recursion on $\xi<\gamma$, keep the stem $s$: at a successor use the selector from step 1.1 to obtain $p_{\xi+1}\le^*p_\xi$ deciding ``$\check\xi\in\dot x$'', and at a nonzero limit $\delta<\gamma$ take upper part $\bigcap_{\xi<\delta}A_\xi$. The latter is in the measure because $\delta<\gamma<\kappa$. Hence every $p_\xi$ is a condition and the sequence is direct-extension decreasing. [F1, F2, step 1.1]

3.1 Intersect all upper parts used in the recursion, including the original one, to obtain $B\in U$, and put $q=(s,B)$. This also covers $\gamma=0$, when the intersection has just the original factor. Define in the ground model $x=\{\xi<\gamma:p_{\xi+1}\Vdash\check\xi\in\dot x\}$. For every $\xi<\gamma$, $q\le p_{\xi+1}$, so $q$ forces the positive membership statement exactly when $\xi\in x$, and otherwise forces its negation. [F1, F2, step 2.1]

4.1 Let $G$ be any generic filter containing $q$. Since $q\le p$, the hypothesis gives $\dot x_G\subseteq\gamma$; step 3.1 says for every $\xi<\gamma$ that $\xi\in\dot x_G$ exactly when $\xi\in x$. Extensionality yields $\dot x_G=x$. By the semantic equivalence in F3, $q\Vdash\dot x=\check x$. The case $\gamma=0$ says simply that every subset of zero is empty, and was already included in step 3.1. [F3, step 3.1] $\square$
