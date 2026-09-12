---
id: "lem-basic-weak-star-neighborhoods"
kind: "lemma"
title: "Basic weak star neighborhoods"
deps: ["def-weak-star-topology"]
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

For a real or complex normed space $X$, the sets

$$U(f;x_1,\ldots,x_m;\varepsilon)=\{g\in X^*: |(g-f)(x_j)|<\varepsilon\ (1\le j\le m)\},\qquad \varepsilon>0,$$

form a weak-star neighborhood base at $f$. The empty list gives $X^*$. This topology is Hausdorff and locally convex, and addition and joint scalar multiplication are continuous, without HB or any choice assumption.

## Facts & Assumptions

[F1] The weak-star topology is the initial topology of evaluations, with the displayed finite-evaluation basis ([[def-weak-star-topology]]).

## Proof

**Given:** a real or complex normed space $X$.

1.1 Each displayed set is a finite intersection of inverse scalar disks. Conversely, every finite intersection of subbasic sets containing $f$ contains such a set by shrinking each scalar open set to a disk and taking the smallest of the finitely many positive radii. The empty intersection needs no shrinking. [F1, given]

2.1 For a finite list set $p(h)=\max_j|h(x_j)|$, with $p=0$ for an empty list. Linearity gives $p(h+k)\le p(h)+p(k)$ and $p(ah)=|a|p(h)$. Hence its open balls are balanced and real-convex; the bounds $p(h-h_0),p(k-k_0)<\varepsilon/2$ imply $p(h+k-h_0-k_0)<\varepsilon$, proving addition is continuous. [step 1.1, algebra]

3.1 To control scalar multiplication at $(a_0,h_0)$, use $p(ah-a_0h_0)\le |a|p(h-h_0)+|a-a_0|p(h_0)$. The requirements $|a-a_0|<\min(1,\varepsilon/(2(p(h_0)+1)))$ and $p(h-h_0)<\varepsilon/(2(|a_0|+1))$ make this less than $\varepsilon$. Thus the topology is a locally convex vector topology. [step 2.1, algebra]

4.1 If $f\ne g$ as functions, some $x\in X$ has $f(x)\ne g(x)$. Put $d=|f(x)-g(x)|>0$. The evaluation disks of radius $d/3$ about these two values have disjoint inverse images containing $f$ and $g$, since a common member would give $d<2d/3$. This proves Hausdorffness; on a singleton dual it is vacuous. No norming principle is involved. $\square$ [step 1.1, algebra]
