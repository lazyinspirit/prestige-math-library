---
id: ex-private-erm-large-finite-class
kind: example
title: "A finite class can make private ERM impractical"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 7
deps:
  - alg-private-finite-class-erm
  - thm-private-erm-excess-risk
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; all counting is finite.
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
    - title: "Cynthia Dwork and Aaron Roth, The Algorithmic Foundations of Differential Privacy, Chapter 11 §11.1"
      url: "https://privacytools.seas.harvard.edu/resource/thealgorithmicfoundationsofdifferentialprivacypdf"
    - title: "Shai Shalev-Shwartz and Shai Ben-David, Understanding Machine Learning: From Theory to Algorithms, Chapter 4 §4.2"
      url: "https://www.inf.u-szeged.hu/~turan/ML-Konyv.pdf"
---

## Example

Let $d\ge1$, let $\mathcal X=\{0,1\}^d$ with its power-set sigma-algebra, and let $\mathcal C$ be the class of every map from $\mathcal X$ to $\{0,1\}$. Then $|\mathcal C|=2^{2^d}$ and $\ln|\mathcal C|=2^d\ln2$. For fixed $0<\alpha,\beta<1$ and $\varepsilon>0$, the sample-size sufficient condition in the private finite-class ERM theorem becomes
$$n\ge24\max\left\{ \frac{2^d\ln2+\ln(1/\beta)}{\varepsilon\alpha}, \frac{2^d\ln2+\ln(1/\beta)}{\alpha^2} \right\}.$$
The selector's displayed normalizer sums one weight per classifier, so literal exhaustive evaluation of this class has $2^{2^d}$ hypotheses; evaluating each of them on all $m$ records by the direct method uses $m\,2^{2^d}$ loss evaluations. This counts the direct exhaustive implementation only and is not a lower bound for every algorithm exploiting the structure of the class.

## Example references

[[alg-private-finite-class-erm|Finite-class empirical-risk selector]]

[[thm-private-erm-excess-risk|Finite-class private ERM sample-size bound]]

Dwork and Roth, *The Algorithmic Foundations of Differential Privacy*, Chapter 11 §11.1: [full text](https://privacytools.seas.harvard.edu/resource/thealgorithmicfoundationsofdifferentialprivacypdf).

Shalev-Shwartz and Ben-David, *Understanding Machine Learning: From Theory to Algorithms*, Chapter 4 §4.2: [full text](https://www.inf.u-szeged.hu/~turan/ML-Konyv.pdf).

## Facts & Assumptions

**Given:** An integer $d\ge1$, the discrete domain $\mathcal X=\{0,1\}^d$, the class of all binary maps on $\mathcal X$, and fixed parameters $0<\alpha,\beta<1$, $\varepsilon>0$.

[F1] The private ERM sample-size condition for a finite class of size at least two is $24$ times the maximum of the privacy and squared-accuracy terms involving $\ln|\mathcal C|+\ln(1/\beta)$. [[thm-private-erm-excess-risk]]

[F2] The selector normalizer is a sum of one positive empirical-risk weight for every hypothesis in the finite class. [[alg-private-finite-class-erm]]

## Verification

**Given:** The finite domain, class and parameters in the Example and [F1]–[F2].

1.1 There are two independent choices for each of the $d$ coordinates of a point in $\{0,1\}^d$, so $|\mathcal X|=2^d$. [given, algebra]

2.1 A map $h:\mathcal X\to\{0,1\}$ is determined by one binary value at each of the $2^d$ domain points, and every such assignment defines a map. Hence there are $2^{2^d}$ maps, so $|\mathcal C|=2^{2^d}$ and $\ln|\mathcal C|=2^d\ln2$. [given, step 1.1, algebra]

3.1 Since $d\ge1$, $|\mathcal C|\ge2$. Substituting $\ln|\mathcal C|=2^d\ln2$ into [F1] gives exactly the displayed sufficient sample-size condition. [given, F1, step 2.1, algebra]

4.1 By [F2], the normalizer contains $|\mathcal C|=2^{2^d}$ terms. Directly computing one empirical risk by evaluating its loss on each of the $m$ records takes $m$ loss evaluations; doing this for every hypothesis uses $m|\mathcal C|=m\,2^{2^d}$ such evaluations. This is the cost of that exhaustive procedure; the count alone does not rule out an implementation that exploits structure or samples from the same distribution without explicitly listing every hypothesis. [F2, step 2.1, algebra] ∎
