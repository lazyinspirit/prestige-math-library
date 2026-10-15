---
id: cex-weak-null-does-not-imply-mixed-assignment-centering
kind: counterexample
title: The weak null does not center every mixed kernel assignment
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - def-two-sample-u-statistic-parameter
  - def-two-sample-order-r-u-statistic-and-first-projections
  - lem-two-sample-u-statistic-projections-well-defined
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  precheck: pass
sources:
  references:
    - title: "E. Y. Chung and J. P. Romano, Asymptotically Valid and Exact Permutation Tests Based on Two-Sample U-Statistics, Stanford Technical Report 2011-09, Appendix A, Lemma A.1 proof"
      url: "https://stacks.stanford.edu/file/dp187pj2131/dp187pj2131_2011-09.pdf"
---

## Statement refuted

For a block-symmetric, block-antisymmetric two-sample kernel, the weak null
$\theta(P,Q;h)=0$ implies that the kernel has mean zero under every assignment
of P- and Q-distributed arguments to its positions.

## Facts & Assumptions

**Given:** The laws and kernel in the Counterexample; the parameter and first-projection conventions in the following suppliers.

[F1] [[def-two-sample-u-statistic-parameter]]: $\theta(P,Q;h)=E_{P^{\otimes2}\otimes Q^{\otimes2}}h$.

[F2] [[def-two-sample-order-r-u-statistic-and-first-projections]]: $g_X(x)=E[h(x,X_2;Y_1,Y_2)]-\theta$ and $g_Y(y)=E[h(X_1,X_2;y,Y_2)]-\theta$.

[F3] [[lem-two-sample-u-statistic-projections-well-defined]]: the displayed section integrals are measurable and square-integrable.

## Counterexample

Let $P$ put mass $3/4$ at $0$ and $1/4$ at $2$, and let $Q$ put mass $3/4$
at $0$ and $1/4$ at $-2$. Take $r=2$ and

$$h(x_1,x_2;y_1,y_2)=x_1x_2-y_1y_2.$$

**Given:** $E_PX=1/2$, $E_QY=-1/2$, and the kernel $h$ above. Verify the weak null and all stated counterexample properties.

1.1 The kernel is symmetric in $(x_1,x_2)$ and in $(y_1,y_2)$, and exchanging the two blocks changes its sign. By independence within each product block, [F1] gives $\theta=(E_PX)^2-(E_QY)^2=(1/2)^2-(-1/2)^2=0$. [F1, given, algebra]

1.2 Under the mixed assignment $(X_1,X_2)\sim P^{\otimes2}$ and $(Y_1,Y_2)\sim P\otimes Q$, independence gives $E h=(E_PX)^2-(E_PX)(E_QY)=1/4-(-1/4)=1/2\ne0$. Thus the weak null does not force all mixed-assignment means to vanish. [F1, given, algebra]

1.3 Every law in $\{P,Q\}$ is bounded and assigns positive mass both to zero and to a nonzero value. Therefore every product of two independently assigned variables has positive probability at zero and positive probability at a nonzero value, so it has positive finite variance. For any two assignments, $h$ is the difference of two independent such products; its second moment is finite and strictly positive. [given, algebra]

1.4 The direct projections are $g_X(x)=x/2-1/4$ and $g_Y(y)=1/4+y/2$. Each has mean zero and variance $3/16$ under its respective law, so both direct first-projection variances are positive. At mixture weight $p=1/4$, $\bar P=pP+(1-p)Q$ has mean $-1/4$ and positive variance; its pooled projection is $g_{\bar P}(z)=(-1/4)(z+1/4)$, which also has positive variance. [F2, F3, given, algebra]

2.1 The example satisfies block symmetry and antisymmetry, the weak parameter null, all mixed second-moment requirements, and positive direct and pooled first-projection variances. Step 1.2 nevertheless gives a mixed assignment with nonzero mean, refuting the Statement. This is a gap in the cited coupling route, not a counterexample to the broader asymptotic theorem by itself. [step 1.1, step 1.2, step 1.3, step 1.4] ∎
