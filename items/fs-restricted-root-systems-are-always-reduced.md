---
id: fs-restricted-root-systems-are-always-reduced
kind: false-statement
title: Restricted root systems are always reduced
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [prop-restricted-root-systems-may-be-nonreduced, def-reduced-crystallographic-euclidean-root-system, def-restricted-root-and-restricted-root-space, def-axiom-of-choice, thm-restricted-root-space-decomposition]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI, §4, the examples after Proposition 6.40 for su(p,q) with p > q, printed pp. 370-371; §11, the restricted-root computation for su(p,q), printed pp. 422-423"
landmark: false
proof_strategy: counterexample
---

## Statement

False: the restricted-root system of a real semisimple Lie algebra is always a
reduced root system.

## Facts & Assumptions

**Given:** The real semisimple Lie algebra $\mathfrak{su}(2,1)$ with $J=\operatorname{diag}(1,1,-1)$, the Cartan involution $\theta(X)=-X^{*}$, the maximal abelian subspace $\mathfrak a=\mathbb RH\subseteq\mathfrak p_0$ for $H=E_{13}+E_{31}$, and its restricted-root system $\Sigma\subseteq\mathfrak a^{*}$ with the functionals $f$ given by $f(H)=1$.

[L1] Restricted roots and restricted-root spaces are the nonzero functionals $\lambda\in\mathfrak a^{*}$ with $\mathfrak g_0^{\lambda}=\{X:[H,X]=\lambda(H)X$ for all $H\in\mathfrak a\}\ne0$, and the multiplicity $m_\lambda$ is $\dim_{\mathbb R}\mathfrak g_0^{\lambda}$ ([[def-restricted-root-and-restricted-root-space]]).

[L2] A reduced crystallographic root system satisfies, in addition to the reflection and integrality conditions, the reducedness condition $\mathbb R\alpha\cap\Phi=\{\alpha,-\alpha\}$ for every $\alpha\in\Phi$ ([[def-reduced-crystallographic-euclidean-root-system]]).

[L3] For $\mathfrak g_0=\mathfrak{su}(2,1)=\{X\in M_3(\mathbb C):X^{*}J+JX=0,\ \operatorname{tr}X=0\}$ with $J=\operatorname{diag}(1,1,-1)$, $\theta(X)=-X^{*}$ and $\mathfrak a=\mathbb RH$, $H=E_{13}+E_{31}$, the restricted-root system is $\Sigma=\{\pm f,\pm2f\}$ with $f(H)=1$ and multiplicities $m_{\pm f}=2$, $m_{\pm2f}=1$; moreover $\mathfrak{su}(2,1)$ is a real form of $\mathfrak{sl}_3(\mathbb C)$, hence a real semisimple Lie algebra ([[prop-restricted-root-systems-may-be-nonreduced]], [[thm-restricted-root-space-decomposition]]).

## Refutation

**Proof technique:** counterexample.

1.1 The algebra $\mathfrak{su}(2,1)$ with the data of [L3] is a real semisimple Lie algebra with a maximal abelian subspace $\mathfrak a=\mathbb RH$ of $\mathfrak p_0$ and restricted-root system $\Sigma=\{\pm f,\pm2f\}$, where $f(H)=1$ and $2f(H)=2$. [L1, L3]

1.2 Both $f$ and $2f$ are elements of $\Sigma$, and $2f\notin\{f,-f\}$ because $2f(H)=2\ne\pm1=\pm f(H)$ for $H\in\mathfrak a$ with $f(H)=1$. [L1, L3]

2.1 Reducedness of a root system requires $\mathbb R\alpha\cap\Phi=\{\alpha,-\alpha\}$ for every root $\alpha$; taking $\alpha=f$ in the restricted-root system of step 1.1 gives $\mathbb Rf\cap\Sigma\supseteq\{f,-f,2f,-2f\}$, which is strictly larger than $\{f,-f\}$, so $\Sigma$ is not reduced and in particular is not a reduced crystallographic root system in the sense of [L2]. [L2, step 1.1, step 1.2]

3.1 Consequently the restricted-root system of the real semisimple Lie algebra $\mathfrak{su}(2,1)$ is not reduced, and the statement that restricted-root systems are always reduced is false; the failure is precisely the occurrence of both a root and its double, which the classification of nonreduced restricted systems records as the type $BC_r$ family. [step 1.1, step 2.1] ∎
