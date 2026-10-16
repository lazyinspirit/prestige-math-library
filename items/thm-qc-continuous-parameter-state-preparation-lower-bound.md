---
id: thm-qc-continuous-parameter-state-preparation-lower-bound
kind: theorem
title: QC24 Continuous-Parameter State Preparation Lower Bound
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 10
deps:
  - def-qc-state-preparation-cost-model
  - thm-qc-projective-chart-dimension
  - thm-morse-sard-for-euclidean-maps
  - def-qc-clean-ancilla-output-projection
  - lem-qc-open-cube-is-not-null
  - lem-qc-countable-compact-null-union
  - thm-compactness-under-continuous-maps
  - def-null-and-content-zero-in-rn
  - def-qc-circuit-denotational-semantics
  - def-qc-tensor-map
  - lem-rat-embeds-dense
  - thm-rationals-countable
  - thm-n-cross-n-countable
  - thm-heine-borel-rn
justified_by: []
proof_strategy: direct
axiom_use: "No choice principle is used in the local chart/countable-topology argument. The Sard compact-section supplier uses the set of all witnessed interval/cube-cover pairs and only finitely many witnesses; countable compact-null unions use least-coded covers."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: John Preskill, Quantum Computation, Chapter 5, Classical and Quantum Circuits
      url: https://www.preskill.caltech.edu/ph219/chap5_15.pdf
    - title: John Watrous, The Theory of Quantum Information
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
---

## Statement

Let integer $n\ge1$, $D=2^n$, integer workspace count $a\ge0$, and total width $W=n+a$. Fix integers $k\ge1$ and $p\ge1$ and a countable library of gate families of arity at most $k$, each represented by a countable atlas of $C^\infty$ parameter charts that are open subsets of $\mathbb R^q$ with integer $q$ satisfying $0\le q\le p$. For a nonnegative integer gate budget $g$, each circuit topology selects at most $g$ such gates and wire placements; its gate matrices depend smoothly on their parameters. For each fixed topology and parameter-chart tuple, its denotation is the ordered product of the corresponding fixed local gate embeddings, with each embedding acting on its assigned ordered tensor factors and as the identity on the remaining wires, as specified by [[def-qc-circuit-denotational-semantics]]. Circuits act on the fixed input $|0^n\rangle|0^a\rangle$ and exactly prepare a target unit data vector with declared workspace output $\lambda|\psi\rangle|0^a\rangle$ for a unit scalar $\lambda$. In every standard chart of $\mathbb{CP}^{D-1}$, the exactly preparable rays obtainable with at most $g$ gates form a null set whenever $pg<2D-2$. Thus they cannot cover all rays. For fixed $p$, in each standard chart all rays outside a null coordinate subset require at least $\lceil(2D-2)/p\rceil$ gates. Thus almost every target in chart coordinates has exact preparation cost $\Omega(D)$.

## Facts & Assumptions

**Given:** $D\ge2$, fixed finite width $W$, a fixed countable gate-family library and countable smooth parameter atlases as in the Statement, with each family using at most $p$ real parameters per gate. The considered circuits have exact clean-workspace output.

[F1] The standard projective patches have smooth coordinates in $\mathbb R^{2D-2}$ ([[thm-qc-projective-chart-dimension]]).

[F2] If $f:U\subseteq\mathbb R^q\to\mathbb R^m$ is $C^r$ with $r>\max\{q-m,0\}$, its critical value set is null ([[thm-morse-sard-for-euclidean-maps]]).

[F3] A countable union of compact null subsets of Euclidean space is null; the proof selects finite rational-cube covers by their least codes without choice ([[lem-qc-countable-compact-null-union]]).

[F4] A continuous image of a compact space is compact ([[thm-compactness-under-continuous-maps]]).

[F5] A nonempty Euclidean open set is not null in the closed-cube-cover sense ([[lem-qc-open-cube-is-not-null]]).

[F6] Projecting the circuit output onto the all-zero workspace branch yields the data vector used for its projective chart coordinates ([[def-qc-clean-ancilla-output-projection]]).

[F7] Nullity in the closed-cube-cover definition passes to subsets ([[def-null-and-content-zero-in-rn]]).

[F8] A tensor map acts factorwise on elementary tensors, and the fixed register order determines each local gate embedding ([[def-qc-tensor-map]]).

[F9] A finite circuit denotes the ordered product of its local gate embeddings in chronological layer order ([[def-qc-circuit-denotational-semantics]]).

[F10] Rational numbers are countable and dense in the reals, so for each integer $q\ge1$ rational open cubes form a countable basis for $\mathbb R^q$, and every open subset is covered by countably many rational closed cubes contained in it ([[thm-rationals-countable]], [[lem-rat-embeds-dense]]).

[F11] There is a fixed pairing bijection $\pi:\mathbb N^2\to\mathbb N$ ([[thm-n-cross-n-countable]]). For a tuple $(a_0,\ldots,a_{r-1})$, set $c_0=0$ and $c_{j+1}=\pi(a_j,c_j)$ for $j<r$, then encode the tuple as $\pi(r,c_r)$. Injectivity of $\pi$ makes this an injection of all finite tuples into $\mathbb N$.

[F12] A singleton in $\mathbb R^m$, $m\ge1$, is compact and null: every open cover has a one-set subcover, and the singleton itself is a degenerate closed cube of zero volume ([[def-null-and-content-zero-in-rn]]).

[F13] Every closed cube in $\mathbb R^q$, $q\ge1$, is compact by Heine–Borel ([[thm-heine-borel-rn]]).

## Proof

**Given:** As in Facts & Assumptions.

1.1 Fix one gate topology, one choice of its gate-family parameter charts, and one standard target patch $U_j$ from [F1]. The product $\Omega$ of the finitely many selected open parameter charts is open in $\mathbb R^q$. By [F8] and [F9], each local embedding has matrix entries that are fixed finite linear combinations of the local gate entries, and the circuit matrix is a finite ordered product of those embeddings. Its entries are therefore finite sums of products of smooth gate-matrix entries. The projected data vector $v(\theta)$ from [F6] depends smoothly on $\theta\in\Omega$. The set $\Omega_j=\{\theta\in\Omega:v_j(\theta)\ne0\}$ is open. Under the fixed real/imaginary identification $\mathbb C^{D-1}\cong\mathbb R^{2D-2}$, the chart map $f_j(\theta)=(v_i(\theta)/v_j(\theta))_{i\ne j}$ is $C^\infty$ on $\Omega_j$. [given, F1, F6, F8, F9, construct]

2.1 The parameter dimension $q$ is at most $pg<2D-2$, so the derivative of $f_j$ has rank at most $q$ at every point; every point is critical. With target dimension $m=2D-2$ and $r=1$, the hypothesis $r>\max\{q-m,0\}=0$ holds, and [F2] makes $f_j(\Omega_j)$ null. [given, F2, step 1.1, algebra]

3.1 The gate-family choices and parameter charts are countable, and at fixed $W,g$ there are finitely many wire placements. By [F11], finite tuples of their natural codes, with their tuple length, form a countable set. For a fixed tuple, if its parameter dimension is $q=0$, then $\Omega_j$ is empty or a singleton, whose image is compact null by [F12]; these images are indexed by the countable topology/chart-tuple codes. If $q\ge1$, rational coordinates are coded by [F11], and [F10] gives a countable cover of the open set $\Omega_j$ by rational closed cubes whose closures lie in $\Omega_j$. By [F13], each such cube is compact, so its image is compact by [F4] and null as a subset of the Sard-null image in step 2.1 by [F7]. Pairing each topology/chart-tuple code with each rational-cube code by [F11] makes this part of the entire family countable as well. Together with the $q=0$ singleton images, these form a countable family of compact null sets. Applying [F3] to this family shows that all exactly preparable rays in the patch have a null coordinate image. [F3, F4, F7, F10, F11, F12, F13, step 1.1, step 2.1, construct]

4.1 If every ray were exactly preparable with $g$ gates, then the coordinate image of all rays in the chosen standard patch would be $\mathbb R^{2D-2}$ and hence would contain a nonempty open cube. Step 3.1 makes that image null, while [F5] says a nonempty open cube is not null. This contradiction proves the noncoverage claim for each patch. [F1, F5, step 3.1, contradiction]

5.1 Set $g_0=\lceil(2D-2)/p\rceil-1$. Then $pg_0<2D-2$, so steps 1.1–2.1 with budget $g_0$ show that the targets exactly preparable with at most $g_0$ gates form a null set in each chart. Every target outside this null coordinate subset therefore requires at least $g_0+1=\lceil(2D-2)/p\rceil$ gates. For fixed $p$, this is $\Omega(D)$. [given, step 3.1, algebra] ∎
