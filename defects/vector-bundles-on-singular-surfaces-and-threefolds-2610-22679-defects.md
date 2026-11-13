---
title: Vector bundles on singular surfaces and threefolds — defects
status: published
generated_at: "2026-11-13T19:12:14.752Z"
---

9 confirmed findings and 2 potential findings in the original article.

## article-characteristic-p-input · confirmed

**Tags:** prerequisite omission

https://arxiv.org/abs/2610.22679v1; PDF p. 6, Proposition 2.6 proof, opening (PDF p. 6).

> The general case will appear in the work of Elmanto-Morrow.

Proposition 2.6 states all characteristics but proves only characteristic zero. The authors explicitly defer the positive-characteristic argument. Subsequent integral threefold comparisons use the unrestricted statement.

This qualification occurs in the authors’ own opening proof, rather than in a generated supplier.

**Correction:** Give a precise established characteristic-p input or supply that argument.

No counterexample to torsion-freeness is established.

## article-affine-picard-reduction · confirmed

**Tags:** prerequisite omission

https://arxiv.org/abs/2610.22679v1; PDF p. 13, Proposition 6.1 proof, Picard divisibility and Ful98 citation (PDF p. 13).

> The Picard group of a smooth affine curve over an algebraically closed

The affine Picard-divisibility use omits the completion-and-boundary reduction. Fulton Example 1.6.6 concerns degree-zero cycles on a complete scheme. The affine-curve application needs the standard completion and boundary-point reduction, which is not written.

The quoted p. 13 application skips this reduction. The book’s Example 1.6.6 and the Stacks Jacobian/divisibility passages were freshly checked; the proposition is correct.

**Correction:** For a smooth projective completion $\overline C$ and boundary $k$-point $b$, subtract $\deg(L)b$ from an extension of any line bundle. Thus $\operatorname{Pic}^0(\overline C)(k)$ surjects onto $\operatorname{Pic}(C)$ and divisibility follows.

The claim is correct. This is not a defect audit of Fulton.

## article-cdh-truncation-input · potential

**Tags:** prerequisite omission; missing proof steps

https://arxiv.org/abs/2610.22679v1; PDF p. 6, Proposition 2.6 proof, passage from Artin vanishing to cdh localization (PDF p. 6).

> The
> associated cdh-sheaf also vanishes and therefore

The cdh-truncation step needs an explicitly dimension-bounded interpretation. Artin vanishing controls affine opens of X; the cited BEM comparison is on the big qcqs site. The proof does not specify the refinement or restriction justifying truncation there.

The authors pass from affine vanishing to this sheaf assertion. BEM Corollary 7.20 confirms the big-site context; a local interpretation may repair the compression.

**Correction:** Explain the dimension-bounded cdh computation after evaluation on X. A global equivalence on all qcqs schemes is unnecessary.

This is a possible omitted locality justification, not a counterexample to the evaluated comparison or torsion-freeness.

## article-qcqs-smooth-locus · confirmed

**Tags:** insufficient assumptions; missing proof steps

https://arxiv.org/abs/2610.22679v1; PDF p. 10, Lemma 5.2 proof, Picard restriction square (PDF p. 10).

> Let U ⊂X be the smooth locus.

The smooth-locus reductions in Lemmas 4.1 and 5.2 exceed the printed normal qcqs scope. Normality alone gives neither a dense k-smooth locus nor injective Picard restriction. The conventions impose finite type on affine schemes, without imposing it on all qcqs schemes.

The p. 10 Picard square and p. 9 global-functions argument use these premises under the p. 3 qcqs convention. The example refutes those premises, not the lemmas.

**Correction:** Retain the qcqs conclusions using direct rank/determinant comparisons; use smooth-locus restriction only with suitable finite-type hypotheses.

The failure is in the restriction premises; no failure of the affine classification theorems or rank/determinant identities is established.

**Counterexample:** Let $k$ be algebraically closed and $X=\mathbf P^1_{k(t)}$, viewed over $k$. It is nonaffine, normal, Noetherian, one-dimensional and qcqs. Thus it satisfies the printed hypotheses of Lemmas 4.1 and 5.2 and does not violate the affine finite-type convention.

Its $k$-smooth locus $U$ is empty: a nonempty smooth affine neighbourhood would have a nonzero finitely generated $k$-algebra $B$ containing $k(t)$. A maximal residue field is $k$ by the Nullstellensatz, giving an impossible $k$-algebra map $k(t)\to k$: if $t$ maps to $a$, the invertible element $t-a$ maps to zero. Meanwhile $\Gamma(X,\mathcal O_X)=k(t)$ and $\operatorname{Pic}(X)=\mathbb Z$, whereas $\Gamma(U,\mathcal O_U)=0$ and $\operatorname{Pic}(U)=0$. Thus the p. 9 restriction is not an isomorphism and the p. 10 Picard restriction is not injective. The previously suggested affine $\operatorname{Spec}k(t)$ example is unnecessary and conflicts with the article’s affine convention.

## article-perfect-first-chern-input · confirmed

**Tags:** prerequisite omission; missing proof steps

https://arxiv.org/abs/2610.22679v1; PDF p. 8, Proposition 3.2 proof (PDF p. 8).

> Proof. This is true by definition if V is a line bundle.

Proposition 3.2’s proof checks bundles but states a factorization on perfect $K_0$. Splitting an actual bundle into line-bundle classes does not establish the asserted operation on every perfect class of an arbitrary qcqs scheme.

The authors’ proof starts with a bundle V; no extension to all perfect classes follows in the printed argument.

**Correction:** Supply the perfect-K Chern/determinant comparison and descent, retaining the qcqs statement.

The doubled-plane obstruction below prevents silently identifying all perfect classes with bundle differences; it does not refute the factorization.

## article-perfect-bundle-reduction · confirmed

**Tags:** insufficient assumptions; missing proof steps

https://arxiv.org/abs/2610.22679v1; PDF p. 11, Lemma 5.3 proof, opening bundle-difference reduction (PDF p. 11).

> we may write α = [V1] −[W1] for some vector bundles

The proofs of Lemma 5.3 and Proposition 5.5 assume arbitrary perfect classes are bundle differences. Normal qcqs schemes need not have that property. Lemma 6.4 inherits the reduction.

This representation is asserted in Lemma 5.3 and repeated in Proposition 5.5. Lemma 6.4 refers back to the same method. The doubled plane defeats this premise under their actual scope.

**Correction:** Use perfect-K Chern/Cartan operations and a compatible projection comparison; retain the qcqs conclusions.

This defeats a proof reduction under the original nonseparated qcqs hypotheses; it is not a counterexample to additivity, $p_2$=−$c_2$, or either affine classification.

**Counterexample:** Glue two copies $A_1,A_2$ of $\mathbb A^2_k$ by the identity on $W=\mathbb A^2_k\setminus\{0\}$, with $k$ algebraically closed. The resulting nonaffine doubled plane $X$ is smooth, normal, finite type, pure dimension two and qcqs. There is $0\ne\delta\in F^2_{\mathrm{mot}}K_0(X)$ with no global bundle-difference representative.

Quillen–Suslin trivializes every bundle on each $A_i$. The elementary intersection $k[x,y]_x\cap k[x,y]_y=k[x,y]$ gives $\Gamma(W,\mathcal O)=k[x,y]$. Both a transition matrix and its inverse extend, so every bundle on $X$ is trivial and $\operatorname{Pic}(X)=0$. In the localization sequence for $0\subset A_i$, the supported group $K_0(k)=\mathbb Z$ maps to zero in $K_0(A_i)$: its Koszul resolution has alternating class $1-2+1=0$. Hence $K_1(W)/\operatorname{im}K_1(A_i)=\mathbb Z$. The two restriction images coincide. Thomason–Trobaugh Theorem 8.1 therefore injects this quotient into perfect $K_0(X)$, producing a nonzero boundary $\delta$ restricting to zero on both charts. Nisnevich descent and negative weight-zero vanishing inject $H^{0,0}(X)$ into $H^{0,0}(A_1)\oplus H^{0,0}(A_2)$; thus $p_0(\delta)=0$, so $\delta\in F^1$. The weight-one triangle and $H^{2,1}(X)=\operatorname{Pic}(X)=0$ lift it to $F^2$. Any rank-zero difference of the globally trivial bundles is zero. All hypotheses of the p. 11 normal-qcqs reduction hold, but that reduction fails. This uses the independently checked localization and Mayer–Vietoris statements, not the conclusions of Lemma 5.3 or Proposition 5.5.

## article-bundle-index-typo · confirmed

**Tags:** typos

https://arxiv.org/abs/2610.22679v1; PDF p. 17, Theorem B proof, surjectivity, final two bundle expressions (PDF p. 17).

> We can then compute the Chern classes

Theorem B’s surjectivity proof twice writes $E_1$ where $E_3$ was defined. The preceding line defines $E_2$ and $E_3$ and forms $E_3$ direct-sum $E_2$ direct-sum L. $E_1$ is undefined in the subsequent two bundle expressions.

Both mismatched subscripts are visible in the authors’ rendered page 17; the surrounding construction fixes the intended index.

**Correction:** Replace both occurrences of $E_1$ by $E_3$.

## article-bem-identifier · confirmed

**Tags:** typos

https://arxiv.org/abs/2610.22679v1; PDF p. 18, References, [BEM25] (PDF p. 18).

> arXiv:2508.0991, 2025

Reference [BEM25] has the incomplete arXiv identifier 2508.0991. The cited authors and title identify Bachmann–Elmanto–Morrow, arXiv:2508.09915v1.

The incorrect suffix is printed in the original bibliography, independently of generated source displays.

**Correction:** Use arXiv:2508.09915, retaining Corollary 7.20.

## article-support-indexing · confirmed

**Tags:** typos

https://arxiv.org/abs/2610.22679v1; PDF p. 6, Definition 2.7, supported-cohomology indexing (PDF p. 6).

> Definition 2.7. Let X be a qcqs scheme

Definition 2.7’s homotopy formula omits the weight shift. Definition 2.2 uses cohomological grading. Thus $\pi_i$ of the unshifted motivic complex is $H^{-i,j}$, whereas $H^{2j-i,j}$ requires its $[2j]$ shift.

The unshifted right-hand side is visible on p. 6; equation (2.1) on p. 4 displays the required $[2j]$ shift.

**Correction:** Insert $[2j]$ on the right, or explicitly declare a shifted spectrum convention.

**Clarify definitions:** Specify shifted versus unshifted spectrum realization.

## article-product-normality · potential

**Tags:** prerequisite omission; missing proof steps

https://arxiv.org/abs/2610.22679v1; PDF p. 10, Multiplication paragraph and equation (4.3) (PDF p. 10).

> Taking π0(−) and using Lemma 4.1,

Equation (4.3) suppresses the normality condition needed by its cited Lemma 4.1. The paragraph begins with any qcqs X, then invokes Lemma 4.1, whose image-to-stage identification is stated for normal X.

The original paragraph’s scope and its explicit invocation of Lemma 4.1 do not match as written.

**Correction:** State normality for this deduction, or supply a general degree-zero identification.

No counterexample to the square is established; a stronger comparison can repair the deduction without narrowing its conclusion.

## article-scheme-category-notation · confirmed

**Tags:** typos

https://arxiv.org/abs/2610.22679v1; Printed p. 3, Notation and conventions; Section 2 opening functor (PDF p. 3).

> the category of qcqs schemes over a field k.

The conventions name the scheme category $\mathrm{Sch}_k^{\mathrm{op}}$ instead of $\mathrm{Sch}_k$. The same superscripted notation is then used as the contravariant domain of the motivic filtration. The intended scheme category and its opposite should be distinguished.

The superscript op is visible on the category name in the original rendered conventions and on the subsequent functor domain. Extraction separates the superscript from the name.

**Correction:** Remove the superscript $\mathrm{op}$ from the category name in the conventions; retain it on the displayed functor domain.
