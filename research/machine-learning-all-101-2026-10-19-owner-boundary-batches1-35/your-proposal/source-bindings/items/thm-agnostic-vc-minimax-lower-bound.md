---
id: thm-agnostic-vc-minimax-lower-bound
kind: theorem
title: "An agnostic VC minimax lower bound"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-minimax-excess-risk
  - def-shattering-and-vc-dimension
  - lem-bernoulli-two-point-testing-for-vc-lower-bound
  - lem-bounded-variable-lower-tail-from-mean
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mehryar Mohri, Afshin Rostamizadeh, and Ameet Talwalkar, Foundations of Machine Learning, 2nd ed., Chapter 3 §3.4, Theorem 3.23 and proof"
      url: "https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1"
    - title: "Shai Shalev-Shwartz and Shai Ben-David, Understanding Machine Learning: From Theory to Algorithms, 2014, Chapter 28 §28.2.2"
      url: "https://www.inf.u-szeged.hu/~turan/ML-Konyv.pdf"
---

## Statement

Let $\mathcal H$ be a nonempty measurable binary class with finite VC dimension $d\ge2$, and let $m\ge\lceil64d/5\rceil$ be an integer. Set $r=\sqrt{d/(320m)}$. For every possibly randomized learner $A$, there is a probability law $D$ on $\mathcal X\times\{0,1\}$ such that
$$\Pr_{S\sim D^m,A}\left\{R_D(A(S))- \inf_{h\in\mathcal H}R_D(h)>r\right\}\ge\frac1{64}.$$
The probability includes both the iid sample and the learner's internal randomness.

## Statement references

[Mohri et al., Foundations of Machine Learning, 2nd ed., Theorem 3.23 and proof](https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1)

[Shalev-Shwartz and Ben-David, Chapter 28 §28.2.2 (independent product-prior proof; the printed final substitution is not used)](https://www.inf.u-szeged.hu/~turan/ML-Konyv.pdf)

## Facts & Assumptions

**Given:** A measurable binary class $\mathcal H$ with $\operatorname{VCdim}(\mathcal H)=d\ge2$, an integer $m\ge\lceil64d/5\rceil$, and a possibly randomized learner $A$.

[F1] A finite set of $d$ distinct points is shattered when its indexed trace family contains every subset of $[d]$ ([[def-minimax-excess-risk]], [[def-shattering-and-vc-dimension]]).

[F2] For the two Bernoulli laws with success probabilities $(1-u)/2$ and $(1+u)/2$, every equal-prior test based on $k\ge1$ samples has error at least $2\Phi(2\lceil k/2\rceil,u)$; with $k=0$ its error is $1/2$ ([[lem-bernoulli-two-point-testing-for-vc-lower-bound]]).

[F3] If $Z\in[0,1]$ almost surely and $0\le t<1$, then $\Pr\{Z>t\}\ge(\mathbb EZ-t)/(1-t)$ ([[lem-bounded-variable-lower-tail-from-mean]]).

[A1] For a point $z$ of a measurable space, the point-mass law $\delta_z$ assigns a measurable set $B$ mass $\mathbf1_{\{z\in B\}}$; a finite convex combination of point-mass laws is a probability law.

## Proof

1.1 Put $r=\sqrt{d/(320m)}$ and $a=64r/7$. The sample range gives $r\le1/64$ and $0<a\le1/7$. Choose distinct $x_1,\ldots,x_d$ shattered by $\mathcal H$. For each $\sigma\in\{-1,+1\}^d$, define $D_\sigma:=\frac1d\sum_{i=1}^d\left[\left(\frac12+\frac{\sigma_i a}{2}\right)\delta_{(x_i,1)}+\left(\frac12-\frac{\sigma_i a}{2}\right)\delta_{(x_i,0)}\right]$. The weights are nonnegative and sum to one, so [A1] makes this a probability law. The Bayes label $b_i=\mathbf1_{\{\sigma_i=+1\}}$ is realized on these points by some $h\in\mathcal H$ by [F1]. At atom $x_i$, predicting $b_i$ has error $(1-a)/2$, while predicting $1-b_i$ has error $(1+a)/2$, by the two point masses in $D_\sigma$. Since each atom has marginal weight $1/d$, the class benchmark is $(1-a)/2$ and every binary predictor $g$ has excess risk $R_{D_\sigma}(g)-\inf_{h\in\mathcal H}R_{D_\sigma}(h)=\frac{a}{d}\sum_{i=1}^d\mathbf1_{\{g(x_i)\ne b_i\}}$. This identity holds for every binary output $g$. [given, A1, F1, choose, algebra]

1.2 For $c=a^2/(1-a^2)>0$ and $q=e^{-ct}$, direct differentiation of $\Phi(t,a)=\frac14(1-\sqrt{1-q})$ gives $\Phi'(t,a)=-\frac{cq}{8\sqrt{1-q}}<0$ and $\Phi''(t,a)=\frac{c^2q(2-q)}{16(1-q)^{3/2}}>0$ for $t>0$. Also $\Phi(0,a)=1/4$ and $\Phi$ is continuous there. Approximating any zero endpoint in the monotonicity and convexity inequalities by positive arguments and taking limits extends both properties to $[0,\infty)$. [given, F2, algebra]

2.1 Fix coordinate $i$ and condition on all other signs and all sample data outside $x_i$. Given $N_i=k\ge1$ observations at $x_i$, the learner's prediction there is a randomized test of $\sigma_i$ based on $k$ iid labels with the two laws in [F2]. Its conditional average mistake probability is at least $2\Phi(2\lceil k/2\rceil,a)$. Since $2\lceil k/2\rceil\le k+1$ and $\Phi$ is decreasing by step 1.2, this is at least $2\Phi(k+1,a)>\Phi(k+1,a)$. For $k=0$ the prediction is independent of $\sigma_i$, so its average mistake probability is $1/2>\Phi(1,a)$ because $0<\Phi(1,a)<1/4$. [given, F2, step 1.1, step 1.2]

2.2 Put $s=d/m\le5/64$. Since $a^2=64s/245$ and $m/d=1/s$, $c(m/d+1)=\frac{64}{245}\frac{1+s}{1-(64/245)s}\le\frac{23}{80}$. The derivative of $h(s)=\frac{64}{245}\frac{1+s}{1-(64/245)s}$ is $\frac{(64/245)(1+64/245)}{(1-(64/245)s)^2}>0$, and direct substitution gives $h(5/64)=23/80$. Moreover, $\ln(4/3)=\int_0^{1/3}\frac{dx}{1+x}>\frac13-\frac1{18}+\frac1{81}-\frac1{324}+\frac1{1215}-\frac1{4374}=\frac{12581}{43740}>\frac{23}{80}$. The strict lower bound follows from $1/(1+x)=1-x+x^2-x^3+x^4-x^5+x^6/(1+x)$, whose remainder is positive on $(0,1/3]$; the final rational comparison follows from $80\cdot12581=1006480>1006020=23\cdot43740$. Hence $c(m/d+1)<\ln(4/3)$, so $e^{-c(m/d+1)}>3/4$ and therefore $\Phi(m/d+1,a)>1/8$. [given, step 1.1, algebra, step 1.2]

3.1 Let $N_i$ count occurrences of $x_i$; $N_i\sim\operatorname{Bin}(m,1/d)$, so $\mathbb E(N_i+1)=m/d+1=:t_0>0$. With $Z$ equal to the excess risk in step 1.1 divided by $a$, we have $Z\in[0,1]$. Averaging the strict coordinate bounds of step 2.1 over the finitely many coordinates, sample counts, signs, and learner randomization gives $\mathbb EZ>\mathbb E\Phi(N_i+1,a)$. By step 1.2, $\Phi'$ is increasing on $(0,\infty)$. For each possible value $x=N_i+1>0$, if $x>t_0$ the mean value theorem gives $\Phi(x,a)-\Phi(t_0,a)=\Phi'(\xi,a)(x-t_0)\ge\Phi'(t_0,a)(x-t_0)$ for some $\xi\in(t_0,x)$; if $x<t_0$, it gives the same inequality because $\Phi'(\xi,a)\le\Phi'(t_0,a)$ for some $\xi\in(x,t_0)$ and $x-t_0<0$; equality holds when $x=t_0$. Summing this finite inequality over the distribution of $N_i$ cancels the linear term because $\mathbb E(N_i+1)=t_0$, so $\mathbb E\Phi(N_i+1,a)\ge\Phi(t_0,a)=:v$. Therefore $\mathbb EZ>v$. [given, step 1.1, step 1.2, step 2.1, algebra]

4.1 The prior on $\sigma$ is finite. Since the joint average in step 3.1 is greater than $v>1/8$, some $\sigma$ has $\mathbb E_{S\sim D_\sigma^m,A}Z>1/8$. [step 3.1, step 2.2, choose]

5.1 For this $\sigma$, $r/a=7/64$. Apply [F3] to $Z$ at $t=7/64$: $\Pr\{Z>7/64\}\ge\frac{\mathbb EZ-7/64}{57/64}>\frac{1/8-7/64}{57/64}=\frac1{57}>\frac1{64}$. Since $a(7/64)=r$, the event is exactly that the class excess risk exceeds $r$. [given, F3, step 1.1, step 4.1, algebra] ∎
