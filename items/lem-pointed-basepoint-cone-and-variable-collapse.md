---
id: lem-pointed-basepoint-cone-and-variable-collapse
kind: lemma
title: "Basepoint cones, a single variable action, and ordinary collapse"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: []
dependency_level: 0
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ozsvath, Stipsicz and Szabo, Grid Homology for Knots and Links"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
      locator: "Lemma 5.2.16, Proposition 13.3.16, and Appendix A.3; mapping cones and the distinction between restriction and collapse"
    - title: "Manolescu, Ozsvath and Sarkar, A combinatorial description of knot Floer homology"
      url: "https://arxiv.org/pdf/math/0607691"
      locator: "Proposition 2.3 and equation (10); basepoint insertion cone"
---

## Statement

Let $R=\mathbb F_2[U,Z_1,\ldots,Z_s]$, and let $(C,d)$ be a graded, Alexander-filtered chain complex of free $R$-modules. Every variable has Maslov degree $-2$ and Alexander filtration degree $-1$, and $d$ has Maslov degree $-1$ and does not increase filtration. Extend scalars to $C[T]$, with $T$ having the same degrees. Put $f=T+U$ and form the cone $B=C[T]^{\mathrm{low}}\oplus C[T]$, with differential $D(a,b)=(da,db+fa)$; the first copy is shifted down by one in both Maslov degree and filtration. Regarded over $R$, this cone has an explicit filtered chain deformation retraction onto $C$. Its projection is evaluation of the second component at $T=U$, its inclusion is $c\mapsto(0,c)$, and its homotopy is polynomial divided difference in the second component, placed in the first component.

In contrast, the ordinary scalar quotient $T=U$ taken before homology gives the zero-map cone $C\oplus C^{\mathrm{low}}$, equivalently $C\otimes V$, where $V$ has zero differential and bidegrees $(0,0)$ and $(-1,-1)$. Any further ordinary quotient of the old variables has the same direct-sum description with the corresponding quotient of $C$. Thus an equivalence of a basepoint insertion complex with this cone over the full polynomial ring implies invariance for the chosen single-variable action and an extra $V$ factor after simultaneous collapse. These are different operations.

More generally, let $E$ be free over $R[T]$ on a homogeneous filtered basis, and let its differential $d(T)$ have the same degree and filtration behavior, with polynomial matrix entries. Then $\operatorname{Cone}(T+U:E\to E)$ admits an explicit filtered deformation retraction over $R$ onto the ordinary quotient $(E/(T+U)E,d(U))$. If multiplication by $T+U$ on $E$ has a polynomial-linear homotopy $L$ with $dL+Ld=T+U$, Maslov degree $-1$, and filtration degree at most $-1$, this quotient is filtered chain homotopy equivalent over $R$ to $E\otimes V$. Iterating applies to independent marking variables and survives every earlier scalar quotient. Thus pairwise such homotopies imply that simultaneous collapse of $n$ variables to one has type $E\otimes V^{\otimes(n-1)}$ over the chosen variable action.

## Statement references

[Ozsvath, Stipsicz and Szabo, *Grid Homology for Knots and Links*, Lemma 5.2.16 and §13.3](https://web.math.princeton.edu/~petero/GridHomologyBook.pdf)

[Manolescu, Ozsvath and Sarkar, Proposition 2.3](https://arxiv.org/pdf/math/0607691)

## Facts & Assumptions

**Given:** The polynomial extension, differential, and degree conventions in the statement. A polynomial in $C[T]$ is a finite sum, and evaluation means substituting the existing scalar $U$ for $T$.

## Proof

1.1 Multiplication by $f=T+U$ commutes with $d$, because $d$ is $R$-linear and is extended coefficientwise in $T$. Consequently $D^2(a,b)=(0,df a+fd a)=(0,0)$. The first-copy degree shift makes both components of $D$ have Maslov degree $-1$; the cross component $fa$ preserves or lowers filtration, since $f$ lowers filtration by one and the first copy is already shifted down by one. Thus $B$ is the asserted filtered complex. [given, algebra]

1.2 Define $e:C[T]\to C$ by evaluation at $T=U$. Define the $R$-linear divided-difference map $q:C[T]\to C[T]$ by $q(c)=0$ on constant polynomials and $q(cT^r)=c\sum_{t=0}^{r-1}T^{r-1-t}U^t$ for $r\ge1$. Expanding the finite geometric sum gives $fq(p)=p+e(p)$, with $e(p)$ included as a constant polynomial. Also $e(fp)=0$ and hence $q(fp)=p$. The latter follows directly on monomials, or by cancellation in the displayed sum; it uses no division in $C$. [given, construct, algebra]

1.3 For the general variant write $d_0=d(U)$, extended coefficientwise to $E$, and $d(T)=d_0+f d_1(T)$ by entrywise polynomial division. Every entry of $d(T)-d_0$ vanishes at $T=U$ and is divisible by the monic polynomial $f=T+U$, so $d_1$ exists without coefficient denominators. Since $d(T)^2=0$, evaluation gives $d_0^2=0$; expanding the square and cancelling the injective scalar $f$ on the free module gives $d_0d_1+d_1d_0+f d_1^2=0$. [given, construct, algebra]

2.1 The maps $e,q$ commute with $d$ because their formulas apply to the polynomial variable $T$ alone and every coefficient of $d$ belongs to $R$. Let $P(a,b)=e(b)$ and $I(c)=(0,c)$. Then $PD=dP$ by $e(fa)=0$, $DI=I\circ d$, and $PI=\operatorname{id}_C$. Thus $P$ and $I$ are chain maps with composite identity on $C$. [step 1.1, step 1.2, construct, algebra]

2.2 Taking the ordinary scalar quotient $T=U$ sends $f$ to $0$. It sends $C[T]$ to $C$, not to a further homology group. Thus the quotient differential is $(a,b)\mapsto(da,db)$, with the unchanged first-copy shift. This is exactly $C\otimes V$. A further scalar quotient of the old coefficients commutes with this componentwise construction and yields the same formula for the quotient of $C$. [step 1.1, construct, algebra]

2.3 Use the maps $e,q$ of step 1.2 in the fixed basis of $E$, and put $P(a,b)=e(b)$, $I(c)=(d_1c,c)$ for $c$ in the quotient, included as a constant polynomial in this basis, and $H(a,b)=(q(b),0)$. The relation in step 1.3 gives $d(T)d_1=d_1d_0$, and hence $DI=I d_0$. Also $PD=d_0P$ and $PI=\operatorname{id}$. For an arbitrary $b$, the divided-difference identity gives $q(d(T)b)=d_0q(b)+d_1b$, whereas $d(T)q(b)=d_0q(b)+f d_1q(b)$. Their sum is $d_1e(b)$. It follows that $DH+HD=(a+d_1e(b),b+e(b))=\operatorname{id}+IP$. The component formulas also give $HI=PH=H^2=0$. Thus these are deformation-retraction identities for the general polynomial differential. [step 1.2, step 1.3, construct, algebra]

3.1 Set $H(a,b)=(q(b),0)$. The first components of $DH+HD$ sum to $dq(b)+q(db+fa)=a$, and the second component is $fq(b)=b+e(b)$. Thus $DH+HD=\operatorname{id}_B+IP$. Furthermore $HI=0$, $PH=0$, and $H^2=0$ by their component formulas. These identities give a chain deformation retraction, without any assertion that the evaluation map is linear over $R[T]$. It is linear over the required ring $R$. [step 1.2, step 2.1, algebra]

4.1 Evaluation replaces powers of $T$ by the same powers of $U$ and therefore preserves the degrees and filtration. In $q(cT^r)$ each summand has one fewer variable factor than $cT^r$, so its Maslov degree rises by two and its filtration by one before placement in the first copy. The first-copy shift then makes $H$ have Maslov degree $+1$ and filtration degree $0$. Inclusion has degree and filtration degree zero. Consequently the retraction is filtered with precisely the asserted grading behavior. [step 1.2, step 3.1, algebra]

4.2 An actual chain homotopy equivalence over a polynomial ring remains one after any scalar quotient: tensor each chain map, homotopy, and homotopy identity with the new coefficient module. No flatness is required for this statement, since it is an equality of maps and homotopies, rather than a claim that tensor products commute with homology. Combining this observation with steps 3.1 and 2.2 proves the final comparison assertion. [step 3.1, step 2.2, algebra]

5.1 The matrix $d_1$ has Maslov degree $+1$, since division by $f$ removes degree $-2$ from $d$. Its filtration degree is at most $+1$: replacing a factor $T$ by $U$ preserves filtration, and divided difference removes exactly one variable factor from every monomial. Consequently the first component of $I$ after its downward shift has degree zero and does not increase filtration. The same degree calculation for $q$ as in step 4.1 applies to $H$. The general retraction is therefore filtered, not merely an unfiltered homology isomorphism. [step 4.1, step 1.3, step 2.3, algebra]

6.1 If the stated homotopy $L$ exists, the triangular map $J(a,b)=(a,b+La)$ is its own inverse. From $dL+Ld=f$ one computes $D_0J=JD_f$, where $D_0$ and $D_f$ are respectively the zero-map-cone and $f$-cone differentials. Its degree is zero: $La$ lies in the second copy and has the same degree and no larger filtration than $a$ in the shifted first copy. Thus $J$ is a filtered chain isomorphism from the $f$-cone to $E\otimes V$. Combining it with the retraction in step 2.3 yields the claimed filtered chain homotopy equivalence of the quotient. [step 2.3, step 5.1, construct, algebra]

7.1 After any earlier relation $T_i=U$ has been imposed, the remaining basis module is still free over the polynomial ring in the remaining independent variables. Tensoring the identity $dL+Ld=T+U$ with that coefficient quotient preserves it and its degree bounds. Apply the general quotient retraction and triangular cone isomorphism successively to each remaining variable. Each step contributes one copy of $V$, so $n-1$ relations contribute precisely $V^{\otimes(n-1)}$. The comparisons are over the surviving ring at each step and therefore over the chosen $\mathbb F_2[U]$ action at the end. [step 1.3, step 2.3, step 5.1, step 6.1, algebra] ∎
