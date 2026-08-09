---
id: lem-algebra-of-continuous-real-maps-on-a-space
kind: lemma
title: "Sums, products, absolute values, finite maxima and minima, and quotients of continuous real-valued maps on a topological space are continuous where defined"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-continuous-map-top, def-product-topology, def-subspace-topology-top, thm-product-universal-property, thm-continuity-characterisations-top, lem-real-line-is-a-metric-space, def-zero-sets-and-cozero-sets]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "J. Robbin, Partitions of Unity"
      url: "https://people.math.wisc.edu/~jwrobbin/partitions_of_unity.pdf"
    - title: "S. Semmes, Topology notes, Sections 5.13–5.14 (Rice University)"
      url: "https://math.rice.edu/~semmes/math443b.pdf"
    - title: "Continuity notes (University of California, Berkeley)"
      url: "https://math.berkeley.edu/~giventh/10415.html"
pipeline_run: null
---

## Statement

Let $f,g:X\to\mathbb R$ be continuous maps from a topological space. Then
$f+g$, $fg$, $|f|$, $\max(f,g)$, and $\min(f,g)$ are continuous. On the open
cozero set $\operatorname{coz}(g)$, the quotient $f/g$ is continuous. The same
holds for every finite sum, product, maximum, or minimum of continuous
real-valued maps.

## Facts & Assumptions

**Given:** A topological space $X$ and continuous maps $f,g:X\to\mathbb R$.

[L1] A map into a product is continuous exactly when its coordinate maps are continuous, compositions of continuous maps are continuous, and a map whose range lies in a subspace is continuous into that subspace exactly when it is continuous into the ambient space ([[thm-product-universal-property]], [[thm-continuity-characterisations-top]], [[def-subspace-topology-top]]).

[L2] The usual metric on $\mathbb R$ is $d(s,t)=|s-t|$ ([[lem-real-line-is-a-metric-space]]).

[F1] $\operatorname{coz}(g)=\{x:g(x)\ne0\}$ is open for continuous $g$ ([[def-zero-sets-and-cozero-sets]]).

## Proof

**Proof technique:** direct.

1.1 Addition is continuous at $(a,b)$ because $|s-a|,|t-b|<\varepsilon/2$ gives $|(s+t)-(a+b)|<\varepsilon$. Multiplication is continuous there: after requiring $|t-b|<1$, one has $$|st-ab|\le |s-a||t|+|a||t-b| < |s-a|(|b|+1)+|a||t-b|,$$ which is less than $\varepsilon$ when both coordinate errors are smaller than $\varepsilon/(2(|a|+|b|+1))$. These coordinate conditions describe product neighbourhoods, so both operations are continuous. [L2]

2.1 The reverse triangle inequality $\big||s|-|t|\big|\le |s-t|$ makes absolute value continuous. Consequently $$\max\{s,t\}=\frac{s+t+|s-t|}{2},\qquad \min\{s,t\}=\frac{s+t-|s-t|}{2}$$ are continuous by step 1.1 and composition. [step 1.1, L1, L2]

2.2 Reciprocal is continuous at $b\ne0$: if $|t-b|<|b|/2$, then $|t|>|b|/2$ and $$\left|\frac1t-\frac1b\right| =\frac{|t-b|}{|t||b|}<\frac{2|t-b|}{|b|^2}.$$ Thus division $(s,t)\mapsto s/t$ is the product of $s$ and $1/t$ and is continuous on $\mathbb R\times(\mathbb R\setminus\{0\})$; moreover $\operatorname{coz}(g)$ is open by [F1]. [step 1.1, L1, F1, L2]

3.1 The map $(f,g):X\to\mathbb R^2$ is continuous by [L1], so composing it with the operations of steps 1.1 and 2.1 gives continuity of $f+g$, $fg$, $\max(f,g)$, and $\min(f,g)$; composing $f$ with absolute value gives continuity of $|f|$. [L1, step 1.1, step 2.1]

3.2 Restricting $f$ and $g$ to $\operatorname{coz}(g)$ and composing their product map with division gives continuity of $f/g$ there. [L1, step 2.2]

4.1 Iterating the binary operations of step 3.1 proves the finite assertions. [step 3.1] ∎
