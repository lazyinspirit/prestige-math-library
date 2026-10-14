---
id: lem-real-l-two-kernel-operator-is-bounded-and-rank-one-compatible
kind: lemma
title: Real L2 kernels define bounded operators and represent rank-one tensors
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 0
deps: [def-countable-choice, def-finite-sigma-finite-and-semifinite-measures, def-hilbert-space, def-l-p-space-as-a-quotient-by-null-functions, def-product-sigma-algebra-and-finite-product-sigma-algebras, def-real-and-complex-inner-product-space, lem-l-two-with-the-integral-pairing-is-a-hilbert-space, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique, thm-tonelli-theorem-for-sigma-finite-product-spaces]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "L. Horváth, P. Kokoszka, and R. Reeder, Estimation of the Mean of Functional Time Series and a Two-Sample Problem, JRSS B 75 (2013), Theorem 1 and Appendix A.1, printed pp.105–106 and 117–119"
      url: "https://www.stat.colostate.edu/~piotr/horvathKokoszkaReeder2013.pdf"
    - title: "S. Hörmann and P. Kokoszka, Functional Time Series, in Time Series Analysis: Methods and Applications, Handbook of Statistics 30 (2012), pp.157–186; bibliographic context, DOI 10.1016/B978-0-444-53858-1.00007-7"
      url: "https://doi.org/10.1016/B978-0-444-53858-1.00007-7"
---

## Statement

Let $I=[0,1]$ with its Borel sigma-algebra and Lebesgue measure $dt$, and let
$H=L^2(I,dt;\mathbb R)$ and $K=L^2(I^2,dt\times dt;\mathbb R)$ be the
quotient spaces by null functions. Assume Countable Choice, so these $L^2$
spaces have their usual real Hilbert-space structures. For $k\in K$ and
$f\in H$, define, for almost every $u$,
$$ (T_k f)(u)=\int_0^1 k(u,v)f(v)\,dv. $$
This defines a bounded linear operator $T_k:H\to H$ and
$\|T_k\|\le\|k\|_K$. For $x,y\in H$, the class $x\boxtimes y$ represented by
$x(u)y(v)$ is well-defined in $K$, satisfies
$$ \|x\boxtimes y\|_K=\|x\|_H\|y\|_H, $$
and $T_{x\boxtimes y}=x\otimes y$, where
$(x\otimes y)h=\langle h,y\rangle_H x$.
For $x,y,g,h\in H$ the product-kernel inner product also satisfies
$$ \langle x\boxtimes y,g\boxtimes h\rangle_K =\langle x,g\rangle_H\langle y,h\rangle_H. $$

## Facts & Assumptions

**Given:** Countable Choice; the Borel probability space $(I,\mathcal B,dt)$; the product measure $dt\times dt$ on $I^2$; and the real $L^2$ quotient spaces $H$ and $K$.

[A1] Countable Choice is assumed for the Hilbert-space $L^2$ interfaces ([[def-countable-choice]], [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]).

[F1] The product measure is sigma-finite and satisfies $(dt\times dt)(A\times B)=dt(A)dt(B)$ for Borel $A,B$ ([[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]], [[def-finite-sigma-finite-and-semifinite-measures]]).

[F2] Tonelli applies to nonnegative Borel functions on $I^2$ and makes their section integrals measurable ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F3] If a product-measurable function is in $L^1(dt\times dt)$, its sections are integrable almost everywhere, the section-integral function is measurable after zero extension on the exceptional null set, and its integral equals the product integral ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[F4] The real $L^2$ quotient has inner product $\langle f,g\rangle=\int fg\,dt$ and satisfies Cauchy–Schwarz ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]], [[def-l-p-space-as-a-quotient-by-null-functions]], [[def-real-and-complex-inner-product-space]]).

## Proof

**Given:** The spaces, functions, and conventions in the Statement and Facts & Assumptions.

1.1 Choose measurable representatives of $x$ and $y$. By [F1]–[F2], $$ \int_{I^2}|x(u)y(v)|^2\,d(dt\times dt) =\left(\int_I|x(u)|^2\,du\right)\left(\int_I|y(v)|^2\,dv\right)<\infty. $$ Changing either representative changes the product only on $(N\times I)\cup(I\times M)$ for null sets $N,M\subset I$; [F1] gives this union product measure zero. Hence $x\boxtimes y$ is a well-defined class in $K$ and the displayed integral proves its norm identity. [A1, F1, F2, F4]

1.2 Choose Borel representatives of $k$ and $f$. The function $(u,v)\mapsto k(u,v)f(v)$ is product-measurable and belongs to $L^1(dt\times dt)$, since Cauchy–Schwarz on $I^2$ gives $$ \int_{I^2}|k(u,v)f(v)|\,du\,dv \le\|k\|_K\left(\int_{I^2}|f(v)|^2\,du\,dv\right)^{1/2} =\|k\|_K\|f\|_H. $$ By [F3] its section integrals are defined almost everywhere and have a measurable representative. For almost every $u$, sectionwise Cauchy–Schwarz and [F2] give $$ |(T_kf)(u)|^2\le\|f\|_H^2\int_I|k(u,v)|^2\,dv, \qquad \|T_kf\|_H^2\le\|k\|_K^2\|f\|_H^2. $$ If $f$ is changed on a $dt$-null set, its section integral is unchanged for every $u$ whose $k(u,\cdot)$ is square-integrable. If $k$ is changed on a $(dt\times dt)$-null set, the difference times $f(v)$ is in $L^1$ by the same Cauchy–Schwarz estimate, so [F3] makes its section integral zero for almost every $u$. Thus $T_k$ is well-defined on the quotients. Linearity follows from linearity of the section integral, and the second estimate proves boundedness and $\|T_k\|\le\|k\|_K$. [F1, F2, F3, F4, algebra]

2.1 For $k=x\boxtimes y$ and almost every $u$, the section is integrable by step 1.2 and $$ (T_{x\boxtimes y}f)(u) =x(u)\int_I y(v)f(v)\,dv =x(u)\langle f,y\rangle_H =((x\otimes y)f)(u). $$ Thus $T_{x\boxtimes y}=x\otimes y$ as operators on $H$. This includes $x=0$ or $y=0$, when both operators are zero. [step 1.1, step 1.2, F4, algebra]

3.1 For $x,y,g,h\in H$, [F3] applies to $x(u)y(v)g(u)h(v)$ because Cauchy–Schwarz on $I^2$ bounds its absolute integral by $\|x\|_H\|g\|_H\|y\|_H\|h\|_H$. Fubini then factors the integral into $\langle x,g\rangle_H\langle y,h\rangle_H$, proving the stated inner-product identity. [F1, F3, F4, step 1.1, algebra] ∎