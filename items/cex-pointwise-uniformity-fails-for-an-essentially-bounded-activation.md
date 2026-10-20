---
id: cex-pointwise-uniformity-fails-for-an-essentially-bounded-activation
kind: counterexample
title: "Essential boundedness does not imply pointwise uniform universality"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-activation-class-locally-essentially-bounded-ae-continuous
  - def-countable-choice
  - def-single-hidden-layer-network
  - prop-countable-subsets-of-rn-are-lebesgue-null
  - thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Leshno, Lin, Pinkus, and Schocken, Multilayer Feedforward Networks With a Non-Polynomial Activation Function Can Approximate Any Function, Definitions 3–5 and Theorem 1"
      url: "https://archive.nyu.edu/bitstream/2451/14329/1/IS-92-13.pdf"
    - title: "Yves Moreau, Dynamical Neural Networks and Composition Networks for System Modeling, Chapter 2 §2.3"
      url: "https://ftp.esat.kuleuven.be/pub/pub/SISTA/ida/reports/98-69.pdf"
---

## Statement refuted

Assume Countable Choice. Every measurable, locally essentially bounded activation whose discontinuity-set closure is Lebesgue null and which is not polynomial almost everywhere yields single-hidden-layer networks uniformly dense in $C(K,\mathbb R)$ for every compact $K\subseteq\mathbb R^d$.

## Statement references

[Leshno et al., Definitions 3–5 and Theorem 1](https://archive.nyu.edu/bitstream/2451/14329/1/IS-92-13.pdf)

[Moreau, Chapter 2 §2.3, pointwise-sup theorem for a narrower class](https://ftp.esat.kuleuven.be/pub/pub/SISTA/ida/reports/98-69.pdf)

## Facts & Assumptions

**Given:** $H(t)=0$ for $t\le0$ and $H(t)=1$ for $t>0$, and

$$\sigma(t)=H(t)+\begin{cases}n^2,&t=1/n\text{ for some }n\in\mathbb N,\ n\ge1,\\0,&\text{otherwise.}\end{cases}$$

[F1] Every finite single-hidden-layer network is $c+\sum_{j=1}^m a_j\sigma(w_jx+b_j)$ on the line ([[def-single-hidden-layer-network]]).

[F2] A nonzero real polynomial has only finitely many distinct roots ([[thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots]]).

[F3] Countable subsets of $\mathbb R$ are Lebesgue null under Countable Choice ([[prop-countable-subsets-of-rn-are-lebesgue-null]]).

[F4] $\mathcal M$ is the class of measurable, locally essentially bounded activations whose discontinuity-set closure is null ([[def-activation-class-locally-essentially-bounded-ae-continuous]]).

[A1] Countable Choice means every sequence of nonempty sets has a function choosing one element from each ([[def-countable-choice]]).

## Counterexample

1.1 The spike set $\{1/n:n\in\mathbb N,\ n\ge1\}$ is countable and null by [F3]. Thus $\sigma=H$ almost everywhere and $\sigma$ is locally essentially bounded. Its discontinuities are exactly $\{0\}\cup\{1/n:n\in\mathbb N,\ n\ge1\}$, a closed null set: away from this set the step part is locally constant and there are no spikes nearby. Hence the activation satisfies [F4]. [given, F3, F4, A1, algebra]

1.2 Consider a finite network $N(x)=c+\sum_j a_j\sigma(w_jx+b_j)$ on $[-1,1]$. Absorb constant affine units into $c$, combine terms with identical affine maps and discard groups with zero combined coefficient. Call a nonconstant affine map active when its zero lies in $[-1,1]$ and it takes positive values arbitrarily close to that zero at points of $[-1,1]$. If an active group remains, fix its zero $x_0$ and choose, among active groups at $x_0$ with nonzero coefficient, one with minimal $|w_0|$; write its combined coefficient as $A_0\ne0$. [given, F1, algebra]

2.1 The function $\sigma$ is not polynomial almost everywhere. If a polynomial agreed with it almost everywhere, it would vanish almost everywhere on $(-\infty,0)$, so [F2] would force it to be the zero polynomial; this contradicts $\sigma=1$ almost everywhere on $(0,1)$. [step 1.1, F2]

2.2 Set $x_n=x_0+1/(nw_0)$, choosing $n$ sufficiently large that $x_n\in[-1,1]$. The chosen unit has preactivation $1/n$ and contributes $A_0(n^2+1)$. For a unit with a different zero, its preactivation tends to a nonzero value; if the limit is negative the unit is eventually negative, and if positive it lies near only finitely many reciprocals, each attained at most once by the nonconstant affine sequence. Thus it spikes at only finitely many $x_n$. At the same zero, an active group with opposite sign has negative preactivation on this sequence; one with the same sign and a distinct affine map has slope ratio $r=|w|/|w_0|>1$. If $r$ is irrational the equation $r/n=1/m$ is impossible; if $r=p/q>1$ in lowest terms it requires $p\mid n$. Choose the infinite sequence $n=1+kP$, where $P$ is the product of the finitely many such numerators $p$ (take $P=1$ if there are none); then none of those other groups spikes. Along a tail of this sequence all other spike terms vanish and all Heaviside contributions remain bounded, so $|N(x_n)|\to\infty$. Thus a bounded network can have no active group with nonzero coefficient. [step 1.2, algebra, choose]

3.1 For a bounded network, every nonconstant group that remains has no positive threshold crossing in $[-1,1]$. Its Heaviside part is constant on $(-1,1)$, and its spike set in $[-1,1]$ is finite because its positive preactivation values stay bounded away from zero. Constant units are constant as well. Hence $N$ is constant outside a finite subset of $[-1,1]$. [step 2.2, algebra]

4.1 If $N$ is unbounded, it cannot approximate the bounded target $f(x)=x$ uniformly. If it is bounded, choose $x_-,x_+$ outside the finite exceptional set with $x_+-x_->1$; then $N(x_-)=N(x_+)$, so at least one of $|N(x_-)-x_-|$ and $|N(x_+)-x_+|$ exceeds $1/2$. Thus no network approximates $x$ on $[-1,1]$ with error below $1/2$, refuting the pointwise-uniform claim. [step 3.1, algebra, choose] ∎

