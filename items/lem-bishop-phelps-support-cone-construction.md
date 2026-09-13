---
id: lem-bishop-phelps-support-cone-construction
kind: lemma
title: Quantitative Bishop–Phelps support functional construction
status: draft
origin: pipeline
deps: [def-banach-space, def-dependent-choice, def-hahn-banach-extension-principle-relative, thm-relative-hahn-banach-dominated-extension, thm-complete-subspace-iff-closed, thm-monotone-convergence, thm-infimum-property, def-dual-space-of-a-normed-space]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "Prove the needed maximizing Ekeland inequality by one dependent-choice recursion on nested ascent sets, then use its support cone to build a sublinear gauge and apply dominated Hahn–Banach."
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Philip D. Loewen and Xianfu Wang, A Generalized Variational Principle, Canadian Journal of Mathematics 53 (2001), 1174–1193"
      url: "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/9CBB2B3A1953A37FE343F99376B7DD42/S0008414X00028406a.pdf/generalized_variational_principle.pdf"
      locator: "Theorem 2.2 and inequality (2.14), printed pp. 1176–1179; Proposition 5.1(i) and Theorem 5.2, printed pp. 1188–1189"
---

## Statement

Assume the Axiom of Dependent Choice (DC) and the relative Hahn–Banach
principle HB.  Let $C$ be a nonempty closed bounded convex subset of a real
Banach space $X$.  For every $f\in X^*$ and every $\varepsilon>0$ there are
$v\in C$ and $g\in X^*$ such that

$$\|g-f\|\le\varepsilon\qquad\text{and}\qquad g(c)\le g(v)\quad(c\in C).$$

In fact, the construction below gives the strict bound
$\|g-f\|<\varepsilon$.

## Facts & Assumptions

**Given:** DC, HB, $X,C,f$ and $\varepsilon$ as in the statement.

[F1] A closed subset of a complete metric space is complete, without a choice
axiom ([[thm-complete-subspace-iff-closed]], claim 2,
[[def-banach-space]]).

[F2] DC produces a sequence along an entire relation from a specified initial
state ([[def-dependent-choice]]).

[F3] Every bounded monotone real sequence converges, and every nonempty subset
of $\mathbb R$ bounded below has an infimum
([[thm-monotone-convergence]], [[thm-infimum-property]]).

[F4] Under HB, a real linear functional dominated by a sublinear functional
on a subspace has a dominated real-linear extension
([[thm-relative-hahn-banach-dominated-extension]],
[[def-hahn-banach-extension-principle-relative]]).

[F5] The dual norm is the supremum of the absolute values on the closed unit
ball ([[def-dual-space-of-a-normed-space]]).

## Proof

**Proof technique:** maximizing variational construction followed by a
support-cone Hahn–Banach argument.

1.1 Choose a real number $\eta$ with $0<\eta<\varepsilon$.  The restriction $F=f|_C$ is continuous and bounded above because $C$ is bounded.  By [F1], $C$ with its norm metric is complete.  Fix one $x_0\in C$, possible because $C$ is nonempty, and for $x\in C$ define $$S(x)=\{y\in C:F(y)\ge F(x)+\eta\|y-x\|\}.$$ Each $S(x)$ is nonempty because it contains $x$, and it is closed because $F(y)-F(x)-\eta\|y-x\|$ is continuous in $y$. [given, F1, construct]

2.1 If $y\in S(x)$ and $z\in S(y)$, then $$F(z)\ge F(y)+\eta\|z-y\|\ge F(x)+\eta(\|y-x\|+\|z-y\|)\ge F(x)+\eta\|z-x\|.$$ Thus $z\in S(x)$ and $S(y)\subseteq S(x)$.  Since $F$ is bounded above and $S(x)$ is nonempty, its supremum is a real number.  For every $n$ and every $x\in C$, the defining approximation property of the supremum supplies $y\in S(x)$ with $$F(y)>\sup_{z\in S(x)}F(z)-2^{-n}.$$ [step 1.1, algebra]

3.1 Let a state be a nonempty finite sequence $(x_0,\ldots,x_n)$ in $C$ which starts at the fixed $x_0$ and, at each earlier index $k<n$, has $x_{k+1}\in S(x_k)$ and $$F(x_{k+1})>\sup_{z\in S(x_k)}F(z)-2^{-k}.$$ Relate each state to every valid one-term extension.  Step 2.1 proves that this relation is entire, so one application of DC gives a compatible infinite sequence $(x_n)$ with both displayed properties for every $n$. [step 2.1, F2, choose]

4.1 The ascent condition gives $$\eta\|x_{n+1}-x_n\|\le F(x_{n+1})-F(x_n).$$ Consequently the partial sums of $\sum_n\|x_{n+1}-x_n\|$ are nondecreasing and bounded above by $(\sup_C F-F(x_0))/\eta$.  By [F3] the series converges, hence its tails tend to zero and $(x_n)$ is Cauchy.  Completeness gives a limit $v\in C$. [step 1.1, step 3.1, F3, algebra]

5.1 Transitivity in step 2.1 makes every tail point $x_k$, $k\ge n$, belong to $S(x_n)$; closedness gives $v\in S(x_n)$ for every $n$.  If $z\in S(v)$, then transitivity also puts $z$ in every $S(x_n)$, and the approximate-supremum condition gives $$F(z)<F(x_{n+1})+2^{-n}.$$ Letting $n\to\infty$ and using continuity yields $F(z)\le F(v)$.  But $z\in S(v)$ also gives $F(z)\ge F(v)+\eta\|z-v\|$, so $z=v$.  Therefore $$F(c)<F(v)+\eta\|c-v\|\quad(c\in C,\ c\ne v),$$ and the corresponding non-strict inequality holds for every $c\in C$. [step 1.1, step 2.1, step 3.1, step 4.1, algebra]

6.1 Put $$D=\{t(c-v):t\ge0,\ c\in C\}.$$ Because $C-v$ is convex and contains zero, $D$ is a convex cone: for $t,s\ge0$ the sum $t(c-v)+s(c'-v)$ is zero if $t+s=0$, and otherwise equals $(t+s)(\frac{t}{t+s}c+\frac{s}{t+s}c'-v)$.  Step 5.1 and real linearity give $$f(d)\le\eta\|d\|\qquad(d\in D).$$ This includes $d=0$. [step 5.1, given, algebra]

7.1 For $x\in X$ define $$p(x)=\inf_{d\in D}\bigl(\eta\|x+d\|-f(d)\bigr).$$ The set being infimized is nonempty because $0\in D$.  Step 6.1 and the reverse triangle inequality give every one of its terms at least $-\eta\|x\|$, while $d=0$ gives a term equal to $\eta\|x\|$.  Thus [F3] makes $p(x)$ a finite real and $$-\eta\|x\|\le p(x)\le\eta\|x\|.\tag{1}$$ Both bounds are uniform in the choice of $d$. [step 6.1, F3, algebra]

8.1 The cone identities imply $p(tx)=tp(x)$ for $t>0$, and (1) gives $p(0)=0$.  If $d_1,d_2\in D$, then $d_1+d_2\in D$ and $$\eta\|x+y+d_1+d_2\|-f(d_1+d_2)\le\eta\|x+d_1\|-f(d_1)+\eta\|y+d_2\|-f(d_2).$$ Taking infima first over $d_1,d_2$ and then over $D$ proves $p(x+y)\le p(x)+p(y)$.  Hence $p$ is sublinear. [step 6.1, step 7.1, algebra]

9.1 Apply [F4] to the zero functional on $\{0\}$, dominated by $p$, to obtain a real-linear $h:X\to\mathbb R$ with $h(x)\le p(x)$.  Applying this at $x$ and $-x$ and using (1) gives $|h(x)|\le\eta\|x\|$, so $h\in X^*$ and $\|h\|\le\eta$ by [F5].  For $d\in D$, the candidate $d$ in the infimum gives $p(-d)\le-f(d)$, whence $-h(d)=h(-d)\le p(-d)\le-f(d)$ and $h(d)\ge f(d)$.  Thus the extension dominates $f$ on the support cone. [step 7.1, step 8.1, F4, F5]

10.1 Set $g=f-h$.  Then $g\in X^*$ and $\|g-f\|=\|h\|\le\eta<\varepsilon$.  For every $c\in C$, the vector $c-v$ lies in $D$, so step 9.1 gives $$g(c)-g(v)=f(c-v)-h(c-v)\le0.$$ Thus $g$ attains its supremum on $C$ at $v$.  The proof permits a singleton $C$, $f=0$, $X=\{0\}$ and the closed-boundary cases; DC is used only in step 3.1 and HB only in step 9.1. [step 6.1, step 9.1, given] ∎

## Source notes

Loewen–Wang Theorem 2.2 proves a generalized variational principle and derives
the Ekeland inequality in (2.14).  Proposition 5.1(i) applies that principle to
a coercive function, and Theorem 5.2 states Bishop–Phelps for nonempty closed
bounded convex sets.  The proof above derives exactly the maximizing inequality
needed here and then spells out the support-cone/sublinear-gauge argument.
