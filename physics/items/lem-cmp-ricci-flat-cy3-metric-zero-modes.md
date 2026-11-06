---
id: lem-cmp-ricci-flat-cy3-metric-zero-modes
kind: lemma
title: Gauge-fixed infinitesimal Ricci-flat metric modes on a strict Calabi–Yau threefold
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
deps:
  - def-axiom-of-choice
  - lem-cmp-strict-su3-hodge-number-count
  - lem-kahler-commutators-and-laplacian-type-preservation
  - thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms
  - thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  lem-cmp-strict-su3-hodge-number-count: mathematical-premise
  lem-kahler-commutators-and-laplacian-type-preservation: mathematical-premise
  thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms: mathematical-premise
  thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
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
    - title: Paul S. Aspinwall, Compactification, Geometry and Duality, N=2
      url: https://arxiv.org/pdf/hep-th/0001001v1
      locator: 'Section 2.4, geometric zero-mode count refined below by an explicit linear operator argument; no source proof is imported.'
    - title: Jean-Pierre Demailly, Complex Analytic and Differential Geometry
      url: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf
      locator: 'Chapter VI, Kahler operator context; the required curvature and gauge identities are proved locally below.'
dependency_level: 3
---

## Statement

Assume AC. Let $(X,g,J)$ be a smooth connected compact Ricci-flat Kähler threefold with exact $SU(3)$ holonomy, and let $\Omega$ be a specified nonzero parallel holomorphic three-form. All tensors are smooth. On real symmetric two-tensors define
$$(\beta h)_b=-\nabla^ah_{ab}+\tfrac12\nabla_b\operatorname{tr}_g h,\qquad (\Delta_Lh)_{ab}=-\nabla^c\nabla_ch_{ab}-2R_{acbd}h^{cd}.$$
The curvature convention is $[\nabla_a,\nabla_b]V^c=R^c{}_{dab}V^d$. The moduli space here is linear: it is the vector space of solutions of the linearized Ricci equation modulo infinitesimal diffeomorphisms,
$$\mathcal E=\ker(D\operatorname{Ric})/\{\mathcal L_Vg:V\in C^\infty(TX)\}.$$
Each class has a unique representative satisfying $\beta h=0$, and these representatives are exactly $\ker\Delta_L$. There is a real-linear isomorphism
$$\mathcal E\cong\mathcal H^{1,1}(X;\mathbb R)\oplus\mathcal H^{2,1}(X)_{\mathbb R},\qquad \dim_{\mathbb R}\mathcal E=h^{1,1}+2h^{2,1}.$$
Here $\mathcal H^{p,q}$ is the kernel of the Hodge Laplacian on forms of the indicated type, and the subscript $\mathbb R$ means forgetting the complex scalar multiplication. This is an exhaustive infinitesimal kernel statement for the specified existing metric. It asserts neither nonlinear integrability nor existence of Ricci-flat metrics in arbitrary Kähler classes.

## Statement references

[[def-axiom-of-choice]]

[[lem-cmp-strict-su3-hodge-number-count]]

[[lem-kahler-commutators-and-laplacian-type-preservation]]

[[thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms]]

[[thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition]]

## Facts & Assumptions

**Given:** The fixed smooth compact metric, parallel $J,\Omega$, curvature convention and AC in the Statement. Normalize $\Omega$ by a nonzero constant if needed; no new geometric metric is constructed.

[F1] [[lem-cmp-strict-su3-hodge-number-count]] gives $b_1=h^{1,0}=0$ for the specified metric. Its Bochner argument also verifies parallelness of a chosen holomorphic volume form under these hypotheses.

[F2] [[lem-kahler-commutators-and-laplacian-type-preservation]] proves $\Delta_d=2\Delta_{\bar\partial}$ and commutation of $\Delta_d$ with bidegree, $J$, the Lefschetz adjoint $\Lambda$ and Hodge star. [[thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms]] identifies the resulting smooth harmonic spaces with Hodge cohomology.

[F3] [[thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition]] supplies a smooth Green operator for a formally symmetric Laplace-type operator on the compact manifold, inverse on the orthogonal complement of its smooth kernel. [[def-axiom-of-choice]] is the choice strength inherited by this supplier.

## Proof

1.1 Vary the connection using $2\dot\Gamma^c{}_{ab}=\nabla_ah_b{}^c+\nabla_bh_a{}^c-\nabla^ch_{ab}$ and $\dot R_{ab}=\nabla_c\dot\Gamma^c{}_{ab}-\nabla_b\dot\Gamma^c{}_{ac}$. Commuting the two covariant derivatives, and using $\operatorname{Ric}=0$, gives
$$2D\operatorname{Ric}(h)=\Delta_Lh-\mathcal L_{(\beta h)^\sharp}g.$$
For example the flat derivative part is $-\nabla^c\nabla_ch_{ab}+\nabla_a\nabla^ch_{cb}+\nabla_b\nabla^ch_{ca}-\nabla_a\nabla_b\operatorname{tr}h$; the commutators supply the displayed $-2R_{acbd}h^{cd}$. Diffeomorphism covariance gives $D\operatorname{Ric}(\mathcal L_Vg)=\mathcal L_V\operatorname{Ric}=0$, and direct differentiation of $\mathcal L_Vg=2\nabla_{(a}V_{b)}$ gives $\beta(\mathcal L_Vg)=\nabla^*\nabla V^\flat$ at Ricci flatness. The one-form identity $\Delta_dV^\flat=\nabla^*\nabla V^\flat+\operatorname{Ric}(V)^\flat$ follows by expanding $dd^*+d^*d$ and commuting derivatives. Its kernel is zero by [F1] and [F2]. This nonnegative symmetric operator has scalar positive symbol, so [F3] solves $\Delta_dV^\flat=-\beta h$ uniquely and smoothly. Hence every linearized Ricci-flat class has a unique Bianchi representative. [given, F1, F2, F3, algebra]

2.1 The parallel complex structure splits $h=h^++h^-$, where $h^+(Ju,Jv)=h^+(u,v)$ and $h^-(Ju,Jv)=-h^-(u,v)$. Kähler curvature preserves this splitting, so $\Delta_L$ does as well. The Hermitian summand corresponds to the real $(1,1)$-form $\eta(u,v)=h^+(Ju,v)$. Expanding the exterior Laplacian on a two-form gives
$$(\Delta_d\eta)_{ab}=-\nabla^c\nabla_c\eta_{ab}+\operatorname{Ric}_a{}^c\eta_{cb}+\operatorname{Ric}_b{}^c\eta_{ac}-2R_{acbd}\eta^{cd}.$$
One obtains the two Ricci contractions and the two-form curvature term by expanding $d\eta=3\nabla_{[a}\eta_{bc]}$ and $d^*\eta=-\nabla^a\eta_{ab}$ and using the covector commutator $[\nabla_a,\nabla_b]\eta_{cd}=-R^e{}_{cab}\eta_{ed}-R^e{}_{dab}\eta_{ce}$. Since $J$ is parallel and Kähler curvature commutes with it, this formula at Ricci flatness identifies $\Delta_d\eta$ with the same $J$ transform of $\Delta_Lh^+$. Thus its kernels are in bijection. A harmonic $(1,1)$-form is closed; in unitary coordinates closure says $\nabla_ih_{j\bar k}=\nabla_jh_{i\bar k}$. Consequently $-\nabla^ah_{ai}=-\partial_i\operatorname{tr}_{\mathbb C}h$ and $\operatorname{tr}_{\mathbb R}h=2\operatorname{tr}_{\mathbb C}h$, proving $\beta h^+=0$. [given, F2, step 1.1, algebra]

3.1 For the anti-Hermitian summand its independent complex components are the symmetric $h_{\bar i\bar j}$. Set $\mu^i{}_{\bar j}=g^{i\bar k}h_{\bar k\bar j}$ and $\chi_{ab\bar j}=\Omega_{iab}\mu^i{}_{\bar j}$. This is an isomorphism from these symmetric components to primitive $(2,1)$-forms. Indeed in a unitary frame with $\Omega_{123}=1$, the three components of $\Lambda\chi$ are nonzero constant multiples of $h_{\bar2\bar3}-h_{\bar3\bar2}$ and its cyclic variants; thus primitivity is exactly the symmetry condition. The map is parallel. To verify its Laplacian identity explicitly, expansion of $\bar\partial\bar\partial^*+\bar\partial^*\bar\partial$ on a tangent-valued $(0,1)$-form gives
$$(\Delta_{\bar\partial}\mu)^i{}_{\bar j}=-g^{a\bar b}\nabla_a\nabla_{\bar b}\mu^i{}_{\bar j}+g^{a\bar b}[\nabla_a,\nabla_{\bar j}]\mu^i{}_{\bar b}.$$
Multiplying by two turns the first term into the real rough Laplacian, since its contracted commutator is a Ricci contraction and vanishes. In the second term the covariant $\bar b$-index contribution is another Ricci contraction, while the contravariant $i$-index contributes $2g^{a\bar b}R^i{}_{ka\bar j}\mu^k{}_{\bar b}$. Lowering $i$ gives $-2R_{\bar\ell k\bar j a}h^{ka}$, exactly the curvature term of $\Delta_Lh^-$. Parallelness of $\Omega$ then identifies this with $2\Delta_{\bar\partial}\chi=\Delta_d\chi$ by [F2]. Thus the anti-Hermitian kernel corresponds exactly to harmonic primitive $(2,1)$-forms. Such a harmonic form satisfies $\bar\partial^*\chi=0$, or $g^{a\bar b}\nabla_a\mu^i{}_{\bar b}=0$; symmetry implies $\nabla^ah^-_{a\bar j}=0$. Since $h^-$ is trace free, $\beta h^-=0$. [given, F2, step 2.1, algebra]

4.1 Every harmonic $(2,1)$-form is primitive here: $\Lambda$ commutes with $\Delta_d$ by [F2], so $\Lambda\chi$ is harmonic of type $(1,0)$, and this space is zero by [F1]. Conversely every harmonic real $(1,1)$-form and harmonic complex $(2,1)$-form therefore produce a real symmetric tensor in $\ker\Delta_L$ by steps 2.1 and 3.1. Those steps also prove its Bianchi gauge. Hence $\ker\Delta_L$ consists exactly of these representatives, and step 1.1 identifies it with the quotient in the Statement. Hodge cohomology [F2] gives real dimension $h^{1,1}$ for the real $(1,1)$-harmonic space and $2h^{2,1}$ for the underlying real space of $\mathcal H^{2,1}$. All assertions concern the fixed given metric and its linearized equation. No use of nonlinear Calabi existence, smooth Kuranishi integrability or a dimensional-reduction postulate has entered. [F1, F2, step 1.1, step 2.1, step 3.1, algebra] ∎
