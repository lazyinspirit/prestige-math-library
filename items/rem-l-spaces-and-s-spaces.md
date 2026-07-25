---
id: rem-l-spaces-and-s-spaces
kind: remark
title: "L-spaces exist in ZFC; S-spaces consistently do not"
status: draft
origin: session
proved_here: false
deps: [rem-martins-axiom]
justified_by: []
forward_refs: [def-countable, thm-r-uncountable]
aliases: []
landmark: false
short: "Moore 2005 built an L-space; PFA kills all S-spaces"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "J. T. Moore, A solution to the L space problem, J. Amer. Math. Soc. 19 (2006), 717-736"
      url: "https://doi.org/10.1090/S0894-0347-05-00517-5"
    - title: "S. Todorcevic, Partition Problems in Topology, Contemp. Math. 84, Amer. Math. Soc. (1989)"
      url: "https://doi.org/10.1090/conm/084"
    - title: "Martin's axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Martin%27s_axiom"
pipeline_run: null
---

## Statement

A regular space is an **S-space** if it is hereditarily separable but not
Lindelöf, and an **L-space** if it is hereditarily Lindelöf but not separable.
Since separability and the Lindelöf property are dual in most elementary
respects, the historical expectation was that the two existence questions would
have the same answer. They do not.

**(a) An L-space exists in ZFC.** Justin Moore (announced 2005, published 2006)
constructs one outright, with no extra axiom. The construction uses a
$\rho$-function derived from Todorcevic's walks on countable ordinals to produce
an uncountable subset of a Banach space that is hereditarily Lindelöf and not
separable.

**(b) It is consistent that no S-space exists.** Todorcevic proved that the
**proper forcing axiom** implies there are no S-spaces. Since PFA is consistent
relative to a supercompact cardinal, "there are no S-spaces" is consistent
relative to that large-cardinal hypothesis.

**(c) S-spaces do exist under other hypotheses**, for instance under CH, so (b)
is a genuine independence and not a theorem.

## Remarks

- **Not proved in this library.** Neither construction is carried out here, and
  the required topology (hereditary separability, the Lindelöf property, walks on
  ordinals) is not developed here.

- **What would prove it.** For (a), the combinatorics of walks on countable
  ordinals and oscillation theory, which is ordinary ZFC but rests on the ordinal
  machinery and on a substantial theory of colourings. For (b), the proper
  forcing axiom, hence proper forcing, iteration with countable support, and a
  supercompact cardinal for its consistency.

- **Why it matters here.** It is the standard warning against arguing by duality
  in general topology. "Hereditarily separable" and "hereditarily Lindelöf" look
  like mirror images, and the corresponding existence questions are not mirror
  images at all: one is settled outright in ZFC and the other is independent. Any
  page in this library that states such a duality must therefore state it for the
  specific properties proved, and never as a general principle. Note that the
  countability notions the library does have ([[def-countable]],
  [[thm-r-uncountable]]) are untouched by this: nothing here is a statement about
  $\mathbb{R}$, whose separability and Lindelöf property are both elementary.

- **Conditional discipline.** (a) is a ZFC theorem, cited and not proved. (b) is
  a relative consistency statement whose hypothesis is strictly stronger than
  Con(ZFC). Nothing here asserts PFA or the existence of a supercompact cardinal.
