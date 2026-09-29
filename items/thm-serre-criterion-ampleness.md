---
id: thm-serre-criterion-ampleness
kind: theorem
title: "Serre global-generation criterion for ampleness"
status: published
origin: pipeline
deps:
  - def-ample-invertible-sheaf
  - def-globally-generated-sheaf
  - def-invertible-sheaf
  - def-ideal-sheaf
  - def-affine-open-subscheme
  - def-coherent-module-scheme
  - def-quasi-compact-and-quasi-separated-scheme
  - def-locally-noetherian-and-noetherian-scheme
  - def-finite-type-finite-presentation-module-sheaf
  - def-axiom-of-choice
  - lem-extend-sections-from-nonvanishing-open
  - lem-section-nonvanishing-affine-intersection
  - lem-ample-stable-positive-power
  - lem-radical-commutes-with-localisation
  - lem-every-zariski-closed-set-has-a-radical-defining-ideal
  - thm-coherent-sheaves-abelian-noetherian-scheme
  - thm-quasi-coherence-check-affine-cover
  - thm-noetherian-ring-has-noetherian-spectrum
  - thm-associated-module-sheaf-exists
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Properties of Schemes, Proposition 28.27.13 (Tag 01Q3)"
      url: https://stacks.math.columbia.edu/tag/01Q3
    - title: "The Stacks Project, Modules, Lemma 17.9.7 (Tag 01BB)"
      url: https://stacks.math.columbia.edu/tag/01BB
    - title: "Ravi Vakil, The Rising Sea, August 2022 draft, Sections 17.4, 17.6"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume the Axiom of Choice as inherited from the sheaf and Proj suppliers
([[def-axiom-of-choice]]). Let $X$ be a Noetherian scheme
([[def-locally-noetherian-and-noetherian-scheme]]) and let $L$ be an invertible
$\mathcal O_X$-module ([[def-invertible-sheaf]]). Then $L$ is ample
([[def-ample-invertible-sheaf]]) if and only if for every coherent
$\mathcal O_X$-module $F$ ([[def-coherent-module-scheme]]) the twist
$F\otimes_{\mathcal O_X}L^{\otimes n}$ is globally generated
([[def-globally-generated-sheaf]]) for all sufficiently large integers $n$;
the bound may depend on $F$. On the locally Noetherian scheme $X$ the coherent
sheaves are exactly the quasi-coherent sheaves of finite type
([[thm-coherent-sheaves-abelian-noetherian-scheme]],
[[def-finite-type-finite-presentation-module-sheaf]]), so the condition may
equivalently be tested on quasi-coherent sheaves of finite type. The empty
scheme and the zero sheaf are allowed: if $X=\varnothing$ then $L$ is ample by
the vacuous definition and the zero sheaf, the only coherent sheaf, is
globally generated.

## Facts & Assumptions

**Given:** A Noetherian scheme $X$, an invertible $\mathcal O_X$-module $L$, and the Axiom of Choice as inherited.

[A1] The Axiom of Choice states that every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

[F1] An invertible $L$ is ample when $X$ is quasi-compact and for every $x\in X$ there are $n\ge1$ and $s\in\Gamma(X,L^n)$ with $x\in X_s$ and $X_s$ affine, where $X_s$ is the nonvanishing locus of $s$; the empty scheme is allowed. ([[def-ample-invertible-sheaf]])

[F2] $F$ is globally generated when its evaluation map $\Gamma(X,F)\otimes_{\mathbb Z}\mathcal O_X\to F$ is surjective, equivalently when for every $x\in X$ the images of the global sections generate the stalk $F_x$ as an $\mathcal O_{X,x}$-module; for an invertible sheaf $M$ this holds as soon as at each point some global section has nonzero value there. ([[def-globally-generated-sheaf]])

[F3] An invertible $\mathcal O_X$-module $M$ is locally free of rank exactly one: $M_x\cong\mathcal O_{X,x}$ for every $x\in X$, and the fibre $\kappa(x)\otimes_{\mathcal O_{X,x}}M_x$ is a one-dimensional $\kappa(x)$-vector space, so the value $s(x)$ of a germ $s_x$ is nonzero exactly when $s_x$ is a unit, i.e. $s_x\notin\mathfrak m_xM_x$. ([[def-invertible-sheaf]])

[F4] Let $X$ be quasi-compact and quasi-separated, $F$ quasi-coherent, $L$ invertible and $s\in\Gamma(X,L^d)$ with $d>0$. Then every section of $F$ over $X_s$ extends after multiplying by a power of $s$: there are $r\ge0$ and $a\in\Gamma(X,F\otimes L^{dr})$ whose image under the canonical map to $\Gamma(X_s,F)$ is the given section. ([[lem-extend-sections-from-nonvanishing-open]])

[F5] A scheme is locally Noetherian if it has an affine open cover by spectra of Noetherian rings, and Noetherian if it is locally Noetherian and quasi-compact; equivalently, a Noetherian scheme has a finite affine open cover by spectra of Noetherian rings. ([[def-locally-noetherian-and-noetherian-scheme]])

[F6] On a locally Noetherian scheme, coherent sheaves are exactly the finite-type quasi-coherent sheaves, and kernels, cokernels and extensions of coherent sheaves are coherent. ([[thm-coherent-sheaves-abelian-noetherian-scheme]])

[F7] An $\mathcal O_X$-module is quasi-coherent if and only if its restriction to every member of one affine open cover is associated to a module; then it is associated on every affine open, with canonical restriction compatibility. ([[thm-quasi-coherence-check-affine-cover]])

[F8] For a commutative ring $R$, a multiplicative subset $S$ and an ideal $I$ one has $S^{-1}\sqrt I=\sqrt{S^{-1}I}$ as ideals of $S^{-1}R$. ([[lem-radical-commutes-with-localisation]])

[F9] Every Zariski-closed subset $Z$ of a spectrum has a unique radical defining ideal $I(Z)=\bigcap_{\mathfrak p\in Z}\mathfrak p$, and $f$ vanishes at every point of $Z$ exactly when $f\in I(Z)$; for the empty family the intersection is the whole ring. ([[lem-every-zariski-closed-set-has-a-radical-defining-ideal]])

[F10] If $U\subseteq X$ is affine open and $s$ is a global section of an invertible sheaf, then $U\cap X_s$ is an affine open subscheme. ([[lem-section-nonvanishing-affine-intersection]])

[F11] $L$ is ample if and only if its $m$-th tensor power $L^m$ is ample, for every $m\ge1$. ([[lem-ample-stable-positive-power]])

[F12] The spectrum of a Noetherian commutative ring is a Noetherian topological space, so every descending chain of closed subsets stabilizes. ([[thm-noetherian-ring-has-noetherian-spectrum]])

[F13] Assume AC [A1]. Every open subset $U$ of a Noetherian topological space $X$ is compact. If an open cover $(P_a)_{a\in A}$ of $U$ had no finite subcover, recursively choose $x_n\in U\setminus(P_{a_1}\cup\cdots\cup P_{a_n})$ and a member $P_{a_{n+1}}$ containing $x_n$. Since $U$ is open in $X$, every $P_a$ is open in $X$, and the finite unions $P_{a_1}\cup\cdots\cup P_{a_n}$ form a strictly ascending chain of open subsets, contradicting Noetherianity.

[F14] A quasi-coherent sheaf is of finite type exactly when $X$ can be covered by affine opens $U=\operatorname{Spec}A$ over which it is generated by finitely many sections, i.e. admits an epimorphism $\mathcal O_U^{\,r}\to F|_U$. ([[def-finite-type-finite-presentation-module-sheaf]])

[F15] A scheme $X$ is quasi-compact when $|X|$ is quasi-compact, and quasi-separated when the intersection of every two affine open subschemes is quasi-compact. ([[def-quasi-compact-and-quasi-separated-scheme]])

[F16] Distinguished-open data of an $A$-module extend uniquely to an associated sheaf whose sections on $D(f)$ are the localizations $M_f$; in particular two $\mathcal O_{\operatorname{Spec}A}$-modules whose sections and restrictions agree on all distinguished opens coincide. ([[thm-associated-module-sheaf-exists]])

[F17] An ideal sheaf on a scheme is a subsheaf $\mathcal I\subseteq\mathcal O_X$ whose sections over every open form an ideal, compatibly with restriction. ([[def-ideal-sheaf]])

## Proof

**Proof technique:** direct: show that ampleness gives global generation of all large twists of any finite-type module by extending finitely many generators over an affine nonvanishing cover, and conversely construct the ideal sheaf of the complement of an affine open, apply global generation to it, and read off an affine nonvanishing locus through every point.

1.1 Assume first that $L$ is ample. By [F1] every point $x$ has an $n_x\ge1$ and $s_x\in\Gamma(X,L^{n_x})$ with $x\in X_{s_x}$ and $X_{s_x}$ affine; since $X$ is quasi-compact by [F5], finitely many points $x_1,\dots,x_k$ have $X=\bigcup_iX_{s_i}$, where $s_i=s_{x_i}$ and $X_{s_i}$ is affine. [F1, F5]

1.2 The underlying space of $X$ is Noetherian: by [F5] choose a finite affine open cover $X=U_1\cup\dots\cup U_r$ with $U_i=\operatorname{Spec}A_i$ and $A_i$ Noetherian; each $U_i$ is a Noetherian topological space by [F12], and a descending chain of closed subsets of $X$ has traces in the finitely many $U_i$ which stabilize by some index, whence the chain itself stabilizes because a closed subset of $X$ is determined by its traces on a finite open cover. Consequently $X$ is quasi-compact, and every open subset of $X$ is compact by [F13], so in particular the intersection of two affine opens is quasi-compact and $X$ is quasi-separated in the sense of [F15]. [A1, F5, F12, F13, F15, algebra]

1.3 For an invertible $\mathcal O_X$-module $M$, the sheaf $M$ is globally generated if and only if for every $x\in X$ some global section $s\in\Gamma(X,M)$ has $s(x)\neq0$: by [F2] global generation means that the images of the global sections generate $M_x$, and by [F3] $M_x$ is free of rank one over $\mathcal O_{X,x}$, so a family generates $M_x$ exactly when one member is a unit; a germ in $M_x\cong\mathcal O_{X,x}$ is a unit exactly when its value in the fibre is nonzero. [F2, F3, algebra]

1.4 Conversely, assume that for every coherent sheaf there is a bound beyond which all its twists by $L$ are globally generated. Let $x\in X$ and let $U$ be an affine open subscheme containing $x$; put $Z=X\setminus U$, a closed subset of $X$. Define $\mathcal I\subseteq\mathcal O_X$ by $\Gamma(W,\mathcal I)=\{f\in\Gamma(W,\mathcal O_X): f_z\in\mathfrak m_z\mathcal O_{X,z}\ \text{for every } z\in Z\cap W\}$; this is an ideal sheaf [F17], its sections vanish at every point of $Z$, and its restriction to $U$ is the unit ideal: for an affine chart $V\subseteq U$ one has $Z\cap V=\varnothing$ and the defining condition is vacuous, so $\Gamma(V,\mathcal I)=\Gamma(V,\mathcal O_X)$. [F17, algebra]

1.5 Choose the finite affine open cover $X=U_1\cup\dots\cup U_r$ with $U_i=\operatorname{Spec}A_i$ and $A_i$ Noetherian from [F5]. For each $i$ the ideal $\Gamma(U_i,\mathcal I)=\{f\in A_i: f\in\mathfrak p\ \text{for every }\mathfrak p\in Z\cap U_i\}$ is, by [F9], the radical defining ideal of the closed subset $Z\cap U_i$ (with value $A_i$ when $Z\cap U_i=\varnothing$), hence is finitely generated because $A_i$ is Noetherian. For $D(f)\subseteq U_i$, both $\Gamma(D(f),\mathcal I)$ and $(\Gamma(U_i,\mathcal I))_f$ are the radical defining ideal of $Z\cap D(f)$ in $A_f$: the first by definition, the second by [F8]. Thus $\mathcal I|_{U_i}$ is the sheaf associated to the module $\Gamma(U_i,\mathcal I)$ by [F16], so $\mathcal I$ is quasi-coherent by the affine-cover criterion [F7] and of finite type because a finite generating set of each $\Gamma(U_i,\mathcal I)$ generates $\mathcal I$ on $U_i$; since $X$ is locally Noetherian, [F6] makes $\mathcal I$ coherent. [F5, F6, F7, F8, F9, F16, algebra]

2.1 With $d=d_1\cdots d_k$, where $d_i=\deg s_i$, each power $s_i^{d/d_i}\in\Gamma(X,L^d)$ has $X_{s_i^{d/d_i}}=X_{s_i}$; these loci cover $X$, so step 1.3 applies and $L^d$ is globally generated. [step 1.1, step 1.3, algebra]

2.2 Let $M$ be an ample invertible sheaf on $X$ and let $G$ be a quasi-coherent $\mathcal O_X$-module. For $m\ge1$ let $G_m\subseteq G$ be the image of the canonical map $\Gamma(X,G\otimes M^m)\otimes_{\mathbb Z}M^{-m}\to G$. Then $G=\sum_{m\ge1}G_m$. Indeed, applying step 1.1 to $M$ gives finitely many $t_j\in\Gamma(X,M^{e_j})$, $e_j\ge1$, with $X=\bigcup_jX_{t_j}$ and each $X_{t_j}$ affine. For a section $u\in\Gamma(X_{t_j},G)$ the extension lemma [F4] applied on the quasi-compact quasi-separated scheme $X$ of step 1.2 to $s=t_j$ yields $r\ge0$ and $a\in\Gamma(X,G\otimes M^{e_jr})$ whose image after division by $t_j^r$ is $u$. If $r\ge1$, this places $u$ in $G_{e_jr}|_{X_{t_j}}$. If $r=0$, multiply $a$ by $t_j$ to obtain a global section of $G\otimes M^{e_j}$ whose image after division by $t_j$ is still $u$, placing $u$ in $G_{e_j}|_{X_{t_j}}$. Thus every local section of $G$ lies locally in $\sum_{m\ge1}G_m$, and a subsheaf whose sections surject onto those of $G$ over a cover equals $G$. [F4, step 1.1, step 1.2, algebra]

2.3 Let $n\ge\max(n_0(\mathcal I),1)$ be such that $\mathcal I\otimes L^n$ is globally generated. By step 1.4 the stalk $\mathcal I_x$ is $\mathcal O_{X,x}$, so $(\mathcal I\otimes L^n)_x\cong(L^n)_x$ is free of rank one [F3]; global generation produces a global section $t$ whose germ at $x$ is not in $\mathfrak m_x(\mathcal I\otimes L^n)_x$, and viewing $t$ as a section $s\in\Gamma(X,L^n)$ through this identification, $s(x)\neq0$. For $z\in Z$ the stalk of $\mathcal I$ at $z$ is contained in $\mathfrak m_z$ by the description in step 1.5 and [F9], so $s$ vanishes at every point of $Z$ and therefore $X_s\subseteq X\setminus Z=U$. As $U$ is affine, $X_s=U\cap X_s$ is affine by [F10]. [F3, F9, F10, step 1.4, step 1.5, algebra]

3.1 For every $j\ge0$ and every $x\in X$ there are $m\ge1$ and $a\in\Gamma(X,L^{j+dm})$ with $a(x)\neq0$. Indeed, $L^d$ is ample by [F11], so step 2.2 applied to $M=L^d$ and $G=L^j$ gives $L^j=\sum_mG_m$; the stalk $(L^j)_x$ is free of rank one by [F3], so if every global section of every $L^{j+dm}$ vanished at $x$, then every summand $G_m$ would vanish at $x$ — its value at $x$ is spanned by products of values $g(x)a(x)$ — contradicting that the sum equals $L^j$. [F3, F11, step 2.2, algebra]

3.2 Let $F$ be quasi-coherent of finite type, and define $F_m$ as in step 2.2 for $M=L$; put $J_N=\sum_{m\le N}F_m$. Then $F=\sum_mF_m=\bigcup_NJ_N$, and there is $N$ with $F=J_N$. To see this, use [F14] and quasi-compactness of $X$ to choose a finite cover of $X$ by opens $V_i$ on which $F$ is generated by finitely many sections $g_{il}\in F(V_i)$; since $(J_N)_x$ is increasing in $N$ with union $F_x$, each germ $(g_{il})_x$ lies in some $(J_{N_{il}(x)})_x$, and because only finitely many pairs occur at $x$, a single $N(x)$ works. A germ $(g_{il})_x\in(J_{N(x)})_x$ means that $g_{il}$ lies in $J_{N(x)}$ over some open neighbourhood of $x$; over such a neighbourhood contained in all relevant $V_i$ the sections $g_{il}$ lie in $J_{N(x)}$ and generate $F$, so $J_{N(x)}=F$ over it. These neighbourhoods cover the quasi-compact space $X$, so finitely many suffice and $N$ is their maximum. [F5, F14, step 2.2, algebra]

4.1 Fix $j\ge0$. By step 3.1 the loci $X_a$, for $a\in\Gamma(X,L^{j+dm})$, $m\ge1$, cover $X$; quasi-compactness of $X$ [F5] gives finitely many $a_1,\dots,a_r$ with degrees $j+dm_1,\dots,j+dm_r$ such that $X=\bigcup_lX_{a_l}$. Put $n_j=\max_lm_l$. Then $L^{j+dn_j}$ is globally generated: at any point $x$ choose $l$ with $a_l(x)\neq0$ and, by step 2.1 and step 1.3, a section $u\in\Gamma(X,L^d)$ with $u(x)\neq0$; then $a_l\otimes u^{n_j-m_l}\in\Gamma(X,L^{j+dn_j})$ has nonzero value at $x$, so step 1.3 applies. [F5, step 1.3, step 2.1, step 3.1, algebra]

5.1 Put $n_0(L)=d\cdot\max_{0\le j<d}n_j+(d-1)$. For every $n\ge n_0(L)$ the sheaf $L^n$ is globally generated: write $n=j+dn'$ with $0\le j<d$; then $n'\ge\max_in_i\ge n_j$ and $L^n=L^{j+dn_j}\otimes(L^d)^{n'-n_j}$ is a tensor product of two globally generated invertible sheaves, which is globally generated because the tensor product of sections nonzero at a point is nonzero at that point, so step 1.3 applies. [step 1.3, step 2.1, step 4.1, algebra]

6.1 For $m\ge N+n_0(L)$ the sheaf $F\otimes L^m$ is globally generated: by step 3.2 and right exactness of tensoring with the invertible sheaf $L^m$, one has $F\otimes L^m=\sum_{m'\le N}(F_{m'}\otimes L^m)$; each summand is isomorphic to $(F_{m'}\otimes L^{m'})\otimes L^{m-m'}$, where $F_{m'}\otimes L^{m'}$ is globally generated by construction of $F_{m'}$ as the image of an evaluation map, and $L^{m-m'}$ is globally generated by step 5.1 because $m-m'\ge n_0(L)$. A tensor product of globally generated sheaves is globally generated, and a finite sum of globally generated subsheaves is globally generated because the evaluation map of the ambient sheaf maps onto each summand. [F2, step 5.1, step 3.2, algebra]

7.1 If $L$ is ample, then every coherent $F$ is quasi-coherent of finite type by [F6], so steps 5.1 and 6.1 provide a bound, depending on $F$, beyond which all twists $F\otimes L^n$ are globally generated. This proves the forward implication. [F6, step 5.1, step 6.1]

8.1 Steps 1.4, 1.5 and 2.3 show that the global-generation hypothesis provides, for every $x\in X$, an $n\ge1$ and $s\in\Gamma(X,L^n)$ with $x\in X_s$ and $X_s$ affine; since $X$ is quasi-compact by [F5], the definition [F1] makes $L$ ample. Together with step 7.1 this proves both implications. If $X=\varnothing$, then $L$ is ample by [F1] vacuously, and the zero sheaf is globally generated, so the empty case contributes no exception. The recursive open-cover selection in [F13] uses [A1]; the other uses of choice are inherited from the cited sheaf, Proj and closed-subset interfaces, and the proof selects nothing beyond the choices recorded there. [A1, F1, F5, F13, step 1.4, step 1.5, step 2.3, step 7.1, cases: empty]
\qed
