---
id: thm-deformed-hard-lefschetz-for-b-x-b-s
kind: theorem
title: "Hard Lefschetz for the deformed operator on B_x B_s, in the three cases"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 8
deps: [def-the-deformed-lefschetz-operator-on-b-x-b-s, lem-tensoring-with-b-s-preserves-hodge-riemann-signs, lem-hodge-riemann-for-large-positive-deformation, def-minimal-complexes-and-perverse-truncations-in-the-type-a-soergel-category, thm-positive-rouquier-complexes-are-delta-split, thm-minimal-positive-rouquier-complexes-are-linear-under-the-lower-soergel-induction, thm-minimal-positive-rouquier-complexes-carry-the-induced-hodge-riemann-signs, lem-the-lefschetz-operator-factors-through-deleted-bott-samelsons, lem-the-minimal-rouquier-differential-supplies-weak-lefschetz-injectivity, lem-family-signature-constancy-and-the-weak-lefschetz-substitute, lem-invariant-forms-on-soergel-bimodules-are-unique-up-to-scalar-and-nondegenerate, def-primitive-subspaces-hard-lefschetz-and-hodge-riemann-signs, lem-right-descent-soergel-bimodules-descend-to-simple-invariants-under-the-character-hypothesis, lem-rational-and-real-type-a-soergel-characters-and-indecomposable-labels-agree, lem-radical-minimal-complexes-and-perverse-filtrations-in-the-soergel-category]
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
      locator: "Theorems 6.19, 6.20 and 6.21 with their full proofs in Section 6.8; displays (6.5) and (6.7)-(6.9); the failure of centered hard Lefschetz in the missing case as noted after (1) of Section 6.8"
    - title: "Riche, La theorie de Hodge des bimodules de Soergel (d'apres Soergel et Elias-Williamson), Seminaire Bourbaki no. 1139 (arXiv:1711.02464, Octobre 2017)"
      url: "https://arxiv.org/pdf/1711.02464"
      locator: "Section 2.6, Proposition 2.11 and its proof (the three-case hard Lefschetz theorem, including the injectivity of d and the kernel-of-d_3 argument)"
verification:
  precheck: pass
---

## Facts & Assumptions

**Given:** A simple reflection $s$ and $x\in S_n$ with $x\ne xs$, the tensor product $M=B_x^RB_s^R$ with its induced invariant form and the deformed operator $L_\zeta$ ([[def-the-deformed-lefschetz-operator-on-b-x-b-s]]); a reduced expression $\underline x=s_1\cdots s_m$; the centered statements $\mathrm{hL}(x,s)_\zeta$, $\mathrm{HR}(x,s)_\zeta$ and their strong embedded forms with lowest degree $-\ell(x)-1$ ([[def-primitive-subspaces-hard-lefschetz-and-hodge-riemann-signs]]); the hypothesis $\mathrm S(\le x)$ and, where stated, $\mathrm{HR}(z,t)$ for $z<x$ and simple $t$ with $zt>z$, $\mathrm{HRbar}(<x,s)_\zeta$, $\mathrm{HR}(x)$ and $\mathrm{hL}(z)$ for $z<xs$.

[F1] Descent lemma: if $xs<x$ and $\mathrm S(x)$, then $M\cong N\otimes_{S^s}S$ for a graded $(S,S^s)$-bimodule $N$; with respect to the resulting identification $M=B_x(1)\oplus B_x(-1)$ the reduced operator is the matrix $L_\zeta=\begin{pmatrix}\rho\cdot(-)&0\\ \zeta\rho(\alpha_s^\vee)&\rho\cdot(-)\end{pmatrix}$; if $\mathrm{hL}(x)$ holds and $\zeta>0$ then this matrix satisfies centered hard Lefschetz, while at $\zeta=0$ it fails centered hard Lefschetz ([[lem-right-descent-soergel-bimodules-descend-to-simple-invariants-under-the-character-hypothesis]]).

[F2] Factorization identities: with $\gamma_i:=(s_{i-1}\cdots s_1\rho)(\alpha_{s_i}^\vee)$ for $1\le i\le m$ and $\gamma_{m+1}:=(x^{-1}\rho)(\alpha_s^\vee)+\zeta\rho(\alpha_s^\vee)$, the rescaled intersection forms $\langle-,-\rangle_\gamma$ on $\bigoplus_i\mathrm{BS}(\widehat{\underline{xs}}_i)$ satisfy $\langle b,L_\zeta b'\rangle_{\overline M}=\langle\varphi(b),\varphi(b')\rangle_\gamma^{\overline{\ }}$ for all $b,b'$, where $\varphi:M\to{}^1F_xB_s\oplus B_x(1)$ is the first differential of $F_xF_s$; for a reduced $\underline x$ the scalars $\gamma_1,\ldots,\gamma_m$ are strictly positive and $\gamma_{m+1}>0$ whenever $xs>x$ ([[lem-the-lefschetz-operator-factors-through-deleted-bott-samelsons]], [[lem-rational-and-real-type-a-soergel-characters-and-indecomposable-labels-agree]]).

[F3] Injectivity of the minimal differential: under $\mathrm S(\le x)$ the reduced first differential $\overline\varphi$ of $F_xF_s$ is injective in internal degrees $\le\ell(x)$, for the nonnegative representative $F_xF_s$ and for homotopy-equivalent representatives with no term in degree $-1$ obtained by cancelling contractible summands whose source lies in a positive cohomological degree ([[lem-the-minimal-rouquier-differential-supplies-weak-lefschetz-injectivity]]).

[F4] Weak-Lefschetz substitute: if $\varphi:V\to W(1)$ is a map of graded $R[L]$-modules with $\varphi$ injective in degrees $\le-1$, $\langle\varphi(a),\varphi(b)\rangle_W=\langle a,Lb\rangle_V$ and $W$ satisfying HR with the standard sign, then $L^i:V^{-i}\to V^i$ is injective for all $i\ge0$, and if $\dim V^i=\dim V^{-i}$ for all $i$ then $L$ satisfies hL on $V$; an $L$-stable graded subspace with symmetric Betti numbers of a space satisfying hL and HR inherits both with the ambient signs ([[lem-family-signature-constancy-and-the-weak-lefschetz-substitute]]).

[F5] Rouquier HR: under $\mathrm S(\le x)$ and $\mathrm{HR}(z,t)$ for all $z<x$ and simple $t$ with $zt>z$, each ${}^jF_x(-j)$ embedded in $\bigoplus_{x'\in\pi(x,j)}\mathrm{BS}(x')$ satisfies HR with the induced rescaled forms and the global sign of the Rouquier theorem; in particular ${}^1F_x(-1)$ satisfies HR and ${}^1F_x(-1)=\bigoplus_{z<x}B_z$ componentwise ([[thm-minimal-positive-rouquier-complexes-carry-the-induced-hodge-riemann-signs]], [[thm-minimal-positive-rouquier-complexes-are-linear-under-the-lower-soergel-induction]]).

[F6] Tensoring lemma: if $B=\bigoplus_zB_z^{R,m_z}$ is self-dual with $m_z\ne0\Rightarrow\mathrm S(z)$ and $\mathrm{HR}(z,s)_\zeta$, and $B$ carries an invariant non-degenerate form making it even or odd and satisfying HR with the standard sign for $\rho$, then $BB_s$ satisfies HR with the standard sign for $L_\zeta$ and the induced form ([[lem-tensoring-with-b-s-preserves-hodge-riemann-signs]]).

[F7] Linearity and perverse bounds: under $\mathrm S(\le x)$ one has ${}^1F_x=\bigoplus_{z<x}B_z(1)$, $F_xF_s\in pK^b_{\ge0}$, and the restriction of the second differential to $\tau_{\le-2}({}^1(F_xF_s))$ is a split injection, so the corresponding contractible two-term summand can be cancelled by homological Gaussian elimination, leaving a homotopy-equivalent complex with the same degree-zero term $B_xB_s$ ([[thm-minimal-positive-rouquier-complexes-are-linear-under-the-lower-soergel-induction]], [[lem-radical-minimal-complexes-and-perverse-filtrations-in-the-soergel-category]], [[def-minimal-complexes-and-perverse-truncations-in-the-type-a-soergel-category]]).

## Statement

The hard Lefschetz theorem for $L_\zeta$ on $M=B_x^RB_s^R$ holds in the following three cases.

(1) $\zeta>0$ and $xs<x$: under $\mathrm S(x)$, $\mathrm{hL}(x)$ implies $\mathrm{hL}(x,s)_\zeta$. The $\mathrm{hL}(x)$-only descent implication, with the same matrix and without an assumed $\mathrm S(x)$, is retained as an after-induction consequence in the character theorem, where $\mathrm S(x)$ has already been proved.

(2) $\zeta>0$ and $xs>x$: if $\mathrm S(\le x)$, $\mathrm{HR}(z,t)$ for all $z<x$ and simple $t$ with $zt>z$, $\mathrm{HRbar}(<x,s)_\zeta$ and $\mathrm{HR}(x)$ hold, then $\mathrm{hL}(x,s)_\zeta$ holds.

(3) $\zeta=0$ and $xs>x$: if $\mathrm S(\le x)$, $\mathrm{HR}(z,t)$ for all $z<x$ and simple $t$ with $zt>z$, $\mathrm{HR}(x)$ and $\mathrm{hL}(z)$ for all $z<xs$ hold, then $\mathrm{hL}(x,s)$ holds.

In the remaining case $\zeta=0$ and $xs<x$, centered hard Lefschetz fails: in the decomposition $B_x(1)\oplus B_x(-1)$ the operator $L_0$ is diagonal, the bottom vector of the first summand lies in degree $-\ell(x)-1$ and its $(\ell(x)+1)$-st $\rho$-power is zero, while the opposite total degree is nonzero by self-duality; the two copies have Lefschetz strings centered at $-1$ and $+1$ rather than at zero.

## Proof
**Proof technique:** direct; case (1) is the explicit descent matrix, case (2) uses the factorization identity and the weak-Lefschetz substitute, and case (3) separates the kernel of the third component of the differential.

1.1 **Case (1), positive parameter.** Assume $xs<x$, $\mathrm S(x)$ and $\mathrm{hL}(x)$. By [F1] the reduced operator is the matrix with diagonal blocks $\rho\cdot(-)$ on $B_x(1)$ and $B_x(-1)$ and lower off-diagonal block $\zeta\rho(\alpha_s^\vee)$, a scalar multiple of the identity; since $\rho\cdot(-)$ satisfies hL on $B_x$, the $\rho$-action completes to an $\mathfrak{sl}_2(\mathbb R)$-action and, after rescaling by $\zeta\ne0$, the matrix describes the action of the raising operator on the tensor product of $B_x$ with the two-dimensional standard representation; hence its powers are isomorphisms in the centered degrees and $\mathrm{hL}(x,s)_\zeta$ holds, which is case (1). [given, F1]

1.2 **Case (2), setting and form identity.** Assume $\zeta>0$, $xs>x$, $\mathrm S(\le x)$, $\mathrm{HR}(z,t)$ for all $z<x$ with $zt>z$, $\mathrm{HRbar}(<x,s)_\zeta$ and $\mathrm{HR}(x)$. By [F2] the scalars $\gamma_i$ for $1\le i\le m$ are strictly positive and $\gamma_{m+1}=(x^{-1}\rho)(\alpha_s^\vee)+\zeta\rho(\alpha_s^\vee)>0$, and with $\varphi:M\to{}^1F_xB_s\oplus B_x(1)$ the first differential of $F_xF_s$ one has $\langle b,L_\zeta b'\rangle_{\overline M}=\langle\varphi(b),\varphi(b')\rangle_\gamma$ for all $b,b'\in M$; by [F3] the reduced $\varphi$ is injective in internal degrees $\le\ell(x)$. [given, F2, F3]

2.1 **Failure at $\zeta=0$ for a descent.** At $\zeta=0$ the matrix of [F1] is diagonal with both diagonal blocks the Lefschetz operator of $B_x$; the bottom class $b$ of $B_x(1)$ lies in degree $-\ell(x)-1$ and satisfies $\rho^{\ell(x)+1}b=0$, so the centered Lefschetz map of degree $-\ell(x)-1$ fails to be injective; the opposite total degree $+\ell(x)+1$ is nonzero by self-duality of $B_xB_s$, so the failure is genuine and not a vanishing of both sides. This is the failure statement of the theorem. [step 1.1, F1]

2.2 **The operator commutes with $\varphi$.** Writing $\varphi=(d_1,d_2)$ with $d_1$ into ${}^1F_xB_s(-1)$ and $d_2$ into $B_x(1)$, the deleted-word factorization of [F2] shows that $d_1$ commutes with $L_\zeta$ and that $d_2(L_\zeta b)=\rho\cdot d_2(b)+d_2(b)\cdot\zeta\rho$; hence, with respect to the operator $L$ equal to $L_\zeta$ on the first summand and $\rho\cdot(-)$ on the second, one has $\varphi(L_\zeta b)=L\varphi(b)$ for all $b\in M$. [step 1.2, F2, algebra]

3.1 **The target satisfies HR.** Consider the graded space $W:={}^1F_x(-1)B_s\oplus B_x$ with the operator $L$ of step 2.2 and the form $\langle-,-\rangle_\gamma$. The two summands are orthogonal for the induced form, $B_x$ satisfies hL and HR by $\mathrm{HR}(x)$, and ${}^1F_x(-1)B_s$ satisfies hL and HR with the standard sign: its summands $B_z$ with $z<x$ satisfy $\mathrm S(z)$ and, for those with $zs>z$, the hypothesis $\mathrm{HR}(z,s)_\zeta$ (which $\mathrm{HRbar}(<x,s)_\zeta$ supplies), so the tensoring lemma [F6] applies to ${}^1F_x(-1)=\bigoplus_{z<x}B_z$ with the positivity of the rescalings; the induced signs of ${}^1F_x(-1)$ furnished by [F5] match the standard sign. Hence $W$ satisfies HR with the standard sign, and the map $\varphi$ sends $M$ into $W(1)$ because ${}^1F_xB_s\oplus B_x(1)={}^1F_x(-1)B_s(1)\oplus B_x(1)=W(1)$. [step 2.2, F5, F6]

4.1 **Case (2) concluded.** Apply the weak-Lefschetz substitute [F4] to $\varphi:M\to W(1)$: its three hypotheses hold by steps 1.2, 2.2 and 3.1 (injectivity in degrees $\le\ell(x)$ contains injectivity in degrees $\le-1$, the form identity is the one of [F2], and $W$ satisfies HR by step 3.1). Hence $L_\zeta^k:M^{-k}\to M^k$ is injective for all $k\ge0$; since $M$ is self-dual and has symmetric Betti numbers, equal dimensions give isomorphisms, which is $\mathrm{hL}(x,s)_\zeta$ and proves case (2). [step 1.2, step 3.1, F4]

4.2 **Case (3), the separated differential.** Assume $\zeta=0$, $xs>x$, $\mathrm S(\le x)$, the ascent HR hypothesis for lower elements, $\mathrm{HR}(x)$ and $\mathrm{hL}(z)$ for all $z<xs$. Use the same positive scalars $\gamma_1,\ldots,\gamma_{m+1}$ with $\zeta=0$ and the same form identity as in [F2] with $\varphi$ the first differential of $F_xF_s$. Decompose ${}^1F_x(-1)=B^\uparrow\oplus B^\downarrow$ orthogonally according to $zs>z$ and $zs<z$ as in step 3.1; by [F7] the complex $F_xF_s$ lies in $pK^b_{\ge0}$ and the restriction of its second differential to $\tau_{\le-2}(B^\downarrow B_s(1))$ is a split injection, so cancelling that contractible summand leaves a homotopy-equivalent complex with first differential $d=(d_1,d_2,d_3):B_xB_s\to B_x(1)\oplus B^\uparrow B_s(1)\oplus B^\downarrow$, all components commuting with left multiplication by $\rho$, and $d$ injective in degrees $\le\ell(x)$ by [F3]. [step 1.2, F7]

5.1 **Case (3), the two claims.** Fix $0\ne b\in M^{-k}$ with $k\ge0$, so that $d(b)\ne0$ by the injectivity just recalled. If $d_3(b)\ne0$, then $\rho^k(d_3(b))=d_3(\rho^kb)$ by commutation, and $\rho^k(d_3(b))\ne0$ because $d_3(b)$ lies in $B^\downarrow$, each of whose indecomposable summands $B_z$ has $z<xs$ and satisfies $\mathrm{hL}(z)$ by hypothesis, so left multiplication by $\rho$ satisfies hL on $B^\downarrow$; hence $\rho^kb\ne0$. If $d_3(b)=0$, put $V=\ker(d_3)\subseteq M$ and $W= B_x\oplus B^\uparrow B_s$ with the restricted forms and the operator $\rho\cdot(-)$, write $\varphi_V:V\to W(1)$ for the restriction of $(d_1,d_2)$: it commutes with $\rho$, it is injective in degrees $\le-1$ (indeed in degrees $\le\ell(x)$), and it is form-compatible because the removed shifted-descent piece $B^\downarrow$ has identically zero Lefschetz form, so $\langle b,\rho b'\rangle_V=\langle\varphi_V(b),\varphi_V(b')\rangle_W$; and $W$ satisfies HR with the standard sign, since $B_x$ does by $\mathrm{HR}(x)$ and $B^\uparrow B_s$ does by the tensoring lemma [F6] applied with $\zeta=0$ to the ascent summands. The weak-Lefschetz substitute [F4] gives $\rho^k$ injective on $V^{-k}$, whence $\rho^kb\ne0$. Both claims show that $\rho^k$ has trivial kernel on $M^{-k}$; by symmetric Betti numbers of the self-dual $M$ it is an isomorphism, which is $\mathrm{hL}(x,s)$. [step 4.2, F4, F6]

6.1 **Conclusion and caveats.** Steps 1.1-1.2 treat the descent cases, step 4.1 case (2) and step 5.1 case (3); no step assumes HR for the unseparated zero-parameter descent target, and no step invokes any singular-category descent theorem or any statement beyond the suppliers listed. This proves the three-case theorem and the failure statement. [step 2.1, step 4.1, step 5.1] ∎

## Remarks

- The hypothesis $\mathrm{HRbar}(<x,s)_\zeta$ in case (2) is used only through the summandwise statements $\mathrm{HR}(z,s)_\zeta$ for $z<x$, which is exactly the input of the tensoring lemma; the strong embedded form is not otherwise needed.
- In case (3) the shifted descent piece is cancelled before the substitute is applied, and its vanishing Lefschetz form is what makes the smaller target $W=B_x\oplus B^\uparrow B_s$ form-compatible; this is the precise sense in which the zero-parameter descent failure does not obstruct the ascent case.
