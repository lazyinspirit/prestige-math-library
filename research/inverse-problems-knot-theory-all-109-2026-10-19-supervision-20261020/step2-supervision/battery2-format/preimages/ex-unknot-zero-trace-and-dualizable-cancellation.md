---
id: ex-unknot-zero-trace-and-dualizable-cancellation
kind: example
title: "The unknot zero-trace and a dualizable cancellation diagram"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-smooth-zero-trace
  - def-dualizable-handle-link
  - thm-knot-slice-iff-zero-trace-embeds-in-s-four
  - def-countable-choice
  - thm-handle-cancellation
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Lisa Piccirillo, The Conway knot is not slice"
      url: "https://arxiv.org/pdf/1808.02923"
      locator: "Definition 1.2 and the dualizable-link cancellation in Theorem 2.1"
    - title: "Jennifer Hom, Getting a handle on the Conway knot"
      url: "https://arxiv.org/pdf/2107.09171"
      locator: "§2.1, trace of the unknot as a disk neighborhood"
---

## Example

Assume countable choice. Let $U$ be the standard unknot. Its zero-trace is
diffeomorphic to $S^2\times D^2$ and embeds in the standard $S^4$ as a tubular
neighborhood of an unknotted $S^2$. It also has the following dualizable-link
description: take a dotted unknot $R$ and two zero-framed meridian circles
$B,G$ at distinct points of $R$, with their normal spanning disks disjoint.
Then $B\cup R$ and $G\cup R$ are meridional pairs, $\operatorname{lk}(B,G)=0$,
and cancelling either meridional $1$–$2$ pair leaves the zero-framed unknot
trace.

## Example references

[Piccirillo, Definition 1.2 and Theorem 2.1](https://arxiv.org/pdf/1808.02923)

[Hom, §2.1](https://arxiv.org/pdf/2107.09171)

## Facts & Assumptions

**Given:** Countable choice, the standard unknot $U$, and the framed link
described in the Example.

[A1] Countable choice, written $\mathrm{AC}_\omega$, is
[[def-countable-choice]].

[F1] [[def-smooth-zero-trace]]: $X_0(U)$ is obtained by attaching a single
zero-framed $2$-handle to $B^4$ along $U$.

[F2] [[def-dualizable-handle-link]]: a dotted $R$ represents a $1$-handle,
and the meridional sublinks and zero mutual linking are the dualizability
conditions.

[F3] [[thm-handle-cancellation]]: a $1$-handle and $2$-handle with one
transverse attaching/belt-sphere intersection cancel, transporting remaining
attaching data.

[F4] [[thm-knot-slice-iff-zero-trace-embeds-in-s-four]]: a smooth slice disk
for $U$ gives a smooth embedding of $X_0(U)$ in $S^4$.

## Proof

**Proof technique:** direct.

1.1 The standard spanning disk for $U$ in $B^4$ is a smooth proper slice disk.
By [F4], its zero-trace embeds smoothly in $S^4$. [A1, F4, given, construct]

1.2 Glue the spanning disk for $U$ in the boundary $S^3$ to the core disk of
the attached $2$-handle. Their union is an embedded $S^2$, and its regular
neighborhood is the disk bundle over $S^2$ whose clutching map along the
equator has degree equal to the handle framing. The framing is zero by [F1],
so this clutching map has degree zero. Since $SO(2)\cong S^1$ and a degree-zero
map $S^1\to S^1$ is null-homotopic, the oriented disk bundle is trivial.
Therefore $X_0(U)\cong S^2\times D^2$. [F1, construct, algebra]

1.3 The standard unknotted $S^2$ in $S^4$ has trivial oriented normal bundle:
in the round model one normal vector is radial in $\mathbb R^3$ and the other
is the constant fourth-coordinate vector. Its tubular neighborhood is thus
$S^2\times D^2$, giving the stated embedding of $X_0(U)$. [step 1.2,
construct]

2.1 Each of $B$ and $G$ bounds its chosen normal disk meeting the core $R$
once, so both indicated sublinks are a knot and its meridian. The disks are
disjoint, so $B$ and $G$ have zero linking number. Their framings are zero by
the stated preferred-longitude pushoffs. Thus $(B,G,R)$ satisfies [F2].
[F1, F2, given, construct]

2.2 Cancel the $1$-handle represented by $R$ with the $2$-handle $B$ using
their single transverse meridional intersection. The other normal disk is
disjoint from this cancellation neighborhood; after cancellation it is a
spanning disk for the remaining attaching circle. The transported framing is
zero, so the remaining handle is $X_0(U)$. Reversing the roles gives the same
result after cancelling $R$ with $G$. This verifies both cancellations
described in the Example. [A1, F1, F2, F3, step 2.1, construct] ∎

~~~tikz
\begin{tikzpicture}[node distance=2.5cm,>=stealth]
  \node (x) {$B^4\cup_R h^1\cup_B h^2_0\cup_G h^2_0$};
  \node (g) [below left of=x] {$B^4\cup_U h^2_0$};
  \node (b) [below right of=x] {$B^4\cup_U h^2_0$};
  \draw[->] (x) -- node[left,align=center] {cancel $(R,B)$;\\retain $G$} (g);
  \draw[->] (x) -- node[right,align=center] {cancel $(R,G)$;\\retain $B$} (b);
\end{tikzpicture}
~~~

The sketch shows handle incidence only: dotted $R$ denotes the $1$-handle and
subscript $0$ denotes zero framing. The proof uses the disjoint normal disks and
the single-intersection cancellation, not the sketch.
