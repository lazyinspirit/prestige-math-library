---
id: cex-unshifted-weyl-orbits-do-not-classify-central-characters
kind: counterexample
title: "Ordinary Weyl orbits do not classify central characters"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-rho-shift-intertwines-the-dot-and-ordinary-weyl-actions, cor-central-characters-are-dot-weyl-orbits]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Yiannis Sakellaridis, Verma Modules and the Category O"
      url: "https://web.archive.org/web/20230424132820if_/https://math.jhu.edu/~sakellar/automorphic-files/vermamodules.pdf"
pipeline_run: null
---

## Statement refuted

Ordinary Weyl orbits do not classify central characters. In $\mathfrak{sl}_2$, the weights $0$ and $-2\omega$ have the same central character, but they are not in the same ordinary Weyl orbit.

## Facts & Assumptions

**Given:** The Lie algebra $\mathfrak{sl}_2$ with Weyl group $W=\{1,s\}$ and Weyl vector $\rho=\omega$.

## Counterexample

**Proof technique:** direct.

1.1 The dot action gives $s\cdot 0=s(\rho)-\rho=-2\omega$, so [[cor-central-characters-are-dot-weyl-orbits]] makes $0$ and $-2\omega$ have the same central character. [given]

2.1 Under the ordinary Weyl action, $s(0)=0$, so the ordinary orbit of $0$ is just $\{0\}$, while the orbit of $-2\omega$ is $\{\pm 2\omega\}$. Thus the two weights are not ordinarily conjugate. [step 1.1, algebra]

3.1 Therefore ordinary Weyl orbits are too fine here: they separate weights that have the same central character. The $\rho$-shifted dot action is essential. [step 1.1, step 2.1] ∎
