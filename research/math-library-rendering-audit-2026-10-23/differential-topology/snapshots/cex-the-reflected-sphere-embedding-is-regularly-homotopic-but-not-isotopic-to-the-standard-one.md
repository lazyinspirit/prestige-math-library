---
id: cex-the-reflected-sphere-embedding-is-regularly-homotopic-but-not-isotopic-to-the-standard-one
kind: counterexample
title: A reflected sphere embedding is regularly homotopic but not isotopic to the standard one
status: published
origin: session
dependency_level: 14
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
- def-ck-and-multi-index-notation-in-several-variables
- thm-isotopy-extension
- thm-smale-classification-of-sphere-immersions-in-euclidean-space
- cor-regular-homotopy-classes-of-immersions-are-formal-homotopy-classes
- lem-standard-and-reflected-two-sphere-immersions-have-homotopic-formal-data-in-r-three
- def-regular-homotopy-of-immersions
- def-smooth-embedding
- prop-degree-of-an-orientation-preserving-or-reversing-diffeomorphism
- def-countable-choice
- def-smooth-isotopy-of-embeddings-diffeotopy-and-ambient-isotopy
- def-induced-boundary-orientation
- cor-diffeomorphisms-preserve-interior-and-boundary
- def-diffeomorphism-and-local-diffeomorphism-of-manifolds
- def-orientable-manifold
- thm-intermediate-value
- cor-determinant-is-a-polynomial-in-the-matrix-entries
- def-higher-derivatives-and-smoothness
- def-directional-and-partial-derivatives
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
  - title: Morris W. Hirsch, Differential Topology (Graduate Texts in Mathematics 33, Springer 1976; full text retrieved
      from the Internet Archive Wayback Machine snapshot of the luis.impa.br course copy), Chapter 8 “Isotopy”,
      §1, printed pp. 177–183 (Theorems 1.1–1.8 and Exercises 3, 7, 9, 10, 11, 16, printed pp. 182–184)
    url: https://web.archive.org/web/20230823153633/https://luis.impa.br/aulas/anvar/Hirsch_DifferentialTopology.pdf
  - title: C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156, Cambridge University
      Press 2016; full text retrieved from the Internet Archive Wayback Machine snapshot of the ETH Zürich course
      copy), Chapter 6 §§6.2–6.4, printed pp. 169–192 (Theorem 6.2.1; Propositions 6.3.1 and 6.3.3; Theorems 6.3.2,
      6.3.4, 6.3.6, 6.4.5, 6.4.8 and 6.4.9; Lemma 6.3.5)
    url: https://web.archive.org/web/20241113132819/https://people.math.ethz.ch/~dkosanovic/24-FS/Wall-Differential-Topology.pdf
---

## Statement refuted

Every pair of regularly homotopic embeddings of a closed manifold into Euclidean space is isotopic; equivalently, regular homotopy of embeddings and isotopy of embeddings define the same equivalence relation.

## Facts & Assumptions

**Given:** The standard inclusion $\iota:S^2\hookrightarrow\mathbb R^3$ of the unit sphere and a linear reflection $r:\mathbb R^3\to\mathbb R^3$ with $\det r=-1$.

[F1] Regular homotopy is a smooth family of immersions, while isotopy is a smooth family of embeddings ([[def-regular-homotopy-of-immersions]], [[def-smooth-isotopy-of-embeddings-diffeotopy-and-ambient-isotopy]], [[def-smooth-embedding]]).

[L1] For $m=2$ and $n=3$ the Smale classification of sphere immersions records that all immersions $S^2\to\mathbb R^3$ are regularly homotopic, because $\pi_2(SO(3))=0$ ([[thm-smale-classification-of-sphere-immersions-in-euclidean-space]], [[cor-regular-homotopy-classes-of-immersions-are-formal-homotopy-classes]]); for the standard inclusion and its reflection this formal-data homotopy is computed directly in [[lem-standard-and-reflected-two-sphere-immersions-have-homotopic-formal-data-in-r-three]], whose vanishing class in $\pi_2(SO(3))$ is the obstruction to homotoping the two formal data.

[L2] Under $\mathrm{AC}_\omega$ every smooth isotopy of the compact $S^2$ in the boundaryless $\mathbb R^3$ extends to an ambient isotopy, whose final restriction is the prescribed sphere map ([[thm-isotopy-extension]]).

[L3] A diffeomorphism between nonempty connected oriented boundaryless manifolds has degree $+1$ if it preserves orientation and $-1$ if it reverses it ([[prop-degree-of-an-orientation-preserving-or-reversing-diffeomorphism]]); a linear reflection $r$ with $\det r=-1$ preserves the unit ball and reverses the outward-normal-first boundary orientation of $S^2=\partial B^3$, so $r|_{S^2}$ has degree $-1$.

[A1] Countable choice is inherited from the Smale classification chain and the extension theorem; the reflection computations select nothing ([[def-countable-choice]]).

[L4] Smooth ambient diffeotopies have invertible differentials with continuous determinants; a nonzero continuous determinant starting at one stays positive by the intermediate value theorem. Boundary orientation is outward-normal-first. [[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]], [[def-ck-and-multi-index-notation-in-several-variables]], [[def-directional-and-partial-derivatives]], [[cor-determinant-is-a-polynomial-in-the-matrix-entries]], [[thm-intermediate-value]], [[def-induced-boundary-orientation]], [[cor-diffeomorphisms-preserve-interior-and-boundary]], [[def-orientable-manifold]]

## Counterexample

**Proof technique:** direct.

1.1 Both $\iota$ and $r\circ\iota$ are smooth embeddings of $S^2$ into $\mathbb R^3$: $\iota$ is the inclusion of an embedded submanifold, and $r$ is a linear isomorphism, hence a diffeomorphism of $\mathbb R^3$ whose composite with $\iota$ is again an embedding. [F1, L3]

2.1 The two embeddings are regularly homotopic: by [L1], applied with $m=2$ and $n=3$, all immersions $S^2\to\mathbb R^3$ are regularly homotopic because $\pi_2(SO(3))=0$, and $\iota$ and $r\circ\iota$ are such immersions; the reflection is, up to an orientation-preserving rotation of the target, the antipodal reparametrisation of the standard inclusion, and the direct formal-data computation identifies the obstruction as a class in $\pi_2(SO(3))=0$, so the two formal data are homotopic and the formal-data criterion gives the regular homotopy. Hence clause 1 of the counterexample holds. [L1, step 1.1, A1]

2.2 The two embeddings are not isotopic. Suppose an isotopy of embeddings from $\iota$ to $r\circ\iota$ existed. Since $S^2$ is compact and $\mathbb R^3$ is boundaryless, [L2] produces an ambient isotopy $H$ of $\mathbb R^3$ with $H_0=\mathrm{id}$ and $H_1\circ\iota=r\circ\iota$, that is $H_1|_{S^2}=r|_{S^2}$. [F1, L2, step 1.1]

3.1 The sphere complement has precisely the two connected components $U=\{|x|<1\}$ and $V=\{|x|>1\}$: $U$ is convex, and in $V$ radial paths to a common large sphere followed by great-circle arcs on that sphere (for antipodal endpoints choose a perpendicular unit vector by normalizing the first nonzero coordinate-vector projection) connect any two points. Since $H_1(S^2)=S^2$, the homeomorphism permutes these components. It cannot send $U$ to $V$, since $H_1(\overline U)$ is compact and therefore bounded, whereas $V$ is unbounded. Consequently $H_1(U)=U$ and $H_1(B^3)=B^3$. [F1, step 2.2, construct]

4.1 For every $x$, the function $t\mapsto\det dH_t(x)$ is continuous, never zero, and equals one at zero, so [L4] makes it positive for all $t$. Thus $H_1$ preserves the ambient orientation. Because it maps the ball's interior onto itself, its differential takes an outward transverse vector to an outward transverse vector at the sphere: in a boundary chart the inward normal coordinate has positive inward derivative, by invertibility and preservation of the interior. The outward-normal-first rule in [L4] therefore makes $H_1|_{S^2}$ orientation preserving. By [L3] its degree is $+1$, contradicting the reflection's degree $-1$. This proves the orientation argument locally, without a B-page prerequisite. [L3, L4, step 3.1, construct]

5.1 Therefore $\iota$ and $r\circ\iota$ are regularly homotopic but not isotopic, so the statement refuted is false: regular homotopy of embeddings is strictly coarser than isotopy of embeddings for $S^2$ in $\mathbb R^3$. The historically first instance, a knotted circle versus the round circle in $\mathbb R^3$, is recorded as a boundary rather than proved here, because its non-isotopy invariant $\pi_1(\mathbb R^3\setminus L)$ belongs to the low-dimensional knot track and not to this run's closure. [step 2.2, step 4.1] ∎
