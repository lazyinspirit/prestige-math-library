---
id: "def-weak-star-convergence"
kind: "definition"
title: "Weak star convergence"
deps: ["lem-basic-weak-star-neighborhoods", "def-directed-set-and-net", "def-net-convergence-and-cluster-point"]
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

Let $X$ be a real or complex normed space and $(f_i)_{i\in I}$ a net in $X^*$ indexed by a nonempty directed preorder ([[def-directed-set-and-net]]). For a specified $f\in X^*$, write $f_i\overset{*}{\rightharpoonup}f$ if $f_i$ converges to $f$ in the weak-star topology. By [[def-net-convergence-and-cluster-point]] and [[lem-basic-weak-star-neighborhoods]], this means equivalently

$$\forall x\in X\ \forall\varepsilon>0\ \exists i_0\in I\ \forall i\ge i_0:\quad |f_i(x)-f(x)|<\varepsilon.$$

Topological convergence implies each displayed eventual condition by taking a one-evaluation neighborhood. Conversely, for a finite-evaluation neighborhood choose the finitely many eventual indices and take a common upper bound in $I$; past it all inequalities hold. An empty coordinate list imposes no condition. This proves both directions without any choice axiom. For sequences take $I=\mathbb N$.

The asserted limit belongs to the bounded dual: this definition does not identify an arbitrary pointwise limit of bounded functionals with a member of $X^*$. The limit, when it exists, is unique, since equality of all evaluations is equality of functions. Constant nets converge to their constant value, also when $X=\{0\}$.
