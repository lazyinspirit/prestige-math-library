---
id: lem-borel-meagre-sections-have-uniform-closed-covers
kind: lemma
title: Uniform closed nowhere-dense covers for Borel meagre sections
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-product-topology, def-borel-sigma-algebra, def-nowhere-dense-meagre-and-residual-subsets]
justified_by: []
aliases: []
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Tomek Bartoszyński, Invariants of Measure and Category, Lemma 3.9, printed p.7"
      url: "https://arxiv.org/pdf/math/9910015"
verification:
  audited: 2026-09-27
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Statement

If $H\subseteq2^\omega\times2^\omega$ is Borel and every vertical section
$H_x$ is meagre, there are Borel maps $x\mapsto F_j(x)$ into codes for closed
nowhere-dense subsets of $2^\omega$ such that
$H_x\subseteq\bigcup_jF_j(x)$ for every $x$.

## Facts & Assumptions

**Given:** A Borel set $H$ with meagre vertical sections.

[F1] Cantor space has a fixed countable basis of clopen cylinders; finite
intersections and inclusions between cylinders are decidable from their finite
words. ([[def-product-topology]], [[def-borel-sigma-algebra]])

[F2] A meagre set lies in a countable union of closed nowhere-dense sets.
([[def-nowhere-dense-meagre-and-residual-subsets]])

## Proof

**Proof technique:** uniform Baire-property induction on a Borel code.

1.1 Code an open section by a subset of the fixed cylinder list. If its code is Borel in $x$, then the relation $U_s\cap O_x\ne\varnothing$ is Borel: it is the countable disjunction over listed cylinders $U_t$ of the finite test $U_s\cap U_t\ne\varnothing$. Consequently the open set $$O'_x=2^\omega\setminus\overline{O_x} =\bigcup\{U_s:U_s\cap O_x=\varnothing\}$$ has a Borel open code in $x$. Its boundary error $D_x=2^\omega\setminus(O_x\cup O'_x) =\overline{O_x}\setminus O_x$ has a Borel closed code, is closed, and is nowhere dense: every open set meeting $\overline{O_x}$ meets $O_x$, hence no nonempty open set is contained in $D_x$. [F1]

1.2 We construct for every Borel $B\subseteq2^\omega\times2^\omega$ a Borel open-section code $O_x$ and Borel closed nowhere-dense-section codes $F_j(x)$ satisfying $$B_x\mathbin\triangle O_x\subseteq\bigcup_jF_j(x).$$ For an open product set, list all basic product rectangles contained in it; their second-factor cylinders with first factor containing $x$ form the desired open section. Its error list is empty. [F1, base]

2.1 For $B=\bigcup_iB_i$, use the induction data $(O_i,F_{i,j})$ and put $O=\bigcup_iO_i$. If $y\in B_x\setminus O_x$, it lies in some $(B_i)_x\setminus(O_i)_x$. If $y\in O_x\setminus B_x$, it lies in some $(O_i)_x\setminus(B_i)_x$. Thus the symmetric difference is covered by the countable list $(F_{i,j}(x))_{i,j}$. The union open code and paired error list are Borel in $x$. [step 1.2, IH]

2.2 For $B^c$, let $O'$ be the interior of the complement of $O$ from step 1.1. Complementing both $B$ and $O$ preserves their symmetric difference, while $(2^\omega\setminus O_x)\setminus O'_x=D_x$. Hence $$(B^c)_x\mathbin\triangle O'_x \subseteq D_x\cup\bigcup_jF_j(x).$$ Append the Borel closed nowhere-dense code $D_x$ to the old error list. [step 1.1, step 1.2, IH]

3.1 Every Borel set has a well-founded countable code built from open sets by complement and countable union. Recursion on that code using steps 1.2, 2.1, and 2.2 gives the asserted Borel data for $H$. [step 1.2, step 2.1, step 2.2]

4.1 For a fixed $x$, both $H_x$ and its error set are meagre, so the open set $O_x$ is meagre. But no nonempty open subset of Cantor space is meagre. To see this directly, start with a cylinder inside such an open set and, against a given sequence of closed nowhere-dense sets, repeatedly choose the first strictly smaller subcylinder avoiding the next closed set. The nested finite words determine a point in the open set outside their union. Hence $O_x$ is empty and $H_x\subseteq\bigcup_jF_j(x)$. The recursion and least-cylinder fusion use fixed countable enumerations and no countable-choice selection of sectionwise covers. ∎ [step 3.1, F2, discharge-induction]
