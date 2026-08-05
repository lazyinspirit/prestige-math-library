---
id: def-cofinality
kind: definition
title: "Cofinality $\\operatorname{cf}(\\alpha)$, and regular and singular cardinals"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [lem-cofinality-is-well-defined, def-cofinal-subset-of-an-ordinal, def-ordinal, def-cardinal, def-cardinal-arithmetic, def-aleph-and-beth-hierarchies]
justified_by: [thm-cofinality-basics]
aliases: [def-regular-cardinal, def-singular-cardinal]
landmark: true
short: "$\\operatorname{cf}(\\alpha)$; regular, singular"
verification:
  precheck: n/a
  verified:
    model: claude-sonnet-5
    verdict: certify
    date: 2026-08-05
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "UCL, Axiomatic Set Theory, Ch. 4: Cardinal Arithmetic"
      url: "https://www.homepages.ucl.ac.uk/~ucahcjm/ast/ast_notes_4.pdf"
    - title: "Cofinality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cofinality"
    - title: "Regular cardinal (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Regular_cardinal"
pipeline_run: null
---

## Definition

Let $\alpha$ be an ordinal ([[def-ordinal]]). The **cofinality** of $\alpha$ is

$$\operatorname{cf}(\alpha) \;:=\; \text{the least ordinal } \beta \text{ for which some } f : \beta \to \alpha \text{ has cofinal range},$$

cofinal range meaning that $f[\beta]$ is a cofinal subset of $\alpha$
([[def-cofinal-subset-of-an-ordinal]]): every $\zeta \in \alpha$ satisfies
$\zeta \le f(\xi)$ for some $\xi \in \beta$. That such a least ordinal exists, and
that a witnessing map of that length may be taken strictly increasing, is
[[lem-cofinality-is-well-defined]], and both are theorems of ZF. So
$\operatorname{cf}$ is defined at every ordinal, without any choice principle.

**Regular and singular.** An **infinite cardinal** $\kappa$ — a cardinal
([[def-cardinal]]) with $\omega \subseteq \kappa$ ([[def-cardinal-arithmetic]]),
for instance any $\aleph_\alpha$ ([[def-aleph-and-beth-hierarchies]]) — is

- **regular** when $\operatorname{cf}(\kappa) = \kappa$;
- **singular** when $\operatorname{cf}(\kappa) \ne \kappa$.

The two cases are exhaustive by definition, and by
[[thm-cofinality-basics]] singular means exactly
$\operatorname{cf}(\kappa) < \kappa$, since $\operatorname{cf}(\alpha) \le \alpha$
always holds.

## Remarks

**Why regularity is defined for cardinals and not for ordinals.** The definition
of $\operatorname{cf}$ applies to every ordinal, and it must, because the
construction quantifies over maps into $\alpha$ of every length. But
$\operatorname{cf}(\alpha) = \alpha$ is an uninteresting condition on a general
ordinal: it fails at $\omega + 1$ and at $\omega \cdot 2$ for reasons that have
nothing to do with size, and it holds only at $0$, at $1$, and at those ordinals
that are already infinite cardinals. Calling an ordinal regular would therefore
say nothing new, which is why the words are attached to cardinals here.

**What a singular cardinal is, in one sentence.** A cardinal that is reachable
from below by fewer than $\kappa$ steps: there is a strictly increasing family of
ordinals below $\kappa$, indexed by an ordinal strictly shorter than $\kappa$,
whose supremum is $\kappa$. That is exactly the failure of regularity, and
[[thm-regularity-of-the-alephs]] exhibits a cardinal for which it happens.

**Why $\operatorname{cf}(\kappa)$ being a regular cardinal is a theorem and not
part of the definition.** Regularity is *defined through* $\operatorname{cf}$, so
building "$\operatorname{cf}(\kappa)$ is regular" into the definition would make
the definition refer to itself. The statement is true, and it is
[[thm-cofinality-basics]]; it is recorded here as the item that discharges the
naming obligation of this definition, and nothing above depends on it.

**Only one notion of "cofinal" exists in this library.**
[[def-cofinal-subset-of-an-ordinal]] introduces cofinal subsets, because the
boundedness theorem for $\omega_1$ needs them, and deliberately introduces
neither the cofinality function nor the regular/singular vocabulary. Both are
introduced here, and the definition above is written in exactly that item's
terms, so no second notion is created.
