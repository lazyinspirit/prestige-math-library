---
id: def-relative-projectivity
kind: definition
title: "A module is relatively H-projective when it is a direct summand of one induced from H"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-axiom-of-choice, cor-every-vector-space-has-a-basis, def-projective-module, thm-projective-module-characterizations]
verification:
  precheck: n/a
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-01-receipts.jsonl (def-relative-projectivity). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory (23 Feb 2016 draft)"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
    - title: "J. MacQuarrie, Modular Representations of Profinite Groups"
      url: "https://eprints.maths.manchester.ac.uk/1262/1/relprojpaperB.pdf"
---

## Definition

Let $G$ be a finite group, let $H\le G$, let $k$ be a field, and let $M$ be a
$kG$-module. The module $M$ is **relatively $H$-projective** if there exists a
$kH$-module $W$ such that $M$ is a direct summand of
$\operatorname{Ind}_H^G W$.

Assuming the Axiom of Choice ([[def-axiom-of-choice]]), a basis $B$ of $W$
exists by [[cor-every-vector-space-has-a-basis]]. When $H=1$ it gives
$\operatorname{Ind}_1^G W\cong\bigoplus_B kG$, which may have infinite rank.
Thus a relatively $1$-projective module is projective. Conversely, the
free-summand characterization of [[thm-projective-module-characterizations]]
realizes every projective $kG$-module as a summand of
$(kG)^{(I)}\cong\operatorname{Ind}_1^G(k^{(I)})$. Hence, under Choice,
relative $1$-projectivity recovers ordinary projectivity in the sense of
[[def-projective-module]].
