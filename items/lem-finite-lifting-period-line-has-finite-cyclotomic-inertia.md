---
id: lem-finite-lifting-period-line-has-finite-cyclotomic-inertia
kind: lemma
title: Period lines have finite cyclotomic-twisted inertia from finite Galois lifting
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 17
deps:
  - lem-finite-lifting-global-additive-coboundaries-vanish-on-inertia
  - lem-p-adic-period-ring-comparison-embedding-is-injective
  - lem-choice-free-de-rham-period-completion-is-a-discrete-valuation-ring
  - lem-choice-free-crystalline-logarithm-and-abstract-semistable-period-ring
  - lem-choice-free-finite-ax-sen-approximation
justified_by: []
proof_strategy: direct
axiom_use: Finite Galois restriction surjectivity is an explicit hypothesis. No Choice is assumed.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Jean-Marc Fontaine and Yi Ouyang, Theory of p-adic Galois Representations
      url: https://www.imo.universite-paris-saclay.fr/~fontaine/galoisrep.pdf
      locator: Proposition 3.55 and Lemma 3.31; the direct local reduction below uses the finite-lifting additive supplier
verification: {}
---

## Statement

Let $F/\mathbb Q_p$ be a GIVEN valued algebraic closure with ordinary completion $C$ and a GIVEN compatible primitive cyclotomic system. Suppose every finite Galois $L/\mathbb Q_p$ inside $F$ receives a surjection $G_{\mathbb Q_p}\to\operatorname{Gal}(L/\mathbb Q_p)$. Let $K\subset F$ be finite, let $B$ be $B_{\mathrm{cris}}$ or $B_{\mathrm{st}}$, and let $0\ne b\in B$ span a $G_K$-stable $\mathbb Q_p$-line with character $\eta$. Then for some integer $s$, the inertia image $(\eta\chi^{-s})(I_K)$ is finite. This neither proves the lifting hypothesis nor asserts the line generator is a unit.

## Facts & Assumptions

**Given:** The valued closure, completion, cyclotomic system, finite lifting hypothesis, finite $K$, ring and stable line.

[F1] The normalized semistable comparison and its scalar extension are injective without Choice. [[lem-p-adic-period-ring-comparison-embedding-is-injective]]

[F2] The de Rham plus ring is a complete DVR with residue $C$ and uniformizer $t$. [[lem-choice-free-de-rham-period-completion-is-a-discrete-valuation-ring]]

[F3] The Galois action on $t$ is cyclotomic: $g(t)=\chi(g)t$. [[lem-choice-free-crystalline-logarithm-and-abstract-semistable-period-ring]]

[F4] Finite embeddings in the given closure are isometric and $F$ is dense in $C$. [[lem-choice-free-finite-ax-sen-approximation]]

[F5] Given finite Galois lifting, a continuous global additive character that is a $C$-valued coboundary vanishes on inertia. [[lem-finite-lifting-global-additive-coboundaries-vanish-on-inertia]]

## Proof

1.1 By [F1]–[F3], the leading de Rham coefficient $c=t^{-s}b\bmod t\in C^\times$, where $s$ is the $t$-adic valuation of $b$, satisfies $g(c)=\psi(g)c$ with $\psi=\eta\chi^{-s}$. Isometry gives $\psi(g)\in\mathbb Z_p^\times$. The character is continuous: to control $g(c)-c$ at any precision, approximate $c$ by a single algebraic element; its stabilizer is open and moves $c$ by no more than the approximation error. [F1, F2, F3, F4, given, construct, algebra]

2.1 Choose one nonzero $a\in F$ sufficiently close to $c$ that $q=c/a\in1+p^m\mathcal O_C$ for an integer $m>1/(p-1)$, and put $E=K(a)$. For each $g\in G_E$, one has $g(q)=\psi(g)q$, so $\psi(g)\in1+p^m\mathbb Z_p$. The convergent logarithm $x=\log q$ satisfies $g(x)-x=\log\psi(g)$, making $\lambda=\log\psi|_{G_E}$ a continuous additive character and a $C$-valued coboundary. [F4, step 1.1, given, construct, algebra]

3.1 By [F5], $\lambda$ vanishes on $I_E$. Injectivity of the logarithm on $1+p^m\mathbb Z_p$ makes $\psi$ trivial on $I_E$. Since $I_E=I_K\cap G_E$ has finite index in $I_K$, the image $\psi(I_K)$ is finite. This is the stated conclusion, without a claim of stable-line regularity. [F5, step 2.1, algebra] ∎
