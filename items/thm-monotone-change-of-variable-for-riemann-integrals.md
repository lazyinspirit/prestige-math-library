---
id: thm-monotone-change-of-variable-for-riemann-integrals
kind: theorem
title: "Monotone change of variable for Riemann-integrable functions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-darboux-integral, def-darboux-sums,
       def-partition-and-refinement, def-finite-sum,
       lem-finite-sum-laws, def-bounded-set, def-monotone-function,
       def-derivative, cor-mean-value-theorem,
       thm-darboux-equals-riemann,
       cor-integrability-of-absolute-values-products-and-lattice-operations,
       thm-ftc-second-part,
       def-oriented-integral]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "William F. Trench, Introduction to Real Analysis, Theorem 3.3.18"
      url: "https://people.math.sc.edu/girardi/m5545/TrenchBook/FreeHyperlinkedEdition2pt04.pdf"
pipeline_run: null
---

## Statement

Let $\phi:[c,d]\to[a,b]$ be a monotone surjection, differentiable on $[c,d]$ in the one-sided endpoint sense, with Riemann-integrable derivative. For every bounded $f:[a,b]\to\mathbb R$,
$$f\text{ is Riemann integrable}\quad\Longleftrightarrow\quad(f\circ\phi)|\phi'|\text{ is Riemann integrable},$$
and, when these conditions hold,
$$\int_a^b f(x)\,dx=\int_c^d f(\phi(t))|\phi'(t)|\,dt.$$
Flat subintervals of $\phi$ are allowed.

## Facts & Assumptions

**Given:** The monotone differentiable surjection $\phi$ with integrable derivative and a bounded $f$.

[L1] On every subinterval, the mean value theorem writes $\Delta\phi=\phi'(\eta)\Delta t$ ([[cor-mean-value-theorem]]).

[L2] Darboux integrability is equivalent to arbitrarily small upper-minus-lower sums ([[def-darboux-sums]], [[def-darboux-integral]]).

[L3] Products, absolute values, and positive and negative parts of Riemann-integrable functions are integrable ([[cor-integrability-of-absolute-values-products-and-lattice-operations]]).

[L4] Darboux integrals agree with tagged Riemann-sum limits ([[thm-darboux-equals-riemann]]).

[L5] The integral of an integrable derivative is the endpoint difference ([[thm-ftc-second-part]]).

## Proof

**Proof technique:** direct.

1.1 Assume first that $\phi$ is nondecreasing, and let $0\le h\le M$. [L1]
For a partition $P=\{t_i\}$ of $[c,d]$, transport its points through $\phi$ and delete repeated image points. If $U_i,u_i$ are the supremum and infimum of $\phi'$ on $[t_{i-1},t_i]$, the mean value theorem gives
$$u_i\Delta t_i\le \phi(t_i)-\phi(t_{i-1})\le U_i\Delta t_i.$$
On a flat interval the image increment is zero and $\phi'=0$ in its interior, so its contribution may be discarded.

2.1 Compare the upper sum of $h$ on the transported partition with the upper sum of $(h\circ\phi)\phi'$ on $P$. [step 1.1, L2, L4]
On each nonflat interval the two relevant suprema differ, after multiplication by $\Delta t_i$, by at most $M(U_i-u_i)\Delta t_i$; the identical estimate holds for lower sums. Hence each pair of corresponding sums differs by at most
$$M\sum_i(U_i-u_i)\Delta t_i.$$
Because $\phi'$ is integrable, refinements can make this error arbitrarily small. Taking upper and lower integrals therefore gives
$$\overline{\int_a^b}h=\overline{\int_c^d}(h\circ\phi)\phi',\qquad \underline{\int_a^b}h=\underline{\int_c^d}(h\circ\phi)\phi'.$$
Thus one nonnegative function is integrable exactly when the other is, and their integrals then agree.

3.1 For a general bounded $f$, choose $M$ with $f+M\ge0$. Since $\phi'$ is integrable and $\int_c^d\phi'=\phi(d)-\phi(c)=b-a$, applying step 2.1 to $f+M$ and subtracting the constant term proves both the integrability equivalence and the integral identity for $f$. [step 2.1, L3, L5]

4.1 If $\phi$ is nonincreasing, reverse the source orientation and apply steps 1.1–3.1 to the resulting nondecreasing parametrization. The sign reversal is exactly removed by $|\phi'|$ and the oriented-integral convention. [step 1.1, step 2.1, step 3.1] ∎
