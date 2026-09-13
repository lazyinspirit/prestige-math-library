---
id: def-bockstein-connecting-operation
kind: definition
title: Bockstein connecting operation
status: draft
origin: pipeline
deps: ["def-singular-cochain-complex-with-coefficients", "thm-long-exact-sequence-of-a-pair-in-singular-cohomology", "def-axiom-of-choice"]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Hatcher, Algebraic Topology
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
      locator: Section 3.E, printed pages 303--306
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Definition

Assume the Axiom of Choice from [[def-axiom-of-choice]]. Let

$$
0\longrightarrow A\xrightarrow{i}B\xrightarrow{q}C\longrightarrow0
$$

be a short exact sequence of abelian groups. Applying singular cochains degree
by degree gives a short exact sequence of cochain complexes: injectivity on the
left follows from injectivity of $i$, and surjectivity on the right follows as
follows. A cochain is a function on the set $S_n(X)$ of singular $n$-simplices
by [[def-singular-cochain-complex-with-coefficients]]. For a $C$-valued
cochain $c$, AC is used exactly once to choose, simultaneously for every
$s\in S_n(X)$, an element of the nonempty fibre $q^{-1}(c(s))$. The resulting
function is a $B$-valued cochain $b$ with $q_*b=c$.

For a cocycle $c\in C^n(X;C)$ choose such a lift $b$. Since
$q_*(\delta b)=\delta c=0$, exactness gives a unique
$a\in C^{n+1}(X;A)$ satisfying $i_*a=\delta b$. The **Bockstein connecting
operation** is

$$
\beta\colon H^n(X;C)\longrightarrow H^{n+1}(X;A),\qquad \beta[c]=[a].
$$

This is the coefficient-sequence analogue of the cochain connector in
[[thm-long-exact-sequence-of-a-pair-in-singular-cohomology]]. Its independence
of $b$ and $c$ is proved in the next lemma.

For an integer $m\geq1$, two Bocksteins must be distinguished:

- the **integral Bockstein**
  $\widetilde\beta\colon H^n(X;\mathbb Z/m)\to H^{n+1}(X;\mathbb Z)$ comes
  from $0\to\mathbb Z\xrightarrow{m}\mathbb Z\to\mathbb Z/m\to0$;
- the **mod-$m$ Bockstein**
  $\beta\colon H^n(X;\mathbb Z/m)\to H^{n+1}(X;\mathbb Z/m)$ comes from
  $0\to\mathbb Z/m\xrightarrow{m}\mathbb Z/m^2\to\mathbb Z/m\to0$.

In these two cyclic sequences, least nonnegative residue representatives give
the required cochain lift without AC. If $X$ is empty, or if $n<0$, the source
cochain group is zero and the lift is unique. When $m=1$ both cyclic
Bocksteins have zero source and hence are the zero operation. The mod-$m$
target is also zero, whereas the integral target $H^{n+1}(X;\mathbb Z)$ need
not vanish.
