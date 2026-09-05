---
id: ex-the-square-root-rescaling-in-lemma-four-four
kind: example
title: "A numerical square-root rescaling identity"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [lem-rodl-initialization-removes-the-constant-scale-restriction-in-the-property-star-four-outcome-theorem]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Lemma 4.4"
      url: "https://arxiv.org/html/2606.06258v2"
---

## Example

As a standalone numerical illustration, take
$$
c_4:=4,\qquad d:=232=58c_4,\qquad \ell:=256,\qquad k:=\sqrt{\ell}=16,
$$
and assume $|F|\ge |G|$.

## Facts & Assumptions

**Given:** The numerical choices in the Example.

[A1] The sample values satisfy the numerical relation $d=58c_4$. They are not
asserted to be the existential constants supplied by the source lemma.

## Verification

**Proof technique:** direct arithmetic.


1.1 Since $k=\sqrt{\ell}$, one has $$ \ell^{29c_4}=(k^2)^{29c_4}=k^{58c_4}=k^d. $$ [A1, algebra]


2.1 Therefore $$ \frac{|F|}{\ell^{29c_4}}=\frac{|F|}{k^d}\ge \frac{|G|}{k^d}, $$ using the assumption $|F|\ge |G|$. [step 1.1, algebra]


3.1 This standalone calculation isolates the square-root renormalization: after replacing $\ell$ by $k=\sqrt{\ell}$, the width bound takes exactly the target form $|G|/k^d$ when the numerical relation $d=58c_4$ holds. [step 2.1] ∎
