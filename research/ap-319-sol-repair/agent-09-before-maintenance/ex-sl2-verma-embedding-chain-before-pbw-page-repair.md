---
id: ex-sl2-verma-embedding-chain
kind: example
title: "The sl2 Verma embedding chain"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-simple-reflection-embedding-of-verma-modules, ex-sl2-verma-action-in-the-pbw-basis]
proof_strategy: direct
sources:
  references:
    - title: "Pavel Etingof, Representations of Lie Groups, Exercise 8.11"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
---

## Example

For $\mathfrak{sl}_2$ and $m\in\mathbb Z_{\ge0}$, the dot reflection sends $m$ to $-m-2$, and the singular vector $f^{m+1}v_m$ gives $M(-m-2)\hookrightarrow M(m)$. At $m=0$ this is $M(-2)\hookrightarrow M(0)$; when $m\notin\mathbb Z_{\ge0}$ there is no nontrivial reflection embedding from $M(s\mathbin\cdot m)$ into $M(m)$.

## Facts & Assumptions

**Given:** The simple-reflection embedding [[prop-simple-reflection-embedding-of-verma-modules]] and the explicit $\mathfrak{sl}_2$ PBW basis and action [[ex-sl2-verma-action-in-the-pbw-basis]].

## Verification

**Proof technique:** direct.

1.1 Since $\rho=1$ and $s\mathbin\cdot m=-m-2$, the relevant pairing is $m+1$, which is positive integral exactly when $m\in\mathbb Z_{\ge0}$. [given, algebra]

2.1 For $m\in\mathbb Z_{\ge0}$, the embedding proposition gives the displayed inclusion, including $m=0$. For any $m\in\mathbb C$, the PBW basis puts the weights of $M(m)$ at $m-2r$ for integers $r\ge0$. A nonzero map $M(s\cdot m)\to M(m)$ must send its highest vector to a nonzero vector of weight $s\cdot m=-m-2$, so $r=m+1\in\mathbb Z_{\ge0}$. If $r>0$, then $m\in\mathbb Z_{\ge0}$; if $r=0$, then $m=-1$ and $s\cdot m=m$, so the map is a scalar identity on the cyclic module rather than a nontrivial reflection embedding. No other $m$ permits the claimed direction. [step 1.1, given] ∎
