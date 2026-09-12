---
id: "thm-weak-topology-is-hausdorff"
kind: "theorem"
title: "Weak topology is hausdorff"
deps: ["lem-basic-weak-neighborhoods", "cor-relative-hahn-banach-dual-norming", "def-hahn-banach-extension-principle-relative"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis (2017); exact harvest in batch coverage"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Teschl, Topics in Real and Functional Analysis (2017); exact harvest in batch coverage"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume HB, the real dominated-extension principle of [[def-hahn-banach-extension-principle-relative]]. The weak topology of every real or complex normed space $X$ is Hausdorff.

## Facts & Assumptions

[F1] The finite disk sets are weak neighborhoods ([[lem-basic-weak-neighborhoods]]).

[F2] Under HB, for each $v\ne0$ there is $f\in X^*$ with $\|f\|=1$ and $f(v)=\|v\|$ ([[cor-relative-hahn-banach-dual-norming]]).

## Proof

**Given:** HB and a real or complex normed space $X$.

1.1 Fix distinct $x,y\in X$. Apply dual norming to $v=x-y\ne0$ to obtain $f\in X^*$ with $|f(x)-f(y)|=\|x-y\|=:d>0$. This is the only use of HB; no simultaneous selection over pairs is needed. [given, F2]

2.1 Set $U=\{z:|f(z-x)|<d/3\}$ and $V=\{z:|f(z-y)|<d/3\}$. These are weak neighborhoods of $x$ and $y$. If $z$ belonged to both, the triangle inequality would give $d\le |f(x-z)|+|f(z-y)|<2d/3$, impossible. Thus $U\cap V=\varnothing$. Every distinct pair is separated; if $X=\{0\}$ there is no such pair. $\square$ [step 1.1, F1, algebra]
