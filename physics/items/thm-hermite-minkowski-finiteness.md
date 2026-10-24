---
id: thm-hermite-minkowski-finiteness
kind: theorem
title: "Hermite-Minkowski finiteness"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - lem-hermite-minkowski-bounded-primitive-integral-element
  - lem-bounded-conjugates-give-finitely-many-integral-polynomials
  - cor-algebraic-integer-minimal-polynomial-criterion
  - thm-universal-property-of-adjoining-an-irreducible-root
  - prop-extension-degree-one-iff-equal-fields
  - def-number-field
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory v3.08"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
      locator: "Ch. 8 Theorem 8.43, pp.151-152."
    - title: "Brian Conrad and Aaron Landesman, Math 154 Algebraic Number Theory"
      url: "https://people.math.harvard.edu/~landesman/assets/undergraduate-number-theory.pdf"
      locator: "§28 Theorem 28.4, p.147."
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). For every pair of
positive integers $n$ and $B$, only finitely many $\mathbb Q$-isomorphism
classes of number fields $K$ of degree $n=[K:\mathbb Q]$
([[def-number-field]]) satisfy $|d_K|\le B$.

## Facts & Assumptions

**Given:** Positive integers $n$ and $B$.

[F1] Bounded primitive integral element: for $n\ge2$ and real $B\ge1$, every
number field $K$ of degree $n$ with $|d_K|\le B$ has $\alpha\in\mathcal O_K$
with $K=\mathbb Q(\alpha)$ such that every conjugate of $\alpha$ has modulus at
most $\sqrt{B+2}$
([[lem-hermite-minkowski-bounded-primitive-integral-element]]).

[F2] For every integer $m\ge1$ and real $R\ge1$ the set of monic polynomials
in $\mathbb Z[X]$ of degree at most $m$ whose complex roots, counted with
multiplicity, all have modulus at most $R$ is finite
([[lem-bounded-conjugates-give-finitely-many-integral-polynomials]]).

[F3] For $\alpha\in K$, one has $\alpha\in\mathcal O_K$ if and only if the
monic minimal polynomial $m_\alpha$ of $\alpha$ over $\mathbb Q$ lies in
$\mathbb Z[X]$; the degree of $m_\alpha$ is $[\mathbb Q(\alpha):\mathbb Q]$
([[cor-algebraic-integer-minimal-polynomial-criterion]]).

[F4] If $f\in\mathbb Q[X]$ is monic and irreducible and $\beta$ is a complex
root of $f$, then there is a field homomorphism
$\mathbb Q[X]/(f)\to\mathbb C$ fixing $\mathbb Q$ and sending
$x+(f)$ to $\beta$; applied to the minimal polynomial $m_\alpha$ of
$K=\mathbb Q(\alpha)$, whose quotient is $\mathbb Q$-isomorphic to
$\mathbb Q(\alpha)$ by $x+(m_\alpha)\mapsto\alpha$, it embeds $K$ into
$\mathbb C$ sending $\alpha$ to $\beta$
([[thm-universal-property-of-adjoining-an-irreducible-root]]).

[F5] For a finite field extension $K/\mathbb Q$, one has $[K:\mathbb Q]=1$ if
and only if $K=\mathbb Q$
([[prop-extension-degree-one-iff-equal-fields]]).

## Proof

1.1 If $n=1$ then every degree-one number field $K$ satisfies $[K:\mathbb Q]=1$, hence $K=\mathbb Q$ by [F5]; all such fields form the single $\mathbb Q$-isomorphism class of $\mathbb Q$. [F5, given]

1.2 Now assume $n\ge2$. Since $B$ is a positive integer, $B\ge1$, and $R:=\sqrt{B+2}\ge1$. Let $\mathcal P$ be the set of monic $f\in\mathbb Z[X]$ with $\deg f\le n$ all of whose complex roots have modulus at most $R$. [F2, given]

1.3 Let $K$ be any number field of degree $n$ with $|d_K|\le B$. By [F1] applied under the Axiom of Choice assumed in the statement, there is $\alpha\in\mathcal O_K$ with $K=\mathbb Q(\alpha)$ and every conjugate of $\alpha$ of modulus at most $R$. Let $f:=m_\alpha$ be its minimal polynomial over $\mathbb Q$. [F1, given]

2.1 By [F2] the set $\mathcal P$ is finite. Let $\mathcal Q\subseteq\mathcal P$ be the subset of those $f$ that are irreducible in $\mathbb Q[X]$ and have degree exactly $n$, and define $g(f)$ to be the $\mathbb Q$-isomorphism class of the field $\mathbb Q[X]/(f)$; this is well defined because for irreducible $f$ of degree $n$ the quotient is a field extension of $\mathbb Q$ of degree $n$. [F2, F4, step 1.2]

2.2 By [F3] the polynomial $f$ is monic of degree $[\mathbb Q(\alpha):\mathbb Q]=[K:\mathbb Q]=n$ with integer coefficients; it is irreducible in $\mathbb Q[X]$, and $K\cong\mathbb Q[X]/(f)$ as extensions of $\mathbb Q$. [F3, F4, step 1.3]

3.1 Every complex root $\beta$ of $f$ is a conjugate of $\alpha$: by [F4] there is an embedding $K\to\mathbb C$ fixing $\mathbb Q$ and sending $\alpha$ to $\beta$, so $\beta$ is one of the conjugates of step 1.3 and $|\beta|\le R$. Hence $f\in\mathcal Q$ and the class of $K$ equals $g(f)$, which lies in the image $g(\mathcal Q)$. [F4, step 1.3, step 2.2]

4.1 Every $\mathbb Q$-isomorphism class of a degree-$n$ number field with $|d_K|\le B$ therefore belongs to the image of the finite set $\mathcal Q$ under $g$, and an image of a finite set is finite; so only finitely many such classes exist for $n\ge2$. [step 2.1, step 3.1]

5.1 Combining the case $n=1$ of step 1.1 with the case $n\ge2$ of step 4.1 gives the result for all positive integers $n$ and $B$. [step 1.1, step 4.1] ∎

## Remarks

The proof uses no choice beyond the Axiom of Choice already assumed in the statement and in [F1]:
the finite set $\mathcal Q$ of candidate minimal polynomials is constructed
explicitly, and a class is counted only when some integral primitive element
realizes it. Two distinct polynomials in $\mathcal Q$ may define the same
field; this only shrinks the image. The bounded-root lemma is what makes the
candidate set finite, and the primitive-element lemma is what bounds the
minimal polynomial of every eligible field by $\sqrt{B+2}$.
