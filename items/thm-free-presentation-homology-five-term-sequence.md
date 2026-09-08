---
id: thm-free-presentation-homology-five-term-sequence
kind: theorem
title: "The free-presentation homology five-term sequence"
status: draft
origin: pipeline
deps: [def-free-presentation-lyndon-bar-bicomplex-and-edge-maps, lem-free-presentation-bicomplex-collapses-in-positive-middle-group-degree, lem-low-degree-filtration-sequence-for-a-first-quadrant-bicomplex]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "Loh, Group Cohomology, Definitions 1.7.12–13 and Theorem 1.7.15 pp.63–64; Theorem 3.2.18 pp.129–132"
      url: "https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf"
    - title: "Weibel, An Introduction to Homological Algebra, Chapter 6, Sections 6.4–6.8"
      url: "https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf"
---

## Statement

For a free presentation $1\to R\to F\to G\to1$ there is a natural exact sequence
$$0\longrightarrow H_2(G;\mathbb Z)\xrightarrow{d_2}R/[F,R]\longrightarrow F_{\rm ab}\longrightarrow G_{\rm ab}\longrightarrow0.$$
The last two nonzero arrows are induced by inclusion and quotient; d2 is the filtration transgression defined by $hx=-vy\mapsto[hy]$. Retain DC and supplied-resolution homology conventions.

## Facts & Assumptions

**Given:** The free presentation and the stated homology conventions.

[F1] Total H2 vanishes and the low-degree total and E2 terms have the stated group interpretations ([[lem-free-presentation-bicomplex-collapses-in-positive-middle-group-degree]]).

[F2] H2(T) to E20 to E01 to H1(T) to E10 to zero is naturally exact ([[lem-low-degree-filtration-sequence-for-a-first-quadrant-bicomplex]]).

[F3] The free-presentation bicomplex has anticommuting component differentials $h$ and $v$ with the stated total complex and edge maps ([[def-free-presentation-lyndon-bar-bicomplex-and-edge-maps]]).

## Proof

1.1 Apply F2 to the first-quadrant free-presentation bicomplex. Substitute $H_2(T)=0$, $E^2_{20}=H_2(G;\mathbb Z)$, $E^2_{01}=R/[F,R]$, $H_1(T)=F_{\rm ab}$ and $E^2_{10}=G_{\rm ab}$ from F1. This identifies the groups in the displayed sequence and supplies exactness at the last three nonzero terms; the next two steps define the first arrow by the printed representative formula and prove the two adjacent exactness claims directly. [F1, F2, given]

1.2 In the bicomplex of [F3], represent a class in $E^2_{20}$ by $x\in D_{20}$ with $hx=-vy$ for some $y\in D_{11}$, and define $d_2[x]=[hy]\in E^2_{01}$. This is a vertical cycle because $vhy=-hvy=h^2x=0$. Replacing $y$ by another lift changes $hy$ by the horizontal boundary of a vertical cycle. Replacing $x$ by $x+vt+hu$, with $t\in D_{21}$ and $u\in D_{30}$, permits the compatible replacement $y+ht$ and leaves $hy$ unchanged. Thus the displayed formula is well-defined. [F3, algebra]

2.1 This $d_2$ is injective here. If $[hy]=0$ in $E^2_{01}$, write $hy=ha+vb$ for a vertical cycle $a\in D_{11}$ and $b\in D_{02}$. Then $(x,y-a,-b)$ is a total 2-cycle mapping to $[x]$. Since $H_2(T)=0$ by [F1], its class and hence $[x]$ vanish. Moreover the edge map $j:E^2_{01}\to H_1(T)$ sends a vertical cycle $z$ to the total cycle $(0,z)$. The equation $jd_2[x]=0$ follows from $(0,hy)=d(x+y)$. Conversely, if $j[z]=0$, write $(0,z)=d(x+y+b)$ with $x\in D_{20}$, $y\in D_{11}$, and $b\in D_{02}$. Its components give $hx=-vy$ and $z=hy+vb$, hence $[z]=d_2[x]$. This proves exactness at the first two nonzero terms for the stated representative formula; [F2] supplies exactness at the remaining terms. [F1, F2, F3, step 1.2, algebra]

3.1 The edge computations in F1 identify the next arrows with r mapped into $F_{\rm ab}$ and f mapped to its quotient class. All constructions in steps 1.2–2.1 commute with the vertexwise maps induced by maps of presentations, so the sequence and the displayed transgression are natural. No terminal surjectivity beyond the printed $G_{\rm ab}\to0$ is needed. For R=1 the sequence reduces to zero H2 of F and the identity of its abelianization; for G=1 it reduces to the identity $F_{\rm ab}\to F_{\rm ab}$. [F1, F2, F3, step 1.1, step 1.2, step 2.1, algebra] ∎
