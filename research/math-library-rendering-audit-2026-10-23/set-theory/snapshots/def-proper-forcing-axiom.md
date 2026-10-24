---
id: def-proper-forcing-axiom
kind: definition
title: "The Proper Forcing Axiom"
status: published
origin: pipeline
deps: [def-countable-model-generic-master-condition-and-proper-poset, def-martins-axiom]
justified_by: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Cummings, Iterated Forcing and Elementary Embeddings, Definition 24.10, printed p.99"
      url: https://www.math.cmu.edu/users/jcumming/papers/repaper_finished_june_2008.pdf
---

## Definition

The **Proper Forcing Axiom** (PFA) is the assertion that whenever $P$ is a
nonempty proper forcing partial order and
$\mathcal D=\{D_\xi:\xi<\lambda\}$ is a family of dense subsets of $P$ with
$\lambda\leq\omega_1$, there is a filter $G\subseteq P$ such that
$G\cap D_\xi\ne\varnothing$ for every $\xi<\lambda$.

The forcing order is stronger-is-smaller, so a filter is upward closed toward
weaker conditions and downward directed: if $p,q\in G$, some $r\in G$ satisfies
$r\leq p,q$. Replacing each dense set by its downward closure gives the
equivalent dense-open formulation. Empty and finite families are included;
for the empty family any singleton generated filter suffices because $P$ is
nonempty.

PFA has the fixed bound $\omega_1$. It is not being defined here as
$\mathrm{FA}_{<2^{\aleph_0}}(\mathrm{proper})$, and no value of the continuum
is presupposed. The definition itself makes no selection; later uses work in
ZFC plus PFA and declare their uses of Choice.
