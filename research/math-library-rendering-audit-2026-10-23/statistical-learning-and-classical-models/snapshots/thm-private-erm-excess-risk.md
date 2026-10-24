---
id: thm-private-erm-excess-risk
kind: theorem
title: "Private finite-class ERM excess-risk bound"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 6
deps:
  - alg-private-finite-class-erm
  - cor-exponential-reciprocal-and-positivity
  - def-differential-privacy-and-adjacency
  - def-natural-logarithm
  - lem-probability-measure-basic-identities
  - thm-exponential-addition-formula
  - thm-exponential-is-strictly-increasing
  - thm-finite-class-agnostic-erm-bound
  - thm-natural-logarithm-laws
justified_by: []
proof_strategy: direct
axiom_use: No form of the Axiom of Choice is used. The finite output distribution, pairwise sensitivity proof, finite union bound, and finite-class agnostic deviation supplier are choice-free.
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Cynthia Dwork and Aaron Roth, The Algorithmic Foundations of Differential Privacy, Chapter 3 §3.4 and Chapter 11 §11.1"
      url: "https://privacytools.seas.harvard.edu/resource/thealgorithmicfoundationsofdifferentialprivacypdf"
    - title: "Shai Shalev-Shwartz and Shai Ben-David, Understanding Machine Learning: From Theory to Algorithms, Chapter 4 §4.2"
      url: "https://www.inf.u-szeged.hu/~turan/ML-Konyv.pdf"
---

## Statement

Let $(\mathcal X,\Sigma_X)$ be a nonempty measurable space, let $\mathcal C$ be a finite nonempty class of measurable classifiers $h:\mathcal X\to\{0,1\}$, let $n\ge1$ be an integer, and let $\varepsilon>0$. On the domain of finite labeled databases of size at least $n$, use add/remove adjacency, with both neighboring databases required to remain in the domain. For a database $D$ of size $m\ge n$, write
$$\widehat L_D(h)=\frac1m\sum_{(x,y)\in D}\mathbf1\{h(x)\ne y\},$$
where records are counted with multiplicity. The finite-class exponential selector that outputs $h\in\mathcal C$ with probability proportional to $\exp(-\varepsilon n\widehat L_D(h)/2)$ is pure $\varepsilon$-differentially private on this domain.

For the statistical guarantee, let $P$ be any probability law on $\mathcal X\times\{0,1\}$, let $Z_1,\ldots,Z_n$ be IID with law $P$, and apply the same selector to their labeled sample. Define the population risk $L_P(h)=P\{h(X)\ne Y\}$. For every $0<\beta<1$, with probability at least $1-\beta$ over both the sample and the selector's random draw, its output $H$ satisfies
$$L_P(H)-\inf_{h\in\mathcal C}L_P(h) \le 2\sqrt{\frac{\ln|\mathcal C|+\ln(4/\beta)}{2n}} +\frac{2}{\varepsilon n}\left(\ln|\mathcal C|+\ln(2/\beta)\right).$$
If $|\mathcal C|\ge2$ and $0<\alpha,\beta<1$, then
$$n\ge24\max\left\{ \frac{\ln|\mathcal C|+\ln(1/\beta)}{\varepsilon\alpha}, \frac{\ln|\mathcal C|+\ln(1/\beta)}{\alpha^2} \right\}$$
suffices to make this excess risk at most $\alpha$ with probability at least $1-\beta$. If $|\mathcal C|=1$, the excess risk is identically zero.

## Statement references

Dwork and Roth, *The Algorithmic Foundations of Differential Privacy*, Definition 3.4 and Chapter 11 §11.1: [full text](https://privacytools.seas.harvard.edu/resource/thealgorithmicfoundationsofdifferentialprivacypdf).

Shalev-Shwartz and Ben-David, *Understanding Machine Learning: From Theory to Algorithms*, Chapter 4 §4.2 and Corollary 4.6: [full text](https://www.inf.u-szeged.hu/~turan/ML-Konyv.pdf).

[[def-differential-privacy-and-adjacency]]: finite-support databases, add/remove adjacency, and the ordered event inequality.

[[alg-private-finite-class-erm]]: the measurable finite-class selector and its exponential weights.

[[thm-finite-class-agnostic-erm-bound]]: the choice-free two-sided finite-class deviation event used in the statistical argument.

## Facts & Assumptions

**Given:** A nonempty measurable instance space, a finite nonempty measurable binary class $\mathcal C$, an integer $n\ge1$, $\varepsilon>0$, add/remove neighboring finite labeled databases restricted to sizes at least $n$, and an IID sample of size $n$ from an arbitrary law $P$ on $\mathcal X\times\{0,1\}$. For the statistical bound also assume $0<\beta<1$; for the sample-size conclusion assume $0<\alpha<1$.

[F1] A database is a finite-support record-count function, add/remove neighbors differ by one record, and $(\varepsilon,0)$-DP means that for every ordered neighboring pair and every output event $A$, $K(D,A)\le e^\varepsilon K(D',A)$. The neighboring relation is symmetric, so both orders are required. [[def-differential-privacy-and-adjacency]]

[F2] On a sample or multiset $D$ of size $m\ge n$, the algorithm uses empirical zero-one risk $\widehat L_D(h)=m^{-1}\sum_{(x,y)\in D}\mathbf1\{h(x)\ne y\}$ and output probabilities proportional to $\exp(-\varepsilon n\widehat L_D(h)/2)$; the formula is invariant under sample permutations. [[alg-private-finite-class-erm]]

[F3] For a finite nonempty measurable class $\mathcal C$ and $n$ IID examples, population and empirical zero-one risks are expectations and sample averages of measurable $[0,1]$-valued losses; with probability at least $1-\gamma$, simultaneously for every $h\in\mathcal C$,
$$|L_P(h)-\widehat L_S(h)|\le a_\gamma:=\sqrt{\frac{\ln|\mathcal C|+\ln(2/\gamma)}{2n}}.$$
This two-sided deviation conclusion is choice-free. [[thm-finite-class-agnostic-erm-bound]]

[F4] For events $A_1,A_2$, the probability of their union is at most the sum of their probabilities. [[lem-probability-measure-basic-identities]]

[F5] The exponential is strictly positive, strictly increasing, and satisfies $\exp(u)/\exp(v)=\exp(u-v)$; the natural logarithm is its inverse on positive reals, is increasing, and obeys the product and reciprocal laws. [[cor-exponential-reciprocal-and-positivity]], [[thm-exponential-is-strictly-increasing]], [[thm-exponential-addition-formula]], [[def-natural-logarithm]], [[thm-natural-logarithm-laws]]

## Proof

**Given:** The hypotheses in the Statement and [F1]–[F5].

1.1 Let $D,D'$ be neighboring databases in the restricted domain and orient them so $D'$ is obtained from $D$ by adding one record $z=(x,y)$. Since both databases are in the domain, $m:=|D|\ge n$. For $q_h=\mathbf1\{h(x)\ne y\}\in\{0,1\}$, $\widehat L_{D'}(h)-\widehat L_D(h)=(m\widehat L_D(h)+q_h)/(m+1)-\widehat L_D(h)=(q_h-\widehat L_D(h))/(m+1)$. As $q_h,\widehat L_D(h)\in[0,1]$, this difference has absolute value at most $1/(m+1)\le1/n$; reversing the pair gives the same bound. [given, F2, algebra]

1.2 For a fixed sample $S$, let $\widehat L_*=\min_{h\in\mathcal C}\widehat L_S(h)$, which exists because the class is finite and nonempty. For any $t>0$, the selector's probability that $\widehat L_S(H)>\widehat L_*+t$ is at most $|\mathcal C|\exp(-\varepsilon n(\widehat L_*+t)/2)/\exp(-\varepsilon n\widehat L_*/2)=|\mathcal C|e^{-\varepsilon nt/2}$: each event weight is bounded by the numerator term and the normalizer includes a minimizer's weight. With $t=\frac{2}{\varepsilon n}(\ln|\mathcal C|+\ln(2/\beta))>0$, this probability is at most $\beta/2$. [given, F2, F5, algebra]

1.3 Apply [F3] with $\gamma=\beta/2$. With probability at least $1-\beta/2$, all $h\in\mathcal C$ satisfy $|L_P(h)-\widehat L_S(h)|\le a$, where $a=\sqrt{(\ln|\mathcal C|+\ln(4/\beta))/(2n)}$. [given, F3, algebra]

2.1 Write $w_D(h)=\exp(-\varepsilon n\widehat L_D(h)/2)$ and $Z_D=\sum_{g\in\mathcal C}w_D(g)$. By [F5] and step 1.1, $e^{-\varepsilon/2}\le w_D(h)/w_{D'}(h)\le e^{\varepsilon/2}$ for each $h$. Summing gives the same two-sided bounds for $Z_D/Z_{D'}$. Each weight and normalizer is positive and finite because the class is finite nonempty and [F5] makes every exponential weight positive. The normalized finite weights therefore form a probability measure on the output class; because the restricted database domain has the power-set sigma-algebra, every event-evaluation function is measurable, so this is a probability kernel. Therefore $(w_D(h)/Z_D)/(w_{D'}(h)/Z_{D'})\le e^\varepsilon$. Summing over any event $A\subseteq\mathcal C$ proves $K(D,A)\le e^\varepsilon K(D',A);$ interchanging $D,D'$ proves the reverse ordered inequality. By [F1] this is pure $\varepsilon$-DP. [given, F1, F2, F5, step 1.1]

2.2 For every fixed sample, step 1.2 bounds the conditional selector failure probability by $\beta/2$, so averaging over the sample gives the same joint failure bound. Intersect that utility event with the deviation event from step 1.3; [F4] gives probability at least $1-\beta$. On the intersection, $\widehat L_S(H)\le\min_g\widehat L_S(g)+t$, $L_P(H)\le\widehat L_S(H)+a$, and for every $h\in\mathcal C$, $\min_g\widehat L_S(g)\le\widehat L_S(h)\le L_P(h)+a$. Taking the infimum over $h$ in the last inequality and combining yields $L_P(H)-\inf_hL_P(h)\le2a+t$, which is the displayed excess-risk bound. [given, F3, F4, step 1.2, step 1.3, algebra]

3.1 Suppose $|\mathcal C|\ge2$ and write $Q=\ln|\mathcal C|+\ln(1/\beta)\ge\ln2$. Then $\ln|\mathcal C|+\ln(4/\beta)=Q+\ln4\le3Q$ and $\ln|\mathcal C|+\ln(2/\beta)=Q+\ln2\le2Q$. The sample-size condition gives $2\sqrt{3Q/(2n)}\le\alpha/2$ and $4Q/(\varepsilon n)\le\alpha/6$, so the bound in step 2.2 is at most $2\alpha/3\le\alpha$. If $|\mathcal C|=1$, its only classifier is always selected and minimizes population risk over that class, so its excess is zero. [given, step 2.2, algebra] ∎

## Source notes

The sensitivity scale $1/n$ is a valid upper bound on the restricted size-at-least-$n$ add/remove domain; no exact maximum-sensitivity claim is used. The agnostic ERM supplier body gives the deviation event and its proof is choice-free, but its current Step-1 readiness hash is stale. This consumer therefore remains escalated until the owner reconciles that supplier record.
