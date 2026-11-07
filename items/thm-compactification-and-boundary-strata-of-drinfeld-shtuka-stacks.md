---
id: thm-compactification-and-boundary-strata-of-drinfeld-shtuka-stacks
kind: theorem
title: "Compactifications of Drinfeld shtuka stacks and their lower-rank boundary strata"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
  - thm-drinfeld-shtuka-stacks-have-partial-frobenius-and-hecke-correspondences
  - thm-existence-hardernarasimhan-truncation-for-drinfeld-shtukas
  - def-compatible-iterated-shtuka-boundary-data
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Laurent Lafforgue, Chtoucas de Drinfeld et correspondance de Langlands"
      url: "https://www.laurentlafforgue.org/math/fulltext.pdf"
      locator: "Chapter III, Theorem III.2 and Proposition III.3, printed pp. 63–65."
    - title: "Tuan Ngo Dac, Compactification des champs de chtoucas et théorie géométrique des invariants"
      url: "https://smf.emath.fr/system/files/filepdf/AST_2007__313__1_0.pdf"
      locator: "Chapter IV, Theorem IV.4.1 and Corollary IV.4.5; Chapter V §§1–8, valuative proof of properness; Chapter VI.1, Theorem VI.1.1, identification with Lafforgue's truncation, printed pp. 61–104."
---

## Statement

Let $X/\mathbb F_q$ be a smooth projective geometrically connected curve, let $r\ge2$, let $d\in\mathbb Z$, and let $p:[0,r]\to\mathbb R_{\ge0}$ be a convex truncation polygon sufficiently convex as a function of $X$. The degree-$d$, rank-$r$ shtuka substack whose canonical Harder–Narasimhan polygon is bounded by $p$ has an iterated-shtuka compactification without level structure that is proper and smooth over $X\times X$ and whose intersection with the open locus of ordinary shtukas is exactly that truncated substack. The boundary is a relative normal-crossings divisor with locally closed strata indexed by proper ordered compositions $r=r_1+\cdots+r_k$ with $k\ge2$; for such a composition its stratum is a gerbe banded by a finite flat radicial group scheme over an open substack of the moduli stack of compatible iterated shtuka boundary data of type $(r_1,\ldots,r_k)$ satisfying the degree and Harder–Narasimhan bounds for that stratum, and every $r_i$ is strictly less than $r$.

## Statement references

[Laurent Lafforgue, Chapter III](https://www.laurentlafforgue.org/math/fulltext.pdf)

[Tuan Ngo Dac, Chapters IV–VI.1](https://smf.emath.fr/system/files/filepdf/AST_2007__313__1_0.pdf)

## Proof obligations

No complete local proof is supplied. The read alternative proof in Tuan's thesis proceeds through (i) construction of a projective GIT parameter space and its semistable quotient, (ii) a Hilbert–Mumford numerical criterion equivalent to the lower-rank Harder–Narasimhan inequalities, (iii) a valuative extension argument in four steps, including reconstruction of the special-fibre shtuka and proof that its Frobenius lattice is iterated, and (iv) a final valuation comparison for the modification line bundles. Chapter VI.1 identifies the selected rational truncation polygon with Lafforgue's compactification. The geometric invariant theory and four-step valuative argument are not yet reconstructed as local supplier items or a complete proof here. The 1998 primary article remains unavailable and is retained as a source. The recovered official SMF scan of the alternate proof is byte-identical to the native scan and lacks printed pages 91–92 (printed 93–94 are duplicated). Moreover its properness assertions explicitly assume $q$ sufficiently large relative to rank (IV.4.1(b), V.4.1, V.6.9 and VI.1.4). It therefore does not currently supply the full all-$q$ proof required by this unchanged Statement. No scalar-extension reduction is asserted: replacing $q$ by $q^m$ changes the Frobenius defining the moduli problem. These source limits, the missing GIT and valuative arguments, and the full Artin boundary with smooth-chart normal crossings remain explicit obligations. This item remains escalated; no source is dropped and no theorem is imported.
