---
id: lem-a1-nakajima-varieties-and-hecke-correspondence-are-points
kind: lemma
title: "The A1 Nakajima varieties and the Hecke correspondence are points"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-a1-nakajima-framed-quiver-data
  - def-affine-scheme-spectrum
proof_strategy: direct
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Hiraku Nakajima, Introduction to quiver varieties—for ring and representation theorists, §3.2 Example 10 and §4.4"
      url: "https://arxiv.org/pdf/1611.10000"
---

## Statement

For the data of [[def-a1-nakajima-framed-quiver-data]],
$\mathfrak M(0,1)$, $\mathfrak M(1,1)$, $\mathfrak M_0(0,1)$,
$\mathfrak M_0(1,1)$, $\mathcal L(0,1)$, $\mathcal L(1,1)$ and $P_{0,1}$
are single points. The two projections from $P_{0,1}$ are identity maps of
points.

## Facts & Assumptions

**Given:** The one-vertex quiver, $W=\mathbb C$, $V_v=\mathbb C^v$ for
$v\in\{0,1\}$, the moment equation $IJ=0$, positive stability, and the
quotient and correspondence definitions in the preceding item.

[F1] [[def-a1-nakajima-framed-quiver-data]]: $I:W\to V_v$, $J:V_v\to W$,
$\mu(I,J)=IJ$, $G_v=\operatorname{GL}(V_v)$ acts by
$(I,J)\mapsto(gI,Jg^{-1})$, and stability means $J$ is injective.

[F2] [[def-a1-nakajima-framed-quiver-data]]: $\mathfrak M_0(v,1)$ is the
spectrum of the invariant coordinate ring, $\pi_v$ is induced by invariant
functions, $\mathcal L(v,1)=\pi_v^{-1}(0)$, and $P_{0,1}$ is the incidence
locus for a framed subdatum with quotient $S$.

[F3] [[def-affine-scheme-spectrum]]: the points of $\operatorname{Spec}(A)$
are the prime ideals of the commutative ring $A$.

## Proof

1.1 When $v=0$, both maps have zero source or target and hence are zero. There is one solution, stability is vacuous, and $G_0$ is trivial, so $\mathfrak M(0,1)$ is a point. Its invariant coordinate ring is $\mathbb C$, whose only prime ideal is $(0)$; hence $\mathfrak M_0(0,1)$ and the fibre $\mathcal L(0,1)$ are points by [F2]–[F3]. [given, F1, F2, F3, algebra]

1.2 When $v=1$, write $I(w)=iw$ and $J(z)=jz$ for $i,j\in\mathbb C$. The moment equation is $ij=0$ and stability is $j\ne0$, so $i=0$ on the stable locus. Since $G_1=\mathbb C^\times$ sends $j$ to $jg^{-1}$ transitively on $\mathbb C^\times$, $\mathfrak M(1,1)$ is one point. [given, F1, algebra]

1.3 A monomial basis of $A_1=\mathbb C[i,j]/(ij)$ is $1$, $i^a$ ($a\ge1$), and $j^b$ ($b\ge1$). Under the point action $(i,j)\mapsto(gi,jg^{-1})$, evaluation of these monomials scales by $1$, $g^a$, and $g^{-b}$, respectively. The nonconstant basis monomials have pairwise distinct nonzero characters $g^a$ and $g^{-b}$; their linear independence therefore implies that an invariant polynomial has only its constant term; hence $A_1^{G_1}=\mathbb C$. Its spectrum has one point by [F3], and the image of the stable orbit is that point, so $\mathfrak M_0(1,1)$ and $\mathcal L(1,1)$ are points. [given, F1, F2, F3, algebra]

2.1 The product $\mathfrak M(0,1)\times\mathfrak M(1,1)$ is a point by steps 1.1 and 1.2. It lies in $P_{0,1}$: use $V'=0$ and the stable middle datum $(V_1,I=0,J=1)$; the inclusion is injective and the quotient has one-dimensional vertex space, zero framing space and zero induced maps, hence is $S$. Thus $P_{0,1}$ is a nonempty subset of a point, so it is a point; both projections are the unique identity map. [F2, step 1.1, step 1.2, construct] ∎

