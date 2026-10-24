---
id: def-logarithmic-capacity-compact-set
kind: definition
title: "Robin constant and logarithmic capacity of a compact set"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-logarithmic-potential-and-energy
  - def-probability-measure
  - def-dirac-measure
  - def-real-exponential-function-and-e
  - thm-infimum-property
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "E. B. Saff, Logarithmic Potential Theory with Applications to Approximation Theory, §1"
      url: "https://arxiv.org/pdf/1010.3760"
      locator: "§1, capacity via the minimum-energy problem, printed pp. 168–170"
    - title: "B. Khoruzhenko, LTCC Potential Theory notes, §3"
      url: "https://maths.qmul.ac.uk/~boris/potential_th_notes.pdf"
      locator: "§3, logarithmic capacity and the Robin constant"
verification:
  audited: 2026-10-02
  precheck: n/a
---

## Definition

Let $K\subseteq\mathbb C$ be compact and nonempty, and let $P(K)$ be the set of
Borel probability measures on $K$ ([[def-probability-measure]]), viewed as
measures on $\mathbb C$ carried by $K$. Every $\mu\in P(K)$ has compact support
contained in $K$, so its logarithmic energy $I(\mu)\in(-\infty,+\infty]$ is the
quantity of [[def-logarithmic-potential-and-energy]]; indeed the kernel
$k(z,w)=\log(1/|z-w|)$ is bounded below on $K\times K$: it is $\ge-\log\operatorname{diam}K$
when $\operatorname{diam}K>0$, and $I(\mu)=+\infty$ for the only measure of
$P(K)$ when $K$ is a singleton.

The **Robin constant** of $K$ is

$$V_K:=\inf_{\mu\in P(K)}I(\mu)\in(-\infty,+\infty].$$

The set $P(K)$ is nonempty: it contains the Dirac measure at any point of
$K$ ([[def-dirac-measure]]). Put $E_K:=\{I(\mu):\mu\in P(K),\ I(\mu)<+\infty\}$.
If $E_K=\varnothing$, all energies are $+\infty$ and we set $V_K=+\infty$.
Otherwise $K$ is not a singleton, and $E_K$ is a nonempty subset of $\mathbb R$
bounded below by $-\log\operatorname{diam}K$, so [[thm-infimum-property]]
gives its real infimum. Set $V_K=\inf E_K$ in this case. Adding the value
$+\infty$ does not change any real lower bound, so this is exactly the
extended infimum displayed above. The **logarithmic capacity** of $K$ is

$$\operatorname{cap}(K):=\begin{cases}\exp(-V_K) & \text{if } V_K<+\infty,\\ 0 & \text{if } V_K=+\infty,\end{cases}$$

with $\exp$ the real exponential function ([[def-real-exponential-function-and-e]]).
Thus $\operatorname{cap}(K)\in[0,\infty)$ for every nonempty compact $K$, and for
the empty set one uses the separate convention

$$\operatorname{cap}(\varnothing):=0.$$

## Remarks

**Zero capacity as total divergence of the energy.** For nonempty compact $K$,
$\operatorname{cap}(K)=0$ holds exactly when $V_K=+\infty$, that is, exactly when
$I(\mu)=+\infty$ for **every** $\mu\in P(K)$: the set $\{I(\mu):\mu\in P(K)\}$
lies in $(-\infty,+\infty]$, so its infimum is $+\infty$ precisely when all its
members are $+\infty$. Such a set is called polar; this is the defining
dichotomy used throughout the page.

**Monotonicity under inclusion.** If $K\subseteq L$ are nonempty compact sets,
then every Borel probability measure on $K$, extended by zero to the Borel
subsets of $L$, is a Borel probability measure on $L$ with the same energy;
hence $P(K)\subseteq P(L)$, the infimum over the larger set is no larger,
$V_L\le V_K$, and $\operatorname{cap}(K)\le\operatorname{cap}(L)$. The explicit
case $\operatorname{cap}(\varnothing)=0$ is consistent with this: the empty set
is contained in every set.

**Normalization.** The sign $\exp(-V_K)$ rather than $\exp(V_K)$ is the
convention of the cited sources: it makes $\operatorname{cap}(K)$ a length, for
instance $\operatorname{cap}\overline{D(a,r)}=r$ for a disc. The constant
$V_K$ and the capacity determine each other whenever $V_K<+\infty$.

**Choice.** No choice principle is used in this definition. Choosing a point of
a nonempty compact set to exhibit nonemptiness of $P(K)$ is a single selection
from a nonempty set; the infimum is a set-theoretic construction on a fixed set
of extended reals.
