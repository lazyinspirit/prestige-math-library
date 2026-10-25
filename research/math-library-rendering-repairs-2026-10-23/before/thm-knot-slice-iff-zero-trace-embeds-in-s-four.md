---
id: thm-knot-slice-iff-zero-trace-embeds-in-s-four
kind: theorem
title: "A knot is smoothly slice exactly when its zero-trace embeds in $S^4$"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-smooth-zero-trace
  - def-knot-meridian-and-preferred-longitude
  - lem-slice-disk-complement-h1-is-generated-by-meridian
  - lem-knot-exterior-h1-is-generated-by-meridian
  - def-smooth-immersion-and-embedding-for-manifolds-with-boundary
  - thm-euclidean-inverse-function-theorem
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Lisa Piccirillo, The Conway knot is not slice"
      url: "https://arxiv.org/pdf/1808.02923"
      locator: "Lemma 1.3 and its complete two-direction proof, printed p. 583 (PDF p. 2)"
    - title: "Jennifer Hom, Getting a handle on the Conway knot"
      url: "https://arxiv.org/pdf/2107.09171"
      locator: "§4, Trace Embedding Lemma, and §7, complete proof discussion"
    - title: "Alessia Cattabriga and Stefano Francaviglia, Knot Theory and Applications: Lecture Notes"
      url: "https://poisson.phc.dm.unipi.it/~camponovo/libri/knot.pdf"
      locator: "§4.4, pp. 24–25, peripheral slopes and preferred longitude; the framing comparison is proved below"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Let $K\subset S^3$ be a smooth oriented knot with a chosen tubular neighborhood
and preferred longitude. Call $K$ smoothly slice when it bounds a smooth
properly embedded disk in the standard $B^4$, with a product collar at its
boundary. Then $K$ is smoothly slice if and only if the compact smooth
$4$-manifold $X_0(K)$, formed using that preferred-longitude framing, admits a
smooth codimension-zero embedding into the standard $S^4$.

## Statement references

[Piccirillo, Lemma 1.3](https://arxiv.org/pdf/1808.02923)

[Hom, §§4 and 7](https://arxiv.org/pdf/2107.09171)

[Cattabriga–Francaviglia, §4.4, peripheral slopes](https://poisson.phc.dm.unipi.it/~camponovo/libri/knot.pdf)

## Facts & Assumptions

**Given:** A smooth oriented knot $K\subset S^3$ with its fixed tubular neighborhood and preferred longitude; the standard decomposition $S^4=B_1\cup_{S^3}B_2$ into two $4$-balls; and the zero-trace convention. The tube and peripheral curve are fixed data throughout; no choice principle is used to select a family of them.

[F1] [[def-smooth-zero-trace]]: $X_0(K)$ is $B^4$ with a $2$-handle attached using the framing whose pushoff represents the preferred zero-linking longitude.

[F2] [[def-knot-meridian-and-preferred-longitude]]: the preferred longitude is the degree-one peripheral class whose image in $H_1(E_K;\mathbb Z)$ is zero.

[F3] [[lem-slice-disk-complement-h1-is-generated-by-meridian]]: for a proper slice disk $D$, the boundary exterior $E_K$ includes into the disk exterior $X$ with $H_1(E_K)\to H_1(X)$ an isomorphism carrying meridian to meridian.

[F4] [[def-smooth-immersion-and-embedding-for-manifolds-with-boundary]]: a smooth embedding is a smooth immersion and homeomorphism onto its image; here both source and target have dimension four.

[F5] [[thm-euclidean-inverse-function-theorem]]: a $C^1$ map between open subsets of $\mathbb R^4$ with invertible derivative at a point is a local diffeomorphism there.

[F6] [[lem-knot-exterior-h1-is-generated-by-meridian]]: $H_1(E_K;\mathbb Z)$ is infinite cyclic on the positive meridian.

## Proof

**Proof technique:** direct.

1.1 Suppose $D\subset B_1$ is a smooth proper slice disk for $K$. Its oriented normal $2$-plane bundle is trivial because $D$ is a disk. Choose a nowhere-zero normal section and push $D$ to a parallel disk $D'$ in the exterior $X$ of a smaller product tube of $D$. Its boundary $K'$ is a degree-one parallel of $K$, identified radially with a curve on the fixed boundary torus. It bounds $D'$ in $X$, so [F3] makes its class zero in $H_1(E_K)$. It is therefore a preferred longitude in the sense of [F2]. To compare with the fixed framing, let $s_0$ be its section pushoff representing $\lambda_K$. In product coordinates on the tube, the classes of $s_0$ and $\mu_K$ form a basis of the torus homology: its two coordinate circles generate $H_1(S^1\times S^1;\mathbb Z)$. The disk-induced section has class $[K']=[s_0]+n[\mu_K]$, where $n$ is the winding number of its normal direction relative to $s_0$. Both section classes vanish in $H_1(E_K)$, so $n=0$ by [F6]. The relative direction map $S^1\to S^1$ consequently has a periodic real-valued angle lift; scaling that lift to zero homotopes the two normal framings. Fibre rotations along this homotopy give isotopic attaching tubes. Thus the disk tube induces the fixed preferred-longitude framing, rather than merely some curve satisfying [F2]. [F1, F2, F3, F6, given, construct, algebra]

1.2 Conversely, suppose $i:X_0(K)\hookrightarrow S^4$ is a smooth codimension-zero embedding. In the $0$-handle of $X_0(K)$ take the cone on $K$ from an interior point $p$, and join that cone disk to the core disk $D^2\times\{0\}$ of the $2$-handle along their common boundary $K$. After smoothing the join, this is a piecewise-smooth embedded $2$-sphere, smooth away from the cone point $p$. [F1, given, construct]

1.3 Use oriented coordinates at $p$ and standard stereographic coordinates centred at $i(p)$. The derivative of $i$ is invertible by [F4], because its differential is injective and both dimensions are four. By [F5], $i$ is a local diffeomorphism near $p$. If its local orientation sign is negative, compose it with a fixed orientation-reversing reflection of the standard $S^4$; this preserves the existence of the embedding and makes the local sign positive. Thus its derivative $A$ lies in $\mathrm{GL}^+(4,\mathbb R)$. [F4, F5, given, construct]

2.1 A tubular neighborhood of $D$ is $D^2\times D^2$ and meets the other hemisphere $B_2$ in the attaching region $S^1\times D^2$. Consequently $B_2\cup\nu(D)$ is obtained from a $4$-ball by attaching one $0$-framed $2$-handle along $K$, hence is diffeomorphic to $X_0(K)$ by [F1]. This union is a smooth codimension-zero submanifold of $S^4$. [F1, step 1.1, construct]

2.2 Identify the cone near $p$ with the radial cone on $K\subset S^3$. Along each direction $u\in K$, the derivative at the cone point of the target distance is $\lVert Au\rVert>0$. Compactness of $K$ makes this derivative uniformly positive, so [F5] gives a smooth radial intersection parameter for all sufficiently small target spheres. Taylor expansion in $C^1$ along $K$, followed by radial normalization, makes the resulting link $\Gamma_\epsilon$ $C^1$-close to $\phi_A(K)$, where $\phi_A(u)=Au/\lVert Au\rVert$. The polar decomposition $A=QP$ joins $A$ to the identity through $\mathrm{GL}^+(4,\mathbb R)$: join the positive-definite $P$ to $I$ linearly and join $Q\in\mathrm{SO}(4)$ to $I$ by a path in the connected group $\mathrm{SO}(4)$. Hence $\phi_A(K)$ is isotopic to $K$. The chosen normal-disk tube of $K$, transported by $\phi_A$, is a tube of $\phi_A(K)$. For sufficiently small $\epsilon$, the tubular projection restricts to a local diffeomorphism from $\Gamma_\epsilon$ to $\phi_A(K)$. It is homotopic to the identity because the curves are $C^1$-close, so it has degree one; a local diffeomorphism of circles with degree one is a diffeomorphism. Thus $\Gamma_\epsilon$ is the graph of a small normal section. Scaling that section to zero gives a smooth knot isotopy to $\phi_A(K)$, so $\Gamma_\epsilon$ is isotopic to $K$. [F2, F5, step 1.3, algebra, construct]

3.1 Choose the round ball bounded by that small sphere in the fixed stereographic chart. Its complement $W=S^4\setminus\operatorname{int}(B_\epsilon)$ is a standard $4$-ball, as seen by inversion in the chart with its point at infinity. Shrink $\epsilon$ so that the ball misses the compact part of the image sphere outside the cone chart. The image sphere is smooth away from the cone point; transversality makes its remainder after deleting the cone cap a smooth properly embedded disk in $W$ with product boundary collar and boundary $\Gamma_\epsilon$. Append the trace annulus of the isotopy in step 2.2 inside a boundary collar of $W$, with the isotopy stationary near its ends. The result is a smooth slice disk with boundary exactly $K$. [step 1.2, step 1.3, step 2.2, construct]

4.1 Steps 1.1, 2.1 construct an embedding from a slice disk, and steps 1.2, 1.3, 2.2, 3.1 construct a slice disk from an embedding. These are the two implications in the statement. [step 1.1, step 2.1, step 1.2, step 1.3, step 2.2, step 3.1, given] ∎


## Diagram

~~~tikz
\begin{tikzpicture}[scale=0.9]
  % The two circles on the left are separate disks whose boundaries are identified.
  \draw[thick] (0,0) circle (0.62);
  \foreach \a in {0,45,...,315} {
    \draw[thin] (0,0) -- ({0.62*cos(\a)},{0.62*sin(\a)});
  }
  \fill (0,0) circle (1.5pt);
  \node[above] at (0,0.82) {$\partial D_{\mathrm{cone}}=K$};
  \node[below] at (0,-0.82) {$D_{\mathrm{cone}}$};
  \node[below] at (0,-0.1) {$p$};

\draw[thick] (1.65,0) circle (0.62); \node[above] at (1.65,0.82) {$\partial D_{\mathrm{core}}=K$}; \node[below] at (1.65,-0.82) {$D_{\mathrm{core}}$}; \node at (0.82,1.28) {identify boundaries}; \node at (0.82,1.02) {$K$};

\draw[->,thick] (2.38,0) -- (2.95,0); \node[above] at (2.66,0.05) {glue};

\draw[thick] (3.75,0) circle (0.75); \draw[thick] (3.0,0) -- (4.5,0); \node[left] at (3.0,0) {$K$}; \fill (3.75,0.75) circle (1.5pt); \node[above] at (3.75,0.9) {$p$}; \node at (3.75,0.34) {cone}; \node at (3.75,-0.34) {core}; \node[below] at (3.75,-0.92) {piecewise-smooth sphere}; \draw[dashed,thick] (3.47,0.68) .. controls (3.75,0.8) .. (4.03,0.68); \node[right] at (4.02,0.7) {$\Gamma_\epsilon$};

\draw[->,thick] (4.62,0) -- (5.2,0); \node[above] at (4.92,0.05) {remove cap};

  \draw[thick] (5.9,0) ellipse (0.68 and 0.48);
  \node at (5.9,0) {slice disk};
  \node[above] at (5.9,0.55) {$\partial D=\Gamma_\epsilon$};
\end{tikzpicture}
~~~

The schematic identifies the cone disk and the $2$-handle core along their common boundary $K$, and marks the cone point and the small boundary $\Gamma_\epsilon$ created by deleting a cap. The proof uses the local coordinate-ball argument above, not the sketch.

