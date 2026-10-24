---
id: lem-qftx-asd-penrose-kernel-vanishing
kind: lemma
title: Conditional Penrose vanishing from positive scalar curvature
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-adhm-zero-fi-asd-correspondence
dependency_level: 10
deps:
  - thm-qftx-coupled-penrose-vanishing
  - thm-qftx-framed-penrose-ward-correspondence-on-s4
  - lem-qftx-round-s4-positive-scalar-kernel-vanishes
  - def-axiom-of-choice
dependency_roles:
  thm-qftx-coupled-penrose-vanishing: mathematical-premise
  thm-qftx-framed-penrose-ward-correspondence-on-s4: mathematical-premise
  lem-qftx-round-s4-positive-scalar-kernel-vanishes: mathematical-premise
  def-axiom-of-choice: mathematical-premise
axiom_base: "The conditional injective-map deduction uses no choice; the additional supplier-based Ward application assumes full AC."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "J. H. Rawnsley, On the Atiyah-Hitchin-Drinfeld-Manin Vanishing Theorem for Cohomology Groups of Instanton Bundles"
      url: https://gdz.sub.uni-goettingen.de/download/pdf/PPN235181684_0241/LOG_0014.pdf
      locator: "Math. Ann.241(1979),43–56; complete article scan previously retrieved and visually read; exact operator calculation55–56 gives D*D+R/6. The new local supplier must reconstruct the proof and convention translation."
    - title: "Simon K. Donaldson, The ADHM construction of Yang-Mills instantons"
      url: https://arxiv.org/pdf/2205.08639
      locator: "§5, printed p. 8: the claimed Penrose transform to the coupled conformally invariant Laplace equation; full transform proof remains a separate local obligation."
verification:
  precheck: pass
---

## Statement

Let $A$ be a smooth framed anti-self-dual unitary connection on the specified round oriented $S^4$, and let $\mathcal E$ be its holomorphic Ward bundle on $Z=\mathbb C\mathbb P^3$. Suppose the following conditional Penrose-transform input is supplied for both $\mathcal E$ and its dual $\mathcal E^\vee$: there are injective linear maps

$$\mathcal P_{\mathcal E}:H^1(Z,\mathcal E(-2))\longrightarrow\{s\in\Gamma(E):(\nabla_A^*\nabla_A+R/6)s=0\},$$

and the analogous map for $\mathcal E^\vee$, where $R>0$ is the scalar curvature of the round metric and the target connection is the induced unitary connection. Then

$$H^1(Z,\mathcal E(-2))=H^1(Z,\mathcal E^\vee(-2))=0.$$

This is a conditional vanishing result; it does not assert or prove the Penrose-transform input.

## Statement references

[[thm-qftx-framed-penrose-ward-correspondence-on-s4]]

[[lem-qftx-round-s4-positive-scalar-kernel-vanishes]]

## Facts & Assumptions

**Given:** The Ward bundle and framed ASD connection, the two injective Penrose maps stated in the Statement, and the positive scalar curvature of the round $S^4$.

[F1] Under full AC and its stated projective GAGA hypothesis, the Ward transform associates a holomorphic bundle on $Z$ to a framed unitary ASD connection on $S^4$. The conditional Statement already supplies that bundle and its two injective maps; their existence is not inferred from this fact. [[thm-qftx-framed-penrose-ward-correspondence-on-s4]]

[F2] A smooth section solving $(\nabla^*\nabla+R/6)s=0$ on the round $S^4$ vanishes when $R/6>0$. [[lem-qftx-round-s4-positive-scalar-kernel-vanishes]]

[A1] Assume full AC for this additional application. The coupled-vanishing interface then says: for any smooth finite-rank Hermitian bundle with a smooth unitary ASD connection on the fixed positively oriented round sphere, and a holomorphic bundle smoothly identified with its twistor pullback whose Dolbeault operator is the vertical ordinary derivative and the connection-horizontal alpha-plane operator, both $H^1(F(-2))$ and $H^1(F^\vee(-2))$ vanish. It includes reducible and flat summands and assumes no GAGA or inverse ADHM normal form. [[thm-qftx-coupled-penrose-vanishing]], [[def-axiom-of-choice]]

[L1] The elementary deduction from the two injective maps in the Statement is proved in steps 1.1–2.1. Under full AC, for Ward bundles with the operator specified in [A1], that supplier gives the two vanishings directly, as checked in step 3.1. Its vanishing Statement does not assert existence of the transform maps assumed in the conditional lemma. The coefficient of the coupled conformal scalar operator is $R/6$; the generic positive-kernel lemma is unchanged.

## Proof

**Given:** The Statement hypotheses; only for the additional Ward-bundle application in step 3.1, full AC and the exact supplier hypotheses [A1], with the Ward operator of [F1].

1.1 Let $\xi\in H^1(Z,\mathcal E(-2))$. By the assumed injective map $\mathcal P_{\mathcal E}$, its image is a smooth section solving the coupled equation in the Statement. Since $R/6>0$, [F2] makes that image zero, and injectivity gives $\xi=0$. Thus $H^1(Z,\mathcal E(-2))=0$. [given, F2, algebra]

2.1 Apply the same argument to $\xi^\vee\in H^1(Z,\mathcal E^\vee(-2))$ and the assumed injective map $\mathcal P_{\mathcal E^\vee}$; [F2] gives a zero image and injectivity gives $\xi^\vee=0$. Hence $H^1(Z,\mathcal E^\vee(-2))=0$, proving both asserted vanishings conditional on the specified transforms. [given, F2, step 1.1, algebra]


3.1 For this additional application assume full AC as required by [A1]. For the Ward bundle of [F1], the underlying smooth bundle is the twistor pullback and its holomorphic operator is the ordinary vertical derivative and the $A$-horizontal alpha-plane operator by the forward Ward construction. The sphere, incidence and orientation are exactly those of [A1]. Thus [A1] applies and gives both vanishings, without an additional injective-map assumption or irreducibility hypothesis. The dual connection remains unitary and ASD, since its curvature is $-F_A^t$ and Hodge star commutes with transpose. Its holomorphic operator is the induced dual, so the dual clause matches. This additional conclusion retains full AC; steps 1.1–2.1 prove the original conditional Statement without it and without invoking Ward existence or existence of transform maps. [given, A1, F1, step 1.1, step 2.1, algebra] ∎
