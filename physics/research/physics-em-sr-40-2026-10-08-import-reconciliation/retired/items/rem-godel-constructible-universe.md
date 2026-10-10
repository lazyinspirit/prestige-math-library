---
id: rem-godel-constructible-universe
kind: remark
title: "Gödel 1938: ZF does not refute the Axiom of Choice"
status: published
origin: session
proved_here: false
deps: []
justified_by: []
forward_refs: [def-axiom-of-choice]
aliases: []
landmark: true
short: "Con(ZF) implies Con(ZFC + GCH), via L"
verification:
  precheck: n/a
  sources_checked:
    date: 2026-07-26
    scope: citations
    by: session-audit
sources:
  scraped: []
  references:
    - title: "K. Gödel, The consistency of the axiom of choice and of the generalized continuum-hypothesis, Proc. Nat. Acad. Sci. USA 24 (1938), 556-557"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC1077160/"
    - title: "Constructible universe (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Constructible_universe"
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
pipeline_run: null
---

## Statement

**If ZF is consistent, then ZF + AC + GCH is consistent.** Here AC is the Axiom
of Choice and GCH is the generalised continuum hypothesis.

Equivalently, and this is the form the library uses: **if ZF is consistent, then
ZF does not refute the Axiom of Choice**, and ZFC does not refute GCH.

The witness is an inner model. Gödel (1938) defines the class $L$ of
*constructible* sets by transfinite recursion along the ordinals,
$$L_0 = \emptyset, \quad L_{\alpha+1} = \mathrm{Def}(L_\alpha), \quad L_\lambda = \bigcup_{\alpha < \lambda} L_\alpha \ \text{ for limit } \lambda, \quad L = \bigcup_{\alpha \in \mathrm{Ord}} L_\alpha,$$
where $\mathrm{Def}(X)$ is the set of subsets of $X$ definable over $(X, \in)$
with parameters from $X$. Working inside any model of ZF, one shows that $L$
satisfies every axiom of ZF, and in addition satisfies AC and GCH. Since a model
of ZF yields a model of ZF + AC + GCH, the consistency of the second follows from
the consistency of the first.

The conclusion is **relative**: it is an implication between consistency
statements, not a proof that ZFC is consistent. If ZF is consistent, Gödel's
second incompleteness theorem prevents ZF from proving its own consistency; a
stronger metatheory may of course prove the antecedent.

## Remarks

- **Not proved in this library.** Nothing about $L$ is developed here. The
  definition above is recorded so the statement is precise, not as a
  construction this library carries out.

- **What would prove it.** The theory of the constructible universe: the
  definability operator $\mathrm{Def}$, absoluteness of $\Delta_0$ formulas,
  the reflection and Löwenheim-Skolem arguments behind the condensation lemma,
  and from condensation the two consequences that $L$ has a definable global
  well-ordering (giving AC) and that every constructible subset of $L_{\omega_\alpha}$
  appears by stage $\omega_{\alpha+1}$ (giving GCH). That is an inner-model
  track, and this library has not built it.

- **Why it matters here.** This is the positive consistency half of the later
  independence theorem. Results proved from [[def-axiom-of-choice]] do not use
  this metatheorem as a premise; the constructibility track must establish it
  from earlier local machinery before the catalogue can be retired. Its partner
  is [[rem-cohen-forcing-ac-independent]].

- **Conditional discipline.** The statement is never asserted unconditionally in
  this library. "ZF does not refute AC" is shorthand for the implication above,
  whose antecedent is the consistency of ZF.
