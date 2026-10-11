---
id: lem-the-nilpotent-central-fiber-is-a-reduced-integral-domain
kind: lemma
title: The nilpotent central fiber is reduced and integral
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 1
deps: [lem-the-basic-weyl-invariant-degree-sum-is-the-number-of-positive-roots,
       thm-kostant-harmonic-decomposition-of-the-symmetric-algebra,
       thm-symmetric-invariants-restrict-to-weyl-invariants,
       thm-enveloping-algebra-is-free-over-its-center,
       thm-every-derivation-of-a-semisimple-lie-algebra-is-inner,
       thm-cartier-smoothness-for-affine-groups-in-characteristic-zero,
       thm-borel-and-maximal-torus-conjugacy-over-algebraically-closed-field,
       thm-jacobian-criterion-affine-variety,
       thm-regular-local-rings-are-domains-and-cohen-macaulay,
       thm-regular-quotients-and-cohen-macaulayness,
       lem-ring-detected-at-associated-prime-localizations,
       thm-root-sl-two-triple,
       thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra,
       thm-weyls-complete-reducibility-theorem,
       prop-killing-form-is-invariant-and-nondegenerate-on-a-complex-semisimple-lie-algebra,
       def-axiom-of-choice,
       thm-polynomial-extension-of-cohen-macaulay-rings,
       thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra,
       thm-ag-submersion-criterion-standard-smooth,
       thm-flat-finite-presentation-is-open,
       lem-flat-locus-open-finitely-presented-algebra,
       cor-generic-smoothness-on-source-characteristic-zero,
       cor-dimension-of-image-plus-generic-fibre,
       thm-chevalley-shephard-todd-for-finite-weyl-groups,
       def-koszul-complex-of-a-sequence-with-coefficients,
       cor-koszul-complex-resolves-a-regular-quotient]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pavel Etingof, Representations of Lie Groups, MIT18.757 full lecture notes (2023)"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
      locator: "Sections 17.1-17.4 (printed pp. 88-90); Exercise 17.5(iv),(vi) expanded here with the actual dominant-slice Jacobian proof, complete-intersection associated-prime detection and Corollary 17.7 central reduction"
---

## Statement

Assume the Axiom of Choice. Let $\mathfrak g$ be a finite-dimensional complex
semisimple Lie algebra with Cartan subalgebra $\mathfrak h$ and Weyl group $W$,
and let $p_1,\dots,p_r$ be homogeneous basic generators of $S(\mathfrak g)^{\mathfrak g}$
of degrees $d_1,\dots,d_r$, corresponding by Chevalley restriction to basic Weyl
invariants ([[thm-symmetric-invariants-restrict-to-weyl-invariants]],
[[thm-chevalley-shephard-todd-for-finite-weyl-groups]]). Put
$$A=S(\mathfrak g)/(p_1,\dots,p_r).$$ Then $A$ is a reduced integral domain of
dimension $\dim\mathfrak g-r=2|\Phi^+|$, with Hilbert series
$$\operatorname{Hilb}(A,t)=\prod_{i=1}^r\frac{1-t^{d_i}}{(1-t)^{\dim\mathfrak g}},$$
and for every central character $\chi:Z(U(\mathfrak g))\to\mathbb C$ the PBW
associated graded of $U(\mathfrak g)/U(\mathfrak g)\ker\chi$ is canonically
isomorphic to $A$.

## Facts & Assumptions

**Given:** A finite-dimensional complex semisimple Lie algebra $\mathfrak g$ with Cartan subalgebra $\mathfrak h$, root system $\Phi$ with positive system $\Phi^+$, Weyl group $W$, and basic invariants $p_1,\dots,p_r$ of $S(\mathfrak g)^{\mathfrak g}$ of degrees $d_1,\dots,d_r$.

[F1] Under AC, multiplication gives an isomorphism $S(\mathfrak g)^{\mathfrak g}\otimes\mathcal H\xrightarrow{\sim}S(\mathfrak g)$ of graded $\mathfrak g$-modules for a Kostant harmonic subspace $\mathcal H$, the restriction $S(\mathfrak g)^{\mathfrak g}\to S(\mathfrak h)^W$ is an isomorphism, $S(\mathfrak h)^W$ is polynomial on $r$ algebraically independent homogeneous basic invariants, and $\sum_i(d_i-1)=|\Phi^+|=:N$ ([[thm-kostant-harmonic-decomposition-of-the-symmetric-algebra]], [[thm-symmetric-invariants-restrict-to-weyl-invariants]], [[thm-chevalley-shephard-todd-for-finite-weyl-groups]], [[lem-the-basic-weyl-invariant-degree-sum-is-the-number-of-positive-roots]], [[def-axiom-of-choice]]).

[F2] The sequence $p_1,\dots,p_r$ is a regular sequence in the polynomial ring $S(\mathfrak g)$; the Koszul complex $K(p;S)$ is a finite free resolution of $A$; hence $\operatorname{Hilb}(A,t)=\prod_i(1-t^{d_i})/(1-t)^{\dim\mathfrak g}$ and $A$ is a complete-intersection ring of pure dimension $\dim\mathfrak g-r$, Cohen-Macaulay at every maximal ideal ([[def-koszul-complex-of-a-sequence-with-coefficients]], [[cor-koszul-complex-resolves-a-regular-quotient]], [[thm-regular-quotients-and-cohen-macaulayness]], [[thm-regular-local-rings-are-domains-and-cohen-macaulay]], [[thm-polynomial-extension-of-cohen-macaulay-rings]], [[thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra]]).

[F3] For every root $\alpha$ there is an $\mathfrak{sl}_2$-triple $e_\alpha\in\mathfrak g_\alpha$, $f_\alpha\in\mathfrak g_{-\alpha}$, $h_\alpha$ with $[e_\alpha,f_\alpha]=h_\alpha$, $[h_\alpha,e_\alpha]=2e_\alpha$, $[h_\alpha,f_\alpha]=-2f_\alpha$; finite-dimensional $\mathfrak g$-modules are completely reducible; the weights of the adjoint representation are the roots together with $0$; the Killing form is invariant and nondegenerate ([[thm-root-sl-two-triple]], [[thm-weyls-complete-reducibility-theorem]], [[thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra]], [[prop-killing-form-is-invariant-and-nondegenerate-on-a-complex-semisimple-lie-algebra]]).

[F4] Under AC, $\operatorname{Der}(\mathfrak g)=\operatorname{ad}(\mathfrak g)$, so $G:=\operatorname{Aut}(\mathfrak g)^0$ is an affine algebraic group with $T_1G=\mathfrak g$ and $\dim G=\dim\mathfrak g$; it is smooth and irreducible in characteristic zero; any two Borel subgroups are conjugate ([[thm-every-derivation-of-a-semisimple-lie-algebra-is-inner]], [[thm-cartier-smoothness-for-affine-groups-in-characteristic-zero]], [[thm-borel-and-maximal-torus-conjugacy-over-algebraically-closed-field]], [[def-axiom-of-choice]]).

[F5] Geometric toolkit under AC: the submersion criterion for a morphism of smooth varieties at a rational point via injectivity of the cotangent map; flatness of finite presentation is an open condition on the source and a flat morphism of finite presentation is open; a dominant morphism of smooth complex varieties has surjective differential over a dense open subset of the source; the dimension formula $\dim X=\dim\overline{f(X)}+r$ for the generic fibre dimension; the Jacobian criterion $\operatorname{rank}J(\mathfrak m)=n-\dim A_{\mathfrak m}$ iff $A_{\mathfrak m}$ is regular at a rational maximal ideal; a regular local ring is a domain and Cohen-Macaulay; the natural map of a Noetherian ring to the product of its associated-prime localizations is injective ([[thm-ag-submersion-criterion-standard-smooth]], [[lem-flat-locus-open-finitely-presented-algebra]], [[thm-flat-finite-presentation-is-open]], [[cor-generic-smoothness-on-source-characteristic-zero]], [[cor-dimension-of-image-plus-generic-fibre]], [[thm-jacobian-criterion-affine-variety]], [[thm-regular-local-rings-are-domains-and-cohen-macaulay]], [[lem-ring-detected-at-associated-prime-localizations]]).

[F6] Under AC, $U(\mathfrak g)$ is free over its center $Z$ with basis $\operatorname{sym}(h_j)$ for a homogeneous basis $h_j$ of a Kostant harmonic subspace, $\operatorname{gr}Z=S(\mathfrak g)^{\mathfrak g}$, and $\operatorname{gr}U(\mathfrak g)=S(\mathfrak g)$ ([[thm-enveloping-algebra-is-free-over-its-center]], [[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 If $\mathfrak g=0$ then $r=0$, $A=\mathbb C$ and all assertions are immediate; hence assume $\mathfrak g\ne0$. The images of $p_1,\dots,p_r$ generate the ideal $S(\mathfrak g)\,S(\mathfrak g)^{\mathfrak g}_+$, the sequence is regular by [F2], and the Koszul Euler characteristic gives $\operatorname{Hilb}(A,t)=\prod_i(1-t^{d_i})/(1-t)^{\dim\mathfrak g}$; as a polynomial this has degree $\sum_i(d_i-1)=\dim\mathfrak g-r=2N$ and leading coefficient $1$, so $\dim A=\dim\mathfrak g-r$ and $A$ is Cohen-Macaulay at every maximal ideal by [F2]. [F1, F2, algebra]

1.2 Choose for every simple root $\alpha_i$ an $\mathfrak{sl}_2$-triple $(e_i,f_i,h_i)$ and put $e=\sum_ie_i$, $h=2\rho^\vee=\sum_ih_i$, $f=\sum_if_i$; then $[h,e]=2e$, $[h,f]=-2f$ and $[e,f]=h$. Complete reducibility writes the adjoint module as a direct sum of $\mathfrak{sl}_2$-strings $L(2m_1)\oplus\cdots$; each string contributes exactly one vector killed by $h$, and $\ker\operatorname{ad}h=\mathfrak h$ has dimension $r$, so there are exactly $r$ strings; a string with $m_j=0$ would consist of a nonzero vector killed by $e$ and $h$, i.e. a nonzero element of $\mathfrak h$ commuting with all $e_i$, which is central in $\mathfrak g$, hence zero; so all $m_j\ge1$ and counting dimensions gives $\sum_j(2m_j+1)=\dim\mathfrak g=2N+r$, that is $\sum_jm_j=N$. The highest vector of a string has $\operatorname{ad}h$-eigenvalue $2m_j>0$, hence lies in $\mathfrak n^+=\bigoplus_{\alpha>0}\mathfrak g_\alpha$; therefore $\ker\operatorname{ad}e$ is the $r$-dimensional span of the highest vectors and lies in $\mathfrak n^+$, and the lowest vectors span $z_f:=\ker\operatorname{ad}f\subseteq\mathfrak n^-$ with $\mathfrak g=[\mathfrak g,e]\oplus z_f$. [F3, algebra]

1.3 Let $\varphi_t(x)=t\cdot\operatorname{Ad}(t^{-\rho^\vee})(x)$ for $t\in\mathbb C^\times$. Since $p_i$ is $\mathfrak g$-invariant, $p_i(\varphi_tx)=t^{d_i}p_i(x)$ for all $x\in\mathfrak g$; since $\operatorname{Ad}(t^{-\rho^\vee})f_i=tf_i$, the map $\varphi_t$ preserves $z_f$, so with $q_i(y):=p_i(e+y)$ one has $q_i(\varphi_ty)=p_i(\varphi_t(e+y))=t^{d_i}q_i(y)$: each $q_i$ is weighted-homogeneous of weighted degree $d_i$ for the weights $\deg y_j=m_j+1$ on $z_f$; indeed a root vector of height $t$ has $\varphi$-weight $1-t$, so the lowest vector $y_j$ has weight $m_j+1\ge2$. [F3, algebra]

1.4 Let $G=\operatorname{Aut}(\mathfrak g)^0$ and let $N_+=\exp(\operatorname{ad}\mathfrak n^+)$, $H$ the torus of root characters; both are closed connected subgroups and $B=H\cdot N_+\subseteq G$ is a Borel subgroup with Lie algebra $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$: its Lie algebra is solvable, and any solvable subalgebra containing a negative root vector together with its root $\mathfrak{sl}_2$ would contain a copy of $\mathfrak{sl}_2$, so $\mathfrak b$ is maximal solvable. By [F4], $G$ is a smooth irreducible affine algebraic group of dimension $\dim\mathfrak g$ acting morphically on $\mathfrak g$, and all its Borel subgroups are conjugate. [F4]

2.1 The morphism $\Psi:G\times z_f\to\mathfrak g$, $(g,y)\mapsto g\cdot(e+y)$, is dominant. Its differential at $(1,0)$ is $(\xi,y)\mapsto[\xi,e]+y$ for $\xi\in T_1G=\mathfrak g$ (using $G$-equivariance of the action), with image $[\mathfrak g,e]+z_f=\mathfrak g$ by step 1.2; hence the cotangent map is injective and, by the submersion criterion at the rational points $(1,0)$ and $e$, $\Psi$ is locally standard smooth, hence flat, at $(1,0)$; the flat locus is open and flat morphisms of finite presentation are open, so the image of $\Psi$ contains a nonempty open subset of $\mathfrak g$; since $\mathfrak g$ is irreducible, $\Psi$ is dominant. [F5, step 1.2, step 1.4]

2.2 Every nilpotent element $x\in\mathfrak g$ is conjugate into $\mathfrak n^+$: the element $u=\exp(\operatorname{ad}x)\in G$ is unipotent, so it lies in some Borel subgroup, which is conjugate to $B$; hence $y:=g\cdot x$ satisfies $\exp(\operatorname{ad}y)\in B$, and the logarithm, inverse to the exponential on the unipotent radical, gives $\operatorname{ad}y\in\mathfrak n^+$; since $\operatorname{ad}$ is injective, $y\in\mathfrak n^+$. Conversely, $p_i$ vanishes on $\mathfrak n^+$: for $n\in\mathfrak n^+$ one has $\operatorname{Ad}(t^{\rho^\vee})n\to0$ as $t\to0$, while $p_i(n)=p_i(\operatorname{Ad}(t^{\rho^\vee})n)$ for all $t$ by invariance, so continuity gives $p_i(n)=p_i(0)=0$. [F4, step 1.4, algebra]

2.3 The central reduction has associated graded $A$: fix a central character $\chi:Z\to\mathbb C$ with kernel $\mathfrak m_\chi$, and let $J=\mathfrak m_\chi U(\mathfrak g)$. By [F6], $\operatorname{gr}U(\mathfrak g)=S(\mathfrak g)$, $\operatorname{gr}Z=S(\mathfrak g)^{\mathfrak g}$, and the leading symbol of any $z\in\mathfrak m_\chi$ lies in $S(\mathfrak g)^{\mathfrak g}_+=(p_1,\dots,p_r)$; conversely each $p_i$ is the leading symbol of an element of $\mathfrak m_\chi$, for instance of $z_i-\chi(z_i)$ for a central element $z_i$ of leading symbol $p_i$ (the scalar term has lower filtration degree because $d_i>0$). Therefore $\operatorname{gr}J=(p_1,\dots,p_r)S(\mathfrak g)$ and the natural graded surjection $S(\mathfrak g)/(p_1,\dots,p_r)\twoheadrightarrow\operatorname{gr}(U(\mathfrak g)/J)$ is an isomorphism: both sides have the Hilbert series of step 1.1, since the filtered free harmonic decomposition of [F6] restricts to a basis of $U(\mathfrak g)/J$ whose symbols have exactly the Hilbert series $\prod_i(1-t^{d_i})/(1-t)^{\dim\mathfrak g}$. Hence the PBW associated graded of $U(\mathfrak g)/U(\mathfrak g)\ker\chi$ is canonically $A$. [F6, step 1.1]

3.1 The restrictions $q_1,\dots,q_r\in\mathbb C[z_f]$ are algebraically independent: the pullback $\Psi^*$ is injective because $\Psi$ is dominant, and $\Psi^*(p_i)=q_i$ by $G$-invariance of the $p_i$; if a nonzero polynomial $F$ satisfied $F(q_1,\dots,q_r)=0$, then $\Psi^*(F(p_1,\dots,p_r))=0$, hence $F(p_1,\dots,p_r)=0$ in $S(\mathfrak g)$, contradicting the algebraic independence of $p_1,\dots,p_r$ from [F1]. [F1, step 2.1]

3.2 The common zero set $\mathcal N=\{x:p_i(x)=0\text{ for all }i\}$ equals $G\cdot\mathfrak n^+$: the inclusion $\supseteq$ is step 2.2, and conversely if all $p_i$ vanish then every invariant polynomial of positive degree vanishes, so the invariant traces $\operatorname{tr}((\operatorname{ad}x)^k)$, $k\ge1$, vanish because each is invariant with zero constant term; Newton's identities express every coefficient of the characteristic polynomial of $\operatorname{ad}x$ polynomially in these traces, so the characteristic polynomial is $T^{\dim\mathfrak g}$, hence $\operatorname{ad}x$ is nilpotent and $x$ is conjugate into $\mathfrak n^+$ by step 2.2. Also $\mathcal N$ is the underlying set of $\operatorname{Spec}A$. [F3, step 2.2, algebra]

4.1 The map $q=(q_1,\dots,q_r):\mathbb A^r\to\mathbb A^r$ is dominant by step 3.1, and $\mathbb A^r$ is smooth, so generic smoothness provides a dense open subset of $\mathbb A^r$ on which the differential of $q$ is surjective; in particular the Jacobian determinant $D=\det(\partial q_i/\partial y_j)$ is not identically zero. [F5, step 3.1]

5.1 Weights: $D$ is weighted-homogeneous of weighted degree $\sum_id_i-\sum_j(m_j+1)=\sum_i(d_i-1)-\sum_jm_j=N-N=0$ by steps 1.2 and 1.3, because the derivative with respect to $y_j$ lowers weighted degree by $m_j+1$; a nonzero polynomial all of whose monomials have positive weights $m_j+1$ and total weighted degree zero is a nonzero constant. Hence $D$ is a nonzero constant, and in particular the linear map $z_f\to\mathbb C^r$, $y\mapsto(dp_1(e)(y),\dots,dp_r(e)(y))$, given by the matrix $(\partial q_i/\partial y_j)(0)$, is invertible. [step 1.2, step 1.3, step 4.1, algebra]

6.1 The Jacobian matrix of the presentation $A=S(\mathfrak g)/(p_1,\dots,p_r)$ at the rational maximal ideal $\mathfrak m$ of $e$ has rank exactly $r$: its rows are the differentials $dp_i(e)$, which are linearly independent by step 5.1. Since $\dim A_{\mathfrak m}=\dim A=\dim\mathfrak g-r$ by step 1.1, the Jacobian criterion in the form $\operatorname{rank}J(\mathfrak m)=n-\dim A_{\mathfrak m}$ identifies $A_{\mathfrak m}$ as a regular local ring. [F5, step 1.1, step 5.1]

7.1 Regularity propagates along the orbit and is generic: for $g\in G$ the induced automorphism of $A$ carries the local ring at $e$ to the local ring at $g\cdot e$, so $A$ is regular at every point of the orbit $G\cdot e$; that orbit has dimension $\dim G-\dim\operatorname{Stab}_G(e)=\dim\mathfrak g-r$ because $\operatorname{Lie}\operatorname{Stab}_G(e)=\operatorname{ad}(\ker\operatorname{ad}e)$ has dimension $r$ by step 1.2. The orbit is contained in $\mathcal N$, which is irreducible as the image of the irreducible variety $G\times\mathfrak n^+$ under the action morphism; hence $G\cdot e$ is dense in $\operatorname{Spec}A$. Therefore the regular locus of $A$, which is a nonempty open subset, contains the generic point of the irreducible space $\operatorname{Spec}A$. [step 1.2, step 3.2, step 6.1]

8.1 Consequences: $A$ is Cohen-Macaulay by step 1.1, so by [F5] every associated prime of $A$ is minimal; since the underlying topological space $\operatorname{Spec}A=\mathcal N$ is irreducible by step 7.1, there is exactly one minimal prime $\mathfrak p_0$, and $\{\mathfrak p_0\}=\operatorname{Ass}(A)$. By step 7.1 the localization $A_{\mathfrak p_0}$ is a regular local ring of dimension zero, hence a field; the injection $A\to\prod_{\mathfrak q\in\operatorname{Ass}(A)}A_{\mathfrak q}=A_{\mathfrak p_0}$ of [F5] is therefore a ring map into a field, so $A$ is reduced; being reduced with a single minimal prime, $A$ is a domain. [F5, step 1.1, step 7.1]

9.1 Combining steps 1.1, 2.3, 8.1: $A$ is a reduced integral domain of dimension $\dim\mathfrak g-r=2N=2|\Phi^+|$ with the displayed Hilbert series, and every central reduction has associated graded $A$. The Axiom of Choice is inherited from the invariant-theory, group-theoretic and geometric suppliers [F1], [F4], [F5] and [F6]; the conclusions themselves are choice-free statements about $\mathfrak g$. [F1, F4, F5, F6, step 1.1, step 2.3, step 8.1, algebra] ∎
