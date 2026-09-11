---
id: prop-the-exact-couple-and-subquotient-constructions-of-the-filtered-complex-spectral-sequence-agree
kind: proposition
title: The exact couple and subquotient constructions of the filtered complex spectral sequence agree
status: draft
origin: pipeline
pipeline_run: phase-2-next-20
deps: [thm-an-exact-couple-generates-a-spectral-sequence, thm-a-filtered-complex-produces-an-exact-couple, def-r-page-of-the-spectral-sequence-of-a-filtered-complex, lem-the-filtered-differential-induces-d-r-on-the-r-page, thm-the-next-page-is-the-homology-of-the-current-page, prop-elementwise-formula-for-the-connecting-map-in-module-categories, lem-spectral-sequence-subquotient-and-local-lifting-calculus, def-preconnecting-arrow-on-cycles, def-connecting-morphism-in-homology, thm-snake-lemma-under-the-weaker-stacks-hypotheses]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Weibel, Section 5.9, filtered-complex comparison"
      url: https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf
---

## Statement

For a filtered chain complex in an abelian category, its exact-couple and
filtered-subquotient spectral sequences are naturally isomorphic from $E^1$
onward, preserving differential signs, bidegrees and next-page isomorphisms.
The filtered-subquotient construction additionally has its specified $E^0$
page; the initial exact couple starts at $E^1$.

## Facts & Assumptions

[F1] [[thm-a-filtered-complex-produces-an-exact-couple]] constructs the initial couple; [[thm-an-exact-couple-generates-a-spectral-sequence]] gives its cycle numerator $N^r=k^{-1}(\operatorname{im}i^{r-1})$, boundary subobject $B^r=j(\ker i^{r-1})$ and local differential.

[F2] [[def-r-page-of-the-spectral-sequence-of-a-filtered-complex]] and [[lem-the-filtered-differential-induces-d-r-on-the-r-page]] give the filtered quotient pages and their differential $[c]\mapsto[dc]$.

[F3] [[thm-the-next-page-is-the-homology-of-the-current-page]] constructs transition isomorphisms by inclusion of the next cycle numerator, with correction of a representative by a lower-filtration chain.

[F4] [[lem-spectral-sequence-subquotient-and-local-lifting-calculus]] permits local epic lifts and unique natural quotient comparisons.

[F5] [[def-preconnecting-arrow-on-cycles]] and [[def-connecting-morphism-in-homology]] construct the connector from the snake arrow of [[thm-snake-lemma-under-the-weaker-stacks-hypotheses]]. In modules this is explicitly [[prop-elementwise-formula-for-the-connecting-map-in-module-categories]].

## Proof

**Given:** $(C,d,F)$, an integer $r\ge1$, and $n=p+q$. Write $A^r_{p,n}=F_pC_n\cap d^{-1}(F_{p-r}C_{n-1})$. Local expressions denote morphisms after finite epic pullback as in [F4].

1.1 Both initial pages identify with $H_n(F_pC/F_{p-1}C)$: in the subquotient construction a cycle modulo the previous filtration is precisely a lift $c\in F_pC_n$ with $dc\in F_{p-1}C_{n-1}$, modulo $F_{p-1}C_n+d(F_pC_{n+1})$. This is the homology quotient defining the initial exact-couple page. [F1, F2, F4]

1.2 The connector $k$ sends this class to $[dc]\in H_{n-1}(F_{p-1}C)$ with a positive sign. Indeed the snake construction first pulls back the epic upper-row map, then factors its vertical differential through the monic lower-row map, and defines the connecting arrow by the equation $\delta\pi=q\,a$, where that factor $a$ satisfies inclusion composed with $a$ equal to the vertical differential. In the quotient-kernel diagram of complexes this vertical arrow is induced by $d$, so a lifted $c$ gives exactly the class of $dc$. The preconnecting and connecting definitions preserve this equation. This verifies the sign in every abelian category after epic pullback; in modules it is the stated elementwise formula. [F4, F5]

2.1 A class represented by $c$ on the initial page lies in $N^r$ exactly when its class $[dc]$ in $H_{n-1}(F_{p-1}C)$ is induced by a cycle $z\in F_{p-r}C_{n-1}$. Locally this means $dc=z+db$ for $b\in F_{p-1}C_n$. Then $c-b\in A^r_{p,n}$ and represents the same initial-page class. Conversely $c\in A^r_{p,n}$ gives the lower-filtration cycle $dc$, so its class belongs to $N^r$. Thus $A^r_{p,n}$ maps epimorphically onto $N^r$. [F1, F4, step 1.1, step 1.2]

3.1 The inverse image of $B^r$ under this epimorphism is $A^{r-1}_{p-1,n}+d(A^{r-1}_{p+r-1,n+1})$. To prove this, a $B^r$ class is represented by a cycle $a\in F_pC_n$ that becomes a boundary in $F_{p+r-1}C$: locally $a=dw$ with $w\in F_{p+r-1}C_{n+1}$. Equality of its initial-page class with that of $c\in A^r$ means $c-a=b+dt$ for $b\in F_{p-1}C_n$ and $t\in F_pC_{n+1}$. Hence $c=b+d(w+t)$. Now $db=dc\in F_{p-r}$, so $b\in A^{r-1}_{p-1,n}$, and $d(w+t)=c-b\in F_p$, so $w+t\in A^{r-1}_{p+r-1,n+1}$. Conversely the first denominator summand maps to zero on the initial page, while an element of the second is a cycle in $F_p$ that bounds in $F_{p+r-1}$ and therefore maps into $B^r$. These local containments descend by [F4]. [F1, F2, F4, step 2.1]

4.1 The quotient comparison now identifies $N^r/B^r$ with $A^r_{p,n}/(A^{r-1}_{p-1,n}+d(A^{r-1}_{p+r-1,n+1}))$, precisely the filtered page. For $c\in A^r$, the lift of $k[c]$ through $i^{r-1}$ is the homology class of $dc$ in $F_{p-r}$. The exact-couple differential therefore sends $[c]$ to $[dc]$ on the corresponding target page, exactly the filtered differential. The target bidegree is $(p-r,q+r-1)$ on both sides. [F1, F2, F4, step 1.2, step 3.1]

5.1 In both constructions the next-page isomorphism is induced by including the next cycle numerator and then inverting the resulting homology isomorphism. The comparisons above come from the same chain representatives and lower-filtration corrections; hence those inclusions commute with the comparisons, and so do their inverses. Every filtered chain map preserves $A^r$, the denominator summands and the cycle/boundary comparisons, so quotient uniqueness proves naturality. At $r=1$ these are the identifications in step 1.1; zero pieces and stationary filtrations simply give zero quotients where appropriate. No global representatives, infinite sums or convergence hypotheses are used. [F3, F4, step 1.1, step 3.1, step 4.1] ∎
