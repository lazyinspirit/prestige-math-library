---
id: lem-normalization-lowers-arithmetic-genus-delta
kind: lemma
title: "Arithmetic genus, geometric genus and delta invariants"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-finite-morphism-proper
  - def-arithmetic-genus-proper-curve
  - def-axiom-of-choice
  - def-coherent-module-scheme
  - def-delta-invariant-curve-singularity
  - def-direct-image-sheaf
  - def-euler-characteristic-coherent-sheaf
  - def-geometric-genus-singular-curve
  - def-quasi-coherent-ideal-sheaf
  - def-quasi-coherent-module-scheme
  - lem-affine-morphism-cohomology-pushforward
  - lem-associated-sheaf-sections-basic-open
  - lem-associated-sheaf-stalk-localization
  - lem-closed-immersion-cohomology-pushforward
  - lem-euler-characteristic-additive-short-exact
  - thm-finite-morphism-integral-closed
  - thm-affine-quasi-coherent-equivalence
  - thm-cohomology-disjoint-union
  - thm-h0-structure-sheaf-proper-curve
  - thm-normalization-glues-integral-finite-type-curves
  - thm-proper-pushforward-coherent
  - thm-qc-ideal-closed-subscheme-correspondence-complete
  - thm-qc-sheaf-affine-higher-cohomology-vanishes
  - thm-support-and-annihilator-of-a-finite-module
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
    - title: "William Fulton, Algebraic Curves (Internet Archive copy), Chs. 6-8"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Jiahui Gao and Shouwu Zhang, Lectures on Algebraic Geometry (December 14, 2019), Ch. 7"
      url: "https://web.math.princeton.edu/~shouwu/publications/LAG2.pdf"
---

## Statement

Assume the Axiom of Choice and let $k$ be algebraically closed. Let $X$ be an
integral proper finite-type curve over $k$ with normalization
$\nu:X^{\mathrm{nu}}\to X$. Then
$$p_a(X)=g(X^{\mathrm{nu}})+\sum_{x\in X}\delta_x(X),$$
the sum being finite and supported on the singular points of $X$; equivalently
$g(X^{\mathrm{nu}})=p_a(X)-\sum_x\delta_x(X)$.

## Facts & Assumptions
**Given:** An algebraically closed field $k$, an integral proper finite-type curve $X$ over $k$, and its normalization $\nu:X^{\mathrm{nu}}\to X$.

[F1] The normalization $\nu:X^{\mathrm{nu}}\to X$ is finite, affine and birational, $X^{\mathrm{nu}}$ is an integral normal scheme with the same function field as $X$, and the pair is unique up to unique isomorphism over $X$; since $k$ is algebraically closed, hence perfect, $X^{\mathrm{nu}}$ is a smooth proper curve over $k$ and its geometric genus $g(X^{\mathrm{nu}})=h^1(X^{\mathrm{nu}},\mathcal O_{X^{\mathrm{nu}}})$ is defined. ([[thm-normalization-glues-integral-finite-type-curves]], [[def-geometric-genus-singular-curve]], [[cor-finite-morphism-proper]])

[F2] The delta invariant of $X$ at a closed point $x$ is $\delta_x(X)=\dim_k\bigl((\nu_*\mathcal O_{X^{\mathrm{nu}}})_x/\mathcal O_{X,x}\bigr)$, a nonnegative integer, and $\delta_x(X)=0$ if and only if $x$ is a regular point of $X$; the singular locus of $X$ is finite, so $\delta(X)=\sum_x\delta_x(X)$ is a finite sum supported on the singular points. The quotient sheaf $\mathcal Q=(\nu_*\mathcal O_{X^{\mathrm{nu}}})/\mathcal O_X$, where $\mathcal O_X\to\nu_*\mathcal O_{X^{\mathrm{nu}}}$ is the natural map, has stalk $\mathcal Q_x=(\nu_*\mathcal O_{X^{\mathrm{nu}}})_x/\mathcal O_{X,x}$ and is coherent. ([[def-delta-invariant-curve-singularity]], [[thm-finite-morphism-integral-closed]], [[thm-proper-pushforward-coherent]])

[F3] For an integral proper curve $X$ over $k$ the arithmetic genus is $p_a(X)=1-\chi(\mathcal O_X)$, and for a smooth proper geometrically integral curve $C$ over $k$ the genus is $g(C)=h^1(C,\mathcal O_C)=1-\chi(\mathcal O_C)$, where $H^0(C,\mathcal O_C)=k$ and $\chi$ is the Euler characteristic of coherent sheaves on schemes proper over $k$, a finite alternating sum of finite-dimensional $k$-vector spaces. ([[def-arithmetic-genus-proper-curve]], [[def-euler-characteristic-coherent-sheaf]], [[thm-h0-structure-sheaf-proper-curve]], [[def-coherent-module-scheme]])

[F4] For every short exact sequence $0\to\mathcal F'\to\mathcal F\to\mathcal F''\to0$ of coherent sheaves on a scheme proper over $k$ one has $\chi(\mathcal F)=\chi(\mathcal F')+\chi(\mathcal F'')$. ([[lem-euler-characteristic-additive-short-exact]])

[F5] If $f:X\to S$ is affine and $\mathcal F$ is quasi-coherent on $X$ then $H^q(S,f_*\mathcal F)\cong H^q(X,\mathcal F)$ for all $q\ge0$; a finite morphism is affine. ([[lem-affine-morphism-cohomology-pushforward]], [[thm-finite-morphism-integral-closed]], [[thm-normalization-glues-integral-finite-type-curves]])

[F6] If $i:Z\to X$ is a closed immersion and $\mathcal F$ is quasi-coherent on $Z$ then $H^q(Z,\mathcal F)\cong H^q(X,i_*\mathcal F)$ for all $q\ge0$; and on an affine scheme every quasi-coherent sheaf has vanishing higher cohomology, $H^q=0$ for $q>0$. ([[lem-closed-immersion-cohomology-pushforward]], [[thm-qc-sheaf-affine-higher-cohomology-vanishes]])

[F7] The direct image is given on opens by $(i_*\mathcal F)(U)=\mathcal F(i^{-1}U)$. ([[def-direct-image-sheaf]])

[F8] On an affine scheme $U=\operatorname{Spec}A$, every quasi-coherent module is canonically the associated sheaf of its module of global sections; if it is coherent, that module is finitely generated. For $\mathcal Q|_U\cong\widetilde M$, the sections on $D(f)$ are $M_f$ and the stalk at $\mathfrak p$ is $M_{\mathfrak p}$. ([[thm-affine-quasi-coherent-equivalence]], [[def-coherent-module-scheme]], [[lem-associated-sheaf-sections-basic-open]], [[lem-associated-sheaf-stalk-localization]])

[F9] If $M$ is a finitely generated $A$-module, then $\operatorname{Supp}(M)=V(\operatorname{Ann}_A(M))$. ([[thm-support-and-annihilator-of-a-finite-module]])

[F10] A quasi-coherent ideal sheaf $\mathcal I\subseteq\mathcal O_X$ defines the closed subscheme $S=V(\mathcal I)$ with structure sheaf $(\mathcal O_X/\mathcal I)|_S$, and on an affine chart $U=\operatorname{Spec}A$ with $\mathcal I|_U=\widetilde J$ this is $\operatorname{Spec}(A/J)$, retaining the quotient's nilpotents. ([[def-quasi-coherent-ideal-sheaf]], [[thm-qc-ideal-closed-subscheme-correspondence-complete]])

[F11] For a finite disjoint union of open-and-closed subschemes, sheaf cohomology is the finite product of the component cohomologies, and a quasi-coherent sheaf on an affine component has zero higher cohomology. ([[thm-cohomology-disjoint-union]], [[thm-qc-sheaf-affine-higher-cohomology-vanishes]])



## Proof

**Proof technique:** direct; split the structure sequence of the normalization into the delta quotient and compare Euler characteristics through affine and closed-immersion cohomology comparisons.

1.1 Setting. The normalization $\nu$ is a finite, affine and birational morphism of integral curves with the same function field [F1]; $X^{\mathrm{nu}}$ is a smooth proper curve over the algebraically closed field $k$ and $g(X^{\mathrm{nu}})=h^1(X^{\mathrm{nu}},\mathcal O_{X^{\mathrm{nu}}})$ [F1]. In particular both $X$ and $X^{\mathrm{nu}}$ are proper over $k$, so the Euler characteristic of [F3] is defined for all coherent sheaves occurring below. [F1, F3]

1.2 The structure sequence. Since $\nu$ is birational and both sheaves sit inside the constant sheaf of the function field $k(X)$, the natural map $\mathcal O_X\to\nu_*\mathcal O_{X^{\mathrm{nu}}}$ is injective; let $\mathcal Q$ be its cokernel. Then
$$0\longrightarrow\mathcal O_X\longrightarrow\nu_*\mathcal O_{X^{\mathrm{nu}}}\longrightarrow\mathcal Q\longrightarrow0$$
is a short exact sequence of coherent $\mathcal O_X$-modules: $\nu_*\mathcal O_{X^{\mathrm{nu}}}$ is coherent because $\nu$ is finite and proper [F2], and $\mathcal Q$ is a quotient of a coherent sheaf on the locally Noetherian scheme $X$. [F1, F2, F3]

1.3 Support and stalks. For a closed point $x$ one has $\mathcal Q_x=(\nu_*\mathcal O_{X^{\mathrm{nu}}})_x/\mathcal O_{X,x}$ [F2], so $\delta_x(X)=\dim_k\mathcal Q_x$, and $\mathcal Q_x=0$ exactly when $x$ is regular [F2]; the support $S=\{x:\mathcal Q_x\ne0\}$ is the finite set of singular points of $X$ and $\sum_{x\in S}\delta_x(X)=\sum_{x\in X}\delta_x(X)$. [F2]

1.4 Cohomology of the pushforward. Since $\nu$ is finite, hence affine, the comparison of [F5] identifies $H^q(X,\nu_*\mathcal O_{X^{\mathrm{nu}}})\cong H^q(X^{\mathrm{nu}},\mathcal O_{X^{\mathrm{nu}}})$ for all $q\ge0$; hence $\chi(X,\nu_*\mathcal O_{X^{\mathrm{nu}}})=\chi(X^{\mathrm{nu}},\mathcal O_{X^{\mathrm{nu}}})$. [F5]

2.1 Euler characteristics of the structure sequence. Applying additivity [F4] to the sequence of step 1.2, all three terms being coherent on the proper curve $X$ [F3], gives $\chi(X,\mathcal O_X)=\chi(X,\nu_*\mathcal O_{X^{\mathrm{nu}}})-\chi(X,\mathcal Q)$. [F3, F4, step 1.2]

2.2 Cohomology of the delta quotient. Define the annihilator subsheaf $\mathcal I\subseteq\mathcal O_X$ by requiring a local function to act as the zero endomorphism of $\mathcal Q$; this is a sheaf ideal because vanishing of a sheaf morphism is local. On an affine open $U=\operatorname{Spec}A$, write $\mathcal Q|_U\cong\widetilde M$ with $M$ finitely generated [F8], and put $J_U=\operatorname{Ann}_A(M)=\Gamma(U,\mathcal I)$; the equality holds because $a\in A$ annihilates $M$ exactly when it annihilates every localization $M_f=\mathcal Q(D(f))$ on the principal-open basis of $U$. These ideals localize correctly: if $M=0$ the equality $\operatorname{Ann}_{A_f}(M_f)=(J_U)_f$ is immediate; otherwise choose finite generators $m_1,\ldots,m_r$. If $a/f^n$ annihilates $M_f$, then for each $j$ some $e_j\ge0$ has $f^{e_j}am_j=0$; taking $e=\max_j e_j$ gives $f^ea\in J_U$, hence $a/f^n\in(J_U)_f$. The reverse inclusion is immediate. By the definition of $\mathcal I$, $\Gamma(D(f),\mathcal I)=\operatorname{Ann}_{A_f}(M_f)$, so this localization identity shows that $\mathcal I|_U=\widetilde{J_U}$ on the principal-open basis. The affine descriptions agree on overlaps because they are restrictions of the intrinsic annihilator subsheaf; in particular $\mathcal I$ is quasi-coherent [F8]. By [F9], on each such $U$ the support of $\mathcal Q$ is $V(J_U)$, and the closed subscheme $i:S=V(\mathcal I)\hookrightarrow X$ from [F10] therefore has underlying space exactly the finite set in step 1.3. This is the annihilator thickening, not the reduced support; it retains any nilpotents in $\mathcal O_X/\mathcal I$. Since $\mathcal I$ annihilates $\mathcal Q$, the $\mathcal O_X$-action on $\mathcal Q$ factors through $\mathcal O_S$. On $S\cap U=\operatorname{Spec}(A/J_U)$ define $\mathcal G$ by the same module $M$, now regarded as an $A/J_U$-module. The restriction maps inherited from $\mathcal Q$ are $\mathcal O_S$-linear because $\mathcal I$ annihilates $\mathcal Q$, and their cocycle identities are inherited from those of $\mathcal Q$; hence they glue the local modules to a quasi-coherent $\mathcal O_S$-module $\mathcal G$. For every principal open $D(f)\subseteq U$, the direct image definition and the associated-sheaf section formula identify $(i_*\mathcal G)(D(f))=M_{\bar f}=M_f=\mathcal Q(D(f))$, compatibly with restrictions; hence $i_*\mathcal G\cong\mathcal Q$. [F7, F8, F9, F10, step 1.3]

The finite set $|S|$ consists of closed points, so each singleton is closed in $S$ and, since its complement is a finite union of closed singletons, open as well. Thus $S$ is the finite disjoint union of its one-point open-and-closed components $S_x$. Each $S_x$ is affine: an affine open neighborhood of its unique point is all of $S_x$. Its unique prime is its unique maximal ideal, so every element outside that prime is a unit; the affine associated-module and stalk identifications [F8] therefore give $\Gamma(S_x,\mathcal G|_{S_x})\cong\mathcal G_x\cong(i_*\mathcal G)_x=\mathcal Q_x$. By [F11], higher cohomology of $\mathcal G$ on each affine $S_x$ vanishes and cohomology on the finite disjoint union is the product of the component groups. Consequently $H^q(S,\mathcal G)=0$ for $q>0$ and $$\dim_k H^0(S,\mathcal G)=\sum_{x\in S}\dim_k\mathcal Q_x=\sum_{x\in S}\delta_x(X).$$ Applying the closed-immersion cohomology comparison [F6] to $i$ and $\mathcal G$ gives the same conclusions for $H^q(X,\mathcal Q)$. [F6, F7, F8, F11, step 1.3]

3.1 Euler characteristic of the quotient. By step 2.2 only $H^0$ contributes, so $\chi(X,\mathcal Q)=\sum_{x\in S}\delta_x(X)$, the sum being finite by step 1.3. [F3, step 1.3, step 2.2]

4.1 Arithmetic and geometric genus. Substituting steps 1.4 and 3.1 into step 2.1 gives $\chi(X,\mathcal O_X)=\chi(X^{\mathrm{nu}},\mathcal O_{X^{\mathrm{nu}}})-\sum_x\delta_x(X)$. By [F3] one has $1-p_a(X)=\chi(X,\mathcal O_X)$ and, since $H^0(X^{\mathrm{nu}},\mathcal O_{X^{\mathrm{nu}}})=k$ [F3], also $\chi(X^{\mathrm{nu}},\mathcal O_{X^{\mathrm{nu}}})=1-g(X^{\mathrm{nu}})$. Therefore $1-p_a(X)=1-g(X^{\mathrm{nu}})-\sum_x\delta_x(X)$, that is, $p_a(X)=g(X^{\mathrm{nu}})+\sum_x\delta_x(X)$. [F1, F3, step 2.1, step 1.4, step 3.1]

5.1 Conclusion. For an integral proper finite-type curve over an algebraically closed field, the arithmetic genus exceeds the geometric genus of the normalization exactly by the total delta invariant, $p_a(X)=g(X^{\mathrm{nu}})+\sum_x\delta_x(X)$, the sum finite and supported on the singular points by step 1.3; equivalently $g(X^{\mathrm{nu}})=p_a(X)-\sum_x\delta_x(X)$. The Axiom of Choice is inherited from the normalization, finiteness and cohomology suppliers used in steps 1.1, 1.4 and 2.2. ∎
