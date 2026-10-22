---
id: lem-gr-fx-star-shaped-poincare-homotopy
kind: lemma
title: Closed differential forms are exact on star-shaped coordinate domains
status: published
origin: pipeline
domain: mathematics
dependency_level: 0
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
deps:
  - def-star-shaped-open-subset-of-rn
  - def-smooth-differential-k-form
  - def-pullback-of-a-differential-form
  - thm-the-exterior-derivative-commutes-with-pullback
  - thm-differentiation-under-the-integral-sign-on-a-compact-rectangle
  - thm-newton-leibniz-with-interior-derivative
dependency_roles:
  def-star-shaped-open-subset-of-rn: mathematical-premise
  def-smooth-differential-k-form: mathematical-premise
  def-pullback-of-a-differential-form: mathematical-premise
  thm-the-exterior-derivative-commutes-with-pullback: mathematical-premise
  thm-differentiation-under-the-integral-sign-on-a-compact-rectangle: mathematical-premise
  thm-newton-leibniz-with-interior-derivative: mathematical-premise
sources:
  references:
    - title: "Geoffrey Compère and Adrien Fiorucci, Advanced Lectures on General Relativity, §1.3.3"
      url: "https://arxiv.org/pdf/1801.07064"
    - title: "Vivek Iyer and Robert M. Wald, Some Properties of Noether Charge and a Proposal for Dynamical Black Hole Entropy, §4"
      url: "https://arxiv.org/pdf/gr-qc/9403028"
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

Let $n\ge1$, let $U\subseteq\mathbb R^n$ be open and star-shaped with
respect to $a\in U$, and let $\alpha\in\Omega^k(U)$ be a smooth closed
differential form with $1\le k\le n$. Define

$$(K\alpha)_x(v_1,\ldots,v_{k-1}) :=\int_0^1 t^{k-1} \alpha_{a+t(x-a)}(x-a,v_1,\ldots,v_{k-1})\,dt .$$

Then $K\alpha$ is a smooth $(k-1)$-form on $U$ and $d(K\alpha)=\alpha$.

## Statement references

[Advanced Lectures on General Relativity, §1.3.3](https://arxiv.org/pdf/1801.07064)

[Some Properties of Noether Charge, §4](https://arxiv.org/pdf/gr-qc/9403028)

## Facts & Assumptions

**Given:** The open star-shaped set $U\subseteq\mathbb R^n$, its centre $a$, the closed smooth $k$-form $\alpha$, and $1\le k\le n$.

[A1] $U\subseteq\mathbb R^n$ is open and star-shaped about $a$, and $\alpha$ is a smooth closed $k$-form with $1\le k\le n$.

[F1] Star-shapedness means $a+t(x-a)\in U$ for every $x\in U$ and $0\le t\le1$. [[def-star-shaped-open-subset-of-rn]]

[F2] For a smooth map $F$, the pullback is $(F^*\alpha)_p(v_1,\ldots,v_k) =\alpha_{F(p)}(dF_pv_1,\ldots,dF_pv_k)$. [[def-pullback-of-a-differential-form]]

[F3] The exterior derivative commutes with pullback: $d(F^*\alpha)=F^*(d\alpha)$. [[thm-the-exterior-derivative-commutes-with-pullback]]

[F4] A continuous parameter derivative on a compact rectangle may be passed through a Riemann integral. [[thm-differentiation-under-the-integral-sign-on-a-compact-rectangle]]

[F5] For a continuous function on a closed interval with an integrable interior derivative, the integral of that derivative is the endpoint increment. [[thm-newton-leibniz-with-interior-derivative]]

## Proof

**Given:** As in [A1] and [F1]–[F5].

1.1 Define $F:(0,1)\times U\to U$ by $F(t,x)=a+t(x-a)$. By [F1] this map has image in $U$, and both its domain and target are boundaryless smooth manifolds, so [F3] applies to this restriction. In product coordinates decompose $F^*\alpha=\gamma_t+dt\wedge\eta_t$, where $\gamma_t$ is a $k$-form and $\eta_t$ a $(k-1)$-form on $U$. The same affine formula, viewed first as a map $\bar F:\mathbb R\times U\to\mathbb R^n$, has image in $U$ on a neighborhood of every $(t_0,x_0)$ with $0\le t_0\le1$, because $\bar F(t_0,x_0)\in U$ and $U$ is open. Thus the coefficient formulas for $\gamma_t$ and $\eta_t$ extend smoothly to $t=0,1$ locally in $(t,x)$. [A1, F1, F2]

2.1 The integrand defining $K\alpha$ is alternating and multilinear in $v_1,\ldots,v_{k-1}$, so its integral is a $(k-1)$-covariant alternating tensor at each $x$. Its coefficient functions are smooth in $(x,t)$. Restricting $x$ to a compact coordinate rectangle inside $U$ and using [F4] on each coordinate derivative shows that parameter derivatives pass through the $t$-integral; iteration gives smooth coefficients, hence a smooth $(k-1)$-form $K\alpha$. [step 1.1, F4]

2.2 Since $d\alpha=0$, [F3] gives $d(F^*\alpha)=0$ on $(0,1)\times U$. In product coordinates $d=d_U+dt\wedge\partial_t$, so the coefficient of $dt$ is $\partial_t\gamma_t-d_U\eta_t=0$ for $0<t<1$. By the local smooth extension in step 1.1, this coefficient identity extends by continuity to $t=0,1$. The pullback formula [F2] gives $(\eta_t)_x(v_1,\ldots,v_{k-1}) =t^{k-1}\alpha_{a+t(x-a)}(x-a,v_1,\ldots,v_{k-1})$ for interior $t$, and then also at the endpoints by continuity. [A1, F2, F3, step 1.1]

3.1 Thus $K\alpha=\int_0^1\eta_t\,dt$. By step 2.1 and [F4], $d_U\int_0^1\eta_t\,dt=\int_0^1d_U\eta_t\,dt$. Apply [F5] to the coefficient functions of $\gamma_t$ and use step 2.2: $\gamma_1-\gamma_0=\int_0^1\partial_t\gamma_t\,dt =d_U\int_0^1\eta_t\,dt$. Here $\gamma_1=\alpha$ because $F(1,x)=x$, while $\gamma_0=0$ because $F(0,x)=a$ is constant and $k\ge1$. Hence $d(K\alpha)=\alpha$. [step 2.1, step 2.2, F4, F5] ∎

## Remarks

The conclusion is local: each star-shaped coordinate domain is contractible. It supplies local primitives only and gives no global cohomological conclusion.

The cited general-relativity sections use local exactness for their Noether currents; they do not state this general $k$-form homotopy formula. The displayed argument proves the broader statement here.
