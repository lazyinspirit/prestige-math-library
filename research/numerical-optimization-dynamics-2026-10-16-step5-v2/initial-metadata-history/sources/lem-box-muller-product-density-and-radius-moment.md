---
id: lem-box-muller-product-density-and-radius-moment
kind: lemma
title: "Box–Muller has a product Gaussian density and Rayleigh second moment"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - thm-rectangle-criterion-for-independent-random-elements
  - lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness
  - prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - def-countable-choice
  - def-independent-random-elements
  - def-probability-measure
  - def-real-exponential-function-and-e
  - thm-exponential-is-strictly-increasing
  - thm-derivative-of-exponential
  - thm-chain-rule
  - thm-natural-logarithm-laws
  - thm-of-square-roots
  - thm-continuous-preimages-of-borel-sets-are-borel
  - def-pi-via-first-positive-cosine-zero
  - def-natural-logarithm
  - thm-logarithm-derivative-and-integral
  - thm-derivative-of-an-inverse
  - thm-sine-and-cosine-parametrize-the-unit-circle
  - thm-sine-and-cosine-derivatives
  - thm-euclidean-inverse-function-theorem
  - thm-exponential-addition-formula
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Luc Devroye, Non-Uniform Random Variate Generation, Chapter V §4.4, Box–Muller method"
      url: "https://luc.devroye.org/chapter_five.pdf"
    - title: "E. M. Raz, Lecture Notes in Probability, Chapter 5, Exercise 5.2"
      url: "https://ma.huji.ac.il/~razk/Teaching/LectureNotes/LectureNotesProbability.pdf"
---

## Statement

Assume Countable Choice. Let $(U,V)$ have product Lebesgue probability law on $(0,1)^2$, and set
$$R=\sqrt{-2\log U},\quad \Theta=2\pi V,\quad Z=(R\cos\Theta,R\sin\Theta).$$
Then $Z$ has the Borel density
$$g(x,y)=\frac1{2\pi}e^{-(x^2+y^2)/2}=\phi(x)\phi(y),\qquad \phi(t)=\frac{e^{-t^2/2}}{\sqrt{2\pi}}.$$
In particular, its coordinates are independent with density $\phi$. Also $\mathbb P(R>r)=e^{-r^2/2}$ for $r\ge0$ and $\mathbb E R^2=2$.

## Facts & Assumptions

**Given:** Countable Choice and the joint-uniform pair and transform in the Statement.

[F1] For a $C^1$ diffeomorphism between open Euclidean sets, nonnegative Borel change of variables is valid under Countable Choice. [[lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness]]

[F2] A coordinate hyperplane has two-dimensional Lebesgue measure zero under Countable Choice. [[prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null]]

[F3] Tonelli's theorem factors nonnegative integrals on sigma-finite product spaces and allows order exchange. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[F4] Independence means independence of the generated sigma-algebras; factorization of probabilities on every finite Borel rectangle is an equivalent criterion. [[def-independent-random-elements]], [[thm-rectangle-criterion-for-independent-random-elements]]

[F5] A probability measure has total mass one, and its pushforward law is again a probability measure. [[def-probability-measure]]

[F6] Continuous maps pull Borel functions back to Borel functions. [[thm-continuous-preimages-of-borel-sets-are-borel]]

[F7] The exponential derivative, chain rule, logarithm identity, and square-root law justify the displayed transform derivatives and radial inverse; $\pi$ is the fixed positive constant of the trigonometric coordinate. [[def-real-exponential-function-and-e]], [[thm-exponential-is-strictly-increasing]], [[thm-derivative-of-exponential]], [[thm-chain-rule]], [[thm-natural-logarithm-laws]], [[thm-of-square-roots]], [[def-pi-via-first-positive-cosine-zero]]

[F8] The logarithm is the inverse of the exponential: $\exp(\log u)=u$ for $u>0$ and $\log(\exp t)=t$ for real $t$. Also $\log'(u)=1/u$; differentiating the inverse of $s\mapsto s^2$ on $(0,\infty)$ gives $(\sqrt t)'=1/(2\sqrt t)$. Exponentials satisfy $\exp(s+t)=\exp(s)\exp(t)$. [[def-natural-logarithm]], [[thm-logarithm-derivative-and-integral]], [[thm-derivative-of-an-inverse]], [[thm-exponential-addition-formula]]

[F9] The map $\theta\mapsto(\cos\theta,\sin\theta)$ bijects $[0,2\pi)$ onto the unit circle, and its component derivatives are $-\sin\theta$ and $\cos\theta$. A $C^1$ map between open Euclidean sets with invertible derivative has a local $C^1$ inverse with the inverse derivative. [[thm-sine-and-cosine-parametrize-the-unit-circle]], [[thm-sine-and-cosine-derivatives]], [[thm-euclidean-inverse-function-theorem]]

[A1] Countable Choice is the only choice assumption used by the change-of-variables and null-axis suppliers; no use is made of full Choice. [[def-countable-choice]]

## Proof

**Given:** As in the Statement. Let $D=\mathbb R^2\setminus\{(x,0):x\ge0\}$, an open slit plane. The map
$$G(x,y)=\left(e^{-(x^2+y^2)/2},\frac{\arg_{(0,2\pi)}(x+iy)}{2\pi}\right)$$
will be shown to be the inverse of the displayed Box–Muller map $T$ from $(0,1)^2$ onto $D$.

1.1 By [F7]–[F8], $r(u)=\sqrt{-2\log u}$ is positive on $(0,1)$, with inverse $u=e^{-r^2/2}$ for $r>0$. By [F9], the angles $2\pi v$ for $0<v<1$ parametrize the unit circle with $(1,0)$ removed exactly once. Thus $T$ is bijective onto $D$, with inverse $G$. The scalar derivatives give $r'(u)=-1/(u r(u))$, so $T$ is $C^1$ and $\det DT(u,v)=2\pi r(u)r'(u)=-2\pi/u\ne0$. The local inverse theorem [F9], together with global bijectivity, makes $G$ a $C^1$ inverse on $D$, with $|\det DG(x,y)|=e^{-(x^2+y^2)/2}/(2\pi)$. [given, F7, F8, F9, algebra]

2.1 For every nonnegative Borel $h$ on $D$, [F6] makes $h\circ T$ Borel. Apply [F1] to $G:D\to(0,1)^2$ with integrand $h\circ T$ on its target. Since $(U,V)$ has product Lebesgue law, this gives $\mathbb E[h(Z)]=\int_D h(x,y)g(x,y)\,dx\,dy$. The omitted nonnegative $x$-axis is Borel and null by [F2], and $Z$ always lies in $D$, so $g$ is the density on all of $\mathbb R^2$. [given, F1, F2, F6, A1, step 1.1]

3.1 By [F5], the pushforward law has total mass one, so its density integrates to $1$. By [F3] and the exponential addition law [F8], writing $A=\int_{\mathbb R}e^{-t^2/2}\,dt\in(0,\infty]$, we have $1=(2\pi)^{-1}A^2$. Positivity of the integrand gives $A>0$, and the equality forces $A<\infty$ and $A=\sqrt{2\pi}$. Therefore $g(x,y)=\phi(x)\phi(y)$ with each factor integrating to $1$. For arbitrary Borel sets $A,B\subseteq\mathbb R$, [F3] applied to $\mathbf1_A(x)\mathbf1_B(y)\phi(x)\phi(y)$ gives $\mathbb P(Z_1\in A,Z_2\in B)=(\int_A\phi)(\int_B\phi)$. Taking $B=\mathbb R$ or $A=\mathbb R$ identifies the marginal probabilities. Thus the Borel-rectangle factorization criterion [F4] proves independence, with the stated marginal densities. [F3, F4, F5, F8, step 2.1, algebra]

4.1 For $r\ge0$, monotonicity and the inverse identities [F7]–[F8] give $\{R>r\}=\{U<e^{-r^2/2}\}$; uniformity gives probability $e^{-r^2/2}$, also at $r=0$. Pointwise, $R^2=\int_0^\infty 2t\mathbf1_{\{t<R\}}\,dt$. By [F3], $\mathbb E R^2=\int_0^\infty 2t e^{-t^2/2}\,dt=2$, using the substitution $s=t^2/2$. [given, F3, F7, F8, algebra] ∎
