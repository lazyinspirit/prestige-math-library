---
id: def-etale-tate-coefficients
kind: definition
title: Roots of unity and étale Tate twists
status: published
domain: mathematics
deps:
  - def-scheme-sites-and-sheafification
  - math:def-etale-morphism-schemes
  - math:def-scheme
  - math:def-morphism-of-schemes
  - math:def-scheme-over-base
  - math:def-affine-scheme
  - math:def-field
  - math:def-ring-characteristic
  - math:def-quotient-ring
  - math:def-left-and-right-modules
  - math:def-tensor-product-of-modules-by-generators-and-relations
  - math:thm-commutative-ring-module-structure-on-a-tensor-product
  - math:cor-finite-iterated-tensor-products-represent-multilinear-maps
  - math:thm-unit-isomorphisms-for-module-tensor-products
  - math:thm-characteristic-of-a-field-is-zero-or-prime
  - math:thm-frobenius-endomorphism-and-finite-field-automorphism
  - math:thm-root-bound-for-polynomials-over-a-domain
  - math:thm-chinese-remainder-theorem-for-comaximal-ideals
  - math:ex-spectrum-product-ring-disjoint-union
  - math:ex-localization-etale-open-immersion
dependency_roles:
  def-scheme-sites-and-sheafification: mathematical-premise
  math:def-etale-morphism-schemes: mathematical-premise
  math:def-scheme: mathematical-premise
  math:def-morphism-of-schemes: mathematical-premise
  math:def-scheme-over-base: mathematical-premise
  math:def-affine-scheme: mathematical-premise
  math:def-field: mathematical-premise
  math:def-ring-characteristic: mathematical-premise
  math:def-quotient-ring: mathematical-premise
  math:def-left-and-right-modules: mathematical-premise
  math:def-tensor-product-of-modules-by-generators-and-relations: mathematical-premise
  math:thm-commutative-ring-module-structure-on-a-tensor-product: mathematical-premise
  math:cor-finite-iterated-tensor-products-represent-multilinear-maps: mathematical-premise
  math:thm-unit-isomorphisms-for-module-tensor-products: mathematical-premise
  math:thm-characteristic-of-a-field-is-zero-or-prime: mathematical-premise
  math:thm-frobenius-endomorphism-and-finite-field-automorphism: mathematical-premise
  math:thm-root-bound-for-polynomials-over-a-domain: mathematical-premise
  math:thm-chinese-remainder-theorem-for-comaximal-ideals: mathematical-premise
  math:ex-spectrum-product-ring-disjoint-union: mathematical-premise
  math:ex-localization-etale-open-immersion: mathematical-premise
provenance:
  statement: ai-generated
  proof: not-applicable
dependency_level: 6
---

## Definition
Let $n\geq 1$ be an integer invertible on a scheme $X$: its image in every local ring of $X$ is a unit. Work on a size-bounded small étale site of $X$ whose objects are étale $X$-schemes, whose covering families are jointly surjective étale families, and which includes the open restrictions and covers used below.

For an object $U$, write $\Gamma(U,\mathcal O_U)$ for its ring of global regular functions and write a superscript $\times$ for the group of units. Put $P_n(U)=\{u\in\Gamma(U,\mathcal O_U)^\times:u^n=1\}$. Pullback of regular functions along morphisms over $X$ gives its restriction maps. The **sheaf of $n$th roots of unity** is $\mu_n=aP_n$, where $a$ denotes sheafification on this site. Its abelian group law is written multiplicatively, and integer scalar multiplication means taking that power.

Let $R=a\underline{\mathbb Z/n}_{\mathrm{pre}}$ be the constant ring sheaf obtained by sheafifying the constant presheaf with value the quotient ring $\mathbb Z/n$. A sheaf of $R$-modules means a sheaf of abelian groups $M$ with an $R(U)$-module structure on every $M(U)$, such that restriction along $V\to U$ satisfies $(rs)|_V=(r|_V)(s|_V)$. The equation $u^n=1$ makes $\mu_n$ such a sheaf: local integer representatives act by powers. Below the notation $\mathbb Z/n$ for coefficients means $R$, rather than an assertion that $R(U)=\mathbb Z/n$ for every $U$.

For $j\geq1$, define $T_j(U)=\mu_n(U)^{\otimes_{R(U)}j}$, with $T_1(U)=\mu_n(U)$ and left-associated tensor products for $j>1$. Restrictions are induced by restriction in the factors and in the scalar ring. Define the **Tate twist** $\mu_n^{\otimes j}=aT_j$; this is the tensor product of sheaves of $R$-modules. Set $\mu_n^{\otimes0}=R$. Only nonnegative twists are defined here.

If $X$ is a scheme over a field $k$ and a primitive $n$th root $\zeta\in k$ is chosen, meaning an element of multiplicative order exactly $n$, then $n$ is invertible in $k$: every positive $n$ is allowed in characteristic zero, and $p\nmid n$ in characteristic $p>0$. The map $a\mapsto\zeta^a$ induces an isomorphism of $R$-module sheaves $R\cong\mu_n$ and hence, for every $j\geq0$, an isomorphism $R\cong\mu_n^{\otimes j}$ sending $1$ to $\zeta^{\otimes j}$ when $j>0$ and to $1$ when $j=0$. For $n=1$ both sides are zero modules. For $n>1$, replacing $\zeta$ by another primitive root $\zeta'=\zeta^b$ changes the weight-$j$ map by precomposition with multiplication by $b^j$ on $R$; in weight zero this is the identity. This specifies the dependence on the chosen root.

This definition alone asserts no motivic-to-étale comparison. In particular, in characteristic $p>0$ it does not treat $\mu_p$ as a prime-to-characteristic coefficient sheaf.

## Definition references
[[def-scheme-sites-and-sheafification]]

[[math:def-etale-morphism-schemes]]

[[math:def-scheme]]

[[math:def-morphism-of-schemes]]

[[math:def-scheme-over-base]]

[[math:def-affine-scheme]]

[[math:def-field]]

[[math:def-ring-characteristic]]

[[math:def-quotient-ring]]

[[math:def-left-and-right-modules]]

[[math:def-tensor-product-of-modules-by-generators-and-relations]]

[[math:thm-commutative-ring-module-structure-on-a-tensor-product]]

[[math:cor-finite-iterated-tensor-products-represent-multilinear-maps]]

[[math:thm-unit-isomorphisms-for-module-tensor-products]]

[[math:thm-characteristic-of-a-field-is-zero-or-prime]]

[[math:thm-frobenius-endomorphism-and-finite-field-automorphism]]

[[math:thm-root-bound-for-polynomials-over-a-domain]]

[[math:thm-chinese-remainder-theorem-for-comaximal-ideals]]

[[math:ex-spectrum-product-ring-disjoint-union]]

[[math:ex-localization-etale-open-immersion]]

## Justification
Scheme morphisms pull back regular functions by ring homomorphisms, as in [[math:def-morphism-of-schemes]]. These preserve units, products and $u^n=1$, so $P_n$ is a presheaf of abelian groups. By the matching-family construction and universal property in [[def-scheme-sites-and-sheafification]], sections of a sheafification are locally represented by presheaf sections, and equality of representatives is witnessed after a covering refinement. To define a group operation on sheafified sections, represent its finitely many arguments on covers, pass to a common covering refinement, operate there and glue. Changing representatives gives the same result after further refinement. All group identities hold locally and hence globally. Applying the same procedure to ring operations makes $R$ a sheaf of commutative rings. Integer powers on $P_n$ factor through the quotient ring $\mathbb Z/n$ of [[math:def-quotient-ring]] because $u^n=1$. Locally representing both an $R$-section and a $\mu_n$-section therefore defines the asserted action, independently of representatives. The module identities of [[math:def-left-and-right-modules]] hold locally and hence in $\mu_n$, and the action is compatible with restriction.

The objectwise tensors use [[math:def-tensor-product-of-modules-by-generators-and-relations]] and their scalar structure uses [[math:thm-commutative-ring-module-structure-on-a-tensor-product]]. For $V\to U$, regard the target tensor over $R(V)$ as an $R(U)$-module through $R(U)\to R(V)$. Sending a tuple to the tensor of its restrictions is $R(U)$-multilinear, so [[math:cor-finite-iterated-tensor-products-represent-multilinear-maps]] gives the required restriction map on $T_j(U)$. Uniqueness in this universal property proves identity and composition for restrictions, including the varying scalar rings. Sheafifying gives an $R$-module sheaf by the same local action construction. For any $R$-module sheaf $N$, an $R$-multilinear morphism $\mu_n^j\to N$ induces compatible linear maps $T_j(U)\to N(U)$ by that universal property; these extend uniquely to $aT_j\to N$ by sheafification. Conversely a linear map out of $aT_j$ restricts to the original multilinear map on pure tensors. This proves the tensor-sheaf universal property and the independence of local representatives. For $j=1$, the sheafification of the sheaf $\mu_n$ is canonically itself.

For the chosen-root assertion, use the field and characteristic conventions in [[math:def-field]] and [[math:def-ring-characteristic]]. Positive field characteristic is a prime $p$ by [[math:thm-characteristic-of-a-field-is-zero-or-prime]]. If $p\mid n$, write $n=p^r m$ with $r\geq1$ and $p\nmid m$. Injectivity of the iterated Frobenius in [[math:thm-frobenius-endomorphism-and-finite-field-automorphism]] applied to $(\zeta^m)^{p^r}=1$ gives $\zeta^m=1$, contradicting the order $n$. Thus $n$ is nonzero in $k$ and is a unit. In characteristic zero it is nonzero directly from the definition of characteristic. The $n$ elements $1,\zeta,\ldots,\zeta^{n-1}$ are distinct. The difference of the monic polynomials $T^n-1$ and $\prod_{i=0}^{n-1}(T-\zeta^i)$ has degree less than $n$ and vanishes at those $n$ elements, so [[math:thm-root-bound-for-polynomials-over-a-domain]] gives $T^n-1=\prod_{i=0}^{n-1}(T-\zeta^i)$. Nonzero differences $\zeta^i-\zeta^h$ are units in $k$, and their images remain units in every $k$-algebra.

Cover an étale object $U$ by affine opens, using [[math:def-scheme]]. On one such open write $A=\Gamma(U_0,\mathcal O_{U_0})$ and $U_0\cong\operatorname{Spec}A$, as in [[math:def-affine-scheme]]. Its $k$-algebra structure comes from the structure morphism of the $k$-scheme, in the sense of [[math:def-scheme-over-base]]. For $u\in P_n(U_0)$ the ideals $(T-\zeta^i)$ in $A[T]$ are pairwise comaximal, since their differences contain the units just identified. Apply [[math:thm-chinese-remainder-theorem-for-comaximal-ideals]] to obtain $A[T]/(T^n-1)\cong\prod_{i=0}^{n-1}A$. Evaluation at $u$ is an $A$-algebra homomorphism from this quotient to $A$. The coordinate idempotents evaluate to elements $e_i\in A$ satisfying $e_i^2=e_i$, $e_ie_h=0$ for $i\ne h$, $\sum_i e_i=1$ and $ue_i=\zeta^i e_i$. The maps $A\to\prod_i e_iA$, $a\mapsto(ae_i)_i$, and $(a_i)_i\mapsto\sum_i a_i$ are inverse ring maps, where the unit of $e_iA$ is $e_i$. Iterating [[math:ex-spectrum-product-ring-disjoint-union]] gives a finite disjoint clopen decomposition of $U_0$ on whose $i$th part $u=\zeta^i$. Zero factors give empty parts. These parts and the affine opens are étale restrictions by [[math:ex-localization-etale-open-immersion]], and give covers on the specified site.

Consequently every $P_n$-section is locally a power of $\zeta$, and every $\mu_n$-section is locally represented by such a section. If two distinct exponents modulo $n$ represented equal powers on a nonempty piece, their difference $\zeta^i-\zeta^h$, which is a unit, would vanish there. A ring in which a unit is zero is the zero ring, so such a piece must be empty. Thus local exponents agree on overlaps as sections of $R$, including its unique section on the empty object. Sheaf gluing gives a unique inverse to $R\to\mu_n$. The map respects the $R$-action since powers add exponents, so it is an isomorphism of $R$-module sheaves.

Tensor the isomorphism and its inverse objectwise and sheafify; the multilinear universal property above shows that the resulting maps are inverse. Repeatedly applying [[math:thm-unit-isomorphisms-for-module-tensor-products]] to the commutative rings $R(U)$ identifies $R(U)^{\otimes_{R(U)}j}$ with $R(U)$ by multiplication. These maps commute with restriction, so they give the asserted twist trivialization after sheafification. For $n=1$ all the modules are zero, and $j=0$ uses the identity of $R$. Finally every other primitive root is some $\zeta^b$ by the factorization just proved. In weight $j>0$ its tensor generator is $(\zeta^b)^{\otimes j}=b^j\zeta^{\otimes j}$ by multilinearity, proving the stated change-of-root rule.
