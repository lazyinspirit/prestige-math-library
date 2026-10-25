---
id: def-finite-dimensional-q-exact-localization-data
kind: definition
title: "Finite-Dimensional Q-Exact Localization Data"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps: []
dependency_roles: {}
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Albert Schwarz and Oleg Zaboronsky, Supersymmetry and localization"
      url: "https://arxiv.org/pdf/hep-th/9511112"
    - title: "Vasily Pestun and Maxim Zabzine, Introduction to localization in quantum field theory"
      url: "https://arxiv.org/pdf/1608.02953"
    - title: "Gerald B. Folland, Real Analysis, 2nd ed."
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
verification:
  precheck: pending
---

## Definition

Let $M$ be an oriented smooth manifold of finite dimension $n$, with a chosen integration cycle and a smooth positive volume form $\mu$. Its parity-reversed tangent bundle $\Pi TM$ has even base coordinates $x^1,\ldots,x^n$ and odd fiber coordinates $\theta^1,\ldots,\theta^n$, which transform as the coordinate one-forms $dx^i$. Smooth functions on $\Pi TM$ are identified with inhomogeneous complex differential forms $\mathcal A=\Omega^\bullet(M;\mathbb C)$; the parity of a form is its degree modulo two. The Berezin convention is $\int d\theta^n\cdots d\theta^1\,\theta^1\cdots\theta^n=1$. For $F\in\mathcal A$, write $F_{[n]}=f_F\mu$ for its degree-$n$ component and define the graded integral by $I_\Gamma(F):=\int_M f_F\,d\mu=\int_M F_{[n]}$, equivalently by Berezin integration over the odd fibers followed by integration over the body $M$ with the chosen orientation.

A supercharge $Q$ is a smooth odd derivation of $\mathcal A$, so for homogeneous forms $\alpha,\beta$ it satisfies $Q(\alpha\wedge\beta)=Q\alpha\wedge\beta+(-1)^{|\alpha|}\alpha\wedge Q\beta$. Its square $Q^2:=Q\circ Q$ is an even derivation. The measure and cycle are $Q$-invariant on an admissible class of integrands when $I_\Gamma(QF)=0$ for every $F$ in that class. The associated Berezinian density on $\Pi TM$ has local expression $dx^1\cdots dx^n\,d\theta^n\cdots d\theta^1$ in oriented coordinates. In that coordinate description, zero divergence means $\mathcal L_Q\boldsymbol\mu_\Pi=(\operatorname{div}_{\boldsymbol\mu_\Pi}Q)\boldsymbol\mu_\Pi=0$, together with vanishing boundary flux. Compact support in the interior or explicit decay may impose the boundary condition on a noncompact or bounded cycle.

An admissible finite-dimensional $Q$-exact deformation consists of even smooth forms $S,O\in\mathcal A$, an odd smooth form $V\in\mathcal A$, and an open interval $J\subseteq\mathbb R$ such that $QS=QO=0$. The even form $QV$ is the $Q$-exact deformation, $S_t:=S+tQV$, and $E_t:=e^{-S_t}$, with the exponential defined by the usual pointwise exponential of its degree-zero part and the finite exterior-degree expansion of its positive-degree part. Require $(Q^2V)E_t=0$ for every $t\in J$; the stronger condition $Q^2V=0$ is sufficient. Require $O E_t$ and $O V E_t$ to be admissible integrands, with no boundary flux in $I_\Gamma(Q(O V E_t))$.

Write $(O E_t)_{[n]}=f_t\mu$. The deformation data are analytically admissible when $f_t$ is integrable for every $t\in J$, $t\mapsto f_t(x)$ is differentiable for almost every $x$, $\partial_t f_t$ is measurable, and for every compact $K\subset J$ there is a single nonnegative $g_K\in L^1(M,\mu)$ such that $|f_t(x)|\le g_K(x)$ and $|\partial_t f_t(x)|\le g_K(x)$ for every $t\in K$ outside one $\mu$-null set. The underlying manifold is finite-dimensional; its smooth-function algebra need not be finite-dimensional as a vector space.

## Definition references

[Schwarz and Zaboronsky, §§2–3](https://arxiv.org/pdf/hep-th/9511112)

[Pestun and Zabzine, §1](https://arxiv.org/pdf/1608.02953)

[Folland, Theorem 2.27](https://djvu.online/file/NPF4BEtSuqdFA)
