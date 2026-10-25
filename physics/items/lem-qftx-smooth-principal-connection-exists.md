---
id: lem-qftx-smooth-principal-connection-exists
kind: lemma
title: Existence of a smooth principal connection on a compact SU(N) bundle
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 1
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-gauge-slice-mathematics
physical_scope: null
proof_strategy: direct
axiom_base: "ZF + AC"
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-smooth-partition-of-unity-subordinate-to-an-open-cover
  - thm-smooth-partitions-of-unity-exist-on-manifolds
  - def-qftx-nonabelian-gauge-data
  - def-qftx-principal-connection-form
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-smooth-partition-of-unity-subordinate-to-an-open-cover: mathematical-premise
  thm-smooth-partitions-of-unity-exist-on-manifolds: mathematical-premise
  def-qftx-nonabelian-gauge-data: mathematical-premise
  def-qftx-principal-connection-form: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Karl-Hermann Neeb, Differential Topology of Fiber Bundles (2024)"
      url: "https://www.math.fau.de/wp-content/uploads/2024/01/bundle-lect.pdf"
      locator: "§5.4, Definition 5.4.1, Remark 5.4.5 and Proposition 5.4.6, printed pp. 91–94 (PDF pp. 95–98): local product connection forms and partition-of-unity existence. The compact SU(N) specialization and explicit choice assumptions are proved locally."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---
## Statement

Assume the Axiom of Choice. Let $M$ be a nonempty compact finite-dimensional Hausdorff second-countable smooth manifold without boundary, let $N\ge2$, and let $P\to M$ be any smooth right principal $SU(N)$-bundle. Write $SU(N)=\{g\in M_N(\mathbb C):g^*g=I,\det g=1\}$ and $\mathfrak{su}(N)=\{X\in M_N(\mathbb C):X^*=-X,\operatorname{tr}X=0\}$. Then there exists a smooth $\mathfrak{su}(N)$-valued one-form $\omega$ on $P$ such that, for every $X\in\mathfrak{su}(N)$, its fundamental vertical vector is $X_P(p)=\left.\frac{d}{dt}\right|_{t=0}p\exp(tX)$, and
$$
\omega(X_P)=X,\qquad R_h^*\omega=\operatorname{Ad}_{h^{-1}}\omega\quad(h\in SU(N)),
$$
where $R_h(p)=ph$ and $\operatorname{Ad}_h(X)=hXh^{-1}$. Such a one-form is a smooth principal connection form; the conclusion does not assert a global trivialization of $P$.

## Statement references

[[def-qftx-nonabelian-gauge-data|Smooth right principal SU(N) bundles and their local equivariant charts]]

[[def-qftx-principal-connection-form|Reproduction and right-equivariance conditions for a principal connection form]]

[[thm-smooth-partitions-of-unity-exist-on-manifolds|Smooth partitions of unity under Countable Choice]]

[[def-countable-choice|Countable Choice]]

[[def-smooth-partition-of-unity-subordinate-to-an-open-cover|Support and sum conditions for a subordinate partition]]

## Facts & Assumptions

**Given:** The manifold, bundle, rank parameter, and axiom strength in the Statement.

[A1] The Axiom of Choice means every family of nonempty sets has a choice function. [[def-axiom-of-choice]]

[F1] A smooth right principal SU(N) bundle has local equivariant diffeomorphisms $P|_U\cong U\times SU(N)$. [[def-qftx-nonabelian-gauge-data]]

[F2] A smooth $\mathfrak{su}(N)$-valued one-form satisfying reproduction on fundamental vertical vectors and right equivariance is a principal connection form. [[def-qftx-principal-connection-form]]

[F3] Under Countable Choice, every open cover of a smooth manifold admits a smooth partition of unity subordinate to that cover. [[thm-smooth-partitions-of-unity-exist-on-manifolds]]

[F4] Countable Choice $\mathrm{AC}_\omega$ means that every countable family of nonempty sets has a choice function. [[def-countable-choice]]

[F5] A subordinate smooth partition is locally finite, has $\operatorname{supp}\rho_i\subset U_i$, and satisfies $\sum_i\rho_i=1$. [[def-smooth-partition-of-unity-subordinate-to-an-open-cover]]

## Proof

**Given:** [A1] and the nonempty compact smooth base and smooth right principal bundle of the Statement.

1.1 By [F1], choose an open trivializing cover of $M$. Compactness gives a finite subcover $(U_i)_{i=1}^s$ with corresponding equivariant charts $P|_{U_i}\cong U_i\times SU(N)$. [F1, given, construct]

1.2 In each product chart, write a point as $(x,g)$ and a tangent vector as $(v,W)$, with $W\in T_gSU(N)$. Define $\omega_i(v,W)=g^{-1}W$. This is smooth and $\mathfrak{su}(N)$-valued because left translation identifies $T_gSU(N)$ with $T_eSU(N)=\mathfrak{su}(N)$. For $X\in\mathfrak{su}(N)$, the supplied Lie-group exponential $\exp_G(tX)$ is a curve in $SU(N)$ with derivative $X$ at $t=0$. Thus $g\exp_G(tX)$ has tangent $gX$ and $\omega_i(X_P)=X$. For fixed $h\in SU(N)$, right multiplication sends $W$ to $Wh$, and $(gh)^{-1}(Wh)=h^{-1}(g^{-1}W)h$; hence $R_h^*\omega_i=\operatorname{Ad}_{h^{-1}}\omega_i$. [F1, given, construct, algebra]

2.1 The finite cover in step 1.1 is an open cover of a smooth manifold. By [A1], a choice function exists for every family of nonempty sets, hence for every countable family; this is Countable Choice [F4]. Therefore [F3] and [F5] give a smooth subordinate partition $(\rho_i)_{i=1}^s$ with $\operatorname{supp}\rho_i\subset U_i$ and $\sum_i\rho_i=1$. [A1, F3, F4, F5, step 1.1]

3.1 Extend each $\widetilde\omega_i=(\rho_i\circ\pi)\omega_i$ by zero outside $P|_{U_i}$. The support condition in [F5] makes each extension smooth. Set $\omega=\sum_{i=1}^s\widetilde\omega_i$, a finite smooth sum. Since $\rho_i\circ\pi$ is invariant under right multiplication and each $\omega_i$ is right equivariant, $R_h^*\omega=\operatorname{Ad}_{h^{-1}}\omega$. For each fundamental vertical vector, $\omega(X_P)=\sum_i\rho_i X=X$ by [F5]. Thus [F2] makes $\omega$ a smooth principal connection form on $P$. [F2, F5, step 2.1, step 1.2, algebra, construct] ∎
