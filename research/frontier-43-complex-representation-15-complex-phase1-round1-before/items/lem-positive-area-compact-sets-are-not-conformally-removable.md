---
id: lem-positive-area-compact-sets-are-not-conformally-removable
kind: lemma
title: Compact sets of positive area are not conformally removable
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-axiom-of-choice
  - def-borel-sigma-algebra
  - def-beltrami-coefficient-and-maximal-dilatation
  - def-complex-domain
  - def-conformal-removable-compact-set
  - def-countable-choice
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-measurable-beltrami-coefficient
  - def-riemann-sphere-holomorphic-charts
  - def-weak-solution-beltrami-equation
  - rem-complex-plane-euclidean-dictionary
  - rem-riemann-sphere-one-point-compactification
  - thm-borel-sets-are-lebesgue-measurable
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-compact-subset-of-a-hausdorff-space-is-closed
  - thm-measurable-riemann-mapping-sphere
  - thm-mobius-transformations-biholomorphic-sphere
  - thm-one-quasiconformal-is-conformal
axiom_use: Assume the Axiom of Choice for the measurable Riemann mapping theorem and the local one-quasiconformal/conformal interface. Countable Choice is used by the Beltrami, weak-solution, and Borel/Lebesgue interfaces; AC implies it by [[thm-choice-implies-dependent-implies-countable-choice]].
proof_strategy: direct
verification:
  precheck: pass
dependency_level: 11
sources:
  scraped: []
  references:
    - title: "Malik Younsi, On removable sets for holomorphic functions, EMS Surv. Math. Sci. 2 (2015) 219-254"
      url: "https://math.hawaii.edu/~myounsi/Removable.pdf"
      locator: "§4.2, Proposition 4.4 and the following remark, printed p. 235 / author-PDF p. 14: a Beltrami coefficient equal to one half the indicator of a positive-area compact set gives a sphere homeomorphism conformal off $E$ and not Möbius; the note states the same counterexample also rules out CH-removability."
    - title: "Mikhail Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials, vol. I (book draft, Stony Brook)"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 2 §16.2, Proposition 16.4, printed p. 215: a removable set has zero area by solving a nontrivial Beltrami differential supported on it. The proof here spells out the coefficient, chart convention and non-Möbius contradiction."
---

## Statement

Assume the Axiom of Choice. Let $K\subseteq\widehat{\mathbb C}$ be compact and suppose its finite-chart part $E:=K\cap\mathbb C$ has positive planar Lebesgue area, $\lambda_2(E)>0$, using $\mathbb C\cong\mathbb R^2$ ([[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]], [[rem-complex-plane-euclidean-dictionary]]). Then there is a homeomorphism $F:\widehat{\mathbb C}\to\widehat{\mathbb C}$ conformal on $\widehat{\mathbb C}\setminus K$ that is not a Möbius transformation. Thus $K$ is not globally conformally removable ([[def-conformal-removable-compact-set]]), and every globally conformally removable compact set has zero area in the finite chart.

## Facts & Assumptions

**Given:** AC, a compact set $K\subseteq\widehat{\mathbb C}$, and $E=K\cap\mathbb C$ with $\lambda_2(E)>0$.

[F1] The Riemann sphere is compact Hausdorff and has its finite and infinity holomorphic charts ([[rem-riemann-sphere-one-point-compactification]], [[def-riemann-sphere-holomorphic-charts]]). Hence compact $K$ is closed, so $E$ is Borel in the finite chart ([[thm-compact-subset-of-a-hausdorff-space-is-closed]], [[def-borel-sigma-algebra]]).

[F2] Under Countable Choice, Borel subsets of $\mathbb R^2$ are Lebesgue measurable ([[thm-borel-sets-are-lebesgue-measurable]], [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]). Thus the indicator of $E$ is a measurable function in the finite chart.

[F3] A Beltrami coefficient on the sphere is an almost-everywhere class determined by its finite-chart representative, with its infinity-chart expression fixed by the holomorphic transition rule; its norm is the essential supremum of the modulus ([[def-measurable-beltrami-coefficient]]).

[F4] A weak solution on the sphere is locally $W^{1,2}$ in holomorphic charts and satisfies $F_{\bar z}=\mu F_z$ almost everywhere; a sphere Beltrami coefficient of norm below $1$ has a quasiconformal homeomorphic solution with that coefficient ([[def-weak-solution-beltrami-equation]], [[thm-measurable-riemann-mapping-sphere]]).

[F5] If a homeomorphism of complex domains lies in $W^{1,2}_{\rm loc}$ and has weak Wirtinger derivative $f_{\bar z}=0$ almost everywhere, then it is conformal ([[thm-one-quasiconformal-is-conformal]]).

[F6] Möbius transformations are biholomorphic in the sphere charts, so their Beltrami coefficient is zero almost everywhere ([[thm-mobius-transformations-biholomorphic-sphere]], [[def-beltrami-coefficient-and-maximal-dilatation]]).

[F7] A compact sphere set is globally conformally removable exactly when every sphere homeomorphism conformal off it is Möbius ([[def-conformal-removable-compact-set]]).

[F8] AC implies Countable Choice ([[thm-choice-implies-dependent-implies-countable-choice]]); the Borel/Lebesgue, coefficient, weak-solution and normalized measurable-Riemann-mapping interfaces use the stated choice assumptions ([[def-axiom-of-choice]], [[def-countable-choice]]).

## Proof

**Proof technique:** prescribe a nonzero measurable Beltrami coefficient on the positive-area set and solve it on the sphere.

1.1 Let $E:=K\cap\mathbb C$. By [F1], $E$ is Borel in the finite chart, and [F2] makes it Lebesgue measurable. The Countable Choice assumption of the Borel/Lebesgue interface follows from AC by [F8]. [F1, F2, F8, given]

2.1 Define the finite-chart function $\mu_0(z)=\tfrac12$ for $z\in E$ and $\mu_0(z)=0$ for $z\notin E$. By [F2] it is measurable. Since $\lambda_2(E)>0$, its essential supremum is exactly $\|\mu_0\|_\infty=\tfrac12$: the pointwise bound gives at most $\tfrac12$, while for every $t<\tfrac12$ the set $\{|\mu_0|>t\}$ contains $E$ and has positive measure. The sphere-chart rule [F3] therefore defines a Beltrami coefficient $\mu$ with $\|\mu\|_\infty=\tfrac12<1$. [F2, F3, step 1.1, given, algebra]

3.1 Apply the existence clause of [F4] with $k=\tfrac12$. It gives an orientation-preserving sphere homeomorphism $F$ that is a weak solution for $\mu$ and has Beltrami coefficient $\mu_F=\mu$ almost everywhere. [F3, F4, step 2.1, given]

4.1 On every local chart in $\widehat{\mathbb C}\setminus K$, the coefficient $\mu$ is zero almost everywhere because its finite-chart support is $E\subseteq K$ and the transition rule preserves zero. Hence the weak Beltrami equation from [F4] gives $F_{\bar z}=0$ almost everywhere there. The local coordinate maps belong to $W^{1,2}_{\rm loc}$ by [F4], so [F5] makes them conformal. The Countable Choice assumptions of these measurable and weak-solution interfaces follow from AC by [F8]. Thus $F$ is conformal on $\widehat{\mathbb C}\setminus K$. [F3, F4, F5, F8, step 1.1, step 3.1]

5.1 If $F$ were Möbius, [F6] would give $\mu_F=0$ almost everywhere. This contradicts $\mu_F=\mu=\tfrac12$ on the positive-area set $E$ by step 2.1. Therefore $F$ is not Möbius, and [F7] says $K$ is not globally conformally removable. The same argument for any compact $K$ of positive area proves that every globally conformally removable compact set has zero area. The normalized measurable-Riemann-mapping and measure interfaces use the choice assumptions recorded in [F8]. [F3, F6, F7, F8, step 2.1, step 3.1, step 4.1, given] ∎
