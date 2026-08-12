---
id: lem-homomorphisms-respect-commutators-and-derived-series
kind: lemma
title: "Homomorphisms respect commutator subgroups and derived series"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-derived-series-solvable-group-and-derived-length, def-group-homomorphism]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory, Chapter 6"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
    - title: "K. Conrad, Subgroup Series I"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/subgpseries1.pdf"
    - title: "K. Igusa, Notes on Jordan-Hölder, section 5"
      url: "https://people.brandeis.edu/~igusa/Math131b/JH.pdf"
pipeline_run: null
---

## Statement

For a group homomorphism $f:G\to H$ and every $r\in\mathbb N$,
$$f(G^{(r)})\le f(G)^{(r)}.$$
If $f$ is surjective, then $f(G^{(r)})=H^{(r)}$ for every $r$. In particular, $K^{(r)}\le G^{(r)}$ for every subgroup $K\le G$.

## Facts & Assumptions

**Given:** A group homomorphism $f:G\to H$ and a natural number $r$.

[F1] $G^{(0)}=G$ and $G^{(r+1)}=[G^{(r)},G^{(r)}]$ ([[def-derived-series-solvable-group-and-derived-length]]).

[F2] A group homomorphism preserves products and inverses ([[def-group-homomorphism]]).

## Proof

**Proof technique:** induction.

1.1 For all $x,y\in G$, $f([x,y])=[f(x),f(y)]$ by expanding the commutator and using [F2]. [F2, algebra]

1.2 At $r=0$, $f(G^{(0)})=f(G)=f(G)^{(0)}$. [F1, base]

1.3 Assume $f(G^{(r)})\le f(G)^{(r)}$ and, when $f$ is surjective, $f(G^{(r)})=H^{(r)}$. [ih]

2.1 Step 1.1 sends every generator of $G^{(r+1)}=[G^{(r)},G^{(r)}]$ into $[f(G)^{(r)},f(G)^{(r)}]=f(G)^{(r+1)}$, proving the inclusion at $r+1$. [step 1.1, step 1.3, F1]

2.2 If $f$ is surjective and equality holds at $r$, every commutator generator of $H^{(r+1)}$ is the image under $f$ of a commutator of preimages in $G^{(r)}$; thus equality also holds at $r+1$. [step 1.1, step 1.3, F1, given]

3.1 Induction gives the inclusion for every $r$, and gives equality for surjective $f$. Applying the inclusion to the inclusion homomorphism $K\hookrightarrow G$ yields $K^{(r)}\le G^{(r)}$. [step 1.2, step 2.1, step 2.2, discharge-induction] ∎
