---
id: lem-koszul-row-operations-and-variable-exclusion-preserve-factorization-homotopy-type
kind: lemma
title: "Koszul row operations and variable exclusion preserve homotopy type"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 3
deps: [def-bigraded-matrix-factorization-with-potential, def-factorization-of-a-marked-moy-graph]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "Mikhail Khovanov and Lev Rozansky, Matrix factorizations and link homology II, arXiv:math/0505056v2 (2006), section 2, subsection 'Product factorizations, graph homology and Koszul complexes', Proposition 3, printed pp. 12-15; published as Geom. Topol. 12 (2008) 1387-1425"
      url: "https://arxiv.org/pdf/math/0505056v2"
    - title: "Khovanov and Rozansky, Matrix factorizations and link homology, arXiv:math/0401268v2, section 2, printed pp. 13-17 (cyclic Koszul algebra)"
      url: "https://arxiv.org/pdf/math/0401268"
---

## Statement

Work over a polynomial ring $R$ and write $(a,b)=\bigotimes_i(a_i,b_i)$ for the
Koszul factorization with rows $R\xrightarrow{a_i}R\xrightarrow{b_i}R$, so
that its total differential squares to $\sum_ia_ib_i$. The row operations
are first statements about ungraded factorizations. In the bigraded setting
of [[def-bigraded-matrix-factorization-with-potential]], require the entries,
substitutions and basis changes to be homogeneous of the degrees determined
by the row shifts; only such operations give bigrading-preserving maps. Then:

**(1) Row operations.** For $\lambda\in R$ the replacement of two rows
$(a_i,b_i),(a_j,b_j)$ by $(a_i,b_i+\lambda b_j),(a_j-\lambda a_i,b_j)$, all
other rows unchanged, is an isomorphism of factorizations (it is the change of
basis $|00\rangle,|01\rangle,|10\rangle,|11\rangle\mapsto
|00\rangle,|01\rangle,|10\rangle+\lambda|01\rangle,|11\rangle$ on the tensor
product of the two rows).

**(2) Variable exclusion.** Let $R=R'[y]$, let $w=\sum_ia_ib_i\in R'$ (so $y$
is internal), and suppose one row of $(a,b)$ has the form $(0,\,y-\mu)$ with
$\mu\in R'$. Let $(a',b')$ be the Koszul factorization over $R'$ obtained by
deleting that row and substituting $y\mapsto\mu$ in all other rows, and let
$(a,b)'$ be $(a,b)$ restricted to $R'$ (an infinite-rank factorization). Then
$(a,b)'\simeq(a',b')$ in $\mathrm{hmf}_w(R')$: the $R'$-complex
$0\to R'[y]\xrightarrow{y}R'[y]\to0$ splits into the contractible complexes
$0\to R'y^j\xrightarrow{y}R'y^{j+1}\to0$ for $j\ge0$ and the rank-one complex
$0\to R'\to0$.

**(3) Graph factorizations.** For a nonempty planar marked graph $\Gamma$ with $m_1$
arcs and $m_2$ wide edges the Koszul matrix of $C(\Gamma)$ has $m_1+m_2$
linear rows $(a,z)$ ($z$ linear in the $x_i$) and $m_2$ quadratic rows
$(0,\,x_ix_j-x_kx_l)$; applying the row operations of (1) with $\lambda=1$
against the first linear row turns the first row into $(a,\sum_p\epsilon_px_p)$
over the boundary points and all other linear rows into $(0,z)$; if $\Gamma$
is closed the first row becomes $(a,0)$ and, after restricting scalars to $\mathbb Q$ and deleting that row
with its odd parity and internal shift retained,
the remaining rows are $(0,z)$ for the other linear entries and $(0,q)$ for
all the quadratic entries. Their Koszul complex computes $H(\Gamma)$,
with the parity and internal shift contributed by the removed $(a,0)$ row
retained and the cyclic grading collapsed to a bigrading, and
$a$ acts trivially on $H(\Gamma)$.

Caveats: (2) is a chain homotopy equivalence, not an isomorphism of
factorizations over $R$; the substitution $y\mapsto\mu$ must be applied to
every remaining row simultaneously; the collapse in (3) loses the cyclic
(homological) grading because the differential has nonzero bidegree. Source:
Khovanov-Rozansky II, section 2, printed pp. 12-14, and the cyclic Koszul algebra of
Khovanov-Rozansky I, section 2, printed pp. 13-17. Removing $a$ here computes
cohomology after restricting scalars; it does not give a free representative
of that cohomology in $\mathrm{hmf}_0(\mathbb Q[a])$.

## Facts & Assumptions

**Given:** a polynomial ring $R$, a Koszul factorization $(a,b)=\bigotimes_i(a_i,b_i)$ with potential $w=\sum_ia_ib_i$, and a marked planar graph $\Gamma$ with its factorization $C(\Gamma)$.

[F1] The category $\mathrm{mf}_w$ has objects $(M^0,M^1,d)$ with $d$ of bidegree $(1,1)$, $d^2=w\cdot\mathrm{id}$, and morphisms of bidegree $(0,0)$ commuting with $d$, and $\mathrm{hmf}_w$ is its homotopy category, with homotopies of bidegree $(-1,-1)$ ([[def-bigraded-matrix-factorization-with-potential]]).

[F2] $C(\Gamma)$ is the tensor product over the shared polynomial ring of the arc rows $(a,x_i-x_j)$ and the wide-edge rows $(a,x_1+x_2-x_3-x_4)$ and $(0,x_1x_2-x_3x_4)$, has potential $w_\Gamma=a\sum_p\epsilon_px_p$ over the boundary points, and internal labels occur with cancelling signs ([[def-factorization-of-a-marked-moy-graph]]).

## Proof

**Proof technique:** direct; a change of basis, two explicit sequences of elementary row transformations, and the standard-form computation of the graph matrix.

1.1 *Row operations.* Model the Koszul factorization on the exterior algebra of a free module with basis $e_i$, with differential $d=\sum_i a_i(e_i\wedge-)+\sum_i b_i\iota_i$, where $\iota_i$ is contraction by the dual basis. The exterior and contraction operators anticommute for distinct indices and satisfy $\iota_i(e_i\wedge-)+(e_i\wedge-)\iota_i=1$, giving $d^2=\sum_i a_ib_i$. The basis change $e_i\mapsto e_i+\lambda e_j$, $e_j\mapsto e_j$ induces an invertible exterior-algebra map. Expressing $d$ in that basis gives exactly $(a_i,b_i+\lambda b_j),(a_j-\lambda a_i,b_j)$. This intertwines the differentials; in the graded case it preserves the grading precisely under the degree compatibility stated above. [F1, algebra]

1.2 *Polynomial remainders.* Replace $y$ by $y+\mu$ to reduce $(0,y-\mu)$ to $(0,y)$. For every other row write $a_i=a_i'+yA_i$ and $b_i=b_i'+yB_i$, where $a_i',b_i'\in R'$ are the values at $y=0$ and $A_i,B_i\in R'[y]$ are polynomial quotients; no linearity in $y$ is assumed. Since the excluded row has product zero and $w\in R'$, subtraction of the value at zero yields $y\sum_i(A_ib_i'+a_i'B_i+yA_iB_i)=0$. Multiplication by $y$ is injective in $R'[y]$, so $\sum_i(A_ib_i'+a_i'B_i+yA_iB_i)=0$. [F1, algebra]

2.1 *Exclusion of the row.* Pair $(a_i,b_i)$ with the distinguished row using step 1.1 with parameter $-B_i$. After doing this for every $i$, the rows become $(a_i,b_i')$ and $(\sum_i a_iB_i,y)$. Swap the entries of the distinguished row, with the corresponding parity shift, and use the dual row operation $(a_i,b_i'),(y,A)\mapsto(a_i-A_iy,b_i'),(y,A+A_ib_i')$. This dual operation is another exterior-basis change (or the previous operation after exchanging wedge and contraction), and preserves the product. The ordinary rows now equal $(a_i',b_i')$, while the distinguished row equals $(y,\sum_i(a_iB_i+A_ib_i'))=(y,0)$ by step 1.2. Undoing its entry swap cancels the parity shift and leaves $(0,y)$. Thus the original factorization is isomorphic to $(a',b')\otimes(0,y)$ over $R'[y]$. [step 1.1, step 1.2, algebra]

2.2 *Standard form of graph factorizations.* By [F2] the matrix of $C(\Gamma)$ has the $m_1+m_2$ linear rows $(a,z)$ contributed by the arcs and the first row of each wide edge, and the $m_2$ quadratic rows $(0,q)$ contributed by the second row of each wide edge; permute rows so the linear rows come first. Applying the operation of clause (1) to the first row and each further linear row $p$ with $\lambda=1$ replaces the pair $(a,z_1),(a,z_p)$ by $(a,z_1+z_p),(0,z_p)$, so afterwards the first row is $(a,\sum_{\text{linear rows}}z)$ and every other linear row is $(0,z)$ with its original $z$. The internal labels occur twice with opposite signs and cancel in the sum, while each boundary label occurs once, so the first row is $(a,\sum_p\epsilon_px_p)$; the quadratic rows are untouched. [F2, step 1.1]

3.1 *The splitting.* Over $R'$ the row $(0,y)$ presents the complex $0\to R'[y]\xrightarrow{y}R'[y]\to0$, which is the direct sum of the two-term complexes $0\to R'y^j\xrightarrow{y}R'y^{j+1}\to0$ for $j\ge0$ and the rank-one complex $0\to R'\to0$; for $j\ge0$ the map $y\colon R'y^j\to R'y^{j+1}$ is an isomorphism, so those summands are contractible and contribute nothing to the homotopy type. In a tensor product with $(a',b')$ the contractible summands remain contractible, hence $(a,b)'\simeq(a',b')\otimes R'\simeq(a',b')$ in $\mathrm{hmf}_w(R')$, which proves clause (2); the equivalence forgets the variable $y$ and is not an isomorphism of $R$-factorizations because $C(\Gamma)$ has infinite rank over $R'$. [F1, step 2.1]

4.1 *Closed graphs.* If $\Gamma$ is closed, step 2.2 makes the first row $(a,0)$ and every other row has first entry zero. The latter rows include both the remaining linear entries and every quadratic entry; write their tensor product as $K$. The first row is $\mathbb Q[a]\xrightarrow{a}\mathbb Q[a]\{-1,1\}\xrightarrow{0}\mathbb Q[a]$. Its cohomology is the odd-parity copy of $\mathbb Q\{-1,1\}$. More explicitly, as a complex over $\mathbb Q$ it is the direct sum of contractible pairs $\mathbb Q a^j\xrightarrow{a}\mathbb Q a^{j+1}\{-1,1\}$ and the remaining constant in odd parity. Since $K$ has no $a$ in its entries, tensoring this splitting with $K$ leaves its specialization at $a=0$, with the first row's shift and odd parity retained. This is exactly the Koszul complex on all remaining linear and quadratic entries, with its cyclic grading folded into parity; multiplication by $a$ is zero on the resulting cohomology. [F1, F2, step 2.2, step 3.1, algebra] ∎
