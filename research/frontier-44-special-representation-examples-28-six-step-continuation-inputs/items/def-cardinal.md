---
id: def-cardinal
kind: definition
title: "Cardinal (initial ordinal) and cardinality"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-ordinal, lem-ordinal-basics, lem-ordinal-trichotomy, thm-mostowski-collapse, thm-well-ordering-theorem, thm-hartogs, def-axiom-of-choice, lem-omega-least-limit-ordinal, lem-nat-order-is-membership, lem-pigeonhole]
justified_by: []
aliases: [def-initial-ordinal, def-cardinality]
landmark: false
short: "ordinal not equinumerous with any smaller ordinal"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Cardinal number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cardinal_number"
    - title: "Von Neumann cardinal assignment (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Von_Neumann_cardinal_assignment"
    - title: "J. T. Moore, MATH 6870: Set Theory"
      url: "https://pi.math.cornell.edu/~justin/Limited2Cornell/lecture_notes.pdf"
    - title: "Ordinal number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordinal_number"
pipeline_run: null
---

## Definition

Write $X \approx Y$, and say $X$ and $Y$ are **equinumerous**, when there is a
bijection $X \to Y$.

An ordinal $\kappa$ ([[def-ordinal]]) is a **cardinal**, equivalently an
**initial ordinal**, when

$$\text{no } \alpha \in \kappa \text{ satisfies } \alpha \approx \kappa,$$

that is, $\kappa$ is not equinumerous with any strictly smaller ordinal.

**Cardinality, under the Axiom of Choice.** Assume the Axiom of Choice
([[def-axiom-of-choice]]) and let $X$ be a set. Then $X$ carries a well-order
([[thm-well-ordering-theorem]]), which has an order type $\alpha$
([[thm-mostowski-collapse]]) and in particular $\alpha \approx X$. Now
$\alpha^{+} = \alpha \cup \{\alpha\}$ is an ordinal ([[lem-ordinal-basics]],
claim (c)) whose elements are ordinals (claim (a)) and which contains $\alpha$,
so $C = \{\xi \in \alpha^{+} : \xi \approx X\}$ is a nonempty set of ordinals and
has an $\in$-least element $\kappa$ ([[lem-ordinal-trichotomy]]). This $\kappa$ is the
**cardinality** of $X$, written $|X|$; it is a cardinal, because
$\beta \in \kappa$ with $\beta \approx \kappa \approx X$ would lie in
$\alpha^{+}$ and contradict the minimality of $\kappa$.

**Well-definedness: $\kappa$ does not depend on the well-order or on $\alpha$.**
The recipe above instantiates a well-order of $X$ and an order type $\alpha$ for
it, and $X$ will in general carry many well-orders with many different order
types, so the value $\kappa$ has to be shown independent of both. It is, because
$\kappa$ is in fact the least ordinal equinumerous with $X$ **outright**, a
description in which neither the well-order nor $\alpha$ appears. Let $\beta$ be
any ordinal with $\beta \approx X$. By trichotomy for ordinals
([[lem-ordinal-trichotomy]]) exactly one of $\beta \in \alpha^{+}$,
$\beta = \alpha^{+}$, $\alpha^{+} \in \beta$ holds. In the first case
$\beta \in C$, so $\kappa \subseteq \beta$ by minimality of $\kappa$. In the
other two cases claim (f) of [[lem-ordinal-basics]] gives
$\alpha^{+} \subseteq \beta$, and $\alpha \in \alpha^{+}$ because
$\alpha^{+} = \alpha \cup \{\alpha\}$, so $\alpha \in \beta$ and hence
$\alpha \subseteq \beta$ by claim (f) again; and $\alpha \in C$, so
$\kappa \subseteq \alpha$ by minimality, whence $\kappa \subseteq \beta$. In every case
$\kappa \subseteq \beta$, that is $\kappa \le \beta$. So $\kappa$ is the least
element of the collection of **all** ordinals equinumerous with $X$, and any two
runs of the recipe, from any two well-orders of $X$, return the same $\kappa$.

## Remarks

- **What the well-definedness argument does and does not need.** The obligation
  is that $|X|$ depend on $X$ alone, and it is discharged in the definition
  itself, from two lemmas that are genuine prerequisites of this item and
  therefore sit in `deps` rather than in `justified_by`: comparability and
  trichotomy of ordinals ([[lem-ordinal-trichotomy]]) and the elementary closure
  facts ([[lem-ordinal-basics]]). Neither mentions cardinals, so neither points
  forward, and no separate discharging lemma is needed. The bound $\alpha^{+}$ is
  a device for turning "the least ordinal equinumerous with $X$" into a
  Separation instance over a **set**; the argument above is what shows that the
  device does not change the answer.

- **The definition is choice-free; the cardinality assignment is not.** Being a
  cardinal is a property of an ordinal and needs no axiom beyond ZF. Attaching a
  cardinality to an arbitrary *set* is a different matter: a set that carries no
  well-order is equinumerous with no ordinal at all, so $|X|$ simply does not
  exist for it. Without the Axiom of Choice there is no ordinal-valued notion of
  size for arbitrary sets, and what survives is [[thm-hartogs]]: every set $A$
  has a smallest ordinal $\aleph(A)$ that does not inject into it.
- **Most ordinals are not cardinals.** The successor $\omega^{+} = \omega \cup \{\omega\}$
  is equinumerous with $\omega \in \omega^{+}$, by the explicit bijection sending
  $\omega$ to $0$ and each natural number $n$ to $\sigma(n)$, which is a
  bijection because $\sigma$ is injective and its image is exactly the nonzero
  natural numbers. So $\omega^{+}$ is an ordinal and not a cardinal, and the
  same shift applies to the successor of any ordinal containing $\omega$.
  Cardinals are sparse among ordinals, which is
  precisely why the least one equinumerous with a given set is a useful
  representative.
- **Which ordinals up to and including $\omega$ are cardinals.** Every natural
  number is a cardinal, and so is $\omega$. Both facts are counting facts rather
  than order facts, and both come from the pigeonhole principle
  ([[lem-pigeonhole]]), proved on the countability page. Every natural number is
  an ordinal, and so is $\omega$ ([[lem-omega-least-limit-ordinal]], claim (ii));
  and if $\alpha \in n$ with $n$ a natural number then $\alpha$ is itself a
  natural number, since $\mathbb{N}$ is a transitive set
  ([[lem-nat-order-is-membership]]), with $\alpha < n$ by claim (i) of
  [[lem-omega-least-limit-ordinal]].
  So if some $\alpha \in n$ had $\alpha \approx n$, claim 3 of the pigeonhole
  principle would force $\alpha = n$ and hence $n \in n$, which claim (b) of
  [[lem-ordinal-basics]] forbids; therefore $n$ is a cardinal. And if some
  $\alpha \in \omega$ had $\alpha \approx \omega$, then $\alpha$ would be a
  natural number equinumerous with $\mathbb{N} = \omega$, which claim 4 of the
  pigeonhole principle forbids; therefore $\omega$ is a cardinal. Nothing else on
  this page depends on either fact, and the definition above is stated so that it
  does not.
- **Notation.** The infinite cardinals are traditionally written
  $\aleph_0, \aleph_1, \dots$, with $\aleph_0 = \omega$. That last equation can
  now be stated outright rather than quoted: it says $\omega$ is the least
  ordinal equinumerous with $\omega$, which is precisely the assertion that
  $\omega$ is a cardinal, established in the previous remark from claim 4 of
  [[lem-pigeonhole]]. Nothing below rests on it. The notation
  $\aleph(A)$ for the Hartogs number of $A$ ([[thm-hartogs]]) comes from the
  same source and is deliberately close: under the Axiom of Choice
  $\aleph(A)$ is the successor cardinal of $|A|$.
- **Why initial ordinals rather than equivalence classes.** The natural
  definition of "cardinal" as the class of all sets equinumerous with a given
  one never yields a set, for the same reason as in [[thm-burali-forti]].
  Choosing the least ordinal in the class is von Neumann's fix, and it works
  exactly when the class contains an ordinal, which is exactly when the set can
  be well ordered.
