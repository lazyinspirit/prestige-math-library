---
id: lem-qftx-local-polynomial-functionals-are-microcausal
kind: lemma
title: Local polynomial functionals are microcausal
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 4
deps:
  - def-qftx-off-shell-local-polynomial-functionals
  - def-qftx-local-wavefront-set
  - def-qftx-wavefront-hadamard
  - def-qftx-polynomial-microcausal-functionals
dependency_roles:
  def-qftx-off-shell-local-polynomial-functionals: mathematical-premise
  def-qftx-local-wavefront-set: mathematical-premise
  def-qftx-wavefront-hadamard: mathematical-premise
  def-qftx-polynomial-microcausal-functionals: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Klaus Fredenhagen and Katarzyna Rejzner, Perturbative algebraic quantum field theory, full lecture notes
      url: https://arxiv.org/html/1208.1428
      locator: Section 4, equations (23)–(24), and Section 5.1, equations (52)–(53); the local Fourier proof for the finite-jet polynomial subclass is supplied here.
    - title: "Romeo Brunetti and Klaus Fredenhagen, Microlocal analysis and interacting quantum field theories: renormalization on physical backgrounds"
      url: https://arxiv.org/pdf/math-ph/9903028
      locator: Section 2.1, printed pp. 7–9, wavefront covectors of local functionals and the future/past cone exclusion.
verification:
  precheck: pass
---

## Statement

For every $F\in\mathcal F_{\mathrm{loc}}^{\mathrm{poly}}(\mathbb M)$, every $\phi\in C^\infty(\mathbb M;\mathbb R)$ and every $r\ge1$, the kernel $F^{(r)}(\phi)$ satisfies
$$\operatorname{WF}(F^{(r)}(\phi))\subseteq N^*\Delta_r\setminus0,$$
where $\Delta_r=\{(x,\ldots,x):x\in\mathbb M\}$ and
$$N^*\Delta_r=\{(x,\ldots,x;\xi_1,\ldots,\xi_r):\xi_1+\cdots+\xi_r=0\}.$$
Consequently $F^{(r)}(\phi)$ avoids the all-future and all-past causal cotangent cones and $F$ belongs to $\mathcal F_{\mu c}^{\mathrm{poly}}(\mathbb M)$.

## Statement references

[[def-qftx-off-shell-local-polynomial-functionals]]

[[def-qftx-polynomial-microcausal-functionals]]

## Facts & Assumptions

**Given:** $F\in\mathcal F_{\mathrm{loc}}^{\mathrm{poly}}(\mathbb M)$, its finite-jet derivative kernels, and the $(-,+,+,+)$ metric and future time orientation.

[F1] [[def-qftx-off-shell-local-polynomial-functionals]]: each $F^{(r)}(\phi)$ is obtained by differentiating a finite polynomial in finitely many derivatives of $\phi$, with compactly supported smooth coefficients.

[F2] [[def-qftx-local-wavefront-set]]: a localized Fourier transform that is rapidly decreasing in some conic neighborhood of a cotangent direction excludes that direction from the wavefront set.

[F3] [[def-qftx-polynomial-microcausal-functionals]]: microcausality requires the wavefront set of every derivative kernel to avoid tuples all of whose entries are future causal, and tuples all of whose entries are past causal; zero entries are allowed but the tuple itself is nonzero.

[F4] [[def-qftx-wavefront-hadamard]]: future and past causal covectors are defined by metric duality from the two time-oriented causal cones for signature $(-,+,+,+)$.

## Proof

**Proof technique:** direct.

**Given:** [F1]–[F4].

1.1 Expand the finite polynomial in the definition of $F$ after substituting $\phi+\sum_jt_jh_j$ and take the coefficient of $t_1\cdots t_r$. Each resulting term has the form $\int a(x)\prod_{j=1}^{r}\partial^{\alpha_j}h_j(x)\,d^4x$ with $a\in C_c^\infty(\mathbb M)$. Its distribution kernel is $(-1)^{\sum_j|\alpha_j|}\partial_{x_1}^{\alpha_1}\cdots\partial_{x_r}^{\alpha_r}[a(x_r)\prod_{j<r}\delta(x_j-x_r)]$. Indeed, pairing this derivative distribution with a product test gives the displayed integral by the definition of distributional differentiation. The derivatives cannot in general all be moved to the smooth coefficient: derivatives of the relative diagonal deltas remain. The kernel is a finite derivative of a smooth compact diagonal distribution and is supported on $\Delta_r$. [F1, construct, algebra]

2.1 In coordinates $x=x_r$ and $z_j=x_j-x_r$ for $j<r$, multiply the kernels from step 1.1 by any compact smooth localization and expand the derivatives by Leibniz's rule. Each term is a smooth compact coefficient in $x$ times a finite derivative of $\prod_{j<r}\delta(z_j)$, allowing also finitely many $x$-derivatives. Its Fourier transform is therefore a finite sum of polynomials in $(\kappa,\zeta)$ times Fourier transforms of smooth compact $x$-coefficients. These coefficient transforms decrease faster than every power of $\kappa$. On a cone $|\kappa|\ge\epsilon|(\kappa,\zeta)|$ this arbitrary decay absorbs every finite polynomial factor. Thus every nonconormal direction is regular and every wavefront covector has $\kappa=0$. In the original coordinates this is exactly $\sum_j\xi_j=0$. [F2, step 1.1, algebra]

3.1 If $\xi_1,\ldots,\xi_r$ are all future causal covectors in this Minkowski chart, their metric-dual time components have one weak sign, and a nonzero causal covector has a strictly nonzero time component. Thus $\sum_j\xi_j=0$ forces every $\xi_j=0$. The same argument applies to past causal covectors. By step 2.1 the wavefront set is conormal, so it contains no nonzero tuple in either forbidden cone of [F3]. This proves microcausality. [F3, F4, step 2.1, algebra] ∎
## Remarks

The proof uses the thin-diagonal support of local functional derivatives and the pointedness of each Minkowski causal cone. It does not impose the free field equation on $\phi$.
