---
id: ex-complex-k-ahss-for-complex-projective-space
kind: example
title: Complex K-AHSS for complex projective space
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [cor-complex-k-theory-ahss, thm-multiplicative-ahss-for-a-multiplicative-generalized-theory, prop-ahss-collapse-determines-only-the-associated-graded-object, def-axiom-of-choice]
proof_strategy: direct
axiom_strength: "ZF + AC; inherited from complex K-theory."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Vector Bundles & K-Theory, §3.2 and Chapter 4, printed pp. 90–100"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "§3.2 and Chapter 4, printed pp. 90–100"
---

## Example

Assume AC. For $\mathbb{CP}^n$ the complex $K$-theory Atiyah–Hirzebruch spectral
sequence collapses at $E_2$, the group $K^1(\mathbb{CP}^n)$ vanishes, and
$$K^0(\mathbb{CP}^n)\cong\mathbb Z[\alpha]/(\alpha^{n+1}),\qquad \alpha=[L]-1,$$
where $L$ is the tautological complex line; the leading filtered class of
$\alpha$ is the degree-two generator of $H^2(\mathbb{CP}^n;\mathbb Z)$. The ring
is supplied by the projective-bundle calculation, not by the additive page.

## Facts & Assumptions

[A1] Assume AC. The $K$-AHSS of a finite CW complex has $E_2^{p,q}=H^p(X;\mathbb Z)$ for even $q$ and zero for odd $q$, with $d_r$ of bidegree $(r,1-r)$ ([[cor-complex-k-theory-ahss]]).

[A2] Assume AC. $H^*(\mathbb{CP}^n;\mathbb Z)\cong\mathbb Z[u]/(u^{n+1})$ with $|u|=2$, and the odd cohomology vanishes (the standard integral cohomology ring computation).

[A3] Assume AC. $K^0(\mathbb{CP}^n)\cong\mathbb Z[\alpha]/(\alpha^{n+1})$ with $\alpha=[L]-1$, so $1,\alpha,\ldots,\alpha^n$ is an additive basis (the published projective-bundle K-ring computation).

[A4] The $K$-AHSS is multiplicative, its differentials are derivations and its stable page is the associated graded ring ([[thm-multiplicative-ahss-for-a-multiplicative-generalized-theory]]).

[A5] Collapse determines only the associated graded, so the ring structure must be obtained from an independent calculation ([[prop-ahss-collapse-determines-only-the-associated-graded-object]]).

## Verification

**Proof technique:** direct.

**Given:** Assume AC, $n\geq0$, and the $K$-AHSS of $\mathbb{CP}^n$.

1.1 By [A2] the even rows of $E_2$ are $E_2^{p,q}=\mathbb Z$ for even $p$ with $0\leq p\leq 2n$ and vanish for odd $p$ or odd $q$; hence $E_2$ is supported in even total degree and every $E_r$ is a subquotient with the same support. [A1, A2]

2.1 A differential of bidegree $(r,1-r)$ raises total degree by one, so it maps classes of even total degree to odd total degree; since the odd-total-degree part of $E_r$ vanishes for every $r$, all differentials are zero and $E_2=E_\infty$. [A1, step 1.1]

3.1 The diagonal of total degree one is empty, so $K^1(\mathbb{CP}^n)=0$; on total degree zero the filtration has successive quotients $F^p/F^{p+1}\cong\mathbb Z$ for $p=0,2,\ldots,2n$, so the associated graded is $\mathbb Z^{n+1}$ and, since the published ring [A3] has exactly this associated graded with the tautological class in filtration two, the additive and multiplicative structure agree. [A3, step 2.1]

4.1 Steps 2.1 and 3.1 give the collapse, the vanishing of $K^1$ and the identification of $K^0$ with the published truncated polynomial ring, whose leading filtered class is the degree-two generator; by [A5] this ring is not a consequence of the collapse alone, which is why the projective-bundle calculation [A3] is used. [A3, A4, A5, step 1.1, step 3.1]

5.1 This verifies the displayed collapse, the vanishing of $K^1$ and the ring presentation with its leading filtered class. [step 4.1] ∎

## Source notes

Compare [Hatcher](https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf), §3.2 and Chapter 4, printed pp. 90–100, for the projective-bundle presentation of $K^0(\mathbb{CP}^n)$ and the role of the tautological class.
