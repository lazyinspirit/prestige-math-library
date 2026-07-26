---
page: foundations-of-the-real-numbers
title: "Foundations of the Real Numbers for Analysis"
status: published
items: [def-field, def-ordered-field, def-abs-value, def-archimedean-field,
        def-complete-ordered-field, def-field-homomorphism,
        def-ordered-field-isomorphism,
        lem-of-inverse-unique, lem-of-zero-mult, lem-of-mult-neg, cor-of-neg-one-squared,
        lem-of-no-zero-divisors, lem-of-mult-cancel,
        lem-of-add-order, lem-of-sign-rules, lem-of-square-positive,
        cor-of-one-positive, lem-of-inverse-positive, lem-of-abs-value,
        lem-of-triangle-inequality, cor-of-reverse-triangle,
        lem-of-square-monotone, prop-of-reciprocal-order, prop-of-product-sign,
        prop-of-multiply-inequalities, prop-of-ab-less-b,
        lem-of-naturals-positive, thm-of-archimedean, cor-archimedean-reciprocal,
        lem-of-q-embeds, lem-of-q-dense, thm-of-square-roots,
        lem-of-hom-fixes-q, lem-of-hom-order-preserving,
        thm-uniqueness-complete-ordered-field, lem-cauchy-reals-archimedean,
        cor-cauchy-reals-lub-complete, thm-equivalence-of-constructions]
examples: [ex-sqrt-two-exists, cex-embedding-not-order-preserving,
           cex-ordered-field-not-archimedean,
           fs-two-nonisomorphic-complete-ordered-fields]
---

**Objective.** This page assembles the working foundation a first course in real
analysis silently assumes: the arithmetic and order facts of $\mathbb{R}$ that
are usually waved through as "obvious", proved in full; the existence of square
roots; and the two structural theorems that justify speaking of *the* real
numbers at all. It proves that a complete totally ordered field is unique up to a
unique isomorphism, and that the two constructions of $\mathbb{R}$, via Cauchy
sequences and via Dedekind cuts, are the same ordered field seen two ways.

**The two constructions are the starting point.** The passage from $\mathbb{N}$
to $\mathbb{Z}$ to $\mathbb{Q}$ to $\mathbb{R}$ is carried out in full on the two
sibling pages, the
[[construction-of-r-via-cauchy-sequences|Cauchy-sequence construction]] and the
[[construction-of-r-via-dedekind-cuts|Dedekind-cut construction]]. Each ends by
proving that its $\mathbb{R}$ is a totally ordered field
([[thm-reals-ordered-field]], [[thm-reals-dedekind-ordered-field]]) that is
complete, in the Cauchy sense ([[thm-reals-cauchy-complete]]) and in the
least-upper-bound sense ([[thm-dedekind-complete]]) respectively. We take those
results as given and build on top of them.

**One abstract layer, two payoffs.** Rather than reprove each basic fact twice,
once per construction, we introduce the abstract notions of a **field**
([[def-field]]), an **ordered field** ([[def-ordered-field]]), and a **complete
ordered field** ([[def-complete-ordered-field]]), and prove every fact from those
axioms. Because both constructions are already known to satisfy the axioms, each
fact holds in both at once. The same abstraction is what the uniqueness theorem
needs, so the layer serves the elementary and the structural goals together.

**The obvious facts, proved.** From the field axioms alone come
$0 \cdot a = 0$, the sign rule $(-a)(-b) = ab$ (hence $(-1)(-1) = 1$,
[[cor-of-neg-one-squared]]), and the absence of zero divisors. Adding the order
axioms gives the facts an analysis course leans on constantly: every nonzero
square is positive ($a^2 > 0$, [[lem-of-square-positive]]), so $0 < 1$; the sign
rules for products and the behaviour of inequalities under multiplication by a
factor and under reciprocals ($0 < r < 1 \iff 1/r > 1$,
[[prop-of-reciprocal-order]]); the absolute value and its triangle inequalities,
$|x + y| \le |x| + |y|$ ([[lem-of-triangle-inequality]]) and the reverse form
([[cor-of-reverse-triangle]]); and the full slate of product inequalities,
including $0 < ab < b \iff 0 < a < 1$ for $a, b > 0$ ([[prop-of-ab-less-b]]).

**Square roots and the Archimedean property.** Completeness does the two things
$\mathbb{Q}$ could not. It makes the field **Archimedean**
([[thm-of-archimedean]]), so the integers are cofinal and the rationals are dense
([[lem-of-q-dense]]). The cofinal form is not quite the form analysis uses, so the
**reciprocal form** is recorded separately: for every $\varepsilon > 0$ there is a
natural $n \ge 1$ with $1/n < \varepsilon$ ([[cor-archimedean-reciprocal]]). That
is the statement every convergence proof reaches for, and having it once spares
each of them the inversion step. Completeness also supplies **square roots**: every nonnegative element
has a unique nonnegative square root ([[thm-of-square-roots]]), so the positive
elements are exactly the nonzero squares. That last fact is the hinge of the
uniqueness proof, since a field homomorphism preserves squares and therefore
preserves positivity.

**Uniqueness.** Every ordered field contains a canonical copy of $\mathbb{Q}$
([[lem-of-q-embeds]]), so the clause "admits $\mathbb{Q}$ as an embedding" is
automatic. The theorem [[thm-uniqueness-complete-ordered-field]] then shows any
two complete ordered fields are isomorphic by a *unique* ordered-field
isomorphism, built as $x \mapsto \sup\{\, \iota_G(q) : q \in \mathbb{Q},\,
\iota_F(q) < x \,\}$ and pinned down by density. So there is, up to a unique
isomorphism, exactly one complete totally ordered field: $\mathbb{R}$.

**Equivalence of the two constructions.** Uniqueness applies the moment both
models are complete ordered fields. The Cauchy model is complete in the
least-upper-bound sense too ([[cor-cauchy-reals-lub-complete]], bridged through
its Archimedean property [[lem-cauchy-reals-archimedean]]), and the Dedekind
model is a complete ordered field by construction. Hence
[[thm-equivalence-of-constructions]]: the Cauchy reals and the Dedekind reals are
isomorphic through a unique isomorphism that preserves addition, multiplication,
and order, and fixes the shared $\mathbb{Q}$. The two constructions are one
object.

**Why the hypotheses are sharp.** The optional items show none of the hypotheses
is free. Without completeness an ordered field can fail to be Archimedean
([[cex-ordered-field-not-archimedean]]), and a field homomorphism between ordered
fields can reverse order ([[cex-embedding-not-order-preserving]]); the false
statement [[fs-two-nonisomorphic-complete-ordered-fields]] records that no second
complete ordered field escapes the uniqueness theorem.
