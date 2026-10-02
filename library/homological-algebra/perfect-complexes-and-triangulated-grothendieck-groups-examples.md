---
page: perfect-complexes-and-triangulated-grothendieck-groups-examples
title: "Perfect Complexes and Triangulated Grothendieck Groups — Examples"
status: draft
requires: [perfect-complexes-and-triangulated-grothendieck-groups]
items: []
examples:
  - ex-homological-and-internal-shifts-on-k-zero
  - ex-dual-numbers-simple-is-not-perfect
  - ex-euler-class-of-a-two-term-cone
---

These examples check the page's two comparisons and its separation of the
cochain shift from the internal shift on concrete complexes.

For a finite-dimensional graded algebra $A$ and a finite graded projective $P$,
the class of $P[1]\{2\}$ in graded triangle $K_0$ equals $-v^2[P]$ under the
graded projective comparison: the homological shift $[1]$ contributes the sign,
the internal shift $\{2\}$ contributes the Laurent factor, and the graded Cartan
map carries the same formula to $G_0^{\mathrm{gr}}(A)$. The two shifts move
different structures, and the example exhibits their independence rather than
an identification.

Over the dual numbers $A=k[\varepsilon]/(\varepsilon^2)$ the periodic free
resolution of the simple module $S=A/(\varepsilon)$ has kernel and image
$(\varepsilon)$ at every positive stage, so $\operatorname{Tor}_i^A(S,S)\cong
k$ for all $i\ge 0$. Hence $S[0]$ is not perfect, even though it is bounded
with finite-dimensional cohomology; the proof argues by contradiction using a
finite-projective representative and the bounded support of its tensor with
$S$. The Axiom of Choice is stated here only to invoke the published balanced
Tor and derived-Tor comparison, while the periodic resolution and its tensor
homology are computed by hand and are choice-free.

Finally, for a homomorphism $f:P\to Q$ of finitely generated projective left
$A$-modules regarded as degree-zero complexes, the mapping cone
$\operatorname{Cone}(f)$ has $P$ in cohomological degree $-1$ and $Q$ in
degree $0$, so $[\operatorname{Cone}(f)]=[Q[0]]-[P[0]]$ in triangle $K_0$ and
$\chi(\operatorname{Cone}(f))=[Q]-[P]$ in split $K_0$. Taking $P=Q=A$ and $f$
to be right multiplication $x\mapsto xa$ on the left regular module — left
$A$-linear for every $a\in A$ — the two projective terms cancel, so the cone
has Euler class zero and class zero even when it is not acyclic: nothing about
the kernel or cokernel of $f$ enters.
