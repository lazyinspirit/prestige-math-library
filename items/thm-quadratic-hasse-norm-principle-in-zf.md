---
id: thm-quadratic-hasse-norm-principle-in-zf
kind: theorem
title: Quadratic Hasse norm principle in ZF
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-quadratic-idelic-first-inequality-in-zf, lem-order-two-herbrand-quotients-multiply, lem-local-quadratic-norm-and-square-class-preparations, thm-number-field-ideal-class-group-finite-in-zf, thm-number-field-s-unit-structure-in-zf, lem-number-field-completion-tensor-and-norm-in-zf, thm-kummer-pairing-is-perfect]
proof_strategy: direct
sources:
  references:
    - title: J. S. Milne, Class Field Theory, VII section 6, algebraic second inequality; VIII section 3, Theorem 3.1
      url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
---

## Statement

Let $L/K$ be a quadratic extension of number fields and let $a\in K^\times$. Then $a=N_{L/K}(b)$ for some $b\in L^\times$ if and only if, at every place $v$ of $K$, its image is a norm from the product of the completions of $L$ above $v$. The product norm at a split place is multiplication of the two components. In the notation of the idele groups, $[I_K:K^\times N(I_L)]=2$ and $T_1(C_L)=1$. All assertions hold in ZF without a choice principle.

## Statement references

[[lem-quadratic-idelic-first-inequality-in-zf]]

[[lem-order-two-herbrand-quotients-multiply]]

[[lem-local-quadratic-norm-and-square-class-preparations]]

[[thm-number-field-ideal-class-group-finite-in-zf]]

[[thm-number-field-s-unit-structure-in-zf]]

[[lem-number-field-completion-tensor-and-norm-in-zf]]

[[thm-kummer-pairing-is-perfect]]

## Facts & Assumptions

**Given:** The extension in the statement. The idele groups and the order-two quotient groups are defined as in the first inequality supplier. For a finite set $S$ including all infinite places, write $U_S=\{x\in K^\times:v(x)=0\text{ at every finite }v\notin S\}$ and $I_{K,S}=\prod_{v\in S}K_v^\times\times\prod_{v\notin S}U_v$.

[F1] For any quadratic number-field extension, $|T_0(C_L)|=2|T_1(C_L)|$, $T_0(C_L)=I_K/(K^\times N(I_L))$, and infinitely many finite primes do not split. [[lem-quadratic-idelic-first-inequality-in-zf]]

[F2] Local square-class orders and unramified unit norms, including Frobenius for multiquadratic extensions away from dyadic primes and the entries, are given by [[lem-local-quadratic-norm-and-square-class-preparations]]. Completion products, local degrees, and norm compatibility are given by [[lem-number-field-completion-tensor-and-norm-in-zf]].

[F3] Ideal class groups are finite and $|U_S/U_S^2|=2^{|S|}$. If $S$ contains primes generating the ideal class group, $I_K=K^\times I_{K,S}$ by cancelling the finite-support ideal of an idele. [[thm-number-field-ideal-class-group-finite-in-zf]], [[thm-number-field-s-unit-structure-in-zf]]

[F4] The finite Kummer pairing for square roots is perfect. Thus if a subgroup $B$ of a field's multiplicative group has square-class dimension $r$, adjoining its square roots gives an elementary abelian extension of degree $2^r$, and its Galois group is the dual of that square-class space. [[thm-kummer-pairing-is-perfect]]

## Proof

1.1 In any finite multiquadratic extension $M/F$, Frobenius elements outside any finite set containing its ramified primes generate the Galois group. For the proof, enlarge that finite set to include the dyadic primes and the supports of a finite generating list of radicands; generation outside the larger set implies generation outside the original set, and [F2] supplies the required Frobenius elements there. Indeed if their span were a proper subgroup $H$, perfectness in [F4] would give a nontrivial square-root character annihilating $H$. Its root generates a quadratic extension of $F$ in which every prime outside that finite set splits, contrary to [F1]. This proves the generation assertion using only quadratic first inequalities. [F1, F4, construct, algebra]

2.1 Write $L=K(\sqrt c)$, and choose $S$ containing the infinite places, dyadic places, support of $c$, and primes generating the ideal class group of $K$. Put $s=|S|$ and $M=K(\sqrt{U_S})$. A square root in $K$ of an $S$-unit is again an $S$-unit, by doubling its valuations. Therefore $U_S\cap K^{\times2}=U_S^2$, and [F3] and [F4] give $[M:K]=2^s$. Also $L\subseteq M$, since $c\in U_S$. Put $t=s-1$, so $\operatorname{Gal}(M/L)$ has dimension $t$ over $\mathbb F_2$. By step 1.1, select $t$ Frobenius elements at primes of $L$ outside the places over $S$ forming a basis of this group. Let $T$ be the corresponding primes of $K$. Each such prime splits in $L$: by [F2] the completion of $M$ over $K$ has degree at most $2$, so if it is strictly larger than the completion of $L$, the latter must be $K_v$ itself. Its Frobenius over $L$ then equals its Frobenius over $K$. These primes of $K$ are distinct, because $M/K$ is abelian and two primes over the same $v$ have the same Frobenius, whereas a basis has distinct nonzero entries. Thus $|T|=t$, $T\cap S=\varnothing$, every prime of $T$ splits in $L$, and its Frobenius elements are a basis of $\operatorname{Gal}(M/L)$. [F2, F3, F4, step 1.1, construct, algebra]

3.1 The map $$U_S\longrightarrow\prod_{v\in T}U_v/U_v^2$$ is surjective. Each factor on the right has order $2$ by [F2]. Its kernel consists exactly of the elements whose square roots are fixed by all the Frobenius elements of step 2.1, by the fixed-root criterion in [F2]. By [F4], pairing the square-class space of $U_S$ with the subgroup $\operatorname{Gal}(M/L)$ shows that this kernel has index $2^t$. The image therefore has the same finite order as the target and is the whole target. [F2, F4, step 2.1, algebra]

4.1 Define the subgroup $$E=\prod_{v\in S}K_v^{\times2}\times\prod_{v\in T}K_v^\times\times\prod_{v\notin S\cup T}U_v\subseteq I_K.$$ It is contained in $N(I_L)$: squares are norms at places of $S$, the places of $T$ split, and every other place is unramified with surjective unit norm by [F2]. We claim $$K^\times\cap E=U_{S\cup T}^2.$$ The inclusion from right to left follows immediately from the definitions. Conversely, let $b\in K^\times\cap E$ and consider $B=K(\sqrt b)$. At places of $S$ this extension splits. At places of $T$, squares of units are norms. Outside $S\cup T$ it is unramified since $2$ and $b$ are units, so all units are norms. Hence the group $$J=\prod_{v\in S}K_v^\times\times\prod_{v\in T}U_v^2\times\prod_{v\notin S\cup T}U_v$$ is contained in $N(I_B)$. Step 3.1 shows $I_{K,S}=U_SJ$, because $I_{K,S}/J$ is precisely $\prod_{v\in T}U_v/U_v^2$. Therefore [F3] gives $I_K=K^\times J$. If $B/K$ were quadratic, this would contradict its first inequality [F1]. Thus $b$ is a square in $K$; a square root is a unit outside $S\cup T$ by its valuations, proving the claimed equality. [F1, F2, F3, step 3.1, construct, algebra]

5.1 Put $A=I_{K,S\cup T}$. Then $$[I_K:K^\times E]=[A:E]\big/[U_{S\cup T}:K^\times\cap E].$$ Indeed the map $A/E\to I_K/(K^\times E)$ is onto by [F3], and its kernel is the image of $U_{S\cup T}=A\cap K^\times$. Let $r_1,r_2$ be the signature of $K$, $m$ the number of finite places in $S$, and $d=[K:\mathbb Q]=r_1+2r_2$. The local square-class orders in [F2] give $$[A:E]=\prod_{v\in S}[K_v^\times:K_v^{\times2}]=2^{r_1}\,4^m\,2^{\sum_{v\mid2}[K_v:\mathbb Q_2]}=2^{2s},$$ since the completion degrees over $2$ sum to $d$ by [F2], and $s=r_1+r_2+m$. By [F3] and step 4.1 the denominator is $|U_{S\cup T}/U_{S\cup T}^2|=2^{s+t}$. Since $t=s-1$, the displayed quotient is $2$. As $E\subseteq N(I_L)$, this gives $[I_K:K^\times N(I_L)]\le2$. By [F1] the index is at least $2$ and equals $2|T_1(C_L)|$, so it is exactly $2$ and $T_1(C_L)=1$. [F1, F2, F3, step 2.1, step 4.1, construct, algebra]

6.1 A global norm is a local norm by the completion norm compatibility in [F2]. Conversely suppose $a\in K^\times$ is a local norm everywhere. Choose an idele $x\in I_L$ with $N(x)=a$: outside a finite set, $a$ is a unit and the extension is unramified or split, so [F2] supplies unit preimages. These preimages can be chosen by the explicit finite-residue correction recursion at each prime, with fixed least-coded residue lifts; only the remaining finitely many local choices are existential. The class $[x]\in C_L$ has norm $1$. By step 5.1, $[x]=[\sigma y/y]$ for some idele $y$. Thus $b=x/(\sigma y/y)$ is a diagonal element of $L^\times$, and $N(b)=N(x)=a$. This proves the norm principle and the choice-free assertions. [F2, step 5.1, construct, algebra] ∎

