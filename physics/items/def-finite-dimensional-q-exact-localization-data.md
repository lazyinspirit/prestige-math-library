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

Let $M$ be an oriented smooth manifold of finite dimension $n$, possibly with boundary, and set the integration cycle to be $\Gamma=M$ with its given orientation. Let $\mu$ be a smooth positive $n$-form on $M$. The parity-reversed tangent bundle $\Pi TM$ has even base coordinates $x^1,\ldots,x^n$ and odd fiber coordinates $\theta^1,\ldots,\theta^n$ that transform as the coordinate one-forms $dx^i$. Its smooth complex-valued functions are identified with the inhomogeneous complex differential forms $\mathcal A=\Omega^\bullet(M;\mathbb C)$; a form has parity equal to its degree modulo two. Use the Berezin convention $\int d\theta^n\cdots d\theta^1\,\theta^1\cdots\theta^n=1$. For each $F\in\mathcal A$, its degree-$n$ component has a unique expression $F_{[n]}=f_F\mu$ with $f_F\in C^\infty(M;\mathbb C)$. If $f_F\in L^1(M,\mu)$, define

$$I_\Gamma(F):=\int_M f_F\,d\mu=\int_M F_{[n]},$$

where the complex integral is taken componentwise. This is equivalently Berezin integration over the odd fibers followed by integration over the oriented body $M$.

A supercharge $Q$ is a smooth odd derivation of $\mathcal A$: for homogeneous forms $\alpha,\beta$, it satisfies $Q(\alpha\wedge\beta)=Q\alpha\wedge\beta+(-1)^{|\alpha|}\alpha\wedge Q\beta$. Its square $Q^2:=Q\circ Q$ is an even derivation. The canonical Berezinian density on $\Pi TM$ has local expression $\boldsymbol\mu_\Pi=dx^1\cdots dx^n\,d\theta^n\cdots d\theta^1$ in oriented coordinates. Define divergence relative to this density by

$$\mathcal L_Q\boldsymbol\mu_\Pi=(\operatorname{div}_{\boldsymbol\mu_\Pi}Q)\boldsymbol\mu_\Pi.$$

The condition $\operatorname{div}_{\boldsymbol\mu_\Pi}Q=0$ is local: it says that $Q$ preserves this density. It does not impose any boundary condition. Choose a fixed class $\mathscr C\subseteq\mathcal A$ as part of the integration data; it is an admissible integrand class when for each $F\in\mathscr C$ the coefficients of $F_{[n]}$ and $(QF)_{[n]}$, relative to $\mu$, are integrable and the graded integration-by-parts formula has a finite boundary term. For $F\in\mathscr C$, call that boundary term the $Q$-boundary flux of $F$. The integration is $Q$-invariant on $\mathscr C$ when the integrated identity

$$I_\Gamma(QF)=0\qquad\text{for every }F\in\mathscr C$$

holds. With $\Phi_{\partial\Gamma}(Q,F)$ denoting the signed boundary term in the graded divergence theorem, that theorem gives

$$\operatorname{div}_{\boldsymbol\mu_\Pi}Q=0\quad\Longrightarrow\quad I_\Gamma(QF)=\Phi_{\partial\Gamma}(Q,F).$$

Hence zero divergence and, separately, zero $Q$-boundary flux imply the integrated $Q$-invariance identity. Zero divergence alone does not imply it. For a compact manifold without boundary the boundary term is absent; on a noncompact manifold or one with boundary, compact support in the interior or explicit decay/boundary conditions may make it vanish.

An admissible finite-dimensional $Q$-exact deformation consists of even smooth forms $S,O\in\mathcal A$, an odd smooth form $V\in\mathcal A$, and a nonempty open interval $J\subseteq\mathbb R$ such that the integration is $Q$-invariant on $\mathscr C$ and $QS=QO=0$. The even form $QV$ is the $Q$-exact deformation, $S_t:=S+tQV$, and $E_t:=e^{-S_t}$, where the exponential is the pointwise exponential of the degree-zero part times the finite exterior-degree expansion of its positive-degree part. Require $(Q^2V)E_t=0$ for every $t\in J$; the stronger condition $Q^2V=0$ is sufficient. Require $O E_t$ and $O V E_t$ to belong to $\mathscr C$ for every $t\in J$, so $I_\Gamma(Q(O V E_t))=0$. If this identity is established by graded integration by parts, its zero-divergence and zero-boundary-flux hypotheses are separate.

Write $(O E_t)_{[n]}=f_t\mu$. The deformation data are analytically admissible when $f_t\in L^1(M,\mu)$ for every $t\in J$, and for $\mu$-almost every $x$ the map $t\mapsto f_t(x)$ is differentiable at every $t\in J$ as a map from a real interval to $\mathbb C$, with

$$\partial_t f_t(x):=\lim_{\substack{h\to0\\ h\in\mathbb R,\ h\ne0,\ t+h\in J}}\frac{f_{t+h}(x)-f_t(x)}{h}\in\mathbb C.$$

For each $t$, require $x\mapsto\partial_t f_t(x)$ to be measurable, using zero on the common exceptional null set. For every compact $K\subset J$, require a single nonnegative $g_K\in L^1(M,\mu)$ that bounds both $|f_t(x)|$ and $|\partial_t f_t(x)|$ for every $t\in K$ outside one $\mu$-null set. The underlying manifold is finite-dimensional; its smooth-function algebra need not be finite-dimensional as a vector space.

## Definition references

[Schwarz and Zaboronsky, §§2–3](https://arxiv.org/pdf/hep-th/9511112)

[Pestun and Zabzine, §1](https://arxiv.org/pdf/1608.02953)

[Folland, Theorem 2.27](https://djvu.online/file/NPF4BEtSuqdFA)
