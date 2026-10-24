---
id: lem-ip-gronwall-with-integrable-coefficient
kind: lemma
title: Grönwall inequality with an integrable coefficient
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-countable-choice
  - def-dependent-choice
  - def-l-one-of-a-measure
  - cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous
  - thm-first-fundamental-theorem-of-calculus-for-l-one
  - thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions
  - thm-a-lipschitz-function-after-an-absolutely-continuous-function-is-absolutely-continuous
  - lem-the-product-of-two-absolutely-continuous-functions-is-absolutely-continuous
  - thm-chain-rule
  - lem-derivative-algebra-and-chain-rules
  - thm-derivative-of-exponential
  - lem-mean-value-theorem-on-closed-interval
  - cor-c-one-change-of-variables-for-l-one-functions
justified_by: []
forward_refs: []
proof_strategy: direct
axiom_use: >-
  The estimate uses Countable Choice and Dependent Choice exactly through the
  library fundamental theorem for absolutely continuous functions, which
  represents each absolutely continuous function by the integral of its
  derivative. The change of variable and inequality are otherwise choice-free.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Gerald Teschl, Ordinary Differential Equations and Dynamical Systems, §2.4, Lemma 2.7"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf"
      locator: "Generalized Grönwall inequality with an integrable nonnegative coefficient; proof by an integrating factor."
    - title: "Carnegie Mellon University, ODE existence and uniqueness notes, 2026, Grönwall inequality section"
      url: "https://www.math.cmu.edu/~gautam/c/2026-632/notes/existence.html"
      locator: "Grönwall estimate and its application to continuous dependence for ODEs."
---

## Statement

Let $a\le b$, let $A\ge0$, let $u:[a,b]\to[0,\infty)$ be continuous, and let $\ell:[a,b]\to[0,\infty)$ be Lebesgue measurable with $\int_a^b\ell(s)\,ds<\infty$. If
$$u(t)\le A+\int_a^t\ell(s)u(s)\,ds\qquad(a\le t\le b),$$
then
$$u(t)\le A\exp\!\left(\int_a^t\ell(s)\,ds\right)\qquad(a\le t\le b).$$
If instead $u(t)\le A+\int_t^b\ell(s)u(s)\,ds$ for every $t\in[a,b]$, then
$$u(t)\le A\exp\!\left(\int_t^b\ell(s)\,ds\right)\qquad(a\le t\le b).$$

## Statement references

[Teschl, §2.4, Lemma 2.7](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf)

[CMU ODE notes, Grönwall inequality](https://www.math.cmu.edu/~gautam/c/2026-632/notes/existence.html)

## Facts & Assumptions

**Given:** The interval, nonnegative number $A$, continuous nonnegative function $u$, measurable nonnegative integrable coefficient $\ell$, and one of the integral inequalities in the Statement.

[A1] Assume Countable Choice and Dependent Choice for the library fundamental theorem of calculus for absolutely continuous functions. [[def-countable-choice]], [[def-dependent-choice]]

[F1] A measurable function with finite integral of its absolute value represents an $L^1$ function; here $\ell\in L^1[a,b]$. [[def-l-one-of-a-measure]]

[F2] The indefinite integral of an $L^1$ function is absolutely continuous. [[cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous]]

[F3] Under [A1], every absolutely continuous function is the integral of its almost-everywhere derivative, and that derivative is integrable. [[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]]

[F4] If an absolutely continuous function is followed by a Lipschitz function on its image, the composition is absolutely continuous. [[thm-a-lipschitz-function-after-an-absolutely-continuous-function-is-absolutely-continuous]]

[F5] The product of absolutely continuous functions is absolutely continuous. [[lem-the-product-of-two-absolutely-continuous-functions-is-absolutely-continuous]]

[F6] The exponential has derivative $e^r$; the mean-value theorem therefore makes $r\mapsto e^{-r}$ Lipschitz on every compact interval. [[thm-derivative-of-exponential]], [[lem-mean-value-theorem-on-closed-interval]]

[F7] At a point where the inner and outer derivatives exist, the ordinary chain rule gives the derivative of their composition; the product rule gives the derivative of a product. [[thm-chain-rule]], [[lem-derivative-algebra-and-chain-rules]]

[F8] When $a<b$, reflection on $(a,b)$ is a $C^1$ diffeomorphism, so substitution preserves Lebesgue integrals of $L^1$ functions; the endpoints have measure zero. [[cor-c-one-change-of-variables-for-l-one-functions]]

[F9] For $g\in L^1[a,b]$, its indefinite integral $x\mapsto\int_a^x g(s)\,ds$ is differentiable almost everywhere with derivative $g$. [[thm-first-fundamental-theorem-of-calculus-for-l-one]]

## Proof

**Given:** The hypotheses and notation in the Statement.

1.1 If $a=b$, both hypotheses reduce to $u(a)\le A$, which is the claimed bound. Hence assume $a<b$ and first consider the forward inequality. Define $C(t)=\int_a^t\ell(s)\,ds$ and $V(t)=A+\int_a^t\ell(s)u(s)\,ds$. Continuity of $u$ on the compact interval makes it bounded, so $\ell u\in L^1$. By [F2], both $C$ and $V$ are absolutely continuous, and the hypothesis says $0\le u(t)\le V(t)$. The range of $C$ is contained in the compact interval $[0,C(b)]$; [F6] makes $r\mapsto e^{-r}$ Lipschitz there. Thus $e^{-C}$ is absolutely continuous by [F4], and $W(t):=e^{-C(t)}V(t)$ is absolutely continuous by [F5]. [F1, F2, F4, F5, F6, given, construct]

2.1 Since $\ell,\ell u\in L^1[a,b]$, [F9] gives $C'=\ell$ and $V'=\ell u$ almost everywhere. By [F3], the absolutely continuous function $W$ has an integrable derivative and is the integral of that derivative after its initial value. Intersecting these full-measure sets, at every remaining point [F7] gives $$W'=e^{-C}(V'-C'V)=e^{-C}\ell(u-V)\le0,$$ since $u\le V$ and $\ell\ge0$. Therefore [F3] yields $W(t)-W(a)=\int_a^tW'(s)\,ds\le0$. As $W(a)=A$ and $u(t)\le V(t)$, we obtain $u(t)\le V(t)\le A e^{C(t)}$, the claimed forward estimate. [A1, F3, F7, F9, step 1.1, given, algebra]

3.1 By step 1.1, assume $a<b$. Set $\widetilde u(r)=u(a+b-r)$ and $\widetilde\ell(r)=\ell(a+b-r)$. By [F8], reflection preserves measurability and integrability and gives $\int_a^r\widetilde\ell(q)\widetilde u(q)\,dq=\int_{a+b-r}^b\ell(s)u(s)\,ds$. Thus $\widetilde u(r)\le A+\int_a^r\widetilde\ell(q)\widetilde u(q)\,dq$. The forward result in steps 1.1–2.1 applies to these continuous and integrable functions. Substituting $r=a+b-t$ into its bound gives $u(t)\le A\exp(\int_t^b\ell(s)\,ds)$. [F8, step 1.1, step 2.1, given, algebra] ∎
