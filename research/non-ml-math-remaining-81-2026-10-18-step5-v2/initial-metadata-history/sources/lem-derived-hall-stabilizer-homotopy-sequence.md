---
id: lem-derived-hall-stabilizer-homotopy-sequence
kind: lemma
title: "Mapping-space homotopy groups give the derived Hall stabilizer weight"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - def-toen-locally-finite-dg-category
  - def-toen-derived-hall-algebra
  - lem-perfect-dg-modules-have-finite-total-ext
  - def-homotopy-fiber-of-a-map
  - thm-mapping-path-factorization
  - thm-long-exact-sequence-of-homotopy-groups-of-a-fibration
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bertrand Toën, Derived Hall algebras, arXiv:math/0501343v4, §5, Proposition 5.1"
      url: "https://arxiv.org/pdf/math/0501343v4"
---

## Statement

Let $\mathcal T$ be a locally finite dg-enhancement over $k=\mathbb F_q$, let $x,z$ be perfect right dg $\mathcal T$-modules, and let $f:x\to z$ be a morphism whose homotopy cofiber is isomorphic to a perfect module $y$. Let $C_f$ be the connected component represented by $f$ in the homotopy fiber over $z$ of the target map from the arrow homotopy type, restricted to source isomorphic to $x$ and cofiber isomorphic to $y$. Put
$$
\operatorname{Aut}(f/z):=\{a\in\operatorname{Aut}_{\mathcal D(\mathcal T)}(x): f\circ a=f\text{ in }\mathcal D(\mathcal T)\}.
$$
Then
$$
\prod_{j>0}|\pi_j(C_f,f)|^{(-1)^j} =|\operatorname{Aut}(f/z)|^{-1} \prod_{i>0}|\operatorname{Ext}^{-i}_{\mathcal T}(x,z)|^{(-1)^i} \prod_{i>0}|\operatorname{Ext}^{-i}_{\mathcal T}(x,x)|^{(-1)^{i+1}}.
$$

## Facts & Assumptions

**Given:** The finite field, locally finite dg-enhancement, perfect modules $x,y,z$, and a map $f:x\to z$ with cofiber $y$.

[F1] The target fiber is the homotopy type of arrows over $z$, with components represented by maps into $z$ and their source and cofiber equivalences ([[def-toen-derived-hall-algebra]]).

[F2] Derived mapping spaces satisfy $\pi_j\operatorname{Map}(a,b)=\operatorname{Ext}^{-j}_{\mathcal T}(a,b)$ for $j\ge0$, and perfect modules have finite total Ext ([[def-toen-locally-finite-dg-category]], [[lem-perfect-dg-modules-have-finite-total-ext]]).

[F3] Homotopy fibers can be replaced by fibration fibers and have the long exact sequence of homotopy groups, including the component tail ([[def-homotopy-fiber-of-a-map]], [[thm-mapping-path-factorization]], [[thm-long-exact-sequence-of-homotopy-groups-of-a-fibration]]).

## Proof

1.1 The loop space at $f$ of the restricted arrow core over the fixed target $z$ is the homotopy fiber over $f$ of postcomposition $f\circ-:\operatorname{Map}(x,x)^{\simeq}\to\operatorname{Map}(x,z)$, based at $\mathrm{id}_x$. Here $\operatorname{Map}(x,x)^{\simeq}$ is the union of components represented by isomorphisms in $\mathcal D(\mathcal T)$; using the full mapping space would also include noninvertible endomorphisms and would not compute loops in the core. Since this is a union of components, its positive homotopy groups at $\mathrm{id}_x$ are $\operatorname{Ext}^{-i}(x,x)$, while [F2] gives $\pi_i\operatorname{Map}(x,z)=\operatorname{Ext}^{-i}(x,z)$. The long exact sequence in [F3] therefore gives, for each $i\ge1$, $\operatorname{Ext}^{-i-1}(x,x)\to\operatorname{Ext}^{-i-1}(x,z)\to\pi_{i+1}(C_f)\to\operatorname{Ext}^{-i}(x,x)\to\operatorname{Ext}^{-i}(x,z)$. Its low-degree tail is $\operatorname{Ext}^{-1}(x,x)\to\operatorname{Ext}^{-1}(x,z)\to\pi_1(C_f)\to\operatorname{Aut}(x)\to\operatorname{Hom}_{\mathcal D(\mathcal T)}(x,z)$; the last map has kernel $\operatorname{Aut}(f/z)$, so the preceding image in $\operatorname{Aut}(x)$ is exactly that stabilizer and the induced map onto it is surjective. [F1, F2, F3, construct]

2.1 All Ext groups in these sequences are finite and vanish outside a finite range by [F2]. The group $\operatorname{Aut}(f/z)$ is a subgroup of the finite group $\operatorname{Aut}(x)\subseteq\operatorname{Ext}^0(x,x)$. Thus all groups in the displayed exact sequence are finite and the sequence terminates. For a finite exact sequence of finite groups, the product of group orders with alternating exponents is $1$: at each term, its order is the product of the kernel order and image order, and adjacent image factors cancel. Applying this cancellation to step 1.1 yields $|\pi_1(C_f)|^{-1}\prod_{j\ge2}|\pi_j(C_f)|^{(-1)^j}=|\operatorname{Aut}(f/z)|^{-1}\prod_{i>0}|\operatorname{Ext}^{-i}(x,z)|^{(-1)^i}\prod_{i>0}|\operatorname{Ext}^{-i}(x,x)|^{(-1)^{i+1}}$, which is the claimed homotopy weight. [F2, step 1.1, algebra] ∎
