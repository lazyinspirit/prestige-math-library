---
id: lem-contour-integral-commutes-with-bounded-linear-maps
kind: lemma
title: Contour integral commutes with bounded linear maps
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-banach-algebra-valued-contour-integral, def-bounded-linear-operator, def-operator-norm, cor-piecewise-c1-paths-have-additive-speed-integral-length]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — Lemma 5.9 and §5.1.2, printed pp. 213–216"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras, v2 — §2.5, printed pp. 43–47"
      url: "https://arxiv.org/pdf/1211.3404"
---

## Statement

Let $A$ be a unital complex Banach algebra, let $E$ be a complex Banach space,
let $B : A \to E$ be a bounded complex-linear map
([[def-bounded-linear-operator]]), let $\gamma$ be a piecewise $C^1$ complex
contour, and let $f : \gamma^\ast \to A$ be continuous. Then

1. $B \circ f$ is continuous on $\gamma^\ast$ and
   $$B\!\left(\int_\gamma f(z)\,dz\right) = \int_\gamma (B \circ f)(z)\,dz ,$$
   the first integral being that of
   [[def-banach-algebra-valued-contour-integral]] and the second computed in
   the Banach space $E$;
2. $$\left\|\int_\gamma f(z)\,dz\right\| \;\le\; L(\gamma)\, \sup_{z \in \gamma^\ast}\|f(z)\| ,$$
   where $L(\gamma)$ is the length of $\gamma$.

## Facts & Assumptions

**Given:** A unital complex Banach algebra $A$, a complex Banach space $E$, a bounded linear $B : A \to E$, a piecewise $C^1$ contour $\gamma : [a,b] \to \mathbb C$ with trace $\gamma^\ast$ and length $L(\gamma)$, and a continuous $f : \gamma^\ast \to A$; write $F(t) := f(\gamma(t))\gamma'(t)$.

[L1] $\int_\gamma f\,dz$ is the limit of the tagged Riemann sums $\sum_j f(\gamma(\xi_j))\gamma'(\xi_j)\Delta_j$ and equals the Bochner integral of $F$ over $[a,b]$; the chain version is the corresponding finite sum ([[def-banach-algebra-valued-contour-integral]]).

[L2] $B$ is complex-linear and bounded, and its operator norm satisfies
$B(\lambda u + \mu v) = \lambda B(u) + \mu B(v)$ and
$\|B(u)\| \le \|B\|\,\|u\|$ for all $u,v \in A$ and scalars $\lambda,\mu$
([[def-bounded-linear-operator]], [[def-operator-norm]]).

[L3] For a piecewise $C^1$ path $\gamma$ the length is the sum of the speed
integrals over a $C^1$ subdivision:
$L(\gamma)=\sum_k\int_{t_{k-1}}^{t_k}|\gamma'(t)|\,dt$; on each such interval
the speed is continuous, and the corresponding refined Riemann sums converge
to this sum ([[cor-piecewise-c1-paths-have-additive-speed-integral-length]]).

## Proof

**Proof technique:** direct.

1.1 $B \circ f$ is continuous as a composition of continuous maps, and for every tagged partition $\sum_j B(f(\gamma(\xi_j)))\gamma'(\xi_j)\Delta_j = B\bigl(\sum_j f(\gamma(\xi_j))\gamma'(\xi_j)\Delta_j\bigr)$, because $B$ is linear and the scalars $\gamma'(\xi_j)\Delta_j$ pull out of $B$. [L1, L2, algebra]

1.2 For every tagged partition, $\bigl\|\sum_j f(\gamma(\xi_j))\gamma'(\xi_j)\Delta_j\bigr\| \le \sum_j\|f(\gamma(\xi_j))\|\,\bigl|\gamma'(\xi_j)\bigr|\,\Delta_j \le \bigl(\sup_{\gamma^\ast}\|f\|\bigr)\sum_j|\gamma'(\xi_j)|\Delta_j$. [L1, L2, algebra]

2.1 Passing to the limit in [step 1.1] using continuity of $B$ and the convergence of the Riemann sums in [L1] gives $B(\int_\gamma f\,dz) = \int_\gamma (B\circ f)\,dz$, which is claim 1. [step 1.1, L1, L2]

2.2 Passing to the limit in [step 1.2] and using that the speed sums converge to the length, as in [L3], gives the estimate $\|\int_\gamma f\,dz\| \le L(\gamma)\sup_{\gamma^\ast}\|f\|$, which is claim 2. [step 1.2, L1, L3]

3.1 The two claims of the statement are exactly [step 2.1] and [step 2.2]. [step 2.1, step 2.2] ∎
