---
id: thm-cft-principal-w-minimal-series-rationality
kind: theorem
title: Rationality and C2 cofiniteness of principal minimal-series W algebras
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
physical_scope: null
axiom_use: ZF + AC inherited from finite root, invariant-theory and maximal-family suppliers
proof_strategy: direct
deps:
  - def-axiom-of-choice
  - def-cft-affine-w-algebra-via-brst
  - def-cft-w-algebra-good-grading
  - thm-cft-affine-w-brst-pbw
  - def-cft-principal-admissible-level
  - def-cft-root-data-for-principal-w-levels
  - lem-cft-principal-admissible-affine-nilcone-and-nonzero-reduction
  - lem-cft-principal-central-reduction-characters-and-semisimplicity
  - lem-cft-principal-voa-zhu-brst-quotient-comparison
  - lem-cft-principal-minus-ds-exactness-and-minimal-series-extensions
  - lem-cft-principal-w-arbitrary-admissible-semisimplicity
  - lem-cft-cyclic-weak-module-difference-one-spanning
  - lem-cft-zhu-top-induction-and-forward-rationality
  - def-rational-vertex-algebra
  - def-c2-cofinite-vertex-algebra
  - def-vertex-algebra-module
  - thm-every-derivation-of-a-semisimple-lie-algebra-is-inner
  - thm-borel-and-maximal-torus-conjugacy-over-algebraically-closed-field
  - lem-finite-lie-triangularization-and-rank-one-complete-reducibility
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-cft-affine-w-algebra-via-brst: mathematical-premise
  def-cft-w-algebra-good-grading: mathematical-premise
  thm-cft-affine-w-brst-pbw: mathematical-premise
  def-cft-principal-admissible-level: mathematical-premise
  def-cft-root-data-for-principal-w-levels: mathematical-premise
  lem-cft-principal-admissible-affine-nilcone-and-nonzero-reduction: mathematical-premise
  lem-cft-principal-central-reduction-characters-and-semisimplicity: mathematical-premise
  lem-cft-principal-voa-zhu-brst-quotient-comparison: mathematical-premise
  lem-cft-principal-minus-ds-exactness-and-minimal-series-extensions: mathematical-premise
  lem-cft-principal-w-arbitrary-admissible-semisimplicity: mathematical-premise
  lem-cft-cyclic-weak-module-difference-one-spanning: mathematical-premise
  lem-cft-zhu-top-induction-and-forward-rationality: mathematical-premise
  def-rational-vertex-algebra: mathematical-premise
  def-c2-cofinite-vertex-algebra: mathematical-premise
  def-vertex-algebra-module: mathematical-premise
  thm-every-derivation-of-a-semisimple-lie-algebra-is-inner: mathematical-premise
  thm-borel-and-maximal-torus-conjugacy-over-algebraically-closed-field: mathematical-premise
  lem-finite-lie-triangularization-and-rank-one-complete-reducibility: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Tomoyuki Arakawa, Rationality of W-algebras, principal nilpotent cases
      url: https://arxiv.org/pdf/1211.7124v3
      locator: Main Theorem and Sections9–10; actual quotient Zhu, affine reduction, multiplicity and extension prerequisites are supplied by the explicit local carriers below.
    - title: Tomoyuki Arakawa, Representation Theory of W-Algebras
      url: https://arxiv.org/pdf/math/0506056v4
      locator: Sections7–8; actual Verma and dual-Verma minus-DS identifications are supplied by their local cone/filtration carriers.
verification:
  precheck: pending
dependency_level: 14
---

## Statement

Let $\mathfrak g$ be finite-dimensional complex simple, choose a principal nilpotent $f$ (meaning $\dim\mathfrak g^f=\operatorname{rank}\mathfrak g$), compatible good-grading data, and a nondegenerate principal admissible level $k$. Assume a nonzero simple principal W quotient $W_k(\mathfrak g)$ of the universal algebra in [[def-cft-affine-w-algebra-via-brst]] is supplied with its source conformal structure. Then $W_k(\mathfrak g)$ is rational in the stated admissible-module convention and $C_2$-cofinite; its minimal-series representations form the complete isomorphism-class list of simple modules. Here rationality and $C_2$-cofiniteness are separate conclusions.

## Facts & Assumptions

**Given:** Exactly the original finite-dimensional simple Lie algebra, supplied principal nilpotent and compatible good-grading data, original two-branch nondegenerate principal-admissible level, and specified nonzero simple conformal W quotient. No reduction quotient is assumed simple or rational in advance.

[A1] [[def-axiom-of-choice]] is inherited by the finite Lie/invariant-theory suppliers and the maximal direct family in the final admissible-module result.

[F1] [[def-cft-affine-w-algebra-via-brst]], [[def-cft-w-algebra-good-grading]], [[thm-cft-affine-w-brst-pbw]], [[thm-every-derivation-of-a-semisimple-lie-algebra-is-inner]], [[thm-borel-and-maximal-torus-conjugacy-over-algebraically-closed-field]], and [[lem-finite-lie-triangularization-and-rank-one-complete-reducibility]] supply the actual universal BRST fields, compatible triple/grading, finite sl2 strings, root spaces and root-torus conjugation. The elementary principal-data transport used here is proved first below; no general independence-of-good-grading assertion is assumed.

[F2] [[def-cft-principal-admissible-level]] and [[def-cft-root-data-for-principal-w-levels]] retain the exact original threshold predicate and supplied normalized dual realization in its second branch; the level is noncritical.

[F3] [[lem-cft-principal-admissible-affine-nilcone-and-nonzero-reduction]] proves, at those exact thresholds, the actual affine support equality X_(L(k Lambda0))=Nilcone, explicit nondegenerate affine label and principal support, and, using the actual quotient Li comparison, nonzero principal reduction with finite-dimensional C2 quotient. Its proof uses the actual simple-Levi restriction and nonzero rank-one C2 symbol rather than a scalar top polynomial.

[F4] [[lem-cft-principal-central-reduction-characters-and-semisimplicity]] proves the actual associative principal quotient B_J is a finite product of copies of C with precisely the nondegenerate-admissible minimal-series central characters. [[lem-cft-principal-voa-zhu-brst-quotient-comparison]] identifies A(H_f^0(L_k)) with exactly that B_J through the natural actual-ideal map and its conformal shift. Neither conclusion presupposes the reduction simple.

[F5] [[lem-cft-principal-minus-ds-exactness-and-minimal-series-extensions]] proves actual affine minus-DS exactness and simple outputs, the absence of different minimal-series factors in their universal W Vermas, and actual pairwise extension splitting for this complete list when the actual quotient Zhu algebra is semisimple. Its proof binds ordinary and dual-Verma reductions, including the signed ghost/opposite bridge. It permits the principal BRST quotient before simplicity.

[F6] [[lem-cft-principal-w-arbitrary-admissible-semisimplicity]] proves the final passage from actual C2, semisimple Zhu and pairwise finite-length extension splitting to every specified admissible grading, including arbitrary multiplicities. It also proves that the resulting nonzero CFT-type principal quotient is simple and identifies it with the specified unique graded simple quotient. [[lem-cft-zhu-top-induction-and-forward-rationality]] supplies actual top correspondence only; no reverse Zhu criterion is used.

[F7] [[lem-cft-cyclic-weak-module-difference-one-spanning]] gives finite-dimensional fixed mode-degree spans and a lower degree cutoff for every cyclic weak module. [[def-rational-vertex-algebra]], [[def-c2-cofinite-vertex-algebra]], and [[def-vertex-algebra-module]] fix the exact public conventions.

## Proof

1.1 The originally supplied principal triple and grading transport to the pinned construction without narrowing the data. Principal f has centralizer dimension rank g, so its adjoint sl2 decomposition has exactly rank g strings. A Cartan containing its semisimple h lies in g_(h=0), whose dimension counts the even strings; thus every string is even and this zero space is precisely the Cartan. Hence h is regular. Conjugate it dominant. Every finite simple root has positive even value at least2, so e of h-weight2 and f of weight−2 use only the simple roots I with alpha_i(h)=2. Since h=[e,f], it lies in their simple-coroot span, and the equations on I identify it with 2rho_I-vee, whose coefficients on those coroots are positive. A simple root outside I would then have nonpositive value by the off-diagonal Cartan entries, contradicting dominant regularity. Thus I is all simple roots, h=2rho-vee, and every simple-root coefficient of e,f is nonzero. The adjoint torus rescales them to the pinned triple. Its common triple centralizer is zero: a vector commuting h is Cartan and commuting all simple-root e components makes all its simple-root values zero. Any compatible grading derivation is ad x by F1; x−h/2 centralizes this triple, hence is zero. The grading is therefore integral Dynkin, with no half-grade isotropic data. The resulting inner basis transport preserves the invariant form, current brackets, dual ghost pairing, BRST tensor and source conformal state. It identifies the entire original construction and its specified graded simple quotient with the pinned ones. [given, A1, F1, algebra]

2.1 Work in that pinned model and put V=L(k Lambda0), H=H_f^0(V). The two exact original level branches satisfy F2, including their optional dual realization without changing its normalization. F3 gives nonzero H and C2-cofiniteness from the actual affine support and quotient Li theorem. The universal W algebra has nonnegative finite-dimensional source conformal grades and vacuum grade C1 by its principal PBW generators of positive weights. Its graded surjection to nonzero H therefore makes H a conformal vertex algebra of CFT type with that source conformal vector. This proves the needed hypotheses before assuming H simple. [F1, F2, F3, step 1.1, algebra]

3.1 F4 identifies the actual A(H) with finite commutative semisimple B_J and its complete character list. Actual n=0 top correspondence consequently gives the complete simple admissible H-module list. Every such simple is ordinary: its finite Zhu top has scalar conformal class h, generation gives L0=h+n, and F7 makes its cyclic fixed-degree pieces finite dimensional. The actual minus-DS images of nondegenerate admissible affine modules are H-modules: their BRST coefficient action factors through the actual quotient current/ghost complex, and boundaries act trivially in cohomology. F5 identifies their nonzero simple outputs with these same top characters. Thus the top list is exactly the stated minimal-series representation list, with repetitions removed, rather than a list inferred from an unproved W rationality theorem. [F3, F4, F5, F6, F7, step 2.1, algebra]

4.1 Apply F5 to this actual quotient H and the complete ordinary list from the preceding step. The distinct-character W-Verma multiplicity vanishing gives splitting for unequal lowest weights; actual semisimple Zhu gives splitting for equal weights, including self-extensions. The exact finite-grade opposite duality reverses the remaining weight order with its signed character permutation. These are actual module sections, so every pair of ordinary simple H-modules has split extensions in the precise finite-length generalized category required by F6. [F4, F5, step 3.1, algebra]

5.1 F6 now applies: H is nonzero CFT type and C2-cofinite by step2.1, its actual Zhu algebra is finite semisimple by step3.1, and its actual pairwise extensions split by step4.1. It constructs an internal direct-sum decomposition of EVERY admissible module carrying its specified nonnegative grading and arbitrary multiplicities. Hence H is rational in F7. Applying that conclusion to the vacuum-cyclic regular H-module, the one-dimensional grade zero forces exactly one nonzero graded simple summand, so H is simple; this is part of F6, not an assumed plus-DS simplicity result. The universal CFT-type W algebra has a unique graded simple quotient: the sum of all proper graded ideals remains disjoint from its vacuum grade. Thus H is precisely the originally specified W_k. Its intrinsic C2 quotient and source conformal structure are those already proved, so the rationality and C2 conclusions transfer unchanged. [F3, F4, F5, F6, F7, step 2.1, step 3.1, step 4.1, algebra]

6.1 The list also exhausts weakly simple modules, if simple modules in the public Statement are read without an admissible grading. Any such module is cyclic. For its cyclic vector w, F7 makes the degree-zero word span finite dimensional and L0-stable, hence decomposes w into finitely many generalized L0 components by polynomial projections. A degree-d word on one component has generalized weight h+d; F7 gives finite-dimensional spans and a lower degree cutoff. Their finite sum is a grading-restricted generalized module. Normalize each of its finitely many integer weight cosets to a nonnegative grading. The rationality in step5.1 makes this a sum of ordinary simples, so weak simplicity forces one of the already classified modules. Finally the transport in step1.1 preserves all modes, grading and the specified simple-quotient map, proving the full original Statement for its supplied principal data. No generic Zhu reverse implication has been invoked. [F6, F7, step 1.1, step 3.1, step 5.1, algebra] ∎

## Proof status

Research replacement preserving the original Statement verbatim. All four former conditional interfaces are bound to actual local carriers: nonzero/CFT quotient and C2, actual Zhu/central list, actual affine Verma/dual-Verma/exactness/multiplicity/Ext, and arbitrary specified admissible gradings. This is a guarded-adoption offer only: no production write, independent mathematical acceptance, native transition, rehash or final workflow gate credit is claimed.
