---
id: lem-compact-oriented-boundary-manifolds-have-finite-dimensional-cohomology
kind: lemma
title: "Compact oriented manifolds with boundary have finite-dimensional field cohomology"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-the-double-has-a-well-defined-smooth-structure, def-double-of-a-smooth-manifold-with-boundary, def-relative-fundamental-class-and-boundary-orientation, lem-closed-oriented-pid-manifolds-have-finitely-generated-homology, prop-singular-chains-and-homology-are-covariantly-functorial, prop-singular-cohomology-is-contravariantly-functorial, thm-poincare-lefschetz-duality, thm-choice-implies-dependent-implies-countable-choice, def-axiom-of-choice]
justified_by: []
aliases: []
landmark: false
dependency_level: 0
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, Cambridge University Press 2002 (complete book)"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "Section 3.3, Poincare-Lefschetz duality for compact manifolds with boundary, printed pp. 253-254; Section 2.2, retraction and direct summand arguments"
    - title: "Ioan Marcut, Manifolds (2017 lecture notes), sections 14.5 and 15.1"
      url: "https://www.math.ru.nl/~imarcut/index_files/lectures_2017.pdf"
      locator: "the double of a manifold with boundary and its smooth structure (used as background for the doubling step)"
---

## Statement

Assume the Axiom of Choice. Let $W$ be a compact oriented smooth $n$-manifold
with boundary $\partial W$ (possibly empty), let $F$ be a field, and let the
cohomology be singular cohomology with coefficients in $F$. Then every
$H^k(W;F)$ and every relative group $H^k(W,\partial W;F)$, $k\ge0$, is a
finite-dimensional $F$-vector space.

## Facts & Assumptions

**Given:** A compact oriented smooth $n$-manifold $W$ with boundary $\partial W$
and a field $F$.

[A1] The Axiom of Choice is assumed ([[def-axiom-of-choice]]).

[L1] Assuming $\mathrm{AC}_\omega$, the labelled double $DM$ of a smooth
manifold with boundary $M$ carries a smooth boundaryless manifold structure,
and the double of [[def-double-of-a-smooth-manifold-with-boundary]] is the
quotient of $M_+\sqcup M_-$ identifying the two copies of the boundary
([[thm-the-double-has-a-well-defined-smooth-structure]]).

[L2] In ZF, $\mathrm{AC}\Rightarrow\mathrm{DC}\Rightarrow\mathrm{AC}_\omega$
([[thm-choice-implies-dependent-implies-countable-choice]]).

[L3] For an oriented manifold $M$ with boundary, the induced boundary
orientation is fixed by the outward-normal-first convention: its local
generator is $(-1)^n$ times the tangent generator for the product orientation,
and each component inherits its sign from the supplied interior orientation
([[def-relative-fundamental-class-and-boundary-orientation]]).

[L4] Assume AC. If $M$ is a closed $R$-oriented $n$-manifold and $R$ is a
commutative PID, then every $H_q(M;R)$ and every $H^p(M;R)$ is finitely
generated over $R$ ([[lem-closed-oriented-pid-manifolds-have-finitely-generated-homology]]).

[L5] Singular homology with coefficients in an abelian group is covariantly
functorial: a retraction $r\circ i=\mathrm{id}$ of spaces induces
$r_*\circ i_*=\mathrm{id}$ on homology ([[prop-singular-chains-and-homology-are-covariantly-functorial]]).

[L6] Singular cohomology is contravariantly functorial, so a retraction
$r\circ i=\mathrm{id}$ induces $i^*\circ r^*=\mathrm{id}$ on cohomology
([[prop-singular-cohomology-is-contravariantly-functorial]]).

[L7] Assume AC. For a compact $R$-oriented $n$-manifold $M$ with boundary $A$,
cap with the relative fundamental class gives isomorphisms
$T_p:H^p(M,A;R)\xrightarrow{\sim}H_{n-p}(M;R)$ for every $p$
([[thm-poincare-lefschetz-duality]]).

## Proof

**Proof technique:** direct.

1.1 The double $D(W)$ of $W$ is a smooth boundaryless manifold by [L1], whose $\mathrm{AC}_\omega$ hypothesis holds because [A1] gives AC and [L2] gives $\mathrm{AC}\Rightarrow\mathrm{AC}_\omega$; it is compact because $W$ is compact. [A1, L1, L2, given]

2.1 The double $D(W)$ is oriented: orient the labelled first copy $W_+$ by the given orientation of $W$ and the second copy $W_-$ by its reverse, so that at every boundary point the two induced boundary orientations are opposite and hence agree after this reversal; by [L3] the induced boundary orientations are determined by the interior orientations, so they glue to a global orientation of $D(W)$, making $D(W)$ a closed oriented $n$-manifold. [step 1.1, L3, given]

3.1 The folding map $r:D(W)\to W$ that maps both labelled copies identically onto $W$ is well defined on the quotient and continuous, and its composite with the inclusion $i:W\to D(W)$ of the first copy is $r\circ i=\mathrm{id}_W$; hence by [L5] the induced maps satisfy $r_*\circ i_*=\mathrm{id}$ on $H_k(-;\mathbb Z)$ and on $H_k(-;F)$, so $i_*$ is injective with left inverse $r_*$, while by [L6] the induced maps satisfy $i^*\circ r^*=\mathrm{id}$ on $H^k(-;F)$, so $r^*$ is injective with left inverse $i^*$. [step 2.1, L5, L6, given]

4.1 Applying [L4] to the closed oriented manifold $D(W)$ with $R=\mathbb Z$, and again with $R=F$ (a field is a PID and a $\mathbb Z$-orientation induces an $F$-orientation), shows that $H_k(D(W);\mathbb Z)$, $H_k(D(W);F)$ and $H^k(D(W);F)$ are finitely generated over their coefficient rings; a direct summand of a finitely generated module is finitely generated, so by step 3.1 the groups $H_k(W;\mathbb Z)$, $H_k(W;F)$ and $H^k(W;F)$ are finitely generated, and for the field $F$ this says exactly that $H_k(W;F)$ and $H^k(W;F)$ are finite-dimensional over $F$. [step 3.1, L4, A1]

5.1 Cap with the relative fundamental class of the compact oriented manifold $W$ gives, by [L7] with $R=F$ and $A=\partial W$, an $F$-linear isomorphism $H^k(W,\partial W;F)\xrightarrow{\sim}H_{n-k}(W;F)$ for every $k\ge0$; the target is finite-dimensional over $F$ by step 4.1. [step 4.1, L7, A1]

6.1 Therefore every $H^k(W;F)$ is finite-dimensional by step 4.1 and every relative group $H^k(W,\partial W;F)$ is finite-dimensional by step 5.1, which is the assertion. [step 4.1, step 5.1] ∎
