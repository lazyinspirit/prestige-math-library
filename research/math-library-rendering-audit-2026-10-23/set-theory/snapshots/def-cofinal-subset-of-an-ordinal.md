---
id: def-cofinal-subset-of-an-ordinal
kind: definition
title: "Cofinal subset of an ordinal"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-ordinal, def-limit-ordinal, lem-ordinal-basics, lem-ordinal-trichotomy]
justified_by: []
aliases: [def-cofinal-in-an-ordinal, def-unbounded-in-an-ordinal]
landmark: false
short: "$C \\subseteq \\alpha$ with every $\\xi \\in \\alpha$ below some member"
verification:
  precheck: n/a
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Cofinality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cofinality"
    - title: "Ordinal number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordinal_number"
pipeline_run: null
---

## Definition

Let $\alpha$ be an ordinal ([[def-ordinal]]). A subset $C \subseteq \alpha$ is
**cofinal in $\alpha$**, equivalently **unbounded in $\alpha$**, when

$$\text{for every } \xi \in \alpha \text{ there is } \eta \in C \text{ with } \xi \le \eta.$$

A subset that is not cofinal is **bounded below $\alpha$**: there is
$\xi \in \alpha$ such that $\eta < \xi$ for every $\eta \in C$.

## Remarks

- **At a limit ordinal, cofinal means the supremum is attained from below.** If
  $\lambda$ is a limit ordinal ([[def-limit-ordinal]]) and $C \subseteq \lambda$
  is nonempty, then $C$ is cofinal in $\lambda$ if and only if
  $\sup C = \bigcup C = \lambda$ (claim (e) of [[lem-ordinal-basics]]). If
  $\bigcup C = \lambda$, then every $\xi \in \lambda$ lies in some $\eta \in C$,
  so $\xi < \eta$ and $C$ is cofinal. Conversely, if $C$ is cofinal then
  $\bigcup C \subseteq \lambda$, because each $\eta \in C$ satisfies
  $\eta \subseteq \lambda$ by transitivity; and for $\xi \in \lambda$ the ordinal
  $\xi^{+}$ again lies in $\lambda$ ([[def-limit-ordinal]]), so cofinality supplies
  $\eta \in C$ with $\xi^{+} \le \eta$, whence $\xi \in \xi^{+} \subseteq \eta$ and
  $\xi \in \bigcup C$, giving $\lambda \subseteq \bigcup C$. This is the form in which the
  notion is used on this page, and it is exactly the hypothesis of the
  continuity clause of [[thm-ordinal-arithmetic-monotonicity]].

- **At $0$ and at successors the notion is degenerate.** $\varnothing$ is
  cofinal in $0$, vacuously, and it is the only subset of $0$. If
  $\alpha = \delta^{+}$ then $\delta$ is the greatest element of $\alpha$
  ([[lem-ordinal-basics]], [[lem-ordinal-trichotomy]]), so a subset is cofinal
  in $\alpha$ if and only if it contains $\delta$. The interesting case is the
  limit case, and that is where the notion is used.

- **What is not defined at this point in the reading order.** The **cofinality**
  $\operatorname{cf}(\alpha)$, the least order type of a cofinal subset, and the
  vocabulary of **regular** and **singular** cardinals, are not introduced here;
  they are introduced later, on Cardinal Arithmetic, Cofinality and the Alephs.
  Nothing on this page needs them: the boundedness theorem below is stated as
  "no at most countable subset is cofinal", which is a statement about subsets
  and not about a cardinal invariant.

- **Cofinal is a property of the pair, not of the set.** $\omega$ is cofinal in
  $\omega$ and bounded below $\omega + 1$. The ordinal must always be named.
