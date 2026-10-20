---
id: ex-changing-comparator-path-length
kind: example
title: "A changing comparator separates static and dynamic regret"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps: [def-online-decision-protocol, def-static-dynamic-and-strongly-adaptive-regret]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Elad Hazan, Introduction to Online Convex Optimization, second edition"
      url: "https://arxiv.org/pdf/1909.05207"
      locator: "§§10.1–10.2, PDF pp. 190–193: dynamic regret, path length, and interval regret."
verification:
  precheck: pass
---

## Example

Let $K=[0,1]$ with norm $|\cdot|$, horizon $T=3$, losses $f_1(x)=x$, $f_2(x)=1-x$, and $f_3(x)=x$, and learner choices $x_1=x_2=x_3=1/2$. The realized static regret is $1/2$. For the changing comparator $u_1=0,u_2=1,u_3=0$, the dynamic regret is $3/2$ and the path length is $3$. The maximum static regret over all nonempty contiguous intervals is $1/2$.

## Example references

[[def-online-decision-protocol]]: the horizon, actions, and round losses form a finite-horizon online protocol.

[[def-static-dynamic-and-strongly-adaptive-regret]]: static, dynamic, path-length, interval, and adaptive regret conventions.

[Elad Hazan, *Introduction to Online Convex Optimization*, second edition](https://arxiv.org/pdf/1909.05207): §§10.1–10.2, PDF pp. 190–193.

## Facts & Assumptions

**Given:** $K=[0,1]$, $T=3$, $f_1(x)=x$, $f_2(x)=1-x$, $f_3(x)=x$, learner choices $x_t=1/2$, and comparator sequence $(0,1,0)$.

[F1] An online protocol fixes the horizon and action set; each learner choice uses only earlier revealed history and available private randomness and is made before its current loss is observed. The environment may fix each loss before the choice or select it afterward, as specified by its model ([[def-online-decision-protocol]]).

[F2] Static regret compares with one fixed minimizer; dynamic regret compares with a supplied sequence; path length is $1+\sum_{t<T}\|u_t-u_{t+1}\|$; interval regret minimizes cumulative loss over one comparator on that interval ([[def-static-dynamic-and-strongly-adaptive-regret]]).

## Verification

1.1 The learner's losses are $1/2,1/2,1/2$, so their sum is $3/2$. For any fixed $u\in[0,1]$, the cumulative loss is $u+(1-u)+u=1+u$, whose minimum is $1$ at $u=0$. Thus static regret is $3/2-1=1/2$. [given, F1, F2, algebra]

1.2 The comparator losses are $f_1(0)=0$, $f_2(1)=0$, and $f_3(0)=0$, so its total loss is zero and dynamic regret is $3/2$. Its path length is $1+|0-1|+|1-0|=3$. [given, F2, algebra]

2.1 The singleton interval regrets are $1/2$ on each of $[1,1]$, $[2,2]$, and $[3,3]$, because each learner loss is $1/2$ and each corresponding linear loss has minimum $0$. On $[1,2]$ and $[2,3]$, the cumulative loss is identically $1$, as $f_1+f_2=1$ and $f_2+f_3=1$, so both regrets are zero. On $[1,3]$, the cumulative loss is $1+x$, its minimum is $1$, and the learner incurs $3/2$, so its regret is $1/2$. The maximum over these six nonempty contiguous intervals is therefore $1/2$. [given, F2, algebra] ∎
