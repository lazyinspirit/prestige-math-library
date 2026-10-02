---
id: ex-sharpness-of-nevanlinna-q-minus-two
kind: example
title: "The coefficient q minus two is sharp"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - ex-nevanlinna-omitted-values-of-exponential
  - thm-nevanlinna-second-main-theorem
  - def-nevanlinna-counting-proximity-and-characteristic
  - def-countable-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Alexandre Eremenko, Lectures on Nevanlinna Theory, §5"
      url: "https://www.math.purdue.edu/~eremenko/dvi/weizmann.pdf"
      locator: "§5, printed p. 9: elementary sharpness discussion for the Second Main Theorem"
    - title: "I. Laine, Complex Analysis III lecture notes"
      url: "https://integraali.com/courses/lecture_notes/Laine_Complex_analysis_3_notes.pdf"
      locator: "§§5-6.1, printed pp. 38-43: truncated Second Main Theorem and elementary examples"
---

## Example

Assume Countable Choice. Let $f(z)=e^z$ and fix the three distinct sphere
targets $0,\infty,a$, where $a\in\mathbb C\setminus\{0\}$. Then
$$ T(r,f)=\frac r\pi+O(1),\qquad \bar N(r,a;f)=\frac r\pi+O(\log r). $$
Consequently the truncated Second Main Theorem with $q=3$,
$$ (q-2)T(r,f)\le\sum_{j=1}^q\bar N(r,a_j;f)+S(r,f), $$
holds here with both sides of the same leading term $r/\pi$: it is
asymptotically an equality, and its coefficient $q-2$ cannot be increased.

## Facts & Assumptions

**Given:** $f(z)=e^z$, a fixed nonzero finite value $a$, and the three distinct targets $0,\infty,a$; Countable Choice is assumed as in the statement ([[def-countable-choice]]).

[F1] Counting and characteristic: $m(r,\infty;f)=\frac1{2\pi}\int_0^{2\pi}\log\frac1{\delta(f(re^{it}),\infty)}dt=\frac1{2\pi}\int_0^{2\pi}\frac12\log(1+|f(re^{it})|^2)dt$, $T(r,f)=m(r,\infty;f)+N(r,\infty;f)$, and $\bar N(r,b;f)$ is the centre-regularized integral of the number of distinct $b$-points ([[def-nevanlinna-counting-proximity-and-characteristic]]).

[F2] The exponential: $0$ and $\infty$ are omitted by $e^z$; for every nonzero finite $a$ and any fixed logarithm $b$ of $a$, the $a$-points are exactly $b+2\pi ik$, $k\in\mathbb Z$, and each of them is simple ([[ex-nevanlinna-omitted-values-of-exponential]]).

[F3] Truncated Second Main Theorem: for nonconstant meromorphic $h$ on $\mathbb C$ and distinct sphere targets $b_1,\dots,b_q$, $q\ge3$, $(q-2)T(r,h)\le\sum_j\bar N(r,b_j;h)+S(r,h)$ outside a set of finite linear measure, where $S(r,h)\le C(\log^+T(r,h)+\log r)$ off that set ([[thm-nevanlinna-second-main-theorem]]).

## Verification

**Proof technique:** compute the characteristic and the counting function of the exponential directly, apply the truncated Second Main Theorem with three targets, and compare leading terms to see that the coefficient cannot be raised.

1.1 (Characteristic) Since $e^z$ is entire, $N(r,\infty;f)=0$ and $T(r,f)=m(r,\infty;f)=\frac1{2\pi}\int_0^{2\pi}\frac12\log(1+e^{2r\cos t})dt$ by [F1] and $|e^{re^{it}}|=e^{r\cos t}$. On $\cos t>0$ one has $\frac12\log(1+e^{2r\cos t})=r\cos t+O(e^{-2r\cos t})$, and on $\cos t\le0$ the integrand is bounded by $\frac12\log2$; integrating over the half circle $\cos t>0$ whose measure is $\pi$ gives $m(r,\infty;f)=\frac r\pi+O(1)$, hence $T(r,f)=\frac r\pi+O(1)$. [F1, algebra]

1.2 (Counting the $a$-points) Fix a logarithm $b$ of $a$, so that by [F2] the $a$-points are the simple points $b+2\pi ik$, $k\in\mathbb Z$. Hence $n(t,a;f)=\#\{k\in\mathbb Z:|b+2\pi ik|\le t\}=\frac t\pi+O(1)$ for all large $t$: writing $b=u+iv$, the condition is $|v+2\pi k|\le\sqrt{t^2-u^2}$, an interval for $k$ of length $t/\pi+O(1)$, so the count differs from $t/\pi$ by $O(1)$. Since every $a$-point is simple, $\bar N(r,a;f)=N(r,a;f)=n(0,a;f)\log r+\int_0^r\frac{n(t,a;f)-n(0,a;f)}{t}dt=\frac r\pi+O(\log r)$. [F1, F2, algebra]

2.1 (Truncated Second Main Theorem with three targets) The targets $0,\infty,a$ are distinct sphere values, and $0$ and $\infty$ are omitted by [F2], so $\bar N(r,0;f)=\bar N(r,\infty;f)=0$. By [F3] with $q=3$, for all large $r$ outside a set $E$ of finite linear measure, $T(r,f)\le\bar N(r,a;f)+S(r,f)$ with $S(r,f)\le C(\log^+T(r,f)+\log r)\le C'\log r$ outside $E$, because $T(r,f)=\frac r\pi+O(1)$ is $O(r)$. [F3, step 1.1, step 1.2, algebra]

3.1 (Asymptotic equality and sharpness) By steps 1.1 and 1.2, for $r\notin E$ the right side of the $q=3$ inequality is $\frac r\pi+O(\log r)$ while the left side is $\frac r\pi+O(1)$; both sides therefore have the same leading term $r/\pi$, so the inequality is asymptotically an equality for these three targets. If the coefficient could be increased, there would be a constant $c>1$ such that $c\,T(r,f)\le\sum_j\bar N(r,a_j;f)+S(r,f)$ for the same three targets and all large $r$ outside a finite-measure set; steps 1.1 and 1.2 would then give $\frac{cr}\pi+O(1)\le\frac r\pi+O(\log r)$, that is $\frac{(c-1)r}\pi=O(\log r)$, which is impossible as $r\to\infty$. Hence the coefficient $q-2$ cannot be increased. [step 1.1, step 1.2, step 2.1, algebra] ∎
