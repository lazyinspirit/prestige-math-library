---
id: ex-hh-bialgebra-tensor-products-without-antipode
kind: example
title: "Tensor products of modules over a bialgebra without an antipode"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 4
deps: [def-hh-module-category-and-tensor-action, thm-hh-bialgebra-module-tensor-coherence, def-polynomial-ring-over-a-commutative-ring, thm-polynomial-ring-is-a-commutative-ring, def-field, def-algebraic-dual-and-linear-functional]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
---

## Example

Let $H=k[t]$ over a field $k$, with

$$\Delta(t)=t\otimes t,\qquad \varepsilon(t)=1,$$

extended linearly by $\Delta(\sum_n a_nt^n)=\sum_n a_nt^n\otimes t^n$ and $\varepsilon(\sum_n a_nt^n)=\sum_n a_n$. This is a bialgebra but not a Hopf algebra. The one-dimensional modules $V=W=k$ on which $t$ acts by zero have a tensor product module with the diagonal action; hence the tensor product construction does not require an antipode.

The statement that this bialgebra has no antipode means no antipode exists for the specified coproduct and counit. It does not say that no module structure can ever be put on an underlying dual vector space; in this example the $t=0$ module has a one-dimensional dual with $t$ acting by zero.

## Facts & Assumptions

**Given:** A field $k$, the polynomial ring $k[t]$ with coefficientwise addition and convolution multiplication, the displayed maps $\Delta,\varepsilon$, and the modules $V=W=k$ where $t$ acts by zero.

[F1] [[def-polynomial-ring-over-a-commutative-ring]]: $k[t]$ consists of finite coefficient sums $\sum_n a_nt^n$, with convolution multiplication and unit the constant polynomial $1$.

[F2] [[thm-polynomial-ring-is-a-commutative-ring]]: these operations make $k[t]$ a unital commutative ring.

[F3] [[def-hh-module-category-and-tensor-action]]: for modules $V,W$, $h(v\otimes w)=\sum h_{(1)}v\otimes h_{(2)}w$ is the proposed tensor action.

[F4] [[thm-hh-bialgebra-module-tensor-coherence]]: when $H$ is a bialgebra, that formula makes $V\otimes W$ a left $H$-module.

[F5] [[def-field]]: a field satisfies $0_k\ne1_k$.

[F6] [[def-algebraic-dual-and-linear-functional]]: $V^*$ is the vector space of all linear functionals $V\to k$.

## Verification

**Given:** The data and conventions in Facts & Assumptions.

1.1 The maps $\Delta$ and $\varepsilon$ are well-defined linear maps because every polynomial has a finite coefficient expansion [F1]. On monomials, $\Delta(t^m t^n)=t^{m+n}\otimes t^{m+n}=\Delta(t^m)\Delta(t^n)$ and $\varepsilon(t^m t^n)=1=\varepsilon(t^m)\varepsilon(t^n)$; the formulas also preserve $1$. Bilinearity extends multiplicativity to all polynomials. [given, F1, F2, algebra]

1.2 If an antipode $S$ existed, its left convolution identity at $t$ would give $S(t)t=\varepsilon(t)1=1$. Every polynomial multiplied by $t$ has constant coefficient zero, while $1$ has nonzero constant coefficient by [F5]. This is impossible, so the bialgebra is not Hopf. [given, F1, F5, algebra]

2.1 For each monomial $t^n$, $(\Delta\otimes\mathrm{id})\Delta(t^n)=t^n\otimes t^n\otimes t^n=(\mathrm{id}\otimes\Delta)\Delta(t^n)$ and $(\varepsilon\otimes\mathrm{id})\Delta(t^n)=t^n=(\mathrm{id}\otimes\varepsilon)\Delta(t^n)$. Since monomials span $k[t]$, these identities hold for all polynomials; together with step 1.1 they prove that $H$ is a bialgebra. [given, F1, step 1.1, algebra]

3.1 The actions $p(t)\cdot c:=p(0)c$ make $V=W=k$ unital left $H$-modules because evaluation at zero is a unital algebra map. On $1\otimes1\in V\otimes W$, $t$ acts by $\Delta(t)=t\otimes t$, hence by $0\otimes0=0$. The theorem [F4] makes the diagonal formula a module action on all of $V\otimes W$; it uses only the bialgebra structure proved in steps 1.1 and 2.1. [F1, F3, F4, step 1.1, step 2.1]

4.1 Thus the tensor module exists without an antipode. To check the example's claim about the underlying dual vector space, take $e=1\in V=k$ and $e^*(c)=c$, which spans $V^*$ by [F6]. Define $p(t)\cdot e^*=p(0)e^*$. For $p(t)=\sum_n a_nt^n$ and $q(t)=\sum_n b_nt^n$, the constant coefficient of $pq$ is $a_0b_0=p(0)q(0)$, and $1(0)=1$; hence this is a unital $H$-module action. It is not a left-dual object in $H\text{-}\mathrm{Mod}$: $t$ acts by zero on $e^*\otimes e$ under the diagonal action, so evaluation sends $t\cdot(e^*\otimes e)$ to $0$, while $t\cdot\operatorname{ev}(e^*\otimes e)=t\cdot1=\varepsilon(t)1=1$. Since $0\ne1$ by [F5], evaluation is not $H$-linear. [F1, F3, F5, F6, step 1.1, step 3.1, algebra] ∎
