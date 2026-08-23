---
id: lem-coprime-cyclic-pid-quotients-split
kind: lemma
title: "Coprime cyclic quotients over a PID split by the Chinese remainder map"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-principal-ideal-domain, def-quotient-module]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "M. Brussel, Finitely Generated Modules over a PID, Section 3.5"
      url: "https://content-calpoly-edu.s3.amazonaws.com/math/1/images/FG%20Modules%20Over%20A%20PID.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a PID. If $(a)+(b)=R$, then $R/(ab)\cong R/(a)\oplus R/(b)$. More generally, for a finite pairwise coprime family $a_1,\ldots,a_t$,

$$R/(a_1\cdots a_t)\cong\bigoplus_{j=1}^tR/(a_j).$$

The empty family reads $R/(1)=0$, and the singleton case is the identity.

## Facts & Assumptions

**Given:** Quotient modules ([[def-quotient-module]]).

[F1] In a PID every ideal is principal ([[def-principal-ideal-domain]]).

## Proof

**Proof technique:** direct.

1.1 Coprimality means $(a,b)=R$, so choose $r,s\in R$ with $ra+sb=1$. [F1, choose]

2.1 The map $\Phi:R/(ab)\to R/(a)\oplus R/(b)$ given by $x+(ab)\mapsto(x+(a),x+(b))$ is well defined. If both residues vanish, $a\mid x$ and $b\mid x$; multiplying the Bezout identity appropriately gives $ab\mid x$, so $\Phi$ is injective. Given residues $u+(a)$ and $v+(b)$, the element $usb+vra$ maps to them, so $\Phi$ is surjective and is an $R$-module isomorphism. [step 1.1, algebra]

3.1 Repeatedly apply step 2.1 to a finite pairwise coprime family; the product of any subfamily remains coprime to the next factor. This gives the displayed finite direct sum, with the empty and singleton conventions stated above and with unit factors contributing zero quotients. [step 2.1, algebra] ∎
