---
id: lem-closed-immersion-affine-quotient-and-base-change
kind: lemma
title: "Closed immersions are affine quotients and survive base change"
status: published
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-closed-immersion-schemes
  - thm-affine-scheme-ring-anti-equivalence
  - lem-affineness-from-unit-generating-global-sections
  - cor-nilradical-as-intersection-of-primes
  - thm-proper-ideal-contained-in-maximal-ideal
  - thm-affine-fibre-product-tensor-ring
  - lem-closed-immersion-local-on-target
  - def-axiom-of-choice
  - def-scheme
  - cor-affine-scheme-quasi-compact
  - def-prime-spectrum-and-vanishing-sets
  - def-principal-distinguished-subset-of-spectrum
  - lem-zariski-closed-set-axioms
  - lem-spectrum-localization-open-immersion
  - thm-sections-basic-open-affine-scheme
  - thm-stalk-structure-sheaf-prime-localization
  - def-stalk-of-presheaf
  - def-localisation-at-a-prime-ideal
  - def-localisation-of-a-module
  - thm-universal-property-of-localisation
  - thm-localisation-of-modules-is-exact
  - def-module-homomorphism-kernel-image-and-cokernel
  - thm-prime-spectrum-of-a-quotient-bijection
  - cor-tensor-product-with-a-quotient-ring
  - thm-symmetry-and-associativity-over-a-commutative-ring
  - def-direct-image-sheaf
  - thm-exactness-of-sheaves-stalkwise
  - thm-morphisms-into-affine-scheme-global-sections
  - def-base-change-morphism-schemes
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "The Stacks Project, Schemes, Lemma 26.8.2 (tag 01IH)"
      url: "https://stacks.math.columbia.edu/tag/01IH"
    - title: "The Stacks Project, Schemes, Lemma 26.10.1 (tag 01IN)"
      url: "https://stacks.math.columbia.edu/tag/01IN"
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice (AC). Let $i:Z\to Y$ be a closed immersion, where
closed immersion has the published convention that the map on structure sheaves
is surjective. For every affine open $U=\operatorname{Spec}A$ of $Y$, there is
a unique ideal $I\subseteq A$ such that, over $U$,
$$i^{-1}(U)\cong\operatorname{Spec}(A/I).$$
Conversely, every quotient map $A\to A/I$ induces a closed immersion
$\operatorname{Spec}(A/I)\to\operatorname{Spec}A$. Every base change of a
closed immersion is a closed immersion. In particular, the empty subscheme of
$\operatorname{Spec}A$ corresponds to $I=A$.

## Facts & Assumptions

**Given:** AC, a closed immersion $i:Z\to Y$, commutative unital rings, and the scheme and affine-scheme conventions in the cited prerequisites.

[F1] A morphism is a closed immersion when it is a homeomorphism onto a closed subset and its structure-sheaf map is surjective. ([[def-closed-immersion-schemes]])

[F2] Closed immersions are local on the target: a morphism is a closed immersion exactly when its restrictions over an open cover are closed immersions. ([[lem-closed-immersion-local-on-target]])

[F3] Every point of a scheme has an open affine neighbourhood; the empty locally ringed space is a scheme. ([[def-scheme]])

[F4] Every affine scheme is quasi-compact. ([[cor-affine-scheme-quasi-compact]])

[F5] The sets $V(J)$ for ideals $J$ are precisely the closed sets of $\operatorname{Spec}A$; the Zariski topology is the one defined by these vanishing sets. ([[lem-zariski-closed-set-axioms]])

[F6] For an ideal $J$, $V(J)$ consists of the primes containing $J$; and $D(f)=\{\mathfrak p:f\notin\mathfrak p\}$ is the complement of $V((f))$. Consequently the $D(f)$ form a basis: if $O=\operatorname{Spec}A\setminus V(J)$ and $\mathfrak p\in O$, choose $f\in J\setminus\mathfrak p$, so $\mathfrak p\in D(f)\subseteq O$. ([[def-prime-spectrum-and-vanishing-sets]], [[def-principal-distinguished-subset-of-spectrum]])

[F7] For $f\in A$, $\operatorname{Spec}(A_f)$ is the open locally ringed subspace $D(f)$ of $\operatorname{Spec}A$. ([[lem-spectrum-localization-open-immersion]])

[F8] If finitely many global sections generate the unit ideal and each of their principal opens is affine, then the scheme is affine; the empty scheme and an empty list of sections are allowed. ([[lem-affineness-from-unit-generating-global-sections]])

[F9] Under AC, the nilradical of any commutative ring is the intersection of its prime ideals, with the empty-intersection convention for the zero ring. ([[cor-nilradical-as-intersection-of-primes]])

[F10] Under AC, every proper ideal of a nonzero commutative ring is contained in a maximal ideal. ([[thm-proper-ideal-contained-in-maximal-ideal]])

[F11] A morphism from a scheme $X$ to $\operatorname{Spec}A$ induces the corresponding ring map $A\to\Gamma(X,\mathcal O_X)$, and these constructions give a natural bijection. ([[thm-morphisms-into-affine-scheme-global-sections]])

[F12] Morphisms between affine schemes correspond contravariantly to ring maps; the induced map on spectra is contraction of primes, and global sections is the inverse correspondence. ([[thm-affine-scheme-ring-anti-equivalence]])

[F13] For a continuous map $f:X\to Y$, direct image sections satisfy $(f_*\mathcal F)(V)=\mathcal F(f^{-1}(V))$. ([[def-direct-image-sheaf]])

[F14] On an affine scheme, $\Gamma(D(f),\mathcal O)=A_f$. ([[thm-sections-basic-open-affine-scheme]])

[F15] The stalk of the affine structure sheaf at $\mathfrak p\in\operatorname{Spec}A$ is $A_{\mathfrak p}$, where $A_{\mathfrak p}=(A\setminus\mathfrak p)^{-1}A$. ([[thm-stalk-structure-sheaf-prime-localization]], [[def-localisation-at-a-prime-ideal]])

[F16] Exactness of sheaves of abelian groups is equivalent to exactness on every stalk. We apply this to the underlying additive sheaves of rings. ([[thm-exactness-of-sheaves-stalkwise]])

[F17] Localization preserves short exact sequences of modules. ([[thm-localisation-of-modules-is-exact]])

[F18] Prime ideals of $A/I$ correspond by contraction exactly to prime ideals of $A$ containing $I$. ([[thm-prime-spectrum-of-a-quotient-bijection]])

[F19] The fibre product of $\operatorname{Spec}B$ and $\operatorname{Spec}C$ over $\operatorname{Spec}A$ is $\operatorname{Spec}(B\otimes_A C)$, including zero rings. ([[thm-affine-fibre-product-tensor-ring]])

[F20] For every $A$-module $M$, $M\otimes_A(A/I)\cong M/IM$; the canonical map is given by $m\otimes\bar a\mapsto am+IM$. ([[cor-tensor-product-with-a-quotient-ring]])

[F21] AC states that every family of nonempty sets admits a choice function. ([[def-axiom-of-choice]])

[F22] For a module localization, $m/1=0$ exactly when $um=0$ for some denominator $u$; this is the defining fraction-equivalence relation. ([[def-localisation-of-a-module]])

[F23] The cokernel of a module map $f:M\to N$ is the quotient module $N/\operatorname{im}f$. ([[def-module-homomorphism-kernel-image-and-cokernel]])

[F24] A ring map that sends every element of a multiplicative set to a unit factors uniquely through the corresponding localization. ([[thm-universal-property-of-localisation]])

[F25] The stalk of a presheaf at a point is the filtered colimit of its sections over neighbourhoods of that point. ([[def-stalk-of-presheaf]])

[F26] For modules over a commutative ring, the flip $M\otimes_RN\to N\otimes_RM$, $m\otimes n\mapsto n\otimes m$, is an isomorphism. ([[thm-symmetry-and-associativity-over-a-commutative-ring]])

[F27] For a morphism $Y'\to Y$, the base change of $Z\to Y$ is the pullback $Z\times_Y Y'\to Y'$; the construction preserves identities and composition. ([[def-base-change-morphism-schemes]])

**AC use:** F21 is used through F9 and F10 and to find a maximal ideal containing the annihilator of a nonzero cokernel element. The finite affine subcover and the finite list of labels below require no choice principle.

## Proof

1.1 Fix an affine open $U=\operatorname{Spec}A$ of $Y$. By F3, complete $U$ to an open cover of $Y$ with affine neighbourhoods of points outside $U$. Then F1 and F2 show that the restriction $i_U:i^{-1}(U)\to U$ is a closed immersion. It is therefore enough to prove the assertion when $Y=\operatorname{Spec}A$. Write $E=i(Z)$; F1 says that $E$ is closed and $i$ is a homeomorphism from $Z$ onto $E$. [F1, F2, F3, given]

1.2 The space $\operatorname{Spec}A$ is quasi-compact by F4. A closed subset of a quasi-compact space is quasi-compact: add its open complement to any open cover and take a finite subcover upstairs. Hence $E$ and $Z$ are quasi-compact. Since $Z$ is a scheme, its affine open neighbourhoods cover it by F3; compactness gives a finite affine-open cover $W_1,\ldots,W_m$. The empty cover is permitted when $Z=\varnothing$. [F1, F3, F4]

1.3 Each $W_j$ is open in $E$, so the subspace topology gives an open $O_j\subseteq\operatorname{Spec}A$ with $O_j\cap E=W_j$. By F5 and F6, principal opens form a basis. Thus the family of pairs $(j,f)$ satisfying $E\cap D(f)\subseteq W_j$ covers $E$. Quasi-compactness gives finitely many such labelled pairs $(j_i,f_i)$ covering $E$, without choosing one function for every point. [F3, F5, F6]

1.4 The inverse image of each selected $D(f_i)$ lies in its labelled affine chart $W_{j_i}=\operatorname{Spec}C_{j_i}$. The morphism on that chart corresponds by F12 to a ring map $A\to C_{j_i}$, so the inverse image is the distinguished open defined by the image of $f_i$. It is affine by F7. The selected inverse images cover $Z$. [F7, F12]

1.5 Since $E$ is closed in $\operatorname{Spec}A$, write $E=V(J)$ by F5. The opens $D(f_i)$ cover $V(J)$, so $$V\bigl(J+(f_1,\ldots,f_n)\bigr)=\varnothing.$$ If $A\ne0$ and this aggregate ideal were proper, F10 would put it in a maximal (hence prime) ideal, contradicting the cover. If $A=0$, the aggregate ideal already equals $A$. Therefore $J+(f_1,\ldots,f_n)=A$. By the definition of a generated ideal this gives a finite relation $$1=\sum_i a_i f_i+\sum_{\ell=1}^r b_\ell g_\ell,\qquad g_\ell\in J.$$ [F5, F6, F10, F21, algebra]

1.6 Conversely, let $\pi:A\to A/I$ be a quotient map. By F18 its spectrum map is a bijection onto $V(I)$. It is continuous because inverse images of vanishing sets are vanishing sets. If $K$ is an ideal of $A/I$, the image of $V_{A/I}(K)$ is $V_A(\pi^{-1}K)$, hence is closed by F5. The map is therefore a closed continuous bijection onto $V(I)$, and is a homeomorphism onto that closed subset. [F5, F18]

2.1 Apply the map $A\to\Gamma(Z,\mathcal O_Z)$ of F11 to the relation from step 1.5. On an affine chart $W_j=\operatorname{Spec}C_j$, every point maps into $E=V(J)$; by F12 the image of each $g_\ell$ belongs to every prime of $C_j$. By F9 it is nilpotent. There are finitely many $j$ and $\ell$, so a common positive exponent kills every restriction $g_\ell|_{W_j}$; the sheaf axiom then makes each $g_\ell|_Z$ nilpotent in $\Gamma(Z,\mathcal O_Z)$. Their finite linear combination $h=\sum_\ell b_\ell g_\ell$ is nilpotent: if it has $r$ terms and each term has $N$th power zero, then $h^{r(N-1)+1}=0$ by the multinomial expansion. It follows from the relation in step 1.5 that $\sum_i a_i f_i=1-h$ is a unit, with inverse $1+h+\cdots+h^{q-1}$ when $h^q=0$. Thus the $f_i$ generate the unit ideal in $\Gamma(Z,\mathcal O_Z)$. [F9, F11, F12, F21, step 1.5, algebra]

3.1 By step 1.4 the principal opens defined by the $f_i$ are affine, and they cover $Z$. By step 2.1 they are defined by sections generating the unit ideal. F8 therefore makes $Z$ affine, say $Z=\operatorname{Spec}B$. This includes the empty case: if the list is empty, its unit-ideal condition forces $\Gamma(Z,\mathcal O_Z)=0$, and the permitted empty case of F8 gives $Z=\operatorname{Spec}0$. [F8, step 1.4, step 2.1]

4.1 By step 3.1, $Z=\operatorname{Spec}B$, so the affine anti-equivalence F12 identifies $i$ with a ring map $\varphi:A\to B$. For $\mathfrak p\in\operatorname{Spec}A$, the source stalk is $A_{\mathfrak p}$ by F15. By F13, the sections of $i_*\mathcal O_Z$ on $D(f)$ are $\Gamma(D_B(\varphi(f)),\mathcal O_Z)=B_{\varphi(f)}$ by F14; the opens $D(f)$ with $f\notin\mathfrak p$ are cofinal neighbourhoods of $\mathfrak p$. By F25 the stalk is the colimit of these section rings. Its canonical map from $B$ inverts every element of $S_{\mathfrak p}=\varphi(A\setminus\mathfrak p)$, so F24 gives a map $S_{\mathfrak p}^{-1}B$ to this colimit. Conversely, each $B_{\varphi(f)}$ maps compatibly to $S_{\mathfrak p}^{-1}B$; the two maps are inverse by F24. Thus the stalk is $S_{\mathfrak p}^{-1}B$, and the stalk map is the localization $A_{\mathfrak p}\to S_{\mathfrak p}^{-1}B$. F1 makes the sheaf map surjective, so F16 makes every such localized map surjective. [F1, F12, F13, F14, F15, F16, F24, F25, step 1.1, step 3.1]

5.1 Regard $M=\operatorname{coker}(A\xrightarrow{\varphi}B)$ as an $A$-module, using F23. By F17, its localization $M_{\mathfrak p}$ is the cokernel of the localized map in step 4.1, hence is zero for every prime $\mathfrak p$. If $A=0$, unitality forces $B=0$, so $M=0$. Otherwise, if $M$ had a nonzero element $m$, its annihilator would be a proper ideal. By F10 and AC there would be a maximal ideal $\mathfrak p\supseteq\operatorname{Ann}(m)$. Then $m/1\ne0$ in $M_{\mathfrak p}$: F22 says $m/1=0$ would require a denominator $s\notin\mathfrak p$ with $sm=0$, but that puts $s\in\operatorname{Ann}(m)\subseteq\mathfrak p$. This contradicts $M_{\mathfrak p}=0$. Thus $M=0$ and $\varphi$ is surjective. Its kernel $I=\ker\varphi$ is unique, and the explicit map $A/I\to B$, $a+I\mapsto\varphi(a)$, is a ring isomorphism. By F12 it identifies $i$ over $\operatorname{Spec}A$ with the quotient immersion. [F10, F12, F17, F21, F22, F23, step 4.1, algebra]

5.2 At $\mathfrak p\supseteq I$, the quotient induces a surjection $A_{\mathfrak p}\to(A/I)_{\mathfrak p/I}$: every localized quotient fraction has a numerator lifted from $A$. At $\mathfrak p\not\supseteq I$, some $u\in I\setminus\mathfrak p$ becomes invertible while mapping to zero, so the target stalk of the direct image is zero. The stalk computation in step 4.1 and F16 show that $\mathcal O_{\operatorname{Spec}A}\to \pi_*\mathcal O_{\operatorname{Spec}(A/I)}$ is surjective. Together with the result of step 1.6 and F1, this proves that every quotient map induces a closed immersion. [F1, F13, F14, F15, F16, step 4.1, step 1.6]

6.1 Let $Y'\to Y$ be any morphism. By F27 its pullback of $i$ is defined. The target $Y'$ has an affine-open cover by $V=\operatorname{Spec}A'$ whose maps factor through affine opens $U=\operatorname{Spec}A$ of $Y$: around each point, intersect an affine neighbourhood with the inverse image of an affine neighbourhood in $Y$, then refine inside the affine chart by a principal open using F5--F7. The pullback over each such $V$ is the affine fibre product $$\operatorname{Spec}\bigl((A/I)\otimes_A A'\bigr).$$ By F26 and F20 it is canonically isomorphic to $\operatorname{Spec}(A'/IA')$. This is a ring isomorphism: the map $\bar a\otimes a'\mapsto a'a+IA'$ is multiplicative, and its inverse sends $a'+IA'$ to $1\otimes a'$; this inverse kills $IA'$ since $1\otimes ia'=i\cdot(1\otimes a')=0$ for $i\in I$. By step 5.1 the restriction over $U$ is $\operatorname{Spec}(A/I)\to U$, so the pullback over $V$ is exactly this quotient map and is a closed immersion by step 5.2. F2 glues these local closed immersions over the affine-open cover of $Y'$, proving stability under arbitrary base change. [F2, F3, F5, F6, F7, F19, F20, F26, F27, step 5.1, step 5.2, algebra]

7.1 If $Z=\varnothing$, then $B=0$ and the unique kernel is $I=A$; after every base change the quotient ring remains zero. If $A=0$, both the target and every closed subscheme are empty and the same ideal conclusion holds. The extreme quotient ideals $I=0$ and $I=A$ give respectively the identity closed immersion and the empty immersion. No reducedness or finite-generation assumption was used, so nilpotents in the quotient are retained. [step 5.1, step 5.2, step 6.1, algebra] ∎
