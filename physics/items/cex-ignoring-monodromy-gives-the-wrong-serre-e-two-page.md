---
id: cex-ignoring-monodromy-gives-the-wrong-serre-e-two-page
kind: counterexample
title: Ignoring monodromy gives the wrong Serre E2 page
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [ex-wang-sequence-of-a-mapping-torus, lem-the-first-serre-differential-is-the-cellular-boundary-with-local-coefficients, thm-fundamental-group-of-the-circle, prop-the-first-hurewicz-map-in-degree-one-is-abelianization]
proof_strategy: counterexample
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: Miller, MIT 18.906 notes, local coefficients in the Serre sequence
      url: https://ocw.mit.edu/courses/18-906/algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: Serre local systems and cellular E2 identification, Lectures 24–25, pp. 80–87
---

## Statement

Let $r:S^1\to S^1$ be the reflection $r([t])=[-t]$, and let $K=T_r$ be its
mapping torus, the Klein bottle. Its monodromy acts by $-1$ on
$H_1(S^1;\mathbb Z)$. Consequently the correct fiber-degree-one row has
$$H_0(S^1;\mathcal H_1)=\mathbb Z/2,\qquad H_1(S^1;\mathcal H_1)=0,$$
whereas replacing $\mathcal H_1$ by the constant system gives $\mathbb Z$ in
both degrees. The correct Wang sequence gives
$H_1(K;\mathbb Z)=\mathbb Z\oplus\mathbb Z/2$; the untwisted table misses its
torsion summand. No choice principle is used.

## Facts & Assumptions

**Given:** the quotient circle $S^1=\mathbb R/\mathbb Z$, its positive one-cell orientation, the reflection $r([t])=[-t]$, and integral coefficients.

[F1] [[thm-fundamental-group-of-the-circle]] identifies the positive loop with $1\in\mathbb Z$. [[prop-the-first-hurewicz-map-in-degree-one-is-abelianization]] identifies this with the oriented generator of $H_1(S^1;\mathbb Z)$ and is natural in $r$.

[F2] [[ex-wang-sequence-of-a-mapping-torus]] identifies mapping-torus monodromy with the gluing homeomorphism and supplies the unsplit kernel-cokernel short exact sequence.

[F3] [[lem-the-first-serre-differential-is-the-cellular-boundary-with-local-coefficients]] identifies the Serre $E^2$ row with cellular homology of the base circle using the actual fiber-homology monodromy.

## Verification

**Proof technique:** calculate the one-cell boundary with and without the reflection action, then compare the Wang abutment.

1.1 Reflection sends the positive loop $t\mapsto[t]$ to the negative loop $t\mapsto[-t]$. Hence [F1] gives $$r_*=-1:H_1(S^1;\mathbb Z)\longrightarrow H_1(S^1;\mathbb Z).$$ By [F2], this is exactly the degree-one monodromy of the mapping-torus fibration. On $H_0(S^1;\mathbb Z)=\mathbb Z$ the monodromy is the identity, because the fiber is connected. [F1, F2]

2.1 In fiber degree one, the cellular local chain complex of the one-vertex, one-edge base circle is $$0\longrightarrow\mathbb Z\xrightarrow{1-(-1)=2}\mathbb Z\longrightarrow0.$$ Changing the edge convention multiplies this boundary by $-1$ and changes neither group. Thus [F3] gives $$E^2_{0,1}=\operatorname {coker}(2)=\mathbb Z/2,\qquad E^2_{1,1}=\ker(2)=0.$$ If one falsely makes the coefficient system constant, the boundary becomes $1-1=0$, so the same two entries become $\mathbb Z$ and $\mathbb Z$. [F3, step 1.1]

2.2 Apply [F2] in degree one. On fiber $H_1$, $1-r_*=2$; on fiber $H_0$, $1-r_*=0$. Hence $$0\longrightarrow\mathbb Z/2\longrightarrow H_1(K;\mathbb Z)\longrightarrow\mathbb Z\longrightarrow0.$$ This sequence splits explicitly: the point $[0]\in S^1$ is fixed by $r$, so $[t]\mapsto[([0],t)]$ is a section of $K\to S^1$ and its first-homology map splits the displayed projection. Therefore $H_1(K;\mathbb Z)\cong\mathbb Z\oplus\mathbb Z/2$. [F1, F2, step 1.1]

3.1 The base has cellular dimension one, so no Serre differential $d_s$ with $s\geq2$ can leave or enter its columns. The correct $E^2$ table therefore already displays the torsion piece in total degree one. The false constant table has $\mathbb Z$ instead at $(0,1)$ and would have two infinite cyclic total-degree-one pieces, so it cannot yield the actual $H_1(K)$. Degree zero, the zero kernel of multiplication by two, identity action on $H_0$, both base cells, both orientations, both row degrees, and the fixed-point section are all explicit above. No AC is used, and there is no converse assertion. [F1, F2, F3, step 1.1, step 2.1, step 2.2] ∎

## Source notes

Miller's Lectures 24–25, printed pp. 80–87, construct the Serre sequence with the fiber-homology local system and identify its second page by cellular local chains. Steps 1.1–3.1 supply the specific reflection action, its boundary $2$, and the Klein-bottle first-homology calculation.
