---
id: lem-normalization-commutes-with-restriction-open
kind: lemma
title: Normalization commutes with restriction to an open subvariety
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
dependency_level: 4
proof_strategy: direct
justified_by: []
aliases: []
deps: [thm-normalization-glues-variety, lem-finite-normalization-compatible-with-principal-opens, thm-classical-principal-open-coordinate-ring-localization, lem-principal-opens-form-affine-basis, def-classical-integral-affine-atlas-and-chartwise-morphism, lem-classical-integral-affine-charts-have-canonical-common-function-field, def-normalization-affine-variety, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-1.md"
      - "research/frontier-38-owner-30-alpha-batch-1-5a.md"
      - "research/frontier-38-owner-30-step5-hash-1-post-5a.json"
    content_sha256: "67012b1c5861fb9661646ec39eb8e40386148b253f00aeacb383ec852f7d960c"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "J. S. Milne, Algebraic Geometry (2025 version), Ch. 8 §b: normalization is compatible with open restriction"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Ravi Vakil, The Rising Sea: Foundations of Algebraic Geometry (November 18, 2017 public draft), §9.7 and §29.6"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGnov1817public.pdf"
---

## Statement

Assume the Axiom of Choice. Let $X$ be a classical variety with normalization
$\nu\colon X^{\nu}\to X$ and let $U\subseteq X$ be a nonempty open subvariety.
Then $\nu^{-1}(U)$ is a normalization of $U$: it is normal, and
$\nu^{-1}(U)\to U$ is finite, surjective and birational, so it is isomorphic to
$U^{\nu}$ over $U$.

## Facts & Assumptions

**Given:** AC, the algebraically closed field $k$, the classical variety $X$ with normalization $\nu$, the nonempty open $U\subseteq X$, and an affine chart $V$ of $X$ on an irreducible component, with coordinate ring $A=k[V]$ and normalization $B$ in that component’s function field. The irreducible argument below is then applied componentwise.

[F1] In the irreducible case the normalization restricts over the affine chart $V$ to the affine normalization $A\subseteq B$, with $B$ the integral closure of $A$ in $k(X)$ and a finite $A$-module; over every principal open $D(f)\subseteq V$ the restriction is the affine normalization $(A_f,B_f)$ ([[thm-normalization-glues-variety]], [[def-normalization-affine-variety]], [[lem-finite-normalization-compatible-with-principal-opens]]).

[F2] In the irreducible case principal opens form a basis of the topology, their coordinate rings are the principal localizations, and all charts of $X$ share the function field $k(X)$, which is therefore also the function field of the open subvariety $U$ ([[lem-principal-opens-form-affine-basis]], [[thm-classical-principal-open-coordinate-ring-localization]], [[lem-classical-integral-affine-charts-have-canonical-common-function-field]], [[def-classical-integral-affine-atlas-and-chartwise-morphism]]).

## Proof

1.1 First assume $X$ is irreducible. Cover $U$ by principal opens $D(f)$ contained in affine charts $V$ of $X$ [F2]. Over each such principal open the normalization restricts to the affine normalization with ring map $A_f\hookrightarrow B_f$, which is finite, surjective and birational and has normal source, because these properties hold for the affine normalization and are preserved by principal localization [F1]. The pieces agree on overlaps as subrings of the common function field $k(X)$ [F2], so $\nu^{-1}(U)\to U$ is finite (finiteness is affine-local on the target), surjective (each piece is), and induces the identity on function fields, hence is birational; and $\nu^{-1}(U)$ is normal because normality is local and each $\nu^{-1}(D(f))$ is normal [F1]. [F1, F2, given]

2.1 In the irreducible case these affine restrictions are exactly the defining integral-closure charts of the normalization of $U$, and their canonical overlap maps give $\nu^{-1}(U)\cong U^\nu$ over $U$. For reducible $X$, its normalization is the disjoint union of the component normalizations by [F1]; apply step 1.1 to each nonempty $U\cap X_i$ and omit components with empty intersection. These are the irreducible components of $U$, so their disjoint union is its normalization. Finiteness, surjectivity and normality hold componentwise, and birationality is read on each component. [F1, F2, step 1.1] ∎
