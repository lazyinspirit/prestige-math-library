---
id: lem-smith-weiss-smoothed-ideal-character-estimate
kind: lemma
title: "Smoothed ideal-character estimates with uniform discriminant dependence"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps: [def-axiom-of-choice, def-countable-choice, def-weiss-smoothed-mellin-kernel, lem-weiss-convexity-bound-for-primitive-hecke-l-functions, thm-primitive-hecke-l-analytic-continuation-and-functional-equation, lem-imprimitive-ray-class-hecke-finite-euler-correction, lem-ray-modulus-kernel-intersection-and-primitive-conductor-uniqueness, thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula, thm-dedekind-zeta-euler-product, thm-residue-theorem-null-homologous-cycle]
justified_by: []
proof_strategy: direct
axiom_use: "AC and Countable Choice are inherited from the primitive Hecke and number-field zeta interfaces."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "A. Smith, The Distribution of ℓ∞-Selmer Groups in Degree ℓ Twist Families I"
      url: "https://arxiv.org/pdf/2207.05674"
      locator: "§5.1, equations (5.3) and (5.4)"
verification: {}
---

## Statement

Assume AC and Countable Choice. There is an absolute constant $C>1$ with the following property. For every number field $L$ of degree $n$ and absolute discriminant $\Delta$, there is a nonnegative compactly supported function $h_L:(0,\infty)\to\mathbb R$ with $h_L(u)\ge1$ for $1/2\le u\le1$ such that, for every $y>0$ and squarefree integral ideal $\mathfrak b$, every nontrivial ray-class character $\chi$ modulo $\mathfrak b$, extended by zero on ideals not coprime to $\mathfrak b$, satisfies
$$\left|\sum_{\mathfrak a}h_L\!\left(\frac y{N\mathfrak a}\right)\chi(\mathfrak a)\right|\le C^n2^{\omega(\mathfrak b)}\Delta^{3/4}(N\mathfrak b)^{3/4}.$$
For the all-ideal trivial character,
$$\sum_{\mathfrak a}h_L\!\left(\frac y{N\mathfrak a}\right)\le C^n\kappa_L y+C^n\Delta^{3/4},$$
where $\kappa_L=\operatorname{Res}_{s=1}\zeta_L(s)$. The same proof yields $\kappa_L\le(C\log(2\Delta))^n$. The sums are over nonzero integral ideals. The function may depend on $n$ but not on the character, modulus or $y$.

## Statement references

[[def-weiss-smoothed-mellin-kernel]]

[[lem-weiss-convexity-bound-for-primitive-hecke-l-functions]]

[Smith, *The Distribution of $\ell^\infty$-Selmer Groups in Degree $\ell$ Twist Families I*, equations (5.3) and (5.4)](https://arxiv.org/pdf/2207.05674)

## Facts & Assumptions

**Given:** AC, Countable Choice, the number field, modulus, character and positive parameter in the Statement.

[F1] The Weiss convolution kernel $H_{2n,1}$ is nonnegative and supported on $[e^{-2n},e^{2n}]$; its Mellin transform is $h(s)=(\sinh s/s)^{2n}$ and Mellin inversion holds. [[def-weiss-smoothed-mellin-kernel]]

[F2] A ray character is induced by a primitive Hecke character with conductor dividing its modulus, and the finite Euler correction has the stated product. A nontrivial ray character has nontrivial primitive inducing character. [[lem-imprimitive-ray-class-hecke-finite-euler-correction]] [[lem-ray-modulus-kernel-intersection-and-primitive-conductor-uniqueness]]

[F3] Primitive Hecke functions continue meromorphically with only the possible trivial simple pole at one, and the convexity estimate at real part zero gives $|L(it,\chi^*)|\le C^n(\Delta N\mathfrak f)^{3/4}(1+|t|)^{3n/4}$, with the pole-clearing convention for the trivial character. The Dedekind zeta residue is positive. [[lem-weiss-convexity-bound-for-primitive-hecke-l-functions]] [[thm-primitive-hecke-l-analytic-continuation-and-functional-equation]] [[thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula]]

[F4] The ideal zeta series is absolutely convergent on real part greater than one and satisfies the Euler product; the residue theorem applies to the contours used below. [[thm-dedekind-zeta-euler-product]] [[thm-residue-theorem-null-homologous-cycle]]

## Proof

1.1 Let $H=H_{2n,1}$. In logarithmic coordinates it is the probability density of a sum of $2n$ independent uniform variables on $[-1,1]$. It is even and nonincreasing on $[0,\infty)$: convolution of two even nonincreasing nonnegative functions has the same property, as follows by writing each as an integral of indicators of centered intervals. Since the density has support of length $4n$ and integral one, $H(1)\ge1/(4n)$. For $0\le x\le\log2$, the section of $[-1,1]^{2n}$ by $\sum z_i=x$ contains the image of the central section under $z_i\mapsto(1-x/(2n))z_i+x/(2n)$. The map scales its $(2n-1)$-dimensional volume by $(1-x/(2n))^{2n-1}$. Hence $$H(e^x)\ge\frac1{4n}\left(1-\frac{x}{2n}\right)^{2n-1}\ge\frac{1-\log2}{4n},$$ the last inequality following from Bernoulli's inequality. Evenness gives the same bound for $|x|\le\log2$. Thus $h_L(u)=32n\,uH(u)$ is at least one on $[1/2,1]$. [F1, given, construct, algebra]

1.2 For a ray character $\chi$ write $$S_\chi(y)=\sum_{\mathfrak a}\frac{\chi(\mathfrak a)}{N\mathfrak a}H\!\left(\frac y{N\mathfrak a}\right).$$ Kernel inversion and absolute convergence on $\operatorname{Re}s=1/2$ give $$S_\chi(y)=\frac1{2\pi i}\int_{1/2-i\infty}^{1/2+i\infty}L(1+s,\chi)h(s)y^s\,ds.$$ On $\operatorname{Re}s=-1$, [F2] bounds each finite Euler factor by $2$, and [F3] gives $$|L(1+s,\chi)|\le C^n2^{\omega(\mathfrak b)}(\Delta N\mathfrak b)^{3/4}(1+|\operatorname{Im}s|)^{3n/4}.$$ The kernel satisfies $|h(\sigma+it)|\le e^{2n|\sigma|}\min(1,|\sigma+it|^{-2n})$, from its convolution integral. The horizontal contour edges vanish by these bounds and [F3], and [F4] allows moving to $\operatorname{Re}s=-1$. The new integral is bounded by $C^n2^{\omega(\mathfrak b)}(\Delta N\mathfrak b)^{3/4}/y$: its tail has exponent $-5n/4<-1$. The only possible pole crossed is the trivial-character pole at $s=0$. [F1, F2, F3, F4, given, algebra]

2.1 For nontrivial $\chi$, [F2] excludes that pole. Multiplying the result of step 1.2 by $32ny$ gives the first displayed bound, after absorbing $32n$ into $C^n$. For the all-ideal trivial character take $\mathfrak b=(1)$; the residue at $s=0$ is $\kappa_L$ since $h(0)=1$, giving the second bound. Compact support makes all ideal sums finite. [F2, step 1.1, step 1.2, given, algebra]

3.1 To bound the residue, set $y=2\Delta$ and $a=1/\log(2\Delta)$. From step 1.1 and the compact support, $h_L$ is bounded by $C^n$ and vanishes unless $N\mathfrak a\le e^{2n}y$. The number of ideals with norm at most $X$ is at most $X^{1+a}\zeta_L(1+a)$, while the Euler product gives $\zeta_L(1+a)\le\zeta(1+a)^n\le(C/a)^n$. Thus the left side of the trivial estimate is at most $(C\log(2\Delta))^n y$. The same contour calculation as in step 1.2 gives the corresponding two-sided main-term estimate, so $32n\kappa_L y$ is bounded by that sum plus $C^n\Delta^{3/4}$. Dividing by $y$ and absorbing absolute factors yields $\kappa_L\le(C\log(2\Delta))^n$. [F4, step 1.1, step 1.2, step 2.1, given, algebra] ∎
