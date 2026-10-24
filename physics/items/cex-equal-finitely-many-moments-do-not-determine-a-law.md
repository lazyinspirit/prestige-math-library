---
id: "cex-equal-finitely-many-moments-do-not-determine-a-law"
kind: "counterexample"
title: "Equal finitely many moments do not determine a law"
deps: ["def-characteristic-function-of-a-real-random-variable", "thm-binomial-theorem", "thm-pascals-rule", "thm-nonnegative-weighted-sums-of-measures", "prop-dirac-measure-is-a-probability-measure"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: "Norris, Probability and Measure"
      url: https://www.statslab.cam.ac.uk/~james/Lectures/pmall.pdf
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement refuted

No fixed finite list of initial moments determines a probability law. For every integer $m\ge0$ there are distinct finitely supported Borel probability laws with identical moments of orders $0,\ldots,m$. The zeroth moment means the integral of the constant one, including at the atom zero.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement refuted.

[F1] A Borel probability law on the real line is the object whose distribution is at issue. [[def-characteristic-function-of-a-real-random-variable]].

[F2] The real binomial expansion includes zero arguments and zeroth powers. [[thm-binomial-theorem]].

[F3] Pascal recursion combines neighboring binomial coefficients. [[thm-pascals-rule]].

[F4] Finite weighted sums of Dirac measures are measures. [[thm-nonnegative-weighted-sums-of-measures]].

[F5] A Dirac mass at any real point is a probability measure. [[prop-dirac-measure-is-a-probability-measure]].

## Counterexample

**Proof technique:** direct.

1.1 Put $N=m+1\ge1$ and $$\mu=2^{1-N}\sum_{\substack{0\le k\le N\\k\ \mathrm{even}}}\binom Nk\delta_k,\qquad \nu=2^{1-N}\sum_{\substack{0\le k\le N\\k\ \mathrm{odd}}}\binom Nk\delta_k.$$ All coefficients are nonnegative real images of the natural binomial coefficients. The binomial theorem at (1,1) and (-1,1) says that the sum of the even and odd coefficient totals is $2^N$, while their difference is zero. Each total is $2^{N-1}>0$. Thus these finite weighted measures are Borel probabilities. They are distinct because $\mu(\{0\})=2^{1-N}>0$ and $\nu(\{0\})=0$. [F1, F2, F4, F5]

1.2 For a polynomial P define $\Delta P(x)=P(x+1)-P(x)$. The binomial theorem gives $\Delta(x^j)=\sum_{r=0}^{j-1}\binom jr x^r$ for j>=1, while $\Delta1=0$. By linearity each application lowers a positive degree by at least one and kills a constant, so $\Delta^N P=0$ whenever $\deg P<N$. To compute the iterate, induction gives $$\Delta^rP(x)=\sum_{k=0}^r(-1)^{r-k}\binom rk P(x+k).$$ The base r=0 is P(x). Subtract this expression at x from the expression at x+1: the interior coefficient of P(x+k) is $(-1)^{r+1-k}[\binom r{k-1}+\binom rk]=(-1)^{r+1-k}\binom{r+1}k$, and the coefficients at k=0,r+1 are $(-1)^{r+1}$ and one. This proves the induction including both endpoints. Taking r=N, x=0 and P(x)=x^j, j<N, yields $\sum_{k=0}^N(-1)^k\binom Nk k^j=0$. For j=0 the polynomial is constantly one, so its value at zero is one. [F2, F3]

2.1 Every required moment is finite because the supports are finite. The difference of the jth moments of the two laws equals $2^{1-N}\sum_{k=0}^N(-1)^k\binom Nk k^j=0$ for $0\le j\le m=N-1$. This proves the promised failure of determination for every m. When m=0 the witnesses are $\delta_0$ and $\delta_1$ and only total mass is matched. For m=2 the even law has masses 1/4 at 0 and 3/4 at 2, while the odd law has masses 3/4 at 1 and 1/4 at 3. Their means are both 3/2 and their second moments both 3, yet their masses at zero differ. All finite choices are specified by parity, and no AC is used. [step 1.1, step 1.2] ∎
