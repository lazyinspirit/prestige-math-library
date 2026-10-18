---
id: "lem-afem-nvb-shape-regularity-and-three-generation-properties"
kind: "lemma"
title: "Shape regularity and local reduction under 2D newest-vertex bisection"
status: draft
origin: pipeline
pipeline_run: "numerical-analysis-remaining-71-2026-10-17"
dependency_level: 1
deps:
  - "def-afem-nvb-labelled-triangulation-family"
  - "lem-shape-regular-affine-simplex-scaling"
proof_strategy: direct
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
sources:
  references:
    - title: "Bonito, Canuto, Nochetto & Veeser, Adaptive Finite Element Methods
        (2024)"
      url: "https://people.tamu.edu/~bonito/Publications/Preprints/2024_afem_acta.pdf"
      locator: "§§3.5–3.6 on 2D newest-vertex bisection and §8.1.1–8.1.3 on chains and
        cumulative closure complexity."
    - title: "Ricardo H. Nochetto, Adaptive Finite Element Methods, Lecture 1"
      url: "https://www.math.umd.edu/~rhn/lectures/lecture1.pdf"
      locator: "§1.5, Clément interpolation and scaled trace estimate, PDF pp. 8–9."
verification:
  precheck: pass
---
## Statement

For any compatible 2D initial labeling from [[def-afem-nvb-labelled-triangulation-family]], every conforming NVB descendant has shape regularity bounded by a constant depending only on the initial mesh. Three complete generations of uniform bisection of a triangle split each original edge at its midpoint, create a new interior midpoint on the median from the opposite vertex, and give child diameters at most half the parent diameter.

## Three-generation reference picture

The drawing shows three uniform NVB generations of $ABC$ with reference edge $AB$. $M,N,P$ are the midpoints of the three original sides; $S$ is the midpoint of median $CM$ and is interior; $Q,R$ are the midpoints of $AM,BM$. The eight leaves and their coordinates are verified in proof step 2.1. The dashed original edge $AB$ is the reference edge. The picture fixes the point conventions only; no proof relies on it.

```tikz
\begin{tikzpicture}[scale=1.05, every node/.style={font=\small}]
  \coordinate (A) at (0,0);
  \coordinate (B) at (4,0);
  \coordinate (C) at (2,3.2);
  \coordinate (M) at (2,0);
  \coordinate (N) at (1,1.6);
  \coordinate (P) at (3,1.6);
  \coordinate (S) at (2,1.6);
  \coordinate (Q) at (1,0);
  \coordinate (R) at (3,0);
  \draw (A)--(N)--(C)--(P)--(B)--(R)--(M)--(Q)--cycle;
  \draw (M)--(N) (M)--(P) (N)--(Q) (P)--(R) (N)--(S)--(P) (C)--(S)--(M);
  \draw[red,densely dashed] (A)--(B);
  \fill (A) circle (1.4pt) node[below left] {$A$};
  \fill (B) circle (1.4pt) node[below right] {$B$};
  \fill (C) circle (1.4pt) node[above] {$C$};
  \fill (M) circle (1.4pt) node[below] {$M$};
  \fill (N) circle (1.4pt) node[left] {$N$};
  \fill (P) circle (1.4pt) node[right] {$P$};
  \fill (S) circle (1.4pt) node[above] {$S$};
  \fill (Q) circle (1.4pt) node[below] {$Q$};
  \fill (R) circle (1.4pt) node[below] {$R$};
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** A finite shape-regular conforming triangular initial mesh with compatible edge labels as in [[def-afem-nvb-labelled-triangulation-family]].

[F1] Each bisection splits the reference edge at its midpoint and assigns the two newly created edges and inherited edges the labels specified by generation; shared edges have one common label ([[def-afem-nvb-labelled-triangulation-family]]).

## Proof

1.1 Write the parent vertices as $A,B,C$, with reference edge $AB$, midpoint $M$, and squared side lengths $X=|AC|^2$, $Y=|BC|^2$, $Z=|AB|^2$. The two first children have edge-length squares $\{X,Z/4,W\}$ and $\{Y,Z/4,W\}$, where $W=|(A+B)/2-C|^2=(2X+2Y-Z)/4$ by expanding the squared norm. The four labeled types have squared edge lists $\{X,Y,Z\}$, $\{Z/4,X,W\}$, $\{Z/4,Y,W\}$, and $\{X/4,Y/4,W\}$. In type 1 the reference side has square $X$, and the new median square is $(2(Z/4)+2W-X)/4=Y/4$; its children therefore have side lists $\{X/4,Z/4,Y/4\}$ and $\{X/4,W,Y/4\}$, which are a quarter-scale type 0 and type 3. The type 2 calculation interchanges $X,Y$. In type 3 the reference side has square $W$, and its median square is $(2(X/4)+2(Y/4)-W)/4=Z/16$; its children are quarter-scale types 1 and 2. Type 0 gives types 1 and 2 by the first bisection. Hence this finite list is closed under every labeled bisection and no other normalized shape occurs. [F1, given, algebra]

2.1 Each of the finitely many normalized triangles in step 1.1 is nondegenerate: its area is half the parent area at each bisection and its side lengths are the explicit midpoint lengths, so its three angles are positive. The minimum of these finitely many angles and the initial minimum angle is positive. Hence all descendants have a common positive minimum angle and a common shape-regularity bound. The angle minimum over this finite list is positive; the maximum shape-regularity constant over it and the initial cells is therefore finite. [F1, step 1.1, given]

3.1 After the first generation the midpoint $M$ of $AB$ is present. The second generation bisects $AC$ and $BC$, adding their midpoints $N$ and $P$. The four second-generation triangles have reference edges on the segments $AM, BM, CM$; the third generation bisects those segments, in particular $CM$, adding its midpoint $S$ in the interior of $ABC$. The eight leaves have vertex triples $(A,N,Q),(Q,M,N),(N,M,S),(N,S,C),(P,M,R),(P,R,B),(P,C,S),(P,S,M)$, where $Q=(A+M)/2$ and $R=(B+M)/2$. Subtracting these vertex coordinates shows that each leaf side is an original side divided by $2$, the median $|C-M|$ divided by $2$, or the reference side divided by $4$. Since $M$ lies on $AB$, convexity of the norm gives $|C-M|\le\max\{|C-A|,|C-B|\}\le\operatorname{diam}(ABC)$. Thus every leaf side, and hence every leaf diameter, is at most half the parent diameter. [F1, step 1.1, algebra] ∎
