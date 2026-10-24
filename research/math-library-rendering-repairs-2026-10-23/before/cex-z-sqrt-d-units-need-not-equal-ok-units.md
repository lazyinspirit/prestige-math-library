---
id: cex-z-sqrt-d-units-need-not-equal-ok-units
kind: counterexample
title: "Units of Z[√5] are a proper subgroup of the units of its maximal order"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-all-integral-pell-solutions
  - cor-unit-ranks-by-number-field-signature
  - def-axiom-of-choice
  - def-fundamental-pell-solution
  - def-norm-on-integer-square-root-order
  - ex-real-quadratic-units-and-pell
  - lem-algebraic-integer-is-a-unit-iff-norm-is-plus-or-minus-one
  - prop-integral-pell-solutions-form-a-group
  - thm-all-positive-pell-solutions-are-fundamental-powers
  - thm-ring-of-integers-of-a-quadratic-field
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "William A. Stein, Algebraic Number Theory: A Computational Approach"
      url: "https://wstein.org/books/ant/ant.pdf"
      locator: "§8.2.1 pp.93-95 (units of Q(sqrt 5); the subgroup of cubes gives the units with integer x,y)."
    - title: "J. S. Milne, Algebraic Number Theory v3.08"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
      locator: "Ch. 5 Example 5.3 p.86 (quadratic unit equations m^2-n^2d=±1 and (2m+n)^2-dn^2=±4)."
    - title: "Andrew V. Sutherland, MIT 18.785 Lecture 15: Dirichlet's Unit Theorem (Fall 2021)"
      url: "https://math.mit.edu/classes/18.785/2021fa/LectureNotes15.pdf"
      locator: "Example 15.15 p.8 (D=disc O_K; equation x^2-Dy^2=±4)."
---

## Statement refuted

Let $d>1$ be squarefree. Whenever $d\equiv1\pmod4$ the Pell order
$\mathbb Z[\sqrt d]$ is a proper subring of the maximal order
$\mathcal O_{\mathbb Q(\sqrt d)}$, and one might expect that this inclusion of
rings is the only difference between them, so that their unit groups still
coincide:
$$\mathbb Z[\sqrt d]^\times=\mathcal O_{\mathbb Q(\sqrt d)}^\times,$$
with the fundamental Pell solution $\varepsilon_d$ of $x^2-dy^2=1$ generating
the full unit group of the maximal order. This is false. At $d=5$, with
$\varepsilon=(1+\sqrt5)/2$, one has $\mathcal O_{\mathbb Q(\sqrt5)}=\mathbb Z[\varepsilon]$,
the element $2+\sqrt5=\varepsilon^3$ generates the unit group of the Pell order,
$\mathbb Z[\sqrt5]^\times=\{\pm(2+\sqrt5)^n:n\in\mathbb Z\}=\{\pm\varepsilon^{3n}:n\in\mathbb Z\}$,
while $\mathcal O_{\mathbb Q(\sqrt5)}^\times=\{\pm\varepsilon^n:n\in\mathbb Z\}$;
the Pell order's unit group is a proper subgroup of index $3$, and $\varepsilon$
itself is a unit of the maximal order that is not in $\mathbb Z[\sqrt5]$.

## Facts & Assumptions

**Given:** The Axiom of Choice, the field $K=\mathbb Q(\sqrt5)$, the Pell order $\mathbb Z[\sqrt5]$ with its Pell norm $N_5$ ([[def-norm-on-integer-square-root-order]]), the fundamental Pell solution $\varepsilon_5$ of $x^2-5y^2=1$ ([[def-fundamental-pell-solution]]), and the element $\varepsilon:=(1+\sqrt5)/2$.

[F1] $\mathcal O_K=\mathbb Z[(1+\sqrt5)/2]=\mathbb Z[\varepsilon]$, which strictly contains $\mathbb Z[\sqrt5]$, and its elements are the numbers $(x+y\sqrt5)/2$ with $x,y\in\mathbb Z$ and $x\equiv y\pmod2$, of field norm $N_{K/\mathbb Q}\bigl((x+y\sqrt5)/2\bigr)=(x^2-5y^2)/4$ ([[thm-ring-of-integers-of-a-quadratic-field]], [[ex-real-quadratic-units-and-pell]]).

[F2] For $u\in\mathcal O_K$, the element $u$ is a unit of the ring $\mathcal O_K$ if and only if $N_{K/\mathbb Q}(u)=\pm1$ ([[lem-algebraic-integer-is-a-unit-iff-norm-is-plus-or-minus-one]]).

[F3] The Pell norm on $\mathbb Z[\sqrt5]$ is multiplicative, and $\alpha=x+y\sqrt5\in\mathbb Z[\sqrt5]$ is a unit of the order $\mathbb Z[\sqrt5]$ if and only if $N_5(\alpha)=x^2-5y^2=\pm1$ ([[def-norm-on-integer-square-root-order]]). The norm-one integral solutions are exactly the elements $\pm\varepsilon_5^k$, $k\in\mathbb Z$, and the positive ones are $\varepsilon_5^k$ for $k\ge1$ ([[cor-all-integral-pell-solutions]], [[thm-all-positive-pell-solutions-are-fundamental-powers]], [[prop-integral-pell-solutions-form-a-group]]).

[F4] For $d=5$: the element $\varepsilon=(1+\sqrt5)/2\in\mathcal O_K$ has $N_{K/\mathbb Q}(\varepsilon)=-1$, so it is a unit of $\mathcal O_K$; direct multiplication gives $\varepsilon^2=(3+\sqrt5)/2$ and $\varepsilon^3=2+\sqrt5$; $2+\sqrt5$ is the least positive solution of $x^2-5y^2=-1$ and $\varepsilon_5=9+4\sqrt5=(2+\sqrt5)^2$; the unit group of the Pell order is $\mathbb Z[\sqrt5]^\times=\pm\langle2+\sqrt5\rangle=\pm\langle\varepsilon^3\rangle$; and $\varepsilon$ is the least unit $>1$ of $\mathcal O_K$ ([[ex-real-quadratic-units-and-pell]], [[def-fundamental-pell-solution]]).

[F5] Assume the Axiom of Choice. The maximal order has $\mathcal O_K^\times\cong\{\pm1\}\times\mathbb Z$ with torsion subgroup $\{\pm1\}$; explicitly there is a unit $\gamma>1$ with $\mathcal O_K^\times=\{\pm\gamma^n:n\in\mathbb Z\}$, and then $\gamma$ is the least unit $>1$ of $\mathcal O_K$ ([[cor-unit-ranks-by-number-field-signature]]).

[A1] The Axiom of Choice is assumed; it is used only through the rank-one unit structure [F5] ([[def-axiom-of-choice]]).

## Counterexample

**Proof technique:** direct; identify the units of the two orders by solving the norm equations $x^2-5y^2=\pm1$ and $x^2-5y^2=\pm4$, and compare the two cyclic groups through the common generator $\varepsilon$.

1.1 The maximal order is $\mathcal O_K=\mathbb Z[\varepsilon]$ with $\varepsilon=(1+\sqrt5)/2$, and $\mathbb Z[\sqrt5]\subsetneq\mathcal O_K$; its elements are the $(x+y\sqrt5)/2$ with $x\equiv y\pmod2$, of nonzero norm when the element is nonzero because the norm is a product of the two embeddings. [F1]

1.2 The element $\varepsilon$ is a unit of $\mathcal O_K$: its norm is $$N_{K/\mathbb Q}(\varepsilon)=\frac{1+\sqrt5}{2}\cdot\frac{1-\sqrt5}{2}=\frac{1-5}{4}=-1,$$ so [F2] applies; also $\varepsilon>1$ because $\sqrt5>1$, and direct multiplication gives $$\varepsilon^2=\frac{(1+\sqrt5)^2}{4}=\frac{3+\sqrt5}{2},\qquad \varepsilon^3=\varepsilon\cdot\varepsilon^2=\frac{(1+\sqrt5)(3+\sqrt5)}{4}=\frac{8+4\sqrt5}{4}=2+\sqrt5.$$ [F2, F4, algebra]

2.1 The units of the Pell order are $\mathbb Z[\sqrt5]^\times=\pm\langle2+\sqrt5\rangle=\pm\langle\varepsilon^3\rangle$: an element $x+y\sqrt5$ of $\mathbb Z[\sqrt5]$ is a unit of that order exactly when $x^2-5y^2=\pm1$ by [F3], the norm-one solutions are $\pm\varepsilon_5^k$, and $2+\sqrt5$ is the least positive norm-$(-1)$ solution, so every norm-$\pm1$ solution is $\pm(2+\sqrt5)^n=\pm\varepsilon^{3n}$. [F3, F4, step 1.2]

2.2 The maximal order has $\mathcal O_K^\times=\{\pm\varepsilon^n:n\in\mathbb Z\}$: by [F5] there is a unit $\gamma>1$ with $\mathcal O_K^\times=\{\pm\gamma^n:n\in\mathbb Z\}$, and then every unit $v>1$ is $\gamma^n$ with $n\ge1$, hence $v\ge\gamma$, so $\gamma$ is the least unit $>1$ of $\mathcal O_K$; by [F4] the element $\varepsilon>1$ is the least unit $>1$ of $\mathcal O_K$, so $\gamma=\varepsilon$. [F4, F5, step 1.2]

3.1 The inclusion of unit groups is proper: the element $\varepsilon$ lies in $\mathcal O_K^\times$ by step 1.2, while $\varepsilon=(1+\sqrt5)/2$ is not of the form $x+y\sqrt5$ with $x,y\in\mathbb Z$ and so does not lie in $\mathbb Z[\sqrt5]$, hence not in $\mathbb Z[\sqrt5]^\times$; therefore $\mathbb Z[\sqrt5]^\times=\pm\langle\varepsilon^3\rangle\subsetneq\pm\langle\varepsilon\rangle=\mathcal O_K^\times$. [step 1.1, step 2.1, step 2.2, algebra]

3.2 The index is $3$: the assignment $n\mapsto\varepsilon^n$ is an isomorphism $\mathbb Z\to\langle\varepsilon\rangle\subseteq\mathcal O_K^\times$, since $\varepsilon>1$ forces $\varepsilon^{n-m}=1$ only for $n=m$. It maps $3\mathbb Z$ onto $\langle\varepsilon^3\rangle$, so $[\langle\varepsilon\rangle:\langle\varepsilon^3\rangle]=[\mathbb Z:3\mathbb Z]=3$; multiplying by the common sign group $\{\pm1\}$ does not change the index, hence $[\mathcal O_K^\times:\mathbb Z[\sqrt5]^\times]=3$. [step 2.1, step 2.2, algebra]

4.1 Conclusion: the maximal order $\mathcal O_K$ of $K=\mathbb Q(\sqrt5)$ has unit group $\{\pm\varepsilon^n\}$ generated modulo its sign subgroup by $\varepsilon=(1+\sqrt5)/2$, while the Pell order $\mathbb Z[\sqrt5]$ has unit group $\{\pm(2+\sqrt5)^n\}=\{\pm\varepsilon^{3n}\}$, a proper subgroup of index $3$. The fundamental Pell solution $\varepsilon_5=9+4\sqrt5=\varepsilon^6$ generates the norm-one Pell subgroup of the order up to sign; the maximal-order fundamental unit is $\varepsilon$. The counterexample is the sharpened form of the design's warning for this pair: it identifies both groups and the exact index rather than merely exhibiting one missing unit. Choice is used only through the rank-one structure [F5]; all arithmetic in $\mathbb Z[\sqrt5]$ and the comparisons of the two generators are elementary. [A1, F4, F5, step 2.1, step 2.2, step 3.2] ∎
