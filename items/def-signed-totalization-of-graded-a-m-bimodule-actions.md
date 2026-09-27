---
id: def-signed-totalization-of-graded-a-m-bimodule-actions
kind: definition
title: "Signed totalization of graded A_m-bimodule actions"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-graded-balanced-tensor-product-and-homogeneous-hom, def-tensor-product-total-complex-of-chain-complexes, lem-graded-balanced-tensor-and-shift-isomorphisms, def-graded-khovanov-seidel-module-category-and-projectives, def-khovanov-seidel-type-a-quiver-algebra, def-cochain-complex-in-an-abelian-category, def-chain-homotopy, def-graded-ring-module-bimodule-and-internal-shift, def-shift-of-a-chain-complex, def-mapping-cone-of-a-chain-map]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Mikhail Khovanov and Paul Seidel, Quivers, Floer Cohomology, and Braid Group Actions, §2c, printed pp. 10-11"
      url: "https://arxiv.org/pdf/math/0006056"
verification:
  audited: 2026-09-27
  precheck: pass
---

## Definition

Fix $m\ge1$ and let $A_m$ be the Khovanov–Seidel type A algebra with its internal
grading, so that $A_m\text{-mod}$ is the category of finitely generated graded
left $A_m$-modules of
[[def-graded-khovanov-seidel-module-category-and-projectives]]. Let
$R^\bullet=(R^p,d_R^p)$ be a bounded complex of graded $(A_m,A_m)$-bimodules and
let $X^\bullet=(X^q,d_X^q)$ be a bounded complex of graded left $A_m$-modules, in
**cohomological** indexing, so that $d_R^p:R^p\to R^{p+1}$ and
$d_X^q:X^q\to X^{q+1}$ are degree-zero maps of graded modules squaring to zero.

**The total object.** For each $n\in\mathbb Z$ put
$$\bigl(R^\bullet\otimes_{A_m}X^\bullet\bigr)^n:=\bigoplus_{p+q=n}R^p\otimes_{A_m}X^q,$$
the direct sum over the $n$-th diagonal of balanced tensor products of
[[def-graded-balanced-tensor-product-and-homogeneous-hom]], each carrying its
total internal grading, in which the elementary tensor of homogeneous elements of
degrees $i$ and $j$ has degree $i+j$. This is the cohomological rewriting of the
familiar direct-sum totalization of the tensor product of a right and a left
complex of [[def-tensor-product-total-complex-of-chain-complexes]].

**The total differential.** On the summand $R^p\otimes_{A_m}X^q$ put
$$d^{n}\bigl(r\otimes x\bigr):=d_R^p(r)\otimes x+(-1)^p\,r\otimes d_X^q(x),\qquad r\otimes x\in R^p\otimes_{A_m}X^q,\ p+q=n .$$
The sign $(-1)^p$ uses the **homological** degree $p$ of the first factor only;
the internal degrees of the two factors are never used, and no internal sign
occurs anywhere in the construction. The differential is written additively over
the direct sum, so $d^n$ maps each summand into
$\bigl(R^\bullet\otimes_{A_m}X^\bullet\bigr)^{n+1}$, since $d_R^p$ raises the
homological degree by one and $d_X^q$ raises the second index by one.

**Claims proved below.** Both complexes being bounded, the total object is a
bounded complex of graded left $A_m$-modules: only finitely many diagonals are
nonzero, each diagonal is a finite direct sum, $d^{n+1}d^n=0$, and each $d^n$ is
degree zero for the internal grading and $A_m$-linear. The construction is
functorial in both variables for chain maps; the internal shift satisfies
$(R\{r\}\otimes_{A_m}X)\cong(R\otimes_{A_m}X)\{r\}\cong R\otimes_{A_m}(X\{r\})$
by canonical degree-zero isomorphisms compatible with the differentials; and
homotopies transfer with the Koszul sign, $H:=(-1)^p\,\mathrm{id}_{R^p}\otimes h^q$
on $R^p\otimes_{A_m}X^q$ for a homotopy $h$ of $X^\bullet$ and $K:=k^p\otimes\mathrm{id}_{X^q}$
for a homotopy $k$ of $R^\bullet$, so that both tensor constructions descend to
homotopy categories.

**Convention.** The complex $R^\bullet\otimes_{A_m}X^\bullet$ is a complex of
graded **left** $A_m$-modules: the right action of $A_m$ on the terms of
$R^\bullet$ is consumed by the balanced tensor, whose outer left action comes
from the left action on $R^\bullet$, while the homological shift $[1]$ of
[[def-mapping-cone-of-a-chain-map]] is never identified with the internal shift
$\{r\}$ of [[def-graded-ring-module-bimodule-and-internal-shift]]. Consequently
$R_i\otimes_{A_m}X$ and $R_i^{-1}\otimes_{A_m}X$ of a later item act on
$A_m\text{-mod}$, and the sign in the differential is a homological sign.

## Facts & Assumptions

**Given:** An integer $m\ge1$, the algebra $A_m$ with its internal grading, a bounded complex $R^\bullet=(R^p,d_R^p)$ of graded $(A_m,A_m)$-bimodules and a bounded complex $X^\bullet=(X^q,d_X^q)$ of graded left $A_m$-modules in cohomological indexing.

[F1] For a ring $R$, chain complexes $P$ of right $R$-modules and $Q$ of left $R$-modules have the direct-sum totalization with $(P\otimes_RQ)_n=\bigoplus_{p+q=n}P_p\otimes_RQ_q$ and differential $d(p\otimes q)=d_Pp\otimes q+(-1)^pp\otimes d_Qq$, the sign depending on the degree of the first factor ([[def-tensor-product-total-complex-of-chain-complexes]]).

[L2] The balanced tensor of a graded right $A_m$-module and a graded left $A_m$-module carries the total internal grading in which a homogeneous elementary tensor has degree the sum of the degrees of its factors; it is functorial in each variable for degree-zero module maps; and if the first factor is a graded $(B,A_m)$-bimodule then the outer left action $b(m\otimes n):=(bm)\otimes n$ makes the tensor a graded left $B$-module, symmetrically on the right ([[def-graded-balanced-tensor-product-and-homogeneous-hom]]).

[L3] For graded modules the identity on elementary tensors induces degree-zero isomorphisms $M\{r\}\otimes_RN\{s\}\cong(M\otimes_RN)\{r+s\}$ natural in $M$ and $N$ and compatible with outer actions ([[lem-graded-balanced-tensor-and-shift-isomorphisms]]).

[L4] A complex of graded left $A_m$-modules is a family of graded left $A_m$-modules $C^n$ with degree-zero $A_m$-linear maps $d^n:C^n\to C^{n+1}$ satisfying $d^{n+1}d^n=0$; a chain map is a family of degree-zero $A_m$-linear maps commuting with the differentials, and a homotopy between two chain maps $f,g$ is a family of degree-zero $A_m$-linear maps $h^n:C^n\to D^{n-1}$ with $f^n-g^n=d_D^{n-1}h^n+h^{n+1}d_C^n$ ([[def-cochain-complex-in-an-abelian-category]], [[def-chain-homotopy]], [[def-graded-khovanov-seidel-module-category-and-projectives]]).




## Proof

**Proof technique:** direct.

1.1 *The total object is a bounded family of finite direct sums.* By [F1] the totalization of two complexes is the direct sum over the diagonals $p+q=n$; since $R^\bullet$ and $X^\bullet$ are bounded there are integers $a\le b$ and $c\le d$ with $R^p=0$ for $p\notin[a,b]$ and $X^q=0$ for $q\notin[c,d]$, so the summand $R^p\otimes_{A_m}X^q$ vanishes unless $p\in[a,b]$ and $q\in[c,d]$, the total object vanishes outside the finite interval of diagonals $a+c\le n\le b+d$, and each nonzero diagonal is a direct sum of at most $b-a+1$ summands, hence finite. [F1]

2.1 *Each summand is a graded left $A_m$-module.* The term $R^p$ is a graded $(A_m,A_m)$-bimodule and $X^q$ a graded left $A_m$-module, so by [L2] the balanced tensor $R^p\otimes_{A_m}X^q$ is a graded abelian group with the total internal grading and carries the outer left $A_m$-action $a\cdot(r\otimes x)=(ar)\otimes x$, which is homogeneous; hence each diagonal of step 1.1 is a finite direct sum of graded left $A_m$-modules and so is itself a graded left $A_m$-module. [step 1.1, L2]

3.1 *Well-definedness, linearity and degree of $d$.* For fixed $(p,q)$ the formula $r\otimes x\mapsto d_R^p(r)\otimes x+(-1)^p\,r\otimes d_X^q(x)$ is the sum of the two composite maps $d_R^p\otimes\mathrm{id}$ and $(-1)^p(\mathrm{id}\otimes d_X^q)$ along the canonical identifications $R^p\otimes_{A_m}X^{q+1}\subseteq(R^\bullet\otimes_{A_m}X^\bullet)^{p+q+1}$ and $R^{p+1}\otimes_{A_m}X^q\subseteq(R^\bullet\otimes_{A_m}X^\bullet)^{p+q+1}$; each is a degree-zero $A_m$-linear map by [L2] and the $A_m$-linearity and degree-zero property of $d_R$, $d_X$, so $d$ is $A_m$-linear, preserves the total internal degree, and is defined on the direct sum by its components, exactly as in [F1]. The sign $(-1)^p$ is an integer sign attached to the homological index and does not involve the internal degree. [step 2.1, F1, L2]

4.1 *$d^2=0$.* For $r\otimes x\in R^p\otimes_{A_m}X^q$ one computes $d(d(r\otimes x))=d\bigl(d_Rr\otimes x+(-1)^pr\otimes d_Xx\bigr)=d_R^2r\otimes x+(-1)^{p+1}d_Rr\otimes d_Xx+(-1)^pd_Rr\otimes d_Xx+(-1)^{2p}r\otimes d_X^2x$, using that the sign attached to $d_Rr\in R^{p+1}$ in the second application is $(-1)^{p+1}$ and that attached to $r\in R^p$ is $(-1)^p$; the two middle terms are negatives of one another and the outer terms vanish because $d_R^2=0=d_X^2$, so $d^2=0$ on every summand and hence on the total object. [step 3.1, F1]

4.2 *Functoriality in both variables.* Let $f:R^\bullet\to R'^\bullet$ and $g:X^\bullet\to X'^\bullet$ be chain maps of the indicated complexes; on $R^p\otimes_{A_m}X^q$ put $(f\otimes g)(r\otimes x):=f^p(r)\otimes g^q(x)$, a finite sum of degree-zero $A_m$-linear maps by [L2]. Then $d(f\otimes g)(r\otimes x)=f^{p+1}d_Rr\otimes g^qx+(-1)^pf^pr\otimes g^{q+1}d_Xx=(f\otimes g)d(r\otimes x)$, because $f,g$ commute with the differentials and the same homological sign $(-1)^p$ occurs on both sides; thus $f\otimes g$ is a chain map of the totalizations, the identity pair induces the identity, and composition is preserved, so the construction is a functor of both variables. [step 3.1, L2]

4.3 *Homotopies in the second variable.* Let $h$ be a homotopy of [L4] between chain maps $g,g':X^\bullet\to X'^\bullet$, with $h^q:X^q\to X'^{q-1}$ degree-zero and $A_m$-linear, and put $H(r\otimes x):=(-1)^p\,r\otimes h^q(x)$ on $R^p\otimes_{A_m}X^q$. Then $dH(r\otimes x)=(-1)^p\bigl(d_Rr\otimes hx+(-1)^pr\otimes d_{X'}hx\bigr)$ and $Hd(r\otimes x)=(-1)^{p+1}d_Rr\otimes hx+r\otimes hd_Xx$, so the terms involving $d_Rr$ cancel and $dH+Hd=\mathrm{id}\otimes(d_{X'}h+hd_X)$; consequently, if $g-g'=d_{X'}h+hd_X$, then $\mathrm{id}\otimes g-\mathrm{id}\otimes g'=dH+Hd$, so $H$ is a homotopy between the induced total maps. [step 3.1, L2, L4]

4.4 *Homotopies in the first variable.* Let $k$ be a homotopy between chain maps $f,f':R^\bullet\to R'^\bullet$ with $k^p:R^p\to R'^{p-1}$, and put $K(r\otimes x):=k^p(r)\otimes x$. Then $dK(r\otimes x)=d_{R'}kr\otimes x+(-1)^{p-1}kr\otimes d_Xx$ and $Kd(r\otimes x)=kd_Rr\otimes x+(-1)^pkr\otimes d_Xx$, so the terms involving $kr\otimes d_Xx$ cancel and $dK+Kd=(d_{R'}k+kd_R)\otimes\mathrm{id}$; consequently $f\otimes\mathrm{id}-f'\otimes\mathrm{id}=dK+Kd$ whenever $f-f'=d_{R'}k+kd_R$. No extra sign is needed in $K$: the homotopy lowers the first index from $p$ to $p-1$, giving the opposite signs in the two displayed cross terms. [step 3.1, L2, L4]

5.1 *Internal shifts.* By [L3] with $s=0$ and $r$ arbitrary there is a degree-zero isomorphism $R\{r\}\otimes_{A_m}X\cong(R\otimes_{A_m}X)\{r\}$ induced by the identity on elementary tensors, natural in both variables and compatible with the outer actions; it commutes with the differentials because $d_R$ is degree zero and the shift only relabels internal degrees, so it is an isomorphism of complexes of graded left $A_m$-modules; the same argument with $r=0$ and the second variable shifted gives $(R\otimes_{A_m}X)\{r\}\cong R\otimes_{A_m}(X\{r\})$. [step 4.2, L3]

6.1 *Conclusion.* The total object $\bigl(R^\bullet\otimes_{A_m}X^\bullet\bigr)^n=\bigoplus_{p+q=n}R^p\otimes_{A_m}X^q$ of the definition is a bounded complex of graded left $A_m$-modules with the differential $d(r\otimes x)=d_Rr\otimes x+(-1)^pr\otimes d_Xx$: the diagonal sums are finite and the object is bounded by step 1.1, each term is a graded left $A_m$-module by step 2.1, the differential is a well-defined $A_m$-linear map of internal degree zero by step 3.1 and squares to zero by step 4.1, and the sign uses the homological degree only; the construction is functorial by step 4.2, its internal shifts are computed by step 5.1, and homotopies transfer in both variables by steps 4.3 and 4.4 with the Koszul sign $(-1)^p$ on the second variable only, so that the induced functor on the homotopy category is well defined. All signs are integral signs on homological indices, the internal grading is never used to choose a sign, only finitely many summands occur in each degree, and no choice principle is used. [step 1.1, step 4.1, step 4.2, step 5.1, step 4.3, step 4.4] ∎
