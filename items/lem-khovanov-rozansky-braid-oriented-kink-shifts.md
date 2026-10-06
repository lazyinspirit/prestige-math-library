---
id: lem-khovanov-rozansky-braid-oriented-kink-shifts
kind: lemma
title: "Oriented kink shifts for braid diagrams"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 7
deps: [def-khovanov-rozansky-complex-and-trigraded-braid-homology, lem-koszul-row-operations-and-variable-exclusion-preserve-factorization-homotopy-type, def-markov-conjugation-and-stabilization-moves, def-chi-zero-and-chi-one-wide-edge-morphisms]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Mikhail Khovanov and Lev Rozansky, Matrix factorizations and link homology II, arXiv:math/0505056v2 (2006), section 2, subsection 4, Propositions 4-5, printed pp. 20-21; published as Geom. Topol. 12 (2008) 1387-1425"
      url: "https://arxiv.org/pdf/math/0505056v2"
    - title: "Mikhail Khovanov and Lev Rozansky, Matrix factorizations and link homology II, Geom. Topol. 12 (2008) 1387-1425 (published version of record), Proposition 2 and formula (20), printed pp. 1397-1398"
      url: "https://msp.org/gt/2008/12-3/gt-v12-n3-p04-p.pdf"
    - title: "Khovanov and Rozansky, Matrix factorizations and link homology, arXiv:math/0401268v2, introduction printed pp. 6-12: fixed-n sl(n) analogue with different potentials and gradings, not the parameter-a formulas of KR II"
      url: "https://arxiv.org/pdf/math/0401268"
---

## Statement

Let $D_1,D_2$ be the two diagrams of the **type IA** oriented Reidemeister I
move of Khovanov-Rozansky II, Figure 12 (the two braid-oriented curl diagrams,
with the orientations displayed there and potential $w=a(x_1-x_4)$), and let
$E_1,E_2$ be the two diagrams of the **type IB** oriented Reidemeister I move
of Figure 14. Then, in $K(\mathrm{hmf}_w)$:

$$C(D_1)\cong\Pi C(D_2)\{1,1\}[1]$$

for the type IA pair, where $\Pi$ reverses inner factorization parity,
$\{1,1\}$ is the bigrading shift and $[1]$ the
cohomological shift; and

$$C(E_1)\cong C(E_2)$$

with no shift for the type IB pair. Equivalently, for IA one computes
$C(D_2)\{0,2\}\cong\Pi C(\Gamma)\{-1,1\}[-1]$ with $\Gamma$ the straight-strand
factorization, so that $\Pi C(D_2)\{1,1\}[1]\cong C(D_1)$. All three gradings are
accounted for, and the two conclusions are not interchangeable.

Caveat: the labels IA and IB refer to the source's two oriented pictures; the
asymmetry of the shifts is a convention of the source, and a reader must
reproduce the pictures rather than relabel them "positive" and "negative". Internal shifts on this page retain parity, so $\Pi$ cannot be absorbed into
$\{1,1\}$. After taking termwise cohomology and forgetting its parity label,
the IA relation has the source's trigrading shift $\{1,1\}[1]$. The source's
published convention suppresses this separate parity (printed p. 1391). The
two moves realize the corresponding oriented stabilizations of braid closures
([[def-markov-conjugation-and-stabilization-moves]]).

## Facts & Assumptions

**Given:** the four diagrams $D_1,D_2$ (type IA) and $E_1,E_2$ (type IB) with their marked resolutions, the complex $C(\cdot)$ of [[def-khovanov-rozansky-complex-and-trigraded-braid-homology]], and the Koszul forms (8), (9) of $C(\Gamma_0)$, $C(\Gamma_1)$ with the flip morphism $\chi_1=\mathrm{Id}\otimes\psi(x_4-x_2)$.

[F1] $C(D)$ is the tensor product of the crossing complexes $C_p$ and the arc factors $C_c$ over the shared polynomial ring; its differential has bidegree $(0,0)$ between the shifted terms, and the complex is an object of $K(\mathrm{hmf}_w)$ ([[def-khovanov-rozansky-complex-and-trigraded-braid-homology]]).

[F2] Elementary row operations are isomorphisms of factorizations; a row $(0,y-\mu)$ with $y$ internal may be deleted and $y$ substituted by $\mu$ everywhere else, producing a chain homotopy equivalent factorization over the smaller ring ([[lem-koszul-row-operations-and-variable-exclusion-preserve-factorization-homotopy-type]]).

[F3] In the Koszul forms (8), (9) the matrices of $C(\Gamma_0)$ and $C(\Gamma_1)$ are related by the row operations $[12]_1$ and $[21]_{-x_2}$, and the morphism $\chi_1$ becomes $\mathrm{Id}\otimes\psi(x_4-x_2)$, whose first-term component is the identity and whose middle component is multiplication by $x_4-x_2$ ([[def-chi-zero-and-chi-one-wide-edge-morphisms]], [[lem-koszul-row-operations-and-variable-exclusion-preserve-factorization-homotopy-type]]).

## Proof

**Proof technique:** direct computation in Koszul form, splitting off a contractible summand and excluding one internal variable.

1.1 *The complex of the type IA curl.* By [F1] and [F3], setting $x_3=x_2$ in the Koszul forms (8), (9) presents $C(D_2)\{0,2\}$ as the two-term complex whose two terms are the factorization $X\otimes(0,0)$ with $X=(a,x_1-x_4)$, and whose differential is the morphism $\mathrm{Id}\otimes\psi(x_4-x_2)$ of [F3]. Indeed both rows of the two matrices become $(a,x_1-x_4)$ and $(0,0)$, and the flip morphism $\psi(x_4-x_2)$ has components the identity on the first term and multiplication by $x_4-x_2$ on the middle term, where the shift $R\{-1,3\}\to R\{-1,1\}$ makes the total bidegree $(0,0)$; the potential of the curl diagrams is $w=a(x_1-x_4)$ and $x_2$ is the label of the internal mark. [F1, F3, algebra]

2.1 *Splitting off the first row.* The differential is the identity on the $X$ factor; in the two-term complex with terms $X\otimes(0,0)$ and differential $\mathrm{Id}\otimes\psi(x_4-x_2)$, the summand on which $\psi$ acts by the identity splits off as the contractible complex $0\to X\xrightarrow{1}X\to0$. What remains is the tensor product of $X$ with the two-term complex $0\to R\{-1,3\}\xrightarrow{x_4-x_2}R\{-1,1\}\to0$, with the surviving row in odd inner parity, exactly the splitting displayed in section 4 of the source. Tensoring $X$ with this odd scalar row yields $\Pi X$ with the indicated internal shifts, not the even scalar tensor unit. [F1, step 1.1]

2.2 *The type IB computation.* Relabeling its external ends to have potential $a(x_1-x_4)$, the positive curl has the same specialization $x_3=x_2$ in the two Koszul forms, but uses $\mathrm{Id}_X\otimes\psi'(x_4-x_2)$ with the positive source shift $\{0,2\}$. The odd components have the identical shift $\{-1,3\}$ and the map between them is the identity, so that pair is contractible. The even components leave $0\to R\{0,2\}\xrightarrow{x_4-x_2}R\to0$, in cohomological degrees $-1,0$. Polynomial division gives $R=R'\oplus(x_4-x_2)R$ as an $R'$-module; multiplication by $x_4-x_2$ is an isomorphism from the source to the second summand of the target and is homogeneous with the given shifts. Canceling that pair leaves only $R'$ in degree $0$ with zero shift. Tensoring with $X$ therefore leaves exactly the straight-strand factorization, so $C(E_1)\cong C(E_2)$ with no shift. [F1, F2, F3, step 1.1, algebra]

3.1 *Excluding the internal variable.* The variable $x_2$ is internal with $w=a(x_1-x_4)\in R'=\mathbb Q[a,x_1,x_4]$ and the surviving row is $(0,x_4-x_2)=-(0,x_2-x_4)$; by [F2], with $y=x_2$ and $\mu=x_4$, the polynomial-subspace map $R	o (x_4-x_2)R$ is invertible over $R'$ and its two-term subcomplex splits off contractibly and the remaining factorization descends to $R'$ with $x_2\mapsto x_4$. The two-term complex $0\to R\{-1,3\}\xrightarrow{x_4-x_2}R\{-1,1\}\to0$ therefore reduces to the odd-parity shifted copy $R'\{-1,1\}[-1]$ of the scalar complex, and $C(D_2)\{0,2\}\cong\Pi X\{-1,1\}[-1]=\Pi C(\Gamma)\{-1,1\}[-1]$ with $\Gamma$ the straight-strand diagram. Since $\Gamma$ is $D_1$ with the same labels and the same potential, rearranging the shifts and using $\Pi^2=1$ gives $C(D_1)\cong\Pi C(D_2)\{1,1\}[1]$, which is the type IA conclusion. [F1, F2, step 2.1, algebra]

4.1 *Conclusion.* Steps 1.1-3.1 establish $C(D_1)\cong\Pi C(D_2)\{1,1\}[1]$ for the type IA pair, with inner parity retained separately from the three gradings; after forgetting inner parity on termwise cohomology the shift is $\{1,1\}[1]$; step 2.2 establishes $C(E_1)\cong C(E_2)$ with no shift for the type IB pair. The two shift conventions differ, so the two conclusions cannot be interchanged, and the caveat records that the labels IA and IB refer to the source's printed oriented pictures. [step 3.1, step 2.2] ∎

