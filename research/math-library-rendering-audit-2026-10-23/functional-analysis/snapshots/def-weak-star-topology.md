---
id: def-weak-star-topology
kind: definition
title: "The weak-star topology from finite evaluations"
status: published
origin: pipeline
deps: ["def-dual-space-of-a-normed-space", "def-initial-and-final-topology"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis, Example 3.9(i), p.122; Lemma 3.6(i), pp.119–120 (real source; complex disk version via the same initial-topology construction)"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
---

## Definition

Let $\mathbb K=\mathbb R$ or $\mathbb C$. For a normed $X$ with continuous dual $X^*$ from [[def-dual-space-of-a-normed-space]], the **weak-star topology** $\sigma(X^*,X)$ is the [[def-initial-and-final-topology|initial topology]] of all evaluations $f\mapsto f(x)$ into $\mathbb K$ with its usual topology. At $f_0$, a neighbourhood basis consists of $$U(f_0;x_1,\ldots,x_n;\varepsilon)=\{f\in X^*: |(f-f_0)(x_j)|<\varepsilon\ (1\le j\le n)\},$$ where $n$ is finite and $\varepsilon>0$. For $n=0$ the set is all of $X^*$. Finite intersections of inverse images of scalar open sets form the initial-topology basis; at the given point, finitely many disks can be refined using their smallest positive radius. Weak-star closure means closure in this topology, not merely sequential closure.
