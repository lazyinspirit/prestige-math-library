---
id: ex-a2-quiver-hall-wall-crossing-pentagon
kind: example
title: "The A₂ quiver gives the quantum-dilogarithm pentagon"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps:
  - def-finite-acyclic-quiver-stability-data
  - lem-finite-acyclic-quiver-representations-are-finitary-hereditary-with-euler-form
  - lem-upper-half-plane-sum-phase-between
  - lem-quiver-hardernarasimhan-filtrations-exist-are-unique-and-descend
  - def-subobject-first-completed-finite-quiver-hall-algebra-and-tori
  - thm-finite-quiver-euler-and-skew-integration-is-multiplicative
  - thm-finite-quiver-hall-wall-crossing
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
sources:
  references:
    - title: "Tom Bridgeland, Hall algebras and Donaldson–Thomas invariants, §4.6"
      url: "https://arxiv.org/pdf/1611.03696"
    - title: "Olivier Schiffmann, Lectures on Hall Algebras, Example 3.15"
      url: "https://arxiv.org/pdf/math/0611617"
verification:
  precheck: pass
---

## Example

Let $Q$ be the A₂ quiver with one arrow $1\to2$:

~~~tikz
\begin{tikzpicture}[>=stealth]
  \node[circle,draw,inner sep=2pt,label=below:{1}] (v1) at (0,0) {};
  \node[circle,draw,inner sep=2pt,label=below:{2}] (v2) at (2,0) {};
  \draw[->] (v1) -- (v2);
\end{tikzpicture}
~~~

The nodes are the two vertices and the single directed edge is the unique
arrow. Let $S_1,S_2$ be the vertex simples and let
$E=(\mathbb F_q\xrightarrow{\mathrm{id}}\mathbb F_q)$. For
$z_1,z_2\in\mathbb H$ with phases $\phi_i=\arg(z_i)/\pi$, the integrated
wall identity is
$$E_{t^2}(x_2)*E_{t^2}(x_1) =E_{t^2}(x_1)*E_{t^2}(x^{(1,1)})*E_{t^2}(x_2),\qquad x^{(1,1)}=t\,x_1*x_2,\quad t=\sqrt q.$$
Here $E_{t^2}(x)=\sum_{n\ge0}t^n x^n/\prod_{r=1}^n(t^{2r}-1)$.
The identity is the actual completed A₂ pentagon, with the factors coming
from the two chambers; no commutative product is substituted.

## Facts & Assumptions

**Given:** The A₂ quiver above over $\mathbb F_q$, charges $z_1,z_2\in\mathbb H$,
and $t=\sqrt q>0$.

[F1] Semistability is tested on nonzero subrepresentations, and
$Z(d_1,d_2)=d_1z_1+d_2z_2$
([[def-finite-acyclic-quiver-stability-data]]).

[F2] The completed HN products for any two upper-half-plane charge
assignments agree after either integration
([[thm-finite-quiver-hall-wall-crossing]]).

[F3] $J(\kappa_M)=t^{\chi_Q(\mathbf d(M),\mathbf d(M))}
x^{\mathbf d(M)}$ and the skew torus uses
$x^{\mathbf d}*x^{\mathbf e}=t^{-\langle\mathbf e,\mathbf d\rangle}
x^{\mathbf d+\mathbf e}$
([[thm-finite-quiver-euler-and-skew-integration-is-multiplicative]]).

[F4] The phase of a sum of two upper-half-plane charges lies between their
phases ([[lem-upper-half-plane-sum-phase-between]]).

[F5] The quiver Euler form satisfies
$\dim\operatorname{Hom}(X,Y)-\dim\operatorname{YExt}^1(X,Y)=
\chi_Q(\mathbf d(X),\mathbf d(Y))$
([[lem-finite-acyclic-quiver-representations-are-finitary-hereditary-with-euler-form]]).

## Verification

**Given:** The objects and hypotheses in the statement.

1.1 A representation is one linear map $f:V_1\to V_2$. Choose a complement to $\ker f$ and a complement to $\operatorname{im}f$. The restriction of $f$ from the first complement to $\operatorname{im}f$ is an isomorphism. In bases adapted to these spaces, the representation is $$S_1^{\oplus a}\oplus E^{\oplus r}\oplus S_2^{\oplus b},\qquad r=\operatorname{rank}f,\quad a=\dim\ker f,\quad b=\dim(V_2/\operatorname{im}f).$$ Thus these three isomorphism types account for every representation. [F1, construct, algebra]

1.2 The Euler form gives $\chi_Q(\mathbf e_1,\mathbf e_2)=-1$ and $\chi_Q(\mathbf e_2,\mathbf e_1)=0$, so $\langle\mathbf e_1,\mathbf e_2\rangle=-1$ and $\langle\mathbf e_2,\mathbf e_1\rangle=1$. By [F3], $$x_2*x_1=t\,x^{(1,1)},\qquad x_1*x_2=t^{-1}x^{(1,1)},\qquad x^{(1,1)}=t\,x_1*x_2.$$ In particular $x_2*x_1=t^2x_1*x_2$. [F3, algebra]

2.1 A subrepresentation of $E$ is a pair of subspaces $U_1,U_2\subseteq\mathbb F_q$ with $U_1\subseteq U_2$. Its only proper nonzero possibility is $S_2$. The phase of $z_1+z_2$ lies between $\phi_1$ and $\phi_2$ by [F4]. The sequence $0\to S_2\to E\to S_1\to0$ is nonsplit because $E$ has no subrepresentation isomorphic to $S_1$; every nonzero arrow scalar is changed to the identity by vertex base changes, so this is the unique nontrivial extension of these simples. Hence $E$ is stable when $\phi_1>\phi_2$, unstable when $\phi_1<\phi_2$, and strictly semistable when $\phi_1=\phi_2$. [F1, F4, step 1.1, algebra]

3.1 Suppose $\phi_1>\phi_2$. In the decomposition of step 1.1, if two different summand types occur, the direct sum of all summands of greatest phase is a proper subobject. Repeated application of [F4] shows the total phase is strictly below that greatest phase, because at least one summand has smaller phase; hence the representation is unstable. Pure sums $S_1^{\oplus n}$ and $S_2^{\oplus n}$ are semistable because all their nonzero subobjects have the same phase. A subrepresentation of $E^{\oplus n}$ is a pair $U_1\subseteq U_2$; writing $r=\dim U_1$ and $s=\dim U_2$ gives $r\le s$. The determinant calculation $$\operatorname{Im}\big(\overline{(z_1+z_2)}(rz_1+sz_2)\big) =(s-r)\operatorname{Im}(\bar z_1z_2)\le0$$ shows its phase is at most that of $E^{\oplus n}$. Thus the semistable objects are exactly pure sums of $S_1$, $E$, or $S_2$, in descending phase order. [F1, F4, step 1.1, step 2.1, algebra]

3.2 Suppose $\phi_1<\phi_2$. Every summand in the decomposition of step 1.1 has phase at most $\phi_2$, and an $E$ summand or an $S_1$ summand has smaller phase. Repeated application of [F4] therefore makes the phase of any object containing a lower-phase summand strictly less than $\phi_2$. An object with an $E$ summand has the nonzero subobject $S_2$, and an object with both $S_1$ and $S_2$ summands has an $S_2$ summand; each is a destabilizing subobject. Hence only pure sums of $S_2$ and pure sums of $S_1$ are semistable, in that descending order. If $\phi_1=\phi_2$, all nonzero dimension vectors have the same phase, so every representation is semistable and the HN product has one phase factor containing both $S_1\oplus S_2$ and $E$. [F1, F4, step 1.1, step 2.1, algebra]

4.1 Each $A\in\{S_1,S_2,E\}$ has $\operatorname{End}(A)=\mathbb F_q$. For $E$, an endomorphism is a pair of scalars at the vertices that must agree because its arrow is the identity. Also $\chi_Q(\mathbf d(A),\mathbf d(A))=1$ for each of these three objects. [F5] gives $\operatorname{YExt}^1(A^{\oplus m},A^{\oplus n})=0$: the Hom space has dimension $mn$ and $\chi_Q(m\mathbf d(A),n\mathbf d(A))=mn$. The semistable subcategory at each stable phase in step 3.1 is consequently equivalent to $\mathrm{Vect}_{\mathbb F_q}$, with the displayed object as its one-dimensional simple. [F1, F5, step 1.1, algebra]

5.1 For $A$ one of these three stable objects, put $\gamma=\mathbf d(A)$. Then $\chi_Q(n\gamma,n\gamma)=n^2$ and $|\operatorname{Aut}(A^{\oplus n})|=|\operatorname{GL}_n(\mathbb F_q)|$. Counting ordered bases directly gives $$|\operatorname{GL}_n(\mathbb F_q)|= \prod_{j=0}^{n-1}(q^n-q^j) =q^{n(n-1)/2}\prod_{r=1}^{n}(q^r-1).$$ Therefore $$\frac{t^{n^2}}{|\operatorname{GL}_n(\mathbb F_q)|} =\frac{t^n}{\prod_{r=1}^{n}(t^{2r}-1)}$$ using $q=t^2$. Thus the $J$-image of the semistable series at that phase is $E_{t^2}(x^\gamma)$. The empty product gives the same result for $n=0$. [F3, F5, step 4.1, algebra]

6.1 If $\phi_1>\phi_2$, the descending semistable phases are $S_1,E,S_2$; if $\phi_1<\phi_2$, they are $S_2,S_1$. Apply [F2] to these two chamber assignments and substitute the phase images from steps 5.1 and 1.2. This gives the stated pentagon over $\mathbb Q(\sqrt q)$. [F2, step 3.1, step 3.2, step 5.1, step 1.2]

7.1 Each fixed-bidegree coefficient of the pentagon is a rational function of $t$. Specializing to $q=2^m$ for every $m\ge1$ gives infinitely many distinct $t=2^{m/2}>1$, where every denominator $t^{2r}-1$ is nonzero and step 6.1 proves equality. The numerator of the difference therefore has infinitely many roots and is the zero polynomial. This proves the identity coefficientwise in $\mathbb Q(t)$. [step 6.1, algebra] ∎
