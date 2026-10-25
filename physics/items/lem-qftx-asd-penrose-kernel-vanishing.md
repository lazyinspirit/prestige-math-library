---
id: lem-qftx-asd-penrose-kernel-vanishing
kind: lemma
title: Conditional Penrose vanishing from positive scalar curvature
status: "published"
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-adhm-zero-fi-asd-correspondence
dependency_level: 10
deps:
  - thm-qftx-coupled-penrose-vanishing
  - thm-qftx-framed-penrose-ward-correspondence-on-s4
  - lem-qftx-local-integrable-dolbeault-frames
  - lem-qftx-round-s4-positive-scalar-kernel-vanishes
  - def-axiom-of-choice
dependency_roles:
  thm-qftx-coupled-penrose-vanishing: mathematical-premise
  thm-qftx-framed-penrose-ward-correspondence-on-s4: mathematical-premise
  lem-qftx-local-integrable-dolbeault-frames: mathematical-premise
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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
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

[F1] For integers $N\ge2$ and $k\ge0$, under full AC and the exact coherent tensor/cohomology projective GAGA comparison on $\mathbb P^3$, the framed Ward correspondence applies to smooth Hermitian rank-$N$ bundles on the unit round $S^4$ with its specified positive stereographic orientation, smooth unitary ASD connection, unitary framing at infinity, and charge $q_N=-(8\pi^2)^{-1}\int\operatorname{tr}_N(F_A\wedge F_A)=-k$. It associates the specified positive-reality holomorphic Ward bundle with unitary infinity-line framing and $c_2=kH^2$. This records the full correspondence for context: neither the conditional argument nor the additional AC-only forward construction below invokes that correspondence theorem. The conditional Statement already supplies its bundle and two injective maps. [[thm-qftx-framed-penrose-ward-correspondence-on-s4]]

[F2] A smooth section solving $(\nabla^*\nabla+R/6)s=0$ on the round $S^4$ vanishes when $R/6>0$. [[lem-qftx-round-s4-positive-scalar-kernel-vanishes]]

[F3] Under full AC, a smooth square-zero Dolbeault operator on a finite-rank smooth complex bundle has local holomorphic frames, defining its unique holomorphic bundle structure. This local analytic result assumes no projective GAGA. [[lem-qftx-local-integrable-dolbeault-frames]]

[A1] Assume full AC for this additional application. The coupled-vanishing interface then says: for any smooth finite-rank Hermitian bundle with a smooth unitary ASD connection on the fixed positively oriented round sphere, and a holomorphic bundle smoothly identified with its twistor pullback whose Dolbeault operator is the vertical ordinary derivative and the connection-horizontal alpha-plane operator, both $H^1(F(-2))$ and $H^1(F^\vee(-2))$ vanish. It includes reducible and flat summands and assumes no GAGA or inverse ADHM normal form. [[thm-qftx-coupled-penrose-vanishing]], [[def-axiom-of-choice]]

[L1] The elementary deduction from the two injective maps in the Statement is proved in steps 1.1–2.1. Under full AC, for Ward bundles with the operator specified in [A1], that supplier gives the two vanishings directly, as checked in steps 1.2–3.1. Its vanishing Statement does not assert existence of the transform maps assumed in the conditional lemma. The coefficient of the coupled conformal scalar operator is $R/6$; the generic positive-kernel lemma is unchanged.

## Proof

**Given:** The Statement hypotheses; only for the additional Ward-bundle application in step 1.2, full AC and the exact supplier hypotheses [A1], with the forward operator constructed directly using [F3].

1.1 Let $\xi\in H^1(Z,\mathcal E(-2))$. By the assumed injective map $\mathcal P_{\mathcal E}$, its image is a smooth section solving the coupled equation in the Statement. Since $R/6>0$, [F2] makes that image zero, and injectivity gives $\xi=0$. Thus $H^1(Z,\mathcal E(-2))=0$. [given, F2, algebra]

1.2 For the additional application assume full AC, and construct the forward holomorphic bundle directly, without invoking [F1]'s full correspondence. On the smooth pullback $\pi^*E$, take the ordinary vertical Dolbeault derivative and the connection derivative along the projected complex alpha-planes in [A1]. In the incidence chart $t=\lambda_2/\lambda_1$, these directions are $\partial_{\bar t}$, $H_1=\partial_{\bar z_1}-t\partial_{z_2}$ and $H_2=\partial_{\bar z_2}+t\partial_{z_1}$. They annihilate the holomorphic coordinates $t$, $\mu_1=z_1-\bar z_2t$, $\mu_2=z_2+\bar z_1t$, and commute. The mixed vertical/horizontal squares vanish because the horizontal coefficients are holomorphic in $t$ and $A$ is pulled back from the base. The horizontal square is $F_A(H_1,H_2)=F_{\bar1\bar2}-t(F_{1\bar1}+F_{2\bar2})+t^2F_{12}=0$: in the specified positive orientation the three coefficients are the self-dual curvature components, so ASD makes them zero. The same calculation in the second projective chart covers $t=\infty$; using the other stereographic base chart covers the infinity fibre. The vertical/alpha-plane prescription is intrinsic to the stated incidence and connection, so its chart expressions agree. Thus it is a global smooth square-zero Dolbeault operator. By [F3] it defines a holomorphic bundle $F$ on $Z$, smoothly equal to $\pi^*E$, with exactly this vertical/horizontal operator. This is the forward Ward bundle by its defining operator, without any inverse Ward or algebraization claim. [given, A1, F3, construct, algebra]


2.1 Apply the same argument to $\xi^\vee\in H^1(Z,\mathcal E^\vee(-2))$ and the assumed injective map $\mathcal P_{\mathcal E^\vee}$; [F2] gives a zero image and injectivity gives $\xi^\vee=0$. Hence $H^1(Z,\mathcal E^\vee(-2))=0$, proving both asserted vanishings conditional on the specified transforms. [given, F2, step 1.1, algebra]

3.1 The sphere, orientation, smooth pullback and holomorphic operator of step 1.2 are precisely those required by [A1]. That analytic coupled-vanishing theorem therefore gives both $H^1(Z,F(-2))=0$ and $H^1(Z,F^\vee(-2))=0$, without an extra injective-map premise or irreducibility assumption. The dual connection is unitary and ASD since its curvature is $-F_A^t$ and Hodge star commutes with transpose; its induced holomorphic operator is the dual vertical/horizontal operator. Hence the dual clause matches as well. This additional conclusion assumes full AC but no projective GAGA. Steps 1.1–2.1 prove the original conditional Statement independently of this construction and without full AC. [given, A1, F3, step 1.2, step 1.1, step 2.1, algebra] ∎
