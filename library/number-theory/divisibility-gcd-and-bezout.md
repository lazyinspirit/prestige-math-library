---
page: divisibility-gcd-and-bezout
title: "Divisibility, Greatest Common Divisors and Bézout's Identity"
status: draft
items: [def-int-abs, lem-int-abs-properties, def-divides-in-z,
        cor-division-algorithm-nonzero-divisor, lem-divisibility-basic,
        lem-divisor-bound, lem-units-of-z, def-associates-in-z,
        lem-associates-characterisation, lem-int-bounded-above-has-greatest,
        def-common-divisor-and-gcd, lem-gcd-basic-values, thm-bezout-identity,
        cor-common-divisor-divides-gcd, lem-gcd-euclidean-step,
        thm-euclidean-algorithm, cor-extended-euclidean-bezout-coefficients,
        def-coprime, lem-coprime-criterion, lem-coprime-divides-product,
        lem-gcd-scaling, cor-gcd-quotients-coprime, def-lcm,
        thm-gcd-lcm-product, lem-subgroups-of-z-are-cyclic,
        thm-gcd-generates-the-subgroup]
examples: []
---

**Objective.** This page opens the number theory track, and it is built entirely
on $\mathbb{Z}$ as the library constructed it: the ordered commutative ring of
[[thm-int-comm-ring]] and [[thm-int-ordered-ring]], with the embedding
$\iota : \mathbb{N} \to \mathbb{Z}$ of [[lem-nat-embeds-int]] and the division
algorithm [[thm-division-algorithm-in-z]]. What is developed here is the
divisibility relation and everything that follows from Bézout's identity:
greatest common divisors, the Euclidean algorithm and its extended form, coprime
integers, least common multiples, and the identification of the subgroups of
$(\mathbb{Z},+)$ with the sets of multiples. Primes, Euclid's lemma and unique
factorisation are **not** proved here; they belong to a later page, and no
argument below assumes them.

**Absolute value on $\mathbb{Z}$, minted here.** The library's other absolute
value, [[def-abs-value]], is stated for an ordered *field*, and $\mathbb{Z}$ is
not one, so it does not apply. [[def-int-abs]] therefore defines $|a|$ for an
integer directly, by the case split the total order of $\mathbb{Z}$ makes
legitimate, and [[lem-int-abs-properties]] proves the six facts every later proof
uses: positivity, vanishing exactly at $0$, invariance under negation,
multiplicativity, the bound $-|a| \le a \le |a|$, and the characterisation of
$|a| \le c$ by $-c \le a \le c$. The Remarks of [[def-int-abs]] record that this
agrees with [[def-abs-value]] along the embedding of $\mathbb{Z}$ in
$\mathbb{Q}$, and nothing on this page depends on that observation. The absolute
value is load-bearing rather than convenient: [[thm-division-algorithm-in-z]] is
stated for a positive divisor, so every use of it below first replaces a divisor
$b$ by $|b|$.

**Divisibility, which the library already had.** [[thm-division-algorithm-in-z]]
introduces the relation "$b$ divides $a$" inside its own Statement, for use on
its own page, and its Remarks leave the systematic theory to a later page which
"must record that its general notion restricts to this one rather than introduce
a second silently". This is that page: [[def-divides-in-z]] states the same
relation, quotes the source, and adds the three boundary values that a page over
a ring containing $0$ has to state — $d \mid 0$ for every $d$ including $0$,
$0 \mid a$ only for $a = 0$, and $1 \mid a$ and $a \mid a$ always. It is a
dictionary item, not new vocabulary. [[cor-division-algorithm-nonzero-divisor]]
then discharges the other promise made in those Remarks, extending division with
remainder to every nonzero divisor with $0 \le r < |b|$, which is possible here
precisely because the absolute value has just arrived.

**The arithmetic of the relation.** [[lem-divisibility-basic]] proves that
divisibility is reflexive, transitive and linear, the linearity clause being the
step used by almost every later proof. [[lem-divisor-bound]] supplies the one
place where divisibility constrains size — $d \mid a$ with $a \ne 0$ forces
$|d| \le |a|$ — and it is what makes the set of divisors of a nonzero integer
bounded above. [[lem-units-of-z]] identifies the units: $(\mathbb{Z},\cdot,1)$ is
a commutative monoid whose group of units is $\{1,-1\}$, obtained from the
published [[lem-monoid-units-form-a-group]]. [[def-associates-in-z]] and
[[lem-associates-characterisation]] then show that divisibility cannot
distinguish $a$ from $-a$ and nothing more: mutual divisibility, differing by a
unit and having equal absolute value are the same condition, and the classes are
the pairs $\{a,-a\}$.

**A greatest element, which well-ordering does not give.** The definition of
$\gcd$ needs a *greatest* element of a set of *integers* bounded above, whereas
[[thm-well-ordering-principle]] gives a *least* element of a set of naturals.
[[lem-int-bounded-above-has-greatest]] bridges the two, by reflecting the set
through an upper bound into $\mathbb{N}$; it is general infrastructure, homed
here because this is the first page that needs it.

**Greatest common divisors, and the convention at $(0,0)$.**
[[def-common-divisor-and-gcd]] defines $\gcd(a,b)$ as the greatest common
divisor, discharging in the definition itself the obligation that one exists: the
common divisors are nonempty because $1$ divides everything and bounded above by
[[lem-divisor-bound]], so [[lem-int-bounded-above-has-greatest]] applies. At
$(0,0)$ there is no greatest element at all, and the value is fixed by the
convention $\gcd(0,0) = 0$, argued where it is made rather than in a footnote:
$0$ is greatest in the *divisibility* ordering, and it is the only value under
which $\gcd(ca,cb) = |c|\gcd(a,b)$ holds at $c = 0$. The companion page carries
the witness that makes the convention necessary rather than decorative.
[[lem-gcd-basic-values]] then records symmetry, invariance under signs, and the
values at $(a,0)$, $(a,1)$ and $(a,a)$, each checked at $0$.

**Bézout's identity and its corollary.** [[thm-bezout-identity]] proves that for
$a, b$ not both zero the least positive element of $\{ax + by\}$ is $\gcd(a,b)$,
by well-ordering and the division algorithm; the last step, that every common
divisor is *below* the gcd and not merely divides it, is where
[[lem-divisor-bound]] is needed. [[cor-common-divisor-divides-gcd]] converts the
definition into the form later pages should cite: $d = \gcd(a,b)$ exactly when
$d \ge 0$, $d$ is a common divisor, and every common divisor divides $d$ — a
characterisation that, unlike the maximum, holds at $(0,0)$ too.

**The algorithm.** [[lem-gcd-euclidean-step]] is the whole content of the
Euclidean algorithm: $a = qb + r$ makes $a, b$ and $b, r$ have literally the same
common divisors, with no inequality on $r$ assumed. [[thm-euclidean-algorithm]]
turns that into a terminating procedure, defining the remainder descent by
[[thm-recursion]] rather than by an informal "iterate", proving termination from
the $0 \le r < b$ clause of the division algorithm, and identifying the last
nonzero remainder as the gcd. [[cor-extended-euclidean-bezout-coefficients]] runs
the same recursion carrying two coefficient pairs alongside the remainders, so
that Bézout coefficients are computed rather than merely shown to exist.

**Coprimality.** [[def-coprime]] is $\gcd(a,b) = 1$, with its three boundary
pairs stated; [[lem-coprime-criterion]] gives the usable form, solvability of
$ax + by = 1$; and [[lem-coprime-divides-product]] is the lemma that carries the
weight, that $\gcd(a,b) = 1$ and $a \mid bc$ force $a \mid c$. It is proved here,
from Bézout and with no primality whatever, because primality is only a way of
guaranteeing the coprimality it actually uses. [[lem-gcd-scaling]] and
[[cor-gcd-quotients-coprime]] complete the arithmetic: $\gcd(ca,cb) = |c|\gcd(a,b)$
at every triple, and $a/d$, $b/d$ are coprime when $d = \gcd(a,b)$ is nonzero.

**Least common multiples.** [[def-lcm]] defines $\operatorname{lcm}(a,b)$ as the
least positive common multiple when both arguments are nonzero, and as $0$
otherwise — where $0$ is not a free choice but the only common multiple there is.
[[thm-gcd-lcm-product]] proves the two facts that matter: every common multiple
is a multiple of the lcm, and $\gcd(a,b)\operatorname{lcm}(a,b) = |ab|$. The
absolute value is not decorative, and the companion page refutes the version
without it.

**The seam with the group theory.** [[lem-subgroups-of-z-are-cyclic]] classifies
the subgroups of $(\mathbb{Z},+)$: each is $n\mathbb{Z} = \langle n \rangle$ for
exactly one natural $n$. The published example on the companion page of
Binary Operations, Monoids, Groups and Subgroups, linked under Prerequisites
above, states the same fact, but examples pages are leaves in this library's
reading order, so the classification is re-proved here
on a spine where later pages can cite it; its Remarks record the agreement.
[[thm-gcd-generates-the-subgroup]] is then the item that joins the two halves of
the page: $a\mathbb{Z} + b\mathbb{Z} = \gcd(a,b)\mathbb{Z}$ and
$a\mathbb{Z} \cap b\mathbb{Z} = \operatorname{lcm}(a,b)\mathbb{Z}$. Both
inclusions come from Bézout and divisibility alone; the classification is used
for exactly one thing, the uniqueness of the nonnegative generator, which is what
lets these be read as identifications of subgroups rather than coincidences
between sets.

**What is deliberately absent.** No primes, no Euclid's lemma for a prime
divisor, no unique factorisation: those rest on this page and are developed
after it. No greatest common divisor of a list longer than a pair, since nothing
here needs one. No bound on the number of divisions the Euclidean algorithm
performs — the companion page computes the count for one family and proves no
worst-case theorem. Twenty-six items make up this page: six definitions, twelve
lemmas, four theorems and four corollaries, ten of them marked as landmarks in
the flowchart above.
