---
id: def-continuous-time-adapted-process-and-martingale
kind: definition
title: "Continuous-time adapted processes and martingales"
status: draft
origin: pipeline
deps: [def-continuous-time-filtration-and-all-pairs-martingale, def-continuous-time-stopping-time, def-conditional-expectation-as-an-ae-class, def-law-modification-and-indistinguishability-of-processes, def-axiom-of-choice, thm-choice-implies-dependent-implies-countable-choice]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Aad van der Vaart, Stochastic Integration and Differential Equations, Sections 4.1 and 5.4"
      url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"
---

## Definition

Assume the Axiom of Choice [[def-axiom-of-choice]]. Fix a probability space
$(\Omega,\mathcal F,P)$ with a continuous-time filtration
$(\mathcal F_t)_{t\ge0}$ in the sense of
[[def-continuous-time-filtration-and-all-pairs-martingale]]. All processes in
this definition are real-valued and indexed by $[0,\infty)$; the filtration is
neither assumed complete nor right-continuous. The Axiom of Choice is declared
because the conditional-expectation classes used in clause 3 are supplied by
the Radon--Nikodym interface of [[def-conditional-expectation-as-an-ae-class]],
which assumes it; the implication bridge
[[thm-choice-implies-dependent-implies-countable-choice]] records the inherited
countable-choice obligations of that interface.

1. **Adapted.** $X=(X_t)_{t\ge0}$ is **adapted** to $(\mathcal F_t)$ when $X_t$
   is $\mathcal F_t$-measurable for every $t\ge0$. This is exactly the notion
   of [[def-continuous-time-filtration-and-all-pairs-martingale]].

2. **Stopped process.** For a stopping time $\tau$ for $(\mathcal F_t)$
   [[def-continuous-time-stopping-time]] the **stopped process** is
   $$X^{\tau}_t(\omega):=X_{t\wedge\tau(\omega)}(\omega),\qquad t\ge0,$$
   with the convention $t\wedge\infty:=t$, so no value $X_\infty$ is ever
   required and $X^\tau_0=X_0$ identically. If in addition $\tau\le c$ for a
   deterministic constant $c$, then $X^\tau_t=X_{t\wedge\tau}$, and only the
   values of $X$ on $[0,c]$ enter. Stopping at a stopping time is not the same
   as replacing a process by a modification; it is a pathwise operation.

3. **Martingale.** $M=(M_t)_{t\ge0}$ is a **martingale** (an all-pairs
   continuous-time martingale) relative to $(\mathcal F_t)$ when it is adapted,
   $E|M_t|<\infty$ for every $t\ge0$, and for all $0\le s\le t$
   $$E[M_t\mid\mathcal F_s]=M_s\qquad\text{almost surely}.$$
   The equality is an equality of the almost-everywhere classes of
   [[def-conditional-expectation-as-an-ae-class]]; equivalently, every version
   of the conditional expectation on the left equals $M_s$ off one null set.
   At $s=t$ the identity reduces to the known-variable case. The word
   "continuous-time" refers to the index set only and does not assert path
   continuity.

4. **Local martingale.** $X=(X_t)_{t\ge0}$ is a **local martingale** relative
   to $(\mathcal F_t)$ when it is adapted and there exist stopping times
   $\tau_1\le\tau_2\le\cdots$ with $\tau_n\uparrow\infty$ almost surely such
   that for every $n$ the stopped process
   $$X^{\tau_n}-X_0=(X_{t\wedge\tau_n}-X_0)_{t\ge0}$$
   is a martingale in the sense of clause 3. The sequence $(\tau_n)$ is called
   a **localizing sequence**. The initial value is subtracted so that the
   localized process starts at $0$; no claim is made that $X$ itself is
   integrable at any time, and no claim is made that $X$ has continuous paths.

5. **Path and integrability attributes.** A process has **continuous paths**
   when $t\mapsto X_t(\omega)$ is continuous on $[0,\infty)$ for every $\omega$
   in an event of probability one; the usual almost-sure path conventions of
   [[def-law-modification-and-indistinguishability-of-processes]] apply. A
   martingale $M$ is **square-integrable** when $EM_t^2<\infty$ for every
   $t\ge0$, and **$L^2$-bounded** when $\sup_{t\ge0}EM_t^2<\infty$. These are
   properties of the single process under consideration, not of its versions:
   a modification of a martingale need not be adapted, so every later statement
   names the adapted versions it uses.

The following two remarks record the conventions in which the vocabulary is
used below, and are direct consequences of the clauses above.

1. **A martingale is a local martingale.** If $M$ is a martingale, the constant
   sequence $\tau_n:=n$ localizes it: the stopped process $M^{n}-M_0$ is again
   a martingale by the martingale identity applied at the deterministic times
   $s\wedge n\le t\wedge n$. The converse fails; a local martingale need not be
   a martingale, and no such implication is used in this development.
2. **Localization is stable under stopping.** If $(\tau_n)$ localizes $X$ and
   $\sigma$ is any stopping time, then $(\sigma\wedge\tau_n)$ localizes
   $X^\sigma$: the stopped pieces $(X^{\sigma})^{\sigma\wedge\tau_n}=X^{\sigma\wedge\tau_n}$
   are the corresponding pieces of the original localization, so they are
   martingales, and $\sigma\wedge\tau_n\uparrow\sigma$; when $\sigma\equiv\infty$
   this is the original sequence. This remark is used by the localized-integral
   item below.

No path continuity, no right continuity of the filtration, and no completeness
of the underlying probability space is imposed by this definition. Choice
enters only through the conditional-expectation interface named above, as
recorded by [[thm-choice-implies-dependent-implies-countable-choice]].
