---
id: def-closed-sectorial-form-and-its-associated-operator
kind: definition
title: Closed sectorial form and its associated operator
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps: [def-hilbert-space, def-real-and-complex-inner-product-space, def-bounded-coercive-and-symmetric-sesquilinear-forms, lem-w-one-two-is-a-hilbert-space, def-densely-defined-closed-and-closable-operator, def-unbounded-linear-operator-domain-and-graph, def-complex-conjugate-real-imaginary-part-and-modulus, thm-closed-graph-theorem, def-dependent-choice, thm-cauchy-schwarz-in-an-inner-product-space]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Roland Schnaubelt, Evolution Equations, Karlsruhe Institute of Technology (2023/24 course, complete lecture notes)"
      url: "https://iana.math.kit.edu/downloads/iana3/schnaubelt/Skripten/evgl-skript.pdf"
      locator: 'Chapter 2 Section 2.3, strictly accretive forms (1.31)-(1.32) and Corollary 2.29, printed pp. 66-67'
    - title: "Klaus-Jochen Engel and Rainer Nagel, One-Parameter Semigroups for Linear Evolution Equations, Graduate Texts in Mathematics 194 (complete author-hosted monograph)"
      url: "https://www.math.uni-tuebingen.de/de/forschung/agfa/members/engel-nagel_one-parameter-semigroups.pdf/%40%40download/file/engel-nagel_one-parameter-semigroups.pdf"
      locator: 'Chapter II Section 4.a, the form-to-operator discussion in the concluding remarks, printed pp. 106-108'
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Let $H$ be a complex Hilbert space with inner product $(\cdot,\cdot)$ linear in
the first argument and conjugate-linear in the second
([[def-hilbert-space]], [[def-real-and-complex-inner-product-space]]), and let
$V\subseteq H$ be a dense linear subspace carrying a Hilbert norm
$\|\cdot\|_V$ whose inclusion $V\hookrightarrow H$ is continuous
([[lem-w-one-two-is-a-hilbert-space]]; the standard instance is
$V=H^1_0(\Omega)\subseteq H=L^2(\Omega)$). A sesquilinear form
$a:V\times V\to\mathbb C$, linear in the first argument and conjugate-linear in
the second ([[def-bounded-coercive-and-symmetric-sesquilinear-forms]]), is a
**closed sectorial form** on $V\subseteq H$ if:

(i) $a$ is **bounded on $V$**: there is $C<\infty$ with
$|a(u,v)|\le C\|u\|_V\|v\|_V$ for all $u,v\in V$;

(ii) there are $M\ge0$ and $\theta\in[0,\pi/2)$ with
$$\operatorname{Re}a(u,u)\ge-M\|u\|_H^2,\qquad |\operatorname{Im}a(u,u)|\le\tan\theta\,\bigl(\operatorname{Re}a(u,u)+M\|u\|_H^2\bigr)$$
for every $u\in V$;

(iii) $V$ is complete for the **shifted form norm**
$$\|u\|_{a,M}^2:=\operatorname{Re}a(u,u)+M\|u\|_H^2+\|u\|_H^2,$$
By (ii) the square is
nonnegative and $\|u\|_H\le\|u\|_{a,M}$, so $\|u\|_{a,M}=0$ only for $u=0$;
condition (iii) is the closedness of the form. The Hermitian pairing $b(u,v)=(a(u,v)+\overline{a(v,u)})/2+(M+1)(u,v)_H$ has $b(u,u)=\|u\|_{a,M}^2>0$ for $u\ne0$, so it is an inner product and this expression is its norm ([[thm-cauchy-schwarz-in-an-inner-product-space]]).

**Comparison with a prescribed form-domain norm.** Under Dependent Choice ([[def-dependent-choice]]), $\|\cdot\|_{a,M}$ is equivalent to $\|\cdot\|_V$. The upper bound is $\|u\|_{a,M}^2\le(C+(M+1)\|\iota\|^2)\|u\|_V^2$. The identity in the reverse direction has closed graph: convergence in either norm implies convergence in $H$, so the two limits agree. Both normed versions of $V$ are Banach, and [[thm-closed-graph-theorem]] makes this inverse identity bounded, giving a positive lower comparison constant. Generation results below may instead take this norm equivalence as an explicit hypothesis, retaining only Countable Choice for Lax–Milgram.

The **associated operator** $A$ of such a form, in the $e^{tA}$ sign
convention, is
$$D(A):=\Bigl\{u\in V:\ \exists\,f\in H\ \text{with}\ a(u,v)=-(f,v)\ \text{for all}\ v\in V\Bigr\},\qquad Au:=f .$$

The vector $f$ is unique, so $A$ is well defined: if $f,g$ both satisfy the
relation, then $(f-g,v)=0$ for every $v\in V$; since $V$ is dense in $H$ and
the inner product is continuous, $(f-g,w)=0$ for every $w\in H$, and testing
$w=f-g$ gives $\|f-g\|^2=0$. The operator $A$ is linear
([[def-unbounded-linear-operator-domain-and-graph]],
[[def-densely-defined-closed-and-closable-operator]]): if $u_1,u_2\in D(A)$
with associated vectors $f_1,f_2$ and $\lambda\in\mathbb C$, then
$a(u_1+\lambda u_2,v)=a(u_1,v)+\lambda a(u_2,v)=-(f_1+\lambda f_2,v)$ for all
$v\in V$, so $u_1+\lambda u_2\in D(A)$ with $A(u_1+\lambda u_2)=f_1+\lambda f_2$.
The defining relation reads
$$\langle Au,v\rangle=-a(u,v)\qquad(u\in D(A),\ v\in V),$$
and is the only sign convention used on this page.

The form is **coercive** with constant $\alpha>0$ when
$\operatorname{Re}a(u,u)\ge\alpha\|u\|_V^2$ for all $u\in V$. A coercive
form is closed: (iii) holds with explicit estimates, since (i) and coercivity
give, with $\iota:V\hookrightarrow H$ the inclusion,
$$\alpha\|u\|_V^2\le\|u\|_{a,M}^2\le\bigl(C+(M+1)\|\iota\|^2\bigr)\|u\|_V^2 .$$

### Sign convention

The dictionary $\langle Au,v\rangle=-a(u,v)$ fixes the orientation: for
$u\in D(A)$ the quadratic form of $A$ is the negative of $a$,
$$\langle Au,u\rangle=-a(u,u),$$
so the sector condition (ii) says that the shifted operator $M-A$ is
accretive,
$$\operatorname{Re}\langle (M-A)u,u\rangle=\operatorname{Re}a(u,u)+M\|u\|_H^2\ge0 ,$$
and gives $\operatorname{Re}\langle (A-M)u,u\rangle\le0$ for every $u\in D(A)$.
This is the convention in which $e^{tA}$ solves $u'=Au$ and the resolvent
sector of $A$ opens to the right; the opposite pairing
$a(u,v)=\langle Au,v\rangle$ is the Pazy-Lunardi convention for $-A$ and is not
used here.

### Coercivity versus sectoriality

A coercive form satisfies (ii) with $M=0$ and $\theta=\arctan(C/\alpha)$ at
most, because $\operatorname{Re}a(u,u)\ge\alpha\|u\|_V^2\ge0$ and
$|\operatorname{Im}a(u,u)|\le C\|u\|_V^2$. The sectorial condition is a
one-sided quantitative hypothesis on $\operatorname{Re}a$ and
$\operatorname{Im}a$ along the diagonal; the phrase "elliptic operator" is
never used as a hypothesis ([[def-complex-conjugate-real-imaginary-part-and-modulus]]).
