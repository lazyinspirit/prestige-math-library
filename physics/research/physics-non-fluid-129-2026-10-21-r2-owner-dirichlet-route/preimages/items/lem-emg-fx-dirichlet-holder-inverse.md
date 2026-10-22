---
id: lem-emg-fx-dirichlet-holder-inverse
kind: lemma
title: Dirichlet Hölder inverse required by the constraint branch
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 3
proof_strategy: direct
deps:
  - def-emg-fx-dirichlet-constraint-problem
  - def-sobolev-space-wkp-and-its-norm
  - def-wkp-zero-as-a-sobolev-closure
  - def-weak-dirichlet-solution-for-a-divergence-form-operator
  - def-countable-choice
  - def-axiom-of-choice
  - cor-cauchy-schwarz-inequality-for-l-two
  - lem-w-one-two-is-a-hilbert-space
  - thm-lax-milgram
  - thm-poincare-inequality-for-w-one-p-zero
  - thm-global-schauder-regularity-for-the-weak-dirichlet-laplacian
  - thm-weak-maximum-principle-for-the-laplacian
dependency_roles:
  def-emg-fx-dirichlet-constraint-problem: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  def-wkp-zero-as-a-sobolev-closure: mathematical-premise
  def-weak-dirichlet-solution-for-a-divergence-form-operator: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  lem-w-one-two-is-a-hilbert-space: mathematical-premise
  thm-lax-milgram: mathematical-premise
  thm-poincare-inequality-for-w-one-p-zero: mathematical-premise
  thm-global-schauder-regularity-for-the-weak-dirichlet-laplacian: mathematical-premise
  thm-weak-maximum-principle-for-the-laplacian: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Gilbarg and Neil S. Trudinger, Elliptic Partial Differential Equations of Second Order (2001)"
      url: "https://djvu.online/file/jxRRleAzbYjsl"
      locator: "Chapter 4, Theorems 4.6 and 4.8 on Poisson Hölder estimates; Chapter 6, Lemma 6.18 and Theorem 6.19, printed pp. 111-112."
    - title: "Armin Schikorra, Partial Differential Equations I & II (version October 1, 2025; complete 281-page graduate lecture notes)"
      url: "https://sites.pitt.edu/~armin/pde2022/pde.pdf"
      locator: "§8.8, Theorem 8.28, and §8.9, Theorem 8.30, printed pp. 151-153; §8.8 states the boundary estimate and refers to Gilbarg-Trudinger for the flattening proof."
    - title: "Xu-Jia Wang, Schauder Estimates for Elliptic and Parabolic Equations (Australian National University, 2006; complete 7-page note)"
      url: "https://maths-people.anu.edu.au/~wang/publications/3-Schauder-esti.pdf"
      locator: "§1, Theorems 1 and 10, printed pp. 1-2; Theorem 10 gives the half-ball zero-boundary estimate by odd reflection for an already classical solution."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice and Countable Choice. For the domain $\Omega$ and exponent $\alpha$ of [[def-emg-fx-dirichlet-constraint-problem]], let $X=\{u\in C^{2,\alpha}(\overline\Omega):u|_{\partial\Omega}=0\}$ and $Y=C^{0,\alpha}(\overline\Omega)$ with the full norms specified there; the zero subscript denotes zero boundary restriction, not compact support. Then

$$-\Delta:X\longrightarrow Y$$

is a bounded linear isomorphism. Consequently $A:=-8\Delta:X\to Y$ is a bounded linear isomorphism and its inverse obeys $\|A^{-1}f\|_{C^{2,\alpha}}\leq C(\Omega,\alpha)\|f\|_{C^{0,\alpha}}$.

## Statement references

[[def-emg-fx-dirichlet-constraint-problem]]

[[thm-global-schauder-regularity-for-the-weak-dirichlet-laplacian]]

## Facts & Assumptions

**Given:** The Axiom of Choice and Countable Choice, the bounded smooth domain $\Omega\subset\mathbb R^3$, $0<\alpha<1$, and the real Hölder spaces $X,Y$ defined in [[def-emg-fx-dirichlet-constraint-problem]].

[A1] The weak Dirichlet regularity supplier assumes both the Axiom of Choice and Countable Choice. [[def-axiom-of-choice]] [[def-countable-choice]]

[F1] [[def-emg-fx-dirichlet-constraint-problem]]: $X$ is the zero-boundary subspace of $C^{2,\alpha}(\overline\Omega)$, $Y=C^{0,\alpha}(\overline\Omega)$, and both use the displayed full Hölder norms.

[F2] [[def-sobolev-space-wkp-and-its-norm]] and [[def-wkp-zero-as-a-sobolev-closure]]: $H^1(\Omega)=W^{1,2}(\Omega)$ consists of square-integrable functions with square-integrable weak first derivatives, and $H^1_0(\Omega)$ is the closure of $C^\infty_c(\Omega)$ in that norm. [[lem-w-one-two-is-a-hilbert-space]]: $H^1_0(\Omega)$ is a real Hilbert space for the norm $\|v\|_{H^1}^2=\|v\|_{L^2}^2+\|\nabla v\|_{L^2}^2$.

[F3] [[cor-cauchy-schwarz-inequality-for-l-two]]: $\left|\int_\Omega f v\right|\leq\|f\|_{L^2}\|v\|_{L^2}$.

[F4] [[thm-poincare-inequality-for-w-one-p-zero]]: for an open set bounded in one direction and $p=2$, $\|v\|_{L^2}\leq C_P\|\nabla v\|_{L^2}$ for every $v\in H^1_0(\Omega)$. The bounded domain here satisfies that geometric hypothesis.

[F5] [[thm-lax-milgram]]: on a real Hilbert space, a bounded coercive bilinear form and a bounded linear functional determine a unique weak solution.

[F6] [[thm-global-schauder-regularity-for-the-weak-dirichlet-laplacian]]: if $n\geq2$, $0<\alpha<1$, $\Omega$ is bounded with $C^{2,\alpha}$ boundary, and $f\in C^{0,\alpha}(\overline\Omega)$, then under the Axiom of Choice and Countable Choice the unique weak zero-boundary solution of $-\Delta u=f$ belongs to $C^{2,\alpha}(\overline\Omega)$ and satisfies $\|u\|_{C^{2,\alpha}}\leq C(n,\alpha,\Omega)\|f\|_{C^{0,\alpha}}$.

[F7] [[thm-weak-maximum-principle-for-the-laplacian]]: if $w\in C^2(\Omega)\cap C(\overline\Omega)$ and $\Delta w\geq0$, then $\max_{\overline\Omega}w=\max_{\partial\Omega}w$.

[F8] [[def-weak-dirichlet-solution-for-a-divergence-form-operator]]: for the Laplacian, the weak zero-boundary equation is $\int_\Omega\nabla u\cdot\nabla w=\int_\Omega(f/8)w$ for every $w\in H^1_0(\Omega)$.

## Proof

**Given:** The hypotheses above and an arbitrary $f\in Y$.

1.1 Weak solvability by Lax-Milgram. Put $H=H^1_0(\Omega)$, $a(v,w)=\int_\Omega\nabla v\cdot\nabla w$, and $\ell_f(w)=\frac18\int_\Omega f w$. Since $\Omega$ is bounded, $f\in C^{0,\alpha}(\overline\Omega)$ is in $L^2(\Omega)$. By [F3] and [F4], $|\ell_f(w)|\leq\frac18 C_P\|f\|_{L^2}\|\nabla w\|_{L^2}\leq\frac18 C_P\|f\|_{L^2}\|w\|_{H^1}$. The form is bounded because $|a(v,w)|\leq\|v\|_{H^1}\|w\|_{H^1}$, and it is coercive because $\|w\|_{H^1}^2\leq(1+C_P^2)\|\nabla w\|_{L^2}^2=(1+C_P^2)a(w,w)$. By [F2] and [F5], there is a unique $u_f\in H^1_0(\Omega)$ satisfying $a(u_f,w)=\ell_f(w)$ for every $w\in H$; if $f=0$, then $\ell_f=0$, so $u_f=0$ is that unique solution. [F8] identifies the weak equation with $-\Delta u_f=f/8$. [given, A1, F2, F3, F4, F5, F8, algebra]

2.1 Schauder regularity and surjectivity. The domain is bounded and $C^\infty$, hence is a bounded $C^{2,\alpha}$ domain; $f/8\in C^{0,\alpha}(\overline\Omega)$. Apply [F6] to the weak solution from step 1.1 with right-hand side $f/8$ and boundary data zero. It follows that $u_f\in X$, $-\Delta u_f=f/8$ pointwise, and $\|u_f\|_{C^{2,\alpha}}\leq C(\Omega,\alpha)\|f\|_{C^{0,\alpha}}/8$. Thus $A u_f=f$ for every $f\in Y$, so $A$ is surjective and the displayed bound holds for its inverse. [given, A1, F1, F6, step 1.1, algebra]

3.1 Injectivity and boundedness. For any $w\in X$, the definition of the $C^{2,\alpha}$ norm gives $\|\Delta w\|_{C^{0,\alpha}}\leq C\|w\|_{C^{2,\alpha}}$, so $A$ is bounded and linear. If $Aw=0$, then $\Delta w=0$ and $w=0$ on $\partial\Omega$. Apply [F7] to $w$ and $-w$; each has Laplacian zero and boundary maximum zero, so $w\leq0$ and $w\geq0$, respectively. Hence $w=0$, which proves injectivity. Therefore $A$ is a bounded linear isomorphism; since $A=-8\Delta$, the same is true of $-\Delta$. [F1, F7, step 2.1, algebra] ∎

## Remarks

The Hölder inverse used here is supplied by the exact published mathematical theorem [[thm-global-schauder-regularity-for-the-weak-dirichlet-laplacian]], whose proof upgrades weak solutions using the boundary Schauder theory. This item also constructs the weak solution with the declared Poincare and Lax-Milgram inputs.
