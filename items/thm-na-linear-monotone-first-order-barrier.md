---
id: thm-na-linear-monotone-first-order-barrier
kind: theorem
title: A monotone linear one-step advection scheme cannot be second order at noninteger CFL
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
aliases: []
deps: []
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Randall J. LeVeque, Numerical Methods for Conservation Laws, full textbook"
      url: "https://tevza.org/home/course/modelling-II_2016/books/Leveque%20-%20Numerical%20Methods%20for%20Conservation%20Laws.pdf"
      locator: "Ch. 16 §16.1, Theorem 16.1, printed pp. 174–175 (PDF pp. 187–188): a linear monotonicity-preserving method is at most first order."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Let $a\ne0$, $h>0$ and $\Delta t>0$, and put $\nu=a\Delta t/h$. Fix a noninteger $\nu$. Consider a finite-stencil, translation-invariant linear one-step scheme
$$U_j^{n+1}=\sum_{\ell=-r}^{r}c_\ell U_{j+\ell}^n$$
with real coefficients that may depend on the fixed $\nu$ but are independent of $h$, $j$ and $n$. Assume the scheme is conservative, is consistent with $u_t+a u_x=0$, and is second-order accurate in the local truncation sense. For these fixed coefficients, second-order consistency requires exact matching of the constant, linear and quadratic Taylor moments for the one-step translation. If the update is monotone in the componentwise order on grid sequences, then these assumptions are inconsistent. Thus at a noninteger Courant number no such linear monotone scheme can be second order.

## Facts & Assumptions

**Given:** A finite radius $r$, a fixed noninteger Courant number $\nu$, a linear translation-invariant one-step update with coefficients $c_\ell$, conservation and second-order consistency through quadratic data.

[A1] Monotone means order preserving: if $V_j\ge U_j$ for every integer $j$, then $V_j^{n+1}\ge U_j^{n+1}$ for every $j$.

[A2] With coefficients fixed as $h\to0$, second-order local accuracy requires the update moments on $1$, $x$ and $x^2$ to equal those of $u(x)\mapsto u(x-a\Delta t)$.

## Proof

1.1 Fix an integer offset $\ell$. Compare the zero input sequence with the sequence that is $1$ at the single index $j+\ell$ and $0$ elsewhere. The first is componentwise below the second; by [A1], their outputs at index $j$ are ordered. Linearity makes those outputs $0$ and $c_\ell$, respectively, so $c_\ell\ge0$. This holds for each $\ell$. [given, A1, choose]

1.2 Apply [A2] to the constant polynomial $u(x)=1$. Its exact translate is $1$, so $\sum_\ell c_\ell=1$. Applying [A2] to $u(x)=x$ gives $\sum_\ell c_\ell(x+\ell h)=x-a\Delta t=x-\nu h$; subtracting $x\sum c_\ell=x$ yields $\sum_\ell\ell c_\ell=-\nu$. Applying [A2] to $u(x)=x^2$ gives $\sum_\ell c_\ell(x+\ell h)^2=(x-a\Delta t)^2$; expanding both sides and using the first two identities yields $\sum_\ell\ell^2c_\ell=\nu^2$. [given, A2, algebra]

2.1 The three moment identities imply $\sum_\ell c_\ell(\ell+\nu)^2=\sum_\ell\ell^2c_\ell+2\nu\sum_\ell\ell c_\ell+\nu^2\sum_\ell c_\ell=\nu^2-2\nu^2+\nu^2=0$. Every summand is nonnegative by step 1.1, so any $\ell$ with $c_\ell>0$ must satisfy $\ell=-\nu$. Since $\ell$ is an integer and $\nu$ is not, all coefficients vanish, contradicting $\sum_\ell c_\ell=1$ from step 1.2. [A1, step 1.1, step 1.2, algebra] ∎

## Remarks

The noninteger restriction is necessary: when $\nu$ is an integer, an exact grid shift is monotone and reproduces every polynomial. The theorem is the scalar linear barrier; nonlinear limiters and nonmonotone high-order schemes lie outside its hypotheses.
