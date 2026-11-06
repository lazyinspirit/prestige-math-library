---
id: ex-gts-odd-factor-even-total-r3-parity
kind: example
title: "Gts odd factor even total r3 parity"
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
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
aliases: []
---

## Example

Explicit CY4 degree-minus-one self-dual loop changes factor parity while an admitted total remains even. Compute the parity of every subsum and expose the unauthorized odd 5.10 application, without claiming a full counterexample.

## Example references

[Bojko, *Wall-crossing for Calabi–Yau fourfolds: framework, tools, and applications*](https://arxiv.org/pdf/2507.05922v3), Assumptions 5.1 and 5.10; Definition 5.3; §6.2; §6.3; Assumption 6.9; Remark 6.10; Example 6.11; Theorem 6.12; Lemma 6.13; Equation (6.14); §7.2.

[Bojko, Kuhn, Liu, and Thimm, *Wall-crossing for equivariant DT4 invariants*](https://arxiv.org/html/2608.23515v1), §2.2.8, §3.2, Assumption 4.2.4, and Theorem 1.2.1; used only under their stated hypotheses.

## Setup

The ambient category is $\operatorname{Rep}_{\mathbb C}(b\to a)$, with dimension lattice $\Gamma=\mathbb Z e_a\oplus\mathbb Z e_b$. Use the CY4 completion with one self-dual degree-minus-one loop at $a$ and the usual degree-minus-two dual to the degree-zero arrow. Modulo $2$, the middle loop contributes $d_a^2\equiv d_a$, while vertex and ordinary-arrow/dual terms are even. The diagnostic admitted monoid is $\Gamma_{\mathrm{even}}=\{(d_a,d_b)\in\mathbb N^2:d_a\text{ is even}\}$; this is a parity model, not an assertion that every source 5.1 decomposition hypothesis holds.

Use the source-style filtration $0\subset\mathbb Z e_a\subset\Gamma$ with $Z_1(e_a)=i$ and $Z_2(e_b)=-1$. It gives phase $1/2$ when $d_b=0$ and phase $1$ when $d_b>0$, with weak see-saw equal to the maximum. For any representation $f:B\to A$, $(B,\operatorname{im}f)$ is a phase-one surjective-arrow subrepresentation and $(0,A/\operatorname{im}f)$ has phase one-half, so this is an HN filtration after omitting zero terms. The canonical diagnostic framing is $\mathrm{Fr}(B,A)=A\oplus B$, exact on the ambient representation category; no 5.3 uniformity or CY4 virtual class is asserted. Let the torus $T=\mathbb G_m$ act trivially on the degree-zero quiver and loop.

Let $T_0=(\mathbb C_b\xrightarrow{1}\mathbb C_a)$ and $S=(\mathbb C_b\to0)$. Then $T_0$ is stable of odd self-Euler parity and $S$ is stable of even parity. The admitted total is $E=T_0^{\oplus6}\oplus S^{\oplus4}$, of dimension $(d_a,d_b)=(6,10)$. The actual ambient subrepresentations of $E$ are pairs $(B'\subseteq\mathbb C^{10},A'\subseteq\mathbb C^6)$ with $\pi(B')\subseteq A'$, where $\pi$ is projection. In the diagnostic inherited exact structure, only sequences whose three class vectors have even $a$-coordinate are admitted. The split summands $T_0$ and odd direct subsums are ambient objects, not admitted 5.10 classes. The physical torus is trivial and the calculation uses no orientation-dependent virtual class.

For every direct subsum $T_0^{\oplus u}\oplus S^{\oplus v}$ with $0\le u\le6$ and $0\le v\le4$, its self-Euler parity is $u\pmod2$. Thus odd subsums are exactly those with odd $u$, while the total $u=6$ is even. The example tests an odd-subsum proof shortcut; it does not claim the diagnostic datum satisfies all original 5.1(a) or 5.10 hypotheses.

## Facts & Assumptions

**Given:** the exact data and all unresolved suppliers retain their stated status.

[F1] [[def-gts-weak-phase-framing-moduli-datum]]: exact planned interface: “Specify original weak stability, exact phase category, actual ordinary-vs-admissible maps, original concentration opens and exact Fr_k, common-line framing, even emergent class domain, torus linearizations and orientations. No sum closure, cofinal-index availability, or abelian phase category is implicit.” The link records scope, not proof acceptance.


## Context only — no mathematical supplier use

`lem-gts-parity-safe-admitted-total-closed-orbit-reductivity` name the held construction interfaces discussed by this diagnostic. Their conclusions are not assumed or used to establish the calculations below; this example does not prove those interfaces.

## Verification

1.1 The CY4 Euler contributions are $2d_a^2+2d_b^2$ from vertices and $-2d_ad_b$ from the ordinary arrow and its dual; each is even. The single self-dual middle loop contributes $d_a^2$. Hence $\chi(d,d)\equiv d_a\pmod2$. Therefore $T_0$ is odd, $S$ is even, and $E$ is even because $d_a(E)=6$. [given, F1, algebra]

1.2 The representation $T_0$ has only the proper sink subobject $(\mathbb C_a,0)$, of phase $1/2$, while its quotient has phase $1$; so it is stable. The representation $S$ is simple. Their direct sum has surjective arrow $\mathbb C^{10}\to\mathbb C^6$. For any proper subrepresentation with nonzero source space, its source quotient is nonzero: if the source spaces agreed, surjectivity would force the target spaces to agree too. Thus both it and the quotient have phase one. A source-zero subobject has phase $1/2$ and source-positive quotient. This verifies semistability directly. [given, F1, algebra]

2.1 In the stabilizer of this surjection, choose splittings $\mathbb C^{10}=\mathbb C^6\oplus\mathbb C^4$. The subgroup acting by $\begin{pmatrix}I_6&0\\N&I_4\end{pmatrix}$, for arbitrary $N:\mathbb C^6\to\mathbb C^4$, preserves the arrow. It is nonzero and unipotent because $N^2=0$. The full stabilizer consists of $g_a=A\in\mathrm{GL}_6$ and $g_b=\begin{pmatrix}A&0\\N&D\end{pmatrix}$ with $D\in\mathrm{GL}_4$; hence the displayed additive subgroup $\operatorname{Hom}(\mathbb C^6,\mathbb C^4)$ is normal, by block-matrix conjugation. It is therefore a nontrivial connected normal unipotent subgroup, so the stabilizer is nonreductive. Thus the total even parity does not alone imply a reductive stabilizer. [given, F1, step 1.1, algebra]

3.1 This is a diagnostic against inferring odd-factor reductivity from total parity; the full source hypotheses are not all checked, so it is not a counterexample to the original theorem. [given, F1, step 1.2, step 2.1, algebra] ∎

