---
id: lem-gts-rational-slope-tilt-heart-noetherianity
kind: lemma
title: "Coherent duality and rational slope-tilt heart noetherianity"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
deps:
  - def-derived-category-of-an-abelian-category
  - def-chern-character-and-todd-class
  - thm-hilbert-polynomial-degree-support-dimension
  - thm-ample-powers-very-ample-proper-base
  - thm-grothendieck-riemann-roch-for-projective-morphisms
  - lem-eventual-global-generation-coherent-twists
  - thm-auslander-buchsbaum-serre-regularity-criterion
  - thm-auslander-buchsbaum-formula
  - thm-depth-lemma
  - thm-nonaffine-regular-local-ring-is-ufd
  - lem-regular-quotient-dualizing-complex-and-biduality
  - thm-regular-local-rings-are-domains-and-cohen-macaulay
  - def-axiom-of-choice
dependency_roles:
  def-derived-category-of-an-abelian-category: mathematical-premise
  def-chern-character-and-todd-class: mathematical-premise
  thm-hilbert-polynomial-degree-support-dimension: mathematical-premise
  thm-ample-powers-very-ample-proper-base: mathematical-premise
  thm-grothendieck-riemann-roch-for-projective-morphisms: mathematical-premise
  lem-eventual-global-generation-coherent-twists: mathematical-premise
  thm-auslander-buchsbaum-serre-regularity-criterion: mathematical-premise
  thm-auslander-buchsbaum-formula: mathematical-premise
  thm-depth-lemma: mathematical-premise
  thm-nonaffine-regular-local-ring-is-ufd: mathematical-premise
  lem-regular-quotient-dualizing-complex-and-biduality: mathematical-premise
  thm-regular-local-rings-are-domains-and-cohen-macaulay: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: "Bayer, Macrì and Toda, Bridgeland Stability Conditions on Threefolds I"
      url: https://arxiv.org/pdf/1103.5010v2
      locator: "§3.2, including Lemma 3.2.4; §§5.1–5.2, including Proposition 5.1.3 and Proposition 5.2.2; printed pp.11–13 and21–26. Direct coherent reconstruction is supplied locally."
category: string-theory
page: gts-bridgeland-stability-dt-frontiers
reference: items/lem-gts-rational-slope-tilt-heart-noetherianity.md
dependency_level: 0
---

## Statement

Assume the Axiom of Choice. Let $X$ be a smooth integral projective complex threefold, let $H$ be an ample Cartier divisor, put $v=H^3$, and for a torsion-free coherent sheaf put $\mu_H(F)=H^2c_1(F)/(v\operatorname{rk}F)$. Coherent sheaves admit the slope Harder--Narasimhan filtration. For $\beta\in\mathbb R$, let $\mathcal T_\beta$ consist of torsion and sheaves with all torsion-free slope factors strictly greater than $\beta$, and let $\mathcal F_\beta$ consist of torsion-free sheaves with all slopes at most $\beta$. Then the two-term complexes with $H^{-1}\in\mathcal F_\beta$ and $H^0\in\mathcal T_\beta$ form a bounded heart $\mathcal B_\beta$. The additive function $d_\beta=H^2\operatorname{ch}_1-\beta v\operatorname{ch}_0$ is nonnegative on that heart; its zero subcategory $\mathcal C_\beta$ is Serre and consists exactly of complexes whose $H^{-1}$ is zero or slope-semistable of slope $\beta$ and whose $H^0$ is supported in dimension at most one. Ordinary zero-dimensional sheaves are also a Serre subcategory. If $\beta$ is rational, $\mathcal B_\beta$ is noetherian. These assertions use no Bogomolov inequality. Moreover the coherent duality used in this construction has the following properties: torsion-free double hulls are reflexive and agree under codimension-two modifications; $\mathbb D(E)=R\mathcal Hom(E,\mathcal O_X)[1]$ is involutive on $D^b(\operatorname{Coh}X)$; $\mathcal Ext^i(G,\mathcal O_X)$ has codimension at least $i$; a sheaf of dimension at most one has $\mathcal Hom=\mathcal Ext^1=0$ against $\mathcal O_X$; and for zero-dimensional $T$, $R\mathcal Hom(T,\mathcal O_X)=T^D[-3]$ with $T^D=\mathcal Ext^3(T,\mathcal O_X)$ of the same length and $(T^D)^D\cong T$.

## Statement references

[[def-derived-category-of-an-abelian-category]]

[[def-chern-character-and-todd-class]]

[[thm-hilbert-polynomial-degree-support-dimension]]

[[thm-ample-powers-very-ample-proper-base]]

[[thm-grothendieck-riemann-roch-for-projective-morphisms]]

[[lem-eventual-global-generation-coherent-twists]]

[[thm-auslander-buchsbaum-serre-regularity-criterion]]

[[thm-auslander-buchsbaum-formula]]

[[thm-depth-lemma]]

[[thm-nonaffine-regular-local-ring-is-ufd]]

[[lem-regular-quotient-dualizing-complex-and-biduality]]

[[def-axiom-of-choice]]

## Facts & Assumptions

[A1] Full Axiom of Choice is retained from the actual coherent and regular-local suppliers.

[F1] The exact mathematical inputs are [[def-derived-category-of-an-abelian-category]], [[def-chern-character-and-todd-class]], [[thm-hilbert-polynomial-degree-support-dimension]], [[thm-ample-powers-very-ample-proper-base]], [[thm-grothendieck-riemann-roch-for-projective-morphisms]], [[lem-eventual-global-generation-coherent-twists]], [[thm-auslander-buchsbaum-serre-regularity-criterion]], [[thm-auslander-buchsbaum-formula]], [[thm-depth-lemma]], [[thm-nonaffine-regular-local-ring-is-ufd]], [[lem-regular-quotient-dualizing-complex-and-biduality]], [[def-axiom-of-choice]]. [[thm-regular-local-rings-are-domains-and-cohen-macaulay]] supplies regular-local Cohen–Macaulayness and regular parameter sequences. Their supplied interfaces are used below; no external tilt, polynomial-stability, or derived-dual theorem is assumed.

## Proof

**Given:** Exactly the geometric data and explicit hypotheses of the Statement.

1.1 Bounded coherent derived categories here have Hom sets: on a finite affine cover coherent sheaves are specified by finitely presented modules and gluing matrices from sets, so their isomorphism classes form a set; bounded complexes and chain maps on a chosen skeleton likewise form a set. The actual derived-category roof localization therefore has Hom sets under its stated small-category hypothesis. Only this bounded coherent model is used. A coherent sheaf has a finite type dual. For a torsion-free M on a regular integral scheme, $M→M**$ is injective, the quotient is supported in codimension at least two, M** is reflexive, and every inclusion of torsion-free sheaves with codimension-at-least-two cokernel identifies their double duals. Here is the local argument used: embed M in its generic vector space and clear denominators of finitely many generators to separate a nonzero element by a map to the domain R, giving injectivity. At height one the local ring is a DVR, so M is free and evaluation is an isomorphism. For any finite presentation, a dual module is the kernel of a matrix between finite free modules; the image is torsion-free, so the Depth Lemma gives depth at least min(2,dim R) for the kernel. In a regular local UFD, R is the intersection of its height-one localizations in its fraction field, by cancelling the irreducible factors of a denominator. The kernel of a finite matrix is therefore the intersection of its height-one lattices in its generic vector space: a vector in every such kernel has all coordinates in R, and its matrix equations vanish over R because they vanish over the fraction field. Apply this to dual modules. Both M** and M**** are dual modules, and their canonical evaluation is an isomorphism at height one; their lattice intersections agree, so it is an isomorphism everywhere. The same argument identifies the double duals of two torsion-free modules agreeing at height one. This proves the asserted hull facts, rather than assuming a threefold reflexivity theorem from a surface-only supplier. [given, A1, F1, algebra]

2.1 A finite sheaf on X is locally perfect, and its derived $O_X-dual$ is coherent and bounded: regular local rings have global dimension their dimension by the actual Auslander–Buchsbaum–Serre supplier. Finite free resolutions show that dualization is local and that the signed double evaluation is a quasi-isomorphism. In particular the contravariant functor [given, A1, F1, step 1.1, algebra]

3.1 $D(E)=RHom_X(E,O_X)[1]$ [given, A1, F1, step 2.1, algebra]

4.1 satisfies D²≅id on $D^b(Coh X)$. The actual local biduality supplier gives precisely this finite-projective evaluation argument; no proper-space dualizing complex is confused with $O_X$ here. [given, A1, F1, step 3.1, algebra]

5.1 For a coherent sheaf G, $\operatorname{Ext}^i(G,O_X)$ has codimension at least i: at a point of codimension less than i, regular-local global dimension is less than i. For G supported in dimension at most one, $\operatorname{Hom}(G,O_X)=\operatorname{Ext}^{1}(G,O_X)=0$. Locally its annihilator has height at least two; choose two successive nonzerodivisors in that annihilator by prime avoidance in the regular Cohen–Macaulay ring and its first hypersurface quotient. The two-term resolution of a regular element and derived quotient adjunction shift Ext down by one at each step, giving the stated vanishing. Here is that quotient calculation explicitly. For a nonzerodivisor x in a local ring R, put $B=R/(x)$. The free resolution $[R→R]$ with map x gives $RHom_R(B,R)=B[−1]$. For a B-module M, choose an injective R-resolution I of R. The complex $\operatorname{Hom}_R(B,I)$ consists of injective B-modules, since $\operatorname{Hom}_B(−,\operatorname{Hom}_R(B,I))=\operatorname{Hom}_R(−,I)$ is exact. Thus the same identity of Hom complexes gives $RHom_R(M,R)=RHom_B(M,B)[−1]$. Iteration along a regular sequence of length e annihilating M makes $\operatorname{Ext}_R^i(M,R)=0$ for $i<e$. Such a sequence of length two exists in the height-at-least-two annihilator: choose $x≠0$, and then avoid the finitely many associated primes of R/(x). Every such prime has height one, since after localization the depth lemma and Cohen–Macaulayness give $depth(R/(x))=\operatorname{dim}(R)−1$. Prime avoidance therefore applies to the annihilator. This proves the lower-degree vanishing without assuming G is Cohen–Macaulay. At a zero-dimensional stalk of T the annihilator contains powers of a full regular parameter sequence; these powers form a regular sequence of length three. For a zero-dimensional T, the same construction has length three and gives $RHom(T,O_X)=T^D[-3]$, with $T^D=\operatorname{Ext}^{3}(T,O_X)$ zero-dimensional. Finite free biduality gives $(T^D)^D≅T$; additivity or a residue-field composition series shows $length(T^D)=length(T)$. [given, A1, F1, step 4.1, algebra]

6.1 The numerical support facts for torsion sheaves follow from actual Hilbert-polynomial and GRR suppliers. Choose an integral multiple nH giving a projective embedding by the ample-power theorem. The coherent Hilbert polynomial has degree equal to support dimension and positive leading coefficient, since at large twists it is the nonnegative dimension of global sections and has nonzero leading coefficient. For a sheaf of dimension at most one its determinant is trivial: a finite locally free resolution has its canonical determinant trivialization off the codimension-two support, and this rational section has no divisor and therefore extends as a nowhere-zero section on the regular factorial scheme. Thus $ch1=0$. GRR now identifies the positive linear coefficient for a nonzero one-dimensional sheaf with Hch2, after dividing by n; a sheaf of dimension two has positive H²ch1 from the quadratic coefficient. For a zero-dimensional sheaf, a finite composition series by residue fields and GRR for their regular point embeddings give $ch0=ch1=ch2=0$ and $ch3=length$. These facts justify all torsion-denominator and zero-dimensional numerical claims below. [given, A1, F1, step 5.1, algebra]

7.1 Slope HN filtrations of coherent sheaves also exist without assuming tilt theory. Eventual global generation of E*(mH) embeds a torsion-free E into $O_X(mH)^N$ after bidualizing. For a positive-rank subsheaf A of rank a, its determinant has a nonzero map to a sum of $O_X(amH)$; regular local factoriality makes its determinant a line bundle and gives $μ(A)≤m$. Degrees are integers and $a≤rk(E)$, so the possible slopes form a discrete set bounded above. Choose a largest slope and then largest rank, saturating the subsheaf. Sums of two such maximal subsheaves and slope additivity prove uniqueness and maximality; otherwise the sum would have larger slope or larger equal-slope rank. Recurse on the torsion-free quotient, whose rank strictly decreases. Torsion is first removed as the maximal torsion subsheaf. This constructs the finite HN filtration and its usual Hom-vanishing. Dualizing away from codimension two reverses the HN slopes: a positive-rank quotient of a semistable sheaf has slope at least its slope, and dual subobjects correspond to those quotients after saturation; determinants are unaffected by codimension-two changes. Applying this to the filtration gives $μ_{\operatorname{max}}(F*)=−μ_{\operatorname{min}}(F)$ and $μ_{\operatorname{min}}(F*)=−μ_{\operatorname{max}}(F)$. This is ordinary duality of slope sheaves, not a tensor-product semistability theorem. [given, A1, F1, step 6.1, algebra]

8.1 The slope HN filtration gives the torsion pair $(T_β,F_β)$ in Coh X: split at β, with $\operatorname{Hom}(T_β,F_β)=0$ and a unique exact torsion/quotient sequence. The displayed $B_β$ is a bounded heart, by the following direct truncation construction. Its aisle consists of complexes with no positive cohomology and $H^{0}$ in $T_β$. Its coaisle consists of complexes with no cohomology below −1 and $H^{-1}$ in $F_β$. For any complex, take standard truncations and replace $H^{0}$ by its torsion-pair exact sequence; the homotopy fibre of the map $τ≤0E→H^{0}(E)→F_β(H^{0}(E))$ gives the tilted aisle truncation. Its cone has degree-zero sheaf $F_β(H^{0}(E))$ and the original positive cohomology, giving the complementary shifted coaisle. Orthogonality is standard cohomological orthogonality plus $\operatorname{Hom}(T_β,F_β)=0$. The shifts and boundedness lie between two consecutive standard truncations. This proves the heart claim directly. [given, A1, F1, step 7.1, algebra]

9.1 Since $d_β≥0$ is additive on this heart, $C_β$ is a Serre subcategory. A member C has $H^{-1}(C)$ either zero or slope-semistable of slope exactly β and $H^{0}(C)$ supported in dimension at most one. Indeed $d_β(C)=−d_β(H^{-1C})+d_β(H^{0}C)=0$ is a sum of nonnegative terms; equality forces the stated boundary slopes and rules out positive-rank or two-dimensional torsion in $H^{0}C$. Conversely these conditions imply $d_β=0$. [given, A1, F1, step 8.1, algebra]

10.1 The ordinary zero-dimensional sheaves form a Serre subcategory of $B_β$ as well. For $0→A→T→B→0$ with T zero-dimensional, standard cohomology gives $H^{-1}(A)=0$ and an injection $F=H^{-1}(B)→H^{0}(A)$ with zero-dimensional cokernel. If $H^{0}(A)$ had positive rank, this codimension-three change would give the same HN slopes for F and its torsion-free part, contradicting $F∈F_β$ and $H^{0}(A)∈T_β$. A positive-dimensional torsion part cannot map injectively into T. Thus A and B are ordinary zero-dimensional sheaves. This also proves that their exact sequences in $B_β$ are the ordinary coherent ones. [given, A1, F1, step 9.1, algebra]

11.1 For rational β, $B_β$ is noetherian. Consider $A_1⊂A_2⊂…⊂E$ in $B_β$. The nonnegative $d_β(A_i)$ are discrete and bounded above by $d_β(E)$, so they eventually agree. Then $Q_i=A_{(i+1)}/A_i$ lies in $C_β$; hence its $H^{0}$ is supported in dimension at most one. The $H^{-1}(A_i)$ form an increasing coherent chain inside $H^{-1}(E)$, and stabilize. The standard cohomology sequence then makes $H^{-1}(Q_i)$ inject into $H^{0}(A_i)$, with cokernel mapping onto $H^{0}(A_{(i+1)})$ and remaining quotient $H^{0}(Q_i)$. Its positive rank subtracts from rank $H^{0}(A_i)$; these nonnegative integer ranks can decrease only finitely often. Consequently $H^{-1}(Q_i)=0$ eventually, and each $Q_i$ is an ordinary sheaf of dimension at most one. Put $E_i=E/A_i$. Then $H^{-1}(E_i)→H^{-1}(E_{(i+1)})$ are injective with cokernels supported in dimension at most one. These torsion-free sheaves have one common reflexive hull by the coherent-duality construction, so their increasing chain stabilizes by coherent noetherianity. The $H^{0}(E_i)$ are successive coherent quotients, whose kernels inside the first sheaf stabilize. The remaining cohomology sequence forces $Q_i=0$. Thus the original chain terminates. No Bogomolov or polynomial-stability premise was used. [given, A1, F1, step 10.1, algebra] ∎

