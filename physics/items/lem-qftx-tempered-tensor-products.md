---
id: lem-qftx-tempered-tensor-products
kind: lemma
title: Tensor products of tempered distributions
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 0
domain: mathematics
library: mathematics
deps:
  - def-tempered-distribution
  - def-schwartz-space-and-its-seminorms
  - def-schwartz-topology-and-convergence
  - lem-test-function-cutoffs-and-euclidean-localization
  - lem-finite-sums-of-product-tests-are-dense-on-product-open-sets
  - thm-tensor-product-distributions-and-iterated-pairings
dependency_roles:
  def-tempered-distribution: mathematical-premise
  def-schwartz-space-and-its-seminorms: mathematical-premise
  def-schwartz-topology-and-convergence: mathematical-premise
  lem-test-function-cutoffs-and-euclidean-localization: mathematical-premise
  lem-finite-sums-of-product-tests-are-dense-on-product-open-sets: mathematical-premise
  thm-tensor-product-distributions-and-iterated-pairings: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Semyon Dyatlov, Lecture notes for 18.155, Chapters 7.1 and 11.1
      url: https://math.mit.edu/~dyatlov/18.155/155-notes.pdf
      locator: "Chapter 7.1, Theorem 7.1, printed pp. 77–79; Chapter 11.1, Exercise 11.5(b), printed p. 135. The notes construct distribution tensor products and state the tempered case as an exercise; the global Schwartz-seminorm estimate is proved locally here."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

Let $p,q\ge1$, let $u\in\mathcal S'(\mathbb R^p)$ and $v\in\mathcal S'(\mathbb R^q)$, and use the Schwartz seminorms $p_{\alpha\beta}(f)=\sup_x|x^\alpha\partial^\beta f(x)|$. The iterated pairing

$$
w(\Phi):=u\!\left(x\mapsto v\!\left(y\mapsto\Phi(x,y)\right)\right),\qquad \Phi\in\mathcal S(\mathbb R^{p+q}),
$$

defines a tempered distribution $w\in\mathcal S'(\mathbb R^{p+q})$. It satisfies $w(\varphi\otimes\psi)=u(\varphi)v(\psi)$ for Schwartz functions $\varphi,\psi$. It agrees with the distribution tensor product on compactly supported tests, is unique with these product values, and its finite iterates are associative.

## Statement references

[[def-tempered-distribution]]

[[thm-tensor-product-distributions-and-iterated-pairings]]

## Facts & Assumptions

**Given:** Integers $p,q\ge1$, $u\in\mathcal S'(\mathbb R^p)$ and $v\in\mathcal S'(\mathbb R^q)$.

[F1] [[def-schwartz-space-and-its-seminorms]]: the seminorms $p_{\alpha\beta}$ define the Schwartz space.

[F2] [[def-schwartz-topology-and-convergence]]: a neighbourhood of zero restricts only finitely many seminorms.

[F3] [[def-tempered-distribution]]: $u$ and $v$ are continuous complex-linear functionals on their Schwartz spaces.

[F4] [[lem-test-function-cutoffs-and-euclidean-localization]]: a compact set inside an open set admits a smooth compactly supported cutoff equal to one near that compact set.

[F5] [[lem-finite-sums-of-product-tests-are-dense-on-product-open-sets]]: finite sums of compactly supported product tests are dense in the compactly supported smooth test topology, with approximating supports in a fixed compact product.

[F6] [[thm-tensor-product-distributions-and-iterated-pairings]]: on compactly supported tests the distribution tensor product is the iterated pairing, has the product values, is unique, and iterates associatively.

## Proof

**Given:** [F1]–[F6].

1.1 By continuity [F3], choose a basic neighbourhood $V_u=\{f:p_{\alpha_j\beta_j}(f)<\varepsilon_j,\ 1\le j\le k\}$ on which $|u(f)|<1$. Intersecting with $p_{00}(f)<1$ if necessary ensures $k\ge1$. Set $M_u=\max_{1\le j\le k}\{|\alpha_j|,|\beta_j|\}$, $P_{M_u}(f)=\max_{|\alpha|,|\beta|\le M_u}p_{\alpha\beta}(f)$, and $c_u=2\max_j\varepsilon_j^{-1}$. For $D(f)=\max_j(p_{\alpha_j\beta_j}(f)/\varepsilon_j)>0$, the test $f/(2D(f))$ lies in $V_u$, so $|u(f)|\le2D(f)\le c_uP_{M_u}(f)$. If $D(f)=0$, every positive scalar multiple of $f$ lies in $V_u$, forcing $u(f)=0$ and the same bound. Applying this argument to $v$ gives finite $M_v,c_v$ with $|v(g)|\le c_vP_{M_v}(g)$. [F1, F2, F3, given, algebra]

2.1 For fixed $\Phi\in\mathcal S(\mathbb R^{p+q})$, the map $x\mapsto\Phi(x,\cdot)$ is smooth with values in $\mathcal S(\mathbb R^q)$: Taylor's formula in the $x$ coordinates, with its remainder differentiated in $y$, tends to zero in each $p_{\gamma\delta}$ on every compact $x$ set because every mixed Schwartz seminorm of $\Phi$ is finite. Continuity of $v$ therefore makes $h(x):=v(\Phi(x,\cdot))$ smooth and gives $\partial_x^\beta h(x)=v(\partial_x^\beta\Phi(x,\cdot))$. For every $\alpha,\beta$, [F3] and step 1.1 yield $\sup_x|x^\alpha\partial_x^\beta h(x)|\le c_v\max_{|\gamma|,|\delta|\le M_v}\sup_{x,y}|x^\alpha y^\gamma\partial_x^\beta\partial_y^\delta\Phi(x,y)|<\infty.$ Thus $h\in\mathcal S(\mathbb R^p)$. [F1, F2, F3, step 1.1, given]

3.1 Define $w(\Phi)=u(h)$. Applying the bound in step 1.1 to the finitely many $x$ seminorms with indices at most $M_u$, and then the displayed estimate in step 2.1, bounds $|w(\Phi)|$ by a finite constant times the maximum of finitely many product Schwartz seminorms of $\Phi$. Hence $w$ is continuous on $\mathcal S(\mathbb R^{p+q})$. For $\Phi=\varphi\otimes\psi$, the inner pairing is $\varphi(x)v(\psi)$, giving the claimed product value; on compactly supported tests the formula is the same iterated pairing as [F6]. [F1, F3, F6, step 1.1, step 2.1, given, algebra]

4.1 Finite sums of Schwartz product tests are dense in $\mathcal S(\mathbb R^{p+q})$. Indeed, choose $\chi\in C_c^\infty(\mathbb R^p)$ and $\eta\in C_c^\infty(\mathbb R^q)$ equal to one near the unit balls by [F4], and set $\chi_R(x)=\chi(x/R)$ and $\eta_R(y)=\eta(y/R)$. The product rule and rapid decay show $\chi_R(x)\eta_R(y)\Phi(x,y)\to\Phi(x,y)$ in every product Schwartz seminorm: the undifferentiated tails lie outside balls of radius proportional to $R$, and each differentiated cutoff contributes a factor $R^{-j}$ on the same tails. For fixed $R$, [F5] approximates this compactly supported smooth function by finite sums of product tests with common compact support; on that support, uniform convergence of all derivatives implies convergence in every Schwartz seminorm. Thus any two continuous functionals with the same product values agree on a dense subspace and hence everywhere. The same density argument, iterated over finitely many factors, shows that different parenthesizations of the constructed tensor product agree; this also agrees with the compact-test associativity in [F6]. [F1, F4, F5, step 3.1] ∎ 