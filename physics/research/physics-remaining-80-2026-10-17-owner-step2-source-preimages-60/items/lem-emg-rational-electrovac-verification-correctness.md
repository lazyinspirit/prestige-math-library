---
id: lem-emg-rational-electrovac-verification-correctness
kind: lemma
title: Correctness of finite rational tensor verification
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - alg-emg-rational-electrovac-verification
  - cor-multivariate-polynomial-ring-over-a-domain-is-a-domain
  - def-field-of-fractions
  - thm-algebra-of-derivatives
dependency_roles:
  alg-emg-rational-electrovac-verification: mathematical-premise
  cor-multivariate-polynomial-ring-over-a-domain-is-a-domain: mathematical-premise
  def-field-of-fractions: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Tim Adamo and E. T. Newman, The Kerr-Newman Metric: A Review, arXiv:1410.6626v2"
      url: https://arxiv.org/pdf/1410.6626
      locator: "Sections 2.1-2.2: exact Kerr-Newman field and tensor verification, used as a comparison treatment"
physical_scope: null
---


## Statement

For every admissible input of [[alg-emg-rational-electrovac-verification]], every returned rational numerator-denominator pair represents the corresponding displayed inverse, Maxwell, Christoffel, Ricci, scalar, or Einstein-residual expression in
$K=\operatorname{Frac}(\mathbb Q[r,y,M,a,q])$. Its numerator-zero flag is true if and only if that rational function is identically zero in $K$. On any real open chart where the recorded divisors are nonzero and $w=\sqrt{|\det g|}$, a zero flag therefore certifies the corresponding exact coordinate identity. The signature and volume hypotheses are not certified by this lemma.

## Facts & Assumptions

**Given:** An admissible input as in [[alg-emg-rational-electrovac-verification]], with all input denominators and recorded divisors nonzero on the real chart.

[F1] [[alg-emg-rational-electrovac-verification]]: the procedure uses sparse polynomial addition, multiplication and differentiation, rational cross-products and the finite Christoffel, Maxwell, Ricci and contraction schedules stated in its Definition.

[F2] [[cor-multivariate-polynomial-ring-over-a-domain-is-a-domain]]: if $R$ is an integral domain, then $R[x_1,\ldots,x_n]$ is an integral domain for every finite $n$, including $n=0$.

[F3] [[def-field-of-fractions]]: for an integral domain $D$, $\operatorname{Frac}(D)=(D\setminus\{0\})^{-1}D$ consists of fractions $p/d$ with $p,d\in D$, $d\ne0$, modulo the localisation equivalence relation.

[F4] [[thm-algebra-of-derivatives]]: finite sums and products differentiate by the sum and product rules, and a quotient with nonzero denominator differentiates by $(p/d)'=(p'd-pd')/d^2$.

[F5] [[alg-emg-rational-electrovac-verification]]: the adopted curvature
convention is $R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z$,
$R^a{}_{bcd}$ is the coefficient of $R(\partial_c,\partial_d)\partial_b$,
and $\operatorname{Ric}_{bd}=R^a{}_{bad}$; clause 3 gives the expanded
coordinate Ricci schedule.

[A1] The input matrix has $\det g\ne0$ in $K$; every rational denominator used by the procedure remains nonzero on the chart, and the supplied $w$ satisfies $w=\sqrt{|\det g|}>0$ there.

## Proof


1.1 Each input polynomial has finite support. Addition enumerates and combines a finite set of coefficient terms, multiplication enumerates the finite Cartesian product of the two supports, and monomial differentiation returns one term or zero. By [F2] these operations are operations in the integral domain $P$, and by [F1] every operation in the procedure is one of these finite polynomial operations or a finite rational combination of them. [given, F1, F2, algebra]

1.2 A pair $(p,d)$ with $d\ne0$ represents $p/d$ in $K$. By [F3], equality of $(p,d)$ and $(u,v)$ is exactly $pv=ud$. Since $P$ is an integral domain, $p/d=0$ holds exactly when $p=0$. Thus each cross-product operation represents the corresponding sum, product, quotient or derivative from [F4], and the numerator-zero flag is exact; it is not a numerical tolerance. [A1, F2, F3, F4, algebra]

1.3 The cofactor identity $g\,\operatorname{adj}(g)=(\det g)I$ follows entrywise from the signed permutation expansion: diagonal entries are the Laplace expansion of $\det g$, while each off-diagonal entry is the same expansion with two equal rows and is zero by pairwise cancellation of permutations. Division by $\det g\ne0$ in [A1] therefore returns the inverse matrix, and the sixteen inverse residuals are exactly zero. [A1, F1, algebra]

2.1 The formula for $F$ differentiates the input covector and forms the
coordinate exterior derivative. The Christoffel schedule is symmetric in its
lower indices, hence torsion-free. Substituting the schedule and using
$g_{im}g^{ml}=\delta_i^l$ gives
$$g_{im}\Gamma^m{}_{kj}+g_{jm}\Gamma^m{}_{ki}=\tfrac12(\partial_k g_{ij}+\partial_j g_{ik}-\partial_i g_{kj})+\tfrac12(\partial_k g_{ji}+\partial_i g_{jk}-\partial_j g_{ki})=\partial_k g_{ij}.$$
so the connection is metric-compatible. If two such connections differ by
$C^a{}_{bc}$, lower the first index with $g$; torsion-freeness makes
$C_{abc}=C_{acb}$, and metric compatibility gives
$C_{jki}+C_{ikj}=0$. Symmetry in the last two slots turns this into
$C_{abc}=-C_{bac}$. These relations imply
$C_{abc}=C_{acb}=-C_{cab}=-C_{cba}=C_{bca}=C_{bac}=-C_{abc}$, so the
computed connection is unique. Expanding $R(\partial_c,\partial_d)\partial_b$
by [F5] gives
$R^a{}_{bcd}=\partial_c\Gamma^a{}_{db}-\partial_d\Gamma^a{}_{cb}
+\Gamma^a{}_{ce}\Gamma^e{}_{db}-\Gamma^a{}_{de}\Gamma^e{}_{cb}$;
its trace $R^k{}_{ikj}$ is the algorithm's Ricci schedule, using lower-index
symmetry of $\Gamma$. All contractions use the same inverse. By induction
over the procedure's finite ordered instruction list, every stored rational
pair equals its corresponding coordinate expression. [F1, F5, A1, step 1.1,
step 1.2, step 1.3, algebra]

3.1 On the real chart, [A1] makes each rational denominator and each recorded divisor nonzero, so the fraction operations equal ordinary smooth-function operations there. The formal quotient rule in [F4] is therefore the chart derivative. Since the polynomial numerator is identically zero exactly when its element of $P$ is zero by [F2]-[F3], a true flag certifies the exact coordinate identity throughout the whole admissible chart, not merely at sampled points. The converse for a chart with fixed parameter values is not asserted: specialization can make a nonzero element of $P$ vanish. Lorentz signature and the volume equation remain separate input hypotheses in [A1]. [A1, F2, F3, F4, step 1.2, algebra] ∎

## Remarks

The lemma verifies the abstract procedure, not a particular run or a computer algebra library. A finite run may be recorded as additional exact-algebra evidence; it does not certify physical applicability or supply the signature and volume hypotheses.

