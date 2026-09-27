---
id: ex-sl2-verma-embedding-chain
kind: example
title: "The sl2 Verma embedding chain"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-simple-reflection-embedding-of-verma-modules, thm-bgg-verma-homomorphism-criterion]
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Pavel Etingof, Representations of Lie Groups, Exercise 8.11"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
---

## Example

For $\mathfrak{sl}_2$ and $m\in\mathbb Z_{\ge0}$, the dot reflection sends $m$ to $-m-2$, and the singular vector $f^{m+1}v_m$ gives $M(-m-2)\hookrightarrow M(m)$. At $m=0$ this is $M(-2)\hookrightarrow M(0)$; when $m\notin\mathbb Z_{\ge0}$ there is no nontrivial reflection embedding from $M(s\mathbin\cdot m)$ into $M(m)$.

## Facts & Assumptions

**Given:** The simple-reflection embedding [[prop-simple-reflection-embedding-of-verma-modules]] and the BGG criterion [[thm-bgg-verma-homomorphism-criterion]].

## Verification

**Proof technique:** direct.

1.1 Since $\rho=1$ and $s\mathbin\cdot m=-m-2$, the relevant pairing is $m+1$, which is positive integral exactly when $m\in\mathbb Z_{\ge0}$. [given, algebra]

2.1 The embedding proposition gives the displayed inclusion, including $m=0$; if the pairing is not positive integral, the BGG criterion rules out that reflection map. [step 1.1] ∎
