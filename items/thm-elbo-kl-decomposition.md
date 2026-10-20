---
verification:
  repair: research/machine-learning-all-101-2026-10-19-owner-step4-published-alert-repair/application/receipts/thm-elbo-kl-decomposition.json
id: thm-elbo-kl-decomposition
kind: theorem
title: "Evidence lower bound is log evidence minus reverse KL"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-axiom-of-choice
  - def-kullback-leibler-divergence
  - def-probability-measure
  - def-variational-family-and-elbo
  - thm-indefinite-integral-of-a-nonnegative-function-is-a-measure
  - thm-kullback-leibler-is-nonnegative
  - thm-nonnegative-integral-zero-iff-zero-almost-everywhere
proof_strategy: direct
axiom_use: "AC is used only to identify the explicit density-ratio integral with the library KL definition and to apply the BCS-20 nonnegativity theorem. The density-ratio identity itself is choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David M. Blei, Alp Kucukelbir, and Jon D. McAuliffe, Variational Inference: A Review for Statisticians (2017)"
      url: "https://www.cs.columbia.edu/~blei/papers/BleiKucukelbirMcAuliffe2017.pdf"
      locator: "§2.2, equations (11)–(14), PDF pp. 3–4"
    - title: "Ronghuo Zheng, Zhiting Hu, and Yuntian Deng, 10-708 Probabilistic Graphical Models, Lecture 13: Variational Inference II (2015)"
      url: "https://www.cs.cmu.edu/~epxing/Class/10708-15/notes/10708_scribe_lecture13.pdf"
      locator: "§2.3.2, PDF pp. 3–4"
---

## Statement

Let $\mu,\gamma,Z,\pi,q$ satisfy Variational family and evidence lower bound, and put $Q=q\,\mu$ and $\Pi=\pi\,\mu$. The choice-free density-ratio identity
$$\log Z=\operatorname{ELBO}(q)+\int q\log(q/\pi)\,d\mu$$
holds, with the ratio integrand set to zero where $q=0$. Under AC, the final integral is the library reverse divergence $D(Q\|\Pi)$ and is nonnegative. Consequently
$$\operatorname{ELBO}(q)\le\log Z.$$

## Statement references

[[def-variational-family-and-elbo]]

## Facts & Assumptions

**Given:** A measure space $(\Omega,\mathcal A,\mu)$, measurable $\gamma\ge0$ with $0<Z=\int\gamma\,d\mu<\infty$, $\pi=\gamma/Z$, an admissible density $q$, and AC for the library KL clause.

[F1] [[def-variational-family-and-elbo]]: for densities, $q\ll_\mu\pi$ means $q=0$ $\mu$-almost everywhere on $\{\pi=0\}$.

[F2] [[def-variational-family-and-elbo]]: admissibility requires $\int q(|\log\gamma|+|\log q|)d\mu<\infty$.

[F3] [[def-variational-family-and-elbo]]: $\operatorname{ELBO}(q)=\int q(\log\gamma-\log q)d\mu$.

[F4] [[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]: a nonnegative measurable function has integral zero exactly when it vanishes almost everywhere.

[F5] [[def-kullback-leibler-divergence]]: for probability measures $P\ll R$, under AC the directional divergence is $D(P\|R)=\int\log(dP/dR)dP$; its first argument is the measure absolutely continuous with respect to the second.

[F6] [[thm-kullback-leibler-is-nonnegative]]: under the published directional convention and AC, $D(P\|R)\ge0$ for probability measures $P,R$.

[F7] [[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]]: integrating a nonnegative measurable density over measurable sets defines a measure.

[A1] [[def-axiom-of-choice]]: AC states that every family of nonempty sets has a choice function. It is invoked here only through [F5] and [F6].

## Proof

**Given:** The hypotheses in the Statement.

1.1 Define $Q(A)=\int_A q\,d\mu$ and $\Pi(A)=\int_A\pi\,d\mu$. These are probability measures by [F1] and [F7]. If $\Pi(A)=0$, [F4] applied to $\pi\mathbf1_A$ gives $\pi=0$ $\mu$-almost everywhere on $A$. Then [F1] gives $q=0$ almost everywhere on $A$, so $Q(A)=0$ and $Q\ll\Pi$. Define $r=q/\pi$ on $\{\pi>0\}$ and $r=0$ on $\{\pi=0\}$. For every measurable $A$, $\int_A r\,d\Pi=\int_{A\cap\{\pi>0\}}q\,d\mu=Q(A)$, so $r=dQ/d\Pi$. [F1, F4, F7, construct, algebra]

2.1 On $\{q>0\}$, $\pi=\gamma/Z>0$ and $\log r=\log q-\log\gamma+\log Z$. The assumed absolute integrability and $\int q\,d\mu=1$ make all terms integrable. Hence $\int\log r\,dQ=\int q\log(q/\pi)\,d\mu=\log Z-\operatorname{ELBO}(q)$. This algebraic identity uses the explicit density ratio and no choice axiom. [F1, F2, F3, step 1.1, algebra]

3.1 By [A1] and [F5], the integral $\int\log r\,dQ$ is $D(Q\|\Pi)$ under the library convention. Rearranging step 2.1 gives $\log Z=\operatorname{ELBO}(q)+D(Q\|\Pi)$. [A1, F5, step 2.1, algebra]

4.1 The measures $Q$ and $\Pi$ are probabilities, so [F6] gives $D(Q\|\Pi)\ge0$. Step 3.1 then yields $\operatorname{ELBO}(q)\le\log Z$. [F6, step 3.1, algebra] ∎
