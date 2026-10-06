---
id: thm-weak-containment-is-equivalent-to-kernel-inclusion
kind: theorem
title: Weak containment is equivalent to kernel inclusion
deps:
  - def-weak-containment-of-unitary-representations
  - lem-weak-containment-implies-kernel-inclusion
  - lem-kernel-inclusion-implies-weak-containment
  - thm-nondegenerate-representations-of-c-star-g-are-unitary-representations-of-g
  - def-full-group-c-star-algebra
  - def-unitary-dual-of-a-locally-compact-group
  - def-primitive-ideal-space-of-a-group-c-star-algebra
  - def-axiom-of-choice
dependency_level: 6
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "Assume AC, inherited from the two implication lemmas and from the correspondence of representations with nondegenerate star-representations of C*(G); the combination adds no further choice."
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1, 16 December 2019)"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Chapter 8, §8.B, Proposition 8.B.4 and Remark 8.B.5 (statements; proofs referred there to Dixmier §§3.4 and 18)"
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix F, §F.4, Theorem F.4.4 (statement; proof referred there to Dixmier §18)"
status: draft
origin: pipeline
---
## Statement

Assume the Axiom of Choice. Let $G$ be an LCH group and let $\pi$ and $\rho$ be
strongly continuous unitary representations of $G$, extended to nondegenerate
star-representations of the full group C\*-algebra $C^*(G)$
([[thm-nondegenerate-representations-of-c-star-g-are-unitary-representations-of-g]],
[[def-full-group-c-star-algebra]]). Write $\ker\pi:=\{a\in C^*(G):\pi(a)=0\}$
and similarly for $\rho$. Then the following are equivalent:

1. $\pi\prec\rho$
   ([[def-weak-containment-of-unitary-representations]]);
2. $\ker\rho\subseteq\ker\pi$;
3. $\|\pi(a)\|\le\|\rho(a)\|$ for every $a\in C^*(G)$.

In particular, for irreducible $\pi$ and $\rho$ one has $\pi\sim\rho$ if and
only if $\ker\pi=\ker\rho$; consequently the kernel map
$\kappa:\widehat G\to\operatorname{Prim}(C^*(G))$,
$\kappa([\pi])=\ker\pi$, of
[[def-primitive-ideal-space-of-a-group-c-star-algebra]] is well defined on
unitary equivalence classes and its fibres are exactly the weak equivalence
classes.

## Facts & Assumptions

**Given:** AC; an LCH group $G$; strongly continuous unitary representations $\pi,\rho$ of $G$ with their extensions to $C^*(G)$; $A=C^*(G)$.

[F1] If $\pi\prec\rho$ then $\|\pi(a)\|\le\|\rho(a)\|$ for every $a\in A$; in particular $\ker\rho\subseteq\ker\pi$ ([[lem-weak-containment-implies-kernel-inclusion]]).

[F2] If $\ker\rho\subseteq\ker\pi$ then $\pi\prec\rho$ ([[lem-kernel-inclusion-implies-weak-containment]]).

[F3] Unitary representations of $G$ correspond bijectively, up to unitary equivalence, to nondegenerate star-representations of $A$, and irreducibility is preserved on both sides; unitarily equivalent representations have equal kernels, which are closed two-sided ideals ([[thm-nondegenerate-representations-of-c-star-g-are-unitary-representations-of-g]], [[def-full-group-c-star-algebra]]).

[F4] $\widehat G$ is the set of unitary equivalence classes of irreducible strongly continuous unitary representations; primitive ideals and the kernel map $\kappa([\pi])=\ker\pi$ are as in [[def-primitive-ideal-space-of-a-group-c-star-algebra]] ([[def-unitary-dual-of-a-locally-compact-group]]).

## Proof

**Proof technique:** direct.

**Given:** AC, an LCH group $G$, unitary representations $\pi,\rho$ and their extensions to $A=C^*(G)$.

1.1 Condition 1 implies conditions 2 and 3: by [F1], $\pi\prec\rho$ gives $\|\pi(a)\|\le\|\rho(a)\|$ for all $a\in A$, and $a\in\ker\rho$ then gives $\|\pi(a)\|\le0$, that is $a\in\ker\pi$. [F1]

1.2 Condition 2 implies condition 1: this is exactly [F2]. [F2]

2.1 Condition 3 implies condition 2: if $\|\pi(a)\|\le\|\rho(a)\|$ for every $a$ and $a\in\ker\rho$, then $\|\pi(a)\|\le\|\rho(a)\|=0$, so $a\in\ker\pi$. Together with steps 1.1 and 1.2 this proves that 1, 2 and 3 are equivalent. [step 1.1, step 1.2]

3.1 For irreducible $\pi,\rho$ the equivalence specializes: $\pi\sim\rho$ means $\pi\prec\rho$ and $\rho\prec\pi$, which by step 2.1 is equivalent to $\ker\rho\subseteq\ker\pi$ and $\ker\pi\subseteq\ker\rho$, that is $\ker\pi=\ker\rho$. [step 2.1]

4.1 The kernel map $\kappa$ is well defined and has the weak equivalence classes as fibres. If $[\pi]=[\rho]$ in $\widehat G$, the representations are unitarily equivalent, hence have equal kernels by [F3], so $\kappa([\pi])$ does not depend on the chosen representative; the class is irreducible, so $\kappa([\pi])=\ker\pi$ is a closed two-sided ideal that is the kernel of an irreducible nondegenerate star-representation of $A$, hence a primitive ideal, and $\kappa$ maps into $\operatorname{Prim}(C^*(G))$ by [F4]. Two classes have the same image exactly when $\ker\pi=\ker\rho$, which by step 3.1 is exactly $\pi\sim\rho$. [F3, F4, step 3.1]

5.1 The Axiom of Choice is inherited from the two implication lemmas and from the representation correspondence; the bookkeeping of conditions and fibres adds no choice ([[def-axiom-of-choice]]). [given, F1, F2, F3] ∎ 