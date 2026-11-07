---
id: lem-cft-rational-top-balance-and-nodal-normalization
kind: lemma
title: Rational top balance gives nodal normalization factorization
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
proof_strategy: direct
deps:
- thm-cft-dual-fusion-product-existence
- lem-cft-fixed-curve-partial-coinvariants-finite
- lem-cft-fixed-curve-strong-residue-and-vacuum-propagation
- lem-cft-plumbing-positive-pole-base-change-and-logarithmic-lifts
- thm-cft-finitely-generated-weak-joint-modules-grading-restricted
- lem-cft-c2-cofinite-modules-finitely-generated
- lem-cft-zhu-top-induction-and-forward-rationality
- lem-cft-c2-finite-higher-zhu-and-convergent-ordinary-characters
- thm-cft-contragredient-generalized-module
- def-rational-vertex-algebra
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Damiolini, Gibney and Tarasca, On factorization and vector bundles of conformal
      blocks from vertex algebras
    url: https://arxiv.org/pdf/1909.04683
    locator: Theorem7.0.1; the proof below uses singular vectors in the already constructed
      normalizing dual-fusion module instead of an unverified PBW extension of a functional.
dependency_roles:
  thm-cft-dual-fusion-product-existence: mathematical-premise
  lem-cft-fixed-curve-partial-coinvariants-finite: mathematical-premise
  lem-cft-fixed-curve-strong-residue-and-vacuum-propagation: mathematical-premise
  lem-cft-plumbing-positive-pole-base-change-and-logarithmic-lifts: mathematical-premise
  thm-cft-finitely-generated-weak-joint-modules-grading-restricted: mathematical-premise
  lem-cft-c2-cofinite-modules-finitely-generated: mathematical-premise
  lem-cft-zhu-top-induction-and-forward-rationality: mathematical-premise
  lem-cft-c2-finite-higher-zhu-and-convergent-ordinary-characters: mathematical-premise
  thm-cft-contragredient-generalized-module: mathematical-premise
  def-rational-vertex-algebra: mathematical-premise
dependency_level: 6
---

## Statement

Assume full AC. Let V be admissibly rational, C2-cofinite and of CFT type. Its grading-restricted generalized module category is finite semisimple, with exact involutive restricted contragredience, and its analogous joint k-component modules are finite sums of external tensor products of its ordinary simple modules. Write S_i for a finite simple list, S_i' for their restricted duals, and (S_i)_0 for their lowest conformal-weight space.

Let C be a compact complex nodal curve, let P be smooth incoming marks meeting every component of its full normalization $\nu:\widehat C\to C$, and assign an admitted incoming joint module W. Use the nodal state frames $x^{L(0)}v$ and $y^{L(0)}Jv$, $J=e^{L(1)}(-1)^{L(0)}$, and the dualizing frame $dx/x=-dy/y$ at each node. The finite-state finite-pole nodal residue quotient then has the canonical normalization isomorphism
$$C_C(W)\longrightarrow\bigoplus_{(i_e)}C_{\widehat C}\!\left(W\otimes\bigotimes_e(S_{i_e}\otimes S_{i_e}')\right),$$
induced by inserting at the two branches of each node the identity coevaluation on $(S_{i_e})_0\otimes(S_{i_e}')_0$. The map is independent of these top bases and commutes with permitted changes of the external formal coordinates. Vacuum insertions at extra smooth marks induce compatible isomorphisms, as long as the incoming divisor before insertion meets every normalization component. This is a fixed nodal-fiber assertion; its formal-family extension is separate.

## Facts & Assumptions

**Given:** Exactly the rational VOA, nodal curve, state frames and marked-component hypothesis above.

[F1] [[thm-cft-finitely-generated-weak-joint-modules-grading-restricted]] makes every cyclic weak module grading restricted. [[lem-cft-c2-cofinite-modules-finitely-generated]] supplies finite generation and an admissible grading on grading-restricted generalized modules. [[def-rational-vertex-algebra]] gives complete reducibility for that grading.

[F2] [[lem-cft-zhu-top-induction-and-forward-rationality]] proves ordinary simplicity, the finite semisimple Zhu algebra, and its exact simple-top correspondence. [[lem-cft-c2-finite-higher-zhu-and-convergent-ordinary-characters]] gives the finite ordinary simple list. [[thm-cft-contragredient-generalized-module]] supplies restricted duality and the opposite state formula.

[F3] [[thm-cft-dual-fusion-product-existence]] realizes $D_{\widehat C}(W)$ as actual partial blocks in W*, with the universal evaluation and full joint-module scope. [[lem-cft-fixed-curve-partial-coinvariants-finite]] gives its finite partial spaces. [[lem-cft-fixed-curve-strong-residue-and-vacuum-propagation]] gives their meromorphic reconstruction and vacuum propagation.

[F4] [[lem-cft-plumbing-positive-pole-base-change-and-logarithmic-lifts]] constructs the nodal state bundle and its weight filtration; its normalization and line-duality argument lifts arbitrarily specified finite node jets after allowing sufficiently many incoming poles.

## Proof

1.1 Every grading-restricted generalized module is a finite sum of ordinary simples: use F1's admissible grading, apply rationality, and note that finitely many generators have finite support in the resulting internal direct sum. F2 makes the simple admissible summands ordinary. Their finite-dimensional top spaces determine every module map because a simple is generated by its top. Endomorphisms of a simple top are scalar: subtract an eigenvalue of its finite-dimensional endomorphism and use its nonzero kernel and simplicity. Thus the finite simple list gives finite-dimensional Hom spaces, all short exact sequences split, every object is projective, and the category is equivalent to finite-dimensional modules over $\mathbb C^r$. Restricted duality is exact on each finite weight block, preserves the direct sum, and is involutive by the separating evaluation pairing. This proves the finite-category assertion without any tensor-product or braiding theorem. [F1, F2, algebra]

1.2 Let $D=D_{\widehat C}(W)$, with all node preimages treated as outgoing marks. The incoming hypothesis makes F3 applicable. Its partial space at all-zero outgoing cutoff is exactly the joint singular space $\Omega(D)$, meaning annihilation by $u_{(m)}$ for all homogeneous u and $m\ge\operatorname{wt}u$ at every branch. One inclusion is F3's outgoing pole bound. Conversely a singular vector already belongs to some finite partial space by the construction of D; its propagated covector has the improved zero cutoff. Pairing it with a global differential in the zero-cutoff lattice and summing residues gives zero, so it lies in the zero-cutoff partial space. This is the same cutoff-improvement argument used in F3's finiteness proof, with cutoff zero. [F3, construct]

2.1 We also need external tensor decomposition, not a categorical tensor product. In any weak single-component module, every cyclic submodule is grading restricted by F1 and hence a finite sum of ordinary simples by step 1.1. The whole weak module is therefore a sum of such simples. The canonical map $\bigoplus_iS_i\otimes\operatorname{Hom}_V(S_i,M)\to M$ is an isomorphism. Surjectivity is that sum property. For injectivity restrict a possible kernel vector to finitely many multiplicity vectors: a finite sum of simples is semisimple, and any simple relation would give a linear relation among the chosen independent module maps, by Schur's scalar endomorphism property. In a grading-restricted joint module M the multiplicity space $U_i=\operatorname{Hom}_{V,1}(S_i,M)$ inherits the remaining commuting component actions. Its joint block at beta is finite dimensional, since restriction to the finite top of S_i embeds it in $\operatorname{Hom}_{\mathbb C}((S_i)_0,M_{[h_i,\beta]})$. Every map has finite support in beta, because its finitely many top images do and the first-component action preserves beta. Lower bounds are inherited. Thus $U_i$ is an admitted joint module for the remaining components. Induct on the number of components; step 1.1 finishes the last component. This proves the finite external decomposition, including the case of nonfactorizing original labels. [F1, F2, step 1.1, algebra]

2.2 A nodal block, viewed as a functional on W, lies in $\Omega(D)$. Indeed a normalization differential in the zero-cutoff lattice has branch coefficient $x^{r}v\,dx=x(x^{r}v\,dx/x)$ for a weight-r state, so its node-frame constants vanish. It therefore descends to a nodal differential. Its incoming Ward action annihilates the nodal block, placing that block in the zero-cutoff partial space of step 1.2. Conversely the only extra conditions on a vector in that partial space come from matched node constants. Subtracting those constants from a nodal differential leaves a zero-cutoff differential. Every state v can occur as an independently specified constant at one node, zero at the others: F4's finite-node-jet interpolation, with sufficiently high incoming pole order, gives such a global differential. On the universal evaluation block its node residue condition is therefore exactly $$\big(o_+(v)-o_-(Jv)\big)d=0,$$ where $o(v)=v_{(r-1)}$ on a weight-r state, extended linearly to Jv. This proves both directions of the characterization; no existence of an induced module is assumed. [F3, F4, step 1.2, algebra]

3.1 For a simple ordinary module S, $\Omega(S)=S_0$. If a higher-weight vector were singular, commute every negative-degree (weight-lowering) mode to the right in any word on that vector. The mode commutator replaces a reversed pair by its correctly ordered pair plus words of shorter length. Induction on word length and the number of reversed pairs gives a spanning by weight-raising modes, then degree-zero modes, then weight-lowering modes. The last modes annihilate the singular vector; the others cannot reach the strictly smaller lowest conformal weight. Its cyclic submodule would therefore be proper, contradicting simplicity. The lowest top is singular by its lower bound. Step 2.1 consequently identifies $\Omega(D)$ with the finite direct sum of tensor products of simple tops and their multiplicity spaces. [F1, F2, step 2.1, algebra]

4.1 On a simple-top pair $S_{i,0}\otimes S_{j,0}$, the kernel of all the operators in step 2.2 is canonically $\operatorname{Hom}_{A(V)}((S_i')_0,(S_j)_0)$. This follows by identifying a tensor with a map from the first top dual and using the opposite formula $o_{S'}(v)=o_S(Jv)^t$. The simple-top correspondence in F2 and Schur's lemma make this space zero unless $S_j\cong S_i'$, and one dimensional in that case. Its generator is the identity coevaluation, independent of a basis. For all nodes the conditions act on their separate top factors, so their common kernel is the direct sum of the multiplicity spaces with paired simple labels $(S_i,S_i')$, tensored with these canonical coevaluations. F3's representing property identifies those multiplicity spaces with the corresponding normalization block spaces. Thus nodal blocks are exactly their direct sum. All spaces are finite dimensional, so dualizing proves the displayed coinvariant isomorphism. Its explicit map is insertion of the top coevaluation, as asserted. [F2, F3, step 2.1, step 3.1, step 2.2, algebra]

5.1 Changes of external coordinates act on W and on the global residue currents by the actual coordinate-covariance supplier in F3. They do not affect the inserted internal top identity tensors, so the isomorphism is equivariant. For an additional vacuum mark the normalizing block spaces before and after insertion are canonically isomorphic by F3's fixed-curve propagation: every normalization component has an original incoming mark and its node labels remain ordinary incoming labels for this application. Vacuum evaluation commutes with insertion of the finite top identity tensors. The factorization isomorphism of step 4.1 therefore makes vacuum insertion an isomorphism on the nodal spaces too. Its compatibilities for several auxiliary points follow from the symmetric iterated propagation and the same commuting evaluations. This proves all claims. [F3, step 4.1, algebra] ∎
