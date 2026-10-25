---
id: cex-global-energy-identity-needs-integrability-or-decay
kind: counterexample
title: "The local conservation law need not integrate to a finite conserved energy"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
deps: [thm-conservation-of-total-wave-energy, def-wave-energy-and-energy-flux, lem-local-wave-energy-conservation-law, def-wave-equation-cauchy-data-and-wave-speed, thm-chain-rule-for-total-derivatives, thm-tonelli-theorem-for-sigma-finite-product-spaces, prop-order-and-scalar-rules-for-the-nonnegative-integral, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, def-countable-choice, thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets, thm-borel-products-of-euclidean-spaces-are-euclidean-borel]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§2.7.1, printed pp. 87-88 and §9.2.1, printed pp. 289-290: the local energy identity and the finite-energy hypotheses; the running wave has infinite energy in the transverse directions"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§7.3, printed p. 176, (7.27) and Lemma 7.10: bounded-domain energy and its conservation under homogeneous boundary data; the infinite whole-space witnesses here are computed directly"
verification:
  precheck: pass
---

## Statement refuted

The claim refuted is that the pointwise local conservation law
$\partial_te+\operatorname{div}q=0$ by itself integrates to a finite conserved
total energy on all of $\mathbb R^n$. Explicitly: **not** every classical
solution of $\Box_cu=0$ has finite total energy in the sense of
[[def-wave-energy-and-energy-flux]], and for such a solution the local law supplies no finite conserved energy; the integrability
hypotheses of [[thm-conservation-of-total-wave-energy]](b) are therefore not
redundant.

Assume the Axiom of Countable Choice ([[def-countable-choice]]) for the Lebesgue product measure used below. Witness. Let $n\ge2$, $c>0$, let $e_0$ be the first standard basis vector,
let $F\in C^2(\mathbb R)$ with $F'\not\equiv0$ (for instance $F(s)=\cos s$),
and put

$$u(x,t):=F(x_0-ct)\qquad(x=(x_0,\ldots,x_{n-1})\in\mathbb R^n).$$

Then $u$ is a classical solution of $\Box_cu=0$ on $\mathbb R^n\times\mathbb R$
and the local law [[lem-local-wave-energy-conservation-law]] holds pointwise,
the energy density is $e(x,t)=c^2F'(x_0-ct)^2\ge0$, and
$\int_{\mathbb R^n}e(x,t)\,dx=+\infty$ for every $t$, although the
one-dimensional profile is $C^2$. The same divergence occurs for $n=1$ with
$F(s)=s$, since its energy density is the positive constant $c^2$.

## Facts & Assumptions

**Given:** Countable Choice; $n\ge2$, $c>0$, $F\in C^2(\mathbb R)$ with $F'$ not identically zero, $u(x,t)=F(x_0-ct)$ and $e=\tfrac12(u_t^2+c^2|Du|^2)$, $q=-c^2u_tDu$ as in [[def-wave-energy-and-energy-flux]]; write $\lambda_n$ for $n$-dimensional Lebesgue measure.

[F1] The local balance law: $\partial_te+\operatorname{div}q=fu_t$ with $f=\Box_cu$; for a homogeneous classical solution, $\partial_te+\operatorname{div}q=0$. ([[lem-local-wave-energy-conservation-law]])

[F2] Chain rule for totally differentiable composites, applied to $x\mapsto x_0-ct$ and $F$. ([[thm-chain-rule-for-total-derivatives]])

[F3] Tonelli's theorem: for a product-measurable $f\ge0$, the double integral is the iterated integral. ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]])

[F4] The nonnegative Lebesgue integral is monotone: if $0\le f\le g$ then $\int f\le\int g$. ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]])

[F6] $\lambda_n$ is the $n$-dimensional Lebesgue measure on the Lebesgue measurable sets. ([[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]])

## Counterexample

1.1 The profile solves the equation and its density is a one-variable function: by [F2], $u_t(x,t)=-cF'(x_0-ct)$, $\partial_0u(x,t)=F'(x_0-ct)$ and $\partial_iu(x,t)=0$ for $i\ne0$, so $u_{tt}=c^2F''(x_0-ct)$, $\Delta u=F''(x_0-ct)$ and $\Box_cu=0$; hence [F1] holds, $u_t^2=c^2F'(x_0-ct)^2$, $|Du|^2=F'(x_0-ct)^2$ and $e(x,t)=c^2F'(x_0-ct)^2$, a nonnegative function of the single variable $x_0-ct$. [given, F1, F2, algebra]

2.1 A positive lower bound on a slab: since $F'$ is continuous and not identically zero, there are $a<b$ and $m>0$ with $F'(s)^2\ge m$ for $s\in[a,b]$; consequently, for every $t$ and every $x'=(x_1,\ldots,x_{n-1})$, the density satisfies $e(x_0,x',t)=c^2F'(x_0-ct)^2\ge c^2m$ whenever $x_0\in[a+ct,b+ct]$. [given, step 1.1, algebra]

3.1 The total energy diverges: fix $t$ and $R>0$ large enough that $[a+ct,b+ct]\subseteq[-R,R]$; Tonelli [F3] applied to the nonnegative product-measurable function $e$ (written in the product coordinates $(x_0,x')$, with $d\lambda_n$ the measure of [F6]; Borel product measurability and agreement of the product with Euclidean Lebesgue measure follow from [[thm-borel-products-of-euclidean-spaces-are-euclidean-borel]] and [[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]]) gives $\int_{(-R,R)^n}e\,d\lambda_n=\int_{(-R,R)^{n-1}}\Bigl(\int_{-R}^{R}c^2F'(x_0-ct)^2\,dx_0\Bigr)dx'$, and by step 2.1 the inner integral is at least $c^2m(b-a)>0$ for every $x'$; since the box $(-R,R)^{n-1}$ has measure $(2R)^{n-1}$ in each coordinate, this integral is at least $c^2m(b-a)(2R)^{n-1}$; as $R\to\infty$ the right-hand side tends to $+\infty$, while for each fixed $R$ monotonicity [F4] bounds $\int_{(-R,R)^n}e\,d\lambda_n\le\int_{\mathbb R^n}e\,d\lambda_n$; hence $\int_{\mathbb R^n}e\,d\lambda_n=+\infty$. (Equivalently, the iterated integral in the $x_0$-variable alone has value $c^2\int_{\mathbb R}F'(s)^2\,ds>0$ and the remaining $(n-1)$-fold integral of the constant $1$ is $+\infty$, which [F3] turns into the same conclusion.) [given, step 1.1, step 2.1, F3, F4, algebra]

4.1 Failure of a finite-energy conclusion: since $\int_{\mathbb R^n}e(x,t)\,dx=+\infty$ for every $t$, the total energy of [[def-wave-energy-and-energy-flux]] is not a finite conserved quantity for this solution, so the local differential law [F1] holds pointwise while no finite global identity follows; in dimension $n=1$ and for $F(s)=s$ one has $e=c^2$, whose integral over $[-R,R]$ is $2Rc^2\to+\infty$ as $R\to\infty$, so the whole-line integral is infinite by [F4]; thus finite energy is not implied by the local identity. This witness does not show that every sufficient hypothesis of the conservation theorem is necessary, and its extended total energy is the constant $+\infty$. [given, step 3.1, F4] ∎ 