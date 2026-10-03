---
id: cor-exceptional-divisor-smooth-center-normal-bundle
kind: corollary
title: "Regular centers have projective-bundle exceptional divisors"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - thm-exceptional-divisor-normal-cone-proj
  - def-projective-bundle-scheme
  - def-locally-free-sheaf-finite-rank
  - def-embedding-dimension-and-regular-local-ring
  - lem-embedding-dimension-is-minimal-maximal-ideal-generator-number
  - def-associated-graded-ring-and-module
  - thm-associated-graded-ring-of-a-regular-local-ring
  - lem-affine-blowup-algebra-properties
  - def-axiom-of-choice
  - thm-regular-local-rings-are-domains-and-cohen-macaulay
  - thm-one-dimensional-regular-local-rings-are-dvrs
  - lem-regular-sequence-associated-graded-polynomial
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, June 27, 2011 draft (author-hosted 'Early (out-of-date) version of The Rising Sea')"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGjun2711publicnoindex.pdf"
      locator: "19.3.5 normal bundles to exceptional divisors and 19.4.12 local complete intersections, pp. 387-388, 393-394"
    - title: "The Stacks Project, Divisors, Sections 31.33-31.36 (Blowing up; Strict transform; Admissible blowups; Blowing up and flatness)"
      url: "https://stacks.math.columbia.edu/tag/01OF"
      locator: "Lemma 31.33.4 (exceptional Cartier ideal); the regular-center computation uses the cited regular-sequence associated-graded lemma"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
---

## Statement

Assume the Axiom of Choice. Let $i\colon Z\to X$ be a regular immersion (so the conormal sheaf $\mathcal I/\mathcal I^2$ is locally free, with $\mathcal I$ the ideal sheaf of $Z$), and let $E$ be the exceptional divisor of the blowup of $X$ along $Z$. Then $E\to Z$ is canonically isomorphic to the projective bundle $\mathbb P_Z(\mathcal I/\mathcal I^2)=\operatorname{Proj}_Z\operatorname{Sym}(\mathcal I/\mathcal I^2)$ in the quotient convention. In particular, if $p$ is a closed point of a regular surface $S$ over a field $k$ with $\dim\mathcal O_{S,p}=2$ (automatic for finite-type pure-dimensional surfaces), then $\mathcal I/\mathcal I^2=\mathfrak m_p/\mathfrak m_p^2$ is free of rank two over $\kappa(p)$ and $E$ is isomorphic to the projective line $\mathbb P^1_{\kappa(p)}$ over $\kappa(p)$.

## Facts & Assumptions

**Given:** The Axiom of Choice, a regular immersion $i\colon Z\to X$ with ideal sheaf $\mathcal I$, the blowup of $X$ along $Z$ with exceptional divisor $E$, and, for the second claim, a closed point $p$ of a regular surface $S$ over a field $k$ with two-dimensional local ring.

[A1] **Regular-immersion hypothesis, local form.** The immersion $i$ is regular: every point of $Z$ has an affine open neighbourhood in $X$ $\operatorname{Spec}A$ on which $Z$ is cut out by an $A$-regular sequence $f_1,\dots,f_c\in A$, and the conormal sheaf $\mathcal I/\mathcal I^2$ is locally free there, with the classes of $f_1,\dots,f_c$ as a basis over $A/J$, $J=(f_1,\dots,f_c)$; the empty sequence $c=0$ is allowed.

[A2] **Choice.** The Axiom of Choice is assumed, as in the statement, and the cited suppliers used below are stated under it.

[F1] [[thm-exceptional-divisor-normal-cone-proj]]: Assume the Axiom of Choice. Let $Z=V(\mathcal I)$ be a closed subscheme of $X$ cut out by a quasi-coherent ideal sheaf $\mathcal I$ of finite type and let $E=\pi^{-1}(Z)$ be the exceptional subscheme of the blowup. Then there is a canonical isomorphism of $Z$-schemes $E\to\operatorname{Proj}_Z(\operatorname{gr}_{\mathcal I}\mathcal O_X)=\operatorname{Proj}_Z(\bigoplus_{n\ge0}\mathcal I^n/\mathcal I^{n+1})$, the projectivized normal cone of $Z$ in $X$.

[F2] [[lem-regular-sequence-associated-graded-polynomial]]: Let $R$ be a commutative ring and $f_1,\dots,f_c$ an $R$-regular sequence, $J=(f_1,\dots,f_c)$. The canonical graded homomorphism $(R/J)[X_1,\dots,X_c]\to\operatorname{gr}_J R$, $X_i\mapsto f_i$ modulo $J^2$, is an isomorphism. In particular $J/J^2$ is free on the classes of $f_i$ and $\operatorname{Sym}_{R/J}(J/J^2)=\operatorname{gr}_J R$. No Noetherian or domain hypothesis is required.

[F3] [[thm-associated-graded-ring-of-a-regular-local-ring]]: Assume the Axiom of Choice. If $(R,\mathfrak m,k)$ is regular local of dimension $d$, any cotangent basis induces a graded isomorphism $k[X_1,\dots,X_d]\cong\operatorname{gr}_{\mathfrak m}R$.

[F4] [[def-embedding-dimension-and-regular-local-ring]]: For a nonzero commutative Noetherian local ring $(R,\mathfrak m,k)$, $\operatorname{edim}R=\dim_k(\mathfrak m/\mathfrak m^2)$. The ring is **regular local** when $\operatorname{edim}R=\dim R$.

[F5] [[lem-embedding-dimension-is-minimal-maximal-ideal-generator-number]]: Assume the Axiom of Choice. For a nonzero Noetherian local ring $(R,\mathfrak m,k)$, $\operatorname{edim}R$ is the least number of generators of $\mathfrak m$.

[F6] [[def-projective-bundle-scheme]]: Let $E$ be a finite locally free $\mathcal O_S$-module of locally constant rank $r\ge0$. The **projective bundle** of $E$ over $S$ is the relative Proj $\mathbb P_S(E)=\operatorname{Proj}_S\operatorname{Sym}(E)\to S$, with the quotient convention: over an $S$-scheme $g\colon T\to S$, an $S$-morphism $T\to\mathbb P_S(E)$ is the same as an isomorphism class of surjections $g^*E\to L$ with $L$ invertible on $T$.

[F7] [[thm-regular-local-rings-are-domains-and-cohen-macaulay]], [[thm-one-dimensional-regular-local-rings-are-dvrs]]: Regular parameters form a regular sequence; a one-dimensional regular local ring is a DVR.

## Proof

1.1 Let $\operatorname{Spec}A\subseteq X$ be an affine chart on which $\mathcal I$ is generated by an $A$-regular sequence $f_1,\dots,f_c$ and put $J=(f_1,\dots,f_c)$, so that $J/J^2$ is free on the classes of the $f_i$ with $\operatorname{Sym}_{A/J}(J/J^2)\cong A/J[X_1,\dots,X_c]$. By [F2] the canonical graded homomorphism $A/J[X_1,\dots,X_c]\to\operatorname{gr}_J A$, $X_i\mapsto f_i+J^2$, is an isomorphism, so it is a canonical isomorphism $\operatorname{Sym}_{A/J}(J/J^2)\to\operatorname{gr}_J A$; for the empty sequence this reads $\operatorname{Sym}(0)=A/J=\operatorname{gr}_0 A$. [A1, F2]

2.1 Over this chart [F1] identifies the exceptional divisor $E$ with $\operatorname{Proj}_Z(\operatorname{gr}_{\mathcal I}\mathcal O_X)$, that is, with $\operatorname{Proj}_{\operatorname{Spec}A/J}(\operatorname{gr}_J A)$, canonically in $Z$; combining with step 1.1 gives a canonical isomorphism $E\cong\operatorname{Proj}_{A/J}\operatorname{Sym}(J/J^2)=\mathbb P_{\operatorname{Spec}A/J}(J/J^2)$ over the chart, the projective bundle in the quotient convention recorded in [F6]. In the degenerate case $J=0$ both sides of this display are empty and the identification is the empty isomorphism. [A2, F1, F6, step 1.1]

3.1 These neighborhoods cover $Z$. Over $X\setminus Z$ the inverse-image exceptional subscheme is empty, so no regular-sequence presentation of the unit ideal is required there. The chartwise isomorphisms of step 2.1 are canonical: on an overlap of two charts each is induced by the canonical graded multiplication map $\operatorname{Sym}(\mathcal I/\mathcal I^2)\to\operatorname{gr}_{\mathcal I}\mathcal O_X$, together with the canonical isomorphism of [F1], which involves no choices; hence they agree on overlaps and glue to a single canonical isomorphism of $Z$-schemes $E\to\mathbb P_Z(\mathcal I/\mathcal I^2)=\operatorname{Proj}_Z\operatorname{Sym}(\mathcal I/\mathcal I^2)$, the projective bundle of [F6] in the quotient convention. [F1, F6, step 2.1]

4.1 For the second claim let $p$ have the stated two-dimensional regular local ring on $S$ and let $\mathcal I$ be the ideal sheaf of $Z=\{p\}$, so that $\mathcal I/\mathcal I^2=\mathfrak m_p/\mathfrak m_p^2$. The point immersion is regular: its regular parameters form a regular sequence at $p$, and this property and generation of the point ideal extend to a neighborhood by killing the finite coherent quotients and multiplication kernels whose stalks vanish at $p$. Thus step 3.1 gives a canonical isomorphism $E\to\mathbb P_Z(\mathfrak m_p/\mathfrak m_p^2)$ of schemes over $\operatorname{Spec}\kappa(p)$. By hypothesis $\mathcal O_{S,p}$ is a regular local ring of dimension two with residue field $\kappa(p)$, so [F4] gives $\operatorname{edim}\mathcal O_{S,p}=\dim_{\kappa(p)}(\mathfrak m_p/\mathfrak m_p^2)=\dim\mathcal O_{S,p}=2$; thus $\mathfrak m_p/\mathfrak m_p^2$ is a free $\kappa(p)$-module of rank two. [F4, F7, step 3.1]

5.1 Let $u,v$ be a $\kappa(p)$-basis of $\mathfrak m_p/\mathfrak m_p^2$; it has exactly two elements by step 4.1, and by [F5] the lifted elements $u,v$ minimally generate $\mathfrak m_p$, so their initial classes generate $\operatorname{gr}_{\mathfrak m_p}\mathcal O_{S,p}$ in degree one. Applying [F3] to the two-dimensional regular local ring $\mathcal O_{S,p}$ with this cotangent basis gives a graded $\kappa(p)$-algebra isomorphism $\kappa(p)[X,Y]\to\operatorname{gr}_{\mathfrak m_p}\mathcal O_{S,p}$ with $X\mapsto u$, $Y\mapsto v$. [A2, F3, F5, step 4.1]

6.1 Finally $\mathbb P_Z(\mathfrak m_p/\mathfrak m_p^2)=\operatorname{Proj}_{\kappa(p)}\operatorname{Sym}(\mathfrak m_p/\mathfrak m_p^2)$ for the free rank-two module $\mathfrak m_p/\mathfrak m_p^2$ is by [F6] exactly $\operatorname{Proj}_{\kappa(p)}\kappa(p)[X,Y]=\mathbb P^1_{\kappa(p)}$, and step 5.1 identifies this graded algebra with $\operatorname{gr}_{\mathfrak m_p}\mathcal O_{S,p}$; hence, with the canonical isomorphism $E\to\mathbb P_Z(\mathcal I/\mathcal I^2)$ of step 3.1, the exceptional divisor satisfies $E\cong\mathbb P^1_{\kappa(p)}$ and $\mathcal I/\mathcal I^2$ is free of rank two over $\kappa(p)$, as claimed. [F6, step 3.1, step 5.1] ∎

## Remarks

For a general Noetherian regular surface a closed point can instead have local dimension one. Its point ideal is then locally Cartier (a DVR parameter near the point and the unit ideal elsewhere), and its principal regular chart algebra is $A[(a)/a]=A$, so its blowup is the identity and the exceptional fiber is $\mathbb P^0_{\kappa(p)}=\operatorname{Spec}\kappa(p)$. No degree $-1$ on a point is asserted. The main regular-immersion statement covers this rank-one case as well.
