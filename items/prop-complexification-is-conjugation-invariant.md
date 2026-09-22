---
id: prop-complexification-is-conjugation-invariant
kind: proposition
title: Complexification is conjugation invariant
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: ["def-axiom-of-choice", "def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles", "def-real-and-complex-topological-vector-bundle", "thm-vector-bundles-glued-from-transition-cocycles", "prop-first-chern-class-of-tensor-dual-and-conjugate-lines", "thm-naturality-normalization-and-whitney-sum-for-chern-classes", "thm-complex-splitting-principle-with-integral-injective-pullback", "thm-homotopic-maps-induce-equal-maps-in-singular-cohomology"]
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

Assume AC. Let $B$ be a path-connected paracompact Hausdorff CW complex, let $E\to B$ be a
numerable real vector bundle with complexification
$E_{\mathbb C}=E\otimes_{\mathbb R}\mathbb C$, and let all complex bundles
below be numerable bundles over $B$. Then:

1. $E_{\mathbb C}$ is canonically complex-linearly isomorphic to its
   conjugate $\overline{E_{\mathbb C}}$;
2. for every such complex vector bundle $V\to B$ the conjugate bundle satisfies
   $$c_i(\overline V)=(-1)^ic_i(V)\qquad(i\geq0).$$

## Facts & Assumptions

[A1] The Axiom of Choice is assumed, exactly as inherited from the bundle, splitting and metric suppliers ([[def-axiom-of-choice]]).

[F1] Conjugation, direct sums and pullback are given by their transition matrices ([[def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles]], [[def-real-and-complex-topological-vector-bundle]]). Continuous linear transition cocycles glue vector bundles ([[thm-vector-bundles-glued-from-transition-cocycles]]).

[F2] For a complex line $L$, $c_1(\overline L)=-c_1(L)$, with $\overline L\cong L^*$ when a Hermitian metric is chosen ([[prop-first-chern-class-of-tensor-dual-and-conjugate-lines]]).

[F3] On CW bases Chern classes are natural, normalized on lines and multiplicative over Whitney sums ([[thm-naturality-normalization-and-whitney-sum-for-chern-classes]]). A positive-rank complex bundle has a flag splitting with integral injective pullback and a CW-type total base ([[thm-complex-splitting-principle-with-integral-injective-pullback]]).

[F4] Homotopic maps induce equal cohomology maps, so a homotopy equivalence induces a cohomology isomorphism ([[thm-homotopic-maps-induce-equal-maps-in-singular-cohomology]]).

## Proof

**Proof technique:** direct.

**Given:** AC, a real bundle $E\to B$ and a complex bundle $V\to B$ over a path-connected CW base.

1.1 Complexification is constructed by viewing the real transition matrices of $E$ as complex matrices; the same cocycle and numeration define a complex vector bundle by [F1]. Its fibers identify with $E_b\otimes_{\mathbb R}\mathbb C$. The map $\varphi:E_{\mathbb C}\to\overline{E_{\mathbb C}}$, $v\otimes z\mapsto v\otimes\overline z$, is complex-linear: $\varphi(i(v\otimes z))=\varphi(v\otimes iz)=v\otimes\overline{iz}=-i\,(v\otimes\overline z)$ while in the conjugate structure $i\cdot\varphi(v\otimes z)$ is by definition $-i\,(v\otimes\overline z)$; real balancing makes this tensor formula well defined. In every real bundle chart it is ordinary coordinate conjugation, which commutes with real transition matrices. It and its inverse are continuous by that same local formula, so it is an isomorphism of complex bundles. This is assertion 1. [F1, given]

1.2 For a complex line $L$, conjugating transition functions inverts the first Chern class: $c_1(\overline L)=-c_1(L)$, which identifies the conjugate of each root with its negative. [F2]

2.1 First suppose $V$ has rank $n\geq1$. Let $q:F\to B$ be its flag splitting from [F3], and choose a homotopy equivalence $h:W\to F$ from a path-connected CW complex with a vertex. Write $r=qh$ and $K_j=h^*L_j$, so $r^*V=\bigoplus_jK_j$ and $r^*\overline V=\bigoplus_j\overline{K_j}$ by the transition formulas of [F1]. These are bundles over the actual CW base $W$, where [F3] gives Whitney multiplication. Put $s_j=c_1(K_j)$. Naturality and step 1.2 give $r^*c(V)=\prod_j(1+s_j)$ and $r^*c(\overline V)=\prod_j(1-s_j)$. Every degree-$i$ elementary symmetric monomial has exactly $i$ factors, so $r^*c_i(\overline V)=(-1)^ir^*c_i(V)$. No root transformation is attributed to a metric theorem, and no CW-only Whitney interface is applied on the merely CW-type space $F$. [F1, F3, step 1.2]

3.1 The map $r^*=h^*q^*$ is injective, because $q^*$ is injective by [F3] and $h^*$ is an isomorphism by [F4]. Thus the equality in step 2.1 descends to $c_i(\overline V)=(-1)^ic_i(V)$. If $V$ has rank zero, its conjugate is again zero and [F3] gives $c_0=1$ and all higher classes zero, so the same conclusion holds without a flag construction. [F3, F4, step 2.1]

4.1 Applying assertion 2 to $V=E_{\mathbb C}$ and using the canonical isomorphism of step 1.1 gives $c_i(E_{\mathbb C})=c_i(\overline{E_{\mathbb C}})=(-1)^ic_i(E_{\mathbb C})$, so the odd Chern classes of a complexified real bundle are two-torsion; this consistency is used in the next items. [step 1.1, step 3.1]

5.1 Boundary cases. Rank zero was settled in step 3.1. For $i=0$ both sides are $1$; for a rank-one $V$ the statement is step 1.2. The empty base is excluded by the path-connected hypothesis, and the coefficient ring $\mathbb Z$ is nonzero. The metric is used only to identify $\overline L$ with $L^*$ inside [F2]; no orientation or choice of frames enters. AC is used only through [A1] in the splitting and metric suppliers. [A1, F2, step 1.2, step 3.1] ∎

## Source notes

Miller's Lecture 36 (printed pp. 134-137) uses this conjugation symmetry: the complexification of a real bundle is isomorphic to its conjugate, so the odd Chern classes of a complexified bundle are two-torsion and disappear after inverting two.
