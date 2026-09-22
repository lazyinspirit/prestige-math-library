---
id: def-natural-and-usual-augmented-brownian-filtrations
kind: definition
title: "Natural and usual augmented Brownian filtrations"
status: draft
origin: pipeline
deps: [def-brownian-motion, def-continuous-time-filtration-and-all-pairs-martingale, thm-generated-sigma-algebra-exists-and-is-minimal, def-axiom-of-choice, thm-completion-of-a-measure-space, prop-null-sets-form-a-sigma-ideal-in-a-complete-space, thm-the-lebesgue-integral-respects-almost-everywhere-equality, lem-ac-supplies-sequential-choices-for-probability-constructions]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Perla Sousi, Advanced Probability, Definition 6.10"
      url: "https://www.statslab.cam.ac.uk/~ps422/mynotes.pdf"
    - title: "Rick Durrett, Probability: Theory and Examples, fifth edition, Section 7.2"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
---

## Definition

Assume the Axiom of Choice. Let $B$ be a standard Brownian motion on a
probability space $(\Omega,\mathcal F,P)$ [[def-brownian-motion]]. First
replace the ambient space by its completion, retaining the notation
$(\Omega,\mathcal F,P)$ for this extension. This is supplied by
[[thm-completion-of-a-measure-space]]; AC supplies its countable-choice
hypothesis by [[lem-ac-supplies-sequential-choices-for-probability-constructions]].
The coordinate functions, their laws, and their raw sigma-algebras are unchanged.
Four families are distinguished.

1. **Raw natural filtration.** $\mathcal F^0_t:=\sigma(B_s:0\le s\le t)$ for
   $t\ge0$, and $\mathcal F^0_\infty:=\sigma\bigl(\bigcup_{t\ge0}\mathcal F^0_t\bigr)
   =\sigma(B_s:s\ge0)$. Both sigma-algebras exist by
   [[thm-generated-sigma-algebra-exists-and-is-minimal]], and
   $(\mathcal F^0_t)_{t\ge0}$ is a continuous-time filtration in the sense of
   [[def-continuous-time-filtration-and-all-pairs-martingale]], the smallest one
   to which $B$ is adapted. It contains no completion and no right-continuous
   augmentation.
2. **Raw right limit.** $\mathcal F^0_{t+}:=\bigcap_{u>t}\mathcal F^0_u$ for
   $t\ge0$. At $t=0$ this is the germ sigma-algebra used later on this page;
   the uncountable intersection is the decreasing intersection over the
   rational $u>t$, since $t\mapsto\mathcal F^0_t$ is increasing. No null
   sets are adjoined in this operation.
3. **Ambient null ideal and completed raw filtration.** Let
   $$\mathcal N:=\{M\subseteq\Omega:\text{there is }N_0\in\mathcal F\text{ with }P(N_0)=0\text{ and }M\subseteq N_0\}$$
   be the family of all subsets of ambient $P$-null events. These sets are
   ambient-measurable because the ambient probability space was completed.
   This is a sigma-ideal: for a countable family choose null envelopes using
   AC, then take their union; subsets require the same envelope.
   Nullness follows from
   [[prop-null-sets-form-a-sigma-ideal-in-a-complete-space]]. Put
   $$\overline{\mathcal F}{}^0_t:=\sigma\bigl(\mathcal F^0_t\cup\mathcal N\bigr),\qquad t\ge0 .$$
   Each $\overline{\mathcal F}{}^0_t$ is a sub-sigma-algebra of $\mathcal F$,
   contains every member of $\mathcal N$, and
   $\overline{\mathcal F}{}^0_s\subseteq\overline{\mathcal F}{}^0_t$ for
   $s\le t$, so $(\overline{\mathcal F}{}^0_t)_{t\ge0}$ is a filtration.
4. **Usual augmentation.** $\mathcal F_t:=\bigcap_{u>t}\overline{\mathcal F}{}^0_u$
   for $t\ge0$.

The following facts are part of the definition and are the form in which it is
used later.

(a) $\mathcal F^0_t\subseteq\overline{\mathcal F}{}^0_t\subseteq\mathcal F_t$
    for every $t\ge0$, and every $\mathcal F_t$ contains $\mathcal N$.
(b) $(\mathcal F_t)_{t\ge0}$ is increasing and **right-continuous**: for every
    $t\ge0$,
    $$\bigcap_{s>t}\mathcal F_s=\mathcal F_t .$$
    Indeed, if $A\in\bigcap_{s>t}\mathcal F_s$, fix $u>t$ and take
    $s=(t+u)/2$. Then $A\in\mathcal F_s\subseteq\overline{\mathcal F}{}^0_u$.
    Since $u>t$ was arbitrary, $A\in\mathcal F_t$. Conversely
    $t\le s$ gives $\mathcal F_t\subseteq\mathcal F_s$, because
    $\overline{\mathcal F}{}^0$ is increasing and the intersection defining
    $\mathcal F_t$ ranges over the larger parameter set $\{u>t\}\supseteq\{u>s\}$,
    so $\mathcal F_t\subseteq\bigcap_{s>t}\mathcal F_s$.
(c) **Every completed set differs from a raw set by a null set.** Let
    $$\mathcal D_t:=\{A\subseteq\Omega:\text{there is }A_0\in\mathcal F^0_t \text{ and }M\in\mathcal N\text{ with }A\triangle A_0\subseteq M\}.$$
    Then $\mathcal D_t$ is a sigma-algebra containing
    $\mathcal F^0_t\cup\mathcal N$: complementation preserves symmetric
    difference, and, after selecting countably many witnesses by AC,
    $$(\bigcup_k A_k)\triangle(\bigcup_k A_{0,k})\subseteq\bigcup_k(A_k\triangle A_{0,k})\subseteq\bigcup_k M_k\in\mathcal N.$$
    Thus $\overline{\mathcal F}{}^0_t\subseteq\mathcal D_t$. Conversely,
    if $A\triangle A_0\subseteq M\in\mathcal N$, then
    $A\triangle A_0\in\mathcal N$, so
    $A=A_0\triangle(A\triangle A_0)\in\overline{\mathcal F}{}^0_t$.
    This proves equality, and also ambient measurability of every $A\in\mathcal D_t$.
    In particular, for
    $A\in\overline{\mathcal F}{}^0_t$ one has $P(A)=P(A_0)$ for such an $A_0$,
    and $\int_AX\,dP=\int_{A_0}X\,dP$ for every integrable real or complex $X$,
    by [[thm-the-lebesgue-integral-respects-almost-everywhere-equality]]
    applied to $X1_A$ and $X1_{A_0}$. Apply it to indicators for the measure
    equality. If $P(A)=0$, its raw representative $A_0$ is null, so
    $A\subseteq A_0\cup M$ is contained in an ambient null envelope.
    Every subset of $A$ therefore belongs to $\mathcal N$.
    This proves completeness of each $\overline{\mathcal F}{}^0_t$.
    It also proves completeness of $\mathcal F_t$: a null member belongs
    to $\overline{\mathcal F}{}^0_{t+1}$ and hence all its subsets belong to
    $\mathcal N\subseteq\mathcal F_t$. Thus every ambient null event and
    every one of its subsets belongs already to $\mathcal F_0$; together
    with right-continuity, this is the usual-conditions convention used below.
(d) The four families $\mathcal F^0_t$, $\mathcal F^0_{t+}$,
    $\overline{\mathcal F}{}^0_t$ and $\mathcal F_t$ are kept distinct in every
    statement below. The strong Markov theorem is stated for $(\mathcal F_t)$
    and the deterministic Markov theorems are stated for both $(\mathcal F^0_t)$
    and $(\mathcal F_t)$; the companion examples page carries a counterexample
    showing that $\mathcal F^0_{0+}\ne\mathcal F^0_0$ in the canonical
    realization.

The raw filtration remains raw even though the ambient measure has been
completed; no null set is removed from $\Omega$. Choice is used for the
completion theorem and the countable witnesses above, and is also inherited
from the ambient Brownian construction.

## Source notes

Sousi, Definition 6.10 (printed p. 54), defines the natural filtration and
its raw right limit; it does not supply the completion construction.
Completion is supplied by the declared measure-space theorem, with the
ambient-null-ideal convention and the symmetric-difference description
proved above. These distinctions are needed when moving between completed
events and raw representatives in the later Markov and zero-one arguments.
