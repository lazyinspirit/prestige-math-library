---
page: suprema-and-infima-examples
title: "Suprema and Infima: Examples and Counterexamples"
status: published
items: []
examples: [ex-sup-of-open-interval, ex-sup-of-closed-interval,
           ex-inf-of-reciprocals, ex-sup-rationals-below-sqrt-two,
           ex-sup-of-sum-of-sets, cex-sup-not-attained,
           cex-unbounded-set-has-no-sup, cex-empty-set-has-no-sup]
---

**Objective.** This page is the worked companion to the Suprema and Infima page,
linked under Prerequisites above. That page proves the toolkit; this one uses it,
on concrete sets, with every step carried out. There are no new definitions and
no new theorems here: five examples compute a supremum or an infimum in full, and
three counterexamples exhibit the witnesses behind the two false statements
recorded on the previous page.

The discipline of the page is that **nothing is asserted by inspection**. Saying
"clearly $\sup(0,1) = 1$" is not a proof, and the habit of saying it is exactly
what hides the difference between a bound and a best bound. Every computation
here has the same two halves. First, the candidate is verified to be a bound,
straight from the definition. Second, it is verified to be the *least* upper
bound, or the *greatest* lower bound, by the epsilon characterisation, which
requires producing, for each $\varepsilon > 0$, an explicit element of the set
beyond the candidate shifted by $\varepsilon$. Those witnesses are written down:
$\max\{1/2,\ 1 - \varepsilon/2\}$ for the open interval, an index supplied by the
Archimedean property for the reciprocals, a rational supplied by density for the
set below $\sqrt{2}$.

The examples are arranged so that each isolates one phenomenon. The open interval
$(0,1)$ has a supremum it does not contain; the closed interval $[0,1]$ has the
same supremum and does contain it, so the value of a supremum carries no
information at all about attainment. The set $\{1/n : n \ge 1\}$ misses its
infimum and attains its supremum at once, and what forces its infimum down to
$0$ rather than to something positive is the Archimedean property, invoked at one
identified step of the computation and nowhere else. The
set of positive rationals with square below $2$ is the historical reason for
building $\mathbb{R}$ at all: it has a supremum in $\mathbb{R}$, namely
$\sqrt{2}$, and no supremum in $\mathbb{Q}$, although inside $\mathbb{Q}$ it is
nonempty and bounded above. The sumset $(0,1) + (2,3)$ is the identity
$\sup(S+T) = \sup S + \sup T$ made concrete, with the set identity
$(0,1) + (2,3) = (2,4)$ proved rather than assumed.

The three counterexamples close the two false statements of the previous page.
A supremum need not lie in its set, witnessed by $(0,1)$. And a set need not have
a supremum at all, for two independent reasons: the naturals inside $\mathbb{R}$
are nonempty with no upper bound whatsoever, while the empty set has every real
as an upper bound and no least one among them. Both hypotheses of the
least-upper-bound property are therefore load bearing, and each fails on its own
witness.
