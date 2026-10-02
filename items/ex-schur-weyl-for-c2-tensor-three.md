---
id: ex-schur-weyl-for-c2-tensor-three
kind: example
title: "Schur-Weyl decomposition of (C^2)^tensor3"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [thm-schur-weyl-decomposition-with-length-cutoff, lem-schur-weyl-polytabloid-highest-weight, thm-standard-polytabloid-basis, def-commuting-symmetric-and-linear-actions-on-tensor-power, thm-tensor-product-basis-from-bases, def-linear-basis, def-young-subgroup-tabloid-and-permutation-module, def-column-antisymmetrizer-polytabloid-and-specht-module, def-young-tableau-standard-tableau-and-shape, def-partition-young-diagram-and-conjugate-partition]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Pavel Etingof et al., Introduction to Representation Theory, MIT 18.712 Chapter 4, Sections 4.18-4.21, PDF pp. 18-21"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/84358595a02a73bced2c4e363a5d66f0_MIT18_712F10_ch4.pdf"
    - title: "Hsueh-Yung Lin, Modern Algebra I, Section 27, printed pp. 71-74"
      url: "https://homepage.ntu.edu.tw/~hsuehyunglin/Modern_Algebra_I.pdf"
verification:
  precheck: pass
---

## Statement

Let $V=\mathbb C^2$ with fixed basis $e_1,e_2$, let $E=V^{\otimes3}$ carry the
commuting left place action of $S_3$ and diagonal action of
$\operatorname{GL}(V)$
([[def-commuting-symmetric-and-linear-actions-on-tensor-power]]), and for
$\lambda\vdash3$ put $M_\lambda:=\operatorname{Hom}_{S_3}(S^\lambda,E)$, with
$\operatorname{GL}(V)$ acting by postcomposition. Then:

1. **(Decomposition.)** There is an isomorphism of
   $(S_3\times\operatorname{GL}(V))$-modules
   $E\cong S^{(3)}\otimes M_{(3)}\oplus S^{(2,1)}\otimes M_{(2,1)}$, and
   $M_{(1,1,1)}=0$: the shape $(1,1,1)$ is absent, in agreement with the length
   cutoff $\ell((1,1,1))=3>2=\dim V$.
2. **(The trivial factor.)** $S^{(3)}$ is the one-dimensional trivial
   representation of $S_3$, the fixed space $E^{S_3}$ is four-dimensional with
   basis
   $$e_1^{\otimes3},\quad \sum_{\sigma\in S_3}\sigma\cdot(e_1\otimes e_1\otimes e_2),\quad \sum_{\sigma\in S_3}\sigma\cdot(e_1\otimes e_2\otimes e_2),\quad e_2^{\otimes3},$$
   and evaluation at a generator of $S^{(3)}$ identifies $M_{(3)}\cong E^{S_3}$
   as $\operatorname{GL}(V)$-modules. Writing
   $\operatorname{Sym}^3(\mathbb C^2):=E^{S_3}$ with the corresponding basis
   $x^3,x^2y,xy^2,y^3$, the decomposition reads
   $E\cong S^{(3)}\otimes\operatorname{Sym}^3(\mathbb C^2)\oplus S^{(2,1)}\otimes M_{(2,1)}$.
3. **(Dimensions and highest weight.)** $\dim_{\mathbb C}M_{(3)}=4$ and
   $\dim_{\mathbb C}M_{(2,1)}=2$, so
   $\dim_{\mathbb C}E=8=1\cdot4+2\cdot2$; the two standard $(2,1)$-tableaux
   give $\dim_{\mathbb C}S^{(2,1)}=2$, and $M_{(2,1)}$ has highest weight
   $(2,1)$, while $M_{(3)}$ has highest weight $(3)$.

## Facts & Assumptions

**Given:** the complex vector space $V=\mathbb C^2$ with basis $e_1,e_2$, the
module $E=V^{\otimes3}$ with its commuting $S_3$- and
$\operatorname{GL}(V)$-actions, and the multiplicity spaces
$M_\lambda=\operatorname{Hom}_{S_3}(S^\lambda,E)$ for $\lambda\vdash3$.

[F1] The place action of $S_3$ on $E$ is a linear left action and
$g\mapsto g^{\otimes3}$ is the diagonal $\operatorname{GL}(V)$-action, which
commutes with it; the diagonal infinitesimal operator is
$\Delta(X)=\sum_{a=1}^3\mathbf 1^{\otimes(a-1)}\otimes X\otimes\mathbf 1^{\otimes(3-a)}$
([[def-commuting-symmetric-and-linear-actions-on-tensor-power]]).

[F2] The eight elementary tensors $e_i\otimes e_j\otimes e_k$ with
$i,j,k\in\{1,2\}$ form a basis of $E$, so $\dim_{\mathbb C}E=2^3=8$
([[thm-tensor-product-basis-from-bases]], [[def-linear-basis]]).

[F3] For $d=\dim_{\mathbb C}V=2$ the Schur-Weyl decomposition reads
$E\cong\bigoplus_{\lambda\vdash3,\ \ell(\lambda)\le2}S^\lambda\otimes M_\lambda$;
for every $\lambda\vdash3$ with $\ell(\lambda)\le2$ the space $M_\lambda$ is
nonzero and irreducible over $B=\operatorname{span}_{\mathbb C}\{g^{\otimes3}\}$
and has highest weight $\lambda$, while $\ell(\lambda)>2$ forces $M_\lambda=0$
([[thm-schur-weyl-decomposition-with-length-cutoff]]).

[F4] For $\lambda\vdash3$ with $\ell(\lambda)\le2$, the multiplicity space
$M_\lambda$ contains the nonzero map $\varphi=\Phi|_{S^\lambda}$ with
$\Delta(E_{ii})\circ\varphi=\lambda_i\varphi$ for every $i$ (with
$\lambda_i:=0$ for $i>\ell(\lambda)$) and $\Delta(E_{12})\circ\varphi=0$; if $M_\lambda$
is irreducible over $B$, then $\lambda$ is its unique highest weight
([[lem-schur-weyl-polytabloid-highest-weight]]).

[F5] For every $\lambda\vdash3$ the standard polytabloids form a $\mathbb C$-basis
of $S^\lambda$, so $\dim_{\mathbb C}S^\lambda=f^\lambda$, the number of
standard $\lambda$-tableaux
([[thm-standard-polytabloid-basis]], [[def-young-tableau-standard-tableau-and-shape]]).

[F6] For a partition $\lambda$ the tabloids of shape $\lambda$ form a basis of
$M^\lambda=\mathbb C^{(\Omega_\lambda)}$ on which $S_n$ acts by
$\sigma\cdot\{t\}=\{\sigma\cdot t\}$. For $\lambda=(3)$ the set
$\Omega_{(3)}$ has the single element $\{t\}=\{1,2,3\}$, so $M^{(3)}$ is
one-dimensional and every $\sigma\in S_3$ acts trivially
([[def-young-subgroup-tabloid-and-permutation-module]]).

[F7] The polytabloid of a tableau $t$ is $e_t=\kappa_t\cdot\{t\}$ with
$\kappa_t=\sum_{\gamma\in C_t}\operatorname{sgn}(\gamma)\gamma$, and
$S^\lambda=\operatorname{span}_{\mathbb C}\{e_s:s$ a $\lambda$-tableau$\}$;
the column stabilizer of a one-row tableau is trivial, so $e_t=\{t\}$ there
([[def-column-antisymmetrizer-polytabloid-and-specht-module]]).

[F8] The standard tableaux of shape $(3)$ are the single tableau
$1\,2\,3$, and the standard tableaux of shape $(2,1)$ are
$\begin{smallmatrix}1&2\\3&\end{smallmatrix}$ and
$\begin{smallmatrix}1&3\\2&\end{smallmatrix}$; hence $f^{(3)}=1$ and
$f^{(2,1)}=2$
([[def-young-tableau-standard-tableau-and-shape]]).

[F9] The partitions of $3$ are $(3)$ with $\ell=1$, $(2,1)$ with $\ell=2$ and
$(1,1,1)$ with $\ell=3$
([[def-partition-young-diagram-and-conjugate-partition]]).

No form of the Axiom of Choice is used: the space $V$ has an explicit finite
basis, the group $S_3$ is finite and explicit, and all decompositions below
are finite.

## Proof

**Proof technique:** direct.

1.1 By [F2] the elementary tensors $e_i\otimes e_j\otimes e_k$ form a basis of $E$, so $\dim_{\mathbb C}E=8$, and by [F1] the place action only permutes this basis: $\sigma\cdot(e_i\otimes e_j\otimes e_k)$ is again an elementary tensor, with the three basis vectors permuted among the positions. [given, F1, F2]

1.2 For $\lambda=(3)$ the module $M^{(3)}$ has the single tabloid $\{1,2,3\}$ as basis, so it is one-dimensional and every $\sigma\in S_3$ fixes that tabloid; by [F7] the column stabilizer of the one-row tableau $t$ is trivial, so $e_t=\{t\}$ and $S^{(3)}=\operatorname{span}\{e_s\}=\mathbb C\{t\}=M^{(3)}$. Hence $S^{(3)}$ is the one-dimensional trivial representation, and $e_t$ is a nonzero fixed vector that generates $S^{(3)}$. [F6, F7, given]

1.3 By [F9] the partitions of $3$ with $\ell(\lambda)\le2$ are $(3)$ and $(2,1)$, while $\ell((1,1,1))=3>2=\dim V$; by [F3] therefore $E\cong S^{(3)}\otimes M_{(3)}\oplus S^{(2,1)}\otimes M_{(2,1)}$ with $M_{(1,1,1)}=0$, and both $M_{(3)}$ and $M_{(2,1)}$ are nonzero and irreducible over $B$. [F3, F9, given]

1.4 By [F5] and the standard tableaux enumerated in [F8], $\dim_{\mathbb C}S^{(3)}=f^{(3)}=1$ and $\dim_{\mathbb C}S^{(2,1)}=f^{(2,1)}=2$; the two standard $(2,1)$-tableaux of [F8] are the two ways $\begin{smallmatrix}1&2\\3&\end{smallmatrix}$ and $\begin{smallmatrix}1&3\\2&\end{smallmatrix}$ of placing the entries while increasing along rows and down columns, so $f^{(2,1)}=2$ is verified directly. [F5, F8]

2.1 Compute the fixed space. An element $x=\sum_{i,j,k\in\{1,2\}}c_{ijk}\,e_i\otimes e_j\otimes e_k$ is fixed by $S_3$ exactly when its coefficient function is constant on every orbit of $S_3$ acting by permutation of the three positions, because [F2] makes these basis vectors linearly independent; the orbits are the four multisets $\{1,1,1\}$, $\{1,1,2\}$, $\{1,2,2\}$, $\{2,2,2\}$, of sizes $1,3,3,1$. The sums of distinct basis tensors in these four orbits form a basis of $E^{S_3}$, since the orbits are disjoint. The middle two sums over all $\sigma\in S_3$ displayed in the Statement are twice their distinct-orbit sums, because each of those tensors has a stabilizer of order two. As $2\ne0$ in $\mathbb C$, the four displayed vectors also form a basis, so $\dim_{\mathbb C}E^{S_3}=4$. [step 1.1, F1, F2, algebra]

2.2 For the highest weight, $\ell((2,1))=2=d$ and $\ell((3))=1\le d$, and $M_{(2,1)}$, $M_{(3)}$ are irreducible over $B$ by step 1.3; the highest-weight lemma [F4] therefore provides a nonzero $\varphi\in M_{(2,1)}$ with $\Delta(E_{11})\circ\varphi=2\varphi$, $\Delta(E_{22})\circ\varphi=\varphi$ and $\Delta(E_{12})\circ\varphi=0$, so $M_{(2,1)}$ has highest weight $(2,1)$, unique up to scalar; for $(3)$ the padded weight is $(3,0)$, so the same lemma gives eigenvalues $3$ and $0$ for $\Delta(E_{11})$ and $\Delta(E_{22})$, respectively, and annihilation by $\Delta(E_{12})$. [F4, step 1.3]

3.1 Since $S^{(3)}=\mathbb C e_t$ with $e_t$ fixed and nonzero by step 1.2, the evaluation map $\mathrm{ev}(\varphi):=\varphi(e_t)$ is a $\mathbb C$-linear bijection $\operatorname{Hom}_{S_3}(S^{(3)},E)\to E^{S_3}$: a homomorphism takes the fixed generator $e_t$ to a fixed vector, and conversely a fixed vector $v$ defines the well-defined $S_3$-linear map $\lambda e_t\mapsto\lambda v$. For $g\in\operatorname{GL}(V)$ postcomposition gives $\mathrm{ev}(g\cdot\varphi)=g^{\otimes3}\varphi(e_t)=(g^{\otimes3})\cdot\mathrm{ev}(\varphi)$, so the bijection is $\operatorname{GL}(V)$-equivariant; hence $M_{(3)}=\operatorname{Hom}_{S_3}(S^{(3)},E)\cong E^{S_3}$ as $\operatorname{GL}(V)$-modules, of dimension $4$. [step 1.2, step 2.1, F1, algebra]

4.1 Reading dimensions in the isomorphism of step 1.3 and using steps 3.1 and 1.4: $8=\dim_{\mathbb C}E=1\cdot\dim_{\mathbb C}M_{(3)}+2\cdot\dim_{\mathbb C}M_{(2,1)}=1\cdot4+2\dim_{\mathbb C}M_{(2,1)}$, so $\dim_{\mathbb C}M_{(2,1)}=2$. [step 3.1, step 1.3, step 1.4, algebra]

5.1 Substituting the identification $M_{(3)}\cong E^{S_3}=\operatorname{Sym}^3(\mathbb C^2)$ of step 3.1 into step 1.3 gives the decomposition $E\cong S^{(3)}\otimes\operatorname{Sym}^3(\mathbb C^2)\oplus S^{(2,1)}\otimes M_{(2,1)}$. All three partitions of $3$ have been accounted for: $(3)$ and $(2,1)$ occur with the multiplicities $\dim M_{(3)}=4$ and $\dim M_{(2,1)}=2$ just computed, while $(1,1,1)$ is excluded exactly by the length cutoff $\ell((1,1,1))=3>d=2$; the dimension count $8=4+4$ closes, and the enumeration uses only the finite sets $\{1,2\}^3$, $S_3$ and the partitions of $3$, so no choice principle is invoked. This proves the Statement. [F2, F3, step 2.1, step 1.3, step 4.1, step 2.2, given] ∎

## Remarks

- **Why the shape $(1,1,1)$ is absent.** Its three boxes form one column,
  so a nonzero column-antisymmetrized tensor in $V^{\otimes3}$ would need three
  distinct basis vectors, and $V=\mathbb C^2$ supplies only two: this is the
  length cutoff $\ell(\lambda)\le d$ in the smallest nontrivial case, and it
  is exactly the criterion applied in step 1.3.

- **The classical shape of the answer.** $E\cong\operatorname{Sym}^3(\mathbb C^2)\oplus(M_{(2,1)})^{\oplus2}$
  with $\dim\operatorname{Sym}^3(\mathbb C^2)=4$ and $\dim M_{(2,1)}=2$: the
  degree-three piece of the symmetric algebra of $\mathbb C^2$ has the
  monomial basis $x^3,x^2y,xy^2,y^3$, and the remaining two copies of the
  two-dimensional module $M_{(2,1)}$ of highest weight $(2,1)$ exhaust the
  dimension count $4+2\cdot2=8$.
