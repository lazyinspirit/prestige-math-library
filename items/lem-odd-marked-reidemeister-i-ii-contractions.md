---
id: lem-odd-marked-reidemeister-i-ii-contractions
kind: lemma
title: Marked integral odd Reidemeister I and II contractions
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-odd-khovanov-barnatan-and-leo-triple
  - lem-odd-cube-oriented-face-parity-and-sign-existence
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Ozsváth, Rasmussen and Szabó, Odd Khovanov homology
      url: https://arxiv.org/pdf/0710.4300
      locator: Propositions 3.1–3.2, with explicit marked Gaussian contractions supplied here
dependency_level: 2
---

## Statement

For a finite planar odd resolution cube with the prescribed full face signs, a Reidemeister I or II move supported away from the marked point induces a normalized bigraded chain homotopy equivalence over the right ring $\mathbb A=\mathbb Z[X]/(X^2)$. The equivalence, inverse and contraction are finite integer matrices in exterior quotients, exterior products, and projections to the two coefficients of a small-circle generator. Their reductions modulo two are the corresponding even Khovanov cancellation maps. The result holds for every exterior closure of the move disk and every orientation of its strands, and is choice-free.

## Statement references

[[def-odd-khovanov-barnatan-and-leo-triple|Odd cubes and the right marked action]]

[[lem-odd-cube-oriented-face-parity-and-sign-existence|Full face prescriptions, existence and sign comparison]]

[Ozsváth–Rasmussen–Szabó, Propositions 3.1–3.2](https://arxiv.org/pdf/0710.4300)

## Facts & Assumptions

**Given:** A based diagram, a move disk missing the mark, and the finite exterior cubes at the two sides.

[F1] Odd edge maps are the exterior quotient and the split difference wedged on the left; the marked action is wedged on the right ([[def-odd-khovanov-barnatan-and-leo-triple]]).

[F2] The prescribed face signs exist, and changing their realization gives a grading-preserving vertex-sign module isomorphism ([[lem-odd-cube-oriented-face-parity-and-sign-existence]]).

## Proof

**Given:** The hypotheses of the Statement. Exterior crossings are ordered first, and their vertex is denoted $v$.

1.1 **A cancellation identity over any ring.** Suppose a cochain differential $d$ on $M=A\oplus B\oplus R$ has a degree-one block $b:A\to B$ which is an isomorphism. Set $h|_B=b^{-1}$ and $h|_{A\oplus R}=0$. Then $h^2=0$ and $hdh=h$. Consequently $E=1-dh-hd$ is a projection commuting with $d$: expansion using $d^2=h^2=0$ and $hdh=h$ gives $E^2=E$ and $dE=Ed$. Writing $j:R\to M$ and $q:M\to R$ for the direct-sum maps, set $i=Ej=j-hdj$, $p=qE=q-qdh$, and $d_R=q(d-dhd)j$. The $A$-coordinate of a vector in $\operatorname{im}E$ is minus $hd$ of its $R$-coordinate, and its $B$-coordinate is zero; hence $q:\operatorname{im}E\to R$ and $Ej$ are inverse. Thus $pi=1$, $ip=E$, $di=id_R$, $pd=d_Rp$, and $1-ip=dh+hd$. These identities also give $d_R^2=0$. If the blocks and their inverse are right-module maps, so are all these maps. This calculation applies to entire finite exterior cubes at once; their differentials are included in $d$, rather than omitted as spectators. [given, algebra, construct]

1.2 **The RII four-state model.** Call the straight matching $I$ and the cup-cap matching $U$. Rotate the disk and order the crossing whose smoothing pair is $(I,U)$ first, followed by the crossing whose smoothing pair is $(U,I)$. This order refers to the geometric smoothings; for either orientation of the two strands the pair contains one oriented positive and one oriented negative crossing. The local states $00,01,10,11$ are $U,I,U\sqcup z,U$. In state $10$ label the circle through the upper arc $a$, the small circle $z$, and the circle through the lower arc $c$; the exterior closure may identify $a$ and $c$. These labels therefore denote actual generators, with that equality imposed when applicable. At $00\to10$ the map is the split $(a-z)\wedge(-)$ after choosing its lift; at $10\to11$ the quotient identifies $z$ with $c$. Each edge has its prescribed sign, which is $\pm1$ and may depend on $v$. In $10$ set $Y=z-c$ and write $L=\Lambda W$, $K=Y\wedge\Lambda W$, where $W$ is the circle group of $U$. The quotient $10\to11$ is the identity on $L$ and zero on $K$. The $K$-coefficient of $00\to10$ is minus the identity, because $a-z=(a-c)-Y$. This remains true when $a=c$. Thus both indicated blocks are invertible right-module blocks for every exterior closure. [F1, F2, algebra, construct]

2.1 **The merge curl.** Write $W_v$ for the old circle group and $c_v$ for the circle through the curl's continuing arc. The two local states are $\Lambda(W_v\oplus\mathbb Zz)$ and $\Lambda W_v$, with merge quotient $m(z)=m(c_v)=c_v$. Put $Y=z-c_v$ and decompose the first state as $L_v\oplus K_v$, where $L_v=\Lambda W_v$ and $K_v=Y\wedge\Lambda W_v$. The merge is the identity $L_v\to\Lambda W_v$ and kills $K_v$. External edges preserve both summands. Indeed a merge takes $Y$ to its new $Y$, while a split takes $Y$ to the new $Y$ up to a multiple of its own split difference; that extra term vanishes when wedged with the same difference. On $L$ the external maps are the old maps. On $K$, identifying $Y\wedge w$ with $w$ negates each external split and leaves each merge unchanged. Put $\sigma(v)=(k(v)-k(0)+|v|)/2$. It is an integer, unchanged by a merge and increased by one by a split. Thus $w\mapsto(-1)^{\sigma(v)}Y\wedge w$ identifies $K$ with the old complex. The other two summands cancel by step 1.1, using the signed merge pivot and its inverse. With the ordinary cube ordering its pivot coefficient can be taken $(-1)^{|v|}$. The normalization makes the survivor's cohomological and quantum degrees those of the old diagram: the extra small circle and extra exterior generator change the local quantum degree by $-1$, cancelling the positive-curl shift $+1$. [F1, F2, step 1.1, algebra, construct]

2.2 **The two RII cancellations.** First cancel $L_{10}\to U_{11}$ by step 1.1. Its inverse is the signed inclusion using no $z$. The correction $-dhd$ does not alter the $00\to K_{10}$ block, since external edges preserve $L$ and the local outgoing arrow from $L$ lands only in $11$. That block is still the signed minus identity, so cancel $U_{00}\to K_{10}$. The survivor is $I_{01}$. Its exterior differential is unchanged: after the first cancellation no differential from $I_{01}$ enters $K$, since its only local outgoing edge was to the cancelled $11$ and the correction factors through $L$, which has no $K$-component. Consequently the second cancellation contributes no correction on $I_{01}$. The local height is one, the pair adds one negative and one positive crossing, and hence the homological shift is $1-1=0$ and the quantum shift is $1+(1-2)=0$. This proves the normalized equivalence. [step 1.1, step 1.2, algebra, construct]

3.1 **The split curl.** Here the local arrow is $\Lambda W_v\to\Lambda(W_v\oplus\mathbb Zz)$, $w\mapsto Y\wedge w$, with either overall sign allowed. Use the same decomposition $L\oplus K$. The split is an isomorphism onto $K$; $L$ survives. Choose the crossing-edge coefficient $(-1)^{|v|+\sigma(v)}$ when the external edges have their old coefficients. Across an external merge this coefficient changes sign, and across a split it is unchanged. Since the unsigned curl split commutes with the former and anticommutes with the latter, every mixed square anticommutes. Cancel its isomorphism onto $K$ by step 1.1. The surviving $L$ has its old differential and right action. It is at local height one; the negative crossing increases $n_-$ by one, so its normalized cohomological degree is unchanged. Its additional circle contributes quantum degree $+1$, its local height contributes $+1$, and the negative crossing contributes $-2$, again giving shift zero. The formulas include both directions of the move, since the inclusion and projection are homotopy inverses. [F1, F2, step 1.1, step 2.1, algebra, construct]

4.1 **Module maps, signs and reduction.** The mark is outside the disk, so it is never the small circle $z$. In the displayed decompositions a right multiplication appends an old generator. Coefficient projections in $z$ and $Y=z-c$, the inclusions, and multiplication by a left split difference therefore commute with that right action. All pivots, their signed inverses and the maps in step 1.1 are module-linear. Different admissible edge signs are accommodated by [F2]. Reversing a saddle arrow negates its split map and is absorbed in that edge coefficient; changing strand orientations changes only the normalized crossing shifts, already checked for R1 and RII. Rotations simply relabel the generators and disk ports. Modulo two all displayed signs become one, exterior products become commuting square-zero circle labels, and $z-c$ becomes $z+c$. Merge, split, inclusion, coefficient projection and the formula $d-dhd$ reduce to precisely the even cancellation operations. Thus the maps, inverses and homotopies have the asserted comparison, for every closure and orientation. [F1, F2, step 1.1, step 3.1, step 2.2, algebra] ∎
