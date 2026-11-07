---
id: lem-deligne-pappas-truncated-dvr-lagrangian-strata
kind: lemma
title: Affine charts for truncated-DVR Lagrangian strata
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-affine-scheme
  - def-scheme
  - def-polynomial-ring-over-a-commutative-ring
  - cor-dimension-of-a-finite-polynomial-ring-over-a-field
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Pierre Deligne and Georgios Pappas, Singularités des espaces de modules de Hilbert, en les caractéristiques divisant le discriminant
      url: https://www.numdam.org/item/CM_1994__90_1_59_0.pdf
      locator: §4.2, printed p.71, normal forms and truncated projective-line strata
---

## Statement

Let $k$ be a field, let $e\ge1$, and put $R_e=k[t]/(t^e)$. The functor $X_e$ of $R_e$-stable subbundles $F\subset R_e^2\otimes_k\mathcal O_S$, locally direct of rank $e$ as $\mathcal O_S$-modules and isotropic for the $R_e$-valued wedge pairing, is represented by a closed subscheme of the ordinary Grassmannian of rank-$e$ subbundles in $k^{2e}$. Such an $F$ is its own orthogonal for this wedge pairing.

Put $r=\lfloor e/2\rfloor$, set $X_{r+1}=\varnothing$, and for $0\le i\le r$ let $X_i\subset X_e$ be the closed subfunctor defined by
$$t^{e-i}R_e^2\subseteq F\subseteq t^iR_e^2.$$
Then $X_0=X_e$ and $X_{i+1}\subseteq X_i$. The locally closed stratum $S_i=X_i\setminus X_{i+1}$ has the following explicit description. If $m=e-2i>0$, it is the functor of rank-one direct summands in $(k[t]/(t^m))^2$. It is obtained by gluing two copies of $\mathbb A_k^m$, with coordinates the coefficients of $z(t)=z_0+\cdots+z_{m-1}t^{m-1}$, along $z_0\ne0$ by $z(t)\mapsto z(t)^{-1}\bmod t^m$. If $m=0$, it is a single reduced $k$-point.

Every $S_i$ is geometrically irreducible of dimension $e-2i$. In particular, $X_e$ has dimension $e$, and the complement of $S_0$ has dimension at most $e-2$ when $e\ge2$; it is empty when $e=1$. This stratum calculation does not assert flatness of a mixed-characteristic model or an étale comparison with an abelian moduli space.

## Facts & Assumptions

**Given:** Exactly the field and finite integer in the Statement. All choices of vectors, coordinates and determinants below are finite; no choice principle is assumed.

[F1] Polynomial rings over a commutative ring give the coefficient rings for affine schemes; affine schemes glue along compatible open subschemes to schemes. [[def-polynomial-ring-over-a-commutative-ring]], [[def-affine-scheme]], [[def-scheme]]

[F2] A polynomial ring in $m$ variables over a field has dimension $m$. [[cor-dimension-of-a-finite-polynomial-ring-over-a-field]]

## Proof

**Proof technique:** elementary divisors in two coordinates, followed by explicit truncated-series charts.

1.1 Construct the ordinary Grassmannian by its finitely many matrix charts: choose $e$ of the $2e$ coordinate positions so that projection of $F$ to them is an isomorphism, and write the remaining coordinates as an $e\times e$ matrix. These affine charts glue by inversion of the corresponding minors. On each chart, $tF\subseteq F$ is a finite list of polynomial equations obtained by multiplying the graph vectors by the fixed matrix of $t$ and testing their complementary projections. The coefficients of every wedge of two graph vectors are also polynomial equations. Thus the stability and isotropy conditions define the stated closed subscheme, by [F1]. The top-coefficient functional $\ell:R_e\to k$, $\ell(\sum a_jt^j)=a_{e-1}$, makes $\ell(x\wedge y)$ a perfect alternating pairing on $k^{2e}$, since the powers of $t$ pair in opposite order. An isotropic direct rank-$e$ subbundle is its own orthogonal for this scalar pairing: in a basis adapted to the subbundle, perfection forces the off-diagonal square block to be invertible. The orthogonal for the $R_e$-valued pairing is contained in this scalar orthogonal and contains $F$, so it equals $F$. [F1, given, construct, algebra]

1.2 Over any extension field of $k$, a submodule of $R_e^2$ has a diagonal normal form $t^iR_ee_1\oplus t^jR_ee_2$ with $0\le i\le j\le e$. Here is a direct two-coordinate proof. For a nonzero submodule choose a vector of least $t$-adic order $i$; its primitive factor extends to a basis because one coordinate is a unit. It becomes $t^ie_1$. The first coordinate of every other vector is divisible by $t^i$, so subtracting a multiple of this vector leaves a vector on the second axis. The second-axis coefficients form an ideal of $R_e$, hence are $t^jR_e$: a nonzero element of least order generates that ideal, and the zero ideal is $t^eR_e$. Minimality gives $j\ge i$. Its wedge orthogonal is $t^{e-j}R_ee_1\oplus t^{e-i}R_ee_2$, so self-orthogonality is exactly $i+j=e$. Such a module has $k$-dimension $e$. This proves that the geometric points are indexed by the stated $0\le i\le r$, including the case of a zero second-axis ideal. [step 1.1, given, algebra]

2.1 The inclusions defining $X_i$ are closed conditions on the universal subbundle: the maps from $F$ to $R_e^2/t^iR_e^2$ and from $t^{e-i}R_e^2$ to $R_e^2/F$ must vanish. Put $B=t^{e-i}R_e^2$. For $m=e-2i>0$, multiplication by $t^i$ identifies $t^iR_e^2/B$ with $R_m^2$. For any $F$ in $X_i$, the quotient $L=F/B$ is a locally direct $\mathcal O_S$-subbundle of rank $m$ in $R_m^2$: $R_e^2/F$ is locally free, so the exact sequence from $R_e^2/B$ splits locally, and the complementary coordinate summands show the same for the indicated intermediate quotient. On the open complement of $X_{i+1}$ its fibres have type $i$ by step 1.2, so $L$ is a free rank-one $R_m$-summand in every fibre. This fibre assertion holds locally over the base itself. Lift a fibre generator $v$; the $m$ vectors $v,tv,\ldots,t^{m-1}v$ form a basis in the fibre and therefore on the open set where their determinant in the locally free module $L$ is invertible. One constant coordinate of $v$ is a unit on a further open set, so $v$ extends to a basis of $R_m^2$ there. Thus $L$ is a locally direct rank-one $R_m$-summand. [F1, step 1.1, step 1.2, construct, algebra]

2.2 Conversely, take such a rank-one direct summand $L\subset R_m^2$ and let $F$ be its inverse image in $t^iR_e^2$. Locally a generator of $L$ extends to an $R_m$-basis; lift the corresponding invertible two-by-two matrix to $R_e$, where it stays invertible since the reduction kernel is nilpotent. It carries $F$ to $t^iR_ee_1\oplus t^{e-i}R_ee_2$. Consequently $F$ is locally direct of scalar rank $e$, stable and self-orthogonal, and its fibres avoid $X_{i+1}$. The quotient and inverse-image constructions commute with base change and are inverse. If $m=0$, the upper and lower submodules in the defining inclusions coincide; $F=t^iR_e^2$ is forced over every base, so the functor is the reduced point $\operatorname{Spec}k$. [F1, step 1.2, step 2.1, algebra]

3.1 For $m>0$, a rank-one summand in $R_m^2$ is locally generated by a primitive pair $(a,b)$. The open sets where the constant coefficient of $a$ or of $b$ is invertible cover the base. On the first open set its unique normalized generator is $(1,z(t))$ with $m$ free coefficients; on the second it is $(w(t),1)$. The overlap is exactly $z_0\ne0$ and $w=z^{-1}\bmod t^m$. Inversion is regular on this overlap: $w_0=z_0^{-1}$ and $w_n=-z_0^{-1}\sum_{j=1}^nz_jw_{n-j}$ for $1\le n<m$. This gives the claimed two affine charts and their exact gluing by [F1]. It is valid in every characteristic and over every extension field. [F1, step 2.2, construct, algebra]

3.2 Each affine chart remains irreducible after every field extension, because its coordinate polynomial ring is a domain. The overlap is a nonempty dense principal open in both charts (take $z(t)=1$). Therefore their union is geometrically irreducible. Its dimension is $m$ by [F2]. The reduced-point case has dimension zero. The normal-form calculation gives a finite locally closed stratification of $X_e$ by these strata; the dimension of this finite-type scheme is the largest of their dimensions, namely $e$. Every stratum outside $S_0$ has dimension at most $e-2$. For $e=1$, $r=0$, so no other stratum exists. These conclusions are only the stated equal-characteristic chart and dimension results. [F1, F2, step 1.2, step 2.1, step 2.2, step 3.1, algebra] ∎
