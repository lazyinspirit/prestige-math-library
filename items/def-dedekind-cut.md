---
id: def-dedekind-cut
kind: definition
title: "Dedekind cut"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-rationals, thm-rat-ordered-field]
aliases: []
landmark: true
short: "Dedekind cut"
verification:
  precheck: n/a
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 (Appendix: construction of ℝ)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "E. Landau, Foundations of Analysis"
      url: "https://bookstore.ams.org/chel-79"
    - title: "Math 331 course handout: Dedekind Cuts and Real Numbers (Hobart and William Smith Colleges)"
      url: "https://math.hws.edu/~mitchell/Math331S14/DedekindCutsHandOUt.pdf"
    - title: "Dedekind cut (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dedekind_cut"
pipeline_run: null
---

## Definition

Work over the totally ordered field $\mathbb{Q}$ of rationals
([[def-rationals]], [[thm-rat-ordered-field]]). A subset $A \subseteq \mathbb{Q}$
is a **Dedekind cut** iff it satisfies all three of:

- **(C1)** $A \ne \emptyset$ and $A \ne \mathbb{Q}$ (proper and nonempty);
- **(C2)** *downward closed*: if $p \in A$ and $q < p$, then $q \in A$;
- **(C3)** *no greatest element*: if $p \in A$, then there exists $r \in A$ with $p < r$.

## Remarks

This is the *lower-set* convention (Rudin's): a cut is the set of rationals
lying strictly below a real point, so it "opens downward" and never closes off
at a maximum. Under the opposite (upper-set) convention the inequalities are
reversed; we fix the lower-set form throughout.

An equivalent phrasing of (C2) by contraposition: if $q \notin A$ and $q < p$,
then $p \notin A$; the complement $\mathbb{Q} \setminus A$ is *upward closed*.
Consequently every $a \in A$ and $b \notin A$ satisfy $a < b$: were $b \le a$,
downward closure (C2) would place $b \in A$. Thus a cut splits $\mathbb{Q}$ into
a lower piece $A$ and an upper piece $\mathbb{Q} \setminus A$ with every element
of the former below every element of the latter, the lower piece having no
largest member.

The set of all Dedekind cuts is the carrier of the real numbers
([[def-real-dedekind]]); each cut *is* a real number, identified with the
downward gap of rationals it names.
