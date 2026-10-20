---
id: ex-exp4-duplicated-experts-change-prior-mass
kind: example
title: Duplicated experts change Exp4's uniform prior mass
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 7
deps:
  - def-contextual-bandit-protocol
  - alg-exp4
  - thm-exp4-expected-regret
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; all expert and action sets are finite.
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Tor Lattimore and Csaba Szepesvári, Bandit Algorithms"
      url: "https://tor-lattimore.com/downloads/book/book.pdf"
      locator: "Chapter 18 §18.3, Algorithm 11 and §18.4, Theorem 18.1, PDF pp. 229–240 / printed pp. 228–231; the multiplicity calculations are local."
---

## Example

Take $k=2$, $M=3$, and at every round let $E(t)_1=E(t)_2=(1,0)$ and $E(t)_3=(0,1)$. Exp4's uniform initial expert distribution gives first-round action distribution $P_1=(2/3,1/3)$; deleting one of the duplicated experts instead gives $(1/2,1/2)$. The two duplicated experts receive identical estimated rewards and remain equal-weighted after every update. For any integer horizon $n\ge1$ and any fixed oblivious reward sequence $x_1,\ldots,x_n\in[0,1]^2$, with learning rate $\eta=\sqrt{\log3/n}$, the expected-regret theorem gives the bound $R_n\le\sqrt{4n\log3}$ for the three-expert list.

## Example references

[[def-contextual-bandit-protocol|Expert advice rows and oblivious instance]]: the deterministic advice rows and reward sequence meet this protocol.

[[alg-exp4|Exp4 initialization, mixture, and update]]: the example uses uniform initial expert weights and the common exponential update.

[[thm-exp4-expected-regret|Expected-regret theorem]]: the three-expert regret bound follows by specializing the theorem to $k=2$ and $M=3$.

## Facts & Assumptions

**Given:** $k=2$, $M=3$, identical first and second advice rows $(1,0)$, third row $(0,1)$, a fixed oblivious reward sequence $x_1,\ldots,x_n\in[0,1]^2$, and Exp4 with learning rate $\eta=\sqrt{\log3/n}$ for a fixed horizon $n\ge1$.

[F1] [[def-contextual-bandit-protocol]]: each row is a probability vector and each fixed expert's advice is admissible in an oblivious instance.

[F2] [[alg-exp4]]: $Q_{1,m}=1/M$, $P_{t,i}=\sum_mQ_{t,m}E(t)_{m,i}$, and $Q_{t+1,m}$ is proportional to $Q_{t,m}\exp(\eta\widetilde X_{t,m})$.

[F3] [[thm-exp4-expected-regret]]: for any fixed oblivious instance with $k>1$, $M>1$, and horizon $n\ge1$, $R_n\le\sqrt{2nk\log M}$ at the stated learning rate.

## Verification

1.1 Since $Q_{1,m}=1/3$, the mixture formula gives $P_{1,1}=1/3+1/3=2/3$ and $P_{1,2}=1/3$. If one copy of $(1,0)$ is removed, the two remaining experts start with mass $1/2$ each, giving the alternative distribution $(1/2,1/2)$. [F2, algebra]

2.1 At every round the first two advice rows are equal, so their estimated rewards are equal. Their initial weights are equal; multiplying both by the same exponential factor and dividing by the common normalizer preserves equality. In particular, writing $g=\widetilde X_{1,1}=\widetilde X_{1,2}$ and $h=\widetilde X_{1,3}$ gives $Q_{2,1}=Q_{2,2}=e^{\eta g}/(2e^{\eta g}+e^{\eta h})$, so their combined mass is $2e^{\eta g}/(2e^{\eta g}+e^{\eta h})$. [F1, F2, step 1.1, algebra]

3.1 Substituting $k=2$ and $M=3$ into [F3] gives $R_n\le\sqrt{2n\cdot2\log3}=\sqrt{4n\log3}$. [F3, algebra] ∎
