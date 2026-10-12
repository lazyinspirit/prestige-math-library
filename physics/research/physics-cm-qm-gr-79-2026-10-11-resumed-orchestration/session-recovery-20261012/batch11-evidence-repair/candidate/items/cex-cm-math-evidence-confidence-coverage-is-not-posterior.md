---
id: cex-cm-math-evidence-confidence-coverage-is-not-posterior
kind: counterexample
title: "Coverage level is not the posterior probability of the realized confidence set"
status: draft
origin: pipeline
domain: mathematics
deps: [def-cm-confidence-set-and-coverage, def-conditional-probability, def-finite-probability-space-and-event, def-measure, def-probability-measure, def-sigma-algebra, thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces]
dependency_roles:
  def-cm-confidence-set-and-coverage: mathematical-premise
  def-conditional-probability: mathematical-premise
  def-finite-probability-space-and-event: mathematical-premise
  def-measure: mathematical-premise
  def-probability-measure: mathematical-premise
  def-sigma-algebra: mathematical-premise
  thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces: mathematical-premise
dependency_level: 1
proof_strategy: direct computation
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: "L. Wasserman, All of Statistics: A Concise Course in Statistical Inference (Springer, 2004), Example 6.14 (after Berger and Wolpert, 1984) and the warning in Section 6.3.2; full text copy at the cited URL"
      url: "https://egrcc.github.io/docs/math/all-of-statistics.pdf"
    - title: "S. Greenland, S. J. Senn, K. J. Rothman, J. B. Carlin, C. Poole, S. N. Goodman and D. G. Altman, 'Statistical tests, P values, confidence intervals, and power: a guide to misinterpretations', European Journal of Epidemiology 31 (2016), 337–350"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4877414/"
verification:
  precheck: pass
---

## Statement refuted

Statement refuted: "if $C$ is a confidence set of level $1-\alpha$ for a
family $(\mathbb P_\theta)_{\theta\in\Theta}$ and $\pi$ is any probability
distribution on $\Theta$ for which the conditional law of $\theta$ given the
datum $s$ exists, then the conditional probability that $\theta\in C(s)$
given $s$ equals $1-\alpha$"
([[def-cm-confidence-set-and-coverage]]).

## Facts & Assumptions

**Given:** The parameter set $\Theta=\{14,16,18\}$, the data space $S=\mathbb R^2$ with the full power-set sigma-algebra, and, for each $\theta\in\Theta$, the four-point set $D_\theta:=\{(\theta-1,\theta-1),(\theta-1,\theta+1),(\theta+1,\theta-1),(\theta+1,\theta+1)\}$.

[L1] For each $\theta\in\Theta$, $A\mapsto\lvert A\cap D_\theta\rvert/4$ is a probability measure on $(S,\mathcal S)$, where $\mathcal S=2^{S}$ is the full power set, a sigma-algebra. ([[def-measure]], [[def-probability-measure]], [[def-sigma-algebra]])

[L2] A confidence set is a map $C:S\to2^{\Theta}$ with each $\{\theta\in C\}$ measurable, its coverage at $\theta$ is $\mathbb P_\theta(\theta\in C)$, and its level is $1-\alpha$ when the infimum of the coverages is at least $1-\alpha$. ([[def-cm-confidence-set-and-coverage]])

[L3] On a finite probability space with $\mathbb P(B)>0$, the conditional probability of $A$ given $B$ is $\mathbb P(A\mid B)=\mathbb P(A\cap B)/\mathbb P(B)$; a finite weighted set $(W,w)$ determines such a probability measure and finite weighted sums give its probabilities. ([[def-conditional-probability]], [[def-finite-probability-space-and-event]], [[thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces]])

## Counterexample

1.1 By [L1] each $\theta\in\Theta$ determines a probability measure $\mathbb P_\theta$ on $(S,\mathcal S)$ with $\mathbb P_\theta(\{s\})=1/4$ for $s\in D_\theta$ and $\mathbb P_\theta(\{s\})=0$ otherwise. Define $$C(s):=\begin{cases}\{s_1-1\}\cap\Theta,&s_1=s_2,\\ \Bigl\{\dfrac{s_1+s_2}{2}\Bigr\}\cap\Theta,&s_1\neq s_2 .\end{cases}$$ Each $C(s)$ is a subset of $\Theta$, and each set $\{\theta\in C\}$ is a subset of $S$ and therefore an element of the full power set $\mathcal S=2^{S}$, so $C$ is a confidence set by [L2]. [given, L1, L2]

2.1 For fixed $\theta$ the four points of $D_\theta$ evaluate under $C$ as follows: $(\theta+1,\theta+1)$ gives $C=\{(\theta+1)-1\}=\{\theta\}$, which contains $\theta$; $(\theta-1,\theta-1)$ gives $C=\{(\theta-1)-1\}=\{\theta-2\}$, which does not contain $\theta$; and the two points with distinct coordinates, $(\theta+1,\theta-1)$ and $(\theta-1,\theta+1)$, both give $C=\{\theta\}$. Hence $\mathbb P_\theta(\theta\in C)=3/4$ for every $\theta\in\Theta$, and the coverage level of $C$ is $3/4$ by [L2]. [step 1.1, L1, L2, algebra]

2.2 Let $s^\ast:=(15,17)$. Since $s^\ast$ has distinct coordinates, step 1.1 gives $C(s^\ast)=\{(15+17)/2\}=\{16\}$. Moreover, $s^\ast\in D_\theta$ holds exactly for $\theta=16$, so $\mathbb P_\theta(\{s^\ast\})$ equals $1/4$ for $\theta=16$ and $0$ for $\theta\in\{14,18\}$. [step 1.1, L1, algebra]

3.1 Fix weights $\pi(14),\pi(16),\pi(18)\ge0$ summing to $1$ with $\pi(16)>0$, and let $Q$ be the finite probability measure on $\Theta\times S$ given by $Q(\{(\theta,s)\})=\pi(\theta)\mathbb P_\theta(\{s\})$ for the twelve pairs with $\mathbb P_\theta(\{s\})>0$; by [L3] this is the probability measure of the finite weighted model. The event $\{s=s^\ast\}$ has $Q$-probability $\pi(16)\cdot\frac14>0$, so the conditional probability given $s^\ast$ is defined by [L3]. [step 2.2, given, L3]

4.1 The event $\{\theta\in C(s),\,s=s^\ast\}$ equals $\{\theta=16,\,s=s^\ast\}$, because $C(s^\ast)=\{16\}$ by step 2.2; its $Q$-probability is $\pi(16)\cdot\frac14$, the same as $Q(\{s=s^\ast\})$ by step 2.2. Hence $$Q\bigl(\theta\in C(s)\,\big|\,s=s^\ast\bigr)=\frac{\pi(16)/4}{\pi(16)/4}=1 .$$ [step 2.2, step 3.1, L3, algebra]

5.1 The confidence set $C$ has level $3/4$ by step 2.1, while for the prior $\pi$ and the datum $s^\ast$ the conditional probability that $\theta\in C(s)$ is $1$ by step 4.1; since $1\neq3/4$, the refuted statement is false. [step 2.1, step 4.1, algebra] ∎

## Remarks

The parameter is treated as random only through the explicitly specified
weights $\pi$; the computation uses the finite weighted model and the
conditional-probability identity of [L3]. The witness shows that the coverage
level $3/4$ carries no data-conditional posterior content: the data can be
consistent with exactly one parameter value while the level remains $3/4$.
