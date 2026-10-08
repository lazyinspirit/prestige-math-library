---
id: lem-complex-hessian-domination-at-a-common-minimum
kind: lemma
title: The complex Hessian of a $C^2$ function dominates that of a minorant at a common minimum
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 0
proof_strategy: direct
deps:
  - def-ck-and-multi-index-notation-in-several-variables
  - def-levi-form-and-strict-plurisubharmonicity
  - def-wirtinger-operators-in-several-complex-variables
  - lem-negative-semidefinite-hessian-at-an-interior-local-maximum
  - rem-complex-euclidean-space-dictionary
  - thm-chain-rule-for-total-derivatives
  - thm-clairaut-schwarz-mixed-partials
  - thm-continuous-partial-derivatives-imply-total-differentiability
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: Jiří Lebl, Tasty Bits of Several Complex Variables
      url: https://www.jirka.org/scv/scv.pdf
      locator: "§2.4, Proposition 2.4.9 (PDF p. 85): the proof restricts a $C^2$ function to affine complex lines and identifies the line Laplacian with the Levi form; the common-minimum comparison is proved locally here from the real Hessian maximum test."
---

## Facts & Assumptions

**Given:** An integer $m\ge1$, an open set $U\subseteq\mathbb C^m$, real-valued functions $u,v\in C^2(U)$, a point $a\in U$, a neighbourhood $V\subseteq U$ of $a$ on which $u\ge v$, and $u(a)=v(a)$.

[F1] The identification of $\mathbb C^m$ with $\mathbb R^{2m}$ transports open sets and real coordinate regularity, and $C^2$ means all ordered real coordinate derivatives through order two exist and are continuous ([[rem-complex-euclidean-space-dictionary]], [[def-ck-and-multi-index-notation-in-several-variables]]).

[F2] For a real $C^2$ function on a real open set, its real Hessian quadratic form is nonpositive at an interior local maximum ([[lem-negative-semidefinite-hessian-at-an-interior-local-maximum]]).

[F3] The Wirtinger operators are $\partial_{z_k}=\tfrac12(\partial_{x_k}-i\partial_{y_k})$ and $\partial_{\bar z_k}=\tfrac12(\partial_{x_k}+i\partial_{y_k})$ ([[def-wirtinger-operators-in-several-complex-variables]]).

[F4] If a map has continuous coordinate partial derivatives on a neighbourhood, it is totally differentiable there, and the ordinary chain rule for total derivatives applies ([[thm-continuous-partial-derivatives-imply-total-differentiability]], [[thm-chain-rule-for-total-derivatives]]). Applied to an affine complex line and to the first coordinate derivatives of a real $C^2$ function, it gives the line-composition derivative formulas used below.

[F5] The real coordinate mixed partial derivatives of a $C^2$ function commute ([[thm-clairaut-schwarz-mixed-partials]]).

[F6] The Levi form is $\mathcal L_u(a;X)=\sum_{j,k=1}^m u_{z_j\bar z_k}(a)X_j\overline{X_k}$, with the one-based indices of [[def-levi-form-and-strict-plurisubharmonicity]].

## Statement

Let $m\ge1$, let $U\subseteq\mathbb C^m$ be open, let $u,v\in C^2(U,\mathbb R)$, and let $a\in U$. If $u\ge v$ on a neighbourhood of $a$ and $u(a)=v(a)$, then for every $X\in\mathbb C^m$

$$\sum_{j,k=1}^m\frac{\partial^2u}{\partial z_j\partial\overline z_k}(a)X_j\overline{X_k}\ \ge\ \sum_{j,k=1}^m\frac{\partial^2v}{\partial z_j\partial\overline z_k}(a)X_j\overline{X_k}.$$

Here $C^2$ is interpreted in the real coordinates of [[rem-complex-euclidean-space-dictionary]], and the one-based complex-coordinate aliases and Wirtinger derivatives are those of [[def-levi-form-and-strict-plurisubharmonicity]].

## Proof

**Proof technique:** direct.

**Given:** $m,U,u,v,a$ as in the statement and an arbitrary $X\in\mathbb C^m$.

1.1 Put $w=u-v$. If $X=0$, both sides of the claimed inequality are zero. Otherwise, since $U$ is open, the affine map $\lambda\mapsto a+\lambda X$ maps a sufficiently small disc about $0$ into $U$. On a possibly smaller such disc, $\Phi(\lambda):=w(a+\lambda X)$ is real $C^2$ by [F4], is nonnegative, and satisfies $\Phi(0)=0$; hence $0$ is a local minimum of $\Phi$. [F1, F4, given, algebra]

2.1 The function $-\Phi$ is real $C^2$ and has a local maximum at $0$. Apply [F2] in the real coordinates $\lambda=s+it$. Its Hessian quadratic form is nonpositive on each coordinate vector, so $\Phi_{ss}(0)\ge0$ and $\Phi_{tt}(0)\ge0$. Therefore $\Phi_{ss}(0)+\Phi_{tt}(0)\ge0$. [F2, step 1.1, given]

3.1 Write $X_j=\alpha_j+i\beta_j$. By the definitions in [F3] and the chain rule in [F4], $\partial_{\bar\lambda}\Phi(\lambda)=\sum_k\overline{X_k}(\partial_{\bar z_k}w)(a+\lambda X)$ and therefore $\partial_\lambda\partial_{\bar\lambda}\Phi(0)=\sum_{j,k}X_j\overline{X_k}\,\partial_{z_j}\partial_{\bar z_k}w(a)$. Also, the one-variable Wirtinger formulas give $4\partial_\lambda\partial_{\bar\lambda}\Phi=\Phi_{ss}+\Phi_{tt}+i(\Phi_{st}-\Phi_{ts})=\Phi_{ss}+\Phi_{tt}$ by [F5]. Thus [F6] and step 2.1 imply $4(\mathcal L_u(a;X)-\mathcal L_v(a;X))=\Phi_{ss}(0)+\Phi_{tt}(0)\ge0$, which is the required inequality for this arbitrary $X$. [F3, F4, F5, F6, step 2.1, algebra, given] ∎
