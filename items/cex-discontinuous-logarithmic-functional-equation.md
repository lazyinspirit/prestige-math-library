---
id: cex-discontinuous-logarithmic-functional-equation
kind: counterexample
title: "Assuming choice, a Hamel-basis additive map transported through $\\exp$ gives a discontinuous logarithmic function that is not $c\\log$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-hamel-basis-exists, thm-cauchy-functional-equation-regularity,
       thm-exponential-addition-formula,
       thm-exponential-is-strictly-increasing,
       cor-exponential-is-a-bijection-onto-positive-reals,
       def-axiom-of-choice, thm-composition-of-continuous-functions,
       def-natural-logarithm]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "Henry Ricardo, The Equivalence of Definitions of the Natural Logarithm Function"
      url: "https://www.researchgate.net/publication/359264337_The_Equivalence_of_Definitions_of_the_Natural_Logarithm_Function"
pipeline_run: null
---

## Statement refuted

Continuity cannot be omitted from the multiplicative-to-additive
characterisation. Assuming the Axiom of Choice, there is a function
$f:(0,\infty)\to\mathbb R$ satisfying
$f(xy)=f(x)+f(y)$ that is discontinuous and is not $c\log$ for any scalar
$c$.

## Facts & Assumptions

**Given:** The Axiom of Choice ([[def-axiom-of-choice]]).

[L1] Under choice, $\mathbb R$ has a Hamel basis over $\mathbb Q$; a chosen
basis element has an additive coefficient map
$g:\mathbb R\to\mathbb R$, and there is a nonzero complementary vector on
which that coefficient map vanishes ([[lem-hamel-basis-exists]]).

[L2] An additive real function that is continuous at one point is scalar
multiplication ([[thm-cauchy-functional-equation-regularity]]).

[L3] $\exp(s+t)=\exp(s)\exp(t)$
([[thm-exponential-addition-formula]]).

[L4] Exponential is continuous and strictly increasing
([[thm-exponential-is-strictly-increasing]]) and is a bijection from
$\mathbb R$ onto $(0,\infty)$
([[cor-exponential-is-a-bijection-onto-positive-reals]]).

[L5] A composite of continuous functions is continuous
([[thm-composition-of-continuous-functions]]).

[F1] $\log$ is the inverse of $\exp$
([[def-natural-logarithm]]).

## Counterexample

**Proof technique:** direct.

1.1 Choose a Hamel basis element $b_\ast$, its coefficient map $g$, and a nonzero vector $w$ in the complementary span. Then $g(b_\ast)=1$ and $g(w)=0$. [L1, given]

1.2 For $x>0$, let $t$ be the unique real with $x=\exp(t)$, and define $f(x):=g(t)$. This is well defined by bijectivity in [L4]. [L4, construct]

2.1 The map $g$ is not scalar multiplication. If $g(t)=ct$, then $0=g(w)=cw$ and $w\neq0$ force $c=0$, contradicting $g(b_\ast)=1$. [step 1.1, algebra]

2.2 If $x=\exp(s)$ and $y=\exp(t)$, then [L3] gives $xy=\exp(s+t)$, so $f(xy)=g(s+t)=g(s)+g(t)=f(x)+f(y)$. [step 1.2, L3, L1]

3.1 If $f=c\log$, then composing with exponential and using [F1] gives $g(t)=f(\exp t)=ct$, contradicting step 2.1. [step 1.2, step 2.1, F1]

3.2 If $f$ were continuous, then $g=f\circ\exp$ would be continuous by [L4] and [L5]. The regularity theorem [L2] would make $g$ scalar multiplication, again contradicting step 2.1. [step 1.2, step 2.1, L4, L5, L2]

4.1 Thus the constructed $f$ satisfies the functional equation but is discontinuous and is not a scalar multiple of $\log$. [step 2.2, step 3.1, step 3.2] ∎
