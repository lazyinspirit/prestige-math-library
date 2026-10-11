---
id: thm-parabolic-category-o-multiplicities-are-parabolic-kl-polynomials
kind: theorem
title: "Parabolic category O multiplicities are parabolic Kazhdan–Lusztig values"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 19
deps: [def-parabolic-category-o-for-a-standard-parabolic,
       thm-parabolic-category-o-is-a-highest-weight-category,
       def-parabolic-kazhdan-lusztig-basis-and-polynomials,
       thm-parabolic-kazhdan-lusztig-polynomials-are-alternating-sums-of-ordinary-ones,
       def-standard-parabolic-and-levi-subalgebras-from-simple-roots,
       def-cg-parabolic-quotient-and-two-sided-minima, thm-bgg-reciprocity,
       def-axiom-of-choice, thm-weyl-character-formula,
       def-completed-formal-character-ring-for-downward-cones,
       lem-geometric-series-invertibility-in-the-completed-character-ring,
       thm-pbw-model-of-a-verma-module,
       thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra,
       thm-simple-verma-composition-multiplicities-are-kazhdan-lusztig-values,
       def-regular-integral-dot-orbit-labelling-convention,
       prop-translation-identifies-regular-integral-blocks,
       thm-hh-parabolic-minimal-representatives-and-length-additivity]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Volodymyr Mazorchuk and Catharina Stroppel, Translation and shuffling of projectively presentable modules and a categorification of a parabolic Hecke module, Trans. Amer. Math. Soc. 357 (2005) 2939-2973 (author-hosted published version)"
      url: "http://www.math.uni-bonn.de/people/stroppel/Shuffling.pdf"
      locator: "Section 2.3 defines the DISTINCT projectively p-presentable category; Theorem 3.1 and Lemma 7.6/Theorem 7.7 concern its spherical/properly stratified comparison, not locally p-finite category O. Those actual passages were independently inspected and their former native use is corrected. The current proof instead uses the owner local Levi/PBW/flag/Weyl argument."
    - title: "Hankyung Ko, Volodymyr Mazorchuk and Rafael Mrden, Some homological properties of category O VI, Documenta Mathematica 26 (2021) 1237-1269 (complete article)"
      url: "https://www.diva-portal.org/smash/get/diva2:1680785/FULLTEXT01.pdf"
      locator: "Section 4.1 describes actual locally p-finite O^p and its shortest-left labels; Section 4.2 invokes BGS Koszul duality for a different homological claim. Full selected source passages independently read; that duality is not imported into this ordinary multiplicity/character proof."
    - title: "Anne Moreau, M2 Representation Theory 2025–2026 (current complete 129-page author notes)"
      url: "https://www.imo.universite-paris-saclay.fr/~anne.moreau/M2-RepTh2025.pdf"
      locator: "Current Section 13.3 pp. 98-99, Equation 18 and Theorem 13.11; Sections 13.1-13.3 pp. 93-99 independently read in full. The local finite-Levi character argument uses the already-proved library Weyl-character theorem on s_J and retains the center twist; it does not import the singular/parabolic Koszul equivalence."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Fix a dominant regular
integral weight $\lambda$ of the complex type-$A$ Lie algebra and the standard
parabolic $\mathfrak p_J$, with reductive Levi $\mathfrak l_J$ and longest
Levi Weyl element $w_J$
([[def-standard-parabolic-and-levi-subalgebras-from-simple-roots]]). The
$\mathfrak p_J$-dominant weights in this regular block are exactly
$y\cdot\lambda$ for $y\in{}^JW$. Write
$\Delta^J(y\cdot\lambda)=M_{\mathfrak p}(y\cdot\lambda)$,
$L(x\cdot\lambda)$ and $P^J(x\cdot\lambda)$ for its generalized standards,
simples and projective covers
([[def-parabolic-category-o-for-a-standard-parabolic]]). Then for
$x,y\in{}^JW$,
$$[\Delta^J(y\cdot\lambda):L(x\cdot\lambda)]=(P^J(x\cdot\lambda):\Delta^J(y\cdot\lambda))=\sum_{u\in W_J}(-1)^{\ell(u)}P_{uy,x}(1)=n_{y,x}(1).$$

These are the antispherical sign coefficients, with support $y\le x$ and
diagonal $1$. The precise character/Grothendieck identity supplying the
formula is
$$\operatorname{ch}\Delta^J(y\cdot\lambda)=\sum_{u\in W_J}(-1)^{\ell(u)}\operatorname{ch}\Delta(uy\cdot\lambda).$$

For the same highest weights in the antidominant base
$\lambda_{\mathrm{anti}}=w_0\cdot\lambda$, the actual longest-left label is
$z=yw_0$, since $y\cdot\lambda=z\cdot\lambda_{\mathrm{anti}}$.
Its shortest-left encoding is $a=\mathrm{lf}(y):=w_Jyw_0\in{}^JW$, so the
weight in that encoding is $(w_Ja)\cdot\lambda_{\mathrm{anti}}$, not
$a\cdot\lambda_{\mathrm{anti}}$. With $b=\mathrm{lf}(x)$, the reindexed matrix is
$$\widetilde N_{a,b}:=n_{\mathrm{lf}^{-1}(a),\mathrm{lf}^{-1}(b)}(1)=n_{w_Jaw_0,\,w_Jbw_0}(1).$$
It is the same multiplicity matrix with both indices permuted and has reversed
support in the transported order. It is not in general $n_{a,b}(1)$.
Every label retains its explicit dot-baseweight.
The highest-weight category theorem applies also to singular integral
parabolic blocks, but this ordinary regular KL matrix formula assumes the
ambient central character is regular. No singular/parabolic category
equivalence, grading or Koszul duality is asserted.

## Facts & Assumptions

**Given:** A dominant regular integral weight $\lambda$ of type $A$, the standard parabolic $\mathfrak p_J=\mathfrak l_J\oplus\mathfrak u_J$ with Levi Weyl group $W_J$ and longest element $w_J$, the parabolic category $\mathcal O^{\mathfrak p}$ with generalized Vermas $\Delta^J(\xi)=M_{\mathfrak p}(\xi)$ ([[def-parabolic-category-o-for-a-standard-parabolic]], [[thm-parabolic-category-o-is-a-highest-weight-category]]), and the completed character ring with its geometric-series inverses ([[def-completed-formal-character-ring-for-downward-cones]], [[lem-geometric-series-invertibility-in-the-completed-character-ring]]).

[F1] Parabolic highest-weight structure: $M_{\mathfrak p}(\xi)$ lies in $\mathcal O^{\mathfrak p}$ with head $L(\xi)$ and finite length, its composition factors are parabolic simples, and in a fixed integral block every projective has a finite generalized-standard flag with BGG reciprocity $(P^{\mathfrak p}(\xi):M_{\mathfrak p}(\eta))=[M_{\mathfrak p}(\eta):L(\xi)]$; the parabolic simple/standard classes form Grothendieck bases and characters are injective on the block ([[thm-parabolic-category-o-is-a-highest-weight-category]] (1)-(4), [[def-parabolic-category-o-for-a-standard-parabolic]]).

[F2] The local PBW model: $\operatorname{ch}M_{\mathfrak p}(\xi)=\operatorname{ch}E(\xi)\cdot\prod_{\beta\in\Phi^+\smallsetminus\Phi_J^+}(1-e^{-\beta})^{-1}$ and, by the PBW theorem, the identity holds in the completed character ring; the outside denominator is the PBW denominator of the negative outside radical $\mathfrak v_J$ ([[thm-pbw-model-of-a-verma-module]], [[thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra]], [[def-standard-parabolic-and-levi-subalgebras-from-simple-roots]] (5)).

[F3] Weyl character formula for $\mathfrak s_J$: for a $\mathfrak p$-dominant integral $\xi$, $\operatorname{ch}E(\xi)=\frac{\sum_{u\in W_J}(-1)^{\ell(u)}e^{u(\xi+\rho_J)}}{\prod_{\alpha\in\Phi_J^+}(e^{\alpha/2}-e^{-\alpha/2})}$ with $\rho_J$ half the sum of the positive Levi roots ([[thm-weyl-character-formula]]); here $W_J$ fixes $\rho-\rho_J$ because $(\rho-\rho_J)(H_j)=0$ for every $j\in J$, and $\Phi_J^+=\Phi_J\cap\Phi^+$.

[F4] Ordinary regular multiplicities: for a dominant regular integral base, $[M(z\cdot\lambda):L(x\cdot\lambda)]=P_{z,x}(1)$ with vanishing unless $z\le x$ ([[thm-simple-verma-composition-multiplicities-are-kazhdan-lusztig-values]], [[def-regular-integral-dot-orbit-labelling-convention]]), and the alternating sum identity $n_{y,x}(1)=\sum_{u\in W_J}(-1)^{\ell(u)}P_{uy,x}(1)$ ([[thm-parabolic-kazhdan-lusztig-polynomials-are-alternating-sums-of-ordinary-ones]] (1) at $v=1$); the labelling dictionary $W^J=({}^JW)^{-1}$ and the coset minima are [[def-cg-parabolic-quotient-and-two-sided-minima]], [[thm-hh-parabolic-minimal-representatives-and-length-additivity]].

[F5] The regular-to-regular translations of [[prop-translation-identifies-regular-integral-blocks]] identify labelled ordinary standards, simples and projective covers between dominant regular integral blocks of the same type-$A$ root datum, so [F4] holds in every such block, not only the principal one.

## Proof

**Proof technique:** direct: prove the finite-Levi character identity, compare ordinary simple coefficients using the regular Kazhdan-Lusztig multiplicity theorem, and read off the antispherical matrix and its projective version.

1.1 **Levi character identity.** Multiply the Weyl character formula [F3] for $E(\xi)$ by the outside PBW denominator of [F2]. For each $u\in W_J$, $u(\rho-\rho_J)=\rho-\rho_J$ by [F3], so $e^{u(\xi+\rho_J)+( \rho-\rho_J)}=e^{u(\xi+\rho)}$; dividing by the full PBW denominator $\prod_{\alpha\in\Phi^+}(e^{\alpha/2}-e^{-\alpha/2})=\prod_{\alpha\in\Phi_J^+}(\ldots)\prod_{\beta\notin\Phi_J^+}(\ldots)$ turns each summand into $\operatorname{ch}\Delta(u\cdot\xi)$ ([[thm-pbw-model-of-a-verma-module]]). Hence, for $\mathfrak p$-dominant integral $\xi$, $\operatorname{ch}\Delta^J(\xi)=\sum_{u\in W_J}(-1)^{\ell(u)}\operatorname{ch}\Delta(u\cdot\xi)$ in the completed character ring; this is the displayed identity at $\xi=y\cdot\lambda$. [F2, F3, algebra]

1.2 **The dominant labels.** Put $A=\lambda+\rho$, strictly dominant and integral. The weight $y\cdot\lambda$ is $\mathfrak p_J$-dominant iff $\langle yA,\alpha_j^\vee\rangle-1\ge0$ for every $j\in J$. The integer $\langle A,y^{-1}\alpha_j^\vee\rangle$ is positive exactly when $y^{-1}\alpha_j$ is a positive root: strict dominance makes positive-root coroot pairings positive integers and negative-root pairings negative. Thus the condition is $y^{-1}\alpha_j>0$ for all $j\in J$, equivalently no LEFT descent $s_jy<y$: in type $A$, $y^{-1}\alpha_j>0$ means that the position of value $j$ precedes that of $j+1$, exactly the inversion-length ascent condition for swapping those values. These are precisely the shortest-left representatives ${}^JW$ in the coset-minimum convention of [F4]; no inversion of the weight label is performed. [F4, algebra]

2.1 **Comparing simple coefficients.** By [F1] the parabolic simples are the $L(x\cdot\lambda)$, $x\in{}^JW$. Taking the coefficient of $L(x\cdot\lambda)$ in the identity of step 1.1 (with $\xi=y\cdot\lambda$, $y\in{}^JW$) and using [F4] and [F5] for the ordinary Vermas in the given dominant regular integral block gives $[\Delta^J(y\cdot\lambda):L(x\cdot\lambda)]=\sum_{u\in W_J}(-1)^{\ell(u)}[M(uy\cdot\lambda):L(x\cdot\lambda)]=\sum_{u\in W_J}(-1)^{\ell(u)}P_{uy,x}(1)=n_{y,x}(1)$. The sum is finite and the coefficients with $uy\not\le x$ vanish; in particular the support is $y\le x$ with diagonal $n_{x,x}(1)=1$. [F1, F4, F5, step 1.1, step 1.2, algebra]

3.1 **Projective multiplicities.** By the parabolic BGG reciprocity of [F1], $(P^J(x\cdot\lambda):\Delta^J(y\cdot\lambda))=[\Delta^J(y\cdot\lambda):L(x\cdot\lambda)]=n_{y,x}(1)$; the multiplicities are finite by the finite generalized-standard flag of [F1]. This proves the second identity. [F1, step 2.1, algebra]

3.2 **Native longest-left labels.** Let $\lambda_{\mathrm{anti}}=w_0\cdot\lambda$. Dot-action composition gives $y\cdot\lambda=(yw_0)\cdot\lambda_{\mathrm{anti}}$ and $x\cdot\lambda=(xw_0)\cdot\lambda_{\mathrm{anti}}$. If $y$ has no left descent in $J$, each $y^{-1}\alpha_j$ is positive, so $(yw_0)^{-1}\alpha_j=w_0y^{-1}\alpha_j$ is negative; hence $z=yw_0$ is the longest representative in its left $W_J$-coset. Its shortest-left encoding is $a=w_Jz=w_Jyw_0$, with inverse $y=w_Jaw_0$; similarly $b=w_Jxw_0$ has inverse $x=w_Jbw_0$. Consequently the same multiplicity of step 2.1 is $[\Delta^J((w_Ja)\cdot\lambda_{\mathrm{anti}}):L((w_Jb)\cdot\lambda_{\mathrm{anti}})]=n_{w_Jaw_0,w_Jbw_0}(1)=\widetilde N_{a,b}$. This is an honest permutation of rows and columns, with support transported from $w_Jaw_0\le w_Jbw_0$, not a claim that $\widetilde N_{a,b}=n_{a,b}(1)$. Choosing the transported reversed order reads the same matrix as lower triangular. [F1, F4, step 2.1, algebra]

4.1 The preceding steps prove the multiplicity formula, its projective form, the character identity and the reindexed version; the statement that only the regular ambient central character is assumed, and that no singular/parabolic equivalence or grading is used, is exactly the scope of the quoted suppliers [F1]--[F5]. [step 1.1, step 2.1, step 3.1, step 3.2] ∎

## Remarks

**Open obligation.** The proof uses the batch-14 interfaces `thm-simple-verma-composition-multiplicities-are-kazhdan-lusztig-values` and `def-regular-integral-dot-orbit-labelling-convention` through fact [F4], cited in steps 1.2, 2.1 and 3.2 for the ordinary multiplicity value $P_{uy,x}(1)$, and `prop-translation-identifies-regular-integral-blocks` through fact [F5], cited in step 2.1 for the labelled transport of the ordinary multiplicities across dominant regular integral blocks. All three were scaffolded but unwritten when this item was authored and are now written in `items/` with statements matching these uses. The Step-3 decision remains escalated because only the owner may refresh an escalation receipt; the exact supplier IDs and consuming steps are recorded in the pair report. The ordinary KL formula is asserted only for the regular ambient central character; the parabolic highest-weight structure itself retains arbitrary integral blocks. No singular/parabolic equivalence, Koszul duality or grading is imported.
