---
id: cex-ordinary-acyclicity-forgets-basis-and-group-ring-torsion
kind: counterexample
title: "Ordinary acyclicity forgets nonzero group-ring torsion"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [ex-torsion-of-a-two-term-based-contractible-complex, def-k-one-of-a-ring-and-the-whitehead-group-of-a-discrete-group, lem-every-whitehead-class-is-realized-by-a-finite-cw-homotopy-equivalence, thm-a-finite-cw-homotopy-equivalence-is-simple-if-and-only-if-its-whitehead-torsion-vanishes]
proof_strategy: direct
verification:
  audited: 2026-09-27
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  scraped: []
  references:
    - title: "Lurie, Example 7 and Remark 6, printed p.2"
      url: "https://people.math.harvard.edu/~lurie/281notes/Lecture4-Whitehead2.pdf"
      locator: "Example 7 and Remark 6, printed p.2"
    - title: "Cohen, §8.6, printed p.33"
      url: "https://math.uchicago.edu/~shmuel/tom-readings/Cohen%2C%20simple-htpy-thry.pdf"
      locator: "§8.6, printed p.33"
---
## Statement

Let $C_5=\langle t\mid t^5=1\rangle$ and $R=\mathbb Z[C_5]$. The unit
$u=1-t^2-t^3$ has inverse $1-t-t^4$ but is not a trivial unit $\pm t^k$.
The based two-term complex $0\to R\xrightarrow{u}R\to0$ is contractible
and ordinarily acyclic, yet its Whitehead torsion is nonzero. A finite CW
homotopy equivalence realizes this nonzero class and is therefore not simple.

## Facts & Assumptions

**Given:** The displayed cyclic group, ring and unit candidate.

[F1] A two-term based contractible complex with degree-one differential $u$ has torsion $[u]$ ([[ex-torsion-of-a-two-term-based-contractible-complex]]).

[F2] $\operatorname{Wh}(C_5)=K_1(R)/\langle[\pm t^k]\rangle$ ([[def-k-one-of-a-ring-and-the-whitehead-group-of-a-discrete-group]]).

[F3] Every class of $\operatorname{Wh}(C_5)$ is realized by the torsion of a finite CW homotopy-equivalence inclusion over a finite connected complex with fundamental group $C_5$ ([[lem-every-whitehead-class-is-realized-by-a-finite-cw-homotopy-equivalence]]).

[F4] A finite CW homotopy equivalence is simple if and only if its torsion vanishes ([[thm-a-finite-cw-homotopy-equivalence-is-simple-if-and-only-if-its-whitehead-torsion-vanishes]]).

## Proof

**Proof technique:** direct.

1.1 In $R=\mathbb Z[t]/(t^5-1)$, direct multiplication gives $(1-t^2-t^3)(1-t-t^4)=1$: the coefficient vector in the basis $(1,t,t^2,t^3,t^4)$ is $(1,0,0,0,0)$. Thus $u$ is a unit with the stated inverse. Its coefficient vector is $(1,0,-1,-1,0)$, unlike every $\pm t^k$, so it is not a trivial unit. [given]

2.1 Since $C_5$ is abelian, $R$ is commutative. Determinant sends $GL_m(R)$ to $R^\times$, is multiplicative, and sends elementary matrices to $1$; hence it descends to $K_1(R)$ and then gives a homomorphism $\operatorname{Wh}(C_5)\to R^\times/\langle\pm t^k\rangle$. The determinant of the one-by-one matrix $(u)$ is $u$, whose coset is nontrivial by step 1.1. Therefore $[u]\ne0$ in $\operatorname{Wh}(C_5)$. [F2, step 1.1]

3.1 The differential $u:R\to R$ is invertible, so the displayed two-term complex has contraction $u^{-1}$ and is acyclic as an $R$-complex and after forgetting to abelian groups. Its degree-one based torsion is $[u]\ne0$ by [F1] and step 2.1. This exhibits why ordinary homology alone does not retain the chosen group-ring bases and their torsion. [F1, step 1.1, step 2.1]

4.1 Take the finite presentation complex $X$ of $C_5=\langle t\mid t^5\rangle$: one vertex, one loop and one two-cell. Apply [F3] to $X$ and the nonzero class $[u]$ to obtain a finite CW homotopy equivalence $i:X\hookrightarrow Y$ with $\tau(i)=[u]$. By [F4] and step 2.1 it is not simple. Its relative group-ring complex may be chosen as the two-term invertible-matrix complex constructed in [F3], so its ordinary relative homology also vanishes. ∎ [F3, F4, step 2.1, step 3.1]
