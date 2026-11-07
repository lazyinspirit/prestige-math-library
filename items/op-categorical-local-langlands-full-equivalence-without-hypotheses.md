---
id: op-categorical-local-langlands-full-equivalence-without-hypotheses
kind: open-problem
title: "Full categorical local Langlands equivalence without the Eisenstein hypothesis"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 10
deps:
  - def-categorical-local-langlands-framework
  - def-whittaker-eisenstein-compatibility
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Laurent Fargues and Peter Scholze, Geometrization of the Local Langlands Correspondence, Chapter X §1, Conjecture X.1.4"
      url: "https://arxiv.org/pdf/2102.13459v4"
    - title: "David Hansen, Beijing Notes on the Categorical Local Langlands Conjecture, Conjectures 1.4.5, 1.4.7, and 1.7.3"
      url: "https://arxiv.org/pdf/2310.04533"
    - title: "Peter Dillery and Arnaud Eteve, The Extended Fargues–Scholze Spectral Action, §§4.5–4.6"
      url: "https://arxiv.org/pdf/2608.02708v2"
---

## Open problem

For every nonarchimedean local field $E$, prime $\ell$ different from the
residue characteristic of $E$, and connected quasi-split reductive group
$G/E$, establish the Whittaker-normalized equivalence
$D(\operatorname{Bun}_G)\simeq\operatorname{IndCoh}(\operatorname{Par}_G)$
with the expected spectral-action compatibilities, without assuming the
Whittaker–Eisenstein compatibility condition $(\mathrm{Eis})$.

## Open problem references

[[def-categorical-local-langlands-framework]]

[[def-whittaker-eisenstein-compatibility]]

[[def-axiom-of-choice]]

[Laurent Fargues and Peter Scholze, *Geometrization of the Local Langlands Correspondence*, Chapter X §1, Conjecture X.1.4, pp. 343–344](https://arxiv.org/pdf/2102.13459v4)

[David Hansen, *Beijing Notes on the Categorical Local Langlands Conjecture*, Conjectures 1.4.5, 1.4.7, and 1.7.3](https://arxiv.org/pdf/2310.04533)

[Peter Dillery and Arnaud Eteve, *The Extended Fargues–Scholze Spectral Action*, §§4.5–4.6](https://arxiv.org/pdf/2608.02708v2)

## Status

The checked literature through 2026-10-26 still formulates this as a
conjecture. Fargues–Scholze and Hansen give independent full-equivalence
formulations. Hansen–Mann prove the $\mathrm{GL}_n$ case only under $(\mathrm{Eis})$;
Helm–Solleveld–Xu prove full faithfulness only on the generic direct factor
for their listed groups; and Gleason–Hamann–Ivanov–Lourenço–Zou compare two
automorphic-side categories without identifying them with the spectral
parameter category. Dillery–Eteve prove a torus case and conditional
reductions, while their $\mathrm{GL}_n$ corollary retains $(\mathrm{Eis})$.
These results leave the stated universal problem unresolved.
