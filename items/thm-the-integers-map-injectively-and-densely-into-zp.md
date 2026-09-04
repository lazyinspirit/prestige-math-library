---
id: thm-the-integers-map-injectively-and-densely-into-zp
kind: theorem
title: "The canonical map from the integers into Zp is injective and has dense image"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-canonical-map-from-the-integers-to-zp, def-p-adic-integers-as-compatible-residue-classes]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Jordan Bell, The profinite completion of the integers, the p-adic integers, and Prufer p-groups"
      url: "https://jordanbell.info/LaTeX/mathematics/profinite/"
    - title: "Gareth Wilkes, Profinite Groups and Group Cohomology lecture notes"
      url: "https://www.dpmms.cam.ac.uk/~grw46/LectureNotes.pdf"
---

## Statement

The canonical homomorphism from $\mathbb Z$ to $\mathbb Z_p$ is injective, and
its image is dense in $\mathbb Z_p$.

## Facts & Assumptions

**Given:** The canonical map from $\mathbb Z$ to $\mathbb Z_p$.

[F1] The canonical map sends $m$ to the residue tuple
$(m\bmod p^n)_{n\ge1}$ ([[def-canonical-map-from-the-integers-to-zp]]).

[L1] An element of $\mathbb Z_p$ is a compatible system of residue classes
modulo $p^n$ ([[def-p-adic-integers-as-compatible-residue-classes]]).

## Proof

**Proof technique:** direct.

1.1 If an integer $m$ maps to $0$, then [F1] says $m\bmod p^n=0$ for every $n\ge1$. Thus every power $p^n$ divides $m$, which is possible only for $m=0$. So the canonical map is injective. [F1, given, algebra]

1.2 A basic neighbourhood in $\mathbb Z_p$ fixes some residue class modulo $p^n$. Let $x=(x_r)\in\mathbb Z_p$ and let $n\ge1$. Choose an integer $m$ representing the coordinate $x_n\in\mathbb Z/p^n\mathbb Z$. Then [F1] gives that the image of $m$ has $n$-th coordinate $x_n$, and [L1] implies that this image agrees with $x$ in every earlier coordinate as well. So every basic neighbourhood of $x$ meets the embedded copy of $\mathbb Z$, which is therefore dense. [F1, L1, given, choose]

2.1 Step 1.1 proves injectivity and step 1.2 proves density. The zero element is treated in both arguments without any extra case split. [step 1.1, step 1.2] ∎
