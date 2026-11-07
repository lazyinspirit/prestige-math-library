---
id: def-semistaable-representation-and-filtered-phi-n-module
kind: definition
title: Semistable representation and filtered (φ,N)-module
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 15
deps:
  - def-local-p-adic-galois-representation
  - def-p-adic-period-rings
  - def-de-rham-p-adic-galois-representation
  - lem-p-adic-period-ring-comparison-embedding-is-injective
  - def-p-typical-witt-vectors-of-a-perfect-field
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Olivier Brinon and Brian Conrad, CMI Summer School Notes on p-adic Hodge Theory, Part II, Chapters 8–9
      url: https://math.stanford.edu/~conrad/papers/notes.pdf
    - title: Laurent Berger, An Introduction to the Theory of p-adic Representations, Sections II.3.1–3.3
      url: https://perso.ens-lyon.fr/laurent.berger/articles/article05.pdf
verification:
  precheck: n/a
---

## Definition

Let $K/\mathbb Q_p$ be finite, with residue field $k$, $K_0=W_p(k)[1/p]$, and $f=[k:\mathbb F_p]$. A **filtered $(\varphi,N)$-module over $K$** is a finite-dimensional $K_0$-vector space $D$ with a bijective $\sigma$-semilinear map $\varphi:D\to D$, a nilpotent $K_0$-linear map $N:D\to D$ satisfying $N\varphi=p\varphi N$, and a decreasing, exhaustive, separated filtration $\operatorname{Fil}^iD_K$ on $D_K=K\otimes_{K_0}D$. Define
$$t_H(D):=\sum_{i\in\mathbb Z}i\,\dim_K\operatorname{gr}^i(D_K),\qquad t_N(D):=\frac1f v_p\!\left(\det_{K_0}(\varphi^f)\right),$$
where $v_p$ is normalized by $v_p(p)=1$. The second determinant is that of the $K_0$-linear map $\varphi^f$ and is basis-independent. The module $D$ is **weakly admissible** if $t_N(D)=t_H(D)$ and, for every $K_0$-subspace $D'\subseteq D$ stable under both $\varphi$ and $N$, with its induced filtration, $t_N(D')\ge t_H(D')$.

For a finite-dimensional continuous $\mathbb Q_p$-representation $V$ of $G_K$, define
$$D_{\mathrm{st}}(V):=(B_{\mathrm{st}}\otimes_{\mathbb Q_p}V)^{G_K}.$$
The operators $\varphi$ and $N$ on $B_{\mathrm{st}}$ induce the corresponding semilinear Frobenius and monodromy operator on $D_{\mathrm{st}}(V)$. The injective map $K\otimes_{K_0}B_{\mathrm{st}}\hookrightarrow B_{\mathrm{dR}}$ induces $K\otimes_{K_0}D_{\mathrm{st}}(V)\hookrightarrow D_{\mathrm{dR}}(V)$; give this subspace the induced filtration. The representation $V$ is **semistable** if $\dim_{K_0}D_{\mathrm{st}}(V)=\dim_{\mathbb Q_p}V$.

## Definition references

[[def-local-p-adic-galois-representation]]

[[def-p-adic-period-rings]]

[[def-de-rham-p-adic-galois-representation]]

[[lem-p-adic-period-ring-comparison-embedding-is-injective]]

[[def-p-typical-witt-vectors-of-a-perfect-field]]

[Olivier Brinon and Brian Conrad, *CMI Summer School Notes on p-adic Hodge Theory*, Part II, Chapters 8–9](https://math.stanford.edu/~conrad/papers/notes.pdf)

[Laurent Berger, *An Introduction to the Theory of p-adic Representations*, §§II.3.1–3.3](https://perso.ens-lyon.fr/laurent.berger/articles/article05.pdf)

## Facts & Assumptions

**Given:** a finite extension $K/\mathbb Q_p$, its residue field, and a finite-dimensional continuous representation $V$.

[F1] [[def-p-adic-period-rings]]: $B_{\mathrm{st}}$ has $G_K$-action, Frobenius $\varphi$, monodromy $N$, and the stated branch-dependent embedding into $B_{\mathrm{dR}}$.

[F2] [[def-de-rham-p-adic-galois-representation]]: $D_{\mathrm{dR}}(V)$ has its filtration induced by $B_{\mathrm{dR}}$.

[F3] [[lem-p-adic-period-ring-comparison-embedding-is-injective]]: the $K$-linear map from $K\otimes_{K_0}B_{\mathrm{st}}$ to $B_{\mathrm{dR}}$ is injective. This supplier now contains a local proof. The construction obligations retained in [F1] remain separate; this use grants no readiness certification.

[F4] [[def-p-typical-witt-vectors-of-a-perfect-field]]: for finite residue field $k$, $K_0$ is unramified of degree $f=[k:\mathbb F_p]$, its valuation has $v_p(p)=1$, and $\sigma^f=1$; hence $\varphi^f$ is $K_0$-linear.

## Proof

1.1 The period-ring injection in [F3], after tensoring with the finite-dimensional $V$, restricts to an injection on $G_K$-fixed vectors: tensoring the inclusion with $K$ over the field $K_0$ preserves injections, and an equivariant injection remains injective on invariants. Since $K$ is fixed, this gives $K\otimes_{K_0}D_{\mathrm{st}}(V)\hookrightarrow D_{\mathrm{dR}}(V)$, so the stated subspace filtration is well-defined. The period-ring identities in [F1] give $N\varphi=p\varphi N$ and make $N$ locally nilpotent on $B_{\mathrm{st}}=B_{\mathrm{cris}}[X]$. [given, F1, F2, F3, algebra]

2.1 If $V$ is semistable, the defining dimension equality makes $D_{\mathrm{st}}(V)$ finite-dimensional. Frobenius on $B_{\mathrm{st}}$ is injective by [F1], so its induced semilinear endomorphism on $D_{\mathrm{st}}(V)$ is injective; [F4] makes the semilinearity automorphism invertible, and an injective semilinear endomorphism of a finite-dimensional space is bijective. The locally nilpotent $N$ is nilpotent on this finite-dimensional space: choose a basis, take the maximum of the finitely many powers killing its basis vectors, and use linearity. The filtration is the subspace filtration of $D_{\mathrm{dR}}(V)$ and is therefore exhaustive and separated. Hence $D_{\mathrm{st}}(V)$ has the filtered $(\varphi,N)$-module structure stated above. [given, F1, F2, F4, step 1.1, algebra]

3.1 By [F4], $\varphi^f$ is $K_0$-linear, so its determinant is the determinant of a linear endomorphism and is unchanged by a change of basis. The exhaustive separated filtration on the finite-dimensional $D_K$ has only finitely many nonzero graded pieces, so $t_H(D)$ is a finite sum. Thus both numerical invariants in the definition are well-defined. [given, F4, algebra] ∎
