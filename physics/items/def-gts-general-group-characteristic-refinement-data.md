---
id: def-gts-general-group-characteristic-refinement-data
kind: definition
title: General-group characteristic refinement data
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
dependency_level: 6
axiom_strength: ZF + full AC for the characteristic-class model and ambiguity result
deps:
  - def-gts-cheegersimons-differential-character
  - thm-gts-exact-sequences-for-ordinary-differential-cohomology
  - lem-gts-general-refinement-ambiguity
  - thm-chern-weil-homomorphism-is-independent-of-connection-and-natural
  - thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals
  - def-axiom-of-choice
dependency_roles:
  def-gts-cheegersimons-differential-character: mathematical-premise
  thm-gts-exact-sequences-for-ordinary-differential-cohomology: mathematical-premise
  lem-gts-general-refinement-ambiguity: mathematical-premise
  thm-chern-weil-homomorphism-is-independent-of-connection-and-natural: mathematical-premise
  thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals: mathematical-premise
  def-axiom-of-choice: mathematical-premise
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
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
sources:
  references:
    - title: Ulrich Bunke, Differential Cohomology, arXiv:1208.3961v6
      url: https://arxiv.org/pdf/1208.3961v6
      locator: Section 3.3, Definitions 3.39 and Theorem 3.42, PDF pp. 42–44.
---

## Statement

Assume full AC, fix an integer $k\ge1$, and let $M$ be a finite-dimensional Hausdorff second-countable smooth manifold without boundary. Let $G$ be a finite-dimensional real Lie group with Lie algebra $\mathfrak g$, and choose a classifying space $BG$ with universal principal $G$-bundle $EG\to BG$. A smooth principal $G$-bundle $P\to M$ is a smooth right $G$-action on $P$ for which $P\to M$ is locally equivariantly isomorphic to $U\times G\to U$; a classifying map $f_P:M\to BG$ classifies its underlying bundle, and $c(P):=f_P^*c$ for $c\in H^k(BG;\mathbb Z)$. A principal connection is a $\mathfrak g$-valued one-form $A\in\Omega^1(P;\mathfrak g)$ with $R_g^*A=\operatorname{Ad}_{g^{-1}}A$ and $A(\xi_P)=\xi$ for every $g\in G$, $\xi\in\mathfrak g$, and fundamental vector field $\xi_P$. Its curvature is $F_A=dA+\tfrac12[A\wedge A]$.

For even $k=2m$, choose an $\operatorname{Ad}(G)$-invariant symmetric polynomial $p\in(S^m\mathfrak g^*)^G$ with a fixed real normalization, including all $2\pi i$ factors. Its evaluation $p(F_A,\ldots,F_A)$ is a scalar form on $P$; require it to be basic (horizontal and right-$G$-invariant), and define $\omega\in\Omega^{2m}(M)$ as its unique descended form. For odd $k$, set $\omega=0$. Require $\omega$ to be closed and $[\omega]_{\mathrm{dR}}=c(P)_{\mathbb R}$. A **general-group characteristic refinement datum** additionally specifies a degree-$k$ differential character $\widehat c(P,A)\in\widehat H^k(M;\mathbb Z)$ with $I(\widehat c)=c(P)$ and $R(\widehat c)=\omega$. This is supplied compatible data, not an existence or uniqueness assertion for arbitrary $G$.

If $c$ and $p$ are pulled back from a unitary representation $G\to U(r)$ and its normalized Chern–Weil polynomial, the unitary-group result applies to that pulled-back pair. For fixed compatible $c(P)$ and $\omega$, any two supplied refinements differ by an element of
$$\ker I\cap\ker R\cong H^{k-1}_{\mathrm{dR}}(M;\mathbb R)/\operatorname{im}\bigl(H^{k-1}(M;\mathbb Z)\to H^{k-1}_{\mathrm{dR}}(M;\mathbb R)\bigr).$$
The torsion part of $c(P)$ is invisible to real curvature; any desired flat torsion refinement must be separately specified.

## Statement references

[[def-gts-cheegersimons-differential-character]]

[[thm-gts-exact-sequences-for-ordinary-differential-cohomology]]

[[thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals]]

## Definition

The image $c(P)_{\mathbb R}$ is induced by $\mathbb Z\hookrightarrow\mathbb R$, and $p(F_A,\ldots,F_A)$ means evaluation of the symmetric $m$-linear polynomial on the curvature $m$ times. If $p(F_A,\ldots,F_A)$ fails to be basic, closed, or compatible with $c(P)_{\mathbb R}$, no datum of the stated type has been supplied. Compatibility is an explicit hypothesis; the cited Chern–Weil suppliers cover their own stated classical vector-bundle scope and do not establish arbitrary-$G$ existence. The ambiguity among supplied refinements with fixed $I$ and $R$ is described in [[lem-gts-general-refinement-ambiguity]].

## Remarks

The Chern–Weil compatibility supplier [[thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals]] covers its stated classical characteristic forms, not arbitrary invariant polynomials or arbitrary integral classes. Compatibility is therefore an explicit hypothesis of this interface. No arbitrary-$G$ existence theorem is asserted.
