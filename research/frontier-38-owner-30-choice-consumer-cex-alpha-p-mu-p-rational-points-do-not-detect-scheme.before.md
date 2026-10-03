---
id: cex-alpha-p-mu-p-rational-points-do-not-detect-scheme
kind: counterexample
title: Rational points do not detect the group-scheme structure of alpha_p and mu_p
deps:
- def-group-scheme-over-a-field
- def-morphism-and-closed-subgroup-scheme
- lem-closed-subgroup-scheme-valued-point-criterion
- ex-additive-multiplicative-and-general-linear-group-schemes
- thm-affine-scheme-ring-anti-equivalence
- thm-affine-fibre-product-tensor-ring
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: J. S. Milne, Algebraic Groups (corrected 2022 printing)
    url: https://www.jmilne.org/math/Books/iAG2022.pdf
    locator: Chapter2 sections2.1–2.5/2.8, printed pp.39–41, and2.14 printedp.44 (PDF50–52/55); explicit affine formulas and alpha_p/mu_p scheme comparison read.
  - title: The Stacks Project, complete Groupoid Schemes chapter
    url: https://stacks.math.columbia.edu/download/groupoids.pdf
    locator: §5 Examples5.1–5.4, tags022U/040M/022V/022W, printed pp.5–6; all coordinate formulas and scheme-valued point descriptions read.
status: draft
origin: pipeline
proof_strategy: direct
---
## Statement refuted

For group schemes of finite type over an algebraically closed field $k$, the abstract group of $k$-rational points determines their group-scheme structure. Even a fixed underlying $k$-scheme together with that abstract group determines the group law.

## Facts & Assumptions

[F1] The group and closed-subgroup conventions and the all-algebra-valued criterion are [[def-group-scheme-over-a-field]], [[def-morphism-and-closed-subgroup-scheme]], and [[lem-closed-subgroup-scheme-valued-point-criterion]].

[F2] The additive and multiplicative group schemes have the displayed structure morphisms over arbitrary algebras. ([[ex-additive-multiplicative-and-general-linear-group-schemes]])

[F3] Affine scheme morphisms correspond to algebra maps, and product coordinate rings are tensor products. ([[thm-affine-scheme-ring-anti-equivalence]], [[thm-affine-fibre-product-tensor-ring]])

## Counterexample

Let $k$ be algebraically closed of characteristic $p>0$. Set
$$\alpha_p=\operatorname{Spec}k[x]/(x^p),\qquad \mu_p=\operatorname{Spec}k[t]/(t^p-1).$$
Then $\alpha_p(k)=\{0\}$ and $\mu_p(k)=\{1\}$ are isomorphic singleton groups. Their underlying $k$-schemes are isomorphic by $t=1+x$. Nevertheless they are not isomorphic as $k$-group schemes: $\alpha_p$ has additive comultiplication $x\mapsto x\otimes1+1\otimes x$, while in the coordinate $x=t-1$ the multiplicative law of $\mu_p$ has $x\mapsto x\otimes1+1\otimes x+x\otimes x$. The proof below excludes every group-scheme isomorphism, not merely the displayed scheme isomorphism.


**Given:** An algebraically closed field $k$ of characteristic $p>0$ and the two displayed schemes.

1.1 For every commutative $k$-algebra $R$, $\alpha_p(R)=\{a\in R:a^p=0\}$ is an additive subgroup of $R$: $(a+b)^p=a^p+b^p$ and $(-a)^p=(-1)^pa^p$. Also $\mu_p(R)=\{u\in R^\times:u^p=1\}$ is a multiplicative subgroup of $R^\times$. The closed immersions into $\mathbf G_a$ and $\mathbf G_m$ therefore give the induced group laws by [F1]–[F2]. Each coordinate algebra has dimension $p$ over $k$, so is finite type. The formula $t=1+x$ identifies their underlying rings because $(1+x)^p-1=x^p$. In a field $a^p=0$ forces $a=0$, and $t^p=1$ forces $(t-1)^p=0$, hence $t=1$. Thus both rational-point groups are singleton while both schemes retain a nonzero nilpotent coordinate. [F1, F2, F3, given, algebra]

2.1 Every group-scheme homomorphism $f:\alpha_p\to\mathbf G_m$ corresponds by [F3] to a unit $g(x)=\sum_{j=0}^{p-1}c_jx^j$ in $k[x]/(x^p)$ satisfying $g(0)=1$ and $g(x+y)=g(x)g(y)$ in $k[x,y]/(x^p,y^p)$. Compare coefficients of $x^{r-1}y$ for $1\le r<p$: the left side has coefficient $rc_r$, the right side $c_{r-1}c_1$. Since $c_0=1$ and $1,\ldots,p-1$ are invertible in $k$, induction gives $c_r=c_1^r/r!$. Now compare the coefficient of $x^{p-1}y$: the left side is zero because every term of $g(x+y)$ has total degree less than $p$, while the right side is $c_{p-1}c_1=c_1^p/(p-1)!$. Thus $c_1=0$ and all $c_r=0$ for $r>0$. This also covers $p=2$. Hence every such homomorphism is the trivial one, $g=1$. [F1, F2, F3, step 1.1, algebra]

3.1 If $\alpha_p\cong\mu_p$ as group schemes, compose that isomorphism with the closed subgroup inclusion $\mu_p\hookrightarrow\mathbf G_m$. The result would be nontrivial: on coordinate rings the inclusion pulls $t$ back to its nonconstant class in $k[t]/(t^p-1)$, and an isomorphism cannot send $t-1\ne0$ to zero. This contradicts step 2.1. Thus the two group schemes are not isomorphic despite their isomorphic underlying schemes and rational-point groups. Nilpotent test algebras distinguish their laws; for example their common coordinate $x=t-1$ has the additional product term $x\otimes x$ for $\mu_p$ written in the counterexample. [F1, F2, F3, step 1.1, step 2.1, algebra] ∎
