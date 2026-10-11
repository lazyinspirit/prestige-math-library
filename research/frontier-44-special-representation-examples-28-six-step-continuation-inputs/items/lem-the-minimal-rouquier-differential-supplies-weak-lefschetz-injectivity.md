---
id: lem-the-minimal-rouquier-differential-supplies-weak-lefschetz-injectivity
kind: lemma
title: "The minimal Rouquier differential supplies the injectivity input of the weak-Lefschetz substitute"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 7
deps: [def-minimal-complexes-and-perverse-truncations-in-the-type-a-soergel-category, thm-positive-rouquier-complexes-are-delta-split, thm-minimal-positive-rouquier-complexes-are-linear-under-the-lower-soergel-induction, lem-the-lefschetz-operator-factors-through-deleted-bott-samelsons, def-positive-and-negative-rouquier-generator-complexes, def-rouquier-complex-of-a-braid-word, thm-rouquier-complex-is-well-defined-up-to-canonical-homotopy-equivalence, lem-type-a-soergel-generators-are-finite-free-on-both-sides, def-type-a-standard-graph-bimodules-support-filtrations-and-character, lem-radical-minimal-complexes-and-perverse-filtrations-in-the-soergel-category, thm-homological-gaussian-elimination-splits-off-a-contractible-two-term-complex]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Elias-Williamson, The Hodge theory of Soergel bimodules (arXiv:1212.0791v2, final version; Ann. of Math. 180 (2014) 1089-1136)"
      url: "https://arxiv.org/pdf/1212.0791v2"
      locator: "Lemma 6.4 and its proof (the right-module retraction of F_x onto R(-ell(x))), and its use in the proofs of Theorems 6.20 and 6.21: 'phi is injective in degrees <= ell(x) (by Lemma 6.4)', display (6.8) and Section 6.8"
    - title: "Riche, La theorie de Hodge des bimodules de Soergel (d'apres Soergel et Elias-Williamson), Seminaire Bourbaki no. 1139 (arXiv:1711.02464, Octobre 2017)"
      url: "https://arxiv.org/pdf/1711.02464"
      locator: "Section 2.6 (l'injectivite de la differentielle d, 'd est injectif en degres <= n') and the proof of Proposition 2.11"
verification:
  precheck: pass
---

## Facts & Assumptions

**Given:** A symmetric group $S_n$, the real type-$A$ Soergel category with its balanced tensor products, the positive Rouquier generator complexes $F_s=[B_s^R\xrightarrow{\ \varepsilon_s\ }S(1)]$ and a minimal Rouquier complex $F_x$ of a reduced expression of $x$ ([[def-positive-and-negative-rouquier-generator-complexes]], [[def-rouquier-complex-of-a-braid-word]], [[def-minimal-complexes-and-perverse-truncations-in-the-type-a-soergel-category]]); the right action of $S$ on every bimodule and the right reduction $\overline{C}:=C\otimes_S\mathbb R$ of a complex of right $S$-modules; and the right basis $(c_{\mathrm{id}},c_s)$ of $B_s^R$ with $c_{\mathrm{id}}=1\otimes1$ of degree $-1$, $c_s=(\alpha_s\otimes1+1\otimes\alpha_s)/2$ of degree $+1$, $\varepsilon_s(c_{\mathrm{id}})=1$, $\varepsilon_s(c_s)=\alpha_s$ and $c_s^2=c_s\alpha_s$ ([[lem-type-a-soergel-generators-are-finite-free-on-both-sides]]).

[F1] The map $\varepsilon_s$ is right-$S$-linear of degree zero and surjective, and $\sigma:S(1)\to B_s^R$, $\sigma(r)=c_{\mathrm{id}}\cdot r$, is a right-$S$-linear section with $\varepsilon_s\sigma=\mathrm{id}$; the two-term complex $F_s$ is therefore the direct sum (as a complex of right $S$-modules) of the contractible two-term complex on the image of $\sigma$ and of the kernel complex $\ker(\varepsilon_s)$ concentrated in degree $0$.

[F2] Under $\mathrm S(\le x)$ the theorem [[thm-minimal-positive-rouquier-complexes-are-linear-under-the-lower-soergel-induction]] gives $^0F_x=B_x^R$ and $^iF_x=\bigoplus_{z<x}B_z^R(i)^{m_{z,i}}$ for $i\ge1$; moreover $F_x\cong F_{s_1}\cdots F_{s_m}$ and $F_{\bar x}\cong F_xF_s$ in $K^b$ for the reduced word $\bar x=xs$, and the minimal subcomplex is homotopy equivalent to the tensor product it refines ([[thm-rouquier-complex-is-well-defined-up-to-canonical-homotopy-equivalence]], [[def-minimal-complexes-and-perverse-truncations-in-the-type-a-soergel-category]]).

[F3] All complexes occurring are complexes of finite free right $S$-modules, so tensor products over $S$ are exact and a tensor product of homotopy equivalences of such complexes is a homotopy equivalence; reduction $-otimes_S\mathbb R$ is an additive functor and carries homotopy equivalences to homotopy equivalences; homological Gaussian elimination cancels a contractible two-term complex with an invertible differential block and leaves a homotopy-equivalent complex with the two modules removed ([[thm-homological-gaussian-elimination-splits-off-a-contractible-two-term-complex]], [[lem-radical-minimal-complexes-and-perverse-filtrations-in-the-soergel-category]]).

[F4] The deleted-word factorization of [[lem-the-lefschetz-operator-factors-through-deleted-bott-samelsons]] provides the degree-two maps $\chi_i\varphi_i$ whose sum is left multiplication by $\rho$ up to a right multiple, and it is the source of both the operator commutation and the form compatibility used in the hard-Lefschetz theorem; the injectivity proved here is a separate input and neither the commutation nor the compatibility is a consequence of it.

## Statement

(1) **Right-module retraction.** For every $x$ and every reduced expression of $x$, the minimal Rouquier complex $F_x$ is homotopy equivalent, as a complex of graded right $S$-modules, to the single right module $S(-\ell(x))$ concentrated in cohomological degree $0$. Consequently the right reduction has $H^0(\overline{F_x})\cong\mathbb R(-\ell(x))$, one copy of $\mathbb R$ in internal degree $\ell(x)$, and $H^j(\overline{F_x})=0$ for $j\ne0$.

(2) **Injectivity criterion.** Let $C$ be a bounded below complex of graded free right $S$-modules with $C^{-1}=0$ whose right reduction satisfies $H^{-1}(\overline C)=0$ and whose $H^0(\overline C)$ is concentrated in a single internal degree $d$. Then the reduced first differential $\overline{d^0}:\overline{C^0}\to\overline{C^1}$ is injective in every internal degree $\ne d$; in particular it is injective in internal degrees $\le d-1$. The conclusion is unchanged if $C$ is replaced by a homotopy-equivalent complex $C'$ with $C'^{-1}=0$ obtained by cancelling contractible two-term summands whose source lies in a positive cohomological degree, in particular the contractible shifted-descent summands occurring in the zero-parameter hard-Lefschetz theorem.

(3) **Application to the ascent differential.** Let $xs>x$ and assume $\mathrm S(\le x)$. Then the first differential of the complex $F_xF_s$, whose source is $B_x^RB_s^R$ and whose target is $^1F_xB_s\oplus B_x^R(1)$, has reduced form injective in internal degrees $\le\ell(x)$. The complex $F_xF_s$ need not itself be minimal, and no minimality is used in the conclusion.

(4) **Separation of inputs.** The form compatibility $\langle b,L_\zeta b'\rangle=\langle\varphi b,\varphi b'\rangle_\gamma$ and the operator commutation $\varphi(L_\zeta b)=L\varphi(b)$ used in the hard-Lefschetz proof are independent additional inputs supplied by the deleted-word factorization and the induced forms; in the zero-parameter descent case the form on the shifted descent piece vanishes and the hard-Lefschetz argument must separate the kernel of $d_3$ rather than apply the criterion of (2) to the whole target.

## Proof
**Proof technique:** direct; the split rank-one retraction, its tensor product over a reduced word, and the kernel-of-the-first-differential computation on reduced right-module complexes.

1.1 **The rank-one retraction.** In the right basis $(c_{\mathrm{id}},c_s)$ of $B_s^R$ we have $\varepsilon_s(a\,c_{\mathrm{id}}+b\,c_s)=a+b\alpha_s$ for $a,b\in S$. The section $\sigma(r)=c_{\mathrm{id}}\cdot r$ satisfies $\varepsilon_s\sigma(r)=r$, so $\varepsilon_s$ is split surjective and $B_s^R=\sigma(S(1))\oplus\ker(\varepsilon_s)$ as right $S$-modules; the subcomplex $\sigma(S(1))\xrightarrow{\ \cong\ }S(1)$ of $F_s$ is contractible, and $\ker(\varepsilon_s)$ is a direct summand of the complex $F_s$ concentrated in degree $0$. The kernel is $\{(-\alpha_sb)\,c_{\mathrm{id}}+b\,c_s\}=\{b\,(c_s-\alpha_s\,c_{\mathrm{id}})\}$, so it is free of rank one as a right $S$-module with generator $c_s-\alpha_s\,c_{\mathrm{id}}=(1\otimes\alpha_s-\alpha_s\otimes1)/2$ of internal degree $1$; hence $\ker(\varepsilon_s)\cong S(-1)$ as a graded right $S$-module and $F_s\simeq S(-1)$ in the homotopy category of complexes of graded right $S$-modules. [given, F1, F3]

1.2 **The injectivity criterion.** Let $C$ be as in (2) and let $c\in\overline{C^0}$ be homogeneous of internal degree $D$ with $\overline{d^0}(c)=0$. Then $c$ is a cocycle, so it represents a class $[c]\in H^0(\overline C)$; since $H^{-1}(\overline C)=0$ and $C^{-1}=0$, the zeroth cohomology is the cokernel of no incoming map and $[c]$ vanishes if and only if $c$ lies in the image of $\overline{d^{-1}}$, which is zero because $C^{-1}=0$. Hence $[c]\ne0$ forces $D$ to be the single internal degree $d$ in which $H^0(\overline C)$ is concentrated; therefore a nonzero kernel element can occur only in degree $d$, and the map is injective in every other degree, in particular in degrees $\le d-1$. If $C'$ is homotopy equivalent to $C$ with $C'^{-1}=0$ and is obtained by cancelling contractible two-term summands whose source lies in positive cohomological degree, then $C'^0=C^0$ for the cancellation in degrees $\ge1$, the reductions $\overline{C'}$ and $\overline C$ are homotopy equivalent by [F3], so $H^{-1}(\overline{C'})=0$ and $H^0(\overline{C'})$ is concentrated in degree $d$, and the same argument applies to $C'$. This proves (2). [given, F3]

2.1 **The retraction for a reduced word.** Let $\underline x=s_1\cdots s_m$ be reduced. By step 1.1 each factor $F_{s_i}$ is homotopy equivalent to $S(-1)$ over right $S$-modules, and all terms are free right $S$-modules, so [F3] shows that the tensor product $F_{s_1}\cdots F_{s_m}$ is homotopy equivalent to $S(-1)\otimes_S\cdots\otimes_SS(-1)=S(-m)$ in degree $0$. By [F2] the minimal complex $F_x$ is a direct summand of the tensor product whose inclusion is a homotopy equivalence, hence $F_x\simeq S(-\ell(x))$ as a complex of graded right $S$-modules, concentrated in cohomological degree $0$; this proves (1) (the reduction statement follows by applying $-otimes_S\mathbb R$ and using exactness of the tensor product). [step 1.1, F2, F3]

3.1 **Application to $F_xF_s$.** Let $xs>x$ and assume $\mathrm S(\le x)$. By [F2] the concatenated word is reduced for $xs$, so $F_xF_s\cong F_{xs}$ in $K^b$, and by step 2.1 applied to $xs$ the complex $F_{xs}$ is homotopy equivalent over right $S$-modules to $S(-\ell(xs))=S(-\ell(x)-1)$ concentrated in cohomological degree $0$. Hence $C:=F_xF_s$ satisfies the hypotheses of (2) with $d=\ell(x)+1$: it is bounded below, $C^{-1}=0$, and its reduction has $H^{-1}=0$ with $H^0$ one copy of $\mathbb R$ in internal degree $\ell(x)+1$. By step 1.2 the reduced first differential $\overline{d^0}$ is injective in internal degrees $\le\ell(x)$, which is (3); note that $F_xF_s$ has the terms $C^0=B_x^RB_s^R$ and $C^1={}^1F_xB_s\oplus B_x^R(1)$ by [F2], and that no minimality of $F_xF_s$ was used, only the homotopy equivalence with $F_{xs}$. [step 2.1, step 1.2, F2]

4.1 **Stability under cancellation and the descent caveat.** If the zero-parameter hard-Lefschetz proof cancels a contractible summand of $F_xF_s$ whose source lies in cohomological degree $\ge1$ (the shifted descent piece), the surviving complex $C'$ has $C'^{-1}=0$, is homotopy equivalent to $C$ and has $\overline{C'}$ homotopy equivalent to $\overline C$, so step 1.2 applies and the reduced first differential of $C'$ is still injective in internal degrees $\le\ell(x)$; this is the "splitting off contractible summands with zero degree-zero source" clause of (2). On the other hand the form identity $\langle b,L_\zeta b'\rangle=\langle\varphi(b),\varphi(b')\rangle_\gamma$ and the commutation $\varphi(L_\zeta b)=L\varphi(b)$ do not follow from the right-module retraction: they are identities between maps of bimodules involving the induced forms and the deleted-word factorization, and they are used as inputs in the hard-Lefschetz theorem by [F4]; for $\zeta=0$ on a descent summand the Lefschetz form of the shifted piece is identically zero, so the theorem restricts the weak-Lefschetz substitute to the kernel of $d_3$ instead of the whole target. This completes the proof of (3) and (4). [step 3.1, F4] ∎

## Remarks

- The right-module retraction is the only place where the two-term shape of $F_s$ and the freeness of all terms are used; it is deliberately kept separate from the bimodule structure, because the retraction is not a bimodule homotopy equivalence and does not compute the bimodule cohomology of $F_x$.
- In the application the injectivity is required only below the internal degree $\ell(x)+1$ of the surviving generator, which is exactly the degree in which the reduced cohomology of $F_{xs}$ lives; the element of that degree may survive in the kernel and is handled by the separate form and commutation inputs.
