---
id: cex-strong-markov-fails-at-a-nonstopping-random-time
kind: counterexample
title: "Strong Markov fails at a nonstopping random time"
status: draft
origin: pipeline
deps: [def-brownian-motion, def-brownian-motion-started-at-x, thm-brownian-future-path-markov-property, thm-brownian-scaling, cor-law-of-the-brownian-maximum, cor-distribution-of-a-one-sided-brownian-hitting-time, def-standard-normal-and-normal-laws, def-natural-and-usual-augmented-brownian-filtrations, def-conditional-expectation-as-an-ae-class, lem-conditional-expectation-is-unique-almost-surely, thm-taking-out-what-is-known, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, fifth edition, Sections 7.3-7.5"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
    - title: "Perla Sousi, Advanced Probability, Sections 6.4-6.5"
      url: "http://www.statslab.cam.ac.uk/~ps422/mynotes.pdf"
---

## Statement refuted

The statement "at every random time that is finite almost surely the shifted
future is a Brownian motion independent of the past" is false. At the last zero
of standard Brownian motion before a fixed time, the random time is not a
stopping time, and the conditional law of the shifted future is not Wiener
measure.

## Counterexample

**Given:** AC, a standard Brownian motion $B$ [[def-brownian-motion]] with raw natural filtration $(\mathcal F^0_t)$, and $L:=\sup\{t\in[0,1]:B_t=0\}$, the notation $G_L$ below denoting $\sigma(B_{s\wedge L}:s\ge0)$ completed by the null events.

**Proof technique:** direct.

1.1 The zero set $\{t\in[0,1]:B_t=0\}$ is closed and contains $0$, so $L$ is a maximum, not merely a supremum. Moreover $L<1$ almost surely: if $L=1$ then $1$ lies in the zero set and $B_1=0$, an event of probability zero because the law of $B_1$ has the strictly positive density $p_1(0,\cdot)$ and is atomless [[lem-brownian-transition-semigroup-property]] [[def-standard-normal-and-normal-laws]]. [given]

1.2 A Brownian path has a zero in every interval $(0,s]$ almost surely. By Brownian scaling [[thm-brownian-scaling]] it suffices to treat $s=1$; a path with no zero in $(0,1]$ has constant sign there, so $P(\text{no zero in }(0,1])=2P(B_t>0\ \forall t\in(0,1])\le2P(\min_{[0,1]}B\ge0)$ by symmetry of the Brownian law, and since $-B$ is again a standard Brownian motion the maximum law [[cor-law-of-the-brownian-maximum]] gives $P(\min_{[0,1]}B\ge0)=P(\max_{[0,1]}(-B)\le0)=2\Phi(0)-1=0$. [given]

2.1 The path has no zero in $(L,1]$, so by continuity it has constant sign there; consequently the shifted path $t\mapsto B_{L+t}$ has no zero in $(0,1-L]$, an event of probability one, and $1-L>0$ almost surely. [step 1.1]

3.1 The conditional law of the shifted increment process given $G_L$ is not Wiener measure. If it were, then, because $B_L=0$, the conditional probability that the shifted path has no zero in $(0,1-L]$ would equal $P(\text{a Brownian motion has no zero in }(0,1-L])$, which is $0$ almost surely by step 1.2 since $1-L>0$ almost surely; integrating would make the unconditional probability of that event $0$. Step 2.1 shows that this probability is $1$. Hence the conditional law is not Wiener measure, and the future is not a Brownian motion independent of the past at $L$. [step 2.1, step 1.2]

3.2 The time $L$ is not a stopping time for the completed filtration. Suppose it were; then $\{L<t\}\in\mathcal F_t$ for every $t\in(0,1)$, and $\{L<t\}\cap\{B_t\ne0\}=\{B_t\ne0\}\cap\{\text{no zero in }[t,1]\}$. By the future-path theorem [[thm-brownian-future-path-markov-property]] the conditional probability of the second factor given $\mathcal F_t$ is $q_t(B_t)$, where $q_t(y)$ is the probability that a Brownian motion started at $y$ has no zero in $[0,1-t]$; the first factor is $\mathcal F_t$-measurable, so $E[1_{\{L<t\}}1_{\{B_t\ne0\}}|\mathcal F_t]=1_{\{B_t\ne0\}}q_t(B_t)$ almost surely [[thm-taking-out-what-is-known]], while $\mathcal F_t$-measurability of $\{L<t\}$ also makes that conditional expectation $1_{\{L<t\}}1_{\{B_t\ne0\}}$ [[def-conditional-expectation-as-an-ae-class]] [[lem-conditional-expectation-is-unique-almost-surely]]. [step 2.1, step 1.2]

4.1 For $y\ne0$ the shifted hitting-time law gives $P_y(T_0\le1-t)=2(1-\Phi(|y|/\sqrt{1-t}))\in(0,1)$ [[cor-distribution-of-a-one-sided-brownian-hitting-time]] [[def-brownian-motion-started-at-x]], so $0<q_t(y)<1$, while $q_t(0)=0$ by step 1.2. Comparing the two expressions of step 3.2 on $\{B_t\ne0\}$ forces $P(B_t\ne0)=0$: where $L<t$ one would need $q_t(B_t)=1$, and where $L\ge t$ one would need $q_t(B_t)=0$, hence $B_t=0$. This contradicts the atomlessness of the law of $B_t$ [[def-standard-normal-and-normal-laws]], so $L$ is not a stopping time. [step 1.2, step 3.2]

5.1 The witness therefore has all three claimed properties: $L\le1$ is finite almost surely, it is not a stopping time, and the strong-Markov conclusion fails at it in the precise sense of step 3.1. The case $t=1$ is excluded in step 3.2 where $1-t>0$ is needed; the case of an interval without a zero is impossible by step 1.2; and the degenerate case $B_1=0$ is the null event excluded in step 1.1. AC is used only through the ambient Brownian and conditional-expectation interfaces. [step 1.1, step 3.1, step 4.1] ∎