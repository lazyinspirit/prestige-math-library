---
id: lem-gts-symmetric-root-graph-filtration
kind: lemma
title: Ordered-root graph filtration for the symmetric quotient of a product of projective lines
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-step3-fresh-2026-11-04
domain: mathematics
library: physics
category: string-theory
axiom_use: ZF + AC
deps:
  - lem-gts-ramified-finite-map-induced-stability
  - def-gts-bridgeland-stability-condition-with-support-property
  - thm-fundamental-theorem-of-algebra-minimum-modulus-proof
  - def-axiom-of-choice
dependency_roles:
  lem-gts-ramified-finite-map-induced-stability: mathematical-premise
  def-gts-bridgeland-stability-condition-with-support-property: mathematical-premise
  thm-fundamental-theorem-of-algebra-minimum-modulus-proof: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Chunyi Li, A remark on stability conditions on smooth projective varieties
      url: https://arxiv.org/pdf/2601.22994v1
      locator: Section 4 and Proposition 6.2; a monic ordered-root proof of the required graph filtration replaces classical Schubert-basis inputs and the unexplained homogenization sentence.
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
dependency_level: 3
---

## Statement

Assume AC and let $n\ge1$, $Y=(\mathbb P^1)^n$. The map sending an ordered tuple of points to its product binary form identifies its symmetric quotient with $\mathbb P^n$ and gives a finite faithfully flat map $f:Y\to\mathbb P^n$ of degree $n!$, locally a tower of monic quotient algebras. Write $Z=Y\times_{\mathbb P^n}Y$, with coordinates $(y,x)$, and order permutations $w=(w_1,\ldots,w_n)$ lexicographically. Let $G_w\subset Z$ be the graph $y_j=x_{w_j}$ and set
$$D_w=\sum_{j=1}^n\ \sum_{\substack{k<w_j\\ k\notin\{w_1,\ldots,w_{j-1}\}}}\{x_{w_j}=x_k\}\quad\text{on the second copy of }Y.$$
Each summand is a pair diagonal, an effective Cartier divisor. With $w^{(r)}$ the $r$th permutation, put $K_0=\mathcal O_Z$ and
$$K_r=\ker\left(\mathcal O_Z\longrightarrow\bigoplus_{s\le r}\mathcal O_{G_{w^{(s)}}}\right).$$
Then $K_{n!}=0$ and the successive quotient is
$$K_{r-1}/K_r\cong\mathcal O_{G_{w^{(r)}}}\otimes p_x^*\mathcal O_Y(-D_{w^{(r)}}).$$
In particular every twist is the inverse of an effective line bundle, whose degree in each projective-line factor is at most $n-1$.

Consequently, if $\sigma=(Z_\sigma,P)$ on $Y$ is invariant under every permutation and $E\otimes\mathcal O_Y(-D_w)\in P(\le\theta)$ whenever $E\in P(\theta)$, then $f_\sharp\sigma$ exists as a locally finite support-property stability condition on $\mathbb P^n$, with lattice exactly $\operatorname{im}(v f^*)$. It is enough to assume this phase bound for every effective line bundle.

## Statement references

[[lem-gts-ramified-finite-map-induced-stability]]

## Facts & Assumptions

**Given:** The displayed map, permutations, divisors and kernels. For a tuple avoiding a point $a\in\mathbb P^1$, use an affine coordinate on $\mathbb P^1\setminus\{a\}$ and write $x_i$ for its values. Its monic polynomial is $P(T)=\prod_i(T-x_i)$. The graph action convention in this lemma is precisely the formula $y_j=x_{w_j}$, so it requires no ambiguous inverse convention for $w^*$.

[F1] [[lem-gts-ramified-finite-map-induced-stability]] proves the correctly typed finite-flat induction theorem, its geometric adjoints/acyclicity and the actual finite-rank image-lattice support conclusion. [[def-gts-bridgeland-stability-condition-with-support-property]] supplies phase terminology. [[def-axiom-of-choice]] is the ambient premise.

[F2] [[thm-fundamental-theorem-of-algebra-minimum-modulus-proof]] gives a complex root of every nonconstant complex polynomial; division and induction give its complete factorization with multiplicity.

## Proof

1.1 **Symmetric quotient and monic tower.** The product of the linear binary forms vanishing at the $n$ tuple entries gives a point of the projective space of degree-$n$ binary forms. A nonzero complex binary form factors into such forms, uniquely as an unordered multiset, so its fibres are exactly the permutation orbits. On the open set of forms nonvanishing at $a$, normalize the leading coefficient to one. Its coefficient ring is $A=\mathbb C[e_1,\ldots,e_n]$ and the preimage has ring $R=\mathbb C[x_1,\ldots,x_n]$, where $e_j$ are the elementary symmetric polynomials. These generate all symmetric polynomials: subtract the product of elementary symmetric polynomials with the same largest monomial of a symmetric polynomial in lexicographic order; its exponents are weakly decreasing, and the needed product is $e_1^{a_1-a_2}\cdots e_n^{a_n}$. Subtraction strictly decreases the largest monomial among the finitely many monomials of bounded total degree, so induction terminates. Their algebraic independence follows because every coefficient tuple occurs as a monic polynomial with complex roots: a polynomial relation would vanish on all of $\mathbb C^n$, hence be zero by induction in the variables. Thus this chart is the affine invariant quotient. [F2, given, algebra, construct]

2.1 The universal splitting algebra over $A$ is built by adjoining $t_1$ with $P(t_1)=0$, then $t_2$ with $(P(T)/(T-t_1))(t_2)=0$, and so on. The successive polynomials are monic of degrees $n,n-1,\ldots,1$; polynomial division gives their coefficients in the preceding quotient, because the remainder is zero. This algebra is isomorphic to $R$: comparison of $P(T)=\prod_j(T-t_j)$ recovers each coefficient $e_j$ as the elementary symmetric polynomial in the $t_j$, and gives inverse presentations. Therefore $R$ is finite free of rank $n!$ over $A$; its basis is $t_1^{a_1}\cdots t_n^{a_n}$ with $0\le a_j\le n-j$. Every fibre is nonempty by factorization, and the rank is positive, so the map is faithfully flat. These quotient charts cover $\mathbb P^n$: choose $a$ outside the finite root multiset of a given form. Their invariant descriptions agree on overlaps because both are the same product binary form. They prove the global quotient identification and the finite faithfully flat degree. The monic dual-pairing argument in F1 verifies the dual-line hypothesis for this map, including repeated-root fibres. [F1, step 1.1, algebra]

3.1 **The elementary Newton filtration.** Work over $R=\mathbb C[x_1,\ldots,x_n]$. The fibre-product algebra is the splitting algebra $C=R\otimes_A R$ for $P(T)=\prod_i(T-x_i)$, with the second ordered roots denoted $y_1,\ldots,y_n$. Set $B=R[t]/P(t)$ and $q_i(t)=\prod_{k<i}(t-x_k)$ for $1\le i\le n+1$. The ideals $q_iB$ form a descending filtration, with first term $B$ and last term zero. Multiplication by $q_i$ identifies $R[t]/\prod_{k\ge i}(t-x_k)$ with $q_iB$: in $R[t]$, the equality $P=q_i\prod_{k\ge i}(t-x_k)$ and cancellation of the nonzero monic polynomial $q_i$ prove both its kernel and injectivity. Hence
$$q_iB/q_{i+1}B\cong R[t]/(t-x_i)=R.$$
Restriction to the root $t=x_i$ sends the indicated generator to $d_i=\prod_{k<i}(x_i-x_k)$, so its image is exactly the ideal $d_iR$. This restriction is injective on the quotient because $R$ is a domain and $d_i\ne0$. Also $q_iB$ is the kernel of restrictions to $t=x_1,\ldots,x_{i-1}$: induction divides a polynomial vanishing at these roots by $t-x_1$, then evaluates at $x_2$ and cancels $x_2-x_1$, and continues. This proves the kernel assertion over the polynomial ring even where individual roots coincide; it does not localize away from diagonals. [step 2.1, algebra]

4.1 **An explicit triangular basis, checking the entire refined filtration.** For a permutation $w$, put $A_j(w)=\{k<w_j:k\notin\{w_1,\ldots,w_{j-1}\}\}$ and define $N_w(y;x)=\prod_j\prod_{k\in A_j(w)}(y_j-x_k)\in C$. The integers $a_j(w)=|A_j(w)|$ satisfy $0\le a_j(w)\le n-j$. Conversely such integers recover $w$ uniquely: at stage $j$ choose the $(a_j+1)$st unused label in increasing order. Thus $w\mapsto(a_1,\ldots,a_n)$ is a bijection to the exponent vectors of the monic-tower basis of step 2.1. In that basis, $N_w=y_1^{a_1}\cdots y_n^{a_n}$ plus terms of strictly smaller total $y$-degree (all exponents already stay in the allowed ranges). The change-of-basis matrix, ordered by total degree, is triangular with diagonal one. Therefore the $N_w$ form an $R$-basis of $C$, with no cited Schubert-basis theorem. If $v$ is lexicographically earlier than $w$, their first differing index $j$ has $v_j<w_j$ and $v_j$ unused after the identical prefix; hence the factor $y_j-x_{v_j}$ of $N_w$ vanishes on $G_v$. On its own graph $G_w$, its value is exactly $d_w=\prod_j\prod_{k\in A_j(w)}(x_{w_j}-x_k)$. These are nonzero polynomials in the domain $R$. Write any element $c=\sum_w b_wN_w$. Vanishing on the first graph forces its first coefficient zero by cancellation of $d_w$; vanishing on the second then forces its second coefficient zero; induction proves that the kernel of the first $r$ graph restrictions is exactly the $R$-span of the remaining $N_w$. Its next quotient therefore restricts isomorphically to $d_wR$ on $G_w$, and the final kernel is zero. Since these are kernels of actual algebra restriction maps, they are ideals and hence sub-bimodules; the quotient isomorphism respects both coordinate-ring actions. This proves precisely the asserted scheme-theoretic filtration, retaining repeated-root fibres. [step 2.1, step 3.1, algebra, induction]

5.1 **Global gluing without a homogenization assumption.** The kernels $K_r$ are defined globally as kernels of the actual graph-restriction maps; consequently their restrictions to all the affine charts just used agree. These charts cover $Z$: both tuples in a point of $Z$ have the same finite root multiset, so some $a$ is avoided by both tuples. On each such chart the quotient image is exactly the product of the equations of the pair diagonals appearing in $D_w$, by step 4.1. Under a change of affine coordinate $u\mapsto(\alpha u+\beta)/(\gamma u+\delta)$, each difference changes by the unit $\det(\alpha,\beta;\gamma,\delta)/((\gamma x_i+\delta)(\gamma x_k+\delta))$ on the common chart. These are exactly the transitions of the ideal of the corresponding Cartier pair diagonal. Their product is therefore the ideal line $\mathcal O_Y(-D_w)$, rather than an unspecified degree shift. Each pair diagonal on $(\mathbb P^1)^n$ has equation $X_{i,0}X_{k,1}-X_{i,1}X_{k,0}$ and line $\mathcal O(1)$ on those two factors, so it is effective Cartier and contributes degree one in each. A label can pair with at most $n-1$ other labels. This proves all global filtration and degree assertions. [step 4.1, algebra, construct]

6.1 **Derived functor consequence.** Use the first copy of $Y$ for $y$, the second for $x$. The finite-flat module identity identifies
$$f^*f_*E=Rp_{x*}(p_y^*E\otimes^{\mathbf L}\mathcal O_Z).$$
The filtration triangles of $\mathcal O_Z$ may be tensor-pushed by this exact derived functor. Each graph projection to either copy is an isomorphism, so the graph factor is the pullback of $E$ under $x\mapsto(x_{w_1},\ldots,x_{w_n})$, tensored with $\mathcal O_Y(-D_w)$; there is no hidden Tor term on a graph, as a finite locally free resolution computes the derived tensor there. $p_x$ is finite on all these supports, so its pushforward is acyclic by F1. For $E\in P(\theta)$ every graph pullback has phase $\theta$ by the assumed permutation invariance, and every negative twist lies in $P(\le\theta)$ by hypothesis. Finite extensions retain that bound, proving $f^*f_*P(\theta)\subset P(\le\theta)$. Apply F1 to obtain the entire induced stability condition and actual image-lattice support property. [F1, step 2.1, step 5.1, algebra] ∎

## Remarks

This filtration is an elementary ordered-root version of the graph-filtration input proved using double Schubert polynomials in Li Section 4. It has one permutation per quotient instead of grouping by Coxeter length. That change has no effect on the finite-extension phase estimate. It uses no unproved freeness of a Schubert basis, Demazure braid identity, Soergel filtration, or “natural homogenization” premise. The effective divisors are indexed explicitly, avoiding action-convention ambiguities in the inversion set. The case $n=1$ is the identity map with the single graph and zero divisor.
