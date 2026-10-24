---
id: thm-brauer-pair-order-is-independent-of-the-normal-chain
kind: theorem
title: Brauer pair order is independent of the normal chain
deps: [thm-unique-normal-subpair-below-a-brauer-pair, lem-relative-brauer-homomorphisms-are-transitive, lem-finite-dimensional-algebras-admit-primitive-idempotent-decompositions, lem-brauer-images-of-primitive-idempotent-decompositions, thm-p-group-fixed-point-congruence, lem-brauer-kernel-and-relative-trace-support, lem-brauer-homomorphism-is-conjugation-equivariant, def-relative-brauer-homomorphism]
provenance:
  statement: literature-derived
  proof: ai-altered
status: published
origin: pipeline
verification:
  audited: 2026-09-12
sources:
  references:
    - title: AKO, Fusion Systems in Algebra and Topology, IV §2 Theorem 2.10, Lemmas 2.11–2.12 and Proposition 2.14, printed pp.180–183; six-clause formulation retained from BKY Theorem 2.2
      url: https://www.math.ku.dk/english/research/conferences/2013/groups2013/AschbacherKessarOliver.pdf
proof_strategy: direct
---

## Statement

Put $A_R=(kG)^R$, $B_R=kC_G(R)$, $b_R=\operatorname{Br}_R$, and write $j\le i$ for $ij=j=ji$. For local pairs $(Q,f),(P,e)$ with $Q\le P$, normal descent defines a unique lower pair at $Q$, independently of the chosen normal subgroup chain. The following six conditions are equivalent:

1. $(Q,f)\le(P,e)$ is this well-defined inclusion.
2. There are primitive $i\in A_P$, $j\in A_Q$ with $j\le i$, $b_P(i)e\ne0$, and $b_Q(j)f\ne0$.
3. A finite chain of normal pair inclusions joins $(Q,f)$ to $(P,e)$.
4. Every primitive $i\in A_P$ with $b_P(i)e\ne0$ satisfies $b_Q(i)f\ne0$.
5. Some such $i$ satisfies $b_Q(i)f=b_Q(i)\ne0$.
6. Some such $i$ satisfies $b_Q(i)f\ne0$.

This inclusion is a conjugation-stable partial order. For normal $Q\trianglelefteq P$, it agrees with direct normal inclusion.

## Facts & Assumptions

**Given:** Finite $G$, a field of characteristic $p$, and local pairs and fixed algebras as stated.

[F1] Normal subgroups admit unique normal subpairs. ([[thm-unique-normal-subpair-below-a-brauer-pair]])

[F2] Relative truncations compose on their stated fixed domains. ([[lem-relative-brauer-homomorphisms-are-transitive]])

[F3] Finite primitive decompositions exist for all idempotents in fixed algebras. ([[lem-finite-dimensional-algebras-admit-primitive-idempotent-decompositions]])

[F4] Surjections between finite algebras preserve nonzero primitive images, including corners. ([[lem-brauer-images-of-primitive-idempotent-decompositions]])

[F5] Nontrivial $p$-group orbits have size divisible by $p$. ([[thm-p-group-fixed-point-congruence]])

[F6] Proper-subgroup traces lie in the Brauer kernel. ([[lem-brauer-kernel-and-relative-trace-support]])

[F7] Conjugation commutes with Brauer maps. ([[lem-brauer-homomorphism-is-conjugation-equivariant]])

[F8] The relative map from $B_Q^P$ exists when $Q$ is normal in $P$. ([[def-relative-brauer-homomorphism]])

## Proof

**Proof technique:** direct.

1.1 Call a primitive $i\in A_P$ associated to $(P,e)$ if $b_P(i)e\ne0$. Such an $i$ exists: decompose $1$ in $A_P$ and multiply its images by $e$; their sum is $e\ne0$. By [F4], $b_P(i)$ is primitive when nonzero, and its decomposition $b_P(i)e+b_P(i)(1-e)$ forces $b_P(i)e=b_P(i)$. The same primitive-central argument holds in any algebra. If $Q\le P$, nonzero $b_P(i)$ implies nonzero $b_Q(i)$ because the former retains a subset of the latter coefficients. Distinct blocks are orthogonal, since their product, if nonzero, is a central idempotent below each and must equal each. [F3, F4]

1.2 For primitive $i\in A_P$, every element $c$ of the corner $C=iA_Pi$ is nilpotent or a unit. Indeed for large $n$, stabilized kernels and images of left multiplication give $C=\ker L_c^n\oplus\operatorname{im}L_c^n$: an element $c^nx$ in the intersection implies $x\in\ker L_c^{2n}=\ker L_c^n$. These summands are right $C$-modules. Their projections are left multiplication by idempotents in $C$, hence primitivity forces one summand zero. If $L_c$ is bijective, solve $cx=i$ and apply injectivity to $c(xc-i)=0$ to get $xc=i$. Every element of a proper two-sided ideal of $C$ must consequently be nilpotent. [given]

1.3 For $N=N_P(Q)$ and $a\in A_Q$, coefficient counting gives $b_Q(\operatorname{Tr}_Q^P a)=\operatorname{Tr}_Q^N(b_Q(a))$. To see this, let $Q$ act on the cosets $P/Q$ in the trace. At a basis element centralizing $Q$, coefficients from one orbit agree. Non-singleton orbits vanish in characteristic $p$; fixed cosets are exactly $N/Q$, giving the displayed equality by equivariance. Also $x\operatorname{Tr}_Q^P(a)y=\operatorname{Tr}_Q^P(xay)$ for $x,y\in A_P$, directly by moving fixed factors through the sum. [F5, F7]

2.1 Define an auxiliary relation $(Q,f)\preceq(P,e)$ by requiring $b_Q(i)f=b_Q(i)\ne0$ for every associated primitive $i$ at the top. At most one $f$ can satisfy it by step 1.1 and orthogonality. A compatibility fact follows without assuming transitivity: if $(Q,f)\preceq(P,e)$, $(S,d)\preceq(P,e)$ and $(S,d^{\prime})\preceq(Q,f)$, then $d=d^{\prime}$. Choose a top-associated $i$ and decompose it into primitive $j$ in $A_Q$. Some $j$ has $b_Q(j)f\ne0$ because their sum is $b_Q(i)\ne0$. Thus $b_S(j)d^{\prime}=b_S(j)\ne0$. Since $j\le i$, multiplication shows $b_S(i)d^{\prime}\ne0$, while $b_S(i)d=b_S(i)$. Orthogonality forces $d=d^{\prime}$. [F3, F4, step 1.1]

3.1 If $Q\trianglelefteq P$, choose the normal lower block $f$ from [F1]. The restriction $b_Q:A_P\twoheadrightarrow B_Q^P$ is onto, since each element of $B_Q^P$ already belongs to $A_P$ and is fixed by truncation. Hence [F4] makes the nonzero $b_Q(i)$ primitive in this fixed target algebra. The $P$-stable block $f$ is central there, and $\operatorname{Br}_{P/Q}(b_Q(i)f)=b_P(i)\operatorname{Br}_{P/Q}(f)=b_P(i)\ne0$ by [F2] and normal compatibility with $e$. Thus $b_Q(i)f=b_Q(i)$ by primitivity. This proves $\preceq$ for normal inclusions. Uniqueness from step 2.1 gives the converse normal characterization whenever the strong lower block exists. For $Q=P$ the same primitive argument gives reflexivity. [F1, F2, F4, F8, step 1.1, step 2.1]

4.1 We establish existence of a unique strong lower block by induction on $[P:Q]$. The equality case and all normal cases are settled in step 3.1. For a proper nonnormal $Q$, let $N=N_P(Q)$. The action of $Q$ on $P/Q$ has exactly $[N:Q]$ fixed cosets. Since $[P:Q]$ is divisible by $p$, [F5] implies $p\mid[N:Q]$, so $Q<N<P$. Assume existence for all smaller indices. For every $Q<R\le P$ take its unique strong lower block $e_R$ under $(P,e)$, with $e_P=e$. [F5, step 3.1, ih]

5.1 For $Q<R\le T\le P$, induction supplies a strong lower block at $R$ under $(T,e_T)$, since $[T:R]<[P:Q]$. Compatibility from step 2.1 identifies it with $e_R$. Descend normally from $(N,e_N)$ to $(Q,f)$. If $Q<R\le N$, induction at $[R:Q]$ supplies a lower block under $(R,e_R)$; compatibility applied with top $(N,e_N)$ identifies it with $f$. Therefore $f$ is $N$-stable and $\operatorname{Br}_{R/Q}(f)e_R=e_R$ for every such $R$, by the normal characterization. [F1, F8, step 2.1, step 3.1, step 4.1]

6.1 For any top-associated primitive $i$, put $z=b_Q(i)(1-f)$. It is an $N$-fixed idempotent of $B_Q$. For $Q<R\le N$, we have $b_R(i)e_R=b_R(i)$ by step 4.1 and $\operatorname{Br}_{R/Q}(f)e_R=e_R$ by step 5.1. Multiplicativity and [F2] therefore give $\operatorname{Br}_{R/Q}(z)=b_R(i)(1-\operatorname{Br}_{R/Q}(f))=0$. [F2, F7, F8, step 4.1, step 5.1]

7.1 The simultaneous kernel just obtained inside $B_Q^N$ equals $\operatorname{Tr}_Q^N(B_Q)$. Indeed an $N$-fixed vector has constant coefficients on each $N$-orbit of the basis $C_G(Q)$. If a representative $x$ has stabilizer $S>Q$, truncation for $S/Q$ detects its coefficient at $x$, and disjoint basis orbits cannot cancel it. Orbits with stabilizer exactly $Q$ have no fixed basis elements for any $R>Q$, so all those truncations kill them. Their sums are exactly the nonzero traces of basis elements from $Q$ to $N$; a larger stabilizer gives multiplicity $[S:Q]=0$ in $k$. This proves both inclusions. By step 1.3 and surjectivity of $b_Q:A_Q\to B_Q$, the same space is $b_Q(\operatorname{Tr}_Q^P(A_Q))$. [F4, F5, F8, step 1.3, step 6.1]

8.1 Since $z=b_Q(i)zb_Q(i)$, step 1.3 puts $z$ in $b_Q(J)$, where $J=\operatorname{Tr}_Q^P(iA_Qi)$ is a two-sided ideal of $C=iA_Pi$. It is proper: [F6] kills it under $b_P$, while $b_P(i)\ne0$. Step 1.2 makes every element of $J$ nilpotent, and multiplicativity makes every element of its image nilpotent. Thus the idempotent $z$ is zero. This holds for every associated $i$, proving $(Q,f)\preceq(P,e)$. Together with uniqueness and the normal base cases it completes the induction. [F4, F6, step 1.2, step 1.3, step 2.1, step 3.1, step 7.1, discharge-induction]

9.1 Existence and compatibility now give transitivity: for $(S,d)\preceq(Q,f)\preceq(P,e)$ take the unique strong lower block $d^{\prime}$ at $S$ under the top; step 2.1 forces $d=d^{\prime}$. Reflexivity was proved in step 3.1. If two pairs are comparable both ways, their subgroups coincide and uniqueness forces equal blocks, proving antisymmetry. Conjugation is an algebra isomorphism on all fixed algebras, carries primitive decompositions to primitive decompositions, and preserves the association equations by [F7], proving conjugation stability. [F7, step 2.1, step 3.1, step 8.1]

10.1 Every normal chain is strong by steps 3.1 and 9.1. Conversely any proper subgroup of a finite $p$-group is properly contained in its normalizer by the fixed-coset calculation in step 4.1. Repeated normalizers therefore give a finite normal subgroup chain from $Q$ to $P$. At each subgroup take its unique strong lower block under $(P,e)$. Compatibility makes consecutive pairs strongly related, and step 3.1 makes them normally related. The bottom block is $f$ exactly when $(Q,f)\preceq(P,e)$. Thus normal descent is independent of the chain and the candidate relation equals the strong partial order. This establishes (i) exactly when (iii). [F1, step 2.1, step 3.1, step 4.1, step 8.1, step 9.1]

11.1 Strong association implies (iv) and (v), with existence of a witnessing primitive from step 1.1. Each implies (vi). Conversely let (vi) hold and let $f^{\prime}$ be the unique strong lower block at $Q$. Its equation gives $b_Q(i)f^{\prime}=b_Q(i)$ for the witnessing $i$. Nonzero $b_Q(i)f$ then implies $f^{\prime} f\ne0$, so $f=f^{\prime}$ by orthogonality and (i) follows. To obtain (ii) from (vi), decompose its $i$ into primitive $j$ in $A_Q$; at least one has $b_Q(j)f\ne0$, and $j\le i$. Conversely (ii) implies (vi), since multiplying $b_Q(i)f$ by $b_Q(j)$ gives its nonzero product $b_Q(j)f$. All six conditions are therefore equivalent. [F3, F4, step 1.1, step 8.1, step 10.1] ∎

## Sources

AKO, Fusion Systems in Algebra and Topology, IV §2 Theorem 2.10, Lemmas 2.11–2.12 and Proposition 2.14, printed pp.180–183; six-clause formulation retained from BKY Theorem 2.2. Local argument and conventions as displayed above.
