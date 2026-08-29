---
id: def-polar-surface-measure-on-the-unit-sphere
kind: definition
title: "The polar surface set function on the unit sphere"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-borel-products-of-euclidean-spaces-are-euclidean-borel, thm-borel-sigma-algebra-of-a-subspace-is-the-trace, thm-borel-sets-are-lebesgue-measurable, thm-continuous-preimages-of-borel-sets-are-borel, def-borel-sigma-algebra, def-countable-choice]
verification:
  precheck: n/a
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Theorem 2.49"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Definition

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Fix $n \ge 1$
and write
$$S^{n-1}:=\{\omega \in \mathbb R^n : |\omega|=1\}.$$
Let
$$\Phi:\mathbb R^n\setminus\{0\}\longrightarrow(0,\infty)\times S^{n-1},\qquad \Phi(x)=(|x|,x/|x|).$$
This map is continuous. If $E\subseteq S^{n-1}$ is Borel, then
$(0,1]\times E$ is Borel and
$$\{r\omega:\omega\in E,\ 0<r\le1\}=\Phi^{-1}((0,1]\times E)$$
is Borel in $\mathbb R^n\setminus\{0\}$ by
[[thm-continuous-preimages-of-borel-sets-are-borel]], hence Borel in
$\mathbb R^n$ by [[thm-borel-sigma-algebra-of-a-subspace-is-the-trace]]. It is
therefore Lebesgue measurable by [[thm-borel-sets-are-lebesgue-measurable]].
Define
$$\sigma(E):=n\,\lambda_n(\{r\omega : \omega \in E,\ 0<r\le 1\}).$$

The next theorem proves that this is a Borel measure on $S^{n-1}$ and that it
is exactly the surface measure needed for polar coordinates.
