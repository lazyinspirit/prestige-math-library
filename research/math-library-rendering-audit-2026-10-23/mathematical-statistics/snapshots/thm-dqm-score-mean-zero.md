---
id: thm-dqm-score-mean-zero
kind: theorem
title: A DQM score has mean zero and is unique
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 4
deps:
  - def-dqm-submodel-through-a-law
  - def-mean-zero-square-integrable-space
  - def-likelihood-density
  - thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality
  - cor-cauchy-schwarz-inequality-for-l-two
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - def-axiom-of-choice
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: A. W. van der Vaart, Semiparametric Statistics, Lecture 1 §1.2, Lemma 1.8
      url: https://sites.stat.washington.edu/jaw/COURSES/EPWG/stflour.pdf
    - title: Edward H. Kennedy, Semiparametric theory, §4
      url: https://arxiv.org/pdf/1709.06418
---

## Statement

Assume the density-version convention for the path in [[def-dqm-submodel-through-a-law]]. If $s\in L^2(P)$ is a DQM score, then $Ps=0$, so $s\in L^2_0(P)$ ([[def-mean-zero-square-integrable-space]]). Moreover, any two scores satisfying the same DQM expansion agree $P$-almost surely. The normalization argument itself uses no choice beyond the density versions already supplied in the definition.

## Facts & Assumptions

**Given:** A common-dominated probability path $P_t$ through $P=P_0$, with density versions $p_t$ and a DQM score $s\in L^2(P)$.

[F1] DQM means $\|\sqrt{p_t}-\sqrt p-(t/2)s\sqrt p\|_{L^2(\mu)}=o(t)$ as $t\downarrow0$ ([[def-dqm-submodel-through-a-law]]).

[F2] A Radon–Nikodym density $p_t$ represents $P_t$ by $P_t(E)=\int_Ep_t\,d\mu$ for every measurable $E$ ([[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]]).

[F3] The $L^2$ pairing is finite and satisfies Cauchy–Schwarz ([[cor-cauchy-schwarz-inequality-for-l-two]]).

[F4] The Lebesgue integral is linear on $L^1(\mu)$ ([[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

## Proof

**Proof technique:** Expand the squared norm and use normalization of the path.

1.1 Put $q=\sqrt p$, $q_t=\sqrt{p_t}$, and $r_t=q_t-q-(t/2)sq$. By [F1], $\|r_t\|_2=o(t)$, while [F2] gives $\|q\|_2^2=\int p\,d\mu=1$ and $\|q_t\|_2^2=\int p_t\,d\mu=1$. [F1, F2]

1.2 If $s'$ is another score with remainder $r'_t=o_{L^2}(t)$, subtracting its expansion from [F1] gives $\|(t/2)(s-s')q\|_2\le\|r_t\|_2+\|r'_t\|_2=o(t)$. [F1, algebra]

2.1 Set $u_t=(t/2)sq+r_t$. Since $\|sq\|_2^2=\int s^2p\,d\mu=Ps^2<\infty$, we have $\|u_t\|_2=O(t)$ and $q_t=q+u_t$. The products $q r_t$ and $u_t^2$ are integrable by [F3]. Pointwise expansion and linearity [F4] give $0=\int(q+u_t)^2d\mu-\int q^2d\mu=t\,Ps+2\int q r_t\,d\mu+\|u_t\|_2^2$. By [F3], $|\int q r_t\,d\mu|\le\|q\|_2\|r_t\|_2=o(t)$ and $\|u_t\|_2^2=O(t^2)=o(t)$. Dividing by $t>0$ and taking $t\downarrow0$ gives $Ps=0$. [step 1.1, F3, F4, algebra]

3.1 Divide by $t/2$ and let $t\downarrow0$. Then $\|(s-s')q\|_2^2=P[(s-s')^2]=0$, so $s=s'$ as an element of $L^2(P)$. Together with step 2.1 this proves mean zero and uniqueness. [step 1.2, step 2.1, algebra] ∎
