---
id: thm-r5-parameterized-regular-zero-counting-formula
kind: theorem
title: Parameterized regular-zero counting for a full-rank linear family
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
deps:
  - thm-morse-sard-for-euclidean-maps
  - thm-euclidean-inverse-function-theorem
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-continuous-preimages-of-borel-sets-are-borel
  - thm-lebesgue-measure-is-a-complete-measure
  - prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets
  - thm-rationals-countable
  - thm-lebesgue-null-agrees-with-elementary-nullity-in-rn
  - lem-rat-embeds-dense
  - cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - prop-the-nonnegative-integral-agrees-with-the-simple-integral
  - def-countable-choice
dependency_roles:
  thm-morse-sard-for-euclidean-maps: mathematical-premise
  thm-euclidean-inverse-function-theorem: mathematical-premise
  thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  thm-continuous-preimages-of-borel-sets-are-borel: mathematical-premise
  thm-lebesgue-measure-is-a-complete-measure: mathematical-premise
  prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets: mathematical-premise
  thm-rationals-countable: mathematical-premise
  thm-lebesgue-null-agrees-with-elementary-nullity-in-rn: mathematical-premise
  lem-rat-embeds-dense: mathematical-premise
  cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  prop-the-nonnegative-integral-agrees-with-the-simple-integral: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Frederik Denef and Michael R. Douglas, Distributions of Flux Vacua
      url: https://arxiv.org/pdf/hep-th/0404116v2
      locator: 'Section 1.1, the regular-root counting Jacobian, and Section 3 Eqs. (3.4)–(3.5), integrated parameter counting. The general linear-family identity and its measurability justification are proved locally here, not imported from the physical paper.'
    - title: Encyclopedia of Mathematics, Sard theorem
      url: https://encyclopediaofmath.org/wiki/Sard_theorem
      locator: 'Critical-value nullity context; the exact C1 equal-dimension case is supplied by the locally proved Euclidean Morse–Sard theorem, not assumed from this reference.'
dependency_level: 0
---

## Statement

Assume the Axiom of Countable Choice. Let $d\ge1$ and $k\ge d$ be integers and $U\subset\mathbb R^d$ open. Let $A:U\to\mathrm{GL}_d(\mathbb R)$ and $B:U\to\operatorname{Mat}_{d\times(k-d)}(\mathbb R)$ be $C^1$. Write $N=(a,b)\in\mathbb R^d\times\mathbb R^{k-d}$ and define
$$F(z,N)=A(z)a+B(z)b,\qquad a_0(z,b)=-A(z)^{-1}B(z)b,\qquad \Psi(z,b)=(a_0(z,b),b).$$
If $k=d$, interpret $\mathbb R^0$ as a one-point measure space of mass one. A root is regular when the derivative $D_zF(z,N):\mathbb R^d\to\mathbb R^d$, holding $N$ fixed, is invertible. For a bounded nonnegative Borel function $\varphi:U\times\mathbb R^k\to[0,\infty)$ define
$$C_\varphi(N)=\sum_{\substack{z\in U:F(z,N)=0\\\det D_zF(z,N)\ne0}}\varphi(z,N),$$
where the nonnegative sum over the discrete regular root set may be infinite. This is a Borel function. Outside a Lebesgue-null parameter set every root is regular. For every bounded nonnegative Borel $w:\mathbb R^k\to[0,\infty)$ one has, with both sides allowed to be infinite,
$$\int_{\mathbb R^k}w(N)C_\varphi(N)\,dN=\int_U dz\int_{\mathbb R^{k-d}}db\,\frac{w(\Psi(z,b))\varphi(z,\Psi(z,b))|\det D_zF(z,\Psi(z,b))|}{|\det A(z)|}.$$
The right side is the precise meaning of integrating $w(N)\varphi(z,N)|\det D_zF(z,N)|\delta_0^{(d)}(F(z,N))$ first in $N$ and then in $z$. It is invariant under the choice of an invertible parameter minor. Local versions glue by a countable Borel partition of the base subordinate to the chosen open cover, using the partition indicators as weights. Consequently the same regularity, measurability and identity hold locally for any $C^1$ linear family $F(z,N)=C(z)N$ whose parameter matrix $C(z)$ has rank $d$, by choosing invertible minors on a countable open cover. After restricting the roots to any Lebesgue-measurable subset $S\subseteq U$, the restricted count is Lebesgue measurable and satisfies the same identity with $\mathbf1_S(z)$ on the right; regularity refers to the derivative on the ambient open $U$. No interchange of an approximate-delta limit with a parameter integral and no domination hypothesis is part of this assertion.

## Statement references

[[thm-morse-sard-for-euclidean-maps]]

[[thm-euclidean-inverse-function-theorem]]

[[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]

[[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

## Facts & Assumptions

**Given:** The dimensions, open set, $C^1$ matrices, bounded nonnegative Borel weights and conventions in the Statement.

[F1] [[thm-morse-sard-for-euclidean-maps]] gives a null critical-value set for a $C^r$ map from an open subset of $\mathbb R^s$ to $\mathbb R^t$ when $r>\max(s-t,0)$; in particular it applies to $C^1$ maps between equal-dimensional Euclidean open sets.

[F2] [[thm-euclidean-inverse-function-theorem]] gives a local $C^1$ diffeomorphism at every invertible derivative. [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]] gives the nonnegative change-of-variables identity on such a diffeomorphism under countable choice.

[F3] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]] gives nonnegative integration and countable summation on sigma-finite products. Euclidean Lebesgue measure is sigma-finite by [[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]].

[F4] [[thm-continuous-preimages-of-borel-sets-are-borel]] makes compositions with continuous maps Borel; applying it to a homeomorphism's inverse also shows that the homeomorphism sends Borel sets to Borel sets. [[thm-lebesgue-measure-is-a-complete-measure]] makes subsets of Lebesgue-null sets measurable.

[F5] [[thm-rationals-countable]] gives countability of rational centers and radii, and [[lem-rat-embeds-dense]] gives rational density. Coordinatewise rational approximation therefore makes their Euclidean balls a countable basis: for $x\in B(x,r)$ choose a rational center $q$ sufficiently close to $x$ and a positive rational radius $s$ with $|x-q|<s<r-|x-q|$, so $x\in B(q,s)\subset B(x,r)$. [[def-countable-choice]] is the choice hypothesis of the measure suppliers; the cube-cover null sets in [F1] are Lebesgue-null by [[thm-lebesgue-null-agrees-with-elementary-nullity-in-rn]], and countable unions are null by countable subadditivity of Lebesgue measure.

[F6] [[cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure]] gives, for every Lebesgue-measurable $S\subset U$, Borel $S_0,Z\subset U$ with $S\mathbin{\triangle}S_0\subset Z$ and $Z$ null. [[prop-order-and-scalar-rules-for-the-nonnegative-integral]] gives monotonicity, while [[prop-the-nonnegative-integral-agrees-with-the-simple-integral]] identifies the integral of an indicator with the measure of its set.

## Proof

1.1 Matrix inversion is $C^1$ on invertible matrices by its adjugate-over-determinant formula, so $a_0$ and $\Psi$ are $C^1$. The entire incidence set is the graph $(z,N)=(z,\Psi(z,b))$: solving $F=0$ is exactly solving $a=a_0(z,b)$. Differentiating $F(z,\Psi(z,b))=0$ in $z$, with $b$ fixed, gives $A(z)D_za_0=-D_zF(z,\Psi(z,b))$. Thus
$$D\Psi=\begin{pmatrix}-A^{-1}D_zF&D_ba_0\\0&I_{k-d}\end{pmatrix},\qquad |\det D\Psi|=|\det A|^{-1}|\det D_zF|.$$
In particular an incidence point is critical for $\Psi$ exactly when its root is not regular. [given, algebra]

2.1 The open domain $U\times\mathbb R^{k-d}$ has dimension $k$, equal to the target dimension of $\Psi$. By [F1], its critical-value set $E$ is Lebesgue null. If $N\notin E$, no root can be irregular by step 1.1. This proves almost-everywhere regularity, including all roots in a noncompact $U$, not just a finite preselected root set. [F1, step 1.1, algebra]

2.2 Let $R$ be the open regular locus of $\Psi$. Every point of $R$ lies in a rational open ball contained in a local inverse domain from [F2]. Take all rational balls on which $\Psi$ is injective with invertible derivative; they form a countable cover $(V_j)$ of $R$ by [F5]. On each $V_j$, local inverses agree by injectivity, so $\Psi|_{V_j}$ is a $C^1$ diffeomorphism onto its open image. Put $E_j=V_j\setminus\bigcup_{i<j}V_i$. These are disjoint Borel sets covering $R$; their images under the corresponding diffeomorphisms are Borel by [F4]. No images of arbitrary noninjective Borel maps are asserted to be Borel. [F2, F4, F5, step 1.1, construct]

3.1 Write $\Psi_j^{-1}$ for the inverse on $\Psi(V_j)$. The regular preimages of each $N$ are discrete, hence countable: each has a basis ball containing no other preimage and the first such rational ball gives an injection into a countable basis. Each regular root corresponds to exactly one point of $R$, which belongs to exactly one $E_j$. Therefore $C_\varphi(N)$ is the sum over $j$ of the Borel functions equal to $\varphi(z,N)$ at $(z,b)=\Psi_j^{-1}(N)$ for $N\in\Psi(E_j)$ and zero elsewhere. This proves its Borel measurability. By step 2.1 it counts all roots for $N\notin E$; any alternative extension on $E$ is Lebesgue measurable by [F4]. [F4, F5, step 2.1, step 2.2, algebra]

4.1 Apply [F2] on $V_j$ to the nonnegative Borel function obtained from $w(N)\varphi(z(\Psi_j^{-1}N),N)$ and the indicator of $\Psi(E_j)$. It gives
$$\int_{\Psi(E_j)} w(N)\varphi(z(\Psi_j^{-1}N),N)\,dN=\int_{E_j}w(\Psi(z,b))\varphi(z,\Psi(z,b))|\det D\Psi(z,b)|\,dz\,db.$$
Sum over $j$ by [F3]. Step 3.1 identifies the left side with $\int wC_\varphi$. The right side is the integral on $R$; adding its critical complement changes nothing because $|\det D\Psi|=0$ there and the other factors are finite. Substitute step 1.1 and use Tonelli [F3] for the nonnegative integrand to obtain exactly the displayed identity. All these are equalities of nonnegative integrals, so no finiteness assumption or limit-interchange theorem is needed. [F2, F3, step 1.1, step 2.2, step 3.1, algebra]

5.1 For fixed $z$, the affine linear map $(a,b)\mapsto(y,b)=(A(z)a+B(z)b,b)$ is invertible with real determinant $\det A(z)$. Its change-of-variables formula gives $dN=|\det A(z)|^{-1}dy\,db$. Taking the ordinary Dirac point mass at $y=0$ produces the inner integral of the Statement. For a second minor, write its full coordinates as $(y,b^\prime)$. The transition from $(y,b)$ has block matrix $\begin{pmatrix}I&0\\ C&D\end{pmatrix}$; its absolute determinant is $|\det D|=|\det A^\prime|/|\det A|$, since the two full coordinate maps have absolute determinants $|\det A^\prime|$ and $|\det A|$. On $y=0$ this gives $db^\prime/|\det A^\prime|=db/|\det A|$. Thus the two weighted fibre integrals agree exactly. Thus this delta notation is a well-defined parameter-fibre measure, rather than an unjustified limit under the outer integral. [F2, step 4.1, algebra]

6.1 For a rank-$d$ $C^1$ matrix $C(z)$, the sets where a specified $d$-column minor is nonzero are open and cover $U$. Refine them by rational coordinate balls; this is a countable cover by [F5], with an invertible fixed minor on each member. The preceding construction applies on each member. Enumerate this open cover as $(O_j)$ and use the disjoint Borel pieces $S_j=O_j\setminus\bigcup_{i<j}O_i$. The indicators $\chi_j=\mathbf1_{S_j}$ are bounded Borel weights and sum to one; no smooth-partition theorem is required. On each open $O_j$, replace $\varphi$ by $\chi_j\varphi$. Every root receives total weight $\sum_j\chi_j=1$; [F3] sums both sides exactly. The exceptional parameter sets have null union by [F5]. The minor independence in step 5.1 gives the same fibre integral on overlaps. Hence the local identities glue and prove all remaining assertions. [F3, F5, step 2.1, step 3.1, step 5.1, algebra]


7.1 For a Lebesgue-measurable $S\subset U$, choose $S_0,Z$ as in [F6]. Apply the already proved Borel identity to $\varphi(z,N)=\mathbf1_Z(z)$ and $w=1$. Its right side is zero by Tonelli [F3], because the outer $z$-support is null; the Jacobian and all other factors are finite at each $(z,b)$, and an infinite inner integral on that null set also has zero outer integral. Thus $\int C_{\mathbf1_Z}(N)\,dN=0$. For every integer $j\ge1$, monotonicity and the indicator formula [F6] give $j^{-1}\lambda_k(\{C_{\mathbf1_Z}\ge j^{-1}\})\le\int C_{\mathbf1_Z}=0$. Their countable union is $\{C_{\mathbf1_Z}>0\}$, so it is null. Outside this null parameter set there is no regular root in $Z$, and the root counts restricted to $S$ and $S_0$ agree for every bounded Borel weight. The $S_0$ count is Borel by step 3.1, and completeness in [F4] makes the $S$ count Lebesgue measurable. Their weighted parameter integrals agree; their right-hand integrals also agree, since $\mathbf1_S-\mathbf1_{S_0}$ is supported on the null set $Z$ and Tonelli applies to the two nonnegative integrands separately. With the exceptional set from step 2.1 removed as well, this proves the claimed completed-measure extension for all roots and finishes the proof. [F3, F4, F5, F6, step 2.1, step 3.1, step 4.1, step 6.1, algebra] ∎
