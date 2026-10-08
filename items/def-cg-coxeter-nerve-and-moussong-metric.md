---
id: def-cg-coxeter-nerve-and-moussong-metric
kind: definition
title: "The Coxeter nerve and its Moussong metric"
status: draft
origin: pipeline
dependency_level: 14
deps:
  - def-cg-large-spherical-metric-flag-and-almost-negative-matrix
  - def-cg-spherical-gram-simplex-and-angular-link
  - lem-cg-spherical-simplex-existence-and-link-gram-formula
  - thm-cg-finite-type-positive-definite-criterion
  - def-cg-coxeter-diagram-components-and-finite-type
  - def-cg-real-coxeter-form-and-reflection
  - def-hh-coxeter-matrix-word-group-and-length
  - def-principal-inverse-sine-and-cosine
  - thm-sine-and-cosine-addition-formulas
  - thm-quarter-turn-values-and-shift-formulas
  - def-cg-euclidean-cone-and-spherical-join-metrics
  - def-metric-space
  - def-definiteness-inertia-and-signature-data-over-the-reals
  - thm-hh-parabolic-minimal-representatives-and-length-additivity
  - def-cg-abstract-isometric-polyhedral-gluing-and-chain-metric
  - thm-cg-polyhedral-chain-metric-topology-and-properness
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (first-edition author manuscript, 2007-2008)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "§7.1, printed pp. 123–124 (spherical subsets and the nerve); §12.1, Lemma 12.1.1 and §12.3, Lemma 12.3.1, printed pp. 231–235 (the natural piecewise spherical structure, cosine matrices, edge lengths and the positive-definite face test)"
    - title: "Philip Moeller, A note on almost negative matrices and Gromov-hyperbolic Coxeter groups, arXiv:2205.07791"
      url: "https://arxiv.org/pdf/2205.07791"
      locator: "§2, printed pp. 3–5 (almost-negative Coxeter cosine matrices, the spherical nerve cells for positive-definite principal submatrices, face gluing, and the Moussong metric on the Davis complex)"
    - title: "G. Moussong, Hyperbolic Coxeter groups, PhD thesis (Ohio State University 1988), McCammond transcription"
      url: "https://people.math.osu.edu/davis.12/papers/moussongdissertation.pdf"
      locator: "Chapter 2, §7, printed pp. 15–16 (the nerve N(A) as the union of spherical simplices indexed by positive-definite principal submatrices, with compatible face maps)"
    - title: "Ruth Charney and Michael W. Davis, The Euler characteristic of a nonpositively curved, piecewise Euclidean manifold, Pacific J. Math. 171 (1995)"
      url: "https://msp.org/pjm/1995/171-1/pjm-v171-n1-p04-s.pdf"
      locator: "§2.3.2 (realization of a spherical simplex from a positive-definite cosine matrix)"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Definition

Let $(W,S)$ be a Coxeter system of finite rank, so $S$ is finite, with Coxeter matrix $m$ ([[def-hh-coxeter-matrix-word-group-and-length]]). Let $V=\mathbb R^S$ carry the canonical bilinear form $B$ with $B(e_s,e_s)=1$ and $B(e_s,e_t)=-\cos(\pi/m_{st})$ for finite $m_{st}$, and $B(e_s,e_t)=-1$ when $m_{st}=\infty$ ([[def-cg-real-coxeter-form-and-reflection]]). For $T\subseteq S$, set $C_T=(B(e_s,e_t))_{s,t\in T}$; whenever $T\subseteq T'$, $C_T$ is a principal submatrix of $C_{T'}$.

**(1) Spherical subsets.** A subset $T\subseteq S$ is **spherical** when its standard parabolic subgroup $W_T=\langle s:s\in T\rangle$ is finite ([[def-cg-coxeter-diagram-components-and-finite-type]]). The standard parabolic presentation theorem ([[thm-hh-parabolic-minimal-representatives-and-length-additivity]](2)) says $(W_T,T)$ is a Coxeter system with restricted Coxeter matrix $m|_{T\times T}$. Applying the finite-type criterion to this Coxeter system gives
$$T\text{ is spherical}\quad\Longleftrightarrow\quad C_T\text{ is positive definite}$$
([[thm-cg-finite-type-positive-definite-criterion]](1), [[def-definiteness-inertia-and-signature-data-over-the-reals]]). The empty subset is spherical: $W_\emptyset=\{1\}$ and the empty matrix is positive definite vacuously. Spherical subsets are downward closed, since $W_T\le W_{T'}$ whenever $T\subseteq T'$.

**(2) The Coxeter nerve and its metric.** Let $K$ be the simplicial complex on vertex set $S$ whose nonempty simplices are the spherical subsets. The **Coxeter nerve** $L(W,S)=|K|_C$ is obtained by assigning to each nonempty spherical $T$ the spherical simplex $\Sigma(C_T)$ ([[def-cg-spherical-gram-simplex-and-angular-link]]) and gluing its faces by the vertex-preserving isometries associated to the principal submatrices $C_{T'}$ for $T'\subset T$ ([[lem-cg-spherical-simplex-existence-and-link-gram-formula]](i)). Thus $\emptyset$ is the empty face, not a cell, and every singleton is a point cell. For distinct $s,t\in S$, $\{s,t\}$ spans an edge exactly when $m_{st}<\infty$; its prescribed one-cell length is
$$\ell_{st}=\arccos\!\bigl(-\cos(\pi/m_{st})\bigr)=\pi-\pi/m_{st}\in[\pi/2,\pi).$$
The one-cell length is determined by the spherical Gram data; it is not asserted to equal the global chain distance between the vertices, since a chain may leave that cell and return ([[def-cg-abstract-isometric-polyhedral-gluing-and-chain-metric]]).

On each connected component of $L$, let $d_L$ be the chain distance: the infimum of the sums of the round angular distances of successive points that lie in common cells. Set $d_L(x,y)=+\infty$ for points in different components as auxiliary extended-distance notation. Define
$$d_\pi(x,y):=\min\{\pi,d_L(x,y)\},\qquad \min\{\pi,+\infty\}:=\pi.$$
Then $d_\pi$ is the finite-valued angular metric on the nerve, called here the **Moussong metric on the nerve**. This is the piecewise-spherical link metric induced by the cosine data; the corresponding piecewise-Euclidean Moussong metric on the Davis complex has the nerve as a vertex link (Davis, §12.1; Moeller, §2).

**(3) Well-definedness and scope.** The cells of $L(W,S)$ are exactly the nonempty subsets $T$ for which $C_T$ is positive definite, by (1). Principal-submatrix restriction makes the face gluings compatible, and the iterated Schur complement computes the Gram matrices of the face links ([[lem-cg-spherical-simplex-existence-and-link-gram-formula]](iv)). If $T$ is spherical, then every off-diagonal entry of $C_T$ lies in $[-1,0]$, so every edge cell has length at least $\pi/2$; therefore $L(W,S)$ is a finite large spherical complex ([[def-cg-large-spherical-metric-flag-and-almost-negative-matrix]](1)). This definition does not assert that the nerve is metric flag or CAT(1); those properties are proved by [[cor-cg-coxeter-nerve-is-cat-one-and-has-girth-at-least-two-pi]].

## Facts & Assumptions

**Given:** The finite-rank Coxeter system $(W,S)$, the Coxeter form $B$, and the matrices $C_T$ above.

[F1] For every $T\subseteq S$, the canonical map from the group presented by the restricted matrix $m|_T$ to $W_T$ is an isomorphism; thus $(W_T,T)$ is a Coxeter system ([[thm-hh-parabolic-minimal-representatives-and-length-additivity]](2)).

[F2] For a finite-rank Coxeter system with canonical Coxeter form, the group is finite if and only if its form is positive definite ([[thm-cg-finite-type-positive-definite-criterion]](1)).

[F3] The Coxeter form has diagonal entries $1$, off-diagonal entries $-\cos(\pi/m_{st})$ for finite $m_{st}$, and entry $-1$ for $m_{st}=\infty$ ([[def-cg-real-coxeter-form-and-reflection]]).

[F4] A positive-definite diagonal-one matrix defines a spherical Gram simplex unique up to vertex-preserving isometry; the face indexed by a subset of vertices has the corresponding principal submatrix as its Gram matrix ([[def-cg-spherical-gram-simplex-and-angular-link]], [[lem-cg-spherical-simplex-existence-and-link-gram-formula]](i)).

[F5] Face-link Gram matrices are computed by iterated Schur complements and are compatible with further face links ([[lem-cg-spherical-simplex-existence-and-link-gram-formula]](iv)).

[F6] Each positive-definite Gram simplex has a face-compatible radial normalization to a compact Euclidean convex cell that is bi-Lipschitz for the round and Euclidean cell metrics ([[lem-cg-spherical-simplex-existence-and-link-gram-formula]](ii)). Since there are finitely many cells, the cellwise maps have a common finite bi-Lipschitz bound; applying it to chains and taking infima compares the two chain distances in both directions. On each connected finite Euclidean polyhedral gluing the chain distance is a metric ([[def-cg-abstract-isometric-polyhedral-gluing-and-chain-metric]], [[thm-cg-polyhedral-chain-metric-topology-and-properness]](1)). The componentwise extended-distance and truncation conventions are those of [[def-cg-euclidean-cone-and-spherical-join-metrics]](1)–(2).

[F7] The cosine is strictly decreasing on $[0,\pi]$, with range $[-1,1]$, and $\cos(\pi-\theta)=-\cos\theta$ ([[def-principal-inverse-sine-and-cosine]], [[thm-sine-and-cosine-addition-formulas]], [[thm-quarter-turn-values-and-shift-formulas]]).

[F8] A symmetric form is positive definite when its quadratic form is positive on every nonzero vector; this condition is vacuous for the zero-dimensional space and its empty matrix ([[def-definiteness-inertia-and-signature-data-over-the-reals]]).

[F9] A metric is a real-valued function satisfying separation, symmetry and the triangle inequality ([[def-metric-space]]).

## Proof

1.1 **Spherical subsets and cells.** Fix $T\subseteq S$. By [F1], the restricted matrix presents the Coxeter system $(W_T,T)$, and its canonical Coxeter form has matrix exactly $C_T$ by [F3]. Applying [F2] to this restricted system proves $W_T$ finite if and only if $C_T$ is positive definite. For $T=\emptyset$, $W_T=\{1\}$ and positive definiteness of the empty matrix is vacuous by [F8]. If $T\subseteq T'$ and $T'$ is spherical, then $W_T\le W_{T'}$ is finite; the principal submatrix $C_T$ is also positive definite because it is the restriction of the positive quadratic form of $C_{T'}$. Thus the nonempty spherical subsets form a finite simplicial complex, and they are exactly the nonempty positive-definite principal submatrices. [F1, F2, F3, F8, algebra]

1.2 **Edges and their prescribed lengths.** For distinct $s,t$, [F1] and [F2] show that $\{s,t\}$ is spherical exactly when its two-by-two Coxeter Gram matrix is positive definite. If $m_{st}<\infty$, put $\theta:=\pi/m_{st}$ and $c:=\cos\theta$. Since $m_{st}\ge2$, $0<\theta\le\pi/2$, so $0\le c<1$ by [F7]; for $(x,y)\ne(0,0)$, $x^2-2cxy+y^2=(x-cy)^2+(1-c^2)y^2>0$, so the matrix is positive definite by [F8]. If $m_{st}=\infty$, then $C_{\{s,t\}}=\begin{pmatrix}1&-1\\-1&1\end{pmatrix}$ and its quadratic form $(x-y)^2$ vanishes at $(1,1)$, so it is not positive definite by [F8] and there is no edge. In the finite case the two unit vertices have inner product $-\cos\theta=\cos(\pi-\theta)$ by [F7]; since $\pi-\theta\in[\pi/2,\pi)$, their angular separation within that edge cell is $\arccos(-\cos\theta)=\pi-\theta=\pi-\pi/m_{st}$. This computes the local edge length; it makes no claim that the global chain distance cannot be shorter. [F1, F2, F3, F4, F7, F8, algebra]

2.1 **Face gluing.** For every nonempty spherical $T$, [F4] realizes $C_T$ as a spherical simplex. If $T'\subset T$, its principal submatrix is the Gram matrix of the face spanned by the vertices indexed by $T'$, so the vertex-preserving face isometry agrees with the one obtained from any larger spherical simplex containing $T$. Hence these finitely many cells glue consistently along precisely their common faces. Singletons give point cells; the empty subset contributes only the empty face. [F4, step 1.1]

3.1 **The componentwise and truncated metrics.** There are finitely many cells because $S$ is finite. On each connected component the radial maps in [F6] are compatible on faces by [F4] and have a common finite bi-Lipschitz bound $K$, the maximum of the finitely many cell bounds. For any chain in the spherical cells, the length of its Euclidean image is at most $K$ times its spherical length; applying the inverse cell maps gives the reverse bound. Taking infima over chains proves that the two component chain distances are bi-Lipschitz equivalent. The Euclidean chain distance is a metric by [F6], since each radial image component is connected, finite, locally finite and has only finitely many cell shapes; therefore $d_L$ is a metric on each component. Across components the chain set is empty, and the value $+\infty$ is only auxiliary notation. Truncating a component metric at $\pi$ preserves the triangle inequality, while assigning distance $\pi$ between distinct components also satisfies it: if the endpoints are in different components, at least one leg of any two-leg route crosses components; if they are in the same component but the middle point is elsewhere, both legs equal $\pi$. The truncated distance separates distinct points and is finite, hence is a metric by [F9]. If $s,t$ lie in a spherical $T$, then $W_{\{s,t\}}\le W_T$ is finite; applying [F1] and [F2] to the pair shows $C_{\{s,t\}}$ is positive definite, which by step 1.2 forces $m_{st}<\infty$. Hence $B(e_s,e_t)=-\cos(\pi/m_{st})\in[-1,0]$ by [F3] and [F7]. Thus each spherical cell has nonpositive off-diagonal Gram entries, every edge length is at least $\pi/2$, and the finite complex is large. Iterated face links have the Schur-complement Gram data by [F5]. [F1, F2, F3, F4, F5, F6, F7, F9, step 1.2, step 2.1, algebra] ∎

## Remarks

- **Choice.** No use of AC is made here. The radial simplex comparisons in the spherical Gram supplier's clause (ii) are choice-free; its separate AC-dependent minimizing-geodesic conclusion in clause (iii) is not used.
- **Nerve and metric terminology.** Davis defines the nerve combinatorially by spherical subsets (§7.1) and identifies its natural piecewise-spherical metric as the link metric in the Davis complex (§12.1). Möller calls the corresponding metric on the full Davis complex the Moussong metric; this item names its induced truncated angular metric on the nerve.
- **Edge length versus chain distance.** $\ell_{st}$ is the distance inside the prescribed spherical edge cell. A gluing's global chain distance need not restrict to each cell's metric, so the statement deliberately does not identify $\ell_{st}$ with $d_L(s,t)$.
