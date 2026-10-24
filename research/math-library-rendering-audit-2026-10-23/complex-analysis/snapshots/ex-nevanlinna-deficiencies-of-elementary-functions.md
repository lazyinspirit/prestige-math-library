---
id: ex-nevanlinna-deficiencies-of-elementary-functions
kind: example
title: "Deficiencies of the exponential and sine"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - thm-nevanlinna-defect-relation
  - def-nevanlinna-deficiency-and-ramification-index
  - def-nevanlinna-truncated-and-ramification-counts
  - def-nevanlinna-counting-proximity-and-characteristic
  - def-countable-choice
  - def-complex-trigonometric-and-hyperbolic-functions
  - cor-complex-trigonometric-and-hyperbolic-derivatives
  - thm-complex-sine-and-cosine-zero-sets
  - thm-complex-exponential-is-entire-with-derivative-itself
  - thm-kernel-and-fibres-of-complex-exponential
  - thm-complex-exponential-surjects-onto-the-punctured-plane
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-fundamental-theorem-of-algebra-liouville-proof
  - thm-sine-cosine-signs-monotonicity-and-ranges
  - thm-quarter-turn-values-and-shift-formulas
  - thm-sine-and-cosine-derivatives
  - thm-ftc-second-part
  - thm-continuous-implies-integrable
  - cor-differentiable-implies-continuous
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Alexandre Eremenko, Lectures on Nevanlinna Theory, §§4–6"
      url: "https://www.math.purdue.edu/~eremenko/dvi/weizmann.pdf"
      locator: "§§4–6, printed pp. 6–14: elementary value-distribution examples and deficiencies"
    - title: "I. Laine, Complex Analysis III lecture notes"
      url: "https://integraali.com/courses/lecture_notes/Laine_Complex_analysis_3_notes.pdf"
      locator: "§§5-6.1, printed pp. 35-43: deficiency and ramification examples, defect sums"
    - title: "Goldberg–Ostrovskii, Value Distribution of Meromorphic Functions"
      url: "https://www.math.purdue.edu/~eremenko/dvi/GOmainfile.pdf"
      locator: "Ch. 3 §§1-2, printed pp. 87-98; Ch. 4 §3, printed pp. 121-122: deficiencies, ramifications and defect relations"
verification:
  audited: 2026-10-02
---

## Example

Assume Countable Choice.

1. For the entire function $f(z)=e^z$ one has
   $$T(r,f)=\frac r\pi+O(1),\qquad \delta(0,f)=\delta(\infty,f)=1, \qquad \delta(a,f)=0\ \text{for every } a\in\mathbb C\setminus\{0\}.$$
   In fact all ramification indices of $e^z$ vanish.
2. For $f(z)=\sin z$ one has $T(r,f)=2r/\pi+o(r)$, in fact
   $T(r,f)=2r/\pi+O(1)$, and $\delta(\infty,f)=1$ while every finite deficiency
   vanishes; moreover $\varepsilon(1,f)=\varepsilon(-1,f)=\tfrac12$ and all
   other ramification indices vanish. Consequently the combined defect sum of
   sine is $\sum_a(\delta(a,f)+\varepsilon(a,f))=2$, meeting the general bound
   of the defect relation.

## Facts & Assumptions

**Given:** The exponential $f(z)=e^z$ and the sine $f(z)=\sin z$; Countable Choice is assumed as in the statement, and the computations below are choice-free.

[F1] Counting and characteristic: $N(r,a;h)=n(0,a;h)\log r+\int_0^r\frac{n(t,a;h)-n(0,a;h)}{t}dt$ is the centre-regularized integrated count, $T(r,h)=m(r,\infty;h)+N(r,\infty;h)$ with the chordal proximity, and an entire $h$ has $N(r,\infty;h)=0$ ([[def-nevanlinna-counting-proximity-and-characteristic]]).

[F2] Truncated counts: $N(r,a;h)=\bar N(r,a;h)+N_1(r,a;h)$, where $\bar n$ counts each $a$-point once and $N_1$ weights each point by its local degree minus one ([[def-nevanlinna-truncated-and-ramification-counts]]).

[F3] Deficiency and ramification index: $\delta(a,h)=\liminf_r\frac{m(r,a;h)}{T(r,h)}=1-\limsup_r\frac{N(r,a;h)}{T(r,h)}$ and $\varepsilon(a,h)=\liminf_r\frac{N_1(r,a;h)}{T(r,h)}$, both in $[0,1]$; if $h$ omits $a$ then $\delta(a,h)=1$; the total deficiency sum over the sphere is the supremum of its finite subsums ([[def-nevanlinna-deficiency-and-ramification-index]]).

[F4] Defect relation: for every nonconstant meromorphic $h$ on $\mathbb C$, $\sum_a(\delta(a,h)+\varepsilon(a,h))\le2$ ([[thm-nevanlinna-defect-relation]]).

[F5] The exponential: $e^z$ is entire with derivative $e^z$ and $|e^z|=e^{\operatorname{Re}z}>0$, its kernel is $2\pi i\mathbb Z$, and it maps $\mathbb C$ onto $\mathbb C\setminus\{0\}$ ([[thm-complex-exponential-is-entire-with-derivative-itself]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[thm-kernel-and-fibres-of-complex-exponential]], [[thm-complex-exponential-surjects-onto-the-punctured-plane]]).

[F6] Quadratic proximity comparison: with $m_0(r,h)=\frac1{2\pi}\int_0^{2\pi}\log^+|h(re^{it})|dt$ the standard proximity and $\delta(w,\infty)=1/\sqrt{1+|w|^2}$ the chordal distance to infinity, one has $\log^+|w|\le\frac12\log(1+|w|^2)\le\log^+|w|+\frac12\log2$ for every $w$, hence $m_0(r,h)\le m(r,\infty;h)\le m_0(r,h)+\frac12\log2$ for every meromorphic $h$ ([[def-nevanlinna-counting-proximity-and-characteristic]]).

[F7] Complex sine and cosine: $\sin z=\frac{\exp(iz)-\exp(-iz)}{2i}$ and $\cos z=\frac{\exp(iz)+\exp(-iz)}2$; both are entire, $\sin'=\cos$ and $\cos'=-\sin$ ([[def-complex-trigonometric-and-hyperbolic-functions]], [[cor-complex-trigonometric-and-hyperbolic-derivatives]]).

[F8] Zeros: $\cos z=0$ exactly for $z=(k+\frac12)\pi$, $k\in\mathbb Z$ ([[thm-complex-sine-and-cosine-zero-sets]]).

[F9] Real trigonometric facts: sine is positive on $(0,\pi)$ and negative on $(\pi,2\pi)$, with primitive $-\cos$, so $\int_0^{2\pi}|\sin t|\,dt=\int_0^\pi\sin t\,dt-\int_\pi^{2\pi}\sin t\,dt=2+2=4$ ([[thm-sine-cosine-signs-monotonicity-and-ranges]], [[thm-quarter-turn-values-and-shift-formulas]], [[thm-sine-and-cosine-derivatives]], [[thm-ftc-second-part]], [[thm-continuous-implies-integrable]], [[cor-differentiable-implies-continuous]]).

[F10] Fundamental theorem of algebra: every nonconstant complex polynomial has a complex root ([[thm-fundamental-theorem-of-algebra-liouville-proof]]).

## Verification

**Proof technique:** compute the characteristic and counting functions of the two explicit entire functions, read off the deficiencies and ramification indices from the definitions, and add the nonzero contributions to obtain the defect sums.

1.1 (Exponential: characteristic) By [F1] and [F6], for the entire function $e^z$ one has $m_0(r,e^z)\le T(r,e^z)\le m_0(r,e^z)+\frac12\log2$. For $z=re^{it}$ the modulus formula [F5] gives $\log^+|e^z|=\max(0,r\cos t)=r\cos^+t$, and $\int_0^{2\pi}\cos^+t\,dt=\int_{-\pi/2}^{\pi/2}\cos t\,dt=2$, so $m_0(r,e^z)=\frac r{2\pi}\cdot2=\frac r\pi$. Hence $T(r,e^z)=\frac r\pi+O(1)$. [F1, F5, F6, algebra]

1.2 (Exponential: $a$-point counts) By [F5] the kernel of the exponential is $2\pi i\mathbb Z$ and every nonzero value is attained, so for fixed $a\ne0$ and a logarithm $b$ of $a$ the $a$-points of $e^z$ are exactly the points $b+2\pi ik$, $k\in\mathbb Z$, and they are simple because $(e^z)'=e^z\ne0$ there. The number of $k\in\mathbb Z$ with $|b+2\pi ik|\le t$ is $\frac t\pi+O(1)$ for large $t$: writing $b=u+iv$, the condition is $|v+2\pi k|\le\sqrt{t^2-u^2}$, a nonempty integer interval of length $\frac t\pi+O(1)$. Therefore $n(t,a;e^z)=\frac t\pi+O(1)$ and $N(r,a;e^z)=\bar N(r,a;e^z)=\frac r\pi+O(\log r)$ with $N_1(r,a;e^z)=0$. [F2, F5, algebra]

1.3 (Sine: characteristic) By [F7] sine is entire, so [F6] gives $m_0(r,\sin)\le T(r,\sin)\le m_0(r,\sin)+\frac12\log2$. For $z=re^{it}$ the definition [F7] and the modulus formula [F5] give $|\sin z|\le\frac12(e^{|\operatorname{Im}z|}+e^{-|\operatorname{Im}z|})\le e^{|\operatorname{Im}z|}=e^{r|\sin t|}$, so $\log^+|\sin z|\le r|\sin t|$ and $m_0(r,\sin)\le\frac r{2\pi}\int_0^{2\pi}|\sin t|\,dt=\frac{2r}\pi$ by [F7]. Conversely, $|\sin z|\ge\frac12(e^{|\operatorname{Im}z|}-e^{-|\operatorname{Im}z|})\ge\frac14e^{r|\sin t|}$ whenever $r|\sin t|\ge1$, so $\log^+|\sin z|\ge r|\sin t|-\log4$ on that set, and since the integrand is nonnegative everywhere, $m_0(r,\sin)\ge\frac1{2\pi}\int_0^{2\pi}(r|\sin t|-\log4)\,dt=\frac{2r}\pi-\log4$. Hence $T(r,\sin)=\frac{2r}\pi+O(1)$. [F5, F6, F7, F9, algebra]

1.4 (Sine: reduction to a quadratic) Fix $a\in\mathbb C$; putting $w=e^{iz}$, one has $\sin z=a$ if and only if $w^2-2iaw-1=0$, because $e^{iz}\ne0$ and multiplying $\frac{w-w^{-1}}{2i}=a$ by $2iw$ is reversible. If $q(w)=w^2-2iaw-1$ has a double root $w$, then $w=ia$ and $w^2=-1$, forcing $a^2=1$; so for $a\ne\pm1$ the polynomial $q$ has two distinct roots $w_1,w_2$, and $q(0)=-1$ shows both are nonzero. By [F7] a root $w_1\ne0$ exists, and $w_2:=-1/w_1$ is a second root, since $w_1^2-2iaw_1-1=0$ gives $q(-1/w_1)=w_1^{-2}(1+2iaw_1-w_1^2)=0$. [F5, F7, F10, algebra]

1.5 (Sine: simplicity away from $\pm1$) At a solution of $\sin z=a$ with $w=e^{iz}$ one has $\cos z=\frac{w+w^{-1}}2=\frac{w^2+1}{2w}$ by [F7], which vanishes exactly when $w=\pm i$ by [F7]; then $\sin z=\frac{w-w^{-1}}{2i}$ equals $1$ for $w=i$ and $-1$ for $w=-i$. Hence for $a\ne\pm1$ no $a$-point has $\cos z=0$, and since $\sin'=\cos$ by [F7] every $a$-point is simple. [F8, F7, algebra]

2.1 (Exponential: deficiencies) Since $e^z$ is entire, $N(r,\infty;e^z)=0$ and [F3] gives $\delta(\infty,e^z)=1$; since $e^z\ne0$ for all $z$ the value $0$ is omitted and [F3] gives $\delta(0,e^z)=1$; for $0\ne a\in\mathbb C$ step 1.2 gives $\frac{N(r,a;e^z)}{T(r,e^z)}\to1$, hence $\delta(a,e^z)=1-\limsup_r\frac{N(r,a;e^z)}{T(r,e^z)}=0$. [F1, F3, F5, step 1.1, step 1.2]

2.2 (Exponential: ramification indices) For finite $a\ne0$ all $a$-points of $e^z$ are simple by step 1.2, so $N_1(r,a;e^z)=0$ and $\varepsilon(a,e^z)=0$; for $a=0$ the counting function is identically zero, so $\varepsilon(0,e^z)=0$; and $N_1(r,\infty;e^z)=0$ because $e^z$ has no poles, so $\varepsilon(\infty,e^z)=0$. [F2, F3, step 1.2]

2.3 (Sine: the $a$-point progressions) With $w_j\ne0$ as in step 1.4, fix $b_j$ with $e^{b_j}=w_j$ by [F5]; then $e^{iz}=w_j$ if and only if $iz-b_j\in2\pi i\mathbb Z$, that is, $z\in-ib_j+2\pi\mathbb Z$ by [F5]. Hence for $a\ne\pm1$ the solutions of $\sin z=a$ are exactly the two disjoint arithmetic progressions $-ib_1+2\pi\mathbb Z$ and $-ib_2+2\pi\mathbb Z$. [F5, step 1.4, algebra]

2.4 (Sine: the values $\pm1$) For $a=1$ the quadratic of step 1.4 is $q(w)=(w-i)^2$, so $\sin z=1$ if and only if $e^{iz}=i$, that is, $z\in\frac\pi2+2\pi\mathbb Z$; at these points $\cos z=0$ by [F7] and $\sin''=-\sin=-1\ne0$ by [F7], so each is a double point: $n(t,1;\sin)=\frac{2t}\pi+O(1)$ with multiplicity and $\bar n(t,1;\sin)=\frac t\pi+O(1)$, whence $N(r,1;\sin)=\frac{2r}\pi+O(\log r)$, $\bar N(r,1;\sin)=\frac r\pi+O(\log r)$ and $N_1(r,1;\sin)=\frac r\pi+O(\log r)$. The same computation with $-i$ and the progression $-\frac\pi2+2\pi\mathbb Z$ gives the analogous statements for $a=-1$. [F1, F2, F7, F8, step 1.4, algebra]

3.1 (Sine: counting for $a\ne\pm1$) For a fixed $c\in\mathbb C$, the number of $k\in\mathbb Z$ with $|c+2\pi ik|\le t$ is $\frac t\pi+O(1)$ as $t\to\infty$: the condition is $|2\pi k+\operatorname{Im}c|\le\sqrt{t^2-(\operatorname{Re}c)^2}$, an integer interval of length $\frac t\pi+O(1)$. The two disjoint progressions of step 2.3 therefore give $n(t,a;\sin)=\frac{2t}\pi+O(1)$, and by step 1.5 all $a$-points are simple, so $N(r,a;\sin)=\bar N(r,a;\sin)=\frac{2r}\pi+O(\log r)$ and $N_1(r,a;\sin)=0$. [F1, F2, step 2.3, step 1.5, algebra]

4.1 (Sine: deficiencies and ramification indices) Since sine is entire, $N(r,\infty;\sin)=0$, so $\delta(\infty,\sin)=1$ by [F3]. For every finite $a$, steps 3.1 and 2.4 give $\frac{N(r,a;\sin)}{T(r,\sin)}\to1$ because $T(r,\sin)=\frac{2r}\pi+O(1)$ by step 1.3, so $\delta(a,\sin)=1-\limsup_r\frac{N}{T}=0$. For $a\notin\{1,-1\}$ step 3.1 gives $N_1(r,a;\sin)=0$, so $\varepsilon(a,\sin)=0$, including $a=0$; and $\varepsilon(\infty,\sin)=0$ because the $N_1$-count at $\infty$ vanishes for an entire function; while for $a=\pm1$ step 2.4 gives $\frac{N_1(r,a;\sin)}{T(r,\sin)}\to\frac{r/\pi}{2r/\pi}=\frac12$, so $\varepsilon(1,\sin)=\varepsilon(-1,\sin)=\frac12$. [F2, F3, step 1.3, step 3.1, step 2.4]

5.1 (Sine: combined defect sum) By step 4.1 the only nonzero terms of the total deficiency sum of [F3] are $\delta(\infty,\sin)=1$, $\varepsilon(1,\sin)=\frac12$ and $\varepsilon(-1,\sin)=\frac12$; the supremum of finite subsums is therefore $1+\frac12+\frac12=2$, so the combined defect sum of sine equals $2$, in agreement with the general upper bound of [F4]. [F3, F4, step 4.1, algebra]

6.1 (Exponential: combined defect sum) For $e^z$ steps 2.1 and 2.2 give the only nonzero terms $\delta(0,e^z)=\delta(\infty,e^z)=1$, so its combined defect sum is $2$ as well, again with equality in the bound of [F4]. [F3, F4, step 2.1, step 2.2, algebra] ∎
