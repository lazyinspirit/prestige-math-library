---
id: ex-finite-dimensional-gaussian-process-as-tight-banach-prior
kind: example
title: "A rank-one finite-dimensional Gaussian process is a tight Banach prior"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - thm-gaussian-process-exists-from-mean-and-positive-semidefinite-covariance-kernel
  - def-borel-gaussian-random-element-on-a-separable-banach-space
  - def-banach-gaussian-covariance-operator-and-rkhs
  - def-standard-normal-and-normal-laws
  - def-multivariate-normal-law
  - def-axiom-of-choice
  - thm-continuity-from-below-for-measures
  - thm-gaussian-integral
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
sources:
  references:
    - title: "A. W. van der Vaart and J. H. van Zanten, Rates of contraction of posterior distributions based on Gaussian process priors (2008)"
      url: "https://arxiv.org/pdf/0806.3024"
      locator: "Section 2.1: finite-dimensional distributions and Borel Gaussian priors."
    - title: "A. Lunardi, M. Miranda, and D. Pallara, Infinite Dimensional Analysis"
      url: "https://www.mathematik.tu-darmstadt.de/media/analysis/lehrmaterial_anapde/hallerd/Lectures.pdf"
      locator: "Sections 2.2–3.1: finite-dimensional Gaussian laws and their covariance RKHS."
---

## Example

Assume AC.

Take $T=\{1,2\}$, $B=\mathbb R^2$, and $Z\sim N(0,1)$. Define
$X_1=Z$ and $X_2=2Z$. This is a singular finite Gaussian process and its
coordinate vector is a tight Borel Gaussian random element of $B$.

## Facts & Assumptions

[F1] A symmetric positive-semidefinite kernel on a finite index set defines
the corresponding Gaussian process law
([[thm-gaussian-process-exists-from-mean-and-positive-semidefinite-covariance-kernel]]).

[F2] The standard normal has mean zero, variance one, and density
$(2\pi)^{-1/2}e^{-z^2/2}$
([[def-standard-normal-and-normal-laws]],
[[def-multivariate-normal-law]]).

[F3] The covariance operator and RKHS are defined from $C\ell=E[\ell(W)W]$
and the covariance quotient norm
([[def-banach-gaussian-covariance-operator-and-rkhs]]).


[F4] Probability is continuous from below on increasing events ([[thm-continuity-from-below-for-measures]]).

[F5] The one-dimensional Gaussian integral is $\int_{\mathbb R}e^{-cx^2}dx=\sqrt{\pi/c}$ for $c>0$ ([[thm-gaussian-integral]]).

## Verification
















**Given:** AC, $Z\sim N(0,1)$, $X=(X_1,X_2)=(Z,2Z)$, and $B=\mathbb R^2$ with its































Euclidean norm.































































1.1 With $v=(1,2)$, the mean is zero and $E[X_iX_j]=v_iv_j$. The kernel $k(i,j)=v_iv_j$ is positive semidefinite because for all $a_1,a_2$, $\sum_{i,j}a_ia_jk(i,j)=(a_1+2a_2)^2\ge0$. Thus [F1] gives the same possibly singular Gaussian process law as the explicit vector. [F1, F2, given, algebra]

1.2 The map $z\mapsto(z,2z)$ is continuous, so its pushforward of the standard normal law is a Borel probability on $B$. For every positive integer $R$, the events $\{|Z|\le R\}$ increase to the whole space; continuity from below [F4] therefore lets us choose $R$ with $P(|Z|\le R)>1-\delta$. The image segment $\{(z,2z):|z|\le R\}$ is compact and has probability above $1-\delta$, so the law is tight. [F2, F4, given, choose]

2.1 For $\ell_a(x)=a_1x_1+a_2x_2$, $\ell_a(X)=(a_1+2a_2)Z$, and [F2] gives $C\ell_a=E[\ell_a(X)X]=(a_1+2a_2)(1,2).$ The range is exactly $\operatorname{span}\{(1,2)\}$. If $h=c(1,2)$, then every representative with $a_1+2a_2=c$ has covariance norm squared $E[\ell_a(X)^2]=c^2$, so $\|h\|_H=|c|$. [F2, F3, step 1.1, algebra]

3.1 The law is concentrated on this line. Every open ball around $c(1,2)$ meets the line in an interval of positive normal probability, while a point outside the line has a sufficiently small ball disjoint from it. Hence the support is the line, equal to the RKHS. Since $\|X\|^2=5Z^2$, [F2] and [F5] give $E e^{a\|X\|^2}=E e^{5aZ^2}=\frac1{\sqrt{2\pi}}\int_{\mathbb R}e^{-(1/2-5a)z^2}\,dz=(1-10a)^{-1/2}<\infty$ for $0<a<1/10$. [F2, F5, step 1.1, step 2.1, algebra] ∎
