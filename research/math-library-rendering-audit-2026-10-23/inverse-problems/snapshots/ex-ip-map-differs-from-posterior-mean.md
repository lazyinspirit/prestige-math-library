---
id: ex-ip-map-differs-from-posterior-mean
kind: example
title: The posterior mean need not be a small-ball MAP
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-ip-small-ball-map-estimator
  - def-ip-misfit-evidence-and-posterior-law
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-nonnegative-lebesgue-integral
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - prop-the-nonnegative-integral-agrees-with-the-simple-integral
  - thm-linearity-of-the-lebesgue-integral-on-l-one
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
sources:
  references:
    - title: "M. Dashti, K. J. H. Law, A. M. Stuart, and J. Voss, MAP Estimators and Their Consistency in Bayesian Nonparametric Inverse Problems"
      url: "https://arxiv.org/pdf/1303.4795"
      locator: "§3, Definition 3.1 for the small-ball MAP convention; the example's posterior-mean computation is verified locally."
    - title: "H. Kekkonen and Y. Korolev, Inverse Problems, lecture notes"
      url: "https://www.damtp.cam.ac.uk/research/cia/files/teaching/Inverse_Problems_2019/LectureNotes2019.pdf"
      locator: "§7.5, the small-ball MAP discussion and Theorem 7.5.2; the example's posterior-mean computation is verified locally."
axiom_use: "No choice axiom is used after the uniform Borel probability is supplied as part of the model. Its interval probabilities are explicit, and the required polynomial moments follow from finite partitions."
generation:
  role: example
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Example

Let $\theta$ have the uniform prior on $[0,1]$, regarded as a Borel probability on $\mathbb R$, and let an observation $Y\in\{0,1\}$ satisfy $\mathbb P(Y=1\mid\theta)=\theta^2(1-\theta)$. After observing $Y=1$, the posterior has density $12\theta^2(1-\theta)$ on $[0,1]$ and zero outside. Its unique density mode, at $\theta=2/3$, is a strong small-ball MAP, while its posterior mean is $3/5$. Thus the posterior mean and a small-ball MAP differ.

## Example references

[[def-ip-small-ball-map-estimator|the strong small-ball MAP is defined by small-ball probabilities relative to their global supremum]]

[[def-ip-misfit-evidence-and-posterior-law|the fixed-data posterior normalizes likelihood-weighted prior mass]]

## Facts & Assumptions

**Given:** The Borel probability prior that is uniform on $[0,1]$, the binary sampling rule with success probability $\theta^2(1-\theta)$, and observation $Y=1$.

[F1] The posterior at a fixed datum is the likelihood-weighted prior divided by its evidence when the evidence is positive and finite. [[def-ip-misfit-evidence-and-posterior-law]]

[F2] A point is a strong small-ball MAP when its posterior ball probability divided by the supremum over all centers tends to $1$. [[def-ip-small-ball-map-estimator]]

[F3] Let $\pi$ be the stipulated uniform Borel probability on $[0,1]$. Its Lebesgue density is $\mathbf 1_{[0,1]}$; thus $\pi([a,b])=b-a$ for $0\le a\le b\le1$, every singleton has mass zero, and $\pi(J\cap[0,1])\le\operatorname{length}(J)$ for every interval $J$. [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]

[F4] The nonnegative Lebesgue integral is monotone and agrees with the simple integral on nonnegative simple functions. [[def-nonnegative-lebesgue-integral]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[prop-the-nonnegative-integral-agrees-with-the-simple-integral]]

[F5] The Lebesgue integral is linear on integrable functions. [[thm-linearity-of-the-lebesgue-integral-on-l-one]]

## Verification

1.1 For $k=1,2,3,4$, put $a_k=\int_{[0,1]}\theta^k\,d\pi$. These bounded continuous functions are integrable because $0\le\theta^k\le1$ on the support of the probability $\pi$. For each $N\ge1$, partition $[0,1]$ into $I_{j,N}=[j/N,(j+1)/N)$ for $j<N-1$ and $I_{N-1,N}=[(N-1)/N,1]$. The simple lower and upper step functions with values $(j/N)^k$ and $((j+1)/N)^k$ on $I_{j,N}$ bound $\theta^k$ pointwise; [F3] gives $\pi(I_{j,N})=1/N$, and [F4] therefore gives $$L_{N,k}:=N^{-(k+1)}\sum_{j=0}^{N-1}j^k\le a_k\le N^{-(k+1)}\sum_{j=1}^{N}j^k=:U_{N,k}.$$ Their difference is $U_{N,k}-L_{N,k}=1/N$. Also the binomial identity telescopes to $$N^{k+1}=(k+1)\sum_{j=0}^{N-1}j^k+\sum_{i=0}^{k-1}\binom{k+1}{i}\sum_{j=0}^{N-1}j^i.$$ For each $i<k$, $\sum_{j=0}^{N-1}j^i\le N^{i+1}$, so after division by $N^{k+1}$ all terms in the second sum tend to zero. Hence $L_{N,k}\to1/(k+1)$, and the squeeze gives $a_k=1/(k+1)$. Also $\int_{[0,1]}1\,d\pi=1$. [F3, F4, given, algebra]

1.2 On $[0,1]$, $p(\theta)=\theta^2(1-\theta)\ge0$. Its derivative is $p'(\theta)=\theta(2-3\theta)$, so its maximum is $p(2/3)=4/27<1$. Therefore $p$ and $1-p$ define valid conditional probabilities for $Y=1$ and $Y=0$. [given, algebra]

2.1 By [F1] and [F5], the evidence for $Y=1$ is $$Z=\int_{[0,1]}p(\theta)\,d\pi=\int\theta^2\,d\pi-\int\theta^3\,d\pi=\frac13-\frac14=\frac1{12}>0,$$ using step 1.1. The posterior formula [F1] gives density $p/Z=12\theta^2(1-\theta)$ relative to $\pi$. Since $\pi$ has Lebesgue density $\mathbf 1_{[0,1]}$, the posterior Lebesgue density is $q(\theta)=12\theta^2(1-\theta)$ on $[0,1]$, extended by zero on $\mathbb R\setminus[0,1]$. [F1, F3, F5, step 1.1, given, algebra]

3.1 On $(0,1)$, $q'(\theta)=12\theta(2-3\theta)$, so $q$ increases up to $2/3$ and decreases after it; $q(0)=q(1)=0$. Thus $q_{\max}=q(2/3)>0$ is the unique density maximum. For any center $x\in\mathbb R$ and $r>0$, the posterior density relative to $\pi$ and [F3] give $m_r(x)\le q_{\max}\pi([x-r,x+r]\cap[0,1])\le2r q_{\max}$. For $0<r<1/3$, $[2/3-r,2/3+r]\subseteq[0,1]$ and its $\pi$-mass is $2r$. Continuity of $q$ then gives $$\left|\frac{m_r(2/3)}{2r}-q_{\max}\right|\le\sup_{|\theta-2/3|\le r}|q(\theta)-q_{\max}|\longrightarrow0.$$ Hence $$1\ge\frac{m_r(2/3)}{\sup_{x\in\mathbb R}m_r(x)}\ge\frac{m_r(2/3)}{2r q_{\max}}\longrightarrow1.$$ By [F2], $2/3$ is a strong small-ball MAP. [F2, F3, step 2.1, given, algebra]

4.1 By [F1], [F5], and steps 1.1 and 2.1, the posterior mean is $$\int_{[0,1]}\theta q(\theta)\,d\pi=12\left(\int\theta^3\,d\pi-\int\theta^4\,d\pi\right)=12\left(\frac14-\frac15\right)=\frac35.$$ Since $3/5\ne2/3$, the posterior mean differs from the strong small-ball MAP. Continuity at $3/5$ gives $m_r(3/5)/(2r)\to q(3/5)$, while step 3.1 gives $\sup_xm_r(x)/(2r)\to q_{\max}$. Consequently $$\frac{m_r(3/5)}{\sup_xm_r(x)}\longrightarrow\frac{q(3/5)}{q(2/3)}=\frac{216/125}{16/9}=\frac{243}{250}<1,$$ so the posterior mean is not a strong small-ball MAP. [F1, F5, step 1.1, step 2.1, step 3.1, given, algebra] ∎

