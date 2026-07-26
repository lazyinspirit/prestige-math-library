---
page: limits-of-real-functions
title: "Limits of Real Functions"
status: draft
items: [def-function-limit, lem-function-limit-unique, lem-limit-is-local,
        def-one-sided-limits, def-limits-at-infinity,
        thm-sequential-criterion-for-function-limits,
        cor-sequential-criterion-for-nonexistence,
        lem-limit-implies-local-boundedness,
        lem-sign-preservation-near-a-limit,
        thm-algebra-of-function-limits, lem-function-limit-preserves-order,
        thm-squeeze-for-function-limits,
        thm-two-sided-limit-iff-both-one-sided,
        thm-composition-of-function-limits, lem-integer-part,
        rem-heine-criterion-choice-cost]
examples: [fs-limit-equals-value, fs-naive-composition-of-limits,
           fs-limit-unique-at-every-point-of-the-domain,
           fs-function-limit-preserves-strict-inequality,
           fs-limit-exists-implies-bounded-on-the-domain]
---

**Objective.** This page defines what it means for a function of a real variable
to have a limit at a point, and proves the toolkit that makes the notion usable:
uniqueness, locality, the algebra of limits, order preservation, the squeeze
theorem, the relation between the two-sided limit and the two one-sided limits,
and composition. It is built on the topology of $\mathbb{R}$
([[def-limit-point-r]], [[def-neighbourhood-r]]) and on the theory of sequences,
and it is the last page before continuity.

**The definition, and the three decisions inside it.**
[[def-function-limit]] says that $\lim_{x \to c} f(x) = L$ when for every real
$\varepsilon > 0$ there is a real $\delta > 0$ with $|f(x) - L| < \varepsilon$
for every $x$ in the domain satisfying $0 < |x - c| < \delta$. Three features are
load bearing rather than decorative, and two of the three have a false statement
on this page attached to them.

- **$c$ must be a limit point of the domain.** That is what keeps the quantified
  set nonempty for every $\delta$, and hence what allows the condition to pin $L$
  down. [[lem-function-limit-unique]] then proves that at most one $L$ can occur,
  which is exactly what licenses the notation, and it is recorded in the
  definition's `justified_by` for that reason. Drop the hypothesis and uniqueness
  fails completely: at an isolated point every real satisfies the formula
  vacuously, which is [[fs-limit-unique-at-every-point-of-the-domain]]. So at an
  isolated point of the domain the symbol $\lim_{x \to c} f(x)$ is simply not
  defined here.
- **$c$ need not lie in the domain**, so a limit may be taken where the function
  is not defined.
- **The value $f(c)$, when it exists, is invisible**, because $0 < |x - c|$
  removes $x = c$ from the quantifier. Equality of limit and value is therefore
  a hypothesis and not a consequence, which is
  [[fs-limit-equals-value]]; that equality is what continuity at $c$ will mean,
  on the next page of this track.

**Locality.** [[lem-limit-is-local]] proves the two statements that make the
limit a local object: changing $f$ outside a punctured neighbourhood of $c$
changes nothing, and a limit survives restricting the domain to any subset that
still has $c$ as a limit point. Everything later on this page that shrinks a
domain — the one-sided limits, the quotient rule — goes through it.

**The two variants.** [[def-one-sided-limits]] defines
$\lim_{x \to c^{\pm}} f(x)$ as the limit of the restriction of $f$ to the points
of the domain on one side of $c$, so uniqueness and locality are inherited rather
than reproved. [[def-limits-at-infinity]] defines limits at $\pm\infty$, where
the role of the limit-point hypothesis is played by unboundedness of the domain,
and infinite limits at a point. The symbols $\pm\infty$ remain abbreviations and
never real numbers: the library does not write $\lim_{x \to c} f(x) = +\infty$,
for the reason [[def-divergence-to-infinity]] already gave for sequences.
Uniqueness of the limit at $\pm\infty$ is proved inside that definition.

**Choice hygiene, and why it shapes the page.**
[[thm-sequential-criterion-for-function-limits]] — the Heine criterion — says
that $\lim_{x \to c} f(x) = L$ if and only if $f(x_k) \to L$ for every sequence
in the domain avoiding $c$ and converging to $c$. Its two directions do not cost
the same. The direction from $\varepsilon$-$\delta$ to sequences is a theorem of
ZF. The converse, as proved here, invokes the axiom of countable choice
([[def-countable-choice]]) exactly once, to pick one bad point from each of
countably many nonempty sets — the same use, for the same reason, as in
[[lem-sequential-characterisation-of-closure-r]] on the prerequisite page.
[[rem-heine-criterion-choice-cost]] records precisely what is and is not claimed
about that: in particular this library does **not** claim the axiom is necessary,
and it warns against the slogan that sequential criteria always need choice,
since Sierpiński's theorem on everywhere-sequentially-continuous functions is a
theorem of ZF.

The consequence for this page is a deliberate organisation. **Everything that can
be proved directly from $\varepsilon$ and $\delta$ is proved that way**, so the
algebra of limits, order preservation, the squeeze theorem and composition are
all theorems of ZF. The sequential side is used only where it earns its place: in
the criterion itself, and in [[cor-sequential-criterion-for-nonexistence]], which
needs only the choice-free direction and is the standard way to show that a limit
does *not* exist — two sequences tending to $c$ whose image sequences tend to
different values, or one whose image sequence does not converge at all.

**The toolkit, in the order it is needed.**
[[lem-limit-implies-local-boundedness]] shows that a function with a limit at $c$
is bounded on some punctured neighbourhood of $c$ — and only there, which is
[[fs-limit-exists-implies-bounded-on-the-domain]].
[[lem-sign-preservation-near-a-limit]] shows that a nonzero limit $L$ forces
$|f| > |L|/2$ on a punctured neighbourhood, with the sign of $L$, and that $c$
remains a limit point of the set where $f$ does not vanish. Those two lemmas are
exactly what the product and quotient cases of the next theorem need, which is
why they precede it.

[[thm-algebra-of-function-limits]] then proves that sums, scalar multiples,
products and quotients of limits behave as expected, the quotient on the domain
where the denominator does not vanish and under the hypothesis that its limit is
nonzero. Each claim asserts both that the compound limit exists and what it
equals. [[lem-function-limit-preserves-order]] proves that $f \le g$ near $c$
gives $\lim f \le \lim g$; the conclusion cannot be sharpened to a strict
inequality even from a strict hypothesis, which is
[[fs-function-limit-preserves-strict-inequality]].
[[thm-squeeze-for-function-limits]] is the one result here that *produces* a
limit rather than computing one: no hypothesis is placed on the squeezed function
at all. [[thm-two-sided-limit-iff-both-one-sided]] closes the loop with the
one-sided limits.

**Composition, with the hypothesis that is usually left implicit.**
[[thm-composition-of-function-limits]] is false as usually first stated. The
inner limit controls $|g(x) - L|$ but does not prevent $g(x)$ from *equalling*
$L$, and at those arguments the outer limit says nothing, since it never sees
$f(L)$. Two hypotheses each close the gap, and either suffices: **(i)** $L$ lies
in the outer domain with $f(L) = M$, which is continuity of $f$ at $L$ written
out; or **(ii)** $g$ avoids the value $L$ on a punctured neighbourhood of $c$,
which is what makes substitutions such as $y = 1/x$ legitimate. With both
dropped the statement is refuted by [[fs-naive-composition-of-limits]], whose
witness fails (i) and (ii) at once.

**One reusable lemma, deliberately placed here.** [[lem-integer-part]] proves
that every real $x$ has exactly one integer $m$ with $m \le x < m+1$. Existence
is the Archimedean property together with the well-ordering of $\mathbb{N}$;
uniqueness is the discreteness of $\mathbb{Z}$. It is the library's first floor
item, and it is stated on this page rather than inside an example so that later
pages — monotone functions, powers, content — can cite it instead of rebuilding
the argument. Its immediate use is on the companion page, where it computes the
trigonometry-free oscillator $\psi(x) = \inf_{n \in \mathbb{Z}} |x - n|$ in one
line.

**The companion page** carries the witnesses: polynomials and rational functions,
the oscillator $\psi$ and the two examples built on it, the sign function, a
limit at $+\infty$ computed by a direct estimate, the indicator of $\mathbb{Q}$,
and the counterexample items that work three of the five false statements listed
here out in full. Each of the five already carries its own witness, verified in
the false statement itself; what the companion page adds, for those three, is the
further computation each witness supports.
