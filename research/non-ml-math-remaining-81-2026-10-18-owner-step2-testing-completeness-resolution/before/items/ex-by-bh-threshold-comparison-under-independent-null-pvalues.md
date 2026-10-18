---
id: ex-by-bh-threshold-comparison-under-independent-null-pvalues
kind: example
title: "BY and BH thresholds for independent valid p-values"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - alg-benjamini-yekutieli-step-up-procedure
  - alg-benjamini-hochberg-step-up-procedure
  - def-statistical-experiment
  - def-harmonic-number-for-set-cover-analysis
  - def-null-valid-p-value-and-fwer-fdr
  - def-prds-on-true-null-coordinates
  - def-conditional-law-given-a-random-element
  - thm-by-fdr-control-under-arbitrary-dependence
  - thm-bh-fdr-control-under-prds
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Let $S=\{1/100,1/25,13/100,29/100,1\}$ and put masses $1/100,3/100,9/100,16/100,71/100$ on these five values. On the finite sample space $\Omega=S^4$ equipped with its power-set sigma-algebra $\mathcal F=\mathcal P(S^4)$ (equivalently, the finite product of the discrete sigma-algebras), use the product probability law. Let the four coordinate projections be p-values and make all four null hypotheses true in the one-point parameter experiment. Each p-value is measurable and valid, and the coordinates are independent. For $q=1/5$, the observed ordered vector

$$\left(\frac1{100},\frac1{25},\frac{13}{100},\frac{29}{100}\right)$$

has positive probability. BH rejects three hypotheses on this outcome, whereas BY rejects two. The independent model supplies the PRDS premise for BH, and BY's theorem needs only validity.

## Facts & Assumptions

**Given:** The finite sample space and product law described in the Example, four true null hypotheses, and $q=1/5$.

[F1] [[def-statistical-experiment]]: a statistical experiment is a measurable sample space, a parameter-label set, and a family of probability laws.

[F2] [[def-null-valid-p-value-and-fwer-fdr]]: p-value validity is the superuniform bound $P(p_i\le u)\le u$ at every $u\in[0,1]$ under a true null.

[F3] [[def-prds-on-true-null-coordinates]]: PRDS requires each true-null coordinate's conditional probabilities of increasing Borel sets to be nondecreasing on its support.

[F4] [[def-conditional-law-given-a-random-element]]: a conditional-law kernel satisfies the joint-probability identity for every conditioning event and target event.

[F5] [[alg-benjamini-hochberg-step-up-procedure]]: BH uses critical values $kq/m$ and rejects the first $R$ ordered hypotheses, where $R$ is the largest passing rank.

[F6] [[alg-benjamini-yekutieli-step-up-procedure]]: BY uses critical values $kq/(mH_m)$ and rejects the first $R$ ordered hypotheses.

[F7] [[def-harmonic-number-for-set-cover-analysis]]: $H_4=1+1/2+1/3+1/4=25/12$.

[F8] [[thm-by-fdr-control-under-arbitrary-dependence]]: valid p-values under arbitrary dependence give BY FDR at most $(m_0/m)q$.

[F9] [[thm-bh-fdr-control-under-prds]]: valid p-values with PRDS on the true-null set give BH FDR at most $(m_0/m)q$.

[A1] The sample space is $\Omega=S^4$ with $\mathcal F=\mathcal P(S^4)$; equivalently, $\mathcal F$ is the finite product of the discrete sigma-algebras on $S$. The four coordinates have the specified independent common marginal law, and all four null hypotheses are true.

[A2] Assume the Axiom of Choice ([[def-axiom-of-choice]]) when invoking the general PRDS theorem's conditional-law convention; the finite kernel constructed below is explicit.

## Verification

**Proof technique:** direct finite calculation.

**Given:** The product experiment, the marginal distribution, all four true nulls, and $q=1/5$.

1.1 The five masses sum to one, and the sum of the product point masses on $S^4$ is $(\sum_{s\in S}\mu(\{s\}))^4=1$, so these masses define a probability law on the finite sample space. For any subsets $B_1,\ldots,B_4\subseteq S$, summing the product masses over $B_1\times\cdots\times B_4$ factors as $\prod_i\mu(B_i)$; thus the coordinate p-values are mutually independent. Each coordinate has support $1/100,1/25,13/100,29/100,1$ and cumulative probabilities $1/100,4/100,13/100,29/100,1$, respectively. At each support value the cumulative probability equals that value; between successive support values it stays at the preceding value, and below $1/100$ it is zero. Thus $P(p_i\le u)\le u$ for every $u\in[0,1]$, so all four p-values are valid by [F2]. [A1, F1, F2, algebra]

1.2 Fix a coordinate $i$. For $x\in S$, define $K_i(x,\cdot)$ as the law of the four-vector obtained by fixing coordinate $i$ at $x$ and drawing the other three coordinates independently from the specified marginal; for $x\notin S$, use a fixed point mass. Since $S$ is finite, each evaluation is Borel measurable and each section is a probability measure. For Borel $A\subseteq[0,1]$ and $D\subseteq[0,1]^4$, product-mass factorization gives $\int_A K_i(x,D)\,P_{p_i}(dx)=P(p_i\in A,\ p\in D)$, so this is a conditional law by [F4]. If $D$ is coordinatewise increasing and $x\le x'$ in $S$, then fixing any same remaining triple makes the vector at $x$ coordinatewise at most the vector at $x'$, so its indicator of $D$ is no larger. Averaging over the same three-coordinate product law yields $K_i(x,D)\le K_i(x',D)$. This holds for every $i$, and [F3] gives PRDS on the all-true-null set. [A1, F3, F4, given, construct]

1.3 The event that the four coordinates take the four distinct values $1/100,1/25,13/100,29/100$ in any order has probability $4!(1/100)(3/100)(9/100)(16/100)>0$. On this event $H_4=25/12$. BH's critical values are $1/20,1/10,3/20,1/5$, so the first three ordered p-values pass and the fourth does not, giving $R_{BH}=3$. BY's critical values are $3/125,6/125,9/125,12/125$, so ranks one and two pass and rank three does not, giving $R_{BY}=2$. [A1, F5, F6, F7, given, algebra]

2.1 Here $m_0=m=4$. By [F8] and [F9], each rule has FDR at most $q=1/5$ under this model; step 1.3 gives a positive-probability event on which their rejection counts differ. [A1, A2, F8, F9, step 1.3, algebra] ∎