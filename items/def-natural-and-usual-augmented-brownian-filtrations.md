---
id: def-natural-and-usual-augmented-brownian-filtrations
kind: definition
title: "Natural and usual augmented Brownian filtrations"
status: draft
origin: pipeline
deps: [def-brownian-motion, def-continuous-time-filtration-and-all-pairs-martingale, thm-generated-sigma-algebra-exists-and-is-minimal, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Perla Sousi, Advanced Probability, Definition 6.10"
      url: "http://www.statslab.cam.ac.uk/~ps422/mynotes.pdf"
    - title: "Rick Durrett, Probability: Theory and Examples, fifth edition, Section 7.2"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
---

## Definition

Assume the Axiom of Choice. Let $B$ be a standard Brownian motion on a
probability space $(\Omega,\mathcal F,P)$ [[def-brownian-motion]]. Four
filtration-like families are distinguished.

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
   positive rationals, since $t\mapsto\mathcal F^0_t$ is increasing. This
   family is not adjoined to $P$.
3. **Terminal null ideal and completed raw filtration.** Let
   $$\mathcal N:=\{M\subseteq\Omega:\text{there is }N_0\in\mathcal F^0_\infty \text{ with }P(N_0)=0\text{ and }M\subseteq N_0\}$$
   be the family of subsets of $P$-null events of $\mathcal F^0_\infty$. Put
   $$\overline{\mathcal F}{}^0_t:=\sigma\bigl(\mathcal F^0_t\cup\mathcal N\bigr),\qquad t\ge0 .$$
   Each $\overline{\mathcal F}{}^0_t$ contains every member of $\mathcal N$
   (that is, it is $P$-complete in the ambient space) and
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
    Indeed, for $s>t$ and any $u>s$ one has
    $\mathcal F_s=\bigcap_{v>s}\overline{\mathcal F}{}^0_v\subseteq
    \overline{\mathcal F}{}^0_u$, so
    $\mathcal F_s\subseteq\bigcap_{u>s}\overline{\mathcal F}{}^0_u=\mathcal F_t$
    and hence $\bigcap_{s>t}\mathcal F_s\subseteq\mathcal F_t$; conversely
    $t\le s$ gives $\mathcal F_t\subseteq\mathcal F_s$, because
    $\overline{\mathcal F}{}^0$ is increasing and the intersection defining
    $\mathcal F_t$ ranges over the larger parameter set $\{u>t\}\supseteq\{u>s\}$,
    so $\mathcal F_t\subseteq\bigcap_{s>t}\mathcal F_s$.
(c) **Every completed set differs from a raw set by a null set.** Let
    $$\mathcal D_t:=\{A\subseteq\Omega:\text{there is }A_0\in\mathcal F^0_t \text{ and }M\in\mathcal N\text{ with }A\triangle A_0\subseteq M\}.$$
    Then $\mathcal D_t$ is a sigma-algebra containing
    $\mathcal F^0_t\cup\mathcal N$, hence $\overline{\mathcal F}{}^0_t=\mathcal D_t$:
    it is closed under complements and finite or countable unions because
    $\mathcal N$ is closed under countable unions and subsets, and the
    symmetric-difference calculus
    $(A\triangle A_0)\cup(A'\triangle A'_0)=(A\cup A')\triangle(A_0\cup A'_0)$
    holds up to subsets of null sets. In particular, for
    $A\in\overline{\mathcal F}{}^0_t$ one has $P(A)=P(A_0)$ for such an $A_0$,
    and $\int_AX\,dP=\int_{A_0}X\,dP$ for every measurable $X$: the two integrals
    differ by an integral over a null set.
(d) The four families $\mathcal F^0_t$, $\mathcal F^0_{t+}$,
    $\overline{\mathcal F}{}^0_t$ and $\mathcal F_t$ are kept distinct in every
    statement below. The strong Markov theorem is stated for $(\mathcal F_t)$
    and the deterministic Markov theorems are stated for both $(\mathcal F^0_t)$
    and $(\mathcal F_t)$; the companion examples page carries a counterexample
    showing that $\mathcal F^0_{0+}\ne\mathcal F^0_0$ in the canonical
    realization.

No completeness of $\mathcal F$ beyond the members of $\mathcal N$ is imposed on
the raw filtration, and no null set is removed from $\Omega$. Choice is declared
because the ambient Brownian construction and the conditional-expectation
interface used downstream assume it.

## Source notes

Sousi, Definition 6.10, distinguishes the natural filtration, its completion
and the right-continuous version, and defines the germ at zero through the
intersection over $t>0$. Durrett, Section 7.2, works with the completed
right-continuous filtration for the Markov and zero-one statements. The
symmetric-difference description (c) is recorded because both the Markov
theorems and Blumenthal's law need to move between a completed event and its
raw representative; it is elementary and is not attributed to either source.
