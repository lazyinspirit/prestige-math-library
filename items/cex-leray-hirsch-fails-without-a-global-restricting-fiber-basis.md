---
id: cex-leray-hirsch-fails-without-a-global-restricting-fiber-basis
kind: counterexample
title: Leray–Hirsch fails without a global restricting fiber basis
status: draft
origin: pipeline
pipeline_run: phase-2-next-18
deps: [lem-global-fiber-basis-trivializes-serre-monodromy, thm-wang-sequence-for-a-fibration-over-the-circle, prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps, cor-homology-of-spheres, thm-topological-universal-coefficient-short-exact-sequence-for-cohomology, def-axiom-of-choice]
proof_strategy: counterexample
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Miller, MIT 18.906 notes, Lecture 33 Leray–Hirsch hypotheses"
      url: "https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf"
      locator: "Theorem 33.5 and proof, printed pp.122–123"
---

## Statement refuted

Assume AC.  It is false that free constant-rank fiber cohomology alone, without
global classes restricting to a fiber basis, gives the Leray–Hirsch module
isomorphism.  For the Klein-bottle bundle

$$S^1\longrightarrow K=T_r\longrightarrow S^1;\quad r(z)=\overline z,$$

reflection monodromy prevents a global integral fiber generator and
$H^1(K;\mathbb Z)\cong\mathbb Z$, not the rank-two group predicted by treating
the fiber basis as constant.

## Facts & Assumptions

**Given:** AC, integral coefficients, the counterclockwise orientation of $S^1$, and the displayed reflection mapping torus.

[F1] [[lem-global-fiber-basis-trivializes-serre-monodromy]] says that global classes restricting to a fiber basis force cohomological fiber transport to fix that named basis.

[F2] [[prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps]] says a circle reflection has degree $-1$.

[F3] [[thm-wang-sequence-for-a-fibration-over-the-circle]] gives the integral homology sequence with maps $1-T_q$.

[F4] [[cor-homology-of-spheres]] gives $H_0(S^1;\mathbb Z)=H_1(S^1;\mathbb Z)=\mathbb Z$ and zero homology in higher degrees.

[F5] [[thm-topological-universal-coefficient-short-exact-sequence-for-cohomology]] gives the integral cohomology evaluation sequence under AC.

[A1] [[def-axiom-of-choice]] is used exactly in [F1] and [F5].

## Counterexample

**Proof technique:** calculate the reflection monodromy, then compare the actual and falsely untwisted degree-one groups.

1.1 Write $K=(S^1\times[0,1])/(z,1)\sim(r(z),0)$.  Product charts away from the seam and charts changing fiber coordinate by $r=r^{-1}$ across the seam make $K\to S^1$ a fiber bundle.  Positive-loop transport is $r$, so [F2] and [F4] give $T_1=-1$ on $H_1(S^1;\mathbb Z)=\mathbb Z$ and $T_0=1$ on $H_0(S^1;\mathbb Z)=\mathbb Z$. [F2, F4]

2.1 Cohomological transport on $H^1(S^1;\mathbb Z)$ is likewise multiplication by $-1$, since evaluation on the homology generator changes by the degree in step 1.1.  It fixes no generator.  The contrapositive of [F1] therefore says that no global class on $K$ can restrict to an integral basis of $H^*(S^1;\mathbb Z)$. [F1, F5, step 1.1]

2.2 The degree-one part of [F3], using step 1.1, gives $0\to\mathbb Z/2\to H_1(K;\mathbb Z)\to\mathbb Z\to0$.  The fixed point $1\in S^1$ defines the section $[t]\mapsto[(1,t)]$, so the projection onto the last $\mathbb Z$ splits and $H_1(K;\mathbb Z)\cong\mathbb Z\oplus\mathbb Z/2$.  The same explicit mapping-torus model is path connected, hence $H_0(K;\mathbb Z)=\mathbb Z$. [F3, F4, step 1.1]

3.1 Apply [F5] in degree one.  Since $H_0(K)=\mathbb Z$ is free, its Ext term is zero, and every homomorphism $\mathbb Z/2\to\mathbb Z$ is zero.  Consequently $H^1(K;\mathbb Z)\cong\operatorname{Hom}(\mathbb Z\oplus\mathbb Z/2,\mathbb Z)\cong\mathbb Z$. [F5, A1, step 2.2]

4.1 By [F4] and [F5], both base and fiber have one copy of $\mathbb Z$ in cohomological degrees zero and one.  Falsely declaring the fiber basis $(1,u)$ constant would make the degree-one Leray–Hirsch source $H^1(S^1)\otimes\langle1\rangle\oplus H^0(S^1)\otimes\langle u\rangle\cong\mathbb Z^2$, whereas step 3.1 gives only $\mathbb Z$.  The failed conclusion and its missing global-basis hypothesis are therefore witnessed explicitly. [F4, F5, step 2.1, step 3.1]

5.1 The base, fiber and total space are nonempty, and the coefficient ring is fixed as nonzero $\mathbb Z$.  Steps 1.1–4.1 include the one base loop, its two seam endpoints, the degree-zero unit, the zero kernel of multiplication by two, identity action on $H_0$, reflection action on $H_1$, and the degenerate false identity-monodromy comparison.  AC is used only through [A1] in [F1] and [F5]; the mapping-torus and Wang calculations are choice-free.  No converse claim is made. [F1, F2, F3, F4, F5, A1, step 1.1, step 2.1, step 2.2, step 3.1, step 4.1] ∎
