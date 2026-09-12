---
id: "def-weak-convergence-of-nets-and-sequences"
kind: "definition"
title: "Weak convergence of nets and sequences"
deps: ["def-weak-topology-on-a-normed-space", "def-directed-set-and-net", "def-net-convergence-and-cluster-point"]
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
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
---

## Definition

Let $X$ be a real or complex normed space. Let $I$ be a nonempty directed preorder and $(x_i)_{i\in I}$ a net in $X$ ([[def-directed-set-and-net]]). For $x\in X$, write $x_i\rightharpoonup x$ and say the net **converges weakly to $x$** when it converges to $x$ in $\sigma(X,X^*)$ ([[def-weak-topology-on-a-normed-space]], [[def-net-convergence-and-cluster-point]]). Equivalently,

$$\forall f\in X^*\ \forall\varepsilon>0\ \exists i_0\in I\ \forall i\ge i_0:\quad |f(x_i)-f(x)|<\varepsilon.$$

Indeed, topological convergence implies each of these eventual conditions because the inverse disk is a neighborhood. Conversely, a neighborhood contains a finite intersection of inverse scalar neighborhoods containing $x$. Coordinate convergence gives an eventual index for each of the finitely many conditions; directedness gives a common upper bound for them, after which the whole intersection contains the net. For the empty intersection use any index of the nonempty $I$. This proves the equivalence without a choice axiom.

A **weakly convergent sequence** is this definition with $I=\mathbb N$ in its usual order. A constant net converges weakly to its value, including in the zero space. The specified limit must be a point of $X$; without a separation hypothesis uniqueness is not part of the definition. Weak closure continues to mean topological closure, not merely the set of limits of sequences.
