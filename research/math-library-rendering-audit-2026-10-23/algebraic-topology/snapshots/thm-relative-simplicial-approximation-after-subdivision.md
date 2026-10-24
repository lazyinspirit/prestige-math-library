---
id: thm-relative-simplicial-approximation-after-subdivision
kind: theorem
title: "Relative simplicial approximation after subdivision"
status: published
origin: pipeline
deps: ["lem-relative-subdivision-neighbourhood-adjustment", "def-relative-derived-subdivision-of-a-finite-simplicial-pair", "lem-the-open-star-criterion-produces-a-simplicial-map", "thm-lebesgue-number-lemma", "lem-finite-simplicial-weak-topology-agrees-with-euclidean-topology"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "E. C. Zeeman, Relative simplicial approximation (1964)"
      url: "https://www.lms.ac.uk/sites/default/files/1964%20Relative%20simplicial%20approximation.pdf"
---

## Statement

Let $K,L$ be finite complexes, $A\subseteq K$ a subcomplex, and $f:|K|\to|L|$ continuous with $f|_{|A|}$ the realization of a simplicial map. For some $r$ there is a simplicial $g:D_A^rK\to L$ agreeing pointwise with $f$ on $|A|$ and homotopic to $f$ rel $|A|$. This is a homotopy of pairs into $(|L|,|f(A)|)$.

A prescribed compatible finite linear subdivision $A^{\prime}$ of $A$ can first be extended to a finite linear subdivision $K^{\prime}$ of $K$. If $f|_{|A|}$ is simplicial on this prescribed $A^{\prime}$, the conclusion applies to $D_{A^{\prime}}^rK^{\prime}$, fixing it pointwise. The simpliciality condition must hold on the chosen triangulation; refining a source alone does not automatically retain it.

## Source locators

Theorem and proof, pp.39–42; Maunder 2.5.20 pp.55–56.


## Facts & Assumptions

[F1] Adjustment provides the near-A star condition and shrinking far stars. [[lem-relative-subdivision-neighbourhood-adjustment]].

[F2] Every compact metric open cover has a Lebesgue number. [[thm-lebesgue-number-lemma]].

[F3] The finite realization is compact metric with its Euclidean topology. [[lem-finite-simplicial-weak-topology-agrees-with-euclidean-topology]].

[F4] Star approximation gives a homotopy fixed wherever the maps agree. [[lem-the-open-star-criterion-produces-a-simplicial-map]].

[F5] Compatible boundary coning extends finite triangulations. [[def-relative-derived-subdivision-of-a-finite-simplicial-pair]].


## Proof

**Given:** Finite $K,L$, subcomplex $A$, and $f$ continuous and simplicial on $A$.

1.1 Take $h$ and $T_r$ from the neighbourhood-adjustment lemma. Compose its homotopy $H_t$ with $f$ to obtain a homotopy from $f$ to $fh$, fixed on $|A|$. The inverse images under $fh$ of the target vertex stars form an open cover of compact metric $|K|$, so there is a Lebesgue number $\delta>0$. For empty $K$ the empty map already proves the theorem. [F1, F2, F3]

2.1 Choose $r\geq3$ so that every star of a $T_r$ vertex in $|B_2|$ has diameter less than $\delta$. For each such vertex the Lebesgue-number property gives a target vertex $g(v)$ whose open star contains $fh(\operatorname{st}(v))$. For any remaining vertex $v$, the adjustment lemma gives $a\in A$ with $h(\operatorname{st}(v))\subseteq\operatorname{st}_A(a)$. Since $f|_A$ is simplicial, a point having positive $a$ coordinate has positive $f(a)$ coordinate in its image, so $f(\operatorname{st}_A(a))\subseteq\operatorname{st}_L(f(a))$; take $g(v)=f(a)$. On $A$ take $a=v$, hence $g(v)=f(v)$. These are finitely many choices. [F1, F2, step 1.1]

3.1 All vertex stars now satisfy the criterion for $fh$, so $g$ extends simplicially and the criterion supplies $J_t(x)=(1-t)fh(x)+t|g|(x)$. On $|A|$, the simplicial maps $g$ and $f$ agree on vertices and therefore on all affine combinations; also $h$ is the identity there. Thus $J$ fixes $f|_A$. Concatenate $fH_{2t}$ for $0\leq t\leq1/2$ with $J_{2t-1}$ for $1/2\leq t\leq1$. At the join both equal $fh$, so this is a continuous homotopy from $f$ to $|g|$, fixed on $A$. Its restriction there always lies in the simplicial image $f(A)$, proving the pair assertion. [F4, step 1.1, step 2.1]

4.1 To extend a prescribed compatible $A^{\prime}$, process simplices of $K$ outside $A$ by increasing dimension. Their boundary triangulations are already fixed and compatible. Cone each such boundary from an interior barycenter of its original simplex. Every ray meets the boundary once, so these cones triangulate the simplex and restrict to the already specified boundaries. This finite induction constructs $K^{\prime}$ restricting exactly to $A^{\prime}$. If $f$ is simplicial there, apply the preceding argument to $(K^{\prime},A^{\prime})$. When $A$ is empty it is ordinary approximation; when $A=K$ and $f$ is already simplicial take $g=f,r=0$. [F5, step 3.1] ∎


## Remarks

The result approximates $fh$, not necessarily $f$ in the strict carrier sense. Zeeman, pp.40–43, explains the distinction: near a fixed edge the star cover need not become subordinate to the pullback cover for $f$, even after relative subdivision. His p.43 circular-arc example rules out requiring the final map to stay in the carrier of $f(x)$ at every point while fixing that edge. The two successive homotopies above impose no such additional claim. The prescribed-subdivision clause is conditional on simpliciality in that triangulation, not on the original one alone.
