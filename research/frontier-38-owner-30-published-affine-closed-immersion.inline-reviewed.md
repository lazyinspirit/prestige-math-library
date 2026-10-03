---
id: thm-affine-closed-immersions-quotient-rings
kind: theorem
title: "Closed immersions into affine schemes are quotient spectra"
status: published
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-closed-immersion-schemes, def-affine-scheme, thm-affine-scheme-ring-anti-equivalence, def-axiom-of-choice, def-scheme, cor-affine-scheme-quasi-compact, thm-sheaf-equalizer-condition, lem-zariski-closed-set-axioms, def-principal-distinguished-subset-of-spectrum, lem-spectrum-localization-open-immersion, thm-proper-ideal-contained-in-maximal-ideal, cor-nilradical-as-intersection-of-primes, thm-morphisms-into-affine-scheme-global-sections, thm-sections-basic-open-affine-scheme, thm-stalk-structure-sheaf-prime-localization, thm-localisation-of-modules-is-exact, def-localisation-of-a-module, thm-exactness-of-sheaves-stalkwise, thm-prime-spectrum-of-a-quotient-bijection]
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Lemma 26.10.1"
      url: "https://stacks.math.columbia.edu/tag/01IN"
---
## Statement

For a ring $A$, closed immersions $Z\to\operatorname{Spec}A$ are, up to unique
isomorphism over $\operatorname{Spec}A$, precisely the morphisms
$\operatorname{Spec}(A/I)\to\operatorname{Spec}A$ for ideals $I\subseteq A$.

## Facts & Assumptions

**Given:** A closed immersion $i:Z\to X=\operatorname{Spec}A$, with the published scheme conventions. We work with the repository's permitted Axiom of Choice.

[F1] A closed immersion is a homeomorphism onto a closed subset with surjective structure-sheaf map; schemes have affine open neighbourhoods, and affine schemes are quasi-compact. ([[def-closed-immersion-schemes]], [[def-scheme]], [[def-affine-scheme]], [[cor-affine-scheme-quasi-compact]])

[F2] Closed sets in a spectrum are vanishing sets of ideals, principal opens form a basis, and localization identifies $D(f)$ with $\operatorname{Spec}A_f$. Under AC, a proper ideal is contained in a maximal ideal and the nilradical is the intersection of all primes. ([[lem-zariski-closed-set-axioms]], [[def-principal-distinguished-subset-of-spectrum]], [[lem-spectrum-localization-open-immersion]], [[thm-proper-ideal-contained-in-maximal-ideal]], [[cor-nilradical-as-intersection-of-primes]], [[def-axiom-of-choice]])

[F3] Morphisms to affine schemes correspond to maps on global sections, and affine schemes and rings are contravariantly equivalent. ([[thm-morphisms-into-affine-scheme-global-sections]], [[thm-affine-scheme-ring-anti-equivalence]])

[F4] Affine principal-open sections and stalks are localizations; module localization is exact, and a localized element vanishes exactly when some denominator annihilates it. Sheaf surjectivity is detected on stalks. Quotient spectra identify with the vanishing set of the kernel ideal. ([[thm-sections-basic-open-affine-scheme]], [[thm-stalk-structure-sheaf-prime-localization]], [[thm-localisation-of-modules-is-exact]], [[def-localisation-of-a-module]], [[thm-exactness-of-sheaves-stalkwise]], [[thm-prime-spectrum-of-a-quotient-bijection]])

[F5] Sections of a sheaf on an open cover are the equalizer of the restriction maps to pairwise intersections. ([[thm-sheaf-equalizer-condition]])

**AC use:** The prime-ideal and nilradical assertions in F2 detect the unit ideal and nilpotence, and detect a nonzero cokernel by localization. No choice is needed for the finite subcovers.

## Proof

1.1 Write $E=i(Z)=V(J)\subseteq X$. By [F1], $E$ and hence $Z$ are quasi-compact. Choose a finite affine open cover $W_j=\operatorname{Spec}C_j$ of $Z$. Since $Z$ has the subspace topology on $E$, the principal-open basis in [F2] and quasi-compactness supply finitely many labelled functions $f_i\in A$ whose $E\cap D(f_i)$ cover $E$, each lying in one $W_j$. The inverse image of $D(f_i)$ is the principal open defined by $f_i$ in that affine chart, so is affine. Empty covers are allowed. [F1, F2, F3, given, construct]

2.1 The cover implies $V(J+(f_i))=\varnothing$, hence $J+(f_i)=A$ by [F2]: a proper ideal in a nonzero ring would lie in a maximal ideal. For the zero ring the equality is immediate. Thus $1=\sum_i a_if_i+\sum_\ell b_\ell g_\ell$ for finitely many $g_\ell\in J$. On each affine $W_j$, every image of $g_\ell$ lies in all primes, since every point maps into $V(J)$; it is nilpotent by [F2]. Finiteness of the cover supplies a common exponent, so each restriction $g_\ell|_Z$ is nilpotent globally by the sheaf axiom. The finite sum $h=\sum_\ell b_\ell g_\ell|_Z$ is nilpotent by the multinomial expansion. Consequently $\sum_i a_if_i|_Z=1-h$ is a unit, with inverse a finite geometric sum. The $f_i|_Z$ generate the unit ideal. [F2, F3, step 1.1, algebra]

3.1 Put $B=\Gamma(Z,\mathcal O_Z)$ and write $f_i$ also for the pulled-back global sections. The affine opens $U_i=Z_{f_i}$ cover $Z$ by step 1.1. If this list is empty, $Z$ is empty and $B=0$, giving $Z=\operatorname{Spec}0$. Otherwise put $C_i=\Gamma(U_i,\mathcal O_Z)$ and $C_{ij}=\Gamma(U_i\cap U_j,\mathcal O_Z)$. Each intersection is the principal open defined by $f_j$ in the affine $U_i$, so is affine by [F2]. By [F5], $B$ is the kernel of the difference of restriction maps $\prod_iC_i\to\prod_{i,j}C_{ij}$, a map of $B$-modules. Fix $k$. Exact localization in [F4] preserves this kernel, and localization commutes with finite products by taking a common denominator in any finite tuple. Basic-open sections in [F4] identify $(C_i)_{f_k}$ and $(C_{ij})_{f_k}$ with sections on $U_i\cap U_k$ and $U_i\cap U_j\cap U_k$, respectively, respecting restrictions. Their kernel is therefore $\Gamma(U_k,\mathcal O_Z)=C_k$ by [F5], since the $U_i\cap U_k$ cover $U_k$. Thus restriction gives a ring isomorphism $B_{f_k}\cong C_k$: all maps come from restriction and fraction multiplication. By [F3] the identity of $B$ defines a canonical map $j:Z\to\operatorname{Spec}B$. Its inverse image of $D_B(f_k)$ is $U_k$, and on that open its comorphism is precisely this ring isomorphism. The sections $f_i$ generate the unit ideal by step 2.1, so the $D_B(f_i)$ cover $\operatorname{Spec}B$. These local inverse morphisms agree on overlaps because each inverts $j$, and glue to an inverse of $j$. Hence $Z=\operatorname{Spec}B$ in every case. [F2, F3, F4, F5, step 1.1, step 2.1, algebra]

4.1 Let $\varphi:A\to B$ correspond to $i$ by [F3]. For any prime $\mathfrak p\subset A$, sections of $i_*\mathcal O_Z$ on $D(f)$ are $B_{\varphi(f)}$. Taking the colimit over $f\notin\mathfrak p$ identifies its stalk with $(A\setminus\mathfrak p)^{-1}B$. The surjective sheaf map in [F1] therefore gives a surjection $A_{\mathfrak p}\to(A\setminus\mathfrak p)^{-1}B$. Exact localization in [F4] implies $M_{\mathfrak p}=0$ for $M=\operatorname{coker}\varphi$. If $m\in M$ were nonzero, [F2] would give a maximal ideal $\mathfrak p$ containing its proper annihilator. Then $m/1\ne0$ in $M_{\mathfrak p}$: vanishing would require a denominator outside $\mathfrak p$ annihilating $m$, contrary to that containment. Thus $M=0$ and $\varphi$ is onto. For $A=0$, unitality already forces $B=0$. Setting $I=\ker\varphi$ gives $B\cong A/I$ and the required isomorphism over $X$. [F1, F2, F3, F4, step 3.1, algebra]

5.1 Conversely, the spectrum map of $A\twoheadrightarrow A/I$ is a homeomorphism onto $V(I)$ by [F4]: contraction identifies its primes and all their closed vanishing sets. At a prime containing $I$, its direct-image stalk map is the surjection $A_{\mathfrak p}\to(A/I)_{\mathfrak p/I}$; at a prime not containing $I$, the target stalk is zero, since an element of $I$ is inverted. Hence its structure-sheaf map is surjective by [F4], proving it is a closed immersion. The kernel of $A\to\Gamma(Z,\mathcal O_Z)$ recovers $I$ uniquely. Any isomorphism of quotient spectra over $X$ is induced by the unique compatible quotient-ring map, so is unique. In particular $I=A$ gives the empty immersion, also when $A=0$. [F1, F3, F4, step 4.1, algebra] ∎
