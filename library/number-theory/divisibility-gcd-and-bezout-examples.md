---
page: divisibility-gcd-and-bezout-examples
title: "Divisibility and Greatest Common Divisors: Examples and Counterexamples"
status: draft
items: []
examples: [ex-euclidean-algorithm-worked, ex-bezout-coefficients-not-unique,
           ex-gcd-with-zero, ex-linear-diophantine-equation-solvability,
           ex-gcd-and-lcm-as-subgroups-of-z,
           ex-euclidean-algorithm-on-consecutive-fibonacci-numbers,
           cex-divides-a-product-without-dividing-a-factor,
           cex-common-divisors-of-zero-have-no-greatest-element,
           fs-gcd-times-lcm-equals-the-product]
---

**Objective.** This page is the worked companion to Divisibility, Greatest Common
Divisors and Bézout's Identity, linked under Prerequisites above. That page
proves the theory with almost no numbers in sight; this one supplies the
computations, the witnesses for the hypotheses the general statements carry, and
the pair whose failure forces the $\gcd(0,0)$ convention. Six examples, two
counterexamples and one false statement are recorded here.

**The algorithm, run.** [[ex-euclidean-algorithm-worked]] takes $(1071, 462)$
through the descent of [[thm-euclidean-algorithm]]:
$1071 = 2 \cdot 462 + 147$, $462 = 3 \cdot 147 + 21$, $147 = 7 \cdot 21 + 0$, so
three divisions, last nonzero remainder $21$, and $\gcd(1071,462) = 21$. Reading
the divisions backwards gives $21 = 7 \cdot 462 - 3 \cdot 1071$, an explicit
Bézout pair. [[ex-bezout-coefficients-not-unique]] shows that this pair is not
the only one — $1071 \cdot 19 + 462 \cdot (-44) = 21$ as well — and proves the
general description: for $a$ and $b$ both nonzero, the solutions of
$ax + by = \gcd(a,b)$ are exactly $(x_0 + t\,b/d,\ y_0 - t\,a/d)$ for
$t \in \mathbb{Z}$. Since $b/d \ne 0$, distinct $t$ give distinct pairs, so such
an equation never has a unique solution.

**Solvability.** [[ex-linear-diophantine-equation-solvability]] settles
$ax + by = c$ in general: it has an integer solution exactly when
$\gcd(a,b) \mid c$. Worked on $a = 6$, $b = 15$, where $\gcd(6,15) = 3$, the
equation $6x + 15y = 9$ has the solution $(-1,1)$ while $6x + 15y = 7$ has none,
because every value of $6x + 15y$ is a multiple of $3$ and $7$ is not.

**The boundary.** [[ex-gcd-with-zero]] collects the degenerate values —
$\gcd(a,0) = |a|$ and $\gcd(0,0) = 0$ — and shows the second is determined rather
than chosen: instantiating $\gcd(ca,cb) = |c|\gcd(a,b)$ at $c = 0$ forces
$\gcd(0,0) = 0$, and so does taking $(a,b) = (0,0)$ with $c = 1+1$.
[[cex-common-divisors-of-zero-have-no-greatest-element]] is why a convention is
needed at all: the common divisors of $(0,0)$ are all of $\mathbb{Z}$, and
$\mathbb{Z}$ has no greatest element, so there is no maximum to take. That is not
a failure of [[lem-int-bounded-above-has-greatest]], whose hypothesis is
boundedness above, and the divisibility characterisation of
[[cor-common-divisor-divides-gcd]] still returns the value $0$ there.

**The seam, instantiated.** [[ex-gcd-and-lcm-as-subgroups-of-z]] computes
$\gcd(12,18) = 6$ and $\operatorname{lcm}(12,18) = 36$, checks
$6 \cdot 36 = 216 = |12 \cdot 18|$, and reads
[[thm-gcd-generates-the-subgroup]] off them:
$12\mathbb{Z} + 18\mathbb{Z} = 6\mathbb{Z}$ and
$12\mathbb{Z} \cap 18\mathbb{Z} = 36\mathbb{Z}$.

**Where the hypotheses bite.**
[[cex-divides-a-product-without-dividing-a-factor]] refutes "if $d \mid ab$ then
$d \mid a$ or $d \mid b$" with $6 \mid 4 \cdot 9$, $6 \nmid 4$, $6 \nmid 9$, and
identifies the failing hypothesis of [[lem-coprime-divides-product]] precisely:
$\gcd(6,4) = 2$ and $\gcd(6,9) = 3$, neither of them $1$.
[[fs-gcd-times-lcm-equals-the-product]] refutes the unsigned product formula
$\gcd(a,b)\operatorname{lcm}(a,b) = ab$ at $(-2,3)$, where the left side is $6$
and $ab = -6$; every pair with $ab < 0$ does the same, since $\gcd$ and
$\operatorname{lcm}$ are both nonnegative by construction. The true statement,
with $|ab|$, is [[thm-gcd-lcm-product]].

**One long computation.**
[[ex-euclidean-algorithm-on-consecutive-fibonacci-numbers]] defines the Fibonacci
sequence by [[thm-recursion]], **indexed from $F_0 = 0$**, proves that
consecutive Fibonacci numbers are coprime, and counts the divisions the Euclidean
algorithm performs on $(F_{m+3}, F_{m+2})$: exactly $m+1$ of them, with quotient
$1$ in the first $m$ and quotient $2$ in the last. The final quotient is $2$ and
not $1$ because $F_1 = F_2 = 1$, so the descent ends at the pair $(2,1)$ with the
single division $2 = 2 \cdot 1 + 0$; a claim of "quotient $1$ at every step"
would be false for that reason. **No worst-case claim is made**: Lamé's theorem,
that these pairs minimise the inputs for a given number of divisions, is a
different statement and is not proved anywhere in this library.
