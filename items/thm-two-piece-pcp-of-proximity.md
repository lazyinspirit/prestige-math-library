---
id: thm-two-piece-pcp-of-proximity
kind: theorem
title: "A two-piece constant-query PCP of proximity"
status: draft
origin: pipeline
deps:
  - def-pcp-of-proximity-and-concatenation-test
  - def-boolean-circuit-size-depth-fanin-and-basis
  - def-linearity-test
  - def-quadratic-equation-instance-and-tensor-code-oracles
  - def-self-correction-of-a-noisy-linear-function
  - def-walsh-hadamard-encoding-and-relative-distance
  - def-assignment-tester-and-rejection-ratio
  - lem-blr-testing-supplies-nearby-linear-decoders
  - lem-boolean-circuits-reduce-to-quadratic-equation-systems-with-a-fixed-input-prefix
  - lem-concatenation-test-enforces-a-shared-prefix
  - lem-tensor-consistency-test-soundness
  - lem-random-subsum-verifies-all-quadratic-equations-with-constant-error
proof_strategy: constructive
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §18.4.3, concatenation test and Corollary 18.26, printed pp. 368–369 (PDF pp. 384–385)"
      url: https://theory.cs.princeton.edu/complexity/book.pdf
verification:
  precheck: pass
---

## Statement

Let $C$ be an explicit topologically ordered Boolean circuit over constants,
NOT, AND and OR, with $s$ input wires and $m$ non-input nodes. Let $X_1,X_2$
be disjoint ordered lists of input wires of lengths $n_1,n_2$, put
$n=n_1+n_2$ and $N=s+m\ge1$, and call $(a_1,a_2)$ satisfying when it extends
to an input on which $C$ outputs one. There is a deterministic uniform
construction of a nonadaptive two-piece proximity verifier with external
tables $\pi_i:\mathbb F_2^{n_i}\to\mathbb F_2$ and private tables
$F:\mathbb F_2^N\to\mathbb F_2$ and
$G:\mathbb F_2^{N^2}\to\mathbb F_2$. It makes at most six bit queries and at
most $3+5N^2$ unbiased random-bit choices. Its total proof length is
$$2^{n_1}+2^{n_2}+2^N+2^{N^2}\le4\cdot2^{N^2}.$$
It has perfect completeness, and rejection probability below
$\eta=1/800$ implies that both external tables are within relative distance
$\delta_0=1/100$ of the Walsh–Hadamard encodings of one satisfying named pair.

For the combined named list $X_1\Vert X_2$, adding comparisons with the
two-query self-correctors of the corresponding external tables at unit vectors
gives an explicit Boolean assignment tester of arity at most six and rejection
ratio $\rho_0=1/1000$, including the empty accepted-set and zero-named-input
conventions. Its finite constraint list can be enumerated with at most
$2^{7N^2+4}$ constraints.

## Facts & Assumptions

**Given:** A circuit and two fixed disjoint ordered lists of named input wires,
with all verifier proofs fixed before its random tape is sampled.

[F1] The input variables can be ordered with the named coordinates first, and
the fixed-prefix QUADEQ reduction has $N=s+m$ variables and $m+1$ equations;
extending a named prefix to a solution is equivalent to completing the circuit
input to one on which the output is one.
([[lem-boolean-circuits-reduce-to-quadratic-equation-systems-with-a-fixed-input-prefix]])

[F2] A QUADEQ solution $w$ satisfies every equation
$A_j\cdot(w\otimes w)=b_j$ in row-major coordinates.
([[def-quadratic-equation-instance-and-tensor-code-oracles]])

[F3] $\operatorname{WH}_k(v)(r)=v\cdot r$, including the singleton zero table
at dimension zero. ([[def-walsh-hadamard-encoding-and-relative-distance]])

[F14] The intended QUADEQ oracle tables have lengths $2^N$ and $2^{N^2}$,
with the vector table preceding the tensor table.
([[def-quadratic-equation-instance-and-tensor-code-oracles]])

[F4] The BLR family samples independent uniform $x,y$, queries
$h(x),h(y),h(x+y)$, and accepts exactly when $h(x)+h(y)=h(x+y)$; it uses
$2k$ random bits and three calls for a table on $\mathbb F_2^k$.
([[def-linearity-test]])

[F5] If a table's BLR rejection probability is below $1/4$, the lemma's
lexicographically first decoder is the unique Walsh–Hadamard word within
distance less than $1/4$, and its distance is at most that rejection
probability. ([[lem-blr-testing-supplies-nearby-linear-decoders]])

[F6] For fixed tables near decoded words $u,V$, the six-query tensor test
rejects when $V\ne u\otimes u$ with probability at least
$1/4-4\delta_F-2\delta_G$.
([[lem-tensor-consistency-test-soundness]])

[F7] For a decoded vector $u$ failing a QUADEQ equation and a table $G$ at
distance $\delta_G$ from $\operatorname{WH}_{N^2}(u\otimes u)$, the
nonadaptive two-query equation test rejects with probability at least
$1/2-2\delta_G$ and uses $m+1+N^2$ random bits.
([[lem-random-subsum-verifies-all-quadratic-equations-with-constant-error]])

[F8] For fixed tables near decoded words whose named slices differ, the
four-query corrected slice test rejects with probability at least
$1/2-2\delta_1-2\delta_2$; it is nonadaptive and counts repeated locations.
([[lem-concatenation-test-enforces-a-shared-prefix]])

[F9] A two-piece proximity verifier uses fixed external tables on
$\mathbb F_2^{n_i}$; its soundness conclusion is conditional on rejection
strictly below $\eta$, and its pair is satisfying when it extends to a full
circuit input accepted by $C$. ([[def-pcp-of-proximity-and-concatenation-test]])

[F10] An assignment tester's variables include its named input bits, and its
soundness compares every labeling's violated-constraint fraction with
$\rho$ times relative distance to the accepted named inputs.
([[def-assignment-tester-and-rejection-ratio]])

[F11] A Boolean circuit is a finite acyclic graph of input wires, constants,
NOT gates, two-input AND and OR gates, with one designated output evaluated
in topological order. ([[def-boolean-circuit-size-depth-fanin-and-basis]])

[F12] The two-query corrector at request $q$ chooses uniform $y$ and returns
$h(y)+h(q+y)$, with repeated locations permitted.
([[def-self-correction-of-a-noisy-linear-function]])

[F13] A finite constraint list may contain ordered tuples with repeated
variables, and every tuple carries an explicit relation.
([[def-assignment-tester-and-rejection-ratio]])

[F15] The distance to an empty accepted set is defined as one; when there are
zero named inputs the input cube is a singleton.
([[def-assignment-tester-and-rejection-ratio]])

## Proof

**Given:** Fix $C,X_1,X_2$ and then fix any proof tuple before sampling
verifier randomness.


1.1 Deterministically reorder the primary input list as $X_1\Vert X_2\Vert(\text{remaining inputs})$; this relabeling preserves circuit evaluation. Apply [F1] with named prefix length $n=n_1+n_2$, obtaining a QUADEQ instance with $N=s+m$ variables and $M=m+1$ equations. Its first $n_1$ variables are $X_1$, and the next $n_2$ are $X_2$, so the coordinate injections are $j_1(r)=(r,0^{N-n_1})$ and $j_2(r)=(0^{n_1},r,0^{N-n})$. The two designated slices are disjoint and have the prescribed order. [F1, F11, given, construct]

1.2 Split the fixed proof into external tables $\pi_1,\pi_2$ and private tables $F,G$ of lengths $2^{n_1},2^{n_2},2^N,2^{N^2}$. Choose uniformly among eight families: BLR on each table, the six-query tensor test, the two-query equation test, and the four-query corrected slice test for each $j_i$. Each family samples only its own independent uniform coins, and every query location is computed before any answer is read. [F2, F3, F4, F6, F7, F8, F9, F14, given, construct]

1.3 If $(a_1,a_2)$ is satisfying, choose a completion of the other input wires on which $C$ outputs one. By [F1] it gives a QUADEQ solution $w$. Set $\pi_i=\operatorname{WH}_{n_i}(a_i)$, $F=\operatorname{WH}_N(w)$, and $G=\operatorname{WH}_{N^2}(w\otimes w)$. Every BLR family accepts because its table is linear. The tensor family accepts since $(w\cdot r)(w\cdot s)=(w\otimes w)\cdot(r\otimes s)$, and each equation family accepts since $w$ solves every equation. The named slices of $w$ are $a_i$, so the corrected slice tests compare equal linear values on every tape. If $n_i=0$, both requests are zero and both corrected values are zero. Thus all eight families accept on every tape. [F1, F2, F3, F4, F6, F7, F8, F12, given, choose, algebra]

2.1 The branch coin counts are $2n_1,2n_2,2N,2N^2,4N+N^2,M+N^2,2n_1+N,2n_2+N$; three selector bits choose the branch. Since $n_i\le N$, $M=m+1\le N+1$, and $N\ge1$, every branch uses at most $5N^2$ bits, so the verifier uses at most $3+5N^2$ bits and at most six queries. Its proof length is the sum of the four table lengths in step 1.2 and is at most $4\cdot2^{N^2}$ because $n_i\le N\le N^2$. The circuit reduction, sample addresses, tensor products, and equation subsums are computable in time polynomial in the explicit circuit description, giving a deterministic uniform construction. [F1, F2, F4, F6, F7, F8, F14, step 1.2, algebra]

2.2 For an arbitrary fixed proof, let $\epsilon_j$ be the rejection probability of each of the eight families and $R=\frac18\sum_{j=1}^8\epsilon_j$ the verifier's rejection probability. If $R<1/800$, then every $\epsilon_j\le8R<1/100$. By [F5] the four BLR tables have deterministically selected unique decoders $a_i\in\mathbb F_2^{n_i}$, $w\in\mathbb F_2^N$, and $v\in\mathbb F_2^{N^2}$, each at distance at most its BLR rejection rate and therefore below $1/100$. Denote these distances by $\delta_{\pi_1},\delta_{\pi_2},\delta_F,\delta_G$, and reshape $v$ in row-major order as a matrix $V$. [F4, F5, step 1.2, given, construct, algebra]

2.3 Make variables from the raw named input bits and every coordinate of $\pi_1,\pi_2,F,G$. For each random tape in each core family, list the ordered tuple of queried table variables with the Boolean relation that accepts exactly the answers accepted by that test. The relations are explicit: BLR accepts $b_1+b_2=b_3$; the tensor test accepts $q_1+q_2=(p_1+p_2)(p_3+p_4)$ on ordered answers $p_1,p_2,p_3,p_4,q_1,q_2$; the equation test accepts when the queried sum equals its fixed $b(z)$; and a slice test accepts when its corrected sums agree. Repeated query locations yield repeated variables, allowed by [F13]. If $n>0$, add comparisons indexed by each named coordinate $i$ and each $t\in\mathbb F_2^L$, $L=\max(n_1,n_2)$: take the first $n_i$ coordinates of $t$ as $y$ in the piece containing $i$, and use the tuple $(x_i,\pi_i(y),\pi_i(y+e_i))$ with relation $x_i=\pi_i(y)+\pi_i(y+e_i)$ from [F12]. This comparison has arity three. [F4, F6, F7, F8, F9, F10, F12, F13, step 1.2, given, construct]

3.1 If $V\ne w\otimes w$, [F6] gives tensor-family rejection at least $\frac14-4\delta_F-2\delta_G>\frac14-\frac6{100}=\frac{19}{100}$, hence $R>19/800>1/800$, a contradiction. Thus $V=w\otimes w$. If $w$ failed any QUADEQ equation, [F7] gives equation-family rejection at least $\frac12-2\delta_G>\frac{48}{100}$ and hence $R>48/800>1/800$, also impossible. Thus $w$ solves the reduced instance. [F2, F6, F7, step 2.2, algebra]

3.2 Let $K$ be the maximum coin count of a core family and $D=n2^L$ when $n>0$. The comparison list has $D$ constraints, and each core family has $2^{c_j}$ tapes with $c_j\le K$. For $n>0$, duplicate rows until each of the nine families has $P=D2^K$ constraints; $P/2^{c_j}$ and $P/D$ are integers. For $n=0$, omit comparisons and duplicate the eight core families to $P=2^K$ constraints each. Therefore the violated fraction is the average of the core-family rejection rates and, when present, the comparison rejection rate. If $n>0$, $D=n2^L$ and $L\le n\le N$ imply $\log_2D\le\log_2n+L\le2N^2$; step 2.1 gives $K\le5N^2$. Hence $P\le2^{7N^2}$ and there are at most $9\cdot2^{7N^2}\le2^{7N^2+4}$ constraints. If $n=0$, there are at most $8\cdot2^{5N^2}\le2^{7N^2+4}$. Direct enumeration takes time polynomial in the output length. [F10, step 2.1, step 2.3, algebra, construct]

3.3 If $x$ is accepted by $C$, use the satisfying completion and exact tables from step 1.3 as the auxiliary labeling. Every core constraint accepts. For each named coordinate $i$, $\pi_i(y)+\pi_i(y+e_i)=a_i\cdot e_i=x_i$ for every $y$ by [F3, F12], so every comparison accepts and the tester has perfect completeness. [F3, F9, F10, F12, step 1.3, step 2.3, algebra]

4.1 If either decoded external word $a_i$ differed from the corresponding slice of $w$, [F8] gives that slice family's rejection at least $\frac12-2\delta_{\pi_i}-2\delta_F>\frac12-\frac4{100}=\frac{46}{100}$, hence $R>46/800>1/800$, impossible. Each $a_i$ therefore equals its designated slice. By [F1] the pair is satisfying, and by [F5] $\operatorname{dist}(\pi_i,\operatorname{WH}_{n_i}(a_i))<1/100$ for each $i$. This proves proximity soundness with $\eta=1/800$ and $\delta_0=1/100$; if no satisfying pair exists, every fixed proof has rejection at least $1/800$. [F1, F5, F8, step 2.2, step 3.1, algebra]

5.1 Suppose $n>0$, fix any raw named input $x$ and any auxiliary labeling, and let $R$ be the rejection rate of its eight core families. If $R\ge1/800$, the nine-family system rejects at least $\frac89R\ge\frac1{900}>\frac1{1000}\delta(x,\operatorname{SAT}(C))$, since the defined distance is at most one by [F15]. Otherwise step 4.1 supplies a satisfying pair $a$ with each external table at distance below $1/100$ from its Walsh–Hadamard word. Put $d=|\{i:x_i\ne a_i\}|/n$. For a mismatched coordinate, the two queried locations $y,y+e_i$ are each uniform in their piece's mask space, so each hits a table-error position with probability $\delta_{\pi_i}<1/100$. By [F3, F12] and a union bound, the corrector at $e_i$ returns $a_i$ with probability greater than $1-2/100=49/50$, and the comparison-family rejection is at least $(49/50)d$. The full system rejects with probability at least $(49/450)d\ge(1/1000)\delta(x,\operatorname{SAT}(C))$, since $d\ge\delta(x,\operatorname{SAT}(C))$. If the accepted set is empty, the low-$R$ case is impossible by step 4.1, so the high-$R$ case proves soundness using [F15]. For $n=1$, the unique named coordinate receives equal weight across its $2^L$ tapes, so the same estimate holds. [F3, F9, F10, F12, F15, step 4.1, step 2.3, step 3.2, algebra, cases]

5.2 If $n=0$, there is one raw named input. If $C$ accepts it, the distance to the accepted set is zero. Otherwise the accepted set is empty by [F15], and step 4.1 implies every proof tuple has core rejection at least $1/800$; the eight-family system therefore has violated fraction at least $1/800>1/1000$. A piece with $n_i=0$ contributes no comparison coordinates; its table domain is a singleton and its corrected value at zero is zero, as in step 1.3. A valid circuit has $N\ge1$ because it has a designated output wire, so no separate $N=0$ verifier case is needed. [F9, F10, F15, step 4.1, step 3.2, algebra, cases]

6.1 The eight-family verifier satisfies the claimed proximity completeness, soundness, query, proof-length, and randomness bounds; the finite constraint construction has the named variables, explicit Boolean relations, arity at most six, perfect completeness, and rejection-ratio inequality for every named input and auxiliary labeling. This proves both assertions. [step 2.1, step 4.1, step 3.2, step 3.3, step 5.1, step 5.2, algebra, discharge-construct] ∎

## Remarks

Arora–Barak Corollary 18.26 states the two-piece proximity result when the
pieces concatenate to a satisfying full circuit input; its soundness premise
is acceptance probability at least $1/2$, and the text says that its proof is
similar to Corollary 18.25 without giving the details. The named-sublist
extension, the constants $1/800$ and $1/1000$, and the equal-sized constraint
construction above are proved here from the local test lemmas.
No axiom of choice is used: each decoder is selected by the lexicographic
rule in [F5], and a satisfying completion is chosen only for the fixed pair
in question.
