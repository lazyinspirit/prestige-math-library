---
id: thm-bounded-borel-pvm-integral
kind: theorem
title: Bounded borel pvm integral
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [lem-simple-pvm-integral-is-representation-independent, lem-scalar-and-complex-measures-from-a-pvm, def-projection-valued-measure, def-hilbert-space, def-countable-choice, thm-bounded-operator-space-is-banach, thm-integrals-against-signed-or-complex-measures-are-bounded-by-total-variation, thm-dominated-convergence, def-essential-supremum-with-respect-to-a-measure, prop-essential-supremum-is-attained-as-the-least-essential-bound, def-measurable-function-between-measurable-spaces, def-integration-against-a-signed-or-complex-measure, def-complex-simple-function]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, Theorem 5.73, printed pp.279–283"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem, Lemma 5.3 and Proposition 5.3, pp.16–18"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
---

## Statement

Assume Countable Choice. Let $(X,\Sigma)$ be a measurable space, let $H$ be a
nonzero complex Hilbert space, let $E$ be a projection valued measure on
$(X,\Sigma)$, and let $f:X\to\mathbb C$ be bounded and $\Sigma$-measurable
([[def-measurable-function-between-measurable-spaces]]). Then:

1. there is a unique operator $\Phi_E(f)\in\mathcal B(H)$ with
   $$\langle\Phi_E(f)x,y\rangle=\int f\,dE_{x,y}\qquad(x,y\in H),$$
   and for every sequence $(s_n)$ of complex simple functions with
   $\|f-s_n\|_\infty\to0$ one has $\|\Phi_E(f)-\int s_n\,dE\|\to0$: the integral
   is obtained from uniform simple approximations and is independent of the
   approximating sequence;
2. $\|\Phi_E(f)\|\le\|f\|_\infty$, and for every $x\in H$
$$\langle\Phi_E(f)x,x\rangle=\int f\,dE_x,\qquad \|\Phi_E(f)x\|^2=\int|f|^2\,dE_x ;$$
3. the exact norm is the **$E$-essential supremum**
$$\|f\|_{E,\infty}:=\sup\bigl\{\|f\|_{\infty,E_x}:\ x\in H,\ \|x\|=1\bigr\}, \qquad \|\Phi_E(f)\|=\|f\|_{E,\infty},$$
   where $\|f\|_{\infty,E_x}$ is the essential supremum of $|f|$ with respect to
   the finite measure $E_x$ ([[def-essential-supremum-with-respect-to-a-measure]]).

## Facts & Assumptions

[A1] For a complex simple function $s$ the operator $\int s\,dE$ satisfies $\langle(\int s\,dE)x,y\rangle=\int s\,dE_{x,y}$, $\|(\int s\,dE)x\|^2=\int|s|^2\,dE_x$ and $\|\int s\,dE\|\le\max|s|\le\|s\|_\infty$; the construction is linear on simple functions presented over a common refinement ([[lem-simple-pvm-integral-is-representation-independent]]).

[A2] $E_{x,y}$ is a finite complex measure on $(X,\Sigma)$ with $|E_{x,y}|(X)\le\|x\|\,\|y\|$, the integral $\int g\,dE_{x,y}$ of a bounded measurable $g$ satisfies $|\int g\,dE_{x,y}|\le\|g\|_\infty|E_{x,y}|(X)$ ([[lem-scalar-and-complex-measures-from-a-pvm]], [[thm-integrals-against-signed-or-complex-measures-are-bounded-by-total-variation]], [[def-integration-against-a-signed-or-complex-measure]]).

[A3] $E_x(B)=\langle E(B)x,x\rangle=\|E(B)x\|^2$ is a positive measure with $E_x(X)=\|x\|^2$. Moreover, if $E(A)y=y$, then $E(X\setminus A)y=E(X\setminus A)E(A)y=E(\varnothing)y=0$, so $E_y(X\setminus A)=0$ ([[lem-scalar-and-complex-measures-from-a-pvm]], [[def-projection-valued-measure]]).

[A4] $\mathcal B(H)$ is complete for the operator norm ([[thm-bounded-operator-space-is-banach]], [[def-hilbert-space]]).

[A5] A bounded measurable complex function is integrable against every finite measure and dominated convergence holds: if $g_n\to g$ pointwise and $|g_n|\le C$ with $C$ integrable, then $\int g_n\,d\mu\to\int g\,d\mu$ ([[thm-dominated-convergence]]).

[A6] For a finite measure $\mu$, $\|g\|_{\infty,\mu}$ is the least essential bound of $|g|$: $|g|\le\|g\|_{\infty,\mu}$ $\mu$-almost everywhere, and if $|g|\le M$ almost everywhere then $\|g\|_{\infty,\mu}\le M$; if $\|g\|_{\infty,\mu}>c$ then $\mu(\{|g|>c\})>0$ ([[prop-essential-supremum-is-attained-as-the-least-essential-bound]], [[def-essential-supremum-with-respect-to-a-measure]]).

[A7] A complex simple function is a finite linear combination of indicators of pairwise disjoint measurable sets; for a measurable $f$ and $\varepsilon>0$ the square $[-M,M]^2$ containing the range of a bounded $f$ can be cut into finitely many Borel squares of diameter $<\varepsilon$ whose inverse images refine to a disjoint measurable cover of $X$ ([[def-complex-simple-function]], [[def-measurable-function-between-measurable-spaces]]).

[A8] Countable Choice is the declared standing hypothesis of this block of the page ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

**Given:** A measurable space $(X,\Sigma)$, a nonzero complex Hilbert space $H$, a projection valued measure $E$ on $(X,\Sigma)$, and a bounded measurable $f:X\to\mathbb C$ with $M:=\|f\|_\infty<+\infty$.

1.1 Uniform simple approximation: for each $n$ choose finitely many pairwise disjoint measurable sets $D_1,\dots,D_r$ covering $X$ and complex numbers $c_i$ with $|f-c_i|\le1/n$ on $D_i$ (cut a square containing the range of $f$ into finitely many squares of diameter $<1/n$ and take inverse images), so $s_n:=\sum_ic_i\mathbf 1_{D_i}$ is a complex simple function with $\|f-s_n\|_\infty\le1/n$. [A7]

1.2 Difference of simple integrals: if $s,t$ are complex simple functions, presenting both over the common refinement of their disjoint normal forms gives $\int(s-t)\,dE=\int s\,dE-\int t\,dE$, hence $\|\int s\,dE-\int t\,dE\|\le\|s-t\|_\infty$; in particular the sequence $\int s_n\,dE$ is Cauchy, since $\|\int s_n\,dE-\int s_m\,dE\|\le\|s_n-s_m\|_\infty\le\frac1n+\frac1m$. [A1]

2.1 By completeness of $\mathcal B(H)$ the sequence $\int s_n\,dE$ has a norm limit $\Phi_E(f)$, and for any other uniformly approximating sequence $(t_n)$ one has $\|\int s_n\,dE-\int t_n\,dE\|\le\|s_n-t_n\|_\infty\to0$, so the limit does not depend on the sequence; the same argument applies to the difference of two candidate limits. [step 1.2, A4]

3.1 Pairing identity: for all $x,y\in H$, $\langle\Phi_E(f)x,y\rangle=\lim_n\langle(\int s_n\,dE)x,y\rangle=\lim_n\int s_n\,dE_{x,y}=\int f\,dE_{x,y}$, because $|\int(s_n-f)\,dE_{x,y}|\le\|s_n-f\|_\infty|E_{x,y}|(X)\le\frac1n\|x\|\,\|y\|\to0$. [step 2.1, A1, A2]

4.1 Norm identities: $\|\Phi_E(f)x\|^2=\lim_n\|\bigl(\int s_n\,dE\bigr)x\|^2=\lim_n\int|s_n|^2\,dE_x=\int|f|^2\,dE_x$ by dominated convergence applied to the finite measure $E_x$ with the constant dominating function $(M+1)^2$, since $s_n\to f$ and $|s_n|\le M+1$; taking $y=x$ in the pairing identity gives $\langle\Phi_E(f)x,x\rangle=\int f\,dE_x$. [step 1.1, step 2.1, step 3.1, A1, A5]

4.2 Norm bound and uniqueness: $|\langle\Phi_E(f)x,y\rangle|\le\|f\|_\infty\|x\|\,\|y\|$ by the pairing identity just proved and the variation bound, so $\|\Phi_E(f)\|\le\|f\|_\infty$; and any operator $T$ with $\langle Tx,y\rangle=\int f\,dE_{x,y}$ for all $x,y$ equals $\Phi_E(f)$, since $T-\Phi_E(f)$ has all pairings zero, whence $(T-\Phi_E(f))x=0$ for every $x$ by positive definiteness of the pairing. [step 3.1, A2]

5.1 Upper bound for the norm: for $x\ne0$ one has $E_x=\|x\|^2E_{x/\|x\|}$ and hence $\|f\|_{\infty,E_x}=\|f\|_{\infty,E_{x/\|x\|}}$, so $\|\Phi_E(f)x\|^2=\int|f|^2\,dE_x\le\|f\|^2_{\infty,E_x}\|x\|^2\le\|f\|^2_{E,\infty}\|x\|^2$ by the least-essential-bound property; therefore $\|\Phi_E(f)\|\le\|f\|_{E,\infty}$. [step 4.1, A3, A6]

5.2 Lower bound for the norm: given $c<\|f\|_{E,\infty}$ choose a unit vector $x$ with $\|f\|_{\infty,E_x}>c$, so $A:=\{|f|>c\}$ satisfies $E_x(A)>0$ by the least-essential-bound property; put $y:=E(A)x\ne0$, so $E_y(X\setminus A)=0$ and hence $\|\Phi_E(f)y\|^2=\int|f|^2\,dE_y\ge c^2E_y(X)=c^2\|y\|^2$, giving $\|\Phi_E(f)\|\ge c$; since $c<\|f\|_{E,\infty}$ was arbitrary, $\|\Phi_E(f)\|\ge\|f\|_{E,\infty}$. [step 4.1, A3, A6]

6.1 The integral $\Phi_E(f)$ is well defined, obtained from uniform simple approximations, satisfies the pairing and quadratic identities and the bound $\|\Phi_E(f)\|\le\|f\|_\infty$, and its exact norm is the $E$-essential supremum $\|f\|_{E,\infty}$. [step 2.1, step 3.1, step 4.1, step 4.2, step 5.1, step 5.2, A8] ∎
