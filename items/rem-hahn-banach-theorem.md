---
id: rem-hahn-banach-theorem
kind: remark
title: "Hahn-Banach theorem (dominated extension of linear functionals)"
status: draft
origin: session
proved_here: false
deps: []
justified_by: []
forward_refs: [thm-zorn]
aliases: []
landmark: true
short: "every dominated functional extends"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Hahn-Banach theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hahn%E2%80%93Banach_theorem"
    - title: "Hahn-Banach theorem (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Hahn-Banach_theorem"
    - title: "F. Albiac and N. J. Kalton, Topics in Banach Space Theory, 2nd ed., Graduate Texts in Mathematics 233, Springer (2016)"
      url: "https://doi.org/10.1007/978-3-319-31557-7"
pipeline_run: null
---

## Statement

Let $X$ be a real vector space and let $p \colon X \to \mathbb{R}$ be **sublinear**, that is,
$p(x + y) \le p(x) + p(y)$ and $p(tx) = t\,p(x)$ for all $x, y \in X$ and all real $t \ge 0$.
Let $M \subseteq X$ be a linear subspace and let $f \colon M \to \mathbb{R}$ be linear with
$f(x) \le p(x)$ for every $x \in M$. Then there is a linear $F \colon X \to \mathbb{R}$ with
$F|_M = f$ and $F(x) \le p(x)$ for every $x \in X$.

**Normed form.** If $X$ is a normed space over $\mathbb{R}$ or $\mathbb{C}$, $M \subseteq X$ is a
subspace and $f \colon M \to \mathbb{K}$ is a bounded linear functional, then $f$ has a bounded
linear extension $F$ to all of $X$ with $\lVert F \rVert = \lVert f \rVert$. Two consequences are
used constantly: for every $x \neq 0$ there is $F \in X^{*}$ with $\lVert F \rVert = 1$ and
$F(x) = \lVert x \rVert$; and therefore the dual $X^{*}$ separates the points of $X$ and
$\lVert x \rVert = \sup \{ |F(x)| : F \in X^{*},\ \lVert F \rVert \le 1 \}$.

## Remarks

**Not proved in this library.** The library has no normed space or dual space track yet, so this
statement is recorded with a citation rather than established. Nothing here rests on it.

**What would prove it.** Two ingredients. First, a one step extension lemma: if $f \le p$ on $M$
and $x_0 \notin M$, the two families of inequalities that a value $F(x_0)$ must satisfy leave a
nonempty closed interval of admissible values, precisely because $p$ is subadditive. Second, a
maximal element of the partially ordered set of dominated extensions, ordered by extension, which
Zorn's lemma supplies; that half the library does prove, in [[thm-zorn]]. The complex and normed
cases then follow by the Bohnenblust and Sobczyk device, recovering a complex functional from its
real part as $f(x) = \operatorname{Re} f(x) - i \operatorname{Re} f(ix)$. What is missing here is
therefore not the choice principle but the analytic vocabulary: normed spaces, bounded operators
and duals.

**Why it matters here.** Every duality statement downstream depends on this one. That $X^{*}$
separates points is what makes the weak topology Hausdorff, what makes the canonical embedding into
the bidual isometric, and what makes reflexivity a meaningful notion at all. It is also the single
place where analysis in this library would consume a choice principle strictly stronger than
anything the elementary theory needs, which is why its cost is recorded separately.
