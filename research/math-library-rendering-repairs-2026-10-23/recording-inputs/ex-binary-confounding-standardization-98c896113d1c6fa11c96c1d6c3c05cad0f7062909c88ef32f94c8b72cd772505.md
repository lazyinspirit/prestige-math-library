---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/ex-binary-confounding-standardization.json
  precheck: pass
id: ex-binary-confounding-standardization
kind: example
title: "Binary confounding and standardization"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-potential-outcomes-and-consistency
  - def-causal-average-treatment-effects
  - def-conditional-exchangeability-of-potential-outcomes
  - def-conditional-independence-given-a-sigma-algebra
  - def-positivity-for-discrete-treatment
  - thm-discrete-treatment-potential-outcome-mean-identification
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Let $\Omega=\{0,1\}\times\{1,2,3,4\}$ with each point having probability $1/8$, and write its coordinates as $(L,W)$. Set $A=1$ when $L=0,W=1$ or when $L=1,W\in\{1,2,3\}$, and set $A=0$ otherwise. Let $Y^0=10L$, $Y^1=10L+1$, and $Y=Y^A$. Assignment depends on the prognostic covariate $L$, but both treatment arms occur in both strata. The target ATE is $1$; the unadjusted treated-minus-untreated mean is $6$; standardization over the target law of $L$ returns $1$.

## Verification

**Given:** The finite probability space and variables above; the definitions of potential outcomes, conditional exchangeability, positivity, and ATE; and the discrete-treatment identification theorem.

[A1] Choice is assumed for the library's conditional-expectation classes. [[def-axiom-of-choice]]

[F1] Consistency means that the observed outcome equals the potential outcome at the received treatment version. [[def-potential-outcomes-and-consistency]]

[F2] Conditional exchangeability is conditional independence of the full potential-outcome family and treatment given $L$. [[def-conditional-exchangeability-of-potential-outcomes]]

[F3] If one side of conditional independence is measurable with respect to the conditioning sigma-algebra, conditional independence holds. [[def-conditional-independence-given-a-sigma-algebra]]

[F4] Positivity requires positive treatment probability in each target covariate stratum for every treatment in the contrast. [[def-positivity-for-discrete-treatment]]

[F5] The ATE is the target-population mean of $Y^1-Y^0$. [[def-causal-average-treatment-effects]]

[F6] Under consistency, conditional exchangeability and positivity, standardization identifies each potential-outcome mean. [[thm-discrete-treatment-potential-outcome-mean-identification]]

1.1 The point set has eight equally likely elements, $Y^0$ and $Y^1$ are bounded, and $Y=Y^A$ by construction, so all required integrability and consistency conditions hold by [F1]. [given, F1, algebra]

1.2 Given $L=l$, $(Y^0,Y^1)=(10l,10l+1)$ is fixed, hence its sigma-algebra is contained in $\sigma(L)$ and [F3] gives conditional exchangeability [F2]. Direct counting gives $P(A=1\mid L=0)=1/4$, $P(A=1\mid L=1)=3/4$, and the complementary probabilities for $A=0$; both marginal probabilities equal $1/2$. Thus [F4] holds. [A1, F2, F3, F4, algebra]

1.3 In stratum $L=0$, the observed outcome means are $E[Y\mid A=1,L=0]=1$ and $E[Y\mid A=0,L=0]=0$. In stratum $L=1$, they are $11$ and $10$. Since $P(L=0)=P(L=1)=1/2$, [F6] standardizes the treatment means to $E[Y^1]=(1+11)/2=6$ and $E[Y^0]=(0+10)/2=5$, so [F5] gives ATE $1$. [F5, F6, algebra]

2.1 Bayes' rule gives $P(L=1\mid A=1)=3/4$ and $P(L=1\mid A=0)=1/4$. Therefore $E[Y\mid A=1]=(1/4)1+(3/4)11=8.5$ and $E[Y\mid A=0]=(3/4)0+(1/4)10=2.5$, whose difference is $6$, not the ATE. The difference comes from the different target-covariate mixtures in the two treatment groups. [given, step 1.2, algebra] ∎

## Remarks

The arrows below show the inputs in the construction: $A=f(L,W)$ is the assignment rule in the example, and $Y=10L+A$. The independent coordinates $L$ and $W$ generate assignment, while $L$ also directly contributes to the outcome.

```tikz
\begin{tikzpicture}[>=stealth, every node/.style={font=\large}]
\node (W) at (-2,0) {$W$};
\node (A) at (0,0) {$A$};
\node (L) at (0,1.8) {$L$};
\node (Y) at (3,0) {$Y$};
\draw[->,thick] (W) -- (A);
\draw[->,thick] (L) -- (A);
\draw[->,thick] (L) -- (Y);
\draw[->,thick] (A) -- (Y);
\end{tikzpicture}
```

The common input $L$ makes the path $A\leftarrow L\to Y$ visible. Within either stratum, the outcome contrast is $1$; the crude contrast instead mixes the strata with different weights in the two treatment arms. Standardization uses the same target weights $P(L=0)=P(L=1)=1/2$ for both arms. The verification above establishes these facts independently of the diagram.
