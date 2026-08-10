---
id: thm-riemann-stieltjes-darboux-criterion
kind: theorem
title: "Darboux criterion for Riemann–Stieltjes integrability with a nondecreasing integrator"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-riemann-stieltjes-sum-and-integral,
       def-partition-and-refinement, def-finite-sum, lem-finite-sum-laws,
       def-complete-ordered-field, def-infimum, thm-infimum-property,
       def-bounded-set,
       cor-archimedean-reciprocal, def-continuity-real,
       thm-monotone-discontinuities-are-jumps]
justified_by: []
aliases: []
landmark: true
short: "Stieltjes Darboux criterion"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, Ch. 6, Theorem 6.6"
      url: "https://archive.org/details/principlesofmath00rudi"
    - title: "William F. Trench, Introduction to Real Analysis, Ch. 3"
      url: "https://people.math.sc.edu/girardi/m5545/TrenchBook/FreeHyperlinkedEdition2pt04.pdf"
pipeline_run: null
---

## Statement

Let $f:[a,b]\to\mathbb R$ be bounded and let $\alpha:[a,b]\to\mathbb R$ be
nondecreasing. Then $f$ is Riemann-Stieltjes integrable in the mesh sense of
[[def-riemann-stieltjes-sum-and-integral]] if and only if both of the following
conditions hold:

1. $f$ is continuous at every discontinuity of $\alpha$; and
2. for every $\varepsilon>0$ there is a partition $P$ with

$$U_\alpha(f,P)-L_\alpha(f,P)<\varepsilon.$$

In condition 2, writing $\omega_i(f)$ for the oscillation of $f$ on
$[t_i,t_{i+1}]$, the condition is
$\sum_{i<n}\omega_i(f)\Delta_i\alpha<\varepsilon$.

In particular, when $\alpha$ is continuous, the weighted Darboux condition
alone is equivalent to mesh Riemann-Stieltjes integrability.

## Facts & Assumptions

**Given:** A bounded $f:[a,b]\to\mathbb R$ and a nondecreasing $\alpha:[a,b]\to\mathbb R$.

[L1] Tagged, upper, and lower Stieltjes sums are those of [[def-riemann-stieltjes-sum-and-integral]].

[L2] Common refinements exist and insertion does not increase mesh ([[def-partition-and-refinement]]).

[L3] Finite sums split, telescope, and preserve inequalities termwise ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L4] Every nonempty set of reals bounded above has a supremum, and every nonempty set bounded below has an infimum ([[def-complete-ordered-field]], [[thm-infimum-property]], [[def-infimum]], [[def-bounded-set]]).

[L5] Arbitrarily small positive reciprocal naturals exist ([[cor-archimedean-reciprocal]]).

[L6] Every discontinuity of a nondecreasing function is witnessed by a positive total one-sided jump ([[thm-monotone-discontinuities-are-jumps]]).

[L7] Continuity controls oscillation in sufficiently small neighborhoods ([[def-continuity-real]]).

## Proof

**Proof technique:** direct.

1.1 For every partition $P$, $U_\alpha(f,P)-L_\alpha(f,P)=\sum_{i<n}(M_i-m_i)\Delta_i\alpha=\sum_{i<n}\omega_i(f)\Delta_i\alpha$. Refinement can only decrease the upper sum and increase the lower sum, because each refined supremum is no larger and each refined infimum no smaller than its coarse counterpart. [L1, L2, L3, L4]

1.2 Suppose first that the mesh-limit integral is $I$. Given $\varepsilon>0$, choose a partition $P$ fine enough that every tagged sum over $P$ is within $\varepsilon/4$ of $I$. In each subinterval choose tags whose values approach its supremum and infimum within a common error small enough, using [L5] and the finite number of intervals. The two resulting tagged sums differ by more than $U_\alpha(f,P)-L_\alpha(f,P)-\varepsilon/2$, but by less than $\varepsilon/2$ through $I$; hence $U_\alpha(f,P)-L_\alpha(f,P)<\varepsilon$. [L1, L3, L4, L5]

1.3 Mesh integrability also forces continuity of $f$ at every discontinuity $c$ of $\alpha$. By [L6], the total increment of $\alpha$ across every sufficiently small interval straddling $c$ is bounded below by a fixed positive number. Complete such an interval to an arbitrarily fine partition and keep every other tag fixed. Tagging the straddling interval first at $c$ and then at an arbitrary point $x$ in that interval changes the sum by $(f(x)-f(c))\Delta\alpha$. Both sums must approach the same mesh limit, so $f(x)\to f(c)$ as $x\to c$. The same one-sided argument applies at an endpoint. [L1, L2, L6, L7]

2.1 Conversely assume both stated conditions. The lower sums have a supremum $I_-$ and the upper sums an infimum $I_+$, with $I_-\le I_+$. Step 1.1 and condition 2 force $I_-=I_+=:I$. Given $\varepsilon>0$, choose $P_0$ with Darboux gap below $\varepsilon/3$. Around each of its finitely many interior points $c$, choose a small neighborhood as follows: if $\alpha$ is continuous at $c$, make the variation of $\alpha$ there so small that twice the bound on $|f|$ times that variation is below the allotted error; if $\alpha$ is discontinuous at $c$, condition 1 and [L7] make the oscillation of $f$ there so small that its product with $\alpha(b)-\alpha(a)$ is below the allotted error. Choose the neighborhoods disjoint and divide the error among their finite number. [step 1.1, L4, L6, L7]

3.1 Let $Q$ now have mesh smaller than all those neighborhood radii and let $R=P_0\vee Q$. A tagged sum on $R$ lies between $L_\alpha(f,P_0)$ and $U_\alpha(f,P_0)$. Comparing a sum on $Q$ with one on $R$, the intervals of $Q$ that do not cross a point of $P_0$ contribute at most the Darboux gap. Each crossing interval lies in one chosen neighborhood: its refinement error is bounded either by $2\sup|f|$ times the local variation of $\alpha$, or by the local oscillation of $f$ times the total variation $\alpha(b)-\alpha(a)$. The choices in step 2.1 make the sum of all crossing errors below $2\varepsilon/3$. Hence every sufficiently fine tagged sum lies within $\varepsilon$ of $I$. [step 2.1, L1, L2, L3, L4, L7]

4.1 Steps 1.2–1.3 prove necessity, steps 2.1–3.1 prove sufficiency, and step 1.1 proves the weighted-oscillation formulation. When $\alpha$ is continuous, condition 1 is vacuous. [step 1.1, step 1.2, step 1.3, step 2.1, step 3.1] ∎
