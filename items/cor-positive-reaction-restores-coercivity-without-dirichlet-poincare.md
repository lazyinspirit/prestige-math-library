---
id: "cor-positive-reaction-restores-coercivity-without-dirichlet-poincare"
kind: "corollary"
title: "A positive reaction term restores coercivity without Poincar\\'e"
status: draft
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 5
deps:
  - "def-bounded-coercive-and-symmetric-sesquilinear-forms"
  - "def-complex-conjugate-real-imaginary-part-and-modulus"
  - "def-countable-choice"
  - "def-essential-supremum-with-respect-to-a-measure"
  - "def-l-infinity-on-a-measure-space"
  - "def-sobolev-space-wkp-and-its-norm"
  - "def-uniformly-elliptic-divergence-form-operator"
  - "lem-elliptic-form-is-well-defined-and-bounded"
  - "lem-w-one-two-is-a-hilbert-space"
  - "thm-cauchy-schwarz-and-the-euclidean-norm"
  - "thm-holder-inequality-for-integrals"
  - "thm-lax-milgram"
proof_strategy: "direct"
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§4.7, Theorem 4.21's remark that a positive $c$ with $b=0$ can be taken with $\\gamma=\\theta-c_0$, printed p. 103"
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford, complete 223-page author scan)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 7, the coercivity discussion for the shifted problem, printed pp. 72–75"
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "§5.1, the generalized Poisson operator with drift and reaction, printed p. 101. This is operator background; the boundary-independent coercivity argument is proved here."
---

## Statement

Assume Countable Choice. Let $\Omega\subseteq\mathbb R^n$ be open (no boundedness and no Dirichlet boundary condition assumed), and let $a$ be the divergence form of [[def-uniformly-elliptic-divergence-form-operator]] on $H^1(\Omega)$ with ellipticity constant $\theta$, coefficient bounds $M_a,M_b,M_c$ where $|b^i|\le M_b$ componentwise, and $$\operatorname{ess\,inf}_{\Omega}\operatorname{Re}c\ge c_0>0,\qquad \sqrt n\,M_b<2\min(\theta,c_0).$$ Then $a$ is coercive on $\Omega$ with constant $\alpha:=\min(\theta,c_0)-\sqrt n\,M_b/2>0$: $$\operatorname{Re}a(u,u)\ge\alpha\|u\|_{H^1(\Omega)}^2\qquad(u\in H^1(\Omega)) .$$ Consequently [[thm-lax-milgram]] applies on the Hilbert space $H^1(\Omega)$ and gives, for every bounded conjugate-linear functional $F$ on $H^1(\Omega)$, a unique $u\in H^1(\Omega)$ with $a(u,v)=F(v)$ for all $v$: a second legitimate coercivity mechanism, driven by the reaction coefficient rather than by a Poincar\'e inequality or boundary condition. When $b\equiv0$, taking $M_b=0$, the condition is $\operatorname{ess\,inf}\operatorname{Re}c>0$ only.

## Facts & Assumptions

**Given:** Countable Choice; an open $\Omega\subseteq\mathbb R^n$; divergence-form coefficients $a^{ij},b^i,c$ with bounds $M_a,M_b,M_c$, where $|b^i|\le M_b$ componentwise, and ellipticity constant $\theta>0$; $\operatorname{ess\,inf}_\Omega\operatorname{Re}c\ge c_0>0$; the assumption $\sqrt n\,M_b<2\min(\theta,c_0)$; and $\alpha:=\min(\theta,c_0)-\sqrt n\,M_b/2>0$.

[F1] Uniform ellipticity gives for a.e. $x$ and $\xi=Du(x)$: $\operatorname{Re}(a^{ij}D_ju\overline{D_iu})\ge\theta|Du|^2$; the coefficient bounds give $|b^i|\le M_b$ and $|c|\le M_c$ a.e. ([[def-uniformly-elliptic-divergence-form-operator]], [[def-essential-supremum-with-respect-to-a-measure]], [[def-l-infinity-on-a-measure-space]]).

[F2] The form $a$ is bounded on $H^1(\Omega)$ by [[lem-elliptic-form-is-well-defined-and-bounded]], and $H^1(\Omega)$ is a Hilbert space ([[lem-w-one-two-is-a-hilbert-space]], [[def-sobolev-space-wkp-and-its-norm]]).

[F3] Estimates: $\operatorname{Re}\int_\Omega cu\overline u\,dx=\int_\Omega(\operatorname{Re}c)|u|^2\,dx\ge c_0\|u\|_{L^2}^2$; componentwise $|b^i|\le M_b$ and $\sum_i|D_i u|\le\sqrt n\,|Du|$ imply $\bigl|\int_\Omega b^iD_iu\overline u\,dx\bigr|\le\sqrt n\,M_b\|Du\|_{L^2}\|u\|_{L^2}$ by pointwise Cauchy--Schwarz and H\"older; also $2ab\le a^2+b^2$ for nonnegative reals ([[thm-holder-inequality-for-integrals]], [[thm-cauchy-schwarz-and-the-euclidean-norm]], [[def-complex-conjugate-real-imaginary-part-and-modulus]]).

[F4] Lax--Milgram applies to bounded coercive forms on Hilbert spaces ([[thm-lax-milgram]], [[def-bounded-coercive-and-symmetric-sesquilinear-forms]]).



## Proof

1.1 Pointwise decomposition and integration: by [F1], for almost every $x$ the principal integrand satisfies $\operatorname{Re}(a^{ij}D_ju\overline{D_iu})\ge\theta|Du(x)|^2$, and integrating (the principal term is absolutely convergent by [F2]) gives $$\operatorname{Re}\int_\Omega a^{ij}D_ju\overline{D_iu}\,dx\ge\theta\|Du\|_{L^2}^2 .$$ [F1, F2]

2.1 Drift and reaction terms: taking real parts of the definition of $a$, $$\operatorname{Re}a(u,u)\ge\theta\|Du\|_{L^2}^2-\sqrt n\,M_b\|Du\|_{L^2}\|u\|_{L^2}+c_0\|u\|_{L^2}^2,$$ where the drift term is bounded in absolute value by $\sqrt n\,M_b\|Du\|_{L^2}\|u\|_{L^2}$ via [F3], and the reaction term is bounded below by $c_0\|u\|_{L^2}^2$ using $\operatorname{Re}c\ge c_0$ a.e. [F1, F3, step 1.1, algebra]

3.1 Coercivity: applying $2ab\le a^2+b^2$ to $a=\|Du\|_{L^2}$, $b=\|u\|_{L^2}$ with weight $\sqrt n\,M_b$ gives $\sqrt n\,M_b\|Du\|\,\|u\|\le\frac{\sqrt n\,M_b}2(\|Du\|_{L^2}^2+\|u\|_{L^2}^2)$, hence $$\operatorname{Re}a(u,u)\ge\Bigl(\theta-\frac{\sqrt n\,M_b}2\Bigr)\|Du\|_{L^2}^2+\Bigl(c_0-\frac{\sqrt n\,M_b}2\Bigr)\|u\|_{L^2}^2\ge\alpha\|u\|_{H^1(\Omega)}^2$$ with $\alpha=\min(\theta,c_0)-\frac{\sqrt n\,M_b}2>0$, because $\|u\|_{H^1}^2=\|u\|_{L^2}^2+\|Du\|_{L^2}^2$ and both coefficients $\theta-\frac{\sqrt n\,M_b}2$, $c_0-\frac{\sqrt n\,M_b}2$ are at least $\alpha$ by the smallness hypothesis. [F3, step 2.1, algebra]

4.1 Consequences: $a$ is bounded by [F2] and coercive with constant $\alpha$ by step 3.1, so Lax--Milgram applies on the Hilbert space $H^1(\Omega)$: for every bounded conjugate-linear functional $F$ there is a unique $u\in H^1(\Omega)$ with $a(u,v)=F(v)$ for all $v$. No Poincar\'e inequality, boundary condition or integration by parts was used; when $b\equiv0$, taking $M_b=0$, the hypothesis reduces to $\operatorname{ess\,inf}\operatorname{Re}c>0$. [F2, F4, step 3.1] ∎ 
