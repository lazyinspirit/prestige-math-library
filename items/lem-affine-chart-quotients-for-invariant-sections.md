---
id: lem-affine-chart-quotients-for-invariant-sections
kind: lemma
title: Affine chart quotients for invariant sections of a linear action
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 7
justified_by: []
aliases: []
deps: [thm-complete-reducibility-and-reynolds-operator-for-complex-reductive-group, thm-proper-ideal-contained-in-maximal-ideal, thm-affine-fibre-product-tensor-ring, lem-graded-invariants-of-localization-at-an-invariant-element, lem-ample-invariant-section-charts-are-affine, lem-invariants-of-finitely-generated-graded-rational-algebra-are-finitely-generated, def-good-and-geometric-quotients-for-group-actions, thm-invariant-ring-finite-generation-and-affine-categorical-quotient, lem-proj-associated-sheaf-basic-sections, def-associated-sheaf-graded-module-proj, lem-standard-opens-proj-affine, def-categorical-and-geometric-quotients-of-classical-varieties, def-projective-variety-classical, def-finite-type-and-module-finite-algebras, lem-reynolds-operator-and-invariant-subring-properties, def-homogeneous-coordinate-ring, def-affine-cone-projective-set, lem-positively-graded-noetherian-algebra-is-finitely-generated, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "P. E. Newstead, Geometric Invariant Theory, lecture notes, CIMAT Guanajuato 2006 (CEL/HAL; archived copy)"
      url: "https://web.archive.org/web/20231019082211id_/https://cel.hal.science/cel-00392098/file/newstead_notes.pdf"
      locator: "Lecture 3, Sections 3.2 and 3.4 (the affine charts and their quotients)"
    - title: "Victoria Hoskins, Moduli Problems and Geometric Invariant Theory, FU Berlin lecture notes (2015/16)"
      url: "https://userpage.fu-berlin.de/hoskins/M15_Lecture_notes.pdf"
      locator: "The proof of Theorem 5.3 (computation of O(X_f)^G and the affine chart quotients)"
    - title: "Michel Brion, Introduction to actions of algebraic groups, Les cours du CIRM 1 (2010), no. 1, 1-22"
      url: "https://ccirm.centre-mersenne.org/item/10.5802/ccirm.1.pdf"
      locator: "The proof of Proposition 1.35, printed p. 12"
---

## Statement

Assume AC inherited from the invariant-theory and quotient suppliers. Let $G$ be a complex reductive affine algebraic group, $V$ a finite-dimensional rational $G$-module, $X\subseteq\mathbf P(V)$ a $G$-stable closed projective algebraic set with homogeneous coordinate ring $R=R(X)=\mathbb C[V]/I(\widetilde X)$ ([[def-homogeneous-coordinate-ring]], [[def-affine-cone-projective-set]]), and let $f\in R^G$ be homogeneous of positive degree. Then:

(i) the nonvanishing locus $X_f\subseteq X$ is affine and $G$-stable;
(ii) $\mathcal O(X_f)^G=(R^G)_{(f)}$, the degree-zero part of the localization of the invariant ring;
(iii) the affine quotient morphism $\pi_f:X_f\to D_+(f)=\operatorname{Spec}(R^G)_{(f)}$ corresponding to the inclusion $\mathcal O(X_f)^G\subseteq\mathcal O(X_f)$ is a good quotient of the $G$-action on $X_f$ ([[def-good-and-geometric-quotients-for-group-actions]]), with $\pi_f^{-1}(D_+(f))=X_f$;
(iv) the morphisms $\pi_f$ for varying $f$ are compatible on overlaps $D_+(fg)=D_+(f)\cap D_+(g)$, in the sense that $\pi_f$ and $\pi_g$ both restrict to the affine quotient of $X_{fg}$.

## Facts & Assumptions

**Given:** A complex reductive affine algebraic group $G$, a finite-dimensional rational $G$-module $V$, a $G$-stable closed projective algebraic set $X\subseteq\mathbf P(V)$ with homogeneous coordinate ring $R=\mathbb C[V]/I$ and homogeneous invariant $f\in R^G$ of positive degree $d\ge1$.

[F1] *Charts are affine and stable.* For the homogeneous coordinate ring $R$, $X_f$ is the affine Proj chart of [F2], even when $X$ is reducible. Invariance of $f$ makes its zero locus $G$-stable: $f(gv)=f(v)$ for lifts $v$ in the affine cone. Thus $X_f$ is $G$-stable.

[F2] *Sections of the basic opens.* On the chart $D_+(f)=\operatorname{Spec}R_{(f)}$ of $\operatorname{Proj}R$ one has $\Gamma(D_+(f),\widetilde M)=M_{(f)}$ for every graded $R$-module $M$, naturally in $f$ and $M$; for $M=R$ this identifies $\mathcal O(X_f)=R_{(f)}$, and $X_f$ is the affine chart of $X$ with coordinate ring $R_{(f)}$. ([[lem-proj-associated-sheaf-basic-sections]], [[def-associated-sheaf-graded-module-proj]], [[lem-standard-opens-proj-affine]])

[F3] *Invariants of a localization.* $R$ is a graded rational $G$-algebra with $G$ acting by graded algebra automorphisms and with Reynolds operator $R_R$ preserving degrees (naturality of the Reynolds operator applied to the graded pieces); hence $(R_f)^G=(R^G)_f$ compatibly with the grading and $((R_f)_0)^G=(R^G)_{(f)}$. ([[lem-graded-invariants-of-localization-at-an-invariant-element]], [[lem-reynolds-operator-and-invariant-subring-properties]])

[F4] *Finite generation.* $R^G$ is a finitely generated graded $\mathbb C$-algebra by Nagata's theorem; moreover for a finitely generated graded $\mathbb C$-algebra $A=\bigoplus A_n$ with $A_0=\mathbb C$ and a homogeneous element $h$ of positive degree, the degree-zero part $A_{(h)}$ of the localization is a finitely generated $\mathbb C$-algebra. Finite generation of $R^G$ is [[lem-invariants-of-finitely-generated-graded-rational-algebra-are-finitely-generated]]; the degree-zero localization assertion is proved directly in step 1.2.

[F5] *The affine quotient and Reynolds splitting.* The classical affine invariant-theory theorem gives the categorical quotient and the closed-point orbit conclusions. For any rational algebra $C$, its Reynolds operator is a $C^G$-linear retraction $C\to C^G$, natural under equivariant maps, so it preserves invariant ideals; quotient maps are surjective on invariants. Tensor products compute affine scheme fibres, and every nonzero algebra has a prime ideal under AC. These facts give the scheme good-quotient clauses explicitly below, without identifying complex closed points with all primes. ([[thm-invariant-ring-finite-generation-and-affine-categorical-quotient]], [[lem-reynolds-operator-and-invariant-subring-properties]], [[thm-complete-reducibility-and-reynolds-operator-for-complex-reductive-group]], [[thm-affine-fibre-product-tensor-ring]], [[thm-proper-ideal-contained-in-maximal-ideal]])

[F6] *AC.* The Axiom of Choice is inherited from the invariant-theory and quotient suppliers and is not used directly here. ([[def-axiom-of-choice]])

## Proof

**Proof technique:** direct.

1.1 *Affineness and stability.* If $X=\varnothing$, its homogeneous coordinate ring is zero, the invariant ring and every localized chart ring are zero, both loci and every quotient target are empty, and all conclusions hold with the empty morphisms. Assume henceforth $X\ne\varnothing$. The sheaf $\mathcal O(1)|_X$ is ample and linearized, and $f$ is an invariant global section of $\mathcal O(d)|_X$ ([[def-homogeneous-coordinate-ring]], [[def-affine-cone-projective-set]]), and [F2] identifies $X_f$ with the affine chart $D_+(f)$ of $\operatorname{Proj}R$. Its $G$-stability follows from [F1]. [F1, F2, given]

1.2 *Finite generation of the invariant ring of the chart.* $R^G$ is a finitely generated graded $\mathbb C$-algebra with $(R^G)_0=\mathbb C$ by [F4], so $(R^G)_{(f)}$ is a finitely generated $\mathbb C$-algebra by the second part of [F4]: indeed, if $R^G=\mathbb C[u_1,\dots,u_r]$ with $u_i$ homogeneous of degrees $e_i$ and $d=\deg f$, then $(R^G)_{(f)}$ is generated by the finitely many elements $u_i^{d}/f^{e_i}$ together with the elements $(\prod_iu_i^{\varepsilon_i})/f^{l}$ for all exponent vectors $0\le\varepsilon_i<d$ with $\sum\varepsilon_ie_i=dl$, because every monomial $\prod u_i^{a_i}$ of degree divisible by $d$ splits as $\prod_i(u_i^{d})^{q_i}\cdot\prod_iu_i^{\varepsilon_i}$ with $\varepsilon_i<d$ and the remainder of degree divisible by $d$. [F4, algebra]

2.1 *The invariant coordinate ring of the chart.* By [F2] the chart $D_+(f)$ of $\operatorname{Proj}R$ has coordinate ring $R_{(f)}$, and the affine chart $X_f$ has coordinate ring $\mathcal O(X_f)=R_{(f)}$. By [F3] applied to the graded rational $G$-algebra $R$ and the homogeneous invariant $f$, $(R_{(f)})^G=((R_f)_0)^G=(R^G)_{(f)}$; this proves (ii). [F2, F3, step 1.1]

3.1 *The chart quotient is a scheme good quotient.* Put $C=\mathcal O(X_f)$ and $B=C^G=(R^G)_{(f)}$ by step 2.1. The affine scheme morphism $\pi_f:\operatorname{Spec}C\to\operatorname{Spec}B=D_+(f)$ is invariant and affine. It is surjective at every scheme point: the $B$-linear Reynolds retraction splits $B\hookrightarrow C$, so for every prime $\mathfrak p\subset B$ tensoring gives an injection $\kappa(\mathfrak p)\hookrightarrow C\otimes_B\kappa(\mathfrak p)$. This nonzero fibre algebra has a prime by [F5]. On each principal target open $D(b)$, the rational-localized Reynolds computation gives $(C_b)^G=B_b$, so the sheaf clause holds on a basis and hence on all opens. For a closed invariant subset with radical stable ideal $I\subset C$, invariant exactness gives $(C/I)^G=B/(I\cap B)$. Applying the same Reynolds-splitting fibre argument to $C/I$ shows its image is exactly the scheme closed subset $V(I\cap B)$. If two such subsets are disjoint, their ideals satisfy $I+J=C$; write $1=a+b$, apply Reynolds, and use preservation of stable ideals to obtain $1\in(I\cap B)+(J\cap B)$, so their scheme images are disjoint. These are all good-quotient clauses, proving (iii); the target is $D_+(f)$, so $\pi_f^{-1}(D_+(f))=X_f$. [F5, step 1.1, step 1.2, step 2.1]

4.1 *Compatibility.* For invariant homogeneous $f,g$ of positive degrees the charts satisfy $D_+(fg)=D_+(f)\cap D_+(g)$ and $X_{fg}=X_f\cap X_g$, and localizing the identifications of step 2.1 at $h=g^{\deg f}/f^{\deg g}$ gives $\mathcal O(X_{fg})=(\mathcal O(X_f))_{h}$ with invariant ring $((R^G)_{(f)})_{h}=(R^G)_{(fg)}$; both $\pi_f$ and $\pi_g$ restrict on $X_{fg}$ to the affine quotient morphism with target $\operatorname{Spec}(R^G)_{(fg)}=D_+(fg)$, because the corresponding ring maps are the canonical localizations of $\mathcal O(X_f)^G\to\mathcal O(X_f)$ and of $\mathcal O(X_g)^G\to\mathcal O(X_g)$ at the same localization. This is assertion (iv) and completes the proof; no new choice is made, the Axiom of Choice being inherited from the invariant-theory and quotient suppliers [F6]. [F2, F6, step 2.1, step 3.1] ∎

## Remarks

- **Degrees in the overlap.** The identification on the overlap is functoriality of localization: the chart ring $R_{(fg)}$ is the localization of $R_{(f)}$ at $g^{\deg f}/f^{\deg g}$, and likewise for the invariant rings, so no choice of isomorphism is involved.
- **Finite generation of the chart.** Step 1.2 proves this by a finite list of monomial fractions; it does not apply the positively graded finite-generation lemma to a degree-zero localization.
