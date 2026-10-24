---
id: ex-real-quadratic-units-and-pell
kind: example
title: Real quadratic units and Pell's equation
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-all-integral-pell-solutions
  - cor-unit-ranks-by-number-field-signature
  - def-axiom-of-choice
  - def-continued-fraction-complete-quotients
  - def-convergents-of-regular-continued-fraction
  - def-eventually-periodic-continued-fraction
  - def-fundamental-pell-solution
  - def-generalized-and-negative-pell-equations
  - def-norm-on-integer-square-root-order
  - def-regular-continued-fraction
  - def-ring-of-integers-of-a-number-field
  - lem-algebraic-integer-is-a-unit-iff-norm-is-plus-or-minus-one
  - lem-pell-norm-multiplication
  - lem-ring-units-form-a-group
  - prop-integral-pell-solutions-form-a-group
  - thm-all-positive-pell-solutions-are-fundamental-powers
  - thm-lagrange-existence-for-pell-equation
  - thm-negative-pell-period-parity-criterion
  - thm-ring-of-integers-of-a-quadratic-field
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory v3.08"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
      locator: "Ch. 5 Example 5.3 p.86 and the continued-fraction discussion pp.90-91."
    - title: "Andrew V. Sutherland, MIT 18.785 Lecture 15: Dirichlet's Unit Theorem (Fall 2021)"
      url: "https://math.mit.edu/classes/18.785/2021fa/LectureNotes15.pdf"
      locator: "Example 15.15 p.8 (real quadratic fundamental unit; generalized Pell equation (4))."
    - title: "William A. Stein, Algebraic Number Theory: A Computational Approach"
      url: "https://wstein.org/books/ant/ant.pdf"
      locator: "§8.2.1 pp.93-95 (Q(sqrt 5) units; the cube subgroup gives the units x+y sqrt 5)."
verification:
  audited: 2026-10-02
  precheck: pass
---

## Example

Assume the Axiom of Choice. Let $d>1$ be squarefree and $K=\mathbb Q(\sqrt d)$.
If $d\equiv2,3\pmod4$ then $\mathcal O_K=\mathbb Z[\sqrt d]$, and the unit group
is $\pm\langle u_d\rangle$, where $u_d$ is the least positive solution of the
negative Pell equation $x^2-dy^2=-1$ when that equation is solvable, and
$u_d=\varepsilon_d$ is the fundamental Pell solution of $x^2-dy^2=1$
otherwise; in the solvable case $\varepsilon_d=u_d^2$ and the norm-one Pell
subgroup $\pm\langle\varepsilon_d\rangle$ has index $2$ in
$\mathcal O_K^\times$. If $d\equiv1\pmod4$ then
$\mathcal O_K=\mathbb Z[(1+\sqrt d)/2]$ strictly contains $\mathbb Z[\sqrt d]$;
the unit group of the order $\mathbb Z[\sqrt d]$ is as above, while the
fundamental unit of $\mathcal O_K$ may be a half-integer element solving
$x^2-dy^2=\pm4$ that does not lie in $\mathbb Z[\sqrt d]$, in which case
$\mathbb Z[\sqrt d]^\times$ (in particular the norm-one Pell subgroup
$\pm\langle\varepsilon_d\rangle$) is a proper subgroup of
$\mathcal O_K^\times$. For $d=5$ the fundamental unit of $\mathcal O_K$ is
$\varepsilon=(1+\sqrt5)/2$ (norm $-1$), so
$\mathcal O_K^\times=\{\pm\varepsilon^n:n\in\mathbb Z\}$, while in
$\mathbb Z[\sqrt5]$ one has $2+\sqrt5=\varepsilon^3$, the fundamental Pell
solution is $\varepsilon_5=9+4\sqrt5=\varepsilon^6$, and
$\mathbb Z[\sqrt5]^\times=\pm\langle2+\sqrt5\rangle=\pm\langle\varepsilon^3\rangle$
has index $3$ in $\mathcal O_K^\times$.

## Facts & Assumptions

**Given:** The Axiom of Choice, a squarefree integer $d>1$, the field $K=\mathbb Q(\sqrt d)$, the order $\mathbb Z[\sqrt d]$ with its Pell norm $N_d$ ([[def-norm-on-integer-square-root-order]]), the fundamental Pell solution $\varepsilon_d$ of $x^2-dy^2=1$ ([[def-fundamental-pell-solution]]), and, when the negative Pell equation $x^2-dy^2=-1$ is solvable, its least positive solution $u_d$.

[F1] If $d\equiv2,3\pmod4$ then $\mathcal O_K=\mathbb Z[\sqrt d]$, and if $d\equiv1\pmod4$ then $\mathcal O_K=\mathbb Z[(1+\sqrt d)/2]$, which strictly contains $\mathbb Z[\sqrt d]$ ([[thm-ring-of-integers-of-a-quadratic-field]]).

[F2] For $u\in\mathcal O_K$, $u$ is a unit of $\mathcal O_K$ if and only if $N_{K/\mathbb Q}(u)=\pm1$, and for a real quadratic field the norm of $x+y\sqrt d$ is $x^2-dy^2$ ([[lem-algebraic-integer-is-a-unit-iff-norm-is-plus-or-minus-one]], [[thm-ring-of-integers-of-a-quadratic-field]]).

[F3] The Pell norm is multiplicative: $N_d(\alpha\beta)=N_d(\alpha)N_d(\beta)$ for $\alpha,\beta\in\mathbb Z[\sqrt d]$ ([[lem-pell-norm-multiplication]]); consequently an element $\alpha\in\mathbb Z[\sqrt d]$ is a unit of the order $\mathbb Z[\sqrt d]$ if and only if $N_d(\alpha)=\pm1$ ([[def-norm-on-integer-square-root-order]], [[lem-ring-units-form-a-group]]).

[F4] The integral solutions of $x^2-dy^2=1$ are exactly the elements $\pm\varepsilon_d^k$ with $k\in\mathbb Z$, and the positive solutions are $\varepsilon_d^k$ with $k\ge1$; also $\varepsilon_d>1$ ([[cor-all-integral-pell-solutions]], [[thm-all-positive-pell-solutions-are-fundamental-powers]], [[def-fundamental-pell-solution]]). The equation $x^2-dy^2=1$ has a positive nontrivial solution ([[thm-lagrange-existence-for-pell-equation]]).

[F5] The negative Pell equation $x^2-dy^2=-1$ is solvable if and only if the period length $\ell$ of the continued fraction of $\sqrt d$ is odd; when it is solvable, the numerator-denominator pair $(p_{\ell-1},q_{\ell-1})$ gives the least positive solution, and the least positive solution of $x^2-dy^2=1$ is $(p_{2\ell-1},q_{2\ell-1})$ ([[thm-negative-pell-period-parity-criterion]], [[def-generalized-and-negative-pell-equations]]).

[F6] For a real quadratic field $K$, $\mathcal O_K^\times\cong\{\pm1\}\times\mathbb Z$; in particular there is a unit $\gamma>1$ with $\mathcal O_K^\times=\{\pm\gamma^n:n\in\mathbb Z\}$ ([[cor-unit-ranks-by-number-field-signature]]).

[F7] For $d=5$: $2<\sqrt5<3$ gives $\lfloor\sqrt5\rfloor=2$, and $\sqrt5+2=4+\frac{1}{\sqrt5+2}$, so the complete quotients of $\sqrt5$ are $\alpha_1=\sqrt5+2$ and $\alpha_2=\alpha_1$; hence the digit sequence is $2,4,4,4,\dots$, that is $\sqrt5=[2;\overline4]$, with period length $\ell=1$ ([[def-continued-fraction-complete-quotients]], [[def-regular-continued-fraction]], [[def-eventually-periodic-continued-fraction]]). The convergent recurrence gives $p_0/q_0=2/1$ and $p_1/q_1=9/4$ ([[def-convergents-of-regular-continued-fraction]]), and direct computation gives $2^2-5\cdot1^2=-1$, $9^2-5\cdot4^2=1$ and $(2+\sqrt5)^2=9+4\sqrt5$.

[A1] The Axiom of Choice is assumed; it is used only through the rank-one structure of $\mathcal O_K^\times$ in [F6]; the Pell solution theory quoted above is choice-free ([[def-axiom-of-choice]]).



## Verification

**Proof technique:** identify units with Pell-type solutions of norm $\pm1$; in the solvable case compare the least negative solution with the fundamental positive solution to prove $\varepsilon_d=u_d^2$, and for $d=5$ enumerate the norm-$\pm4$ units of the maximal order and compare with the order's Pell units.

1.1 The ring-of-integers formula gives $\mathcal O_K=\mathbb Z[\sqrt d]$ when $d\equiv2,3\pmod4$ and $\mathcal O_K=\mathbb Z[(1+\sqrt d)/2]\supsetneq\mathbb Z[\sqrt d]$ when $d\equiv1\pmod4$. [F1]

1.2 An element $\alpha=x+y\sqrt d\in\mathbb Z[\sqrt d]$ is a unit of the order $\mathbb Z[\sqrt d]$ if and only if $N_d(\alpha)=x^2-dy^2=\pm1$: if $N_d(\alpha)=\pm1$ then $\alpha^{-1}=\pm(x-y\sqrt d)\in\mathbb Z[\sqrt d]$, while for a unit $\alpha$ one has $N_d(\alpha)N_d(\alpha^{-1})=N_d(1)=1$ with both factors in $\mathbb Z$, so $N_d(\alpha)=\pm1$. [F3]

1.3 Seen in $K$, every unit of $\mathbb Z[\sqrt d]$ has norm $\pm1$ (its Pell norm is the field norm), and conversely a norm-$\pm1$ element of $\mathbb Z[\sqrt d]$ is a unit; thus the units of the order are exactly the integral solutions of $x^2-dy^2=\pm1$, with the norm-one solutions forming $\pm\langle\varepsilon_d\rangle$. [F2, F3, F4]

1.4 Take $d=5$ and $\varepsilon:=(1+\sqrt5)/2\in\mathcal O_K$. Its norm is $((1+\sqrt5)/2)((1-\sqrt5)/2)=(1-5)/4=-1$, so $\varepsilon\in\mathcal O_K^\times$; direct multiplication gives $\varepsilon^2=(3+\sqrt5)/2$ and $\varepsilon^3=2+\sqrt5$. [F1, F2, algebra]

2.1 Suppose first that $x^2-dy^2=-1$ is solvable, and let $u_d=x_0+y_0\sqrt d$ be its least positive solution, whose coordinates are the numerator and denominator of the convergent in [F5]. Then $u_d^2$ is a positive solution of $x^2-dy^2=1$, so $u_d^2=\varepsilon_d^n$ for a unique integer $n\ge1$. [F4, F5, step 1.3]

2.2 For $d\equiv1\pmod4$ the elements of $\mathcal O_K=\mathbb Z[(1+\sqrt d)/2]$ are the numbers $(x+y\sqrt d)/2$ with $x\equiv y\pmod2$, of norm $(x^2-dy^2)/4$; such an element is a unit exactly when $x^2-dy^2=\pm4$, and it fails to lie in $\mathbb Z[\sqrt d]$ exactly when $x$ and $y$ are both odd. [F1, F2, step 1.2]

3.1 The exponent $n$ is odd: if $n=2m$, then $u_d^2=(\varepsilon_d^m)^2$ in the domain $\mathbb Z[\sqrt d]$, so $u_d=\pm\varepsilon_d^m$ and taking norms gives $N(u_d)=N(\varepsilon_d^m)=+1$, contradicting $N(u_d)=-1$. [F3, step 2.1, algebra]

3.2 The units of $\mathcal O_K$ for $d=5$ are the elements $(x+y\sqrt5)/2$ with $x\equiv y\pmod2$ and $x^2-5y^2=\pm4$; for a unit $u>1$ one has $y>0$, and $x=u\pm1/u>0$ according as $N(u)=\pm1$, so $x,y$ are positive integers. Checking the admissible positive pairs in order of $y$: for $y=1$ the equation gives $x^2=5\pm4$, so $x=1$ (the unit $\varepsilon$) or $x=3$ (the unit $\varepsilon^2$); for $y=2$ it gives $x^2=20\pm4$, so $x=4$ (the unit $2+\sqrt5=\varepsilon^3$); for $y\ge3$ one has $x^2\ge5\cdot9-4=41$, hence $x\ge7$ and $(x+y\sqrt5)/2\ge(7+3\sqrt5)/2>\varepsilon^3>\varepsilon$. Therefore $\varepsilon$ is the least unit $>1$ of $\mathcal O_K$. [step 2.2, step 1.4, algebra]

4.1 In fact $n=1$. If $n\ge3$, write $n=2m+1$ and put $w:=u_d\varepsilon_d^{-m}$. Both $u_d$ and $\varepsilon_d$ are units of $\mathbb Z[\sqrt d]$ by [F3], so $w$ is a unit of that order as well; in particular $w=x+y\sqrt d$ for integers $x,y$. From step 2.1, $u_d^2=\varepsilon_d^n$, and therefore $w^2=u_d^2\varepsilon_d^{-2m}=\varepsilon_d$ and $u_d=w\varepsilon_d^m=w(w^2)^m=w^n$. Since $u_d>0$ and $\varepsilon_d>1$, the definition of $w$ gives $w>0$, and $w^2=\varepsilon_d>1$ gives $w>1$. By [F3] the order norm $N_d(w)$ is $+1$ or $-1$. If $N_d(w)=+1$, multiplicativity in [F3] and $u_d=w^n$ give $N_d(u_d)=N_d(w)^n=+1$, contradicting $N_d(u_d)=-1$; hence $N_d(w)=-1$. Thus $w=x+y\sqrt d$ is a positive integral solution of $x^2-dy^2=-1$: its conjugate is $-1/w$, so $x=(w-1/w)/2>0$ and $y=(w+1/w)/(2\sqrt d)>0$. As $n\ge3$ and $w>1$, $u_d=w^n>w$; moreover $x=(w-1/w)/2<(u_d-1/u_d)/2$, so this solution has smaller first coordinate than the least positive solution $u_d$, a contradiction. Therefore $n=1$ and $\varepsilon_d=u_d^2$. [F3, step 2.1, step 3.1]

4.2 Since $\mathcal O_K^\times=\{\pm\gamma^n\}$ for some $\gamma>1$ and the least unit $>1$ in such a group is $\gamma$, step 3.2 gives $\gamma=\varepsilon$, so $\mathcal O_K^\times=\{\pm\varepsilon^n:n\in\mathbb Z\}$. [F6, step 3.2]

5.1 Consequently, in the solvable case every norm-one unit is $\pm\varepsilon_d^m=\pm u_d^{2m}$ and every norm-$(-1)$ unit is $\pm u_d^{2m+1}$, because multiplying it by $u_d^{-1}$ gives norm $1$; thus $\mathbb Z[\sqrt d]^\times=\pm\langle u_d\rangle$, and the norm-one subgroup $\pm\langle\varepsilon_d\rangle=\pm\langle u_d^2\rangle$ consists of the even powers of $u_d$, of index $2$. [step 1.3, step 4.1]

6.1 If instead $x^2-dy^2=-1$ is unsolvable, every unit of $\mathbb Z[\sqrt d]$ has norm $+1$, so $\mathbb Z[\sqrt d]^\times=\pm\langle\varepsilon_d\rangle$; setting $u_d:=\varepsilon_d$ gives $\mathbb Z[\sqrt d]^\times=\pm\langle u_d\rangle$ in both cases. [F3, F4, step 1.3, step 5.1]

7.1 The order $\mathbb Z[\sqrt d]$ is a subring of $\mathcal O_K$, so its unit group is a subgroup of $\mathcal O_K^\times$ and equals the units computed in steps 5.1 and 6.1; if the fundamental unit of $\mathcal O_K$ (its least unit $>1$) is an element with $x,y$ both odd, then it is not in $\mathbb Z[\sqrt d]$, so $\mathbb Z[\sqrt d]^\times\subsetneq\mathcal O_K^\times$, and since $\pm\langle\varepsilon_d\rangle\subseteq\mathbb Z[\sqrt d]^\times$ also $\pm\langle\varepsilon_d\rangle\subsetneq\mathcal O_K^\times$. [F1, step 6.1, step 2.2]

7.2 In the order, [F5] applied with the period length $\ell=1$ computed in [F7] makes the pair $(p_0,q_0)=(2,1)$ the least positive solution of $x^2-5y^2=-1$ and the pair $(p_1,q_1)=(9,4)$ the least positive solution of $x^2-5y^2=1$, whose associated element is the fundamental Pell unit $\varepsilon_5=9+4\sqrt5$; by steps 5.1 and 6.1 applied to $d=5$, $\mathbb Z[\sqrt5]^\times=\pm\langle2+\sqrt5\rangle$, and by step 1.4 this is $\pm\langle\varepsilon^3\rangle$, while the identity $(2+\sqrt5)^2=9+4\sqrt5$ of [F7] gives $9+4\sqrt5=\varepsilon^6=\varepsilon_5$. [F5, F7, step 6.1, step 1.4]

8.1 Finally $\mathbb Z[\sqrt5]^\times=\pm\langle\varepsilon^3\rangle\subseteq\pm\langle\varepsilon\rangle=\mathcal O_K^\times$ with index $[\langle\varepsilon\rangle:\langle\varepsilon^3\rangle]=3$, because the multiples of $3$ in $\mathbb Z$ have index $3$; a generator of the larger group, for instance $\varepsilon$, is not in the smaller order, so the two unit groups are not equal and the order's norm-one Pell subgroup is proper in $\mathcal O_K^\times$. [step 6.1, step 4.2, step 7.2]

9.1 Scope and choice accounting: the general statements of the example are steps 5.1, 6.1 and 7.1, and the failure of equality is witnessed by $d=5$ in steps 7.2 and 8.1; AC is used only through the rank-one structure [F6], all computations here being elementary arithmetic in $\mathbb Z[\sqrt5]$. [A1, F6, step 7.1, step 8.1] ∎
