---
id: lem-banach-valued-cauchy-integral-vanishes
kind: lemma
title: Banach-valued Cauchy integral vanishes
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [lem-contour-integral-commutes-with-bounded-linear-maps, cor-global-cauchy-theorem-homology, cor-dual-separates-points, def-axiom-of-choice, def-banach-algebra-valued-contour-integral, def-complex-chain-and-cycle, def-null-homologous-and-homologous-complex-cycles, def-dual-space-of-a-normed-space, def-integration-and-index-of-complex-chain]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — Lemma 5.11 and Theorem 5.25(i), printed pp. 217–219 and 228"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras, v2 — §2.5, printed pp. 43–47"
      url: "https://arxiv.org/pdf/1211.3404"
verification:
  audited: 2026-09-22
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $A$ be a unital
complex Banach algebra, let $U \subseteq \mathbb C$ be open, and let
$F : U \to A$ be continuous and **weakly holomorphic**: for every bounded
linear functional $\varphi : A \to \mathbb C$
([[def-dual-space-of-a-normed-space]]) the scalar function
$\varphi \circ F : U \to \mathbb C$ is holomorphic. Let $\Gamma$ be a complex
chain which is a cycle, with trace in $U$
([[def-complex-chain-and-cycle]]) and null-homologous in $U$
([[def-null-homologous-and-homologous-complex-cycles]]). Then

$$\int_\Gamma F(z)\,dz = 0 ,$$

the integral being that of [[def-banach-algebra-valued-contour-integral]] over
the chain $\Gamma$. The Axiom of Choice is used exactly once, in the separation
step supplied by [[cor-dual-separates-points]].

## Facts & Assumptions

**Given:** An assumed Axiom of Choice, an open $U \subseteq \mathbb C$, a continuous weakly holomorphic $F : U \to A$, and a chain $\Gamma = \sum_{k<r} m_k\gamma_k$ which is a cycle with trace $\Gamma^\ast \subseteq U$ and is null-homologous in $U$.

[F1] For $p \notin \Gamma^\ast$ one has $\int_\Gamma dz/(z-p) = 2\pi i\,n(\Gamma,p)$, and $\int_\Gamma g\,dz = \sum_{\substack{k<r\\m_k\ne0}} m_k\int_{\gamma_k}g\,dz$ for every $g$ continuous on $\Gamma^\ast$; integrals over chains are additive ([[def-banach-algebra-valued-contour-integral]], [[def-integration-and-index-of-complex-chain]]).

[F2] For a bounded linear $\varphi:A\to\mathbb C$ and a single contour $\gamma$, bounded linearity commutes with the contour integral ([[lem-contour-integral-commutes-with-bounded-linear-maps]]). Hence for the finite chain $\Gamma=\sum_{k<r}m_k\gamma_k$ and every $f$ continuous on its trace, $$\varphi\!\left(\int_\Gamma f\,dz\right) =\sum_{\substack{k<r\\m_k\ne0}}m_k\varphi\!\left(\int_{\gamma_k}f\,dz\right) =\int_\Gamma(\varphi\circ f)\,dz,$$ by the chain-integral definition in [F1]. Each retained contour has trace contained in $\Gamma^\ast$, so its integral is defined; zero-coefficient contours are omitted even if their traces lie outside the domain of $f$. For an empty retained list, both sides are zero by linearity.

[F3] If $\Omega \subseteq \mathbb C$ is open, $g : \Omega \to \mathbb C$ is holomorphic, and $\Gamma$ is a complex chain which is a cycle with trace in $\Omega$ and null-homologous in $\Omega$, then $\int_\Gamma g\,dz = 0$ ([[cor-global-cauchy-theorem-homology]]).

[F4] If $x \ne y$ in a complex normed space $V$ then there is a bounded linear functional $\varphi$ on $V$ with $\varphi(x) \ne \varphi(y)$ ([[cor-dual-separates-points]]).

[A1] The standing hypothesis is the Axiom of Choice, used here through [F4] and nowhere else ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 For every bounded linear functional $\varphi : A \to \mathbb C$ the composition $\varphi \circ F$ is holomorphic on $U$ by weak holomorphy, and it is continuous; moreover $\Gamma$ is a cycle with trace in $U$ that is null-homologous in $U$ by hypothesis, so [F3] applies to $g := \varphi\circ F$ and gives $\int_\Gamma \varphi(F(z))\,dz = 0$. [F1, F3]

2.1 For every bounded linear $\varphi$, $\varphi\bigl(\int_\Gamma F\,dz\bigr) = \int_\Gamma \varphi(F(z))\,dz = 0$: the first equality is [F2], and the second is [step 1.1]. [step 1.1, F2]

3.1 Suppose $\int_\Gamma F\,dz \ne 0$. Then [F4] applied to the distinct points $x := \int_\Gamma F\,dz$ and $0$ produces a bounded linear functional $\varphi$ with $\varphi\bigl(\int_\Gamma F\,dz\bigr) \ne 0$, contradicting [step 2.1]; hence $\int_\Gamma F\,dz = 0$. [step 2.1, F4, A1] ∎
