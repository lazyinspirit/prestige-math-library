---
id: thm-csm-frontier-fk-torus-rsw
kind: theorem
title: "Periodic-torus RSW lower bounds at the FK self-dual point"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 3
deps:
  - def-csm-frontier-fk-real-boundaries
  - lem-csm-frontier-fk-fkg-spatial-markov
  - lem-csm-frontier-fk-planar-duality
  - lem-csm-frontier-grid-crossings-intersect
  - thm-polygonal-jordan-curve
dependency_roles:
  def-csm-frontier-fk-real-boundaries: mathematical-premise
  lem-csm-frontier-fk-fkg-spatial-markov: mathematical-premise
  lem-csm-frontier-fk-planar-duality: mathematical-premise
  lem-csm-frontier-grid-crossings-intersect: mathematical-premise
  thm-polygonal-jordan-curve: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
physical_scope: null
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Vincent Beffara and Hugo Duminil-Copin, The self-dual point of the two-dimensional random-cluster model is critical for q >= 1"
      url: https://arxiv.org/pdf/1006.5073
      locator: "Section 2, Theorem 5, Lemmas 6–7, and Proposition 8 (PDF pp. 6–13)."
    - title: "Geoffrey Grimmett, The Random-Cluster Model, second edition"
      url: https://www.statslab.cam.ac.uk/~grg/books/rcm1-1.pdf
      locator: "Chapters 3 and 6, FKG, planar duality, and periodic crossing context."
verification:
  precheck: pending
---

## Statement

For each $q\geq1$ and aspect ratio $\alpha>1$, there is a constant $c(\alpha,q)>0$ such that the following holds. Let $n,m$ be positive integers with $m>\lceil\alpha n\rceil$, let $T_m=(\mathbb Z/m\mathbb Z)^2$ with its nearest-neighbor horizontal and vertical edges and periodic boundary conditions, and give its edges the FK law with no boundary wiring, parameter $q$, and $p_{\rm sd}(q)=\sqrt q/(1+\sqrt q)$. The probability of a horizontal open crossing of the vertex rectangle $\{0,\ldots,\lfloor\alpha n\rfloor\}\times\{0,\ldots,n\}$ is at least $c(\alpha,q)$, uniformly in $n$ and $m$.

## Statement references

[[def-csm-frontier-fk-real-boundaries]]

[[lem-csm-frontier-fk-fkg-spatial-markov]]

[[lem-csm-frontier-fk-planar-duality]]

## Facts & Assumptions

**Given:** $q\geq1$, $p=p_{\rm sd}(q)$, a periodic square torus $T_m$ with $m>\lceil\alpha n\rceil$, and the finite FK law on its edge set.

[F1] The finite torus FK law is the positive edge-subset law with cluster weight $q$ and no boundary partition ([[def-csm-frontier-fk-real-boundaries]]).

[F2] Increasing crossing events satisfy the FKG inequality and the conditional FK law inside an explored region has the induced boundary partition ([[lem-csm-frontier-fk-fkg-spatial-markov]]).

[F3] For planar domains, complementing primal edges gives the dual parameter $p^*$ with $p^*/(1-p^*)=q(1-p)/p$ and swaps open primal connections with dual open connections under the stated boundary convention ([[lem-csm-frontier-fk-planar-duality]]).

[F4] A simple polygonal closed curve separates the plane into a bounded and an unbounded component, with the curve as their common frontier ([[thm-polygonal-jordan-curve]]).

[F5] In a finite rectangular square grid, every left-to-right path meets every bottom-to-top path ([[lem-csm-frontier-grid-crossings-intersect]]).

[A1] **Unresolved finite-torus duality input for this draft.** Under the periodic square-torus FK law at $p=p_{\rm sd}(q)$, the reflected dual-complement law and the original law have configuration likelihood ratios between $q^{-2}$ and $q^2$. A square's missing horizontal primal crossing is exactly a vertical dual crossing. The first assertion is the topological torus-sector correction needed for Lemma 6 of the cited primary source; its complete local finite-cell proof is not yet supplied here.

[A2] **Unresolved mixed-boundary reflection input for this draft.** In the source's Proposition 8 exploration, condition on the topmost horizontal crossing $\gamma_1$ of $R_1=[0,n]\times[0,n]$ and the rightmost vertical crossing $\gamma_2$ of $R_2=[n/2,3n/2]\times[0,n]$ from the bottom overlap segment $[n/2,n]\times\{0\}$ to the top side. The horizontal crossing of $R_2$ makes $\gamma_2$ connected to the right side of $R_2$. If $\gamma_1$ and $\gamma_2$ are disjoint, reflection and path surgery produce an unexplored domain whose conditional FK law dominates the mixed law with the two resulting boundary arcs wired separately; under that mixed law the two arcs connect with probability at least $(1+q^2)^{-1}$. The exact surgery domain, induced partition, and dual weight comparison are not proved locally here.

## Proof

1.1 For a square $S_n=\{0,\ldots,n\}^2$ in the torus, its missing horizontal crossing is the vertical dual-open crossing of the dual rectangle, and these two events are complementary by planar separation [F4]. The dual parameter relation in [F3] gives $p^*=p$ at $p=p_{\rm sd}(q)$; the torus dual is a translated quarter-turn of the same torus. By [A1], the dual-crossing probability is at most $q^2$ times the horizontal-crossing probability. Therefore $1\leq(1+q^2)\phi_{T_m,p,q}(H(S_n))$, so every admissible torus has square-crossing probability at least $c_1(q):=(1+q^2)^{-1}$. [A1, F1, F3, F4, algebra]

2.1 To prove the base aspect $3/2$, fix an even positive integer $n$ and any torus side $m>3n/2$. Put $R=[0,3n/2]\times[0,n]$, $R_1=[0,n]\times[0,n]$, and $R_2=[n/2,3n/2]\times[0,n]$. Let $D$ be the event that each of $R_1$ and $R_2$ has a horizontal crossing and that the bottom overlap segment of $R_2$ connects inside $R_2$ to its top side. The first two events each have probability at least $c_1(q)$ by step 1.1 and translation invariance. A full vertical crossing of $R_2$ has probability at least $c_1(q)$ by square symmetry. Split this event according as a crossing starts in the left or right half of the bottom side. These two increasing events have equal probabilities by reflection symmetry and their union is the full vertical-crossing event, so the specified left-half event has probability at least $c_1(q)/2$. FKG [F2] now gives $\phi(D)\geq c_1(q)^3/2$. [F2, step 1.1, algebra]

2.2 On $D$, choose the topmost horizontal crossing $\Gamma_1$ of $R_1$ and the rightmost vertical crossing $\Gamma_2$ of $R_2$ from the specified bottom overlap segment to the top. The horizontal crossing of $R_2$ intersects $\Gamma_2$ by [F5], so $\Gamma_2$ is connected to the right side of $R$; $\Gamma_1$ reaches the left side of $R$. If $\Gamma_1$ and $\Gamma_2$ are connected by an open path contained in $R$, that path and the two boundary-reaching crossings concatenate to a horizontal crossing of $R$. Otherwise expose the top-left medial exploration of $\Gamma_1$ and the right-side medial exploration of $\Gamma_2$; these reveal only edges above $\Gamma_1$ and to the right of $\Gamma_2$. The reflected surgery in [A2] selects an unexplored component between them with two boundary arcs wired separately. By the spatial Markov property [F2], its conditional law is FK with the induced partition; [A2] supplies stochastic domination of the mixed law and a connection probability at least $c_2(q)=(1+q^2)^{-1}$. A connection inside that component joins $\Gamma_1$ to $\Gamma_2$ within $R$, so conditionally on their exploration the probability of a horizontal crossing of $R$ is at least $c_2(q)$. [A2, F2, F5, step 2.1, construct]

2.3 Averaging the conditional estimate of step 2.2 over $D$ gives $\phi(H(R))\geq c_1(q)^3/[2(1+q^2)]$. This is a uniform positive crossing bound for every $3/2$-aspect rectangle of even integer height. [step 2.1, step 2.2, algebra]

3.1 Let $W=\lfloor\alpha n\rfloor$ and $r_q=p_{\rm sd}(q)/[p_{\rm sd}(q)+q(1-p_{\rm sd}(q))]>0$. If $n=1$ or $W<3$, a fixed row path of $W$ edges crosses the target; exposing its edges successively and using the lower conditional-open bound in [F2] gives probability at least $r_q^{\lceil\alpha\rceil+2}$. Now suppose $n\geq2$ and $W\geq3$. If $1<\alpha\leq3/2$, put $k=\lfloor W/3\rfloor$ and $h=2k$. Then $h\leq n$, and step 2.3 gives probability at least $c_3(q)$ for a horizontal crossing of $[0,3k]\times[0,h]$. The right endpoint is at most two columns short of $W$. Given the configuration in this rectangle, choose the first such crossing by a fixed lexicographic rule and expose the at most two horizontal edges continuing from its right endpoint to $x=W$. Each has conditional-open probability at least $r_q$ by [F2], so the target crossing probability is at least $c_3(q)r_q^2$. If $\alpha>3/2$, let $h=2\lfloor n/2\rfloor$, $w=3h/2$, $d=h/2$, and $T=W-w\geq0$. Set $K=0$ if $T=0$ and otherwise $K=\lceil T/d\rceil$; choose starts $s_j=jd$ for $0\leq j<K$ and $s_K=T$. Use the wide rectangles $[s_j,s_j+w]\times[0,h]$, $0\leq j\leq K$, and, for each $j<K$, the square $[s_{j+1},s_{j+1}+h]\times[0,h]$. Each overlap contains that square because every start increment is at most $d$ and $w-d=h$. The wide rectangle crossing probability is at least $c_3(q)$ by step 2.3, and each vertical square crossing probability is at least $c_1(q)$ by step 1.1. By [F5], each square crossing intersects the horizontal crossings in both adjacent rectangles. Their paths therefore concatenate to a target crossing; FKG [F2] bounds the joint probability below by $\min\{c_1(q),c_3(q)\}^{2K+1}$. Since $K\leq3\alpha+1$ for $n\geq2$, this is uniformly positive. All rectangles lie inside the target, hence inside the torus because $m>\lceil\alpha n\rceil$. The resulting constant depends only on $q,\alpha$, proving the assertion conditional on [A1] and [A2]. [A1, A2, F2, F5, step 1.1, step 2.3, algebra] ∎

## Remarks

The diagram below records only the rectangle-overlap convention. It is not used to justify any crossing or intersection claim in the proof.

```tikz
\begin{tikzpicture}[scale=0.85, every node/.style={font=\small}]
  \draw (0,0) rectangle (3,2);
  \draw (1.5,0) rectangle (4.5,2);
  \draw[blue,thick] (0,0.8) .. controls (1,1.2) and (2,0.5) .. (3,1.4);
  \draw[blue,thick] (1.5,0.6) .. controls (2.5,1.3) and (3.5,0.9) .. (4.5,1.6);
  \draw[red,dashed,thick] (2.2,0) .. controls (2.5,0.7) and (2.1,1.2) .. (2.6,2);
  \node at (0.6,2.2) {$R_1$};
  \node at (3.8,2.2) {$R_2$};
  \node[blue] at (2.25,-0.35) {horizontal crossings};
  \node[red] at (2.25,2.55) {overlap crossing};
\end{tikzpicture}
```

Readiness remains escalated until [A1] and [A2] are proved locally or linked to exact current suppliers with their full arguments inspected.
