---
id: lem-mod-two-eilenberg-maclane-base-and-path-loop-inputs
kind: lemma
title: "Local path-fibration and cohomology inputs for mod-two Eilenberg–Mac Lane induction"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - thm-mapping-path-factorization
  - thm-long-exact-sequence-of-homotopy-groups-of-a-fibration
  - thm-cw-approximation-of-an-arbitrary-space
  - prop-relative-cw-inclusions-are-cofibrations
  - prop-higher-homotopy-basepoint-transport-and-moving-homotopies
  - lem-weak-homotopy-equivalences-induce-integral-homology-isomorphisms-without-choice
  - thm-universal-coefficient-theorem-for-homology-over-a-pid
  - cor-cohomology-over-a-field-is-dual-to-homology-over-that-field
  - prop-cup-product-is-natural-unital-and-associative
  - thm-existence-and-homotopy-uniqueness-of-eilenberg-maclane-spaces
  - thm-absolute-hurewicz-theorem
  - thm-topological-universal-coefficient-short-exact-sequence-for-cohomology
  - thm-cohomological-serre-spectral-sequence
  - thm-multiplicative-structure-on-the-cohomological-serre-spectral-sequence
  - thm-eilenberg-maclane-spaces-represent-singular-cohomology
  - thm-homotopic-maps-induce-equal-maps-in-singular-cohomology
  - cor-contractible-nonempty-spaces-have-the-homology-of-a-point
  - def-axiom-of-choice
dependency_level: 0
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "Section 4.2, printed pp. 376–377: the path-space fibration; Section 4.1, Proposition 4.13: CW approximation. The required strict-fiber cohomology comparison is proved locally via the published weak-equivalence homology and coefficient interfaces."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC. For $q\ge2$, $K_q$ is simply connected, $\widetilde H^j(K_q;\mathbb F_2)=0$ for $j<q$, and $H^q(K_q;\mathbb F_2)=\mathbb F_2\iota_q$. The actual contractible mapping-path fibration has strict loop fiber $F=\Omega K_q$. There is a marked weak equivalence $h:K_{q-1}\to F$ inducing an isomorphism of mod-two cohomology rings $h^*:H^*(F;\mathbb F_2)\xrightarrow{\cong}H^*(K_{q-1};\mathbb F_2)$. Its natural multiplicative cohomological Serre spectral sequence has constant fiber system. No claim that $F$ has CW homotopy type or that $h$ is a homotopy equivalence is needed. In particular its abutment vanishes in positive degrees.

## Facts & Assumptions

**Given:** AC; an integer $q\ge2$; a based CW model $K_q=K(\mathbb F_2,q)$ with its marked fundamental class $\iota_q$; the actual mapping-path fibration of the marked inclusion $*\to K_q$ with contractible total space and strict loop fiber $F=\Omega K_q$; and a based CW model $K_{q-1}=K(\mathbb F_2,q-1)$.

[F1] The marked mapping-path factorization of a based inclusion has contractible total space, strict fiber the loop space, and the fibration long exact sequence is exact ([[thm-mapping-path-factorization]], [[thm-long-exact-sequence-of-homotopy-groups-of-a-fibration]]). The absolute Hurewicz theorem computes the first nonzero integral homology of a simply connected space ([[thm-absolute-hurewicz-theorem]]), and a nonempty contractible space has the homology of a point ([[cor-contractible-nonempty-spaces-have-the-homology-of-a-point]]).

[F2] Every connected based space has a CW approximation with a prescribed one-point subcomplex, and relative CW inclusions are cofibrations with the homotopy extension property ([[thm-cw-approximation-of-an-arbitrary-space]], [[prop-relative-cw-inclusions-are-cofibrations]]). Marked CW models of the same group are homotopy equivalent by maps inducing the prescribed marking, up to basepoint transport along an explicit path ([[thm-existence-and-homotopy-uniqueness-of-eilenberg-maclane-spaces]], [[prop-higher-homotopy-basepoint-transport-and-moving-homotopies]]).

[F3] A weak homotopy equivalence induces an isomorphism in integral singular homology without choice of CW type for the target ([[lem-weak-homotopy-equivalences-induce-integral-homology-isomorphisms-without-choice]]), and homotopic maps induce equal cohomology maps ([[thm-homotopic-maps-induce-equal-maps-in-singular-cohomology]]).

[F4] The universal coefficient theorem computes homology and cohomology from the other side over a PID ([[thm-universal-coefficient-theorem-for-homology-over-a-pid]], [[thm-topological-universal-coefficient-short-exact-sequence-for-cohomology]]), cohomology over a field is dual to homology over that field ([[cor-cohomology-over-a-field-is-dual-to-homology-over-that-field]]), and the fundamental class is the identity class of the representability bijection ([[thm-eilenberg-maclane-spaces-represent-singular-cohomology]]).

[F5] Pullback is a unital ring map for the cup product ([[prop-cup-product-is-natural-unital-and-associative]]); the cohomological Serre spectral sequence of a fibration is multiplicative and converges to the abutment ([[thm-cohomological-serre-spectral-sequence]], [[thm-multiplicative-structure-on-the-cohomological-serre-spectral-sequence]]).

[F6] AC chooses the CW model $L$, its marked vertex, the homotopy equivalence $v$, and the path used for basepoint transport ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 The homotopy groups in the Eilenberg–Mac Lane definition give $(q-1)$-connectivity. Hurewicz gives $H_j(K_q;\mathbb Z)=0$ for $0<j<q$ and $H_q(K_q;\mathbb Z)=\mathbb F_2$. The cohomological UCT then gives the claimed mod-two groups: in degree $q$ its Hom term is $\operatorname{Hom}(\mathbb F_2,\mathbb F_2)=\mathbb F_2$, its Ext term vanishes, and at degree one the possible $H_0$ Ext term also vanishes because $H_0=\mathbb Z$ is free. The normalized fundamental class is the identity evaluation class in the representability theorem. Apply the direct published mapping-path factorization to the marked inclusion $*\to K_q$. Its actual path-space total contracts by the supplier's explicit path reparametrization, and its strict fiber is $F=\Omega K_q$. The fibration long exact sequence shows $F$ is path connected and its only nonzero positive homotopy group is $\mathbb Z/2$ in degree $q-1$, marked by the connecting isomorphism. Apply the published CW approximation theorem to $F$, extending its marked basepoint as a one-point initial subcomplex. This gives a connected based CW complex $L$ and a based weak equivalence $\gamma:L\to F$. Transport the connecting marking to $L$; it is a marked CW $K(\mathbb Z/2,q-1)$. The published marked uniqueness theorem supplies a homotopy equivalence $v:K_{q-1}\to L$ inducing that marking. If its marking uses basepoint transport, choose the corresponding path from $v$ of the marked point to the marked vertex of $L$, and use the published CW-point cofibration homotopy-extension property to homotope $v$ to a based map. The published moving-basepoint transport formula preserves the transported marking. (Choose the marked point of the CW source as a vertex.) Set $h=\gamma v$. It is a marked weak equivalence, and the published weak-equivalence homology lemma makes $h_*$ an isomorphism in integral homology in every degree. Naturality of coefficient UCT then makes $h_*$ an isomorphism in mod-two homology. Natural field evaluation duality makes $h^*$ an isomorphism in mod-two cohomology, and cup-product naturality makes it a unital graded-ring isomorphism. This chain of actual maps identifies the strict fiber's cohomology ring and fundamental class without an external CW-type-of-fibers theorem. The published multiplicative Serre theorem applies directly to the actual mapping-path fibration over the simply connected CW base; monodromy is trivial, and the just-proved ring isomorphism computes its strict fiber cohomology. Contractibility computes the positive-degree abutment as zero. [given, F1, F2, F3, F4, F5, F6]

2.1 **Important caveat.** This lemma does not assert that every fiber class is transgressive or that taking its square commutes with a spectral-sequence differential in the manner required for the next induction. Those are additional claims, not consequences of ordinary Hurewicz or of spectral-sequence convergence alone. [step 1.1] ∎
