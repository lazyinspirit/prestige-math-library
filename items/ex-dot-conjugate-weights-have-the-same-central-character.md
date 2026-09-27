---
id: ex-dot-conjugate-weights-have-the-same-central-character
kind: example
title: "Dot-conjugate type-$A_2$ weights have the same central character"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
deps: [lem-simple-root-singular-vector-in-a-verma-module, thm-universal-property-of-verma-modules, lem-harish-chandra-projection-computes-highest-weight-scalars]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
generation:
  role: example
sources:
  scraped: []
  references:
    - title: "Yiannis Sakellaridis, Verma Modules and the Category O"
      url: "https://web.archive.org/web/20230424132820if_/https://math.jhu.edu/~sakellar/automorphic-files/vermamodules.pdf"
pipeline_run: null
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-09-receipts.jsonl (ex-dot-conjugate-weights-have-the-same-central-character). No independent judge or whole-closure certification.
    delegated_by: owner
---

## Example

In type $A_2$, let $\lambda=0$ and let $\mu=s_1\cdot \lambda=-\alpha_1$. Then $\lambda$ and $\mu$ have the same central character. Concretely,

$$\lambda+\rho=(1,0,-1), \qquad \mu+\rho=s_1(1,0,-1)=(0,1,-1),$$

and the basic symmetric invariants take the same values on those two triples.

## Facts & Assumptions

**Given:** Type $A_2$ in the realization $\{(x_1,x_2,x_3)\in \mathbb C^3 : x_1+x_2+x_3=0\}$, the simple reflection $s_1$, and the weight $\lambda=0$.

## Verification

**Proof technique:** direct.

1.1 In the $A_2$ realization, $\rho=(1,0,-1)$ and $s_1$ swaps the first two coordinates. Hence $\mu=s_1\cdot 0=s_1(\rho)-\rho=-\alpha_1$, and $\mu+\rho=s_1(\rho)=(0,1,-1)$. [given, algebra]

2.1 Here $\langle\rho,\alpha_1^\vee\rangle=1$. By [[lem-simple-root-singular-vector-in-a-verma-module]], $f_1v_0$ is a nonzero highest vector of weight $\mu=-\alpha_1$ in $M(0)$. The universal property [[thm-universal-property-of-verma-modules]] gives a nonzero map $M(\mu)\to M(0)$. Every central element acts by a scalar on either cyclic highest-weight module by [[lem-harish-chandra-projection-computes-highest-weight-scalars]], and the map intertwines these actions. Hence $\chi_\mu=\chi_\lambda$. The displayed degree-two and degree-three symmetric invariants also agree on $\rho$ and $s_1(\rho)$, as the coordinates show. [step 1.1] ∎
