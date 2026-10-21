---
id: thm-ip-nonlinear-tikhonov-weak-cluster-stability
kind: theorem
title: Weak-cluster stability for fixed-parameter nonlinear Tikhonov regularization
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-ip-weakly-closed-nonlinear-forward-map
  - def-ip-nonlinear-tikhonov-functional
  - thm-ip-nonlinear-tikhonov-minimizer-exists
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
    - title: "Christian Clason, Regularization of Inverse Problems, Theorem 10.2"
      url: "https://arxiv.org/pdf/2001.00617v2"
    - title: "Benedikt Wirth, Inverse Problems, Theorem 86"
      url: "https://www.uni-muenster.de/AMM/Veranstaltungen/WS21/InverseProblems/lecture2021.pdf"
verification:
  precheck: pass
---

## Statement

Assume the ultrafilter lemma, dependent choice, and HB. Let $X,Y$ be real Hilbert spaces, let $D\subseteq X$ be nonempty and weakly closed in the coarsest topology making every bounded real-linear functional continuous, and let $F:D\to Y$ satisfy: whenever $x_n\in D$, $x_n\rightharpoonup x$, and $F(x_n)\rightharpoonup z$, one has $x\in D$ and $F(x)=z$; weak convergence means convergence under every bounded real-linear functional. Fix $\alpha>0$, $x_0\in X$, and $y\in Y$, and let data $y_n\in Y$ satisfy $\|y_n-y\|_Y\to0$. There exists a sequence $(x_n)$ of global minimizers of $J_{\alpha,y_n,x_0}$ on $D$. Every such sequence has a subsequence $x_{n_k}$ with $x_{n_k}\rightharpoonup x$, and every such weak limit $x$ minimizes $J_{\alpha,y,x_0}$ on $D$. No uniqueness of the limiting minimizer is asserted.

## Statement references

[[def-ip-weakly-closed-nonlinear-forward-map|Weakly closed domain and sequential graph closure]]

[[def-ip-nonlinear-tikhonov-functional|The Tikhonov functional]]

[[thm-ip-nonlinear-tikhonov-minimizer-exists|Existence for each perturbed datum]]

[Christian Clason, *Regularization of Inverse Problems*, Theorem 10.2](https://arxiv.org/pdf/2001.00617v2)

[Benedikt Wirth, *Inverse Problems*, Theorem 86](https://www.uni-muenster.de/AMM/Veranstaltungen/WS21/InverseProblems/lecture2021.pdf)

## Facts & Assumptions

**Given:** The ultrafilter lemma, DC, and HB; a weakly closed forward map $F:D\to Y$ between real Hilbert spaces; $\alpha>0$, $x_0\in X$; and data $y_n\to y$ in norm.

[A1] The ultrafilter lemma says every filter extends to an ultrafilter ([[def-ultrafilter-extension-principle]]).

[A2] DC supplies an infinite sequence following an everywhere-extendible relation ([[def-dependent-choice]]).

[A3] HB is the real dominated-extension principle ([[def-hahn-banach-extension-principle-relative]]).

[F1] For each datum in a real Hilbert space and each positive parameter, the Tikhonov functional has a global minimizer under the stated weak-closedness and axiom hypotheses ([[thm-ip-nonlinear-tikhonov-minimizer-exists]]).

[F2] DC implies countable choice, the principle that every countable family of nonempty sets admits a choice function ([[lem-dependent-choice-implies-countable-choice]], [[def-countable-choice]]).

[F3] Under countable choice, real Hilbert spaces are reflexive ([[thm-hilbert-spaces-are-reflexive-by-riesz-representation]]).

[F4] Under the ultrafilter lemma, DC, and HB, bounded sequences in real reflexive Banach spaces have weakly convergent subsequences ([[lem-bounded-minimising-sequence-has-a-weakly-convergent-subsequence]]).

[F5] Under HB, weak convergence implies lower semicontinuity of the norm ([[cor-weak-convergence-implies-lower-semicontinuity-of-the-norm]]).

[F6] The graph condition says $x_n\in D$, $x_n\rightharpoonup x$, and $F(x_n)\rightharpoonup z$ imply $x\in D$ and $F(x)=z$ ([[def-ip-weakly-closed-nonlinear-forward-map]]).

[F7] $J_{\alpha,y,x_0}(x)=\frac12\|F(x)-y\|_Y^2+\frac{\alpha}{2}\|x-x_0\|_X^2$ for $x\in D$ ([[def-ip-nonlinear-tikhonov-functional]]).

## Proof

**Given:** The assumptions above.

1.1 For each $n$, [F1] makes the set $M_n$ of global minimizers of $J_{\alpha,y_n,x_0}$ on $D$ nonempty. Since the family $(M_n)$ is countable and DC implies countable choice by [F2], choose $x_n\in M_n$ for every $n$. [A2, F1, F2, choose]

2.1 Fix $v\in D$, possible because $D\ne\varnothing$. Strong convergence $y_n\to y$ bounds $J_{\alpha,y_n,x_0}(v)$ by some $M>0$, and minimality gives $J_{\alpha,y_n,x_0}(x_n)\le M$. By [F7] and $\alpha>0$, this bounds $\|x_n-x_0\|_X$ and $\|F(x_n)-y_n\|_Y$; the convergent sequence $(y_n)$ is bounded, so both $(x_n)$ and $(F(x_n))$ are bounded. [given, F7, step 1.1, choose, algebra]

3.1 By [F3], [F4], and the bounds in step 2.1, pass to a subsequence with $x_{n_k}\rightharpoonup x$ and then a further subsequence with $F(x_{n_k})\rightharpoonup z$. The further subsequence still converges weakly to $x$. [A1, A2, A3, F3, F4, step 2.1, construct]

4.1 By [F6], $x\in D$ and $F(x)=z$. Since $y_{n_k}\to y$ strongly, $F(x_{n_k})-y_{n_k}\rightharpoonup F(x)-y$, and $x_{n_k}-x_0\rightharpoonup x-x_0$. [F6, step 3.1]

5.1 By [F5], each norm in [F7] is weakly lower semicontinuous; composition with the increasing continuous square function on nonnegative reals preserves this property. For any $\varepsilon>0$, the two summand sequences are eventually at least their respective limit values minus $\varepsilon/2$, so their sum is eventually at least $J_{\alpha,y,x_0}(x)-\varepsilon$. Thus $J_{\alpha,y,x_0}(x)\le\liminf_k J_{\alpha,y_{n_k},x_0}(x_{n_k})$. For any $w\in D$, minimality gives $J_{\alpha,y_{n_k},x_0}(x_{n_k})\le J_{\alpha,y_{n_k},x_0}(w)$, and the right side converges to $J_{\alpha,y,x_0}(w)$ because $F(w)$ is fixed and $y_{n_k}\to y$. Hence $J_{\alpha,y,x_0}(x)\le\liminf_kJ_{\alpha,y_{n_k},x_0}(x_{n_k})\le\limsup_kJ_{\alpha,y_{n_k},x_0}(x_{n_k})\le J_{\alpha,y,x_0}(w)$. This holds for every $w\in D$, so $x$ is a global minimizer. Applying the same argument to any weakly convergent subsequence proves the claim for every weak cluster point. [A3, F5, F7, step 3.1, step 4.1, algebra] ∎

## Remarks

The conclusion is weak-cluster stability at fixed positive $\alpha$. Nonlinearity can prevent uniqueness, so the theorem does not assert convergence of the full sequence or strong convergence.
