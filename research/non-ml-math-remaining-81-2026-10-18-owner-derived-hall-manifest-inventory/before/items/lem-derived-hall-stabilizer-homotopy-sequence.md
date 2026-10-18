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

1.1 The loop space at $f$ of the arrow moduli component is the space of equivalences of the arrow $f$ over the fixed target $z$. Its underlying derived endomorphism mapping space in the homotopy slice over $z$ is the homotopy fiber of postcomposition $\operatorname{Map}(x,x)\xrightarrow{f\circ-}\operatorname{Map}(x,z)$ over $f$. The long exact sequence in [F3], together with [F2], gives for each $i\ge1$ the segment $\operatorname{Ext}^{-i-1}(x,x)\to\operatorname{Ext}^{-i-1}(x,z)\to\pi_{i+1}(C_f)\to\operatorname{Ext}^{-i}(x,x)\to\operatorname{Ext}^{-i}(x,z)$, and its component end is $\operatorname{Ext}^{-1}(x,x)\to\operatorname{Ext}^{-1}(x,z)\to\pi_1(C_f)\to\operatorname{Aut}(f/z)\to1$. The map from $\pi_1(C_f)$ records the induced automorphism of $x$; its image is exactly the automorphisms whose composite with $f$ equals $f$ in the derived category, and the kernel consists of homotopy classes of paths between those maps, modulo loops from $\operatorname{Map}(x,x)$. [F1, F2, F3, construct]

2.1 All Ext groups in these sequences are finite and vanish outside a finite range by [F2]. The group $\operatorname{Aut}(f/z)$ is a subgroup of the finite group $\operatorname{Aut}(x)\subseteq\operatorname{Ext}^0(x,x)$. Thus all groups in the displayed exact sequence are finite and the sequence terminates. For a finite exact sequence of finite groups, the product of group orders with alternating exponents is $1$: at each term, its order is the product of the kernel order and image order, and adjacent image factors cancel. Applying this cancellation to step 1.1 yields $|\pi_1(C_f)|^{-1}\prod_{j\ge2}|\pi_j(C_f)|^{(-1)^j}=|\operatorname{Aut}(f/z)|^{-1}\prod_{i>0}|\operatorname{Ext}^{-i}(x,z)|^{(-1)^i}\prod_{i>0}|\operatorname{Ext}^{-i}(x,x)|^{(-1)^{i+1}}$, which is the claimed homotopy weight. [F2, step 1.1, algebra] ∎
