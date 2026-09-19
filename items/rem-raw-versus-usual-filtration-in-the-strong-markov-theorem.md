---
id: rem-raw-versus-usual-filtration-in-the-strong-markov-theorem
kind: remark
title: "Raw versus usual filtrations in the strong Markov theorem"
status: draft
origin: pipeline
deps: [def-natural-and-usual-augmented-brownian-filtrations, thm-strong-markov-property-of-brownian-motion, thm-brownian-future-path-markov-property, def-brownian-motion, def-axiom-of-choice]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Perla Sousi, Advanced Probability, Sections 6.3-6.5"
      url: "http://www.statslab.cam.ac.uk/~ps422/mynotes.pdf"
    - title: "Rick Durrett, Probability: Theory and Examples, fifth edition, Section 7.3"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
---

## Remark

The strong Markov theorem [[thm-strong-markov-property-of-brownian-motion]] is
stated for the usual augmentation $(\mathcal F_t)$, not for the raw natural
filtration $(\mathcal F^0_t)$
[[def-natural-and-usual-augmented-brownian-filtrations]]. Four distinctions
matter and are fixed by that choice.

1. **The theorem names the filtration it uses.** Its hypothesis is that $\tau$
   is a stopping time for $(\mathcal F_t)$ with $\tau<\infty$ almost surely;
   the conclusion is an identity of conditional expectations given
   $\mathcal F_\tau$. Neither the raw filtration nor the completed raw
   filtration is substituted for the usual one in the statement.
2. **What the dyadic proof actually uses.** The ceiling times
   $\tau_n=2^{-n}\lceil2^n\tau\rceil$ are stopping times of the same filtration
   and satisfy $\mathcal F_\tau\subseteq\mathcal F_{\tau_n}$; the countably
   valued case applies the deterministic future-path theorem
   [[thm-brownian-future-path-markov-property]] at the countably many values of
   $\tau_n$; and the passage to general $\tau$ uses path continuity and
   dominated convergence. Completion enters through the null event
   $\{\tau=\infty\}$, on which $B_\tau$ is defined by a convention, and through
   the identification of conditional laws up to null sets.
3. **Completion is not independence from arbitrary future information.** The
   theorem asserts that the increment process
   $(B_{\tau+t}-B_\tau)_{t\ge0}$ is independent of $\mathcal F_\tau$ and that
   the conditional law of the shifted future path is Wiener measure translated
   by $B_\tau$. For $\tau$ equal to a deterministic time $s>0$ this is not the
   claim that the future path $(B_{s+t})_{t\ge0}$ is independent of
   $\mathcal F_s$: its conditional law depends on the state $B_s$ through the
   translation, and only the increment process is independent of the past. No
   completion of the filtration removes that dependence, and none of the items
   on this page asserts it.
4. **The stopping-time hypothesis is not decorative.** For a random time that
   is not a stopping time the conclusion can fail outright; the companion
   example `cex-strong-markov-fails-at-a-nonstopping-random-time` on the
   companion examples page exhibits
   the last zero before a fixed time, where the post-time future has no zero in
   a right-neighbourhood and therefore cannot have the Wiener law.

The strict and non-strict forms of the stopping tests agree for the usual
augmentation because it is right-continuous, while the raw statements on this
page use the non-strict test directly; the ceiling identity
$\{\tau_n\le t\}=\{\tau\le2^{-n}\lfloor2^nt\rfloor\}$ is a non-strict test and
needs no right-continuity. AC is declared because the conditional-expectation
interface and the ambient Brownian construction assume it.

- **Reading order.** The example items named by ID above are homed on later pages of the plan, so they are named rather than hyperlinked: a body link to later material must be declared as a forward reference, and Step-5b closure removes every such declaration. Rehoming those items to an earlier page (an owner-only reading-order change) would make the citations backward and restore the links.

## Source notes

Sousi, Sections 6.3-6.5, distinguishes the natural filtration from its
right-continuous completion and states the strong Markov property for the
latter; Durrett, Section 7.3, works throughout with the completed filtration.
The counterexample on the companion page is oriented as a boundary for the
stopping-time hypothesis, not used as a supplier anywhere in this pair.
