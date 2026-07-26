---
page: equivalent-forms-of-completeness
title: "Equivalent Forms of Completeness"
status: draft
items: [def-completeness-properties, lem-of-sequence-basics,
        lem-lub-implies-nested-intervals,
        lem-nested-intervals-and-archimedean-imply-bw,
        lem-bw-implies-archimedean, lem-bw-implies-cauchy-complete,
        lem-cauchy-complete-and-archimedean-imply-mct,
        lem-mct-implies-archimedean, lem-mct-implies-lub,
        thm-completeness-equivalences, def-cesaro-mean,
        thm-cesaro-mean-theorem, thm-stolz-cesaro,
        cor-stolz-cesaro-zero-over-zero, def-summability-matrix,
        thm-silverman-toeplitz, cor-cesaro-matrix-is-regular,
        rem-where-the-archimedean-hypothesis-is-needed]
examples: [fs-nested-intervals-implies-lub, fs-cauchy-complete-implies-lub,
           fs-cesaro-converse]
---

**Objective.** Every earlier page of this track took the least-upper-bound
property as the axiom of $\mathbb{R}$ and derived the monotone convergence
theorem, the nested interval property, Bolzano-Weierstrass and the Cauchy
criterion from it. This page asks the converse question, and asks it for an
arbitrary ordered field rather than for $\mathbb{R}$: which of those four could
have been the axiom instead? The answer is that with one hypothesis added in two
places they are all the same statement, and that the hypothesis in question is
not removable. The page then turns to what a limit still means when a sequence
has none, and develops Cesaro means, Stolz-Cesaro and the Silverman-Toeplitz
characterisation of the weightings that preserve limits.

**Everything here is stated in an arbitrary ordered field, and that is a
constraint, not a flourish.** [[def-completeness-properties]] fixes the five
properties (LUB), (MCT), (NIP), (BW) and (CC) for an ordered field $F$, reading
every $\varepsilon$ inside $F$ itself, as [[def-sequences-in-an-ordered-field]]
requires. The consequence is that none of the sequence lemmas proved earlier for
$\mathbb{R}$ may be cited here: a theorem about sequences of reals is a theorem
about $\mathbb{R}$, and the observation that its proof would transfer is a
statement about the proof, not a licence. [[lem-of-sequence-basics]] exists for
exactly this reason. It proves, from the ordered field axioms alone, that limits
are unique, that they preserve non-strict inequalities, that convergent
sequences are Cauchy, that Cauchy sequences are bounded, and that a Cauchy
sequence with a convergent subsequence converges. Four of the implications below
rest on it, and it deliberately contains no arithmetic of limits, since no such
result is available for a general ordered field anywhere in this library.

**The nested interval property is stated in its shrinking form**, with the
lengths required to tend to $0$ in the order of $F$. That is forced rather than
chosen: [[cex-laurent-nested-intervals-empty]], on the prerequisite page,
exhibits nested intervals with empty intersection in
$\mathbb{R}((t^{-1}))$, so under the unrestricted reading the one witness this
library has would be lost and [[fs-nested-intervals-implies-lub]] would have
nothing to refute the claim with.

**The equivalence, and its cycle.** [[thm-completeness-equivalences]] proves
that for an ordered field $F$ the following are equivalent: (LUB); (ARCH) with
(NIP); (BW); (ARCH) with (CC); (MCT). Seven lemmas close the cycle
$1 \Rightarrow 2 \Rightarrow 3 \Rightarrow 4 \Rightarrow 5 \Rightarrow 1$.
[[lem-lub-implies-nested-intervals]] takes the supremum of the left endpoints,
and gets the Archimedean property from [[thm-of-archimedean]] on the way.
[[lem-nested-intervals-and-archimedean-imply-bw]] is the bisection argument: an
interval is halved forever, keeping a half the sequence visits infinitely often,
and the Archimedean property is what makes the halved lengths tend to $0$ in
$F$. [[lem-bw-implies-cauchy-complete]] is pure bookkeeping, because both of its
ingredients live in [[lem-of-sequence-basics]].
[[lem-cauchy-complete-and-archimedean-imply-mct]] shows a bounded nondecreasing
sequence is Cauchy, by extracting increments of a fixed size and adding them up
until they pass the bound. [[lem-mct-implies-lub]] bisects between an upper
bound and a non-upper bound and identifies the supremum as the common limit of
the two bracketing sequences. Both bisections are genuine recursions with no
choice: the rule that decides which half to keep is a definite condition, and
every index taken is the least admissible one.

**Three of the five carry the Archimedean property and two do not, and the
difference is the whole subtlety of the page.**
[[lem-bw-implies-archimedean]] and [[lem-mct-implies-archimedean]] show that
(BW) and (MCT) each force the Archimedean property on their own, as (LUB) does;
so those three need no such hypothesis attached. (NIP) and (CC) do, and
[[fs-nested-intervals-implies-lub]] and [[fs-cauchy-complete-implies-lub]] say
why: the formal Laurent series field $\mathbb{R}((t^{-1}))$, built on the
prerequisite page, has both of them and lacks least upper bounds.
[[rem-where-the-archimedean-hypothesis-is-needed]] sorts the five and explains
the pattern: the three that carry it quantify over an object assumed only to be
bounded, and can therefore be tested against the canonical naturals themselves,
while the two that do not quantify over data already forced together.

**When a sequence has no limit, one may still average it.**
[[def-cesaro-mean]] introduces $\sigma_n = (x_0 + \dots + x_n)/(n+1)$, indexed
from $0$ so that $(\sigma_n)$ is a genuine sequence on $\mathbb{N}$.
[[thm-cesaro-mean-theorem]] proves that averaging never changes a limit that
exists, by the head-and-tail estimate that every regularity proof repeats; and
[[fs-cesaro-converse]] proves that it can create one where none existed, the
alternating sequence being $(C,1)$-summable to $0$ and divergent. So Cesaro
summability is strictly weaker than convergence and consistent with it.

**Stolz-Cesaro is the discrete l'Hopital rule.** [[thm-stolz-cesaro]] proves
that if $(b_k)$ increases without bound then the behaviour of $a_k/b_k$ is
governed by the difference quotient $(a_{k+1}-a_k)/(b_{k+1}-b_k)$; the argument
telescopes the increments and lets the growing denominator wash out a fixed
head. It is stated for a tail, because nothing forbids $b_0 = 0$ and the two
applications on the companion page have exactly that.
[[cor-stolz-cesaro-zero-over-zero]] is the companion $0/0$ form, proved by the
same telescoping device rather than deduced from the theorem, with the limit
taken at the far end of the telescope instead.

**Which weightings preserve limits.** [[def-summability-matrix]] replaces the
equal Cesaro weights by an arbitrary array $c_{n,k}$, with finitely many nonzero
entries per row so that every $y_n = \sum_k c_{n,k}x_k$ is a finite sum; series
are not available until the next page of this track, and the restriction is what
keeps the definition meaningful here. Such a matrix is *regular* when it never
changes an existing limit. [[thm-silverman-toeplitz]] characterises regularity
by three conditions: null columns, row sums tending to $1$, and uniformly
bounded row absolute sums. Sufficiency is the head-and-tail estimate again.
Necessity of the first two conditions is read off two particular inputs, a
single nonzero coordinate and the constant sequence $1$. Necessity of the third
is the one genuinely hard argument on the page, a gliding hump: a sequence is
built in blocks whose signs are chosen against one row at a time, so that its
transform exceeds any prescribed value. [[cor-cesaro-matrix-is-regular]] then
recovers the Cesaro mean theorem from the characterisation, by checking those
three conditions for the Cesaro matrix.

**What this page does not do.** It proves nothing new about $\mathbb{R}$: every
implication here was already available there, and nothing above may be cited as
a fact about $\mathbb{R}$ that is not proved on an earlier page. It also proves
no Tauberian theorem, that is, no converse to Cesaro summability under an extra
side condition; and it defines no series, so the classical reading of Cesaro
summation as a method for divergent *series* is only mentioned, never used.
