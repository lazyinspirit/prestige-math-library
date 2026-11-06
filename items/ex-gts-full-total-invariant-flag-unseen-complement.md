---
id: ex-gts-full-total-invariant-flag-unseen-complement
kind: example
title: "Gts full total invariant flag unseen complement"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
category: algebraic-geometry
page: gts-weak-stability-framed-cy4-moduli-examples
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
      locator: "Assumptions 5.1 and 5.10; Definitions 5.3 and 5.4; §6.3; §7.2. Diagnostic examples do not claim the full hypotheses."
    - title: "Bojko, Kuhn, Liu, and Thimm, Wall-crossing for equivariant DT4 invariants"
      url: https://arxiv.org/html/2608.23515v1
      locator: "§§3.2 and 4.2; exact conditional hypotheses and scope limits."
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
aliases: []
---

## Example

Show $xU<0$, $xW<\epsilon$, $xU+xW=\epsilon$ obstruct invariant-flag parity padding; include mixed-flag capacity example as diagnostic, with unverified global hypotheses clearly stated.

## Example references

[Bojko, *Wall-crossing for Calabi–Yau fourfolds: framework, tools, and applications*](https://arxiv.org/pdf/2507.05922v3), Assumptions 5.1 and 5.10; Definition 5.3; §6.2; §6.3; Assumption 6.9; Remark 6.10; Example 6.11; Theorem 6.12; Lemma 6.13; Equation (6.14); §7.2.

[Bojko, Kuhn, Liu, and Thimm, *Wall-crossing for equivariant DT4 invariants*](https://arxiv.org/html/2608.23515v1), §2.2.8, §3.2, Assumption 4.2.4, and Theorem 1.2.1; used only under their stated hypotheses.

## Setup

Suppose the admitted old total splits as actual complementary nonzero summands $U\oplus W$ with $r(U),r(W)>0$. Assume the old positive flag splits compatibly, so its numerator $L$ and the rank $r$ are additive on this decomposition, and the induced lifts of $U$ without sink and $W$ with the full sink are admissible subobjects of the enhanced total. Both extra maps vanish on $U$, and their restrictions to $W$ are the full added maps. The two lifts are nonzero and proper because their old parts omit the other nonzero summand. Let $L$ be the old flag numerator, $r$ the additive rank, $t$ the enhanced total slope, and let the negative sink have weight $-\epsilon$, with $\epsilon>0$. Put $x_U=L(U)-tr(U)$ and $x_W=L(W)-tr(W)$. Then $x_U+x_W=\epsilon$. Stability of the proper lift $U$ without sink requires $x_U<0$; stability of the proper lift $W$ with sink requires $x_W<\epsilon$. These inequalities cannot hold together.

For the source flag-master convention, a subobject of positive old rank $r'$ with old-plus-positive-flag numerator $L'$ and negative-sink dimension $n_0\in\{0,1\}$ can be stable only if $L'-\epsilon n_0<tr'$, where $t$ is the total slope. A pure auxiliary subobject uses the source infinite-slope convention.

For a separate mixed-flag capacity test, use the degree-zero quiver $b\to a$, with $T=(\mathbb C\xrightarrow{\mathrm{id}}\mathbb C)$ and $S=(\mathbb C\to0)$, and $E=T^{\oplus6}\oplus S^{\oplus4}$. Use the exact framing functor $\mathrm{Fr}(R)=R_b\oplus R_a$ and an additive rank positive on both $T$ and $S$; all subrepresentations used below are required to be admissible in the chosen exact phase category. Let $m_T=6$, $m_S=4$ and let the canonical framing dimensions be $f_T=2$, $f_S=1$. Thus $\rho=\max(f_T/m_T,f_S/m_S)=1/3$. For a positive flag of length $l$ with $d_1=1$, $d_j\le j$, and $\mu_j=16^{-(j-1)}$, put $M=\sum_{j=1}^l\mu_jd_j$. Then $1\le M\le\sum_{j\ge1}j16^{-(j-1)}=256/225$. If $0<\epsilon<\mu_l/100$, then $\epsilon<1/100$ and $\mu_1-\epsilon>99/100>(M-\epsilon)/3$. The next calculation proves that this excludes every stable original positive-flag witness over this $E$, for every choice of the old additive character $\lambda$.

The two calculations obstruct the specified invariant-flag and mixed-flag padding routes only. They do not claim the diagnostic object satisfies every original master hypothesis and do not refute the full wall-crossing result.

## Facts & Assumptions

**Given:** the exact data and all unresolved suppliers retain their stated status.

[F1] [[def-gts-weak-phase-framing-moduli-datum]]: exact planned interface: “Specify original weak stability, exact phase category, actual ordinary-vs-admissible maps, original concentration opens and exact Fr_k, common-line framing, even emergent class domain, torus linearizations and orientations. No sum closure, cofinal-index availability, or abelian phase category is implicit.” The link records scope, not proof acceptance.


## Context only — no mathematical supplier use

`lem-gts-parity-safe-admitted-total-closed-orbit-reductivity` name the held construction interfaces discussed by this diagnostic. Their conclusions are not assumed or used to establish the calculations below; this example does not prove those interfaces.

## Verification

1.1 The enhanced total equation is $t(r(U)+r(W))=L(U)+L(W)-\epsilon$. Rearranging gives $x_U+x_W=\epsilon$. The proper lift $U$ omits the sink and has defect $x_U$, so strict stability requires $x_U<0$. The proper complementary lift $W$ includes the sink and has defect $x_W-\epsilon$, so strict stability requires $x_W<\epsilon$. Adding yields $x_U+x_W<\epsilon$, contradicting the total equation. [given, F1, algebra]

1.2 For each type $S_i\in\{T,S\}$ in the specified decomposition $E=\bigoplus_i S_i^{\oplus m_i}$, put $\theta_i=t r(S_i)-\lambda(S_i)$. The subobject consisting of one copy of $S_i$ with all auxiliary spaces zero forces $\theta_i>0$. The total-slope equation is $t r(E)=\lambda(E)+M-\epsilon$, so additivity gives $\sum_i m_i\theta_i=M-\epsilon$. Let $W_i$ be the multiplicity subspace spanned by the components of the first framing vector in the $S_i$ block, and let $h_i=\dim W_i\le f_i$. The subrepresentation formed from $\bigoplus_iS_i\otimes W_i$, the propagated first positive-flag line, and the full negative sink is closed under all arrows because the sink is terminal. If the first vector maps to zero in the old object, the pure positive-flag subobject violates the infinite-slope stability condition. Otherwise this subobject is proper, since $h_T\le2<6$ and $h_S\le1<4$, and has positive auxiliary numerator at least $\mu_1$ and sink contribution $-\epsilon$, so stability forces $\sum_i h_i\theta_i>\mu_1-\epsilon$. [given, F1, algebra]

2.1 Since $h_i\le f_i\le\rho m_i$ and every $\theta_i>0$, we have $\sum_i h_i\theta_i\le\rho\sum_i m_i\theta_i=\rho(M-\epsilon)$. For the stated multiplicities, $\rho=1/3$. The geometric series bound gives $M\le256/225$ and $\epsilon<1/100$, so $\rho(M-\epsilon)<M/3\le256/675<99/100<\mu_1-\epsilon$. This contradicts the strict stability inequality established in the preceding step. The argument used no property of $\lambda$ beyond the positivity forced by stability, so no allowed $\lambda$ yields this proposed witness. [given, F1, step 1.2, algebra]

3.1 The first contradiction rules out invariant padding with an unseen complement; the capacity estimate rules out the specified mixed-flag witness. Neither excludes a different genuinely mixed original-master construction. These diagnostics are not a counterexample to the full source theorem. [given, F1, step 1.1, step 2.1, algebra] ∎
