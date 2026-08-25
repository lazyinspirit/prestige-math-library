---
id: rem-lattice-path-conventions
kind: remark
title: "Conventions fixed on this page"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-lattice-path-and-step-set, def-dyck-path-and-semilength, def-catalan-number, thm-cycle-lemma, lem-sign-reversing-involution-on-intersecting-path-systems]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-26
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: 'C. Krattenthaler, "Lattice Path Enumeration", ch. 10 of the Handbook of Enumerative Combinatorics'
      url: "https://arxiv.org/pdf/1503.05930"
    - title: "A. Huq, Generalized Chung-Feller Theorems for Lattice Paths"
      url: "https://arxiv.org/pdf/0907.3254"
    - title: "N. Dershowitz and S. Zaks, The Cycle Lemma and Some Applications"
      url: "https://weizmann.elsevierpure.com/en/publications/the-cycle-lemma-and-some-applications"
pipeline_run: null
---

## Remarks

The page uses two step pictures and treats them as one subject only through
their proved dictionary. [[def-lattice-path-and-step-set]] is the ambient
definition, [[def-dyck-path-and-semilength]] fixes the diagonal picture, and
[[lem-monotone-and-diagonal-lattice-paths-correspond]] is the only place where
the monotone picture is identified with it.

The indexing starts at $0$. Dyck paths have semilength $n$, the Catalan number
$C_n$ counts semilength-$n$ paths by [[def-catalan-number]], and the base case is
$C_0=1$. Every count on the page is written with that convention visible rather
than hidden inside a later formula.

"Strictly above" and "weakly above" are different conditions and are never
merged. The reflection principle counts paths staying strictly above a level; the
Dyck-path count uses weakly above because the path may touch height $0$; and
[[thm-cycle-lemma]] fixes the orientation that a good shift is one whose partial
sums are all strictly positive, with shifts indexed by their starting position.

A bijection on this page is always given with a two-sided inverse. That
convention is what blocks the companion page's false bijection, and it is why
the tail-swap of [[lem-sign-reversing-involution-on-intersecting-path-systems]]
is stated as an involution rather than as a cancellation slogan.

Two familiar refinements are left out because this page does not build the extra
machinery they need. The Hankel determinant identity
$\det(C_{i+j})_{0\le i,j\le n-1}=1$ would need
[[thm-lindstrom-gessel-viennot]] applied to a path family closed under the same
tail-swap, together with a theorem counting the monotone paths that stay weakly
below a fixed diagonal. The Narayana refinement counts Dyck paths by their number
of peaks, and none of the routes built here tracks that statistic. Both are
therefore recorded as not built here, and Huq §2.5 is the source in hand for the
second.
