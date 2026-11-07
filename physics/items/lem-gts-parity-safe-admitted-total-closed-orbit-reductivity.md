---
id: lem-gts-parity-safe-admitted-total-closed-orbit-reductivity
kind: lemma
title: "Gts parity safe admitted total closed orbit reductivity"
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
category: algebraic-geometry
page: gts-weak-stability-framed-cy4-moduli
dependency_level: 1
deps:
  - def-gts-weak-phase-framing-moduli-datum
dependency_roles:
  def-gts-weak-phase-framing-moduli-datum: mathematical-premise
justified_by: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Y. Bojko, Wall-crossing for Calabi–Yau fourfolds: framework, tools, and applications"
      url: https://arxiv.org/pdf/2507.05922v3
      locator: "Assumptions 5.1 and 5.10; Definition 5.3; §§6.2–6.3, 6.9–6.14 and 7.2. Exact source hypotheses and limitations; no missing local proof is replaced by citation."
    - title: "Bojko, Kuhn, Liu, and Thimm, Wall-crossing for equivariant DT4 invariants"
      url: https://arxiv.org/html/2608.23515v1
      locator: "§2.2.8, §3.2, Assumption 4.2.4, and Theorem 1.2.1; use only under its exact framing, HN, finite-type, fixed-properness, and resolution hypotheses."
verification:
  precheck: pass
aliases: []
---

## Statement

Establish the needed closed-orbit/ordinary-kernel result at each admitted EVEN total, including odd exact-simple summands, without applying original 5.10 to an odd subsum, assuming 2alpha admission, or presupposing odd bricks. If original hypotheses do not imply it, identify a different actual wall construction or precise source-compatible obstruction.

## Statement references

[Bojko, *Wall-crossing for Calabi–Yau fourfolds: framework, tools, and applications*](https://arxiv.org/pdf/2507.05922v3), Assumptions 5.1 and 5.10, Definition 5.3, and §§6.2–6.3, 6.9–6.14, 7.2.

[Bojko, Kuhn, Liu, and Thimm, *Wall-crossing for equivariant DT4 invariants*](https://arxiv.org/html/2608.23515v1), §2.2.8, §3.2, Assumption 4.2.4, and Theorem 1.2.1; used only under their stated hypotheses.

## Facts & Assumptions

**Given:** the exact original data and direct suppliers below, used only at their stated interfaces.

[A1] Use the exact original 5.1(a–g) admitted-class, wall-path, HN, rank, and moduli hypotheses and original 5.10(a–c) master hypotheses. In particular 5.10 is not assumed at an odd subsum.

[F1] [[def-gts-weak-phase-framing-moduli-datum]]: exact planned interface: “Specify original weak stability, exact phase category, actual ordinary-vs-admissible maps, original concentration opens and exact Fr_k, common-line framing, even emergent class domain, torus linearizations and orientations. No sum closure, cofinal-index availability, or abelian phase category is implicit.” The link records the planned statement only; its draft label is not treated as proof.

## Proof

**Proof status:** the all-parity closed-orbit result is not established. The calculations below rule out two proposed proof routes only.

1.1 Suppose an admitted object splits $E=U\oplus W$, a full $\operatorname{End}(E)$-invariant flag is used, and both added maps vanish on $U$. Let $x_U=L(U)-t r(U)$ and $x_W=L(W)-t r(W)$ be the old numerator defects at enhanced slope $t$. The negative sink has weight $-\epsilon$, so the total equation is $x_U+x_W=\epsilon$. The proper lift $U$ with no sink requires $x_U<0$; the proper complementary lift $W$ with sink requires $x_W<\epsilon$. Adding gives $x_U+x_W<\epsilon$, contradicting the total equation. [given, A1, F1, algebra]

1.2 In the diagnostic quiver $b\to a$ with one self-dual degree-minus-one loop at $a$, the total $E=T^{\oplus6}\oplus S^{\oplus4}$ has even $a$-dimension but the stabilizer of its surjective-arrow representative contains $\operatorname{Hom}(\mathbb C^6,\mathbb C^4)$ as a nonzero unipotent radical. Thus even total parity and semistability alone do not imply reductivity. The example is not claimed to satisfy every original 5.10 hypothesis. [given, A1, F1, algebra]

2.1 The first calculation obstructs only invariant-flag padding with an unseen complement. The second is a diagnostic, not a counterexample to the full source assumptions. Neither supplies the required parity-safe kernel theorem or an alternate actual wall construction. The missing implication from the original even-total hypotheses therefore remains escalated. [given, A1, F1, step 1.1, step 1.2, algebra] ∎

