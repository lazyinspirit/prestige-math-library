---
id: "cex-an-embedded-sphere-with-nontrivial-normal-bundle-is-not-valid-framed-surgery-data"
kind: "counterexample"
title: "An embedded sphere with nontrivial normal bundle is not valid framed surgery data"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 7
deps:
  - cor-diagonal-self-intersection-is-the-euler-number-of-tm
  - cor-nowhere-zero-section-forces-the-euler-class-to-vanish
  - def-euler-class-by-zero-section-pullback-of-the-thom-class
  - def-framed-embedded-surgery-sphere
  - def-self-intersection-number-of-an-oriented-submanifold
  - lem-framing-obstruction-lives-in-the-normal-bundle-of-the-surgery-sphere
  - lem-normal-bundle-of-the-diagonal-is-canonically-tm
  - lem-normal-push-off-zeros-are-self-intersection-points
  - thm-self-intersection-is-the-euler-number-of-the-normal-bundle
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: "identify the normal bundle of the diagonal and contrast it with the trivial-normal-bundle case"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  precheck: "pass"
sources:
  references:
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, 2002; electronic copy)"
      url: "https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro"
      locator: "Chapter 10 §10.1, Proposition 10.5, printed p. 196 (killable iff representable by a framed embedding) and Chapter 7 §7.2, Proposition 7.25, printed p. 137 (the algebraic self-intersection of an embedding is the Euler number of its normal bundle)"
    - title: "Wolfgang Lück, A Basic Introduction to Surgery Theory (lecture notes, Münster, 27 October 2004)"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "Chapter 3 §3.4.1, printed p. 73 (the existence of the extension of the embedding is equivalent to triviality of the normal bundle of the embedded sphere, which need not hold a priori)"
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156, Cambridge University Press 2016)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
      locator: "Chapter 7 §7.1, printed p. 197 (the normal bundle of the embedded sphere must be trivial to extend the embedding to S^{r-1}×D^{m-r+1})"
---

## Statement refuted

**Refuted claim:** every embedded sphere in a closed manifold is eligible as
surgery data for this page.

**Counterexample.** Assume AC ([[def-axiom-of-choice]]), as required by the Euler-class suppliers. Let $M=S^2\times S^2$ and let $\Delta\subseteq M$ be the
diagonal $S^2$. The normal bundle of $\Delta$ is canonically isomorphic to
$TS^2$, hence nontrivial: its Euler number is $2$, as computed in [F6], and the self-intersection of the diagonal satisfies
$\Delta\cdot\Delta=\langle e(TS^2),[S^2]\rangle$ for the product orientation, while
a sphere with trivial normal bundle has self-intersection
$\langle e(\nu),[S^2]\rangle=0$. Therefore $\Delta$ admits no framing of its
normal bundle, is not the underlying sphere of any framed embedded surgery
sphere, and the $2$-surgery of this page cannot be performed along it, although
$\Delta$ is a perfectly good embedded $2$-sphere in a closed $4$-manifold. The
example exhibits exactly the obstruction isolated by the framing lemma:
embeddedness alone is not enough; the normal bundle must be trivial.

## Facts & Assumptions

**Given:** AC and the manifold $M=S^2\times S^2$ with the product orientation, the diagonal $\Delta=\{(x,x):x\in S^2\}$, and the framing lemma of this page.

[F1] [[lem-normal-bundle-of-the-diagonal-is-canonically-tm]]: for a smooth boundaryless manifold $M$, the difference map $T(M\times M)|_{\Delta_M}\to TM$, $(v,w)\mapsto w-v$ has kernel $T\Delta_M$ and induces a canonical isomorphism of smooth vector bundles $\nu_{\Delta_M}\to TM$; under the stated orientation conventions it is orientation-preserving.

[F2] [[cor-diagonal-self-intersection-is-the-euler-number-of-tm]]: for a closed oriented smooth $n$-manifold $M$ with the product orientation on $M\times M$, the diagonal is a closed oriented embedded $n$-submanifold with $2\dim\Delta_M=\dim(M\times M)$ and $\Delta_M\cdot\Delta_M=\langle e(TM),[M]\rangle$, where $e(TM)$ is the Euler class and the self-intersection number is that of [[def-self-intersection-number-of-an-oriented-submanifold]].

[F3] [[thm-self-intersection-is-the-euler-number-of-the-normal-bundle]]: for a closed oriented embedded submanifold $A$ with $2\dim A=\dim M$, the self-intersection number is well defined and satisfies $A\cdot A=\langle e(\nu_A),[A]\rangle$; the value is independent of the tubular embedding and of the transverse push-off. The Euler class here is that of [[def-euler-class-by-zero-section-pullback-of-the-thom-class]].

[F4] [[cor-nowhere-zero-section-forces-the-euler-class-to-vanish]]: every trivial bundle $\varepsilon_B^n$ of positive rank $n\ge1$, with its standard product orientation, has $e(\varepsilon_B^n)=0$.

[F5] [[lem-framing-obstruction-lives-in-the-normal-bundle-of-the-surgery-sphere]]: an embedded $p$-sphere $S\subseteq\operatorname{int}M$ occurs as the underlying sphere of a framed embedded surgery sphere if and only if its normal bundle is trivial.

[F6] The tangent field $X(p)=e_3-zp$ on $S^2$ has zeros only at the poles. In the projection charts $(x,y)\mapsto(x,y,\pm\sqrt{1-x^2-y^2})$ its components are $(-zx,-zy)$, whose derivatives are $-I_2$ and $I_2$ at the two poles, both with determinant $+1$. The zero signs above and the Euler-number formula for a rank-two bundle on a closed oriented surface in [[thm-self-intersection-is-the-euler-number-of-the-normal-bundle]] give $\langle e(TS^2),[S^2]\rangle=2$. A nowhere-zero section would force this Euler class to vanish, contradicting that evaluation; hence $TS^2$ has no such section and is not trivial ([[lem-normal-push-off-zeros-are-self-intersection-points]], [[cor-nowhere-zero-section-forces-the-euler-class-to-vanish]]).

[F7] [[def-framed-embedded-surgery-sphere]]: a framed embedded surgery sphere is an embedding $S^p\times D^q\hookrightarrow M$ whose restriction to the disk factor exhibits a trivialization of the normal bundle of its underlying sphere.

## Counterexample

**Proof technique:** direct identification of the normal bundle, contrasted with the trivial-normal-bundle case.

1.1 The diagonal $\Delta\subseteq S^2\times S^2$ is a closed embedded $2$-sphere with $2\dim\Delta=4=\dim(S^2\times S^2)$, so it has half the ambient dimension and both $\Delta\cdot\Delta$ and the normal-bundle statements apply to it. [F2, given]

2.1 By [F1] the normal bundle of $\Delta$ is canonically isomorphic to $TS^2$. By [F6] the tangent bundle $TS^2$ has no nowhere-zero global section and is therefore not trivial, so $\nu_\Delta$ is a nontrivial rank-two bundle over $\Delta\cong S^2$. [F1, F6, step 1.1]

3.1 By [F5] the existence of a framing of $\nu_\Delta$, equivalently of an extension of the inclusion $\Delta\hookrightarrow S^2\times S^2$ to an embedding $S^2\times D^2\hookrightarrow S^2\times S^2$, is equivalent to triviality of $\nu_\Delta$. Since $\nu_\Delta$ is nontrivial by step 2.1, no such extension exists: $\Delta$ is not the underlying sphere of any framed embedded surgery sphere, so it is not a valid surgery datum for the construction of this page. [F5, F7, step 2.1]

3.2 The same obstruction has a geometric form. By [F2] applied to the manifold $S^2$ of $S^2\times S^2$, the self-intersection of the diagonal is $\Delta\cdot\Delta=\langle e(TS^2),[S^2]\rangle$, the Euler number of the tangent bundle of the $2$-sphere, and [F1] with [F3] gives the same value as $\langle e(\nu_\Delta),[\Delta]\rangle$. Had $\nu_\Delta$ been trivial, [F3] combined with [F4] would have forced $\Delta\cdot\Delta=0$, so the nontriviality of $\nu_\Delta$ detected in step 2.1 is exactly the obstruction that the self-intersection form measures in the middle dimension. [F1, F2, F3, F4, step 2.1]

4.1 In summary, $\Delta$ is an embedded $2$-sphere in the closed smooth $4$-manifold $S^2\times S^2$ whose normal bundle is nontrivial; embeddedness alone does not make it valid framed surgery data, and the surgery step of this page cannot be applied along it. This refutes the claim that every embedded sphere is eligible surgery data. [F5, step 3.1, step 3.2] ∎
