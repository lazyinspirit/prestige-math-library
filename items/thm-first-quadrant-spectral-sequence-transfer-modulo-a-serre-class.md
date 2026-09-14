---
id: thm-first-quadrant-spectral-sequence-transfer-modulo-a-serre-class
kind: theorem
title: First-quadrant spectral-sequence transfer modulo a Serre class
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [lem-serre-classes-are-stable-under-finite-filtrations, def-strong-convergence-of-a-spectral-sequence, thm-snake-lemma-for-modules]
proof_strategy: direct
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Miller, MIT 18.906 notes, Serre classes in spectral sequences"
      url: "https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf"
      locator: "Lecture 30, consequences after Lemma 30.6, printed p. 106"
---

## Statement

Let $\mathcal C$ be a Serre class and let
$E^2_{p,q}\Rightarrow H_{p+q}$ be a strongly convergent first-quadrant
homological spectral sequence of abelian groups. If $N\geq0$ and
$E^2_{p,q}\in\mathcal C$ whenever $p+q\leq N$, then
$H_n\in\mathcal C$ for every $0\leq n\leq N$.

There is also the following exact comparison form. Let $f:E\to E'$ be a
morphism of such spectral sequences, compatible with a filtered abutment map
$f_H:H\to H'$. Put
$$T_R=\{(p,q):p,q\geq0,\ p+q\leq N\},\qquad R=N+2,$$
and, recursively for $s=R-1,R-2,\ldots,2$, let
$$
T_s=T_{s+1}\cup\bigl(T_{s+1}+(s,1-s)\bigr)\cup\bigl(T_{s+1}+(-s,s-1)\bigr), \tag{1}
$$
discarding pairs outside the first quadrant. If every
$f_2:E^2_{p,q}\to E'^2_{p,q}$ with $(p,q)\in T_2$ is a
$\mathcal C$-isomorphism, then
$$f_H:H_n\longrightarrow H'_n$$
is a $\mathcal C$-isomorphism for $0\leq n\leq N$. In particular, a
$\mathcal C$-isomorphism on every $E^2$ term gives one on every abutment group.
The cohomological version follows by reversing both coordinates and using the
corresponding differential translates. No choice axiom is used.

## Facts & Assumptions

**Given:** The Serre class, the strongly convergent first-quadrant sequence, the bound $N$, and, in the comparison clause, the compatible morphism.

[F1] [[def-strong-convergence-of-a-spectral-sequence]] identifies stable terms with associated-graded pieces of an exhaustive separated filtration; in the first quadrant each fixed total degree has finitely many pieces.

[F2] [[lem-serre-classes-are-stable-under-finite-filtrations]] reconstructs membership and $\mathcal C$-isomorphisms from finite associated-graded filtrations.

[F3] [[thm-snake-lemma-for-modules]] supplies exact kernel-cokernel sequences for maps of short exact sequences.

## Proof

**Proof technique:** pagewise subquotients for objects and a backward finite differential closure for morphisms.

1.1 For fixed $(p,q)$, every later term $E^s_{p,q}$ is the homology of the three-term complex formed by the incoming term, $E^{s-1}_{p,q}$, and the outgoing term. In particular it is a quotient of a subgroup of $E^{s-1}_{p,q}$. If $E^2_{p,q}\in\mathcal C$, subgroup and quotient closure therefore give $E^s_{p,q}\in\mathcal C$ for every $s\geq2$, including the stable term. [F2]

1.2 We first record the page-comparison calculation. Consider a commutative map between three-term complexes $A\to B\to C$ and $A'\to B'\to C'$. If the three vertical maps are $\mathcal C$-isomorphisms, then the induced map on homology at $B$ is a $\mathcal C$-isomorphism. For any commuting square $B\to C$ over $B'\to C'$, the induced map on images has kernel contained in $\ker(C\to C')$ and cokernel a quotient of $\operatorname{coker}(B\to B')$; hence it is a $\mathcal C$-isomorphism. Apply [F3] to $0\to\ker(B\to C)\to B\to\operatorname{im}(B\to C)\to0$ and its primed row to conclude the same for the cycle groups. The identical image argument for $A\to B$ handles the boundary groups. A second application of [F3] to $0\to\operatorname{im}(A\to B)\to\ker(B\to C)\to H(B)\to0$ now proves the claim. Every resulting kernel and cokernel is an extension of subquotients of the three given pairs, hence lies in $\mathcal C$. [F2, F3]

2.1 For $n\leq N$, step 1.1 puts every stable term $E^\infty_{p,n-p}$ in $\mathcal C$. Strong convergence in [F1] makes these the finitely many graded pieces, $0\leq p\leq n$, of $H_n$. The object clause of [F2] now gives $H_n\in\mathcal C$. [F1, F2, step 1.1]

2.2 The sets in (1) are finite: $T_R$ is finite and each preceding set is the union of three translates of a finite set, intersected with the first quadrant. Suppose inductively that $f_s$ is a $\mathcal C$-isomorphism on $T_s$. For each $x\in T_{s+1}$, the three terms used to form $E^{s+1}_x$ occur at $x$, $x+(s,1-s)$, and $x+(-s,s-1)$; all belong to $T_s$ by (1). Step 1.2 therefore makes $f_{s+1}$ a $\mathcal C$-isomorphism at $x$. Induction from the stated hypothesis on $T_2$ gives this conclusion on $T_R$ at page $R$. [F2, F3, step 1.2]

3.1 If $(p,q)\in T_R$, then $p+q\leq N$. For every $s\geq R=N+2$, an outgoing differential would require $p\geq s>N$, while an incoming differential would require $q\geq s-1>N$; both are impossible. Thus page $R$ is already stable on $T_R$. Step 2.2 gives $\mathcal C$-isomorphisms on every stable piece in total degrees at most $N$. Compatibility with the strongly convergent abutment filtrations and the morphism clause of [F2] now imply that $f_H:H_n\to H'_n$ is a $\mathcal C$-isomorphism for $n\leq N$. [F1, F2, step 2.2]

4.1 Reversing both coordinates changes the homological differential translates in (1) into the cohomological ones and preserves the three-term comparison, proving the stated dual version. If $N=0$, then $R=2$ and no recursive expansion is made; the sole target is $(0,0)$. Empty support, the zero class, zero groups, zero differentials, and a single nonzero term all obey the same subquotient argument. A degenerate filtration piece is zero and repeated filtration terms cause no problem. Steps 2.1–3.1 check both incoming and outgoing neighbors, both kernel and cokernel directions, the initial and stable pages, and both ends of every finite abutment filtration. Every set and induction is finite, so no AC is used. Neither implication is stated as a converse. [F1, F2, F3, step 1.1, step 1.2, step 2.1, step 2.2, step 3.1] ∎

## Source notes

[Miller, Lecture 30](https://ocw.mit.edu/courses/18-906/algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf), printed p. 106, states that Serre-class membership survives pages and finite first-quadrant convergence. The bounded morphism clause and its exact backward differential-closure set are derived above.
