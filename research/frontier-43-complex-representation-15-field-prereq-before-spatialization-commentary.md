---
id: lem-two-common-diagonalizations-are-related-by-a-base-isomorphism-and-a-measurable-field-of-unitaries
kind: lemma
title: "Two common diagonalizations differ by a bimeasurable base isomorphism and a measurable field of unitaries"
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
deps:
  - thm-decomposable-operators-are-the-commutant-of-diagonal-multiplication
  - lem-direct-integrals-transport-along-bimeasurable-base-isomorphisms
  - cor-standard-borel-spaces-have-countable-generating-and-measure-determining-algebras
  - def-standard-borel-space
  - lem-measurable-gram-schmidt-and-constant-field-trivializations
  - def-measurable-and-decomposable-operator-fields
  - thm-dominated-convergence
  - def-axiom-of-choice
  - thm-standard-borel-spaces-admit-bimeasurable-real-codings
  - def-measurable-hilbert-field-from-a-countable-fundamental-family
  - def-direct-integral-of-a-measurable-hilbert-field
  - def-finite-sigma-finite-and-semifinite-measures
  - thm-finite-and-countable-subadditivity-of-measures
  - lem-measurable-sections-have-measurable-pointwise-inner-products
  - thm-seven-generators-of-the-borel-sigma-algebra-on-r
  - thm-rationals-countable
  - lem-rat-embeds-dense
  - def-complex-lp-and-euclidean-test-function-conventions
  - def-radon-nikodym-derivative
  - cor-reciprocal-rule-for-equivalent-sigma-finite-measures
  - thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality
  - thm-integration-against-a-radon-nikodym-derivative
  - def-integrable-real-and-complex-functions-and-their-integrals
  - thm-increasing-simple-approximation-of-a-nonnegative-measurable-function
  - thm-monotone-convergence-for-the-integral
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - prop-the-nonnegative-integral-agrees-with-the-simple-integral
  - def-real-numbers
  - thm-reals-ordered-field
  - cor-cauchy-reals-lub-complete
  - def-complete-ordered-field
  - thm-of-square-roots
  - lem-of-square-monotone
dependency_level: 1
axiom_use: "Assume AC. It is inherited from the measurable-field, standard-Borel coding, transport, projection-algebra, Gram–Schmidt, Radon–Nikodym, and decomposable-commutant suppliers. Locally, AC selects the countably many Borel representatives of the rational-cut projections. No uncountable family of points or fibre vectors is selected."
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1, 16 December 2019; author-hosted complete book draft)"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Chapter 1, §1.H, Theorems 1.H.1 and 1.H.4, printed pp. 64–68: the same-base commutant/decomposability theorem; the general-field proof is referred to Dixmier, while a constant-separable-fibre proof is supplied. Appendix A.B, Proposition A.B.1 and Theorem A.B.2, printed pp. 404–405: standard-Borel coding; these passages do not prove the measure-algebra spatialization or measure-class normalization supplied locally here."
    - title: "Bruce Blackadar, Operator Algebras: Theory of C*-Algebras and von Neumann Algebras (author-hosted complete text)"
      url: "https://bruceblackadar.com/Mathematics/Cycr.pdf"
      locator: "Part III, §1.6.1–1.6.4, printed pp. 251–253: outlines measurable direct integrals and decomposable fields, explicitly referring elsewhere for technical details; it does not prove the base-isomorphism or Radon–Nikodym steps supplied locally here."
---

## Statement

Assume the Axiom of Choice. Let $(X,\mathcal B_X,\mu)$ and $(Y,\mathcal B_Y,\nu)$ be sigma-finite standard-Borel measure spaces, let $(H_x)$ and $(K_y)$ be measurable complex Hilbert fields with countable fundamental families and all fibres nonzero, and put
$$\mathcal H=\int_X^\oplus H_x\,d\mu(x),\qquad \mathcal K=\int_Y^\oplus K_y\,d\nu(y).$$
Let $\mathcal D_X$ and $\mathcal D_Y$ be the respective algebras of scalar multiplication operators. If a unitary $W:\mathcal H\to\mathcal K$ satisfies $W\mathcal D_XW^{-1}=\mathcal D_Y$, then there are conull Borel sets $X_0\subseteq X$, $Y_0\subseteq Y$, a bimeasurable bijection $c:X_0\to Y_0$, and a measurable field of unitaries $u_x:H_x\to K_{c(x)}$ such that $\lambda:=c_*(\mu|_{X_0})$ is equivalent to $\nu|_{Y_0}$. If $r=d\lambda/d(\nu|_{Y_0})$ and $J:\int_{Y_0}^\oplus K_y\,d\lambda(y)\to\int_{Y_0}^\oplus K_y\,d\nu(y)$ is the square-root Radon–Nikodym unitary $(J\eta)(y)=\sqrt{r(y)}\,\eta(y)$, then
$$\bigl(J^{-1}W\xi\bigr)_{c(x)}=u_x\xi_x\qquad\text{for }\mu\text{-almost every }x\in X_0.$$
The diagonal-model identity is preserved, $WI_{\mathcal H}W^{-1}=I_{\mathcal K}$, and the implementing base map and fibre field are unique up to null-set modification.

## Facts & Assumptions

**Given:** AC; the two sigma-finite standard-Borel measure spaces; measurable Hilbert fields with countable fundamental families and nonzero fibres; the direct integrals and their diagonal algebras; and the unitary $W$.

[F1] Every standard-Borel space, including the empty one, is bimeasurably isomorphic to a Borel subset of $[0,1]$ ([[thm-standard-borel-spaces-admit-bimeasurable-real-codings]], [[def-standard-borel-space]]).

[F2] Each standard-Borel space has a countable Borel algebra which generates its sigma-algebra and separates points ([[cor-standard-borel-spaces-have-countable-generating-and-measure-determining-algebras]]).

[F3] A measurable Hilbert field has a countable fundamental family whose values span every fibre; the direct integral consists of square-integrable measurable sections modulo almost-everywhere equality, and scalar indicators act by pointwise multiplication ([[def-measurable-hilbert-field-from-a-countable-fundamental-family]], [[def-direct-integral-of-a-measurable-hilbert-field]]).

[F4] For increasing Borel sets $A_n\uparrow A$, the diagonal projections $M_{\mathbf1_{A_n}}$ converge strongly to $M_{\mathbf1_A}$: for each direct-integral vector $\xi$, dominated convergence applies to $\|\mathbf1_{A_n}\xi-\mathbf1_A\xi\|^2\le\|\xi\|^2$ ([[thm-dominated-convergence]]).

[F5] A bounded operator commuting with every scalar diagonal multiplier is decomposable; for a fixed operator its weakly measurable, essentially bounded field is unique almost everywhere ([[thm-decomposable-operators-are-the-commutant-of-diagonal-multiplication]]).

[F6] A bimeasurable base bijection with exact pushforward measure transports the direct integral and the multiplication algebra by pullback ([[lem-direct-integrals-transport-along-bimeasurable-base-isomorphisms]]).

[F7] Measurable Gram–Schmidt produces measurable orthonormal frames on the fibres and Borel constant-field coordinates for bounded measurable operator fields ([[lem-measurable-gram-schmidt-and-constant-field-trivializations]]). This supplier is used provisionally; its Step 3 decision remains open.

[F8] A weakly measurable operator field acts on square-integrable sections pointwise, and its fibre operator norms are essentially bounded precisely when the induced operator is bounded ([[def-measurable-and-decomposable-operator-fields]]).

[F9] Equivalent sigma-finite positive measures have reciprocal Radon–Nikodym derivatives almost everywhere ([[cor-reciprocal-rule-for-equivalent-sigma-finite-measures]]).

[F10] A representative $r=d\lambda/d\nu$ satisfies $\lambda(A)=\int_A r\,d\nu$, and the identity extends from simple functions with finite-measure supports by increasing simple approximation and monotone convergence ([[thm-integration-against-a-radon-nikodym-derivative]], [[thm-increasing-simple-approximation-of-a-nonnegative-measurable-function]], [[thm-monotone-convergence-for-the-integral]]).

[F11] The real numbers are a complete ordered field, so each nonnegative real has a unique nonnegative square root ([[def-real-numbers]], [[thm-reals-ordered-field]], [[cor-cauchy-reals-lub-complete]], [[def-complete-ordered-field]], [[thm-of-square-roots]]).

[F12] Measurable sections are closed under multiplication by a measurable scalar field and have measurable pointwise norms ([[lem-measurable-sections-have-measurable-pointwise-inner-products]]).

[F13] The rational open right rays generate the Borel sigma-algebra of $\mathbb R$, $\mathbb Q$ is countable, and $\mathbb Q$ is dense in $\mathbb R$ ([[thm-seven-generators-of-the-borel-sigma-algebra-on-r]], [[thm-rationals-countable]], [[lem-rat-embeds-dense]]).

[F14] Sigma-finiteness gives a countable finite-measure cover; countable subadditivity implies that a positive-measure set has positive-measure intersection with at least one member of any countable cover ([[def-finite-sigma-finite-and-semifinite-measures]], [[thm-finite-and-countable-subadditivity-of-measures]]).

[F15] AC supplies a choice from each nonempty set ([[def-axiom-of-choice]]).

[F16] Complex $L^\infty$ classes are classes modulo almost-everywhere equality
of measurable functions with finite essential bound; on a Borel measure space
they have Borel representatives, which can be changed on a null set to be
bounded everywhere ([[def-complex-lp-and-euclidean-test-function-conventions]]).

[F17] A Radon–Nikodym derivative is an almost-everywhere equivalence class,
not a distinguished pointwise function; under sigma-finiteness its real-valued
representatives recover the measure, are unique almost everywhere, and are
integrable on each set of a common finite-measure exhaustion
([[def-radon-nikodym-derivative]],
[[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]]).

[F18] The nonnegative integral is monotone, positively homogeneous for a
positive scalar, and agrees with the simple integral on indicators
([[prop-order-and-scalar-rules-for-the-nonnegative-integral]],
[[prop-the-nonnegative-integral-agrees-with-the-simple-integral]]).

[F19] A real integrable function has integral $\int f=\int f^+-\int f^-$,
where $f^+=\max(f,0)$ and $f^-=\max(-f,0)$
([[def-integrable-real-and-complex-functions-and-their-integrals]]).

[F20] Squaring is strictly increasing on nonnegative real numbers
([[lem-of-square-monotone]]).

## Proof

**Proof technique:** spatialize the projection-algebra isomorphism, normalize the measure class, then apply the decomposable-operator theorem.

1.1 For either field, if $A$ is a Borel set of positive measure, sigma-finiteness and the nonzero-fibre condition give a countable cover of $A$ by sets $E\cap\{1/k\le\|e_n(x)\|\le k\}$, where $E$ has finite measure and $(e_n)$ is the fundamental family. Some such set has positive measure by [F14]. Its localized section $\mathbf1_{E\cap\{1/k\le\|e_n\|\le k\}}e_n$ is square-integrable and nonzero by [F3], so the diagonal representation is faithful on measure classes; the same argument shows the direct integral is zero exactly when the base measure is zero. Since $W$ is unitary, either both base measures are null or both are non-null. If both are null, take $X_0=Y_0=\varnothing$ and $c:\varnothing\to\varnothing$; then $\lambda=\nu|_{Y_0}=0$, the measures are equivalent, and the unique map between the zero direct integrals is the stated $J$ (choose the empty representative of $r=1$), while the fibre formula and uniqueness are vacuous. Henceforth both bases have positive measure. [F3, F12, F14, given, construct]

2.1 In the non-null case put $\Theta(S)=WSW^{-1}$. Every diagonal projection is $M_f$ for a bounded Borel representative $f$ by [F5, F16]. If $M_f$ is a projection, then $M_f=M_f^*=M_f^2$; pointwise scalar multiplication and uniqueness of decomposable fields [F5] give $f=\overline f=f^2$ almost everywhere. Since every $H_x$ is nonzero, $f(x)\in\{0,1\}$ almost everywhere, so $M_f=M_{\mathbf1_A}$ for the Borel set $A=\{x:f(x)=1\}$. Conversely every indicator multiplier is a projection, and faithfulness from step 1.1 identifies these projections exactly modulo null sets. Thus $\Theta$ induces a Boolean isomorphism $\alpha$ between the two measure algebras. It preserves countable unions: represent a union by the strong limit of the increasing finite-union projections, whose convergence is [F4], and conjugation by $W$ preserves strong limits. The inverse $\Theta^{-1}$ gives $\alpha^{-1}$ with the same property. [F3, F4, F5, F16, step 1.1, given, algebra]

3.1 Choose bimeasurable codes $h_X:X\to B_X\subseteq[0,1]$ and $h_Y:Y\to B_Y\subseteq[0,1]$ by [F1]. For each $q\in\mathbb Q$, choose a Borel representative $E_q\subseteq Y$ of $\alpha([h_X^{-1}((-\infty,q))])$; this is a countable choice by [F13, F15]. The order and countable-union relations hold modulo null sets; since there are countably many such relations, remove one Borel null set $N$ so they hold pointwise on $Y\setminus N$. On $N$, reset $E_q$ to $N$ for $q>0$ and to $\varnothing$ for $q\le0$. By the density in [F13], the resulting representatives are increasing and satisfy $E_q=\bigcup_{r<q}E_r$ pointwise. Define $s(y)=\min(1,\max(0,\inf\{q\in\mathbb Q:y\in E_q\}))$, with $\inf\varnothing=+\infty$. For rational $q$, $s^{-1}((-\infty,q))=\bigcup_{r<q}E_r$; by the density in [F13], $h_X^{-1}((-\infty,q))=\bigcup_{r<q}h_X^{-1}((-\infty,r))$. Since $\alpha$ preserves countable unions by step 2.1, these identities give $[s^{-1}((-\infty,q))]=\alpha([h_X^{-1}((-\infty,q))])$. The rational left rays generate the Borel sigma-algebra of $\mathbb R$: for rational $q$, $(q,+\infty)=\bigcup_{r\in\mathbb Q,\,r>q}[r,+\infty)$ by density, each $[r,+\infty)$ is the complement of $(-\infty,r)$, and the union is countable; [F13] says the rational right rays generate. Hence $s$ is Borel. The class of Borel $C\subseteq[0,1]$ for which $[s^{-1}(C)]=\alpha([h_X^{-1}(C)])$ is a sigma-algebra by step 2.1 and preimage identities; it contains the generating left rays, hence all Borel $C$. In particular $Y_1=s^{-1}(B_X)$ is conull, and $d:Y_1\to X$, $d(y)=h_X^{-1}(s(y))$, is Borel with $[d^{-1}(A)]=\alpha([A])$ for every Borel $A\subseteq X$. Repeat with $\alpha^{-1}$ and $h_Y$ to obtain a conull Borel $X_1\subseteq X$ and a Borel map $c:X_1\to Y$ satisfying $[c^{-1}(B)]=\alpha^{-1}([B])$ for every Borel $B\subseteq Y$. [F1, F13, F15, step 2.1, construct]

4.1 Let $\mathcal A_X,\mathcal A_Y$ be countable separating Borel algebras from [F2]. For each $A\in\mathcal A_X$, the sets $\{x\in X_1:c(x)\in Y_1,\ x\in A\}$ and $\{x\in X_1:c(x)\in Y_1,\ d(c(x))\in A\}$ agree modulo a $\mu$-null set, because their classes are related by $\alpha^{-1}\alpha$. Countability and separation give $d(c(x))=x$ on a conull Borel subset; symmetrically $c(d(y))=y$ on a conull Borel subset of $Y_1$. Define $X_0$ and $Y_0$ by the respective countable membership equalities, together with the conditions $c(x)\in Y_1$ and $d(y)\in X_1$. They are conull Borel sets, $c:X_0\to Y_0$ and $d:Y_0\to X_0$ are inverse bimeasurable bijections, and the projection-class identities from step 3.1 remain valid after restriction. [F2, step 3.1, algebra]

5.1 For every Borel $B\subseteq Y_0$, the identities in step 4.1 give $\mu(c^{-1}(B))=0$ exactly when $\nu(B)=0$, so $\lambda=c_*(\mu|_{X_0})$ is equivalent to $\nu|_{Y_0}$. It is sigma-finite because the images under the bimeasurable bijection $c$ of a finite-measure cover of $X_0$ are Borel and have finite $\lambda$-measure. On indicators the conjugation identity is $WM_{\mathbf1_{c^{-1}(B)}}W^{-1}=M_{\mathbf1_B}$, so linearity proves it for simple functions. For any $g\in L^\infty(Y_0,\lambda)$, [F16] gives a bounded Borel representative. Quantize its bounded real and imaginary ranges by finite grids of mesh $1/n$ to obtain simple functions $g_n$ with $\|g_n-g\|_\infty\to0$. Pointwise multiplication gives $\|M_{g_n-g}\|\le\|g_n-g\|_\infty$, and conjugation by the unitary $W$ is norm-continuous, so the identity extends to every $g\in L^\infty(Y_0,\lambda)=L^\infty(Y_0,\nu|_{Y_0})$. [F14, F16, step 4.1, given, algebra]

6.1 Sigma-finiteness of $\lambda$ and $\nu|_{Y_0}$ and [F14] give a common increasing exhaustion $(E_m)$ by sets finite for both measures. By [F17], $r=d\lambda/d(\nu|_{Y_0})$ and $\widetilde r=d(\nu|_{Y_0})/d\lambda$ have measurable real-valued representatives, are integrable on each $E_m$, and satisfy the measure-integral identities there; they are unique up to null sets. The reciprocal rule [F9] gives $r\widetilde r=1$ almost everywhere. The representative $r$ is nonnegative almost everywhere: if $\{r<0\}$ had positive $\nu$-measure, then $\{r<0\}=\bigcup_{n\ge1}\{r\le-1/n\}$ and the common exhaustion would give some $n,m$ for which $A=E_m\cap\{r\le-1/n\}$ has $0<\nu(A)<\infty$ and $\lambda(A)<\infty$. Since $r\mathbf1_A$ is integrable by [F17], [F18, F19] give $\lambda(A)=\int_A r\,d\nu=-\int_A r^-\,d\nu\le-\nu(A)/n<0$, contradicting positivity of $\lambda$. Thus $r\ge0$ almost everywhere; the reciprocal identity and the finite real-valued representatives make $r$ strictly positive and finite almost everywhere. Change both representatives to $1$ on a Borel null exceptional set. The identity in [F10] extends to every nonnegative measurable $g$: on each finite-$\lambda$ set $E_m$, first apply the Radon–Nikodym formula to simple functions supported in $E_m$, then use increasing simple approximation and monotone convergence to obtain $\int_{E_m}g\,d\lambda=\int_{E_m}gr\,d\nu$; applying monotone convergence as $E_m\uparrow Y_0$ gives $\int g\,d\lambda=\int gr\,d\nu$. By [F11], $\sqrt r$ exists pointwise; for every rational $q\ge0$, $\{\sqrt r>q\}=\{r>q^2\}$ by [F20], and for $q<0$ the preimage is all of $Y_0$. Since rational right rays generate the Borel sets by [F13], $\sqrt r$ is measurable; the same argument makes $\sqrt{\widetilde r}$ measurable. Multiplication $J\eta=\sqrt r\,\eta$ preserves measurability by [F12] and satisfies $\|J\eta\|_{L^2(\nu)}^2=\int r\|\eta\|^2\,d\nu=\|\eta\|_{L^2(\lambda)}^2$. Its inverse is multiplication by $\sqrt{\widetilde r}=r^{-1/2}$ almost everywhere; applying [F10] with the measures reversed proves it is an inverse isometry. Hence $J$ is a unitary and commutes with every diagonal multiplier. [F9, F10, F11, F12, F13, F14, F17, F18, F19, F20, step 5.1]

7.1 Transport the field $(H_x)$ from $(X_0,\mu)$ to $(Y_0,\lambda)$ along $d:Y_0\to X_0$ by [F6], and write the transported field as $\widetilde H_y=H_{d(y)}$. The unitary $T=J^{-1}W(d^*)^{-1}:\int_{Y_0}^\oplus\widetilde H_y\,d\lambda(y)\to\int_{Y_0}^\oplus K_y\,d\lambda(y)$ intertwines all diagonal multipliers by [F6] and steps 4.1–6.1. On the direct-sum field $L_y=\widetilde H_y\oplus K_y$, define the block operator $\mathsf S(\xi,\eta)=(T^*\eta,T\xi)$. It is a self-adjoint unitary commuting with every scalar diagonal multiplier. The measurable frames and Borel field coordinates supplied by [F7] make $L_y$ a measurable Hilbert field and make the adjoint and product matrix coefficients of its bounded operator fields measurable (the product coefficients are limits of finite frame sums). [F6, F7, step 4.1, step 5.1, step 6.1]

8.1 Apply [F5] to $\mathsf S$ on the field $L_y$ to obtain its unique measurable essentially bounded fibre field $(\mathsf S_y)$. The adjoint and product fields are measurable by step 7.1 and [F8]; since $\mathsf S=\mathsf S^*$ and $\mathsf S^2=I$, uniqueness in [F5] gives $\mathsf S_y=\mathsf S_y^*$ and $\mathsf S_y^2=I$ almost everywhere. The two diagonal blocks of $\mathsf S_y$ vanish almost everywhere because those blocks induce the zero operators globally, again by uniqueness. By the countable Borel frame coordinates in [F7], the fibre identities and block vanishing hold on a conull Borel set $Y_2\subseteq Y_0$. Replace $Y_0$ by $Y_2$ and $X_0$ by $c^{-1}(Y_2)$, and restrict $c$; these are still conull and bimeasurably bijective, and they change $\lambda$, its Radon–Nikodym class, and the direct-integral maps only on null sets. On this restricted base, write the lower-left block as $u_y:\widetilde H_y\to K_y$. Self-adjointness makes the upper-right block $u_y^*$, and the equations $\mathsf S_y^2=I$ give $u_y^*u_y=I_{\widetilde H_y}$ and $u_yu_y^*=I_{K_y}$ for every $y\in Y_0$, so $u_y$ is unitary everywhere on this base. Its field is measurable by [F7, F8], and $u_x:=u_{c(x)}$ is measurable under the bimeasurable change of base. From the definition of $T$, $(J^{-1}W\xi)_{c(x)}=u_x\xi_x$ almost everywhere. Any other pair $(c',u')$ satisfying the statement's formula induces the same measure-algebra map $\alpha$: its fibre formula, the scalar-multiplier intertwining in step 5.1, and commutation of its square-root Radon–Nikodym unitary with multipliers as in step 6.1 give $WM_{\mathbf1_{c'^{-1}(B)}}W^{-1}=M_{\mathbf1_B}$ for every Borel $B\subseteq Y$. On the countable separating algebra from [F2], the pullback sets for $c'$ and $c$ therefore agree modulo null sets; outside their countable union of symmetric differences and the two exceptional base null sets, separation gives $c'(x)=c(x)$. With $c$ fixed, $\lambda$ and the derivative class are fixed by [F17], so the square-root unitary is fixed on direct-integral classes by step 6.1; uniqueness of the decomposable fibre field in [F5] then gives $u$ almost everywhere. Finally $WI_{\mathcal H}W^{-1}=I_{\mathcal K}$ because $W$ is unitary. [F2, F5, F7, F8, F17, step 3.1, step 4.1, step 5.1, step 6.1, step 7.1, algebra] ∎

## Remarks

Open supplier obligation: [[lem-measurable-gram-schmidt-and-constant-field-trivializations]] is the in-run supplier of this item, [[lem-two-common-diagonalizations-are-related-by-a-base-isomorphism-and-a-measurable-field-of-unitaries]]. This proof provisionally uses that supplier in Steps 7.1 and 8.1 for measurable direct-sum field frames, Borel operator-field coordinates, and a conull Borel set on which the fibre operator identities hold. The supplier's Step 3 decision is still open, so reconcile its completed authoring and actual use before accepting this consumer; this item's decision remains escalated until then.
