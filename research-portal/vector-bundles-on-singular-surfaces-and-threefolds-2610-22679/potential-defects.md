---
title: Prerequisite omissions and potential defects
description: Source-specific omissions, correctable errors and substantial proof gaps recorded for Fasel–Yakerson arXiv:2610.22679v1.
status: published
---

Draft article-only report: all 96 original claims, all 18 PDF pages and all 132 required leads compared. Retains source proof-scope/input gaps, notation corrections and dismissed concerns; no counterexample to Theorems A–C or Corollary D is established. One new real-surface research candidate has a conditional descent reduction, not a singular-case solution.

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

The affine Picard-divisibility use omits the completion-and-boundary reduction. For a smooth affine curve C, choose a smooth projective completion Cbar and a boundary k-point b. Subtracting $\deg(L)b$ makes any extending line bundle degree zero without changing its restriction.

The source moves directly from its Ful98 citation to affine Picard divisibility; the standard intervening reduction is not written.

**Correction:** State that $\operatorname{Pic}^0(\overline C)(k)$ surjects onto $\operatorname{Pic}(C)$; it is divisible by Jacobian multiplication, in every characteristic.

The claim is correct. This is not a defect audit of Fulton.

## article-supported-lift · dismissed

**Tags:** prerequisite omission

https://arxiv.org/abs/2610.22679v1; PDF p. 16, Theorem 6.7 proof, third-stage support lift (PDF p. 16).

> Using Proposition 6.2 and Remark 6.3,

The support-lift step includes its needed complement injectivity premise. The PDF invokes Proposition 6.2 and Remark 6.3 before lifting. Their stage-to-$K_0$ injectivity transfers vanishing to the filtered stage. K descent and the first three graded triangles provide stagewise excision.

The cited original sentence supplies the disputed premise; only standard descent details are compressed.

**Correction:** The short descent induction may be written explicitly.

## article-cdh-truncation-input · confirmed

**Tags:** prerequisite omission; missing proof steps

https://arxiv.org/abs/2610.22679v1; PDF p. 6, Proposition 2.6 proof, passage from Artin vanishing to cdh localization (PDF p. 6).

> The
> associated cdh-sheaf also vanishes and therefore

The characteristic-zero proof omits the locality step needed to truncate before cdh localization. Artin vanishing on affine threefolds does not alone prove the displayed equivalence on the entire qcqs site, which has larger-dimensional objects.

The quoted sentence is the authors’ transition between affine vanishing and the cdh-localized comparison.

**Correction:** State and justify the needed dimension-bounded refinement/site comparison, or prove the equivalence only after evaluation on X.

This identifies an omitted justification; it does not refute the evaluated comparison or Proposition 2.6.

## article-qcqs-smooth-locus · confirmed

**Tags:** insufficient assumptions; missing proof steps

https://arxiv.org/abs/2610.22679v1; PDF p. 10, Lemma 5.2 proof, Picard restriction square (PDF p. 10).

> Let U ⊂X be the smooth locus.

The smooth-locus proofs of Lemmas 4.1, 5.1 and 5.2 exceed the stated qcqs scope. Normality alone does not ensure a dense k-smooth locus, global-function equality, or injective Picard restriction. The affine finite-type convention does not restrict all nonaffine qcqs schemes.

The source conventions on p. 3 and proofs on pp. 9–10 invoke these restrictions without local finite presentation.

**Correction:** Retain the qcqs conclusions using direct rank/determinant comparisons; use smooth-locus restriction only with suitable finite-type hypotheses.

The example refutes the proof premises, not the rank/determinant conclusions or affine classification theorems.

**Counterexample:** Let $k$ be algebraically closed and $X=\mathbf P^1_{k(t)}$, viewed over $k$. This nonaffine scheme is normal and qcqs, with empty $k$-smooth locus, $\Gamma(X,\mathcal O)=k(t)$ and $\operatorname{Pic}(X)=\mathbb Z$.

A nonempty $k$-smooth affine neighborhood would have a nonzero finitely generated $k$-algebra containing $k(t)$. A maximal residue field would give a $k$-algebra map $k(t)\to k$, impossible since $t-a$ is invertible for every $a\in k$. Hence $U=\varnothing$, $\Gamma(U,\mathcal O)=0$ and $\operatorname{Pic}(U)=0$. The nonaffine example respects the original affine finite-type convention.

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

The reduction is explicitly printed on p. 11, repeated in Proposition 5.5, and inherited on p. 14.

**Correction:** Use perfect-K Chern/Cartan operations and a compatible projection comparison; retain the qcqs conclusions.

This defeats a proof reduction under the original nonseparated qcqs hypotheses; it is not a counterexample to additivity, $p_2$=−$c_2$, or either affine classification.

**Counterexample:** Over algebraically closed $k$, glue two copies of $\mathbb A^2_k$ along $W=\mathbb A^2_k\setminus\{0\}$. The doubled plane $X$ is smooth, normal, finite type and qcqs. It has a nonzero rank-zero class in perfect $K_0$ that is not a bundle difference.

Quillen–Suslin trivializes bundles on each chart. Since $\Gamma(W,\mathcal O)=k[x,y]$, transition matrices and their inverses extend across the origin; every bundle on $X$ is trivial. Localization gives $K_1(W)/\operatorname{im}K_1(\mathbb A^2_k)=\mathbb Z$: the origin Koszul generator has Euler length one and zero ambient $K_0$ class. Thomason–Trobaugh Mayer–Vietoris injects this quotient into $K_0(X)$, giving a nonzero class $\delta$ vanishing on both charts. The same extension of units gives $\operatorname{Pic}(X)=0$. Weight zero identifies the rank kernel $F^1$, and the exact weight-one triangle with $H^{2,1}=\operatorname{Pic}(X)=0$ places $\delta$ in $F^2$. A rank-zero bundle difference is zero here.

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

## article-generic-support-input · dismissed

**Tags:** others

https://arxiv.org/abs/2610.22679v1; PDF p. 16, Theorem 6.7 proof, final generic-rank kernel argument (PDF p. 16).

> with the localization at the generic point

No sign error is established in the final generic-rank map. On a smooth neighborhood of the integral support curve, devissage identifies the leading coefficient with alternating generic length. The residue sheaf has coefficient +1; localization kills its kernel by point-supported classes.

The PDF explicitly describes this map as generic-point localization, consistent with the positive generator.

Deep purity and comparison constructions remain cited inputs, not re-proved here.

## article-classical-characteristic-scope · dismissed

**Tags:** others

https://arxiv.org/abs/2610.22679v1; PDF p. 1, Introduction, classical classifications and splitting inputs (PDF p. 1).

> The classification of algebraic vector bundles by characteristic classes is a classical prob-

The classical critical-rank results are not given the rank-two threefold characteristic restriction. The introduction distinguishes the surface/rank-three classifications from the Asok–Fasel rank-two threefold theorem in characteristic different from two.

Reading the authors’ own separate introductory attributions resolves this conflation.

The original classical classification proofs were not reconstructed.

## article-fixed-avoidance · dismissed

**Tags:** others

https://arxiv.org/abs/2610.22679v1; PDF p. 15, Theorem 6.7 proof, condition (4) and following fixed-singular-locus application (PDF p. 15).

> Y  is disjoint from any closed subset Z ⊂U of codimension ≥2.

Condition (4) is not used with simultaneous universal avoidance. The following paragraph fixes Z as the singular locus. The required order is: fix Z, then choose the section. This avoids the impossible assertion that one nonempty curve misses every closed point.

The adjacent original application supplies the fixed closed set and resolves the wording.

**Correction:** Clarify the quantifier order if desired.

This does not independently reconstruct the full Bertini input.

## article-smooth-chow-localization · dismissed

**Tags:** others

https://arxiv.org/abs/2610.22679v1; PDF p. 13, Proposition 6.1 proof, supported degree-seven vanishing (PDF p. 13).

> by Zariski excision, we obtain

The smooth restriction used in Proposition 6.1 is compatible with Chow localization. Restriction $\mathrm{CH}^3$(U)→$\mathrm{CH}^3$(U minus T) is surjective: close each codimension-three cycle in U. Smooth motivic comparison and degree-seven vanishing give the supported conclusion.

This follows the original reduction to the smooth locus; the earlier generated naturality-interface gap does not contradict it.

## article-point-purity-scope · dismissed

**Tags:** others

https://arxiv.org/abs/2610.22679v1; PDF p. 14, Definition 6.5, pure-dimensional smooth-point subgroup (PDF p. 14).

> Definition 6.5. Let X be a qcqs scheme over a perfect field k of (pure) dimension d.

Lower-dimensional isolated-point counterexamples do not satisfy the printed support convention. Lemma 2.9 and Definition 6.5 explicitly use pure dimension d. Their smooth closed points have codimension d. A generated dimension-only extension cannot replace that hypothesis when attributing a defect.

Purity is expressly in the original statement, and its codimension is used on p. 7.

No claim is made that fixed-weight-three classes include points on lower-dimensional clopen components.

## article-factor-and-exterior-sign · dismissed

**Tags:** others

https://arxiv.org/abs/2610.22679v1; PDF p. 17, Corollary 6.10 proof, alternating exterior class (PDF p. 17).

> Consider the class β

The coefficients +2 for a positive point and −2 for the alternating exterior class are consistent. For rank-three Chern roots x,y,z, the exterior-square roots are x+y,x+z,y+z. Expanding the total class of 1−E+Lambda²E−det(E) gives $c_1$=$c_2$=0 and $c_3$=−2xyz.

This checks the authors’ Corollary 6.10 computation integrally, alongside their positive-point normalization in Corollary 6.9.

Characteristic two does not change integer motivic coefficients into characteristic-two coefficients.

## article-affine-representatives · dismissed

**Tags:** others

https://arxiv.org/abs/2610.22679v1; PDF p. 12, Theorem A proof, prescribed-class construction (PDF p. 12).

> Using Serre’s splitting theorem

The critical-rank representative step is valid in the article’s affine finite-type setting. An affine perfect class has a finite-projective representative after adding a complement. Pad its constant rank if necessary and use Serre splitting to reach critical rank. This does not require global bundle generation on arbitrary qcqs schemes.

The source uses this step on affine surfaces or threefolds, unlike its broader Lemma 5.3 reduction.

## article-complement-scope · dismissed

**Tags:** others

https://arxiv.org/abs/2610.22679v1; PDF p. 14, Remark 6.3, curve-complement edge map (PDF p. 14).

> Remark 6.3. Under the hypotheses of Proposition 6.1,

Normality is not missing from the curve-complement edge argument. Proposition 6.1 provides torsion-freeness without normality. The complement has dimension three; its rational edge comparison and torsion-freeness give integral injectivity, while surjectivity is formal.

Remark 6.3 explicitly uses Proposition 6.1’s hypotheses, rather than importing Proposition 6.2’s normality assumption.

The underlying torsion-freeness and rational-degeneration inputs retain their cited-source qualifications.

## article-second-chern-domain · dismissed

**Tags:** others

https://arxiv.org/abs/2610.22679v1; PDF p. 11, Proposition 5.5 proof, opening (PDF p. 11).

> Let α = [V ]−[W]

The article does not assume second-Chern additivity on all $K_0$. Lemma 5.3 restricts additivity to $F^2$, and Remark 5.4 warns that it generally fails on $F^1$. Whitney cross terms vanish on $F^2$ because $c_1$ vanishes there.

The original domain restrictions answer this concern; the bundle-representation proof gap is separately retained.

## article-bertini-point-input · dismissed

**Tags:** others

https://arxiv.org/abs/2610.22679v1; PDF p. 15, Theorem 6.7 proof, first Bertini application, KM82 §3 (PDF p. 15).

> By Swan’s
> version of Bertini theorem

A generated helper gap does not establish a characteristic restriction in the source’s first section construction. The original explicitly cites Swan’s Bertini theorem via KM82 §3. No counterexample under its actual affine hypotheses was verified.

The PDF attributes a substantial input rather than claiming the generated first-jet proof.

KM82 §3 was not independently re-proved; this dismissal concerns the proposed attribution, not a new certification of that theorem.

## article-point-correction · dismissed

**Tags:** others

https://arxiv.org/abs/2610.22679v1; PDF p. 16, Theorem 6.7 proof, point correction in localization diagram (PDF p. 16).

> There exists thus a

The point correction needs no injectivity of support-to-global maps. Exactness gives a with g(a)=i(alpha). Commutativity gives i(alpha−f(a))=0. This works even if f and g have kernels.

These are precisely the authors’ named maps and correction on p. 16.

## article-morrow-status · dismissed

**Tags:** others

https://arxiv.org/abs/2610.22679v1; PDF p. 16, Remark 6.8, communicated work (PDF p. 16).

> This argument will appear in his ongoing work with Elden Elmanto.

Remark 6.8 reports communicated work, rather than supplying a proved general-dimensional comparison. The authors explicitly say the argument will appear later. Their subsequent geometric-method question is distinct from that reported alternative method.

The original qualification is explicit and must survive any portal paraphrase.

The communicated proof and its publication status are not independently established here.

## Limits

- This is Step 8 report work. Earlier scientific review remains historical evidence; no Step 7 rejudgment, worker launch, supplier audit, publication or acceptance stamp is claimed.
- Source defects are restricted to Fasel–Yakerson v1. The 132 comparison records distinguish generated-only obligations and review limitations from claims actually printed by the authors; generated repair histories and prerequisite-source allegations are excluded from report findings.
- The main theorems concern affine finite-type schemes over an algebraically closed field. Broad qcqs lemmas are assessed at their stated scope, without silently shrinking them to that main application setting. Counterexamples to proof premises do not refute their conclusions.
- Imported purity, Bertini, rational degeneration, perfect Chern operations, cancellation and splitting remain substantial external inputs. Their complete foundational proofs were not reconstructed. Earlier incomplete-reading leads confer no new verification credit.
- The new support-indexing observation is already accommodated by the frozen current def-cohomology-with-support shift convention. The new product-square scope observation is already accommodated by the frozen normality-qualified degree-zero statement. Neither requires changing current authored content.
- Only report JSON, source/coverage anchors and word limits were checked locally. KaTeX was unavailable in the proposal workspace; the actual central renderer/proof-layout battery was not run. There are no item-proof or serving-file proposals in this response.
