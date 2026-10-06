---
id: ex-kostant-multiplicity-in-the-sl3-adjoint-module
kind: example
title: Kostant multiplicity in the sl3 adjoint module
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 7
justified_by: []
aliases: []
deps: [def-axiom-of-choice, thm-kostant-weight-multiplicity-formula, def-kostant-partition-function, prop-the-adjoint-representation-has-highest-weight-the-highest-root, def-height-of-a-root-and-highest-root, prop-root-systems-of-the-classical-complex-lie-algebras, def-classical-complex-matrix-lie-algebras, thm-highest-weight-classification-of-finite-dimensional-irreducible-representations, def-integral-dominant-and-strictly-dominant-weights, lem-finite-semisimple-cartan-root-and-string-structure, prop-weyl-length-equals-positive-root-inversion-number, def-weyl-vector-rho-for-a-chosen-positive-system]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "P. Etingof, Lie Groups and Lie Algebras II (MIT 18.755, Spring 2024), complete lectures"
      url: "https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf"
      locator: "§26.3, printed p. 142, Exercise 26.7(iii) (the sl3 partition values p(k1α1+k2α2) and the resulting weight multiplicities)"
    - title: "B. Weber, Weyl Character Formula II: Formulas of Weyl and Kostant (Penn Math 651, March 2013)"
      url: "https://www2.math.upenn.edu/~brweber/Courses/2013/Math651/Notes/L17_WeylDimII.pdf"
      locator: "pp. 1--3, Theorem 1.4 specialized to the sl3 adjoint zero weight"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Take
$\mathfrak g=\mathfrak{sl}_3$ with
$\Phi^+=\{\alpha_1,\alpha_2,\alpha_1+\alpha_2\}$ and let
$\theta=\alpha_1+\alpha_2$ be the highest root, so that the adjoint module is
$L(\theta)$
([[prop-the-adjoint-representation-has-highest-weight-the-highest-root]],
[[thm-highest-weight-classification-of-finite-dimensional-irreducible-representations]]).
Compute the multiplicity of $\mu=0$ from Kostant's formula
([[thm-kostant-weight-multiplicity-formula]]): with $\rho=\theta$, the terms
are $P(w(2\theta)-\theta)$ for $w\in W=S_3$, and $w(2\theta)-\theta\notin Q_+$
for every $w\ne1$, so only $w=1$ contributes and $m_\theta(0)=P(\theta)=2$,
the two partitions being $\theta$ itself and $\alpha_1+\alpha_2$; this
matches the adjoint weights $\pm\alpha_1$ (multiplicity one each),
$\pm\alpha_2$ (multiplicity one each), $\pm\theta$ (multiplicity one each)
and the zero weight of multiplicity two, for $\dim L(\theta)=8$.

## Facts & Assumptions

**Given:** The Axiom of Choice, the realization of $\mathfrak{sl}_3$ with
diagonal Cartan subalgebra and roots $\pm\alpha_1,\pm\alpha_2,\pm\theta$,
where $\theta=\alpha_1+\alpha_2$, the Weyl group $W=S_3$ with simple
reflections $s_1,s_2$, the Weyl vector $\rho$, and the adjoint module
$L(\theta)$.

[A1] The Axiom of Choice is assumed; it enters through the Kostant formula
and the highest-weight suppliers below ([[def-axiom-of-choice]]).

[F1] In this realization the positive roots are $\alpha_1,\alpha_2,\theta$
and $\theta=\alpha_1+\alpha_2$ is the highest root; the simple reflections act
by $s_1\theta=\alpha_2$, $s_2\theta=\alpha_1$, $s_1\alpha_1=-\alpha_1$,
$s_2\alpha_2=-\alpha_2$, and $\rho=\alpha_1+\alpha_2=\theta$
([[prop-root-systems-of-the-classical-complex-lie-algebras]],
[[def-classical-complex-matrix-lie-algebras]],
[[def-height-of-a-root-and-highest-root]],
[[def-weyl-vector-rho-for-a-chosen-positive-system]]).

[F2] $W=S_3=\{1,s_1,s_2,s_1s_2,s_2s_1,w_0\}$ with lengths $0,1,1,2,2,3$,
and the adjoint module is the irreducible module $L(\theta)$ of highest weight
$\theta$; its weights are the roots together with $0$, with the root spaces
$\mathfrak g_\alpha$ one-dimensional and $\mathfrak h$ of dimension $2$
([[prop-the-adjoint-representation-has-highest-weight-the-highest-root]],
[[lem-finite-semisimple-cartan-root-and-string-structure]],
[[prop-weyl-length-equals-positive-root-inversion-number]]).

[F3] $P(\theta)=2$, because a family $(n_{\alpha_1},n_{\alpha_2},n_\theta)$
with $n_{\alpha_1}\alpha_1+n_{\alpha_2}\alpha_2+n_\theta\theta=\theta$ is
either $(0,0,1)$ or $(1,1,0)$, while $P(\nu)=0$ for $\nu\notin Q_+$
([[def-kostant-partition-function]]).

[F4] Kostant's formula reads
$m_\lambda(\mu)=\sum_{w\in W}(-1)^{\ell(w)}P(w(\lambda+\rho)-(\mu+\rho))$, and
$\theta$ is dominant integral
([[thm-kostant-weight-multiplicity-formula]],
[[def-integral-dominant-and-strictly-dominant-weights]]).

## Verification

1.1 With $\lambda=\theta$, $\rho=\theta$ and $\mu=0$ the arguments of [F4] are $w(2\theta)-\theta$; for $w=1$ this is $\theta$ with $P(\theta)=2$ by [F3], while for $w=s_1$ it is $2\alpha_2-\theta=\alpha_2-\alpha_1$, for $w=s_2$ it is $\alpha_1-\alpha_2$, for $w=s_1s_2$ it is $-2\alpha_1-\theta$, for $w=s_2s_1$ it is $-2\alpha_2-\theta$ and for $w=w_0$ it is $-3\theta$, none of which lies in $Q_+$, so those partitions vanish by [F3]. [F1, F2, F3, F4, A1]

1.2 The two partitions counted by $P(\theta)=2$ are the family with $n_\theta=1$ and the family with $n_{\alpha_1}=n_{\alpha_2}=1$, both summing to $\theta$. [F3]

2.1 Steps 1.1 and 1.2 give $m_\theta(0)=P(\theta)=2$; the adjoint weights are the six roots, each with multiplicity one by [F2], and the zero weight whose multiplicity is the dimension $2$ of $\mathfrak h$, so the weighted count is $6\cdot1+2=8=\dim L(\theta)$, matching the computed zero multiplicity. [F2, step 1.1, step 1.2] ∎ 