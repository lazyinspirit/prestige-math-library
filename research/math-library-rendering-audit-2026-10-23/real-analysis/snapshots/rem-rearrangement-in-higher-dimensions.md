---
id: rem-rearrangement-in-higher-dimensions
kind: remark
title: "The same question in $\\mathbb{R}^d$: what the set of rearrangement sums looks like, and why that answer is not reachable at this point in the reading order"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-riemann-series-theorem, thm-dirichlet-rearrangement, cor-unconditional-iff-absolute-in-r, def-rearrangement-and-unconditional-convergence]
justified_by: []
forward_refs: [thm-steinitz-polygonal-confinement, thm-rearrangement-sums-lie-in-an-affine-subspace]
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "P. Lévy, Sur les séries semi-convergentes, Nouv. Ann. Math. (4) 5 (1905), 506-511"
      url: "https://www.numdam.org/item/NAM_1905_4_5__506_1/"
    - title: "E. Steinitz, Bedingt konvergente Reihen und konvexe Systeme, J. reine angew. Math. 143 (1913), 128-176"
      url: "https://www.degruyterbrill.com/document/doi/10.1515/crll.1913.143.128/html"
    - title: "Lévy–Steinitz theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/L%C3%A9vy%E2%80%93Steinitz_theorem"
pipeline_run: null
---

## Remark

Everything on this page is about series of **real numbers**, and the answer it
reaches is complete for that case. Write

$$\mathcal{S}(a) \;:=\; \Bigl\{\, s \in \mathbb{R} \ : \ \text{some rearrangement of } \sum a_k \text{ converges to } s \,\Bigr\}$$

for the **set of rearrangement sums** of a convergent series
([[def-rearrangement-and-unconditional-convergence]]). Then this page determines
$\mathcal{S}(a)$ exactly, in two cases and no others.

- If $\sum a_k$ converges absolutely, $\mathcal{S}(a)$ is the single point
  $\bigl\{\sum_{k=0}^{\infty} a_k\bigr\}$: that is
  [[thm-dirichlet-rearrangement]].
- If $\sum a_k$ converges conditionally, $\mathcal{S}(a)$ is the whole of
  $\mathbb{R}$: that is [[thm-riemann-series-theorem]], and moreover
  rearrangements exist whose partial sums diverge to $+\infty$ or to $-\infty$ or
  oscillate between any prescribed pair of extended reals.

[[cor-unconditional-iff-absolute-in-r]] is the statement that these two cases are
distinguished by absolute convergence and by nothing else.

**The same question can be asked of a series of vectors**, once one has a space in
which a series of vectors has a sum: given a convergent series in $\mathbb{R}^d$,
what does its set of rearrangement sums look like? That question was raised by
Paul Lévy in 1905 and taken up by Ernst Steinitz in 1913, and later by Wacław
Sierpiński; the references below are to those papers, and they are given as the
origin of the question. **What the literature answers is not stated here in any
form, and nothing on this page or anywhere else in this library depends on it.**
Part of it is now proved, later in the reading order and marked as forward
material: [[thm-steinitz-polygonal-confinement]] and
[[thm-rearrangement-sums-lie-in-an-affine-subspace]] establish that the set of
rearrangement sums is nonempty and lies inside an affine subspace. The reverse
inclusion, which is what would turn that containment into the classical answer,
is still proved nowhere here.

The reason is a matter of reading order, not of difficulty or of interest. Stating
the theorem requires $\mathbb{R}^d$ as a normed space (a norm, convergence of
vector sequences, and a notion of a convergent series of vectors), and that
vocabulary is introduced later in the reading order than this page. Rather than
borrow it, or state a theorem whose terms are not yet defined, the obligation is
recorded where it can be discharged: on the page that builds $\mathbb{R}^d$ as a
normed space and afterwards. When that page is reached, the question raised here
is the one it will answer.

**What is safe to say now, and is worth saying.** The one-dimensional dichotomy
above is stark: a single point, or everything. Nothing in the proof of
[[thm-riemann-series-theorem]] survives verbatim in higher dimensions, because it
is built on the order of $\mathbb{R}$: the greedy rule "add positive terms until
the running sum exceeds the target, then negative ones until it falls below"
presupposes that the terms are signed and that the target can be approached from
two sides. In $\mathbb{R}^d$ with $d \ge 2$ there is no such order, the terms
point in many directions, and the argument has no analogue. A reader who expects
the one-dimensional answer to generalise unchanged should treat that expectation
as unsupported until the later page settles it.

**No claim of this library is made about $\mathbb{R}^d$ above.** The two Lévy and
Steinitz papers are cited as the historical source of the question, not as
authority for a result used anywhere here; no item on this page or elsewhere in
the library rests on them.
