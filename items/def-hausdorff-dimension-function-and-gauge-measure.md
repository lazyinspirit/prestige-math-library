---
id: def-hausdorff-dimension-function-and-gauge-measure
kind: definition
title: "Dimension functions and Hausdorff gauge measures"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-hausdorff-measure
verification:
  precheck: n/a
sources:
  references:
    - title: "Beresnevich and Velani, A Mass Transference Principle and the Duffin–Schaeffer Conjecture for Hausdorff Measures, §2.1"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v164-n3-p06.pdf"
    - title: "Beresnevich, Ramírez, and Velani, Metric Diophantine Approximation: Aspects of Recent Work, §3.1"
      url: "https://eprints.whiterose.ac.uk/id/eprint/113590/1/Metric_Diophantine_Approximation._Aspects_of_recent_work.pdf"
---

## Definition

A dimension function is a continuous nondecreasing function $f:[0,\infty)\to[0,\infty)$ with $f(0)=0$ and $f(r)>0$ for every $r>0$. If $(X,d)$ is a metric space and $E\subseteq X$, a countable family of closed balls $B_i=B(x_i,r_i)$ with $r_i\le\delta$ and $E\subseteq\bigcup_iB_i$ is a $δ$-ball cover of $E$. Define

$$\mathcal H^f_\delta(E):=\inf\left\{\sum_i f(r_i): (B_i)_i\text{ is a }\delta\text{-ball cover of }E\right\},\qquad \mathcal H^f(E):=\lim_{\delta\downarrow0}\mathcal H^f_\delta(E).$$

This page uses the ball-radius cost $f(r)$, as in the mass-transference sources. The library's power Hausdorff measure uses arbitrary covers with cost $(\operatorname{diam}U)^s$; for $f(r)=r^s$, the two conventions have the same null sets and Hausdorff dimension, and their values differ by at most the factor $2^s$ because a radius-$r$ ball has diameter at most $2r$ and a set of diameter $d$ lies in a radius-$d$ ball.

## Definition references

[Beresnevich and Velani, *A Mass Transference Principle and the Duffin–Schaeffer Conjecture for Hausdorff Measures*, §2.1](https://annals.math.princeton.edu/wp-content/uploads/annals-v164-n3-p06.pdf)

[Beresnevich, Ramírez, and Velani, *Metric Diophantine Approximation: Aspects of Recent Work*, §3.1](https://eprints.whiterose.ac.uk/id/eprint/113590/1/Metric_Diophantine_Approximation._Aspects_of_recent_work.pdf)
