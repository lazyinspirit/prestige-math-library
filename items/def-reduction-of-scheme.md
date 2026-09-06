---
id: def-reduction-of-scheme
kind: definition
title: "The reduction of a scheme"
status: draft
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-scheme, def-ideal-sheaf, def-reduced-affine-scheme]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Schemes, Lemma 12.4"
      url: "https://stacks.math.columbia.edu/tag/01J3"
---
## Definition

For a scheme $X$, let $\mathcal N_X$ be the ideal sheaf whose germs are the
nilpotent elements of the local rings of $X$; equivalently, a section lies in
$\mathcal N_X(U)$ when it is locally nilpotent on $U$. The **reduction**
$X_{\mathrm{red}}$ is the closed subscheme with the same underlying topological
space and structure sheaf $\mathcal O_X/\mathcal N_X$. On
$\operatorname{Spec}A$ it is $\operatorname{Spec}(A/\sqrt{(0)})$.
