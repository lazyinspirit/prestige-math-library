---
id: "def-perfect-complex-over-a-ring"
kind: "definition"
title: "Perfect complexes over a ring and its graded version"
deps: [def-derived-category-of-an-abelian-category, def-bounded-bounded-below-and-bounded-above-complex, def-projective-module, def-generated-cyclic-finitely-generated-and-free-modules, def-finitely-generated-graded-projective-module, def-graded-ring-module-bimodule-and-internal-shift]
sources:
  references:
    - title: "The Stacks Project, More on Algebra, Definition 15.76.1"
      url: "https://stacks.math.columbia.edu/tag/0656"
    - title: "Weibel, The K-book, Chapter II, Example 9.7.5"
      url: "https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.II.pdf"
    - title: "Khovanov and Seidel, Quivers, Floer Cohomology, and Braid Group Actions, §2c"
      url: "https://arxiv.org/pdf/math/0006056"
provenance:
  statement: literature-derived
  proof: not-applicable
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
proof_strategy: not-applicable
verification:
  precheck: n/a
---

## Definition

Let $A$ be a unital associative ring and let $D(A\text{-}\mathrm{Mod})$ be the
derived category of left $A$-modules in the cochain convention of
[[def-derived-category-of-an-abelian-category]]. An object $X$ of
$D(A\text{-}\mathrm{Mod})$ is **perfect** when it is isomorphic there to a
bounded cochain complex of finitely generated projective left $A$-modules
([[def-bounded-bounded-below-and-bounded-above-complex]],
[[def-projective-module]],
[[def-generated-cyclic-finitely-generated-and-free-modules]]). The
isomorphism is taken in the derived category, so a perfect object is presented
by a zigzag of quasi-isomorphisms to its bounded finite-projective
representative; no single representative is singled out as canonical. Write
$D_{\mathrm{perf}}(A)$ for the **strictly full subcategory** of
$D(A\text{-}\mathrm{Mod})$ whose objects are the perfect ones: it contains every
morphism of $D(A\text{-}\mathrm{Mod})$ between perfect objects, and it is closed
under isomorphism in $D(A\text{-}\mathrm{Mod})$.

For a unital graded $k$-algebra $A$, the **graded version** uses the derived
category $D(\operatorname{GrMod}_0(A))$ of the abelian category of graded left
$A$-modules with degree-zero maps
([[def-graded-ring-module-bimodule-and-internal-shift]],
[[def-finitely-generated-graded-projective-module]]). A graded left
$A$-module is **finite graded projective** when it is a finitely generated
projective object of $\operatorname{GrMod}_0(A)$; a graded complex has
**degree-zero differentials** when every differential is a degree-zero map of
graded modules. An object of $D(\operatorname{GrMod}_0(A))$ is **graded
perfect** when it is isomorphic there to a bounded cochain complex of finite
graded projective left $A$-modules with degree-zero differentials; the strictly
full subcategory of these objects is written
$D_{\mathrm{perf}}^{\mathrm{gr}}(A)$.

Two operations on complexes are kept separate throughout. The **cochain
shift** $[1]$ is the translation of the derived category, $X[1]^n=X^{n+1}$
with the sign convention of [[def-derived-category-of-an-abelian-category]];
the **internal shift** $\{1\}$ reindexes the internal grading of a graded
module or graded complex, $(M\{1\})_d=M_{d-1}$
([[def-graded-ring-module-bimodule-and-internal-shift]]). They act on different
structures and commute with one another. They need not produce distinct
isomorphism classes: for the zero complex, $0[1]\cong0\{1\}\cong0$.

A bounded cochain complex of arbitrary left $A$-modules need not be perfect:
boundedness alone neither supplies finitely generated projective terms nor
permits their recovery, and the definition above asks for such a representative
up to isomorphism in the derived category. The definition itself does not
identify $D_{\mathrm{perf}}(A)$ with the bounded derived category of finitely
generated left $A$-modules; that comparison needs additional hypotheses.
