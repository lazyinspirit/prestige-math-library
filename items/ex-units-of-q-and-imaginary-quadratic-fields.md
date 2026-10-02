---
id: ex-units-of-q-and-imaginary-quadratic-fields
kind: example
title: Units of $\mathbb Q$ and the imaginary quadratic fields
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-unit-ranks-by-number-field-signature
  - def-archimedean-embeddings-and-number-field-signature
  - def-axiom-of-choice
  - def-integral-element-and-algebraic-integer
  - def-number-field
  - def-ring-of-integers-of-a-number-field
  - def-roots-of-unity-in-a-field
  - lem-algebraic-integer-is-a-unit-iff-norm-is-plus-or-minus-one
  - lem-units-of-z
  - cor-rational-algebraic-integers-are-integers
  - thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots
  - thm-evaluation-kernel-and-minimal-polynomial
  - thm-field-norm-and-trace-by-embeddings
  - thm-quadratic-and-cubic-irreducibility-test
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
      locator: "Ch. 5 Example 5.3 p.86 (d<0: finitely many unit equations; the unit groups of Q(i) and Q(sqrt-3))."
    - title: "Andrew V. Sutherland, MIT 18.785 Lecture 15: Dirichlet's Unit Theorem (Fall 2021)"
      url: "https://math.mit.edu/classes/18.785/2021fa/LectureNotes15.pdf"
      locator: "Example 15.15 p.8 (d<0: rank 0 and O_K^× = mu_K)."
    - title: "Brian Conrad and Aaron Landesman, Math 154 Algebraic Number Theory"
      url: "https://people.math.harvard.edu/~landesman/assets/undergraduate-number-theory.pdf"
      locator: "Ch. 24 p.147 (rank-zero cases)."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Example

Assume the Axiom of Choice. For $K=\mathbb Q$ one has
$\mathcal O_K=\mathbb Z$ and $\mathcal O_K^\times=\{\pm1\}$. For
$K=\mathbb Q(i)$ one has $\mathcal O_K=\mathbb Z[i]$ and
$\mathcal O_K^\times=\{\pm1,\pm i\}=\mu_4(K)$. For
$K=\mathbb Q(\sqrt{-3})$, with $\omega=(1+\sqrt{-3})/2$, one has
$\mathcal O_K=\mathbb Z[(1+\sqrt{-3})/2]=\mathbb Z[\omega]$ and
$\mathcal O_K^\times=\mu_6(K)=\{\pm1,\pm\omega,\pm\omega^2\}$. All three unit
groups are finite of rank $0$.

## Facts & Assumptions

**Given:** The Axiom of Choice and the three number fields $\mathbb Q$, $\mathbb Q(i)=\mathbb Q(\sqrt{-1})$ and $\mathbb Q(\sqrt{-3})$, with the element $\omega:=(1+\sqrt{-3})/2$ ([[def-number-field|number field]]).

[F1] The ring of integers $\mathcal O_{\mathbb Q}$ is the integral closure of $\mathbb Z$ in $\mathbb Q$ ([[def-ring-of-integers-of-a-number-field]]); a rational number integral over $\mathbb Z$ is an integer ([[cor-rational-algebraic-integers-are-integers]]), and conversely every integer $n$ is a root of the monic polynomial $X-n$. Hence $\mathcal O_{\mathbb Q}=\mathbb Z$.

[F2] For squarefree $d\ne1$ one has $\mathcal O_{\mathbb Q(\sqrt d)}=\mathbb Z[(1+\sqrt d)/2]$ if $d\equiv1\pmod4$ and $\mathcal O_{\mathbb Q(\sqrt d)}=\mathbb Z[\sqrt d]$ otherwise ([[thm-ring-of-integers-of-a-quadratic-field]]). Since $-1\equiv3\pmod4$ and $-3\equiv1\pmod4$, this gives $\mathcal O_{\mathbb Q(i)}=\mathbb Z[\sqrt{-1}]=\mathbb Z[i]$ and $\mathcal O_{\mathbb Q(\sqrt{-3})}=\mathbb Z[(1+\sqrt{-3})/2]=\mathbb Z[\omega]$.

[F3] For a number field $K$ and $u\in\mathcal O_K$, the element $u$ is a unit of $\mathcal O_K$ if and only if $N_{K/\mathbb Q}(u)=\pm1$ ([[lem-algebraic-integer-is-a-unit-iff-norm-is-plus-or-minus-one]]).

[F4] Let $d\in\mathbb Q$ be nonsquare and put $K=\mathbb Q(\sqrt d)$. A degree-$2$ polynomial over $\mathbb Q$ is irreducible exactly when it has no rational root ([[thm-quadratic-and-cubic-irreducibility-test]]), and $d$ is not a square in $\mathbb Q$, so $X^2-d$ is the minimal polynomial of $\sqrt d$ over $\mathbb Q$ ([[thm-evaluation-kernel-and-minimal-polynomial]]) and $[K:\mathbb Q]=2$. By the correspondence between $F$-embeddings and distinct roots of the minimal polynomial ([[thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots]]), the two $\mathbb Q$-embeddings of $K$ into $\mathbb C$ send $\sqrt d$ to $\sqrt d$ and to $-\sqrt d$; since $\operatorname{char}\mathbb Q=0$, norm and trace are the product and sum over these embeddings ([[thm-field-norm-and-trace-by-embeddings]]). Hence for $\alpha=a+b\sqrt d$ with $a,b\in\mathbb Q$, $$N_{K/\mathbb Q}(\alpha)=(a+b\sqrt d)(a-b\sqrt d)=a^2-db^2.$$

[F5] The units of $\mathbb Z$ are exactly $1$ and $-1$ ([[lem-units-of-z]]).

[F6] For $n\ge1$, $\mu_n(K)=\{x\in K:x^n=1\}$ is the set of $n$-th roots of unity in $K$, and $\mu(K)$ denotes the group of all roots of unity in $K$, the union of the subgroups $\mu_n(K)$ ([[def-roots-of-unity-in-a-field]]).

[F7] If $x\in K$ satisfies $x^n=1$ for some $n\ge1$, then $x$ is a root of the monic polynomial $T^n-1\in\mathbb Z[T]$, hence is integral over $\mathbb Z$ ([[def-integral-element-and-algebraic-integer]]) and lies in $\mathcal O_K$, the integral closure of $\mathbb Z$ in $K$ ([[def-ring-of-integers-of-a-number-field]]); also $x^{-1}=x^{n-1}\in\mathcal O_K$, so $x\in\mathcal O_K^\times$. In particular every root of unity in $K$ is a unit of $\mathcal O_K$, that is $\mu(K)\subseteq\mathcal O_K^\times$.

[F8] The unit rank $r_1+r_2-1$ is $0$ exactly for $\mathbb Q$ and for imaginary quadratic fields, and in the rank-zero cases $\mathcal O_K^\times=\mu(K)$ is finite ([[cor-unit-ranks-by-number-field-signature]]); a quadratic field $\mathbb Q(\sqrt d)$ with $d<0$ has no real embedding and two complex conjugate embeddings, hence signature $(0,1)$ ([[def-archimedean-embeddings-and-number-field-signature]]).

[A1] The Axiom of Choice is assumed; it is used only through the rank-zero unit structure [F8] ([[def-axiom-of-choice]]).

## Verification

**Proof technique:** compute the unit group of each of the three rings of integers by solving the norm equation $N(u)=\pm1$ with the elementary norm formula for quadratic fields, and identify the results with the groups of fourth and sixth roots of unity.

1.1 $\mathcal O_{\mathbb Q}=\mathbb Z$ and $\mathcal O_{\mathbb Q}^\times=\mathbb Z^\times=\{\pm1\}$: the rational units are the units of $\mathbb Z$, and $\pm1$ are roots of unity while every element of $\mu(\mathbb Q)$ is a unit of $\mathbb Z$ by [F7], so $\mu(\mathbb Q)=\{\pm1\}$ as well. [F1, F5, F6, F7]

1.2 By [F2] and the congruences $-1\equiv3\pmod4$, $-3\equiv1\pmod4$ one has $\mathcal O_{\mathbb Q(i)}=\mathbb Z[i]=\{a+bi:a,b\in\mathbb Z\}$ and $\mathcal O_{\mathbb Q(\sqrt{-3})}=\mathbb Z[\omega]=\{a+b\omega:a,b\in\mathbb Z\}$, where $\omega=(1+\sqrt{-3})/2$. [F2]

1.3 Applying [F4] with the nonsquare rational $d=-1$ to $a+bi=a+b\sqrt{-1}$ with $a,b\in\mathbb Z\subseteq\mathbb Q$ gives $N_{\mathbb Q(i)/\mathbb Q}(a+bi)=a^2+b^2$. [F4]

1.4 Writing $a+b\omega=(a+b/2)+(b/2)\sqrt{-3}$ with $a,b\in\mathbb Z$ and applying [F4] with the nonsquare rational $d=-3$ gives $N_{\mathbb Q(\sqrt{-3})/\mathbb Q}(a+b\omega)=(a+b/2)^2+3(b/2)^2=a^2+ab+b^2$. [F4, algebra]

2.1 By [F3] and step 1.3, $a+bi\in\mathbb Z[i]$ is a unit if and only if $a^2+b^2=\pm1$. Since $a^2+b^2\ge0$, this is the equation $a^2+b^2=1$ with $a,b\in\mathbb Z$; then $a^2\le1$, $\lvert a\rvert\le1$, and $b^2=1-a^2$, so either $a=0$ and $b=\pm1$ or $b=0$ and $a=\pm1$. Hence $\mathcal O_{\mathbb Q(i)}^\times=\{1,-1,i,-i\}$. [F3, step 1.3, algebra]

2.2 By [F3] and step 1.4, $a+b\omega\in\mathbb Z[\omega]$ is a unit if and only if $a^2+ab+b^2=\pm1$. Since $4(a^2+ab+b^2)=(2a+b)^2+3b^2\ge0$, the value $-1$ cannot occur, and $a^2+ab+b^2=1$ is equivalent to $(2a+b)^2+3b^2=4$; then $3b^2\le4$ with $b\in\mathbb Z$ forces $b\in\{-1,0,1\}$. If $b=0$ then $(2a)^2=4$ gives $a=\pm1$; if $b=1$ then $(2a+1)^2=1$ gives $a=0$ or $a=-1$; if $b=-1$ then $(2a-1)^2=1$ gives $a=1$ or $a=0$. [F3, step 1.4, algebra]

3.1 Direct computation in $\mathbb Z[\omega]$ gives $\omega^2=\frac{-1+\sqrt{-3}}2=\omega-1$ and $\omega^3=\omega\cdot\omega^2=\omega^2-\omega=(\omega-1)-\omega=-1$, hence $\omega^6=1$. Since $1,\omega,\omega-1,-1$ have pairwise different coordinates in the $\mathbb Z$-basis $(1,\omega)$ of $\mathbb Z[\omega]$, the elements $\omega,\omega^2,\omega-1$ are all different from $1$, and the six units found in step 2.2 are exactly $\omega^0,\omega^1,\omega^2,\omega^3=-1,\omega^4=-\omega, \omega^5=-(\omega-1)$. [step 2.2, algebra]

3.2 Each of the four elements $1,-1,i,-i$ of $\mathcal O_{\mathbb Q(i)}^\times$ satisfies $x^4=1$, so $\mathcal O_{\mathbb Q(i)}^\times\subseteq\mu_4(\mathbb Q(i))$ by [F6], while $\mu_4(\mathbb Q(i))\subseteq\mathcal O_{\mathbb Q(i)}^\times$ by [F7]; hence $\mathcal O_{\mathbb Q(i)}^\times=\mu_4(\mathbb Q(i))=\{\pm1,\pm i\}$. [F6, F7, step 2.1]

4.1 Each of the six units found in step 2.2 is a power of $\omega$ by step 3.1, hence satisfies $x^6=1$; therefore $\mathcal O_{\mathbb Q(\sqrt{-3})}^\times\subseteq\mu_6(\mathbb Q(\sqrt{-3}))$ by [F6], and $\mu_6(\mathbb Q(\sqrt{-3}))\subseteq\mathcal O_{\mathbb Q(\sqrt{-3})}^\times$ by [F7]; hence $\mathcal O_{\mathbb Q(\sqrt{-3})}^\times=\mu_6(\mathbb Q(\sqrt{-3}))=\{\pm1,\pm\omega,\pm\omega^2\}$, because $\omega^3=-1$ gives $\{\omega^0,\dots,\omega^5\}=\{\pm1,\pm\omega,\pm\omega^2\}$. [F6, F7, step 2.2, step 3.1]

5.1 Finally $\mathbb Q$ has signature $(1,0)$ and both imaginary quadratic fields have signature $(0,1)$, so [F8] gives unit rank $r_1+r_2-1=0$ for all three fields and exhibits the unit groups as finite torsion groups $\mu(K)$; the computed groups $\{\pm1\}$, $\{\pm1,\pm i\}$ and $\{\pm1,\pm\omega,\pm\omega^2\}$ have $2$, $4$ and $6$ elements. [F8, step 1.1, step 3.2, step 4.1]

6.1 Choice accounting: AC is used only through the rank-zero structure [F8]; the norm computations, the enumeration of the norm-one solutions, and the powers of $\omega$ are elementary computations in $\mathbb Z$ and $\mathbb Z[\omega]$ and use no choice. [A1, F8] ∎
