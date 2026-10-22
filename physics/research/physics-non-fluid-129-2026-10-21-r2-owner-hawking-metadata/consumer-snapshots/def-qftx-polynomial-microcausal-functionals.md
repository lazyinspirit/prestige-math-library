---
id: def-qftx-polynomial-microcausal-functionals
kind: definition
title: Compactly supported polynomial microcausal functionals
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 3
deps:
  - def-qftx-distributions-on-smooth-manifolds
  - def-qftx-wavefront-hadamard
  - def-countable-choice
dependency_roles:
  def-qftx-distributions-on-smooth-manifolds: mathematical-premise
  def-qftx-wavefront-hadamard: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Klaus Fredenhagen and Katarzyna Rejzner, Perturbative algebraic quantum field theory, Section 5
      url: https://arxiv.org/html/1208.1428
      locator: Full-text Section 5.1, equations (52)–(53), compactly supported functionals and the microcausal cotangent-cone exclusion; the finite polynomial distribution-kernel version is specified here.
    - title: "Romeo Brunetti and Klaus Fredenhagen, Microlocal analysis and interacting quantum field theories: renormalization on physical backgrounds"
      url: https://arxiv.org/pdf/math-ph/9903028
      locator: Full 38-page paper, printed pp. 7–9, Section 2.1, closed conic wavefront sets and the positive-frequency cone convention.
verification:
  precheck: pending
---

## Definition

Let $M$ be an oriented, time-oriented, globally hyperbolic smooth Lorentzian $n$-manifold without boundary, $n\ge2$, with signature $(-,+,\ldots,+)$. A cotangent vector is future or past causal when its metric dual belongs to the corresponding closed causal tangent cone. For $r\ge1$, let $\overline V_\pm^r\subset T^*M^r\setminus0$ consist of tuples $(x_1,\ldots,x_r;\xi_1,\ldots,\xi_r)$ such that every $\xi_j$ is either zero or future causal for $+$, respectively past causal for $-$, and the total tuple is nonzero. The wavefront set used below is the set of nonzero cotangent tuples where compactly localized Fourier transforms fail rapid decay in every conic neighborhood.

A compactly supported polynomial functional is a finite expression
$$ F(\phi)=\sum_{m=0}^{N}\left\langle f_m,\phi^{\otimes m}\mu_g^{\otimes m}\right\rangle, $$
where $\phi\in C^\infty(M;\mathbb R)$, $f_m\in\mathcal E'(M^m)$ is symmetric under permutations of its $m$ variables, $\mu_g$ is the metric density fixed by the Lorentzian metric, and the pairing is defined by inserting a compactly supported cutoff equal to one near $\operatorname{supp}f_m$ in the smooth factor. Its $r$th functional derivative $F^{(r)}(\phi)\in\mathcal E'(M^r)$ is specified, for a test density $\omega$ on $M^r$, by
$$ \left\langle F^{(r)}(\phi),\omega\right\rangle =\sum_{m=r}^{N}\frac{m!}{(m-r)!} \left\langle f_m,\omega\otimes\phi^{\otimes(m-r)}\mu_g^{\otimes(m-r)}\right\rangle, $$
where a compactly supported cutoff equal to one near $\operatorname{supp}f_m$ is inserted in the smooth $\phi$ factors. Expanding the finite polynomial shows that this kernel represents the directional derivative in smooth compactly supported real directions. The functional is microcausal when
$$ \operatorname{WF}(F^{(r)}(\phi))\cap(\overline V_+^r\cup\overline V_-^r)=\varnothing $$
for every $r\ge1$ and every $\phi\in C^\infty(M;\mathbb R)$. Write $\mathcal F_{\mu c}^{\mathrm{poly}}(M)$ for this class, including constants.

## Definition references

[[def-qftx-distributions-on-smooth-manifolds]]

[[def-qftx-wavefront-hadamard]]

[[def-countable-choice]]

