---
id: thm-riemann-stieltjes-darboux-criterion
kind: theorem
title: "Darboux criterion for Riemann-Stieltjes integrability with a nondecreasing integrator"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-riemann-stieltjes-sum-and-integral,
       def-partition-and-refinement, def-finite-sum, lem-finite-sum-laws,
       def-complete-ordered-field, def-bounded-set,
       cor-archimedean-reciprocal]
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
nondecreasing. Then $f$ is Riemann-Stieltjes integrable with respect to $\alpha$
if and only if for every $\varepsilon>0$ there is a partition $P$ with

$$U_\alpha(f,P)-L_\alpha(f,P)<\varepsilon.$$

Equivalently, writing $\omega_i(f)$ for the oscillation of $f$ on
$[t_i,t_{i+1}]$, the condition is
$\sum_{i<n}\omega_i(f)\Delta_i\alpha<\varepsilon$.

## Facts & Assumptions

**Given:** A bounded $f:[a,b]\to\mathbb R$ and a nondecreasing $\alpha:[a,b]\to\mathbb R$.

[L1] Tagged, upper, and lower Stieltjes sums are those of [[def-riemann-stieltjes-sum-and-integral]].

[L2] Common refinements exist and insertion does not increase mesh ([[def-partition-and-refinement]]).

[L3] Finite sums split, telescope, and preserve inequalities termwise ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L4] Every nonempty bounded set of reals has a supremum and infimum ([[def-complete-ordered-field]], [[def-bounded-set]]).

[L5] Arbitrarily small positive reciprocal naturals exist ([[cor-archimedean-reciprocal]]).

## Proof

**Proof technique:** direct.

1.1 For every partition $P$, $U_\alpha(f,P)-L_\alpha(f,P)=\sum_{i<n}(M_i-m_i)\Delta_i\alpha=\sum_{i<n}\omega_i(f)\Delta_i\alpha$. Refinement can only decrease the upper sum and increase the lower sum, because each refined supremum is no larger and each refined infimum no smaller than its coarse counterpart. [L1, L2, L3, L4]

1.2 Suppose first that the mesh-limit integral is $I$. Given $\varepsilon>0$, choose a partition $P$ fine enough that every tagged sum over $P$ is within $\varepsilon/4$ of $I$. In each subinterval choose tags whose values approach its supremum and infimum within a common error small enough, using [L5] and the finite number of intervals. The two resulting tagged sums differ by more than $U_\alpha(f,P)-L_\alpha(f,P)-\varepsilon/2$, but by less than $\varepsilon/2$ through $I$; hence $U_\alpha(f,P)-L_\alpha(f,P)<\varepsilon$. [L1, L3, L4, L5]

2.1 Conversely suppose the Darboux condition. The lower sums have a supremum $I_-$ and the upper sums an infimum $I_+$, with $I_-\le I_+$. Step 1.1 and the criterion force $I_-=I_+=:I$. Given $\varepsilon>0$, choose $P_0$ with $U_\alpha(f,P_0)-L_\alpha(f,P_0)<\varepsilon/3$. A tagged sum on any refinement of $P_0$ lies between those two bounds. For an arbitrary sufficiently fine partition $Q$, compare it with $P_0\vee Q$: only the intervals of $Q$ meeting a point of $P_0$ are altered, and the criterion applied after inserting short intervals around those finitely many points makes their total weighted oscillation smaller than $2\varepsilon/3$. Thus $|S(f,\alpha;Q,\xi)-I|<\varepsilon$. [step 1.1, L1, L2, L3, L4]

3.1 Steps 1.2 and 2.1 prove both directions, and step 1.1 proves the weighted-oscillation formulation. [step 1.1, step 1.2, step 2.1] ∎

