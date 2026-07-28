---
page: cardinal-arithmetic-and-cofinality-examples
title: "Cardinal Arithmetic, Cofinality and the Alephs — Examples"
status: draft
items: []
examples: [ex-cardinal-absorption-computed,
           ex-the-cardinality-of-the-continuum,
           ex-aleph-one-is-at-most-the-continuum,
           ex-the-cofinality-of-aleph-omega,
           ex-a-singular-cardinal-of-uncountable-cofinality,
           ex-an-aleph-fixed-point,
           ex-the-beth-hierarchy-computed,
           ex-counting-functions-and-subsets-of-the-continuum]
---

**Objective.** Worked computations for
[[cardinal-arithmetic-and-cofinality|Cardinal Arithmetic, Cofinality and the Alephs]].
The main page proves the laws; this one runs them on concrete cardinals, where
absorption becomes an arithmetic, the continuum acquires a value in the cardinal
notation, and singularity stops being an abstract possibility.

**Absorption, twice over.** [[ex-cardinal-absorption-computed]] evaluates
$\aleph_0 \oplus \aleph_0$, $\aleph_0 \otimes \aleph_0$,
$\aleph_1 \oplus \aleph_0$ and $5 \oplus \aleph_0$ from
[[cor-cardinal-absorption]], and then recomputes the countable ones from the
published bijection $\omega \times \omega \approx \omega$ and two inclusions. The
two routes are independent: one is the general theorem, the other is the explicit
map that was available before cardinal arithmetic existed.

**The continuum acquires a cardinal.** [[ex-the-cardinality-of-the-continuum]]
proves $\mathbb{R} \approx \mathcal{P}(\mathbb{N})$ in ZF, from the Cantor set in
one direction and the cuts $\{q \in \mathbb{Q} : q < x\}$ in the other, with
[[thm-schroder-bernstein]] joining them; the cardinal equation
$\lvert \mathbb{R}\rvert = 2^{\aleph_0}$ is then the same statement written with
the Axiom of Choice available. Neither injection uses a binary expansion, which
is what keeps the argument inside the machinery this page rests on.
[[ex-aleph-one-is-at-most-the-continuum]] draws the immediate consequence
$\aleph_1 \le 2^{\aleph_0}$, and says exactly why it is not evidence for the
continuum hypothesis.

**Cofinality, computed.** [[ex-the-cofinality-of-aleph-omega]] evaluates
$\operatorname{cf}(\aleph_\omega) = \aleph_0$ from the cofinal family
$n \mapsto \aleph_n$: the computation is about the *index* $\omega$ and not about
the size of $\aleph_\omega$, and nothing is chosen.
[[ex-a-singular-cardinal-of-uncountable-cofinality]] then separates
conditions a reader may take for one, computing
$\operatorname{cf}(\aleph_{\omega_1}) = \aleph_1$; the lower bound is where
countable choice is spent, through the published boundedness theorem for
$\omega_1$.

**A fixed point of the aleph operation.** $\beta \le \aleph_\beta$ holds at every
ordinal and the operation is strictly increasing, yet
[[ex-an-aleph-fixed-point]] exhibits an $\alpha$ with $\aleph_\alpha = \alpha$,
built as the supremum of the tower $\aleph_0, \aleph_{\aleph_0}, \dots$ and
singular of cofinality $\aleph_0$. The power operation admits no such fixed
point, since $\kappa < 2^{\kappa}$ everywhere.

**The beths, and the arithmetic of the continuum.**
[[ex-the-beth-hierarchy-computed]] unwinds $\beth_0$, $\beth_1$ and $\beth_2$ and
computes $\operatorname{cf}(\beth_\omega)$, and
[[ex-counting-functions-and-subsets-of-the-continuum]] evaluates
$\aleph_0^{\aleph_0}$ and the number of all real functions. Both are squeezes
closed by [[thm-hessenberg]] through the second exponent law, and the collapse
$\aleph_0^{\aleph_0} = 2^{\aleph_0}$ is the smallest instance of the failure
recorded in [[fs-cardinal-exponentiation-is-strictly-monotone-in-the-base]].
