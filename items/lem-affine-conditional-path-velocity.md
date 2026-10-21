---
id: lem-affine-conditional-path-velocity
kind: lemma
title: An affine conditional path has the stated velocity field
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-euclidean-inner-product
justified_by: []
axiom_use: No choice principle is used.
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Yaron Lipman et al., Flow Matching for Generative Modeling, §4 Theorem 3 and Appendix A"
      url: "https://arxiv.org/html/2210.02747"
    - title: "Peter Holderrieth and Ezra Erives, Introduction to Flow Matching and Diffusion Models, §3.2 Example 10"
      url: "https://arxiv.org/html/2506.02070"
    - title: "Tor Fjelde, Emile Mathieu, and Vincent Dutordoir, An Introduction to Flow Matching, Gaussian conditional path derivation"
      url: "https://mlg.eng.cam.ac.uk/blog/2024/01/20/flow-matching.html"
---

## Statement

Let $d\ge1$, fix $x_1\in\mathbb R^d$, and let $t\mapsto\mu_t(x_1)\in\mathbb R^d$ and $t\mapsto\sigma_t(x_1)\in(0,\infty)$ be continuously differentiable on $[0,1]$, with one-sided derivatives at the endpoints. For $z\in\mathbb R^d$, define the affine map
$$\psi_t(z\mid x_1):=\sigma_t(x_1)z+\mu_t(x_1).$$
For each $t$, this map is a diffeomorphism with inverse $\psi_t^{-1}(x\mid x_1)=(x-\mu_t(x_1))/\sigma_t(x_1)$. The unique vector field satisfying
$$\frac{d}{dt}\psi_t(z\mid x_1)=u_t(\psi_t(z\mid x_1)\mid x_1)$$
for every $z\in\mathbb R^d$ is
$$u_t(x\mid x_1)=\frac{\dot\sigma_t(x_1)}{\sigma_t(x_1)}(x-\mu_t(x_1))+\dot\mu_t(x_1).$$

## Statement references

[Lipman et al., §4 Theorem 3 and Appendix A](https://arxiv.org/html/2210.02747)

[Holderrieth and Erives, §3.2 Example 10](https://arxiv.org/html/2506.02070)

[Fjelde, Mathieu, and Dutordoir, Gaussian conditional path derivation](https://mlg.eng.cam.ac.uk/blog/2024/01/20/flow-matching.html)

## Facts & Assumptions

**Given:** $d$, $x_1$, and the continuously differentiable functions $\mu_t(x_1)$ and $\sigma_t(x_1)>0$ in the Statement.

[F1] [[def-euclidean-inner-product]]: vectors in $\mathbb R^d$ have coordinatewise addition and scalar multiplication.

## Proof

**Given:** The hypotheses in the Statement.

1.1 Fix $t\in[0,1]$. Since $\sigma_t(x_1)>0$, solving $x=\sigma_t(x_1)z+\mu_t(x_1)$ gives the unique inverse $z=(x-\mu_t(x_1))/\sigma_t(x_1)$. Both the map and inverse are continuously differentiable in $z$, so $\psi_t(\cdot\mid x_1)$ is a diffeomorphism. [given, F1, algebra]

2.1 For fixed $z$, differentiation gives $\frac{d}{dt}\psi_t(z\mid x_1)=\dot\sigma_t(x_1)z+\dot\mu_t(x_1)$. Substitute the inverse expression from step 1.1 to obtain $$\frac{d}{dt}\psi_t(z\mid x_1)=\frac{\dot\sigma_t(x_1)}{\sigma_t(x_1)}\bigl(\psi_t(z\mid x_1)-\mu_t(x_1)\bigr)+\dot\mu_t(x_1).$$ Thus the displayed $u_t$ satisfies the flow equation. [given, step 1.1, algebra]

3.1 If another field $\widetilde u_t$ satisfies the same equation for every $z$, then for any $x$ choose the explicit inverse value $z=\psi_t^{-1}(x\mid x_1)$. The flow equation forces $\widetilde u_t(x\mid x_1)=\frac{\dot\sigma_t(x_1)}{\sigma_t(x_1)}(x-\mu_t(x_1))+\dot\mu_t(x_1)$, proving uniqueness. [step 1.1, step 2.1, algebra] ∎

## Source notes

The proof is the explicit affine inversion and differentiation argument. The cited paper and two independent treatments were inspected for the same formula and schedule convention.
