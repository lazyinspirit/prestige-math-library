---
id: ex-a-weight-one-block-decomposition-matrix
kind: example
title: "The complete weight-one decomposition matrix for S3 at p=3"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 16
deps: [thm-weight-one-block-decomposition-pattern, thm-nakayama-block-classification-for-symmetric-groups, def-e-core-e-quotient-and-e-weight, thm-modular-simple-modules-of-sn-are-the-p-regular-specht-heads, def-young-subgroup-tabloid-and-permutation-module, def-column-antisymmetrizer-polytabloid-and-specht-module, thm-e-core-is-independent-of-the-rim-hook-removal-order]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete 79-page prepublication manuscript (1998; expanded AMS University Lecture Series 15 edition, 1999)"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Proposition 5.38 and the accompanying discussion of $q=1$, printed pp. 61-63: the weight-one bidiagonal matrix and its specialisation to the group Specht theory"
    - title: "G. D. James, The Representation Theory of the Symmetric Groups, Lecture Notes in Mathematics 682, Springer 1978 (complete author-hosted scan, 161 pp.)"
      url: "https://www-users.cse.umn.edu/~webb/oldteaching/Year2010-11/the-representation-theory-of-the-symmetric-groups-SLN.pdf"
      locator: "the modular Specht theory of $S_3$ in characteristic $3$ (Theorem 12.1 and Example 12.4, printed pp. 42-43) as an independent confirmation of the group-side matrix"
---

## Example

Take $e=p=3$ and the weight-one configuration $n=3$, $\gamma=\varnothing$ of
[[thm-weight-one-block-decomposition-pattern]]; the three partitions of $3$
with $3$-core $\varnothing$ are
$\lambda_1=(3)\rhd\lambda_2=(2,1)\rhd\lambda_3=(1,1,1)$
([[def-e-core-e-quotient-and-e-weight]]). The associated q-Schur weight-one
class at $p=3$ (with $d\ge3$) has the complete Weyl/simple decomposition
matrix, with rows and columns in the order $\lambda_1,\lambda_2,\lambda_3$,
equal to
$$\begin{pmatrix}1&1&0\\0&1&1\\0&0&1\end{pmatrix}.$$
Applying the Schur functor and the conjugation/duality dictionary gives the
Murphy Specht rows $[S^{\lambda_1}_{\mathrm M}]=[D^{\lambda_2}_{\mathrm M}]$,
$[S^{\lambda_2}_{\mathrm M}]=[D^{\lambda_2}_{\mathrm M}]+[D^{\lambda_3}_{\mathrm M}]$,
$[S^{\lambda_3}_{\mathrm M}]=[D^{\lambda_3}_{\mathrm M}]$, which in the page's
$3$-regular labels $(3),(2,1)$ is the matrix
$$\begin{pmatrix}1&0\\1&1\\0&1\end{pmatrix}$$
with rows $(3),(2,1),(1,1,1)$
([[thm-nakayama-block-classification-for-symmetric-groups]],
[[thm-modular-simple-modules-of-sn-are-the-p-regular-specht-heads]]); the
group-side entries are verified directly from the two-dimensional model
$S^{(2,1)}$ of characteristic $3$, whose all-ones vector spans a trivial
submodule with sign quotient, together with $S^{(3)}=\operatorname{triv}$ and
$S^{(1,1,1)}=\operatorname{sgn}$.

No choice principle is used.

## Facts & Assumptions

**Given:** The prime $p=e=3$, the partitions $(3)$, $(2,1)$, $(1,1,1)$ of
$n=3$, and the Weyl modules $W^{\lambda}_F$ of $S_F(d,3)$ for $d\ge3$ over any field $F$ of characteristic $3$, with $q=1$ and quantum characteristic $e=3$ (for example $F=\mathbb F_3$).

[F1] $3$-cores: the $3$-core of a partition is computed by removing rim
$3$-hooks until none remains; $C_3((3))=\varnothing$, $C_3((2,1))=\varnothing$,
$C_3((1,1,1))=\varnothing$, and these are all the partitions of $3$ with core
$\varnothing$, ordered by dominance as $(3)\rhd(2,1)\rhd(1,1,1)$
([[def-e-core-e-quotient-and-e-weight]],
[[thm-e-core-is-independent-of-the-rim-hook-removal-order]]).

[F2] The weight-one pattern
[[thm-weight-one-block-decomposition-pattern]] applied with $e=3$, $\gamma=\varnothing$:
in the source's normalisation $W^{(1,1,1)}=L^{(1,1,1)}$ and
$[W^{(3)}]=[L^{(3)}]+[L^{(2,1)}]$,
$[W^{(2,1)}]=[L^{(2,1)}]+[L^{(1,1,1)}]$.

[F3] Schur functor and dictionary
([[thm-weight-one-block-decomposition-pattern]]): the functor sends
$W^{\lambda}_F$ to $S^{\lambda}_{\mathrm M}$, $L^{\lambda}_F$ to
$D^{\lambda}_{\mathrm M}$ or $0$, with $D^{\lambda}_{\mathrm M}=0$ exactly for
the non-$e$-restricted $\lambda$, and the Dipper-James module of this page is
the signed $\theta$-pullback of the Murphy module of conjugate shape; for
$e=3$ the non-$3$-restricted partition among $(3),(2,1),(1,1,1)$ is $(3)$,
while $(2,1)$ and $(1,1,1)$ are $3$-restricted.

[F4] Group side: the simple $k[S_3]$-modules at $p=3$ are $D^{(3)}$ and
$D^{(2,1)}$, indexed by the $3$-regular partitions $(3),(2,1)$
([[thm-nakayama-block-classification-for-symmetric-groups]],
[[thm-modular-simple-modules-of-sn-are-the-p-regular-specht-heads]]).

[F5] Tabloid model: the permutation module $M^{(2,1)}_k$ over a field $k$ has
the three tabloids $v_1,v_2,v_3$ as a basis, where $v_i$ is the tabloid whose
singleton second row is $\{i\}$, and $\sigma\cdot v_i=v_{\sigma(i)}$; the
Specht module $S^{(2,1)}_k\subseteq M^{(2,1)}_k$ has basis $e_t=v_3-v_1$ and
$e_u=v_2-v_1$. Moreover $S^{(3)}_k$ is the trivial module and
$S^{(1,1,1)}_k$ is the sign module
([[def-young-subgroup-tabloid-and-permutation-module]],
[[def-column-antisymmetrizer-polytabloid-and-specht-module]]).



## Verification

**Proof technique:** direct.

1.1 The labels and their cores. The hook-length diagrams of the three partitions of $3$ are $3,2,1$ for $(3)$; $3,1$ in the first row and $1$ in the second for $(2,1)$; and $3,2,1$ vertically for $(1,1,1)$. In each case there is exactly one hook of length $3$ and removing its rim hook leaves the empty partition, so all three partitions have $3$-core $\varnothing$; conversely any partition of $3$ with core $\varnothing$ is one of these, since a partition whose core has size $3$ is its own core, and $\varnothing$ has size $0=3-3$. Dominance orders them as $(3)\rhd(2,1)\rhd(1,1,1)$. [given, F1]

2.1 The Weyl matrix. By [F2] the Weyl classes in the simple basis are $[W^{(1,1,1)}]=(0,0,1)$, $[W^{(2,1)}]=(0,1,1)$ and $[W^{(3)}]=(1,1,0)$ with rows and columns ordered $(3),(2,1),(1,1,1)$; hence the decomposition matrix of this weight-one class is the displayed matrix with rows $(1,1,0),(0,1,1),(0,0,1)$, whose diagonal entries are $1$ and whose only off-diagonal nonzero entries are at positions $(1,2)$ and $(2,3)$, each equal to $1$. [F2, step 1.1, algebra]

3.1 Murphy rows. By [F3] and step 1.1 the functor kills exactly $L^{(3)}$ among the three simple labels, so applying it to the rows of step 2.1 gives $[S^{(3)}_{\mathrm M}]=[D^{(2,1)}_{\mathrm M}]$, $[S^{(2,1)}_{\mathrm M}]=[D^{(2,1)}_{\mathrm M}]+[D^{(1,1,1)}_{\mathrm M}]$ and $[S^{(1,1,1)}_{\mathrm M}]=[D^{(1,1,1)}_{\mathrm M}]$. [F3, step 2.1]

4.1 Dipper-James rows and the direct group computation. Conjugating the partitions $(3)\leftrightarrow(1,1,1)$, $(2,1)\leftrightarrow(2,1)$ and applying the signed $\theta$-pullback to every Hecke module, the rows of step 3.1 become $[S^{(1,1,1)}]=[D^{(2,1)}]$, $[S^{(2,1)}]=[D^{(2,1)}]+[D^{(3)}]$ and $[S^{(3)}]=[D^{(3)}]$ in the $3$-regular labels, that is, the matrix $\left(\begin{smallmatrix}1&0\\1&1\\0&1\end{smallmatrix}\right)$ with rows $(3),(2,1),(1,1,1)$ and columns $(3),(2,1)$. For the independent direct check, put $w:=e_t+e_u=v_3-v_1+v_2-v_1=v_1+v_2+v_3$ in characteristic $3$: then $w\ne0$ spans a one-dimensional submodule, since $\sigma\cdot v_i=v_{\sigma(i)}$ gives $\sigma\cdot w=w$ for every $\sigma\in S_3$, so it realises the trivial module; and in the quotient, $(12)\cdot e_t+e_t=(v_3-v_2)+(v_3-v_1)=2v_3-v_1-v_2=3v_3-w\equiv0$ shows that $(12)$ acts by $-1$, so the quotient is the sign module. With $S^{(3)}=\operatorname{triv}$, $S^{(1,1,1)}=\operatorname{sgn}$ by [F5], and $D^{(3)}=\operatorname{triv}$, $D^{(2,1)}=\operatorname{sgn}$ by [F4], the direct rows of $S^{(3)},S^{(2,1)},S^{(1,1,1)}$ are $(1,0),(1,1),(0,1)$, matching the matrix obtained from the Schur functor entry by entry. [F4, F5, step 3.1, algebra] ∎
