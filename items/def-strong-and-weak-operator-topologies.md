---
id: "def-strong-and-weak-operator-topologies"
kind: "definition"
title: "Strong and weak operator topologies"
deps: ["def-space-of-bounded-linear-operators", "def-weak-topology-on-a-normed-space", "def-initial-and-final-topology"]
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
verification:
  audited: 2026-09-13
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
status: published
origin: "pipeline"
---

## Definition

Let $X,Y$ be normed spaces over the same field $\mathbb K\in\{\mathbb R,\mathbb C\}$. On $\mathcal B(X,Y)$, the bounded scalar-linear operators of [[def-space-of-bounded-linear-operators]], define:

- The **strong operator topology** (SOT) is the initial topology of all maps $T\mapsto Tx$ to normed $Y$, for $x\in X$.
- The **weak operator topology** (WOT) is the initial topology of all scalar maps $T\mapsto f(Tx)$, for $x\in X$ and $f\in Y^*$.

These topologies exist by [[def-initial-and-final-topology]]. Equivalently WOT is initial for $T\mapsto Tx$ with the weak topology on $Y$ from [[def-weak-topology-on-a-normed-space]]. At $T$, basic neighborhoods impose finitely many inequalities $\|(S-T)x_j\|<\varepsilon$ for SOT, or $|f_j((S-T)x_j)|<\varepsilon$ for WOT, with $\varepsilon>0$. Empty lists give the whole operator space.

For a net of bounded operators with specified limit $T\in\mathcal B(X,Y)$, SOT convergence means $\|(T_i-T)x\|\to0$ for every fixed $x$, and WOT convergence means $f(T_ix)\to f(Tx)$ for every fixed $x,f$. Both equivalences follow by testing one coordinate and then using a common upper bound for the finitely many eventual indices in a basic neighborhood. No uniformity in $x$ is part of either definition. These are choice-free constructions, also when one space is zero and the operator space is a singleton.
