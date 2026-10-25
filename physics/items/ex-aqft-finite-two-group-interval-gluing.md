---
id: ex-aqft-finite-two-group-interval-gluing
kind: example
title: Interval sewing with the finite gauge-volume factor
status: "published"
origin: pipeline
domain: physics
library: physics
dependency_level: 8
deps:
  - def-aqft-finite-two-group-state-sum
  - pthm-aqft-finite-gauging-gluing
  - post-aqft-finite-gauging-model
dependency_roles:
  def-aqft-finite-two-group-state-sum: formulation-prerequisite
  pthm-aqft-finite-gauging-gluing: physical-result
  post-aqft-finite-gauging-model: physical-assumption
physical_scope: Exact boundary-subcomplex sewing calculation in the adopted finite G = Z/2 model with trivial A; no continuum or empirical claim.
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
sources:
  references: []
---

## Example

Let $K$ be the ordered path with vertices $0<1<2$ and edges $01,12$, split into $K_1=[0,1]$ and $K_2=[1,2]$ with common subcomplex $\Sigma=\{1\}$, inside the relative state-sum convention for the finite model with $G=\mathbb Z/2$ and $A=\{0\}$. The increasing vertex order orients the edges, and the two induced boundary orientations at the shared vertex cancel. Each edge has background amplitude $1/2$; its relative amplitude at a fixed shared-point background is $1$; the shared point has gauge-volume weight $1/2$. The sewing contraction gives $1/2$, equal to the amplitude of the full path.
 
The diagram labels the ordered edge subcomplexes and their common vertex. The exact finite counts below use the stated simplicial data and do not rely on the picture.
 
```tikz
\begin{tikzpicture}[scale=1]
\draw[thick,->] (0,0) -- node[above] {$K_1$} (1.5,0);
\draw[thick,->] (1.5,0) -- node[above] {$K_2$} (3,0);
\filldraw (0,0) circle (2pt) node[below] {$0$};
\draw[fill=white,thick] (1.5,0) circle (3pt) node[below=5pt] {$\Sigma=\{1\}$};
\filldraw (3,0) circle (2pt) node[below] {$2$};
\end{tikzpicture}
```
 
## Example references

[[def-aqft-finite-two-group-state-sum|finite model and boundary conventions]]

[[pthm-aqft-finite-gauging-gluing|finite background gauge-volume and sewing theorem]]

## Facts & Assumptions

**Given:** the two-edge path, its split at the shared vertex, the finite $G=\mathbb Z/2$ model, and unit background response.
 
[F1] [[def-aqft-finite-two-group-state-sum]]: the background fields are flat $G$ edge cochains, $A$ is trivial, and the spin partition weight is $1$ for every background.

[F2] [[pthm-aqft-finite-gauging-gluing]]: $c(J)=2^{-V_J}$ converts the higher sum to the background-object sum; relative amplitudes divide by $c(\Sigma)$ and glue with the seam factor $|\pi_2|/|\pi_1|$.

[A1] [[post-aqft-finite-gauging-model]]: the unit-response finite spin model and its relative state-sum convention are adopted.

## Verification

**Given:** the ordered path $K$, its two one-edge pieces, and $\Sigma=\{1\}$.
 
1.1 In the adopted model, for one edge $(V,E)=(2,1)$, so $c=1/4$, and its two possible flat edge backgrounds give amplitude $2(1/4)=1/2$. For the full path $(V,E)=(3,2)$, so $c=1/8$, and its four independent edge backgrounds give amplitude $4(1/8)=1/2$. The normalized spin factor is $1$ for each background. [given, A1, F1, F2, algebra]
 
2.1 For the shared point, $c(\Sigma)=1/2$ and there is one background. A fixed boundary background on an edge has two edge-label extensions, while $c(K_i)/c(\Sigma)=(1/4)/(1/2)=1/2$; each relative edge amplitude is therefore $1$. [given, A1, F1, F2, step 1.1, algebra]
 
3.1 The unique seam component has $|\pi_2|/|\pi_1|=1/2$. The contraction is $1\cdot1\cdot(1/2)=1/2$, agreeing with the direct full-path count in step 1.1 and retaining the gauge automorphism factor. [given, A1, F1, F2, step 1.1, step 2.1, algebra] ∎

