---
title: Every fixed positive squared logarithmic density satisfies the budget
status: draft
research_item: lem-author-635c380339fd-fixed-density-budget
dependency_level: 1
---

## Prerequisites

- [lem-author-635c380339fd-inverse-sine-budget](item-lem-author-635c380339fd-inverse-sine-budget)
- [def-expander-prereq-asymptotic-quantifiers](item-def-expander-prereq-asymptotic-quantifiers)
- [math:def-natural-logarithm](https://alphabetamath.cc/item/def-natural-logarithm)
- [math:thm-natural-logarithm-laws](https://alphabetamath.cc/item/thm-natural-logarithm-laws)
- [math:thm-of-square-roots](https://alphabetamath.cc/item/thm-of-square-roots)
- [math:def-pi-via-first-positive-cosine-zero](https://alphabetamath.cc/item/def-pi-via-first-positive-cosine-zero)
- [math:lem-integer-part](https://alphabetamath.cc/item/lem-integer-part)



## Statement

Fix $c>0$ and $K>0$. For $d\ge c(\log n)^2$, set $\alpha=(K+1)/\sqrt d$ and $\beta=K/\sqrt d+\sqrt{12\log n/d}$. Eventually $0<\alpha\le1/24$, $0<\beta<1/4$, and $\pi/(96\alpha)>\log n/\log(1/(2\beta)-1)+1$. Consequently the criterion inequality in the inverse-sine-budget lemma holds for every $0<a\le\alpha$ and $0<b\le\beta$.

## Facts & Assumptions

**Given:** The data and hypotheses in the Statement, with $n$ tending to infinity through natural numbers and $d$ ranging over $d\ge c(\log n)^2$.

**Goal:** Establish the conclusions uniformly over this range of $d$.

[F1] The elementary inverse-sine budget is [lem-author-635c380339fd-inverse-sine-budget](item-lem-author-635c380339fd-inverse-sine-budget); eventual assertions and uniform comparisons have the meaning in [def-expander-prereq-asymptotic-quantifiers](item-def-expander-prereq-asymptotic-quantifiers).

[F2] The natural logarithm has domain $(0,\infty)$ ([math:def-natural-logarithm](https://alphabetamath.cc/item/def-natural-logarithm)). It is strictly increasing, is onto $\mathbb R$, satisfies $\log1=0$, and obeys the product and quotient laws ([math:thm-natural-logarithm-laws](https://alphabetamath.cc/item/thm-natural-logarithm-laws)).

[F3] Every nonnegative real number has a unique nonnegative square root, whose square is that number ([math:thm-of-square-roots](https://alphabetamath.cc/item/thm-of-square-roots)). Order comparisons and product identities for these roots follow by squaring nonnegative quantities in the real ordered field.

[F4] The constant $\pi$ is positive ([math:def-pi-via-first-positive-cosine-zero](https://alphabetamath.cc/item/def-pi-via-first-positive-cosine-zero)). Every real number has an integer part ([math:lem-integer-part](https://alphabetamath.cc/item/lem-integer-part)), so a natural-number cutoff can exceed any specified positive real cutoff.

## Proof

1.1 By [F2], for any real $M$ there is $R>0$ with $\log R=M$. For natural $n>R$, monotonicity gives $\log n>M$; [F4] supplies a natural-number cutoff beyond $R$. Thus $\ell=\log n$ eventually exceeds every real constant. Applying the same argument to $\ell$ shows that $\log\ell$ eventually exceeds every real constant as well. All logarithms below consequently have positive arguments for sufficiently large $n$. Put $C=(K+\sqrt{12})/\sqrt c>0$ and $A=\pi\sqrt c/(96(K+1))>0$. For $\ell\ge1$ and every allowed $d$, squaring nonnegative quantities in [F3] gives $\sqrt d\ge\sqrt c\,\ell$, so $0<\alpha\le(K+1)/(\sqrt c\,\ell)$ and $0<\beta\le K/(\sqrt c\,\ell)+\sqrt{12}/(\sqrt c\sqrt\ell)\le C/\sqrt\ell$. These estimates are uniform in $d$. In particular $\alpha\le1/24$ when $\ell\ge24(K+1)/\sqrt c$, and $\beta<1/4$ when $\sqrt\ell>4C$. [given, F1, F2, F3, F4, algebra]

2.1 For $\sqrt\ell>4C$, put $q=1/(2\beta)-1$. Step 1.1 gives $q\ge\sqrt\ell/(2C)-1\ge\sqrt\ell/(4C)>1$. The log laws imply $\log\sqrt\ell=(\log\ell)/2$, since $(\sqrt\ell)^2=\ell$. Hence $\log q\ge(\log\ell)/2-\log(4C)$. Requiring $\log\ell>\max\{0,4\log(4C)\}$ ensures $\log q\ge(\log\ell)/4>0$. Consequently $\log n/\log q+1\le4\ell/\log\ell+1$, while $\pi/(96\alpha)\ge A\ell$. [F2, F3, step 1.1, algebra]

3.1 Choose $n$ sufficiently large that all preceding conditions hold, $n>6$, $\log\ell>8/A$ and $\ell>2/A$; step 1.1 establishes a cutoff independent of $d$. Then $4\ell/\log\ell+1<A\ell/2+A\ell/2=A\ell\le\pi/(96\alpha)$, proving the budget. If $0<a\le\alpha$ and $0<b\le\beta$, then $a\le1/24$, $b<1/4$, and $1/(2b)-1\ge q>1$. Monotonicity of the logarithm, together with $\log n>0$, gives $\log n/\log(1/(2b)-1)+1\le\log n/\log q+1<\pi/(96\alpha)\le\pi/(96a)$. The inverse-sine-budget lemma now yields its criterion inequality for every such $a,b$. [F1, F2, step 1.1, step 2.1, algebra] ∎
