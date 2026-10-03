---
id: thm-zariski-main-open-immersion-factorization-classical
kind: theorem
title: "Zariski's Main Theorem: open immersion followed by a finite morphism"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
dependency_level: 3
proof_strategy: direct
justified_by: []
aliases: []
deps: [lem-av7-classical-zmt-relative-integral-closure-neighbourhoods, def-quasi-finite-morphism-classical, def-classical-algebraic-prevariety-regular-maps-and-varieties, def-finite-morphism-classical-affine-local, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "J. S. Milne, Algebraic Geometry (2025 version), Ch. 8 §e: Theorems 8.45-8.46 (Zariski's Main Theorem, local form)"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "The Stacks Project, Section 37.43 Zariski's Main Theorem (Lemmas 37.43.1-37.43.3)"
      url: "https://stacks.math.columbia.edu/tag/02LQ"
    - title: "Ravi Vakil, The Rising Sea: Foundations of Algebraic Geometry (November 18, 2017 public draft), §29.6"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGnov1817public.pdf"
    - title: "Grothendieck and Dieudonne, EGA IV part 4 (Publications mathematiques de l'IHES 32), §18.12.12-18.12.15"
      url: "https://www.numdam.org/item/PMIHES_1967__32__5_0.pdf"
---

## Statement

Assume the Axiom of Choice. Let $f\colon X\to Y$ be a separated morphism of
finite type with finite fibres (quasi-finite in the classical sense) between
classical varieties over an algebraically closed field. Then $f$ factors as
$f=\nu\circ j$ with $j\colon X\hookrightarrow N$ an open immersion and
$\nu\colon N\to Y$ finite. This is the exact classical form of Zariski's Main
Theorem used by the later items of this page.

## Facts & Assumptions

**Given:** AC, the algebraically closed field $k$, and the separated finite-type quasi-finite morphism $f\colon X\to Y$ of classical varieties.

[F1] In the classical register, a morphism has finite fibres exactly when it is quasi-finite: every closed-point fibre $X_y$ is a finite set, empty fibres allowed ([[def-quasi-finite-morphism-classical]], [[def-classical-algebraic-prevariety-regular-maps-and-varieties]]).

[F2] The local classical Zariski Main bridge: for a separated finite-type morphism with finite fibres between classical varieties, allowing reduced reducible or empty varieties, the relative integral closures of the affine charts glue to a finite classical morphism $\nu\colon N\to Y$, and the evaluation maps glue to an open immersion $j\colon X\hookrightarrow N$ with $f=\nu\circ j$ ([[lem-av7-classical-zmt-relative-integral-closure-neighbourhoods]]). AC is consumed there through the algebraic Zariski Main localisation and the standard-smooth suppliers.

[F3] The conclusion $\nu$ is finite in the sense of the page's affine-local finite-morphism definition ([[def-finite-morphism-classical-affine-local]]).

## Proof

1.1 The morphism $f$ of the statement is separated of finite type with finite fibres, so it is quasi-finite in the sense of [F1]; its source and target are classical varieties in the register of [F1] and [F2], with a finite affine atlas making them quasi-compact, and separatedness giving quasi-separatedness. These are exactly the hypotheses of the bridge [F2], which allows reduced reducible or empty varieties and assumes no quasi-projectivity, normality, separability, or smoothness. [F1, F2, given]

2.1 Applying [F2], the relative integral closures $C_U$ of the affine coordinate rings glue to a finite classical morphism $\nu\colon N\to Y$, and the evaluation maps glue to an open immersion $j\colon X\hookrightarrow N$ satisfying $f=\nu\circ j$. By [F3] the map $\nu$ is finite in the page's sense, and $j$ is an open immersion, so $f=\nu\circ j$ is the asserted factorization. This is the exact classical form of Zariski's Main Theorem used below: an open immersion followed by a finite morphism. [F1, F2, F3, step 1.1] ∎
