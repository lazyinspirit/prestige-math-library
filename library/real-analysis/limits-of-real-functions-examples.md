---
page: limits-of-real-functions-examples
title: "Limits of Real Functions: Examples and Counterexamples"
status: draft
items: [rem-classical-oscillator-is-sine-of-one-over-x]
examples: [ex-limit-of-a-polynomial, ex-distance-to-the-integers,
           ex-x-times-psi-tends-to-zero,
           ex-one-sided-limits-of-the-sign-function,
           ex-limit-at-infinity-of-a-rational-function,
           cex-psi-of-one-over-x-has-no-limit-at-zero,
           cex-limit-differs-from-the-value,
           cex-composition-of-limits-fails,
           cex-dirichlet-has-no-limit-anywhere,
           ex-x-times-dirichlet-has-a-limit-only-at-zero,
           cex-limit-not-unique-at-an-isolated-point]
---

**Objective.** This is the worked companion to the page on limits of real
functions, linked under Prerequisites above. It introduces no new definition and
proves no new general theorem: every item here is either a computation carried
out in full, or a witness that some hypothesis on that page cannot be dropped.
The one remark on the page is orientation about notation, not a mathematical
claim.

**The routine case, done properly.** [[ex-limit-of-a-polynomial]] proves that a
polynomial function satisfies $\lim_{x \to c} p(x) = p(c)$ at every real $c$, and
that a rational function does the same wherever its denominator does not vanish.
The proof is two inductions on top of [[thm-algebra-of-function-limits]] — one
along the recursion defining powers, one along the recursion defining finite sums
— together with the observation that the domain of a rational function still has
$c$ as a limit point, which is the last claim of
[[lem-sign-preservation-near-a-limit]]. It is worth noticing that the equality
$\lim_{x \to c} p(x) = p(c)$ is a theorem here and not an instance of anything
automatic: [[fs-limit-equals-value]] shows it fails in general.

**The oscillator, without trigonometry.** [[ex-distance-to-the-integers]] builds
the function $\psi(x) = \inf_{n \in \mathbb{Z}} |x - n|$ and establishes
everything the rest of the page needs about it: the infimum exists and is
attained at a nearest integer, its value is $\min\{x - \lfloor x \rfloor,\
\lfloor x \rfloor + 1 - x\}$, its range is exactly $[0, 1/2]$, it vanishes
exactly on $\mathbb{Z}$, it equals $1/2$ at every half-integer, and it is
$1$-periodic. All of that comes from [[lem-integer-part]] in a few lines, and no
completeness argument is needed for the infimum itself, since the value is
exhibited as an element of the set.

Two items then use it in opposite directions.
[[cex-psi-of-one-over-x-has-no-limit-at-zero]] shows that $\psi(1/x)$ has no
limit at $0$, by evaluating it along $x_k = 1/(k+1)$, where it is constantly $0$,
and along $y_k = 2/(2k+1)$, where it is constantly $1/2$; both sequences have
positive terms, so what fails is already the right-hand limit. Since $\psi(1/x)$
takes only values in $[0,1/2]$, this also shows that boundedness near a point
does not deliver a limit: the converse of
[[lem-limit-implies-local-boundedness]] is false.
[[ex-x-times-psi-tends-to-zero]] shows that multiplying by $x$ repairs it, and
the repair is the squeeze theorem [[thm-squeeze-for-function-limits]] applied to
$-|x|/2 \le x\,\psi(1/x) \le |x|/2$.

The indices are worth a word. Sequences here are functions on $\mathbb{N}$ and
$\mathbb{N}$ contains $0$ ([[def-sequence]]), so the null sequences are written
$1/(k+1)$ and $2/(2k+1)$, whose reciprocals are the integers $k+1$ and the
half-integers $k + 1/2$; writing $1/k$ would be undefined at the first index.

**Where one-sided limits are the whole story.**
[[ex-one-sided-limits-of-the-sign-function]] computes both one-sided limits of
$\operatorname{sgn}$ at $0$, finds $1$ and $-1$, and concludes from
[[thm-two-sided-limit-iff-both-one-sided]] that no two-sided limit exists. This
is a genuine jump: unlike the removable defect below, no redefinition of the
value at $0$ can repair it.

**A limit at infinity, by hand.**
[[ex-limit-at-infinity-of-a-rational-function]] proves that
$(3x^2 - 1)/(x^2 + x) \to 3$ as $x \to +\infty$ on $(0, \infty)$. It does **not**
cite the algebra of limits, which is stated at a finite limit point, and no
algebra of limits at $\pm\infty$ is proved in this library. The whole argument is
the identity $|f(x) - 3| = (1 + 3x)/(x^2 + x)$, the estimate $\le 4/x$ valid for
$x \ge 1$, and the Archimedean property.

**Value versus limit, and the composition failure it drives.**
[[cex-limit-differs-from-the-value]] works out the smallest possible witness for
[[fs-limit-equals-value]]: the function equal to $0$ off the origin and to $1$ at
it. Both one-sided limits and the two-sided limit are $0$ while the value is $1$,
so the defect is removable, and changing the single value repairs it.
[[cex-composition-of-limits-fails]] feeds that same function a constant inner
function and breaks the composition, refuting
[[fs-naive-composition-of-limits]]; it then checks which hypotheses of
[[thm-composition-of-function-limits]] fail — both — and shows that replacing the
inner function by the identity, which satisfies hypothesis (ii), restores the
conclusion with the outer function unchanged.

**Failure everywhere at once.** [[cex-dirichlet-has-no-limit-anywhere]] shows
that the indicator of $\mathbb{Q}$ has a limit at no point of $\mathbb{R}$,
using the density of the rationals and of the irrationals
([[lem-q-and-irrationals-dense-r]]) to produce, at any point, a sequence of
rationals and a sequence of irrationals tending to it while avoiding it. The
countable choice spent in [[lem-sequential-characterisation-of-closure-r]] is
inherited there and is recorded by that item; the criterion applied afterwards,
[[cor-sequential-criterion-for-nonexistence]], is choice free.
[[ex-x-times-dirichlet-has-a-limit-only-at-zero]] then shows that multiplying by
$x$ leaves exactly one point where a limit survives — the same damping mechanism
as for $\psi(1/x)$, applied to a wilder irregularity.

**The isolated point.** [[cex-limit-not-unique-at-an-isolated-point]] takes the
domain $\{0\} \cup [1,2]$ and shows that at $0$ every real satisfies the
$\varepsilon$-$\delta$ formula vacuously, refuting
[[fs-limit-unique-at-every-point-of-the-domain]], while at $1$ — a limit point of
the same domain — the formula determines a unique value. That is why
[[def-function-limit]] is stated only at a limit point, and why
$\lim_{x \to 0} f(x)$ is left undefined on such a domain.

**Why $\psi$ and not $\sin$.** [[rem-classical-oscillator-is-sine-of-one-over-x]]
records that the classical form of the two oscillator items is $\sin(1/x)$ and
$x \sin(1/x)$, and that this library cannot yet write them: $\sin$ needs power
series and a definition of $\pi$, none of which exists at this point in the
reading order. The remark is orientation only; nothing on this page asserts,
uses or proves anything about $\sin$, and it carries no link to a sine item,
because the page that will define one has not been written.
