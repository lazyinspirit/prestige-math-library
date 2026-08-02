---
id: rem-metric-axiom-conventions
kind: remark
title: "Which metric axiom list this library uses, the live naming fork between semimetric and pseudometric, and why extended metrics are not treated here"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-metric-space, lem-metric-nonnegativity, rem-sup-conventions,
       def-complete-ordered-field]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "Pseudometric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Pseudometric_space"
    - title: "Extended real number line (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Extended_real_number_line"
    - title: "Quasimetric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Quasimetric_space"
    - title: "Ultrametric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ultrametric_space"
pipeline_run: null
---

**The axiom list.** [[def-metric-space]] asks a metric $d : X \times X \to \mathbb{R}$
for exactly three things: (M1) $d(x,y) = 0$ if and only if $x = y$; (M2)
$d(x,y) = d(y,x)$; (M3) $d(x,z) \le d(x,y) + d(y,z)$. Many texts add a fourth,
$d(x,y) \ge 0$, or build it into the codomain by writing
$d : X \times X \to [0,\infty)$. That fourth condition is redundant: it follows
from the other three, and [[lem-metric-nonnegativity]] proves it. The list is
kept minimal here so that every verification of "is this a metric" has three
things to check and not four, and so that no proof can quietly assume
nonnegativity before it has been established.

**Splitting (M1).** Some texts state (M1) as two conditions, $d(x,x) = 0$ for all
$x$ together with the implication $d(x,y) = 0 \Rightarrow x = y$. That is the same
notion, and the split form is convenient because deleting the second half is
exactly the weakening that produces a pseudometric.

**The naming fork, which is live and is why this library says pseudometric.**
Two different weakenings of the axiom list circulate under overlapping names.

- Dropping the implication $d(x,y) = 0 \Rightarrow x = y$, keeping symmetry and
  the triangle inequality, gives what most current sources, and this library,
  call a **pseudometric** ([[def-metric-space]]). This is the notion a seminorm
  induces.
- Dropping the triangle inequality, keeping (M1) and (M2), gives what most
  current sources call a **semimetric**.

The fork is that a substantial part of the literature, especially in functional
analysis and in older texts, uses *semimetric* for the first of these, that is
as a synonym for pseudometric. There is no way to use the word *semimetric*
here without inheriting the ambiguity, so this library does not use it at all:
the first weakening is always called a pseudometric, and the second, which
nothing here needs, is never named. Dropping symmetry instead gives a
*quasimetric*, also not treated here; note that [[lem-metric-nonnegativity]]
uses symmetry, so a quasimetric is not automatically nonnegative and the fourth
axiom is not redundant for it.

**Ultrametrics.** The strong triangle inequality
$d(x,z) \le \max\{d(x,y), d(y,z)\}$ implies (M3) in the presence of (M1) and
(M2), by [[lem-metric-nonnegativity]] and the fact that the maximum of two
nonnegative reals is at most their sum. So an ultrametric is a metric, and the
definition may be read either as "a metric that also satisfies (M3')" or as "a
function satisfying (M1), (M2) and (M3')". The two readings pick out the same
objects.

**Why extended metrics are not treated here.** An *extended metric* is allowed
to take the value $+\infty$, so that its codomain is $[0,\infty]$ rather than
$[0,\infty)$; the axioms are read with the usual arithmetic of $+\infty$. The
construction is useful, for instance when one wants to glue metric spaces
without connecting them, and it is standard in metric geometry. It is not
treated here, for one reason: its values would have to live in the extended real
line $\overline{\mathbb{R}} = \mathbb{R} \cup \{-\infty, +\infty\}$, whereas the
axioms of [[def-metric-space]] are stated over the complete ordered field
$\mathbb{R}$ ([[def-complete-ordered-field]]) and are never read anywhere else.
Why they are kept there is set out in [[rem-sup-conventions]]:
$\overline{\mathbb{R}}$ is not a field, the expressions
$(+\infty) + (-\infty)$ and $0 \cdot (+\infty)$ have no definition compatible
with the field axioms, and writing an infinite value silently moves the
discussion into a different structure, after which every algebraic step needs
its own justification. Every value of every metric in this library is therefore
an element of $\mathbb{R}$.

Two consequences of that decision are visible on this page and are not
oversights. First, an unbounded set has no diameter at all here, rather than a
diameter $+\infty$ ([[def-metric-bounded-diameter]]). Second, the supremum
metric is defined on the *bounded* real-valued functions only
([[lem-sup-metric-is-a-metric]]), where texts working in
$\overline{\mathbb{R}}$ define it on all of them.

Adding extended metrics honestly would mean restating [[def-metric-space]] over
a totally ordered set with a greatest element, carrying its own partial
arithmetic, and re-proving over it everything this page proves over
$\mathbb{R}$. No such restatement is made anywhere in this library, and until
one is, every metric here takes real values.
