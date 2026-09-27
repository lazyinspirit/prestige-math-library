---
id: rem-martins-axiom
kind: remark
title: "Martin's Axiom"
status: published
origin: session
proved_here: false
verification:
  precheck: n/a
  sources_checked:
    date: 2026-09-26
    scope: "Current recorded statement and cited passages; research/frontier-35-ten-categories-recorded-source-audit-20260926.md"
    by: "owner-delegated source audit (GPT-6-Sol xhigh)"
deps: [rem-independence-of-ch-and-gch]
justified_by: []
forward_refs: [rem-continuum-hypothesis, def-cardinal]
aliases: []
landmark: true
short: "MA is consistent with the negation of CH"
sources:
  scraped: []
  references:
    - title: "Martin's axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Martin%27s_axiom"
    - title: "R. M. Solovay and S. Tennenbaum, Iterated Cohen extensions and Souslin's problem, Ann. of Math. 94 (1971), 201-245"
      url: "https://en.wikipedia.org/wiki/Suslin%27s_problem"
    - title: "K. Kunen, Set Theory: An Introduction to Independence Proofs, Ch. II §2 and Ch. VIII §6"
      url: "https://fa.ewi.tudelft.nl/~hart/onderwijs/set_theory/Jech/Kunen-1980-Set_Theory.pdf"
    - title: "Continuum hypothesis (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuum_hypothesis"
pipeline_run: null
---

## Statement

A partial order $P$ has the **countable chain condition** (ccc) when every family
of pairwise incompatible elements of $P$ is countable. For a cardinal $\kappa$,
**$\mathrm{MA}(\kappa)$** asserts:

> for every nonempty ccc partial order $P$ and every family $\mathcal{D}$ of at most
> $\kappa$ dense subsets of $P$, there is a filter on $P$ meeting every member of
> $\mathcal{D}$.

**Martin's Axiom (MA)** is the assertion that $\mathrm{MA}(\kappa)$ holds for
every $\kappa < 2^{\aleph_0}$.

Three facts fix its status.

**(a)** $\mathrm{MA}(\aleph_0)$ is a theorem of ZFC (the Rasiowa-Sikorski lemma),
so MA is not vacuous but its content is entirely in the uncountable cases.

**(b)** CH implies MA, since under CH there is no $\kappa$ with
$\aleph_0 < \kappa < 2^{\aleph_0}$. The converse fails in the relative
consistency sense stated in (c).

**(c) If ZFC is consistent, then so is ZFC + MA + (not CH).** This is
Solovay and Tennenbaum (1971), and it is where finite-support **iterated ccc
forcing** was invented: one iterates ccc posets $\aleph_2$ times, catching every
ccc poset of size less than the continuum along the way, and the iteration is
itself ccc so no cardinal is collapsed.

**What MA + (not CH) buys.** Every set of reals of cardinality less than
$2^{\aleph_0}$ is Lebesgue null and meagre; the union of fewer than
$2^{\aleph_0}$ meagre sets is meagre; $2^{\kappa} = 2^{\aleph_0}$ for every
infinite $\kappa < 2^{\aleph_0}$; and the product of two ccc spaces is ccc, so
**ccc is productive**.

## Remarks

- **Not proved in this library.** Neither the consistency result nor any of the
  consequences is proved here.

- **What would prove it.** Iterated forcing with finite support, the ccc
  preservation theorem for such iterations, and a bookkeeping argument for the
  $\aleph_2$-length iteration. This is the forcing track named in
  [[rem-cohen-forcing-ac-independent]], one level beyond a single-step
  extension.

- **Why it matters here.** MA is the standard hypothesis under which the
  continuum behaves as if it were $\aleph_1$ for the purposes of category and
  measure while nevertheless being large. It is the axiom that makes the two
  sides of [[rem-suslin-hypothesis-independent]] and of
  [[rem-normal-moore-space-conjecture]] possible, and it is the reason a
  topology page cannot state "ccc is productive" as a theorem: that statement is
  a consequence of MA + (not CH) and is refuted by a Suslin line. Notice also
  what MA is not: it is not a choice principle and not a size axiom about
  [[def-cardinal]]; it is a genericity assumption, and its interaction with CH is
  recorded in [[rem-continuum-hypothesis]].

- **Conditional discipline.** Clause (c) is relative to the consistency of ZFC.
  Clauses (a) and (b) are ZFC theorems. Nothing here asserts MA.

- **On the citation.** The Solovay-Tennenbaum paper is behind a paywall that
  refuses automated access, so the reference url points at the survey account of
  the result; the full bibliographic details are in the reference title.
