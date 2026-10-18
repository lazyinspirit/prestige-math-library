---
id: cex-curved-normal-family-statistic-incomplete
kind: counterexample
title: "A curved normal family can make a sufficient statistic incomplete"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 6
deps:
  - def-exponential-family
  - def-complete-statistic
  - thm-common-reference-factorization-criterion
  - def-standard-normal-and-normal-laws
  - lem-gaussian-even-moment-bound-for-brownian-increments
  - thm-independent-random-elements-have-product-joint-law
  - cor-expectation-linearity-monotonicity-and-modulus-bound
  - def-axiom-of-choice
  - def-standard-borel-space
  - def-statistic-and-estimator
  - cor-continuous-functions-are-borel-measurable
  - prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-measure-with-density
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-borel-sets-are-lebesgue-measurable
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-borel-products-of-euclidean-spaces-are-euclidean-borel
justified_by: []
generation:
  role: counterexample
provenance:
  statement: ai-generated
  proof: ai-generated
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
proof_strategy: direct
sources:
  references:
    - title: "Ryan Martin, Lecture Notes on Advanced Statistical Theory"
      url: "https://homepages.math.uic.edu/~rgmartin/Teaching/Stat511/Notes/511notes.pdf"
    - title: "Joshua M. Tebbs, STAT 512 Mathematical Statistics Lecture Notes"
      url: "https://people.stat.sc.edu/Tebbs/stat512/s24notes.pdf"
    - title: "Peter Kempthorne, MIT 18.655 Lecture Note 6: Sufficiency"
      url: "https://ocw.mit.edu/courses/18-655-mathematical-statistics-spring-2016/bbbca14a2009e47add8c7ea2a49daa41_MIT18_655S16_LecNote6.pdf"
    - title: "Noah Fithian, Stat 210a Reader: Sufficiency"
      url: "https://stat210a.berkeley.edu/fall-2025/reader/sufficiency.html"
    - title: "Noah Fithian, Stat 210a Reader: Completeness, Ancillarity, and Basu’s Theorem"
      url: "https://stat210a.berkeley.edu/fall-2025/reader/completeness.html"
    - title: "Jiahao Tian, Chapter 2: Sufficiency and Exponential Families"
      url: "https://jiahaotian-stat.github.io/Notes/en/Advanced_Stat/2Sufficiency/"
---

## Statement refuted

Assume AC. A curved exponential subfamily can have a sufficient canonical statistic that is not complete.

## Facts & Assumptions

**Given:** AC; $X_1,X_2$ iid $N(\theta,\theta^2)$ for $\theta>0$; $T=(S_1,S_2)=(X_1+X_2,X_1^2+X_2^2)$; and $g(s_1,s_2)=s_1^2-\tfrac32s_2$.

[A1] [[def-axiom-of-choice]]: AC is required by the normal-law construction and the RN criterion below.

[F1] [[def-exponential-family]]: in the representation $h\exp(\eta\cdot T-A(\eta))$, the coordinates in the exponential are the canonical statistic.

[F2] [[def-standard-borel-space]], [[def-statistic-and-estimator]], and [[cor-continuous-functions-are-borel-measurable]]: $\mathbb R^2$ with its Borel sigma-algebra is standard Borel, and the polynomial map $T$ is a statistic.

[F3] [[def-complete-statistic]]: an integrable mean-zero function of $T$ that is nonzero with positive probability disproves completeness.

[F4] [[def-standard-normal-and-normal-laws]] and [[lem-gaussian-even-moment-bound-for-brownian-increments]]: $X_i$ has the law of $\theta+\theta Z_i$ for $Z_i\sim N(0,1)$; symmetry gives $E Z_i=0$ and $E Z_i^2=1$.

[F5] [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]], [[thm-borel-sets-are-lebesgue-measurable]], [[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]], [[thm-lebesgue-measure-of-a-box-of-every-kind]], and [[thm-independent-random-elements-have-product-joint-law]]: Lebesgue measure is sigma-finite, boxes have their side-length volume, and the independent coordinates have product law.

[F6] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: the product normal density integrates by iterated integration.

[F7] [[thm-common-reference-factorization-criterion]]: if an in-model reference dominates the family and its likelihood ratios are Borel functions of $T$, then $T$ is sufficient.

[F8] [[cor-expectation-linearity-monotonicity-and-modulus-bound]]: expectation is linear for integrable terms.

[F9] [[def-measure-with-density]] and [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]: a nonnegative product density defines a measure, and a product measure is determined by its values on measurable rectangles.

[F10] [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]: the affine diffeomorphism $z\mapsto\theta+\theta z$ transforms the standard normal density into the $N(\theta,\theta^2)$ density.

[F11] [[thm-borel-products-of-euclidean-spaces-are-euclidean-borel]]: Borel rectangles generate the Borel sigma-algebra of $\mathbb R^2$.



## Proof

1.1 The map $T$ is polynomial and hence a statistic by [F2]. Let $\lambda_B$ be one-dimensional Lebesgue measure restricted to $\mathcal B(\mathbb R)$; the Borel half-open intervals $(-k,k]$ give it a sigma-finite cover of finite measure by [F5]. By [F4] and the affine change of variables [F10] for $z\mapsto\theta+\theta z$, each $X_i$ has Borel density $q_\theta(x_i)=(\sqrt{2\pi}\theta)^{-1}e^{-(x_i-\theta)^2/(2\theta^2)}$ relative to $\lambda_B$. Independence [F5] gives the joint law $P_\theta^{X_1}\times P_\theta^{X_2}$. The measure with density $q_\theta(x_1)q_\theta(x_2)$ relative to $\lambda_B\times\lambda_B$ exists by [F9]; Tonelli [F6] shows that it has total mass one and agrees with this product law on every measurable rectangle. By [F11], these rectangles generate the Borel sigma-algebra of $\mathbb R^2$, so the product-measure uniqueness clause [F9] identifies this density measure with the joint law. Expanding its density gives $p_\theta(x_1,x_2)=(2\pi)^{-1}\theta^{-2}\exp\left(-S_2/(2\theta^2)+S_1/\theta-1\right)$. Put $u=1/\theta$, $h(x_1,x_2)=(2\pi)^{-1}$, $\Omega=\{(u,-u^2/2):u>0\}$, and $A(u,-u^2/2)=1-2\log u$. Then $p_\theta=h\exp\{uS_1-u^2S_2/2-A(u,-u^2/2)\}$, with normalizer $Z(u,-u^2/2)=e^{A}=e/u^2$; the normalization follows from the product normal density just derived. Thus the canonical statistic is $(S_1,S_2)$, and the natural parameter set lies on $\eta_2=-\eta_1^2/2$, so it contains no open subset of $\mathbb R^2$. Both densities are strictly positive, so $P_\theta\ll P_{\theta_0}$ for any fixed $\theta_0>0$. Their ratio is a Borel function of $T$; since $P_{\theta_0}$ is a model member, [F7] proves sufficiency. [A1, F1, F2, F4, F5, F6, F7, F9, F10, F11, given, algebra]

2.1 From $X_i=\theta+\theta Z_i$ and [F4], $E_\theta X_i=\theta$ and $E_\theta X_i^2=2\theta^2$. The bound $|z|\le1+z^2$ gives $E|Z_i|\le1+E Z_i^2=2$, hence $E_\theta|X_i|<\infty$. Let $q_\theta$ be the one-dimensional normal density from step 1.1 and write $x^+=\max(x,0)$, $x^- =\max(-x,0)$. Independence [F5] identifies the joint law with the product of the two marginal laws, each having density $q_\theta$. Tonelli [F6] therefore gives, for every $a,b\in\{+,-\}$, $E_\theta[X_1^aX_2^b]=\left(\int_{\mathbb R}x^a q_\theta(x)\,dx\right)\left(\int_{\mathbb R}x^b q_\theta(x)\,dx\right)$, where all four factors are finite by $E_\theta|X_i|<\infty$. Subtracting the four finite identities yields $E_\theta[X_1X_2]=(E_\theta X_1)(E_\theta X_2)$; linearity [F8] now gives $E_\theta S_1^2=E X_1^2+E X_2^2+2E X_1E X_2=6\theta^2$, while $E_\theta S_2=4\theta^2$. Hence $E_\theta g(T)=6\theta^2-\tfrac32(4\theta^2)=0$ for every $\theta>0$. Also $|g(T)|\le S_1^2+\tfrac32S_2$, whose expectation is finite, so $g(T)$ is integrable. [F3, F4, F5, F6, F8, step 1.1, given, algebra]

3.1 At $(x_1,x_2)=(1,0)$, $g(T)=-1/2$. By continuity it is nonzero on a neighborhood. The density in step 1.1 is continuous and strictly positive at this point, so there is a smaller nondegenerate rectangle inside that neighborhood on which the density is bounded below by half its value at $(1,0)$. The rectangle has positive $\lambda_B\times\lambda_B$ measure by the one-dimensional box formula and the product rectangle formula [F5, F9], hence it has positive probability under every $\theta>0$. Therefore $g(T)$ is not zero almost surely, contradicting completeness [F3]. [F3, F5, F9, step 2.1, given, algebra, step 1.1] ∎
