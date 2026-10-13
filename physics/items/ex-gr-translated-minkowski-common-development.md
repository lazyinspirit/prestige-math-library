---
id: ex-gr-translated-minkowski-common-development
kind: example
title: "Maximal common development and gluing of the flat vacuum data with its translate"
status: published
origin: session
domain: mathematics
dependency_level: 42
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
deps: [def-countable-choice, def-dependent-choice, def-gr-development-and-data-fixing-isometry, def-gr-common-subdevelopment-and-corresponding-boundary, lem-gr-maximal-common-development, lem-gr-development-pair-gluing, lem-gr-no-corresponding-boundary-points, ex-gr-minkowski-maximal-development, def-gr-spacelike-hypersurfaces-and-cauchy-sets, def-gr-causal-curves-and-reachability]
dependency_roles:
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  def-gr-development-and-data-fixing-isometry: mathematical-premise
  def-gr-common-subdevelopment-and-corresponding-boundary: mathematical-premise
  lem-gr-maximal-common-development: mathematical-premise
  lem-gr-development-pair-gluing: mathematical-premise
  lem-gr-no-corresponding-boundary-points: mathematical-premise
  ex-gr-minkowski-maximal-development: mathematical-premise
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
sources:
  references:
    - title: "J. Sbierski, On the Existence of a Maximal Cauchy Development for the Einstein Equations - a Dezornification, arXiv:1309.7591v3 (2015): Theorem 2.7, whose simplest non-identical instance is the example discussed here, printed pp. 20-22"
      url: "https://arxiv.org/pdf/1309.7591"
verification:
  precheck: n/a
---

## Example

Assume Countable Choice and Dependent Choice ([[def-countable-choice]], [[def-dependent-choice]]) for the invoked general causal and maximal-development suppliers.

Let the flat vacuum data of [[ex-gr-minkowski-maximal-development]] be given
($\Sigma=\mathbb R^3$, $h=\delta$, $K=0$, $\Lambda=0$, vacuum). Let
$M:=(\mathbb R^{1,3},\eta)$ with the embedding $j(x):=(0,x)$ and let
$M':=(\mathbb R^{1,3},\eta)$ with the translated embedding
$j'(x):=(1,x)$; both are developments of the same data (in $M'$ the slice
$\{t=1\}$ has induced metric $\delta$ and vanishing second fundamental form
and is a Cauchy surface). Let $\psi:M\to M'$ be the time translation
$\psi(t,x):=(t+1,x)$. Then:

**(a)** $(M,\psi)$ is a common subdevelopment of $M$ and $M'$, and it is the
maximal common development;

**(b)** the glued quotient of [[lem-gr-development-pair-gluing]] is
isometric, in a data-fixing way, to Minkowski spacetime itself, the two
embeddings being the identity and the inverse translation.

## Facts & Assumptions

**Given:** Countable Choice and Dependent Choice; the flat vacuum data $\Sigma=\mathbb R^3$, $h=\delta$, $K=0$, $\Lambda=0$, vacuum; the developments $M=(\mathbb R^{1,3},\eta)$, $j(x)=(0,x)$ and $M'=(\mathbb R^{1,3},\eta)$, $j'(x)=(1,x)$; and the time translation $\psi(t,x):=(t+1,x)$.

[L1] Both $M$ and $M'$ are developments of the data in the sense of [[def-gr-development-and-data-fixing-isometry]] clause (a) ([[ex-gr-minkowski-maximal-development]]); $\psi$ preserves $\eta$, the time orientation and the matter fields, and $\psi\circ j=j'$.

[L2] Common subdevelopments and the maximal common development: $(M,\psi)$ is a common subdevelopment of $M$ and $M'$ ([[def-gr-common-subdevelopment-and-corresponding-boundary]] clause (a)), the maximal one exists and contains every common subdevelopment with the same map ([[lem-gr-maximal-common-development]] clauses (a)-(b)), and the pair quotient of [[lem-gr-development-pair-gluing]] is a development of the data in which both members embed by data-fixing development embeddings.

## Verification
1.1 ($\psi$ is a data-fixing isometry.) The translation $\psi$ is a diffeomorphism of $\mathbb R^{1,3}$ preserving $\eta$, the time orientation and (vacuously) the matter fields, and $\psi\circ j=j'$ by definition of $j,j'$. Hence $\psi:M\to M'$ is a development embedding of the whole of $M$, and $(M,\psi)$ is a common subdevelopment ([[def-gr-development-and-data-fixing-isometry]] clauses (b)-(c), [[def-gr-common-subdevelopment-and-corresponding-boundary]] clause (a)). [given, L1, algebra]

2.1 (Maximality.) By [[lem-gr-maximal-common-development]] the maximal common development $(U^*,\psi^*)$ contains every common subdevelopment, so $U^*=M$ and $\psi^*=\psi$ by step 1.1 applied to $(U^*,\psi^*)$ in the reverse direction. In particular $U$ has no boundary in $M$, hence no corresponding boundary points, in accordance with [[lem-gr-no-corresponding-boundary-points]]. This is (a). [step 1.1, L2, algebra]

3.1 (The quotient.) By [[lem-gr-development-pair-gluing]] the quotient $Q:=(M\sqcup M')/{\sim}$ with the identifications along $\psi$ is a development of the data and the maps $p_M,p_{M'}$ are data-fixing development embeddings; here every point of $M$ is identified with its image in $M'$ and conversely, so the canonical map $M\to Q$, $p\mapsto[p]$, is a bijection and an isometry: its inverse is the map sending the class of $m\in M$ to $m$ and the class of $m'\in M'$ to $\psi^{-1}(m')$, which is well defined because $m'\sim\psi^{-1}(m')$ and because $\psi$ is a bijection. Both compositions with $\eta$ agree, so $Q$ is isometric to $M$ by a data-fixing isometry; the two development embeddings are the identity and the inverse translation. This is (b). [step 2.1, L2, algebra] ∎

## Remarks

The example shows that the gluing construction is non-vacuous already when two developments are diffeomorphic but their initial embeddings differ: the identifications are dictated by the maximal common development map, not by an arbitrary isometry of the ambient manifolds. It also shows that a development embedding of one maximal development into another need not have proper image (here it is onto), so the "extension" terminology carries no properness. 