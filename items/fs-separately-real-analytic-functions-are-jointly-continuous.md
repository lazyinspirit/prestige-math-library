---
id: fs-separately-real-analytic-functions-are-jointly-continuous
kind: false-statement
title: "A bounded function of two real variables whose every coordinate slice is real analytic is continuous"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-real-analytic-function, thm-real-analytic-functions-closed-under-algebra-quotients-and-composition, thm-locally-bounded-separate-holomorphy, def-separately-holomorphic-function, def-metric-continuity, def-vector-valued-functions-limits-and-continuity, cor-cauchy-inequalities]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, v4.4, Ex. 1.1.5"
      url: "https://www.jirka.org/scv/scv.pdf"
pipeline_run: null
---

## Statement

**False claim:** every bounded function $f:\mathbb R^2\to\mathbb R$ whose slices
$x\mapsto f(x,b)$ and $y\mapsto f(a,y)$ are real analytic for every fixed real
$a,b$ is continuous on $\mathbb R^2$.

The point of the witness is exactly that the several-variable holomorphic theorem
"locally bounded and separately holomorphic implies holomorphic" has no parallel
with "real analytic" in place of "holomorphic".

## Facts & Assumptions

**Given:** The witness

$$f(x,y)= \begin{cases} \dfrac{xy}{x^2+y^2}, & (x,y)\ne(0,0),\\[6pt] 0, & (x,y)=(0,0). \end{cases}$$

[L1] A locally bounded separately holomorphic function is holomorphic ([[thm-locally-bounded-separate-holomorphy]]), and separate holomorphy means one-variable holomorphy on every coordinate slice ([[def-separately-holomorphic-function]]).

[L2] Sums, products, quotients by a nowhere-zero function, and compositions preserve real analyticity on open real domains ([[thm-real-analytic-functions-closed-under-algebra-quotients-and-composition]], [[def-real-analytic-function]]).

[L3] Continuity at a point is the $\varepsilon$-$\delta$ condition in metric spaces ([[def-metric-continuity]], [[def-vector-valued-functions-limits-and-continuity]]).

[L4] The Cauchy inequalities bound one-variable holomorphic derivatives by a sup norm on a circle ([[cor-cauchy-inequalities]]).

## Refutation

**Proof technique:** direct.

1.1 The false claim is the real-variable analogue of [L1], so refuting it shows that the several-variable holomorphic theorem is genuinely complex-analytic and not a formal separate-regularity statement. [L1]

1.2 The displayed formula defines a real-valued function on all of $\mathbb R^2$. [given]

2.1 The function is bounded: for $(x,y)\ne(0,0)$, the inequality $2|xy|\le x^2+y^2$ gives $|f(x,y)|\le1/2$, and at the origin $f(0,0)=0$, so $|f(x,y)|\le1/2$ everywhere. [step 1.2, algebra]

2.2 The function is not continuous at $(0,0)$: if it were, then by [L3] applied with $\varepsilon=1/4$ there would be $\delta>0$ such that $\|(x,y)\|<\delta$ implies $|f(x,y)|<1/4$; but for any real $t$ with $0<|t|<\delta/\sqrt2$ one has $\|(t,t)\|=\sqrt2\,|t|<\delta$ and $f(t,t)=1/2$, a contradiction. [step 1.2, L3]

3.1 Fix $b\ne0$. Then the slice $x\mapsto f(x,b)=bx/(x^2+b^2)$ is a quotient of polynomials, and the denominator never vanishes on $\mathbb R$, so [L2] makes this slice real analytic on all of $\mathbb R$. The same argument applies to the slice $y\mapsto f(a,y)$ when $a\ne0$. [step 2.1, L2]

4.1 If $b=0$, then $f(x,0)=0$ for every real $x$, so the slice $x\mapsto f(x,0)$ is identically zero and therefore real analytic; by the symmetry $f(x,y)=f(y,x)$, the same is true of the slice $y\mapsto f(0,y)$. Thus every coordinate slice of $f$ is real analytic. [step 1.2, step 3.1, L2]

5.1 So this bounded function has real-analytic slices in each variable but is not jointly continuous, and the false claim fails. The published B-page item named `cex-partial-derivatives-without-continuity` uses the same witness for a different failure, but it is homed on an examples page and is therefore named here only in prose, without a wikilink or a dependency edge. The complex case is different precisely because [L4] turns a one-variable bound on a holomorphic slice into a uniform derivative bound, and no real-analytic hypothesis supplies such a bound. [step 4.1, step 2.2, L4] ∎
