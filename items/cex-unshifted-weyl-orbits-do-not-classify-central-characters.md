---
id: cex-unshifted-weyl-orbits-do-not-classify-central-characters
kind: counterexample
title: "Ordinary Weyl orbits do not classify central characters"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-simple-root-singular-vector-in-a-verma-module, thm-universal-property-of-verma-modules, lem-harish-chandra-projection-computes-highest-weight-scalars]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
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
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-09-receipts.jsonl (cex-unshifted-weyl-orbits-do-not-classify-central-characters). No independent judge or whole-closure certification.
    delegated_by: owner
---

## Statement refuted

Ordinary Weyl orbits do not classify central characters. In $\mathfrak{sl}_2$, the weights $0$ and $-2\omega$ have the same central character, but they are not in the same ordinary Weyl orbit.

## Facts & Assumptions

**Given:** The Lie algebra $\mathfrak{sl}_2$ with Weyl group $W=\{1,s\}$ and Weyl vector $\rho=\omega$.

## Counterexample

**Proof technique:** direct.

1.1 The dot action gives $s\cdot 0=s(\rho)-\rho=-2\omega=-\alpha$. Since $\langle\rho,\alpha^\vee\rangle=1$, the singular-vector lemma [[lem-simple-root-singular-vector-in-a-verma-module]] gives a nonzero highest vector $fv_0$ of weight $-2\omega$ in $M(0)$. By [[thm-universal-property-of-verma-modules]] it induces a nonzero map $M(-2\omega)\to M(0)$. Every central element acts by a scalar on either Verma module by [[lem-harish-chandra-projection-computes-highest-weight-scalars]]; the nonzero map intertwines these actions, so their central characters are equal. [given]

2.1 Under the ordinary Weyl action, $s(0)=0$, so the ordinary orbit of $0$ is just $\{0\}$, while the orbit of $-2\omega$ is $\{\pm 2\omega\}$. Thus the two weights are not ordinarily conjugate. [step 1.1, algebra]

3.1 Therefore ordinary Weyl orbits are too fine here: they separate weights that have the same central character. The $\rho$-shifted dot action is essential. [step 1.1, step 2.1] ∎
