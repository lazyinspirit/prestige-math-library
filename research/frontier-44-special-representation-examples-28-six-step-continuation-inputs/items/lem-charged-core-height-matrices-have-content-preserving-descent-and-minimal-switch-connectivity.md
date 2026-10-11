---
id: lem-charged-core-height-matrices-have-content-preserving-descent-and-minimal-switch-connectivity
kind: lemma
title: "Charged core height matrices: content-preserving descent and minimal switch connectivity"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 5
deps: [lem-ultra-tight-multisets-admit-column-potentials,
       def-partition-young-diagram-and-conjugate-partition,
       def-e-core-e-quotient-and-e-weight,
       thm-e-core-is-independent-of-the-rim-hook-removal-order]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Matthew Fayers, Core blocks of Ariki–Koike algebras, author manuscript, J. Algebraic Combin. 26 (2007), 47–81"
      url: "https://webspace.maths.qmul.ac.uk/m.fayers/papers/core.pdf"
      locator: "Actually read author PDF pp. 2–24; tight lemma Prop. 2.2/2.3 pp. 12–15, binary switches Prop. 2.4 pp. 15–16, core proof Theorem 3.1/Prop. 3.7 pp. 19–24. The local normalized-height energy argument below replaces the additional weight-theory suppliers."
    - title: "Matthew Fayers, Weights of multipartitions and representations of Ariki–Koike algebras, author manuscript, Adv. Math. 206 (2006), 112–144"
      url: "https://webspace.maths.qmul.ac.uk/m.fayers/papers/weight.pdf"
      locator: "Actually read PDF p. 9 Lemma 2.3 and pp. 11–13 Lemma 3.1/Prop. 3.2/Lemma 3.3. Hub Laplacian is proved locally; no weight nonnegativity supplier is imported."
---

## Statement

Fix finite $e\ge2$, $\ell\ge1$ and integer charges $c_1,\dots,c_\ell$. Give the
nodes of component $a$ the residue $c_a+j-i\pmod e$. Write $C_i$ for the
residue counts, $\delta_i$ for removable minus addable $i$-nodes, and
$m_i:=\#\{a:c_a\equiv i\}$. Then
$$\delta_i=2C_i-C_{i-1}-C_{i+1}-m_i,$$
with both neighbouring terms retained (and counted twice) at $e=2$. Equal hubs
and equal size are together equivalent to equal content. For componentwise
$e$-cores let $b_{ia}$ be the largest charged beta bead on runner $i$ and
$$t_{ia}:=\frac{b_{ia}-i}{e} .$$
Cores of fixed hub and charges correspond exactly to integer matrices with
fixed row sums and column sums $c_a-e$; for two such cores the size difference
is $\frac e2$ times the difference of $\sum t_{ia}^2$. Every nonminimum-size
core admits a finite same-hub core-switch path that never increases size and
ends at strictly smaller size, and every pair of minimum-size cores is
connected by equal-size switches. A switch subtracts $1$ at $(i,a),(j,b)$ and
adds $1$ at $(i,b),(j,a)$; each path switch can be oriented with
$\gamma=t_{ia}-t_{ib}-t_{ja}+t_{jb}\ge2$, giving size change $-e(\gamma-2)$.
Minimum cores exist for every nonempty fixed-hub class.

## Facts & Assumptions

**Given:** Finite $e\ge2$, $\ell\ge1$, integer charges $c_a$, the charged beta
conventions of [[def-e-core-e-quotient-and-e-weight]], and the column-potential
lemma [[lem-ultra-tight-multisets-admit-column-potentials]].

[F1] For a partition $\lambda$ with charge $c$, the beta set
$B=\{\lambda_i+c-i:i\ge1\}$ contains all sufficiently negative integers and no
sufficiently positive integer, and conversely every such set determines a
partition by ordering its elements $\beta_1>\beta_2>\cdots$ and putting
$\lambda_i=\beta_i-c+i$
([[def-partition-young-diagram-and-conjugate-partition]],
[[def-e-core-e-quotient-and-e-weight]]).

[F2] Removing rim hooks and the componentwise $e$-core are independent of the
removal order, and the $e$-weight is an invariant
([[thm-e-core-is-independent-of-the-rim-hook-removal-order]],
[[def-e-core-e-quotient-and-e-weight]]).

[F3] For a finite multiset in $L_\ell=\mathbb Z^\ell/\mathbb Z(1,\dots,1)$
tightness, zero exchanges and ultra-tightness are as in
[[lem-ultra-tight-multisets-admit-column-potentials]], and ultra-tight
multisets are exactly those admitting integer column potentials
([[lem-ultra-tight-multisets-admit-column-potentials]]).

## Proof

**Proof technique:** direct.

**Given:** The charges $c_a$, the components and their beta sets, and the data

of [F1]–[F3].

1.1 Beta sets, bead moves and the rim-hook dictionary. By [F1] a bead move $u\mapsto u-h$ with $u\in B$, $u-h\notin B$ unwraps a rim hook of length $h$ whose foot has residue $u-h+1$ modulo $e$: if $\beta_i=u$ and $\beta_j<u-h<\beta_{j-1}$, the rows $i,\dots,j-1$ change by the boundary between those two beta positions, the lost border strip has $h$ boxes, and its lowest-row leftmost lost column makes the foot content $u-h+1$; reversing the move wraps a hook with foot residue the starting beta position plus one. Moving a bead one position upward on its runner therefore removes an $e$-hook, and packing every runner upward leaves the number of beads relative to the negative reference tail on each runner unchanged; by [F2] the result is the componentwise $e$-core independent of the order. Every $e$-hook contains one node of each residue, so hook removal preserves the hub (the residue-count vector modulo the all-one vector) and subtracts the all-one vector from the residue counts. [F1, F2, algebra]

1.2 The boundary-count identity. Let $C_i$ be the residue counts and $\delta_i$ the number of removable minus addable $i$-nodes. We prove $\delta_i=2C_i-C_{i-1}-C_{i+1}-m_i$ by induction while adjoining nodes to the empty multipartition. The empty multipartition has $C_i=0$ for all $i$ and $\delta_i=-m_i$ (each component contributes one addable first node of its residue $c_a$ in the empty diagram), which gives the identity initially. Adjoining a node of residue $j$ changes the boundary count by $+2$ at $j$ and $-1$ at each of $j-1$ and $j+1$ (counted twice when $e=2$); these changes are read off by recording the occupied and vacant beta positions before and after the corresponding one-position bead move, all other adjacent occupancies cancelling. The right-hand side changes in exactly the same way because $C_j$ increases by $1$ and $C_i$ for $i\ne j$ is unchanged. Induction on the number of nodes gives the identity for every multipartition. [F1, algebra]

1.3 Cores and their height matrices. For a componentwise $e$-core let $b_{ia}$ be the largest bead on runner $i$ ($0\le i<e$) and $t_{ia}=(b_{ia}-i)/e$, so the packed beta set on runner $i$ is $\{i+ek:k\le t_{ia}\}$. Counting beads $\ge-eL$ for large $L$ gives the column sums $\sum_i t_{ia}=c_a-e$. Writing $R_i=\sum_at_{ia}$, the hub satisfies $\delta_i=R_i-R_{i-1}$ for $1\le i<e$ and $\delta_0=R_0-R_{e-1}-\ell$; since $\sum_iR_i=\sum_ac_a-e\ell$ is fixed, equal hub is equivalent to equal row sums. Hence cores of a fixed hub and fixed charges are exactly the integer $e\times\ell$ matrices $T=(t_{ia})$ with fixed row sums $R_i$ and column sums $c_a-e$. [F1, F2, algebra]

1.4 Switches and energy. Let $T$ be an integer $e\times\ell$ matrix with fixed margins, and consider a switch in distinct rows $i,j$ and distinct columns $a,b$, replacing $(t_{ia},t_{ib},t_{ja},t_{jb})$ by $(t_{ia}-1,t_{ib}+1,t_{ja}+1,t_{jb}-1)$; margins are preserved. With $\gamma:=t_{ia}-t_{ib}-t_{ja}+t_{jb}$, the squared-norm changes by $4-2\gamma$: so $\gamma=2$ is a zero-energy switch and $\gamma\ge3$ strictly lowers the energy. Regard the $e$ labelled rows of $T$ as a multiset in $L_\ell=\mathbb Z^\ell/\mathbb Z(1,\dots,1)$; it is tight exactly when $\gamma\le2$ for all choices, and switches with $\gamma=2$ are exactly the zero exchanges of [F3]. [F3, algebra]

2.1 Equal hub and equal size give equal content. If two multipartitions have equal hubs, the difference $d_i$ of their residue counts satisfies $2d_i-d_{i-1}-d_{i+1}=0$ by step 1.2, because the $\delta_i$ and $m_i$ terms are unchanged; hence all first differences $d_i-d_{i-1}$ are equal, and summing them around the cycle makes this common difference $0$, so $d$ is constant. Therefore equal hub and equal size imply equal content, and equal hubs imply sizes congruent modulo $e$. [step 1.2, algebra]

2.2 The size formula. If $T(\kappa),T(\eta)$ are the height matrices of two such cores, then $|\eta|-|\kappa|=\frac e2\Bigl(\sum_{i,a}t_{ia}(\eta)^2-\sum_{i,a}t_{ia}(\kappa)^2\Bigr).$ Indeed, count the beta numbers $\ge-eL$ in a component: their number is $eL+c_a$, the same for both cores, while their sum changes by $\sum_i i\,\Delta t_{ia}+\frac e2\sum_i\Delta(t_{ia}^2+t_{ia})$; from $\beta_j=\lambda_j+c_a-j$ the change in that sum equals the change in the partition size, and summing over $a$ the equal row sums kill $\sum_i i\sum_a\Delta t_{ia}$ while the equal column sums kill the linear $\sum\Delta t_{ia}$ term. In particular the squared-norm difference is even, so the displayed size difference is an integer multiple of $e$. [F1, step 1.3, algebra]

3.1 Ultra-tight rows and the global minimum. If the row multiset is not ultra-tight, a finite sequence of zero switches leads to a non-tight matrix, at which some rows and columns have $\gamma\ge3$, giving a strict descent: every intermediate matrix has the same margins, zero switches preserve core size by step 2.2, and a strict descent lowers core size by $e(\gamma-2)\ge e$. If instead the multiset is ultra-tight, [F3] supplies a column potential $s_a$ with every row of $U=(t_{ia}-s_a)$ having maximum minus minimum at most one. For a fixed row sum such a row minimizes the sum of squares over all integer rows: if two entries differ by at least $2$, transferring one from the larger to the smaller lowers the square sum by at least $2$, and repeated transfers terminate; the minimum is attained exactly by rows whose entries differ by at most one. Column potentials do not affect comparisons of total squared norm between matrices with the same column sums, because $\sum_{i,a}(t_{ia}-s_a)^2=\sum_{i,a}t_{ia}^2-2\sum_as_a\sum_it_{ia}+e\sum_as_a^2 .$ Hence such a $T$ is a global minimum among the matrices of its margins, and conversely a global minimum admits no strict descent after zero switches, so its row multiset is ultra-tight. Starting from any $T$, repeated zero-path and strict-descent steps reach a global minimum, since all matrices represent genuine cores of nonnegative integer size and strict descent lowers that size by at least $e$; minima therefore exist for every nonempty fixed-hub class. [F3, step 1.3, step 2.2, step 1.4, algebra]

4.1 Equal-size connectivity of minima. Let $T,V$ be two global minima with the same margins, and let $s$ be the column potential of $T$ from step 3.1. Every row of $U=T-s$ is balanced, with entries $u_i$ or $u_i+1$; since $V-s$ has the same row sums and the same total energy, each of its rows also attains the row minimum and has entries $u_i$ or $u_i+1$. Subtracting $u_i$ from row $i$ produces two binary $e\times\ell$ matrices $A,B$ with identical row and column sums. If $A\ne B$, the difference $D=A-B$ has entries $0,\pm1$ and zero row and column sums; starting from a $+1$ and alternating a $-1$ in the same row with a $+1$ in the same column produces a shortest alternating cycle with distinct rows $i_0,\dots,i_{t-1}$ and columns $j_0,\dots,j_{t-1}$, where $D_{i_kj_k}=+1$ and $D_{i_kj_{k+1}}=-1$. If $t=2$, switch the rectangle in $A$ to agree with $B$ there. If $t>2$, inspect $A_{i_0j_{t-1}}$ and $B_{i_0j_{t-1}}$: if $A_{i_0j_{t-1}}=0$, switching the rectangle with rows $i_0,i_{t-1}$ and columns $j_0,j_{t-1}$ gives a binary $A'$ with strictly fewer discrepancies from $B$; if $B_{i_0j_{t-1}}=1$, the reverse switch on $B$ gives a binary $B'$ with strictly fewer discrepancies from $A$; if neither holds, $D_{i_0j_{t-1}}=+1$ and a shorter alternating cycle exists, contradicting minimality. Induction on the discrepancy count connects $A$ and $B$ by binary switches, all preserving margins. Lifting these binary switches back to $T$ gives switches with $\gamma=2$, hence equal core size by step 2.2, preserving the hub. [F3, step 3.1, algebra]

5.1 Conclusion. Step 1.2 proves the boundary-count identity $\delta_i=2C_i-C_{i-1}-C_{i+1}-m_i$ with the double edge at $e=2$, and step 2.1 shows that equal hub and equal size are equivalent to equal content. Steps 1.3 and 2.2 identify cores of fixed hub and charges with integer matrices of fixed margins and give the squared-norm size formula; step 3.1 provides a same-hub core-switch path that never increases size and strictly decreases it whenever the core is not of minimum size, with minima existing in every nonempty class; and step 4.1 connects any two minimum-size cores by equal-size switches. These are exactly the finite-$e$ descent and reduced-core connectivity facts consumed by the Lyle–Mathas max-weight argument, proved locally without importing weight nonnegativity or matrix-alignment inputs. [step 3.1, step 2.1, step 4.1] ∎

## Remarks

The energy argument is the normalized replacement for Fayers' weight-theory
proof: the column potential makes the minimal rows balanced, every switch is
scored by $\gamma-2$, and zero exchanges never change the core size, so the
combinatorics of minimal cores reduces to the ultra-tight multiset lemma and
the binary-switch connectivity argument. All steps are finite. No choice
principle is used.
