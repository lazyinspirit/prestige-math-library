---
id: thm-blowup-closed-immersion-transform-universal
kind: theorem
title: "Strict transforms of closed subschemes are blowups of the subscheme"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-strict-transform-closed-subscheme
  - def-blowup-scheme-along-ideal
  - thm-blowup-universal-property
  - lem-blowup-local-on-base-scheme
  - lem-schematic-closure-and-dense-agreement
  - def-quasi-coherent-ideal-sheaf
  - def-quasi-coherent-module-scheme
  - def-closed-immersion-schemes
  - def-reduction-of-scheme
  - cor-blowup-unique-up-to-unique-isomorphism
  - thm-pullback-center-ideal-invertible
  - thm-affine-blowup-standard-charts
  - lem-affine-blowup-algebra-properties
  - lem-closed-immersion-local-on-target
  - def-axiom-of-choice
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Divisors, Sections 31.33-31.36 (Blowing up; Strict transform; Admissible blowups; Blowing up and flatness)"
      url: "https://stacks.math.columbia.edu/tag/01OF"
      locator: "Definition 31.34.1 and Lemma 31.34.2 (tags 080D, 080E)"
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, June 27, 2011 draft (author-hosted 'Early (out-of-date) version of The Rising Sea')"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGjun2711publicnoindex.pdf"
      locator: "19.2.5-19.2.7 the Blow-up Closure Lemma and its consequences for closed subschemes, pp. 382-383"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $\mathcal I$ be a quasi-coherent ideal sheaf
of finite type on a scheme $X$
([[def-quasi-coherent-ideal-sheaf]]), let
$\pi\colon\operatorname{Bl}_{\mathcal I}X\to X$ be the blowup of
[[def-blowup-scheme-along-ideal]] with center $Z=V(\mathcal I)$, and let
$W\hookrightarrow X$ be a closed subscheme
([[def-closed-immersion-schemes]]). Write
$\mathcal J=\mathcal I\mathcal O_W$ for the inverse image ideal of
$\mathcal I$ in $W$; it is a quasi-coherent ideal sheaf of finite type, and
it cuts out the scheme-theoretic intersection $W\cap Z$. Then the strict
transform $W'$ of $W$ ([[def-strict-transform-closed-subscheme]]), the
scheme-theoretic closure of $\pi^{-1}(W\smallsetminus Z)$ in
$W\times_X\operatorname{Bl}_{\mathcal I}X$, is canonically isomorphic over
$W$ to the blowup $\operatorname{Bl}_{\mathcal J}W$; equivalently, $W'$ is
the blowup of $W$ along the closed subscheme $W\cap Z$. On the standard
affine charts $\operatorname{Spec}A\subseteq X$ with
$\mathcal I=(f_0,\dots,f_r)$ and $W=\operatorname{Spec}(A/K)$, the chart
$\operatorname{Spec}A[\mathcal I/f_i]$ of the blowup meets $W'$ in
$\operatorname{Spec}\Bigl(A[\mathcal I/f_i]\big/\bigl(KA[\mathcal I/f_i]:f_i^\infty\bigr)\Bigr)$:
$W'$ is cut out by the saturation of the pullback ideal of $W$ by the
exceptional equation. Moreover the strict transform of a finite scheme-theoretic
union is the union of the strict transforms; in particular a finite
union of components is transformed componentwise.

## Facts & Assumptions

**Given:** A scheme $X$, a quasi-coherent ideal sheaf $\mathcal I$ of finite type with zero scheme $Z$, the blowup $\pi\colon\operatorname{Bl}_{\mathcal I}X\to X$, a closed subscheme $i\colon W\hookrightarrow X$ with inverse image ideal $\mathcal J=\mathcal I\mathcal O_W$, and the Axiom of Choice, inherited from the relative Proj constructions ([[def-axiom-of-choice]]).

[F1] [[def-strict-transform-closed-subscheme]]: With $U=(W\times_X\operatorname{Bl}_{\mathcal I}X)\smallsetminus E$, the strict transform $W'$ is the scheme-theoretic closure of $U$ in $W\times_X\operatorname{Bl}_{\mathcal I}X$; when the closure is computed by [[lem-schematic-closure-and-dense-agreement]], it is the smallest closed subscheme through which $U\hookrightarrow W\times_X\operatorname{Bl}_{\mathcal I}X$ factors. On a standard affine chart $\operatorname{Spec}A[\mathcal I/a]$ on which the exceptional subscheme is cut by $a$, and on which $W$ is cut by $K\subseteq A$, the strict transform is cut out by the saturation $(KA[\mathcal I/a]:a^\infty)$, and these local descriptions glue.

[F2] [[def-blowup-scheme-along-ideal]], [[def-quasi-coherent-ideal-sheaf]] and [[def-quasi-coherent-module-scheme]]: For a quasi-coherent ideal sheaf $\mathcal J$ of finite type the blowup $\operatorname{Bl}_{\mathcal J}W=\operatorname{Proj}_W\mathcal R(\mathcal J)$ exists, and $\mathcal J=\mathcal I\mathcal O_W$ is quasi-coherent of finite type because $\mathcal I$ is and $i^{-1}$ and quotients of quasi-coherent modules preserve these properties; its zero scheme is $W\times_XZ\subseteq W$.

[F3] [[thm-pullback-center-ideal-invertible]] and [[thm-blowup-universal-property]]: On the blowup of $W$ along $\mathcal J$ the pullback $\mathcal J\mathcal O_{\operatorname{Bl}_{\mathcal J}W}$ is invertible, so for the composite $\operatorname{Bl}_{\mathcal J}W\to W\to X$ the inverse image of $Z$ is an effective Cartier divisor; consequently there is a unique $X$-morphism $\psi\colon\operatorname{Bl}_{\mathcal J}W\to\operatorname{Bl}_{\mathcal I}X$. Equivalently $\operatorname{Bl}_{\mathcal I}X$ is final among $X$-schemes in which the inverse image of $Z$ is an effective Cartier divisor.

[F4] [[thm-affine-blowup-standard-charts]] and [[lem-affine-blowup-algebra-properties]]: For $I=(f_0,\dots,f_r)$ the standard opens $\operatorname{Spec}A[I/f_i]$ cover $\operatorname{Bl}_I\operatorname{Spec}A$ and $\bigl(A[I/f_i]\bigr)_{f_i}= A_{f_i}$; the image of $f_i$ is a nonzerodivisor in $A[I/f_i]$, so $(L:f_i^\infty)=\{b:f_i^nb\in L\text{ for some }n\}$ is the preimage of the extension of an ideal $L$ to $A[I/f_i][1/f_i]$.

[F5] [[lem-closed-immersion-local-on-target]]: A morphism is a closed immersion if and only if its restrictions over the members of an open cover of the target are closed immersions.

[F6] [[cor-blowup-unique-up-to-unique-isomorphism]]: Two blowups of the same scheme along the same ideal sheaf are isomorphic by a unique isomorphism compatible with the structural morphisms.

## Proof

1.1 By [F2] the inverse image ideal $\mathcal J=\mathcal I\mathcal O_W$ is quasi-coherent of finite type with zero scheme $W\times_XZ$, so the blowup $\operatorname{Bl}_{\mathcal J}W$ and its structural morphism $\sigma\colon\operatorname{Bl}_{\mathcal J}W\to W$ are defined; composing with $W\to X$ exhibits it as an $X$-scheme. By [F3] the inverse image of $Z$ on $\operatorname{Bl}_{\mathcal J}W$ is cut by the invertible ideal $\mathcal J\mathcal O_{\operatorname{Bl}_{\mathcal J}W}$, hence is an effective Cartier divisor, so the universal property supplies a unique $X$-morphism $\psi\colon\operatorname{Bl}_{\mathcal J}W\to\operatorname{Bl}_{\mathcal I}X$. Together with $\sigma$ it defines a morphism $u=(\sigma,\psi)\colon\operatorname{Bl}_{\mathcal J}W\to W\times_X\operatorname{Bl}_{\mathcal I}X$ over $X$. [F2, F3]

2.1 Chart computation. Let $\operatorname{Spec}A\subseteq X$ be affine with $I=(f_0,\dots,f_r)$ and $W=\operatorname{Spec}(A/K)$. Write $B_i=A[I/f_i]$ and $C_i=(A/K)[J/\bar f_i]$, so that $\operatorname{Spec}C_i$ is the chart of $\operatorname{Bl}_{\mathcal J}W$ over $\operatorname{Spec}(A/K)$. The morphism $u$ on this chart is the $A$-algebra homomorphism $\varphi_i\colon B_i\to C_i$ with $\varphi_i(a)=\bar a$ for $a\in A$ and $\varphi_i(f_j/f_i)=\bar f_j/\bar f_i$. It is surjective because $C_i$ is generated over $A/K$ by the elements $\bar f_j/\bar f_i$. Its kernel is the saturation $(KB_i:f_i^\infty)$: indeed $b\in\ker\varphi_i$ if and only if the image of $b$ in $C_i[1/\bar f_i]$ vanishes, and by [F4] applied to $A/K$ and $J$ this localized ring is $(B_i/KB_i)[1/f_i]$, the localization of $B_i/KB_i$ at $f_i$, so $b$ lies in the kernel precisely when $f_i^nb\in KB_i$ for some $n$, which is the saturation. [F4, step 1.1, algebra]

3.1 By step 2.1 the restriction of $u$ to the chart $\operatorname{Spec}C_i$ is the closed immersion $\operatorname{Spec}C_i\hookrightarrow\operatorname{Spec}B_i$ cut out by the saturation $(KB_i:f_i^\infty)$, whose image is exactly the piece of $W'$ over $\operatorname{Spec}A$ described in [F1]; this is the full preimage of chart $i$: on a source chart $j$, membership in target chart $i$ means the pulled-back ratio $\bar f_i/\bar f_j$ is a unit, precisely the overlap with source chart $i$. Equivalently, if the image lies in target chart $i$, the pullback of its center ideal is generated by $\bar f_i$; comparison with a regular generator $\bar f_j$ on a source chart forces their ratio to be a unit, as in the universal-property proof. Thus $\operatorname{Spec}C_i$ is the full preimage. Therefore these chart descriptions agree on overlaps and cover the target, so by [F5] the morphism $u$ is a closed immersion and its image is exactly $W'$. Hence $u$ identifies $W'$ with $\operatorname{Bl}_{\mathcal J}W$ over $W$, and in particular $W'$ is the blowup of $W$ along $\mathcal J=\mathcal I\mathcal O_W$, equivalently along $W\cap Z$. [F1, F5, step 2.1]

4.1 Canonicity. The morphism $\psi$ is the unique $X$-morphism from $\operatorname{Bl}_{\mathcal J}W$ to $\operatorname{Bl}_{\mathcal I}X$ provided by the universal property in [F3], and $\sigma$ is the structural morphism of the blowup, so $u$ is determined by the data of the two blowups; conversely the inverse $W'\to\operatorname{Bl}_{\mathcal J}W$ is obtained by gluing the inverse chart isomorphisms $B_i/(KB_i:f_i^\infty)\cong C_i$ from steps 2.1–3.1, determined by the same data, and any two isomorphisms with these properties agree by [F6]. Thus the identification of $W'$ with $\operatorname{Bl}_{\mathcal J}W$ is canonical. [F3, F6, step 3.1]

5.1 Union statement. Suppose $W=W_1\cup W_2$ is the scheme-theoretic union of two closed subschemes, so on an affine chart their ideals satisfy $K=K_1\cap K_2$. The saturation of $K$ with respect to $f_i$ is the preimage of the ideal $KB_i[1/f_i]$ under $B_i\to B_i[1/f_i]$ by [F4], and $B_i[1/f_i]=A_{f_i}$. Flat localization gives $(K_1\cap K_2)A_{f_i}=K_1A_{f_i}\cap K_2A_{f_i}$; taking preimages under $B_i\to A_{f_i}$ commutes with finite intersections; hence $(KB_i:f_i^\infty)=(K_1B_i:f_i^\infty)\cap(K_2B_i:f_i^\infty)$ on every chart. By step 2.1 the right-hand side cuts out the union of the chart pieces of $W_1'$ and $W_2'$, and these chartwise identifications glue, so $W'=W_1'\cup W_2'$ as closed subschemes of $W\times_X\operatorname{Bl}_{\mathcal I}X$. Induction gives the result for every finite scheme-theoretic union. In particular a finite union of components is transformed componentwise, and $W'$ is the union of the strict transforms of its parts; this union may be empty or have a single component. [F1, step 2.1] ∎

## Remarks

- The hypothesis that $\mathcal I$ has finite type is used only to know that the blowups and the inverse image ideal are defined as in [[def-blowup-scheme-along-ideal]]; the identification itself is chartwise.
- The saturation in the chart description is exactly what removes the components of the pullback of $W$ that lie inside the exceptional divisor, which is why a subscheme contained in the center has empty strict transform: for $W\subseteq Z$ the ideal $\mathcal J$ is zero on the charts, $W'=\varnothing$, and $\operatorname{Bl}_{\mathcal J}W$ is the relative Proj of a graded algebra concentrated in degree zero, which is empty. This convention is forced by the closure definition, and the theorem covers it.
