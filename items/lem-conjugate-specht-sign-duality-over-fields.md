---
id: lem-conjugate-specht-sign-duality-over-fields
kind: lemma
title: Conjugate Specht modules are sign-twisted duals over every field
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
landmark: false
proof_strategy: direct
deps:
  - def-integral-specht-lattice-and-base-change
  - def-integral-tabloid-bilinear-form-and-specht-gram-matrix
  - thm-james-submodule-theorem-over-an-arbitrary-field
  - def-sign-representation-and-restriction-of-a-representation
  - def-partition-young-diagram-and-conjugate-partition
  - def-young-subgroup-tabloid-and-permutation-module
  - def-column-antisymmetrizer-polytabloid-and-specht-module
  - def-row-and-column-stabilizers-of-a-tableau
  - def-young-tableau-standard-tableau-and-shape
  - lem-polytabloid-covariance-and-column-sign
  - def-tensor-product-of-modules-by-generators-and-relations
  - cor-tensor-products-of-finite-free-modules-and-dimension
  - thm-rank-nullity
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "G. D. James, The Representation Theory of the Symmetric Groups, Lecture Notes in Mathematics 682, Theorem 6.7 (with its proof), Lemma 8.14 and Theorem 8.15, printed pp. 25-26 and 31-33"
      url: "https://www-users.cse.umn.edu/~webb/oldteaching/Year2010-11/the-representation-theory-of-the-symmetric-groups-SLN.pdf"
    - title: "Alexander Kleshchev, Representation Theory of Symmetric Groups and Related Hecke Algebras, Section 5.3 Remark 5.5, PDF p. 25 (q=1 dictionary, cross-check)"
      url: "https://arxiv.org/pdf/0909.4844"
verification:
  precheck: pass
---

## Statement

Let $F$ be a field, $n\ge0$, $\lambda\vdash n$, and let $\lambda'$ be the
conjugate partition. Write $\Omega_\lambda$ for the finite set of
$\lambda$-tabloids and let
$$M^\lambda_F=F^{(\Omega_\lambda)},\qquad S^\lambda_F\subseteq M^\lambda_F,\qquad \kappa_t=\sum_{\gamma\in C_t}\operatorname{sgn}(\gamma)\gamma,\qquad e_t=\kappa_t\{t\}$$
be the field-valued tabloid module, the span of the polytabloids inside it,
the column antisymmetrizer, and the polytabloid of a $\lambda$-tableau $t$
([[def-young-subgroup-tabloid-and-permutation-module]],
[[def-column-antisymmetrizer-polytabloid-and-specht-module]]). Let
$$\beta_F:M^\lambda_F\times M^\lambda_F\longrightarrow F$$
be the $F$-bilinear form for which the tabloid basis is orthonormal
([[def-integral-tabloid-bilinear-form-and-specht-gram-matrix]]), and for a
subspace $V\subseteq M^\lambda_F$ put
$$V^\perp:=\{x\in M^\lambda_F:\beta_F(x,v)=0\text{ for all }v\in V\}.$$

Let $\operatorname{sgn}$ be the sign representation of $S_n$ on the line
$F w$, so that $\sigma\cdot w=\operatorname{sgn}(\sigma)w$
([[def-sign-representation-and-restriction-of-a-representation]]), and let
$$S^\lambda_F\otimes\operatorname{sgn}$$
be the tensor product of $F[S_n]$-modules with the diagonal action
$\sigma\cdot(x\otimes w):=(\sigma\cdot x)\otimes(\sigma\cdot w)$, a
finite-dimensional $F[S_n]$-module
([[def-tensor-product-of-modules-by-generators-and-relations]]). For a
finite-dimensional $F[S_n]$-module $D$ the **dual** is
$D^*=\operatorname{Hom}_F(D,F)$ with $(\sigma\cdot f)(v):=f(\sigma^{-1}v)$.

Fix the **row-filled** $\lambda$-tableau $t_0$, whose $i$-th row carries the
block $B_i=\{\lambda_1+\cdots+\lambda_{i-1}+1,\dots,\lambda_1+\cdots+\lambda_i\}$
in increasing order, and let $t_0^{\mathsf T}$ be its transpose, a
$\lambda'$-tableau. For a $\lambda'$-tableau $u$ let $\sigma_u\in S_n$ be the
unique permutation with $\sigma_u\cdot t_0^{\mathsf T}=u$, and let
$u^{\mathsf T}$ be the transpose of $u$, a $\lambda$-tableau. Define an
$F$-linear map on the tabloid basis of $M^{\lambda'}_F$ by
$$\theta(\{u\}):=\operatorname{sgn}(\sigma_u)\,\bigl(e_{u^{\mathsf T}}\otimes w\bigr) \ \in\ S^\lambda_F\otimes\operatorname{sgn}.$$

**Lemma.** With this notation:

1. $\theta$ does not depend on the chosen representative $u$ of the tabloid
   $\{u\}$; it is a well-defined $F[S_n]$-module homomorphism
   $\theta:M^{\lambda'}_F\to S^\lambda_F\otimes\operatorname{sgn}$ with
   $\theta(\{t_0^{\mathsf T}\})=e_{t_0}\otimes w$.
2. $\theta$ is surjective and
   $\ker\theta=(S^{\lambda'}_F)^\perp$.
3. Consequently $\theta$ induces $F[S_n]$-isomorphisms
   $$M^{\lambda'}_F/(S^{\lambda'}_F)^\perp\cong S^\lambda_F\otimes\operatorname{sgn}, \qquad\text{hence}\qquad S^\lambda_F\otimes\operatorname{sgn}\cong (S^{\lambda'}_F)^*,$$
   the second being the composite with $x\mapsto\beta_F(x,\cdot)|_{S^{\lambda'}_F}$.

No nondegeneracy of $\beta_F$ restricted to $S^{\lambda'}_F$ is assumed, and
the statement includes every prime characteristic, the case $n=0$, and the
case $F=\mathbb Q$ used in step 2.2. No step divides by a group order, none
uses positivity or averaging, and none uses characteristic zero beyond the
explicitly separated rational computation in steps 2.2 and 3.1.

## Facts & Assumptions

**Given:** A field $F$, an integer $n\ge0$, a partition $\lambda\vdash n$, its conjugate $\lambda'$, the row-filled tableau $t_0$, and the definitions above.

[F1] The tabloids form an $F$-basis of $M^\lambda_F$; $\{t\}=\{\rho\cdot t:\rho\in R_t\}$, and $S_n$ acts by $\sigma\cdot\{t\}=\{\sigma\cdot t\}$ ([[def-young-subgroup-tabloid-and-permutation-module]]). The coefficient of $\{t\}$ in $e_t$ is $1$, so $e_t\ne0$, and every tabloid coefficient of $e_t$ lies in $\{0,1,-1\}$; over every commutative ring $R$ the standard polytabloids form an $R$-basis of $S^\lambda_R\cong R\otimes_{\mathbb Z}S^\lambda_{\mathbb Z}$, i.e. $S^\lambda_R$ is the $R[S_n]$-span of the polytabloids; $S^\lambda_{\mathbb Z}$ is a direct summand of the free $\mathbb Z$-module $M^\lambda_{\mathbb Z}$, and every $e_t$ generates $S^\lambda_R$ as an $R[S_n]$-module ([[def-integral-specht-lattice-and-base-change]], [[def-column-antisymmetrizer-polytabloid-and-specht-module]]).

[F2] $\beta_F$ is symmetric, nondegenerate and $S_n$-invariant, $\beta_F(\sigma x,\sigma y)=\beta_F(x,y)$, and it is the scalar extension of the integral form $\beta_{\mathbb Z}$ with orthonormal tabloid basis; every $\kappa_t$ is self-adjoint, $\beta_F(\kappa_tx,y)=\beta_F(x,\kappa_ty)$ ([[def-integral-tabloid-bilinear-form-and-specht-gram-matrix]]).

[F3] $C_t$ and $R_t$ are the column and row stabilizers of $t$; a permutation lies in $R_t$ if and only if it fixes the tabloid $\{t\}$, and $e_{\sigma\cdot t}=\sigma\cdot e_t$ while $\gamma\cdot e_t= \operatorname{sgn}(\gamma)e_t$ for $\gamma\in C_t$ ([[def-row-and-column-stabilizers-of-a-tableau]], [[lem-polytabloid-covariance-and-column-sign]]).

[F4] A $\lambda$-tableau is a bijection from the set of cells of $[\lambda]$ onto $\{1,\dots,n\}$; the transpose $t^{\mathsf T}$, defined by $t^{\mathsf T}(j,i):=t(i,j)$, is a $\lambda'$-tableau, where $\lambda'_j=\#\{i:\lambda_i\ge j\}$; transposition commutes with relabelling, $(\sigma\cdot t)^{\mathsf T}=\sigma\cdot t^{\mathsf T}$; it swaps the row and column conditions, so it bijects the standard $\lambda$-tableaux with the standard $\lambda'$-tableaux; and $R_t=C_{t^{\mathsf T}}$, $C_t=R_{t^{\mathsf T}}$ ([[def-partition-young-diagram-and-conjugate-partition]], [[def-young-tableau-standard-tableau-and-shape]], [[def-row-and-column-stabilizers-of-a-tableau]]).

[F5] **James submodule theorem over every field:** for every $F$ and every $F[S_n]$-submodule $U\le M^\lambda_F$, either $S^\lambda_F\le U$ or $U\le(S^\lambda_F)^\perp$ ([[thm-james-submodule-theorem-over-an-arbitrary-field]]).

[F6] For finite-dimensional $F$-vector spaces $V,W$ one has $\dim_F(V\otimes_FW)=(\dim_FV)(\dim_FW)$ ([[cor-tensor-products-of-finite-free-modules-and-dimension]]); for a subspace $V\le M$ of a space with a nondegenerate bilinear form, the map $M\to V^*$, $x\mapsto\beta(x,\cdot)|_V$ is surjective with kernel $V^\perp$, so $\dim_FV^\perp=\dim_FM-\dim_FV$; and rank-nullity holds ([[thm-rank-nullity]]).

[F7] $\operatorname{sgn}$ is one-dimensional with $\sigma\cdot w= \operatorname{sgn}(\sigma)w$, so $S^\lambda_F\otimes\operatorname{sgn}$ is the tensor product of $F[S_n]$-modules with the diagonal action and $\dim_F(S^\lambda_F\otimes\operatorname{sgn})=\dim_FS^\lambda_F$ ([[def-sign-representation-and-restriction-of-a-representation]], [[def-tensor-product-of-modules-by-generators-and-relations]]).

## Proof

**Proof technique:** direct.

1.1 For a $\lambda$-tableau $t$ let $t^{\mathsf T}$ be its transpose. By [F4], $t^{\mathsf T}$ is a $\lambda'$-tableau, $(\sigma\cdot t)^{\mathsf T}= \sigma\cdot t^{\mathsf T}$ for $\sigma\in S_n$, and $R_u=C_{u^{\mathsf T}}$ for every tableau $u$. Transposition is a bijection between the $\lambda$-tableaux and the $\lambda'$-tableaux, inverse to itself. Care is needed with tabloids: a transposed tableau $\rho\cdot t^{\mathsf T}$ with $\rho\in R_t=C_{t^{\mathsf T}}$ need not be row equivalent to $t^{\mathsf T}$, so the assignment $t\mapsto t^{\mathsf T}$ does not descend to the tabloids and no such descent is used anywhere below; the map constructed next is defined on each tabloid by a signed polytabloid, not by a transposed tabloid. By [F1] and [F4] the number of standard $\lambda$-tableaux equals the number of standard $\lambda'$-tableaux, so $$\dim_FS^\lambda_F=\dim_FS^{\lambda'}_F=:f,$$ and $\dim_FM^{\lambda'}_F=|\Omega_{\lambda'}|$. [given, F1, F4, algebra]

1.2 **Well-definedness of $\theta$.** Fix a $\lambda'$-tableau $u$ and $\gamma\in R_u$, so that $\gamma\cdot u$ is a tableau of the same tabloid $\{u\}$ by [F1]. Since $\sigma_u\cdot t_0^{\mathsf T}=u$, one has $(\gamma\sigma_u)\cdot t_0^{\mathsf T}=\gamma\cdot u$, so $\sigma_{\gamma\cdot u}=\gamma\sigma_u$ and $\operatorname{sgn}(\sigma_{\gamma\cdot u})=\operatorname{sgn}(\gamma) \operatorname{sgn}(\sigma_u)$. Also $(\gamma\cdot u)^{\mathsf T}=\gamma\cdot u^{\mathsf T}$ by [F4], and $\gamma\in R_u=C_{u^{\mathsf T}}$ by [F4], so [F3] gives $e_{(\gamma\cdot u)^{\mathsf T}}=\gamma\cdot e_{u^{\mathsf T}} =\operatorname{sgn}(\gamma)e_{u^{\mathsf T}}$. Multiplying, $$\operatorname{sgn}(\sigma_{\gamma\cdot u}) e_{(\gamma\cdot u)^{\mathsf T}} =\operatorname{sgn}(\gamma)^2\operatorname{sgn}(\sigma_u)e_{u^{\mathsf T}} =\operatorname{sgn}(\sigma_u)e_{u^{\mathsf T}},$$ and the tensor factor $w$ is unchanged, so $\theta(\{\gamma\cdot u\})=\theta(\{u\})$; every representative of $\{u\}$ arises this way, so $\theta$ is well defined on the tabloid basis and extends $F$-linearly to $M^{\lambda'}_F$. Since $\sigma_{t_0^{\mathsf T}}=\mathrm{id}$ one has $\theta(\{t_0^{\mathsf T}\})= e_{t_0}\otimes w$. [given, F1, F3, F4, algebra]

1.3 **Equivariance.** Let $\sigma\in S_n$ and let $u$ be a $\lambda'$-tableau. Then $\sigma\cdot u$ is a $\lambda'$-tableau with $\sigma_{\sigma\cdot u}=\sigma\sigma_u$, and $(\sigma\cdot u)^{\mathsf T}=\sigma\cdot u^{\mathsf T}$ by [F4]; therefore [F3] gives $e_{(\sigma\cdot u)^{\mathsf T}}=\sigma\cdot e_{u^{\mathsf T}}$ and $$\theta(\sigma\cdot\{u\})=\operatorname{sgn}(\sigma)\operatorname{sgn}(\sigma_u) \bigl(\sigma\cdot e_{u^{\mathsf T}}\bigr)\otimes w =\sigma\cdot\bigl(\operatorname{sgn}(\sigma_u)e_{u^{\mathsf T}}\otimes w\bigr) =\sigma\cdot\theta(\{u\}),$$ because $\sigma\cdot w= \operatorname{sgn}(\sigma)w$ by [F7]. Hence $\theta$ is a homomorphism of $F[S_n]$-modules. [given, F3, F4, F7, algebra]

2.1 **Surjectivity.** By [F1] the vectors $\sigma\cdot e_{t_0}$ span $S^\lambda_F$. By [F7], $\sigma\cdot(e_{t_0}\otimes w)=\operatorname{sgn}(\sigma)(\sigma\cdot e_{t_0})\otimes w$; since every sign is a nonzero scalar, these orbit vectors span $S^\lambda_F\otimes\operatorname{sgn}$. The image of $\theta$ is a submodule containing $e_{t_0}\otimes w$ by steps 1.2 and 1.3, so it contains all these vectors and $\theta$ is surjective. [given, F1, F7, step 1.2, step 1.3, algebra]

2.2 **The kernel over $\mathbb Q$.** Work over the field $\mathbb Q$ and write $\theta_{\mathbb Q}$ for the map of step 1.2 over $\mathbb Q$. Since $C_{t_0^{\mathsf T}}=R_{t_0}$ by [F4] and $e_{t_0^{\mathsf T}}= \kappa_{t_0^{\mathsf T}}\{t_0^{\mathsf T}\}$ by [F1], steps 1.3 and [F2] give $$\theta_{\mathbb Q}\bigl(e_{t_0^{\mathsf T}}\bigr) =\kappa_{t_0^{\mathsf T}}\cdot\theta_{\mathbb Q}\bigl(\{t_0^{\mathsf T}\}\bigr) =\Bigl(\sum_{\gamma\in R_{t_0}}\gamma\Bigr)\cdot e_{t_0}\otimes w .$$ For $\gamma\in R_{t_0}$ the coefficient of $\{t_0\}$ in $\gamma\cdot e_{t_0}$ equals the coefficient of $\gamma^{-1}\{t_0\}=\{t_0\}$ in $e_{t_0}$, which is $1$ by [F1]; summing over the $|R_{t_0}|$ elements of $R_{t_0}$, the coefficient of $\{t_0\}\otimes w$ in $\theta_{\mathbb Q}(e_{t_0^{\mathsf T}})$ is $|R_{t_0}|=\prod_i\lambda_i!\ne0$ in $\mathbb Q$. Hence $\theta_{\mathbb Q}(e_{t_0^{\mathsf T}})\ne0$, so $S^{\lambda'}_{\mathbb Q}\nleq\ker\theta_{\mathbb Q}$; by the James submodule theorem [F5] applied to the submodule $\ker\theta_{\mathbb Q}\le M^{\lambda'}_{\mathbb Q}$ we get $$\ker\theta_{\mathbb Q}\subseteq(S^{\lambda'}_{\mathbb Q})^\perp .$$ [given, F1, F2, F4, F5, step 1.2, step 1.3, algebra]

2.3 **The orthogonal complement commutes with base change.** By [F2] and [F1] the map $\varphi:M^{\lambda'}_{\mathbb Z}\to \operatorname{Hom}_{\mathbb Z}(S^{\lambda'}_{\mathbb Z},\mathbb Z)$, $x\mapsto\beta_{\mathbb Z}(x,\cdot)$, is $\mathbb Z$-linear with kernel $S^{\lambda'\perp}_{\mathbb Z}$. It is surjective: any $h\in \operatorname{Hom}_{\mathbb Z}(S^{\lambda'}_{\mathbb Z},\mathbb Z)$ extends to a $\mathbb Z$-linear $\tilde h:M^{\lambda'}_{\mathbb Z}\to\mathbb Z$, because $S^{\lambda'}_{\mathbb Z}$ is a direct summand of the free module $M^{\lambda'}_{\mathbb Z}$ by [F1], and by nondegeneracy of $\beta_{\mathbb Z}$ there is $x\in M^{\lambda'}_{\mathbb Z}$ with $\tilde h(T)=\beta_{\mathbb Z} (x,T)$ for every tabloid, so $\varphi(x)=h$. Since $\operatorname{Hom}_{\mathbb Z}(S^{\lambda'}_{\mathbb Z},\mathbb Z)$ is a free $\mathbb Z$-module, $\varphi$ splits, so $S^{\lambda'\perp}_{\mathbb Z}$ is a direct summand of $M^{\lambda'}_{\mathbb Z}$ of rank $|\Omega_{\lambda'}|-f$. Let $F$ be any field. Tensoring with $F$ and using $\beta_F=\beta_{\mathbb Z}\otimes\mathbb Z$-bilinearity gives $$S^{\lambda'\perp}_{\mathbb Z}\otimes_{\mathbb Z}F \subseteq(S^{\lambda'}_F)^\perp,$$ while both sides are subspaces of $M^{\lambda'}_F$ of dimension $|\Omega_{\lambda'}|-f$: the left side because it is free of that rank, the right side by [F6] and step 1.1 applied over $F$. Hence $$(S^{\lambda'}_F)^\perp=S^{\lambda'\perp}_{\mathbb Z}\otimes_{\mathbb Z}F .$$ [given, F1, F2, F6, step 1.1, algebra]

3.1 **Dimension count over $\mathbb Q$.** By step 2.1 the map $\theta_{\mathbb Q}$ is onto, so by rank-nullity and [F6], [F7], $$\dim_{\mathbb Q}\ker\theta_{\mathbb Q} =|\Omega_{\lambda'}|-\dim_{\mathbb Q}\bigl(S^\lambda_{\mathbb Q}\otimes \operatorname{sgn}\bigr)=|\Omega_{\lambda'}|-f,$$ while $\dim_{\mathbb Q}(S^{\lambda'}_{\mathbb Q})^\perp= |\Omega_{\lambda'}|-\dim_{\mathbb Q}S^{\lambda'}_{\mathbb Q}= |\Omega_{\lambda'}|-f$ by [F6] and step 1.1. With step 2.2 this forces $$\ker\theta_{\mathbb Q}=(S^{\lambda'}_{\mathbb Q})^\perp .$$ Together with step 2.2, this identifies the kernel over $\mathbb Q$; the argument never divides by a group order in nonzero characteristic. [given, F6, F7, step 1.1, step 2.1, step 2.2, algebra]

4.1 **The integral kernel.** The formula of step 1.2 has coefficients $\pm1$ times tabloid coefficients of polytabloids, hence defines an integral map $\theta_{\mathbb Z}:M^{\lambda'}_{\mathbb Z}\to S^\lambda_{\mathbb Z}\otimes_{\mathbb Z}\operatorname{sgn}_{\mathbb Z}$ satisfying $\theta_{\mathbb Z}=\theta_{\mathbb Q}$ after extending scalars and $\theta_{\mathbb Q}=\theta_{\mathbb Z}\otimes_{\mathbb Z}\mathbb Q$. Let $S^{\lambda'\perp}_{\mathbb Z}:=\{x\in M^{\lambda'}_{\mathbb Z}: \beta_{\mathbb Z}(x,y)=0\text{ for all }y\in S^{\lambda'}_{\mathbb Z}\}$. Every $x\in S^{\lambda'\perp}_{\mathbb Z}$ has $\beta_{\mathbb Q}(x,y)=0$ for all $y\in S^{\lambda'}_{\mathbb Q}$, because $\beta_{\mathbb Q}$ is $\mathbb Q$-bilinear and $S^{\lambda'}_{\mathbb Q}$ is the $\mathbb Q$-span of $S^{\lambda'}_{\mathbb Z}$ by [F1]; hence $x\in (S^{\lambda'}_{\mathbb Q})^\perp=\ker\theta_{\mathbb Q}$ by step 3.1, and $\theta_{\mathbb Z}(x)$ maps to zero in $S^\lambda_{\mathbb Q}\otimes \operatorname{sgn}_{\mathbb Q}$. Since $S^\lambda_{\mathbb Z}$ is a free $\mathbb Z$-module by [F1], the tensor product $S^\lambda_{\mathbb Z}\otimes_{\mathbb Z}\operatorname{sgn}_{\mathbb Z}$ is torsion-free, so $\theta_{\mathbb Z}(x)=0$. Therefore $$S^{\lambda'\perp}_{\mathbb Z}\subseteq\ker\theta_{\mathbb Z}.$$ [given, F1, F2, step 1.2, step 3.1, algebra]

5.1 **The kernel over an arbitrary field.** Let $F$ be any field and put $\theta_F:=\theta_{\mathbb Z}\otimes_{\mathbb Z}\mathrm{id}_F$, the map given by the formula of step 1.2 computed in $F$; it is $F[S_n]$-linear by step 1.3 and surjective by step 2.1. By steps 4.1 and 2.3, $(S^{\lambda'}_F)^\perp \subseteq\ker\theta_F$. By rank-nullity, [F6], [F7] and step 1.1, $$\dim_F\ker\theta_F =|\Omega_{\lambda'}|-\dim_F\bigl(S^\lambda_F\otimes\operatorname{sgn}\bigr) =|\Omega_{\lambda'}|-f=\dim_F(S^{\lambda'}_F)^\perp .$$ Two subspaces of a finite-dimensional vector space, one containing the other, with equal dimension, coincide; therefore $$\ker\theta_F=(S^{\lambda'}_F)^\perp .$$ [given, F6, F7, step 1.1, step 1.3, step 2.1, step 4.1, step 2.3, algebra]

6.1 **The isomorphism.** By steps 1.3 and 5.1 the map $\theta_F$ induces an isomorphism of $F[S_n]$-modules $$M^{\lambda'}_F/(S^{\lambda'}_F)^\perp\cong S^\lambda_F\otimes\operatorname{sgn},\qquad \xi+(S^{\lambda'}_F)^\perp\mapsto\theta_F(\xi).$$ The map $\psi:M^{\lambda'}_F\to(S^{\lambda'}_F)^*$, $\psi(x)=\beta_F(x,\cdot)|_{S^{\lambda'}_F}$, is $F[S_n]$-linear: by invariance of $\beta_F$ in [F2], $\psi(\sigma\cdot x)(y)= \beta_F(\sigma x,y)=\beta_F(x,\sigma^{-1}y)=\psi(x)(\sigma^{-1}y)= (\sigma\cdot\psi(x))(y)$ for all $y\in S^{\lambda'}_F$. Its kernel is $(S^{\lambda'}_F)^\perp$, and it is surjective by the extension argument of step 2.3 carried out over the field $F$, using that $\beta_F$ is nondegenerate and $S^{\lambda'}_F$ is a subspace of the finite-dimensional $F$-space $M^{\lambda'}_F$. Hence $$M^{\lambda'}_F/(S^{\lambda'}_F)^\perp\cong(S^{\lambda'}_F)^*,$$ and composing the two isomorphisms gives the $F[S_n]$-isomorphism $$S^\lambda_F\otimes\operatorname{sgn}\cong(S^{\lambda'}_F)^*.$$ [given, F2, step 1.3, step 5.1, algebra]

7.1 **Extremal cases.** For $n=0$ one has $\lambda=\lambda'=\varnothing$, $M^\varnothing_F=S^\varnothing_F=Fe_{t_0}$ with $\beta_F(e_{t_0},e_{t_0})=1$ and $R_{t_0}=\{1\}$; then $\theta$ is the identity map $M^{\varnothing}_F\to S^{\varnothing}_F\otimes\operatorname{sgn}$, it is an isomorphism, and $(S^{\varnothing}_F)^\perp=0=\ker\theta$, so all three assertions hold, $f=1$ and $|\Omega_\varnothing|=1$. In characteristic $2$ the sign representation is trivial as an $F[S_n]$-module by [F7], and the statements still hold: the kernel identification is supplied by steps 2.3, 4.1 and 5.1, which transport the rational computation of step 3.1 to $F$, and the conjugate partition $\lambda'$ is still the shape of $S^{\lambda'}$ in the dual. At no point is the restricted form $\beta_F|_{S^{\lambda'}_F}$ assumed nondegenerate: $(S^{\lambda'}_F)^\perp$ may strictly contain $S^{\lambda'}_F$ and $\theta$ may vanish on all of $S^{\lambda'}_F$; only its kernel, the subspace $(S^{\lambda'}_F)^\perp$, is determined. This completes all three assertions. [given, F1, F2, F7, step 5.1, step 6.1] ∎

