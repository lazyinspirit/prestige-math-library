---
id: def-chi-zero-and-chi-one-wide-edge-morphisms
kind: definition
title: "The wide-edge morphisms chi-zero and chi-one"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 4
deps: [def-factorization-of-a-marked-moy-graph, lem-koszul-row-operations-and-variable-exclusion-preserve-factorization-homotopy-type]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
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
    - title: "Mikhail Khovanov and Lev Rozansky, Matrix factorizations and link homology II, arXiv:math/0505056v2 (2006), section 1 formulas (5)-(6), section 2, subsection 2, Lemmas 1-2, printed pp. 5-6 and 16-17; published as Geom. Topol. 12 (2008) 1387-1425"
      url: "https://arxiv.org/pdf/math/0505056v2"
    - title: "Mikhail Khovanov and Lev Rozansky, Matrix factorizations and link homology II, Geom. Topol. 12 (2008) 1387-1425 (published version of record), formulas (12)-(13) and Figure 6, printed pp. 1393-1394"
      url: "https://msp.org/gt/2008/12-3/gt-v12-n3-p04-p.pdf"
    - title: "Khovanov and Rozansky, Matrix factorizations and link homology, arXiv:math/0401268v2, introduction printed pp. 6-12: fixed-n sl(n) analogue with different potentials and gradings, not the parameter-a formulas of KR II"
      url: "https://arxiv.org/pdf/math/0401268"
---

## Definition

Let $\Gamma_0$ be the diagram of two disjoint oriented arcs with labels
$x_1,x_4$ and $x_2,x_3$ and $\Gamma_1$ the diagram of one wide edge with the
same four labels, over $R=\mathbb Q[a,x_1,x_2,x_3,x_4]$, and write
$C(\Gamma_i)=C^0(\Gamma_i)\xrightarrow{P_i/Q_i}C^1(\Gamma_i)\xrightarrow{P_i/Q_i}C^0(\Gamma_i)$
in the standard product bases of Khovanov-Rozansky II:
$$P_0=\begin{pmatrix}a&x_3-x_2\\ a&x_1-x_4\end{pmatrix},\qquad P_1=\begin{pmatrix}x_1-x_4&x_2-x_3\\ -a&a\end{pmatrix},$$
$$Q_0=\begin{pmatrix}a&x_3x_4-x_1x_2\\ 0&x_1+x_2-x_3-x_4\end{pmatrix},\qquad Q_1=\begin{pmatrix}x_1+x_2-x_3-x_4&x_1x_2-x_3x_4\\ 0&a\end{pmatrix},$$
with the term shifts
$$C^0(\Gamma_0)=R\oplus R\{-2,2\},\qquad C^1(\Gamma_0)=R\{-1,1\}\oplus R\{-1,1\},$$
$$C^0(\Gamma_1)=R\oplus R\{-2,4\},\qquad C^1(\Gamma_1)=R\{-1,1\}\oplus R\{-1,3\}.$$

Define $\chi_0\colon C(\Gamma_0)\to C(\Gamma_1)$ by the matrices
$$U_0^0=\begin{pmatrix}x_4-x_2&0\\ 0&1\end{pmatrix},\qquad U_0^1=\begin{pmatrix}x_4&-x_2\\ -1&1\end{pmatrix},$$
and $\chi_1\colon C(\Gamma_1)\to C(\Gamma_0)$ by
$$U_1^0=\begin{pmatrix}1&0\\ 0&x_4-x_2\end{pmatrix},\qquad U_1^1=\begin{pmatrix}1&x_2\\ 1&x_4\end{pmatrix}.$$

Then $\chi_0$ is a morphism of factorizations of bidegree $(0,2)$ and $\chi_1$
is a morphism of bidegree $(0,0)$; and in the equivalent Koszul forms (8),
(9) of the source, obtained by the row operations $[12]_1$ on $C(\Gamma_0)$
and $[21]_{-x_2}$ on $C(\Gamma_1)$, they become the flip morphisms
$\chi_0=\mathrm{Id}\otimes\psi'(x_4-x_2)$ and
$\chi_1=\mathrm{Id}\otimes\psi(x_4-x_2)$, where $\psi(y)$ is the morphism
$(0,yz)\to(0,z)$ and $\psi'(y)$ its opposite. Consequently the composites
$\chi_1\chi_0\colon C(\Gamma_0)\to C(\Gamma_0)$ and
$\chi_0\chi_1\colon C(\Gamma_1)\to C(\Gamma_1)$ are nonzero endomorphisms of
bidegree $(0,2)$, and on the Koszul standard forms they act as multiplication
by the element $x_4-x_2\in R$.

Caveats: the maps are not inverse to each other; all signs and shifts are
fixed by the printed matrices (Khovanov-Rozansky II, formulas (5)-(6); the
published version writes the same two maps with half-integer cohomological
degrees in formulas (12)-(13)); the bases are homogeneous for the bigrading.

## Facts & Assumptions

**Given:** the ring $R=\mathbb Q[a,x_1,x_2,x_3,x_4]$, the two diagrams $\Gamma_0,\Gamma_1$, their factorizations with the displayed matrices and shifts, and the four morphism matrices $U_0^0,U_0^1,U_1^0,U_1^1$.

[F1] $C(\Gamma_0)$ is the tensor product of the arc rows $(a,x_1-x_4)$ and $(a,x_2-x_3)$ and $C(\Gamma_1)$ is the tensor product of the rows $(a,x_1+x_2-x_3-x_4)$ and $(0,x_1x_2-x_3x_4)$; the differential squares to $w=a(x_1+x_2-x_3-x_4)$ in both cases, and each term carries the displayed bigrading shift ([[def-factorization-of-a-marked-moy-graph]]).

[F2] The elementary row operation $[ij]_\lambda$ replaces $(a_i,b_i),(a_j,b_j)$ by $(a_i,b_i+\lambda b_j),(a_j-\lambda a_i,b_j)$, is an isomorphism of factorizations, and Koszul factorizations are written $(a,b)=\bigotimes_i(a_i,b_i)$ with total differential of square $\sum_ia_ib_i$ ([[lem-koszul-row-operations-and-variable-exclusion-preserve-factorization-homotopy-type]]).

## Proof

**Proof technique:** direct matrix computation in the displayed bases, followed by the two row operations of the source and the flip-morphism check.

1.1 *The map $\chi_0$ commutes with the differentials.* Multiplying the displayed matrices over the commutative ring $R$ gives $$Q_0U_0^0=\begin{pmatrix}a(x_4-x_2)&x_3x_4-x_1x_2\\ 0&x_1+x_2-x_3-x_4\end{pmatrix}=U_0^1P_0$$ and $$Q_1U_0^1=\begin{pmatrix}(x_4-x_2)(x_1-x_4)&(x_4-x_2)(x_2-x_3)\\ -a&a\end{pmatrix}=U_0^0P_1,$$ as is checked entry by entry using $x_i x_j=x_jx_i$; hence $\chi_0$ intertwines the two differentials and is a morphism of factorizations. [F1, algebra]

1.2 *The map $\chi_1$ commutes with the differentials.* Likewise $$P_0U_1^0=\begin{pmatrix}a&(x_3-x_2)(x_4-x_2)\\ a&(x_1-x_4)(x_4-x_2)\end{pmatrix}=U_1^1Q_0$$ and $$P_1U_1^1=\begin{pmatrix}x_1+x_2-x_3-x_4&x_1x_2-x_3x_4\\ 0&a(x_4-x_2)\end{pmatrix}=U_1^0Q_1,$$ so $\chi_1$ is a morphism of factorizations. [F1, algebra]

1.3 *Bidegrees.* Every entry of the four matrices is homogeneous, and an entry of bidegree $(p,q)$ in the $i$-th row and $j$-th column represents the map from the $j$-th summand of the source to the $i$-th summand of the target of total bidegree $(p,q)+(\text{target shift}-\text{source shift})$. Reading the shift tables: in $U_0^0$ the scalar $x_4-x_2$ has bidegree $(0,2)$ and maps the unshifted summand $R$ to the unshifted summand $R$, while $1$ has bidegree $(0,0)$ and maps $R\{-2,2\}$ to $R\{-2,4\}$, whose shift difference is $(0,2)$; in $U_0^1$ the entries $x_4,-x_2$ have bidegree $(0,2)$ and the entries $-1,1$ map between the summands $R\{-1,1\}$, $R\{-1,3\}$ whose shift difference is $(0,2)$. So $\chi_0$ has bidegree $(0,2)$. For $\chi_1$ the entries of $U_1^0$ are $1$ and $x_4-x_2$, which map the summands $R$, $R\{-2,4\}$ to $R$, $R\{-2,2\}$ with shift difference $(0,-2)$ in the second column, compensated by the coefficient of bidegree $(0,2)$, and $U_1^1$ maps $R\{-1,1\},R\{-1,3\}$ to $R\{-1,1\}$ with the entries $1,x_2,1,x_4$ contributing the compensating bidegrees; so $\chi_1$ has bidegree $(0,0)$. [F1, algebra]

2.1 *The Koszul forms.* By [F1] and [F2] the matrix of $C(\Gamma_0)$ has rows $(a,x_1-x_4)$ and $(a,x_2-x_3)$; the operation $[12]_1$ replaces them by $(a,x_1+x_2-x_3-x_4)$ and $(0,x_2-x_3)$. The matrix of $C(\Gamma_1)$ has rows $(a,z)$ and $(0,q)$ with $z=x_1+x_2-x_3-x_4$ and $q=x_1x_2-x_3x_4$; the operation $[21]_{-x_2}$ on the ordered pair $(0,q),(a,z)$ replaces them by $(0,q-x_2z)$ and $(a,z)$. Expanding $q-x_2z=x_1x_2-x_3x_4-x_2(x_1+x_2-x_3-x_4)=(x_2-x_3)(x_4-x_2)$ shows that the two standard forms are $$C(\Gamma_0)\cong(a,x_1+x_2-x_3-x_4)\otimes(0,x_2-x_3),\qquad C(\Gamma_1)\cong(a,x_1+x_2-x_3-x_4)\otimes(0,(x_2-x_3)(x_4-x_2)),$$ with the same first row and with the second factors related by multiplication by $x_4-x_2$. [F1, F2, step 1.1, step 1.2, algebra]

3.1 *The flip morphisms and the composites.* Put $y=x_4-x_2$ and let $\psi(y)\colon(0,yz)\to(0,z)$ be the morphism whose first-term component is the identity and whose middle component is multiplication by $y$; it commutes with the differentials because $y\cdot0=0\cdot1$ and $1\cdot yz=z\cdot y$. Let $\psi'(y)\colon(0,z)\to(0,yz)$ be the morphism whose first-term component is multiplication by $y$ and whose middle component is the identity; then $1\cdot0=0\cdot y$ and $y\cdot z=yz\cdot1$. Multiplying the matrices of the change of basis in step 2.1 against the standard product bases identifies the conjugates of $\chi_0$ and $\chi_1$ with $\mathrm{Id}\otimes\psi'(y)$ and $\mathrm{Id}\otimes\psi(y)$ respectively, as in Lemma 2 of the source. The composites satisfy $\psi(y)\psi'(y)=y\cdot\mathrm{id}$ and $\psi'(y)\psi(y)=y\cdot\mathrm{id}$ on both components, hence $\chi_1\chi_0=\mathrm{Id}\otimes(y\cdot\mathrm{id})$ and $\chi_0\chi_1=\mathrm{Id}\otimes(y\cdot\mathrm{id})$ on the Koszul standard forms. They are nonzero even modulo homotopy: specialize $a=0$, $x_1=x_4$, $x_3=x_2$. Both factorization differentials then vanish, while $y=x_4-x_2$ remains nonzero in $\mathbb Q[x_2,x_4]$. A null-homotopy would specialize to $y\,\mathrm{id}=dH+Hd=0$, a contradiction. Thus both composites are nonzero endomorphisms of bidegree $(0,2)$ and act as multiplication by $x_4-x_2\in R$; in particular they are not the identity and the two maps are not inverse to each other. [F1, step 1.1, step 1.2, step 2.1, algebra] ∎
