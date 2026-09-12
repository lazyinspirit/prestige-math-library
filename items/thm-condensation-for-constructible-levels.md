---
id: thm-condensation-for-constructible-levels
kind: theorem
title: Condensation for constructible levels
status: draft
origin: pipeline
deps: [lem-finite-stage-l-history-and-limit-level-absoluteness, thm-collapse-of-elementary-membership-submodels, lem-collapse-fixes-transitive-parts-and-orders-ordinals]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Lietz, Set Theory, Lemma 7.11, pp.57–58; weak-level finite-history gap completed locally"
      url: https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf
    - title: "Kunen, Set Theory, Chapter VI Theorems 3.8–3.9, pp.171–172"
      url: https://fa.ewi.tudelft.nl/~hart/set_theory/Jech/Kunen-1980-Set_Theory.pdf
justified_by: []
forward_refs: []
---

## Statement

In ZF, let $\alpha$ be a nonzero limit ordinal, let $X\prec(L_\alpha,\in)$, and let $\pi:X\to M$ be the Mostowski collapse. Then

$$M=L_\beta\qquad\text{for }\beta=M\cap\operatorname{Ord}.$$

Moreover, $\pi$ fixes every transitive set $A\subseteq X$ pointwise. For every ordinal $\xi\in X$, $\pi(\xi)$ is the order type of $X\cap\xi$; in particular, if $X\cap\xi$ is transitive then $\pi(\xi)=X\cap\xi$.

## Facts & Assumptions

**Given:** Ambient ZF, a nonzero limit ordinal $\alpha$, an elementary substructure $X\prec L_\alpha$, and its collapse $\pi:X\to M$.

[F1] [[lem-finite-stage-l-history-and-limit-level-absoluteness]] supplies one fixed finite sentence $C$ which holds in every nonzero limit $L$-level and characterizes such levels among nonempty transitive sets.

[F2] [[thm-collapse-of-elementary-membership-submodels]] says that the membership relation on $X$ has a unique transitive collapse and that the collapse is an isomorphism $X\cong M$.

[F3] [[lem-collapse-fixes-transitive-parts-and-orders-ordinals]] gives the stated fixing and ordinal-order-type conclusions for any actual-membership collapse.

## Proof

1.1 By F1, $(L_\alpha,\in)\models C$. Since $X\prec L_\alpha$, also $(X,\in)\models C$. F2 makes $\pi$ an isomorphism from $(X,\in)$ to the transitive set $(M,\in)$, so $M\models C$. In particular $M$ is nonempty; no assertion that $L_\alpha$ or $M$ satisfies Infinity, Power Set, Replacement, Separation, or Choice has been used. [F1, F2, given]

2.1 Put $\beta=M\cap\operatorname{Ord}$. The converse direction of F1 applies directly to the nonempty transitive set $M$ satisfying $C$ and yields $M=L_\beta$. This includes the boundary $\alpha=\omega$: the supplier proves $L_\omega=V_\omega$, verifies $C$ there by finite certificates, and explicitly does not infer Infinity. [F1, step 1.1]

3.1 F3 applied to this collapse fixes each transitive $A\subseteq X$ pointwise. It also gives $\pi(\xi)=\operatorname{otp}(X\cap\xi)$ for every actual ordinal $\xi\in X$, and gives $\pi(\xi)=X\cap\xi$ when that intersection is transitive. These conclusions do not require $X$ itself to be transitive, and the empty transitive part is fixed vacuously. [F3, step 2.1] ∎
