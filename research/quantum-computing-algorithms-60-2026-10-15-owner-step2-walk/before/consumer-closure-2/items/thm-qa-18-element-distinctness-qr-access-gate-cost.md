---
id: thm-qa-18-element-distinctness-qr-access-gate-cost
kind: theorem
title: "Element-distinctness gate cost in the QRAM model"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 17
deps:
  - thm-qa-18-element-distinctness-query-cost
  - thm-qa-18-reversible-search-cost
  - thm-qa-phase-estimation-access-cost
  - def-qa-18-random-access-gate-model
  - def-qa-18-element-distinctness-johnson-walk
  - def-qa-18-canonical-skip-list-for-element-distinctness
  - def-qa-17-walk-access-model
  - def-qc-coherent-function-oracle
  - def-boolean-circuit-size-depth-fanin-and-basis
  - alg-qc-reversible-embedding
  - thm-qc-reversible-embedding-cost
  - thm-qc-reversible-embedding-parallel-depth
  - def-qc-elementary-circuit-resources
  - def-qc-toffoli-and-fredkin
  - thm-existence-of-finite-fields
  - cor-irreducible-polynomials-exist-over-finite-fields-in-every-degree
  - thm-qc-projective-measurement-outcome-law
  - cor-triangle-inequality-for-inner-product-norm
  - lem-reverse-triangle-inequality-in-a-normed-space
justified_by: []
proof_strategy: direct
axiom_use: "None; hash families are finite polynomial families and all data bounds count finite operations."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Andris Ambainis, Quantum walk algorithm for element distinctness, §6.2 and Lemmas 5–6"
      url: "https://arxiv.org/pdf/quant-ph/0311001"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 20, §§20.1–20.3"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 8, §8.3.2"
      url: "https://arxiv.org/pdf/1907.09415"
---
## Statement

Fix an encoding of values in $[M]$ by $b=O(\log(M+1))$ bits and take the parameter $r$ from [[thm-qa-18-element-distinctness-query-cost]]. For $N\ge4096$, the finite canonical storage of [[def-qa-18-canonical-skip-list-for-element-distinctness]] has hash-table lookup, rank/select, complement-unranking, value insertion/deletion, and collision-check subroutines with $\operatorname{polylog}(N+M)$ QRAM gate-time when their bounded searches do not overrun; the table uses $O(N^{2/3}\log^3(N+M))$ memory bits. A fixed threshold $N_0\ge4096$ is chosen below; the search uses this storage for $N\ge N_0$ and direct value comparison for the finite range $4\le N<N_0$.

For $N\ge N_0$, let $G_{\rm subset}$ be the gate-time of the supplied uniform $r$-subset preparation. Assume an explicit compatible realization of the controlled/inverse Johnson-walk access used by reversible finding exists on this canonical storage, uses the local operations proved below, and preserves the hash seed. Let $G_{\rm row}$ be the maximum gate-time of one charged walk-update unit in that realization, including the forward, inverse, controlled, reflection, and swap capabilities supplied for the lazy Johnson walk in [[def-qa-17-walk-access-model]] and any encoding conversion. Under this explicit interface assumption, the complete search has value-query cost $O(N^{2/3})$ and gate-time

$$G_{\rm subset}+O\!\left(r\operatorname{polylog}(N+M)+N^{2/3}\bigl(G_{\rm row}+\operatorname{polylog}(N+M)\bigr)\right).$$

The local storage operations are proved below; this item does not construct the compatible full row-access circuit or derive polylogarithmic bounds for $G_{\rm subset}$ and $G_{\rm row}$. The unconditional $O(N^{2/3}\operatorname{polylog}(N+M))$ gate-time conclusion requires $G_{\rm subset}=O(N^{2/3}\operatorname{polylog}(N+M))$ and $G_{\rm row}=O(\operatorname{polylog}(N+M))$.

The phase-estimation part of this gate-time profile uses the ideal continuous-rotation submodel of [[thm-qa-phase-estimation-access-cost]], where each exact controlled phase is one gate occurrence. Any synthesis overhead for a fixed finite gate alphabet is a separate cost.

For a Boolean value circuit with $G$ non-input gates, $E$ input-port uses, $D$ explicit layers, maximum per-wire layer fanout $F$, and $m$ output bits, one reversible XOR value query uses at most $6G+4E+m$ ordinary gate occurrences and has the explicit schedule depth

$$2D\bigl(2\lceil\log_2(F+1)\rceil+3\bigr)+2\lceil\log_2(m+1)\rceil+1.$$

This is the written depth of the supplied schedule under [[def-qc-elementary-circuit-resources]]. It does not claim minimum-layer depth or include the other ordinary gates used by the walk data structure.

## Facts & Assumptions

**Given:** The query search and its marked-subset promise, the lazy Johnson update, the stated finite QRAM gate, and the explicit reversible Boolean compiler.

[F1] [[thm-qa-18-element-distinctness-query-cost]]: for $r=\Theta(N^{2/3})$, the walk has $\delta=N/[2r(N-r)]$, marked mass at least $\varepsilon=r(r-1)/[N(N-1)]$, stored-vertex setup value-query cost $r$, and elementary replacement-update value-query cost $2$; its controlled row/walk construction has constant value-query cost.

[F2] [[def-qa-18-element-distinctness-johnson-walk]]: a vertex stores an $r$-subset and its values; a neighbor replaces one selected index by one unselected index; its marked predicate is the presence of an equal-value pair.

[F3] [[def-qa-18-random-access-gate-model]]: an addressed call swaps the target bit with the addressed memory bit, is its own inverse, and costs one QRAM gate-time unit.

[F4] [[def-qc-coherent-function-oracle]]: a value query is the supplied reversible action $|i,z\rangle\mapsto|i,z\oplus\operatorname{enc}(f(i))\rangle$, so the same oracle erases a stored value.

[F5] [[def-boolean-circuit-size-depth-fanin-and-basis]]: $G,E,D,F,m$ denote the Boolean circuit's gate count, input-port multiplicity, explicit depth, per-layer fanout, and output width.

[F6] [[thm-qc-reversible-embedding-cost]]: compute-copy-reverse implements one clean XOR query using at most $6G+4E+m$ gate occurrences.

[F7] [[thm-qc-reversible-embedding-parallel-depth]]: a fanout-aware explicit schedule has depth $2D(2L+3)+2L_m+1$ for $L=\lceil\log_2(F+1)\rceil$ and $L_m=\lceil\log_2(m+1)\rceil$.

[F8] [[def-qc-elementary-circuit-resources]]: size counts gate occurrences; depth in this profile is the number of written layers; query and QRAM costs are distinct coordinates.

[F9] [[thm-existence-of-finite-fields]] and [[cor-irreducible-polynomials-exist-over-finite-fields-in-every-degree]]: for every $k\ge1$ there is a field of order $2^k$ with a polynomial-basis representation from an irreducible degree-$k$ polynomial.

[F10] [[def-qc-toffoli-and-fredkin]]: a Fredkin gate swaps its two targets exactly when its control is one.

[F11] [[thm-qa-18-reversible-search-cost]]: with supplied gap and marked-mass lower bounds $\delta_0,\varepsilon_0$, assigning unit cost to each controlled walk update and mark check bounds their number by $S_0+O(\varepsilon_0^{-1/2}(\delta_0^{-1/2}+1))$.

[F12] [[def-qa-18-canonical-skip-list-for-element-distinctness]]: hash buckets store stable input-index identifiers; two nested skip lists store index and $(f(i),i)$ orders with rank spans; each level is determined by independent promotion bits; a capped search tests at most $D$ entries per level.

[F13] [[thm-qc-projective-measurement-outcome-law]]: the probability of a projective outcome with projection $\Pi$ on unit state $\psi$ is $\|\Pi\psi\|^2$.

[F14] [[thm-qa-phase-estimation-access-cost]]: an $m$-bit phase-estimation run has $O(m^2)$ phase-register and inverse-QFT gate occurrences in the ideal continuous-rotation submodel; each run uses at least one controlled-walk query.

[F15] [[cor-triangle-inequality-for-inner-product-norm]]: the inner-product norm satisfies the triangle inequality.

[F16] [[lem-reverse-triangle-inequality-in-a-normed-space]]: $|\|u\|-\|v\||\le\|u-v\|$.

## Proof

1.1 For $N\ge4096$, the clamp in [F1] is $r=\lfloor N^{2/3}\rfloor$. Set $m=\lceil\log_2(N+2)\rceil$, $H=\lceil\log_2N\rceil$, $d=C=16m$, $R=2^{\lceil\log_2r\rceil}$, and $q=2^H$. The function $(\log_2(x+2)+1)/x^{2/3}$ decreases for $x\ge4096$, because its logarithmic derivative is $1/((x+2)\ln2(\log_2(x+2)+1))-2/(3x)<0$; indeed $2(x+2)\ln2(\log_2(x+2)+1)>3x$ there. Since $\log_2(4098)<13$, this gives $d\le16(\log_2(N+2)+1)\le224N^{2/3}/256=7N^{2/3}/8$. Also $r\ge N^{2/3}-1\ge255N^{2/3}/256$, so $d\le r\le N/2$ and $d\le N\le q$. Finally $r\le R<2r\le N$. By [F9], fix a polynomial-basis representation of $\mathbb F_q$; its irreducible polynomial is a finite hardwired setup description whose generation time is separate. [F1, F9, given, algebra]

1.2 Choose $H+1$ independent uniform coefficient vectors in $\mathbb F_q^d$ and use them for $p_{-1},p_0,\ldots,p_{H-1}$ in [F12]. For any $t\le d$ distinct addresses, the first $t$ columns of their Vandermonde evaluation matrix have determinant $\prod_{a<b}(x_b-x_a)\ne0$, so the evaluations are uniform on $\mathbb F_q^t$. Thus the bucket labels are $d$-wise independent and uniform in $[R]$, and each promotion-bit family is $d$-wise independent and fair. Preparing the coefficient strings uniformly with Hadamards uses $(H+1)dH=O(\log^3N)$ seed bits. [F9, F12, step 1.1, algebra]

2.1 For fixed $S$ and seed, place each $(i,f(i))$ in its hash bucket and build the two canonical lists of [F12]. Pad the $r$ value keys with sentinels to the next power of two and run a fixed bitonic sorting network, which has $O(r\log^2r)$ compare-exchanges. Retain each comparison bit, copy the sorted keys into the list records, then reverse the network to erase the comparison bits; this is a reversible compute-copy-reverse construction. A scan of the sorted lists computes all level links and spans in $O(rH)$ writes and computes the collision counter from the equal-value runs. If an insertion would exceed a bucket's $C$ slots, use the fixed overflow sentinel of [F12]. The resulting storage is a deterministic function of $(S,\text{seed},f|_S)$, so it is independent of the history of the walk. [F2, F3, F12, construct]

2.2 The index-list spans select the $t$-th member of $S$ and compute $|S\cap[ x ]|$ by one bounded skip-list search. Define $g(x)=x-|S\cap[x]|$ for $0\le x\le N$, where $[x]=\{1,\ldots,x\}$. It is nondecreasing and increases by one exactly at an unselected index. Binary search for the least $x$ with $g(x)\ge t+1$ therefore gives the $t$-th element of $[N]\setminus S$ and uses $O(\log N)$ rank searches. Each list search has at most $D$ forward entries per level, and each stable node identifier resolves by evaluating $h(i)$ and scanning at most $C$ slots in its bucket. Here is a finite bit-cost implementation of these operations. For $H$-bit field elements, addition is bitwise XOR. A polynomial-basis multiplication forms the $H^2$ pairwise bit products and reduces their carryless product modulo the fixed degree-$H$ irreducible polynomial using $O(H^2)$ Boolean gates; it has $O(H^2)$ serial depth when evaluated by the direct nested-loop circuit. Horner evaluation of one degree-<$d$ polynomial therefore uses $O(dH^2)=O(H^3)$ Boolean gates and depth, since $d=O(H)$. Evaluating $p_{-1}$ computes a bucket address within this cost; computing the height of a newly inserted index evaluates at most $H$ promotion polynomials and costs $O(H^4)$ gates and depth. Compute-copy-uncompute using [F6] makes these deterministic calculations reversible with constant-factor gate overhead; the $O(H^2)$ multiplication scratch can be reused. Each stored record has $w=O(\log^2N+b)$ bits. Scanning a bucket costs at most $Cw$ addressed swaps, while its hash computation uses the field-evaluation circuit above. A lexicographic key comparison on the $O(\log N+b)$ index/value bits uses $O(\log N+b)$ Boolean gates and depth by a sequential bit comparison. A rank traversal visits at most $(H+1)D=O(\log^2N)$ entries; span accumulation adds or compares $O(\log N)$-bit integers, so one rank search has $O(\log^5(N+M))$ QRAM calls and ordinary gates. Complement unranking consequently has $O(\log^6(N+M))$ such costs. These bounds establish finite polylogarithmic lookup, selected-index, and complement-unranking procedures whenever the capped searches do not overrun. [F3, F6, F12, step 1.1, algebra]

2.3 To update the stored subset, delete the removed index from the index and value lists, apply one inverse XOR query to erase its value, apply one forward XOR query to load the inserted value, and insert its record into both lists. The predecessor search on each level supplies the crossing edge and its old span. If a list has length $r$ and insertion is at base rank $t$, old keys of rank at least $t$ move up by one. At each level containing the new key $x$, replace the crossing span by the two exact differences $t-\operatorname{rank}(p)$ and $\operatorname{rank}(q)+1-t$, where $p$ and $q$ are its predecessor and successor in the old level list; if $x$ is absent at that level, increment the crossing span by one. For deletion of a key $x$ of base rank $t$, if $x$ is present at a level, replace spans $s(p,x)$ and $s(x,q)$ by $s(p,x)+s(x,q)-1$; if it is absent, decrement the unique crossing span by one. The head has rank $-1$ and a missing successor is treated as a virtual tail of rank equal to the current list length, so the same formulas cover both endpoints. Each updated span is an integer at most $r+1\le N$ and fits in $O(\log N)$ bits. Ripple-carry addition, subtraction, and comparison use $O(\log N)$ Boolean gates and depth per operation; at most $H+1$ predecessor paths of at most $D$ entries and $O(H)$ span writes are needed. Their arithmetic, record reads, and writes therefore have polylogarithmic gate and QRAM costs. Two bounded searches in the value list, at $(v,1)$ and $(v,N+1)$, give the multiplicity of a value $v$; maintain the number of value classes with multiplicity at least two, decrementing when a deletion changes multiplicity two to one and incrementing when an insertion changes one to two. This counter makes the marked check an exact zero test with no value query. Reversing these finite operations restores the canonical table. A controlled memory-bit access uses two addressed swaps with clean scratch and a Fredkin between them, so it has constant-factor QRAM overhead by [F3, F10]. Thus the local update and marked-check subroutines use $\operatorname{polylog}(N+M)$ QRAM time and gates whenever their searches fit the cap. [F2, F3, F4, F6, F10, F12, construct, algebra]

2.4 The QRAM table has $RC=O(r\log N)$ slots. Each slot stores an index, a $b$-bit value, and $O(H)$ pointers and spans of $O(\log N)$ bits each, hence $O(\log^2N+b)$ bits. The seed, counters, rank registers, arithmetic workspace, and comparator-history scratch add $O(r\log^2N+\log^3N)$ bits. Therefore total table and workspace memory is $O(r\log N(\log^2N+b)+r\log^2N+\log^3N)=O(r\log^3(N+M))$. The finite initial table and both sorted lists can be built by the reversible networks in step 2.1 using $O(r\operatorname{polylog}(N+M))$ gate-time after the $r$ value loads. [F1, F2, F12, step 2.1, algebra]

3.1 For fixed $S$ and a bucket $v$, let $X_v$ count its selected indices. The $d$-wise hash family from step 1.2 gives, with $C\le d$, $\Pr(X_v\ge C)\le\mathbb E\binom{X_v}{C}=\binom rC R^{-C}$. Since $\binom rC\le r^C/C!$, $R\ge r$, and $C!\ge2^{C-1}$ (each factor $2,\ldots,C$ is at least $2$), this is at most $2^{1-C}$. With $C=16m$ and $2^m\ge N+2$, $2^{1-C}\le2(N+2)^{-16}$. A union bound over $R\le N$ buckets gives probability at most $2N(N+2)^{-16}$. [F12, step 1.2, algebra]

3.2 Put $s=\lfloor d/2\rfloor=8m$. For either fixed key order and each level $\ell<H$, condition on the seeds for levels below $\ell$; this fixes the level-$\ell$ list and its key order. Among at most $r$ consecutive windows of $s$ nodes, $s$-wise independence makes the chance that the promotion bits are all zero or all one equal to $2^{1-s}$. A union bound over two lists and $H$ levels gives probability at most $4rH2^{-s}\le4rH(N+2)^{-8}$. If no such run occurs, deleting one node can merge at most two shorter equal-bit runs, and inserting one node can lengthen a run by at most one; every search during one Johnson replacement then uses at most $D=2s+1$ entries per level. [F12, step 1.2, algebra]

3.3 Call a seed bad for $S$ if some bucket has occupancy at least $C$ or the run event of step 3.2 occurs. (Occupancy exactly $C$ fits in the table but has no spare slot for a reversible insertion.) Its probability is $\eta_N\le 2N(N+2)^{-16}+4rH(N+2)^{-8}=O(N^{-7}\log N)$ by steps 3.1–3.2. For a fixed coin pair $(i,j)$, the Johnson replacement is an involution because it toggles membership of $i,j$. Define the capped implementation to apply it only when both endpoint tables have every bucket load strictly below $C$ and the forward and reverse searches stay within $D$; otherwise act as the identity. This acceptance test is symmetric in the two endpoints, so applying the same toggle twice returns every accepted basis state and its canonical table; rejected basis states are fixed. The capped map is therefore an involution on the finite computational basis, hence a bijection; its linear extension maps an orthonormal basis bijectively to itself and is unitary. On every pair of good endpoint tables, step 3.1 leaves room for insertion at either endpoint and step 3.2 bounds both search directions, so the capped operation agrees with the ideal one. For a fixed input subset and neighbor, each endpoint is bad with probability at most $\eta_N$, hence the probability that either endpoint is bad is at most $2\eta_N$. The retained source and orthogonal row-successor labels make these blocks orthogonal, so for any logical superposition with a uniform seed register the squared norm of the block on which capped access differs from ideal is at most $2\eta_N$. Since both operations are unitary and agree on the complementary block, their state-vector difference per update is at most $2\sqrt{2\eta_N}$. The compatible-access hypothesis in the Statement makes each complete walk update use these capped operations and preserve the seed; the ideal walk therefore acts trivially on the uniform seed register. Telescoping against the ideal prefixes, which keep that seed register uniform, gives error at most $2T\sqrt{2\eta_N}=O(N^{-17/6}\sqrt{\log N})\to0$ for $T$ operations. Since [F1] gives a fixed positive ideal success probability, fix a constant $N_0\ge4096$ so that for $N\ge N_0$ the measured verified-pair success remains bounded below by a positive constant. For $4\le N<N_0$, direct value comparison is exact and has only a fixed-range cost. By [F13], the success probability on a unit state is $\|\Pi\psi\|^2\le1$ for its projective success projection $\Pi$, so $\|\Pi v\|\le\|v\|$ for every vector $v$. For unit states $\psi,\phi$, [F16] gives $|\|\Pi\psi\|-\|\Pi\phi\||\le\|\Pi(\psi-\phi)\|\le\|\psi-\phi\|$; hence [F15] yields $|\|\Pi\psi\|^2-\|\Pi\phi\|^2|\le2\|\psi-\phi\|$. Thus the success-outcome probability changes by at most twice the state-vector error. Scanning stored values to verify and output a reported pair uses no further value query by [F2], so the error is one-sided. [F1, F2, F4, F12, F13, F15, F16, step 3.1, step 3.2, algebra]

4.1 On the walk branch $N\ge N_0$, [F1] gives $r\le N/2$, so the chain's actual gap satisfies $\delta\ge1/(2r)$; also $r-1\ge r/2$ and $N(N-1)\le N^2$, so its actual marked mass satisfies $\varepsilon\ge r^2/(2N^2)$. Supply these lower bounds as $\delta_0=1/(2r)$ and $\varepsilon_0=r^2/(2N^2)$ to the reversible-finding theorem. Hence [F11] bounds the controlled walk-access calls and mark checks by $r+O(\varepsilon_0^{-1/2}(\delta_0^{-1/2}+1))=r+O(N/\sqrt r)=O(N^{2/3})$. Moreover $\delta_0\ge1/N$ and $\varepsilon_0\ge2/N^2$, so the phase-register lengths in the reversible-finding algorithm are $O(\log N)$. Each phase-estimation run therefore uses $O(\log^2N)$ phase-register and inverse-QFT gates by [F14]; the number of such runs is at most the number of controlled-walk calls because each run uses at least one. Reversible arithmetic and local checks add $\operatorname{polylog}(N+M)$ gate-time per charged update. The $r$ initial value loads, table construction, and final scan of stored values cost $O(r\operatorname{polylog}(N+M))$ gate-time. Charging each complete compatible row-access unit at its explicit input cost $G_{\rm row}$ gives the stated formula. For $4\le N<N_0$, direct pair comparison uses $N$ value queries and $O(N^2\log(M+1))$ gates; since $N_0$ is a fixed constant, this finite branch is absorbed by the asymptotic bounds. The phase-gate bound is in the ideal continuous-rotation submodel; fixed-alphabet synthesis and a polylogarithmic bound for $G_{\rm row}$ are not proved here. [F1, F2, F11, F14, step 2.3, step 2.4, step 3.3, algebra]

5.1 For the optional Boolean value circuit, [F6] gives $6G+4E+m$ gate occurrences for one reversible XOR query. Substituting $L=\lceil\log_2(F+1)\rceil$ and $L_m=\lceil\log_2(m+1)\rceil$ into [F7] gives the stated explicit schedule. [F8] records occurrence count and written depth as separate quantities; no minimum-layer depth equality or whole-walk ordinary-gate bound follows. [F4, F5, F6, F7, F8, step 4.1, algebra] ∎
