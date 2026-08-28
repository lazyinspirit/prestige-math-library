---
id: prop-truncated-l-one-metric-metrises-convergence-in-measure-on-finite-measure-spaces
kind: proposition
title: "On a finite measure space, the truncated L^1 metric metrises convergence in measure"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-convergence-in-measure, def-integral-over-a-measurable-set, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-nonnegative-integral-zero-iff-zero-almost-everywhere]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Exercise 32"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---
## Statement
Let $(X,\mathcal A,\mu)$ be a measure space with $\mu(X)<+\infty$. For
measurable $f,g : X \to \mathbb R$, define
$$d(f,g):=\int \min\{|f-g|,1\}\,d\mu.$$

Then:

1. $d(f,g)=0$ exactly when $f=g$ $\mu$-almost everywhere, so $d$ descends to a
   metric on almost-everywhere equivalence classes of measurable functions.
2. For a sequence $(f_n)$ of measurable functions and a measurable $f$,
   $d(f_n,f)\to0$ if and only if $f_n \to f$ in measure.

## Facts & Assumptions
**Given:** A finite measure space $(X,\mathcal A,\mu)$ and measurable functions $f,g,h,f_n : X \to \mathbb R$.

[L1] Convergence in measure means that for every real $\varepsilon>0$, $\mu(\{|f_n-f|>\varepsilon\}) \to 0$. ([[def-convergence-in-measure]])

[L2] For a measurable set $E$ and a nonnegative measurable function $u$, $\int_E u\,d\mu=\int u\chi_E\,d\mu$. ([[def-integral-over-a-measurable-set]])

[L3] The nonnegative integral is monotone and homogeneous. ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]])

[L4] A nonnegative measurable function has integral $0$ exactly when it vanishes almost everywhere. ([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]])

## Proof

**Proof technique:** direct.

1.1 One has $d(f,f)=0$ and $d(f,g)=d(g,f)$ by the pointwise identities $\min\{|f-f|,1\}=0$ and $\min\{|f-g|,1\}=\min\{|g-f|,1\}$. Also $|f-h|\le |f-g|+|g-h|$ implies $$\min\{|f-h|,1\}\le \min\{|f-g|,1\}+\min\{|g-h|,1\},$$ so [L3] gives $d(f,h)\le d(f,g)+d(g,h)$. [L3, algebra]

1.2 Suppose $d(f_n,f)\to0$. Fix $\varepsilon>0$ and put $A_n:=\{|f_n-f|>\varepsilon\}$. On $A_n$ one has $\min\{|f_n-f|,1\}\ge \min\{\varepsilon,1\}$, so $$\min\{\varepsilon,1\}\,\mu(A_n)\le d(f_n,f).$$ Hence $\mu(A_n)\to0$, which is exactly [L1]. [L1, L2, L3, algebra]

1.3 Conversely, assume $f_n \to f$ in measure. Let $\varepsilon \in (0,1)$ and put $A_n:=\{|f_n-f|>\varepsilon\}$. Then $$d(f_n,f)\le \int_{X\setminus A_n}\varepsilon\,d\mu+\int_{A_n}1\,d\mu \le \varepsilon\mu(X)+\mu(A_n).$$ By [L1], $\mu(A_n)\to0$, so $\limsup_{n\to\infty} d(f_n,f)\le \varepsilon\mu(X)$. Since $\varepsilon \in (0,1)$ was arbitrary and $\mu(X)<+\infty$, it follows that $d(f_n,f)\to0$. [L1, L2, L3, algebra]

1.4 If $d(f,g)=0$, then [L4] applied to $\min\{|f-g|,1\}$ shows $\min\{|f-g|,1\}=0$ almost everywhere, which is equivalent to $f=g$ almost everywhere. Conversely, if $f=g$ almost everywhere, then [L4] gives $d(f,g)=0$. [L4]

2.1 Let $[f]$ denote the almost-everywhere class of $f$. If $f\sim f'$ and $g\sim g'$, then step 1.4 gives $d(f,f')=d(g,g')=0$, so step 1.1 yields $$d(f,g)\le d(f,f')+d(f',g')+d(g',g)=d(f',g').$$ The same argument with the pairs reversed gives $d(f',g')\le d(f,g)$, so $d(f,g)=d(f',g')$. Thus the value $d([f],[g])$ is well defined and step 1.1 makes it a metric on the quotient. [step 1.1, step 1.4, algebra]

3.1 Step 2.1 identifies the quotient metric, and steps 1.2 and 1.3 prove that its convergence is exactly convergence in measure. So the truncated distance metrises convergence in measure on finite measure spaces. [step 1.2, step 1.3, step 2.1] ∎
