---
id: ex-conjugacy-class-indicator-basis-for-s-three
kind: example
title: "The three conjugacy-class indicators of the symmetric group S3"
status: published
origin: pipeline
pipeline_run: phase-2-wave-1
deps: [lem-indicator-basis-for-invariant-functions-on-a-finite-orbit-partition]
justified_by: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-09
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
sources:
  scraped: []
  references:
    - title: "Etingof et al., Introduction to Representation Theory"
      url: "https://math.mit.edu/~etingof/reprbook.pdf"
    - title: "Thomas W. Judson, Abstract Algebra: Theory and Applications"
      url: "https://judsonbooks.org/aata-files/aata-html/actions-section-class-equation.html"
---

## Example

For $S_3$ and any field $k$, the indicators of $C_1=\{e\}$, $C_2=\{(12),(13),(23)\}$, and $C_3=\{(123),(132)\}$ form a basis of the $k$-valued class functions. In particular that space has dimension three.

## Facts & Assumptions

**Given:** $S_3$ is the permutation group of $\{1,2,3\}$; products act rightmost first, and $k$ is a field.

[F1] For conjugation on a finite group, the distinct conjugacy-class indicators form a basis of class functions over any field ([[lem-indicator-basis-for-invariant-functions-on-a-finite-orbit-partition]]).

## Verification

**Proof technique:** direct.

1.1 Conjugation sends a transposition $(ab)$ to $(\tau(a)\,\tau(b))$: at $\tau(a)$ the composite $\tau(ab)\tau^{-1}$ sends $\tau(a)$ to $\tau(b)$, at $\tau(b)$ it sends it to $\tau(a)$, and it fixes every other point. In particular $(23)(12)(23)=(13)$ and $(13)(12)(13)=(23)$. Thus all three transpositions, and no other permutations, constitute one conjugacy class. [given, algebra]

1.2 Similarly, $\tau(123)\tau^{-1}$ sends $\tau(1)$ to $\tau(2)$, then to $\tau(3)$, then to $\tau(1)$, so it is a three-cycle. Directly $(12)(123)(12)=(132)$, so the two three-cycles form one class. Every conjugate of $e$ is $e$. A permutation of three points is either the identity, a transposition, or a three-cycle: fixing two points forces the third to be fixed; fixing exactly one exchanges the other two; fixing none forces a three-cycle by following any point’s successive images. Hence the three listed classes exhaust $S_3$. [given, algebra]

2.1 The group is finite and these are exactly its three classes by steps 1.1–1.2, so F1 gives the asserted indicator basis over $k$. More explicitly, for every class function $f$ one has $f=f(e)\mathbf1_{C_1}+f((12))\mathbf1_{C_2}+f((123))\mathbf1_{C_3}$, because evaluation on each of the three classes picks out its constant value. For example the coefficients $(0,1,-1)$ give the function with values $0$ at $e$, $1_k$ on the transpositions, and $-1_k$ on the three-cycles. This calculation remains valid in characteristic two, where the last two values coincide, while the indicator basis itself stays independent by evaluation on the three disjoint nonempty classes. [F1, step 1.1, step 1.2, algebra] ∎

## Sources

[Judson, Example 14.2.1](https://judsonbooks.org/aata-files/aata-html/actions-section-class-equation.html) lists these classes; [Etingof et al.](https://math.mit.edu/~etingof/reprbook.pdf), §4.3(2), p. 65, discusses $S_3$. The indicator-basis calculation is a local illustration, not a character-table computation.
