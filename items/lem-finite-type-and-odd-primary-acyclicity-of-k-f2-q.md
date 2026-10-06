---
id: lem-finite-type-and-odd-primary-acyclicity-of-k-f2-q
kind: lemma
title: "Finite type and odd-primary acyclicity of K(F₂,q)"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - def-axiom-of-choice
  - lem-finite-cover-transfer-with-inverted-degree-and-sign-anti-invariants
  - lem-infinite-real-projective-space-is-a-marked-mod-two-eilenberg-maclane-space
  - thm-schubert-cells-give-the-stable-grassmannian-cw-structure
  - def-schubert-cells-in-real-and-complex-grassmannians
  - thm-cellular-homology-computes-singular-homology
  - thm-mapping-path-factorization
  - thm-long-exact-sequence-of-homotopy-groups-of-a-fibration
  - thm-cw-approximation-of-an-arbitrary-space
  - thm-existence-and-homotopy-uniqueness-of-eilenberg-maclane-spaces
  - lem-weak-homotopy-equivalences-induce-integral-homology-isomorphisms-without-choice
  - thm-homological-serre-spectral-sequence
  - thm-universal-coefficient-theorem-for-homology-over-a-pid
  - thm-universal-coefficient-theorem-for-cohomology-over-a-pid
  - cor-cohomology-over-a-field-is-dual-to-homology-over-that-field
  - cor-fundamental-theorem-of-finitely-generated-abelian-groups-from-pid-modules
  - cor-principal-ideal-domains-are-noetherian
  - thm-finitely-generated-modules-over-noetherian-rings-are-noetherian
  - thm-absolute-hurewicz-theorem
  - prop-the-first-hurewicz-map-in-degree-one-is-abelianization
  - thm-eilenberg-maclane-spaces-represent-singular-cohomology
  - cor-contractible-nonempty-spaces-have-the-homology-of-a-point
  - thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology
dependency_level: 1
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Tom Weston, An Introduction to Cobordism Theory"
      url: "https://math.stanford.edu/~ralph/morsecourse/cobordismintro%20.pdf"
      locator: "§13, integral-versus-field comparison; reverse finite-generation induction proved locally"
    - title: "Charles Weibel, An Introduction to Homological Algebra, Chapter 3"
      url: "https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf"
      locator: "§3.6, universal coefficient theorems"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC. For every q≥1 and every CW model K_q=K(Z/2,q), H_n(K_q;Z) is finitely generated for every n; for n>0 it is a finite 2-primary group. For every field F of characteristic different from two, H_n(K_q;F)=H^n(K_q;F)=0 for n>0 and H_0=H^0=F. The F₂ homology and cohomology are finite-dimensional degreewise, with H^i=0 for 0<i<q and H^q=F₂ with its normalized fundamental class. Positive integral cohomology is finite 2-primary. These are homological finite-type assertions, not finite-cell claims about arbitrary CW models.

## Facts & Assumptions

**Given:** AC; for each $q\ge1$ a based CW model $K_q=K(\mathbb Z/2,q)$; the base case model $K_1=BO(1)=\mathbb{RP}^\infty$ with its orientation double cover $S^\infty$; and the actual mapping-path fibrations $\Omega K_q\to PK_q\to K_q$ with their strict loop fibers.

[F1] The rank-one model is the marked infinite real projective space with its contractible antipodal cover, its one-cell-per-degree Schubert CW structure, and the finite-cover transfer with inverted degree ([[lem-infinite-real-projective-space-is-a-marked-mod-two-eilenberg-maclane-space]], [[thm-schubert-cells-give-the-stable-grassmannian-cw-structure]], [[lem-finite-cover-transfer-with-inverted-degree-and-sign-anti-invariants]]); cellular homology computes the singular homology of the finite skeleta ([[thm-cellular-homology-computes-singular-homology]], [[def-schubert-cells-in-real-and-complex-grassmannians]]).

[F2] The mapping-path factorization gives the actual path fibration with contractible total space and strict loop fiber, its long exact sequence is exact, CW approximation attaches to a prescribed basepoint, marked CW models of the same group are unique, and weak equivalences induce integral homology isomorphisms ([[thm-mapping-path-factorization]], [[thm-long-exact-sequence-of-homotopy-groups-of-a-fibration]], [[thm-cw-approximation-of-an-arbitrary-space]], [[thm-existence-and-homotopy-uniqueness-of-eilenberg-maclane-spaces]], [[lem-weak-homotopy-equivalences-induce-integral-homology-isomorphisms-without-choice]]).

[F3] The homological Serre spectral sequence of the induced fibration converges to the homology of the contractible total space ([[thm-homological-serre-spectral-sequence]]), and the absolute Hurewicz theorem and its degree-one abelianization form compute the first nonzero homology ([[thm-absolute-hurewicz-theorem]], [[prop-the-first-hurewicz-map-in-degree-one-is-abelianization]]); the fundamental class is the identity class of the Eilenberg–Mac Lane representability bijection ([[thm-eilenberg-maclane-spaces-represent-singular-cohomology]]) and a contractible nonempty space has the homology of a point ([[cor-contractible-nonempty-spaces-have-the-homology-of-a-point]], [[thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology]]).

[F4] The universal coefficient theorems compute integral homology and cohomology from the other side over a PID and over fields, and cohomology over a field is dual to homology ([[thm-universal-coefficient-theorem-for-homology-over-a-pid]], [[thm-universal-coefficient-theorem-for-cohomology-over-a-pid]], [[cor-cohomology-over-a-field-is-dual-to-homology-over-that-field]]); finitely generated modules over the Noetherian ring $\mathbb Z$ have finitely generated submodules, and finitely generated abelian groups decompose into cyclic summands ([[cor-principal-ideal-domains-are-noetherian]], [[thm-finitely-generated-modules-over-noetherian-rings-are-noetherian]], [[cor-fundamental-theorem-of-finitely-generated-abelian-groups-from-pid-modules]]).

[F5] AC chooses the CW models, basepoints and marked equivalences used in the induction ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Proof of the base case. Take K_1=BO(1)=RP∞. Its orientation double cover is BSO(1)=V_1(R∞), contractible by the published stable-Stiefel theorem. The oriented-Grassmannian definition supplies this literal double cover. The covering homotopy lifting and fibration long exact sequence give π₁=Z/2 and no higher homotopy groups. The Schubert CW construction has one cell in each nonnegative degree (rank-one symbol a₁=d+1); thus its integral cellular chains are finite free in each degree. Cellular homology and Noetherian submodules give integral finite generation. The finite-cover transfer, with $d=2$, identifies its F-cohomology with that of its contractible cover, hence it vanishes in positive degrees. Field evaluation UCT identifies cohomology with the dual of homology; a nonzero vector has a nonzero functional under AC, so field homology also vanishes. Marked homotopy uniqueness transports all these facts to any chosen CW model. [given, F1, F5]

2.1 Proof of the induction step. Use the actual mapping-path fibration ΩK_q→PK_q→K_q with contractible total space. Its fibration long exact sequence makes the strict loop fiber path connected and gives its only nonzero homotopy group as Z/2 in degree q−1. To compare its homology with that of K_{q-1}, no imported CW-type-of-fibers theorem is necessary: take the published weak CW approximation L→ΩK_q. It is connected and has precisely these homotopy groups, so the published marked CW-model uniqueness gives a homotopy equivalence K_{q-1}→L. Their composite is a weak equivalence to the strict loop fiber. The inspected weak-equivalence homology theorem identifies its integral homology with H_*(K_{q-1};Z), and coefficient UCT makes the same comparison over each field. This makes the strict-fiber comparison fully local: its only ingredients are the mapping-path fibration, its homotopy exact sequence, weak CW approximation, marked CW-model uniqueness and coefficient UCT. No CW-type-of-fibers theorem or strict-fiber homotopy equivalence is used. For q≥2 the base is simply connected, so the homological Serre system is constant. Suppose integral homology of K_{q-1} is finitely generated in every degree. Prove H_s(K_q;Z) finitely generated by induction on s. H₀=Z and H₁=0. For s>1 the bottom-row term E²_{s,0}=H_s(K_q;Z) has no incoming differentials. Its outgoing differential on page a has target E^a_{s-a,a-1}, 2≤a≤s. The target is a subquotient of H_{s-a}(K_q;H_{a-1}(K_{q-1};Z)). The coefficient UCT expresses this group as an extension of a tensor product involving H_{s-a}(K_q;Z) and a Tor group involving H_{s-a-1}(K_q;Z). Both base degrees are smaller than s, and both coefficient groups are finitely generated. The PID decomposition makes their tensor and Tor groups finitely generated; Noetherianity makes every target and image finitely generated. There are only finitely many such pages, and E∞_{s,0}=0 because the total space is contractible. The successive kernels therefore filter H_s(K_q;Z) with finitely generated image quotients and zero final kernel. Finite extensions prove the assertion. This is a reverse finite-generation argument, proved here; the published Serre finite-generation transfer alone does not assert it. [step 1.1, F2, F5]

3.1 For coefficients in F, induction makes the fiber homology F in degree zero and zero elsewhere. The homological Serre sequence consequently has only its bottom row and no possible differential. Its contractible abutment forces the positive base homology to vanish. Field UCT gives the cohomology assertion. Integral homology UCT injects H_n(K_q;Z)⊗F into H_n(K_q;F). Taking F=Q removes the free part; taking every odd F_p removes each odd-primary summand in the finite abelian-group decomposition. Thus each positive group is finite 2-primary. Integral cohomology UCT and the cyclic free resolution show the same for positive integral cohomology. With F₂ coefficients tensor and Tor of finite groups are finite-dimensional; the first nonzero degree and lower vanishing follow from ordinary Hurewicz and evaluation UCT (for q=1, use abelianization). This completes the induction. [step 2.1, F3, F4]

4.1 No mod-two metastable operation-basis theorem is proved by this item: identifying H^{q+i}(K_q;F₂) with admissible Steenrod operations for i<q remains a different supplier. Integral cohomology must not be identified with that F₂-vector space merely because the integral groups are 2-primary. [step 3.1] ∎
