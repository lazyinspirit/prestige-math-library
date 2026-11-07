---
id: lem-iwasawa-trace-quotient-growth-for-torsion-modules
kind: lemma
title: Growth of finite trace quotients of a torsion Iwasawa module
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
- thm-iwasawa-module-structure-for-finitely-generated-modules
- def-iwasawa-invariants-of-finitely-generated-torsion-lambda-module
- lem-p-adic-power-series-noetherianity-and-coprime-finite-errors
- lem-weierstrass-division-for-p-adic-power-series
- def-p-adic-integers-as-compatible-residue-classes
- thm-adjugate-identity-over-a-commutative-ring
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is assumed. The proof uses one finite elementary-module
  map, finite matrix operations, finite subgroup stabilization and canonical
  compatible coefficient limits; abstract module actions need not be continuous.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: R. Sharifi, Iwasawa Theory lecture notes
    url: https://www.math.ucla.edu/~sharifi/iwasawa.pdf
    locator: Theorem 2.4.7 and its complete proof, printed53–57, read from the
      recovered189-page PDF. This local Z_p proof uses stabilized finite errors
      and polynomial image recurrences, including p=2 and nonreduced blocks.
verification: {}
---

## Statement

Let $p$ be any prime, put $R=\mathbb Z_p\llbracket T\rrbracket$, and let $M$ be a finitely generated torsion $R$-module. Fix an integer $m\ge0$, put $\omega_n(T)=(1+T)^{p^n}-1$, and define the polynomial
$$q_{n,m}(T)=\frac{\omega_n(T)}{\omega_m(T)}=\sum_{i=0}^{p^{n-m}-1}(1+T)^{i p^m}\qquad(n\ge m).$$
Assume $M/q_{n,m}M$ is finite for all sufficiently large $n$. Then there is one integer $c$ such that
$$\log_p|M/q_{n,m}M|=\mu(M)p^n+\lambda(M)n+c$$
for all sufficiently large $n$. No finiteness hypothesis on the ordinary coinvariants $M/\omega_nM$ is imposed. In particular, low cyclotomic factors of $M$ are allowed whenever the stated trace-quotient finiteness holds. The definition includes $q_{m,m}=1$.

## Facts & Assumptions

**Given:** The prime, fixed $m$, module and eventual-finiteness hypothesis in the Statement. Write $\mathfrak m=(p,T)$ and $q_n=q_{n,m}$.

[F1] There is a map from $M$ to a finite direct sum $E$ of $R/(p^e)$ and $R/(f^b)$, with finite kernel and cokernel, where $e,b>0$ and $f$ is monic distinguished irreducible. The elementary data are unique. [[thm-iwasawa-module-structure-for-finitely-generated-modules]]

[F2] These elementary data give $\mu(M)=\sum e$ and $\lambda(M)=\sum b\deg f$, with empty sums zero. [[def-iwasawa-invariants-of-finitely-generated-torsion-lambda-module]]

[F3] The ring $R$ is a Noetherian local domain with maximal ideal $\mathfrak m=(p,T)$; a series congruent to $1$ modulo $\mathfrak m$ is a unit. [[lem-p-adic-power-series-noetherianity-and-coprime-finite-errors]]

[F4] Division by a monic distinguished polynomial $P$ of degree $d$ gives a unique remainder below degree $d$, identifying $R/(P)$ with the free remainder module $\mathbb Z_p^d$. [[lem-weierstrass-division-for-p-adic-power-series]]

[F5] The p-adic integers are compatible residues modulo $p^a$, with unique compatible coefficient limits and residue quotient of size $p^a$. [[def-p-adic-integers-as-compatible-residue-classes]]

[F6] A square matrix of positive size over a commutative ring satisfies the adjugate determinant identity. [[thm-adjugate-identity-over-a-commutative-ring]]

## Proof

1.1 Fix one map $\phi:M\to E$ from [F1], and put $K=\ker\phi$, $I=\operatorname{im}\phi$, $C=E/I$. A finite abstract $R$-module $Q$ is killed by a power of $\mathfrak m$: the descending subsets $\mathfrak m^jQ$ stabilize, and their stable member $U$ satisfies $U=\mathfrak mU$. On its finite generating list this gives $(1-B)$ killing the generator vector, with entries of $B$ in $\mathfrak m$. Its determinant is a unit by [F3], and [F6] gives $U=0$. Zero modules or empty lists need no matrix. Thus $p^aQ=0$ for some $a$, and the successive quotients by powers of $p$ are finite $\mathbb F_p$-vector spaces, so $|Q|$ and its quotient orders are powers of $p$. Apply this to the fixed $K,C$. [F1, F3, F6, given, construct, algebra]

2.1 The identities $\omega_0=T$ and $\omega_{n+1}=p\omega_n+\sum_{2\le j<p}\binom pj\omega_n^j+\omega_n^p$ show inductively that $\omega_n\in\mathfrak m^{n+1}$, including $p=2$. Also $q_n=\prod_{j=m}^{n-1}v_j,\qquad v_j=\sum_{i=1}^p\binom pi\omega_j^{i-1}\in\mathfrak m.$ The empty product for $n=m$ is $1$. Consequently $q_n\in\mathfrak m^{n-m}$, $q_{n+1}=v_nq_n$, and $q_{n+1}M\subseteq q_nM$. By step 1.1, $q_nK=q_nC=0$ eventually. Reduction of the displayed sum defining $q_n$ modulo $p$, or cancellation in $\mathbb F_p[T]$ in $\omega_n=q_n\omega_m$, gives $q_n\equiv T^{p^n-p^m}\pmod p$. Thus $q_n$ is monic distinguished of degree $p^n-p^m$, with the constant polynomial $1$ at $n=m$. [F3, step 1.1, given, algebra]

2.2 The group $I/q_nI$ is a quotient of $M/q_nM$. The right-exact maps $I/q_nI\to E/q_nE\to C/q_nC\to0$ are obtained by lifting one element and subtracting a $q_n$ multiple. Hence the Given finiteness and finite $C$ make $E/q_nE$ finite for all sufficiently large $n$. In particular each elementary summand has finite cokernel under $q_n$. This establishes finiteness before any injectivity is used. [step 1.1, given, algebra]

3.1 Multiplication by $q_n$ is injective on $R/(p^e)$. Indeed its reduction modulo $p$ is multiplication by $T^{p^n-p^m}$ on the domain $\mathbb F_p\llbracket T\rrbracket$, including exponent zero. If $q_nx\in p^eR$, reduce modulo $p$, write $x=px_1$, cancel $p$ in $R$, and repeat $e$ times. Also [F4] gives $R/(q_n)\cong\mathbb Z_p^{p^n-p^m}$ by division in $R$ before reducing by $p^e$. Therefore $|R/(p^e,q_n)|=p^{e(p^n-p^m)}.$ This includes $n=m$, where the quotient is zero and has order $1$. [F3, F4, F5, step 2.1, algebra]

4.1 For a distinguished summand put $P=f^b$, $d=b\deg f>0$ and $A=R/(P)$. It is free of rank $d$ over $\mathbb Z_p$ by [F4], but may be nonreduced. Any finite-cokernel endomorphism of $\mathbb Z_p^d$ is injective: a nonzero coefficient is a unit times a power of $p$ by its first nonzero residue and the compatible inverse residues in [F5]. A finite matrix's nonzero entry of least valuation divides every entry. Invertible row and column operations clear its row and column; induction on size gives a diagonal form, possibly with zero diagonal entries. A zero entry leaves an infinite $\mathbb Z_p$ quotient, so finite cokernel excludes it. All remaining diagonal multiplications are injective. By step 2.2 this applies to multiplication by $q_n$ on $A$ eventually. Together with step 3.1, it proves $E[q_n]=I[q_n]=0$ eventually. No assertion that $A$ is a field or a reduced algebra is used. [F4, F5, step 2.2, step 3.1, construct, algebra]

5.1 For all sufficiently large $n$, define $C\to I/q_nI$ by lifting one $c$ to $e\in E$ and taking $q_ne$ modulo $q_nI$. It lies in $I$ since $q_nC=0$, is independent of the lift, and is unique, so requires no choice function. If its value is zero, $q_n(e-i)=0$ for some $i\in I$; step 4.1 gives $e=i$, hence $c=0$. Element chasing gives $0\to C\to I/q_nI\to E/q_nE\to C\to0.$ Taking finite orders cancels the two $C$ terms exactly. Also $0\to K/(K\cap q_nM)\to M/q_nM\to I/q_nI\to0.$ For its middle kernel, if $\phi(x)=q_ni$, lift that one $i$ to $x'$ and use $x-q_nx'\in K$. The subgroups $K\cap q_nM$ descend in the fixed finite $K$ by step 2.1 and stabilize to $H$. Thus for one integer $\kappa\ge0$ and every sufficiently large $n$, $|M/q_nM|=p^\kappa|E/q_nE|,\qquad p^\kappa=|K/H|.$ The correction is constant, not merely bounded. [step 1.1, step 2.1, step 2.2, step 4.1, construct, algebra]

5.2 On the remainder basis of $A$ from step 4.1, multiplication has integral structure constants and compatible coefficient limits are complete by [F4]–[F5]. Distinguishedness gives $T^d\in pA$. Hence each monomial $p^iT^j$ with $i+j=N$ lies in $p^{i+\lfloor j/d\rfloor}A\subseteq p^{\lfloor N/d\rfloor}A$, proving $\mathfrak m^NA\subseteq p^{\lfloor N/d\rfloor}A$. By step 2.1, $X_n=\omega_n(T)$ therefore tends to zero p-adically in $A$. [F4, F5, step 2.1, step 4.1, algebra]

6.1 Use the polynomial $v_n$ of step 2.1, so $q_{n+1}=v_nq_n$ without dividing by $X_n$ in $A$. For odd $p$, eventually $X_n=pY_n$ and $v_n=pu_n,\qquad u_n=1+\sum_{2\le j<p}\frac{\binom pj}{p}X_n^{j-1}+p^{p-2}Y_n^{p-1}\in1+pA.$ For $p=2$, take $X_n=4Y_n$ instead; then $v_n=2+X_n=2(1+2Y_n)$, again $p$ times a member of $1+pA$. Its inverse is the geometric series whose tails are in $p^NA$, using the coefficient limits of step 5.2. The unit commutes with $q_n$, so $q_{n+1}A=pq_nA$ as image submodules. By step 4.1 the map $q_n:A\to q_nA$ is eventually an isomorphism and supplies an explicit free basis of its image. Thus $|q_nA/pq_nA|=p^d$, and the index chain gives $|A/q_{n+1}A|=p^d|A/q_nA|$. Starting at one sufficiently large index proves $\log_p|A/q_nA|=dn+c_A$ with one integer $c_A$, possibly negative. There is no operator identity $v_n=p$. [F5, step 2.1, step 4.1, step 5.2, construct, algebra]

7.1 Sum the block formulas. Step 3.1 gives $\mu(M)p^n-\mu(M)p^m$, step 6.1 gives $\lambda(M)n$ plus an integer, and step 5.1 gives the fixed integer $\kappa$. A finite maximum of the required bounds yields the claimed one integer $c$. If $M$ is finite, the valid map $M\to0$ and uniqueness in [F1] give $\mu=\lambda=0$ by [F2]; steps 1.1–2.1 make $q_nM=0$ eventually, so $c=\log_p|M|$. For $M=0$ take $c=0$. A distinguished factor dividing an eventual $q_n$ would make $A/q_nA$ surject onto the infinite positive-rank free module $R/(f)$, contrary to step 2.2. Only such factors are excluded by Given finiteness; no restriction on factors of $\omega_m$ alone is inserted. All primes, empty elementary lists and $q_{m,m}=1$ are covered. [F1, F2, F4, step 1.1, step 2.1, step 2.2, step 3.1, step 5.1, step 6.1, algebra] ∎
