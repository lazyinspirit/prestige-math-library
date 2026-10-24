---
id: def-commensurable-subspaces-and-ideals-of-endomorphisms
kind: definition
title: "Commensurable subspaces and the ideals E_0, E_1, E_2 of E"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-axiom-of-choice
  - def-dimension
  - def-linear-map
  - def-vector-space
  - def-quotient-vector-space-and-canonical-projection
  - lem-finite-potent-trace-existence-and-uniqueness
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "John Tate, Residues of differentials on curves, Ann. Sci. E.N.S. (4) 1 (1968) 149-159"
      url: "http://www.numdam.org/article/ASENS_1968_4_1_1_149_0.pdf"
verification:
  audited: 2026-10-02
  precheck: pass
---

## Definition

Assume the Axiom of Choice as inherited from the linear algebra suppliers
([[def-axiom-of-choice]]). Let $k$ be a field, let $V$ be a $k$-vector space
([[def-vector-space]]), and let $A,B$ be $k$-subspaces of $V$.

**Commensurability.** Write $A<B$, and say that $A$ is **not much bigger**
than $B$, when the quotient $(A+B)/B$
([[def-quotient-vector-space-and-canonical-projection]]) is finite-dimensional
([[def-dimension]]). Write $A\sim B$, and say that $A$ and $B$ are
**commensurable**, when $A<B$ and $B<A$. Thus $A<B$ says that $A$ is contained
in $B$ up to a finite-dimensional error: equivalently, and this reformulation
is used throughout, $A<B$ holds if and only if $A\subseteq B+W$ for some
finite-dimensional subspace $W\subseteq V$.

The relation $<$ has the following elementary properties, each an immediate
consequence of the definition; here $A$, $B$, $C$ are $k$-subspaces of $V$ and
$r\ge0$.

1. *Reflexivity and monotonicity.* $A<A$ and $A<A+B$; if $A\subseteq B$ then
   $A<B$; if $A<B$ and $B\subseteq C$ then $A<C$; and $A<B$ if and only if
   $A<A\cap B$, if and only if $A+B<B$.
2. *Transitivity.* If $A<B$ and $B<C$, then $A<C$.
3. *$k$-linear maps.* If $A<B$ and $\theta\colon V\to V'$ is $k$-linear, then
   $\theta(A)<\theta(B)$ in $V'$ ([[def-linear-map]]).
4. *Finite sums.* If $A_i<B_i$ for $i=1,\dots,r$, then
   $\sum_i A_i<\sum_i B_i$.
5. *Commensurability is an equivalence relation.* The relation $\sim$ is
   reflexive, symmetric and transitive, and $A\sim B$ if and only if both
   $(A+B)/B$ and $(A+B)/A$ are finite-dimensional.

For instance, $A<A$ because $(A+A)/A$ is the zero space; if $B\subseteq C$,
then $(A+C)/C\cong A/(A\cap C)$ is a quotient of
$(A+B)/B\cong A/(A\cap B)$. For transitivity, if $A<B$ and $B<C$, choose
finite-dimensional subspaces $U,W\subseteq V$ with
$A\subseteq B+U$ and $B\subseteq C+W$. Then
$A\subseteq B+U\subseteq C+W+U$, so $A<C$. A $k$-linear $\theta$ induces
a surjection $(A+B)/B\twoheadrightarrow\theta(A+B)/\theta(B)$, which proves
3. The reformulation $A<B\Leftrightarrow A\subseteq B+W$ for a
finite-dimensional $W$ is obtained by lifting a finite spanning set of
$(A+B)/B$ to $A$: every class has a representative in $A$, since each
$A+B$ element differs from an element of $A$ by an element of $B$; the span
of representatives of a finite basis is such a $W$. Conversely, if
$A\subseteq B+W$ for finite-dimensional $W$, then $(A+B)/B$ is a quotient
of the image of $W$ and is finite-dimensional.

Now let $K$ be a commutative $k$-algebra acting on $V$ (equivalently, $V$ is a
$K$-module whose structure map is $k$-linear) and assume
$$fA<A\qquad\text{for every }f\in K.$$
Attached to the pair $(V,A)$ is the **ideal filtration**
$$E:=\{\theta\in\operatorname{End}_k(V):\theta A<A\},\qquad E_1:=\{\theta\in\operatorname{End}_k(V):\theta V<A\},\qquad E_2:=\{\theta\in\operatorname{End}_k(V):\theta A<0\},\qquad E_0:=E_1\cap E_2,$$
where $\theta A<0$ is shorthand for the statement that $\theta A$ is
finite-dimensional, the zero space $0$ being finite-dimensional. Thus
$$E_0=\{\theta\in\operatorname{End}_k(V):\theta V<A\text{ and }\theta A\text{ is finite-dimensional}\}.$$
Properties 1 and 4 show that $E$, $E_1$ and $E_2$ are closed under addition
and under multiplication by scalars, hence are $k$-subspaces of
$\operatorname{End}_k(V)$. The image of $K$ is contained in $E$ by the
hypothesis $fA<A$ for every $f\in K$; it need not be contained in $E_1$ or
$E_2$. Also $E_0=E_1\cap E_2$ by definition. An element of $E_0$ is *finite potent* in the
sense of [[lem-finite-potent-trace-existence-and-uniqueness]]: if $\theta V<A$
with $\theta V\subseteq A+W$ for a finite-dimensional $W$, then
$\theta^2V\subseteq\theta A+\theta W$, a sum of two finite-dimensional spaces,
so $\theta^2V$ is finite-dimensional and the trace $\operatorname{Tr}_V(\theta)$
is defined.

The subspaces $E$, $E_1$, $E_2$ depend only on the commensurability class of
$A$: if $A'\sim A$ is a further $k$-subspace of $V$ with $fA'<A'$ for all
$f\in K$, then $\theta A'\sim\theta A$ for every
$\theta\in\operatorname{End}_k(V)$ by properties 2 and 3. If $\theta\in E(A)$,
then $\theta A'<\theta A<A<A'$, hence $\theta\in E(A')$; conversely, if
$\theta\in E(A')$, then $\theta A<\theta A'<A'<A$, hence $\theta\in E(A)$.
Also, $\theta V<A$ iff $\theta V<A'$ by transitivity and $A\sim A'$, so
$E_1(A)=E_1(A')$. Finally, if $\theta A$ is finite-dimensional, the relation
$\theta A'<\theta A$ places $\theta A'$ inside $\theta A$ plus a
finite-dimensional subspace, so $\theta A'$ is finite-dimensional; the
reverse implication follows symmetrically from $\theta A<\theta A'$. Thus
$E_2(A)=E_2(A')$, and consequently $E_0(A)=E_0(A')$. These are the
subspaces in which Tate's abstract residue theory states its residue map on
$K\,dK$; they are abstract linear-algebraic objects and involve no geometry.
