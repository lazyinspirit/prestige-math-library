---
id: prop-complexification-is-conjugation-invariant
kind: proposition
title: Complexification is conjugation invariant
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles, thm-complex-splitting-principle-with-integral-injective-pullback, thm-naturality-normalization-and-whitney-sum-for-chern-classes, prop-first-chern-class-of-tensor-dual-and-conjugate-lines, thm-numerable-vector-bundles-admit-bundle-metrics, def-real-and-complex-topological-vector-bundle, def-axiom-of-choice]
proof_strategy: direct
axiom_strength: "ZF + AC; inherited from the splitting principle and the metric supplier."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Miller, MIT 18.906 Algebraic Topology II, Lecture 36"
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: "Conjugation of complex bundles, printed pp.134-137"
---

## Statement

Assume AC. Let $E\to B$ be a real vector bundle with complexification
$E_{\mathbb C}=E\otimes_{\mathbb R}\mathbb C$. Then:

1. $E_{\mathbb C}$ is canonically complex-linearly isomorphic to its
   conjugate $\overline{E_{\mathbb C}}$;
2. for every complex vector bundle $V\to B$ the conjugate bundle satisfies
   $$c_i(\overline V)=(-1)^ic_i(V)\qquad(i\geq0).$$

## Facts & Assumptions

[A1] The Axiom of Choice is assumed, exactly as inherited from the bundle, splitting and metric suppliers ([[def-axiom-of-choice]]).

[F1] The conjugate $\overline V$ is defined by conjugating transition matrices, and complexification of a real bundle is the tensor product with $\mathbb C$ with the induced complex structure ([[def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles]], [[def-real-and-complex-topological-vector-bundle]]).

[F2] For a complex line $L$, $c_1(\overline L)=-c_1(L)$, with $\overline L\cong L^*$ when a Hermitian metric is chosen ([[prop-first-chern-class-of-tensor-dual-and-conjugate-lines]]).

[F3] Chern classes are natural and multiplicative over Whitney sums, and on a flag split $q^*V=L_1\oplus\cdots\oplus L_n$ one has $q^*c_i(V)=e_i(t_1,\dots,t_n)$, the $i$-th elementary symmetric polynomial in the roots $t_j=c_1(L_j)$ ([[thm-naturality-normalization-and-whitney-sum-for-chern-classes]], [[thm-complex-splitting-principle-with-integral-injective-pullback]]).

[F4] Complex bundles admit Hermitian metrics, and conjugating a transition matrix corresponds to replacing each root by its negative under the splitting ([[thm-numerable-vector-bundles-admit-bundle-metrics]]).

## Proof

**Proof technique:** direct.

**Given:** AC, a real bundle $E\to B$ and a complex bundle $V\to B$ over a path-connected CW base.

1.1 The map $\varphi:E_{\mathbb C}\to\overline{E_{\mathbb C}}$, $v\otimes z\mapsto v\otimes\overline z$, is complex-linear: $\varphi(i(v\otimes z))=\varphi(v\otimes iz)=v\otimes\overline{iz}=-i\,(v\otimes\overline z)$ while in the conjugate structure $i\cdot\varphi(v\otimes z)$ is by definition $-i\,(v\otimes\overline z)$; the map is fiberwise bijective and continuous, so it is an isomorphism of complex bundles. This is assertion 1. [F1, given]

1.2 For a complex line $L$, conjugating transition functions inverts the first Chern class: $c_1(\overline L)=-c_1(L)$, which identifies the conjugate of each root with its negative. [F2]

2.1 Pull back $V$ to a flag bundle: $q^*V=L_1\oplus\cdots\oplus L_n$, so $q^*\overline V=\overline{L_1}\oplus\cdots\oplus\overline{L_n}$ and, by multiplicativity and step 1.2, $q^*c(\overline V)=\prod_j(1-t_j)$ with $t_j=c_1(L_j)$; substituting $(-t_j)$ into the elementary symmetric functions gives $q^*c_i(\overline V)=(-1)^ie_i(t_1,\dots,t_n)=(-1)^iq^*c_i(V)$. [F3, F4, step 1.2]

3.1 Injectivity of $q^*$ on integral cohomology by [F3] (splitting principle) gives $c_i(\overline V)=(-1)^ic_i(V)$ for all $i$, which is assertion 2. [F3, step 2.1]

4.1 Applying assertion 2 to $V=E_{\mathbb C}$ and using the canonical isomorphism of step 1.1 gives $c_i(E_{\mathbb C})=c_i(\overline{E_{\mathbb C}})=(-1)^ic_i(E_{\mathbb C})$, so the odd Chern classes of a complexified real bundle are two-torsion; this consistency is used in the next items. [step 1.1, step 3.1]

5.1 Boundary cases. For $i=0$ both sides are $1$; for a rank-one $V$ the statement is step 1.2. The empty base is excluded by the path-connected hypothesis, and the coefficient ring $\mathbb Z$ is nonzero. The metric is used only to identify $\overline L$ with $L^*$ inside [F2]; no orientation or choice of frames enters. AC is used only through [A1] in the splitting and metric suppliers. [A1, F2, step 3.1] ∎

## Source notes

Miller's Lecture 36 (printed pp. 134-137) uses this conjugation symmetry: the complexification of a real bundle is isomorphic to its conjugate, so the odd Chern classes of a complexified bundle are two-torsion and disappear after inverting two.
