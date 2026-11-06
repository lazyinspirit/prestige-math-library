---
id: lem-gts-kodaira-spencer-forms-form-dgla
kind: lemma
title: "Kodaira–Spencer forms form a differential graded Lie algebra"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: physics
category: string-theory
axiom_strength: "ZF; no choice principle is used."
deps:
  - def-complex-manifolds-and-holomorphic-vector-bundles
dependency_roles:
  def-complex-manifolds-and-holomorphic-vector-bundles: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Claire Voisin, Hodge Structures and the Topology of Algebraic Varieties, Harvard CMSA revision"
      url: "https://cmsa.fas.harvard.edu/media/Voisin_HSTAVharvardrevision.pdf"
      locator: "§1.1, printed pp. 6–8: type decomposition and Dolbeault context; the tangent-valued bracket is not stated in this passage and is proved locally below."
    - title: "Marco Manetti, Lectures on deformations of complex manifolds, arXiv:math/0507286v1"
      url: "https://arxiv.org/pdf/math/0507286v1"
      locator: "§IV.4, Proposition IV.24, printed pp. 55–56 (PDF pp. 61–62): intrinsic derivations and the tangent-valued bracket; DGLA identities are checked locally."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $X$ be a complex manifold of complex dimension $n$ with complex structure $J$. Write $T_X^{\mathbb C}:=TX\otimes_{\mathbb R}\mathbb C$, with the complex-linear extension $J_{\mathbb C}$ of $J$, and define
$$T_X^{1,0}:=\ker(J_{\mathbb C}-iI),\qquad T_X^{0,1}:=\ker(J_{\mathbb C}+iI).$$
The holomorphic coordinate transitions give $T_X^{1,0}$ its holomorphic tangent-bundle structure. For $0\le p\le n$, define the smooth vector-valued $(0,p)$-forms by
$$A^{0,p}(X,T_X^{1,0}):=\Gamma^\infty\!\left(X,\Lambda^p(T_X^{0,1})^*\otimes_{\mathbb C}T_X^{1,0}\right),\qquad L^p:=A^{0,p}(X,T_X^{1,0}),$$
and set $L^p=0$ outside this range. On scalar complex-valued forms, let $\bar\partial$ be the $(0,1)$-type component of the exterior differential. In a holomorphic frame $\partial_1,\ldots,\partial_n$ of $T_X^{1,0}$, define
$$\bar\partial\!\left(\sum_i\alpha^i\otimes\partial_i\right):=\sum_i(\bar\partial\alpha^i)\otimes\partial_i.$$
This is independent of the holomorphic frame because frame-transition coefficients are holomorphic. In holomorphic coordinates $(z^1,\ldots,z^n)$, write $\partial_a=\partial/\partial z^a$ and define the bracket by
$$[\alpha,\beta]^i=\alpha^a\wedge\partial_a\beta^i-(-1)^{pq}\beta^a\wedge\partial_a\alpha^i,\qquad \alpha\in L^p,\quad\beta\in L^q.$$
Then this bracket is coordinate-independent, has degree $p+q$, is graded antisymmetric and satisfies graded Jacobi; with differential $\bar\partial$, it satisfies
$$\bar\partial[\alpha,\beta]=[\bar\partial\alpha,\beta]+(-1)^p[\alpha,\bar\partial\beta],\qquad\bar\partial^2=0.$$
Thus $(L^\bullet,\bar\partial,[-,-])$ is a cohomological differential graded Lie algebra.

## Statement references

[[def-complex-manifolds-and-holomorphic-vector-bundles]]

[Voisin, §1.1](https://cmsa.fas.harvard.edu/media/Voisin_HSTAVharvardrevision.pdf)

## Facts & Assumptions

**Given:** A complex manifold $X$ with holomorphic tangent bundle $T_X^{1,0}$.

[F1] Holomorphic coordinate changes have holomorphic transition maps and induce the holomorphic tangent-bundle transition maps ([[def-complex-manifolds-and-holomorphic-vector-bundles]]).

## Proof

**Proof technique:** direct.

1.1 For $\alpha\in L^p$, contraction with the $(1,0)$ part of exterior differentiation defines an intrinsic degree-$p$ operator $D_\alpha:A^{0,\bullet}(X)\to A^{0,\bullet+p}(X)$ by $D_\alpha\omega=\alpha^i\wedge\partial_i\omega$. Intrinsicity follows because both the tensor contraction and the $(1,0)$ exterior derivative are coordinate-independent under the holomorphic changes in [F1]. The product rule for $\partial_i$ and moving the degree-$p$ form $\alpha^i$ past a degree-$r$ form gives $D_\alpha(\omega\wedge\eta)=D_\alpha\omega\wedge\eta+(-1)^{pr}\omega\wedge D_\alpha\eta$; hence $D_\alpha$ is a graded derivation. Computing the graded commutator on a function cancels the symmetric second-derivative terms $\partial_a\partial_i f=\partial_i\partial_a f$ and leaves coefficient $\alpha^a\wedge\partial_a\beta^i-(-1)^{pq}\beta^a\wedge\partial_a\alpha^i$. Therefore $[D_\alpha,D_\beta]=D_{[\alpha,\beta]}$ with the stated formula; applying the equality to local coordinate functions shows the coefficient tensor is unique. [F1, given, algebra]

2.1 In any associative graded endomorphism algebra the graded commutator is graded antisymmetric and satisfies graded Jacobi: expanding each nested commutator yields each of the six ordered triple products twice with opposite signs. Commutators of degree-$p$ and degree-$q$ derivations are derivations of degree $p+q$, as follows by expanding both sides of the graded Leibniz rule and cancelling the two mixed terms. These facts transfer through the injective map $\alpha\mapsto D_\alpha$ to the bracket on $L$. Finally, in holomorphic coordinates $\bar\partial\partial_i=\partial_i\bar\partial$ on coefficients, and the graded Leibniz rule gives $[\bar\partial,D_\alpha]=D_{\bar\partial\alpha}$. The graded Jacobi identity for the commutator with $\bar\partial$ now yields $\bar\partial[\alpha,\beta]=[\bar\partial\alpha,\beta]+(-1)^p[\alpha,\bar\partial\beta]$. Since $\bar\partial^2=0$ on forms, all differential graded Lie algebra identities hold. [F1, step 1.1, given, algebra] ∎

## Remarks

The formula fixes the sign convention used in the Maurer–Cartan equation. It establishes the DGLA identities, but does not identify this DGLA's Maurer–Cartan groupoid with the analytic deformation groupoid; that comparison belongs to the Kuranishi argument.
