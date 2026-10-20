---
id: ex-disjoint-supports-saturate-ideal-discriminator
kind: example
title: Separated supports saturate the ideal discriminator
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-gan-jensen-shannon-divergence
  - thm-optimal-discriminator-and-js-divergence
aliases: []
landmark: false
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  scraped: []
  references:
    - title: "Ian J. Goodfellow et al., Generative Adversarial Nets, arXiv:1406.2661v1"
      url: "https://arxiv.org/pdf/1406.2661"
    - title: "Yingzhen Li, Lecture notes on generative adversarial networks (GANs), Deep Learning (Winter 2022, Imperial College London)"
      url: "https://yingzhenli.net/home/pdf/imperial_dlcourse2022_gan_notes.pdf"
proof_strategy: direct
verification:
  precheck: pass
---

## Example

Let $X=\{a,b\}$ with counting measure $\mu(E)=|E|$. Let $P_{\rm data}$ put mass $1$ at $a$ and $P_G$ put mass $1$ at $b$, so their densities are $p(a)=1$, $p(b)=0$, $q(a)=0$, and $q(b)=1$. The ideal discriminator is $D^*(a)=1$ and $D^*(b)=0$, the density-defined Jensen–Shannon divergence is $\ln2$, and the optimized minimax value is $C(P_{\rm data},P_G)=0$. Thus disjoint supports give a saturated ideal discriminator; this calculation makes no claim about finite-network gradient behavior.

## Example references

[[thm-optimal-discriminator-and-js-divergence|Optimal discriminator and Jensen–Shannon identity]]

[[def-gan-jensen-shannon-divergence|Density-defined Jensen–Shannon divergence]]

[Goodfellow et al., §4.1, Proposition 1 and Theorem 1, equations (2)–(6), complete 9-page paper](https://arxiv.org/pdf/1406.2661)

[Li, §1.2, equations (4), (10)–(11), complete 6-page lecture note](https://yingzhenli.net/home/pdf/imperial_dlcourse2022_gan_notes.pdf)

## Facts & Assumptions

**Given:** $X=\{a,b\}$, counting measure $\mu(E)=|E|$, $P_{\rm data}(\{a\})=1$, $P_G(\{b\})=1$, and zero mass at the other point for each law.

[F1] [[thm-optimal-discriminator-and-js-divergence]]: $D^*=p/(p+q)$ when $p+q>0$, $D^*=1/2$ when $p+q=0$, and $C=-\ln4+2\operatorname{JS}_\mu(P,Q)$.

[F2] [[def-gan-jensen-shannon-divergence]]: for $m=(p+q)/2$ and $r=p/m$, $s=q/m$ on $m>0$, $\operatorname{JS}_\mu(P,Q)=\tfrac12\int m\phi(r)\,d\mu+\tfrac12\int m\phi(s)\,d\mu$, with $\phi(0)=0$ and $\phi(t)=t\ln t$.

## Verification

**Given:** The two-point laws and counting measure in the Example.

1.1 Their densities are $p(a)=1,p(b)=0,q(a)=0,q(b)=1$. Thus $m(a)=m(b)=1/2$, $(r(a),s(a))=(2,0)$ and $(r(b),s(b))=(0,2)$. [given, F2, construct]

2.1 By [F1], $D^*(a)=1/(1+0)=1$ and $D^*(b)=0/(0+1)=0$. [given, F1, step 1.1, algebra]

2.2 Since $\phi(0)=0$ and $\phi(2)=2\ln2$, the two integrals in [F2] each equal $\ln2$ before their factor $1/2$; hence $\operatorname{JS}_\mu(P_{\rm data},P_G)=\ln2$. [F2, step 1.1, algebra]

3.1 By [F1] and step 2.2, $C(P_{\rm data},P_G)=-\ln4+2\ln2=0$. The discriminator takes only the saturated endpoint values on the two supports, as claimed. [F1, step 2.1, step 2.2, algebra] ∎
