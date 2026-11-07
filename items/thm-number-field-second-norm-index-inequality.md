---
id: thm-number-field-second-norm-index-inequality
kind: theorem
title: "Second norm-index inequality for a finite Galois number-field extension"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 17
deps:
  - def-idele-class-group-of-a-global-field
  - def-idele-group-of-a-global-field
  - thm-number-field-first-norm-index-inequality
  - thm-number-field-infinitely-many-nonsplit-primes
  - thm-local-artin-reciprocity-and-norm-index
  - lem-unramified-local-unit-norms-and-cohomology
  - thm-s-unit-theorem
  - thm-finiteness-of-the-number-field-class-group
  - def-s-integers-and-s-units-of-a-number-field
  - thm-weak-approximation-for-inequivalent-absolute-values
  - thm-kummer-correspondence
  - thm-cyclic-degree-n-extensions-with-roots-of-unity-are-kummer
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
  - thm-product-formula-for-number-fields
  - lem-hensel-factor-lifting-over-a-complete-valued-field
  - thm-finite-unramified-local-extensions-classified-by-residue-extensions
  - thm-unique-factorisation-of-ideals-in-dedekind-domains
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Class Field Theory, version 4.03"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "VII §§5–6, Theorem 5.1 and the algebraic proof in §6"
    - title: "M. A. Sharifi, Algebraic Number Theory"
      url: "https://math.ucla.edu/~sharifi/notes/algnum-ch10.html"
      locator: "§10.8, Theorem 10.8.1 and proof"
verification: {}
---

## Statement

Assume the Axiom of Choice (AC), Countable Choice (CC), and Dependent Choice (DC). Let $L/K$ be a finite Galois extension of number fields with group $G$. Then $C_K/N_{L/K}C_L$ is finite and its order divides $[L:K]$.

## Statement references

[[def-idele-class-group-of-a-global-field]]

[[thm-number-field-first-norm-index-inequality]]

[Milne, *Class Field Theory*, VII §§5–6](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

[Sharifi, *Algebraic Number Theory*, §10.8](https://math.ucla.edu/~sharifi/notes/algnum-ch10.html)

## Facts & Assumptions

**Given:** AC, Countable Choice, and DC; a finite Galois number-field extension $L/K$. These are exactly the hypotheses of the Statement.

[F1] Norms on fields and ideles are transitive and commute with extension of scalars. Extending a $K$-idele class to a degree-$d$ extension and taking its norm gives its $d$th power. Idelic norms induce norms on class groups. [[def-idele-group-of-a-global-field]] [[def-idele-class-group-of-a-global-field]]

[F2] For every nontrivial cyclic number-field extension $E/B$, the class norm index is finite and at least $[E:B]$. Every nontrivial finite solvable Galois extension has infinitely many nonsplit primes. [[thm-number-field-first-norm-index-inequality]] [[thm-number-field-infinitely-many-nonsplit-primes]]

[F3] Under AC the ideal class group is finite. If $S$ includes all archimedean places and finitely many finite primes, then $U(S)=\mathcal O_{K,S}^{\times}$ has rank $|S|-1$ and finite cyclic torsion $\mu(K)$. Ideals factor uniquely under AC. [[thm-finiteness-of-the-number-field-class-group]] [[thm-s-unit-theorem]] [[def-s-integers-and-s-units-of-a-number-field]] [[thm-unique-factorisation-of-ideals-in-dedekind-domains]]

[F4] When $\mu_p\subseteq K$, Kummer theory identifies finite-dimensional subspaces of $K^\times/K^{\times p}$ with finite abelian exponent-$p$ extensions through the perfect radical pairing. In particular every cyclic degree-$p$ extension is $K(a^{1/p})$. [[thm-kummer-correspondence]] [[thm-cyclic-degree-n-extensions-with-roots-of-unity-are-kummer]]

[F5] At a finite place, local Artin reciprocity gives the norm quotient of a finite Galois local extension and its order. In an unramified local extension the unit norm is onto. [[thm-local-artin-reciprocity-and-norm-index]] [[lem-unramified-local-unit-norms-and-cohomology]]

[F6] The normalized number-field absolute values satisfy the product formula. [[thm-product-formula-for-number-fields]]

[F7] Hensel lifting separates coprime factors, and finite unramified extensions correspond to finite residue extensions. Thus, if the residue characteristic does not divide $p$ and $a$ is a unit, adjoining a $p$th root of $a$ is unramified: lift a residue-field splitting extension of $X^p-\bar a$, whose roots are simple. [[lem-hensel-factor-lifting-over-a-complete-valued-field]] [[thm-finite-unramified-local-extensions-classified-by-residue-extensions]]

[A1] The original AC/CC/DC hypotheses cover the stated local norm, global first-inequality and nonsplitting suppliers, finite class-group/S-unit choices, and simultaneous local norm preimages. No global class-formation or global reciprocity theorem is used. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

## Proof

**Proof technique:** the algebraic Kummer/S-unit proof of the prime-degree inequality, with the local power index and all group-theoretic reductions supplied explicitly.

**Given:** The original data above. Write $Q(L/K)=C_K/N_{L/K}C_L$.

1.1 We first compute a local index. Let $B$ be a finite extension of $\mathbb Q_\ell$, with residue size $q$, normalized integer valuation $v$, and unit group $U$. Put $e=v(p)$, where $p$ is any rational prime, and choose $m>e/(p-1)$. The map $z\mapsto(1+z)^p-1$ is a bijection from $\pi^m\mathcal O_B$ to $\pi^{m+e}\mathcal O_B$. Indeed its linear term is $pz$; every nonlinear term divided by $p$ has strictly larger valuation than $z$ on that ball. For prescribed $b\in\pi^{m+e}\mathcal O_B$, solve $z=(b-\sum_{j=2}^p\binom pj z^j)/p$ by iteration from $0$. The right side preserves $\pi^m\mathcal O_B$ and contracts differences by a positive power of $\pi$: for $2\le j<p$ its coefficient after division by $p$ is integral and contributes at least $(j-1)m$, while the last term contributes $(p-1)m-e>0$. Completeness gives the unique limit, proving surjectivity and injectivity. Thus $U_m^p=U_{m+e}$ and $U_m$ has no nonidentity $p$-torsion. On the finite quotients the map $U/U_m\to U^p/U_m^p$ has kernel $\mu_p(B)U_m/U_m$, of size $|\mu_p(B)|$. Counting gives $[U:U^p]=|\mu_p(B)|q^e$ and $[B^\times:B^{\times p}]=p|\mu_p(B)|/|p|_B$. For $B=\mathbb R$ or $\mathbb C$ the same latter formula follows by the sign map or the existence of complex $p$th roots, with normalized $|p|_B=p$ or $p^2$. [given, construct, algebra]

1.2 For the moment assume that $L/K$ is cyclic of degree $p$ and that $\mu_p\subseteq K$. By [F4], write $L=K(a^{1/p})$. Choose a finite set $S$ of places containing the archimedean places, the divisors of $p$ and $a$, and finite primes whose ideal classes generate the class group. Put $s=|S|$, counting each complex pair once. By [F3], $U(S)/U(S)^p$ has order $p^s$: its free rank is $s-1$ and its finite cyclic torsion contains $\mu_p$, hence contributes one factor $p$. Also $U(S)\cap K^{\times p}=U(S)^p$, since a $p$th root of an $S$-unit has zero valuation outside $S$. Let $M=K(U(S)^{1/p})$. The perfect Kummer pairing gives $[M:K]=p^s$, $L\subseteq M$, and $[M:L]=p^t$ with $t=s-1$. The extension $M/K$ is unramified outside $S$ by [F7]. Finally, if $I_S$ denotes the ideles with unit components outside $S$, then $\mathbb A_K^\times=K^\times I_S$: multiply an idele's associated fractional ideal by a principal ideal to make its ideal class supported on the chosen class-group generators in $S$. [F3, F4, F7, A1, given, choose, algebra]

2.1 Choose primes of $L$ outside $S$ whose Frobenius elements form an $\mathbb F_p$-basis of $\operatorname{Gal}(M/L)$. Such primes exist using only [F2]: if all the outside-$S$ Frobenius elements generated a proper subgroup, its fixed field would be a nontrivial abelian extension of $L$ in which every prime outside a finite set splits, contrary to infinitely many nonsplit primes. A finite basis can therefore be extracted. If one of these relative Frobenius elements is nonidentity, its local extension $M_w/L_u$ has degree $p$. But $M/K$ is unramified of exponent $p$ at the underlying prime $v$, so $[M_w:K_v]\le p$ and consequently $L_u=K_v$. Since $L/K$ is Galois, $v$ splits completely in $L$. The relative Frobenius is therefore the Frobenius at $v$ for $M/K$. Their underlying primes form a set $T$ of size $t$, disjoint from $S$, whose Frobenius elements form the required basis of $\operatorname{Gal}(M/L)$. [F2, F4, F7, step 1.2, construct]

3.1 For $u\in U(S)$, its radical $u^{1/p}$ lies in $L$ if and only if $u$ is a $p$th power in every $K_v$, $v\in T$. In one direction $L_u=K_v$ at these split places. In the other direction, the root lies in the local base field at each such place and is fixed by the corresponding Frobenius; these Frobenius elements generate $\operatorname{Gal}(M/L)$, so the root lies in $L$. It follows from [F4] over $L$ that the kernel of $U(S)\to\prod_{v\in T}U_v/U_v^p$ has index $[M:L]=p^t$. Each factor on the right has order $p$ by step 1.1, since $v\notin S$ has $|p|_v=1$ and contains $\mu_p$. The map is thus onto a group of order $p^t$. [F4, step 1.1, step 1.2, step 2.1, algebra]

4.1 We need the following consequence of this surjectivity. Suppose $b\in K^\times$ is a $p$th power in every $K_v$, $v\in S$, and is a unit outside $S\cup T$. Set $F=K(b^{1/p})$ and let $D$ have local factors $K_v^\times$ on $S$, $U_v^p$ on $T$, and $U_v$ elsewhere. Each factor of $D$ is a local norm from $F$: over $S$ the extension splits, over $T$ the local quotient has order dividing $p$ by [F5], and elsewhere the extension is unramified by [F7]. At split archimedean places this is immediate; all other places here are finite. Choosing local norm preimages, unit preimages outside finitely many places by [F5], gives $D\subseteq N_{F/K}\mathbb A_F^\times$. Step 3.1 gives $I_S=D\,U(S)$, since $I_S/D=\prod_{v\in T}U_v/U_v^p$. Step 1.2 then implies $\mathbb A_K^\times=K^\times D\subseteq K^\times N_{F/K}\mathbb A_F^\times$. If $F\ne K$, [F4] makes $F/K$ cyclic of degree $p$, contradicting the first norm-index inequality [F2]. Hence $F=K$ and $b\in K^{\times p}$. [F2, F4, F5, F7, A1, step 1.2, step 3.1, construct]

5.1 Define $E$ to have local factors $K_v^{\times p}$ on $S$, $K_v^\times$ on $T$, and $U_v$ elsewhere. The subgroup $E$ is contained in $N_{L/K}\mathbb A_L^\times$: on $S$ each local degree divides $p$, so local $p$th powers are norms by [F5] (at a real place the only possible nontrivial norm image is the positive reals, which contain the squares); on $T$ the extension splits by step 2.1; elsewhere it is unramified and units are norms. The same local-preimage construction used in step 4.1 gives an idele preimage. Also $K^\times\cap E=U(S\cup T)^p$: an element of the intersection satisfies the hypotheses of step 4.1 and its $p$th root is an $S\cup T$-unit; conversely every such $p$th power lies in $E$. [F5, A1, step 2.1, step 4.1, construct, algebra]

6.1 The finite index $[I_{S\cup T}:E]$ is $\prod_{v\in S}[K_v^\times:K_v^{\times p}]=p^{2s}/\prod_{v\in S}|p|_v=p^{2s}$, by step 1.1 and [F6]; all places where $|p|_v\ne1$ are in $S$. The elementary quotient map $I_{S\cup T}/E\to K^\times I_{S\cup T}/K^\times E$ has kernel $(K^\times\cap I_{S\cup T})/(K^\times\cap E)=U(S\cup T)/U(S\cup T)^p$, of order $p^{s+t}$ by [F3]. Since $K^\times I_{S\cup T}=\mathbb A_K^\times$, we obtain $[\mathbb A_K^\times:K^\times E]=p^{2s-(s+t)}=p^{s-t}=p$. Step 5.1 now makes $Q(L/K)$ a quotient of a group of order $p$, so its order divides $p$. [F3, F6, step 1.1, step 1.2, step 5.1, algebra]

7.1 For an arbitrary cyclic degree-$p$ extension, put $K'=K(\mu_p)$ and $L'=LK'$. The degree $m=[K':K]$ divides $p-1$, so $K'\cap L=K$ and $[L':K']=p$. Extension and norm define maps $Q(L/K)\to Q(L'/K')\to Q(L/K)$ by [F1]. To check the first map, scalar extension of a local norm is the norm of the scalar-extended element in the corresponding finite product of local fields, so it carries norms to norms; the second map is well-defined by norm transitivity. Their composite is multiplication by $m$. The group $Q(L/K)$ is killed by $p$, since $p$th powers of extended ideles are norms. Multiplication by $m$ is therefore an automorphism, so the first map is injective. Step 6.1 applied over $K'$ proves that its order divides $p$ for every cyclic degree-$p$ extension. [F1, step 6.1, algebra]

8.1 By induction, the same divisibility holds for a Galois extension with finite $p$-group $P$. Choose a normal subgroup $H$ of index $p$ and let $M=L^H$. There is an exact sequence $C_M/N_{L/M}C_L\to C_K/N_{L/K}C_L\to C_K/N_{M/K}C_M\to1$: the first arrow is induced by $N_{M/K}$, the second is the quotient map, and transitivity identifies the first image with the second kernel. The outer groups have orders dividing $|H|$ and $p$ by induction and step 7.1. Thus the middle group is finite of order dividing $|P|$. The trivial extension starts the induction. [F1, step 7.1, construct, algebra]

9.1 Finally take a Sylow $p$-subgroup $P\le G$ and $M=L^P$, with $d=[M:K]$ prime to $p$. Extension defines $Q(L/K)\to Q(L/M)$: if $x$ is an $L$-idele, the extension to $M$ of $N_{L/K}x$ is $N_{L/M}(\prod_{t\in P\backslash G}t x)$, using left-coset representatives, since the double product ranges over $G$. Norm back to $K$ defines a reverse map, and their composite is multiplication by $d$. Therefore the $p$-primary subgroup of $Q(L/K)$ injects into $Q(L/M)$; by step 8.1 it is finite of order dividing $|P|$. The whole group $Q(L/K)$ is killed by $|G|$ by [F1], so elementary Bezout decomposes it as the direct sum of its $p$-primary subgroups for the finitely many primes dividing $|G|$. Each of these has the proved finite order bound. Multiplying their orders proves that $Q(L/K)$ is finite and its order divides $|G|=[L:K]$, exactly as stated. [F1, step 8.1, construct, algebra] ∎
