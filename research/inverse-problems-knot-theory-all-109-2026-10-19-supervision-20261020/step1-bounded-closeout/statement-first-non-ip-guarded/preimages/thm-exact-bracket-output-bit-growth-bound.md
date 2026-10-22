---
id: thm-exact-bracket-output-bit-growth-bound
kind: theorem
title: "Exact bracket output bit-growth bound"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-encoded-diagram-size-and-exact-output
  - alg-kauffman-bracket-state-sum
  - thm-kauffman-bracket-state-sum-procedure-properties
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Choice-free: the state set is finite, each loop-factor expansion is a finite binomial sum, and all coefficient bounds use finite addition."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Louis H. Kauffman, Combinatorial Knot Theory and the Jones Polynomial, arXiv:2204.12104v2, §2"
      url: "https://arxiv.org/pdf/2204.12104v2"
      locator: "§2, bracket state definition and state summation, PDF pp. 6–9."
    - title: "Justin Roberts, Knots Knotes, Edinburgh course notes (1999), §4.3, pp. 24–25"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/knotes.pdf"
      locator: "§4.3, Proposition 4.3.4 and proof by resolving crossings in order."
    - title: "Danny Calegari, Introduction to Knot Theory, University of Chicago course notes (2025), §5.1, pp. 38–40"
      url: "https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf"
      locator: "§5.1, bracket skein definition and unlink values."
verification:
  precheck: pass
---

## Statement

Let $D$ be a nonempty unoriented regular link diagram with $c$ crossings and $m\ge1$ components, and let $\langle D\rangle=\sum_j z_jA^j$ be its exact Kauffman bracket. Its Laurent exponents satisfy $|j|\le 3c+2m-2$, and its signed-magnitude coefficient-bit size, as defined in the encoded diagram size definition, is at most $m+2c+1$. Consequently, a knot diagram ($m=1$) has Laurent degree and coefficient-bit size bounded linearly in $c+1$.

The state-sum algorithm admits a naive exact implementation taking
$O(2^c(c+m+1)^4)$ elementary bit steps in the following model. Its typed
input gives $c$ and the number $u$ of crossingless components in
self-delimiting binary: each number is encoded by $b$ ones, a zero, and its
$b$ ordinary binary digits, with $b\ge1$ the number of those digits.
These fields are followed by the edge-pairing table on the $4c$
endpoints indexed by crossing and local port. Its entries are ordered by
endpoint index and each uses $\max(1,\lceil\log_2(4c+1)\rceil)$ bits.
At each crossing the ports are northwest, northeast,
southeast, southwest in the bracket's fixed local chart; the two smoothing
pairings are therefore fixed pairs of port indices. The table is assumed to
be the incidence data of the given diagram. Polynomial arithmetic uses dense
arrays of signed binary integer coefficients, and one tape-cell read, write,
or head move on a fixed finite number of binary work tapes costs one step.
For knots this bound is $O(2^c(c+1)^4)$. It is a bound for this explicit
indexed implementation, not for arbitrary black-box polynomial operations.
Constructing the indexed input from an arbitrary literal code of length $L$,
reading other labels or padding, and processing geometric coordinates are
outside this bound.

## Statement references

[[def-encoded-diagram-size-and-exact-output]]

[[alg-kauffman-bracket-state-sum]]

[[thm-kauffman-bracket-state-sum-procedure-properties]]

[Kauffman, *Combinatorial Knot Theory and the Jones Polynomial* (2022), §2](https://arxiv.org/pdf/2204.12104v2)

[Roberts, *Knots Knotes* (1999), §4.3](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/knotes.pdf)

[Calegari, *Introduction to Knot Theory* (2025), §5.1](https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf)

## Facts & Assumptions

**Given:** A nonempty unoriented regular link diagram $D$ with $c$ crossings and $m\ge1$ components.

[F1] [[def-encoded-diagram-size-and-exact-output]]: $c$ is the crossing count, $m$ is the component count, and a Laurent coefficient $z$ has signed-magnitude bit length $1+\lceil\log_2(|z|+1)\rceil$ when $z\ne0$.

[F2] [[alg-kauffman-bracket-state-sum]]: the bracket term of a state $S$ is $A^{a(S)-b(S)}\delta^{|S|-1}$ with $\delta=-A^2-A^{-2}$; $a(S)+b(S)=c$, and $|S|$ is the number of circles after smoothing.

[F3] [[thm-kauffman-bracket-state-sum-procedure-properties]]: the state-sum procedure visits exactly the $2^c$ maps from the crossing set to $\{A,B\}$ and returns the displayed sum.

## Proof

1.1 The state set has exactly $2^c$ elements by [F3]. A complete smoothing starts with $m$ circles. At each crossing the four local endpoints lie on one or two current circles, and either smoothing reconnects them into one or two circles. Thus the circle count increases by at most one at each of the $c$ smoothings. Every state has $1\le |S|\le m+c$. [F2, F3, construct]

2.1 For a fixed state, put $r=|S|-1$, so $0\le r\le m+c-1$. The binomial theorem gives $\delta^r=(-1)^r\sum_{k=0}^r\binom{r}{k}A^{2r-4k}$. These exponents are distinct, so its coefficient l1 norm is $\sum_{k=0}^r\binom{r}{k}=2^r$; multiplication by the monomial $A^{a(S)-b(S)}$ only shifts the exponents. [F2, step 1.1, algebra]

2.2 Since $a(S)+b(S)=c$, one has $|a(S)-b(S)|\le c$. The exponents in $\delta^r$ lie between $-2r$ and $2r$. Using $r\le m+c-1$, every exponent in every state term, and thus in the sum, has absolute value at most $c+2(m+c-1)=3c+2m-2$. [F2, step 1.1, algebra]

2.3 Put $q=c+m+1\ge2$. Represent a crossing endpoint by an integer from $1$ to $4c$, grouped into four successive ports at each crossing, and write $\alpha$ for the supplied edge-pairing involution. For a state, let $\beta$ pair the two left and two right ports for A, or the two top and two bottom ports for B. The multigraph on the $4c$ endpoints with one $\alpha$-edge and one $\beta$-edge at every vertex is two-regular, allowing parallel edges. Each connected component follows one smoothed circle, and the $u$ supplied crossingless components add $u$ further circles. Thus a traversal marking a vertex when first queued computes $|S|$ exactly. The same traversal, with the opposite ports paired instead of smoothing ports, computes the original component count $m$; perform it once initially and then compute $q$ for allocation. Use binary counters and linear scans for all table and mark lookups: there are $O(q)$ endpoint visits, each using a bounded number of scans of $O(q)$ records with $O(\log q)$ index bits. Even with a work-tape queue or stack scanned linearly, each visit costs $O(q^2)$ bit steps, so tracing costs $O(q^3)$. Computing $a(S)-b(S)$ and adding $u$ use counters of $O(\log q)$ bits and fit this bound. Enumerate the states with a $c$-bit binary counter, making exactly $2^c$ visits; the $c=0$ case is one empty mask with $|S|=u=m$. Reading the stated input takes $O(q\log q)$ steps and is included. [F2, F3, step 1.1, construct]

3.1 Summing over all $2^c$ states, the l1 norm of the final coefficient sequence is at most the sum of the state-term l1 norms, hence at most $2^c2^{m+c-1}=2^{m+2c-1}$. Every individual coefficient therefore has absolute value at most $2^{m+2c-1}$. [F3, step 2.1, algebra]

4.1 Let $M=m+2c\ge1$. By step 3.1, a nonzero coefficient $z_j$ satisfies $|z_j|\le2^{M-1}$, so $|z_j|+1\le2^M$ and $\ell_{\mathbb Z}(z_j)=1+\lceil\log_2(|z_j|+1)\rceil\le M+1=m+2c+1$. The support lies in at most $6c+4m-3$ integer exponents by step 2.2, so storing the exact polynomial as a dense coefficient array takes $O((c+m)^2)$ bits. For a knot, $m=1$, giving degree at most $3c$ and coefficient-bit size at most $2c+2$, both linear in $c+1$. [F1, step 3.1, step 2.2, algebra]

4.2 Use coefficient slots for every exponent from $-3q$ to $3q$, padded with zeros, and use $2q+3$ bits per signed-magnitude slot, plus $O(\log q)$-bit position counters. These arrays have $O(q^2)$ tape cells. Every partial accumulator, not just the final sum, has coefficient l1 norm at most $2^c2^{m+c-1}$: apply the triangle inequality in step 3.1 to the subset of states already processed. Hence its coefficients fit the chosen width, since $m+2c-1<2q$. For one state compute $r=|S|-1$ and start with the array for $P_0=1$. For $k=0,\ldots,r-1$, form a new array by the exact recurrence $(P_{k+1})_j=-(P_k)_{j-2}-(P_k)_{j+2}$, reading absent coefficients as zero. This is multiplication by $\delta$, so $P_r=\delta^r$. All intermediate powers have degree at most $2r<2q$ and l1 norm at most $2^r\le2^{m+c-1}$, so they too fit the arrays and widths. [F2, step 1.1, step 2.1, step 2.2, step 3.1, algebra, construct]

5.1 Here is a direct tape bound without unit-cost access or integer arithmetic. To retrieve or write a coefficient, scan an entire array of $O(q)$ slots of $O(q)$ bits, advancing a binary slot counter and comparing it with the desired index. The counter work is $O(q\log q)$ and the scanned data have $O(q^2)$ bits, so one lookup or write costs $O(q^2)$ bit steps. Addition or subtraction of two signed integers in these slots is performed by sign comparison, a linear magnitude comparison, and the usual binary carry or borrow scan, costing $O(q)$ steps; the extra carry bit fits the reserved width. For each of the $O(q)$ destination coefficients in the recurrence of step 4.2, make at most two source lookups, one such addition, and one destination write. A multiplication by $\delta$ therefore costs $O(q^3)$ steps. There are $r<q$ repetitions, giving $O(q^4)$ work. Shift this state polynomial by $a(S)-b(S)$ and add it to the accumulator coefficient by coefficient using the same linear scans; the state shift has magnitude at most $c$, its support stays inside the slots by step 2.2, and this accumulation costs $O(q^3)$. Clearing arrays, moving the state counter, and loop-index bookkeeping are bounded by the same charges. [step 2.2, step 2.3, step 4.2, construct, algebra]

6.1 Summing the per-state bounds in steps 2.3, 4.2, and 5.1 over exactly $2^c$ visits gives $O(2^cq^4)$ bit steps. The initial component-count traversal costs $O(q^3)$ by step 2.3; coefficient-array initialization and writing the dense exact output cost $O(q^2)$. These are absorbed because $2^c\ge1$ and $q\ge2$. The loop tracing and arithmetic realize exactly the state terms in [F2], so [F3] identifies the result with the bracket. When $c=0$, the single state computes $\delta^{m-1}$ with the same bound; when $m=1$, $q=c+2$ gives $O(2^c(c+1)^4)$. All choices and operations are finite. The bit-cost argument concerns only the specified indexed table and elementary binary operations, so it makes no claim about parsing arbitrary code strings of length $L$ or the cost of an unspecified arithmetic library. [F1, F2, F3, step 4.1, step 2.3, step 4.2, step 5.1, algebra] ∎

## Proof references

[[def-encoded-diagram-size-and-exact-output]]

[[alg-kauffman-bracket-state-sum]]

[[thm-kauffman-bracket-state-sum-procedure-properties]]
