---
id: prop-duality-exchanges-b-n-and-c-n-and-fixes-the-other-types
kind: proposition
title: Duality exchanges B and C
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-coroot-and-dual-root-system, thm-classification-of-irreducible-reduced-crystallographic-root-systems, thm-existence-of-each-classified-root-system, def-cartan-matrix-of-a-based-root-system]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, Problem 17, printed p. 205, and §5 for coroot duality"
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19-24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 21, Section 21.5 on dual root systems, printed p. 116"
landmark: false
proof_strategy: direct
---

## Statement

Let $\Phi$ be a reduced crystallographic root system with dual root system
$\Phi^{\vee}=\{\alpha^{\vee}=2\alpha/(\alpha,\alpha)\}$
([[def-coroot-and-dual-root-system]]). Then $\Phi^{\vee}$ is again a reduced
crystallographic root system, its Cartan matrix is the transpose of that of
$\Phi$, and its Dynkin diagram is the diagram of $\Phi$ with every arrow
reversed. Consequently, up to isomorphism, duality exchanges $B_n$ and $C_n$
and fixes $A_n,D_n,E_6,E_7,E_8,F_4,G_2$ with long and short roots exchanged
for $F_4$ and $G_2$.

## Facts & Assumptions

**Given:** A reduced crystallographic root system $\Phi$ with base $\Delta=\{\alpha_1,\dots,\alpha_r\}$ and Cartan matrix $A=(a_{ij})$, $a_{ij}=2(\alpha_j,\alpha_i)/(\alpha_i,\alpha_i)$, together with the coroots $\alpha^{\vee}=2\alpha/(\alpha,\alpha)$.

[L1] $(\alpha^{\vee},\beta)=2(\beta,\alpha)/(\alpha,\alpha)$ and $(\alpha^{\vee})^{\vee}=\alpha$ ([[def-coroot-and-dual-root-system]]).

[L2] The coroots $\alpha_i^{\vee}$ form a basis of $E$, and the Cartan matrix of the dual system computed in that basis has entries $2(\beta^{\vee},\alpha^{\vee})/(\alpha^{\vee},\alpha^{\vee})$ ([[def-cartan-matrix-of-a-based-root-system]], [[def-coroot-and-dual-root-system]]).

[L3] The irreducible root systems and their Dynkin diagrams are classified as $A_n,B_n,C_n,D_n,E_6,E_7,E_8,F_4,G_2$, with $B_n$ and $C_n$ having path diagrams that differ only by the direction of the arrow on the double edge, and with the simple-laced types having symmetric Cartan matrices ([[thm-classification-of-irreducible-reduced-crystallographic-root-systems]], [[thm-existence-of-each-classified-root-system]]).

## Proof

**Proof technique:** direct.

1.1 $\Phi^{\vee}$ is a reduced crystallographic root system: it is finite, contains no zero vector, and spans $E$ because the $\alpha_i^{\vee}$ are positive multiples of a basis; reducedness follows from $(\alpha^{\vee})^{\vee}=\alpha$ and the reducedness of $\Phi$; and for the reflection $s_{\alpha^{\vee}}$ one has $2(\beta^{\vee},\alpha^{\vee})/(\alpha^{\vee},\alpha^{\vee})=2(\alpha,\beta)/(\beta,\beta)=a_{\beta\alpha}\in\mathbb Z$, so integrality holds, and $s_{\alpha^{\vee}}(\beta^{\vee})=(s_\alpha\beta)^{\vee}$ by direct expansion of the two formulas, so the reflection axiom holds. [L1, L2, algebra]

1.2 The Cartan matrix of $\Phi^{\vee}$ relative to the basis of coroots has entries $a^{\vee}_{ij}=2(\alpha_j^{\vee},\alpha_i^{\vee})/(\alpha_i^{\vee},\alpha_i^{\vee})=a_{ji}$, that is, it is the transpose $A^{T}$. Hence the Dynkin diagram of $\Phi^{\vee}$ is obtained from that of $\Phi$ by reversing every arrow and keeping all edge multiplicities, since the multiplicity is $a_{ij}a_{ji}=a^{\vee}_{ji}a^{\vee}_{ij}$ and the arrow direction is governed by which of the two entries is larger in absolute value. [L1, L2, algebra]

2.1 Inspecting the classified diagrams: the simply-laced types $A_n,D_n,E_6,E_7,E_8$ have symmetric Cartan matrices, so they are self-dual; the triple-edge diagram $G_2$ and the double-edge path $F_4$ are each isomorphic to their arrow-reversed diagrams (interchanging the two $G_2$ vertices, and reversing the $F_4$ path), so those types are self-dual up to isomorphism with long and short roots exchanged; and for $n\ge3$ the transpose of the $B_n$ matrix is the $C_n$ matrix and conversely, while $B_2$ and $C_2$ have isomorphic diagrams and $B_1=C_1=A_1$. [L3, step 1.2, algebra]

3.1 Combining steps 1.1-3.1 gives the assertions: duality is an involution on reduced crystallographic root systems, transforms the Cartan matrix by transposition and the diagram by arrow reversal, and therefore exchanges $B_n$ with $C_n$ and fixes every other classified type up to isomorphism. [step 1.1, step 1.2, step 2.1, algebra] ∎
