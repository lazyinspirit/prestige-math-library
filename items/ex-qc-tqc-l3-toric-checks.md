---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/ex-qc-tqc-l3-toric-checks.json
  precheck: pass
id: ex-qc-tqc-l3-toric-checks
kind: example
title: L=3 torus checks and syndrome calculation
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps:
  - def-qc-tqc-periodic-square-cellulation
  - def-qc-tqc-toric-checks
  - lem-qc-tqc-toric-check-commutation
  - lem-qc-tqc-toric-incidence-ranks
  - thm-qc-tqc-toric-code-dimension
  - def-qc-tqc-toric-hamiltonian
  - def-qc-tqc-toric-logical-loops
  - lem-qc-tqc-toric-joint-check-eigenspaces
  - def-qc-tqc-toric-excitations
  - lem-qc-tqc-toric-string-syndrome
  - thm-qc-tqc-toric-gap
justified_by: []
proof_strategy: direct
axiom_use: "None; this is a finite coordinate calculation with indices in Z/3Z."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Eric Dennis, Alexei Kitaev, Andrew Landahl, and John Preskill, Topological quantum memory"
      url: https://arxiv.org/pdf/quant-ph/0110143
    - title: "John Preskill, Quantum Computation, Chapter 9: Topological Quantum Computation"
      url: https://www.preskill.caltech.edu/ph219/topological.pdf
---

## Example

Take $L=3$, with all indices in $\mathbb Z/3\mathbb Z$. The edge qubits are
the eighteen distinct labels
$$\{h_{i,j}:i,j\in\{0,1,2\}\}\sqcup\{v_{i,j}:i,j\in\{0,1,2\}\}.$$
There are eighteen checks $A_{i,j},B_{i,j}$, given by the star and plaquette
formulas in [[def-qc-tqc-toric-checks]]. The displayed horizontal primal loop
is
$\bar Z_1=Z_{h_{0,0}}Z_{h_{1,0}}Z_{h_{2,0}}$.

## Facts & Assumptions

**Given:** The periodic $3\times3$ cellulation and the toric check, code-space, string-syndrome, and Hamiltonian conventions.

[F1] [[def-qc-tqc-periodic-square-cellulation]]: each edge label is distinct modulo $3$, and the incidence formulas use indices in $\mathbb Z/3\mathbb Z$.

[F2] [[def-qc-tqc-toric-checks]]: $A_{i,j}$ is X on the four edges at $q_{i,j}$ and $B_{i,j}$ is Z on the four boundary edges of $f_{i,j}$.

[F3] [[lem-qc-tqc-toric-check-commutation]]: all checks commute, and the products of all stars and of all plaquettes are each $I$.

[F4] [[lem-qc-tqc-toric-incidence-ranks]]: each check type has rank $3^2-1=8$ and only its total relation.

[F5] [[thm-qc-tqc-toric-code-dimension]]: the code has $18$ physical qubits, check rank $16$, and dimension $2^{18-16}=4$.

[F6] [[def-qc-tqc-toric-logical-loops]]: $\bar Z_1$ is a nontrivial logical Pauli supported on $h_{i,0}$ for $i\in\mathbb Z_3$.

[F7] [[lem-qc-tqc-toric-string-syndrome]]: an edge-simple open primal Z trail or dual X trail has the respective defects at exactly its two endpoints; a closed one has no defects.

[F8] [[thm-qc-tqc-toric-gap]]: for couplings $J_e,J_m>0$, the exact gap is $4\min(J_e,J_m)$ and the ground energy is $-9(J_e+J_m)$.

[F9] [[def-qc-tqc-toric-hamiltonian]]: for $L=3$ the Hamiltonian is $-J_e\sum_{i,j}A_{i,j}-J_m\sum_{i,j}B_{i,j}$.

[F10] [[lem-qc-tqc-toric-joint-check-eigenspaces]]: every nonzero syndrome sector has an even number of e defects and an even number of m defects.

[F11] [[def-qc-tqc-toric-excitations]]: e and m defects are respectively negative star and plaquette eigenvalues.

## Verification

1.1 There are $3\cdot3=9$ horizontal and nine vertical edge labels; they are disjoint by [F1], so there are $18$ qubits. Likewise there are nine stars and nine plaquettes, hence $18$ checks in the displayed list. [given, F1, F2, algebra]

1.2 Every edge occurs in two stars, so the product of all nine stars is $I$; every edge also occurs in two plaquettes, so their total product is $I$, as [F3] records. By [F4], deleting $A_{0,0}$ and $B_{0,0}$ leaves $8+8=16$ independent checks, with no other relation. Thus [F5] gives a four-dimensional code space. [F3, F4, F5, algebra]

1.3 The three edges $h_{0,0},h_{1,0},h_{2,0}$ form a closed horizontal primal loop. Applying $Z_{h_{0,0}}$ first gives e defects at $q_{0,0}$ and $q_{1,0}$. Applying $Z_{h_{1,0}}$ next leaves only the two endpoints $q_{0,0}$ and $q_{2,0}$. Applying $Z_{h_{2,0}}$ closes the trail, leaving no defects. These are precisely the endpoint and closed-trail cases of [F7]; [F6] says the final loop is logically nontrivial. [F1, F6, F7, construct, algebra]

2.1 For a joint sector with $n_e$ negative stars and $n_m$ negative plaquettes, [F9] gives energy $-9(J_e+J_m)+2J_en_e+2J_mn_m$, using [F11] to count the negative signs. By [F10], any nonzero excited sector has $n_e\ge2$ or $n_m\ge2$, so it lies at least $4\min(J_e,J_m)$ above the code. A one-edge Z string attains $4J_e$ and a one-edge X string attains $4J_m$; hence the smaller value is attained, in agreement with [F8]. [F3, F7, F8, F9, F10, F11, algebra] ∎

## Remarks

The square below is a fundamental domain: identify the left and right sides,
and the bottom and top sides, by translation. Boundary labels therefore repeat;
they do not denote additional qubits or vertices. Gold edges form the horizontal
loop in step 1.3. Blue edges are the support of $A_{1,1}$ and orange edges are
the boundary support of $B_{2,2}$; translating these patterns modulo $3$ gives
all nine checks of each type. Each $A$ acts by $X$ and each $B$ by $Z$ on its
four indicated edge qubits.

```tikz
\begin{tikzpicture}[x=2.3cm,y=2.3cm]
\draw[yellow!85!orange,thick] (0,0) -- node[above,font=\normalsize] {$h_{0,0}$} (1,0);
\draw[yellow!85!orange,thick] (1,0) -- node[above,font=\normalsize] {$h_{1,0}$} (2,0);
\draw[yellow!85!orange,thick] (2,0) -- node[above,font=\normalsize] {$h_{2,0}$} (3,0);
\draw[cyan,thick] (0,1) -- node[above,font=\normalsize] {$h_{0,1}$} (1,1);
\draw[cyan,thick] (1,1) -- node[above,font=\normalsize] {$h_{1,1}$} (2,1);
\draw[gray,thick] (2,1) -- node[above,font=\normalsize] {$h_{2,1}$} (3,1);
\draw[gray,thick] (0,2) -- node[above,font=\normalsize] {$h_{0,2}$} (1,2);
\draw[gray,thick] (1,2) -- node[above,font=\normalsize] {$h_{1,2}$} (2,2);
\draw[orange,thick] (2,2) -- node[above,font=\normalsize] {$h_{2,2}$} (3,2);
\draw[gray,thick] (0,3) -- node[above,font=\normalsize] {$h_{0,0}$} (1,3);
\draw[gray,thick] (1,3) -- node[above,font=\normalsize] {$h_{1,0}$} (2,3);
\draw[orange,thick] (2,3) -- node[above,font=\normalsize] {$h_{2,0}$} (3,3);
\draw[gray,thick] (0,0) -- node[left,font=\normalsize] {$v_{0,0}$} (0,1);
\draw[gray,thick] (0,1) -- node[left,font=\normalsize] {$v_{0,1}$} (0,2);
\draw[orange,thick] (0,2) -- node[left,font=\normalsize] {$v_{0,2}$} (0,3);
\draw[cyan,thick] (1,0) -- node[left,font=\normalsize] {$v_{1,0}$} (1,1);
\draw[cyan,thick] (1,1) -- node[left,font=\normalsize] {$v_{1,1}$} (1,2);
\draw[gray,thick] (1,2) -- node[left,font=\normalsize] {$v_{1,2}$} (1,3);
\draw[gray,thick] (2,0) -- node[left,font=\normalsize] {$v_{2,0}$} (2,1);
\draw[gray,thick] (2,1) -- node[left,font=\normalsize] {$v_{2,1}$} (2,2);
\draw[orange,thick] (2,2) -- node[left,font=\normalsize] {$v_{2,2}$} (2,3);
\draw[gray,thick] (3,0) -- node[left,font=\normalsize] {$v_{0,0}$} (3,1);
\draw[gray,thick] (3,1) -- node[left,font=\normalsize] {$v_{0,1}$} (3,2);
\draw[orange,thick] (3,2) -- node[left,font=\normalsize] {$v_{0,2}$} (3,3);
\fill (0,0) circle (1.5pt);
\node[below right,font=\normalsize] at (0,0) {$q_{0,0}$};
\fill (0,1) circle (1.5pt);
\node[below right,font=\normalsize] at (0,1) {$q_{0,1}$};
\fill (0,2) circle (1.5pt);
\node[below right,font=\normalsize] at (0,2) {$q_{0,2}$};
\fill (0,3) circle (1.5pt);
\node[below right,font=\normalsize] at (0,3) {$q_{0,0}$};
\fill (1,0) circle (1.5pt);
\node[below right,font=\normalsize] at (1,0) {$q_{1,0}$};
\fill (1,1) circle (1.5pt);
\node[below right,font=\normalsize] at (1,1) {$q_{1,1}$};
\fill (1,2) circle (1.5pt);
\node[below right,font=\normalsize] at (1,2) {$q_{1,2}$};
\fill (1,3) circle (1.5pt);
\node[below right,font=\normalsize] at (1,3) {$q_{1,0}$};
\fill (2,0) circle (1.5pt);
\node[below right,font=\normalsize] at (2,0) {$q_{2,0}$};
\fill (2,1) circle (1.5pt);
\node[below right,font=\normalsize] at (2,1) {$q_{2,1}$};
\fill (2,2) circle (1.5pt);
\node[below right,font=\normalsize] at (2,2) {$q_{2,2}$};
\fill (2,3) circle (1.5pt);
\node[below right,font=\normalsize] at (2,3) {$q_{2,0}$};
\fill (3,0) circle (1.5pt);
\node[below right,font=\normalsize] at (3,0) {$q_{0,0}$};
\fill (3,1) circle (1.5pt);
\node[below right,font=\normalsize] at (3,1) {$q_{0,1}$};
\fill (3,2) circle (1.5pt);
\node[below right,font=\normalsize] at (3,2) {$q_{0,2}$};
\fill (3,3) circle (1.5pt);
\node[below right,font=\normalsize] at (3,3) {$q_{0,0}$};
\node[font=\normalsize] at (0.5,0.5) {$f_{0,0}$};
\node[font=\normalsize] at (0.5,1.5) {$f_{0,1}$};
\node[font=\normalsize] at (0.5,2.5) {$f_{0,2}$};
\node[font=\normalsize] at (1.5,0.5) {$f_{1,0}$};
\node[font=\normalsize] at (1.5,1.5) {$f_{1,1}$};
\node[font=\normalsize] at (1.5,2.5) {$f_{1,2}$};
\node[font=\normalsize] at (2.5,0.5) {$f_{2,0}$};
\node[font=\normalsize] at (2.5,1.5) {$f_{2,1}$};
\node[font=\normalsize] at (2.5,2.5) {$f_{2,2}$};
\end{tikzpicture}
```

The gold loop follows the bottom side; the identified top-side copy of its
final edge is orange to display $B_{2,2}$. The star support is
$\{h_{0,1},h_{1,1},v_{1,0},v_{1,1}\}$; the plaquette support is
$\{h_{2,2},v_{0,2},h_{2,0},v_{2,2}\}$. Thus the latter includes the top-right
horizontal edge $h_{2,0}$ and the identified right/left vertical edge $v_{0,2}$.
Starting from a common $+1$ check eigenvector, the successive applied strings
and their e-defect sets are

$$Z_{h_{0,0}}:\ \{q_{0,0},q_{1,0}\},\qquad Z_{h_{1,0}}Z_{h_{0,0}}:\ \{q_{0,0},q_{2,0}\},\qquad \bar Z_1:\ \varnothing.$$

These are the endpoint parities computed in step 1.3; the illustration is not
used in the verification.
