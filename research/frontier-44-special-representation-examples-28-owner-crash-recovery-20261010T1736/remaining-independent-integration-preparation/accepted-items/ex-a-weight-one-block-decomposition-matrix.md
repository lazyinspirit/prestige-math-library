---
id: ex-a-weight-one-block-decomposition-matrix
kind: example
title: "The complete weight-one decomposition matrix for S3 at p=3"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 16
deps: [thm-q-schaper-virtual-radical-layer-formula, def-type-a-q-schur-algebra-and-weyl-modules, def-alternating-weyl-and-specht-symbols-from-beta-sequences, thm-schur-functor-sends-weyl-and-simple-modules-to-specht-and-hecke-simple-modules, lem-dj-bridge-murphy-cellular-basis-and-cell-form, lem-dj-bridge-row-permutation-module-standard-action, thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell, thm-nakayama-block-classification-for-symmetric-groups, def-e-core-e-quotient-and-e-weight, thm-modular-simple-modules-of-sn-are-the-p-regular-specht-heads, def-young-subgroup-tabloid-and-permutation-module, def-column-antisymmetrizer-polytabloid-and-specht-module, thm-e-core-is-independent-of-the-rim-hook-removal-order]
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

Take $e=p=3$ and the weight-one configuration $n=3$, $\gamma=\varnothing$ of [[def-e-core-e-quotient-and-e-weight]]; the three partitions of $3$ with $3$-core $\varnothing$ are $\lambda_1=(3)\rhd\lambda_2=(2,1)\rhd\lambda_3=(1,1,1)$ ([[def-e-core-e-quotient-and-e-weight]]). The associated q-Schur weight-one class at $p=3$ (with $d\ge3$) has the complete Weyl/simple decomposition matrix, with rows and columns in the order $\lambda_1,\lambda_2,\lambda_3$, equal to $$\begin{pmatrix}1&1&0\\0&1&1\\0&0&1\end{pmatrix}.$$ Applying the Schur functor and the conjugation/duality dictionary gives the Murphy Specht rows $[S^{\lambda_1}_{\mathrm M}]=[D^{\lambda_2}_{\mathrm M}]$, $[S^{\lambda_2}_{\mathrm M}]=[D^{\lambda_2}_{\mathrm M}]+[D^{\lambda_3}_{\mathrm M}]$, $[S^{\lambda_3}_{\mathrm M}]=[D^{\lambda_3}_{\mathrm M}]$, which in the page's $3$-regular labels $(3),(2,1)$ is the matrix $$\begin{pmatrix}1&0\\1&1\\0&1\end{pmatrix}$$ with rows $(3),(2,1),(1,1,1)$ ([[thm-nakayama-block-classification-for-symmetric-groups]], [[thm-modular-simple-modules-of-sn-are-the-p-regular-specht-heads]]); the group-side entries are verified directly from the two-dimensional model $S^{(2,1)}$ of characteristic $3$, whose all-ones vector spans a trivial submodule with sign quotient, together with $S^{(3)}=\operatorname{triv}$ and $S^{(1,1,1)}=\operatorname{sgn}$.

No choice principle is used.

## Facts & Assumptions

**Given:** The prime $p=e=3$, the partitions $(3)$, $(2,1)$, $(1,1,1)$ of $n=3$, and the Weyl modules $W^{\lambda}_F$ of $S_F(d,3)$ for $d\ge3$ over any field $F$ of characteristic $3$, with $q=1$ and quantum characteristic $e=3$ (for example $F=\mathbb F_3$).

[F1] $3$-cores: the $3$-core of a partition is computed by removing rim $3$-hooks until none remains; $C_3((3))=\varnothing$, $C_3((2,1))=\varnothing$, $C_3((1,1,1))=\varnothing$, and these are all the partitions of $3$ with core $\varnothing$, ordered by dominance as $(3)\rhd(2,1)\rhd(1,1,1)$ ([[def-e-core-e-quotient-and-e-weight]], [[thm-e-core-is-independent-of-the-rim-hook-removal-order]]).

[F2] The balanced positive Jantzen-submodule formula is [[thm-q-schaper-virtual-radical-layer-formula]] and its beta signs are [[def-alternating-weyl-and-specht-symbols-from-beta-sequences]]. Every Weyl module has its nonzero norm-one simple head and $W(1)=\operatorname{rad}W$, with absolute simple heads and base-change-compatible forms ([[def-type-a-q-schur-algebra-and-weyl-modules]]). The specific three-row computation is proved below.

[F3] The exact integral Schur corner/form/radical identity is [[thm-schur-functor-sends-weyl-and-simple-modules-to-specht-and-hecke-simple-modules]], steps 1.1–5.1. The specific Murphy forms/actions are computed locally from the independent integral Murphy datum and row action ([[lem-dj-bridge-murphy-cellular-basis-and-cell-form]], [[lem-dj-bridge-row-permutation-module-standard-action]]). The signed conjugate module/form identity is [[thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell]]. No universal finite-$e$ restricted nonzero criterion is used.

[F4] Group side: the simple $k[S_3]$-modules at $p=3$ are $D^{(3)}$ and $D^{(2,1)}$, indexed by the $3$-regular partitions $(3),(2,1)$ ([[thm-nakayama-block-classification-for-symmetric-groups]], [[thm-modular-simple-modules-of-sn-are-the-p-regular-specht-heads]]).

[F5] Tabloid model: the permutation module $M^{(2,1)}_k$ over a field $k$ has the three tabloids $v_1,v_2,v_3$ as a basis, where $v_i$ is the tabloid whose singleton second row is $\{i\}$, and $\sigma\cdot v_i=v_{\sigma(i)}$; the Specht module $S^{(2,1)}_k\subseteq M^{(2,1)}_k$ has basis $e_t=v_3-v_1$ and $e_u=v_2-v_1$. Moreover $S^{(3)}_k$ is the trivial module and $S^{(1,1,1)}_k$ is the sign module ([[def-young-subgroup-tabloid-and-permutation-module]], [[def-column-antisymmetrizer-polytabloid-and-specht-module]]).



## Verification

**Proof technique:** direct.

1.1 The labels and their cores. The hook-length diagrams of the three partitions of $3$ are $3,2,1$ for $(3)$; $3,1$ in the first row and $1$ in the second for $(2,1)$; and $3,2,1$ vertically for $(1,1,1)$. In each case there is exactly one hook of length $3$ and removing its rim hook leaves the empty partition, so all three partitions have $3$-core $\varnothing$; conversely any partition of $3$ with core $\varnothing$ is one of these, since a partition whose core has size $3$ is its own core, and $\varnothing$ has size $0=3-3$. Dominance orders them as $(3)\rhd(2,1)\rhd(1,1,1)$. [given, F1]

2.1 Compute the Weyl matrix directly. First work over $\mathbb F_3$ with lift $R=\mathbb Z_{(3)}$, $\hat q=1$, so the only nonzero hook valuation at rank three is $v([3]_1)=1$. The conjugate beta sequence of $(3)$ is $(3,2,1)$. Its hook pairs $(3,2)$ and $(3,1)$ give the balanced sequences $(5,0,1)$ and $(4,2,0)$, of sorted shapes $(1,1,1)$ with sign $-1$ and $(2,1)$ with sign $+1$, respectively. The other pair has coefficient zero. Thus its positive sum is $[W^{(2,1)}]-[W^{(1,1,1)}]$. For $(2,1)$, beta $(4,2,0)$ and its only nonzero pair $(3,1)$ give $(5,1,0)$, shape $(1,1,1)$ with sign $+1$, so its positive sum is $[W^{(1,1,1)}]$. The column shape has no row pair and zero positive sum, hence $W^{(1,1,1)}=L^{(1,1,1)}$. Positivity and $W(1)=\operatorname{rad}W$ then show that $W^{(2,1)}(1)=L^{(1,1,1)}$ and every higher submodule is zero, giving $[W^{(2,1)}]=[L^{(2,1)}]+[L^{(1,1,1)}]$. Substitute into the first sum to get $[L^{(2,1)}]$; the same argument gives $[W^{(3)}]=[L^{(3)}]+[L^{(2,1)}]$. This proves exactly the displayed complete Weyl matrix. Scalar extension to any original field $F$ of characteristic three preserves the Weyl modules/forms and the composition series, since all Schur simple heads are absolutely simple by [F2]. [F2, step 1.1, algebra]

3.1 Determine the specific corner images directly. The group row symmetrizer $x_{(3)}=\sum_{w\in S_3}w$ satisfies $x_{(3)}^2=6x_{(3)}$, so its rank-one Murphy form is zero in characteristic three. In the rank-one column cell the generator is $1$ and its square coefficient is $1$; the higher ideal contains $1+T_1$ and $1+T_2$ (the latter is a conjugate of the former), so this cell and its nonzero form quotient are the sign module. For the middle cell put $x=1+T_1$, $c_0=x$ and $c_1=xT_2$ modulo the higher row ideal. Its row symmetrizer satisfies $x_{(3)}=x+xT_2+xT_2T_1$, so $c_1T_1=-c_0-c_1$ while $c_0T_1=c_0$; and $T_2^2=1$ gives $c_0T_2=c_1$, $c_1T_2=c_0$. Thus its generator matrices are $M_1=\left(\begin{smallmatrix}1&0\\-1&-1\end{smallmatrix}\right)$ and $M_2=\left(\begin{smallmatrix}0&1\\1&0\end{smallmatrix}\right)$. The independent cell products $x^2=2x$, $xT_2x=x_{(3)}-x\equiv-x$ and $xT_2^2x=2x$ give $G=\left(\begin{smallmatrix}2&-1\\-1&2\end{smallmatrix}\right)=\left(\begin{smallmatrix}2&2\\2&2\end{smallmatrix}\right)$ over $F$. Its radical is the line $(1,-1)$; modulo it both generators act by $1$, so $D_{\mathrm M}^{(2,1)}$ is the nonzero trivial module. These two simple images are distinct since $1\ne-1$. The exact corner/form identity [F3] therefore kills precisely $L^{(3)}$ among the three labels. Projecting the Weyl matrix just proved gives all displayed Murphy Specht rows over the original $F$, without any general finite-$e$ nonzero-label criterion. [F3, step 2.1, algebra]

4.1 Dipper-James rows and the direct group computation. Conjugating the partitions $(3)\leftrightarrow(1,1,1)$, $(2,1)\leftrightarrow(2,1)$ and applying the signed $\theta$-pullback to every Hecke module, the rows of step 3.1 become $[S^{(1,1,1)}]=[D^{(2,1)}]$, $[S^{(2,1)}]=[D^{(2,1)}]+[D^{(3)}]$ and $[S^{(3)}]=[D^{(3)}]$ in the $3$-regular labels, that is, the matrix $\left(\begin{smallmatrix}1&0\\1&1\\0&1\end{smallmatrix}\right)$ with rows $(3),(2,1),(1,1,1)$ and columns $(3),(2,1)$. For the independent direct check, put $w:=e_t+e_u=v_3-v_1+v_2-v_1=v_1+v_2+v_3$ in characteristic $3$: then $w\ne0$ spans a one-dimensional submodule, since $\sigma\cdot v_i=v_{\sigma(i)}$ gives $\sigma\cdot w=w$ for every $\sigma\in S_3$, so it realises the trivial module; and in the quotient, $(12)\cdot e_t+e_t=(v_3-v_2)+(v_3-v_1)=2v_3-v_1-v_2=3v_3-w\equiv0$ shows that $(12)$ acts by $-1$, so the quotient is the sign module. With $S^{(3)}=\operatorname{triv}$, $S^{(1,1,1)}=\operatorname{sgn}$ by [F5], and $D^{(3)}=\operatorname{triv}$, $D^{(2,1)}=\operatorname{sgn}$ by [F4], the direct rows of $S^{(3)},S^{(2,1)},S^{(1,1,1)}$ are $(1,0),(1,1),(0,1)$, matching the matrix obtained from the Schur functor entry by entry. [F4, F5, step 3.1, algebra] ∎