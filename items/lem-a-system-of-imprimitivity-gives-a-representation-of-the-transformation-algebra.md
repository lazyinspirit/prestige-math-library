---
id: lem-a-system-of-imprimitivity-gives-a-representation-of-the-transformation-algebra
kind: lemma
title: A system of imprimitivity integrates to a nondegenerate representation of the transformation algebra
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 1
proof_strategy: direct
deps:
  - def-system-of-imprimitivity
  - def-transformation-algebra-of-a-g-space
  - thm-bounded-borel-pvm-integral
  - lem-scalar-and-complex-measures-from-a-pvm
  - def-left-haar-integral-and-left-haar-measure
  - def-modular-function-of-a-locally-compact-group
  - thm-l1-group-algebras-have-a-contractively-bounded-approximate-identity
  - lem-haar-translations-are-strongly-continuous-on-lp-one-and-two
  - def-compactly-supported-convolution-on-a-group
  - def-complex-haar-lp-spaces-and-compactly-supported-functions
  - def-compact-support-c-c-and-c-zero-on-an-lch-space
  - thm-monotone-convergence-for-the-integral
  - def-axiom-of-choice
  - thm-bochner-integrability-criterion
  - thm-bounded-linear-maps-commute-with-bochner-integration
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - lem-haar-change-of-variables-under-inversion
  - lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set
  - lem-second-countable-lch-spaces-are-standard-borel
  - thm-pvm-integral-is-a-star-homomorphism
  - lem-bochner-integral-norm-inequality
  - lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "G. W. Mackey, Imprimitivity for Representations of Locally Compact Groups I, PNAS 35 (1949) 537-545 (Internet Archive capture of the PubMed Central scan)"
      url: "https://web.archive.org/web/2020id_/https://pmc.ncbi.nlm.nih.gov/articles/PMC1063076/pdf/pnas01546-0045.pdf"
    - title: "V. S. Sunder, Notes on the Imprimitivity Theorem (ISIBangalore/IMSc lecture notes, 22 pp.)"
      url: "https://www.imsc.res.in/~sunder/imp.pdf"
---

## Statement

Assume AC. Let $(U,P)$ be a system of imprimitivity on a second-countable
locally compact Hausdorff $G$-space $X$ with continuous action, as required by
the transformation-algebra definition. For $f\in C_c(G\times X)$ define
$\pi(f)$ by the scalar pairing
$$\langle\pi(f)\xi,\eta\rangle=\int_G\int_X f(g,x)\,dE_{U_g\xi,\eta}(x)\,dg\qquad(\xi,\eta\in H),$$
where $E_{\xi,\eta}(B)=\langle P(B)\xi,\eta\rangle$. Then $\pi(f)$ is a
bounded operator,
$\|\pi(f)\|\le\int_G\|f(g,\cdot)\|_\infty\,dg$, the map $f\mapsto\pi(f)$ is a
$\ast$-representation of the transformation algebra $C_c(G\times X)$, and it
is nondegenerate: the closed span of $\pi(C_c(G\times X))H$ is $H$.

## Facts & Assumptions

**Given:** AC, the system of imprimitivity $(U,P)$ on the second-countable LCH $G$-space $X$ with continuous action, and $f,f_1,f_2,f_3\in C_c(G\times X)$.

[F1] For a bounded Borel $b:X\to\mathbb C$ and $\xi,\eta\in H$ the operator $M_b=\int b\,dP$ satisfies $\langle M_b\xi,\eta\rangle=\int b\,dE_{\xi,\eta}$, $M_{b_1b_2}=M_{b_1}M_{b_2}$, $M_{\bar b}=M_b^*$, $\|M_b\|\le\|b\|_\infty$ and $M_1=I$; $E_{\xi,\eta}$ is a finite complex measure with $|E_{\xi,\eta}|(X)\le\|\xi\|\|\eta\|$; if bounded Borel $b_n\to b$ pointwise $P$-a.e. and $\sup_n\|b_n\|_\infty<\infty$ then $M_{b_n}\to M_b$ strongly ([[thm-bounded-borel-pvm-integral]], [[lem-scalar-and-complex-measures-from-a-pvm]], [[thm-pvm-integral-is-a-star-homomorphism]]).

[F2] $(U,P)$ is a strongly continuous unitary representation together with a PVM satisfying $U_gP(E)U_g^{-1}=P(gE)$ for all $g$ and Borel $E$; equivalently $U_gM_bU_g^{-1}=M_{b\circ g^{-1}}$ for every bounded Borel $b$, i.e. $U_gM_b=M_{b\circ g^{-1}}U_g$ ([[def-system-of-imprimitivity]]).

[F3] The transformation algebra has product $(f_1\ast f_2)(g,x)=\int_Gf_1(h,x)f_2(h^{-1}g,h^{-1}x)\,dh$ and involution $f^*(g,x)=\Delta_G(g)^{-1}\overline{f(g^{-1},g^{-1}x)}$ ([[def-transformation-algebra-of-a-g-space]], [[def-modular-function-of-a-locally-compact-group]], [[def-compactly-supported-convolution-on-a-group]]).

[F4] The Haar integral is left invariant and finite on compacta, and $\int_Gw(x^{-1})\,dx=\int_G\Delta_G(x^{-1})w(x)\,dx$ for nonnegative Borel $w$ ([[def-left-haar-integral-and-left-haar-measure]], [[lem-haar-change-of-variables-under-inversion]], [[lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets]]).

[F5] A continuous function with compact support is uniformly continuous on compacta: for $K_G,K_X$ compact there is for each $\varepsilon>0$ a neighbourhood of every $(g_0,x_0)$ on which $|f-f(g_0,x_0)|<\varepsilon$; consequently $g\mapsto f(g,\cdot)$ is continuous in the supremum norm on a neighbourhood of each $g_0$, with supports in a fixed compact subset of $X$ and vanishing outside the compact projection of $\operatorname{supp}f$ ([[def-compact-support-c-c-and-c-zero-on-an-lch-space]]).

[F6] Bochner calculus in the Hilbert space $H$: a strongly measurable $H$-valued function with finite integral of the norm is Bochner integrable, $\|\int F\|\le\int\|F\|$, and bounded linear maps commute with $\int$ ([[thm-bochner-integrability-criterion]], [[lem-bochner-integral-norm-inequality]], [[thm-bounded-linear-maps-commute-with-bochner-integration]]). Scalar iterated integrals of bounded integrable kernels agree ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[F7] There is a contractively bounded approximate identity $e_U\in C_c(G)$, $e_U\ge0$, $\operatorname{supp}e_U\subseteq U$, $\|e_U\|_1=1$, directed by identity neighbourhoods of $G$, with $e_U\ast f\to f$ in $L^1$ ([[thm-l1-group-algebras-have-a-contractively-bounded-approximate-identity]]).

[F8] $X$ is second-countable LCH, so it is the union of an increasing sequence of compact sets $K_n$ (replace a countable compact cover by its successive finite unions) and for each $n$ there is $b_n\in C_c(X)$ with $0\le b_n\le1$ and $b_n=1$ on $K_n$ ([[lem-second-countable-lch-spaces-are-standard-borel]] for the Polish/compact-exhaustion structure, [[lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set]]).

## Proof

**Proof technique:** direct.

**Given:** AC, the system $(U,P)$ and a test function $f\in C_c(G\times X)$.

1.1 For fixed $g$ put $M_{f(g,\cdot)}=\int_Xf(g,\cdot)\,dP$; by [F1] this is a bounded operator and $\|M_{f(g,\cdot)}\|\le\|f(g,\cdot)\|_\infty$. The map $g\mapsto M_{f(g,\cdot)}$ is norm continuous: if $K_G$ is the compact group projection of $\operatorname{supp}f$, then for $g,g_0\in K_G$ and $\varepsilon>0$ uniform continuity of $f$ on the compact set $K_G\times(\text{compact }x\text{-support})$ gives $|f(g,x)-f(g_0,x)|\le\varepsilon$ for all $x$ once $g$ is close to $g_0$, whence $\|M_{f(g,\cdot)}-M_{f(g_0,\cdot)}\|\le\|f(g,\cdot)-f(g_0,\cdot)\|_\infty\le\varepsilon$; and $M_{f(g,\cdot)}=0$ for $g\notin K_G$. Consequently $g\mapsto M_{f(g,\cdot)}U_g\xi$ is strongly continuous for every $\xi\in H$ (product of a norm-continuous and a strongly continuous factor) and supported in the compact set $K_G$. [F1, F2, F5]

1.2 Covariance in operator form: conjugating $M_b=\int b\,dP$ by the unitary $U_h$ and using $U_hP(E)U_h^{-1}=P(hE)$ gives $U_hM_bU_h^{-1}=\int b(h^{-1}x)\,dP(x)=M_{b\circ h^{-1}}$, that is $U_hM_b=M_{b\circ h^{-1}}U_h$ for every bounded Borel $b$ and $h\in G$. [F2]

1.3 Nondegeneracy, first factor: for every $\xi\in H$, $\|U(e_U)\xi-\xi\|\to0$ along the approximate identity of [F7], where $U(a):=\int_Ga(g)U_g\,dg$ is the Bochner integral in $H$; indeed $\|U(e_U)\xi-\xi\|\le\int_Ge_U(g)\|U_g\xi-\xi\|\,dg$ and, given $\varepsilon>0$, strong continuity gives an identity neighbourhood $V$ with $\|U_g\xi-\xi\|<\varepsilon$ for $g\in V$, while for $U\subseteq V$ the support condition and $\|e_U\|_1=1$ make the last integral at most $\varepsilon$. [F6, F7]

2.1 Define $\pi(f)\xi:=\int_GM_{f(g,\cdot)}U_g\xi\,dg$ as a Bochner integral: strong measurability follows from [step 1.1], and $\int_G\|M_{f(g,\cdot)}U_g\xi\|\,dg\le\|f\|_{1,\infty}\|\xi\|$ with $C(f):=\int_G\|f(g,\cdot)\|_\infty\,dg<\infty$ because the integrand vanishes off $K_G$ and is bounded there by $\|f\|_\infty$ on a compact set of finite Haar measure. Hence $\pi(f)$ is a well-defined bounded operator with $\|\pi(f)\xi\|\le C(f)\|\xi\|$ for every $\xi$, so $\|\pi(f)\|\le C(f)$. Pairing with $\eta$ and commuting the bounded functional $\langle\cdot,\eta\rangle$ through the Bochner integral gives exactly the displayed identity $\langle\pi(f)\xi,\eta\rangle=\int_G\langle M_{f(g,\cdot)}U_g\xi,\eta\rangle\,dg=\int_G\int_Xf(g,x)\,dE_{U_g\xi,\eta}(x)\,dg$. The map $f\mapsto\pi(f)$ is complex-linear because the integrand is bilinear in $(f,\xi)$ and the Bochner integral is linear. [F1, F6, step 1.1]

2.2 Nondegeneracy, second factor: $M_{b_n}\to I$ strongly for the sequence of [F8], by the pointwise dominated convergence of [F1], since $b_n\to1$ pointwise on $X$ and $0\le b_n\le1$. For the product function $(g,x)\mapsto e_U(g)b_n(x)$ one has $\pi(e_U\otimes b_n)=M_{b_n}U(e_U)$, because the bounded operator $M_{b_n}$ commutes with the Bochner integral $\int_Ge_U(g)M_{b_n}U_g\,dg=M_{b_n}\int_Ge_U(g)U_g\,dg$. Given $\xi$ and $\varepsilon>0$ choose $n$ with $\|M_{b_n}\xi-\xi\|<\varepsilon/2$ and then $U$ small enough that $\|U(e_U)\xi-\xi\|<\varepsilon/2$; then $\|\pi(e_U\otimes b_n)\xi-\xi\|<\varepsilon$. Hence the closed span of $\pi(C_c(G\times X))H$ contains every $\xi$, so $\pi$ is nondegenerate. [F1, F6, step 1.3]

3.1 Multiplicativity: for $\xi,\eta\in H$, using [step 2.1] twice, [step 1.2] with $b=f_2(r,\cdot)$ and $h$, and the left-Haar substitution $r=h^{-1}g$ (so $hr=g$, $dr=dg$) one computes $\langle\pi(f_1)\pi(f_2)\xi,\eta\rangle=\int_G\int_G\langle M_{f_1(h,\cdot)}M_{f_2(r,h^{-1}\cdot)}U_{hr}\xi,\eta\rangle\,dr\,dh=\int_G\int_G\langle M_{f_1(h,\cdot)f_2(h^{-1}g,h^{-1}\cdot)}U_g\xi,\eta\rangle\,dg\,dh$; the scalar kernel is integrable on the compact support, so Fubini's theorem turns the iterated integral into $\int_G\langle M_{\int_Gf_1(h,\cdot)f_2(h^{-1}g,h^{-1}\cdot)\,dh}U_g\xi,\eta\rangle\,dg=\langle\pi(f_1\ast f_2)\xi,\eta\rangle$, using the identification of the inner Bochner integral of multiplication operators through its pairings and the definition of the twisted product in [F3]. As $\eta$ is arbitrary this gives $\pi(f_1)\pi(f_2)=\pi(f_1\ast f_2)$. [F3, F6, step 2.1, step 1.2]

3.2 Adjoint: taking adjoints in the defining Bochner integral and using $U_g^*=U_{g^{-1}}$ and $M_b^*=M_{\bar b}$, $\pi(f)^*=\int_GU_g^*M_{\overline{f(g,\cdot)}}\,dg=\int_G M_{\overline{f(g,g\cdot)}}U_{g^{-1}}\,dg$, where the second equality is [step 1.2] with $b=\overline{f(g,\cdot)}$ and $h=g^{-1}$. Substituting $h=g^{-1}$ in the Haar integral and using [F4] in the form $\int_Gw(g)\,dg=\int_G\Delta_G(h)^{-1}w(h^{-1})\,dh$ gives $\pi(f)^*=\int_GM_{\Delta_G(h)^{-1}\overline{f(h^{-1},h^{-1}\cdot)}}U_h\,dh=\pi(f^*)$, with $f^*$ the modular involution of [F3]. [F1, F3, F4, step 2.1, step 1.2]

4.1 Steps 2.1, 3.1 and 3.2 show that $f\mapsto\pi(f)$ is a bounded $\ast$-representation of the transformation algebra with the stated norm bound, and step 2.2 shows it is nondegenerate. The homogeneous-space case $X=G/H$ of the pair satisfies the added topological hypotheses, since $G/H$ is second-countable LCH with continuous left action ([[lem-second-countable-lch-spaces-are-standard-borel]]). [step 2.1, step 3.1, step 3.2, step 2.2, F8] ∎

## Remarks

The pairing definition and the operator definition agree, and no regularity of
$P$ beyond the PVM axioms is used; the continuous action is needed only to make
$f(g,\cdot)$ vary continuously in the supremum norm.
