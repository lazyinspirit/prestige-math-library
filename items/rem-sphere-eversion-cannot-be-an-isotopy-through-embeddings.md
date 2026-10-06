---
id: rem-sphere-eversion-cannot-be-an-isotopy-through-embeddings
kind: remark
title: "Sphere eversion cannot be an isotopy through embeddings"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [thm-sphere-eversion, def-regular-homotopy-of-immersions, def-smooth-embedding, cor-an-injective-immersion-from-a-compact-manifold-is-an-embedding, def-immersion-submersion-and-constant-rank-map, def-orientable-manifold, thm-jordan-brouwer-separation, thm-divergence-theorem-for-bounded-c-one-euclidean-domains, def-axiom-of-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Ralph L. Cohen, Immersions of Manifolds and Homotopy Theory (Harvard CMSA Math-Science Literature Lecture write-up, June 30 2022), §2.1 eversion paragraph"
      url: https://math.stanford.edu/~ralph/immersions-final.pdf
      locator: "PDF pp. 4–10; everted slices must have self-intersections because the orientation class of the parametrisation changes"
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology, Theorem 1.1 (every smoothly embedded 2-sphere in R^3 bounds a ball)"
      url: https://pi.math.cornell.edu/~hatcher/3M/3M.pdf
      locator: "Chapter 1, Theorem 1.1 and its corollaries; used only to name the bounded side, not for the sign computation"
dependency_level: 15
---

## Remark

Assume AC, including the countable-choice hypotheses of the eversion and
divergence suppliers. No homotopy from $\iota$ to $\iota\circ a$ (or to $r\circ\iota$) through
embeddings of $S^2$ into $\mathbb R^3$ exists, so every eversion contains
slices that are not injective; self-intersections are unavoidable. The
invariant is the coorientation: an embedding of $S^2$ into $\mathbb R^3$ bounds
a compact complementary region (indeed a ball, by Alexander's theorem, which
the argument below does not need; [[thm-jordan-brouwer-separation]] supplies
only the existence of the bounded region), and the sign of the parametrisation
relative to the boundary orientation of that region is locally constant along a
continuous family of embeddings: the proof below exhibits it as the sign of a
continuous flux integral, so continuity of the regions themselves is never
invoked. Thus $\iota$ has the positively oriented
parametrisation with respect to the outward normal while $\iota\circ a$ and
$r\circ\iota$ have the opposite sign, and the two lie in different path
components of the space of embeddings
$\operatorname{Emb}(S^2,\mathbb R^3)\subseteq C^\infty(S^2,\mathbb R^3)$.
Equivalently, an ambient isotopy of $\mathbb R^3$ preserves the side of the
image, whereas eversion reverses the inside/outside labelling. Regular homotopy
is strictly coarser than isotopy here: the two maps are in one path component
of $\operatorname{Imm}(S^2,\mathbb R^3)$ by the eversion theorem and in
different path components of the embedding space.

## Facts & Assumptions

**Given:** The unit sphere $S^2$, the standard embedding $\iota$, the antipodal map $a$, a reflection $r$ of $\mathbb R^3$ with $r\circ\iota=A\circ(\iota\circ a)$ for a rotation $A$, and the family of slices of a hypothetical homotopy through embeddings.

[F1] By the eversion theorem, $\iota$ and $\iota\circ a$ are regularly homotopic through immersions, and every regular homotopy between them has non-injective slices; a homotopy through embeddings is a homotopy whose slices are injective immersions of the compact sphere, hence embeddings. [[thm-sphere-eversion]], [[def-smooth-embedding]], [[cor-an-injective-immersion-from-a-compact-manifold-is-an-embedding]]

[F2] A regular homotopy has every slice immersive; embeddings are the injective immersions, and the orientation of the parametrisation relative to the bounded side is the coorientation sign of the remark. [[def-regular-homotopy-of-immersions]], [[def-immersion-submersion-and-constant-rank-map]], [[def-orientable-manifold]]

[F3] Jordan–Brouwer separation (AC): the image of an embedding $S^2\hookrightarrow\mathbb R^3$ has exactly two complementary components, one bounded and one unbounded, with common boundary the image. [[thm-jordan-brouwer-separation]], [[def-axiom-of-choice]]

[F4] The divergence theorem on a bounded $C^1$ Euclidean domain: the flux of the field $\tfrac13x$ through the boundary equals $\operatorname{vol}(B)$ for the outward orientation and $-\operatorname{vol}(B)$ for the inward orientation. [[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]]

## Proof

1.1 Suppose $t\mapsto H_t$ is a continuous path in the weak $C^\infty$ space of embeddings from $H_0=\iota$ to $H_1=r\circ\iota$ or $H_1=\iota\circ a$. For each $t$ the slice $H_t$ is an embedding of the compact sphere and bounds a bounded region $B_t$ by [F3]; define the flux $S(t)$ of the field $\tfrac13x$ through the parametrised surface $H_t$. Continuity of this path controls the values and first spatial derivatives uniformly on a finite chart cover of the compact sphere. Therefore the integrand $\tfrac13H_t\cdot(\partial_1H_t\times\partial_2H_t)$ is continuous in $(x,t)$ and hence bounded and uniformly continuous, so $t\mapsto S(t)$ is continuous; and by [F4], $S(t)=\pm\operatorname{vol}(B_t)$ with the sign given by the orientation of the parametrisation relative to the outward normal of $B_t$, so $S(t)\ne0$ for all $t$ and the sign of $S$ is constant. [F2, F3, F4]

2.1 At the ends: for $H_0=\iota$ in positively oriented coordinates of the unit sphere, the flux of $\tfrac13x$ is the volume $\tfrac{4\pi}{3}$ of the unit ball, so $S(0)>0$; for $H_1=T\circ\iota$ with $T=r$ or $T=-I$, the chain rule and $(Tu)\times(Tv)=\det(T)T(u\times v)$ with $\det T=-1$ give $S(1)=-S(0)<0$. This contradicts the constant sign of step 1.1, so no homotopy through embeddings from $\iota$ to $r\circ\iota$ exists, and by [F1] every regular homotopy from $\iota$ to $\iota\circ a$ has non-injective slices: eversion necessarily produces self-intersections. AC is inherited from Jordan–Brouwer and from the eversion assertion; it also implies the countable-choice assumption of the divergence theorem. The sign computation is elementary. [F1, step 1.1] ∎

The two path components just separated are components of the space of embeddings, while the eversion theorem puts the two maps in one component of the space of immersions; this is the precise sense in which regular homotopy is coarser than isotopy for the sphere in $\mathbb R^3$.
