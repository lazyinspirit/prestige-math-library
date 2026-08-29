---
id: thm-the-arrow-theoretic-criterion-for-exactness
kind: theorem
title: "The arrow-theoretic criterion for exactness"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-exactness-at-a-node,
       thm-the-subobject-inequalities-underlying-exactness,
       def-image-and-coimage-in-a-category-with-kernels-and-cokernels,
       def-kernels-and-cokernels-as-equalizers-and-coequalizers]
justified_by: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Freyd, Abelian Categories, Theorem 2.21"
      url: "https://www.tac.mta.ca/tac/reprints/articles/3/tr3abs.html"
    - title: "David Mehrle, Category Theory, Part III, Definition 7.20"
      url: "https://pi.math.cornell.edu/~dmehrle/notes/partiii/cattheory_partiii_notes.pdf"
pipeline_run: frontier-23
---

## Statement

Let
$$A\xrightarrow{f}B\xrightarrow{g}C$$
be composable morphisms in an abelian category, let
$$K\xrightarrow{k}B$$
be a kernel of $g$, and let
$$B\xrightarrow{q}Q$$
be a cokernel of $f$.

Then the pair is exact at $B$ if and only if both
$$g f = 0 \qquad\text{and}\qquad q k = 0.$$

## Facts & Assumptions

**Given:** The composable pair $A \xrightarrow{f} B \xrightarrow{g} C$, a
kernel $k:K \to B$ of $g$, and a cokernel $q:B \to Q$ of $f$.

[L1] Exactness at $B$ means $[\operatorname{im}(f)] = [\ker(g)]$, equivalently
$[\operatorname{coker}(f)] = [\operatorname{coim}(g)]$
([[def-exactness-at-a-node]],
[[def-image-and-coimage-in-a-category-with-kernels-and-cokernels]]).

[L2] For the image factorization $f = m e$, one has $[\!m\!]\le[\!k\!]$ if and
only if $g f = 0$, and $[\!k\!]\le[\!m\!]$ if and only if every morphism killed
by $g$ factors through $m$
([[thm-the-subobject-inequalities-underlying-exactness]]).

[L3] Kernels and cokernels are characterized by the usual vanishing and
universal factorization properties
([[def-kernels-and-cokernels-as-equalizers-and-coequalizers]]).

## Proof

**Proof technique:** direct.

1.1 Assume the pair is exact at $B$. Then $[\operatorname{im}(f)] = [\ker(g)]$, so [L2] gives $g f = 0$. [L1, L2]

1.2 Write $f = m e$ for an image factorization. Exactness gives $k = m u$ for some $u:K\to\operatorname{im}(f)$, and $q f = q m e = 0$ implies $q m = 0$ because $e$ is epic. Hence $q k = q m u = 0$. [L1, L2, L3, algebra]

1.3 Assume now that $g f = 0$ and $q k = 0$. Writing again $f = m e$, the equality $g f = 0$ gives $[\!m\!]\le[\!k\!]$ by [L2]. [L2]

2.1 Since $q f = q m e = 0$ and $e$ is epic, one has $q m = 0$. Together with the hypothesis $q k = 0$, the cokernel property in [L3] yields $u:K\to\operatorname{im}(f)$ with $m u = k$, hence $[\!k\!]\le[\!m\!]$. [L3, step 1.3, algebra]

3.1 Steps 1.3 and 2.1 give $[\operatorname{im}(f)] = [\ker(g)]$, so the pair is exact at $B$ by [L1]. With steps 1.1 and 1.2, this proves the equivalence. [L1, step 1.1, step 1.2, step 1.3, step 2.1] ∎
