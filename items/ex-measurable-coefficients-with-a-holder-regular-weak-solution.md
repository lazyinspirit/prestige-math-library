---
id: ex-measurable-coefficients-with-a-holder-regular-weak-solution
kind: example
title: "Measurable coefficients with a Holder-regular weak solution"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 11
deps: [thm-de-giorgi-nash-interior-holder-regularity, def-local-weak-solution-for-a-divergence-form-operator, def-uniformly-elliptic-divergence-form-operator, def-local-holder-and-c-two-alpha-norms-on-euclidean-balls, def-hk-and-hk-zero-notation, def-weak-derivative-of-a-locally-integrable-function, thm-holder-inequality-for-integrals, def-countable-choice, def-axiom-of-choice, thm-sobolev-chain-rule-for-globally-lipschitz-scalar-functions, def-wkp-zero-as-a-sobolev-closure]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Bozhidar Velichkov, Elliptic PDEs: Teorema di De Giorgi (Universita di Pisa; complete 7-page note, in Italian)"
      url: "https://people.dm.unipi.it/velichkov/PDE-capitolo-3-parte-3-teorema-di-De-Giorgi-v3.pdf"
      locator: "Teorema 1 with the measurable uniformly elliptic matrix (1) and the Holder conclusion, printed pp. 1-2 (read in full)"
    - title: "Brian Krummel, DeGiorgi-Nash lecture notes (15 March 2016; complete 9-page notes)"
      url: "https://www2.math.upenn.edu/~qze/notes/ELLIPTIC%20PDE/weakHarnack.pdf"
      locator: "The standing hypotheses on a^{ij} in L-infinity with (1), printed pp. 1-2 (read in full)"
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford University; complete author scan, 118 sheets reproducing the 223 printed pages of the manuscript, two logical pages per sheet)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 18, Theorem 3 with the Holder exponent depending only on the structure constants, printed pp. 213-214 (read in full)"
verification:
  precheck: pass
---

## Example

**Example.** On the annulus $\Omega=\{x\in\mathbb R^2:\tfrac14<|x|<1\}$ let
$$a(x)=\begin{cases}1,&|x|\le\tfrac12,\\ 4,&|x|>\tfrac12,\end{cases}\qquad u(x)=\begin{cases}\log|x|,&\tfrac14<|x|\le\tfrac12,\\ \tfrac14\log|x|-\tfrac34\log2,&\tfrac12<|x|<1.\end{cases}$$
Then $a$ is measurable, bounded and uniformly elliptic on $\Omega$ with $\theta=1$ and $M_a=4$, and $u\in H^1(\Omega)\cap C^{0,1}(\Omega)$ is continuous across $|x|=\tfrac12$ but has a discontinuous radial derivative there (it drops from $2$ to $\tfrac12$), so $u\notin C^1(\Omega)$. The a.e. flux $a\nabla u$ has the smooth representative $x/|x|^2$ on $\Omega$, which is divergence-free, and it realizes $u$ as a weak solution of $-\operatorname{div}(a\nabla u)=0$ in the local sense of [[def-local-weak-solution-for-a-divergence-form-operator]]. The coefficient is not continuous, yet $u$ is Holder continuous of every exponent $\alpha<1$, in accordance with [[thm-de-giorgi-nash-interior-holder-regularity]]; the example also shows that this conclusion cannot be improved to $C^1$.

## Facts & Assumptions

**Given:** The Axiom of Choice and Countable Choice; the annulus $\Omega=\{x\in\mathbb R^2:\tfrac14<|x|<1\}$; the radial coefficient $a$ equal to $1$ for $|x|<\tfrac12$ and $4$ for $|x|>\tfrac12$; and the radial function $u$ defined by the two displayed formulas.

[F1] Uniform ellipticity and boundedness: $a$ is measurable, $1\le a\le4$ on $\Omega$, and the matrix $A=a\,\mathrm{Id}$ satisfies $|\xi|^2\le\langle A(x)\xi,\xi\rangle\le16|\xi|^2$ for all $\xi\in\mathbb R^2$, so the ellipticity constant is $\theta=1$ and the coefficient bound is $M_a=4$ in the convention of [[def-uniformly-elliptic-divergence-form-operator]] ([[def-hk-and-hk-zero-notation]]).

[F2] Regularity of the pieces: on each of the open annuli $U_1=\{\tfrac14<|x|<\tfrac12\}$ and $U_2=\{\tfrac12<|x|<1\}$ the function $u$ is smooth and radial, with $\nabla u=\frac{1}{r}\frac{\partial u}{\partial r}x$ and $\partial_ru=1/r$ on $U_1$, $\partial_ru=1/(4r)$ on $U_2$; the glued function lies in $H^1(\Omega)$ with these a.e. gradients. Indeed $u=G(|x|)$, where $G(t)=-\log4$ for $t\le1/4$, $G(t)=\log t$ for $1/4<t\le1/2$, and $G(t)=\tfrac14\log t-\tfrac34\log2$ for $t>1/2$. This is a globally $4$-Lipschitz scalar function. Since $x\mapsto|x|$ is smooth on $\overline\Omega$ with gradient $x/|x|$ and belongs to $H^1(\Omega)$, the Sobolev chain rule establishes the asserted membership and gradient ([[thm-sobolev-chain-rule-for-globally-lipschitz-scalar-functions]]) ([[def-weak-derivative-of-a-locally-integrable-function]], [[thm-holder-inequality-for-integrals]]).

[F3] Continuity and differentiability across the interface: at $|x|=\tfrac12$ the first formula gives $\log\tfrac12=-\log2$ and the second gives $\tfrac14\log\tfrac12-\tfrac34\log2=-\log2$, so $u$ is continuous there; the radial derivative is $2$ from the inner side and $\tfrac12$ from the outer side, so the derivative is discontinuous and $u\notin C^1(\Omega)$, while $\Omega$ is bounded away from the origin in polar coordinates, so $u$ is Lipschitz and hence Holder of every exponent $\alpha<1$ ([[def-local-holder-and-c-two-alpha-norms-on-euclidean-balls]]).

[F4] The flux: $a\nabla u=x/|x|^2$ a.e. on $\Omega$, because $a(r)\partial_ru(r)=1/r$ for both branches of $a$ and of $u$; the field $x/|x|^2$ is smooth on $\Omega$, $\operatorname{div}(x/|x|^2)=0$ there, and $x/|x|^2=\nabla\log|x|$ ([[def-local-weak-solution-for-a-divergence-form-operator]]).

[F5] Local weak solutions: $u\in H^1(\Omega)$ is a local weak solution of $-\operatorname{div}(a\nabla u)=0$ when $\int_\Omega a(x)\nabla u\cdot\nabla v\,dx=0$ for every $v\in H^1_0(\Omega)$; the De Giorgi-Nash theorem gives, for such a solution with measurable uniformly elliptic coefficients, a Holder representative with exponent depending only on $n,\theta,M_a$ ([[def-local-weak-solution-for-a-divergence-form-operator]], [[thm-de-giorgi-nash-interior-holder-regularity]]).

## Verification

1.1 The coefficient satisfies the structural hypotheses. By [F1] the coefficient is measurable, bounded by $4$ and bounded below by $1$, so the associated divergence-form operator with $A=a\,\mathrm{Id}$ is uniformly elliptic with $\theta=1$ and $M_a=4$; in particular the hypotheses of the De Giorgi-Nash theorem are satisfied although $a$ is not continuous. [given, F1]

2.1 The flux is divergence-free and realizes the weak equation. By [F2]-[F4], $a\nabla u=x/|x|^2$ a.e. on $\Omega$. This smooth field has divergence $2/|x|^2-2|x|^2/|x|^4=0$. For $v\in C_c^\infty(\Omega)$, integration by parts therefore gives $\int_\Omega a\nabla u\cdot\nabla v=0$. Approximate an arbitrary $v\in H^1_0(\Omega)$ by these compact smooth tests; Cauchy--Schwarz passes the integral because $x/|x|^2\in L^2(\Omega)$. Thus the identity holds for every $H^1_0$ test; hence $u$ is a local weak solution of $-\operatorname{div}(a\nabla u)=0$ in the sense of [F5]. [step 1.1, F2, F3, F4, F5]

3.1 The conclusions about regularity. Since $u$ is Lipschitz on $\Omega$ by [F3], it is Holder continuous of every exponent $\alpha<1$, consistently with the De Giorgi-Nash conclusion but with no $C^1$ regularity: the radial derivative jumps from $2$ to $\tfrac12$ at $|x|=\tfrac12$, so $u\notin C^1(\Omega)$; the example therefore exhibits a weak solution whose regularity comes from the structure constants alone, while the measurable coefficient fails to be continuous. All verifications use the explicit formulas and the cited interface items, with no choice principle beyond the declared Axiom of Choice and Countable Choice. [step 2.1, F3, F5] ∎
