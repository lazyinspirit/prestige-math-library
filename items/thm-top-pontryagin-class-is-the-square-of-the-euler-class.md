---
id: thm-top-pontryagin-class-is-the-square-of-the-euler-class
kind: theorem
title: Top Pontryagin class is the square of the Euler class
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-pontryagin-classes-by-complexification, thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle, lem-complex-orientation-of-underlying-real-bundles, thm-naturality-orientation-sign-and-whitney-product-for-euler-classes, def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles, def-axiom-of-choice]
proof_strategy: direct
axiom_strength: "ZF + AC; inherited from the Euler-class and Chern-class suppliers."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, Proposition 3.15(b)"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Orientation comparison and p_n=e^2, printed pp.94-96"
    - title: "Miller, MIT 18.906 Algebraic Topology II, Lecture 36"
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: "Top Pontryagin class, printed pp.134-137"
verification:
  audited: 2026-09-22
---

## Statement

Assume AC. Let $E\to B$ be a numerable oriented real vector bundle of rank
$2n$ over a nonempty path-connected paracompact Hausdorff CW base, with Euler class
$e(E)\in H^{2n}(B;\mathbb Z)$ in the given orientation. Then
$$p_n(E)=e(E)^2\qquad\text{in }H^{4n}(B;\mathbb Z).$$
In particular the top Pontryagin class is independent of the choice of
orientation of $E$, since in positive rank reversing the orientation negates $e(E)$ and hence
leaves $e(E)^2$ unchanged. In rank zero the orientation is the canonical unit orientation; no reversal is asserted.

## Facts & Assumptions

[A1] The Axiom of Choice is assumed, exactly as inherited from the Chern and Euler suppliers ([[def-axiom-of-choice]]).

[F1] $p_n(E)=(-1)^nc_{2n}(E_{\mathbb C})$ ([[def-pontryagin-classes-by-complexification]]).

[F2] For a numerable complex rank-$m$ bundle $V$ over a path-connected CW complex one has $c_m(V)=e(V_{\mathbb R})$ in the complex orientation ([[thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle]]).

[F3] The complex orientation of $(V_{\mathbb C})_{\mathbb R}$ corresponds under the canonical real isomorphism $V_{\mathbb C}\cong V\oplus V$ to $(-1)^m$ times the product orientation, for a real bundle $V$ of rank $2m$; consequently $e((V_{\mathbb C})_{\mathbb R})=(-1)^me(V)^2$, and Euler classes multiply over ordered direct sums on the general Thom bases and are natural there; reversal negates the integral Euler class only in positive rank, while $e(0_B)=1$ ([[lem-complex-orientation-of-underlying-real-bundles]], [[thm-naturality-orientation-sign-and-whitney-product-for-euler-classes]]).

[F4] The canonical real isomorphism in clause 3 of the complex-orientation lemma is $v\otimes(a+ib)\mapsto(av,bv)$; its inverse is $(x,y)\mapsto x\otimes1+y\otimes i$. The formulas agree with the same real transition matrices in every chart. ([[lem-complex-orientation-of-underlying-real-bundles]]).

## Proof

**Proof technique:** direct.

**Given:** AC and a numerable oriented real rank-$2n$ bundle $E\to B$.

1.1 The complexification $E_{\mathbb C}$ has complex rank $2n$, and its underlying real bundle is $E\oplus E$ by [F4]; by [F3] the complex orientation of $(E_{\mathbb C})_{\mathbb R}$ differs from the product orientation by $(-1)^n$, explicitly, for a positive real frame $(v_1,\ldots,v_{2n})$, changing the interleaved complex-positive frame $(v_1,iv_1,\ldots,v_{2n},iv_{2n})$ to the product frame $(v_1,\ldots,v_{2n},iv_1,\ldots,iv_{2n})$ requires $2n(2n-1)/2=n(2n-1)$ interchanges, whose parity is $n$. Therefore $e((E_{\mathbb C})_{\mathbb R})=(-1)^ne(E\oplus E)=(-1)^ne(E)^2$. [F3, F4]

1.2 By [F2] applied to the complex bundle $E_{\mathbb C}$ of rank $2n$, $c_{2n}(E_{\mathbb C})=e((E_{\mathbb C})_{\mathbb R})$. [F2]

2.1 Substituting step 1.1 into step 1.2 gives $c_{2n}(E_{\mathbb C})=(-1)^ne(E)^2$, and hence by [F1] $p_n(E)=(-1)^nc_{2n}(E_{\mathbb C})=(-1)^n(-1)^ne(E)^2=e(E)^2$. [F1, step 1.1, step 1.2]

3.1 Orientation independence for $n>0$: the orientation-sign law for Euler classes multiplies $e(E)$ by $-1$ when the orientation is reversed, while $E_{\mathbb C}$ and its Chern classes do not depend on the orientation of $E$; hence $p_n$ is unchanged. [F1, F3, step 2.1]

4.1 Boundary cases. For $n=0$ the bundle has rank zero, $p_0=1$ and $e(E)=1$ by the rank-zero Euler convention, so the identity reads $1=1$. For $n=1$ the identity reads $p_1=e^2$ for an oriented plane bundle and the sign computation of step 1.1 has $(-1)^1=-1$, cancelling the defining sign of $p_1$. Nonorientable bundles are outside the statement, since no integral Euler class is defined; the empty base is excluded explicitly. AC is used only through [A1]. [A1, F1, F2, F3, step 1.1, step 2.1] ∎

## Source notes

This is Hatcher's Proposition 3.15(b), printed pp. 94-96, with the orientation bookkeeping made explicit: the complex orientation of $E_{\mathbb C}$ differs from the product orientation of $E\oplus E$ by $(-1)^n$, exactly cancelling the sign in the definition of $p_n$.
