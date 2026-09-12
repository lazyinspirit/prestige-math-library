---
id: thm-corresponding-block-bimodules-are-green-correspondents
kind: theorem
title: Corresponding block bimodules are Green correspondents
deps: ["def-axiom-of-choice", "def-brauer-correspondent-of-a-block", "def-block-bimodule-for-the-double-group", "cor-green-correspondence-for-modules-of-vertex-exactly-p", "def-defect-group-and-numerical-defect-of-a-block"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Saunders, Modular Representation Theory, Theorem 5.16
      url: https://jpsaunders.uk/ModRep/NotesWebsite.pdf
    - title: Farrell–Lassueur, Modular Representation Theory of Finite Groups, Theorem
        40.4, §40 (printed pp.8–12 of upload17)
      url: https://www.niamhfarrell.com/uploads/6/9/2/8/69286633/upload17.pdf
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

Assume AC. Let $B$ be a block of $kG$ with defect group $D$, and let $b$ be its Brauer correspondent in $N=N_G(D)$. Then $B$ and $b$, viewed as indecomposable double-group modules, are Green correspondents for $G\times G$, $N\times N$ and vertex $\Delta D$.

## Facts & Assumptions

**Given:** The stated finite groups, splitting residue field and corresponding blocks.

[A1] [[def-axiom-of-choice]] is assumed only through the published Green theorem's finite-length chain and selection argument.

[F1] [[def-brauer-correspondent-of-a-block]] supplies $b^G=B$ and defect group $D$ for both blocks.

[F2] [[def-block-bimodule-for-the-double-group]] supplies their nonzero indecomposable double-group actions.

[F3] [[cor-green-correspondence-for-modules-of-vertex-exactly-p]] gives the unique same-vertex restriction summand and its inverse induction correspondent under AC.

[F4] [[def-defect-group-and-numerical-defect-of-a-block]] translates defect $D$ to vertex $\Delta D$.

## Proof

1.1 If $(x,y)$ normalizes $\Delta D$, conjugation and coordinate projection give $xDx^{-1}=yDy^{-1}=D$. Thus $x,y\in N$ and $N_{G\times G}(\Delta D)\le N\times N$. By F1, F2 and F4 both blocks are nonzero indecomposable modules with vertex exactly $\Delta D$, and the defining induction property gives $b\mid\operatorname{Res}_{N\times N}B$. The global vertex is already proved by the Brauer bijection; it is not inferred from this summand relation. [F1, F2, F4, algebra]

2.1 Apply F3 under A1 using the normalizer containment in step 1.1. Its unique vertex-$\Delta D$ restriction summand must be $b$, and the inverse correspondence sends $b$ to $B$. These are exactly the two Green-correspondence assertions. When $D=1$ or $N=G$, the double-group normalizer interval is the identity case and the correspondence fixes the block. The only added AC use is application of F3, whose inherited finite-length argument declares it; the finite group calculation in step 1.1 and the block bijection do not use AC. [A1, F3, step 1.1, algebra] ∎
