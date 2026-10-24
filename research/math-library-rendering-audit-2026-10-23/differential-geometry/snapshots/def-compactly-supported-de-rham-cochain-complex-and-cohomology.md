---
id: "def-compactly-supported-de-rham-cochain-complex-and-cohomology"
kind: "definition"
title: "Compactly supported de Rham cohomology"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
proof_strategy: direct
deps: ["def-compactly-supported-differential-form","def-de-rham-cochain-complex","lem-the-de-rham-complex-and-pullback-extend-to-manifolds-with-boundary","def-interior-closure-boundary-top","lem-compactness-of-a-subspace-is-ambient"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Robbin–Salamon, Introduction to Differential Topology
      url: https://zaco.au/lib/math/text/differential-geometry/difftop.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
---

## Definition

Let $M$ be a finite-dimensional Hausdorff second-countable smooth manifold, possibly with boundary. Let $\Omega_c^k(M)$ be the smooth $k$-forms with compact support in $M$, and put it equal to zero for $k<0$ or $k>\dim M$. With the locally extendible boundary convention, exterior differentiation restricts to these spaces and gives the **compactly supported de Rham complex** $(\Omega_c^\bullet(M),d)$. Its cohomology is
$$H_c^k(M)=\frac{\{\omega\in\Omega_c^k(M):d\omega=0\}}{\{d\eta:\eta\in\Omega_c^{k-1}(M)\}}.$$
Thus equality of two closed compactly supported representatives requires a compactly supported primitive for their difference. If $M$ is compact this is the ordinary de Rham complex and cohomology. No orientation or choice axiom is required.

## Facts & Assumptions

[F1] [[def-compactly-supported-differential-form]] defines support as the closure in $M$ of the nonzero locus and includes genuine boundary points; zero has empty support.

[F2] [[def-de-rham-cochain-complex]] gives the ordinary boundaryless complex and degree convention.

[F3] [[lem-the-de-rham-complex-and-pullback-extend-to-manifolds-with-boundary]] supplies the linear local derivative and $d^2=0$, also at a boundary.

[F4] [[def-interior-closure-boundary-top]] gives the smallest-closed-superset property and the open complement of a closure.

[F5] [[lem-compactness-of-a-subspace-is-ambient]] permits testing compact subsets using covers by opens of the ambient space.

## Verification

**Given:** $M$ as stated and compactly supported forms $\omega,\eta$ of the same degree.

1.1 For scalars $a,b$, the nonzero locus of $a\omega+b\eta$ is contained in $\operatorname{supp}\omega\cup\operatorname{supp}\eta$, a closed set by [F4]. Its closure is therefore contained there too. The union is compact: restrict any ambient open cover to its two compact subsets, take a finite subcover for each by [F5], and unite those two finite families. A closed subset $F$ of this compact union is compact as well: adjoin the open set $M\setminus F$ to an ambient cover of $F$, take a finite subcover of the union and discard that added member. By [F5] this is the intrinsic compactness of $F$. Applying this to the closed support of $a\omega+b\eta$ proves that $\Omega_c^k(M)$ is a vector subspace. The empty support includes zero. [F1, F4, F5, given]

2.1 Outside $\operatorname{supp}\omega$ the form is identically zero on the open complement supplied by [F4]. The local coefficient formula in [F3] makes $d\omega$ zero on that same open set, including any boundary-chart points. Thus its nonzero locus lies in the closed set $\operatorname{supp}\omega$, and so does its closure: $$\operatorname{supp}(d\omega)\subseteq\operatorname{supp}\omega.$$ The support on the left is a closed subset of the compact support on the right, hence compact by the cover argument in step 1.1. Therefore $d$ restricts to the stated subspaces. [F1, F3, F4, F5, step 1.1]

3.1 The restricted differential is linear and squares to zero by [F3]. Its image in degree $k$ is consequently a vector subspace of its kernel, so the displayed quotient is defined. Two closed representatives differ by zero in this quotient exactly when their difference equals $d\eta$ for some $\eta\in\Omega_c^{k-1}(M)$; a primitive without compact support does not satisfy this definition. When $M$ is compact, every support is closed in $M$, so step 1.1 makes it compact and $\Omega_c^k(M)=\Omega^k(M)$ in every degree. By [F2] and [F3] the complexes and their quotients then agree. [F1, F2, F3, step 1.1, step 2.1]

4.1 On the empty manifold all spaces are zero. In degree zero the denominator is zero because $\Omega_c^{-1}=0$; in degree one it consists exactly of differentials of compactly supported functions. In dimension zero there are no positive-degree forms. In top degree the outgoing derivative is zero, while the incoming compact-support requirement remains in force. All support statements are intrinsic and independent of coordinates; no orientation, countable family of primitives or partition of unity was used. [F1, F2, F3, step 1.1, step 2.1, step 3.1] ∎
