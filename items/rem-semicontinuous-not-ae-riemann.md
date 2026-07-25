---
id: rem-semicontinuous-not-ae-riemann
kind: remark
title: "A bounded semicontinuous function equal almost everywhere to no Riemann integrable function"
status: draft
origin: session
proved_here: false
deps: []
justified_by: []
forward_refs: []
aliases: []
landmark: false
short: "The indicator of a fat Cantor set: upper semicontinuous, and no a.e. modification is Riemann integrable"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "B. R. Gelbaum and J. M. H. Olmsted, Counterexamples in Analysis, Ch. 8, Examples 31 and 32"
      url: "https://faculty.ksu.edu.sa/sites/default/files/_olmsted_1.pdf"
    - title: "Semi-continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Semi-continuity"
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
pipeline_run: null
---

## Statement

Let $A \subseteq [0,1]$ be a fat Cantor set, that is a nowhere dense perfect set
with $\lambda(A) > 0$, and let $f = \mathbf{1}_{A}$. Then

1. $f$ is bounded and upper semicontinuous everywhere on $[0,1]$;
2. the set of points of discontinuity of $f$ is exactly $A$, which has positive
   measure, so $f$ is not Riemann integrable on $[0,1]$ by Lebesgue's criterion;
3. no function $g$ with $g = f$ almost everywhere is Riemann integrable either,
   since changing $f$ on a null set leaves a set of positive measure inside the
   discontinuity set of the result.

In particular $f$ is a bounded measurable function that is not equivalent to any
Riemann integrable function, so the Riemann integrable functions are not dense in
$L^{\infty}$ in the sense of almost everywhere equality, and the Lebesgue integral
is not merely the Riemann integral extended by completing in measure.

## Remarks

**Not proved in this library.** It is recorded with a citation to Gelbaum and
Olmsted and used in no proof here.

**What would prove it.** Less than the deferral suggests. A fat Cantor set is
constructed by removing middle intervals of rapidly shrinking total length, and
its positive outer measure is elementary; upper semicontinuity of the indicator
of a closed set is immediate; Lebesgue's criterion for Riemann integrability is
in scope in this library. The only step that reaches past the elementary theory
is item 3, that a set of positive outer measure minus a null set still has
positive outer measure and still lies in the discontinuity set of the modified
function, and even that is close to the elementary covering theory.

**Which page it serves.** The Riemann integral page, next to Lebesgue's criterion
and the fat Cantor set. It is the sharp form of "Riemann integrability is not a
property of the equivalence class modulo null sets", which is precisely the
defect that motivates the Lebesgue integral
([[rem-lebesgue-measure-and-integral]]).

**A candidate for undeferral.** This item is recorded here because it was listed
among the measure-theoretic entries of Gelbaum and Olmsted's chapter 8, but its
proof may well fit inside the elementary covering theory that this library
already has. It should be revisited when the Riemann integral page is written; if
it fits, it becomes a genuine counterexample item there and this remark is
retired to an alias.
