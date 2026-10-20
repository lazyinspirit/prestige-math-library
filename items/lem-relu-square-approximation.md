---
id: lem-relu-square-approximation
kind: lemma
title: "Logarithmic-size ReLU approximation of the square"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps: [lem-relu-tent-iterate-depth]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Dmitry Yarotsky, Error bounds for approximations with deep ReLU networks, Proposition 2"
      url: "https://arxiv.org/pdf/1610.01145"
      locator: "Proposition 2 and complete proof, pp. 6–7."
    - title: "Michael J. Sullivan, Deep Learning Theory, §5.2"
      url: "https://mjt.cs.illinois.edu/dlt/index.html"
      locator: "§5.2, piecewise-linear interpolation of $x^2$ by tent-map iterates."
---

## Statement

For every $0<\delta<1$, there is a ReLU network $Q_\delta:[0,1]\to\mathbb R$ such that $Q_\delta(0)=0$, $\|Q_\delta(x)-x^2\|_{L^\infty([0,1])}\le\delta$, and the depth, number of weights, and number of computation units are each at most $C(1+\log(1/\delta))$ for an absolute constant $C$.

## Statement references

[Yarotsky, Proposition 2 and proof: square approximation by tent-map interpolation](https://arxiv.org/pdf/1610.01145)

[Sullivan, §5.2: tent-map square approximation](https://mjt.cs.illinois.edu/dlt/index.html)

## Facts & Assumptions

**Given:** The tent-map network and interval properties in [[lem-relu-tent-iterate-depth]], and $0<\delta<1$.

[F1] For every $q\ge0$, $\tau^q$ is a ReLU network with $2q$ hidden units and $O(q+1)$ weights, and its $2^q$ affine intervals are the uniform dyadic intervals ([[lem-relu-tent-iterate-depth]]).

## Proof

1.1 Let $I_q$ be the linear interpolant of $x^2$ at the dyadic nodes $j2^{-q}$. On each interval of $I_{q-1}$, the difference $I_{q-1}-I_q$ is zero at its endpoints and has height $4^{-q}$ at the midpoint. By [F1], $\tau^q$ is the unit tent on each such interval, so $I_{q-1}-I_q=4^{-q}\tau^q$. Since $I_0(x)=x$, telescoping gives $I_m(x)=x-\sum_{q=1}^m4^{-q}\tau^q(x)$. To implement this with shared computation, set $t_0=x$ and for each $q=1,\ldots,m$ use one hidden layer with $u_q=\rho(2t_{q-1})$ and $v_q=\rho(2t_{q-1}-1)$, then define the affine expression $t_q=u_q-2v_q=\tau(t_{q-1})$. Thus $t_q=\tau^q(x)$ and the $m$ iterates use only $2m$ hidden units in $m$ sequential layers. The final affine output reads the input and all hidden units, with coefficient $1$ on $x$ and contribution $-4^{-q}u_q+2\cdot4^{-q}v_q$ from layer $q$, so it computes $I_m$ with only $O(m+1)$ additional skip connections. [given, F1, algebra, construct]

2.1 On a dyadic interval $[a,b]$ of length $2^{-m}$, linear interpolation of $x^2$ has error $(x-a)(b-x)$, whose maximum is $(b-a)^2/4=4^{-(m+1)}$. Choose $m$ with $4^{-(m+1)}\le\delta$. Then $I_m$ approximates $x^2$ within $\delta$ and $I_m(0)=0$. [step 1.1, algebra, choose]

3.1 The shared sequential construction in step 1.1 computes all required iterates in $m$ hidden layers, and its affine skip readout computes $I_m$ using $O(m+1)$ weights. The resulting network has $O(m+1)$ units, weights, and depth, and $m\le C'(1+\log(1/\delta))$ by the choice of $m$. Taking $Q_\delta=I_m$ proves the claim. [step 1.1, step 2.1, F1, construct] ∎
