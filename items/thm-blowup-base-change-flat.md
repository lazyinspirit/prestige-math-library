---
id: thm-blowup-base-change-flat
kind: theorem
title: "Flat base change for blowups, and failure without flatness"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - thm-affine-blowup-standard-charts
  - lem-affine-blowup-algebra-properties
  - def-blowup-scheme-along-ideal
  - def-rees-algebra-ideal-sheaf
  - thm-relative-proj-base-change
  - def-base-change-morphism-schemes
  - lem-tensor-qc-modules-quasi-coherent
  - def-flat-and-faithfully-flat-modules-and-ring-maps
  - lem-pullback-qc-module-quasi-coherent
  - def-axiom-of-choice
justified_by: []
forward_refs:
  - cex-blowup-arbitrary-base-change-failure
landmark: false
proof_strategy: "Compare Rees algebras after flat pullback and apply relative-Proj base change"
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Divisors, Sections 31.33-31.36 (Blowing up; Strict transform; Admissible blowups; Blowing up and flatness)"
      url: "https://stacks.math.columbia.edu/tag/01OF"
      locator: "Lemma 31.33.3 (tag 0805): flat base change of blowups"
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, June 27, 2011 draft (author-hosted 'Early (out-of-date) version of The Rising Sea')"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGjun2711publicnoindex.pdf"
      locator: "Exercise 19.2.B on locality and Exercise 19.4.G on nonreduced centers, pp. 382, 392"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
---

## Statement

Assume the Axiom of Choice as inherited from the relative Proj construction.
Let $g\colon X'\to X$ be a flat morphism of schemes and $\mathcal I$ a
quasi-coherent ideal sheaf of finite type on $X$. Then there is a canonical
isomorphism of $X'$-schemes
$\operatorname{Bl}_{g^{-1}\mathcal I}X'\to\operatorname{Bl}_{\mathcal I}X\times_XX'$,
where $g^{-1}\mathcal I$ is the inverse image ideal sheaf, compatible with the
structural morphisms and the relative twists. Without flatness the natural
comparison map need not be an isomorphism: the powers $(g^{-1}\mathcal I)^n$ can
differ from $g^*(\mathcal I^n)$ by torsion (compare the companion
counterexample).

## Facts & Assumptions

**Given:** A morphism of schemes $g\colon X'\to X$, a quasi-coherent ideal sheaf $\mathcal I\subseteq\mathcal O_X$ of finite type ([[def-quasi-coherent-ideal-sheaf]]) with Rees algebra sheaf $\mathcal R(\mathcal I)=\bigoplus_{n\ge0}\mathcal I^n$ ([[def-rees-algebra-ideal-sheaf]]), the inverse image ideal sheaf $g^{-1}\mathcal I=\operatorname{Im}(g^*\mathcal I\to\mathcal O_{X'})$, the blowups $\operatorname{Bl}_{\mathcal I}X$ and $\operatorname{Bl}_{g^{-1}\mathcal I}X'$ ([[def-blowup-scheme-along-ideal]]), and the base change $X\times_XX'$ of ([[def-base-change-morphism-schemes]]).

[F1] [[def-flat-and-faithfully-flat-modules-and-ring-maps]]: A module $M$ over a commutative ring $R$ is flat if $-\otimes_RM$ preserves exact sequences; a ring map $A\to B$ is flat when $B$ is flat as an $A$-module. Flatness of a morphism of schemes is the corresponding local condition.

[F2] [[lem-pullback-qc-module-quasi-coherent]]: Pullback of a quasi-coherent module is quasi-coherent, and on affine opens with $f(U)\subseteq V$, $U=\operatorname{Spec}B$, $V=\operatorname{Spec}A$ and $\mathcal F|_V=\widetilde M$, one has $f^*\mathcal F|_U\cong\widetilde{(B\otimes_AM)}$.

[F3] [[lem-tensor-qc-modules-quasi-coherent]]: The tensor product of quasi-coherent $\mathcal O_X$-modules is quasi-coherent, and on an affine open $\operatorname{Spec}A$ with $\mathcal F=\widetilde M$, $\mathcal G=\widetilde N$ it restricts to $\widetilde{(M\otimes_AN)}$.

[F4] [[def-rees-algebra-ideal-sheaf]]: The Rees algebra sheaf is $\mathcal R(\mathcal I)=\bigoplus_{n\ge0}\mathcal I^n$ with degree-$n$ piece $\mathcal I^n$, multiplication induced by multiplication in $\mathcal O_X$; it is a quasi-coherent graded $\mathcal O_X$-algebra.

[F5] [[def-blowup-scheme-along-ideal]]: For a scheme $X$ and a quasi-coherent ideal sheaf of finite type, $\operatorname{Bl}_{\mathcal I}X=\operatorname{Proj}_X\mathcal R(\mathcal I)$ with structural morphism to $X$ and relative twists.

[F6] [[thm-relative-proj-base-change]]: For $g\colon S'\to S$ and a quasi-coherent graded $\mathcal O_S$-algebra $\mathcal A$ with $\mathcal A'=g^*\mathcal A$, there is a canonical isomorphism of $S'$-schemes $\operatorname{Proj}_S\mathcal A\times_SS'\cong\operatorname{Proj}_{S'}\mathcal A'$, natural in $S'\to S$, compatible with the relative twists; no flatness is required.

[F7] [[thm-affine-blowup-standard-charts]] and [[lem-affine-blowup-algebra-properties]]: The blowup of $(x,y)\subset k[x,y]$ has charts $k[x,T]$ with $y=xT$ and $k[y,U]$ with $x=yU$, with inverse ratio transition. The blowup of a principal regular ideal $(x)$ in $k[x]$ is the identity, since its sole chart is $k[x][(x)/x]=k[x]$.

## Proof

1.1 Flat pullback commutes with the ideal powers and with the inverse image ideal: the natural maps $g^*\mathcal I\to g^{-1}\mathcal I$ and $g^*(\mathcal I^n)\to(g^{-1}\mathcal I)^n$ are isomorphisms. Affine-locally over $U=\operatorname{Spec}A\subseteq X$ with $\mathcal I|_U=\widetilde I$ and $U'=\operatorname{Spec}B\subseteq X'$ mapping into $U$, flatness of $g$ says $B$ is a flat $A$-module; the sequence $0\to I^n\to A\to A/I^n\to0$ then stays exact after $-\otimes_AB$, so $B\otimes_AI^n\to B$ is injective, and its image is the ideal $I^nB=(IB)^n$; the pullback sheaf $g^*(\mathcal I^n)$ restricts to $\widetilde{(B\otimes_AI^n)}$ by [F2] and $(g^{-1}\mathcal I)^n$ restricts to $\widetilde{(IB)^n}$ by [F2] and [F3], so the comparison is an isomorphism, and taking $n=1$ identifies $g^*\mathcal I$ with its image $g^{-1}\mathcal I$ in $\mathcal O_{X'}$. [F1, F2, F3]

2.1 Consequently $g^*\mathcal R(\mathcal I)\cong\mathcal R(g^{-1}\mathcal I)$ as quasi-coherent graded $\mathcal O_{X'}$-algebras: by step 1.1 the degree-$n$ pieces are both $(g^{-1}\mathcal I)^n$, and the pullback of the multiplication $\mathcal I^m\otimes\mathcal I^n\to\mathcal I^{m+n}$ is the multiplication of the inverse image ideal, so the graded algebra structures agree; all pieces are quasi-coherent by [F2], [F3] and [F4]. [F3, F4, step 1.1]

3.1 Applying [F6] to the morphism $g\colon X'\to X$ and the graded algebra $\mathcal A=\mathcal R(\mathcal I)$ gives a canonical isomorphism of $X'$-schemes $\operatorname{Bl}_{\mathcal I}X\times_XX'=\operatorname{Proj}_X\mathcal R(\mathcal I)\times_XX'\cong\operatorname{Proj}_{X'}g^*\mathcal R(\mathcal I)$, and step 2.1 identifies the target with $\operatorname{Proj}_{X'}\mathcal R(g^{-1}\mathcal I)=\operatorname{Bl}_{g^{-1}\mathcal I}X'$ by [F5]; the inverse of this composite is the canonical isomorphism of the statement. The comparison is compatible with the structural morphisms because both sides are the relative Proj of the pulled-back graded algebra over $X'$, and with the relative twists by the corresponding clause of [F6]. [F5, F6, step 2.1]

4.1 The comparison need not be an isomorphism without flatness. Take $A=k[x,y]$, $I=(x,y)$ and $B=A/(y)=k[x]$. Then $IB=(x)$ is principal regular and its blowup is $\operatorname{Spec}B$. Base changing the two charts of the original blowup gives $k[x,T]/(xT)$ and $k[U]$, respectively, with inverse ratio gluing. The fiber of this base-changed blowup over $x=0$ is the two affine lines glued by $U=T^{-1}$, hence $\mathbb P^1_k$, whereas the fiber of $\operatorname{Bl}_{(x)}\operatorname{Spec}B$ is $\operatorname{Spec}k$. Thus the comparison is not an isomorphism. The difference already appears in degree two: $B\otimes_A I^2=I^2/yI^2$ contains the nonzero class of $xy$, since $x\notin I^2$ and cancellation of $y$ in $A$ shows $xy\notin yI^2$. This class maps to zero in $(IB)^2$, and is killed by $x$ since $x^2y\in yI^2$. Hence the flatness hypothesis cannot be dropped, and the stated torsion caveat is proved within this item. [F1, F7, step 3.1] ∎

## Remarks

- The failure of flatness is not a defect of the relative Proj construction but
  of the identification of the pulled-back Rees algebra with the Rees algebra
  of the pulled-back ideal: [[cex-blowup-arbitrary-base-change-failure]]
  computes the torsion kernel in degree two and shows that the two sides of
  the comparison are not isomorphic.
- The theorem applies in particular to open immersions and to flat
  morphisms of finite type over a field, and no finite presentation of $g$
  is assumed.
