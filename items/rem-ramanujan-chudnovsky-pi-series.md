---
id: rem-ramanujan-chudnovsky-pi-series
kind: remark
title: "The Ramanujan and Chudnovsky series for $1/\\pi$"
status: draft
origin: session
proved_here: false
deps: []
justified_by: []
forward_refs: []
aliases: []
landmark: false
short: "Proved but modular: Ramanujan's 8-digits-per-term and Chudnovsky's 14-digits-per-term series"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Chudnovsky algorithm (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Chudnovsky_algorithm"
    - title: "Ramanujan-Sato series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ramanujan%E2%80%93Sato_series"
    - title: "Approximations of π (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Approximations_of_%CF%80"
    - title: "Modular form (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Modular_form"
pipeline_run: null
---

## Statement

**Ramanujan's series (1914).**

$$\frac{1}{\pi} = \frac{2\sqrt{2}}{9801} \sum_{k=0}^{\infty} \frac{(4k)!\,(1103 + 26390k)}{(k!)^4\, 396^{4k}},$$

each term contributing roughly $8$ further correct decimal digits.

**The Chudnovsky series (1988).**

$$\frac{1}{\pi} = 12 \sum_{k=0}^{\infty} \frac{(-1)^k (6k)!\,(13591409 + 545140134k)}{(3k)!\,(k!)^3\, 640320^{3k + 3/2}},$$

each term contributing roughly $14$ further correct decimal digits. This is the
series behind essentially every modern record computation of $\pi$.

**Status: settled, but outside this library's stack.** Both identities are proved
theorems, not conjectures. They are not reachable here: they come from the theory
of modular equations and modular forms, from singular values of the elliptic
modulus, and, in the Chudnovsky case, from the class number one discriminant
$-163$ that also produces the near-integer $e^{\pi \sqrt{163}}$. None of that
machinery is developed in this library.

## Remarks

**Not proved in this library.** These identities are recorded with citations and
are used nowhere.

**What is known, and what would prove them here.** Ramanujan stated seventeen
series of this shape in his 1914 paper on modular equations and approximations to
$\pi$, without proof; complete proofs were given much later, by J. M. and P. B.
Borwein and independently by the Chudnovsky brothers, once the modular framework
was in place. The general pattern is now understood as the Ramanujan-Sato family,
indexed by levels and by the imaginary quadratic fields whose class numbers make
the coefficients rational. What would discharge this item is a modular forms
track: the modular group and its congruence subgroups, the $j$-invariant, complex
multiplication and singular moduli. That is a long way outside a real analysis
library.

**Why it matters here.** Together with the arithmetic-geometric mean algorithm,
these series are the reason a reader should not conclude from the $\pi$ pages that
this library has told the whole computational story. The formulas provable here
converge slowly; the formulas actually used converge fast and rest on machinery
from a different subject. Saying so explicitly is cheaper and more honest than
silence.
