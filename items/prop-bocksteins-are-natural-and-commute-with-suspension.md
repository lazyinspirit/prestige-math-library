---
id: prop-bocksteins-are-natural-and-commute-with-suspension
kind: proposition
title: Bocksteins are natural and stable
status: published
origin: pipeline
deps: ["def-stable-natural-cohomology-operation", "def-bockstein-connecting-operation", "lem-the-bockstein-is-independent-of-lift-and-cocycle-representative", "thm-naturality-of-the-singular-cohomology-pair-sequence", "thm-long-exact-sequence-of-a-pair-in-singular-cohomology", "thm-homotopic-maps-induce-equal-maps-in-singular-cohomology", "thm-excision-for-singular-cohomology", "def-axiom-of-choice"]
proof_strategy: diagram chase
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: May, A Concise Course in Algebraic Topology
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: Chapter 22, Section 5, Problem 2, printed pages 185--186
---

## Statement

Assume AC. The Bockstein is natural contravariantly in maps of spaces and
covariantly in morphisms of short exact coefficient sequences. With the stable
cone-suspension sign convention specified below, its reduced version commutes
with cohomology suspension and hence is a stable natural cohomology operation
of degree $1$.

## Facts & Assumptions

**Given:** A short exact coefficient sequence and its Bockstein, or a
commutative morphism between two such sequences.

[F1] The Bockstein is obtained by lifting a cocycle $c$ to $b$ and pulling
$\delta b$ uniquely back along the injective coefficient map
([[def-bockstein-connecting-operation]]).

[F2] The resulting class is independent of lift and cocycle representative
([[lem-the-bockstein-is-independent-of-lift-and-cocycle-representative]]).

[F3] Maps of pairs and coefficient homomorphisms give commuting maps of the
cohomology pair sequences
([[thm-naturality-of-the-singular-cohomology-pair-sequence]]).

[F4] Stability means commuting with the reduced cohomology suspension in
every degree ([[def-stable-natural-cohomology-operation]]).

[F5] AC supplies the simultaneous coefficient lifts used by [F1]
([[def-axiom-of-choice]]).

[F6] The cone-pair connector sends a cocycle to the coboundary of an
extension ([[thm-long-exact-sequence-of-a-pair-in-singular-cohomology]]).

[F7] Homotopic maps induce equal singular-cohomology maps with every
abelian coefficient group
([[thm-homotopic-maps-induce-equal-maps-in-singular-cohomology]]).

[F8] Excision identifies relative cohomology after removing a closed
set lying inside the relative subspace's interior
([[thm-excision-for-singular-cohomology]]).

## Proof

**Proof technique:** natural cochain diagrams with the cone-pair sign.

1.1 The Bockstein is natural in spaces. For $f\colon X\to Y$, if $q_*b=c$ and $i_*a=\delta b$ on $Y$, then $q_*f^*b=f^*c$ and $i_*f^*a=\delta f^*b$. Therefore $\beta_X(f^*[c])=f^*\beta_Y[c]$; [F2] removes dependence on the displayed representatives. [given, F1, F2]

1.2 The Bockstein is natural in the coefficient sequence. For a commutative morphism of short exact sequences with vertical maps $u\colon A\to A'$, $v\colon B\to B'$, and $w\colon C\to C'$, the cochain $v_*b$ lifts $w_*c$, and $\delta(v_*b)=v_*i_*a=i'_*u_*a$. Hence $\beta'[w_*c]=u_*\beta[c]$. [given, F1, F2]

1.3 The cone quotient comparison defines the signed suspension. Take a based CW complex $X$. If its chosen basepoint lies inside a positive-dimensional open cell, subdivide that one characteristic disk radially at the point and retain the same attaching maps for higher cells; this finite refinement makes the basepoint a vertex without changing the based space or choosing any new data. Form $CX=(X\times I)/(X\times\{1\}\cup\{x_0\}\times I)$ and $\Sigma X=CX/X$. For each nonbasepoint $n$-cell of $X$, its product with the open height interval is an $(n+1)$-cell of $CX$; the height-zero cells form the cone base $X$, while the height-one face and basepoint track collapse to one vertex. The product characteristic maps have finite boundary-cell support, so their quotient map-out and CW weak-topology tests make $CX$ a CW complex with $X$ a closed subcomplex. A cellwise radial collar of this subcomplex, extended over the characteristic disks and assembled by the weak topology, gives an open neighborhood $V$ that strongly deformation retracts onto $X$. Since $V$ contains the whole fibre $X$ collapsed by $q:CX\to\Sigma X$, it is saturated; $q(V)$ is open and its descended flow retracts onto the quotient vertex. [F3, F4, F6, F7, F8]

The pair sequences [F6] and homotopy invariance [F7] give
$H^*(V,X;G)=H^*(q(V),\{*\};G)=0$. The restriction short exact
cochain sequences for the triples $(CX,V,X)$ and
$(\Sigma X,q(V),\{*\})$ are surjective by zero extension, so their
long exact sequences replace each base by its collar in relative
cohomology. Apply [F8] to remove $X$ and the quotient vertex;
the remaining pairs are homeomorphic under $q$. Thus
$$q^*:H^*(\Sigma X,\{*\};G)\xrightarrow{\cong}H^*(CX,X;G)$$
for every abelian $G$, without using AC. Let $\partial_G$ be the
cone-pair connector [F6], transported by $(q^*)^{-1}$ to reduced
suspension cohomology. We use

$$
\sigma_n^G:=(-1)^n\partial_G\colon \widetilde H^n(X;G)\longrightarrow \widetilde H^{n+1}(\Sigma X;G).
$$

This degree sign is part of the stable convention; [F3] makes $\sigma$ natural.

2.1 The coefficient connector anticommutes with the unsigned cone-pair connector. Take $q_*b=c$ on $X$, with $i_*a=\delta b$. Extend $c,b,a$ by zero on the singular simplices of $CX$ not lying in $X$, writing the extensions with bars. Then $d:=\delta\bar b-i_*\bar a$ is a relative $B$-cochain lifting the relative cocycle $\delta\bar c$, and [F1, F5, step 1.3]

$$
\delta d=-i_*\delta\bar a.
$$

Thus $\beta\partial_C=-\partial_A\beta$ on reduced cohomology.

3.1 The signed suspension commutes with the Bockstein. For $x\in\widetilde H^n(X;C)$, [F4, step 1.1, step 1.2, step 1.3, step 2.1]

$$
\beta\sigma_n^C(x)=(-1)^n\beta\partial_C(x)=(-1)^{n+1}\partial_A\beta(x)=\sigma_{n+1}^A\beta(x).
$$

Together with steps 1.1 and 1.2, this is exactly the degree-$1$ stability and
naturality required by [F4]. ∎
