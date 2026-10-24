---
id: lem-extend-a-partial-comparison-map-by-one-degree
kind: lemma
title: "Extending a partial comparison map by one degree"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-augmentation-preserving-map-of-projective-resolutions, lem-lift-a-map-through-degree-zero-of-a-projective-resolution, def-cycle-and-boundary-subobjects-of-a-complex, def-projective-object, def-projective-resolution-in-an-abelian-category]
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: "https://djvu.online/file/WrPctxOTQCdBj"
    - title: "Romyar Sharifi, Homological Algebra"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
pipeline_run: frontier-28
---
## Statement

Let $u:A\to B$ be a morphism, and let $P_\bullet\to A$ and $Q_\bullet\to B$ be projective resolutions. Suppose morphisms $f_0,\dots,f_n$ have already been chosen so that the augmentation condition holds and the chain-map squares commute through degree $n$. Then there exists $f_{n+1}:P_{n+1}\to Q_{n+1}$ making the next square commute as well.
## Facts & Assumptions

**Given:** Projective resolutions $P_\bullet\to A$ and $Q_\bullet\to B$, a morphism $u:A\to B$, and a partial comparison map through degree $n$.

[L1] A projective resolution is exact, so at degree $n$ its cycle object is the image of the next differential ([[def-projective-resolution-in-an-abelian-category]]).

[L2] The $n$th cycle object is the kernel of the degree-$n$ differential ([[def-cycle-and-boundary-subobjects-of-a-complex]]).

[L3] Projective objects lift across epimorphisms ([[def-projective-object]]).
## Proof

**Proof technique:** direct.

1.1 If $n=0$, the augmentation identity gives $$ \varepsilon_Qf_0d_1^P=u\varepsilon_Pd_1^P=0, $$ so $f_0d_1^P$ lands in $\ker(\varepsilon_Q)=Z_0(Q)$. If $n>0$, the previous squares commute and $$ d_n^Qf_nd_{n+1}^P=f_{n-1}d_n^Pd_{n+1}^P=0, $$ so again $f_nd_{n+1}^P$ lands in $Z_n(Q)=\ker(d_n^Q)$ by [L2]. Exactness of $Q_\bullet$ at degree $n$ makes the canonical map $Q_{n+1}\twoheadrightarrow Z_n(Q)$ epic by [L1]. [L1, L2, given, algebra]

2.1 The object $P_{n+1}$ is projective, so [L3] lifts $f_nd_{n+1}^P:P_{n+1}\to Z_n(Q)$ across the epimorphism $Q_{n+1}\twoheadrightarrow Z_n(Q)$. Writing the lift as $f_{n+1}$ gives $$d_{n+1}^Qf_{n+1}=f_nd_{n+1}^P,$$ so the partial comparison map extends by one degree. [L3, step 1.1, construct] ∎
