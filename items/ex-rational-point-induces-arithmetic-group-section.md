---
id: ex-rational-point-induces-arithmetic-group-section
kind: example
title: A rational point induces a conjugacy class of sections
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-arithmetic-fundamental-group-extension
  - thm-arithmetic-fundamental-group-sequence-is-exact
  - def-axiom-of-choice
generation:
  role: example
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: n/a
sources:
  references:
    - title: Jakob Stix, On the period-index problem in light of the section conjecture, §1.1
      url: https://arxiv.org/pdf/0802.4125
---

## Example

Assume the Axiom of Choice. Let $C/k$ be a smooth geometrically connected curve, let $P\in C(k)$, and choose the compatible geometric basepoint at $P$ for its arithmetic fundamental-group sequence. The morphism $P:\operatorname{Spec}k\to C$ induces a continuous homomorphism $s_P:G_k\to\pi_1^{\mathrm{et}}(C,\bar P)$ that is a right inverse to the projection to $G_k$. Changing the compatible path/basepoint changes this section by conjugation from the geometric fundamental group.

## Example references

[Stix, the rational-point section map and conjugacy convention, §1.1](https://arxiv.org/pdf/0802.4125)
## Facts & Assumptions

**Given:** The Axiom of Choice, the arithmetic fundamental-group sequence of $C/k$, a rational point $P\in C(k)$, and the functoriality of the étale fundamental group.

[F1] The arithmetic sequence has projection induced by $C\to\operatorname{Spec}k$; the induced map on fundamental groups is functorial, and compatible basepoint changes act by inner conjugacy. [[def-arithmetic-fundamental-group-extension]]

[F2] The arithmetic exact sequence and the identification $\pi_1(\operatorname{Spec}k)=G_k$ are proved in [[thm-arithmetic-fundamental-group-sequence-is-exact]]. Its kernel is the embedded geometric fundamental group.

## Verification

1.1 Functoriality applied to $P:\operatorname{Spec}k\to C$ gives $s_P:G_k=\pi_1^{\mathrm{et}}(\operatorname{Spec}k)\to\pi_1^{\mathrm{et}}(C,\bar P)$, with the field-group identification supplied by [F2]. [F1, F2, given, construct]

2.1 The structure map $q:C\to\operatorname{Spec}k$ satisfies $q\circ P=\operatorname{id}_{\operatorname{Spec}k}$, so functoriality gives $q_*\circ (s_P)=\operatorname{id}_{G_k}$. Thus $s_P$ is a section. By [F2] the geometric group is exactly the kernel of the projection; the compatible geometric-basepoint convention in [F1] therefore gives conjugacy by that geometric group, as stated. [F1, F2, step 1.1, algebra] ∎
