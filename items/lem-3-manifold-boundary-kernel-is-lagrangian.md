---
id: lem-3-manifold-boundary-kernel-is-lagrangian
kind: lemma
title: "The boundary kernel of a compact oriented 3-manifold is Lagrangian"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: [def-oriented-smooth-cobordism, def-intersection-form-on-the-homology-of-a-closed-oriented-surface, def-axiom-of-choice, lem-compact-oriented-boundary-manifolds-have-finite-dimensional-cohomology, thm-poincare-lefschetz-duality, thm-poincare-duality-for-oriented-topological-manifolds, thm-long-exact-sequence-of-a-pair-in-singular-homology, thm-cap-product-boundary-identity, def-relative-cap-product, def-relative-fundamental-class-and-boundary-orientation, def-kronecker-evaluation-pairing, lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives, cor-cohomology-over-a-field-is-dual-to-homology-over-that-field]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, Theorem 3.43 and §3.3"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf"
      locator: "Theorem 3.43, printed pp. 253–254 (PDF pp. 57–58): Poincaré duality for compact manifolds with boundary; §3.3, including the boundary compatibility exercise."
    - title: "J. Peter May, A Concise Course in Algebraic Topology, Chapter 21 §4"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "Chapter 21 §4, printed pp. 169–171 (PDF pp. 176–178): induced boundary fundamental class, relative Poincaré duality, and the five-lemma proof."
---

## Statement

Assume AC. Let $M$ be a compact oriented smooth 3-manifold as in [[def-oriented-smooth-cobordism]], with closed, possibly disconnected boundary $\Sigma$, and let $i:\Sigma\hookrightarrow M$ be inclusion. Extend the direct-sum intersection form of [[def-intersection-form-on-the-homology-of-a-closed-oriented-surface]] to $H_1(\Sigma;\mathbb R)$. The boundary kernel

$$\lambda_M=\ker(i_*:H_1(\Sigma;\mathbb R)\to H_1(M;\mathbb R))$$

is Lagrangian. If $\Sigma$ is empty, this means $\lambda_M=0$ in the zero symplectic space.

## Facts & Assumptions

**Given:** AC; a compact oriented smooth 3-manifold $M$, its induced boundary orientation, and the inclusion $i:\Sigma=\partial M\hookrightarrow M$.

[F1] The homology sequence of $(M,\Sigma)$ is exact at $H_1(\Sigma)$, so $\ker i_*=\operatorname{im}(\partial:H_2(M,\Sigma;\mathbb R)\to H_1(\Sigma;\mathbb R))$ ([[thm-long-exact-sequence-of-a-pair-in-singular-homology]]).

[F2] Under AC, cap product with $[M,\Sigma]$ is the Poincaré–Lefschetz isomorphism $H^1(M;\mathbb R)\to H_2(M,\Sigma;\mathbb R)$; the cap boundary identity identifies the boundary of this cap with the restriction of the cohomology class capped with $[\Sigma]$, up to a fixed sign ([[thm-poincare-lefschetz-duality]], [[thm-cap-product-boundary-identity]], [[def-relative-cap-product]], [[def-relative-fundamental-class-and-boundary-orientation]]).

[F3] Poincaré duality on each closed oriented boundary component identifies $PD_\Sigma(\beta)=\beta\cap[\Sigma]$ and the intersection pairing satisfies $\omega_\Sigma(PD_\Sigma\alpha,PD_\Sigma\beta)=\langle\beta,PD_\Sigma\alpha\rangle$ in the first-factor convention ([[thm-poincare-duality-for-oriented-topological-manifolds]], [[def-intersection-form-on-the-homology-of-a-closed-oriented-surface]], [[def-kronecker-evaluation-pairing]]).

[F4] The cohomology map $i^*:H^1(M;\mathbb R)\to H^1(\Sigma;\mathbb R)$ is the transpose of $i_*$ under the perfect field-valued Kronecker pairings; finite-dimensional annihilator identities apply ([[cor-cohomology-over-a-field-is-dual-to-homology-over-that-field]], [[lem-compact-oriented-boundary-manifolds-have-finite-dimensional-cohomology]], [[lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives]]).

[A1] Full AC is used only through the Poincaré–Lefschetz and Poincaré duality suppliers in [F2]–[F4] ([[def-axiom-of-choice]]).

## Proof

**Given:** The data in the Statement.

1.1 Exactness [F1] gives $\lambda_M=\operatorname{im}(\partial:H_2(M,\Sigma;\mathbb R)\to H_1(\Sigma;\mathbb R))$. By [F2], every relative class is $u\cap[M,\Sigma]$ for some $u\in H^1(M;\mathbb R)$. The cap boundary identity gives $\partial(u\cap[M,\Sigma])=\pm(i^*u)\cap[\Sigma]$. Therefore $\lambda_M=PD_\Sigma(\operatorname{im}i^*)$; the sign does not change this subspace. [F1, F2, A1, given]

2.1 Let $E=\operatorname{im}i^*\subseteq H^1(\Sigma;\mathbb R)$. For $x\in H_1(\Sigma;\mathbb R)$, [F3] gives $\omega_\Sigma(x,PD_\Sigma\beta)=\langle\beta,x\rangle$ for $\beta\in E$. Hence $x$ is orthogonal to $PD_\Sigma(E)=\lambda_M$ exactly when every functional in $E$ vanishes on $x$. [F3, step 1.1, algebra]

3.1 By [F4], $E$ is the annihilator of $\ker i_*$ in $H^1(\Sigma;\mathbb R)$; finite-dimensional double-annihilator duality says the vectors annihilated by every element of $E$ are exactly $\ker i_*=\lambda_M$. Step 2.1 therefore gives $\lambda_M^\perp=\lambda_M$. This equality implies isotropy and half-dimension, so $\lambda_M$ is Lagrangian. If $\Sigma$ is empty, both sides are zero directly. [F1, F4, step 2.1, algebra] ∎
