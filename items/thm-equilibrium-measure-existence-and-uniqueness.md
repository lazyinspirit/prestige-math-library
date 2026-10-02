---
id: thm-equilibrium-measure-existence-and-uniqueness
kind: theorem
title: "Existence and uniqueness of the equilibrium measure"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-logarithmic-capacity-compact-set
  - def-logarithmic-potential-and-energy
  - def-probability-measure
  - def-weak-convergence-of-borel-probability-measures
  - lem-inf-epsilon
  - lem-logarithmic-energy-strict-positivity-for-zero-mass-charges
  - lem-probability-laws-on-a-compact-metric-space-have-weakly-convergent-subsequences
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-logarithmic-energy-well-defined-and-lower-semicontinuous
  - thm-nonnegative-weighted-sums-of-measures
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "E. B. Saff, Logarithmic Potential Theory with Applications to Approximation Theory, §1"
      url: "https://arxiv.org/pdf/1010.3760"
      locator: "§1, existence of the equilibrium measure, printed pp. 168–170"
    - title: "B. Khoruzhenko, LTCC Potential Theory notes, §3"
      url: "https://maths.qmul.ac.uk/~boris/potential_th_notes.pdf"
      locator: "§3, existence and uniqueness of the equilibrium measure"
    - title: "C. Kuehn, Introduction to Potential Theory via Applications, §2.3"
      url: "https://arxiv.org/pdf/0804.4689"
      locator: "§2.3, the equilibrium measure via the minimum energy problem"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $K\subseteq\mathbb C$ be nonempty and compact
with $\operatorname{cap}(K)>0$. Then there is exactly one Borel probability
measure $\mu_K$ on $K$ with

$$I(\mu_K)=V_K=\inf_{\mu\in P(K)}I(\mu)<+\infty .$$

The measure $\mu_K$ is the **equilibrium measure** of $K$. If
$\operatorname{cap}(K)=0$ then $V_K=+\infty$, every $\mu\in P(K)$ has
$I(\mu)=+\infty$, and no equilibrium measure is asserted.

The Axiom of Choice is spent twice: through Countable Choice for the
minimizing sequence, and through the weak sequential compactness of probability
laws of [[lem-probability-laws-on-a-compact-metric-space-have-weakly-convergent-subsequences]].
The energy lower semicontinuity used below is choice-free
([[thm-logarithmic-energy-well-defined-and-lower-semicontinuous]]).

## Facts & Assumptions

**Given:** a nonempty compact set $K\subseteq\mathbb C$ with
$\operatorname{cap}(K)>0$, the probability measures $P(K)$ on $K$, the Robin
constant $V_K$ and the logarithmic energy $I$ of
[[def-logarithmic-capacity-compact-set]] and
[[def-logarithmic-potential-and-energy]], and the Axiom of Choice
([[def-axiom-of-choice]]).

[F1] $P(K)$ is the set of Borel probability measures on $K$
([[def-probability-measure]]), each of compact support contained in $K$;
$V_K=\inf_{\mu\in P(K)}I(\mu)\in(-\infty,+\infty]$ and
$\operatorname{cap}(K)=\exp(-V_K)$ when $V_K<+\infty$ and
$\operatorname{cap}(K)=0$ when $V_K=+\infty$, so
$\operatorname{cap}(K)>0$ is equivalent to $V_K<+\infty$
([[def-logarithmic-capacity-compact-set]]).

[F2] For finite positive Borel measures $\mu,\nu$ of compact support the mixed
energy $I(\mu,\nu)=\iint k\,d\mu\,d\nu\in(-\infty,+\infty]$
is symmetric, $I(\mu,\nu)=I(\nu,\mu)$, and it is computed from the shifted
nonnegative kernel $k_R=k+\log R$ with $R>\operatorname{diam}(\operatorname{supp}\mu\cup\operatorname{supp}\nu)$
by $I(\mu,\nu)=\iint k_R\,d\mu\,d\nu-\mu(\mathbb C)\nu(\mathbb C)\log R$
([[def-logarithmic-potential-and-energy]]).

[F3] If $\mu_n,\mu\in P(K)$ with $\mu_n\Rightarrow\mu$ in the sense of
[[def-weak-convergence-of-borel-probability-measures]], then
$U^\mu(z)\le\liminf_nU^{\mu_n}(z)$ for every $z\in\mathbb C$ and
$I(\mu)\le\liminf_nI(\mu_n)$
([[thm-logarithmic-energy-well-defined-and-lower-semicontinuous]]).

[F4] Assume the Axiom of Choice: every sequence in $P(K)$ has a subsequence
converging weakly to some element of $P(K)$
([[lem-probability-laws-on-a-compact-metric-space-have-weakly-convergent-subsequences]]).

[F5] Assume Countable Choice, and let $\mu,\nu$ be finite positive Borel
measures on $\mathbb C$ with compact support, equal total mass and finite
energy. Then $I(\mu,\nu)$ is finite, $I(\mu-\nu):=I(\mu)-2I(\mu,\nu)+I(\nu)$ is
a real number, $I(\mu-\nu)\ge0$, and $I(\mu-\nu)=0$ if and only if $\mu=\nu$
([[lem-logarithmic-energy-strict-positivity-for-zero-mass-charges]]).

[F6] The Axiom of Choice implies Dependent Choice, which implies Countable
Choice ([[thm-choice-implies-dependent-implies-countable-choice]],
[[def-countable-choice]]).

[F7] If $S\subseteq\mathbb R$ is nonempty and bounded below with infimum $L$,
then for every $\varepsilon>0$ there is $s\in S$ with $s<L+\varepsilon$
([[lem-inf-epsilon]]).

[F8] Finite nonnegative weighted sums of measures are measures, and a convex
combination $(1-t)\mu+t\nu$ with $0\le t\le1$ of probability measures is again
a probability measure ([[thm-nonnegative-weighted-sums-of-measures]],
[[def-probability-measure]]).

## Proof

**Proof technique:** direct.

1.1 Since $\operatorname{cap}(K)>0$, [F1] and the finite-energy construction in [[def-logarithmic-capacity-compact-set]] give the nonempty real set $E_K:=\{I(\mu):\mu\in P(K),\ I(\mu)<+\infty\}$ with $\inf E_K=V_K\in\mathbb R$. It is bounded below by $-\log\operatorname{diam}K$. The infinite energies do not alter its real lower bounds. Applying [F7] to $E_K$, for each $n\ge1$ there is a finite energy below $V_K+1/n$, so $\{\mu\in P(K):I(\mu)<V_K+1/n\}$ is nonempty. [F1, F7, given]

2.1 By [F6] the Axiom of Choice yields Countable Choice, so there is a sequence $(\mu_n)_{n\ge1}$ in $P(K)$ with $I(\mu_n)<V_K+1/n$ for every $n$. [step 1.1, F6]

3.1 By [F4], which assumes the Axiom of Choice of the hypothesis, the sequence $(\mu_n)$ has a subsequence $(\mu_{n_k})_{k\ge1}$ and a limit $\mu\in P(K)$ with $\mu_{n_k}\Rightarrow\mu$. [step 2.1, F4]

4.1 Applying [F3] to the weakly convergent subsequence of step 3.1 and using step 2.1 along it gives $I(\mu)\le\liminf_kI(\mu_{n_k})\le\liminf_k(V_K+1/n_k)=V_K$, while $V_K\le I(\mu)$ holds because $V_K$ is an infimum over $P(K)\ni\mu$; hence $I(\mu)=V_K<+\infty$. [step 3.1, F3, F1]

5.1 For uniqueness let $\mu,\nu\in P(K)$ satisfy $I(\mu)=I(\nu)=V_K$; both have compact support in $K$, finite energy and total mass $1$, so [F5] applies to the pair and the average $\sigma:=\tfrac12\mu+\tfrac12\nu$ lies in $P(K)$ by [F8], whence $I(\sigma)\ge V_K$. Expanding the double integral of $\sigma\otimes\sigma=\tfrac14\mu\otimes\mu+\tfrac14\mu\otimes\nu+\tfrac14\nu\otimes\mu+\tfrac14\nu\otimes\nu$ and using $I(\mu,\nu)=I(\nu,\mu)$ from [F2] gives the finite value $I(\sigma)=\tfrac14I(\mu)+\tfrac12I(\mu,\nu)+\tfrac14I(\nu)$; comparing with the companion expansion $I(\mu-\nu)=I(\mu)-2I(\mu,\nu)+I(\nu)$ of the same bilinear form from [F5], this says $I\bigl(\tfrac12(\mu+\nu)\bigr)=\tfrac12I(\mu)+\tfrac12I(\nu)-\tfrac14I(\mu-\nu)$. Substituting $I(\mu)=I(\nu)=V_K$ yields $V_K\le\tfrac12V_K+\tfrac12I(\mu,\nu)$, that is, $I(\mu,\nu)\ge V_K$. [step 4.1, F2, F5, F8, given]

6.1 With $\sigma$ as in step 5.1 the signed measure $\mu-\nu$ also meets the hypotheses of [F5], so $I(\mu-\nu)=I(\mu)-2I(\mu,\nu)+I(\nu)\le V_K-2V_K+V_K=0$ by step 5.1, while [F5] gives $I(\mu-\nu)\ge0$; hence $I(\mu-\nu)=0$ and [F5] gives $\mu-\nu=0$, that is, $\mu=\nu$, so the minimizer of step 4.1 is the only minimizer and is the stated equilibrium measure $\mu_K$. [step 5.1, F5]

7.1 The zero-capacity case is [F1] verbatim: if $\operatorname{cap}(K)=0$ then $V_K=+\infty$, so an element $\mu\in P(K)$ with $I(\mu)=V_K$ would have $I(\mu)=+\infty$ by definition of the extended infimum, and the statement asserts nothing about the existence of such a $\mu$, which completes the proof. [step 4.1, step 6.1, F1] ∎

## Remarks

**The equilibrium measure is a probability on the conductor.** The
minimizer $\mu_K$ of the theorem is carried by $K$, since $P(K)$ consists of
the probability measures on $K$; this is used by every later item that
integrates against $\mu_K$ over $K$.

**Uniqueness is strict convexity of the energy.** The proof shows more than the
statement needs: any two finite-energy probabilities of equal mass on a common
compact carrier satisfy
$I(\tfrac12(\mu+\nu))=\tfrac14I(\mu)+\tfrac12I(\mu,\nu)+\tfrac14I(\nu)$ and
$\mu\ne\nu$ forces $I(\mu-\nu)>0$ by
[[lem-logarithmic-energy-strict-positivity-for-zero-mass-charges]].

**Where the two choice uses sit.** Countable Choice selects one measure per
level $n$ in step 2.1; the Axiom of Choice itself is the hypothesis of the
weak-compactness statement [F4] used in step 3.1. The lower semicontinuity
[F3] and the infimum characterization [F7] are choice-free.
