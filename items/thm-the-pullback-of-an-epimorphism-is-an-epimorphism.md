---
id: thm-the-pullback-of-an-epimorphism-is-an-epimorphism
kind: theorem
title: "The pullback of an epimorphism is an epimorphism"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-the-pullback-of-a-cospan-is-the-kernel-of-the-difference-of-its-legs, cor-a-preadditive-category-with-a-zero-object-has-zero-morphisms-in-the-published-sense, cor-a-morphism-in-an-abelian-category-is-monic-exactly-when-its-kernel-is-zero-and-epic-exactly-when-its-cokernel-is-zero, def-abelian-category, thm-every-monomorphism-is-the-kernel-of-its-cokernel]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.5, Lemma 12.5.13"
      url: "https://stacks.math.columbia.edu/tag/00ZX"
pipeline_run: frontier-21
---

## Statement

In a pullback square in an abelian category

```tikzcd
P \arrow[r, "\beta"] \arrow[d, "\alpha"'] & B \arrow[d, "e"] \\
A \arrow[r, "f"'] & C,
```

if $e$ is epic, then $\alpha$ is epic.

## Facts & Assumptions

**Given:** The displayed pullback square in an abelian category, with $e$ epic.

[L1] The pullback is the kernel of the difference map on $A\oplus B$
([[thm-the-pullback-of-a-cospan-is-the-kernel-of-the-difference-of-its-legs]]).

[L2] Abelian categories are preadditive with zero morphisms
([[def-abelian-category]],
[[cor-a-preadditive-category-with-a-zero-object-has-zero-morphisms-in-the-published-sense]]).

[L3] In an abelian category, a morphism is epic exactly when its cokernel is
zero
([[cor-a-morphism-in-an-abelian-category-is-monic-exactly-when-its-kernel-is-zero-and-epic-exactly-when-its-cokernel-is-zero]]).

[L4] In an abelian category every epic morphism is the cokernel of its kernel
([[thm-every-monomorphism-is-the-kernel-of-its-cokernel]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], there is a monomorphism $k:P\to A\oplus B$ with $\alpha=p_Ak$, $\beta=p_Bk$, and $k$ the kernel of $d:=fp_A-ep_B$. Since $d\,i_B=-e$, the epicity of $e$ implies that $d$ is epic as well. [L1, L2]

2.1 Let $q:A\to Q$ be a cokernel of $\alpha$. Because $d$ is epic by step 1.1, [L4] says that $d$ is a cokernel of its kernel $k$. Since $q\alpha=q p_A k=0$, the map $q p_A:A\oplus B\to Q$ kills $k$, so it factors through $d$ as $\overline q\,d=q p_A$. Composing with $i_B$ gives $\overline q(-e)=0$, and since $e$ is epic, $\overline q=0$. Thus $q p_A=0$, and composing with $i_A$ yields $q=0$. So $\alpha$ has zero cokernel and is epic by [L3]. [L1, L2, L3, L4, step 1.1] ∎
