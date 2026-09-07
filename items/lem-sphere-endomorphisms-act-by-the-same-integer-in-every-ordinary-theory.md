---
id: "lem-sphere-endomorphisms-act-by-the-same-integer-in-every-ordinary-theory"
kind: "lemma"
title: "Sphere endomorphisms act by the same integer in every ordinary theory"
deps: ["lem-coefficient-comparison-on-finite-cw-pairs", "lem-any-homology-theory-computes-relative-cell-groups-from-its-coefficient-group", "cor-homology-of-spheres"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "May, A Concise Course in Algebraic Topology, 15§2, first theorem and coefficient paragraph p.119"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "15§2, first theorem and coefficient paragraph p.119"
    - title: "Hatcher, Algebraic Topology, Theorem 4.59 homology argument, printed pp.399–401 (in chapter 4); alternative simplicial route specified in notes"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf"
      locator: "Theorem 4.59 homology argument, printed pp.399–401 (in chapter 4); alternative simplicial route specified in notes"
status: "draft"
origin: "pipeline"
proof_strategy: "Apply finite CW comparison with singular coefficients G; on simplicial sphere chains the fundamental cycle gives the tensor G generator and the same integer action. Do not invoke the homotopy classification of sphere maps."
---

## Statement

Let $n\ge0$ and $u:S^n\to S^n$ be continuous. If $u_*$ on $\widetilde H_n(S^n;\mathbb Z)$ is multiplication by $d$, then $u_*$ on $\widetilde h_n(S^n)\cong G$ for every ordinary theory $h$ is $d\,\mathrm{id}_G$. The identifications use the same oriented sphere generator; for $n=0$ use the difference of the two point classes.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

[F1] For ordinary homology theories $h,k$ and a specified isomorphism $u:h_0(*)\to k_0(*)$, there is a unique natural equivalence on finite CW pairs normalized by $u$ and commuting with connecting homomorphisms. ([[lem-coefficient-comparison-on-finite-cw-pairs]])

[F2] Let $h$ be an ordinary theory with coefficient group $G=h_0(*)$. For every $n\ge0$ and $k\in\mathbb Z$, $$h_k(D^n,S^{n-1})\cong\begin{cases}G&k=n,\\0&k\ne n.\end{cases}$$ At $n=0$ the pair means $(*,\varnothing)$. Also $\widetilde h_k(S^n)\cong G$ for $k=n$ and zero otherwise, including $n=0$. Choose the disk identifications by ordered orientations and iterated cone boundaries, so they commute with these boundaries. ([[lem-any-homology-theory-computes-relative-cell-groups-from-its-coefficient-group]])

[F3] For $n\ge1$, $\widetilde H_k(S^n;G)$ is $G$ for $k=n$ and $0$ otherwise. For $S^0$, $\widetilde H_0(S^0;G)\cong G$ and all other reduced groups vanish. Thus $H_0(S^n;G)\cong G$ for $n\ge1$, whereas $H_0(S^0;G)\cong G\oplus G$. ([[cor-homology-of-spheres]])

## Proof

1.1 The sphere is a finite CW complex. F1, applied with the identity of $G$, identifies $h$ naturally with singular homology with $G$ on it; the point splitting identifies their reduced groups as well. F2 and F3 identify those groups with $G$ in the stated dimension. [F1, F2, F3]

2.1 For a triangulated oriented sphere the top integral cycle is the sum of its consistently oriented top simplices. The equation for a top cycle forces the coefficients of adjacent simplices to agree, so with any abelian $G$ every reduced top cycle is this same fundamental cycle with a common coefficient $g$. There are no chains one degree higher in this triangulation. After simplicial approximation and subdivision, the integer matrix of the sphere map therefore sends that coefficient to $dg$, because its action on the integral fundamental cycle is $d$. This is the coefficient-chain comparison used in F1, and does not assert that tensor product preserves arbitrary exact sequences. [F1, step 1.1]

3.1 When $n=0$, the reduced generator is $[+]-[-]$. The identity, transposition and two constant maps act on it by $1,-1,0,0$, respectively; the same computation on $( -g,g)$ gives $g,-g,0,0$. This proves the assertion also for $S^0$ and completes all cases, including $G=0$ and $d=0$. [F2, F3, algebra] ∎
