---
id: lem-em-zero-boundary-coercivity
kind: lemma
domain: mathematics
title: "The gradient norm dominates the H-one norm on zero-boundary Sobolev space"
status: draft
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
dependency_level: 0
deps: [def-sobolev-space-wkp-and-its-norm, def-wkp-zero-as-a-sobolev-closure, thm-sobolev-spaces-are-banach-spaces, def-norm-and-normed-space, def-axiom-of-choice, def-countable-choice, lem-l-two-with-the-integral-pairing-is-a-hilbert-space, thm-parallelogram-law, cor-cauchy-schwarz-inequality-for-l-two, thm-newton-leibniz-with-interior-derivative, thm-tonelli-theorem-for-sigma-finite-product-spaces]
dependency_roles:
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  def-wkp-zero-as-a-sobolev-closure: mathematical-premise
  thm-sobolev-spaces-are-banach-spaces: mathematical-premise
  def-norm-and-normed-space: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-l-two-with-the-integral-pairing-is-a-hilbert-space: mathematical-premise
  thm-parallelogram-law: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  thm-newton-leibniz-with-interior-derivative: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. K. Hunter, Notes on Partial Differential Equations (University of California, Davis; revised 6/18/2014), Chapter 4.4 (Theorem 4.9, Eq. 4.11: the Poincare inequality for H_0^1)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Chapter 4.4, Theorem 4.9 and equation (4.11): the source's Poincare inequality on a cube for H_0^1 functions. The proof here is the design's local box-coordinate argument giving the explicit squared constant (2L)^2 and the nonsquared bound; the density passage and the Hilbert-norm bookkeeping are supplied locally."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]), used to invoke the published Sobolev completeness theorem through its Countable-Choice interface ([[def-countable-choice]]). Let $\Omega\subseteq(-L,L)^3$ be bounded and open for some $L>0$, and write $H^1(\Omega)=W^{1,2}(\Omega;\mathbb R)$ with the norm of [[def-sobolev-space-wkp-and-its-norm]], and $H_0^1(\Omega):=W_0^{1,2}(\Omega;\mathbb R)$, the closure of $C_c^\infty(\Omega;\mathbb R)$ in that norm ([[def-wkp-zero-as-a-sobolev-closure]]). Then $H^1(\Omega)$ is complete, $H_0^1(\Omega)$ is a closed subspace and is complete, the $W^{1,2}$ quadratic norm is a Hilbert norm (its coordinate $L^2$ pairings satisfy the parallelogram law), and

$$\|v\|_{L^2}^2\le(2L)^2\|\partial_1v\|_{L^2}^2\le(2L)^2\|\nabla v\|_{L^2}^2\qquad\text{for every }v\in H_0^1(\Omega).$$

In particular $\|v\|_{L^2}\le2L\|\nabla v\|_{L^2}$ and the gradient norm is equivalent to the full $H^1$ norm on $H_0^1(\Omega)$. The argument needs neither a smooth domain nor a general boundary-trace theorem, and no choice beyond the completeness interface is used.

## Facts & Assumptions
**Given:** The Axiom of Choice $\mathrm{AC}$ (so Countable Choice $\mathrm{AC}_\omega$ holds), a number $L>0$, and a bounded open $\Omega\subseteq(-L,L)^3$. Write $H^1=W^{1,2}(\Omega;\mathbb R)$ and $H_0^1=W_0^{1,2}(\Omega;\mathbb R)$, with $\|u\|_{W}^2=\|u\|_2^2+\|\nabla u\|_2^2=\|u\|_2^2+\sum_{j=1}^3\|\partial_ju\|_2^2$.

[A1] The Axiom of Choice implies the Axiom of Countable Choice ([[def-axiom-of-choice]], [[def-countable-choice]]).

[F1] **Sobolev spaces and norm.** For open $\Omega\subseteq\mathbb R^n$, $W^{k,p}(\Omega;\mathbb K)$ consists of the $L^p$ classes whose weak derivatives up to order $k$ are $L^p$ classes, the $D^\alpha u$ are well-defined classes and $\|u\|_{W^{k,p}}=(\sum_{|\alpha|\le k}\|D^\alpha u\|_{L^p}^p)^{1/p}$ for $p<\infty$; at $k=1$, $p=2$ this is $\|u\|_W^2=\|u\|_2^2+\|\nabla u\|_2^2$ ([[def-sobolev-space-wkp-and-its-norm]]). The definition leaves the norm axioms separate; under AC they are supplied by the complete-normed-space assertion of [F3].

[F2] **Zero-boundary space as a closure.** $W_0^{k,p}(\Omega;\mathbb K)$ is the metric closure of $C_c^\infty(\Omega;\mathbb K)$ in $W^{k,p}$, so $u\in W_0^{k,p}$ exactly when for every $\delta>0$ there is $\varphi\in C_c^\infty(\Omega;\mathbb K)$ with $\|u-\varphi\|_{W^{k,p}}<\delta$; no boundary trace is asserted ([[def-wkp-zero-as-a-sobolev-closure]]).

[F3] **Completeness.** Under the Axiom of Choice, $W^{k,p}(\Omega;\mathbb K)$ with the displayed norm is a complete normed space; at $k=1$, $p=2$, $H^1$ is complete ([[thm-sobolev-spaces-are-banach-spaces]]).

[F4] **Hilbert structure of real $L^2$.** Under $\mathrm{AC}_\omega$, real $L^2(\Omega)$ with $\langle f,g\rangle=\int fg$ is a real Hilbert space and $\langle f,f\rangle=\|f\|_2^2$ ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]); in every real inner-product space the parallelogram law $\|x+y\|^2+\|x-y\|^2=2\|x\|^2+2\|y\|^2$ holds ([[thm-parallelogram-law]]).

[F5] **Cauchy-Schwarz for $L^2$.** $\int|fg|\le\|f\|_2\|g\|_2$ for $f,g\in\mathcal L^2$ ([[cor-cauchy-schwarz-inequality-for-l-two]]); applied to $g=\mathbf 1_{(-L,L)}$ this gives $(\int_{-L}^L|f|)^2\le2L\int_{-L}^L|f|^2$.

[F6] **Newton-Leibniz with interior derivative.** If $G:[a,b]\to\mathbb R$ is continuous on $[a,b]$, differentiable on $(a,b)$, and $f$ is Riemann integrable with $f=G'$ on $(a,b)$, then $\int_a^b f=G(b)-G(a)$ ([[thm-newton-leibniz-with-interior-derivative]]).

[F7] **Tonelli.** A nonnegative measurable function on a $\sigma$-finite product may be integrated in either order ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F8] **Norm axioms.** A norm satisfies $\|x+y\|\le\|x\|+\|y\|$ and $\|x\|=0\Rightarrow x=0$ ([[def-norm-and-normed-space]]), so a limit of a sequence in a subspace that exists in an ambient complete space and is approached by elements of the subspace lies in its closure whenever the closure is closed for the norm topology.



## Proof

**Proof technique:** direct.

1.1 By [F3] the space $H^1$ is complete for $\|u\|_W^2=\|u\|_2^2+\|\nabla u\|_2^2$; the Axiom of Choice assumed here is used only to supply Countable Choice for that theorem by [A1]. [given, A1, F1, F3]

1.2 Let $v\in C_c^\infty(\Omega;\mathbb R)$ and extend it by zero to $\mathbb R^3$; fix $(x_2,x_3)\in\mathbb R^2$ and let $G(s)=v(s,x_2,x_3)$. Since $\Omega\subseteq(-L,L)^3$ and $v$ vanishes outside $\Omega$, $G$ is continuous on $[-L,L]$, differentiable on $(-L,L)$ with $G'=\partial_1v(\cdot,x_2,x_3)$ Riemann integrable, and $G(-L)=0$; hence [F6] gives $v(x_1,x_2,x_3)=\int_{-L}^{x_1}\partial_1v(s,x_2,x_3)\,ds$ for every $x_1\in(-L,L)$. [given, F6]

2.1 $H_0^1$ is a closed subspace of $H^1$ and is complete: if $(u_m)\subseteq H_0^1$ is $\|\cdot\|_W$-Cauchy, [F3] gives $u\in H^1$ with $\|u_m-u\|_W\to0$; given $\delta>0$ choose $m$ with $\|u_m-u\|_W<\delta$ and then, because $u_m\in H_0^1$, a test function $\varphi\in C_c^\infty(\Omega;\mathbb R)$ with $\|u_m-\varphi\|_W<\delta$ by [F2]; the triangle inequality [F8] gives $\|u-\varphi\|_W<2\delta$, so $u\in H_0^1$ by the characterization [F2], and $\|u_m-u\|_W\to0$ in the subspace norm; the identical argument with $H_0^1$ in place of the arbitrary subspace shows closedness of $H_0^1$ in $H^1$. [step 1.1, F1, F2, F3, F8, algebra]

2.2 The $W^{1,2}$ norm is a Hilbert norm: writing $\|u\|_W^2=\sum_{|\alpha|\le1}\|D^\alpha u\|_2^2$ by [F1], each summand $\|D^\alpha u\|_2^2$ is the squared norm of the real Hilbert space $L^2(\Omega)$ by [F4], so the parallelogram law [F4] holds for each summand and, summed over the finite index set $\{|\alpha|\le1\}$, for $\|\cdot\|_W^2$ itself; combining this with the completeness of step 1.1 exhibits $H^1$ and its closed subspace $H_0^1$ as real Hilbert spaces for the coordinate $L^2$ pairings. [step 1.1, F1, F4, algebra]

2.3 For such $v$ and every $x=(x_1,x_2,x_3)$, step 1.2 and the Cauchy-Schwarz bound [F5] give $|v(x)|^2\le\bigl(\int_{-L}^L|\partial_1v(s,x_2,x_3)|ds\bigr)^2\le2L\int_{-L}^L|\partial_1v(s,x_2,x_3)|^2ds$. [step 1.2, F5, algebra]

3.1 Integrating the inequality of step 2.3 over $(-L,L)^3$ and applying Tonelli [F7] to the nonnegative integrand gives $\|v\|_{L^2}^2\le2L\int_{(-L,L)^3}\int_{-L}^L|\partial_1v(s,x_2,x_3)|^2ds\,dx=(2L)^2\|\partial_1v\|_{L^2}^2$, because the $x_1$-integration contributes the length $2L$ and $v$ vanishes outside the box. [step 2.3, F7, algebra]

4.1 Fix $v\in H_0^1$ and $\delta>0$. By [F2] choose one $\varphi\in C_c^\infty(\Omega)$ with $\|\varphi-v\|_W<\delta$. The triangle inequality and step 3.1 give $\|v\|_2\le\delta+\|\varphi\|_2\le\delta+2L\|\partial_1\varphi\|_2\le 2L\|\partial_1v\|_2+(1+2L)\delta$. Since this holds for every $\delta>0$, $\|v\|_2\le2L\|\partial_1v\|_2$; squaring and using $\|\partial_1v\|_2\le\|\nabla v\|_2$ gives the displayed chain. This uses one approximant for each fixed tolerance, without selecting an approximation sequence. [step 3.1, F1, F2, F8, algebra]

5.1 Equivalence of norms on $H_0^1$: $\|\nabla v\|_2\le\|v\|_W$ is immediate from $\|v\|_W^2=\|v\|_2^2+\|\nabla v\|_2^2$ by [F1], while step 4.1 gives $\|v\|_W^2=\|v\|_2^2+\|\nabla v\|_2^2\le\bigl(1+(2L)^2\bigr)\|\nabla v\|_2^2$; the gradient norm is therefore equivalent to the full $W^{1,2}$ norm on $H_0^1$, both operators being applied to the weak derivatives of [F1] and no smoothness of $\Omega$ being used. This proves all the claims of the Statement, and no choice beyond the completeness interface [F3]/[A1] has been used. [step 2.1, step 2.2, step 4.1, F1, algebra] ∎
