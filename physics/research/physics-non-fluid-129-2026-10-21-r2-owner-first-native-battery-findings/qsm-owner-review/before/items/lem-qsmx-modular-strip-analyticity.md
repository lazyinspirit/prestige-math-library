---
id: lem-qsmx-modular-strip-analyticity
kind: lemma
title: Spectral analyticity on the modular strip
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
physical_scope: null
deps:
  - def-axiom-of-choice
  - def-unbounded-linear-operator-domain-and-graph
  - def-symmetric-self-adjoint-and-essentially-self-adjoint
  - def-unbounded-integral-against-a-pvm
  - thm-spectral-theorem-for-unbounded-self-adjoint-operators
  - thm-unbounded-borel-functional-calculus
  - thm-dominated-convergence
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-unbounded-linear-operator-domain-and-graph: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-unbounded-integral-against-a-pvm: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
  thm-unbounded-borel-functional-calculus: mathematical-premise
  thm-dominated-convergence: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: F. Hiai, Concise lectures on selected topics of von Neumann algebras
      url: https://arxiv.org/pdf/2004.02383
      locator: Appendix A, Theorem A.7, printed pp. 146–149
---

## Statement

Assume the Axiom of Choice. Let $H$ be a complex Hilbert space and let $A$ be a self-adjoint operator whose spectral projection valued measure $E$ is supported on $(0,\infty)$. For $\xi\in H$, put $\mu_\xi(B)=\langle E(B)\xi,\xi\rangle$. Define
$$D(A^{1/2})=\left\{\xi\in H:\int_{(0,\infty)}\lambda\,d\mu_\xi(\lambda)<\infty\right\}.$$
For $z\in\mathbb C$ and $\xi\in D(A^{1/2})$, define $A^{-iz/2}\xi$ by the unbounded Borel functional calculus for the function $\lambda\mapsto \exp(-iz\log(\lambda)/2)$. On the closed strip $S=\{z:0\leq\operatorname{Im}z\leq1\}$, this vector is defined, strongly continuous in $z$, and satisfies
$$\|A^{-iz/2}\xi\|^2\leq\|\xi\|^2+\|A^{1/2}\xi\|^2.$$
The map $z\mapsto A^{-iz/2}\xi$ is norm-holomorphic on the open strip $S^\circ$.

## Statement references

[[def-unbounded-linear-operator-domain-and-graph]]

[[def-symmetric-self-adjoint-and-essentially-self-adjoint]]

[[thm-spectral-theorem-for-unbounded-self-adjoint-operators]]

[[thm-unbounded-borel-functional-calculus]]

[[thm-dominated-convergence]]

## Facts & Assumptions

**Given:** The Axiom of Choice, a complex Hilbert space $H$, a self-adjoint $A$ with spectral measure $E$ supported on $(0,\infty)$, and $\xi\in D(A^{1/2})$.

[A1] Assume the Axiom of Choice ([[def-axiom-of-choice]]).

[F1] The unbounded self-adjoint spectral theorem supplies $E$ and the scalar spectral measures $\mu_\xi$ ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]], [[def-unbounded-integral-against-a-pvm]]).

[F2] The unbounded Borel calculus satisfies $\|f(E)\xi\|^2=\int |f|^2\,d\mu_\xi$ on its stated squared-integrability domain ([[thm-unbounded-borel-functional-calculus]]).

[F3] Dominated convergence applies on an arbitrary measure space when one integrable majorant dominates the sequence ([[thm-dominated-convergence]]).

## Proof
**Given:** The Axiom of Choice, a complex Hilbert space $H$, a self-adjoint $A$ with spectral measure $E$ supported on $(0,\infty)$, and $\xi\in D(A^{1/2})$.

[A1] Assume the Axiom of Choice ([[def-axiom-of-choice]]).

[F1] The unbounded self-adjoint spectral theorem supplies $E$ and the scalar spectral measures $\mu_\xi$ ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]], [[def-unbounded-integral-against-a-pvm]]).

[F2] The unbounded Borel calculus satisfies $\|f(E)\xi\|^2=\int |f|^2\,d\mu_\xi$ on its stated squared-integrability domain ([[thm-unbounded-borel-functional-calculus]]).

[F3] Dominated convergence applies on an arbitrary measure space when one integrable majorant dominates the sequence ([[thm-dominated-convergence]]).



1.1 Write $z=t+is$ with $0\leq s\leq1$. The spectral multiplier $f_z(\lambda)=\exp(-iz\log(\lambda)/2)$ has $|f_z(\lambda)|^2=\lambda^s$. Since $\lambda^s\leq1+\lambda$ for every $\lambda>0$ and $s\in[0,1]$, [F2] gives $$\|A^{-iz/2}\xi\|^2=\int\lambda^s\,d\mu_\xi\leq\int(1+\lambda)\,d\mu_\xi=\|\xi\|^2+\|A^{1/2}\xi\|^2.$$ This also proves that every vector named in the Statement is in the domain of the indicated multiplier. [A1, F1, F2, given]

2.1 If $z_n=t_n+is_n\to z=t+is$ in $S$, then $f_{z_n}(\lambda)\to f_z(\lambda)$ pointwise and $$|f_{z_n}(\lambda)-f_z(\lambda)|^2\leq2\lambda^{s_n}+2\lambda^s\leq4(1+\lambda).$$ The majorant is integrable by $\xi\in D(A^{1/2})$. Dominated convergence applied to the scalar spectral measure therefore gives $\|A^{-iz_n/2}\xi-A^{-iz/2}\xi\|^2\to0$, proving strong continuity on the closed strip. [F1, F2, F3, step 1.1]

2.2 Fix $z_0$ with $s_0=\operatorname{Im}z_0\in(0,1)$. Choose $\delta>0$ so that $2\delta<s_0<1-2\delta$. For $|h|\leq\delta$, the scalar difference quotient of $f_z(\lambda)$ along the segment from $z_0$ to $z_0+h$ is bounded by $$\frac12|\log\lambda|\sup_{0\leq r\leq1}\lambda^{\operatorname{Im}(z_0+rh)/2}.$$ When $0<\lambda\leq1$ this is bounded by $\frac12|\log\lambda|\lambda^{\delta/2}$, and when $\lambda\geq1$ it is bounded by $\frac12|\log\lambda|\lambda^{(1-\delta)/2}$. The first expression has a finite supremum and the second is bounded by a constant depending on $\delta$ times $\lambda^{1/2}$. Thus the difference quotients are dominated in $L^2(\mu_\xi)$ by a constant times $1+\lambda^{1/2}$. Their pointwise limit is $(-i/2)(\log\lambda)f_{z_0}(\lambda)$. Dominated convergence in the spectral norm proves that the vector difference quotient converges in $H$ to the spectral integral of this limit. Hence the vector map is complex-differentiable at $z_0$. [F1, F2, F3, step 1.1]

3.1 Step 2.2 applies at every point of $S^\circ$, so the vector map is norm-holomorphic throughout the open strip. The estimate and closed-strip continuity were proved in steps 1.1–1.2. [step 1.1, step 2.1, step 2.2] ∎
