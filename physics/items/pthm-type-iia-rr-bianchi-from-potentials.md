---
id: pthm-type-iia-rr-bianchi-from-potentials
kind: physics-theorem
title: Type Iia RR Bianchi From Potentials
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 8
domain: physics
library: physics
deps:
  - def-supergravity-conventions-and-normalizations
  - post-type-iia-two-derivative-supergravity-action
  - thm-the-exterior-derivative-is-a-graded-derivation
  - thm-the-exterior-derivative-squares-to-zero
dependency_roles:
  def-supergravity-conventions-and-normalizations: formulation-prerequisite
  post-type-iia-two-derivative-supergravity-action: physical-assumption
  thm-the-exterior-derivative-is-a-graded-derivation: mathematical-premise
  thm-the-exterior-derivative-squares-to-zero: mathematical-premise
physical_scope: "Local, source-free differential-form identities in the massless Hamilton potential convention. No global twisted cohomology, magnetic NS5 source, or sourced RR equation is asserted."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "M. J. D. Hamilton, The field and Killing spinor equations of M-theory and type IIA/IIB supergravity in coordinate-free notation"
      url: "https://arxiv.org/pdf/1607.00327v3"
      locator: "§6.1, definitions preceding Theorem 6.2(e); compare the printed Bianchi sign with the potential definitions."
    - title: "Joseph Polchinski, String Theory, Volume II: Superstring Theory and Beyond"
      url: "https://library.institutpendidikan.ac.id/wp-content/uploads/2024/08/Joseph-Polchinski-_String-Theory-Volume-II-Superstring-Theory-and-Beyond_.pdf"
      locator: "§12.1.5 and §12.1.8, printed pp. 86–89; \u007eF_4=dA_3-A_1∧F_3 and its differential identity."
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
proof_strategy: direct
---

## Statement

On a smooth contractible source-free ten-dimensional patch $U$, let $B_2\in\Omega^2(U)$, $C_1\in\Omega^1(U)$, $C_3\in\Omega^3(U)$ be smooth real differential-form potentials, $H_3=dB_2$, $G_2=dC_1$, $G_4=dC_3$, and $\widetilde G_4=G_4-C_1\wedge H_3$. If $dH_3=0$, then $dG_2=0$ and $d\widetilde G_4=-H_3\wedge G_2$. A smooth polyform is an element of $\Omega^\bullet(U):=\bigoplus_{p=0}^{10}\Omega^p(U)$. Give this space the parity grading $\Omega^{\overline0}=\bigoplus_{p\text{ even}}\Omega^p$ and $\Omega^{\overline1}=\bigoplus_{p\text{ odd}}\Omega^p$. An odd differential means a real-linear parity-reversing map whose square is zero. For $D_H:=d+H_3\wedge$, $D_H^2=dH_3\wedge$; hence $D_H$ is an odd differential when $dH_3=0$. No degree-one operator for the integer grading is asserted. The minus sign follows from the declared potential convention and does not agree with the plus sign printed in Hamilton’s Theorem 6.2(e).

## Theorem references

[M. J. D. Hamilton, §6.1, definitions and Theorem 6.2(e)](https://arxiv.org/pdf/1607.00327v3)

[Joseph Polchinski, §12.1.5 and §12.1.8](https://library.institutpendidikan.ac.id/wp-content/uploads/2024/08/Joseph-Polchinski-_String-Theory-Volume-II-Superstring-Theory-and-Beyond_.pdf)

[[post-type-iia-two-derivative-supergravity-action]]

## Facts & Assumptions

**Given:** The smooth local potentials and $dH_3=0$ above, and the differential-form conventions in [[def-supergravity-conventions-and-normalizations]].

[A1] [[def-supergravity-conventions-and-normalizations]] (current batch-56 carrier and current ready Step 1 record inspected; its stated hypotheses match this use): signature $(-+\cdots+)$, standard wedge product, and ten-dimensional form norm $|F_p|^2=F_{M_1\ldots M_p}F^{M_1\ldots M_p}/p!$. The argument below uses only the wedge convention.

[A2] [[post-type-iia-two-derivative-supergravity-action]] adopts $H_3=dB_2$, $G_2=dC_1$, $G_4=dC_3$, and $\widetilde G_4=G_4-C_1\wedge H_3$, on a local patch with no magnetic source.

[F1] [[thm-the-exterior-derivative-squares-to-zero]]: $d^2\omega=0$ for every smooth differential form $\omega$.

[F2] [[thm-the-exterior-derivative-is-a-graded-derivation]]: $d(\alpha\wedge\beta)=d\alpha\wedge\beta+(-1)^{\deg\alpha}\alpha\wedge d\beta$ for homogeneous forms.

## Proof

1.1 By [A2] and [F1], $dG_2=d(dC_1)=0$. [given, A2, F1, def. field-strength definition]

2.1 Apply [F1] and [F2] to $\widetilde G_4$: $$d\widetilde G_4=d^2C_3-d(C_1\wedge H_3)=-G_2\wedge H_3+C_1\wedge dH_3.$$ The second term vanishes by the hypothesis $dH_3=0$. Since $\deg G_2=2$ and $\deg H_3=3$, the wedge convention in [A1] and graded commutativity give $G_2\wedge H_3=H_3\wedge G_2$, so $d\widetilde G_4=-H_3\wedge G_2$. [given, A1, A2, F1, F2, step 1.1, algebra]

3.1 For any smooth polyform $\omega$, expand $$D_H^2\omega=d(H_3\wedge\omega)+H_3\wedge d\omega+H_3\wedge H_3\wedge\omega.$$ By [F2], the first two terms sum to $dH_3\wedge\omega+((-1)^3+1)H_3\wedge d\omega=dH_3\wedge\omega$. Graded commutativity also gives $H_3\wedge H_3=-H_3\wedge H_3$, hence $H_3\wedge H_3=0$ over $\mathbb R$. Therefore $D_H^2=dH_3\wedge$, and $D_H^2=0$ under the stated closedness hypothesis. Both summands of $D_H$ reverse parity (their integer-degree shifts are 1 and 3), so this is an odd differential in the defined parity grading. [given, F2, algebra, step 2.1] ∎

