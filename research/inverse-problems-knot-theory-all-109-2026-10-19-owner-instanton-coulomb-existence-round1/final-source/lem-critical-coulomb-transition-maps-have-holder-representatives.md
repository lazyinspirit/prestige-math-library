---
id: lem-critical-coulomb-transition-maps-have-holder-representatives
kind: lemma
title: "Critical Coulomb transition maps have compatible Holder representatives"
status: draft
origin: session
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - lem-small-critical-drift-poisson-gradient-inverse
  - thm-absolute-continuity-of-the-integral
  - thm-holder-inequality-for-integrals
  - thm-meyers-serrin-density-on-an-arbitrary-open-set
  - lem-weak-leibniz-rule-with-a-smooth-factor
  - lem-smooth-bump-between-concentric-euclidean-balls
  - thm-higher-order-sobolev-embedding
  - thm-extension-theorem-for-bounded-smooth-domains
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Swarnendu Sil, Topology of weak G-bundles via Coulomb gauges in critical dimensions, Lemmas 11–12 and Theorem 16, pp.9–13"
      url: "https://arxiv.org/pdf/1909.07308"
---

## Statement

Assume full AC. Let $\Omega\subset\mathbb R^4$ be open. Let $a,b\in L^4_{\mathrm{loc}}(\Omega;\mathfrak{su}(2)\otimes\mathbb R^4)$ satisfy $\sum_i\partial_i a_i=\sum_i\partial_i b_i=0$ distributionally. Suppose $h\in W^{1,2}_{\mathrm{loc}}(\Omega;\mathbb C^{2\times2})$ takes values in $SU(2)$ almost everywhere and satisfies the transition equation
$$\partial_i h=hb_i-a_i h\qquad(i=1,\ldots,4)$$
distributionally. Then $h\in W^{2,q}_{\mathrm{loc}}(\Omega)$ for every $2<q<4$ and has a unique continuous representative $h^*:\Omega\to SU(2)$, locally $C^{0,\alpha}$ for every $0<\alpha<1$.

For a finite open cover with given Coulomb forms $a_i$ and transition classes $h_{ij}$ satisfying these hypotheses on overlaps, any almost-everywhere identities $h_{ii}=1$, $h_{ji}=h_{ij}^{-1}$ and $h_{ij}h_{jk}=h_{ik}$ hold everywhere for the continuous representatives. Thus they form a continuous transition cocycle on the same open overlaps. Likewise any given almost-everywhere finite equivariance identities $h(\gamma x)=\rho(\gamma)^{-1}h(x)\rho(\gamma)$, for $\Gamma\le O(4)$ preserving $\Omega$ and a representation $\rho:\Gamma\to SU(2)$, hold pointwise for $h^*$.

The regularity assertions are interior assertions on smaller balls compactly contained in $\Omega$. No condition or regularity at $\partial\Omega$, no construction of a Coulomb gauge from curvature, and no existence of equivariant gauges is assumed or concluded.

## Statement references

[[lem-small-critical-drift-poisson-gradient-inverse|Small-critical-drift inverse]]

[Sil, *Topology of weak G-bundles via Coulomb gauges in critical dimensions*, Theorem 16](https://arxiv.org/pdf/1909.07308)

## Facts & Assumptions

[F1] For each $2<q<4$ the proved inverse [[lem-small-critical-drift-poisson-gradient-inverse]] has a threshold $\delta(8,q)>0$ for a real eight-component matrix-valued function: a compactly supported weak solution with $L^4$ gradient of $-\Delta u=f+B\nabla u$, where $\|B\|_4\le\delta$ and $f\in L^2_c\cap L^q_c$, belongs to $W^{2,q}_{\mathrm{loc}}$.

[F2] The integral of an $L^1$ function is absolutely continuous with respect to the measure of sets. Holder controls products and the finite-volume changes of exponent ([[thm-absolute-continuity-of-the-integral]], [[thm-holder-inequality-for-integrals]]).

[F3] Finite-exponent Sobolev classes have smooth local approximations; multiplication by a smooth compactly supported cutoff has the weak Leibniz rule. Between two concentric balls one can choose such a cutoff equal to one on the smaller ball ([[thm-meyers-serrin-density-on-an-arbitrary-open-set]], [[lem-weak-leibniz-rule-with-a-smooth-factor]], [[lem-smooth-bump-between-concentric-euclidean-balls]]).

[F4] Bounded smooth balls are $W^{2,q}$-extension domains. On such a ball, $W^{2,q}$ in four dimensions has a $C^{0,\alpha}$ representative whenever $2<q<4$ and $0<\alpha<2-4/q$ ([[thm-extension-theorem-for-bounded-smooth-domains]], [[thm-higher-order-sobolev-embedding]]).

[F5] Full AC and its Countable Choice consequence are inherited by [F1], [F3] and [F4] ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]).

## Proof

**Given:** Full AC and the open set, forms and transition class of the statement; fix $2<q<4$.

1.1 **The first derivative already has critical integrability.** An $SU(2)$ matrix is unitary, hence has fixed Frobenius norm $\sqrt2$. Matrix multiplication obeys $|XY|\le|X||Y|$. The transition equation therefore gives $|\nabla h|\le\sqrt2(|a|+|b|)$ almost everywhere, with the Euclidean coefficient norms. Thus $h\in W^{1,4}_{\mathrm{loc}}$, as well as being locally bounded. [F2, given, algebra]

2.1 **The drift equation is valid for weak Coulomb forms.** The distributional identity $\sum_i\partial_i b_i=0$ extends to compactly supported $W^{1,4/3}$ matrix tests by Holder and smooth approximation [F2]–[F3]. In particular one may test with products of a smooth test and an entry of $h$, since $h\in W^{1,4}_{\mathrm{loc}}$ and is bounded. Expanding the derivative of this product gives $\sum_i\partial_i(hb_i)=\sum_i(\partial_i h)b_i$ distributionally; applying the same argument to $a$ gives $\sum_i\partial_i(a_i h)=\sum_i a_i\partial_i h$. These expansions can also be obtained by approximating $h$ in $W^{1,4}$ on the compact test support, with a fixed cutoff, and taking limits of all pairings by Holder. Differentiating the transition equation now gives $-\Delta h=\sum_i(a_i\partial_i h-(\partial_i h)b_i)=B\nabla h$, where $B(x)(v)=\sum_i(a_i(x)v_i-v_i b_i(x))$. Viewing complex $2\times2$ matrices as $\mathbb R^8$, Cauchy–Schwarz and the matrix product bound give $|B(x)|_{\mathrm{op}}\le|a(x)|+|b(x)|$. [F2, F3, step 1.1, algebra]

3.1 **Localization makes the drift small.** For each $x\in\Omega$, choose a ball $B_R(x)$ compactly contained in $\Omega$. Absolute continuity [F2] applied to $(|a|+|b|)^4$ on this ball gives $0<r<R/2$ so small that $\|B\|_{L^4(B_{2r}(x))}\le\delta(8,q)$. Choose $\chi\in C_c^\infty(B_{2r}(x))$ equal to one on a neighbourhood of $\overline B_r(x)$ by [F3]. Extend $u=\chi h$ by zero to $\mathbb R^4$; it is compactly supported and in $W^{1,4}$, hence in $W^{1,2}$ with $L^4$ gradient. Extend $B|_{B_{2r}(x)}$ by zero as $\widetilde B$. The weak Leibniz rule and step 2.1 give $-\Delta u=\widetilde B\nabla u+f$, where inside $B_{2r}(x)$ one sets $f=-B(h\,d\chi)-2\sum_i(\partial_i\chi)(\partial_i h)-(\Delta\chi)h$ and outside sets $f=0$. All terms are supported in a compact subset of this ball and belong to $L^4$, by boundedness of $h$, local $L^4$ integrability of $B,\nabla h$, and smoothness of the cutoff. Therefore $f\in L^2_c\cap L^q_c$ by Holder. [F1, F2, F3, step 1.1, step 2.1, choose, construct, algebra]

4.1 **Application of the constructed inverse.** The coefficient $\widetilde B$ is compactly supported with $L^4$ norm at most $\delta(8,q)$, and step 3.1 verifies every hypothesis of [F1]. It follows that $u\in W^{2,q}_{\mathrm{loc}}(\mathbb R^4)$; since $u=h$ near $\overline B_r(x)$, the same holds for $h$ near $x$. Repeating at every $x$ proves $h\in W^{2,q}_{\mathrm{loc}}(\Omega)$: every compact subset is covered by finitely many such smaller balls, and integrals of the weak derivatives over it are bounded by the sum over that finite cover. The exponent $q$ was arbitrary in $(2,4)$. [F1, step 3.1, algebra]

5.1 **Representatives and the group constraint.** For any $0<\alpha<1$, choose $q\in(2,4)$ with $\alpha<2-4/q$. On each smaller ball step 4.1 and [F4] give a $C^{0,\alpha}$ representative. Two such continuous representatives agree everywhere on their open overlap: their difference vanishes almost everywhere, whereas a nonzero value of a continuous difference persists on an open ball of positive Lebesgue measure. Thus these local representatives define a unique continuous $h^*$ on $\Omega$, locally $C^{0,\alpha}$ for every $\alpha<1$. Since $SU(2)$ is closed in the matrix space (it is given by $H^*H=1$ and $\det H=1$), a continuous representative equal to an $SU(2)$-valued class almost everywhere takes its values in $SU(2)$ everywhere, by the same positive-measure argument. [F4, step 4.1, choose, algebra]

6.1 **Cocycle and equivariance patching.** Matrix multiplication and inversion on $SU(2)$ are continuous. On any open triple overlap, $h^*_{ij}h^*_{jk}-h^*_{ik}$ is continuous and zero almost everywhere, so the argument of step 5.1 makes it zero everywhere. The identities for $h_{ii}$ and $h_{ji}$ follow in the same way, giving the asserted continuous transition cocycle. Orthogonal changes of variables preserve Lebesgue null sets. Consequently $h^*(\gamma x)$ and $\rho(\gamma)^{-1}h^*(x)\rho(\gamma)$ are continuous representatives of the two almost-everywhere equal classes in any given equivariance identity; uniqueness makes them equal at every $x$. This applies to each element of the given finite group. [step 5.1, given, algebra]

7.1 **Conclusion and boundaries of use.** Steps 4.1–6.1 prove all regularity, cocycle and equivariance assertions. Every cutoff was supported strictly inside $\Omega$; no trace or boundary condition was used. The input transition equation and the input Coulomb forms were assumed, and the proof constructs compatible continuous representatives of those transitions, with no assertion that gauges producing those forms exist. Full AC is used through the explicitly identified suppliers [F1], [F3]–[F5]. [F1, F3, F4, F5, step 4.1, step 5.1, step 6.1] ∎

## Source notes

The full proof of Sil's Lemmas 11–12 and Theorem 16, pp.9–13, was read. Its critical-drift equation for transitions is reproduced above with the convention $dh=hb-ah$. The drift inverse is supplied by the preceding proved local lemma, whose proof does not import unproved Neumann regularity. This provides an interior patching prerequisite once local Coulomb gauges and transition classes have actually been constructed; the small-curvature local-gauge existence theorem, boundary estimates and singular equivariant gauge construction remain separate obligations.
