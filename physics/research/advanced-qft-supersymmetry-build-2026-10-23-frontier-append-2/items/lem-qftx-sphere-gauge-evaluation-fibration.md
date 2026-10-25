---
id: lem-qftx-sphere-gauge-evaluation-fibration
kind: lemma
title: "Evaluation and finite-center fibrations of sphere gauge groups"
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 3
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-gauge-group-sphere-homotopy
physical_scope: null
proof_strategy: direct
axiom_base: "ZF + AC"
deps:
  - def-qftx-smooth-sobolev-gauge-configuration
  - def-locally-trivial-fiber-bundle
  - thm-long-exact-sequence-of-homotopy-groups-of-a-fibration
  - thm-numerable-fiber-bundles-are-hurewicz-fibrations
  - thm-homotopy-lifting-for-covering-maps
  - lem-qftx-special-unitary-column-fibration
  - cor-euclidean-spheres-are-path-connected
  - def-axiom-of-choice
dependency_roles:
  def-qftx-smooth-sobolev-gauge-configuration: mathematical-premise
  def-locally-trivial-fiber-bundle: mathematical-premise
  thm-long-exact-sequence-of-homotopy-groups-of-a-fibration: mathematical-premise
  thm-numerable-fiber-bundles-are-hurewicz-fibrations: mathematical-premise
  thm-homotopy-lifting-for-covering-maps: mathematical-premise
  lem-qftx-special-unitary-column-fibration: mathematical-premise
  cor-euclidean-spheres-are-path-connected: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "J. P. May, A Concise Course in Algebraic Topology"
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: "Chapter 7, pp. 49–56; numerable locally trivial bundles are Hurewicz fibrations."
    - title: "Allen Hatcher, Algebraic Topology, Chapter 4"
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf
      locator: "§4.2, printed pp. 379–381; fibration and homotopy-sequence context."
verification:
  precheck: pending
---
## Statement

Let $P\to S^r$ be a smooth principal $SU(N)$ bundle with $r\in\{3,4\}$, $N\ge2$, a chosen point $m\in S^r$, and a chosen frame $p_m$ in its fiber. Write $\mathcal G(P):=\mathcal G_\infty(P)$ for the smooth gauge group defined by the finite-atlas $C^\infty$ section topology, let $\mathcal G_m(P):=\{u\in\mathcal G_\infty(P):u(p_m)=e\}$, and put $\overline{\mathcal G}(P):=\overline{\mathcal G}_\infty(P)=\mathcal G_\infty(P)/Z_N$, where $Z_N$ is the finite subgroup of constant central gauge sections. Evaluation $ev_m(u)=u(p_m)$ gives a locally trivial bundle
$$\mathcal G_m(P)\longrightarrow\mathcal G(P)\xrightarrow{ev_m}SU(N),$$
and the quotient map $\mathcal G(P)\to\overline{\mathcal G}(P)$ is a finite covering. For a local section $s:U\to\mathcal G(P)$, the bundle chart has the commutative form
$$\begin{array}{ccc}\mathcal G_m(P)\times U&\xrightarrow{\Phi_s}&ev_m^{-1}(U)\\\downarrow{\operatorname{pr}_2}&&\downarrow{ev_m}\\U&\hookrightarrow&SU(N)\end{array}$$
where $\Phi_s(v,g)=v\,s(g)$; the square commutes because $ev_m(v)=e$ and $ev_m(s(g))=g$. The corresponding TikZ source is:
```tikz
\begin{tikzcd}
\mathcal G_m(P)\times U \arrow[r,"\Phi_s"] \arrow[d,"\operatorname{pr}_2"'] & ev_m^{-1}(U) \arrow[d,"ev_m"]\\
U \arrow[r,hook] & SU(N)
\end{tikzcd}
```
The evaluation bundle is numerable; both maps are Serre fibrations and have the homotopy long exact sequence.

## Statement references

[May, A Concise Course in Algebraic Topology, Chapters 7 and 9](https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf)

[Hatcher, Algebraic Topology, Chapter 4](https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf)

## Facts & Assumptions

**Given:** The bundle and frame of the Statement. Use the actual smooth-section conventions below; their carrier exists, but its current hash-bound Step 1 record is `ready` according to `loadStep1Record` and `step1Decision`; this is authoring readiness, not independent approval.

[F1] The actual configuration definition fixes compact connected oriented boundaryless smooth Riemannian $M$ with $d\in\{3,4\}$, a smooth principal $SU(N)$ bundle $P$, frame $p_m$, the adjoint group bundle, the smooth gauge group $\mathcal G_\infty$ with finite-atlas $C^\infty$ section topology, its based subgroup, and the constant central sections $Z_N$. It also defines the Sobolev spaces, $\mathcal A_\infty$, and $\overline{\mathcal G}_\infty=\mathcal G_\infty/Z_N$. The carrier is present, its Definition has been inspected, and its hash-bound Step 1 record is current and `ready`; this is authoring readiness, not independent approval. [[def-qftx-smooth-sobolev-gauge-configuration]]

[F2] A locally trivial fiber bundle is defined by supplied local product charts; a numerable such bundle is a Hurewicz fibration under AC. [[def-locally-trivial-fiber-bundle]], [[thm-numerable-fiber-bundles-are-hurewicz-fibrations]], [[def-axiom-of-choice]]

[F3] A based Serre fibration has the long exact sequence of homotopy groups and component sets. [[thm-long-exact-sequence-of-homotopy-groups-of-a-fibration]]

[F4] The last-column map $SU(N)\to S^{2N-1}$ is locally trivial with fiber $SU(N-1)$. [[lem-qftx-special-unitary-column-fibration]]

[F5] Every sphere $S^d$ with $d\ge1$ is path connected. [[cor-euclidean-spheres-are-path-connected]]

[F6] Covering maps have the homotopy lifting property, so their induced homotopy-group sequences apply. [[thm-homotopy-lifting-for-covering-maps]]

[A1] Choose a bundle chart over a neighborhood of $m$ and the frame $p_m$ to identify the evaluated fiber with the matrix group $SU(N)$. The central subgroup $Z_N$ consists of the scalar matrices $\zeta I$ with $\zeta^N=1$.

## Proof

1.1 In a trivializing ball around $m$, choose a smooth bump $b$ supported in that ball with $b(m)=1$. For $g$ near $I$, use a smooth logarithm $X=\log g\in\mathfrak{su}(N)$ and define a gauge section by $u_g(x)=\exp(b(x)X)$ in that chart and the identity outside. This gives a continuous local section of evaluation near $I$. To see that every value is attained, begin at $N=2$: [F4] gives a bundle $SU(1)\to SU(2)\to S^3$ with one-point fiber, and [F5] makes the base path connected; the component exactness [F3] therefore makes $SU(2)$ path connected. Inductively, [F4] is a surjective locally trivial bundle with path-connected fiber $SU(N-1)$ and path-connected base sphere [F5]; path lifting and [F3] imply $SU(N)$ is path connected. A path from $I$ to any $g_0$ is covered by finitely many logarithm neighborhoods; subdividing it writes $g_0$ as a finite product of elements in the identity chart. Multiplying the corresponding bump-supported sections gives a gauge section $v_0$ with $v_0(p_m)=g_0$. Translation of the identity-neighborhood section by $v_0$ yields a local section near every $g_0$. [A1, F3, F4, F5, construct]

1.2 The finite group $Z_N$ acts on the Hausdorff topological group $\mathcal G(P)$ by free translations. Choose an identity neighborhood $V$ with $V^{-1}V\cap Z_N=\{e\}$; this is possible because the finite set $Z_N\setminus\{e\}$ is closed and avoids the identity. The translates $Vz$ are pairwise disjoint. Since the quotient map is open and identifies each translate homeomorphically with the image of $V$, that image is evenly covered. Translation gives the same construction around every group element, so the quotient map is a covering with exactly $|Z_N|=N$ sheets. By [F1] and [A1], this is the finite-center quotient specified in the Statement. [A1, F1, given]

2.1 In the finite-atlas $C^\infty$ topology, pointwise multiplication and inversion are continuous: each derivative seminorm of a product or inverse is bounded on compact chart supports by finitely many derivative seminorms of the inputs, by the finite-dimensional product and chain rules. If $s:U\to\mathcal G(P)$ is one of the local sections, the maps
$$(v,g)\longmapsto v\,s(g),\qquad u\longmapsto\bigl(u\,s(ev_m(u))^{-1},ev_m(u)\bigr)$$
are continuous inverses between $\mathcal G_m(P)\times U$ and $ev_m^{-1}(U)$. The first coordinate in the inverse evaluates to $e$, and the product reconstructs $u$. Thus evaluation is a locally trivial bundle with fiber exactly its kernel $\mathcal G_m(P)$. A finite cover of compact $SU(N)$ by such neighborhoods and a partition of unity make this bundle numerable. By [F2] it is a Hurewicz fibration; [F3] supplies its homotopy LES. [F1, F2, F3, step 1.1, construct]

3.1 The base $SU(N)$ is compact, so the finite local trivializations of evaluation admit a subordinate partition of unity. By [F2, F3] the evaluation bundle is a Serre fibration with the homotopy LES. The finite quotient is a covering; [F6] gives its homotopy lifting property and hence its fibration property. This completes the claims. [F2, F3, F6, step 2.1, step 1.2, given] ∎

