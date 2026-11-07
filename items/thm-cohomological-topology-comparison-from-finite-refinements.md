---
id: thm-cohomological-topology-comparison-from-finite-refinements
kind: theorem
title: Cohomological topology comparison from finite refinements
status: draft
dependency_level: 3
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-etale-fppf-topology-comparison-and-cohomology-models
- lem-site-slice-restriction-locality-and-composition
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: The Stacks Project, Etale Cohomology and Cohomology on Sites; More on Morphisms and Algebra
    url: https://stacks.math.columbia.edu/download/etale-cohomology.pdf
    locator: Local reconstruction from the full retrieved chapter sources, with targeted sections only. Exact item proof inputs and reading limits recorded below.
  - title: Demarche and Harari, Artin–Mazur–Milne duality for fppf cohomology, arXiv:1804.03941v3
    url: https://arxiv.org/pdf/1804.03941v3
    locator: Section2 completed-field complexes, Proposition2.1(4), Remark2.2 and Lemma2.10. It cites ordinary comparison and is not an independent proof of the generic finite-refinement geometry.
axiom_use: Only finite choices and all-witness covering refinements are used. Actual supplied cohomology models are data; no unqualified injective-existence theorem or family of closures is asserted.
proof_strategy: direct
---

## Statement

Let sigma⊂tau be topologies on the same small category with finite fibre products and final object. Assume exact sheafification and a pullback-stable weak Serre class A_X on every slice, whose objects already satisfy tau descent. Let P be a basechange-stable class of arrows, with exact sigma-direct image preserving these classes and with the actual degree-zero push-pull comparison an isomorphism; assume the direct-image topology-change squares commute. Assume each tau cover refines sigma locally to a P-cover followed by a sigma cover. For every actual supplied model of the named right-derived functors, all positive topology-change higher direct images of objects in A_X vanish; ordinary and bounded-below cohomology comparison is a natural isomorphism.

## Statement references

[[def-etale-fppf-topology-comparison-and-cohomology-models]]

[[lem-site-slice-restriction-locality-and-composition]]

## Facts & Assumptions

**Given:** All data and hypotheses of the statement, with every actual supplied cohomology model interpreted as in the topology-comparison definition.

[F1] Use the exact public interface of [[def-etale-fppf-topology-comparison-and-cohomology-models]] at the hypotheses stated there.

[F2] Use the exact public interface of [[lem-site-slice-restriction-locality-and-composition]] at the hypotheses stated there.

## Proof

**Proof technique:** direct.

1.1 Let C be  a small category with fibre products and final object, with topologies sigma⊂tau. Let epsilon be the induced morphism from tau-sheaves to sigma-sheaves: epsilon_* forgets the stronger sheaf condition, and a=epsilon^* is exact sheafification. The forgetful functor is faithful and a epsilon_*=id. Suppose full subcategories A_X of sigma-abelian sheaves over C/X satisfy: [F1, F2, given, construct, algebra]

2.1 A_X is closed under kernels, cokernels, extensions and pullback; its objects already satisfy tau descent, so epsilon_*aF=F. 2. A class P of arrows is stable under base change. For f:X→Y in P, coarse f_* is exact, sends A_X into A_Y, and the natural degree-zero comparison a f_*F→f_*aF is an isomorphism for F∈A_X. Pullback commutes with a, and the direct-image square with epsilon commutes. 3. Every tau covering refines, after a sigma covering of its target, to a single tau covering f in P followed by a sigma covering of its source. [F1, F2, step 1.1, given, construct, algebra]

3.1 Then H^q_sigma(X,F)→H^q_tau(X,aF) is an isomorphism in every degree for F∈A_X. The map is natural in X and F and gives an isomorphism on bounded-below derived sections. [F1, F2, step 2.1, given, construct, algebra]

4.1 For an object U, restriction to C/U has an exact left adjoint: on presheaves it is the direct sum over arrows V→U, followed by sheafification. Exactness is local: an element of a direct sum has finite support, so finitely many local liftings can be put on a common cover. Kernels are likewise checked componentwise and then locally. Consequently restriction preserves injectives, and a supplied injective resolution restricts to a resolution computing object cohomology. [F1, F2, step 3.1, given, construct, algebra]

5.1 A positive-degree object cohomology class becomes zero on a covering. Represent it by a cycle in the resolution. Exactness of the resolution as a sheaf complex says that cycle is locally a boundary, which is precisely the assertion. Similarly, R^q epsilon_* is the sigma sheafification of U↦H^q_tau(U,-): the cohomology sheaf of epsilon_*I is computed by sheafifying the objectwise cycles modulo boundaries. Thus vanishing of R^q epsilon_* is equivalent to killing every degree-q class on a sigma cover. [F1, F2, step 4.1, given, construct, algebra]

6.1 The preceding slice/composition lemma constructs the finite resolution comparisons, finite homotopies, Cartan–Eilenberg rectangles and actual composition spectral sequences for the named functors. The actual site direct images preserve injectives because their inverse images are exact, as proved there. Thus every composition/edge map used below is the actual derived-functor map. No unexplained compatible double complex is a hypothesis, and global-section acyclicity is never spent for another functor. [F1, F2, step 5.1, given, construct, algebra]

7.1 Write V_n for R^q epsilon_*aF=0 for all F∈A_X and1≤q≤n, on every slice. Assume V_n. For f∈P and F∈A_X, compare [F1, F2, step 6.1, given, construct, algebra]

8.1 Rf_{sigma,*} R epsilon_{X,*}(aF) = R epsilon_{Y,*} Rf_{tau,*}(aF). [F1, F2, step 7.1, given, construct, algebra]

9.1 On the left, the exact coarse f_* and V_n make all cohomology in degrees1,…,n zero. In degree0 the result is f_*F. On the right, the spectral sequence has E2^(p,q)=R^p epsilon_{Y,*} R^q f_{tau,*}(aF). Its q=0 row is a f_*F before applying epsilon, by hypothesis2, so V_n kills its entries with1≤p≤n. For1≤q<n, after lower positive rows have vanished, the only possibly nonzero total-degree q term is epsilon_*R^q f_{tau,*}(aF). No differential enters it, and an outgoing differential either reaches a vanished lower positive row or the q=0 row in a degree≤n, also zero by V_n. Thus that term vanishes, and faithfulness gives R^q f_{tau,*}(aF)=0. At q=n one MUST retain the possible transgression into R^(n+1)epsilon_*a(f_*F); discarding it would be incorrect. The zero total-degree-n abutment instead gives an injection epsilon_*R^n f_{tau,*}(aF)→R^(n+1)epsilon_*a(f_*F). The source already satisfies tau descent, while the tau sheafification of the target is zero by locality of cohomology. Exact sheafification makes this injection zero after applying a, so R^n f_{tau,*}(aF)=0 as well. For n=0 there is no positive-degree assertion. The degree-zero identification is the one in hypothesis2. Denote this consequence C_n. [F1, F2, step 8.1, given, construct, algebra]

10.1 Take xi∈H^(n+1)_tau(Y,aF). Kill it on a tau cover by locality, and use hypothesis3. After a sigma-local replacement of Y there is f:X→Y in P, a tau covering, such that xi|X is zero on a sigma covering of X. [F1, F2, step 9.1, given, construct, algebra]

11.1 Under V_n, the Leray sequence for epsilon on X gives an injection [F1, F2, step 10.1, given, construct, algebra]

12.1 H^(n+1)_sigma(X,F|X) → H^(n+1)_tau(X,aF|X), [F1, F2, step 11.1, given, construct, algebra]

13.1 whose image is exactly the classes which vanish sigma locally: the only possibly nonzero obstruction below total degree n+2 is the edge into H^0_sigma(X,R^(n+1)epsilon_*aF). The preceding local description identifies its kernel with precisely these locally zero classes. Thus xi|X comes from a coarse class theta. [F1, F2, step 12.1, given, construct, algebra]

14.1 Because coarse f_* is exact, the coarse Leray sequence identifies H^(n+1)_sigma(X,F|X) with H^(n+1)_sigma(Y,f_*F|X). The latter class becomes zero sigma locally on Y, by locality. Shrink sigma locally again; now xi|X=0. [F1, F2, step 13.1, given, construct, algebra]

15.1 Set B=f_{sigma,*}f_sigma^*F∈A_Y. The unit F→B is injective: its image after a is the restriction map of a tau sheaf along the tau cover f, hence is injective; applying epsilon_* and epsilon_*a=id gives injectivity before a. Put Q=B/F∈A_Y. [F1, F2, step 14.1, given, construct, algebra]

16.1 By C_n, R^q f_{tau,*}(a f^*F)=0 for1≤q≤n and f_{tau,*}(a f^*F)=aB. Leray for f therefore makes the edge [F1, F2, step 15.1, given, construct, algebra]

17.1 H^(n+1)_tau(Y,aB) → H^(n+1)_tau(X,a f^*F) [F1, F2, step 16.1, given, construct, algebra]

18.1 injective: all rows1,…,n are zero, and no differential can enter the position(n+1,0). Since xi restricts to zero on X, its image in H^(n+1)_tau(Y,aB) is zero. Exactness for0→aF→aB→aQ→0 gives eta∈H^n_tau(Y,aQ) with delta(eta)=xi. [F1, F2, step 17.1, given, construct, algebra]

19.1 Under V_n, comparison in degrees≤n follows from Leray for epsilon (only its degree-zero row contributes), so eta lifts to H^n_sigma(Y,Q). Naturality of the long exact sequence sends its coarse boundary to xi. The coarse boundary is sigma locally zero by locality. Thus xi is sigma locally zero. This proves V_(n+1). [F1, F2, step 18.1, given, construct, algebra]

20.1 V_0 is vacuous, so the induction proves all V_n. The epsilon spectral sequence then has only its degree-zero row for aF; this gives the asserted ordinary comparison and its naturality. For a bounded-below complex with cohomology in A, the analogous spectral sequence in each total degree gives the derived comparison. This last bounded-below extension uses no assertion about unbounded products or infinite totalizations. [F1, F2, step 19.1, given, construct, algebra] ∎

## Source notes

This draft supplies the local arguments rather than importing their conclusions. The exact full sources were retrieved; reading was limited to the named comparison, site-induction, finite-localization and refinement sections, and the compact-support sections listed in the references. It does not claim whole-chapter reading. The staged argument is adapted from the independently bound research packet; formal comparison proofs and the generic finite-direct-image successor have their separate review status. No publication or native gate credit is asserted.
