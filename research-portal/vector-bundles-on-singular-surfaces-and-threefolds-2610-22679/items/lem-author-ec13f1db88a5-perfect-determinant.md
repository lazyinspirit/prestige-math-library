---
id: lem-author-ec13f1db88a5-perfect-determinant
kind: lemma
title: Determinant descends on the actual perfect K zero
status: draft
domain: mathematics
deps:
  - thm-adjudicate-a8dfc5e2f7fe-perfect-determinant-true-triangle-input
  - thm-author-3a003d7b5208-nonconnective-k-zero-input
  - def-nonconnective-k-spectrum-interface
  - def-exterior-determinant-bundles
  - def-scheme-perfect-complexes
  - math:def-axiom-of-choice
dependency_roles:
  thm-adjudicate-a8dfc5e2f7fe-perfect-determinant-true-triangle-input: mathematical-premise
  thm-author-3a003d7b5208-nonconnective-k-zero-input: mathematical-premise
  def-nonconnective-k-spectrum-interface: mathematical-premise
  def-exterior-determinant-bundles: mathematical-premise
  def-scheme-perfect-complexes: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 10
---

## Statement
For every qcqs scheme $X$, the specified perfect-complex group $K_0(X)=\pi_0\mathbb K(\operatorname{Perf}(X))$ has a natural homomorphism $\det_X:K_0(X)\to\operatorname{Pic}(X)$. On a bounded finite locally free complex $P^\bullet$ its line is $\bigotimes_i(\det P^i)^{(-1)^i}$; this formula is local when no global such representative exists. It agrees with the exterior determinant on a bundle, sends a shift to the inverse line, and respects all cofiber relations. This requires no equality with vector-bundle K zero.

## Facts & Assumptions
[F1] [[thm-adjudicate-a8dfc5e2f7fe-perfect-determinant-true-triangle-input]] supplies the global graded determinant on perfect complexes, its invariance under derived isomorphisms, additivity for actual short-exact complex diagrams (Knudsen–Mumford true triangles), the local alternating formula and derived-pullback compatibility. Only these data are used here; a map of K-spaces or naturality for arbitrary ordinary triangle diagrams is not a premise.

[F2] [[thm-author-3a003d7b5208-nonconnective-k-zero-input]] identifies the cofiber Grothendieck presentation of the supplied essentially small stable idempotent-complete perfect category with its actual spectral $K_0$, naturally by the object-class map. [[def-nonconnective-k-spectrum-interface]] fixes this category and its exact derived pullbacks. [[def-scheme-perfect-complexes]] identifies its homotopy category with the full perfect subcategory of the sheaf-derived category, with cofibers represented by mapping cones.

[F3] [[def-exterior-determinant-bundles]] fixes exterior determinants and the Picard group law. On a bundle of locally varying rank, apply its constant-rank construction on the disjoint open rank loci.

[A1] AC and the fixed universe bounds are those already assumed in the specified enhanced model in [F2]; [[math:def-axiom-of-choice]] states AC. They are used here through that supplied model and its essentially small presentation. The class argument makes no simultaneous choice of bundle representatives or triangle isomorphisms.


**Given:** $X$ qcqs, AC and the fixed universes of the specified perfect-complex model.

**Goal:** Descend the global determinant to its actual $K_0$, with the stated formulas and naturality.

## Proof
1.1 Assign to a perfect object $P$ the Picard class $d(P)$ of the underlying line of its global graded determinant in [F1]. Derived-isomorphism invariance makes $d(P)$ depend only on its object equivalence class, and $d(0)=0$. Forgetting the grading is done only on isomorphism classes, after using the graded determinant data. [F1, F3, A1]

2.1 For any complex representing $P$, the identity mapping cone is acyclic, and the termwise split short-exact complex diagram $0\to P\to\operatorname{Cone}(1_P)\to P[1]\to0$ is a true triangle of perfect complexes. Its determinant additivity gives $d(P)+d(P[1])=d(\operatorname{Cone}(1_P))=d(0)=0$. This proves the inverse-line identity without assuming triangle functoriality in the ordinary derived category. [F1, F2, step 1.1]

3.1 Given an enhanced cofiber sequence $P\to Q\to R$, pass to its distinguished triangle in the supplied sheaf-derived category. Represent its first morphism by a roof and replace its source by the quasi-isomorphic complex $P'$ in that roof, obtaining an actual complex map $a:P'\to Q$ whose cone represents $R$. All three objects are perfect by [F2], although these representing complexes need not be globally bounded complexes of bundles. The globally defined termwise split short-exact complex diagram $0\to Q\to\operatorname{Cone}(a)\to P'[1]\to0$ is a KM true triangle. Thus [F1] and step 2.1 give $d(R)=d(Q)+d(P'[1])=d(Q)-d(P)$, so every actual cofiber relation is killed. Only existence of these isomorphisms is needed for the equality of Picard classes. [F1, F2, step 1.1, step 2.1]

4.1 Extend $P\mapsto d(P)$ to the free abelian object-class group. By step 3.1 it descends through all its cofiber relations, and the object-class isomorphism of [F2] gives the homomorphism on the specified spectral $K_0$. For a morphism $f:Y\to X$ of qcqs schemes, [F1] identifies the global determinant of $Lf^*P$ with the pullback determinant of $P$; the naturality of the object-class map in [F2] therefore makes these homomorphisms natural in $X$. Exactness of the supplied derived pullback, rather than flatness of $f$, is what is used. [F1, F2, step 3.1]

5.1 On any open with a bounded finite locally free representative, [F1] gives the alternating tensor formula in the Statement. In degree zero it is the exterior determinant of [F3], and step 2.1 gives the shift formula. These are formulas for restrictions of an already global line: the line and its descent isomorphisms come from [F1]. They do not assert that an arbitrary perfect class is globally a bundle difference or admits a global bounded bundle representative. This proves the full qcqs statement. [F1, F3, step 2.1, step 4.1] ∎
