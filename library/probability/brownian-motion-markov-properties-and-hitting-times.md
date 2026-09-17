---
page: brownian-motion-markov-properties-and-hitting-times
title: Brownian Motion, Markov Properties and Hitting Times
status: draft
items:
  - def-natural-and-usual-augmented-brownian-filtrations
  - def-brownian-transition-semigroup
  - lem-brownian-transition-semigroup-property
  - lem-conditioning-a-known-state-and-independent-noise
  - thm-brownian-markov-property
  - thm-brownian-future-path-markov-property
  - def-germ-sigma-algebra-at-zero
  - thm-blumenthal-zero-one-law
  - def-continuous-time-stopping-time
  - lem-brownian-first-hitting-times-of-closed-sets-are-stopping-times
  - thm-strong-markov-property-of-brownian-motion
  - thm-brownian-reflection-principle
  - cor-law-of-the-brownian-maximum
  - cor-distribution-of-a-one-sided-brownian-hitting-time
  - cor-one-dimensional-brownian-motion-hits-every-point-almost-surely
  - def-brownian-motion-started-at-x
  - thm-two-sided-exit-probability-for-brownian-motion
  - cor-one-dimensional-brownian-motion-is-recurrent
  - lem-planar-brownian-annular-exit-probability
  - rem-raw-versus-usual-filtration-in-the-strong-markov-theorem
examples: []
---

Brownian motion is placed in its raw natural filtration
[[def-natural-and-usual-augmented-brownian-filtrations]], which is then
completed by the terminal null sets and made right-continuous. The four
filtration conventions are kept distinct, and the germ sigma-algebra at zero
[[def-germ-sigma-algebra-at-zero]] is the first consumer of the completion
claims.

The transition operators [[def-brownian-transition-semigroup]] are shown to
agree with the expectation $E[f(x+B_t)]$, to form a semigroup, and to have the
Gaussian kernel representation
[[lem-brownian-transition-semigroup-property]]. Conditioning a known state on
independent noise [[lem-conditioning-a-known-state-and-independent-noise]] then
yields the deterministic-time Markov identity
[[thm-brownian-markov-property]] and the future-path Markov property
[[thm-brownian-future-path-markov-property]], from which Blumenthal's zero-one
law [[thm-blumenthal-zero-one-law]] follows at the germ.

Continuous-time stopping times and their stopped sigma-algebras are fixed in
[[def-continuous-time-stopping-time]]; closed-set hitting times are stopping
times by the exact rational-distance formula
[[lem-brownian-first-hitting-times-of-closed-sets-are-stopping-times]]; and the
strong Markov theorem [[thm-strong-markov-property-of-brownian-motion]] restarts
Brownian motion at an almost surely finite stopping time through dyadic
ceilings. Reflection [[thm-brownian-reflection-principle]] then gives the
maximum law [[cor-law-of-the-brownian-maximum]] and the one-sided hitting-time
distribution [[cor-distribution-of-a-one-sided-brownian-hitting-time]], hence
almost-sure hitting of every level
[[cor-one-dimensional-brownian-motion-hits-every-point-almost-surely]],
recurrence [[cor-one-dimensional-brownian-motion-is-recurrent]], and the
two-sided exit probability
[[thm-two-sided-exit-probability-for-brownian-motion]], whose shifted laws are
fixed by [[def-brownian-motion-started-at-x]]. The planar annular exit
calculation [[lem-planar-brownian-annular-exit-probability]] uses the same
shifted laws and the discrete optional sampling theorem. The filtration
conventions actually used are recorded in
[[rem-raw-versus-usual-filtration-in-the-strong-markov-theorem]].

Choice is declared wherever the Brownian, conditional-expectation or optional
sampling interfaces require it, and the countable-choice use is identified at
the distribution-function correspondence. The companion page
[[brownian-motion-markov-properties-and-hitting-times-examples]] carries the
concrete densities, crossing probabilities, exit computations, restart
examples, and the boundary counterexamples.
