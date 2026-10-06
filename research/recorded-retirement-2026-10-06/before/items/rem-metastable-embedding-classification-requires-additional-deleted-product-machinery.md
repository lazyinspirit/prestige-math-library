---
id: rem-metastable-embedding-classification-requires-additional-deleted-product-machinery
kind: remark
title: "Metastable embedding classification requires deleted-product machinery"
status: draft
origin: session
dependency_level: 2
proved_here: false
provenance:
  statement: ai-altered
  proof: not-supplied
deps: [def-self-transverse-immersion-and-double-point-locus,
       def-smooth-embedding,
       def-homotopy-relative-and-path-homotopy]
justified_by: []
aliases: []
landmark: false
external_dependency:
  source_url: "https://web.archive.org/web/20241113132819/https://people.math.ethz.ch/~dkosanovic/24-FS/Wall-Differential-Topology.pdf"
  exact_statement: "Haefliger–Weber theorem (Skopenkov §5, Theorem 5.4): for a compact manifold $V$ the embeddability and isotopy classification in the metastable range is given by the equivariant homotopy class of the map of the deleted product $V\\times V\\setminus\\Delta_V\\to S^{m-1}$; Wall Theorem 6.4.8 states the smooth version: a map $f:V\\to M$ is homotopic to a smooth embedding if and only if $f\\times f$ is equivariantly homotopic to an isovariant map (the condition $2m\\ge3(v+1)$), and embeddings are classified up to diffeotopy by isovariant homotopy when $2m>3(v+1)$."
  local_proof_attempt: "None on this page. The disjunction method and the deleted-product machinery that prove the theorem occupy Skopenkov §§5–8 and are a separate development; this page stops at the primary double point obstruction and the Whitney disjunction and records the classification as a boundary."
  necessity: "It records the exact stopping point of the page: the preceding propositions remove algebraically cancelling double points of an immersion, and the question of classifying embeddings beyond vanishing of that obstruction is precisely the Haefliger–Weber problem, out of scope here."
verification:
  precheck: n/a
sources:
  references:
    - title: "Arkadiy Skopenkov, Embedding and Knotting of Manifolds in Euclidean Spaces (arXiv:math/0604045), §1, article pp. 2–5 (self-intersection set; ambient versus non-ambient isotopy) and §2, article pp. 6–14 (Theorems 2.1–2.3 and 2.8; the modulo 2 and integral Whitney obstruction; the Whitney invariant); §3 and §5 used only for the recorded knotting boundary"
      url: "https://arxiv.org/pdf/math/0604045"
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156, Cambridge University Press 2016; full text retrieved from the Internet Archive Wayback Machine snapshot of the ETH Zürich course copy), Chapter 6 §§6.2–6.4, printed pp. 169–192 (Theorem 6.2.1; Propositions 6.3.1 and 6.3.3; Theorems 6.3.2, 6.3.4, 6.3.6, 6.4.5, 6.4.8 and 6.4.9; Lemma 6.3.5)"
      url: "https://web.archive.org/web/20241113132819/https://people.math.ethz.ch/~dkosanovic/24-FS/Wall-Differential-Topology.pdf"
---

## Remark

Recorded boundary result (not proved here). Let $V$ be a compact $v$-manifold and $M$ an $m$-manifold in the metastable range $2m\ge3(v+1)$. The **deleted product** of $V$ is $V^{(2)}=V\times V\setminus\Delta_V$ with the involution $(x,y)\mapsto(y,x)$; a continuous map $G:V\times V\to M\times M$ is **equivariant** when it commutes with factor interchange, and **isovariant** when it is equivariant and $G^{-1}(\Delta_M)=\Delta_V$. These are maps on the full product. An isovariant map restricts to a map $V^{(2)}\to M\times M\setminus\Delta_M$ of deleted products; equivariance alone does not ensure that off-diagonal pairs avoid $\Delta_M$. Then the Haefliger–Weber (deleted-product) theory gives the classification:

1. a continuous map $f:V\to M$ is homotopic to a smooth embedding ([[def-smooth-embedding]]) if and only if $f\times f$ is equivariantly homotopic ([[def-homotopy-relative-and-path-homotopy]]) to an isovariant map;
2. if $2m>3(v+1)$, two smooth embeddings $f_0,f_1:V\to M$ are diffeotopic if and only if $f_0\times f_0$ and $f_1\times f_1$ are isovariantly homotopic;

The cited Euclidean survey gives the corresponding smooth and piecewise-linear deleted-product formulation. No unrestricted topological-category version is asserted here. These statements are recorded from Wall, Theorem 6.4.8, printed p. 189; their proofs and the obstructions involved are outside this page. Skopenkov, Theorem 5.4, article p. 32, states the Euclidean-target version in terms of the Haefliger–Wu invariant: surjectivity when $2m=3v+3$ and bijectivity when $2m\ge3v+4$. No item on this page depends on this remark: it records the exact statement-and-construction boundary of the commissioned level, exactly as the design requires, and it is one of the recorded, non-load-bearing boundary leaves of this pair. In particular the disjunction theory of [[def-self-transverse-immersion-and-double-point-locus]] does not extend to a classification of embeddings without the deleted-product machinery recorded here.
