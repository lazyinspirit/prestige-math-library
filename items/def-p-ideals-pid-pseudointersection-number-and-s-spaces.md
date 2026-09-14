---
id: def-p-ideals-pid-pseudointersection-number-and-s-spaces
kind: definition
title: "P-ideals, PID, the pseudointersection number, and S-spaces"
status: draft
origin: pipeline
deps: [def-countable, def-cardinal, def-regular-and-t3-spaces, def-hausdorff-space, def-separable-space, def-compactness-variants, def-hereditary-property, def-axiom-of-choice]
justified_by: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Todorcevic, Forcing with a coherent Souslin tree, Section 2 pp.2-3 and Section 7 pp.20-22"
      url: https://www.math.toronto.edu/~stevo/todorcevic_chain_cond.pdf
---

## Definition

For subsets of a set $A$, write $x\subseteq^*y$ when $x\setminus y$ is finite,
and write $x\perp y$ when $x\cap y$ is finite. If $\mathcal F\subseteq
\mathcal P(A)$, then

$$\mathcal F^\perp=\{x\subseteq A:(\forall y\in\mathcal F)\ x\perp y\}.$$

An **ideal of countable subsets of $A$** is a family
$\mathcal I\subseteq[A]^{\leq\omega}$ that contains every finite subset of $A$,
is downward closed, and is closed under finite unions. It is a **P-ideal** if
for every sequence $\langle a_n:n<\omega\rangle$ in $\mathcal I$ there is
$b\in\mathcal I$ such that $a_n\subseteq^*b$ for every $n$. A set
$X\subseteq A$ is **orthogonal to $\mathcal I$** when
$X\in\mathcal I^\perp$, that is, $X\cap a$ is finite for every
$a\in\mathcal I$.

The **P-ideal dichotomy** (PID) says that for every such P-ideal $\mathcal I$
on every set $A$, at least one of the following holds:

1. there is an uncountable $B\subseteq A$ such that
   $[B]^{\leq\omega}\subseteq\mathcal I$;
2. there are sets $X_n\subseteq A$ for $n<\omega$ with
   $A=\bigcup_{n<\omega}X_n$ and each $X_n\perp\mathcal I$.

A family $\mathcal A\subseteq[\omega]^\omega$ has the **strong finite
intersection property** if $\bigcap\mathcal F$ is infinite for every finite
$\mathcal F\subseteq\mathcal A$ (including $\mathcal F=\varnothing$, whose
intersection is $\omega$). An infinite $b\subseteq\omega$ is a
**pseudointersection** of $\mathcal A$ when $b\subseteq^*a$ for every
$a\in\mathcal A$. The **pseudointersection number** $\mathfrak p$ is the least
cardinality of a strong-finite-intersection family in $[\omega]^\omega$ with no
infinite pseudointersection. This cardinal-invariant clause is read in ZFC: AC
well-orders the possible witness sizes and supplies the standard existence
argument for a witnessing centered family.

A topological space is **hereditarily separable** (respectively,
**hereditarily Lindel&ouml;f**) if every one of its subspaces is separable
(respectively, Lindel&ouml;f). An **S-space** is a regular Hausdorff,
hereditarily separable, non-Lindel&ouml;f space. Here regularity and Hausdorffness
are both stated because this library's word “regular” does not by itself carry
a separation axiom. The empty and singleton spaces are Lindel&ouml;f, so neither is
an S-space. These are predicates and cardinal definitions only; no individual
witness is selected in this item, but the existence and well-defined cardinal
value of $\mathfrak p$ use ambient AC as just stated.
