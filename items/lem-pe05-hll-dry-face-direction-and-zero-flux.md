---
id: lem-pe05-hll-dry-face-direction-and-zero-flux
kind: lemma
title: A dry HLL face sends water only into the dry side
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [def-pe05-hydrostatic-hll-scheme, lem-pe05-hll-depth-flux-decomposition]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "E. Audusse, F. Bouchut, M.-O. Bristeau, R. Klein, and B. Perthame, A Fast and Stable Well-Balanced Scheme with Hydrostatic Reconstruction for Shallow Water Flows"
      url: "https://publications.imp.fu-berlin.de/478/1/file_2004_siam.pdf"
      locator: "Complete 16-page paper; §2.1, equations (2.9)–(2.14) and Theorem 2.1 dry-depth proof, printed pp. 2052–2054."
    - title: "D. I. Ketcheson, R. J. LeVeque, and M. J. del Razo, Riemann Problems and Jupyter Solutions, Chapter 12"
      url: "https://www.clawpack.org/riemann_book/html/Shallow_water_approximate.html"
      locator: "Complete chapter; §HLL solver and §Entropy and positivity, lines 365–387 and 518–552. The local proof uses the assigned speed formula, not the chapter's different HLLE speeds."
---

## Statement

At any face in [[def-pe05-hydrostatic-hll-scheme]], if the reconstructed right state is dry, then $\widehat F^h\ge0$, and $\widehat F=(0,0)$ whenever $\widehat F^h=0$. If the reconstructed left state is dry, then $\widehat F^h\le0$, and again $\widehat F^h=0$ implies $\widehat F=(0,0)$.

## Facts & Assumptions

**Given:** The HLL branches, shallow-water flux and speed bounds from [[def-pe05-hydrostatic-hll-scheme]] and [[lem-pe05-hll-depth-flux-decomposition]]. Check the two orientations of a dry face, including both-zero speeds.

[F1] [[def-pe05-hydrostatic-hll-scheme]]: a dry reconstructed state is $(h^*,m^*)=(0,0)$ with $u^*=c^*=0$ and $F(0,0)=(0,0)$.

[F2] [[lem-pe05-hll-depth-flux-decomposition]]: in the middle branch, $\widehat F^h=p h_L^*-q h_R^*$, with $p,q\ge0$, and $p>0$ when $h_L^*>0$ and $\alpha,\beta>0$, while $q>0$ when $h_R^*>0$ and $\alpha,\beta>0$.

## Proof

1.1 Suppose $h_R^*=0$. Then $u_R^*=c_R^*=0$. If both speeds are zero, [F1] makes the full flux zero. If $a_L<0=a_R$, the second branch is $F_R^*=(0,0)$. If $a_L=0<a_R$, the speed definition forces $u_L^*\ge c_L^*$. When $h_L^*>0$, this gives $\widehat F^h=h_L^*u_L^*>0$; when $h_L^*=0$, both states and the flux are dry and zero. In the middle branch, [F2] gives $\widehat F^h=p h_L^*\ge0$; it is strictly positive for a wet left state and otherwise both states are dry and the full flux is zero. [F1, F2, algebra]

1.2 Suppose instead $h_L^*=0$. Then $u_L^*=c_L^*=0$. If both speeds vanish, the full flux is zero. If $a_L=0<a_R$, the first branch is $F_L^*=(0,0)$. If $a_L<0=a_R$, the speed definition forces $u_R^*\le-c_R^*$. For $h_R^*>0$ this makes $\widehat F^h=h_R^*u_R^*<0$; if $h_R^*=0$, the full flux is zero. In the middle branch, [F2] gives $\widehat F^h=-q h_R^*\le0$, strictly negative for a wet right state and otherwise zero with both states dry. [F1, F2, algebra]

2.1 The two orientations show that zero mass flux at a dry face occurs only when the selected outer state is dry or both reconstructed states are dry; in each case [F1] gives zero momentum flux as well. [step 1.1, step 1.2, F1] ∎
