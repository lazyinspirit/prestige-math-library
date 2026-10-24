---
id: ex-commutative-differential-algebra-vertex-algebra
kind: example
title: A commutative differential algebra gives a vertex algebra
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps: [def-vertex-algebra-state-field]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: Christophe Nozaradan, Introduction to Vertex Algebras, Example 4.2.6
      url: https://arxiv.org/pdf/0809.1380
    - title: Tomoyuki Arakawa and Anne Moreau, Arc spaces and vertex algebras, §2.7
      url: https://www.imo.universite-paris-saclay.fr/~anne.moreau/Arc_space-vertex_algebras-BOOK_version.pdf
---

## Example

Let $V=\mathbb C[u]$ with its usual polynomial addition and multiplication, vacuum $\mathbf1=1$, and derivation $T=d/du$. Define
$$Y(a,z)b=(e^{zT}a)b=\left(\sum_{r\ge0}\frac{z^rT^ra}{r!}\right)b.$$
Then this state–field map makes $V$ a vertex algebra. The series is finite for each $a$, so it is also a useful example where formal lower truncation is immediate.

## Facts & Assumptions

**Given:** $V=\mathbb C[u]$, $T=d/du$, and the state-field convention of [[def-vertex-algebra-state-field]].

[A1] $T$ is the coefficientwise formal derivative on polynomials and obeys $T(ab)=(Ta)b+a(Tb)$; the multiplication on $V$ is commutative with unit $1$.

[F1] [[def-vertex-algebra-state-field]] requires lower truncation, $Y(1,z)=\operatorname{id}$, $T1=0$, $Y(a,z)1=e^{zT}a$, translation covariance, and locality.

## Proof

1.1 If $a=0$, then $e^{zT}a=0$; otherwise let $d=\deg a$, so $T^ra=0$ for $r>d$ and $e^{zT}a$ is a polynomial in $z$. Hence $Y(a,z)b$ has finite support in nonnegative powers for every $b$, and its coefficients define a field. Direct substitution gives $Y(1,z)b=b$ and $Y(a,z)1=e^{zT}a$. Also $T1=0$. [A1, F1, given]

2.1 For any $b\in V$, the derivation law in [A1] gives $[T,Y(a,z)]b=T((e^{zT}a)b)-(e^{zT}a)Tb=(T e^{zT}a)b=\partial_zY(a,z)b$, so translation covariance holds. [A1, F1, step 1.1, algebra]

3.1 Each $Y(a,z)$ acts by multiplication by $e^{zT}a$. Multiplication operators commute because $V$ is commutative, so $[Y(a,z),Y(c,w)]=0$ for every $a,c\in V$. Thus locality holds with exponent $N=0$. All axioms of [F1] are verified. [A1, F1, algebra] ∎
