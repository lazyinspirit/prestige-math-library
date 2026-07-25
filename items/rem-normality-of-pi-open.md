---
id: rem-normality-of-pi-open
kind: remark
title: "Normality of $\\pi$ (open)"
status: draft
origin: session
proved_here: false
deps: []
justified_by: []
forward_refs: []
aliases: []
landmark: false
short: "Open: π is not known to be normal in any base"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Normal number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Normal_number"
    - title: "D. H. Bailey and R. E. Crandall, On the random character of fundamental constant expansions, Experimental Mathematics 10 (2001) 175-190"
      url: "https://projecteuclid.org/journals/experimental-mathematics/volume-10/issue-2/On-the-Random-Character-of-Fundamental-Constant-Expansions/em/999188633.full"
    - title: "Champernowne constant (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Champernowne_constant"
pipeline_run: null
---

## Statement

Fix an integer base $b \ge 2$. A real number $x$ is **normal in base $b$** if for
every $k \ge 1$ each of the $b^k$ blocks of $k$ digits occurs in the base-$b$
expansion of $x$ with asymptotic frequency $b^{-k}$; it is **absolutely normal**
if it is normal in every base $b \ge 2$.

**Question.** Is $\pi$ normal in base $10$? In any base?

**Status: open.** It is not known whether $\pi$ is normal in a single base. Much
less is known than that: it is not even known whether every one of the digits
$0, \dots, 9$ occurs infinitely often in the decimal expansion of $\pi$. The same
questions are open for $e$, for $\sqrt{2}$, and for $\ln 2$. No naturally
occurring constant has ever been proved normal.

## Remarks

**Not proved in this library, and not provable anywhere at present.** Nothing here
depends on any digit statistic of $\pi$.

**What is known, and what would settle it.** Borel (1909) proved that almost every
real number is absolutely normal, so normality is the typical behaviour and the
exceptions form a null set; stating that theorem correctly needs the measure
notions of the deferred measure and integration track. Explicit normal numbers are
easy to write down once one stops asking for a familiar constant: Champernowne's
constant $0.123456789101112\ldots$ is normal in base $10$, and Sierpinski and
Turing gave constructions of absolutely normal numbers. Computations have checked
tens of trillions of decimal digits of $\pi$ against the usual statistical tests,
which they pass; passing a statistical test is evidence and not a proof, and no
amount of computation can settle an asymptotic frequency. The most concrete
programme is Bailey and Crandall's: the Bailey-Borwein-Plouffe formula for $\pi$
reduces base-$2$ normality of $\pi$ to a uniform-distribution statement about a
specific chaotic iteration, their "Hypothesis A", which would settle the base-$2$
case if proved. Hypothesis A is open.

**Why it matters here.** This library defines $\pi$ analytically and will prove
sharp facts about it, and a reader is entitled to ask what is *not* known. The
answer is instructive: a constant can be pinned down exactly by a convergent
series, be computable to arbitrary precision, and still resist the most basic
question about its digits. Normality is also where analysis stops being able to
help and measure-theoretic and number-theoretic tools take over, which is why it
sits in this category rather than on a page.
