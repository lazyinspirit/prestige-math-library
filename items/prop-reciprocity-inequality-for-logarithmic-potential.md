---
id: prop-reciprocity-inequality-for-logarithmic-potential
kind: proposition
title: "Reciprocity inequality for logarithmic potentials"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-axiom-of-choice
  - def-logarithmic-potential-and-energy
  - def-logarithmic-capacity-compact-set
  - def-probability-measure
  - def-support-of-a-borel-measure
  - thm-equilibrium-measure-existence-and-uniqueness
  - thm-frostman-equilibrium-theorem
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "E. B. Saff, Logarithmic Potential Theory with Applications to Approximation Theory, §1"
      url: "https://arxiv.org/pdf/1010.3760"
      locator: "§1, Proposition 1.13 (reciprocity inequality), printed p. 175"
    - title: "B. Khoruzhenko, LTCC Potential Theory notes, §3"
      url: "https://maths.qmul.ac.uk/~boris/potential_th_notes.pdf"
      locator: "§3, reciprocity of the logarithmic kernel"
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $K\subseteq\mathbb C$ be compact with
$\operatorname{cap}(K)>0$ and let $\mu_K$ be its equilibrium measure. Then for
every compactly supported Borel probability measure $\sigma$ on $\mathbb C$,

$$\inf_{z\in K}U^\sigma(z)\ \le\ V_K=\log\frac1{\operatorname{cap}(K)} .$$

The Axiom of Choice enters only through the existence of the equilibrium
measure and through Frostman's theorem; the reciprocity identity itself and
the infimum estimate are choice-free.

## Facts & Assumptions

**Given:** a compact set $K\subseteq\mathbb C$ with
$\operatorname{cap}(K)>0$, its equilibrium measure $\mu_K$, a compactly
supported Borel probability measure $\sigma$ on $\mathbb C$, the logarithmic
kernel $k(z,w)=\log\frac1{|z-w|}$ with diagonal value $+\infty$, the potential
$U^\nu(z)=\int k(z,w)\,d\nu(w)$ and the mixed energy
$I(\nu,\rho)=\iint k\,d\nu\,d\rho$ of
[[def-logarithmic-potential-and-energy]], and the Axiom of Choice
([[def-axiom-of-choice]]).

[F1] For a finite positive Borel measure $\nu$ of compact support,
$U^\nu(z)\in(-\infty,+\infty]$, and for
$R>\operatorname{diam}\operatorname{supp}\nu$ one has $k_R=k+\log R\ge0$ on
the product of the support with itself and
$I(\nu)=\iint k_R\,d\nu\,d\nu-\nu(\mathbb C)^2\log R$, independently of $R$;
for a pair $\nu,\rho$ of such measures and
$R>\operatorname{diam}(\operatorname{supp}\nu\cup\operatorname{supp}\rho)$
the same shifted kernel is nonnegative on the product of the two supports and
$I(\nu,\rho)=\iint k_R\,d\nu\,d\rho-\nu(\mathbb C)\rho(\mathbb C)\log R$,
independently of $R$
([[def-logarithmic-potential-and-energy]]).

[F2] $V_K=\inf_{\nu\in P(K)}I(\nu)$ and
$\operatorname{cap}(K)=e^{-V_K}$ when $V_K<+\infty$ and $0$ otherwise, so
$\operatorname{cap}(K)>0$ is equivalent to $V_K<+\infty$, and then
$V_K=\log\frac1{\operatorname{cap}(K)}\in\mathbb R$
([[def-logarithmic-capacity-compact-set]]).

[F3] Assume the Axiom of Choice: a compact nonempty $K$ with
$\operatorname{cap}(K)>0$ has exactly one equilibrium measure $\mu_K$, and
$I(\mu_K)=V_K$; the measure $\mu_K$ is a Borel probability measure carried by
$K$, so its support is a nonempty compact subset of $K$
([[thm-equilibrium-measure-existence-and-uniqueness]],
[[def-probability-measure]]).

[F4] Assume the Axiom of Choice: with $\mu_K$ as above,
$U^{\mu_K}(z)\le V_K$ for every $z\in\mathbb C$
([[thm-frostman-equilibrium-theorem]]).

[F5] Tonelli's theorem computes the integral of a nonnegative product-measurable
function on a $\sigma$-finite product as either iterated integral
([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]); the support
$\operatorname{supp}\nu$ of a finite positive Borel measure $\nu$ is closed,
carries $\nu$, and every closed set carrying $\nu$ contains it
([[def-support-of-a-borel-measure]]).

## Proof

**Proof technique:** direct.

1.1 By [F2] and [F3] the hypothesis $\operatorname{cap}(K)>0$ gives $V_K\in\mathbb R$, the equilibrium measure $\mu:=\mu_K$, and $\operatorname{supp}\mu\subseteq K$; since $K$ and $\operatorname{supp}\sigma$ are compact and nonempty, $D:=\operatorname{diam}(K\cup\operatorname{supp}\sigma)<+\infty$, and as $\operatorname{cap}(K)>0$ the set $K$ is not a singleton, so $D>0$; fix $R>D$. [F2, F3, F5, given, algebra]

1.2 **Frostman bound.** By [F4] one has $U^\mu\le V_K$ pointwise on $\mathbb C$, and $\sigma$ is a probability, so $\int U^\mu\,d\sigma\le\int V_K\,d\sigma=V_K$. [F4, given, algebra]

2.1 On $\operatorname{supp}\mu\times\operatorname{supp}\sigma$ one has $|z-w|\le D<R$, so the shifted kernel $k_R=k+\log R$ is a nonnegative Borel function there; Tonelli [F5] applied to the product measure $\mu\otimes\sigma$ therefore gives $\iint k_R\,d\mu\,d\sigma=\iint k_R\,d\sigma\,d\mu$, both sides being elements of $[0,+\infty]$. [step 1.1, F1, F5]

2.2 **The infimum bound.** For $z\in K$ and $w\in\operatorname{supp}\sigma$, one has $k(z,w)\ge\log\frac1D$, including $z=w$, where the kernel has value $+\infty$. Integrating this pointwise bound against the probability $\sigma$, carried by its support, gives $U^\sigma(z)\ge\log\frac1D>-\infty$ on $K$. Thus $m:=\inf_{z\in K}U^\sigma(z)\in[\log\frac1D,+\infty]$ and $m\le\int_KU^\sigma\,d\mu$: for finite $m$, integrate $U^\sigma\ge m$ against the probability $\mu$ carried by $K$; for $m=+\infty$, the potential is $+\infty$ everywhere on $K$ and its integral is $+\infty=m$. [step 1.1, F1, F3, F5, given, algebra]

3.1 For each $z$ one has $\int_{\mathbb C}k_R(z,w)\,d\sigma(w)=\int_{\mathbb C}k(z,w)\,d\sigma(w)+\sigma(\mathbb C)\log R=U^\sigma(z)+\log R$ as extended reals, since $k_R=k+\log R$ pointwise and $\sigma(\mathbb C)=1$; integrating against the probability $\mu$ gives $\iint k_R\,d\sigma\,d\mu=\int U^\sigma\,d\mu+\log R$, and symmetrically $\iint k_R\,d\mu\,d\sigma=\int U^\mu\,d\sigma+\log R$, the identities being understood in $(-\infty,+\infty]$ with $+\infty+\log R=+\infty$. [step 1.1, step 2.1, F1, given, algebra]

4.1 **Reciprocity.** Comparing the two expressions for the common value in step 2.1 gives $\int U^\sigma\,d\mu+\log R=\int U^\mu\,d\sigma+\log R$; subtracting the finite real number $\log R$ yields the reciprocity identity $\int_{\mathbb C}U^\sigma\,d\mu=\int_{\mathbb C}U^\mu\,d\sigma\in(-\infty,+\infty]$. [step 2.1, step 3.1, algebra]

5.1 Combining steps 4.1, 2.2 and 1.2, $\inf_{z\in K}U^\sigma(z)\le\int U^\sigma\,d\mu=\int U^\mu\,d\sigma\le V_K$, and $V_K=\log\frac1{\operatorname{cap}(K)}$ by [F2]; this is the assertion. The Axiom of Choice was used only through [F3] and [F4]. [step 4.1, step 2.2, step 1.2, F2, F3, F4, given] ∎

## Remarks

**What reciprocity does and does not require.** The identity
$\int U^\sigma\,d\mu=\int U^\mu\,d\sigma$ is a Fubini statement for the kernel
on the product of the two supports; no finiteness of $I(\sigma)$ is assumed,
and the value $+\infty$ is allowed on both sides. The shifted kernel
$k_R=k+\log R$ is nonnegative on that product, which is what makes Tonelli
applicable without any integrability hypothesis.

**Sharpness of the inequality.** The inequality
$\inf_KU^\sigma\le V_K$ is the classical reciprocity inequality of Saff,
Proposition 1.13; equality holds for $\sigma=\mu_K$ whenever $U^{\mu_K}=V_K$ at every point of $K$. Quasi-everywhere equality alone ([[thm-frostman-equilibrium-theorem]]) does not suffice for the infimum over all of $K$: exceptional polar points may have smaller potential.
