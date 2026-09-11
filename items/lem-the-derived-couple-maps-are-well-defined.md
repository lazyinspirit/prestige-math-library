---
id: lem-the-derived-couple-maps-are-well-defined
kind: lemma
title: The derived couple maps are well defined
status: published
origin: pipeline
pipeline_run: phase-2-next-20
deps: [def-derived-exact-couple, def-exact-couple, lem-spectral-sequence-subquotient-and-local-lifting-calculus]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Stacks Project, Lemma 12.21.2; full descent argument supplied here"
      url: https://stacks.math.columbia.edu/tag/011P
---

## Statement

The three maps $i',j',k'$ of the derived-couple construction exist in every
abelian category and are independent of all local preimages and cycle
representatives. Their degrees are $(1,-1)$, $(-r,r)$ and $(-1,0)$,
respectively. No choice of global sections is needed.

## Facts & Assumptions

[F1] [[def-derived-exact-couple]] gives the image and homology quotient objects and the proposed formulas.

[F2] [[def-exact-couple]] gives $\ker j=\operatorname{im}i$, $\ker k=\operatorname{im}j$, $\ker i=\operatorname{im}k$ and the consecutive zero composites.

[F3] [[lem-spectral-sequence-subquotient-and-local-lifting-calculus]] permits epic local lifting, descent of subobject membership and unique quotient maps.

## Proof

**Given:** A page-$r$ exact couple. All expressions below are at a fixed homogeneous component with the typed shifts in [F1]; local lifts mean epic pullbacks as in [F3].

1.1 If $a$ is locally $ix$, then $ia=i(ix)$ lies in $\operatorname{im}i$. Descent of this membership shows that $i$ restricted to $D'\subseteq D$ factors through the target $D'$. Its factorization is unique because that inclusion is monic. This defines $i'$ without any preimage choice. [F1, F3]

1.2 The composite $j:D\to E$ lands in $\ker d$ since $dj=jkj=0$. Follow it by $\ker d\to E'$. This map kills $\ker i$: an arrow into $\ker i=\operatorname{im}k$ locally has form $kz$, and its image is $[jkz]=[dz]=0$. Hence it descends through $D/\ker i\cong\operatorname{im}i$ to $j'$, uniquely. Explicitly, if $ix=iy$ locally, then $x-y=kz$ after a further epic pullback, so $[jx]-[jy]=[dz]=0$. Thus its formula is independent of the preimage. [F1, F2, F3]

1.3 On $\ker d$, the map $k$ lands in $\ker j=\operatorname{im}i$, because $jke=de=0$. Changing a cycle representative by a boundary $dz$ changes its image by $kdz=kjkz=0$. Thus this restricted map kills the boundary image and descends uniquely to $k':E'\to D'$. Equality after the epic cycle quotient also proves independence for arbitrary maps into $E'$, not just element representatives. [F1, F2, F3]

2.1 For $i'$ the degree remains $(1,-1)$. To compute $j'$ on $D'_{p,q}$, its local $i$-preimage is at $D_{p-1,q+1}$ and $j$ sends it to $E_{p-r,q+r}$, giving degree $(-r,r)$. The cycle restriction and quotient for $k'$ preserve the original degree $(-1,0)$. The constructions above still apply when any image or homology object is zero, and for $r=1$ give $\deg j'=(-1,1)$. Every lift was a finite local epic pullback used to prove a canonical factorization; no global representative selection or AC was used. [F1, step 1.1, step 1.2, step 1.3] ∎
