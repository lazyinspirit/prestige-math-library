---
id: thm-naturality-of-singular-mayer-vietoris
kind: theorem
title: "Naturality of singular Mayer–Vietoris"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-mayer-vietoris-sequence-in-singular-homology, lem-the-mayer-vietoris-connector-is-independent-of-small-chain-decomposition, cor-the-long-exact-homology-sequence-is-natural, thm-cover-small-singular-chains-compute-singular-homology, thm-short-exact-two-open-singular-chain-mayer-vietoris-sequence]
proof_strategy: direct
verification: {precheck: pass}
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, §2.2"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
pipeline_run: frontier-31a
---

## Statement

A continuous map $f:X\to Y$ with $f(U)\subseteq U'$ and $f(V)\subseteq V'$ induces a
commuting morphism between the Mayer–Vietoris sequences of the two covers.

## Facts & Assumptions

**Given:** An abelian group $G$, open covers $X=U\cup V$ and $Y=U'\cup V'$, and a continuous map $f:X\to Y$ with $f(U)\subseteq U'$ and $f(V)\subseteq V'$. Write $A_X=C_\bullet^{\{U,V\}}(X;G)$ and $A_Y=C_\bullet^{\{U',V'\}}(Y;G)$.

## Proof

**Proof technique:** direct.

1.1 Composition with $f$ commutes with the singular boundary, since $(f\circ\sigma)\circ\delta_j=f\circ(\sigma\circ\delta_j)$. The cover conditions give chain maps on the overlap, on each summand, and $f_s:A_X\to A_Y$. They commute with $i(c)=(c,-c)$ and $j(u,v)=u+v$ by additivity. Thus they give a morphism of the short exact sequences in [[thm-short-exact-two-open-singular-chain-mayer-vietoris-sequence]], and [[cor-the-long-exact-homology-sequence-is-natural]] gives a commuting ladder of their homology sequences. [given, construct]

2.1 Let $\iota_X:A_X\hookrightarrow C_\bullet(X;G)$ and $\iota_Y:A_Y\hookrightarrow C_\bullet(Y;G)$ be the inclusions. On every small simplex both composites are the same singular simplex $f\circ\sigma$, so $f_\#\iota_X=\iota_Y f_s$. The maps $H_n(\iota_X),H_n(\iota_Y)$ are isomorphisms by [[thm-cover-small-singular-chains-compute-singular-homology]]. Therefore $H_n(f_s)H_n(\iota_X)^{-1}=H_n(\iota_Y)^{-1}H_n(f)$. Transporting the ladder of step 1.1 along these isomorphisms yields exactly the ordinary homology maps and sequences of [[thm-mayer-vietoris-sequence-in-singular-homology]]. [step 1.1, algebra]

3.1 In particular, for a small cycle $z=u+v$, its image is $f_\#u+f_\#v$ and $f_\#(\partial u)=\partial f_\#u$. Thus the connector sends the image class to the image of $[\partial u]$, with the same positive U-boundary sign; independence of the chosen small representative and decomposition is supplied by [[lem-the-mayer-vietoris-connector-is-independent-of-small-chain-decomposition]] and the inclusion isomorphisms. This proves every connecting square as well as the ordinary squares. The argument includes degree zero, the terminal maps to zero, empty overlap or empty cover members, and $G=0$. [step 1.1, step 2.1, algebra] ∎
