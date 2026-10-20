---
id: thm-realizable-vc-minimax-lower-bound
kind: theorem
title: "A realizable VC minimax lower bound"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-minimax-excess-risk
  - def-shattering-and-vc-dimension
  - lem-bounded-variable-lower-tail-from-mean
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Mehryar Mohri, Afshin Rostamizadeh, and Ameet Talwalkar, Foundations of Machine Learning, 2nd ed., Chapter 3 §3.4, Theorem 3.20 and proof"
      url: "https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1"
    - title: "Statistical Learning Theory course notes, University of British Columbia, Chapter 7 §§7.2.2 and 7.3, Theorems 7.10 and 7.13 and Proposition 7.14"
      url: "https://www.cs.ubc.ca/~dsuth/532D/26w1/notes/html/chap_pac-nfl.html"
---

## Statement

Let $\mathcal H$ be a nonempty measurable class of binary classifiers with finite VC dimension $d\ge2$, and let $m\ge\lceil(d-1)/4\rceil$ be an integer. For every possibly randomized learner $A$, there are $d$ distinct points $x_0,\ldots,x_{d-1}$ shattered by $\mathcal H$, weights $w_0,\ldots,w_{d-1}\ge0$ with $\sum_iw_i=1$, a law $\mu=\sum_iw_i\delta_{x_i}$, and a target $f\in\mathcal H$ such that, for the labeled law $D_f$ of $(X,f(X))$ with $X\sim\mu$. Here $\delta_x(E)=\mathbf1_{\{x\in E\}}$ for each measurable $E\subseteq\mathcal X$,
$$\Pr_{S\sim D_f^m,A}\left\{R_{D_f}(A(S),f)>\frac{d-1}{32m}\right\}\ge\frac1{100}.$$
The probability includes both the iid sample and the learner's internal randomness.

## Statement references

[Mohri et al., Foundations of Machine Learning, 2nd ed., Theorem 3.20 and proof](https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1)

[Statistical Learning Theory course notes, University of British Columbia, Theorem 7.13 and proof (the independent argument covers $d\ge3$ and $m>d/2$)](https://www.cs.ubc.ca/~dsuth/532D/26w1/notes/html/chap_pac-nfl.html)

## Facts & Assumptions

**Given:** A binary class $\mathcal H$ with $\operatorname{VCdim}(\mathcal H)=d\ge2$, an integer $m\ge\lceil(d-1)/4\rceil$, and a possibly randomized learner $A$.

[F1] The class trace on an indexed set of $d$ distinct points is a family in $\mathcal P([d])$; all its labelings occur exactly when that family shatters $[d]$ ([[def-minimax-excess-risk]], [[def-shattering-and-vc-dimension]]).

[F2] The tail lemma states that for $Z\in[0,1]$ almost surely and $0\le t<1$, $\Pr\{Z>t\}\ge(\mathbb EZ-t)/(1-t)$ ([[lem-bounded-variable-lower-tail-from-mean]]).

[F3] For a realizable law with target $f$, the target risk is $R_D(g,f)=D_X\{x:g(x)\ne f(x)\}$ ([[def-minimax-excess-risk]]).

[F4] For every realizable law with target $f\in\mathcal H$, the class benchmark is $R_D^*(\mathcal H)=0$ ([[def-minimax-excess-risk]]).

## Proof

1.1 Since $d$ is the finite VC dimension, choose distinct $x_0,x_1,\ldots,x_{d-1}$ shattered by $\mathcal H$. For each of the finitely many label vectors $\theta\in\{0,1\}^d$, shattering supplies a target $f_\theta\in\mathcal H$ with those labels on these points; finite choice suffices for this finite family. Put $\epsilon=(d-1)/(32m)$ and define the finite mixture $\mu=(1-8\epsilon)\delta_{x_0}+\sum_{i=1}^{d-1}\frac{8\epsilon}{d-1}\delta_{x_i}$. The range on $m$ gives $8\epsilon=(d-1)/(4m)\le1$, so all mixture weights are nonnegative and sum to one. For each $\theta$, let $D_\theta$ be the law of $(X,f_\theta(X))$ for $X\sim\mu$. [given, F1, choose, algebra]

1.2 Let $M$ count sample positions drawn from the rare atoms $x_1,\ldots,x_{d-1}$. Then $M\sim\operatorname{Bin}(m,8\epsilon)$ and $\mu_0:=\mathbb EM=(d-1)/4\ge1/4$. Since $e^p=\sum_{j=0}^\infty p^j/j!\ge1+p$ for $p\ge0$, $\mathbb E2^M=(1+8\epsilon)^m\le e^{\mu_0}$. For any nonnegative random variable $X$ and $b>0$, $\mathbb EX\ge b\Pr\{X\ge b\}$ because $X\ge b\mathbf1_{\{X\ge b\}}$; apply this to $X=2^M$ and $b=2^{2\mu_0}$. On $\{M\ge2\mu_0\}$, $2^M\ge2^{2\mu_0}$, hence $\Pr\{M\ge2\mu_0\}\le e^{\mu_0-2\mu_0\log2}\le e^{-\mu_0/3}$, where $\log2\ge2/3$ because $g(x)=\log x-2(x-1)/(x+1)$ has $g(1)=0$ and $g'(x)=(x-1)^2/(x(x+1)^2)\ge0$ for $x\ge1$. Since $2\mu_0=(d-1)/2$, $\Pr\{M\le(d-1)/2\}\ge1-e^{-\mu_0/3}\ge1-e^{-1/12}\ge1/13$; the last inequality follows from $e^{1/12}\ge1+1/12=13/12$. [given, algebra]

1.3 Fix any vector of sample atom indices and observed labels for which $M\le(d-1)/2$. At least $(d-1)/2$ rare atoms were not observed. Under the uniform prior on $\theta$, each unseen label $\theta_i$ is still an independent fair bit, independent of the learner's output at $x_i$, because the learner depends only on the observed sample and independent internal randomness. Therefore, if $W$ is the learner's risk contribution from $x_1,\ldots,x_{d-1}$, then $\mathbb E_{\theta,A}[W\mid\text{observed data}]\ge\frac12\frac{d-1}{2}\frac{8\epsilon}{d-1}=2\epsilon$, while $0\le W\le8\epsilon$. Applying [F2] to $W/(8\epsilon)$ at $t=1/8$ yields $\Pr_{\theta,A}\{W>\epsilon\mid\text{observed data}\}\ge1/7$. [given, F2, algebra]

2.1 Each $D_\theta$ is realizable by $f_\theta$, so [F4] gives $R_{D_\theta}^*(\mathcal H)=0$. By [F3] and the event $Y=f_\theta(X)$ of probability one, the zero-one risk and target risk of the learner's output agree. The full target risk is at least $W$. Averaging step 1.3 over sample locations and labels, then using step 1.2, gives $\Pr_{\theta,S\sim D_\theta^m,A}\{R_{D_\theta}(A(S),f_\theta)>\epsilon\}\ge\frac1{7}\cdot\frac1{13}=\frac1{91}>\frac1{100}$. This is an average over the finite set $\{0,1\}^d$, so at least one $\theta$ has conditional failure probability at least $1/91$. Its $D_\theta$ and $f_\theta$ satisfy the statement. [given, F3, F4, step 1.2, step 1.3, choose, algebra] ∎
