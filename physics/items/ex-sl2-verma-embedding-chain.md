---
id: ex-sl2-verma-embedding-chain
kind: example
title: "The sl2 Verma embedding chain"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-pbw-model-of-a-verma-module, thm-universal-property-of-verma-modules, lem-a-nonzero-verma-homomorphism-is-injective]
proof_strategy: direct
sources:
  references:
    - title: "Pavel Etingof, Representations of Lie Groups, Exercise 8.11"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-09-receipts.jsonl (ex-sl2-verma-embedding-chain). No independent judge or whole-closure certification.
    delegated_by: owner
---

## Example

For $\mathfrak{sl}_2$ and $m\in\mathbb Z_{\ge0}$, the dot reflection sends $m$ to $-m-2$, and the singular vector $f^{m+1}v_m$ gives $M(-m-2)\hookrightarrow M(m)$. At $m=0$ this is $M(-2)\hookrightarrow M(0)$; when $m\notin\mathbb Z_{\ge0}$ there is no nontrivial reflection embedding from $M(s\mathbin\cdot m)$ into $M(m)$.

## Facts & Assumptions

**Given:** The standard $\mathfrak{sl}_2$ relations $[e,f]=h$, $[h,f]=-2f$, the Verma PBW model [[thm-pbw-model-of-a-verma-module]], its universal property [[thm-universal-property-of-verma-modules]], and injectivity of nonzero Verma maps [[lem-a-nonzero-verma-homomorphism-is-injective]].

## Verification

**Proof technique:** direct.

1.1 Since $\rho=1$ and $s\mathbin\cdot m=-m-2$, the relevant pairing is $m+1$, which is positive integral exactly when $m\in\mathbb Z_{\ge0}$. The PBW vectors $f^rv_m$ ($r\ge0$) form a basis of $M(m)$. The relations in the Given imply $h f^rv_m=(m-2r)f^rv_m$ and, by induction from $e f^{r+1}v_m=f e f^rv_m+h f^rv_m$, imply $e f^rv_m=r(m-r+1)f^{r-1}v_m$ for $r\ge1$. [given, algebra]

2.1 For $m\in\mathbb Z_{\ge0}$, step 1.1 makes the nonzero PBW vector $f^{m+1}v_m$ singular of weight $m-2(m+1)=-m-2$. The Verma universal property gives a nonzero map $M(-m-2)\to M(m)$, and the cited injectivity lemma makes it the displayed embedding, including $m=0$. For any $m\in\mathbb C$, the PBW weights of $M(m)$ are $m-2r$ for integers $r\ge0$. A nonzero map $M(s\cdot m)\to M(m)$ must send its highest vector to a nonzero vector of weight $s\cdot m=-m-2$, so $r=m+1\in\mathbb Z_{\ge0}$. If $r>0$, then $m\in\mathbb Z_{\ge0}$; if $r=0$, then $m=-1$ and $s\cdot m=m$, so the map is a scalar identity on the cyclic module rather than a nontrivial reflection embedding. No other $m$ permits the claimed direction. [step 1.1, given] ∎
