---
dependency_level: 22
id: lem-quadratic-number-field-principal-product-and-canonical-hecke-character
kind: lemma
title: Quadratic principal product and the canonical number-field Hecke character
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-axiom-of-choice
- def-countable-choice
- def-dependent-choice
- lem-quadratic-hilbert-symbol-compatible-with-local-milnor-transfer
- thm-bass-tate-kato-norm-transfer-for-milnor-k-groups
- lem-presented-simple-extension-milnor-transfer
- thm-hilbert-reciprocity-over-the-rationals
- lem-equivalent-definitions-of-the-hilbert-symbol
- thm-real-hilbert-symbol-formula
- thm-global-field-completion-tensor-product-decomposition
- thm-primitive-element-theorem-for-finite-separable-extensions
- thm-fundamental-theorem-of-algebra-minimum-modulus-proof
- lem-global-hilbert-symbol-product-finite-support
- thm-local-artin-reciprocity-and-norm-index
- thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula
- thm-dedekind-zeta-euler-product
- thm-number-field-finite-weak-approximation-in-zf
- def-finite-order-ray-class-hecke-character-and-l-function
- lem-complete-discrete-valuation-extension-degree-and-tame-norm
- def-idele-group-of-a-global-field
- lem-milnor-symbol-anticommutativity-and-repeated-entry-identities
- thm-fundamental-identity-for-primes-in-number-fields
- lem-finite-separable-local-field-norm-image-is-open
- thm-finite-unramified-local-extensions-classified-by-residue-extensions
- lem-hensel-factor-lifting-over-a-complete-valued-field
justified_by: []
proof_strategy: direct
axiom_use: AC, Countable Choice and DC are explicit. AC permits the finite-extension
  and accepted Milnor/local Artin providers; no choice-free or DC-only upgrade is
  asserted.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: J. S. Milne, Class Field Theory, version 4.03, Chapter V §5 and Chapter
      VI §1; quadratic forward construction adapted via the proved local and rational
      suppliers
    url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
    locator: Product-formula and ray-character context; the complete quadratic argument
      below uses canonical Milnor transfer and the published rational product, not
      an imported global reciprocity theorem.
verification: {}
---

## Statement

Assume AC, Countable Choice and DC. At a finite place $v$ of a number field $K$, use the distinguished arithmetic local Artin map and put
$$h_v(a,b)=\operatorname{rec}_{K_v}(a)(\sqrt b)/\sqrt b.$$
At a real place put $h_v(a,b)=-1$ exactly when both arguments are negative, and at a complex place put $h_v=1$. For all $a,b\in K^\times$ the product has finite support and
$$\prod_v h_v(a,b)=1.$$
For each quadratic extension $L/K$, there is a canonical nontrivial continuous character $\chi_{L/K}:C_K\to\{\pm1\}$ whose finite local component is the unique sign character with kernel $N_{L_w/K_v}L_w^\times$ at a nonsplit place and is trivial at a split place. Its real component is sign exactly when the real place becomes complex; its complex components are trivial. Here $C_K=\mathbb A_K^\times/K^\times$ has the quotient topology.

This character gives a primitive quadratic ray-class Hecke character for its least modulus: its finite exponent at $v$ is the least $n_v\ge0$ killing $U_v^{n_v}$, with $U_v^0=\mathcal O_v^\times$, and its infinite support is the set of real places becoming complex. Its finite conductor support is exactly the ramified places. At unramified primes its value is $+1$ for split primes and $-1$ for inert primes, and on $\operatorname{Re}(s)>1$ one has
$$\zeta_L(s)=\zeta_K(s)L_K(s,\chi_{L/K}).$$
No converse realization of characters or equality with a global norm kernel is asserted.

## Facts & Assumptions

**Given:** The number field, canonical local maps, and, for the character construction, the given quadratic extension, under AC, Countable Choice and DC.

[A1] The three named choice axioms are assumed literally. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

[F1] The quadratic Hilbert homomorphism commutes with Milnor transfer for every finite extension of characteristic-zero finite-residue local fields, and separately for the real/complex extensions with the stated signs. [[lem-quadratic-hilbert-symbol-compatible-with-local-milnor-transfer]]

[F2] Canonical Milnor transfer is transitive and generator-independent. For a primitive presentation $E=F[X]/(P)$ and ANY coefficient field extension $F'/F$, presented transfer satisfies $jT_P=\sum_Q e_Q T_Qj_Q$ over the distinct factors $Q^{e_Q}$ of $P$. [[thm-bass-tate-kato-norm-transfer-for-milnor-k-groups]] [[lem-presented-simple-extension-milnor-transfer]]

[F3] The rational Hilbert symbol satisfies the product law, is the quadratic norm/conic symbol, and has the negative-negative real sign formula. [[thm-hilbert-reciprocity-over-the-rationals]] [[lem-equivalent-definitions-of-the-hilbert-symbol]] [[thm-real-hilbert-symbol-formula]]

[F4] A finite separable field extension is simple. The finite-place tensor decomposition is $K\otimes_{\mathbb Q}\mathbb Q_p=\prod_{v\mid p}K_v$. Every nonconstant complex polynomial has a root. The archimedean tensor decomposition is proved below, rather than attributed to the finite-place statement. [[thm-primitive-element-theorem-for-finite-separable-extensions]] [[thm-global-field-completion-tensor-product-decomposition]] [[thm-fundamental-theorem-of-algebra-minimum-modulus-proof]]

[F5] The Hilbert product has finite support. The actual canonical local Artin map has the exact finite norm kernels, open kernels, and arithmetic Frobenius on finite unramified extensions. [[lem-global-hilbert-symbol-product-finite-support]] [[thm-local-artin-reciprocity-and-norm-index]] [[lem-finite-separable-local-field-norm-image-is-open]]

[F6] Dedekind zeta functions have positive simple poles at one and absolutely convergent Euler products on $\operatorname{Re}(s)>1$. [[thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula]] [[thm-dedekind-zeta-euler-product]]

[F7] Finite number-field weak approximation prescribes arbitrarily small neighborhoods at finitely many finite and archimedean places. [[thm-number-field-finite-weak-approximation-in-zf]]

[F8] A finite-image homomorphism of the ordinary ray ideal group is a finite-order Hecke character; primitivity means no factorization modulo a proper divisor. Only those definition clauses, not a reciprocity correspondence, are used. [[def-finite-order-ray-class-hecke-character-and-l-function]]

[F9] For finite extensions of complete discrete valued fields the determinant norm has valuation $v_F(Nx)=f v_E(x)$ and the degree is $ef$. Ideles have the physical restricted-product topology. [[lem-complete-discrete-valuation-extension-degree-and-tame-norm]] [[def-idele-group-of-a-global-field]]

[F10] Milnor symbols anticommute. In a quotient of exponent two this makes the quadratic Hilbert sign symmetric. [[lem-milnor-symbol-anticommutativity-and-repeated-entry-identities]]

[F11] For finite extensions of number fields, $\sum_{w\mid v}e(w/v)f(w/v)=[L:K]$. [[thm-fundamental-identity-for-primes-in-number-fields]]

[F12] Finite residue-field extensions lift to finite unramified extensions, and simple residue roots lift uniquely over complete valued fields. [[thm-finite-unramified-local-extensions-classified-by-residue-extensions]] [[lem-hensel-factor-lifting-over-a-complete-valued-field]]

## Proof

**Proof technique:** transfer the rational quadratic product, construct the actual local-character product, exclude total splitting by Dedekind poles, and prove the ray/idele dictionary directly.

**Given:** The data above.

1.1 Write $K=\mathbb Q[X]/(P)$ by [F4], with $P$ separable. For a finite rational prime $p$, the tensor decomposition [F4] identifies the factors of $P$ over $\mathbb Q_p$ with the actual completions $K_v$. A Bezout identity for $P,P'$ remains valid after coefficient extension, so their multiplicities are one. Applying the arbitrary-coefficient formula [F2] gives $j_pN_{K/\mathbb Q}x=\sum_{v\mid p}N_{K_v/\mathbb Q_p}(j_vx)$ for $x\in K_2^M(K)$. These are canonical transfers by generator independence; $\mathbb Q_p/\mathbb Q$ is not treated as a finite extension. [A1, F2, F4, given, construct, algebra]

1.2 Over $\mathbb R$, [F4] factors $P$ into distinct linear and irreducible quadratic factors. The elementary Chinese remainder map gives $K\otimes_{\mathbb Q}\mathbb R\simeq\mathbb R^{r_1}\times\mathbb C^{r_2}$. Its factors correspond to real embeddings and conjugate pairs of complex embeddings. These really are completions: a real image of $K$ contains dense $\mathbb Q$, while a nonreal image contains $1,z$ with $z\notin\mathbb R$, so its $\mathbb Q$-span is dense in their real span $\mathbb C$. Apply [F2] with coefficient extension $\mathbb R/\mathbb Q$. It gives the sum of the real identity transfers and the complex-to-real transfers. This is an inline proof of the archimedean bridge; no archimedean clause is inferred from the finite-place tensor theorem. [A1, F2, F4, given, construct, algebra]

1.3 The rational symbol of [F3] is $+1$ exactly on norms from the quadratic algebra, including the split algebra. Its finite canonical counterpart has the same kernel by [F5], so the two signs agree with arguments reversed, and [F10] makes reversal harmless. Their real signs also agree by [F3]. Hence rational reciprocity says $\prod_w h_{\mathbb Q_w}(j_wx)=1$ for every $x\in K_2^M(\mathbb Q)$: first apply it to each symbol in a finite expression for $x$, then multiply, using the finite union of supports. For an explicit boundary in the rational generator check, $(2,2)=1$ everywhere because $2(1/2)^2+2(1/2)^2=1$; $(-1,2)=1$ has the witness $(1,1)$. Thus neither an orientation sign nor an omitted diagonal generator is assumed. [F3, F5, F10, given, algebra]

1.4 For quadratic $L/K$, choose $\theta\notin K$ with monic minimal polynomial $T^2-sT+t$. Put $\alpha=\theta-s/2$, so $\alpha^2=d=s^2/4-t\in K$. The conjugate root gives $-\alpha$; if $d$ were zero or a square, $\theta$ would lie in $K$. Thus $d\in K^\times$ is nonsquare and $L=K(\sqrt d)$. At each finite nonsplit place set $\eta_v(t)=\operatorname{rec}_{K_v}(t)(\sqrt d)/\sqrt d$, and at split places set $\eta_v=1$. These are the unique nontrivial sign characters with the stated norm kernels by [F5]. At a real place use sign if the quadratic algebra is complex and use one if split; at a complex place use one. The norm from $\mathbb C^\times$ has image $\mathbb R_{>0}$, since $N(z)=|z|^2$ and every positive real has a square root. Thus every component is the actual local norm character and is independent of the chosen trace-zero generator. [A1, F5, given, choose, construct, algebra]

2.1 Apply $h_{\mathbb Q_p}$ to step 1.1 and use [F1]; apply the real sign to step 1.2 and use the separate archimedean clause of [F1]. This yields $h_{\mathbb Q_w}(j_wN_{K/\mathbb Q}x)=\prod_{v\mid w}h_{K_v}(j_vx)$ at every rational place. For $x=\{a,b\}$ the right sides have finite total support by [F5] and symmetry [F10]. Multiplication over all rational places and step 1.3 give $\prod_vh_v(a,b)=1$. Finite sums of symbols have finite support by taking a finite union. All dyadic places and real negative-negative factors are included. No global Brauer, Artin, or class-formation theorem entered the argument. [F1, F5, F10, step 1.1, step 1.2, step 1.3, given, algebra]

3.1 At finite places $\eta_v(t)=h_v(t,d)$; the same formula holds at the archimedean places with the declared signs. Step 2.1 therefore gives $\prod_v\eta_v(t)=1$ for every principal $t\in K^\times$. Away from the finite set above $2d$ and its denominator the quadratic algebra is unramified or split: The reduction of $X^2-d$ is separable and its roots lie in a residue extension of degree at most two. Lift that residue extension by [F12] and then lift its simple roots. If the reduction is split this gives a root already in $K_v$; otherwise its irreducible quadratic reduction forces the lifted quadratic subfield to have residue degree two, hence ramification index one by [F9]. Thus this is the actual unramified quadratic field. Units are norms there, also by arithmetic Frobenius [F5]. Hence for each physical idele $a=(a_v)$ only finitely many $\eta_v(a_v)$ are nontrivial. Their product is a homomorphism on $\mathbb A_K^\times$. [F5, F9, F12, step 2.1, step 1.4, given, algebra]

4.1 Each finite $\eta_v$ has an open norm kernel by [F5], so choose a sufficiently deep principal-unit subgroup in that kernel at each of the finitely many exceptional places. Together with full units at every other finite place, positive reals at the nontrivial sign places and full other archimedean factors, these form an open subgroup of the physical restricted product [F9] killed by the product. Thus the product homomorphism to the discrete group $\{\pm1\}$ is continuous. Step 3.1 makes it trivial on $K^\times$, and the defining quotient topology makes its factor $\chi_{L/K}$ on $C_K$ continuous. The finite-support ideles are dense: each basic neighborhood prescribes only finitely many exceptional coordinates, and one can set every other coordinate to one. Thus any other continuous character with the same local components agrees on a dense subgroup and everywhere. This proves canonicality from actual distinguished local maps, not merely Frobenius normalization. [F5, F9, step 1.4, step 3.1, given, choose, construct, algebra]

5.1 Suppose all but finitely many finite places of $K$ split in $L$. Group the absolutely convergent Euler products of [F6] above each place, using [F11]. At every split place the factor of $\zeta_L$ is the square of that of $\zeta_K$. Consequently $\zeta_L(s)/\zeta_K(s)^2$ is a finite product of factors $(1-q^{-fs})^{\pm1}$, nonzero and finite at $s=1$. But the positive simple poles in [F6] make this ratio tend to zero as real $s\downarrow1$, a contradiction. Only finitely many places ramify, since outside the finite set from step 3.1 the extension is unramified/split. Therefore there are infinitely many unramified nonsplit places; by [F11] they are inert quadratic. At such a place the actual arithmetic Frobenius is nonidentity, so [F5] gives $\eta_v(\pi_v)=-1$. An idele supported there proves $\chi_{L/K}\ne1$. This argument uses no Chebotarev or global class-field existence. [F5, F6, F11, step 3.1, step 4.1, given, algebra]

5.2 For each finite $v$, let $n_v$ be the least nonnegative integer with $\eta_v(U_v^{n_v})=1$, where $U_v^0=\mathcal O_v^\times$. Such an integer exists by continuity, and is zero outside a finite set by step 3.1. Put $S_\infty=\{v\text{ real}:L_v=\mathbb C\}$ and $\mathfrak m=(\prod_v\mathfrak p_v^{n_v},S_\infty)$. Let $W_{\mathfrak m}$ be the product of $U_v^{n_v}$ at its finite support, full finite units elsewhere, positive reals at $S_\infty$, and full other archimedean multiplicative groups. This is the physical open subgroup killed by $\chi_{L/K}$; the product ideal is nonzero even when its finite support is empty. [F8, F9, step 3.1, step 4.1, given, construct, algebra]

6.1 We prove the required ray dictionary, without a reciprocity theorem. For each fractional ideal $\mathfrak a$ prime to the finite part of $\mathfrak m$, choose a finite-support idele $s(\mathfrak a)$ with its prescribed valuations at primes outside that support, components one at the bad primes and all archimedean places. Its class modulo $K^\times W_{\mathfrak m}$ is independent of uniformizers, since their ratios are finite units outside the support. It gives a homomorphism from the group of such fractional ideals to $\mathbb A_K^\times/(K^\times W_{\mathfrak m})$. It is onto: for any idele $a$, use [F7] to choose $f\in K^\times$ with $fa_v\in U_v^{n_v}$ at the bad primes and $fa_v>0$ at $S_\infty$. If there are no approximation conditions, take $f=1$. The remaining valuations of $fa$ form an ideal prime to the finite modulus, whose associated idele differs from $fa$ by $W_{\mathfrak m}$. If $s(\mathfrak a)=f w$ with $w\in W_{\mathfrak m}$, then at bad primes $1=fw_v$, so $f\equiv1$ to the prescribed powers, and at sign places $1=fw_v$, so $f>0$. Outside them its valuations give $\mathfrak a=(f)$. Conversely any such ray-principal $(f)$ has $s((f))/f\in W_{\mathfrak m}$. The kernel is therefore exactly the ray-principal subgroup, proving $\operatorname{Cl}_{\mathfrak m}(K)\simeq\mathbb A_K^\times/(K^\times W_{\mathfrak m})$ at the literal ray-group definition [F8]. [F7, F8, F9, step 5.2, given, choose, construct, algebra]

6.2 At unramified places units are killed by [F5], so $n_v=0$, and the uniformizer value is actual arithmetic Frobenius, $+1$ if split and $-1$ if inert. At a ramified quadratic place [F9] gives $ef=2$ with $e>1$, hence $f=1$ and $v(N\pi_{L_v})=1$. If $\eta_v$ killed every unit, it would be determined by valuation, but it also kills this odd-valuation norm. It would then kill a uniformizer and every element, contradicting its nontrivial local norm quotient in [F5]. Thus $n_v>0$ exactly at the ramified finite places. This proves the asserted support, without asserting any unproved conductor/different formula. [F5, F9, step 1.4, step 5.2, given, algebra]

7.1 By step 6.1 the character factors as a finite-image ray-class Hecke character in [F8]. It is primitive modulo $\mathfrak m$: for any proper divisor $\mathfrak m'$, the identical uniformizer-idele construction gives the commuting quotient diagram for $W_{\mathfrak m}\subseteq W_{\mathfrak m'}$. Factorization at $\mathfrak m'$ would kill $W_{\mathfrak m'}$. If a finite exponent dropped this contradicts its least choice $n_v$; if a real sign place were removed it contradicts the nontrivial sign there. Step 5.1 supplies an inert prime outside the finite modulus, with value $-1$, so the ray character itself is nontrivial and has order two. These quotient diagrams are elementary, not a global norm correspondence. [F8, F9, step 5.1, step 5.2, step 6.1, given, algebra]

8.1 Since the ray character has absolute value at most one on ideals, its defining series in [F8] is absolutely convergent for $\operatorname{Re}(s)>1$ by comparison with [F6]. Unique ideal factorization expands it into its Euler product by the same finite-product and absolute-tail argument as [F6]. At a split prime put $t=(N\mathfrak p)^{-s}$; its two degree-one factors give $(1-t)^{-2}$. At an inert prime the degree-two factor gives $(1-t^2)^{-1}=(1-t)^{-1}(1+t)^{-1}$. At a ramified prime its one degree-one factor gives $(1-t)^{-1}$ and the primitive Hecke character is extended by zero there by [F8] and step 6.2, so its Hecke factor is one. These are exactly the factors of $\zeta_K L_K(\chi_{L/K})$. Absolute convergence [F6] proves the displayed Euler identity. This establishes only the forward canonical character and product law stated, with no global norm-kernel equality, converse realization, general number-field class formation, or full Stark conclusion. [F6, F8, F11, step 7.1, step 6.2, given, algebra] ∎
