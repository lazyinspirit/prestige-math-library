---
id: lem-intersection-affine-opens-covered-principal-opens
kind: lemma
title: "Intersections of affine opens admit principal affine covers"
status: published
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-affine-open-subscheme, lem-spectrum-localization-open-immersion, thm-sections-basic-open-affine-scheme]
proof_strategy: direct
verification:
  audited: 2026-09-27
  precheck: pass
sources:
  references:
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, Section 6.3"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf"
---
## Statement

If $U,V$ are affine open subschemes of a scheme $X$, then $U\cap V$ is covered
by open subschemes which are principal opens in $U$ and are also principal
opens in affine open charts of $V$.

## Facts & Assumptions

**Given:** Affine open subschemes $U,V\subseteq X$.

[L1] Distinguished opens form a basis in an affine scheme, and sections on $D(f)\subseteq\operatorname{Spec}A$ are $A_f$ ([[lem-spectrum-localization-open-immersion]], [[thm-sections-basic-open-affine-scheme]]).

## Proof

**Proof technique:** direct.

1.1 Fix $x\in U\cap V$, and write $U=\operatorname{Spec}A$ and $V=\operatorname{Spec}B$. The basis property in [L1] gives $f\in A$ and $g\in B$ such that $x\in D_U(f)\subseteq V$ and $x\in D_V(g)\subseteq U$. Put $W=D_U(f)\cap D_V(g)$; it is an open neighbourhood of $x$. [L1, given, choose]

2.1 The function $g$ on $V$ restricts to a section on $D_U(f)$. By [L1], write that restriction as $a/f^n$ for some $a\in A$ and $n\ge0$. On $D_U(f)$, its nonvanishing locus is $D_U(a)\cap D_U(f)=D_U(fa)$. Hence $W=D_U(fa)$ is principal in $U$. [L1, step 1.1]

2.2 Symmetrically, the restriction of $f$ to $D_V(g)$ is a section $b/g^m$ for some $b\in B$ and $m\ge0$. Its nonvanishing locus there is $D_V(gb)$, so the same open $W$ is principal in $V$. [L1, step 1.1]

3.1 Every $x\in U\cap V$ has such a common principal neighbourhood $W$. These neighbourhoods cover the intersection and prove the claim. [step 2.1, step 2.2] ∎
