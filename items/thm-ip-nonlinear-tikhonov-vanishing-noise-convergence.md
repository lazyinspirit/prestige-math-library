---
id: thm-ip-nonlinear-tikhonov-vanishing-noise-convergence
kind: theorem
title: Vanishing-noise convergence to an $x_0$-minimum-norm exact solution
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-ip-weakly-closed-nonlinear-forward-map
  - def-ip-nonlinear-tikhonov-functional
  - def-ip-x0-minimum-norm-solution-on-weak-domain
  - thm-ip-nonlinear-tikhonov-minimizer-exists
  - thm-ip-nonlinear-exact-solutions-have-x0-minimum-norm-solution
  - def-weak-convergence-of-nets-and-sequences
  - lem-bounded-minimising-sequence-has-a-weakly-convergent-subsequence
  - thm-hilbert-spaces-are-reflexive-by-riesz-representation
  - cor-weak-convergence-implies-lower-semicontinuity-of-the-norm
  - def-ultrafilter-extension-principle
  - def-dependent-choice
  - def-countable-choice
  - def-hahn-banach-extension-principle-relative
  - lem-dependent-choice-implies-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Christian Clason, Regularization of Inverse Problems, Theorem 10.3"
      url: "https://arxiv.org/pdf/2001.00617v2"
    - title: "Benedikt Wirth, Inverse Problems, Theorem 87"
      url: "https://www.uni-muenster.de/AMM/Veranstaltungen/WS21/InverseProblems/lecture2021.pdf"
verification:
  precheck: pass
---

## Statement

Assume the ultrafilter lemma, dependent choice, and HB. Let $X,Y$ be real Hilbert spaces, let $D\subseteq X$ be nonempty and weakly closed in the coarsest topology making every bounded real-linear functional continuous, and let $F:D\to Y$ satisfy: whenever $x_n\in D$, $x_n\rightharpoonup x$, and $F(x_n)\rightharpoonup z$, one has $x\in D$ and $F(x)=z$; weak convergence means convergence under every bounded real-linear functional. Fix $x_0\in X$ and suppose $S_F(y^\dagger):=\{x\in D:F(x)=y^\dagger\}$ is nonempty. Let $\delta_n\ge0$, $\delta_n\to0$, $\alpha_n>0$, $\alpha_n\to0$, and $\delta_n^2/\alpha_n\to0$, and let $y_n\in Y$ satisfy $\|y_n-y^\dagger\|_Y\le\delta_n$. There exists a sequence $(x_n)$ of global minimizers of $J_{\alpha_n,y_n,x_0}$ on $D$; every such sequence has a subsequence $x_{n_k}\rightharpoonup x$, and every such weak limit $x$ is an $x_0$-minimum-norm solution of $F(x)=y^\dagger$ on $D$. No uniqueness or full-sequence convergence is asserted.

## Statement references

[[def-ip-weakly-closed-nonlinear-forward-map|Weakly closed domains and sequential graph closure]]

[[def-ip-nonlinear-tikhonov-functional|The nonlinear Tikhonov functional]]

[[def-ip-x0-minimum-norm-solution-on-weak-domain|The reference-point minimum-norm exact solution condition]]

[[thm-ip-nonlinear-tikhonov-minimizer-exists|Existence for every positive parameter and datum]]

[[thm-ip-nonlinear-exact-solutions-have-x0-minimum-norm-solution|Existence of a reference-point minimum-norm solution]]

[Christian Clason, *Regularization of Inverse Problems*, Theorem 10.3](https://arxiv.org/pdf/2001.00617v2)

[Benedikt Wirth, *Inverse Problems*, Theorem 87](https://www.uni-muenster.de/AMM/Veranstaltungen/WS21/InverseProblems/lecture2021.pdf)

## Facts & Assumptions

**Given:** The ultrafilter lemma, DC, and HB; a weakly closed forward map $F:D\to Y$ between real Hilbert spaces; $x_0\in X$; a nonempty exact solution set for $y^\dagger$; and sequences $\delta_n,\alpha_n,y_n$ satisfying the stated noise and parameter conditions.

[A1] The ultrafilter lemma extends every filter to an ultrafilter ([[def-ultrafilter-extension-principle]]).

[A2] DC supplies a sequence following an everywhere-extendible relation ([[def-dependent-choice]]).

[A3] HB is the real dominated-extension principle ([[def-hahn-banach-extension-principle-relative]]).

[F1] DC implies countable choice, the principle that every countable family of nonempty sets admits a choice function ([[lem-dependent-choice-implies-countable-choice]], [[def-countable-choice]]).

[F2] Under countable choice, real Hilbert spaces are reflexive ([[thm-hilbert-spaces-are-reflexive-by-riesz-representation]]).

[F3] Under the ultrafilter lemma, DC, and HB, bounded sequences in real reflexive Banach spaces have weakly convergent subsequences ([[lem-bounded-minimising-sequence-has-a-weakly-convergent-subsequence]]).

[F4] The exact solution set contains an $x_0$-minimum-norm solution under these hypotheses ([[thm-ip-nonlinear-exact-solutions-have-x0-minimum-norm-solution]]).

[F5] For each $\alpha_n>0$ and $y_n\in Y$, the Tikhonov functional has a global minimizer under these hypotheses ([[thm-ip-nonlinear-tikhonov-minimizer-exists]]).

[F6] Under HB, weak convergence implies lower semicontinuity of the norm ([[cor-weak-convergence-implies-lower-semicontinuity-of-the-norm]]).

[F7] A sequentially weak-to-weak closed graph maps weak limits $(x_n,F(x_n))\rightharpoonup(x,z)$ to $x\in D$ and $F(x)=z$ ([[def-ip-weakly-closed-nonlinear-forward-map]]).

[F8] $J_{\alpha,y,x_0}(x)=\frac12\|F(x)-y\|_Y^2+\frac{\alpha}{2}\|x-x_0\|_X^2$ ([[def-ip-nonlinear-tikhonov-functional]]).

[F9] An $x_0$-minimum-norm solution is an exact solution with least distance to $x_0$ among all exact solutions in $D$ ([[def-ip-x0-minimum-norm-solution-on-weak-domain]]).

## Proof

**Given:** The assumptions above.

1.1 By [F4], choose an $x_0$-minimum-norm exact solution $\widehat x\in D$ and put $R:=\|\widehat x-x_0\|_X$. For each $n$, [F5] makes the set of global minimizers of $J_{\alpha_n,y_n,x_0}$ nonempty; by [F1] and the assumed DC, choose one $x_n$ from each set. [A2, F1, F4, F5, choose]

2.1 Minimality, [F8], exactness of $\widehat x$, and $\|y_n-y^\dagger\|_Y\le\delta_n$ give $\frac12\|F(x_n)-y_n\|_Y^2+\frac{\alpha_n}{2}\|x_n-x_0\|_X^2\le J_{\alpha_n,y_n,x_0}(\widehat x)\le\frac{\delta_n^2}{2}+\frac{\alpha_n}{2}R^2$. Consequently $\|x_n-x_0\|_X^2\le\delta_n^2/\alpha_n+R^2$, so $(x_n)$ is bounded, and $\|F(x_n)-y_n\|_Y^2\le\delta_n^2+\alpha_nR^2\to0$. [given, F5, F8, step 1.1, algebra]

3.1 By [F2] and [F3], a subsequence satisfies $x_{n_k}\rightharpoonup x\in X$. The triangle inequality and step 2.1 give $\|F(x_{n_k})-y^\dagger\|_Y\le\|F(x_{n_k})-y_{n_k}\|_Y+\delta_{n_k}\le\sqrt{\delta_{n_k}^2+\alpha_{n_k}R^2}+\delta_{n_k}\to0$. Thus $F(x_{n_k})\to y^\dagger$ strongly, hence weakly. Applying [F7] gives $x\in D$ and $F(x)=y^\dagger$. [A1, A2, A3, F2, F3, F7, step 2.1, construct, algebra]

4.1 By [F6], $\|x-x_0\|_X^2\le\liminf_k\|x_{n_k}-x_0\|_X^2$. The bound in step 2.1 gives $\limsup_k\|x_{n_k}-x_0\|_X^2\le\lim_k(\delta_{n_k}^2/\alpha_{n_k}+R^2)=R^2$, so $\|x-x_0\|_X^2\le\liminf_k\|x_{n_k}-x_0\|_X^2\le\limsup_k\|x_{n_k}-x_0\|_X^2\le R^2$. Since $x$ is an exact solution and $\widehat x$ minimizes distance among exact solutions by [F9], $R^2\le\|x-x_0\|_X^2$; equality follows, so $x$ is an $x_0$-minimum-norm exact solution. The same reasoning applies to any weakly convergent subsequence. [A3, F6, F9, step 1.1, step 2.1, step 3.1, algebra] ∎

## Remarks

The fixed-positive-$\alpha$ stability theorem concerns minimizers of one limiting functional. This vanishing-noise theorem has the separate assumptions of exact solvability, $\alpha_n\to0$, and $\delta_n^2/\alpha_n\to0$. It identifies weak cluster points as minimum-norm exact solutions but does not assert a unique limit.
