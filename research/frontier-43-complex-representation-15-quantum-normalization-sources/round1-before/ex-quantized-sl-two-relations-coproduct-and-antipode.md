---
id: ex-quantized-sl-two-relations-coproduct-and-antipode
kind: example
title: "Coproduct, antipode and $q$-binomial expansion in $U_q(\\mathfrak{sl}_2)$"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra
  - def-drinfeld-jimbo-quantized-enveloping-algebra
  - lem-q-binomial-expansion-for-q-commuting-elements
  - def-quantum-integers-factorials-and-divided-powers-at-q-i
  - def-the-laurent-polynomial-ring
  - def-endomorphism-ring-of-a-module
  - def-algebraic-dual-and-linear-functional
aliases: []
dependency_level: 6
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Richard Borcherds, Mark Haiman, Theo Johnson-Freyd, Nicolai Reshetikhin and Vera Serganova, Berkeley Lectures on Lie Groups and Quantum Groups (book-length lecture notes, last updated 18 January 2024)"
      url: "https://categorified.net/LieQuantumGroups.pdf"
      locator: "Ch. 12, §12.1-12.2, printed pp. 274-281: the $U_q\\mathfrak{sl}_2$ relations, coproduct, counit and antipode, and the remark $S^2\\ne\\mathrm{id}$; Ch. 13 §13.1.3, printed pp. 308-309, for the same formulas in the higher-rank convention."
    - title: "Pavel Etingof and Mykola Semenyakin, A Brief Introduction to Quantum Groups (lecture notes, CMSA Math Science Literature Lecture Series, 2020)"
      url: "https://arxiv.org/abs/2106.05252"
      locator: "§2.2.2, Example 2.3(iv), printed p. 5: $S(e)=-eK^{-1}$, $S(f)=-Kf$, $S(K)=K^{-1}$ with the remark $S^2\\ne\\mathrm{id}$; §3.5, Exercise (12), printed pp. 17-20."
pipeline_run: frontier-43-complex-representation-15
---

## Example

In the rank-one Drinfeld–Jimbo algebra $U_q(\mathfrak{sl}_2)$ (the Cartan datum $I=\{1\}$, $A=(2)$, $d_1=1$, so $q_1=q$) with generators $E,F,K^{\pm1}$ and relations $KEK^{-1}=q^{2}E$, $KFK^{-1}=q^{-2}F$, $EF-FE=(K-K^{-1})/(q-q^{-1})$:

(i) the coproduct, counit and antipode of [[thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra]] are $\Delta(E)=E\otimes K^{-1}+1\otimes E$, $\Delta(F)=F\otimes1+K\otimes F$, $\Delta(K^{\pm1})=K^{\pm1}\otimes K^{\pm1}$, $\varepsilon(E)=\varepsilon(F)=0$, $\varepsilon(K)=1$, $S(E)=-EK$, $S(F)=-K^{-1}F$, $S(K)=K^{-1}$;

(ii) for every $n\ge0$ the $q$-binomial expansion holds: $\Delta(E^{n})=\sum_{r=0}^{n}q^{r(n-r)}\binom{n}{r}_qE^{r}\otimes K^{-r}E^{n-r}$; and both antipode identities hold on the generators: $m(S\otimes\operatorname{id})\Delta(E)=-E+E=0$ and $m(\operatorname{id}\otimes S)\Delta(E)=EK^{-1}-EK=0$, with the same two computations for $F$ and the trivial $K^{\pm1}$ checks;

(iii) $S^{2}(E)=q^{-2}E$ and $S^{2}(F)=q^{2}F$; since $E\ne0$ and $K\ne1$ in $U_q(\mathfrak{sl}_2)$ -- proved below by the oscillator model -- the antipode is not an involution;

(iv) the coproduct is not cocommutative: $\Delta(E)-\tau\Delta(E)=E\otimes(K^{-1}-1)+(1-K^{-1})\otimes E\ne0$, where $\tau$ is the tensor flip.

All four computations use no choice principle. The nonvanishing statements in (iii) and (iv) are proved by an explicit representation of $U_q(\mathfrak{sl}_2)$ on the Laurent polynomial ring, not by appeal to the escalated triangular decomposition.

## Facts & Assumptions

**Given:** The rank-one Drinfeld–Jimbo algebra, with generators $E,F,K^{\pm1}$ and relations as displayed.

[F1] The Drinfeld–Jimbo algebra of a symmetrizable Cartan datum has the displayed coproduct, counit and antipode, its antipode is unique and $S^{2}(E_i)=q_i^{-2}E_i$, $S^{2}(F_i)=q_i^{2}F_i$, and any assignment of generators satisfying the defining relations extends to an algebra homomorphism ([[thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra]], [[def-drinfeld-jimbo-quantized-enveloping-algebra]]).

[F2] The rank-one datum $I=\{1\}$, $A=(2)$, $d_1=1$ is a symmetrizable Cartan datum, and its algebra has exactly the relations displayed above ([[def-drinfeld-jimbo-quantized-enveloping-algebra]]).

[F3] If $yx=txy$ in a unital algebra, then $(x+y)^N=\sum_{r}B_{N,r}(t)x^ry^{N-r}$ with $B_{N,r}(t)$ the asymmetric Gaussian coefficient; for $t=q_i^2$ this reads $(x+y)^N=\sum_rq_i^{r(N-r)}\binom{N}{r}_ix^ry^{N-r}$ ([[lem-q-binomial-expansion-for-q-commuting-elements]]).

[F4] In $\mathbb Q(q)$ one has $q\ne0$, $q\ne1$, $q^{2}\ne1$, $q^{2n}\ne1$ for $n\ne0$, and $(K-K^{-1})/(q-q^{-1})$ is defined ([[def-quantum-integers-factorials-and-divided-powers-at-q-i]], [[def-drinfeld-jimbo-quantized-enveloping-algebra]]).

[F5] $M:=\mathbb Q(q)[X^{\pm1}]$ is the Laurent polynomial ring, with unique coefficients and the monomial basis $X^n$, $n\in\mathbb Z$; the $\mathbb Q(q)$-linear endomorphisms of $M$ form a unital algebra under composition, and linear functionals on an algebra form a vector space ([[def-the-laurent-polynomial-ring]], [[def-endomorphism-ring-of-a-module]], [[def-algebraic-dual-and-linear-functional]]).

[F6] No choice principle is used: the model of step 2.1 is defined by an explicit formula, and every sum below is finite.



## Verification

**Proof technique:** Instantiate the Hopf formulas and expand $\Delta(E^n)$ with the $q$-binomial lemma; then build an explicit oscillator representation of $U_q(\mathfrak{sl}_2)$ on the Laurent polynomial ring and use one of its matrix functionals to separate the elements that occur.

1.1 Part (i). By [F2], $U_q(\mathfrak{sl}_2)$ is the Drinfeld–Jimbo algebra of the rank-one datum, so [F1] gives $\Delta(E)=E\otimes K^{-1}+1\otimes E$, $\Delta(F)=F\otimes1+K\otimes F$, $\Delta(K^{\pm1})=K^{\pm1}\otimes K^{\pm1}$, $\varepsilon(E)=\varepsilon(F)=0$, $\varepsilon(K)=1$. The antipode is the unique convolution inverse of the identity; on $E$ it is $S(E)=-EK$ because $-EK\cdot K^{-1}+E=0$ and $E\cdot K-EK=0$ compute the two convolution equations of [F1] on $E$ (using $S(K^{-1})=K$), and on $F$ it is $S(F)=-K^{-1}F$ by the mirrored computation. [F1, F2, algebra]

1.2 Part (ii), first assertion. Put $x:=E\otimes K^{-1}$ and $y:=1\otimes E$ in $U_q(\mathfrak{sl}_2)\otimes U_q(\mathfrak{sl}_2)$. Then $yx=(1\otimes E)(E\otimes K^{-1})=E\otimes EK^{-1}=E\otimes q^{2}K^{-1}E=q^{2}xy$, using $EK^{-1}=q^{2}K^{-1}E$, which follows from $KEK^{-1}=q^{2}E$ by multiplying on the left by $K^{-1}$ and on the right by $K$. Since $\Delta$ is an algebra homomorphism, $\Delta(E^{n})=\Delta(E)^{n}=(x+y)^{n}$, and [F3] with $q_1=q$ gives $\Delta(E^{n})=\sum_{r=0}^{n}q^{r(n-r)}\binom{n}{r}_qE^{r}\otimes K^{-r}E^{n-r}$, because $x^{r}=E^{r}\otimes K^{-r}$ and $y^{n-r}=1\otimes E^{n-r}$. [F1, F3, algebra]

1.3 The oscillator model. Let $M=\mathbb Q(q)[X^{\pm1}]$ and define $\mathbb Q(q)$-linear endomorphisms by $\widehat E(f):=Xf$, $(\widehat K f)(X):=f(q^{2}X)$, and $\widehat F(X^{n}):=\lambda_nX^{n-1}$ with $\lambda_n:=\alpha q^{2n}+\beta q^{-2n}$, $\alpha:=1/[(q-q^{-1})(1-q^{2})]$, $\beta:=-1/[(q-q^{-1})(1-q^{-2})]$; both scalars are nonzero and defined by [F4], and $\widehat K$ is invertible with $\widehat K^{-1}(f)(X)=f(q^{-2}X)$. Then $\widehat E\widehat F-\widehat F\widehat E=[2n]_q$ on $X^{n}$: indeed $(\widehat E\widehat F-\widehat F\widehat E)(X^{n})=\lambda_nX^{n}-\lambda_{n+1}X^{n}=(\lambda_n-\lambda_{n+1})X^{n}$ and $\lambda_n-\lambda_{n+1}=\alpha q^{2n}(1-q^{2})+\beta q^{-2n}(1-q^{-2})=(q^{2n}-q^{-2n})/(q-q^{-1})$, while $(\widehat K-\widehat K^{-1})/(q-q^{-1})$ acts on $X^{n}$ by the same scalar; moreover $\widehat K\widehat E\widehat K^{-1}=q^{2}\widehat E$ and $\widehat K\widehat F\widehat K^{-1}=q^{-2}\widehat F$ by direct evaluation on the basis. Hence by the universal property in [F1] there is a unital algebra homomorphism $\rho:U_q(\mathfrak{sl}_2)\to\operatorname{End}(M)$ with $\rho(E)=\widehat E$, $\rho(F)=\widehat F$, $\rho(K)=\widehat K$. [F1, F4, F5, construct]

2.1 Part (ii), antipode identities. Using 1.1, $m(S\otimes\operatorname{id})\Delta(E)=S(E)K^{-1}+E=-EK\cdot K^{-1}+E=0$ and $m(\operatorname{id}\otimes S)\Delta(E)=E\cdot S(K^{-1})+S(E)=EK-EK=0$, since $S(K^{-1})=K$. The same two computations with $K$ replaced by $K^{-1}$ and $E$ by $F$ give $m(S\otimes\operatorname{id})\Delta(F)=S(F)+S(K)F=-K^{-1}F+K^{-1}F=0$ and $m(\operatorname{id}\otimes S)\Delta(F)=F+K\cdot S(F)=F-F=0$; for $K^{\pm1}$ both sides are $K^{\pm1}K^{\mp1}=1$, and for the unit both are $1$. [step 1.1, F1, algebra]

2.2 Part (iii), first assertion. $S^{2}(E)=S(-EK)=-S(K)S(E)=-K^{-1}(-EK)=K^{-1}EK=q^{-2}E$ and $S^{2}(F)=S(-K^{-1}F)=-S(F)S(K^{-1})=-(-K^{-1}F)K=K^{-1}FK=q^{2}F$, using anti-multiplicativity of $S$ from [F1]. [step 1.1, F1, algebra]

3.1 Nonvanishing and separation. Since $\widehat E(X^{0})=X^{1}\ne0$ and $\widehat K\ne\operatorname{id}$ (as $\widehat K(X^{1})=q^{2}X^{1}\ne X^{1}$ by [F4]), neither $E=0$ nor $K=1$ holds in $U_q(\mathfrak{sl}_2)$; likewise $K^{-1}\ne1$. Also $E\notin\operatorname{span}_{\mathbb Q(q)}\{1,K^{-1}\}$: if $E=a\cdot1+bK^{-1}$, applying $\rho$ gives $\widehat E=a\operatorname{id}+b\widehat K^{-1}$, and evaluating on $X^{0}$ gives $X^{1}=(a+b)X^{0}$, whose two sides have disjoint monomial supports, a contradiction. In particular $S^{2}(E)=q^{-2}E\ne E$, so $S^{2}\ne\operatorname{id}$, which completes (iii). [F4, F5, step 2.2, step 1.3, algebra]

4.1 Part (iv). By 1.1, $\Delta(E)-\tau\Delta(E)=E\otimes K^{-1}+1\otimes E-K^{-1}\otimes E-E\otimes1=E\otimes(K^{-1}-1)+(1-K^{-1})\otimes E$. Let $\lambda:U_q(\mathfrak{sl}_2)\to\mathbb Q(q)$ be the linear functional $\lambda(g):=[X^{1}]\bigl(\rho(g)(X^{0})\bigr)$ (coefficient extraction, [F5]). Then $\lambda(E)=1$, $\lambda(1)=0$ and $\lambda(K^{-1})=0$ by 1.3, so applying $\operatorname{id}\otimes\lambda$ to the displayed element gives $E\cdot\lambda(K^{-1}-1)+(1-K^{-1})\cdot\lambda(E)=1-K^{-1}\ne0$ by 3.1; hence $\Delta(E)\ne\tau\Delta(E)$ and the coproduct is not cocommutative. [step 1.1, step 1.3, step 3.1, F5, algebra] ∎

## Remarks

Every displayed computation is finite and uses only [F1]–[F5]; the model of step 1.3 is given by explicit formulas and is the only place where an auxiliary construction is made, and it is choice-free by [F6].
