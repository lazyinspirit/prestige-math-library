---
id: def-cardinal
kind: definition
title: "Cardinal (initial ordinal) and cardinality"
status: draft
origin: session
deps: [def-ordinal, lem-ordinal-basics, lem-ordinal-trichotomy, thm-mostowski-collapse, thm-well-ordering-theorem, thm-hartogs, def-axiom-of-choice]
justified_by: []
aliases: [def-initial-ordinal, def-cardinality]
landmark: false
short: "ordinal not equinumerous with any smaller ordinal"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Cardinal number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cardinal_number"
    - title: "Von Neumann cardinal assignment (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Von_Neumann_cardinal_assignment"
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
([[thm-mostowski-collapse]]) and in particular $\alpha \approx X$. The set
$\{\xi \in \alpha^{+} : \xi \approx X\}$ is a nonempty set of ordinals
([[lem-ordinal-basics]]), so it has a least element $\kappa$
([[lem-ordinal-trichotomy]]). This $\kappa$ is the **cardinality** of $X$,
written $|X|$; it is a cardinal, because $\beta \in \kappa$ with
$\beta \approx \kappa \approx X$ would lie in $\alpha^{+}$ and contradict the
minimality of $\kappa$.

## Remarks

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
- **Which ordinals below and at $\omega$ are cardinals is a counting question.**
  That every natural number is a cardinal, and that $\omega$ is one, amounts to
  the pigeonhole principle, namely that no natural number is equinumerous with a
  proper subset of itself. That principle is about finiteness rather than about
  order, and it is not proved on this page; the page that develops finiteness
  and countability supplies it. Nothing here depends on it, and the definition
  above is stated so that it does not.
- **Notation.** The infinite cardinals are traditionally written
  $\aleph_0, \aleph_1, \dots$, with $\aleph_0 = \omega$. The notation
  $\aleph(A)$ for the Hartogs number of $A$ ([[thm-hartogs]]) comes from the
  same source and is deliberately close: under the Axiom of Choice
  $\aleph(A)$ is the successor cardinal of $|A|$.
- **Why initial ordinals rather than equivalence classes.** The natural
  definition of "cardinal" as the class of all sets equinumerous with a given
  one never yields a set, for the same reason as in [[thm-burali-forti]].
  Choosing the least ordinal in the class is von Neumann's fix, and it works
  exactly when the class contains an ordinal, which is exactly when the set can
  be well ordered.
