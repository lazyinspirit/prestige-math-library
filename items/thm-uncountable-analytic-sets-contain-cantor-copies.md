---
id: thm-uncountable-analytic-sets-contain-cantor-copies
kind: theorem
title: "Uncountable analytic sets contain compact Cantor copies"
status: published
origin: pipeline
deps: ["thm-analytic-closed-projection-and-continuous-image-equivalence", "lem-uncountable-analytic-splitting", "lem-cantor-and-baire-sequence-coding", "def-axiom-of-choice"]
justified_by: []
forward_refs: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Theorem 4.17 and full proof, printed pp38–39; local argument completes the source final extra-care remark"
      url: "https://homepages.math.uic.edu/~marker/math512/dst.pdf"
---
## Statement

In ZFC every uncountable analytic subset $A$ of a Polish space $X$ contains a compact subspace homeomorphic to $\mathcal C$. In particular it contains a nonempty perfect closed subset of $X$. This includes uncountable Borel subsets and uncountable Polish spaces.

## Facts & Assumptions

[F1] [[thm-analytic-closed-projection-and-continuous-image-equivalence]] supplies Baire parametrization and includes Borel sets among analytic sets.

[F2] [[lem-uncountable-analytic-splitting]] splits uncountable subsets into disjoint open neighbourhoods with uncountable intersections.

[F3] [[lem-cantor-and-baire-sequence-coding]] gives compactness and no isolated points of $\mathcal C$, and the Baire cylinder topology.

[A1] Assume [[def-axiom-of-choice]].

## Proof

**Given:** Uncountable analytic $A\subseteq X$, in ZFC.

1.1 Fix continuous $f:\mathcal N\to X$ onto A by F1 and A1. We build words $t_s\in\mathbb N^{<\omega}$ indexed by binary words s, with $t_\varnothing=\varnothing$, strict extension on each edge, and uncountable $f[N_{t_s}]$. Given $t_s$, F2 supplies disjoint opens $U_0,U_1$ meeting its image uncountably. Each $N_{t_s}\cap f^{-1}[U_i]$ is open and is the union of all cylinders it contains whose word lengths exceed $|t_s|$. There are countably many such cylinders. If every one had countable image, A1 would choose enumerations of the nonempty images and a pairing would enumerate their union, contradicting its uncountability. Thus for each i select the least word code with uncountable image and cylinder inside this preimage, and set it to $t_{s^\frown i}$. It extends $t_s$ and has its image inside $U_i$. All choices of eligible open pairs can be made on the set of finite words by A1; length recursion then constructs the tree of words. [F1, F2, F3, A1]

2.1 For $z\in\mathcal C$ set $g(z)=\bigcup_n t_{z\upharpoonright n}$. Strict length growth makes this a full Baire sequence. Agreement on n input bits fixes an output prefix of length at least n, so g is continuous by F3. If z,w first split at a binary node s, their images under $f\circ g$ lie in the two disjoint opens chosen there in step 1.1. Hence $f\circ g$ is injective as well as continuous, and its image is contained in A. [F3, step 1.1]

3.1 The image K is compact by pulling any open cover back to compact $\mathcal C$ and pushing a finite subcover forward. For a point x outside a compact subset of a metric space, the balls $B(y,d(x,y)/3)$ about its members y have a finite subcover; the minimum of these finitely many positive radii gives a ball about x missing the compact set. Hence compact sets are closed. Closed subsets of $\mathcal C$ are compact (adjoin the open complement to a cover), so their images under $f\circ g$ are closed. The inverse of this injection onto K is therefore continuous. Thus K is homeomorphic to $\mathcal C$, is nonempty and closed, and has no isolated point by F3. Finally Borel A is analytic by F1's normal forms (use its identity map), and X is itself Borel in X. This proves both final special cases. QED. [F1, F3, step 2.1]
