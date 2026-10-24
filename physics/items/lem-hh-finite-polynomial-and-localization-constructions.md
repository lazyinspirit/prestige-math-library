---
id: lem-hh-finite-polynomial-and-localization-constructions
kind: lemma
title: "Multivariate polynomial and Laurent rings over commutative rings, domains and fraction fields"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 0
deps: [def-polynomial-ring-over-a-commutative-ring, thm-polynomial-ring-is-a-commutative-ring, thm-universal-property-of-a-polynomial-ring, def-multivariate-polynomial-ring-by-iteration, cor-multivariate-polynomial-ring-over-a-domain-is-a-domain, def-free-module-on-a-set-and-standard-basis, thm-universal-property-of-free-modules, lem-finite-sum-reindexing-and-fubini, def-zero-divisor-and-integral-domain, def-commutative-ring, def-field, def-ring-homomorphism, def-equivalence-relation, def-algebra-over-a-commutative-ring, thm-int-ordered-ring, def-group-power, lem-group-power-laws, lem-ring-units-form-a-group]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "George M. Bergman, An Invitation to General Algebra and Universal Constructions (Springer Universitext; author's revised PDF v3.4, April 30, 2020)"
      url: "https://math.berkeley.edu/~gbergman/245/3.4.pdf"
      locator: "§4.12 printed pp. 83–91: free commutative rings are polynomial rings and the monoid-ring construction"
    - title: "The CRing Project, open-source commutative algebra text (2016 PDF; Chapter 13)"
      url: "https://math.colorado.edu/topology/cringproject.pdf"
      locator: "§13.1, printed pp. 111–119: Definitions 13.1.2–13.1.4, printed p. 112: localization of modules and rings; Example 13.1.7, printed p. 113: the quotient field of a domain; Remark 13.1.6, printed p. 113 ($\\mathbb Z[X,X^{-1}]$)"
verification:
  audited: "2026-10-08"
  precheck: pass
---

## Statement

Let $R$ be a commutative ring and $n\ge0$.

1. **Multivariate polynomial ring.** The ring $R[x_1,\dots,x_n]$ of [[def-multivariate-polynomial-ring-by-iteration]] is a commutative $R$-algebra, free as an $R$-module on the monomials $x^\alpha=x_1^{\alpha_1}\cdots x_n^{\alpha_n}$ ($\alpha\in\mathbb N^n$), and for every commutative $R$-algebra $A$ and elements $a_1,\dots,a_n\in A$ there is a unique $R$-algebra homomorphism $R[x_1,\dots,x_n]\to A$ with $x_i\mapsto a_i$. If $R$ is an integral domain, so is $R[x_1,\dots,x_n]$.
2. **Laurent polynomial ring.** The set $\Lambda_{R,n}$ of finitely supported functions $\mathbb Z^n\to R$ with coefficientwise addition and convolution $(ab)_\gamma=\sum_{\alpha+\beta=\gamma}a_\alpha b_\beta$ (summed only over the finite supports of $a$ and $b$) is a commutative $R$-algebra, free as an $R$-module on the monomials $x^\alpha$ ($\alpha\in\mathbb Z^n$); each $x_i$ is a unit. For every commutative $R$-algebra $A$ and units $u_1,\dots,u_n\in A$ there is a unique $R$-algebra homomorphism $\Lambda_{R,n}\to A$ with $x_i\mapsto u_i$. If $R$ is an integral domain, so is $\Lambda_{R,n}$; no domain assertion is made over a ring with zero divisors. Only finitely many variables are used; in applications to Coxeter systems with a finite generator set, $W$ may nevertheless be infinite.
3. **Fraction field.** If $R$ is an integral domain, then on pairs $(f,g)$ with $f,g\in\Lambda_{R,n}$ and $g\ne0$, the relation $(f,g)\sim(f',g')$ iff $fg'=f'g$ is an equivalence relation compatible with $(f,g)+(f',g'):=(fg'+f'g,gg')$ and $(f,g)(f',g'):=(ff',gg')$, and the quotient $K(\Lambda_{R,n})$ is a field containing $\Lambda_{R,n}$ through $f\mapsto[(f,1)]$. The same construction gives the fraction field of $R[x_1,\dots,x_n]$.

## Facts & Assumptions

**Given:** A commutative ring $R$, an integer $n\ge0$, and a commutative $R$-algebra $A$.

[F1] The polynomial ring $R[x]$ is the set of finitely supported functions $\mathbb N\to R$ with coefficientwise addition and convolution $(ab)_k=\sum_{i+j=k}a_ib_j$; its elements are written $\sum_ia_ix^i$, and the constant embedding sends $r$ to the sequence supported at $0$ with coefficient $r$ ([[def-polynomial-ring-over-a-commutative-ring]]).

[F2] These operations make $R[x]$ a commutative ring and the constant map $R\to R[x]$ an injective unital ring homomorphism ([[thm-polynomial-ring-is-a-commutative-ring]]).

[F3] A coefficient homomorphism and the image of $x$ determine a unique unital ring homomorphism $R[x]\to S$; it is $\operatorname{ev}_{\varphi,s}(\sum_ia_ix^i)=\sum_i\varphi(a_i)s^i$ ([[thm-universal-property-of-a-polynomial-ring]]).

[F4] $R[x_1,\dots,x_n]$ is defined by $R[x_1,\dots,x_0]:=R$ and $R[x_1,\dots,x_{n+1}]:=R[x_1,\dots,x_n][x_{n+1}]$, so all indeterminates commute ([[def-multivariate-polynomial-ring-by-iteration]]).

[F5] If $R$ is an integral domain then so is $R[x_1,\dots,x_n]$, including $n=0$ ([[cor-multivariate-polynomial-ring-over-a-domain-is-a-domain]]).

[F6] The free module $R^{(X)}=\bigoplus_{x\in X}R$ has standard basis $e_x$ and every element is uniquely a finite sum $\sum_{x\in F}r_xe_x$ ([[def-free-module-on-a-set-and-standard-basis]]).

[F7] A set map from a basis into a module extends uniquely to an $R$-linear map ([[thm-universal-property-of-free-modules]]).

[F8] Finite sums in a commutative monoid are invariant under reindexing, split over disjoint unions and satisfy Fubini ([[lem-finite-sum-reindexing-and-fubini]]).

[F9] An integral domain is a commutative ring with $1\ne0$ and no zero divisors: $ab=0$ implies $a=0$ or $b=0$ ([[def-zero-divisor-and-integral-domain]], [[def-commutative-ring]]).

[F10] Equivalence relations, classes and quotient sets; a relation between pairs is an equivalence relation when reflexive, symmetric and transitive ([[def-equivalence-relation]]).

[F11] An $R$-algebra carries a central unital structure map ([[def-algebra-over-a-commutative-ring]], [[def-ring-homomorphism]]).

[F12] The integers form a totally ordered commutative ring; in particular their addition is associative and commutative and their order is translation-invariant ([[thm-int-ordered-ring]]).

[F13] The units of a ring form a group, with integer powers defined by natural powers and inverses and satisfying $u^{a+b}=u^au^b$ ([[lem-ring-units-form-a-group]], [[def-group-power]], [[lem-group-power-laws]]).

## Proof

**Proof technique:** direct.

1.1 Multivariate basis and universal property, by induction on $n$. For $n=0$, $R[x_1,\dots,x_0]=R$ by [F4], the single monomial $x^{(0)}=1$ is a basis of the free rank-one module $R$ by [F6], and the structure map of $A$ is the unique $R$-algebra homomorphism $R\to A$ by [F11]. For the step, put $S:=R[x_1,\dots,x_n]$, free over $R$ on the monomials $x^\alpha$ by induction, and $R[x_1,\dots,x_{n+1}]=S[x_{n+1}]$ by [F4]: by [F1] and [F2] (applied over the coefficient ring $S$) an element of $S[x_{n+1}]$ is a finitely supported function $k\mapsto s_k$ with $s_k\in S$, each $s_k=\sum_\alpha a_{\alpha,k}x^\alpha$ a finite $R$-linear combination, so substituting the unique coefficient expansions gives a unique finite $R$-linear combination of the monomials $x^\alpha x_{n+1}^k$, and these therefore form an $R$-basis indexed by $\mathbb N^n\times\mathbb N\cong\mathbb N^{n+1}$; applying [F3] twice, a unital $R$-algebra homomorphism $S[x_{n+1}]\to A$ is exactly a unital $R$-algebra homomorphism $S\to A$ together with an element $a\in A$ (the image of $x_{n+1}$), which by induction is exactly images $a_1,\dots,a_{n+1}\in A$ of the generators. [given, F1, F2, F3, F4, F6, F11, algebra]

1.2 If $R$ is an integral domain, $R[x_1,\dots,x_n]$ is one by [F5]. [given, F5]

1.3 Construction of $\Lambda_{R,n}$: let $\Lambda_{R,n}:=R^{(\mathbb Z^n)}$ be the free $R$-module with standard basis the monomials $x^\alpha$ by [F6], and define multiplication on the basis by $x^\alpha x^\beta:=x^{\alpha+\beta}$, extended $R$-bilinearly, so that $(ab)_\gamma=\sum_{\substack{\alpha\in\operatorname{supp}a,\ \beta\in\operatorname{supp}b\\\alpha+\beta=\gamma}}a_\alpha b_\beta$ is a finite sum by [F8], and $\operatorname{supp}(ab)\subseteq\operatorname{supp}a+\operatorname{supp}b$ is finite. The rule is closed and associative because $\mathbb Z^n$ has associative, commutative coordinatewise addition by [F12] and reindexing the finite triple sum gives $((ab)c)_\gamma=(a(bc))_\gamma=\sum_{\alpha+\beta+\delta=\gamma}a_\alpha b_\beta c_\delta$ by [F8]; it is commutative because $\alpha+\beta=\beta+\alpha$ and $R$ is commutative; it is distributive over the coefficientwise addition inherited from [F6]; and the basis vector $x^0$, coefficient $1_R$ at $0$ and $0$ elsewhere, is a two-sided identity. Hence $\Lambda_{R,n}$ is a commutative ring, it is an $R$-algebra through $r\mapsto r x^0$ by [F11], it is free on the monomials by construction, and each $x_i$ is a unit since the monomial $x^{-e_i}$ with coefficient $1_R$ satisfies $x_ix^{-e_i}=x^{e_i-e_i}=x^0=1$. [given, F6, F8, F11, F12, algebra]

1.4 Universal property of $\Lambda_{R,n}$: let $u_1,\dots,u_n\in A$ be units and for $\alpha\in\mathbb Z^n$ put $u^\alpha:=u_1^{\alpha_1}\cdots u_n^{\alpha_n}$, negative exponents denoting powers of the inverses. Every element of $\Lambda_{R,n}$ is a unique finite sum $\sum_\alpha a_\alpha x^\alpha$ by [F6], so $x^\alpha\mapsto u^\alpha$ extends uniquely to an $R$-linear map $\Phi:\Lambda_{R,n}\to A$ by [F7]; it is a unital ring homomorphism because $u^{\alpha+\beta}=u^\alpha u^\beta$ and $u^0=1$ in $A$ by [F13], applied in the unit group of $A$, which is abelian because $A$ is commutative, and it is the unique $R$-algebra homomorphism with $x_i\mapsto u_i$ because the monomials span. [given, F6, F7, F13, algebra]

1.5 Domain of $\Lambda_{R,n}$: suppose $R$ is an integral domain. Order $\mathbb Z^n$ lexicographically: distinct tuples are compared at their first differing coordinate. By [F12] the integer order is total, and adding the same tuple preserves that first differing coordinate and its strict comparison; hence this is a translation-invariant total order (for $n=0$, there is just the empty tuple). For nonzero $a,b\in\Lambda_{R,n}$ the finite supports $\operatorname{supp}a,\operatorname{supp}b$ are nonempty and have greatest elements $\alpha,\beta$. A coefficient $(ab)_\gamma$ with $\gamma>\alpha+\beta$ is a sum of products $a_{\alpha'}b_{\beta'}$ with $\alpha'+\beta'=\gamma$, and each such term has $\alpha'>\alpha$ (then $a_{\alpha'}=0$) or $\beta'>\beta$ (then $b_{\beta'}=0$), since $\alpha'\le\alpha$ and $\beta'\le\beta$ would give $\alpha'+\beta'\le\alpha+\beta<\gamma$; so $(ab)_\gamma=0$ for $\gamma>\alpha+\beta$. For $\gamma=\alpha+\beta$ every term indexed within the supports with $\alpha'\ne\alpha$ has $\alpha'<\alpha$ and then $\beta'>\beta$ by strict order invariance, hence vanishes, and the remaining term is $a_\alpha b_\beta\ne0$ because $R$ has no zero divisors [F9]; so $(ab)_{\alpha+\beta}\ne0$ and $ab\ne0$. Since $1_R\ne0$ in $R$, the unit of $\Lambda_{R,n}$ differs from $0$, so $\Lambda_{R,n}$ is an integral domain. [given, F8, F9, F12, algebra]

1.6 Fraction field for a commutative integral domain $D$: on $P:=\{(f,g):f,g\in D,\ g\ne0\}$ define $(f,g)\sim(f',g')$ iff $fg'=f'g$. This is reflexive and symmetric, and transitive: from $fg'=f'g$ and $f'g''=f''g'$ one gets $g'(fg'')= (fg')g''=(f'g)g''=f'(gg'')=f'(g''g)=(f'g'')g=(f''g')g=f''(g'g)=g'(f''g)$, so cancellation of the nonzero $g'$ in the domain gives $fg''=f''g$. Sums $(f,g)+(f',g')=(fg'+f'g,gg')$ and products $(f,g)(f',g')=(ff',gg')$ have nonzero second components since $D$ has no zero divisors, and they respect $\sim$: if $fg'=f'g$ and $hk'=h'k$ then $(fk+hg)(g'k')=fkg'k'+hgg'k'=f'k'(gk)+h'g'(gk)=(f'k'+h'g')(gk)$ and $fh\,g'k'=f'g\,h'k=f'h'\,gk$, so the operations are well defined on the quotient set $D'=P/{\sim}$ of [F10]. Writing $f/g$ for $[(f,g)]$, addition of $f/g,h/k,l/m$ in either order gives $(fkm+hgm+lgk)/(gkm)$, multiplication in either order gives $fhl/(gkm)$, and distributivity gives $f(hm+lk)/(gkm)$ on both sides. Commutativity follows from that in $D$; $0/1$ and $1/1$ are the identities, and $(-f)/g$ is the additive inverse of $f/g$. Thus $D'$ is a commutative ring, with $0/1\ne1/1$ because $0\ne1$ in $D$, and $D'$ is a field: for a class $[(f,g)]\ne[(0,1)]$ one has $f\ne0$, so that $(f,g)(g,f)=(fg,fg)\sim(1,1)$ since $fg\cdot1=1\cdot fg$, and hence $[(g,f)]$ is an inverse. Finally $f\mapsto[(f,1)]$ is a unital ring homomorphism with kernel $\{f:[(f,1)]=[(0,1)]\}=\{f:f=0\}$, so it injects $D$ into $D'$. [given, F9, F10, algebra]

2.1 Collecting the clauses: step 1.1 gives the monomial basis, the universal property and, with [F5] as used in step 1.2, the domain assertion of the multivariate clause; step 1.3 gives the ring structure, freeness and the unit property of $\Lambda_{R,n}$, step 1.4 its unit-substitution universal property, and step 1.5 its domain assertion. If $R$ is an integral domain then $D:=\Lambda_{R,n}$ is a domain by step 1.5 and $R[x_1,\dots,x_n]$ is a domain by step 1.2, so step 1.6 applies to both and yields the fraction field $K(\Lambda_{R,n})$ and the fraction field of $R[x_1,\dots,x_n]$ with the embedding $f\mapsto[(f,1)]$, which completes all three parts of the claim. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, step 1.6, F5] ∎
