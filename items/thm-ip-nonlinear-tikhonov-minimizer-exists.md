---
id: thm-ip-nonlinear-tikhonov-minimizer-exists
kind: theorem
title: Existence of a global nonlinear Tikhonov minimizer
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-ip-weakly-closed-nonlinear-forward-map
  - def-ip-nonlinear-tikhonov-functional
  - def-weak-convergence-of-nets-and-sequences
  - lem-bounded-minimising-sequence-has-a-weakly-convergent-subsequence
  - thm-hilbert-spaces-are-reflexive-by-riesz-representation
  - cor-weak-convergence-implies-lower-semicontinuity-of-the-norm
  - def-ultrafilter-extension-principle
  - def-dependent-choice
  - def-countable-choice
  - def-hahn-banach-extension-principle-relative
  - lem-dependent-choice-implies-countable-choice
  - def-infimum
  - thm-infimum-property
  - lem-inf-epsilon
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Christian Clason, Regularization of Inverse Problems, Theorem 10.1"
      url: "https://arxiv.org/pdf/2001.00617v2"
    - title: "Benedikt Wirth, Inverse Problems, Theorem 85(a)"
      url: "https://www.uni-muenster.de/AMM/Veranstaltungen/WS21/InverseProblems/lecture2021.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement

Assume the ultrafilter lemma, dependent choice, and the real Hahn–Banach dominated-extension principle. Let $X,Y$ be real Hilbert spaces, let $D\subseteq X$ be nonempty and weakly closed, and let $F:D\to Y$ be a map such that for every sequence $(x_n)$ in $D$ and every $x\in X,z\in Y$, $x_n\rightharpoonup x$ and $F(x_n)\rightharpoonup z$ imply $x\in D$ and $F(x)=z$. Here $D$ is closed in the coarsest topology making every bounded real-linear functional continuous, and weak convergence means convergence under every such functional. For any $\alpha>0$, $x_0\in X$, and $y\in Y$, the nonlinear Tikhonov functional

$$
J_{\alpha,y,x_0}(x)=\frac12\|F(x)-y\|_Y^2+\frac{\alpha}{2}\|x-x_0\|_X^2\qquad(x\in D)
$$

attains a global minimum on $D$; that is, there exists $x_\alpha\in D$ such that $J_{\alpha,y,x_0}(x_\alpha)\le J_{\alpha,y,x_0}(x)$ for every $x\in D$. No exact solution of $F(x)=y$ is required.

## Statement references

[[def-ip-weakly-closed-nonlinear-forward-map|Weakly closed domains and sequential weak-to-weak graph closure]]

[[def-ip-nonlinear-tikhonov-functional|The Tikhonov functional and global minimizer]]

[Christian Clason, *Regularization of Inverse Problems*, Theorem 10.1](https://arxiv.org/pdf/2001.00617v2)

[Benedikt Wirth, *Inverse Problems*, Theorem 85(a)](https://www.uni-muenster.de/AMM/Veranstaltungen/WS21/InverseProblems/lecture2021.pdf)

## Facts & Assumptions

**Given:** The ultrafilter lemma, dependent choice, and HB; real Hilbert spaces $X,Y$; a nonempty weakly closed domain $D\subseteq X$; a map $F:D\to Y$ with sequentially weak-to-weak closed graph; $\alpha>0$, $x_0\in X$, and $y\in Y$.

[A1] The ultrafilter lemma says every filter on a set extends to an ultrafilter ([[def-ultrafilter-extension-principle]]).

[A2] Dependent choice supplies an infinite sequence following any everywhere-extendible relation ([[def-dependent-choice]]).

[A3] HB is the real dominated-extension principle for linear functionals ([[def-hahn-banach-extension-principle-relative]]).

[F1] DC implies countable choice, the principle that every countable family of nonempty sets admits a choice function ([[lem-dependent-choice-implies-countable-choice]], [[def-countable-choice]]).

[F2] Under countable choice, every complete real inner-product space is reflexive ([[thm-hilbert-spaces-are-reflexive-by-riesz-representation]]).

[F3] Under the ultrafilter lemma, DC, and HB, every bounded sequence in a real reflexive Banach space has a weakly convergent subsequence ([[lem-bounded-minimising-sequence-has-a-weakly-convergent-subsequence]]).

[F4] Under HB, weak convergence implies lower semicontinuity of the norm ([[cor-weak-convergence-implies-lower-semicontinuity-of-the-norm]]).

[F5] Every nonempty real set bounded below has an infimum, and if $m=\inf S$, then for every $\varepsilon>0$ some $s\in S$ satisfies $s<m+\varepsilon$ ([[def-infimum]], [[thm-infimum-property]], [[lem-inf-epsilon]]).

[F6] The objective is the finite nonnegative sum $J_{\alpha,y,x_0}(x)=\frac12\|F(x)-y\|_Y^2+\frac{\alpha}{2}\|x-x_0\|_X^2$ on $D$ ([[def-ip-nonlinear-tikhonov-functional]]).

[F7] Sequential graph closure identifies a joint weak limit: if $x_n\in D$, $x_n\rightharpoonup x$, and $F(x_n)\rightharpoonup z$, then $x\in D$ and $F(x)=z$ ([[def-ip-weakly-closed-nonlinear-forward-map]]).

## Proof

1.1 Let $m:=\inf\{J_{\alpha,y,x_0}(x):x\in D\}$. The set of objective values is nonempty because $D\ne\varnothing$, is bounded below by $0$, and contains a finite value. Thus $m$ is a finite real number by [F5]. [given, F5]

2.1 For each $n\ge1$, [F5] gives $x_n\in D$ with $m\le J_{\alpha,y,x_0}(x_n)<m+1/n$. Since DC implies countable choice by [F1], choose these points as a sequence; then $J_{\alpha,y,x_0}(x_n)\to m$. [A2, F1, F5, step 1.1, choose]

3.1 The sequence of objective values is bounded above, say by $M>0$. Nonnegativity of both summands in [F6] and $\alpha>0$ give $\|F(x_n)-y\|_Y^2\le2M$ and $\|x_n-x_0\|_X^2\le2M/\alpha$. The triangle inequality then bounds $(x_n)$, and the first estimate together with fixed $y$ bounds $(F(x_n))$. [given, F6, step 2.1, algebra]

4.1 By [F2], $X$ and $Y$ are real reflexive Banach spaces: they are complete inner-product spaces, and DC supplies the countable choice assumed in [F2] by [F1]. Apply [F3] to the bounded sequence $(x_n)$ to obtain a subsequence $x_{n_k}\rightharpoonup x$; apply [F3] in $Y$ to the bounded sequence $(F(x_{n_k}))$ and pass to a further subsequence so that $F(x_{n_k})\rightharpoonup z$. The further subsequence still has $x_{n_k}\rightharpoonup x$. [A1, A2, A3, F1, F2, F3, step 3.1, construct]

5.1 By [F7], $x\in D$ and $F(x)=z$. Subtracting the fixed vector $y$ preserves weak convergence, so $F(x_{n_k})-y\rightharpoonup F(x)-y$, while $x_{n_k}-x_0\rightharpoonup x-x_0$. [F7, step 4.1]

6.1 Apply [F4] to the two weakly convergent sequences in step 5.1. The maps $r\mapsto r^2/2$ and $r\mapsto\alpha r^2/2$ are increasing and continuous on $[0,\infty)$, so each squared-norm term is lower semicontinuous. If their limit values are $a:=\frac12\|F(x)-y\|_Y^2$ and $b:=\frac{\alpha}{2}\|x-x_0\|_X^2$, then for every $\varepsilon>0$ each sequence term is eventually at least its limit value minus $\varepsilon/2$; taking the larger of the two eventual indices gives $J_{\alpha,y,x_0}(x_{n_k})\ge a+b-\varepsilon$. Thus $J_{\alpha,y,x_0}(x)\le\liminf_k J_{\alpha,y,x_0}(x_{n_k})=m$. Since $x\in D$, the definition of $m$ gives $m\le J_{\alpha,y,x_0}(x)$, so equality holds and $x$ is a global minimizer. [A3, F4, F5, F6, step 2.1, step 5.1, algebra] ∎

## Remarks

The theorem guarantees global minimizers, not uniqueness. The sequential weak-to-weak graph condition is needed to identify the weak limit of the data sequence; weak-to-strong closedness alone would not identify a merely weak data limit. The direct method makes no claim that a numerical algorithm finds a global minimizer; nonlinear objectives may also have local minima.
