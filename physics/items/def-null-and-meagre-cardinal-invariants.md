---
id: def-null-and-meagre-cardinal-invariants
kind: definition
title: Add, cov, non and cof for null and meagre ideals
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-nowhere-dense-meagre-and-residual-subsets, def-nowhere-dense-meager, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, def-measure-null-set-and-almost-everywhere, thm-lebesgue-measure-is-a-complete-measure, prop-countable-subsets-of-rn-are-lebesgue-null, thm-baire-category-r, def-open-and-closed-in-r, def-neighbourhood-r, def-interior-closure-boundary-r, def-ordered-field, def-countable-choice, def-axiom-of-choice, def-cardinal, lem-cardinality-of-a-well-orderable-set, def-cardinal-arithmetic]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Tomek Bartoszynski, Invariants of Measure and Category, Section 2 (the list of cardinal invariants of an ideal), printed p.2"
      url: "https://arxiv.org/pdf/math/9910015"
verification:
  audited: 2026-09-27
  precheck: n/a
---

## Definition

Work in ZFC. Let $\mathbb{R}$ carry its usual topology and its Lebesgue measure
$\lambda$ ([[def-open-and-closed-in-r]], [[def-neighbourhood-r]],
[[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]), and let a subset of
$\mathbb{R}$ be meagre when it is a union of a sequence of nowhere dense sets
([[def-nowhere-dense-meagre-and-residual-subsets]]; this is the same class as the
one of [[def-nowhere-dense-meager]], which requires the displayed union to equal
the set, because subsets of nowhere dense sets are nowhere dense). The two
families of the title are

$$\mathcal N:=\{E\subseteq\mathbb{R}:\ E \text{ is Lebesgue measurable and } \lambda(E)=0\}, \qquad \mathcal M:=\{E\subseteq\mathbb{R}:\ E \text{ is meagre}\},$$

the **Lebesgue-null ideal** and the **meagre ideal** on the real line
([[def-measure-null-set-and-almost-everywhere]]). Since
$(\mathbb{R},\mathcal{L}(\mathbb{R}),\lambda)$ is complete
([[thm-lebesgue-measure-is-a-complete-measure]]), a set belongs to $\mathcal N$
exactly when it is contained in a Lebesgue-null measurable set, so the
measurability clause in the definition of $\mathcal N$ is not an extra
restriction on the members.

**The four invariants.** Let $X$ be a set and let $\mathcal I$ be a family of
subsets of $X$ (in the applications below $\mathcal I$ is $\mathcal N$ or
$\mathcal M$ and $X=\mathbb{R}$). Define

- the **additivity** $\operatorname{add}(\mathcal I):=\min\{\lvert\mathcal A\rvert:\mathcal A\subseteq\mathcal I\text{ and }\textstyle\bigcup\mathcal A\notin\mathcal I\}$;
- the **covering number** $\operatorname{cov}(\mathcal I):=\min\{\lvert\mathcal A\rvert:\mathcal A\subseteq\mathcal I\text{ and }\textstyle\bigcup\mathcal A=X\}$;
- the **non** number $\operatorname{non}(\mathcal I):=\min\{\lvert Y\rvert:Y\subseteq X\text{ and }Y\notin\mathcal I\}$;
- the **cofinality** $\operatorname{cof}(\mathcal I):=\min\{\lvert\mathcal A\rvert:\mathcal A\subseteq\mathcal I\text{ and }\forall B\in\mathcal I\ \exists A\in\mathcal A\ (B\subseteq A)\}$.

The family $\mathcal A$ in the last clause is an **inclusion-cofinal**
subfamily of $\mathcal I$; "I-cover" is the reading of the second clause when
$\mathcal I$ is an ideal of subsets of $X$.

**The four minima exist and are attained** for each of $\mathcal N$ and
$\mathcal M$, with $X=\mathbb{R}$. For the two "family" numbers one exhibits a
single family: the family of singletons
$\mathcal S:=\{\{x\}:x\in\mathbb{R}\}$, indexed by $\mathbb{R}$, is a
subfamily both of $\mathcal N$ and of $\mathcal M$. Each singleton is null,
indeed has $\lambda(\{x\})=0$
([[prop-countable-subsets-of-rn-are-lebesgue-null]], where the Axiom of
Countable Choice [[def-countable-choice]] supplies the measure theory), and
each singleton is meagre: $\mathbb{R}\setminus\{x\}$ is open, because for
$y\ne x$ the neighbourhood $N_{\delta}(y)$ with $\delta=\lvert
y-x\rvert/2>0$ contains no $z$ with $z=x$, since $z=x$ would give
$\lvert z-y\rvert=\lvert x-y\rvert=2\delta\not< \delta$
([[def-neighbourhood-r]], [[def-open-and-closed-in-r]],
[[def-ordered-field]]); so $\{x\}$ is closed, it has empty interior, since
$N_{\varepsilon}(x)\subseteq\{x\}$ would put $x+\varepsilon/2\ne x$ into
$\{x\}$, and therefore $\{x\}$ is nowhere dense
([[def-interior-closure-boundary-r]]), hence meagre, its union with the
constant sequence of empty sets being $\{x\}$ itself. Since
$\bigcup\mathcal S=\mathbb{R}$, the families of candidates for
$\operatorname{add}$ and for $\operatorname{cov}$ are nonempty and contain the
cardinality $\lvert\mathcal S\rvert$. For the remaining two numbers a single
set suffices: $\mathbb{R}$ itself is neither null nor meagre, because
$\lambda(\mathbb{R})=+\infty\ne0$ ([[thm-lebesgue-measure-is-a-complete-measure]])
and no meagre subset of $\mathbb{R}$ exhausts $\mathbb{R}$
([[thm-baire-category-r]]), so $\mathbb{R}$ witnesses $Y\subseteq X$,
$Y\notin\mathcal N$ and $Y\notin\mathcal M$; and $\mathcal I$ itself is an
inclusion-cofinal subfamily of $\mathcal I$, since $B\subseteq B$ for
$B\in\mathcal I$.

Each of the four candidate collections is therefore a nonempty set of
ordinals, so each has a least element: cardinalities are available, and are
cardinals, because the Axiom of Choice well-orders every set
([[def-axiom-of-choice]], [[lem-cardinality-of-a-well-orderable-set]]), and the
candidate collection is the image under $Z\mapsto\lvert Z\rvert$ of a subset of
the power set of $\mathcal I$ or of $X$, hence a set by Replacement. The
minimum is attained: there is a subfamily of $\mathcal I$ of size
$\operatorname{add}(\mathcal I)$ whose union is not in $\mathcal I$, a
subfamily of $\mathcal I$ of size $\operatorname{cov}(\mathcal I)$ with union
$X$, a set $Y\subseteq X$ of size $\operatorname{non}(\mathcal I)$ with
$Y\notin\mathcal I$, and an inclusion-cofinal subfamily of $\mathcal I$ of
size $\operatorname{cof}(\mathcal I)$. All four numbers are cardinals
([[lem-cardinality-of-a-well-orderable-set]]), and no further property is
built into the definition: the elementary inequalities among the eight
numbers, and their comparison with $\aleph_1$ and
$\mathfrak c=2^{\aleph_0}$, are proved in
[[lem-basic-ideal-cardinal-inequalities]] ([[def-cardinal-arithmetic]]).

**Conventions.** Bartoszyński's list of cardinal invariants of an ideal
$\mathcal J$ of subsets of a set $X$ is exactly the four displayed clauses: he
writes $\operatorname{add}(\mathcal J)=\min\{\lvert\mathcal A\rvert:\mathcal
A\subseteq\mathcal J$ and $\bigcup\mathcal A\notin\mathcal J\}$,
$\operatorname{cov}(\mathcal J)=\min\{\lvert\mathcal A\rvert:\mathcal
A\subseteq\mathcal J$ and $\bigcup\mathcal A=X\}$,
$\operatorname{non}(\mathcal J)=\min\{\lvert Y\rvert:Y\subseteq X$ and
$Y\notin\mathcal J\}$ and $\operatorname{cof}(\mathcal J)=\min\{\lvert\mathcal
A\rvert:\mathcal A\subseteq\mathcal J$ and $\forall B\in\mathcal
J\ \exists A\in\mathcal A\ (B\subseteq A)\}$. The eight numbers of this page
are the values of the four functions at $\mathcal I=\mathcal N$ and
$\mathcal I=\mathcal M$, read as $\operatorname{add}(\mathcal N)$,
$\operatorname{cov}(\mathcal N)$, $\operatorname{non}(\mathcal N)$,
$\operatorname{cof}(\mathcal N)$, $\operatorname{add}(\mathcal M)$,
$\operatorname{cov}(\mathcal M)$, $\operatorname{non}(\mathcal M)$ and
$\operatorname{cof}(\mathcal M)$. It is part of the definition that these are
evaluated on the real line, with Lebesgue measure and the usual topology;
$\mathcal N$ and $\mathcal M$ are proper (that is, $\mathbb{R}\notin\mathcal
I$) and, under the Axiom of Countable Choice,
$\sigma$-ideals, by [[prop-null-sets-form-a-sigma-ideal-in-a-complete-space]]
and [[prop-meagre-subsets-form-a-sigma-ideal]], but neither closure property
is used in the definition.

**Choice accounting.** The minima use AC via
[[lem-cardinality-of-a-well-orderable-set]], exactly as the sibling
definitions of $p$, $t$, $b$, $d$, $s$ and $r$ do. The null side uses
$\mathrm{AC}_\omega$ through the cited suppliers
([[thm-lebesgue-measure-is-a-complete-measure]],
[[prop-countable-subsets-of-rn-are-lebesgue-null]]); the meagre side uses no
choice principle to speak of meagreness or in the two facts needed above —
the two elementary computations for $\{x\}$ and the Baire fact for
$\mathbb{R}$ ([[thm-baire-category-r]]).

## Remarks

The four numbers were introduced by the descriptive-set-theory school in the
context of an ideal of subsets of a Polish space, and Bartoszyński's chapter
opens with precisely this list; the transfer of the definitions between the
real line and Cantor space $2^{\omega}$ is developed below, together with the
comparison of the eight values on the two spaces
([[lem-null-meagre-ideal-transfer-cantor-real]]), and the Cichoń diagram
collecting the inequalities among them is
[[thm-cichons-diagram-inequalities]].

The names are mnemonics rather than descriptions of the definitions: the
"additivity" is the least size of a subfamily whose union escapes the ideal,
not the additivity of a measure-like functional; the "covering number" counts
covers by ideal members rather than general covers; "non" counts the least
size of a set *not* in the ideal; and the "cofinality" is computed in the
inclusion order of the ideal, not in the order of the underlying set. The
clause "$\bigcup\mathcal A\notin\mathcal I$" in the definition of
$\operatorname{add}$ excludes the empty family when
$\varnothing\in\mathcal I$. The equation $\bigcup\mathcal A=X$ excludes the
empty family when $X\ne\varnothing$; if $X=\varnothing$, the empty family
instead witnesses $\operatorname{cov}(\mathcal I)=0$. Here
$X=\mathbb R\ne\varnothing$ and both ideals contain $\varnothing$, so the
empty subfamily is never a candidate for either additivity or covering.
