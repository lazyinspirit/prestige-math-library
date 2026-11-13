---
title: Gradient and Hessian formulas
status: draft
research_item: prop-expander-sync-energy-derivatives
dependency_level: 3
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 10, equations (2.1)–(2.2); p. 11, opening display
      statement: The gradient and Hessian of the homogeneous Kuramoto energy have the
        displayed sine and cosine entries, and the Hessian quadratic form is the
        corresponding half-sum over ordered vertex pairs.
      hypotheses: A finite undirected graph with symmetric adjacency matrix and a
        phase at each vertex.
      reading_limits: The extracted article text at the cited passages was inspected
        for attribution. The local proof uses the mathematical suppliers listed
        below, not the article's assertion as a premise.
---

PDF p. 10: ` Equations (2.1), (2.2) `; PDF p. 11: ` Hessian quadratic form `

## Prerequisites

- [def-expander-sync-energy](item-def-expander-sync-energy)
- [def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)
- [def-expander-sync-matrix-order](item-def-expander-sync-matrix-order)
- [def-expander-prereq-phase-torus](item-def-expander-prereq-phase-torus)
- [def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus)
- [prop-expander-prereq-pair-potential-calculus](item-prop-expander-prereq-pair-potential-calculus)
- [prop-expander-prereq-complex-quadratic-tests](item-prop-expander-prereq-complex-quadratic-tests)
- [math:thm-chain-rule-for-total-derivatives](https://alphabetamath.cc/item/thm-chain-rule-for-total-derivatives)


## Statement

Let $G=(V,E)$ be a finite undirected graph with nonempty vertex set, possibly with self-loops, and symmetric adjacency matrix $A$. Let $\theta\in(S^1)^V$ and let $\mathcal E_G(\theta)=\frac12\sum_{x,y\in V}A_{x,y}(1-\cos(\theta_x-\theta_y))$ be the homogeneous Kuramoto energy. Use local real angular lifts to compute its gradient and Hessian in the flat coordinates. Then, for $x\in V$,

$$(\nabla\mathcal E_G(\theta))_x=\sum_{z\in V}A_{x,z}\sin(\theta_x-\theta_z).$$

For $x\ne y$, $(\nabla^2\mathcal E_G(\theta))_{x,y}=-A_{x,y}\cos(\theta_x-\theta_y)$, while $(\nabla^2\mathcal E_G(\theta))_{x,x}=\sum_{z\ne x}A_{x,z}\cos(\theta_x-\theta_z)$. For every $f:V\to\mathbb C$, with $\langle f,g\rangle=\sum_x\overline{f(x)}g(x)$,

$$\langle f,\nabla^2\mathcal E_G(\theta)f\rangle=\frac12\sum_{x,y\in V}A_{x,y}\cos(\theta_x-\theta_y)|f(x)-f(y)|^2.$$

## Facts & Assumptions

[F1] The graph has finitely many vertices and real symmetric adjacency matrix $A$, with diagonal entries allowed for self-loops ([def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)).

[F2] The energy is the displayed ordered-pair sum and is independent of the chosen real lift of the phase state ([def-expander-sync-energy](item-def-expander-sync-energy)). Angular charts have locally constant translation transitions and the flat metric has Euclidean coefficients in those charts ([def-expander-prereq-phase-torus](item-def-expander-prereq-phase-torus)).

[F3] Sine and cosine are $2\pi$-periodic, $\cos'(t)=-\sin t$ and $\sin'(t)=\cos t$; the phasor identities imply that cosine is even and $\sin 0=0$ ([def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus)).

[F4] For a finite symmetric real array $w$ and an even, twice continuously differentiable $2\pi$-periodic function $v$, the gradient of $\frac12\sum_{x,y}w_{xy}v(\theta_x-\theta_y)$ has components $\sum_yw_{xy}v'(\theta_x-\theta_y)$ ([prop-expander-prereq-pair-potential-calculus](item-prop-expander-prereq-pair-potential-calculus)).

[F5] The chain rule differentiates a composition by composing its derivatives ([math:thm-chain-rule-for-total-derivatives](https://alphabetamath.cc/item/thm-chain-rule-for-total-derivatives)). Finite sums and scalar multiples of differentiable functions may be differentiated termwise ([def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus)).

[F6] If $b$ is a real symmetric array and $L=\operatorname{diag}(\sum_y b_{xy})-b$, then $f^*Lf=\frac12\sum_{x,y}b_{xy}|f(x)-f(y)|^2$ for every complex vector $f$ ([prop-expander-prereq-complex-quadratic-tests](item-prop-expander-prereq-complex-quadratic-tests)). Matrix action and the Hermitian inner product use the finite-sum convention in the Statement ([def-expander-sync-matrix-order](item-def-expander-sync-matrix-order)).

## Proof

**Given:** A graph, phase state and complex vertex function as in the Statement.

**Goal:** Establish the gradient, Hessian entries and complex quadratic-form identity.

1.1 Choose a local real angular lift. Set $v(t)=1-\cos t$ and $w_{xy}=A_{x,y}$. By [F1]–[F3], $w$ is symmetric and $v$ is even and $2\pi$-periodic; the derivative formulas give $v'(t)=\sin t$ and $v''(t)=\cos t$, with continuous derivatives. Thus [F4] applies and yields the asserted gradient. The self-loop term vanishes because $\sin 0=0$. [F1, F2, F3, F4]

2.1 Differentiate the gradient component with respect to the lift coordinate $\theta_y$. By [F5], the chain rule gives $\partial_{\theta_y}\sin(\theta_x-\theta_z)=\cos(\theta_x-\theta_z)(\delta_{xy}-\delta_{zy})$, where $\delta_{ab}$ is $1$ if $a=b$ and $0$ otherwise. For $y\ne x$, only $z=y$ contributes, giving the stated off-diagonal entry. For $y=x$, the factor is $1-\delta_{zx}$, giving the sum over $z\ne x$. Translation transitions and the Euclidean metric in [F2] identify these coordinate derivatives with the stated gradient and Hessian on the phase torus, independently of the lift. [F2, F3, F5, step 1.1, algebra]

3.1 Put $b_{xy}=A_{x,y}\cos(\theta_x-\theta_y)$. By symmetry of $A$ and evenness of cosine, $b$ is real symmetric. The entries in step 2.1 are exactly those of $L=\operatorname{diag}(\sum_zb_{xz})-b$: its diagonal is $\sum_{z\ne x}b_{xz}$, so any loop coefficient cancels. Applying [F6] to this $L$ proves the displayed identity for every complex $f$. This completes the proof. [F1, F3, F6, step 2.1, algebra] ∎

## Source notes

The formulas are attributed to [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf), PDF pages 10–11. The proof above derives them from the stated mathematical inputs.
