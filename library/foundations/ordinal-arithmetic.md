---
page: ordinal-arithmetic
title: "Ordinal Arithmetic and the First Uncountable Ordinal"
status: draft
items: [lem-recursion-on-the-ordinals, cor-ordinal-addition-well-defined,
        def-ordinal-addition, cor-ordinal-multiplication-well-defined,
        def-ordinal-multiplication, cor-ordinal-exponentiation-well-defined,
        def-ordinal-exponentiation, lem-ordinal-sum-as-an-order-type,
        lem-ordinal-product-as-an-order-type,
        thm-ordinal-arithmetic-monotonicity, thm-ordinal-addition-associative,
        thm-ordinal-multiplication-associative-and-left-distributive,
        thm-ordinal-subtraction, thm-ordinal-division-with-remainder,
        thm-ordinal-exponent-laws, thm-cantor-normal-form,
        thm-ordinal-arithmetic-agrees-on-omega, def-first-uncountable-ordinal,
        thm-omega-one-is-the-least-uncountable-ordinal,
        def-cofinal-subset-of-an-ordinal,
        thm-countable-subsets-of-omega-one-are-bounded,
        rem-ordinal-versus-cardinal-exponentiation,
        rem-omega-one-and-the-cost-of-choice]
examples: [fs-ordinal-addition-is-commutative,
           fs-ordinal-multiplication-is-commutative,
           fs-ordinal-multiplication-is-right-distributive,
           fs-ordinal-addition-is-strictly-monotone-in-the-left-argument,
           fs-the-ordinal-two-to-the-omega-is-uncountable]
---

**Objective.** The previous page built the ordinals and proved that transfinite
induction and transfinite recursion are legitimate. This page puts them to work:
it defines $\alpha + \beta$, $\alpha \cdot \beta$ and $\alpha^{\beta}$, proves
the laws they do and do not satisfy, extracts the Cantor normal form, and then
constructs the first uncountable ordinal $\omega_1$ and settles what can be said
about it in ZF and what costs a choice principle.

**A bridge is needed before anything can be defined.** The published
[[thm-transfinite-recursion]] is stated for a well-order, that is for a **set**,
and it produces one function whose domain is that set. An operation such as
$\alpha + \beta$ has to be defined at *every* ordinal $\beta$, and the ordinals
are not a set. The first item on this page, [[lem-recursion-on-the-ordinals]],
is exactly that bridge: apply the published theorem inside each ordinal
$\gamma$, then glue the results using its **uniqueness** clause. No new
recursion principle is introduced, and the cost is unchanged — Replacement, and
no form of choice. The three `cor-*-well-defined` items rest on this bridge and
not on the published theorem directly.

**Three cases, never two.** Every ordinal is exactly one of $0$, a successor, or
a limit ([[def-limit-ordinal]]), and each of the three definitions carries all
three clauses. The clause that is easiest to get wrong is the one at a limit for
exponentiation: it runs over $0 < \beta < \lambda$, **not** over $\beta <
\lambda$. With the unrestricted union the stray value $\alpha^{0} = 1$ would
force $0^{\omega} = 1$; with the restriction, one formula is correct for every
base including $0$, and no case split on the base is needed.
[[cor-ordinal-exponentiation-well-defined]] carries the details and the exponent
law that the naive clause falsifies.

**The recursions define, the order types compute.** $\alpha + \beta$ is the
order type of a copy of $\alpha$ followed by a copy of $\beta$
([[lem-ordinal-sum-as-an-order-type]]), and $\alpha \cdot \beta$ is the order
type of $\beta$ copies of $\alpha$, that is of $\alpha \times \beta$ under last
differences ([[lem-ordinal-product-as-an-order-type]]). The product convention
is stated where the product is defined, because it is a genuine choice: it is
what makes $\omega \cdot 2 = \omega + \omega$ while $2 \cdot \omega = \omega$.
The order-type descriptions also give the splitting law
$\mathrm{ot}(W) = \mathrm{ot}(I) + \mathrm{ot}(W \setminus I)$ at an initial
segment, and that single fact is what makes ordinal subtraction a one-line
theorem.

**What the laws are, and what they are not.** Addition and multiplication are
strictly increasing and continuous in the **right** argument, weakly increasing
in the left, and left cancellative — for multiplication, in each case whenever the
left factor is nonzero, since $0 \cdot \beta = 0$ for every $\beta$
([[thm-ordinal-arithmetic-monotonicity]] — the workhorse of the page:
subtraction, division with remainder, the exponent laws and the Cantor normal
form all run on it). Addition is associative; multiplication is
associative and distributes over addition **on the left**. Every other law a
reader might expect fails, and the five false statements in section 5 refute
them one at a time: commutativity of $+$, commutativity of $\cdot$, right
distributivity, strict monotonicity of $+$ in the left argument, and the belief
that the ordinal $2^{\omega}$ is uncountable. The last of these is the notation
clash between ordinal and cardinal exponentiation, and
[[rem-ordinal-versus-cardinal-exponentiation]] is the standing warning about it.

**Subtraction, division, and the normal form.** For $\alpha \le \beta$ there is
exactly one $\gamma$ with $\alpha + \gamma = \beta$; for $\alpha > 0$ every
$\beta$ is $\alpha \cdot \xi + \rho$ with $\rho < \alpha$, uniquely. Iterating
the division by successive powers of $\omega$ produces the **Cantor normal
form**: every nonzero ordinal is $\omega^{\beta_0} c_0 + \cdots +
\omega^{\beta_{k-1}} c_{k-1}$ with strictly decreasing exponents and nonzero
finite coefficients, in exactly one way. Existence needs the clause
$\beta \le \omega^{\beta}$ of [[thm-ordinal-exponent-laws]], without which "the
largest $\beta$ with $\omega^{\beta} \le \alpha$" is not known to exist at all,
together with continuity at limits, which is what makes the candidates attain
their supremum. Uniqueness needs the additive indecomposability of
$\omega^{\beta}$, proved inside [[thm-cantor-normal-form]], and it is uniqueness
that licenses the definite article in "the Cantor normal form".

**The dictionary with $\mathbb{N}$ is not optional.**
[[thm-ordinal-arithmetic-agrees-on-omega]] proves that on $\omega$ the ordinal
$+$ and $\cdot$ are literally the Peano operations of
`construction-of-the-natural-numbers`, and that $\omega$ is closed under all
three ordinal operations. Without it the library would carry two unrelated
functions written $+$ on the same set. Note the exact scope: no prerequisite of
this page supplies a natural-number exponentiation, so no agreement is claimed
for exponentiation, only closure.

**The first uncountable ordinal, and where choice starts.** $\omega_1$ is
defined as the Hartogs number $\aleph(\omega)$, and
**[[thm-hartogs]] is a theorem of ZF**, so $\omega_1$ exists without any choice
principle; so does everything in
[[thm-omega-one-is-the-least-uncountable-ordinal]] — that $\omega_1$ is
uncountable, that every ordinal below it is at most countable, that it is a
cardinal and a limit ordinal. The bridge that has to be written out there is
"an ordinal injects into $\mathbb{N}$ if and only if it is at most countable",
which is what turns Hartogs' theorem into a statement about countability.

The cost begins at the last theorem.
[[thm-countable-subsets-of-omega-one-are-bounded]] assumes the Axiom of
Countable Choice and spends it at exactly one step, the appeal to
[[thm-countable-union-of-countable]]. Its conclusion — that no at most countable
subset of $\omega_1$ is cofinal in it — is the fact later topology pages need,
and it is **not** a theorem of ZF: consistently with ZF, $\omega_1$ is the
supremum of an $\omega$-sequence of countable ordinals.
[[rem-omega-one-and-the-cost-of-choice]] keeps that ledger, in the manner of the
published [[rem-choice-ledger]], and names the external model that witnesses the
failure.

**What this page deliberately does not build.** The cofinality *function*
$\operatorname{cf}(\alpha)$ and the regular/singular vocabulary are not defined;
only *cofinal subset of an ordinal* is, which is all the boundedness theorem
needs. The aleph hierarchy is not built either, so the first uncountable ordinal
is written $\omega_1$ throughout and never $\aleph_1$, and cardinal
exponentiation is never used. Fixed-point theory for normal functions is absent;
the ordinal $\varepsilon_0$ is exhibited by hand on the companion page instead.
