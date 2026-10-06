---
id: cex-vanishing-stable-characteristic-classes-does-not-make-two-embeddings-isotopic
kind: counterexample
title: "Vanishing stable characteristic classes do not make two embeddings isotopic"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - cor-a-vector-bundle-is-trivial-if-and-only-if-it-has-a-global-frame
  - def-axiom-of-choice
  - def-countable-choice
  - def-diffeomorphism-and-local-diffeomorphism-of-manifolds
  - def-induced-boundary-orientation
  - def-normal-stiefel-whitney-and-pontryagin-classes-of-a-closed-manifold
  - def-orientable-manifold
  - def-smooth-embedding
  - def-smooth-isotopy-of-embeddings-diffeotopy-and-ambient-isotopy
  - lem-an-embedding-into-r-n-gives-the-same-normal-bundle-identity
  - prop-an-ambient-riemannian-metric-identifies-the-normal-quotient-with-the-orthogonal-normal-bundle
  - prop-degree-of-an-orientation-preserving-or-reversing-diffeomorphism
  - prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-isotopy-extension
justified_by: []
dependency_level: 10
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "John W. Milnor and James D. Stasheff, Characteristic Classes (Annals of Mathematics Studies 74, Princeton University Press; complete text)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "SS4, printed pp. 43-48 (Lemma 4.4, Theorem 4.5, Corollary 4.6, the immersion paragraph, Theorem 4.8); SS11, printed pp. 119-136 (Theorem 11.3, Corollary 11.12, Wu's formula and Corollary 11.15); SS15, printed pp. 173-178 (Theorem 15.3, Corollary 15.5, Corollary 15.8)"
    - title: "Ralph L. Cohen, Immersions of Manifolds and Homotopy Theory (lecture notes, 30 June 2022; complete 46-page text)"
      url: "https://math.stanford.edu/~ralph/immersions-final.pdf"
      locator: "SS1-3.1, PDF pp. 4-13: Proposition 1, Theorem 2 (Hirsch-Smale), Corollary 3 (k-dimensional inverse of the tangent bundle), Theorems 4-5, Corollary 10 (normal Stiefel-Whitney nonimmersion test) and the RP^{2^k} example, Theorem 11 (Massey)"
    - title: "Arkadiy Skopenkov, Embedding and Knotting of Manifolds in Euclidean Spaces (arXiv:math/0604045)"
      url: "https://arxiv.org/pdf/math/0604045"
      locator: "SS1-2, article pp. 1-13; the subsection 'The Whitney obstruction' on article pp. 11-12 (modulo 2 and integral Whitney obstructions, normal Stiefel-Whitney classes, Pontryagin classes p_i as embedding obstructions), and the knotting boundary in SS2-3 and SS5"
---

## Statement refuted

FALSE: if two smooth embeddings of a closed oriented manifold into Euclidean space have isomorphic (even trivial) normal bundles and identical stable characteristic classes, then they are isotopic.

Assume AC. Let $i:S^2\hookrightarrow\mathbb R^3$ be the standard inclusion of the unit sphere and let $r:S^2\hookrightarrow\mathbb R^3$ be its reflection $r(x_1,x_2,x_3)=(x_1,x_2,-x_3)$. Both are smooth embeddings of a closed oriented surface whose normal line bundle is trivial (computed below); hence the embeddings have isomorphic normal bundles and identical stable characteristic classes: $\bar w=1$, $\bar p=1$, and every characteristic-class test of this page (immersion or embedding, mod-two or rational) vanishes for both. Nevertheless $i$ and $r$ are **not** isotopic embeddings of $S^2$ in $\mathbb R^3$. Indeed, an isotopy from $i$ to $r$ would extend by [[thm-isotopy-extension]] to an ambient isotopy $H:\mathbb R^3\times[0,1]\to\mathbb R^3$ with $H_0=\operatorname{id}$ and $H_1\circ i=r$. The time-one map $H_1$ is an orientation-preserving diffeomorphism of $\mathbb R^3$ and $H_1(S^2)=S^2$; the diffeomorphism $H_1$ permutes the connected components of $\mathbb R^3\setminus S^2$. The image $H_1(\operatorname{int}B^3)$ is a component whose closure $H_1(B^3)$ is compact, hence it is the bounded component $\operatorname{int}B^3$. Thus $H_1(B^3)=B^3$. Its restriction to $S^2$ therefore has degree $+1$ ([[prop-degree-of-an-orientation-preserving-or-reversing-diffeomorphism]], [[def-induced-boundary-orientation]]), whereas $r|_{S^2}$ has degree $-1$ ([[prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps]], [[def-orientable-manifold]]); this contradicts $H_1\circ i=r$. Hence vanishing stable characteristic classes do not imply isotopy of embeddings.

## Facts & Assumptions

**Given:** The unit sphere $S^2=\partial B^3\subseteq\mathbb R^3$ with its standard orientation as a boundary (outward-normal-first), the standard inclusion $i$ and the reflection $r(x_1,x_2,x_3)=(x_1,x_2,-x_3)$; AC.

[F1] Both $i$ and $r$ are smooth embeddings and oriented hypersurfaces of the oriented $\mathbb R^3$; their normal line bundles are trivial, and for the closed oriented surface $S^2$ the normal classes are $\bar w(S^2)=1$ and $\bar p(S^2)=1$, with all higher normal classes vanishing by rank (the local calculation below, [[def-smooth-embedding]], [[def-orientable-manifold]]).

[F2] A smooth isotopy of a compact manifold $M$ in a smooth manifold $N$ extends to an ambient isotopy: for $F:M\times I\to N$ an isotopy of embeddings constant near the ends and $W$ a neighbourhood of the track, there is $H:N\times I\to N$ with $H_0=\operatorname{id}_N$, every $H_t$ a diffeomorphism, $H_t\circ F_0=F_t$ for all $t$, and $H_t=\operatorname{id}_N$ outside $W$ ([[thm-isotopy-extension]], [[def-smooth-isotopy-of-embeddings-diffeotopy-and-ambient-isotopy]]). Here $M=S^2$ is compact, $N=\mathbb R^3$, and the neighbourhood hypothesis is vacuous with $W=N$.

[F3] A diffeomorphism $H_1$ of $\mathbb R^3$ that is the time-one map of a diffeotopy from the identity preserves orientation: the orientation sign of $H_t$ at each point is a continuous function of $t$ with value $+1$ at $t=0$ and takes values in $\{\pm1\}$ ([[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]], [[def-orientable-manifold]]); changing coordinates does not affect the degree of a self-map of a connected closed oriented manifold ([[prop-degree-of-an-orientation-preserving-or-reversing-diffeomorphism]]).

[F4] The reflection $r$ restricts on $S^2\subseteq\mathbb R^3$ to a single coordinate reflection of the sphere, hence has degree $-1$ as a self-map of $S^2$; with the outward-normal-first orientation of $S^2=\partial B^3$ this says exactly that $r|_{S^2}$ is orientation-reversing ([[prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps]], [[prop-degree-of-an-orientation-preserving-or-reversing-diffeomorphism]], [[def-induced-boundary-orientation]]). The closed ball $B^3$ is compact and $\mathbb R^3\setminus S^2$ has exactly two connected components, the bounded $\operatorname{int}B^3$ and the unbounded one, with the latter containing points of arbitrarily large norm.

[F5] AC implies the countable choice assumed by the isotopy extension theorem ([[thm-choice-implies-dependent-implies-countable-choice]], [[def-countable-choice]], [[def-axiom-of-choice]]).

## Counterexample

1.1 For the standard embedding $i(p)=p$ the radial field $n_i(p)=p$ spans its orthogonal normal line and is smooth and nowhere zero. For the reflected embedding $r$, the field $n_r(p)=r(p)$ is normal because reflection preserves inner products: $\langle r(p),dr_p(v)\rangle=\langle p,v\rangle=0$. It is again a smooth nowhere-zero frame. Thus both normal lines are trivial. The embedding normal-bundle identity identifies their characteristic classes with the stable normal classes of $S^2$, and the trivial line has total Stiefel--Whitney and Pontryagin class $1$ and Euler class $0$. [given, construct, algebra]

1.2 The two embeddings have identical stable characteristic classes. Both are embeddings of the same closed oriented surface $S^2$ into $\mathbb R^3$ with trivial normal line bundle by [F1], so their normal bundles are isomorphic (both trivial). The normal classes $\bar w(S^2)=1$ and $\bar p(S^2)=1$ of [F1] are classes of the manifold $S^2$ and therefore the same for both embeddings, and the codimension-one Euler class of the trivial normal line is zero. Consequently every characteristic-class test considered on this page — the mod-two normal classes, the rational normal Pontryagin classes and the oriented Euler class — evaluates trivially for both $i$ and $r$, so no such test distinguishes them. [F1]

1.3 Suppose, for contradiction, that $i$ and $r$ were isotopic: there is a smooth isotopy of embeddings $F:S^2\times I\to\mathbb R^3$ with $F_0=i$ and $F_1=r$. Replacing $F$ by a reparametrisation in $t$ that is constant near the ends, the isotopy is constant near the ends without changing its endpoints; by [F2] and [F5] it extends to an ambient isotopy $H:\mathbb R^3\times I\to\mathbb R^3$ with $H_0=\operatorname{id}_{\mathbb R^3}$, every $H_t$ a diffeomorphism, and $H_t\circ i=F_t$ for every $t$. In particular $H_1\circ i=r$. [F2, F5]

2.1 The time-one map $H_1$ is an orientation-preserving diffeomorphism of $\mathbb R^3$ by [F3]. Since $H_1\circ i=r$ and $i,r$ have image $S^2$, it satisfies $H_1(S^2)=S^2$. As a diffeomorphism it maps the two connected components of $\mathbb R^3\setminus S^2$ onto the two components, and $H_1(\operatorname{int}B^3)$ is a component whose closure $H_1(B^3)$ is compact because $B^3$ is compact and $H_1$ is continuous: hence $H_1(\operatorname{int}B^3)$ is the bounded component $\operatorname{int}B^3$ and $H_1(B^3)=B^3$. [F3, F4, step 1.3]

3.1 Since $H_1$ is an orientation-preserving diffeomorphism of $\mathbb R^3$ mapping $B^3$ onto itself, it maps the boundary $S^2$ to itself and its differential carries outward-pointing boundary vectors to outward-pointing boundary vectors; therefore the restriction $H_1|_{S^2}:S^2\to S^2$ preserves the outward-normal-first boundary orientation. By [F3] and [F4], an orientation-preserving diffeomorphism of the connected closed oriented surface $S^2$ has degree $+1$. [F3, F4, step 2.1]

4.1 On the other hand $H_1\circ i=r$ means $H_1|_{S^2}=r|_{S^2}$ as maps $S^2\to S^2$, and by [F4] the reflection has degree $-1$. This contradicts the degree $+1$ computed in step 3.1, so no isotopy from $i$ to $r$ exists. Hence two embeddings with identical (indeed trivial) normal bundles and identical stable characteristic classes need not be isotopic, and these characteristic classes do not determine isotopy. AC is inherited from the characteristic-class suppliers and supplies the countable choice used by isotopy extension. [F3, F4, F5, step 1.3, step 3.1] ∎
