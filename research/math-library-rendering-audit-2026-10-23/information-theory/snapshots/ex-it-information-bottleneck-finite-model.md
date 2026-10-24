---
id: ex-it-information-bottleneck-finite-model
kind: example
title: "A finite information-bottleneck privacy model"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps: [def-it-finite-source-privacy-utility-region, thm-it-perfect-privacy-kernel-criterion, def-it-finite-mutual-information, def-it-finite-conditional-entropy, thm-it-finite-entropy-chain-rule, def-qa-35-finite-probability-entropy-and-stochastic-matrices]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the source, release alphabet, and stochastic matrix are finite."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Ali Makhdoumi, Salman Salamatian, Nadia Fawaz, and Muriel Médard, From the Information Bottleneck to the Privacy Funnel, ITW 2014"
      url: https://www.nadiafawaz.com/Publis/ConfPapers/Fawaz-ITW2014.pdf
      locator: "§§II–III: mutual-information leakage/utility and the privacy-funnel objective; the binary source calculation is derived locally."
    - title: "Paul Cuff, Princeton ELE 538: Information Theoretic Security, Lecture 15"
      url: https://www.princeton.edu/~cuff/ele538/files/lecture_15.pdf
      locator: "PDF pp. 1–2: strong-secrecy metrics and wiretap coding background; the source privacy calculation is derived locally."
---

## Statement

Let $S$ be a fair bit, let $N\sim\operatorname{Bernoulli}(1/10)$ be independent, and set $Y=S\oplus N$. For every finite stochastic release kernel $K(z\mid y)$, the induced law is $S-Y-Z$. With $h(p):=-p\ln p-(1-p)\ln(1-p)$ and $0\ln0:=0$,

$$I(Y;Z)-\frac12 I(S;Z)\le\frac12\ln2+\frac12h(1/10),$$

and equality is attained by releasing $Z=Y$ (or any bijective relabeling of $Y$). If $I(S;Z)=0$, then necessarily $I(Y;Z)=0$ for every such release kernel.

## Facts & Assumptions

**Given:** A fair sensitive bit $S$, independent noise $N\sim\operatorname{Bernoulli}(1/10)$, useful bit $Y=S\oplus N$, and a finite release kernel $K(z\mid y)$.

[F1] [[def-it-finite-source-privacy-utility-region]]: the kernel induces $P_{SYZ}=P_{SY}K_{Z\mid Y}$, written $S-Y-Z$, with leakage $I(S;Z)$ and retained-information utility $I(Y;Z)$.

[F2] [[def-it-finite-mutual-information]]: mutual information is finite joint-law KL in nats.

[F3] [[def-it-finite-conditional-entropy]]: conditional entropy is the finite average of the conditional entropies, with zero-mass branches omitted.

[F4] [[thm-it-finite-entropy-chain-rule]]: mutual information equals the corresponding entropy difference and the finite entropy chain rule holds.

[F5] [[thm-it-perfect-privacy-kernel-criterion]]: $I(S;Z)=0$ exactly when each positive-support conditional output law $P_{Z\mid S=s}$ is the same across $s$.

[F6] [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]: finite entropy is $H(p)=-\sum_{p_i>0}p_i\ln p_i$ with $0\ln0=0$.

## Proof

1.1 The fair bit $S$ has entropy $\ln2$. Since $S$ is fair and independent of the symmetric noise, $Y$ is fair as well. Given either value of $Y$, the posterior error probability for estimating $S$ is $1/10$, so $H(S\mid Y)=h(1/10)$. The factorization in [F1] is $P_{SYZ}=P_{SY}K_{Z\mid Y}$. [F1, F3, F6, given, algebra]

2.1 Using [F2] and [F4], expand the objective as $I(Y;Z)-\tfrac12I(S;Z)=\tfrac12\ln2-H(Y\mid Z)+\tfrac12H(S\mid Z).$ The conditional-entropy chain rules in [F4] give $H(S,Y\mid Z)=H(S\mid Z)+H(Y\mid S,Z)=H(Y\mid Z)+H(S\mid Y,Z)$. By [F3] and [F6], $H(Y\mid S,Z)\ge0$ and $H(Y\mid Z)\ge0$, so $H(S\mid Z)\le H(S,Y\mid Z)$. The factorization in [F1] gives $P_{S\mid Y,Z}=P_{S\mid Y}$ on positive-mass pairs, hence $H(S\mid Y,Z)=H(S\mid Y)=h(1/10)$ by step 1.1. Therefore $H(S\mid Z)\le H(Y\mid Z)+h(1/10)$, and $I(Y;Z)-\tfrac12I(S;Z)\le\tfrac12\ln2+\tfrac12h(1/10)-\tfrac12H(Y\mid Z)\le\tfrac12\ln2+\tfrac12h(1/10)$. [F1, F2, F3, F4, F6, step 1.1, algebra]

2.2 For the identity release $Z=Y$, $H(Y\mid Z)=0$ and step 1.1 gives $I(S;Y)=H(S)-H(S\mid Y)=\ln2-h(1/10)$. Substitution gives equality in the bound. A bijective relabeling preserves these conditional entropies and mutual informations, so also attains equality. [F2, F3, F4, step 1.1, algebra]

3.1 Suppose $I(S;Z)=0$. By [F5], for each $z$ with $P_Z(z)>0$, the two rows of $P_{Z\mid S}$ agree. If $P_Z(z)=0$, then $0=\tfrac12P(z\mid S=0)+\tfrac12P(z\mid S=1)$, and nonnegativity forces both entries to be zero, so the rows agree for every release value. With row order $s=0,1$ and $y=0,1$, the binary symmetric channel matrix from $S$ to $Y$ is $T=\begin{pmatrix}9/10&1/10\\1/10&9/10\end{pmatrix},$ so for the column $k_z=(K(z\mid0),K(z\mid1))^{\mathsf T}$ the output column is $Tk_z=c_z(1,1)^{\mathsf T}$ for some $c_z$. Since $\det T=4/5\ne0$ and $T(1,1)^{\mathsf T}=(1,1)^{\mathsf T}$, invertibility gives $k_z=c_z(1,1)^{\mathsf T}$. This holds for every $z$, so the two rows of $K$ coincide and $Y,Z$ are independent. Therefore $I(Y;Z)=0$. [F1, F5, step 1.1, algebra] ∎
