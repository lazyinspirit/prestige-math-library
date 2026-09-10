---
id: "ex-a-riemannian-distance-with-no-cross-component-finite-value"
kind: "example"
title: "A riemannian distance with no cross component finite value"
deps: ["def-extended-riemannian-distance-on-a-disconnected-manifold", "thm-newton-leibniz-with-interior-derivative"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Example

On $M=\mathbb R\times\{0,1\}$ with metric $dx^2$ on each component, $d((x,i),(y,i))=|x-y|$ and $d((x,0),(y,1))=+\infty$.

## Facts & Assumptions

**Given:** The two disjoint Euclidean lines with their disjoint-union smooth structure.

[F1] [[def-extended-riemannian-distance-on-a-disconnected-manifold]]: The **extended Riemannian distance** on arbitrary $M$ is the componentwise Riemannian distance when two points are in the same component, and $+\infty$ otherwise. Within each component use thm-riemannian-distance-is-a-metric. Components are open, since small coordinate balls are connected. A continuous curve cannot meet two components because its connected interval image is connected, so the cross-component curve family is empty, with $\inf\varnothing=+\infty$. This is an extended metric: if two endpoints are in different components, any third point is in a different component from at least one of them, so the triangle inequality has infinite right side. It is a finite metric precisely when there are no distinct components. Empty and singleton manifolds retain their unique distances.

[F2] [[thm-newton-leibniz-with-interior-derivative]]: Let $a<b$. Suppose $G:[a,b]\to\mathbb R$ is continuous on $[a,b]$ and differentiable on $(a,b)$. If $f:[a,b]\to\mathbb R$ is Riemann integrable and $$f(x)=G'(x)\qquad(a<x<b),$$ then $$\int_a^b f=G(b)-G(a).$$ No derivative of $G$ at either endpoint is assumed, and the two endpoint values assigned to the integrable extension $f$ do not enter the conclusion.

## Verification

**Proof technique:** direct.

1.1 The two lines are disjoint open-and-closed components; their usual charts give a Hausdorff second-countable smooth one-manifold and metric coefficient $1>0$. A continuous path cannot meet both components, because their inverse images would separate its connected interval. Hence the cross-component admissible family is empty and its length infimum is $+\infty$. In particular $d((0,0),(0,1))=+\infty$. [F1, given]

2.1 Within a component, an admissible path has length $\int|\gamma'|\ge|\int\gamma'|=|y-x|$, by Newton–Leibniz on its finitely many smooth pieces. The path $t\mapsto(x+t(y-x),i)$ for $0\le t\le1$ attains this bound. The same-component infimum is therefore $|y-x|$; for example $d((0,0),(3,0))=3$. [F1, F2, step 1.1] ∎

## Source locator

Lee, pp. 337–338, connected distance and Euclidean calculation; cross-component infinity follows from the declared extended-distance convention.
