---
id: prop-compact-and-locally-compact-abelian-groups-are-amenable
kind: proposition
title: Compact and locally compact abelian groups are amenable
status: published
origin: pipeline
dependency_level: 7
proof_strategy: direct
deps:
  - def-amenable-locally-compact-group
  - lem-markov-kakutani-fixed-point-theorem-for-abelian-affine-actions
  - lem-a-group-with-the-fixed-point-property-is-amenable
  - def-left-invariant-mean-on-l-infinity-of-a-locally-compact-group
  - cor-existence-of-left-and-right-haar-measures
  - lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets
  - def-left-haar-integral-and-left-haar-measure
  - def-complex-haar-l-infinity-space
  - def-locally-compact-space
  - def-axiom-of-choice
  - def-integrable-real-and-complex-functions-and-their-integrals
  - thm-the-lebesgue-integral-respects-almost-everywhere-equality
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - thm-integral-triangle-inequality
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - def-nonnegative-lebesgue-integral
  - def-integral-of-a-nonnegative-simple-function
  - prop-the-nonnegative-integral-agrees-with-the-simple-integral
  - def-measure-preserving-transformation-and-system
  - thm-integrals-are-invariant-under-measure-preserving-maps
  - thm-continuous-preimages-of-borel-sets-are-borel
axiom_use: Assume AC. Part (1) uses it through left Haar measure existence and then normalizes by the positive finite measure of the compact group; part (2) uses it through Markov–Kakutani and the fixed-point-property-to-amenability lemma. The rescaling, integral and invariance calculations use no further choice.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: "2026-10-08"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press, 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix G.1, Example G.1.5 (compact groups), and Appendix G.2, Theorem G.2.1 (Markov–Kakutani), printed pp. 448–451; the local proof gives the integral mean and follows the fixed-point route"
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press, 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix G.1, Theorem G.1.7, fixed-point property implies amenability, printed pp. 448–450"
---

## Statement

Assume AC. (1) Every compact locally compact Hausdorff group is amenable.
(2) Every locally compact Hausdorff abelian group is amenable. No countability,
metrizability or unimodularity hypothesis is imposed.

## Facts & Assumptions

**Given:** AC, a compact locally compact Hausdorff group $K$ in part (1), and
an LCH abelian group $G$ in part (2).

[A1] AC is assumed in the choice-function form ([[def-axiom-of-choice]]).

[F1] Under AC, a locally compact Hausdorff group has a left Haar measure $\nu$
([[cor-existence-of-left-and-right-haar-measures]],
[[def-left-haar-integral-and-left-haar-measure]]). A compact group $K$ is
open in itself and compact, so its Haar measure satisfies
$0<\nu(K)<\infty$ ([[lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets]]).
The rescaled measure $\mu(E):=\nu(E)/\nu(K)$ is again left Haar and has
$\mu(K)=1$.

[F2] Complex $L^\infty$ consists of Borel almost-everywhere classes with the
essential-supremum norm; integrability means finiteness of the integral of the
modulus, and integrals of integrable functions respect almost-everywhere
equality ([[def-complex-haar-l-infinity-space]],
[[def-integrable-real-and-complex-functions-and-their-integrals]],
[[thm-the-lebesgue-integral-respects-almost-everywhere-equality]]).

[F3] The complex integral is linear and satisfies the integral triangle
inequality; the nonnegative integral is monotone and respects nonnegative
scalars, with the integral of an indicator equal to the measure of its set
([[thm-linearity-of-the-lebesgue-integral-on-l-one]],
[[thm-integral-triangle-inequality]],
[[prop-order-and-scalar-rules-for-the-nonnegative-integral]],
[[def-nonnegative-lebesgue-integral]],
[[def-integral-of-a-nonnegative-simple-function]],
[[prop-the-nonnegative-integral-agrees-with-the-simple-integral]]).

[F4] Left translations are Borel measure-preserving maps for left Haar measure,
and integrals are invariant under measure-preserving maps
([[def-left-haar-integral-and-left-haar-measure]],
[[thm-continuous-preimages-of-borel-sets-are-borel]],
[[def-measure-preserving-transformation-and-system]],
[[thm-integrals-are-invariant-under-measure-preserving-maps]]).

[F5] A mean on complex $L^\infty(G)$ is positive, complex-linear and unital;
left invariance means $m(L_g\varphi)=m(\varphi)$ for all $g$ and $\varphi$
([[def-left-invariant-mean-on-l-infinity-of-a-locally-compact-group]]).

[F6] Amenability means existence of such a left-invariant mean
([[def-amenable-locally-compact-group]]).

[F7] Under AC, every continuous affine action of an abelian topological group
on a nonempty compact convex subset of a Hausdorff locally convex space has a
fixed point ([[lem-markov-kakutani-fixed-point-theorem-for-abelian-affine-actions]]).

[F8] Under AC, the fixed-point property implies amenability
([[lem-a-group-with-the-fixed-point-property-is-amenable]]).

## Proof

**Proof technique:** direct.

1.1 Let $K$ be compact. By [A1, F1], choose a left Haar measure $\nu$ and set $\mu:=\nu/\nu(K)$; [F1] gives $0<\nu(K)<\infty$, and positive scalar rescaling preserves left invariance and regularity, so $\mu$ is a normalized Haar probability. For $\varphi\in L^\infty(K,\mu;\mathbb C)$ and every $\eta>0$, the definition of essential supremum gives $|\varphi|\le\|\varphi\|_\infty+\eta$ almost everywhere. Since $\mu(K)=1$, monotonicity of the nonnegative integral gives $\int_K|\varphi|\,d\mu\le\|\varphi\|_\infty+\eta<\infty$, so $\varphi$ is integrable by [F2]. Define $m(\varphi):=\int_K\varphi\,d\mu$. Its definition is independent of the representative by [F2]; linearity and positivity follow from [F3], while the simple-function integral gives $m(1_K)=\mu(K)=1$. The triangle inequality gives $|m(\varphi)|\le\|\varphi\|_\infty+\eta$ for every $\eta>0$, hence $|m(\varphi)|\le\|\varphi\|_\infty$. Thus $m$ is a bounded positive unital functional, hence a mean by [F5]. [A1, F1, F2, F3, F5, construct]

1.2 Let $G$ be locally compact Hausdorff and abelian. By [F7], every continuous affine action of $G$ on a nonempty compact convex subset of a Hausdorff locally convex space has a fixed point. Thus $G$ has the fixed-point property required by [F8]. Applying [F8] proves that $G$ is amenable. [A1, F7, F8]

2.1 For $g\in K$, the left translation $T_g(x)=g^{-1}x$ is Borel and measure-preserving by [F4]. It therefore preserves null sets, so composition defines the same $L^\infty$ class independently of the representative. The integral invariance in [F4] gives $m(L_g\varphi)=\int_K\varphi\circ T_g\,d\mu=\int_K\varphi\,d\mu=m(\varphi)$ for every $\varphi\in L^\infty(K)$. Thus the mean from step 1.1 is left-invariant, and $K$ is amenable by [F5, F6]. [F4, F5, F6, step 1.1]

3.1 Step 2.1 proves part (1), and step 1.2 proves part (2), with no countability or unimodularity assumption. [step 1.2, step 2.1] ∎
## Sources

BHV, *Kazhdan's Property (T)*, Appendix G.1, Example G.1.5 and Theorem
G.1.7, and Appendix G.2, Theorem G.2.1, printed pp. 448–451. The local proof
constructs the compact-group mean by integration and uses the local
Markov–Kakutani and fixed-point-property lemmas for the abelian case.
