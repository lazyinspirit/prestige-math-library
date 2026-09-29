---
id: lem-dirichlet-green-function-is-unique-and-positive
kind: lemma
title: A bounded-domain Dirichlet Green function is unique and positive
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps:
  - cor-archimedean-reciprocal
  - cor-weak-minimum-principle-for-the-laplacian
  - def-countable-choice
  - def-dirichlet-green-function-for-minus-laplacian
  - def-laplace-fundamental-solution-with-positive-minus-laplacian-sign
  - def-laplacian-of-a-c2-function
  - def-ordered-field
  - lem-of-inverse-positive
  - lem-puncturing-connected-open-subset-of-rn-preserves-path-connectedness
  - thm-induction-principle
  - thm-algebra-of-total-derivatives
  - thm-natural-logarithm-laws
  - thm-reals-ordered-field
  - thm-real-power-laws
  - thm-total-derivative-computes-directional-and-partial-derivatives
  - thm-strong-maximum-principle-for-harmonic-functions
  - thm-weak-maximum-principle-for-the-laplacian
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript)"
      url: https://web.archive.org/web/20250601000000id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf
      locator: "§5.4 Theorem 5.21 and Lemma 5.23, uniqueness and positivity, printed pp.124–127"
    - title: "Thomas Schmidt, Partial Differential Equations I (2026)"
      url: https://wwwp2.math.uni-hamburg.de/en/forschung/bereiche/am/geom-part-differentialgleichungen/dokumente/pde.pdf
      locator: "§2.8 Green-function remarks (2)–(3), uniqueness and sign, printed pp.44–45"
---

## Statement

Assume Countable Choice and $n\ge2$. Let $\Omega\subseteq\mathbb R^n$ be
bounded, nonempty, open and connected, and suppose a Dirichlet Green function
as in [[def-dirichlet-green-function-for-minus-laplacian]] exists. Then it is
unique and $G_\Omega(x,y)>0$ for every distinct $x,y\in\Omega$. No boundary
differentiability is needed, and existence is not asserted.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement, the kernel $\Phi$
fixed by [[def-laplace-fundamental-solution-with-positive-minus-laplacian-sign]],
and correctors supplied by the Green-function definition.

[A1] Countable Choice, written $\mathrm{AC}_\omega$, is an assumption of the
Green and kernel conventions used here ([[def-countable-choice]]).

[F1] For each pole, the Green definition supplies a corrector
$H_y\in C^2(\Omega)\cap C(\overline\Omega)$ with boundary values
$H_y(z)=\Phi(z-y)$ and $G_\Omega(x,y)=\Phi(x-y)-H_y(x)$ away from the pole
([[def-dirichlet-green-function-for-minus-laplacian]]).

[F2] The kernel is $\Phi(x)=|x|^{2-n}/((n-2)\omega_{n-1})$ for $n\ge3$ and
$\Phi(x)=-(2\pi)^{-1}\log|x|$ for $n=2$, with $\omega_{n-1}>0$
([[def-laplace-fundamental-solution-with-positive-minus-laplacian-sign]]).

[F3] A real $C^2$ function on a bounded open set that is continuous on its
closure and has $\Delta u\ge0$ has its closure maximum on the boundary
([[thm-weak-maximum-principle-for-the-laplacian]]).

[F4] If instead $\Delta u\le0$, its closure minimum is on the boundary
([[cor-weak-minimum-principle-for-the-laplacian]]).

[F5] For every $\eta>0$ there is an integer $N\ge1$ with $1/N<\eta$
([[cor-archimedean-reciprocal]]).

[F6] Positive reciprocals reverse strict order: $0<a<b$ implies
$0<b^{-1}<a^{-1}$ ([[lem-of-inverse-positive]]).

[F7] The natural logarithm is strictly increasing and onto $\mathbb R$, and
$\log(1/s)=-\log s$ for $s>0$ ([[thm-natural-logarithm-laws]]).

[F8] Positive real powers obey the quotient and exponent laws
([[thm-real-power-laws]]).

[F9] If $n\ge2$, deleting one point from a nonempty connected open subset of
$\mathbb R^n$ leaves a nonempty, open, connected, path-connected set
([[lem-puncturing-connected-open-subset-of-rn-preserves-path-connectedness]]).

[F10] A harmonic function on a connected domain that attains a global maximum
or minimum in the domain is constant
([[thm-strong-maximum-principle-for-harmonic-functions]]).

[F11] For fixed $y$, $G_\Omega(\cdot,y)$ is harmonic away from $y$, extends
continuously to $\overline\Omega\setminus\{y\}$, and has zero boundary trace
([[def-dirichlet-green-function-for-minus-laplacian]]).

[F12] Mathematical induction applies to properties of natural numbers
([[thm-induction-principle]]).

[F13] The order on $\mathbb R$ makes it a totally ordered field
([[thm-reals-ordered-field]]).

[F14] Positive elements of an ordered field are closed under multiplication;
in particular, a product of nonnegative reals is nonnegative
([[def-ordered-field]], [[thm-reals-ordered-field]]).

[F15] The Laplacian of a $C^2$ function is the sum of its pure second partial
derivatives ([[def-laplacian-of-a-c2-function]]).

[F17] A $C^2$ function is harmonic exactly when its Laplacian is zero
([[def-laplacian-of-a-c2-function]]).

[F16] Total derivatives obey sum and scalar rules, and their coordinate
partials are obtained by applying them to standard basis vectors; applying
these facts twice gives linearity of each second partial of $C^2$ functions
([[thm-algebra-of-total-derivatives]],
[[thm-total-derivative-computes-directional-and-partial-derivatives]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $G$ and $\widetilde G$ are two Green functions with correctors $H_y$ and $\widetilde H_y$. For fixed $y$, $w=H_y-\widetilde H_y$ is $C^2$, and [F15]–[F16] give $\Delta w=\Delta H_y-\Delta\widetilde H_y=0$, so it is harmonic by [F17]; it is continuous on $\overline\Omega$ and zero on $\partial\Omega$. The weak maximum principle [F3] gives $w\le0$, and the weak minimum principle [F4] gives $w\ge0$. Hence $w=0$ and $G(x,y)=\widetilde G(x,y)$ for all $x\ne y$. This holds for every pole, proving uniqueness. [F1, F3, F4, F15, F16, F17, given, algebra]

1.2 Fix $y\in\Omega$. Continuity of $H_y$ at $y$ gives $r_0>0$ and $M=|H_y(y)|+1$ such that $|H_y(x)|\le M$ whenever $|x-y|<r_0$; shrink $r_0$ if needed so $\overline B_2(y,r_0)\subset\Omega$. [F1, given, choose]

1.3 Suppose $n\ge3$, put $m=n-2\ge1$ and $C=1/((n-2)\omega_{n-1})>0$. For $0<r<1$, induction on $k\in\mathbb N$ for the property $0<r^{k+1}\le r$ starts with equality at $k=0$; if it holds at $k$, then $r^{k+2}=r^{k+1}r>0$ and $r^{k+1}-r^{k+2}=r^{k+1}(1-r)\ge0$ by [F13, F14], so it holds at $k+1$. Thus [F12] gives $r^m\le r$. By [F8], $r^{2-n}=r^{-m}=1/r^m\ge1/r$. Given $L>0$, [F5] with $\eta=C/L$ gives $N\ge1$ with $1/N<C/L$; [F6] then gives $N>L/C$. Thus $0<r<\min\{1,1/N\}$ implies $\Phi(r)=Cr^{-m}\ge C/r>CN>L$. This proves $\Phi(r)\to+\infty$ as $r\downarrow0$ for every $n\ge3$. [F2, F5, F6, F8, F12, F13, F14, algebra, choose]

1.4 Suppose $n=2$ and put $C=1/(2\pi)>0$. For any $L>0$, surjectivity in [F7] gives $s_0>0$ with $\log s_0>L/C$. Apply [F5] to $1/s_0$ and then [F6] to obtain an integer $N>s_0$. Whenever $0<r<1/N$, [F6] gives $1/r>N>s_0$, so [F7] yields $\Phi(r)=C\log(1/r)>C\log s_0>L$. Hence $\Phi(r)\to+\infty$ as $r\downarrow0$ in dimension two as well. [F2, F5, F6, F7, algebra, choose]

2.1 By steps 1.3 and 1.4, choose $0<r_y<r_0$ so that $\Phi(x-y)>M$ whenever $0<|x-y|\le r_y$. Then $G_\Omega(x,y)=\Phi(x-y)-H_y(x)>0$ on that punctured closed ball. This is the local strict positivity near the pole. [F1, step 1.2, step 1.3, step 1.4, algebra, choose]

3.1 Let $x\in\Omega$ with $|x-y|>r_y$ and choose $0<\varepsilon<\min\{r_y,|x-y|\}$. The set $D=\Omega\setminus\overline B_2(y,\varepsilon)$ is bounded, open, and contains $x$. A point outside $\partial\Omega\cup S_2(y,\varepsilon)$ has a neighborhood either contained in $D$ or disjoint from $D$, so $\partial D\subseteq\partial\Omega\cup S_2(y,\varepsilon)$. By [F11], $G_\Omega(\cdot,y)$ is harmonic on $D$ and continuous on $\overline D$. Its boundary values are zero on $\partial\Omega$ and positive on $S_2(y,\varepsilon)$ by step 2.1. The weak minimum principle [F4] therefore gives $G_\Omega(x,y)\ge0$. Points with $0<|x-y|\le r_y$ already have strict positivity by step 2.1, so $G_\Omega(\cdot,y)\ge0$ throughout $\Omega\setminus\{y\}$. [F4, F11, step 2.1, given, cases]

4.1 By [F9], $\Omega\setminus\{y\}$ is a connected open set. The Green function is harmonic there by [F11], so its negative is harmonic by [F15]–[F17]. Step 3.1 gives $G_\Omega\ge0$ there. Assume it vanishes at some $x\ne y$ [assume-contra]. Then $-G_\Omega(\cdot,y)$ attains its global maximum $0$ at that interior point. By [F10] it is constant on the punctured domain, contradicting the strict positivity near $y$ from step 2.1. Therefore $G_\Omega(x,y)>0$ whenever $x\ne y$ [contradiction, discharge-contradiction]. [F9, F10, F11, F15, F16, F17, step 2.1, step 3.1, assume-contra, contradiction, discharge-contradiction, algebra]

5.1 The argument treats $n=2$ and all $n\ge3$ separately, excludes $n=1$ and dimension zero by the hypothesis, and makes no boundary smoothness or existence claim. Countable Choice is retained exactly because the preceding Green and kernel conventions assume it; the maximum principles and puncture argument add no choice principle, and the pointwise thresholds use only the Archimedean property. There is no iff assertion. [A1, F1, F2, F5, step 1.3, step 1.4, cases] ∎

## Source notes

Teschl §5.4 Theorem 5.21, printed p.124, establishes uniqueness for the
classical Dirichlet problem. Lemma 5.23, printed pp.126–127, assumes a bounded
connected domain, proves Green positivity by using the blow-up at the pole and
a strong minimum principle, and notes that connectedness is required for
positivity. The proof here derives the power/log blow-up and punctured-domain
connectedness explicitly; it uses weak minimum on the bounded punctured
domains and the strong maximum principle on $\Omega\setminus\{y\}$.

Schmidt §2.8 remarks (2)–(3), printed pp.44–45, derives uniqueness from
uniqueness of the harmonic corrector and the weak maximum principle, then
derives nonpositivity under $\Delta F=\delta_0$. Here $\Phi=-F$, so that sign
comparison supports nonnegativity only; strict positivity is proved above.
