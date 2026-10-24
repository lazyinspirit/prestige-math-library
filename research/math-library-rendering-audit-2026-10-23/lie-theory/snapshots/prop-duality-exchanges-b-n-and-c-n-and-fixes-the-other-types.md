---
id: prop-duality-exchanges-b-n-and-c-n-and-fixes-the-other-types
kind: proposition
title: Duality exchanges B and C
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-coroot-and-dual-root-system, def-positive-system-and-base-of-simple-roots, thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates, thm-classification-of-irreducible-reduced-crystallographic-root-systems, thm-existence-of-each-classified-root-system, def-cartan-matrix-of-a-based-root-system]
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
verification:
  audited: 2026-09-22
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

[L2] A base $\Delta$ is the set of simple roots of a positive system defined by a regular vector, and every positive root is a nonnegative integral combination of the elements of $\Delta$; the simple roots form a basis of the ambient space ([[def-positive-system-and-base-of-simple-roots]], [[thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates]]).

[L3] The irreducible root systems and their Dynkin diagrams are classified as $A_n,B_n,C_n,D_n,E_6,E_7,E_8,F_4,G_2$, with $B_n$ and $C_n$ having path diagrams that differ only by the direction of the arrow on the double edge, and with the simple-laced types having symmetric Cartan matrices ([[thm-classification-of-irreducible-reduced-crystallographic-root-systems]], [[thm-existence-of-each-classified-root-system]]).

## Proof

**Proof technique:** direct.

1.1 $\Phi^{\vee}$ is a reduced crystallographic root system: it is finite, contains no zero vector, and spans $E$ because the $\alpha_i^{\vee}$ are positive multiples of the vector-space basis $\Delta$. If $\beta^{\vee}=c\alpha^{\vee}$, then $\beta$ is parallel to $\alpha$, so reducedness of $\Phi$ gives $\beta=\pm\alpha$ and hence $\beta^{\vee}=\pm\alpha^{\vee}$; thus the dual is reduced. Moreover $2(\beta^{\vee},\alpha^{\vee})/(\alpha^{\vee},\alpha^{\vee})=2(\alpha,\beta)/(\beta,\beta)\in\mathbb Z$, and direct substitution gives $s_{\alpha^{\vee}}(\beta^{\vee})=(s_\alpha\beta)^{\vee}$, so integrality and reflection stability hold. [L1, L2, algebra]

2.1 It remains to justify that $\Delta^{\vee}=\{\alpha_i^{\vee}\}$ is a base, rather than merely a vector-space basis. Choose a regular vector $v$ whose positive system has base $\Delta$. Since every $\beta^{\vee}$ is a positive scalar multiple of $\beta$, the same $v$ is regular for $\Phi^{\vee}$ and makes $\beta^{\vee}$ positive exactly when $\beta$ is positive. Let $\omega_1,\dots,\omega_r$ be the inner-product dual basis to $\alpha_1,\dots,\alpha_r$, and for each $i$ put $x_i=\sum_{j\ne i}\omega_j$. If $\beta=\sum_j n_j\alpha_j$ is positive, [L2] gives $n_j\ge0$, and $(x_i,\beta)=\sum_{j\ne i}n_j\ge0$; equality holds only when $\beta$ lies on the positive ray of $\alpha_i$, hence only when $\beta=\alpha_i$ by reducedness. The same vanishing criterion holds for $\beta^{\vee}$ because it is a positive multiple of $\beta$. If $\alpha_i^{\vee}$ were a sum of two positive dual roots, pairing with $x_i$ would force both summands to equal $\alpha_i^{\vee}$, an impossibility. Thus every $\alpha_i^{\vee}$ is simple in the dual positive system. By [L2] the complete set of dual simple roots is a basis and has $r=\dim E$ elements; it therefore equals the $r$-element linearly independent set $\Delta^{\vee}$. Its Cartan matrix has entries $a^{\vee}_{ij}=2(\alpha_j^{\vee},\alpha_i^{\vee})/(\alpha_i^{\vee},\alpha_i^{\vee})=a_{ji}$, so it is $A^{T}$. The Dynkin diagram consequently reverses every arrow and keeps each edge multiplicity, since the multiplicity is $a_{ij}a_{ji}=a^{\vee}_{ji}a^{\vee}_{ij}$. [L1, L2, step 1.1, algebra]

3.1 Inspecting the classified diagrams: the simply-laced types $A_n,D_n,E_6,E_7,E_8$ have symmetric Cartan matrices, so they are self-dual; the triple-edge diagram $G_2$ and the double-edge path $F_4$ are each isomorphic to their arrow-reversed diagrams (interchanging the two $G_2$ vertices, and reversing the $F_4$ path), so those types are self-dual up to isomorphism with long and short roots exchanged; and for $n\ge3$ the transpose of the $B_n$ matrix is the $C_n$ matrix and conversely, while $B_2$ and $C_2$ have isomorphic diagrams and $B_1=C_1=A_1$. [L3, step 2.1, algebra]

4.1 Combining steps 1.1-3.1 gives the assertions: duality is an involution on reduced crystallographic root systems, transforms the Cartan matrix by transposition and the diagram by arrow reversal, and therefore exchanges $B_n$ with $C_n$ and fixes every other classified type up to isomorphism. [step 1.1, step 2.1, step 3.1, algebra] ∎
