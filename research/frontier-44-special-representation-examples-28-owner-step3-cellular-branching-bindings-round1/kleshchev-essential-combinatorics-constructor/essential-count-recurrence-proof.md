# Local essential-subset count recurrence, with matching and stack bijections

Author `/root/repair_cell_head_classification/native50_integral_constructor`; run `frontier-44-special-representation-examples-28`. Research-only constructive subtask for the current K FINAL2 case; no classifier continuation, consumer review, item creation, native or engine writes. The sibling `/root/repair_cell_head_classification/native50_pairing_constructor` owns the integral operators, pivots and their essential-subset basis realization. The present proof is purely finite combinatorics and is not a substitute for that realization.

## Source actually read

Authentic converted1997 PDF SHA256 `7042528e267a761105186e14549925a63497a01bc63ec45a4a26722e4f445184`, `../kleshchev-1997-from-authentic-ps.pdf`. It is a converted PDF, not the preserved original PostScript bytes. Actually read visually printed/PDF1–4,8–10,14–35, including Definitions1.11–1.16,2.5,3.1,4.1,4.4,5.1,5.7 and the complete displayed proofs of5.3–5.8. Pages11–13 were not needed/read, and no whole66-page reading is claimed. The source's page4 convention is that the zero/nonzero tests on integer constants are modulo p. The proof below reconstructs those arguments locally, replacing the lengthy normality comparison by a direct finite stack proof.

## 1. Full definitions and interval scope

Fix a prime p, a rank l≥1, and arbitrary nonnegative fundamental-weight coordinates Λ=(λ1,…,λl). No p-restricted or p-small coordinate assumption is imposed. All B,C,λ zero/nonzero tests below are in F_p; all cardinalities are ordinary nonnegative integers. For 1≤a≤b≤l define

`B(a,b)=b−a+Σ_{k=a}^b λ_k`, `C(a,b)=b−a+Σ_{k=a}^{b−1}λ_k`.

The identities used throughout are `B(a,b)=C(a,b)+λ_b` and, for a≤x≤b, `B(a,b)=C(a,x)+B(x,b)` and `C(a,b)=C(a,x)+C(x,b)`.

For integers r≤s, `(r,s]={r+1,…,s}`. An injection f:M→N is **weakly increasing** here when f(j)≥j for every j; it need NOT preserve the order of different source elements. Weakly decreasing means f(j)≤j. This agrees with Definition1.12 and is important for the augmenting paths below.

A subset J⊂(r,s] is **nonessential** if there are t<u in `[r,s+1]\J` and an injection

`d:{t}∪(J∩(t,u))→[t,u)` with d(x)≥x and B(x,d(x))=0 for every source x.

Otherwise J is essential. Write E(r,s) for this family and ε(r,s)=|E(r,s)|. A subset J⊂(r,s] is **regular** if it has an injection `f:J→(r,s]` with f(j)≥j and B(j,f(j))=0. The empty subset is regular.

An index a is **normal in [a,b]** if λ_a≠0 and its demand set `M={m∈(a,b]:B(a,m)=0}` has a compensation injection `z:M→(a,b]` with z(m)≤m and B(z(m),m)=0. Define σ(a,b) as its indicator. Also set σ(a,a−1)=1. The root normality depends only on [a,b]; an ambient earlier endpoint does not change it.

If r is not normal, put N(r,s)=∅. If r is normal, set

`N(r,s)={a∈[r,s]: a is normal in [a,s] and C(r,a)=0}`, `ν(r,s)=|N(r,s)|`.

The primed functions refer to the last-interval-coordinate shift:

`ε′_Λ(r,s)=ε_{Λ+ω_s}(r,s)`, `ν′_Λ(r,s)=ν_{Λ+ω_s}(r,s)`.

Only λ_s is increased by1. An interval ending before s sees no effect of that shift. All shifted weights remain dominant.

The desired count recurrence, for every1≤r≤s≤l, is

`ε_Λ(r,s)=ν_Λ(r,s)+Σ_{u=r+1}^s ν_Λ(u,s) ε′_Λ(r,u−1)`.  (T)

In particular r=i,s=l gives the parent's exact first-level count formula with the final fundamental coordinate shifted at u−1, not at l or at the first coordinate.

## 2. Essential regular subsets: a complete augmenting-path proof

Order subsets colexicographically: at the largest element of their symmetric difference, the subset containing that element is larger. The regular family is finite and nonempty, so it has a unique maximum P.

**Claim:** an essential regular subset exists iff r is normal; if it exists it is exactly P.

First let J be regular and essential, with matching f. If λ_r=0, add the source r with f(r)=r; this is disjoint from f(J), whose images are>r. It is a forbidden witness with endpoints r,s+1. Hence λ_r≠0. Let R={m∈(r,s]:B(r,m)=0}. Every m∈R must belong to f(J), since an unused m could be assigned to the extra source r and would again give a forbidden witness. For each m∈R choose j=f^{-1}(m). Then j≤m and `C(r,j)=B(r,m)−B(j,m)=0`; hence j compensates m. These j are distinct, proving r is normal. Moreover, if I>J were another regular subset, let t be the largest element in I\J at the highest difference. The subsets agree above t. Restrict a regular matching of I to `{t}∪(J∩(t,s])`; its targets lie in[t,s+1) and are distinct. Since t∉J, this is a forbidden witness for J. Thus J=P.

Conversely assume r normal and let J=P with a regular matching f. Suppose a forbidden witness d has endpoints t<u. If t>r, the subset `I={t}∪(J∩(t,s])` is regular: use d on its sources below u and use f on J≥u. Their targets are respectively<u and≥u, so are disjoint. Since t∉J and all larger elements are retained, I>J, a contradiction.

It remains to treat t=r. Put J0=J∩(r,u), δ=d|J0, and m0=d(r). The target m0 is not in δ(J0), and m0>r since λ_r≠0. Let R0={m∈(r,u):B(r,m)=0}. Normality gives a compensation injection z on R0; its targets satisfy r<z(m)≤m<u and C(r,z(m))=0. Begin at the unused target m0. If z(m0)∉J0, add that new source and assign it m0. Otherwise set j1=z(m0), reassign j1 to m0, and release m1=δ(j1). Then `B(r,m1)=C(r,j1)+B(j1,m1)=0`, so m1∈R0. Continue: use compensation z(m1), reassign it to m1 if it lies in J0, and release its old δ-target. All targets and compensation sources along this path are distinct: δ and z are injective, and a cycle would force the initially unused m0 to be a δ-image. Finiteness therefore ends at a source z(mq)∉J0. Every reassignment has B=0 and respects the lower-bound constraint z(m)≤m. Keep δ on untouched J0 and f on J≥u; those latter targets are≥u and disjoint. This constructs a regular matching for J together with one new source in(r,u), contradicting maximality. Thus J is essential.

This proves the claim, including uniqueness, without assuming a source theorem or using a representation-theoretic count.

## 3. Essential subsets biject with σ-cut paths

Two elementary consequences of the witness definition will be used.

**Truncation.** If M is essential in(r,s] and q∈(r,s]\M, then M∩(r,q−1] is essential in(r,q−1]. Any forbidden witness for the truncated interval has endpoints≤q, also outside M, and is a witness in the original interval.

**Concatenation.** If P is essential in(r,v−2] and J essential in(v,s], then `P∪{v}∪J` is essential in(r,s]. A forbidden witness wholly to the left or right gives the corresponding forbidden witness. A witness crossing v contains v as a source; restrict it to `{v}∪(J∩(v,u))`. Since all such sources and their targets are≥v, this is a forbidden witness for J. The virtual case v=r+1 uses P=∅ and the same restriction argument.

Let M be essential. If it is regular it is the unique P(r,s) of Section2, and σ(r,s)=1. Otherwise let v be the largest element of M satisfying

`v−1∉M` and `M∩(r,v−2] is regular in(r,v−2]`.

Such v exists: take min M, with empty prefix. The prefix is essential by truncation at q=v−1, hence equals the unique P(r,v−2); in particular σ(r,v−2)=1 (or the virtual value1).

We show J=M∩(v,s] is essential. If it had a witness t<u with t>v, that is already a forbidden witness for M. If t=v, the witness matches M∩(v,u) into(v,u); combine it with the regular prefix matching, whose images are≤v−2. Because v−1∉M, this makes M∩(r,u) regular in(r,u−1]. If u=s+1 or there is no element of M above u, it makes M regular, contrary to assumption. Otherwise let q=min(M∩(u,s]); then q≥u+1, q−1∉M, and that same matching makes M∩(r,q−2] regular. This contradicts maximality of v. Thus J is essential, and

`M=P(r,v−2)∪{v}∪J`.

The decomposition is unique. Indeed, in a concatenated set with essential tail J, no larger m>v can meet the same two prefix conditions: a regular matching for its prefix, restricted to `{v}∪(J∩(v,m−1))`, would be a forbidden witness for J with endpoints v,m−1. The regular essential case cannot equal a concatenated case, because a regular matching of the whole set restricted to `{v}∪J` would make J nonessential with endpoints v,s+1.

Iterating this unique decomposition gives a bijection between essential subsets and **σ-cut paths** Q={q1<…<qf}⊂(r,s] satisfying

`σ(r,q1−2)σ(q1,q2−2)…σ(q_{f−1},qf−2)σ(qf,s)=1`.

For f=0 the condition is σ(r,s)=1. The inverse recursively inserts the unique regular essential prefix P and the cut point, so this is a genuine bijection, not merely equal cardinalities. In particular ε(r,s) counts these paths.

## 4. Normality is a finite compensation stack

For a fixed r, B(z,m)=B(r,m)−C(r,z). For a demand m with B(r,m)=0, its eligible compensation positions are exactly z∈(r,m] with C(r,z)=0. This is a prefix/Ferrers matching problem. A compensation injection exists iff at every cutoff x the number of demands≤x does not exceed the number of eligible compensation positions≤x: necessity follows by counting distinct targets; sufficiency follows by pairing increasing demands with increasing available eligible positions. This is a complete greedy matching proof.

If λ_r≠0, initialize a stack with r. Scan m=r+1,…,s. When λ_m≠0, push m if C(r,m)=0, pop the last push if B(r,m)=0, and otherwise do nothing. These push/pop cases are disjoint, since B−C=λ_m. When λ_m=0 and B=C=0, the position supplies and consumes its own compensation slot, so it changes neither the matching inequality nor the stack; all other zero-coordinate positions are likewise neutral. Kill the root walk permanently if its initial push r is popped. The prefix matching inequalities prove that r is normal exactly when the walk is not killed.

When it is not killed, its final stack is exactly N(r,s). A pushed position a has C(r,a)=0 and λ_a≠0. For every m≥a the B,C identities give B(a,m)=B(r,m) and C(a,m)=C(r,m). Thus a is normal precisely when no suffix after it has excess pops over pushes, equivalently when its push survives the last-in-first-out matching. This proves the claimed exact stack interpretation of ν and N. For a killed root, N is empty by definition. The same proof applies verbatim to every shifted weight.

## 5. Prime-zero bridges and the decorated-path bijection

We record two consequences of the stack, with proofs exposing the endpoint shift.

**Bridge lemma.** Suppose x<y, σ(x,y−2)=1 and ν′(x,y−1)=0. If y is normal in[y,s], then

`N(x,s)={x} ⊔ N(y,s)`,

and x precedes all indices of N(y,s).

For y=x+1, ν′(x,x)=0 means λ_x+1=0; hence λ_x=−1≠0 and C(x,y)=1+λ_x=0. This proves the claim by the stack identities. For y≥x+2, the unshifted walk is alive through y−2. Shifting only λ_{y−1} cannot affect its earlier steps. To make ν′=0 at its final step, the shifted walk must pop its last surviving root: its prior stack therefore has height1 and

`B(x,y−1)+1=C(x,y)=0`, with λ_{y−1}+1≠0.

In the original walk B(x,y−1)=−1≠0. Also C(x,y−1)=−1−λ_{y−1}≠0 by the last nonzero condition. Thus the original y−1 step is neutral, and the stack before y consists only of x. Since C(x,y)=0 and y is normal, y is a nonzero-coordinate push; for every later position the walks based at x and y have identical events. The stack is consequently {x} followed by N(y,s), as claimed. This argument works in p=2 as well, since−1 is always nonzero.

**Consecutive-normal lemma.** In a nonempty N(r,s) let a<b be consecutive final stack entries. Then σ(a,b−2)=1 and ν′(a,b−1)=0. First normality of a gives prefix normality and hence σ=1. Both final entries satisfy C(r,a)=C(r,b)=0, so C(a,b)=0. Before b is pushed, the stack based at a has exactly its initial entry: any additional unmatched push earlier than b would survive whenever b survives (last-in-first-out pops cannot remove it before removing b), and would be an intervening final normal entry. The step b−1 is neutral in the original walk. Indeed B(a,b−1)=−1; if C(a,b−1)=0, then λ_{b−1}=−1, and b−1 would be such an intervening surviving push. Therefore λ_{b−1}+1≠0. Increasing λ_{b−1} by1 creates exactly one final pop of the height-one stack, proving ν′=0. The adjacent case is λ_a+1=C(a,b)=0, giving ν′(a,a)=0 directly.

These conclusions also apply to normal sets under a shift at some final endpoint s: when a<b≤s, their bridge intervals end before s, so their B,C constants are unchanged by the outer shift. The λ_b term is absent from C(a,b), which is why this remains true even when b=s.

For a σ-cut path M={m1<…<mh}, put m0=r. Retain exactly the cut points m_w for which

`ν′(m_{w−1},m_w−1)>0`.

Call the retained set Q={q1<…<qf}. Partition M into blocks between retained cuts. Every internal removed cut has prime-zero bridge; the next retained cut has prime-positive boundary. Repeated application of the bridge lemma, in the weight shifted at the next retained boundary endpoint, shows that the removed cuts in this block are precisely an initial segment of

`N′(q_v,q_{v+1}−1)` (excluding its first entry q_v),

where q0=r. The final block is similarly an initial segment of N(qf,s), excluding qf. All these normal sets are nonempty, because the retained boundary has positive ν′ and the last σ condition makes the final root normal.

More explicitly, the block containing a removed-cut chain x=a0<a1<…<at before a retained endpoint y has σ(a_j,a_{j+1}−2)=1 and prime-zero between consecutive removed cuts, while ν′(at,y−1)>0. The last root at is normal for the weight shifted at y−1. Repeated bridge identities therefore make a0,…,at the first t+1 entries of N′(x,y−1). This proves the asserted initial-segment property and determines t uniquely. The final block uses the same argument with unshifted N.

Conversely, for any Q={q1<…<qf} choose integers

`1≤a_v≤ν′(q_v,q_{v+1}−1)` for v=0,…,f−1, and `1≤a_f≤ν(qf,s)`.

For every segment insert the first a_v−1 normal indices after its initial index, and include every retained cut q1,…,qf. The consecutive-normal lemma proves each new bridge has the required σ condition and prime-zero value. Normality of the last inserted index proves σ up to the next retained boundary and a positive ν′ there; the final index is normal in its tail. Thus the result is a σ-cut path. Its retention operation returns exactly Q, and the initial-segment lengths return the chosen a_v. The two constructions are inverse.

Hence there is an explicit bijection from σ-cut paths onto the disjoint union, over all Q⊂(r,s], of sets of size

`ν′(r,q1−1)ν′(q1,q2−1)…ν′(q_{f−1},qf−1)ν(qf,s)`,

with size ν(r,s) when Q=∅. Together with Section3 this proves that ε equals this weighted-cut sum. Grouping its nonempty cuts by their first point gives the complete local recurrence

`ε(r,s)=ν(r,s)+Σ_{u=r+1}^s ν′(r,u−1) ε(u,s)`.  (A)

This is the source5.6(iv) seam established by finite injections/bijections, not by an essential-basis or branching citation.

## 6. Finite triangular inversion gives the required recurrence

Fix s and consider indices1,…,s. Let A be the strictly upper triangular integer matrix

`A[r,u]=ν′_Λ(r,u−1)` for r<u,

and B the strictly upper triangular matrix

`B[r,u]=ε′_Λ(r,u−1)` for r<u.

Apply(A) to the interval[r,u−1] in the dominant weight Λ+ω_{u−1}. Its first primed factor on[r,v−1], v<u, does not see the outer endpoint shift, so it is ν′_Λ(r,v−1). The tail is ε′_Λ(v,u−1). Therefore

`B=A+AB`.

Since A is strictly upper triangular, `I+B=I+A+…+A^{s−1}=(I−A)^{-1}`. Let E and N be column vectors with entries ε(r,s) and ν(r,s). Equation(A) is E=N+AE, so `N=(I−A)E`. Multiplying by I+B gives

`E=(I+B)N`.

Component r is precisely(T):

`ε_Λ(r,s)=ν_Λ(r,s)+Σ_{u=r+1}^s ε′_Λ(r,u−1)ν_Λ(u,s)`.

All entries are ordinary integers; only nilpotence and finite matrix multiplication are used. This is also the finite reverse-character-inversion arithmetic needed by the sibling construction. No division, characteristic-zero argument, or generic dimension count appears.

For r=s, essential subsets consist only of∅ and it is essential exactly when λ_r≠0; the normal set is then{r}. Both sides are0 or1 accordingly. All endpoint and zero-coordinate cases are therefore included. Nothing in the proof depends on the prime beyond working in a characteristic-p field for the zero tests and1≠0. The recurrence is uniform in arbitrary dominant coordinates and every root interval.

## Handoff limits

The combinatorial count recurrence(T), its precise final-coordinate shift, and its two underlying bijections are proved here. The sibling still owns proving that these essential labels are an actual modular simple-module weight basis and that the operator pivots realize the same predicates. Those algebraic obligations, the actual first-level module count, and all consumer closure are not accepted merely by the present combinatorial proof. Parent review remains required before any integration.
