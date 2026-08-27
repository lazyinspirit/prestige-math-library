---
id: thm-completion-measurable-functions-have-base-measurable-representatives
kind: theorem
title: "A function measurable for a completion is almost everywhere equal to one measurable for the original sigma-algebra"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-measurable-functions-admit-dominated-simple-approximations, def-completion-of-a-measure-space, prop-null-sets-form-a-sigma-ideal-in-a-complete-space, thm-completion-of-a-measure-space, thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Sheldon Axler, Measure, Integration and Real Analysis, Theorem 2.95"
      url: "https://measure.axler.net/MIRA.pdf"
    - title: "John K. Hunter, Measure Theory, Section 3.5"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Assume the Axiom of Countable Choice. Let $(X,\mathcal{A}_0,\mu)$ be a measure space and let
$(X,\overline{\mathcal{A}_0},\overline{\mu})$ be its completion. If
$f : X \to \overline{\mathbb{R}}$ is measurable with respect to
$\overline{\mathcal{A}_0}$, then there is an $\mathcal{A}_0$-measurable function
$g : X \to \overline{\mathbb{R}}$ such that $f=g$ almost everywhere.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, a measure space
$(X,\mathcal{A}_0,\mu)$, its completion
$(X,\overline{\mathcal{A}_0},\overline{\mu})$, and an
$\overline{\mathcal{A}_0}$-measurable function
$f : X \to \overline{\mathbb{R}}$.

[L1] Every measurable function admits simple approximations dominated by its
absolute value. ([[cor-measurable-functions-admit-dominated-simple-approximations]])

[L2] A completed measurable set has the form $A \cup N$ with
$A \in \mathcal{A}_0$ and $N$ contained in a measurable null set.
([[def-completion-of-a-measure-space]])

[L3] Assuming Countable Choice, the completion is a complete measure space extending the original measure,
and countable unions of completed null sets are completed null sets.
([[thm-completion-of-a-measure-space]],
[[prop-null-sets-form-a-sigma-ideal-in-a-complete-space]])

[L4] Pointwise limsup of a sequence of measurable functions is measurable.
([[thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]])

## Proof

**Proof technique:** direct.

1.1 By [L1], choose simple $\overline{\mathcal{A}_0}$-measurable functions [L1, choose]
$s_k : X \to \mathbb{R}$ with $|s_k| \le |f|$ and $s_k(x) \to f(x)$ for every
$x \in X$. Write the canonical representation of $s_k$ as

$$s_k = \sum_{j=1}^{m_k} c_{k,j}\,\mathbf{1}_{E_{k,j}},$$

where the $E_{k,j}$ are pairwise disjoint completed measurable level sets.
[L1, choose]

1.2 For each pair $(k,j)$, apply [L2] to $E_{k,j}$ and choose [L2, L3, choose]
$A_{k,j} \in \mathcal{A}_0$ together with a completed null set $N_{k,j}$ such
that $E_{k,j} = A_{k,j} \cup M_{k,j}$ with $M_{k,j} \subseteq N_{k,j}$. Because
$A_{k,j} \subseteq E_{k,j}$, the sets $A_{k,j}$ remain pairwise disjoint.
Define

$$t_k := \sum_{j=1}^{m_k} c_{k,j}\,\mathbf{1}_{A_{k,j}}.$$

Then each $t_k$ is $\mathcal{A}_0$-measurable and simple. Let
$N := \bigcup_{k,j} N_{k,j}$. By [L3], $N$ is a completed measurable null set,
and for every $x \notin N$ one has $t_k(x)=s_k(x)$ for all $k$. [L2, L3, choose]

2.1 Define [step 1.1, step 1.2, L4]

$$g := \limsup_{k \to \infty} t_k.$$

By [L4], the function $g$ is $\mathcal{A}_0$-measurable. If $x \notin N$, then
step 1.2 gives $t_k(x)=s_k(x)$ for every $k$, and step 1.1 gives
$s_k(x)\to f(x)$, so
$g(x)=\limsup_k t_k(x)=\lim_k s_k(x)=f(x)$. Hence $g=f$ on $X \setminus N$.
[step 1.1, step 1.2, L4]

3.1 The null set $N$ is measurable in the completion by [L3], so step 2.1 says [step 2.1, L3]
exactly that $f=g$ almost everywhere. Since $g$ is $\mathcal{A}_0$-measurable,
it is the required base-measurable representative. [step 2.1, L3] ∎
