---
id: def-c-k-map-between-banach-spaces
kind: definition
title: C k map between Banach spaces
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-frechet-derivative-between-banach-spaces, def-operator-norm, def-space-of-bounded-linear-operators, thm-bounded-operator-space-is-banach, def-banach-space, def-metric-continuity, lem-composition-operator-norm-inequality, thm-bounded-bilinear-map-equivalences]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-22
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Zuoqin Wang, Lecture 6 — §2.3"
      url: "https://www.math.ntu.edu.tw/~dragon/Lecture%20Notes/Banach%20Calculus%202012.pdf"
---

## Definition

Let $X$ and $Y$ be real Banach spaces and let $U \subseteq X$ be open. All
derivatives below are Fréchet derivatives
([[def-frechet-derivative-between-banach-spaces]]), and all continuity is with
respect to the norm metrics ([[def-metric-continuity]]).

* $f : U \to Y$ is of **class $C^0$** when $f$ is continuous on $U$.
* $f$ is of **class $C^1$** when $f$ is differentiable on $U$ and its derivative
  map $Df : U \to \mathcal B(X,Y)$ is continuous for the operator norm on
  $\mathcal B(X,Y)$ ([[def-operator-norm]],
  [[def-space-of-bounded-linear-operators]]).
* For $k \ge 1$ define the spaces of iterated derivative values by
  $$\mathcal B_0 := Y, \qquad \mathcal B_{k} := \mathcal B(X,\mathcal B_{k-1}).$$
  Each $\mathcal B_k$ is a real Banach space for the operator norm, by induction
  on $k$ from [[thm-bounded-operator-space-is-banach]]. Then $f$ is of **class
  $C^{k}$** when $f$ is of class $C^{k-1}$, the map
  $D^{k-1}f : U \to \mathcal B_{k-1}$ is differentiable on $U$, where
  $D^0f := f$, and the **$k$-th derivative**
  $D^k f : U \to \mathcal B_k$ is continuous for the operator norm on
  $\mathcal B_k$. We write $D^kf(x)$ for the value at $x$.
* $f$ is of **class $C^\infty$** when $f$ is of class $C^k$ for every $k \ge 0$.

For open sets $U \subseteq X$ and $V \subseteq Y$, a map $f : U \to V$ is a
**$C^k$ diffeomorphism** when it is a bijection, $f$ is of class $C^k$ and
$f^{-1} : V \to U$ is of class $C^k$; likewise with $C^\infty$ in place of
$C^k$.

## Remarks

- **Currying and the joint norm.** The space $\mathcal B_k$ of the definition is
  canonically identified with the space of bounded $k$-linear maps
  $X^k \to Y$ by currying, $T \leftrightarrow (h_1,\dots,h_k) \mapsto
  (\cdots((Th_1)h_2)\cdots)h_k$, and under this identification the operator norm
  on $\mathcal B_k$ is the least constant $C$ with
  $\|T(h_1,\dots,h_k)\| \le C\|h_1\|\cdots\|h_k\|$. Only the iterated-operator
  description is used on this page, so the identification is recorded as a
  reading convention rather than developed.

- **Continuity of the $k$-th derivative is an operator-norm condition.** It is
  the continuity of $x \mapsto D^kf(x)$ in the norm of $\mathcal B_k$; this is
  strictly stronger than the pointwise continuity of each scalar or vector map
  $x \mapsto D^kf(x)(h_1,\dots,h_k)$ for fixed $h_i$. The definition uses the
  operator norm, exactly as the sources do, and the inverse function theorem
  below is proved for this notion.

- **$C^1$ has the chain rule, so the class is stable under composition for
  $k=1$.** If $f : U \to V$ and $g : V \to W$ are of class $C^1$ with
  $V$ open, then $g \circ f$ is of class $C^1$: it is differentiable by the
  chain rule ([[thm-chain-sum-product-and-composition-rules-for-banach-derivatives]]),
  its derivative is $D(g\circ f)(x) = Dg(f(x))\,Df(x)$, and this is continuous
  in $x$ because $x \mapsto (Dg(f(x)), Df(x))$ is continuous and operator
  multiplication is a jointly continuous bilinear operation
  ([[thm-bounded-bilinear-map-equivalences]],
  [[lem-composition-operator-norm-inequality]]). The corresponding statement
  for $C^k$ with $k \ge 2$ is an induction of the same shape, using the higher
  chain rule; it is not developed here because no item on this page beyond the
  $C^1$ statements consumes it, and nothing below asserts it.

- **Linear and affine maps.** A bounded linear $T : X \to Y$ is of class
  $C^\infty$ on $X$, all of whose derivatives equal $T$ at the first step and
  $0$ afterwards; constant maps are of class $C^\infty$ with derivative $0$.
  Consequently a $C^k$ map followed or preceded by a bounded linear isomorphism
  between open sets is again of class $C^k$, a reduction used in the inverse
  function theorem.

- **Where this definition is consumed.** The inverse and implicit function
  theorems state their conclusions in this class of regularity, and the
  countable-base Banach manifolds defined later on this page use exactly this
  notion for their transition maps and coordinate representatives.
