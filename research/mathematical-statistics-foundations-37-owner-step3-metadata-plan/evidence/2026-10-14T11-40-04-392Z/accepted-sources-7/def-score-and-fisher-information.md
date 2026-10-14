---
id: def-score-and-fisher-information
kind: definition
title: "Score and Fisher information"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-dominated-statistical-experiment
  - def-likelihood-density
  - def-random-element-and-real-random-variable
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-moments-variance-and-covariance
  - def-derivative
  - def-higher-derivatives-and-smoothness
  - def-natural-logarithm
  - thm-chain-rule
  - thm-logarithm-derivative-and-integral
  - def-inner-product-space
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "George Deligiannidis, SB2.1 Foundations of Statistical Inference, §3.1–3.2, PDF pp. 21–24"
      url: "https://www.stats.ox.ac.uk/~deligian/pdf/sb21/sb21_notes.pdf"
    - title: "Peter Kempthorne, MIT 18.655 Lecture 13: Unbiased Estimation and Risk Inequalities, PDF pp. 6–8, 16–17"
      url: "https://ocw.mit.edu/courses/18-655-mathematical-statistics-spring-2016/9e3152248b9f79ea4d5cfaae9f31c21b_MIT18_655S16_LecNote13.pdf"
---

## Definition

Let $\mathcal E=((\mathcal X,\mathcal A),\Theta,(P_\theta)_{\theta\in\Theta})$
be a statistical experiment dominated by a fixed sigma-finite positive measure
$\mu$, and let $p_\theta$ be selected finite-valued measurable
Radon–Nikodym density representatives as in
[[def-likelihood-density]]. The simultaneous selection of this arbitrary-index
family uses the Axiom of Choice. No measurability of $\theta\mapsto P_\theta$
or common exceptional null set for an arbitrary uncountable $\Theta$ is
implied.

Let $\Theta$ be open in $\mathbb R^d$, and fix a parameter $\theta$ at
which the selected family $\eta\mapsto p_\eta(x)$ is differentiable for
$\mu$-almost every $x$, with measurable coordinate derivatives. On
$\{x:p_\theta(x)>0\}$, define the log-likelihood
$\ell_\theta(x)=\log p_\theta(x)$ and the **score**
$$S_\theta(x):=\nabla_\theta\ell_\theta(x) =\left(\frac{\partial}{\partial\theta_j}\log p_\theta(x)\right)_{j=1}^d.$$
Set $S_\theta(x)=0$ where $p_\theta(x)=0$, which is $P_\theta$-null.
For $d=1$, this is $S_\theta=\partial_\theta\log p_\theta$.

For $d=1$, the scalar **Fisher information** is
$$I(\theta):=\mathbb E_\theta[S_\theta(X)^2]\in[0,+\infty].$$
When $d>1$ and $S_\theta$ is square-integrable, the **Fisher information
matrix** is $I(\theta)=\mathbb E_\theta[S_\theta(X)S_\theta(X)^\mathsf T]$;
its $i,j$ entry is $\mathbb E_\theta[S_{\theta,i}S_{\theta,j}]$. No scalar
information is defined here for a vector parameter.
The information matrix is a second-moment matrix by definition; it equals the
score covariance matrix when the score has mean zero.

The derivatives, score and information are defined relative to the specified
differentiable representative family. The Radon–Nikodym definition alone
does not supply parameter differentiability or a canonical score version.
