---
id: cex-the-natural-filtration-need-not-be-right-continuous-before-augmentation
kind: counterexample
title: "The raw natural Brownian filtration need not be right-continuous"
status: draft
origin: pipeline
deps: [def-natural-and-usual-augmented-brownian-filtrations, def-germ-sigma-algebra-at-zero, def-wiener-measure-on-continuous-path-space, def-brownian-motion, lem-brownian-transition-semigroup-property, def-standard-normal-and-normal-laws, lem-probability-measure-basic-identities, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Perla Sousi, Advanced Probability, Definition 6.10"
      url: "http://www.statslab.cam.ac.uk/~ps422/mynotes.pdf"
    - title: "Rick Durrett, Probability: Theory and Examples, fifth edition, Section 7.2"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
---

## Statement refuted

The statement "the raw natural filtration $(\mathcal F^0_t)$ of a Brownian
motion is right-continuous at $t=0$, that is $\mathcal F^0_{0+}=\mathcal F^0_0$"
is false. On the canonical continuous realization the event
$$A:=\{\text{the path vanishes on }[0,1/m]\text{ for some }m\ge1\}$$
lies in $\mathcal F^0_{0+}$ but not in $\mathcal F^0_0$.

## Counterexample

**Given:** AC, the canonical continuous realization $\Omega=C([0,\infty),\mathbb R)$ with Wiener measure $\mathsf W$ [[def-wiener-measure-on-continuous-path-space]] and coordinate process $\pi$, a standard Brownian motion with continuous paths [[def-brownian-motion]], with raw natural filtration $\mathcal F^0_t=\sigma(\pi_s:0\le s\le t)$.

**Proof technique:** direct.

1.1 Define $A:=\bigcup_{m\ge1}\bigcap_{s\in[0,1/m]}\{\pi_s=0\}=\bigcup_{m\ge1}\bigcap_{q\in\mathbb Q\cap[0,1/m]}\{\pi_q=0\}$, the second description using continuity of every path; thus $A$ is measurable and nonempty, since the zero path belongs to it, while the path $s\mapsto s$ does not. [given]

2.1 For every $t>0$ one has $A\in\mathcal F^0_t$: choose $m$ with $1/m<t$; then $\bigcap_{q\in\mathbb Q\cap[0,1/m]}\{\pi_q=0\}\in\mathcal F^0_{1/m}\subseteq\mathcal F^0_t$, and the union over $m$ lies in $\mathcal F^0_t$. Hence $A\in\mathcal F^0_{0+}=\bigcap_{t>0}\mathcal F^0_t$ [[def-germ-sigma-algebra-at-zero]]. [step 1.1]

2.2 $A\notin\mathcal F^0_0=\sigma(\pi_0)$: the zero path is in $A$ and the path $s\mapsto s$ is not, while both have $\pi_0=0$, so membership in $A$ is not determined by $\pi_0$. [step 1.1]

2.3 $\mathsf W(A)=0$: $A$ is contained in $\bigcup_{m\ge1}\{\pi_{1/(2m)}=0\}$, and each of those events has probability zero because the law of $\pi_{1/(2m)}$ has the strictly positive density $p_{1/(2m)}(0,\cdot)$ and is therefore atomless [[lem-brownian-transition-semigroup-property]] [[def-standard-normal-and-normal-laws]]; countable subadditivity gives the claim [[lem-probability-measure-basic-identities]]. [step 1.1]

3.1 Combining steps 2.1, 2.2 and 2.3, $A\in\mathcal F^0_{0+}\setminus\mathcal F^0_0$, so the raw natural filtration is not right-continuous at time zero; its usual augmentation contains $A$ as a null event and is right-continuous by construction [[def-natural-and-usual-augmented-brownian-filtrations]]. The witness is nonempty and of probability zero, so it is invisible to any probability computation alone. AC is used only through the ambient Brownian and Wiener interfaces. [step 2.1, step 2.2, step 2.3] ∎