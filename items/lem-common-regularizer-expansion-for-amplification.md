---
id: lem-common-regularizer-expansion-for-amplification
kind: lemma
title: "Amplified correlation expansion with a common integrable regularizer"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Michel–Venkatesh, The Subconvexity Problem for GL2, arXiv:0903.3591v2, §§4.3.6 and 5.2.3, equations (5.11)–(5.12); conditional operator formulation"
      url: "https://arxiv.org/pdf/0903.3591v2"
---

## Statement

Let a group $G$ act on a measure space $X$, preserving its measure. Write $U(g)U(h)=U(gh)$ for the induced action on functions. The same notation may denote the action on sections of a supplied Hermitian line bundle with unitary action over $X$; in that case $v\overline w$ denotes the pointwise fiber pairing, linear in $v$. Assume the covariance identity $U(g)(v\overline w)=(U(g)v)\overline{U(g)w}$. Integrable scalar functions have invariant integral, and the supplied $L^2$ section pairing is $\langle v,w\rangle=\int_Xv\overline w$.

Let $\mathcal A$ be a $G$-stable complex vector space of measurable scalar functions, containing $L^1(X)$. Supply a linear operator $T:\mathcal A\to\mathcal A$ which maps $L^1$ boundedly to itself and satisfies
$$\int_X T p=d\int_Xp\qquad(p\in L^1(X))$$
for a scalar $d$. Supply a polynomial $P$ with $m=P(d)\ne0$, and set
$$D=P(T),\qquad \mathcal V_D=\{p\in\mathcal A:Dp\in L^1(X)\},\qquad R_D(p)=m^{-1}\int_XDp.$$
Let $\Gamma\subset G$ be a subgroup such that $T$ commutes with $U(\gamma)$ for $\gamma\in\Gamma$.

Then $\mathcal V_D$ is a vector space containing $L^1$, $R_D$ extends ordinary integration, and both its domain and its value are $\Gamma$-invariant. If another operator $D'$ commutes with $D$, maps $L^1$ to itself, and multiplies its integral by a nonzero scalar $m'$, then
$$m^{-1}\int_XDp=(m')^{-1}\int_XD'p$$
whenever both $Dp$ and $D'p$ are integrable. No positivity of $R_D$ is asserted.

For the amplification conclusion, supply a measurable section $f$, elements $g_1,\ldots,g_n\in\Gamma$, and real coefficients $c_1,\ldots,c_n$. Assume every mixed density
$$p_{ij}=(U(g_i^{-1})f)\overline{U(g_j^{-1})f}$$
belongs to $\mathcal A$ and $Dp_{ij}\in L^1$. Assume only the amplified section $a=\sum_i c_iU(g_i^{-1})f$ belongs to $L^2$; $f$ itself need not belong to $L^2$. For $u=g_jg_i^{-1}$ put $C(u)=R_D((U(u)f)\overline f)$. These values are defined and satisfy
$$\|a\|_2^2=\sum_{i,j}c_ic_j C(g_jg_i^{-1})\le\sum_{i,j}|c_i||c_j|\,|C(g_jg_i^{-1})|.$$
If, additionally, $x$ is an $L^2$ section of norm one, all integrals pairing $x$ or its $g_i$ translates with $f$ converge absolutely, $A x=\lambda x$ for $A x=\sum_i c_iU(g_i)x$, and $\lambda\ne0$, then
$$|\lambda|^2|\langle x,f\rangle|^2\le\sum_{i,j}|c_i||c_j|\,|C(g_jg_i^{-1})|.$$

Here is a sufficient *supplied asymptotic condition* for the required $D$: suppose numbers $\lambda_k\ne d$ and positive integers $r_k$ are given such that
$$\left(\prod_k(T-\lambda_k)^{r_k}\right)p_{ij}\in L^1(X)\quad\text{for all }i,j.$$
Then $P(z)=\prod_k(z-\lambda_k)^{r_k}$ works. The empty product is $1$. Establishing this asymptotic condition for automorphic functions is not part of this conditional lemma.

The same correlation bound holds for a compactly supported finite real Borel measure $\sigma$ on a Hausdorff topological group $G$, provided $f,x$ have open stabilizers, $D$ commutes with all support translations, and the mixed-density and absolute-convergence hypotheses hold throughout that support. The integral in this version is the positive product integral of $|C(hg^{-1})|$ against $|\sigma|\times|\sigma|$. All these data, including the eigenvector identity and $L^2$ membership after amplification, remain hypotheses.

## Facts & Assumptions

**Given:** The measure-preserving action, scalar space, operator, polynomial, commutation identities, mixed-density integrability, and sections in the Statement. Integration invariance and the $L^2$ realization are supplied data. Neither a Haar measure nor an automorphic asymptotic expansion is constructed here.

[F1] [[thm-linearity-of-the-lebesgue-integral-on-l-one]]: $L^1$ is a complex vector space and its integral is complex-linear.

[F2] [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]] applies to the supplied $L^2$ inner product, with linearity in the first variable.

[F3] [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]] supplies the product of two finite positive measures and its rectangle formula.

## Proof

**Given:** Exactly the data of the Statement.

1.1 For $p\in L^1$, induction gives $T^jp\in L^1$ and $\int T^jp=d^j\int p$. Expand $P$ into its finitely many coefficients and use [F1] to obtain $Dp\in L^1$ and $\int Dp=P(d)\int p=m\int p$. The preimage $\mathcal V_D$ of $L^1$ under a linear map is a vector space. Therefore $R_D$ is linear on it and equals $\int$ on $L^1$. [F1, given, algebra]

2.1 For $\gamma\in\Gamma$, commutation gives $DU(\gamma)p=U(\gamma)Dp$. If $p\in\mathcal V_D$, the right side is integrable by measure preservation and has the same integral as $Dp$. Thus $U(\gamma)p\in\mathcal V_D$ and $R_D(U(\gamma)p)=R_D(p)$. Apply the same argument to $\gamma^{-1}$ for domain equality. For the independence assertion, both $D'Dp$ and $DD'p$ are integrable and equal. Their integrals are respectively $m'\int Dp$ and $m\int D'p$. Division by $mm'\ne0$ proves the asserted equality. This only compares commuting regularizers on their common domain. [step 1.1, given, algebra]

2.2 Pointwise, $|a|^2=\sum_{i,j}c_ic_jp_{ij}$. The real coefficients are essential to this formula as written. Each $p_{ij}\in\mathcal V_D$, so their finite linear combination is in that domain. Since $a\in L^2$, its square is in $L^1$; consequently step 1.1 yields $\|a\|_2^2=R_D(|a|^2)=\sum_{i,j}c_ic_jR_D(p_{ij})$. We never integrate an individual unregularized $p_{ij}$. [F1, step 1.1, given, algebra]

3.1 By covariance, $U(g_j)p_{ij}=(U(g_jg_i^{-1})f)\overline f$. Step 2.1 proves that this density is in the regularization domain and its regularized integral is $R_D(p_{ij})=C(g_jg_i^{-1})$. Substitute into step 2.2 and apply the triangle inequality to the finite scalar sum; its left side is the nonnegative real number $\|a\|_2^2$. This proves the expansion and positive majorant, without any assertion that $R_D$ is positive. [step 2.1, step 2.2, given, algebra]

4.1 Absolute convergence permits change of variable in $\langle U(g_i)x,f\rangle=\langle x,U(g_i^{-1})f\rangle$ and finite linear expansion. Thus $\lambda\langle x,f\rangle=\langle Ax,f\rangle=\langle x,a\rangle$. Both $x,a$ lie in $L^2$, so [F2] gives $|\lambda|^2|\langle x,f\rangle|^2\le\|a\|_2^2$. Combine with step 3.1. This uses Cauchy–Schwarz only after amplification has produced an $L^2$ section. [F2, step 3.1, given, algebra]

4.2 In the compact-measure version, the maps $g\mapsto U(g^{-1})f$ and $g\mapsto U(g)x$ are locally constant. The former is constant on left cosets of an open stabilizer of $f$, the latter on right cosets of an open stabilizer of $x$. Their joint level sets are open. A finite subcover of the compact support therefore yields a finite Borel partition $S_i$ with representatives $g_i$ on which both maps are constant. Put $c_i=\sigma(S_i)$. The section averages and eigenvector identity become exactly those of the finite-sum statement. By step 3.1 the scalar $C(hg^{-1})=R_D((U(g^{-1})f)\overline{U(h^{-1})f})$ is constant on each $S_i\times S_j$. Thus the positive correlation kernel is a bounded simple function on the support square. [step 3.1, given, choose, algebra]

4.3 Total variation gives $|c_i|\le |\sigma|(S_i)$. Applying [F3] to the finitely many rectangles and the defining integral of a simple function bounds the finite majorant of step 3.1 by
$$\sum_{i,j}|\sigma|(S_i)|\sigma|(S_j)|C(g_jg_i^{-1})|=\int_{G\times G}|C(hg^{-1})|\,d(|\sigma|\times|\sigma|)(g,h).$$
Combine with step 4.1 to obtain the compact-measure inequality. Define the positive measure $|\sigma|*|\check\sigma|$ here as the pushforward by $(h,g)\mapsto hg^{-1}$; its integral of $|C|$ equals the displayed product integral, with the two identical factors renamed. Since $f$ has an open stabilizer, $u\mapsto(U(u)f)\overline f$ is constant on right cosets of that stabilizer. Its regularization domain is therefore a union of open cosets, and $C$ is locally constant there. Extend $C$ by zero off that domain. This supplies a Borel correlation kernel for the pushforward integral. No exchange of divergent integrals or continuity of $R_D$ has occurred. [F3, step 3.1, step 4.1, step 4.2, given, algebra]

5.1 For the last sufficient condition, choose the displayed $P$. Its value at $d$ is the finite product $\prod_k(d-\lambda_k)^{r_k}\ne0$; the assumed integrability is exactly $Dp_{ij}\in L^1$. Repeated factors retain their multiplicities. For an empty product, $D$ is the identity and the hypothesis requires ordinary integrability of all $p_{ij}$. If all $c_i$ vanish or $f=0$, the expansion and inequality give zero on both sides wherever the additional eigenvector assumptions are consistent. No denominator except $m$ (and, if solving for the pairing, $\lambda$) was used. [step 1.1, step 3.1, step 4.1, given, construct, algebra] ∎

## Automorphic application and unresolved domain obligations

This is a conditional prerequisite, not an automorphic regularization theorem. For the intended realization let $X=\mathrm{PGL}_2(F)\backslash\mathrm{PGL}_2(\mathbb A_F)$ and use the unitary central-character line bundle for $f=\varphi_2 E$. Its mixed densities are scalar functions on $X$. For any $u$ where the following product belongs to the regularization domain, define the regularized pairing by $\langle v,w\rangle_{\rm reg}=R_D(v\overline w)$. Pure multiplication then gives precisely the regrouping in (5.11):
$$\langle \varphi_2^u E^u,\varphi_2 E\rangle_{\rm reg}=\langle\varphi_2^u\overline{\varphi_2},\overline{E^u}E\rangle_{\rm reg},\qquad v^u=U(u)v.$$
In particular, the second entry on the right is $\overline{E^u}E$, not $E^u\overline E$. The corresponding integrand is $\varphi_2^u\overline{\varphi_2}E^u\overline E$. The PDF bars, absent from the staged text extraction, were checked visually on printed p.99.

For the left side of (5.12), the source pairs $\varphi_1$ with $\overline{\varphi_2E}$. With $f=\varphi_2E$, take $x=\overline{\varphi_1}$ in the lemma: conjugate symmetry gives $|\langle x,f\rangle|=|\langle\varphi_1,\overline f\rangle|$. Real averaging coefficients imply $Ax=\overline{\lambda_1}x$ whenever $A\varphi_1=\lambda_1\varphi_1$. The eigenvalue modulus is unchanged. This identification is conditional on the source's convergent pairings, norm normalization, and amplification hypotheses.

The source's sufficient domain in §4.3.5 consists of smooth controlled-increase scalar functions of trivial central character whose finite set of generalized exponents contains no character $\xi$ with $\xi^2=|\cdot|^2$. Here $\Re\xi$ is defined by $|\xi(y)|=|y|^{\Re\xi}$. In particular, every forbidden character has real part $1$, and generalized eigenvalue multiplicities must be retained. The source's product in §5.2.3 has no exponents in the cuspidal case, and only exponents of real part $2$ in the allowed unitary Eisenstein case. Those sets avoid *all* the forbidden quadratic twists, not just the character $|\cdot|$ itself. This domain check is conditional on having the controlled-increase expansions and their stability under the translations in question. It is not a proof of those expansions.

An auxiliary finite place away from amplifier support is the proposed source of $T$. For an unnormalized spherical Hecke operator with integral multiplier $d=q+1$, the proposed asymptotic eigenvalue for an unramified exponent $\xi$ is $q\xi(\varpi)+\xi(\varpi)^{-1}$. If $\Re\xi=2$, its modulus is at least $q^2-q^{-1}>q+1$ for $q\ge2$, hence it differs from $d$. Taking one factor for each generalized multiplicity gives the polynomial in the lemma. The local Hecke action formula, the asymptotic annihilation modulo $L^1$, and the availability of one such place common to all mixed densities still require local proofs. The lemma proves the polynomial construction once those inputs are supplied; it does not cite §4.3.6 as an imported established theorem.

