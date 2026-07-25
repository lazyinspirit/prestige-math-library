---
id: rem-sequence-conventions
kind: remark
title: "Conventions for sequences: indexing, eventually, $\\lim$, and rational $\\varepsilon$"
status: draft
origin: session
deps: [def-sequence, def-real-limit, lem-limit-of-tail, lem-limit-unique, lem-rat-embeds-dense, def-divergence-to-infinity, def-bounded-set, lem-of-abs-value, def-abs-value, def-real-order, lem-finite-set-has-max, def-max-min, def-countable, lem-subset-of-countable, lem-pigeonhole, lem-index-map-grows, lem-limit-preserves-order, thm-squeeze, thm-algebra-of-limits, lem-null-times-bounded, lem-reciprocal-of-null-diverges, lem-convergent-implies-cauchy, thm-reals-cauchy-complete, fs-bounded-implies-convergent, def-complete-ordered-field, def-ordered-field, lem-convergent-implies-bounded, thm-of-archimedean, lem-rat-archimedean, thm-rat-ordered-field, lem-of-triangle-inequality]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sequence"
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
    - title: "T. Tao, Analysis I, 3rd ed., §6.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

This page fixes a handful of conventions. None of them is deep, and each is the
kind of thing that silently causes trouble when it is left implicit.

**Indexing from $0$ or from $1$ makes no difference to convergence.** Sequences
here are functions on $\mathbb{N}$ ([[def-sequence]]), and $\mathbb{N}$ contains
$0$, so the first term is $x_0$. A text that writes $(x_k)_{k \ge 1}$ is
describing the first tail of such a function. By [[lem-limit-of-tail]] a sequence
and any of its tails converge to exactly the same limits and are Cauchy together,
so every statement on this page about convergence, about limits and about the
Cauchy condition reads the same under a shift of the indexing. That is a claim
about those statements and not about every sentence here: the starting index is
genuinely visible wherever an index is named, as in the base case $n_0 \ge 0$ of
[[lem-index-map-grows]], in the $0$-th tail used in the proof of
[[lem-limit-of-tail]], and in the recursion $s_0 = 1$ that builds the witness of
[[fs-bounded-implies-convergent]]. In a formula it shows up as the shift in
$1/(k+1)$, written that way here purely so that no term is undefined at $k = 0$.

**"Eventually" is the only weakened quantifier pattern used for hypotheses.** A
property holds eventually when it holds for all indices from some point on, and
frequently when, for every index $K$, it holds at some index $k \ge K$
([[def-sequence]]). The two are negations of each other applied to the
complementary property: $P$ holds frequently exactly when $\lnot P$ does not hold
eventually. "Frequently" is *defined* in that cofinal form, and the cofinal form
is what every use of the word here means, because it is the literal negation of
"eventually" and needs nothing further. The familiar reading "at infinitely many
indices" is equivalent to it, and the equivalence is available in this library
rather than merely plausible: finiteness is defined ([[def-countable]]),
[[lem-subset-of-countable]] proves that a subset of $\mathbb{N}$ is finite when
it is bounded above and countably infinite when it is not, and
[[lem-pigeonhole]] proves that $\mathbb{N}$ is equinumerous with no natural
number, so those two cases exclude one another. A set of indices is therefore
cofinal exactly when it is infinite. The cofinal form is nevertheless the one
taken as the definition here, because it is the literal negation of "eventually"
and calls on no counting theory at all. Because of [[lem-limit-of-tail]], a
hypothesis of the form "for all $k$"
whose conclusion concerns only convergence may be weakened to "eventually" at no
cost, and two of the three hypotheses of that shape on this page are stated in
the weaker form: the comparison $x_k \le y_k$ of [[lem-limit-preserves-order]]
and the bracketing $a_k \le x_k \le b_k$ of [[thm-squeeze]]. The third is
deliberately left at every index, the strict comparison $x_k < y_k$ of
[[fs-limit-preserves-strict-inequality]]: that claim is false, and stating its
hypothesis at every index makes it as strong as it can be, so that the refutation
defeats the strongest form rather than a weakened one. The remaining hypotheses
are stated at every index because they are not of that shape. Some are needed at
every index for the statement to typecheck at all, such as $y_k \ne 0$ in
[[thm-algebra-of-limits]] and $x_k > 0$ in [[lem-reciprocal-of-null-diverges]],
where a missing index would leave $1/y_k$ or $1/x_k$ undefined; and the bound
$|y_k| \le M$ of [[lem-null-times-bounded]] is not weakened because, as recorded
there, an eventual bound is already a bound. "Frequently" is defined here for
completeness and is used in no hypothesis on this page.

**$\lim$ is written only after uniqueness is known.** The notation $\lim_k x_k$
presupposes that at most one real can be the limit, which is
[[lem-limit-unique]]. Before that lemma, the correct phrasing is "$(x_k)$
converges to $x$", a relation between a sequence and a real, not a function of
the sequence. The same discipline is applied to $\sup$ and $\inf$ elsewhere in
the library ([[rem-sup-conventions]]): a notation is introduced only once the
object it names has been shown to exist and to be unique.

**Convergence is tested against rational $\varepsilon$.** The published
[[def-real-limit]] quantifies over rational $\varepsilon > 0$ rather than real
$\varepsilon > 0$. That is a deliberate feature of the construction of
$\mathbb{R}$, where the rationals are available before the reals are complete,
and it loses nothing: below any real $\eta > 0$ lies a positive rational
([[lem-rat-embeds-dense]]), so the two formulations define the same relation. The
argument is written out once, in the remarks of [[def-sequence]], and proofs on
this page cite it whenever a real $\varepsilon$ is more convenient than a
rational one. Rationals are identified with their images in $\mathbb{R}$ under
the ordered-field embedding, again as recorded in [[def-sequence]].

**A sequence is not its range, but boundedness only sees the range.** $(x_k)$ is
a function; the set $\{x_k : k \in \mathbb{N}\}$ forgets order and multiplicity.
The sequence is bounded, in the sense of [[def-sequence]], exactly when its range
is a bounded subset of $\mathbb{R}$ in the sense of [[def-bounded-set]]. Both
directions rest on the equivalence $|x| \le M \iff -M \le x \le M$: if
$|x| \le M$ then $x \le |x| \le M$ and $-M \le -|x| \le x$, using
$-|x| \le x \le |x|$ ([[lem-of-abs-value]]) together with the fact that
$a \le b$ and $-b \le -a$ are the same assertion, both saying that $b - a$ is
positive or zero ([[def-ordered-field]]); conversely, if $-M \le x \le M$ then
$|x|$, being $x$ or $-x$ by the definition of the absolute value
([[def-real-order]], [[def-abs-value]]), is $\le M$ either way. Given a
bound $M$ with $|x_k| \le M$ for all $k$, the range is bounded below by $-M$ and
above by $M$. Conversely, given $\ell \le x_k \le u$ for all $k$, put
$M := \max\{|\ell|, |u|\}$, which exists because a nonempty finite list of reals
has a maximum ([[lem-finite-set-has-max]], [[def-max-min]]); then
$x_k \le u \le |u| \le M$ and $-M \le -|\ell| \le \ell \le x_k$, so
$-M \le x_k \le M$ and hence $|x_k| \le M$ for every $k$, by transitivity of
$\le$ ([[def-ordered-field]]).

Boundedness is not alone in this. Any property of $(x_k)$ that is defined purely
from the set of values is settled by the range for the same trivial reason:
bounded above, bounded below, and the supremum or infimum of the range when it
exists ([[def-bounded-set]], [[def-complete-ordered-field]]) are read off the
range by definition, so permuting or repeating terms cannot change them.
**Convergence is not of that kind**, and that is the contrast worth drawing: the
sequence $z_0 = -1$ with $z_k = 1$ for $k \ge 1$ and the alternating sequence of
[[fs-bounded-implies-convergent]] have the *same* range $\{-1, 1\}$, yet the
first converges to $1$, being constant from index $1$ on ([[def-sequence]],
[[lem-limit-of-tail]]), while the second does not converge at all. So knowing the
range settles boundedness and does not settle convergence. That is the whole of
what is claimed here; each other property of a sequence has to be looked at on
its own, and this page does not survey them.

**"Diverges" means "does not converge".** Divergence is the plain negation of
convergence, so an oscillating bounded sequence diverges. Divergence *to*
$+\infty$ or $-\infty$ ([[def-divergence-to-infinity]]) is a strictly stronger
and entirely separate condition, and the arrow in $x_k \to +\infty$ is an
abbreviation, not an equation: this library never writes $\lim_k x_k = +\infty$,
because $+\infty$ is not a real number.

**What is deliberately absent from this page.** Monotone sequences, the monotone
convergence theorem, the Bolzano-Weierstrass theorem and the completeness of
$\mathbb{R}$ in the Cauchy sense are none of them treated here. They are the
subject of the next page of this track, *Monotone Sequences,
Bolzano-Weierstrass, and Cauchy Completeness*, which is planned and not yet
written; until it exists, nothing on this page may be taken to have proved any of
them. The last of the four is the one exception worth stating: for the
$\mathbb{R}$ this page works in, every Cauchy sequence of reals converges to a
real is already proved elsewhere in the library, by
[[thm-reals-cauchy-complete]] on the Cauchy-construction page, and
[[lem-convergent-implies-cauchy]] records where that leaves the two directions.
The monotone convergence theorem and the Bolzano-Weierstrass theorem have no such
exception: neither is proved anywhere in this library as things stand.
**How far this page is really a page about $\mathbb{R}$.** It assumes only that
$\mathbb{R}$ is a complete ordered field, and it uses completeness solely through
the Archimedean property. It is tempting to conclude that every result here holds
verbatim for sequences of rationals, and the earlier version of this remark said
exactly that. The claim needs splitting in two, because it is true of the
statements and not literally true of the proofs.

The statements do transfer. $\mathbb{Q}$ is an ordered field
([[thm-rat-ordered-field]]) and is Archimedean ([[lem-rat-archimedean]]), and the
absolute value, the triangle inequality and the order arithmetic these proofs run
on are established for an arbitrary ordered field, not for $\mathbb{R}$ in
particular ([[lem-of-abs-value]], [[lem-of-triangle-inequality]],
[[def-ordered-field]]).

The proofs do not transfer by citation, and two places are why.
[[lem-convergent-implies-bounded]] absorbs the first finitely many terms using
[[lem-finite-set-has-max]], which is stated for finite lists of **reals**; its
proof is an induction that runs in any totally ordered field, but as stated it
does not apply to $\mathbb{Q}$. And [[thm-of-archimedean]] is stated for
**complete** ordered fields, so it says nothing about $\mathbb{Q}$; the
$\mathbb{Q}$ counterpart is the separately proved [[lem-rat-archimedean]]. A
third, more basic point: this library defines convergence and the Cauchy
condition only for sequences of reals ([[def-sequence]], [[def-real-limit]]), so
the rational statements are not formulated anywhere here in the first place.

What is therefore claimed, and all that is claimed, is this: rerun any argument on
this page over $\mathbb{Q}$, replacing the maximum lemma by the same induction in
$\mathbb{Q}$ and [[thm-of-archimedean]] by [[lem-rat-archimedean]], and it goes
through unchanged. That is a statement about the arguments, not a licence to cite
the items above with $\mathbb{Q}$ in place of $\mathbb{R}$.
