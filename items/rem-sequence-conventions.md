---
id: rem-sequence-conventions
kind: remark
title: "Conventions for sequences: indexing, eventually, $\\lim$, and rational $\\varepsilon$"
status: draft
origin: session
deps: [def-sequence, def-real-limit, lem-limit-of-tail, lem-limit-unique, lem-rat-embeds-dense, def-divergence-to-infinity, def-bounded-set, lem-of-abs-value, lem-finite-set-has-max, def-max-min, def-ordered-field]
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

**Indexing from $0$ or from $1$ makes no difference.** Sequences here are
functions on $\mathbb{N}$ ([[def-sequence]]), and $\mathbb{N}$ contains $0$, so
the first term is $x_0$. A text that writes $(x_k)_{k \ge 1}$ is describing the
first tail of such a function. By [[lem-limit-of-tail]] a sequence and any of its
tails converge to exactly the same limits and are Cauchy together, so no
statement on this page changes if the indexing is shifted. The only place the
starting index is ever visible is in a formula such as $1/(k+1)$, written that way
here purely so that no term is undefined at $k = 0$.

**"Eventually" is the only quantifier pattern used for hypotheses.** A property
holds eventually when it holds for all indices from some point on, and
frequently when, for every index $K$, it holds at some index $k \ge K$
([[def-sequence]]). "Frequently" is stated in that cofinal form rather than as
"at infinitely many indices" because no notion of finiteness is in scope on this
page. The two are
negations of each other applied to the complementary property: $P$ holds
frequently exactly when $\lnot P$ does not hold eventually. Because of
[[lem-limit-of-tail]], every hypothesis of the form "for all $k$" that concerns
only convergence may be weakened to "eventually" at no cost, and this page states
its hypotheses in the weaker form wherever that is honest.

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
$|x|$, being $x$ or $-x$ ([[lem-of-abs-value]]), is $\le M$ either way. Given a
bound $M$ with $|x_k| \le M$ for all $k$, the range is bounded below by $-M$ and
above by $M$. Conversely, given $\ell \le x_k \le u$ for all $k$, put
$M := \max\{|\ell|, |u|\}$, which exists because a nonempty finite list of reals
has a maximum ([[lem-finite-set-has-max]], [[def-max-min]]); then
$x_k \le u \le |u| \le M$ and $-M \le -|\ell| \le \ell \le x_k$, so
$-M \le x_k \le M$ and hence $|x_k| \le M$ for every $k$, by transitivity of
$\le$ ([[def-ordered-field]]). Everything else about a sequence, convergence
included, depends on more than the range: the sequence $z_0 = -1$ with $z_k = 1$
for $k \ge 1$ and the alternating sequence of [[fs-bounded-implies-convergent]]
have the *same* range $\{-1, 1\}$, yet the first converges to $1$, being constant
from index $1$ on ([[def-sequence]], [[lem-limit-of-tail]]), while the second
does not converge at all.

**"Diverges" means "does not converge".** Divergence is the plain negation of
convergence, so an oscillating bounded sequence diverges. Divergence *to*
$+\infty$ or $-\infty$ ([[def-divergence-to-infinity]]) is a strictly stronger
and entirely separate condition, and the arrow in $x_k \to +\infty$ is an
abbreviation, not an equation: this library never writes $\lim_k x_k = +\infty$,
because $+\infty$ is not a real number.

**What is deliberately absent from this page.** Monotone sequences, the monotone
convergence theorem, the Bolzano-Weierstrass theorem and the completeness of
$\mathbb{R}$ in the Cauchy sense are all developed on the next page of this
track. This page assumes only that $\mathbb{R}$ is a complete ordered field and
uses completeness solely through the Archimedean property, so every result here
also holds verbatim for sequences of rationals.
