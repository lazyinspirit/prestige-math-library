---
id: thm-bishop-phelps
kind: theorem
title: Bishop phelps
status: published
origin: pipeline
deps: [lem-bishop-phelps-support-cone-construction, def-dual-space-of-a-normed-space, def-dependent-choice, def-hahn-banach-extension-principle-relative]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "Apply the quantitative real support-cone lemma, specialize to the symmetric unit ball, and obtain the complex unit-ball result by the norm-preserving real-dual/complex-dual correspondence."
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Philip D. Loewen and Xianfu Wang, A Generalized Variational Principle, Canadian Journal of Mathematics 53 (2001), 1174–1193"
      url: "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/9CBB2B3A1953A37FE343F99376B7DD42/S0008414X00028406a.pdf/generalized_variational_principle.pdf"
      locator: "Proposition 5.1(i) and Theorem 5.2, printed pp. 1188–1189; variational input in Theorem 2.2 and inequality (2.14), printed pp. 1176–1179"
---

## Statement

Assume the Axiom of Dependent Choice (DC) and the relative Hahn–Banach
principle HB.

1. If $C$ is a nonempty closed bounded convex subset of a real Banach space
   $X$, then the real-linear functionals attaining their supremum on $C$ are
   norm dense in $X^*$.
2. Consequently, the norm-attaining functionals are norm dense in the dual of
   every real Banach space.
3. The norm-attaining complex-linear functionals are also norm dense in the
   dual of every complex Banach space.

The third claim concerns the closed unit ball only; no complex analogue for an
arbitrary convex set is asserted.

## Facts & Assumptions

**Given:** DC, HB, and the real or complex Banach spaces and positive
approximation tolerances occurring in the statement.

[F1] Under DC and HB, for a nonempty closed bounded convex set $C$ in a real
Banach space, every $f\in X^*$ and $\varepsilon>0$ admit $v\in C$ and
$g\in X^*$ with $\|g-f\|<\varepsilon$ and $g(c)\le g(v)$ for every $c\in C$
([[lem-bishop-phelps-support-cone-construction]],
[[def-dependent-choice]], [[def-hahn-banach-extension-principle-relative]]).

[F2] For a real or complex normed space, the dual norm is
$\|f\|=\sup_{x\in B_X}|f(x)|$
([[def-dual-space-of-a-normed-space]]).

## Proof

**Proof technique:** quantitative approximation followed by unit-ball
symmetry and complexification.

1.1 Let $X$ be real, let $C$ be as in claim 1, and fix $f\in X^*$ and $\varepsilon>0$.  By [F1] there are $v\in C$ and $g\in X^*$ such that $\|g-f\|<\varepsilon$ and $g(c)\le g(v)$ for every $c\in C$.  Thus $g(v)=\sup_Cg$, and arbitrary $f$ and $\varepsilon$ prove the asserted norm density. [given, F1]

1.2 Now let $X$ be complex and write $X_{\mathbb R}$ for its realification.  For $u\in(X_{\mathbb R})^*$ define $U_u(x)=u(x)-iu(ix)$.  Real linearity gives $U_u(ix)=iU_u(x)$ and $\operatorname{Re}U_u=u$.  For any $x$, choose a unit scalar $a$ with $aU_u(x)=|U_u(x)|$ when the value is nonzero, and take $a=1$ otherwise.  Then $|U_u(x)|=u(ax)\le\|u\|\|x\|$, while $|u(x)|\le|U_u(x)|$; therefore $U_u\in X^*$ and $\|U_u\|=\|u\|$.  The correspondence is real-linear, and for complex-linear $f$, $U_{\operatorname{Re}f}=f$. [F2, construct, algebra]

2.1 Take $C=B_X$ in step 1.1.  Since $B_X$ is symmetric, $\sup_{x\in B_X}g(x)=\sup_{x\in B_X}|g(x)|=\|g\|$ by [F2].  Hence the approximating $g$ satisfies $g(v)=\|g\|$ at some $v\in B_X$ and is norm-attaining.  This includes $g=0$, which attains norm zero at zero. [step 1.1, F2, algebra]

2.2 Fix $f\in X^*$ and $\varepsilon>0$.  Apply the real claim 1 to the same set $B_X$ inside $X_{\mathbb R}$ and to $\operatorname{Re}f$.  It gives a real functional $u$ and $v\in B_X$ with $\|u-\operatorname{Re}f\|<\varepsilon$ and $u(x)\le u(v)$ on $B_X$.  Put $G=U_u$.  Step 1.2 applied to $u-\operatorname{Re}f$ gives $\|G-f\|<\varepsilon$.  Because the complex unit ball is symmetric, [F2] and step 1.2 give $$u(v)=\sup_{B_X}u=\|u\|=\|G\|.$$ But $\operatorname{Re}G(v)=u(v)=\|G\|$ and $|G(v)|\le\|G\|$, so $G(v)=\|G\|$ and $G$ attains its norm. [step 1.1, step 1.2, F2, given, algebra]

3.1 The three density assertions follow from steps 1.1, 2.1 and 2.2.  If $X=\{0\}$, its unique functional is zero and already norm-attaining.  The proof uses DC and HB only through [F1]; the realification and complexification are explicit and use no choice.  The general convex-set conclusion remains real, while the complex conclusion is exactly the unit-ball norm-attainment assertion. [step 1.1, step 2.1, step 1.2, step 2.2, F1] ∎

## Source notes

Loewen–Wang Proposition 5.1(i) derives density of convex subgradients from
Ekeland's variational principle, and Theorem 5.2 states the real Bishop–Phelps
theorem for nonempty closed bounded convex sets.  The complex unit-ball clause
is proved locally by the explicit real-dual/complex-dual correspondence; the
source is not cited for a general complex convex-set theorem.
