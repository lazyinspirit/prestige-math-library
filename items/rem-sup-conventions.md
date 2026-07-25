---
id: rem-sup-conventions
kind: remark
title: "Conventions: $\\sup \\emptyset$, unbounded sets, and the extended reals"
status: published
origin: session
deps: [def-complete-ordered-field, def-infimum, thm-infimum-property, fs-every-set-has-sup,
       lem-sup-epsilon, lem-inf-epsilon, lem-sup-monotone, lem-sup-translate,
       lem-sup-scale, lem-sup-sum, lem-sup-unique, lem-max-is-sup]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Extended real number line (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Extended_real_number_line"
    - title: "Infimum and supremum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Infimum_and_supremum"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

Many texts, especially in measure theory, lattice theory and optimisation, work
in the **extended real line** $\overline{\mathbb{R}} = \mathbb{R} \cup \{-\infty, +\infty\}$
and adopt the conventions

$$\sup \emptyset = -\infty, \qquad \inf \emptyset = +\infty, \qquad \sup S = +\infty \ \text{ for } S \text{ not bounded above}, \qquad \inf S = -\infty \ \text{ for } S \text{ not bounded below}.$$

With those conventions in force, every subset of $\mathbb{R}$ has a supremum and
an infimum in $\overline{\mathbb{R}}$, and the two exceptional cases recorded in
[[fs-every-set-has-sup]] disappear. The conventions are consistent and often
convenient. The value $\sup \emptyset = -\infty$ is not arbitrary: it is forced
by monotonicity under inclusion together with $\sup \{x\} = x$, since
$\emptyset \subseteq \{x\}$ then gives $\sup \emptyset \le x$ for **every** real
$x$, and $-\infty$ is the only element of $\overline{\mathbb{R}}$ below every
real. (Monotonicity together with $\sup \mathbb{R} = +\infty$ forces nothing
here: it only gives $\sup \emptyset \le +\infty$.) The convention also makes
$\sup(S \cup T) = \max\{\sup S, \sup T\}$ hold without side conditions.

**This library does not adopt them.** Two reasons, both about keeping the
foundations honest.

- $\pm\infty$ are not elements of $\mathbb{R}$. The library's $\mathbb{R}$ is the
  complete ordered field ([[def-complete-ordered-field]]), and
  $\overline{\mathbb{R}}$ is not a field: $+\infty$ has no additive inverse, and
  the expressions $(+\infty) + (-\infty)$ and $0 \cdot (+\infty)$ have no
  definition that keeps the field axioms. Writing $\sup S = +\infty$ silently
  moves the discussion into a different structure, and every subsequent algebraic
  step then needs its own justification.
- Suppressed hypotheses become invisible errors. If $\sup S$ is always defined,
  a statement such as "$\sup(S + T) = \sup S + \sup T$" appears to be
  unconditional, and the cases where it degenerates are hidden inside the
  arithmetic of $\pm\infty$ rather than shown in the hypotheses.

Accordingly, in this library:

- $\sup S$ and $\inf S$ denote **real numbers**, and the notation is used only
  after existence has been established. Existence comes from the
  least-upper-bound property ([[def-complete-ordered-field]]) and its dual
  ([[thm-infimum-property]]), each of which requires the set to be nonempty and
  bounded on the relevant side.
- No supremum or infimum is written down before its existence has been
  established, and every statement that establishes existence says explicitly
  what it assumes. The nonempty and bounded clauses in [[lem-sup-epsilon]],
  [[lem-inf-epsilon]], [[lem-sup-monotone]], [[lem-sup-translate]],
  [[lem-sup-scale]] and [[lem-sup-sum]] are load bearing, not decoration. Where
  some other hypothesis does that work it is named instead of being suppressed:
  [[lem-max-is-sup]] obtains existence from a maximum rather than from a
  boundedness clause, and [[lem-sup-unique]], which asserts no existence at all,
  needs neither clause.
- $\sup \emptyset$ and $\inf \emptyset$ are simply undefined
  ([[def-infimum]], [[fs-every-set-has-sup]]).

A reader coming from a source that uses the extended-real conventions should
therefore expect the statements here to look more heavily qualified than the ones
they are used to. The mathematics is the same; the difference is where the case
analysis is written down. If a later page needs $\overline{\mathbb{R}}$, for
instance for limsup and liminf of a sequence that is not bounded, it will
introduce it explicitly as a new object with its own order and its own partial
arithmetic, rather than quietly extending $\mathbb{R}$.
