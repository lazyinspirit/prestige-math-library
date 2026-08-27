---
id: thm-domains-of-holomorphy-are-hartogs-pseudoconvex
kind: theorem
title: "Domains of holomorphy are Hartogs pseudoconvex"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity,
       def-polydisc-boundary-radius,
       def-plane-subharmonic-function,
       thm-complex-stone-weierstrass-self-adjoint,
       thm-continuity-principle-for-domains-of-holomorphy]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, §2.5"
      url: "https://www.jirka.org/scv/scv.pdf"
    - title: "Harold P. Boas, Lecture Notes on Several Complex Variables, Theorem 8"
      url: "https://haroldpboas.gitlab.io/courses/650-2007c/notes.pdf"
pipeline_run: null
---

## Statement

Every domain of holomorphy in $\mathbb C^m$ is Hartogs pseudoconvex.

## Facts & Assumptions

**Given:** A domain of holomorphy $\Omega\subseteq\mathbb C^m$.

[L1] Domains of holomorphy satisfy the continuity principle for continuous
families of analytic discs
([[thm-continuity-principle-for-domains-of-holomorphy]]).

[L2] Hartogs pseudoconvexity means that $-\log\delta_\Omega$ is
plurisubharmonic ([[def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity]]).

[L3] The boundary-radius function is the sup-norm distance to the complement,
so it is continuous on a proper domain ([[def-polydisc-boundary-radius]]).

[L4] Every unital point-separating self-adjoint complex function algebra on a
compact Hausdorff space is uniformly dense
([[thm-complex-stone-weierstrass-self-adjoint]]).

[L5] Plane subharmonicity is the upper-semicontinuous disc-submean condition
([[def-plane-subharmonic-function]]).

## Proof

**Proof technique:** direct.

1.1 If $\Omega=\mathbb C^m$, it is Hartogs pseudoconvex by the whole-space convention in [L2]. Assume henceforth that $\Omega$ is proper. Fix an affine map $\lambda\mapsto z_0+\lambda w_0$ from the closed unit disc into $\Omega$, and put $$u(\lambda):=-\log\delta_\Omega(z_0+\lambda w_0).$$ By [L3], $u$ is continuous on the closed disc. The trigonometric-polynomial algebra on the unit circle is unital, separates points through the coordinate function, and is self-adjoint because $\overline z=z^{-1}$ on the circle. Given $\varepsilon>0$, [L4] therefore gives a complex trigonometric polynomial within $\varepsilon$ of the real function $u$; taking its real part gives a real trigonometric polynomial $q$ with $|q-u|<\varepsilon$. Write $q(e^{it})=\operatorname{Re}p(e^{it})$ for a holomorphic polynomial $p$, and replace $p$ by $p+\varepsilon$. Then $$u(\lambda)<\operatorname{Re}p(\lambda)\le u(\lambda)+2\varepsilon\qquad(|\lambda|=1).$$ [L2, L3, L4, given, choose, construct]

2.1 For $\eta\in\mathbb C^m$ with $\max_j|\eta_j|<1$ and $t\in[0,1]$, define $$\Phi_t^\eta(\lambda):=z_0+\lambda w_0+t\,e^{-p(\lambda)}\eta.$$ On $|\lambda|=1$, the perturbation has sup norm strictly less than $\delta_\Omega(z_0+\lambda w_0)$, so each boundary circle $\Phi_t^\eta(\partial\mathbb D)$ lies in $\Omega$. The initial disc at $t=0$ also lies in $\Omega$, so [L1] applied to the family $t\mapsto\Phi_t^\eta$ gives $\Phi_1^\eta(\mathbb D)\subseteq\Omega$. Since this holds for every $\eta$ in the unit polydisc, the whole equal-radius polydisc of radius $e^{-\operatorname{Re}p(\lambda)}$ around $z_0+\lambda w_0$ lies in $\Omega$ for every $|\lambda|<1$. Thus $$-\log\delta_\Omega(z_0+\lambda w_0)\le\operatorname{Re}p(\lambda)\qquad(|\lambda|<1).$$ [L1, step 1.1, given]

3.1 Evaluating step 2.1 at $0$ and averaging the boundary values of the real part of the polynomial $p$ gives $$u(0)\le\operatorname{Re}p(0)=\frac1{2\pi}\int_0^{2\pi}\operatorname{Re}p(e^{it})\,dt\le\frac1{2\pi}\int_0^{2\pi}u(e^{it})\,dt+2\varepsilon.$$ Letting $\varepsilon\downarrow0$ gives the submean inequality. Because the affine closed disc was arbitrary and $u$ is continuous, [L5] makes every affine-line restriction subharmonic. By [L2], $-\log\delta_\Omega$ is plurisubharmonic, so $\Omega$ is Hartogs pseudoconvex. [L2, L5, step 1.1, step 2.1, algebra] ∎
