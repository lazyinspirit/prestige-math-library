---
id: thm-iwasawa-coinvariant-growth-for-finitely-generated-torsion-modules
kind: theorem
title: Growth of finite coinvariants of a torsion Iwasawa module
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
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: J. Sharifi, Iwasawa Theory lecture notes
    url: https://www.math.ucla.edu/~sharifi/iwasawa.pdf
    locator: Contextual Iwasawa-growth reference only; no exact external theorem locator
      or full Sharifi proof freshly verified here.
verification: {}
axiom_use: No choice axiom is assumed. The proof uses finite presentations/decomposition
  data, finite matrix and exact-sequence arguments, finite subgroup stabilization,
  and canonical compatible coefficient limits. No continuity of the abstract module
  action is presumed.
---

## Statement

Let $M$ be a finitely generated torsion $\Lambda=\mathbb Z_p\llbracket T\rrbracket$-module and put $\omega_n(T)=(1+T)^{p^n}-1$. Assume $M/\omega_nM$ is finite for all sufficiently large $n$. Then there is an integer $\nu$ such that, for all sufficiently large $n$,
$$\log_p|M/\omega_nM|=\mu(M)p^n+\lambda(M)n+\nu.$$

## Statement references

[J. Sharifi, *Iwasawa Theory* (contextual growth reference; exact locator unverified)](https://www.math.ucla.edu/~sharifi/iwasawa.pdf)

## Facts & Assumptions

**Given:** A prime $p$, $R=\mathbb Z_p\llbracket T\rrbracket$, a finitely generated torsion $R$-module $M$, and the eventual finite-coinvariant hypothesis in the Statement. Write $\mathfrak m=(p,T)$.

[F1] There is an $R$-linear map $M$ to a finite elementary direct sum $E$ of $R/(p^e)$ and $R/(f^b)$, with finite kernel and cokernel; the exponents are positive and $f$ is monic distinguished irreducible. The full elementary data are unique. [[thm-iwasawa-module-structure-for-finitely-generated-modules]]

[F2] The invariants are $\mu(M)=\sum e$ and $\lambda(M)=\sum b\deg f$ for that elementary data; empty sums are zero. [[def-iwasawa-invariants-of-finitely-generated-torsion-lambda-module]]

[F3] The ring $R$ is a Noetherian local domain with maximal ideal $(p,T)$. In particular an element congruent to $1$ modulo that ideal is a unit. These are concrete choice-free properties of this power-series ring. [[lem-p-adic-power-series-noetherianity-and-coprime-finite-errors]]

[F4] A monic distinguished polynomial $P$ of degree $d$ gives unique power-series division with a polynomial remainder of degree below $d$. Thus $R/(P)$ is free of rank $d$ over $\mathbb Z_p$ on its remainder basis. [[lem-weierstrass-division-for-p-adic-power-series]]

[F5] The p-adic integers are compatible residues modulo $p^a$; their coefficient limits are unique, and their residue quotient has $p^a$ elements. [[def-p-adic-integers-as-compatible-residue-classes]]

[F6] For a positive-sized square matrix over a commutative ring, the adjugate identity multiplies it to its determinant times the identity. [[thm-adjugate-identity-over-a-commutative-ring]]

## Proof

1.1 If $M=0$, the empty elementary data give $\mu=\lambda=0$ and $\nu=0$ by [F1]–[F2]. Otherwise fix a single map $\phi:M\to E$ as in [F1], put $K=\ker\phi$, $I=\operatorname{im}\phi$ and $C=E/I$. Both $K$ and $C$ are finite $R$-modules. The proof compares every large-$n$ quotient using this same map and these same finite errors. [F1, F2, given, construct, algebra]

1.2 Any finite abstract $R$-module $Q$ is killed by a power of $\mathfrak m$, without a continuity hypothesis. The descending sequence $\mathfrak m^jQ$ consists of subsets of a finite set and stabilizes. Its stable member $U$ satisfies $U=\mathfrak mU$ and has finitely many generators. Expressing this equality on them gives $(I-B)$ killing their vector, with all entries of $B$ in $\mathfrak m$. Its determinant is $1$ modulo $\mathfrak m$, hence a unit by [F3]; [F6] gives $U=0$. Zero or empty-generator cases need no positive-sized matrix. Thus $\mathfrak m^aQ=0$ for some $a$, and $p^aQ=0$. Its finite successive quotients by powers of $p$ are finite $\mathbb F_p$-vector spaces, so $|Q|$ is a power of $p$, as is the order of any quotient of $Q$. [F3, F6, given, construct, algebra]

1.3 Multiplication by $\omega_n$ is injective on $R/(p^e)$ for every $e\ge1$. Indeed $\omega_n\equiv T^{p^n}\pmod p$ by repeated Frobenius, and multiplication by that power is injective on $\mathbb F_p\llbracket T\rrbracket$. If $\omega_nx\in p^eR$, reduction modulo $p$ gives $x=px_1$; cancel $p$ in the domain $R$ and repeat $e$ times to get $x\in p^eR$. This includes $n=0$ and $p=2$. [F3, F5, given, algebra]

2.1 The polynomials $\omega_n$ lie in $\mathfrak m^{n+1}$. Start with $\omega_0=T$. If $X=\omega_n\in\mathfrak m^{n+1}$, then $\omega_{n+1}=pX+\sum_{2\le j<p}\binom pjX^j+X^p\in\mathfrak m^{n+2}$, since every middle coefficient is divisible by $p$ and $p(n+1)\ge n+2$, including $p=2,n=0$. Moreover $\omega_{n+1}=\omega_n q_p(\omega_n)$ with the polynomial $q_p(X)=\sum_{j=1}^p\binom pjX^{j-1}$. In particular $\omega_{n+1}M\subseteq\omega_nM$. Applying step 1.2 to the fixed $K,C$ shows $\omega_nK=\omega_nC=0$ for every sufficiently large $n$. [F3, step 1.1, step 1.2, algebra]

2.2 For any $n$, $I/\omega_nI$ is a quotient of $M/\omega_nM$. The right-exact maps $I/\omega_nI\to E/\omega_nE\to C/\omega_nC\to0$ follow directly by lifting an element and subtracting an $\omega_n$ multiple. As $C$ is finite, the assumed finiteness of $M/\omega_nM$ therefore makes $E/\omega_nE$ finite for all sufficiently large $n$. Each elementary summand then has finite cokernel under $\omega_n$. This establishes cokernel finiteness before using injectivity on $E$. [step 1.1, given, algebra]

2.3 The polynomial $\omega_n$ is monic of degree $p^n$, and its reduction is $T^{p^n}$ as in step 1.3. By [F4], divide first in $R$ to obtain the free remainder module $R/(\omega_n)\cong\mathbb Z_p^{p^n}$; only then quotient by $p^e$. Consequently $|R/(p^e,\omega_n)|=p^{ep^n}$. No division over a non-DVR coefficient quotient is being assumed. This is the exact contribution of each $p^e$ summand. [F4, F5, step 1.3, algebra]

3.1 For a distinguished summand put $P=f^b$, $d=b\deg f>0$ and $A=R/(P)$. By [F4] it is free of rank $d$ over $\mathbb Z_p$; it may be nonreduced and is not assumed to be a field. A finite-cokernel endomorphism of $\mathbb Z_p^d$ is injective by the following finite matrix proof. Each nonzero coefficient is $p^r$ times a unit, since its first nonzero residue gives $r$ and the unit has unique compatible modular inverses by [F5]. In a finite matrix choose a nonzero entry of least valuation; it divides every entry. Invertible row/column operations clear its row and column, and induction on matrix size gives a diagonal matrix with possible trailing zeros. A zero diagonal leaves an infinite $\mathbb Z_p$ quotient, so finite cokernel excludes all zeros. The diagonal map, hence the original map, is injective. Equivalently its determinant is nonzero. By step 2.2 this applies to multiplication by $\omega_n$ on $A$ for all sufficiently large $n$. Also an $f$ dividing some $\omega_l$ cannot occur: for $n\ge l$, $A/\omega_nA$ would surject onto $R/(f)$, an infinite free $\mathbb Z_p$-module of positive rank by [F4]. Thus the original finiteness hypothesis itself excludes cyclotomic factors, without an added restriction. [F4, F5, step 2.2, construct, algebra]

4.1 For all sufficiently large $n$, steps 1.3 and 3.1 give $E[\omega_n]=0$, and therefore $I[\omega_n]=0$; also $\omega_nC=0$ by step 2.1. Define $\delta:C\to I/\omega_nI$ by lifting $c$ to one $e\in E$ and taking $\omega_ne$ modulo $\omega_nI$. The class lies in $I$, is independent of the lift, and is unique, so no choice function is needed. If it is zero, $\omega_n(e-i)=0$ for some $i\in I$, hence $e=i$ by injectivity on $E$ and $c=0$. Element chasing now gives $0\to C\xrightarrow{\delta}I/\omega_nI\to E/\omega_nE\to C\to0$. All terms are finite by step 2.2 and the injection from finite $C$. Taking orders cancels the two $|C|$ factors EXACTLY: $|I/\omega_nI|=|E/\omega_nE|$. [step 1.1, step 2.1, step 2.2, step 1.3, step 3.1, construct, algebra]

4.2 In the distinguished algebra $A=R/(P)$ of step 3.1, the remainder basis gives integral multiplication structure constants and complete coefficientwise $p$-adic limits by [F4]–[F5]. Since $P$ is distinguished, $T^d\in pA$. Thus a monomial $p^iT^j$ with $i+j=N$ belongs to $p^{i+\lfloor j/d\rfloor}A\subseteq p^{\lfloor N/d\rfloor}A$, proving $\mathfrak m^NA\subseteq p^{\lfloor N/d\rfloor}A$. From step 2.1, $X_n=\omega_n(T)\in p^{\lfloor(n+1)/d\rfloor}A$, so it tends $p$-adically to zero. Completeness here is on a fixed finite free basis, not a field-extension or general quotient-completion assertion. [F4, F5, step 2.1, step 3.1, algebra]

5.1 There is an exact sequence $0\to K/(K\cap\omega_nM)\to M/\omega_nM\to I/\omega_nI\to0$: if $\phi(m)=\omega_ni$, lift that one $i$ to $m'$ and use $m-\omega_nm'\in K$. The kernel on $K$ is precisely its indicated intersection. By step 2.1 these intersections descend inside the fixed finite group $K$, so finite cardinality makes them stabilize to one subgroup $H$. Step 1.2 gives $|K/H|=p^\kappa$ for an integer $\kappa\ge0$. With step 4.1 this proves $|M/\omega_nM|=p^\kappa|E/\omega_nE|$ for every sufficiently large $n$. The correction has stabilized to the single integer $\kappa$. [step 1.1, step 1.2, step 2.1, step 4.1, algebra]

5.2 Use the polynomial $v_n=q_p(X_n)$ from step 2.1, so $\omega_{n+1}=X_nv_n$ without dividing by a possibly zero-dividing $X_n$ in $A$. For odd $p$, take $n$ large enough that $X_n=pY_n$. Then $v_n=pu_n$, where $u_n=1+\sum_{2\le j<p}(\binom pj/p)X_n^{j-1}+p^{p-2}Y_n^{p-1}\in1+pA$. For $p=2$, take $X_n=4Y_n$ instead; then $v_n=2+X_n=2(1+2Y_n)$, again $p$ times an element of $1+pA$. Such an element is a unit: its inverse is the geometric sum whose tails are in $p^NA$, with the canonical compatible coefficient limits of step 4.2. This works in nonreduced $A$. Hence $\omega_{n+1}A=p\omega_nA$ as image submodules for all sufficiently large $n$, since the unit $u_n$ commutes with $X_n$. There is no operator identity $v_n=p$. [step 2.1, step 4.2, construct, algebra]

6.1 Multiplication by $X_n$ is injective for all sufficiently large $n$ by steps 2.2 and 3.1. It identifies $A$ with $L_n=\omega_nA$, whose explicit free basis is $X_n$ times the remainder basis. Thus $|L_n/pL_n|=p^d$ by [F5]. Step 5.2 gives $L_{n+1}=pL_n$, and the finite index chain yields $|A/\omega_{n+1}A|=p^d|A/\omega_nA|$. Starting at one large index, its logarithmic order is therefore $dn+c_A$ with one integer $c_A$, possibly negative. No eigenvalue or splitting-field argument is used. [F5, step 2.2, step 3.1, step 5.2, algebra]

7.1 Multiply the finitely many block orders. Step 2.3 contributes $(\sum e)p^n=\mu(M)p^n$, and step 6.1 contributes $(\sum b\deg f)n=\lambda(M)n$ by [F2], plus one integer constant $c_E$. Empty lists contribute zero. Step 5.1 gives the required equality with $\nu=c_E+\kappa\in\mathbb Z$ after taking a finite maximum of the bounds. All $p$-power parts are retained. If $M$ is finite, the valid map $M\to0$ and uniqueness in [F1]–[F2] give $\mu=\lambda=0$; steps 1.2 and 2.1 make $\omega_nM=0$ eventually, giving $\nu=\log_p|M|$, an integer. Along with the zero case of step 1.1, this covers the full original unqualified Statement for every prime, with no continuity or vanishing hypothesis added. [F1, F2, step 1.1, step 1.2, step 2.1, step 5.1, step 2.3, step 6.1, algebra] ∎
