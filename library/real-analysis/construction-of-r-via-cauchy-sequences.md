---
page: construction-of-r-via-cauchy-sequences
title: "Construction of the Real Numbers via Cauchy Sequences"
status: draft
# Reading order. Roadmap batches still to author:
#   batch 2 (Q):  def-rationals, lem-rat-equivalence, def-rat-operations,
#                 lem-rat-ops-well-defined, thm-rat-field, def-rat-order,
#                 thm-rat-ordered-field, lem-int-embeds-rat
#   batch 3 (Z order): def-int-order, thm-int-ordered-ring, lem-nat-embeds-int
#   batch 4 (R):  lem-null-is-cauchy, thm-cauchy-ring, lem-null-ideal,
#                 lem-null-maximal, def-real-numbers, thm-reals-field
#   batch 5 (R order + completeness): def-real-order, thm-reals-ordered-field,
#                 lem-rat-embeds-dense, thm-reals-cauchy-complete
#   batch 6 (examples): ex-sqrt2-cauchy, fs-rationals-complete, cex-...
items: [def-integers, lem-int-equivalence, def-int-operations,
        lem-int-add-well-defined, lem-int-mul-well-defined, thm-int-comm-ring,
        def-rational-cauchy-sequence, def-null-sequence, lem-cauchy-bounded]
examples: []
---

Starting from the natural numbers — whose arithmetic and order we take as given
— this page constructs, in turn, the integers, the rationals, and finally the
real numbers. Each stage repairs a defect of the last by the same device,
equivalence classes: subtraction fails in $\mathbb{N}$, so integers are classes
of formal differences $(a,b)$; division fails in $\mathbb{Z}$, so rationals are
classes of formal quotients; limits fail in $\mathbb{Q}$ — sequences like
$1, 1.4, 1.41, 1.414, \dots$ cluster ever more tightly yet converge to nothing
— so reals are classes of Cauchy sequences, identified when their difference
tends to zero. The destination is the fundamental theorem of the construction:
$\mathbb{R}$ is a totally ordered field that is complete — every Cauchy
sequence of reals converges — and the holes are filled once and for all:
completing $\mathbb{R}$ the same way yields nothing new.
