---
id: "lem-carleson-single-tree-estimate"
kind: "lemma"
title: "Carleson single tree estimate"
deps: ["def-density-size-and-tree-count-for-carleson-tiles", "def-carleson-tiles-wave-packets-and-tile-order", "cor-centered-hardy-littlewood-maximal-operator-is-l-p-bounded", "thm-plancherel", "def-axiom-of-choice"]
sources:
  references:
    - title: 'Lacey, Carleson’s Theorem: Proof, Complements, Variations'
      url: https://arxiv.org/pdf/math/0307008
      locator: Lemma 3.11; section 6
provenance:
  statement: literature-derived
  proof: not-supplied
status: "draft"
origin: "pipeline"
---

## Statement

Assume AC. For a finite tree T the absolute bilinear tile contribution is <=C density(T) size(T)|I_T|, for |g|<=1_E.

## Scratch

Proof incomplete. Lacey section 6 main argument was read completely. Missing local arguments are the plus/minus tree split, the truncated-packet identity and the small-support maximal-function bound on each complementary interval. The declared maximal Lp supplier uses the valid Euclidean Lebesgue specialization under AC/countable choice and sigma-finiteness. The separate arbitrary-measure Marcinkiewicz proof debt does not block this specialization (Sol reconciliation e3f399f5f). Proposed remedy: supply the tree estimates with all boundary intervals. Neither Fourier orthogonality alone nor the source assertion proves this tree inequality.
