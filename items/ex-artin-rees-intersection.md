---
id: ex-artin-rees-intersection
kind: example
title: "An explicit Artin-Rees number can be computed for a submodule inside a finite module"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-artin-rees-lemma]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, Lemma (20.18)"
      url: "https://web.mit.edu/18.705/www/12Nts.pdf"
---

## Example

Take $R=k[x]$, $I=(x)$, $M=R$, and $N=(x^m)$ for a fixed integer $m\ge0$. Then
for every $n\ge m$,
$$
I^nM\cap N=(x^n)\cap(x^m)=(x^n)=I^{n-m}(I^mM\cap N).
$$
So in this case one may take the Artin-Rees number to be $c=m$.

## Facts & Assumptions

**Given:** A field $k$, an integer $m\ge0$, the ring $R=k[x]$, the ideal
$I=(x)$, the module $M=R$, and the submodule $N=(x^m)$.

[L1] Artin-Rees gives some constant $c$ with
$$
I^nM\cap N=I^{n-c}(I^cM\cap N)
$$
for all $n\ge c$ ([[thm-artin-rees-lemma]]).

## Verification

**Proof technique:** direct.


1.1 Here $I^nM=(x^n)$ and $N=(x^m)$. If $n\ge m$, then $(x^n)\subseteq(x^m)$, so $ I^nM\cap N=(x^n). $ [given, algebra]


1.2 Also $I^mM\cap N=(x^m)$, and therefore for $n\ge m$, $ I^{n-m}(I^mM\cap N)=(x^{n-m})(x^m)=(x^n)=I^nM\cap N. $ [algebra]


2.1 So $c=m$ works, exhibiting an explicit Artin-Rees bound compatible with the abstract existence statement [L1]. [L1] ∎
