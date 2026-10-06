---
id: lem-a-double-point-of-a-self-transverse-immersion-has-two-disjoint-embedded-sheet-disks
kind: lemma
title: A double point has two disjoint embedded sheet disks meeting transversely
status: published
origin: session
dependency_level: 2
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
- def-self-transverse-immersion-and-double-point-locus
- def-smooth-embedding
- def-immersion-submersion-and-constant-rank-map
- cor-every-immersion-is-locally-an-embedding
- def-embedded-submanifold-and-slice-chart
- def-smooth-manifold
- cor-transverse-intersection-theorem
- thm-smooth-inverse-function-theorem-on-manifolds
- def-differential-of-a-smooth-map
- def-local-oriented-intersection-sign
- thm-compact-subset-of-a-hausdorff-space-is-closed
- prop-smooth-maps-are-continuous
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  references:
  - title: C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156, Cambridge University
      Press 2016; full text retrieved from the Internet Archive Wayback Machine snapshot of the ETH Zürich course
      copy), Chapter 6 §§6.2–6.4, printed pp. 169–192 (Theorem 6.2.1; Propositions 6.3.1 and 6.3.3; Theorems 6.3.2,
      6.3.4, 6.3.6, 6.4.5, 6.4.8 and 6.4.9; Lemma 6.3.5)
    url: https://web.archive.org/web/20241113132819/https://people.math.ethz.ch/~dkosanovic/24-FS/Wall-Differential-Topology.pdf
  - title: Arkadiy Skopenkov, Embedding and Knotting of Manifolds in Euclidean Spaces (arXiv:math/0604045), §1,
      article pp. 2–5 (self-intersection set; ambient versus non-ambient isotopy) and §2, article pp. 6–14 (Theorems
      2.1–2.3 and 2.8; the modulo 2 and integral Whitney obstruction; the Whitney invariant); §3 and §5 used only
      for the recorded knotting boundary
    url: https://arxiv.org/pdf/math/0604045
---
## Statement

Let $f:M^m\to X^{2m}$ be a self-transverse immersion and let $x\neq y$ be a selected coincident branch pair with common image $r$. Then there are disjoint closed embedded disks $D_x\ni x$, $D_y\ni y$ in $M$ such that:

1. $f|_{D_x}$ and $f|_{D_y}$ are smooth embeddings whose images $A:=f(D_x)$ and $B:=f(D_y)$ are closed embedded $m$-disks in $X$ meeting transversely, with $A\cap B=\{r\}$;
2. if $M$ and $X$ are oriented and the disks carry the induced branch orientations, the local sign of the branch pair $(A,B)$ at $r$ is the local sign of the selected branch pair ([[def-self-transverse-immersion-and-double-point-locus]], [[def-local-oriented-intersection-sign]]).

Equivalently, in suitable charts of $M$ at $x$ and $y$ and of $X$ at $r$, the branch maps take the standard forms $u\mapsto(u,0)$ and $v\mapsto(0,v)$ on $\mathbb R^m$, so that near $r$ the pair of branches is the standard transverse pair $(\mathbb R^m\times\{0\},\{0\}\times\mathbb R^m)$ in $\mathbb R^{2m}$.

These disks describe the selected pair; they do not exclude other preimages over $r$. If $r$ is a genuine double point, the selected two preimages are the entire fibre.

## Facts & Assumptions

**Given:** A self-transverse immersion $f:M^m\to X^{2m}$ and a selected coincident pair $x\neq y$ with common image $r$.

[F1] Self-transversality gives $df_x(T_xM)+df_y(T_yM)=T_rX$, a sum of two $m$-dimensional subspaces in the $2m$-dimensional space $T_rX$, hence a direct sum; the branches at $r$ are the local images of $f$ near $x$ and near $y$ ([[def-self-transverse-immersion-and-double-point-locus]]).

[F2] A smooth embedding is an injective immersion that is a homeomorphism onto its image with the subspace topology ([[def-smooth-embedding]], [[def-immersion-submersion-and-constant-rank-map]]).

[L1] Every immersion is locally an embedding: for each point there is a neighbourhood carried homeomorphically onto an embedded submanifold ([[cor-every-immersion-is-locally-an-embedding]]).

[L2] Embedded submanifolds are characterized by slice charts and carry the subspace topology ([[def-embedded-submanifold-and-slice-chart]]).

[L3] If $S,T\subseteq X$ are transverse embedded submanifolds of codimensions $a$ and $b$, then $S\cap T$ is an embedded submanifold of codimension $a+b$ and $T_p(S\cap T)=T_pS\cap T_pT$ at each intersection point ([[cor-transverse-intersection-theorem]]).

[L4] If $dF_p$ is an isomorphism of tangent spaces at $p$, then $F$ restricts to a diffeomorphism from a neighbourhood of $p$ onto a neighbourhood of $F(p)$ ([[thm-smooth-inverse-function-theorem-on-manifolds]], [[def-differential-of-a-smooth-map]]).

[L5] When $M$ and $X$ are oriented and the disks carry the induced branch orientations, the local sign of a double point is the local oriented intersection sign of the two oriented branch disks, computed with the first branch first ([[def-self-transverse-immersion-and-double-point-locus]], [[def-local-oriented-intersection-sign]]).

[L6] A smooth manifold is a Hausdorff topological space ([[def-smooth-manifold]]); a compact subset of a Hausdorff space is closed ([[thm-compact-subset-of-a-hausdorff-space-is-closed]]); smooth maps are continuous on compacta and continuous images of compact sets are compact ([[prop-smooth-maps-are-continuous]]).

## Proof

**Proof technique:** direct.

1.1 Since $f$ is an immersion and $x\neq y$, [L1] supplies open neighbourhoods $U$ of $x$ and $V$ of $y$ with $U\cap V=\varnothing$ such that $f|_U$ and $f|_V$ are embeddings onto embedded $m$-submanifolds $A_0:=f(U)$ and $B_0:=f(V)$ of $X$; disjointness of $U$ and $V$ is possible because $M$ is Hausdorff by [L6]. [L1, L2, L6]

2.1 The submanifolds $A_0$ and $B_0$ meet transversely at $r$: their tangent spaces at $r$ are $df_x(T_xM)$ and $df_y(T_yM)$, which span $T_rX$ by [F1] as a direct sum. [F1, step 1.1]

3.1 By [L3], $A_0\cap B_0$ is an embedded submanifold of $X$ of codimension $m+m=2m=\dim X$, that is, of dimension $0$; by the slice-chart description [L2] applied at $r$, there is an open neighbourhood $W$ of $r$ in $X$ with $A_0\cap B_0\cap W=\{r\}$. [L2, L3, step 2.1]

4.1 Choose closed disks $D_x\subseteq U$ around $x$ and $D_y\subseteq V$ around $y$ so small that $f(D_x)\subseteq W$ and $f(D_y)\subseteq W$; this is possible by continuity of $f$ at $x$ and $y$, which map to $r$, and by taking, in a chart of $M$ at $x$ (respectively at $y$), a sufficiently small closed coordinate ball. Then $D_x\cap D_y=\varnothing$, and $f(D_x)\cap f(D_y)\subseteq A_0\cap B_0\cap W=\{r\}$, while $r=f(x)=f(y)$ lies in both images, so $A\cap B=\{r\}$ for $A:=f(D_x)$, $B:=f(D_y)$. [L6, step 1.1, step 3.1, construct]

4.2 For the coordinate model, choose a slice chart $(W_1,\chi_1)$ of $X$ at $r$ for $A_0$ with $\chi_1(r)=0$ and $\chi_1(A_0\cap W_1)=\chi_1(W_1)\cap(\mathbb R^m\times\{0\})$ by [L2], and shrink $W_1$ so that $r$ is the only point of $A_0\cap B_0$ in it, as in step 3.1. The image $C:=\chi_1(B_0\cap W_1)$ is an embedded $m$-submanifold of $\mathbb R^{2m}$ through $0$ whose tangent space at $0$ is complementary to $\mathbb R^m\times\{0\}$ by step 2.1, so the second projection $\pi_2$ restricts to $C$ with $d(\pi_2|_C)_0$ an isomorphism; by [L4] the projection $\pi_2|_C$ is a local diffeomorphism at $0$, whence $C$ is near $0$ the graph $\{(g(w),w)\}$ of a smooth map $g$ defined near $0$ in $\mathbb R^m$ with $g(0)=0$. The map $\Psi(u,v):=(u-g(v),v)$ is then a local diffeomorphism of $\mathbb R^{2m}$ at $0$ fixing $0$, and it carries $C$ to $\{0\}\times\mathbb R^m$ while fixing $\mathbb R^m\times\{0\}$ pointwise; hence in the chart $\Psi\circ\chi_1$ the branch $A_0$ is $\{v=0\}$ and the branch $B_0$ is $\{u=0\}$. Composing with the (smooth) inverse of the embedding $f|_U$ in these coordinates exhibits $f$ near $x$ as $u\mapsto(u,0)$, and similarly near $y$ as $v\mapsto(0,v)$, which is the displayed standard model. [L2, L4, step 2.1, step 3.1]

5.1 The maps $f|_{D_x}$ and $f|_{D_y}$ are smooth embeddings: they are restrictions of the embeddings $f|_U$, $f|_V$ to the closed disks, hence injective immersions, and each is a continuous bijection from a compact disk onto its image, with continuous inverse because the inverse is the restriction of the continuous inverse of the ambient embedding. The images $A$ and $B$ are compact, hence closed in the Hausdorff space $X$ by [L6], and each is the image of a closed $m$-disk under an embedding, so each is a closed embedded $m$-disk in $X$. [F2, L6, step 4.1]

6.1 The disks $A$ and $B$ meet transversely at $r$, with $A\cap B=\{r\}$, and, when $M$ and $X$ are oriented and the disks have their induced branch orientations, the local sign of the branch pair $(A,B)$ at $r$ is the local sign of the selected branch pair: by [L5] the local sign of the selected branch pair is by definition the local oriented intersection sign of the two ordered branch disks at $r$, computed with the first branch first, which is exactly the local sign of the pair $(A,B)$. [L5, step 4.1, step 5.1]

7.1 The disks constructed in steps 4.1 and 5.1, with the model of step 4.2, satisfy clauses 1 and 2 of the statement. [step 4.1, step 5.1, step 6.1, step 4.2] ∎
