---
id: "ex-locally-convex-separation-by-a-coordinate"
kind: "example"
title: "Coordinate functionals give an explicit uniform separating gap"
status: "draft"
origin: "pipeline"
deps: ["ex-product-scalar-topology-is-locally-convex", "def-locally-convex-topological-vector-space", "thm-product-universal-property", "lem-complex-conjugation-and-modulus-laws"]
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  scraped: []
  references:
    - title: "Theo B\u00fchler and Dietmar Salamon, Functional Analysis (8 June 2017)"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
pipeline_run: "phase-2-next-20"
proof_strategy: "direct"
---

## Example

Fix $i_0\in I$ and real $a<b$. In $\mathbb K^I$ with the product topology, the nonempty closed convex half-spaces
$$A=\{x:\operatorname{Re}x_{i_0}\le a\},\qquad B=\{x:\operatorname{Re}x_{i_0}\ge b\}$$
have a uniform separating gap supplied by $f(x)=x_{i_0}$. Also, any distinct $x,y$ are separated in real part by one coordinate functional multiplied by a unit scalar. These constructions use neither HB nor compactness.

## Facts & Assumptions

**Given:** $i_0\in I$, $a<b$, and $\mathbb K=\mathbb R$ or $\mathbb C$.

[F1] The scalar product space is a Hausdorff locally convex TVS with pointwise operations ([[ex-product-scalar-topology-is-locally-convex]]).

[F2] The continuous dual is closed under scalar multiplication, and real part is continuous and real-linear ([[def-locally-convex-topological-vector-space]]).

[F3] Coordinate projections are continuous ([[thm-product-universal-property]], clause 1).

[F4] Complex conjugation and modulus satisfy $z\overline z=|z|^2$ and multiplicativity ([[lem-complex-conjugation-and-modulus-laws]]).

## Verification

1.1 Pointwise operations give $f(x+y)=f(x)+f(y)$ and $f(cx)=cf(x)$, so the projection $f$ is scalar-linear; it is continuous. Thus $u=\operatorname{Re}f$ is continuous and real-linear. The rays $(-\infty,a]$ and $[b,\infty)$ are closed: their complements are unions of open intervals. Their inverse images under $u$ are therefore closed, since inverse images of their open complements are open. They are convex because real-linear maps preserve real convex combinations and each ray is convex. [F1, F2, F3]

2.1 The constant functions with values $a$ and $b$ belong to $A$ and $B$, respectively, so both sets are nonempty. Their intersection is empty since $b>a$. Set $\alpha=(a+b)/2$ and $\varepsilon=(b-a)/2>0$. Then for every $x\in A,y\in B$, $$\operatorname{Re}f(x)\le a=\alpha-\varepsilon<\alpha+\varepsilon=b\le\operatorname{Re}f(y).$$ The constant-one function has $f(1)=1$, so $f$ is nonzero. [step 1.1, algebra]

3.1 For distinct $x,y$, fix one index $i$ with $z=x_i-y_i\ne0$. Over $\mathbb C$ put $c=\overline z/|z|$; then $|c|=1$ and $cz=|z|>0$. Over $\mathbb R$ put $c=z/|z|$, which gives the same identities. Thus $g(w)=cw_i$ is continuous and scalar-linear, and $\operatorname{Re}g(x)-\operatorname{Re}g(y)=|z|>0$. The index and unit scalar are chosen for this one supplied pair; there is no simultaneous choice. If $I$ is empty there is no $i_0$ and no pair of distinct functions, so the respective hypotheses do not arise. [F1, F2, F3, F4, step 2.1] ∎