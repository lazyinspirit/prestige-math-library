---
id: "lem-basic-weak-neighborhoods"
kind: "lemma"
title: "Basic weak neighborhoods"
deps: ["def-weak-topology-on-a-normed-space"]
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

For a real or complex normed space $X$, a weak neighborhood base at $x\in X$ consists of

$$U(x;f_1,\ldots,f_m;\varepsilon)=\{y\in X: |f_j(y-x)|<\varepsilon\ (1\le j\le m)\},\qquad \varepsilon>0,\quad f_j\in X^*.$$

Here $m=0$ is allowed and gives $X$. The weak topology is a locally convex vector topology: addition and joint scalar multiplication are continuous, and the displayed zero neighborhoods are convex and balanced.

## Facts & Assumptions

[F1] [[def-weak-topology-on-a-normed-space]] defines the weak topology by inverse images of scalar open sets; finite intersections form a basis.

## Proof

**Given:** $X$, $x$, a finite list of bounded scalar-linear functionals, and positive radii.

1.1 Every displayed $U$ is a finite intersection of inverse images of open disks centered at $f_j(x)$, so is weakly open and contains $x$. Conversely, a finite subbasic intersection containing $x$ contains inverse images of disks of radii $r_j>0$ about $f_j(x)$; take $\varepsilon=\min_j r_j$. With no conditions the intersection is $X$. Thus these sets form a neighborhood base. [F1, given]

2.1 Put $p(v)=\max_j|f_j(v)|$, taking $p=0$ for an empty list. Scalar linearity and the triangle inequality give $p(v+w)\le p(v)+p(w)$ and $p(av)=|a|p(v)$. Consequently $\{p<\varepsilon\}$ is balanced and real-convex. Moreover $p((v+w)-(v_0+w_0))<\varepsilon$ whenever $p(v-v_0),p(w-w_0)<\varepsilon/2$. This proves continuity of addition at every pair. [step 1.1, algebra]

3.1 At $(a_0,v_0)$ write $av-a_0v_0=a(v-v_0)+(a-a_0)v_0$. Require $|a-a_0|<\min(1,\varepsilon/(2(p(v_0)+1)))$ and $p(v-v_0)<\varepsilon/(2(|a_0|+1))$. Then $p(av-a_0v_0)<\varepsilon$. These are product neighborhoods and work also at $a_0=0$ and $v_0=0$. Thus scalar multiplication is jointly continuous, and the convex zero-neighborhood base proves local convexity. $\square$ [step 2.1, algebra]
