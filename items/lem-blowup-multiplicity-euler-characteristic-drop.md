---
id: lem-blowup-multiplicity-euler-characteristic-drop
kind: lemma
title: "Euler characteristic and normalization defect under a point blowup"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - lem-blowup-point-pushforward-vanishing
  - lem-projection-formula-invertible-twist
  - lem-exceptional-fiber-line-bundle-euler-characteristic
  - thm-blowup-regular-surface-closed-point-regular
  - lem-total-transform-strict-plus-exceptional-multiplicity
  - cor-twist-exact-sequence-effective-divisor
  - lem-effective-cartier-divisor-exact-sequence
  - lem-euler-characteristic-additive-short-exact
  - def-euler-characteristic-coherent-sheaf
  - def-coherent-module-scheme
  - def-proper-morphism
  - cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - lem-closed-immersion-cohomology-pushforward
  - def-cartier-divisor
  - lem-acyclic-direct-image-cohomology-comparison
  - def-axiom-of-choice
  - thm-blowup-projective
  - def-multiplicity-hypersurface-point
  - def-strict-transform-closed-subscheme
  - def-normalization-defect-of-reduced-curve
  - lem-normalization-defect-euler-and-lengths
  - lem-normalization-unchanged-under-finite-birational-curve-map
  - thm-proper-quasi-finite-is-finite
  - lem-proper-source-to-separated-target-proper
  - lem-blowup-isomorphism-off-center
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
      locator: "19.4.2-19.4.3 resolution by point blowups and the multiplicity computations, pp. 390-391"
    - title: "J. S. Milne, Algebraic Geometry v6.10"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
      locator: "Chapter 8 blowups and resolution of curve singularities, pp. 194-197"
    - title: "The Stacks Project, Divisors, Sections 31.33-31.36 (Blowing up; Strict transform; Admissible blowups; Blowing up and flatness)"
      url: "https://stacks.math.columbia.edu/tag/01OF"
      locator: "Lemma 31.33.4 and the section on blowing up and flatness, Section 31.36"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $k$ be a field, let $S$ be a regular surface
proper over $k$ with an ample invertible sheaf, let $C\subseteq S$ be a
reduced curve (an effective Cartier divisor), let $p$ be a closed point of
$S$ with residue degree $r=[\kappa(p):k]$ and let
$m=\operatorname{ord}_{\mathfrak m_p}(f)\ge1$ be the order of a local
equation $f$ of $C$ in $\mathcal O_{S,p}$, namely
$f\in\mathfrak m_p^m\setminus\mathfrak m_p^{m+1}$. This is the intrinsic
multiplicity, agreeing with [[def-multiplicity-hypersurface-point]] in its
affine rational-point setting. Let
$\pi\colon S'\to S$ be the blowup of $p$ with exceptional curve $E$ and let
$C'$ be the strict transform of $C$. Then
$\pi^*C=C'+mE$ as effective Cartier divisors on $S'$, and writing
$\chi_k(\mathcal O_X):=\chi_k(X,\mathcal O_X)$ for the Euler characteristic
of the structure sheaf ([[def-euler-characteristic-coherent-sheaf]]), one has
$$\chi_k(\mathcal O_{C'})=\chi_k(\mathcal O_C)+r\binom{m}{2}.$$
Consequently, for the normalization defect
$\delta_k$ of [[def-normalization-defect-of-reduced-curve]],
$$\delta_k(C')=\delta_k(C)-r\binom{m}{2}.$$

## Facts & Assumptions

**Given:** A field $k$, a regular surface $S$ proper over $k$ with an ample invertible sheaf, a reduced effective Cartier divisor $C\subseteq S$, a closed point $p$ with residue field $K=\kappa(p)$ of degree $r$ over $k$, the multiplicity $m=\operatorname{mult}_p(C)\ge1$, the blowup $\pi\colon S'\to S$ of $p$ with exceptional curve $E$, and the strict transform $C'$. The Axiom of Choice is assumed as in the statement, inherited from the Proj and cohomology constructions ([[def-axiom-of-choice]]).

[F1] [[lem-total-transform-strict-plus-exceptional-multiplicity]]: For a reduced curve $C$ on a regular surface, a point blowup gives $\pi^*C=C'+mE$ with $C'$ the strict transform, and $C'$ meets $E$ in the $0$-cycle of degree $m$ over $K$ cut out by the degree-$m$ leading form. Both $C$ and $C'$ are effective Cartier divisors ([[def-cartier-divisor]]).

[F2] [[thm-blowup-regular-surface-closed-point-regular]]: $S'$ is regular of pure dimension two, $E$ is an effective Cartier divisor isomorphic to $\mathbb P^1_K$, and $\mathcal O_E(E)\cong \mathcal O_{\mathbb P^1_K}(-1)$.

[F3] [[thm-blowup-projective]] and [[def-strict-transform-closed-subscheme]]: The blowup is proper over $S$, hence proper over $k$; $C$ and $C'$ are closed subschemes of $S$ and $S'$ respectively, hence proper over $k$; $C'$ is reduced because $C$ is reduced; and properness makes all these schemes of finite type over $k$ ([[def-proper-morphism]]). Their affine coordinate rings are Noetherian because $k$ is Noetherian ([[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]]); thus their structure sheaves, and all finite locally free sheaves on them, are coherent ([[def-coherent-module-scheme]]).

[F4] [[lem-blowup-point-pushforward-vanishing]]: $\pi_*\mathcal O_{S'}= \mathcal O_S$ and $R^q\pi_*\mathcal O_{S'}=0$ for all $q>0$.

[F5] [[lem-projection-formula-invertible-twist]] and [[lem-acyclic-direct-image-cohomology-comparison]]: For an invertible sheaf $\mathcal L$ on $S$ the projection formula identifies $R^q\pi_*(\pi^*\mathcal L)\cong R^q\pi_*\mathcal O_{S'}\otimes\mathcal L$, so by [F4] the sheaf $\pi^*\mathcal L$ has vanishing higher direct images and $\pi_*(\pi^*\mathcal L)=\mathcal L$; the vanishing-direct-image comparison gives $H^q(S',\pi^*\mathcal L)\cong H^q(S,\mathcal L)$ for all $q$, whence $\chi_k(S',\pi^*\mathcal L)=\chi_k(S,\mathcal L)$ since $S,S'$ are proper over $k$ and the sheaves are coherent.

[F6] [[cor-twist-exact-sequence-effective-divisor]] and
[[lem-effective-cartier-divisor-exact-sequence]]: For an effective Cartier
divisor $D$ on a scheme $X$ with closed immersion $i\colon D\to X$ and an
invertible sheaf $\mathcal L$ there is a short exact sequence
$$0\longrightarrow\mathcal L(-D)\longrightarrow\mathcal L\longrightarrow i_*(\mathcal L|_D)\longrightarrow0,$$
where $\mathcal L(-D)=\mathcal L\otimes\mathcal O_X(-D)$ is again invertible;
for $\mathcal L=\mathcal O_X$ this is the standard sequence
$0\to\mathcal O_X(-D)\to\mathcal O_X\to i_*\mathcal O_D\to0$.

[F7] [[lem-euler-characteristic-additive-short-exact]]: On a scheme proper over $k$, the Euler characteristic of coherent sheaves is additive in short exact sequences.

[F8] [[lem-closed-immersion-cohomology-pushforward]]: For a closed immersion $i\colon Z\to X$ and a quasi-coherent $\mathcal O_Z$-module $\mathcal F$ there are isomorphisms $H^q(Z,\mathcal F)\cong H^q(X,i_*\mathcal F)$ for all $q\ge0$, and $i_*\mathcal F$ is coherent when $X$ is locally Noetherian and $\mathcal F$ is coherent.

[F9] [[lem-exceptional-fiber-line-bundle-euler-characteristic]]: For an invertible sheaf $M$ of degree $d$ over $K$ on $E\cong\mathbb P^1_K$ one has $\chi_k(E,M)=r(1+d)$; in particular a line bundle of degree $-j$ has $k$-Euler characteristic $r(1-j)$.

[F10] [[def-normalization-defect-of-reduced-curve]], [[lem-normalization-defect-euler-and-lengths]], [[lem-normalization-unchanged-under-finite-birational-curve-map]], [[thm-proper-quasi-finite-is-finite]] and [[lem-proper-source-to-separated-target-proper]]: For a reduced proper curve $X$ over $k$ with normalization $\widetilde X$ one has $\delta_k(X)=\chi_k(\mathcal O_{\widetilde X})-\chi_k(\mathcal O_X)$; a finite birational morphism of reduced curves induces an isomorphism of normalizations; and a morphism from a proper $k$-scheme to a separated $k$-scheme is proper, while a proper quasi-finite morphism is finite.

[F11] [[lem-blowup-isomorphism-off-center]]: $\pi$ restricts to an isomorphism over $S\smallsetminus\{p\}$.

## Proof

1.1 The curve $C$ is an effective Cartier divisor on the regular surface $S$, so [F1] gives the divisor identity $\pi^*C=C'+mE$ and shows that $C'$ is again an effective Cartier divisor, meeting $E$ in a finite $0$-cycle of degree $m$ over $K$. By [F2] the exceptional curve is $E\cong\mathbb P^1_K$ with $\mathcal O_E(E)\cong\mathcal O_{\mathbb P^1_K}(-1)$, and by [F3] the schemes $S,S',C,C'$ are proper and locally Noetherian of finite type over $k$ with coherent structure sheaves; $r=[K:k]$ is finite because $S$ is of finite type over $k$. [F1, F2, F3]

2.1 For $j=0,1,\dots,m$ put $\mathcal L_j:=\mathcal O_{S'}(-\pi^*C+jE):=\mathcal O_{S'}(-\pi^*C)\otimes\mathcal O_{S'}(E)^{\otimes j}$, an invertible sheaf with $\mathcal L_m=\mathcal O_{S'}(-C')$ by the divisor identity of step 1.1. For $j\ge1$ apply the twisted sequence of [F6] on $S'$ to the effective Cartier divisor $E$ and the invertible sheaf $\mathcal L_j$: since $\mathcal L_j(-E)=\mathcal L_{j-1}$ and writing $i\colon E\to S'$ for the closed immersion and $Q_j:=\mathcal L_j|_E$, one gets the short exact sequence $0\to\mathcal L_{j-1}\to\mathcal L_j\to i_*Q_j\to0$, whose three terms are coherent because $S'$ is locally Noetherian. Additivity [F7] gives $\chi_k(S',\mathcal L_j)-\chi_k(S',\mathcal L_{j-1})=\chi_k(S',i_*Q_j)$, and [F8] identifies the last term with $\chi_k(E,Q_j)$. [F6, F7, F8, step 1.1]

2.2 Apply the untwisted sequence of [F6] to the effective Cartier divisor $C$ on $S$ and to the effective Cartier divisor $C'$ on $S'$, whose structure sheaves are coherent by step 1.1: $0\to\mathcal O_S(-C)\to\mathcal O_S\to i_*\mathcal O_C\to0$ and $0\to\mathcal O_{S'}(-C')\to\mathcal O_{S'}\to i'_*\mathcal O_{C'}\to0$. Additivity [F7] and the identification $H^q(C,\mathcal O_C)\cong H^q(S,i_*\mathcal O_C)$, respectively $H^q(C',\mathcal O_{C'})\cong H^q(S',i'_*\mathcal O_{C'})$, from [F8], give $\chi_k(S,\mathcal O_S)=\chi_k(S,\mathcal O_S(-C))+\chi_k(\mathcal O_C)$ and $\chi_k(S',\mathcal O_{S'})=\chi_k(S',\mathcal O_{S'}(-C'))+\chi_k(\mathcal O_{C'})$. [F6, F7, F8, step 1.1]

3.1 The restriction $Q_j=\mathcal L_j|_E$ is computed as follows. First, $\mathcal O_{S'}(jE)|_E=\mathcal O_E(E)^{\otimes j}$ is isomorphic to $\mathcal O_{\mathbb P^1_K}(-j)$ by [F2]. Second, $(\pi^*\mathcal O_S(-C))|_E\cong\mathcal O_E$: the morphism $\pi|_E\colon E\to S$ factors as $E\to\operatorname{Spec}K\to S$, and the restriction of the invertible sheaf $\mathcal O_S(-C)$ to the residue point is a free rank-one $K$-module, whose pullback along $E\to\operatorname{Spec}K$ is free of rank one. Hence $Q_j\cong\mathcal O_{\mathbb P^1_K}(-j)$, a line bundle of degree $-j$ over $K$, and [F9] gives $\chi_k(E,Q_j)=r(1-j)$. [F2, F9, algebra, step 2.1]

4.1 Summing the identities of step 2.1 over $j=1,\dots,m$ and substituting step 3.1 gives $\chi_k(S',\mathcal L_m)-\chi_k(S',\mathcal L_0)=\sum_{j=1}^mr(1-j)=-r\binom{m}{2}$, that is, $\chi_k(S',\mathcal O_{S'}(-C'))=\chi_k(S',\pi^*\mathcal O_S(-C))-r\binom{m}{2}$ because $\mathcal L_0=\pi^*\mathcal O_S(-C)$. [step 2.1, step 3.1, algebra]

5.1 By [F5] applied to the invertible sheaf $\mathcal O_S(-C)$ the Euler characteristics agree: $\chi_k(S',\pi^*\mathcal O_S(-C))=\chi_k(S,\mathcal O_S(-C))$, and likewise $\chi_k(S',\mathcal O_{S'})=\chi_k(S',\pi^*\mathcal O_S)=\chi_k(S,\mathcal O_S)$. Combining with step 4.1, $\chi_k(S',\mathcal O_{S'}(-C'))=\chi_k(S,\mathcal O_S(-C))-r\binom{m}{2}$. [F4, F5, step 4.1]

6.1 Subtracting the two identities of step 2.2 and substituting step 5.1 yields $\chi_k(\mathcal O_{C'})-\chi_k(\mathcal O_C)=[\chi_k(S',\mathcal O_{S'})-\chi_k(S',\mathcal O_{S'}(-C'))]-[\chi_k(S,\mathcal O_S)-\chi_k(S,\mathcal O_S(-C))]=\chi_k(S',\mathcal O_{S'})-\chi_k(S,\mathcal O_S)+r\binom{m}{2}=r\binom{m}{2}$, since $\chi_k(S',\mathcal O_{S'})=\chi_k(S,\mathcal O_S)$. This proves $\chi_k(\mathcal O_{C'})=\chi_k(\mathcal O_C)+r\binom{m}{2}$ and, together with the divisor identity $\pi^*C=C'+mE$ of step 1.1, the first assertions. [step 1.1, step 2.2, step 5.1]

7.1 The morphism $C'\to C$ induced by $\pi$ is proper: $C'$ is a closed subscheme of the proper $k$-scheme $S'$, hence proper over $k$, and $C$ is separated over $k$ as a closed subscheme of the separated scheme $S$; by [F10] a morphism from a proper $k$-scheme to a separated one is proper. It is quasi-finite: by [F11] it is an isomorphism over $C\smallsetminus\{p\}$, and over $p$ its fibre is the finite $0$-cycle $C'\cap E\subseteq E$ of step 1.1. It is birational: it is an isomorphism over the dense open $C\smallsetminus\{p\}$, $p$ being a closed point of the reduced curve $C$. Hence $C'\to C$ is finite by [F10], and [F10] identifies the normalizations of $C$ and $C'$ over $C$. [F10, F11, step 1.1, step 6.1]

8.1 By step 1.1 both $C$ and $C'$ are reduced proper curves over $k$, so [F10] computes their defects on the common normalization $\widetilde C$: $\delta_k(C)=\chi_k(\mathcal O_{\widetilde C})-\chi_k(\mathcal O_C)$ and $\delta_k(C')=\chi_k(\mathcal O_{\widetilde C})-\chi_k(\mathcal O_{C'})$. Subtracting and using step 6.1, $\delta_k(C')-\delta_k(C)=\chi_k(\mathcal O_C)-\chi_k(\mathcal O_{C'})=-r\binom{m}{2}$. Thus $\pi^*C=C'+mE$, $\chi_k(\mathcal O_{C'})=\chi_k(\mathcal O_C)+r\binom{m}{2}$ and $\delta_k(C')=\delta_k(C)-r\binom{m}{2}$. [F10, step 6.1, step 7.1] ∎

## Remarks

- The factor $r=[\kappa(p):k]$ records the residue degree of the blown-up point: the successive quotients of the filtration are line bundles of degree $-j$ on a projective line over $\kappa(p)$, and their $k$-Euler characteristic is measured through $r$.
- Summing the identity over the singular points of a reduced curve on a regular surface gives the strictly decreasing invariant that drives the resolution algorithm; for $m=1$ the correction vanishes, matching the fact that blowing up a regular point of a reduced curve does not change $\chi_k(\mathcal O_C)$.
