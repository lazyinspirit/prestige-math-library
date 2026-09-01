---
id: lem-extend-a-partial-comparison-homotopy-by-one-degree
kind: lemma
title: "Extending a partial comparison homotopy by one degree"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-augmentation-preserving-map-of-projective-resolutions, def-chain-homotopy, def-cycle-and-boundary-subobjects-of-a-complex, def-projective-object]
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
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

Let $f_\bullet,g_\bullet:P_\bullet\to Q_\bullet$ be augmentation-preserving maps of projective resolutions lifting the same object morphism. Suppose $h_0,\dots,h_{n-1}$ have already been chosen so that $$f_k-g_k=d_{k+1}^Qh_k+h_{k-1}d_k^P$$ holds for every $k<n$ (with $h_{-1}=0$). Then there exists $h_n:P_n\to Q_{n+1}$ extending the homotopy identity to degree $n$.
## Facts & Assumptions

**Given:** Projective resolutions $P_\bullet\to A$, $Q_\bullet\to B$, two comparison maps $f_\bullet,g_\bullet$ lifting the same object morphism, and a partial chain homotopy through degree $n-1$.

[L1] A chain homotopy is given by the equation $$f_n-g_n=d_{n+1}^Qh_n+h_{n-1}d_n^P$$ ([[def-chain-homotopy]]).

[L2] Cycle objects are kernels of the differentials ([[def-cycle-and-boundary-subobjects-of-a-complex]]).

[L3] Projective objects lift across epimorphisms ([[def-projective-object]]).
## Proof

**Proof technique:** direct.

1.1 Put $$c_n:=f_n-g_n-h_{n-1}d_n^P,$$ with $h_{-1}=0$ when $n=0$. Using the chain-map identities for $f_\bullet$ and $g_\bullet$ and the already verified lower-degree homotopy equations, one gets $d_n^Qc_n=0$. Thus $c_n$ lands in $Z_n(Q)$ by [L2]; when $n=0$, the common augmentation condition on $f_0$ and $g_0$ says exactly that $c_0$ lands in $\ker(\varepsilon_Q)=Z_0(Q)$. [L1, L2, given, algebra]

2.1 Exactness of $Q_\bullet$ makes $Q_{n+1}\twoheadrightarrow Z_n(Q)$ epic, and $P_n$ is projective. By [L3], lift $c_n$ to a map $h_n:P_n\to Q_{n+1}$. Then $d_{n+1}^Qh_n=c_n$, which is precisely the degree-$n$ homotopy equation from [L1]. [L3, step 1.1, construct] ∎
