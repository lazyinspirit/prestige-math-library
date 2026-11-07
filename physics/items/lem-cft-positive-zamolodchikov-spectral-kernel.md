---
id: lem-cft-positive-zamolodchikov-spectral-kernel
kind: lemma
title: Positive spectral kernel for the pointwise Zamolodchikov function
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
deps:
  - def-countable-choice
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-dominated-convergence
  - thm-first-fundamental-theorem-of-calculus-for-l-one
dependency_roles:
  def-countable-choice: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-first-fundamental-theorem-of-calculus-for-l-one: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 0
---

## Statement

Assume Countable Choice. For $u>0$ and integers $j\ge0$, put $K_j(u)=\int_0^\infty e^{-u\cosh t}\cosh(jt)\,dt$. Define
$$f(u)=\frac{u^4}{48}(K_4(u)+2K_2(u)-3K_0(u)).$$
Then
$$f(u)=\frac{u^3}{4}K_1(u)+\frac{u^2}{2}K_2(u)>0,\quad f'(u)=-\frac{u^3}{4}K_0(u)<0,\quad f(0+)=1.$$
Extend $f(0)=1$. For any positive Borel measure $\nu$ on $[0,\infty)$ and $r>0$ with $\int f(\mu r)\,d\nu(\mu)<\infty$, define $c(r)=\int f(\mu r)\,d\nu(\mu)$. This is nonnegative, with no assumption about UV/IR conformal endpoints or finiteness of $\nu([0,\infty))$. For $0<a<b$ where $c(a)<\infty$,
$$c(a)-c(b)=\frac14\int_a^b s^3\left(\int_{(0,\infty)}\mu^4K_0(\mu s)\,d\nu(\mu)\right)ds\ge0.$$
In particular $c$ is locally absolutely continuous and $d c/d\log r^2=-\frac18\int(\mu r)^4K_0(\mu r)\,d\nu(\mu)$ almost everywhere. If the latter integral is continuous, the derivative identity holds everywhere. This is a statement about a specified positive measure, not an assertion that arbitrary reflection-positive local data have this stress spectral representation.

## Facts & Assumptions

**Given:** Countable Choice, the integral definitions and positive Borel measure in the Statement. Ordinary nonnegative integration uses [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]; the dominated limit uses [[thm-dominated-convergence]], and the almost-everywhere derivative of an integrable primitive uses [[thm-first-fundamental-theorem-of-calculus-for-l-one]]. Their Countable Choice assumption is carried explicitly. All subsequent signed subtractions are between finite quantities.

## Proof

1.1 At each $u>0$ all defining integrals and their derivatives converge absolutely: $\cosh(jt)$ grows exponentially in $t$, while $e^{-u\cosh t}$ decays faster than every exponential, uniformly when $u$ ranges over a compact positive interval. Differentiating under this uniform integrable bound gives $K_0'=-K_1$. Integration of the derivative of $e^{-u\cosh t}\sinh(jt)$ gives zero boundary terms, hence $jK_j=u(K_{j+1}-K_{j-1})/2$. Likewise differentiation and the product identity for hyperbolic cosines give $K_j'=-(K_{j+1}+K_{j-1})/2$. Combining yields $(u^jK_j)'=-u^jK_{j-1}$ for $j\ge1$. [given]

2.1 The recurrence in 1.1 gives $K_2-K_0=2K_1/u$ and $K_4=K_2+6K_3/u=K_2+6K_1/u+24K_2/u^2$. Therefore $K_4+2K_2-3K_0=12K_1/u+24K_2/u^2$. Multiplying by $u^4/48$ proves the displayed positive expression for $f$. Differentiating this expression with 1.1 gives $f'=-u^3K_0/4$. Every $K_j$ is strictly positive by its defining integral. [given, step 1.1, algebra]

3.1 Set $s=\sinh t$ in $K_1$: $uK_1(u)=\int_0^\infty u e^{-u\sqrt{1+s^2}}ds=\int_0^\infty e^{-\sqrt{u^2+v^2}}dv$. The integrand is bounded by $e^{-v}$ and tends to it as $u\downarrow0$, so $uK_1\to1$. Also $K_0\le K_1$ pointwise, so $u^2K_0\to0$. The recurrence $u^2K_2=u^2K_0+2uK_1$ gives $u^2K_2\to2$, and the positive expression in 2.1 gives $f(0+)=1$. [given, step 1.1, step 2.1]

4.1 For each $\mu>0$, integrate $-\frac{d}{ds}f(\mu s)=\mu^4s^3K_0(\mu s)/4$ from $a$ to $b$. For $\mu=0$ both sides are zero. The finiteness of $c(a)$ and strict positivity of $f$ imply that $\nu$ is sigma-finite: the measurable sets $\{\mu:f(\mu a)\ge1/n\}$ cover $[0,\infty)$ and have measure at most $nc(a)$. Tonelli applies to this nonnegative identity and gives the difference formula in the Statement. Since $0\le c(b)\le c(a)<\infty$, its right side is finite. The integral of this nonnegative locally integrable derivative density gives local absolute continuity and the almost-everywhere derivative; continuity upgrades it to an everywhere derivative by the fundamental theorem of calculus. The positivity and finiteness assertions use no interchange of an unbounded derivative with the spectral integral. [given, step 2.1, step 3.1] ∎

## Remarks

For the source normalization $\langle T_{ab}(x)T_{cd}(0)\rangle_{\rm conn}=(\pi/3)\int (\partial_a\partial_b-\delta_{ab}\Delta)(\partial_c\partial_d-\delta_{cd}\Delta)K_0(\mu|x|)/(2\pi)\,d\nu(\mu)$, let $T=T_{zz}$ and $\Theta_{\rm source}=-T_{z\bar z}$. Four complex derivatives give $F=z^4\langle TT\rangle=\int u^4K_4/96\,d\nu$, $B=z^2r^2\langle T\Theta_{\rm source}\rangle=\int u^4K_2/96\,d\nu$, and $H=r^4\langle\Theta_{\rm source}\Theta_{\rm source}\rangle=\int u^4K_0/96\,d\nu$, with the massless contributions understood by their limits. Thus $2F+4B-6H$ is exactly $\int f\,d\nu$, not merely an unrelated positive smearing. These identities require the actual connected positive stress spectral representation and the indicated trace sign. This remark does not add those physical hypotheses to an existing theorem by fiat.
