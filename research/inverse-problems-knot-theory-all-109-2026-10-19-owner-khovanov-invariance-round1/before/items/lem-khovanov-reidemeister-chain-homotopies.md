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

[F4] For a based knot, the quotient removes the based-circle $X$ label and is identified statewise with the interval module $M=\mathbb Z$, $X\cdot1=0$; a move away from the basepoint acts as the identity on that interval factor ([[def-reduced-khovanov-cohomology-of-a-knot]]).

[F6] Reindexing the chain mapping cone of the identity by $C_n=K^{-n}$ gives the cochain identity cone with degree-$i$ term $K^{i+1}\oplus K^i$ and differential $d(x,y)=(-d_Kx,x+d_Ky)$ ([[def-mapping-cone-of-a-chain-map]]).

## Proof

The steps verify the crossing-order correction and type-I clauses only. They do not prove the RII or RIII assertions in the Statement.

1.1 Reordering adjacent crossing coordinates $a,b$ is corrected by the diagonal state factor $s(v)=(-1)^{v(a)v(b)}$: on an $a$-edge its ratio is $(-1)^{v(b)}$, and on a $b$-edge it is $(-1)^{v(a)}$, exactly the sign change from swapping their order. A sequence of adjacent transpositions therefore gives a chain isomorphism, so the local crossings may be ordered first. [F2, given, algebra]

1.2 For a positive curl, the local differential is the shifted multiplication $m:\mathcal A\otimes\mathcal A\to\mathcal A$. The map $\iota(x)=1\otimes x$ satisfies $m\iota=\mathrm{id}$. The complementary map $j=\Delta-\iota m\Delta$ satisfies $mj=0$, with $j(1)=X\otimes1-1\otimes X$ and $j(X)=X\otimes X$. The four vectors $\iota(1),\iota(X),j(1),j(X)$ form an integral basis, so the complex is the direct sum of an identity cone and the surviving copy $j(\mathcal A)$; its grading is the raw shift $\{1\}$. For the opposite curl, the differential is the shifted comultiplication $\Delta:\mathcal A\to\mathcal A\otimes\mathcal A$. The vectors $1\otimes1,1\otimes X,\Delta(1),\Delta(X)$ form an integral basis, so the image copy $\Delta(\mathcal A)$ is an identity-cone summand and the complementary $1\otimes\mathcal A$ survives in degree one with raw shift $[-1]\{-2\}$. In the cochain identity cone with $d(x,y)=(-d_Kx,x+d_Ky)$, $h(x,y)=(y,0)$ has $dh+hd=\mathrm{id}$. Adding one positive crossing changes the normalizing shifts by $\{-1\}$; adding one negative crossing changes them by $[1]\{2\}$. These cancel the respective raw shifts. [F1, F3, F6, given, algebra]

1.3 For a type-II move, the square of local states in the preceding Remark fixes the face indexing. The current carrier does not identify the two acyclic subcomplex inclusions used in the cited RII cancellation argument inside these four modules, or verify that their quotient differentials have the required form with the present cube signs and grading shifts. The earlier proposed $\alpha,\beta$ splitting did not define enough local tensor maps to establish those claims. Thus the type-II chain homotopy equivalence in the Statement remains unproved here. [F1, F2, given, algebra]

1.4 For a type-III move, the cited residual-cube argument requires the two vertical identities $\tau_1 d_{1,\star01}=d_{2,\star01}$ and $d_{1,\star10}=\tau_2 d_{2,\star10}$. The current carrier does not define these maps on explicit ordered tensor factors and signed state bases; consequently its proposed substitution by Frobenius composites has no established domain/codomain identification. Neither square has been verified, so the type-III chain homotopy equivalence remains unproved here. [F1, F2, given, algebra]

2.1 For the positive and negative curls in step 1.2, if the local support avoids the marked point, each local map and the identity-cone contraction is tensored with the identity on the based interval module. The contraction equation remains $dh+hd=\mathrm{id}$ after tensoring, so the based quotient inherits these two type-I equivalences. These are the only conclusions established here; the type-II and type-III clauses remain unresolved by steps 1.3 and 1.4. [F4, step 1.2, step 1.3, step 1.4, algebra] ∎
