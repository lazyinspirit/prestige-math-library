---
id: lem-khovanov-reidemeister-chain-homotopies
kind: lemma
title: "Khovanov complexes are chain homotopy equivalent under Reidemeister moves"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-khovanov-frobenius-algebra-and-cube-of-resolutions
  - lem-khovanov-signed-local-cancellation-models
  - def-reduced-khovanov-cohomology-of-a-knot
  - lem-khovanov-cube-differential-squares-to-zero
  - def-cochain-complex-in-an-abelian-category
  - def-chain-homotopy
  - def-chain-homotopy-equivalence
  - def-mapping-cone-of-a-chain-map
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mikhail Khovanov, A categorification of the Jones polynomial, arXiv:math/9908171v2, §§5.1–5.4 and 8.1–8.4"
      url: "https://arxiv.org/pdf/math/9908171v2"
    - title: "Dror Bar-Natan, On Khovanov's categorification of the Jones polynomial, Algebraic & Geometric Topology 2 (2002), §§3.5.1–3.5.5"
      url: "https://arxiv.org/pdf/math/0201043"
    - title: "Louis H. Kauffman, An Introduction to Khovanov Homology, arXiv:1107.1524v2 (2022), §§4–5"
      url: "https://www.sas.rochester.edu/mth/sites/doug-ravenel/otherpapers/kaufmann.pdf"
    - title: "Melissa Zhang, Notes on Khovanov homology, arXiv:2501.03115v1, §§3.6–3.7"
      url: "https://arxiv.org/pdf/2501.03115v1"
---
## Statement

Let $D,D'$ be finite regular oriented link diagrams related by a planar isotopy or one oriented Reidemeister move. Let $\bar C(D)$ be the integral signed state cube before the writhe shifts, with cohomological degree $|v|$ and quantum degree $|v|+\sum\deg(a)$, and normalize it by $C(D)=\bar C(D)[n_-]\{2n_--n_+\}$ to obtain the state degrees $i=|v|-n_-$ and $j=|v|+n_+-2n_-+\sum\deg(a)$. Before normalization, a positive type-I curl gives $\bar C(D_+)\simeq\bar C(D)\{1\}$, a negative type-I curl gives $\bar C(D_-)\simeq\bar C(D)[-1]\{-2\}$, a type-II move gives $\bar C(D_{II})\simeq\bar C(D)[-1]\{-1\}$, and a type-III move gives an unshifted equivalence. Consequently the normalized complexes are bigraded chain homotopy equivalent. If $D,D'$ are based knot diagrams and the move disk is disjoint from the basepoint, the same chain homotopy equivalence descends to their reduced quotient complexes, equivalently to the cut-tangle complexes with interval module $M=\mathbb Z$, $X\cdot1=0$.

## Statement references

[[def-khovanov-frobenius-algebra-and-cube-of-resolutions|Frobenius maps, state grading and cube signs]]

[[def-reduced-khovanov-cohomology-of-a-knot|Based quotient and interval module]]

[[def-chain-homotopy|Chain homotopy convention]]

[[def-chain-homotopy-equivalence|Chain homotopy equivalence]]

[[def-mapping-cone-of-a-chain-map|Cone differential and cone contraction]]

[Khovanov, *A categorification of the Jones polynomial* (1999), §§5.1–5.4 and 8.1–8.4](https://arxiv.org/pdf/math/9908171v2)

[Bar-Natan, *On Khovanov's categorification of the Jones polynomial* (2002), §§3.5.1–3.5.5](https://arxiv.org/pdf/math/0201043)

[Kauffman, *An Introduction to Khovanov Homology* (2022), §§4–5](https://www.sas.rochester.edu/mth/sites/doug-ravenel/otherpapers/kaufmann.pdf)

[Zhang, *Notes on Khovanov homology* (2025), §§3.6–3.7](https://arxiv.org/pdf/2501.03115v1)

## Remark

For a type-II move, the four local resolution states and their signed edge maps have the face indexing below. The arrows record the chosen crossing order; this picture does not assert that the signed square commutes or establish the required cancellations.

```tikzcd
U=C_{00} \arrow[r,"\psi_2"] \arrow[d,"\psi_1"'] & V=C_{01} \arrow[d,"\psi_3"] \\
W=C_{10} \arrow[r,"\psi_4"'] & Z=C_{11}
```

## Facts & Assumptions

**Given:** The normalized integral state complexes of two diagrams that differ by one local move; for the based clause, both move disks avoid the marked point.

[F1] $\mathcal A=\mathbb Z[X]/(X^2)$ has basis $1,X$, with $m(1\otimes1)=1$, $m(1\otimes X)=m(X\otimes1)=X$, $m(X\otimes X)=0$, $\Delta(1)=1\otimes X+X\otimes1$, and $\Delta(X)=X\otimes X$; the maps satisfy associativity, coassociativity and the Frobenius identities ([[def-khovanov-frobenius-algebra-and-cube-of-resolutions]]).

[F2] A state with $r$ coordinates equal to $1$ is shifted by $r$ in quantum degree, and its edge signs are $(-1)^{\sum_{i<j}v(c_i)}$ ([[def-khovanov-frobenius-algebra-and-cube-of-resolutions]]).

[F3] The raw state complex becomes normalized by cohomological shift $[n_-]$ and quantum shift $\{2n_--n_+\}$; in the convention $C[s]^i=C^{i+s}$ and $M\{s\}_j=M_{j+s}$ these shifts give exactly $i=|v|-n_-$ and $j=|v|+n_+-2n_-+\sum\deg(a)$ ([[def-khovanov-frobenius-algebra-and-cube-of-resolutions]]).

[F4] For a based knot, the quotient removes the based-circle $X$ label and is identified statewise with the interval module $M=\mathbb Z$, $X\cdot1=0$. Local maps commuting with $X_p$ descend to this quotient, including when a local saddle meets the distinguished resolution component ([[def-reduced-khovanov-cohomology-of-a-knot]]).

[F5] The explicit four-face RII retraction, two signed RIII Gaussian cancellations, tensor-factor conventions, quantum degrees, and commutation with exterior saddle maps and $X_p$ are proved in [[lem-khovanov-signed-local-cancellation-models]] (local-map, cancellation-rule, RII, RIII, grading and exterior-differential proof paragraphs).

[F6] Reindexing the chain mapping cone of the identity by $C_n=K^{-n}$ gives the cochain identity cone with degree-$i$ term $K^{i+1}\oplus K^i$ and differential $d(x,y)=(-d_Kx,x+d_Ky)$ ([[def-mapping-cone-of-a-chain-map]]).

## Proof

1.1 **Crossing order and planar isotopy.** Reordering adjacent crossing coordinates $a,b$ is corrected by the diagonal state factor $s(v)=(-1)^{v(a)v(b)}$: on an $a$-edge its ratio is $(-1)^{v(b)}$, and on a $b$-edge it is $(-1)^{v(a)}$, exactly the sign change from swapping their order. Thus local crossings can be ordered first, and can be restored to the original order afterward by explicit chain isomorphisms. A planar isotopy bijects labelled resolution circles and saddles, so its factor permutations give a grading-preserving chain isomorphism. [F1, F2, given, algebra, construct]

2.1 **Both curls, with natural contractions.** For a positive curl the local differential is multiplication from a small circle and a continuing arc. Put the small-circle factor first, denote the dot on the continuing arc by $x$, and use coordinates $1\otimes u+X\otimes v$. The map is $(u,v)\mapsto u+xv$. Its $1$-label component is the identity; cancel it, leaving $v\mapsto X\otimes v-1\otimes xv$ in degree zero. Equivalently this is $j=\Delta-\iota m\Delta$, with $\iota(v)=1\otimes v$; it sends $1$ to $X\otimes1-1\otimes X$ and $X$ to $X\otimes X$. The canceled pair has inverse identity, so its contraction is the explicit cancellation rule of [F5], agreeing with the cochain identity-cone contraction in [F6]. The survivor has quantum shift $\{1\}$. For a negative curl the map is $v\mapsto( xv,v)$ into the circle coordinates; cancel its identity $X$-label component. The remaining $1$-label coordinate is in local degree one and has quantum shift $\{-2\}$, giving $[-1]\{-2\}$. These descriptions commute with exterior saddles because the dot and the local saddle commute with them by the displayed Frobenius identities; they therefore contract the total complexes, including exterior differentials with their totalization signs. The additional normalizations are $\{-1\}$ for a positive curl and $[1]\{2\}$ for a negative curl, canceling the respective raw shifts. [F1, F3, F5, F6, step 1.1, algebra, construct]

2.2 **The signed RII square.** In the four states of the Remark take $U=E$, $V=I$, $W=E\sqcup\bigcirc$, $Z=E$, after ordering the $(I,E)$ crossing first and the $(E,I)$ crossing second as in [F5]. That step gives the exact differential $u\mapsto(su,xu,u)$ and $(v,w_1,w_X)\mapsto tv-w_1-yw_X$, with $ts=x+y$, and the chain maps $i(v)=(v,tv,0)$, $p(v,w_1,w_X)=v-sw_X$, and homotopy $h^1=w_X$, $h^2(z)=(0,-z,0)$. Their checked identity is $1-ip=dh+hd$, $pi=1$. Thus the two canceled pairs are actual contractible summands over the integral exterior cube and the surviving identity matching is in local degree one with quantum increase one. This is precisely the raw shift $[-1]\{-1\}$ in the Statement. An RII pair has one positive and one negative crossing, so its normalization changes by $[1]\{1\}$ and cancels that shift. A quadratic tangency has two branches which are both graphs over their common tangent direction; orienting these graphs temporarily in the same direction puts every underlying RII picture into this model or the opposite crossing order. Reversing either actual strand arrow only changes crossing signs, still one of each, and does not change the A/B maps. Rotation of the local coordinate chart transports the same model; its crossing-order correction was proved in step 1.1. [F1, F2, F3, F5, step 1.1, algebra, construct]

2.3 **The signed RIII model.** Let $P_i$ denote the crossing complex with A-state $I$ and B-state $E_i$; this description fixes the smoothing convention without using a crossing-sign mnemonic. In [F5], both words $P_1P_2P_1$ and $P_2P_1P_2$ are retracted by two explicit cancellations to $I\xrightarrow{\binom{s_1}{s_2}}E_1\oplus E_2\xrightarrow{\begin{pmatrix}-u&v\\ w&-z\end{pmatrix}}E_1E_2\oplus E_2E_1.$ Here $u$ appends $E_2$ below $E_1$, $v$ prepends $E_1$ above $E_2$, $w$ prepends $E_2$ above $E_1$, and $z$ appends $E_1$ below $E_2$; each is the actual ordered-tensor saddle specified there. The canceled maps are the $-1$ from the circle's $1$ coordinate in state $101$ to state $111$, and then the $+1$ from state $001$ to the circle's $X$ coordinate. The remaining cube signs are exactly the displayed matrix on both sides. Inclusion and projection after the coordinate changes of [F5] compose to mutually inverse chain maps up to the given contractions. These maps preserve quantum degree and commute with all exterior differentials by [F5]. This proves the raw, unshifted model RIII equivalence with explicit chain maps and homotopies. [F1, F2, F5, step 1.1, algebra, construct]

3.1 **All height and orientation variants.** The opposite crossing complex $N_i$ has A-state $E_i$ and B-state $I$. Step 2.2 shows that $Q_i=N_i[1]\{1\}$ is a two-sided inverse of $P_i$ up to local chain homotopy; the contractions are natural under adjoining other crossings. Thus the relation $aba\simeq bab$, with $a=P_1,b=P_2$, also gives the relations with exponent triples $---$, $++-$, $-++$, $+--$ and $--+$, interpreting negative exponents by these explicit inverses. The $---$ relation is the inverse relation; $aba^{-1}\simeq b^{-1}ab$ follows by multiplication on the left by $b^{-1}$ and on the right by $a^{-1}$; $a^{-1}ba\simeq bab^{-1}$ follows by multiplication on the left by $a^{-1}$ and on the right by $b^{-1}$; their inverses give $+--$ and $--+$. Each multiplication is stacking a crossing complex and composing the actual chain maps and homotopies, so this is an operation on complexes, not an appeal to a braid-group invariant. A generic transverse triple event can be put in a small rectangle with all three branches monotone in one longitudinal coordinate: choose a direction transverse to their three tangents and use a sufficiently thin rectangle. Their two diagrams have braid words $121$ and $212$. The crossings concern the pairs of strands $AB,AC,BC$, respectively; a strict height order has precisely the six transitive sign patterns just listed, excluding the two cyclic patterns $+-+$ and $-+-$. For any such pattern the counts of $N_i$ agree on both sides, so the extra shifts in $Q_i$ cancel when removed. The actual oriented RIII move retains each of its three crossing signs; hence its normalizing $n_+,n_-$ shifts also agree. Actual strand arrows may be arbitrary because the raw cube depends only on the smoothing chart. This proves every oriented RIII variant. [F1, F2, F3, F5, step 2.2, step 2.3, algebra, construct]

4.1 **The based quotient and conclusion.** Every type-I inclusion, projection and contraction in step 2.1 is a sum of circle-coordinate maps and dots away from the marked point. By the Frobenius formulas it commutes with $X_p$ even if its continuing arc lies on the distinguished resolution component. The same commutation for every RII/RIII map and homotopy, including compositions and inverse-pair cancellations, is proved in [F5]. Consequently all equations $pi=1$ and $1-ip=dh+hd$ descend modulo $\operatorname{im}X_p$. By [F4] this is exactly the reduced quotient, or equivalently the interval-module complex. Steps 1.1–3.2 and the checked shifts therefore prove every unreduced and based assertion of the Statement. All local constructions use finite integral formulas and are choice-free. [F3, F4, F5, step 1.1, step 2.1, step 2.2, step 2.3, step 3.1, algebra] ∎
