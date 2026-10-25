---
id: cor-closed-points-dense-in-affine-spectra
kind: corollary
title: "In a finite-type algebra over a field, closed points are dense in every closed subset of the spectrum"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-every-zariski-closed-set-has-a-radical-defining-ideal, lem-distinguished-open-refinement-at-a-point, cor-closed-points-of-spectrum-are-maximal-ideals, cor-affine-closed-points-detect-radicals]
justified_by: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Aside 15.5"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Theorem (15.26)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
verification:
  audited: 2026-09-05
  precheck: pass
---

## Statement

Assume the Axiom of Choice.

Let $k$ be a field, let $A$ be a finite-type $k$-algebra, and let $Z\subseteq\operatorname{Spec}(A)$ be closed. Then every nonempty open subset of $Z$ contains a closed point of $\operatorname{Spec}(A)$. Equivalently, the closed points are dense in every closed subset of $\operatorname{Spec}(A)$.

## Facts & Assumptions

**Given:** A field $k$, a finite-type $k$-algebra $A$, a closed subset $Z\subseteq\operatorname{Spec}(A)$, and the Axiom of Choice.

[L1] Every closed subset of $\operatorname{Spec}(A)$ has a unique radical defining ideal ([[lem-every-zariski-closed-set-has-a-radical-defining-ideal]]).

[L2] Every point of an open subset has a distinguished-open neighbourhood inside that open subset ([[lem-distinguished-open-refinement-at-a-point]]).

[L3] Closed points of a prime spectrum are exactly maximal ideals ([[cor-closed-points-of-spectrum-are-maximal-ideals]]).

[L4] In a finite-type algebra over a field, every radical ideal is the intersection of the maximal ideals containing it ([[cor-affine-closed-points-detect-radicals]]).

[A1] A quotient of a finite-type $k$-algebra is again a finite-type $k$-algebra.

## Proof

**Proof technique:** direct.

1.1 If $U\subseteq Z$ is a nonempty open subset, choose $\mathfrak p\in U$. By [L2], there exists $f\in A$ such that $\mathfrak p\in D(f)\cap Z\subseteq U$. By [L1], write $Z=V(I)$ for a radical ideal $I$. In the quotient $B=A/I$, the class $\overline f$ is not nilpotent, because otherwise every prime of $B$ would contain $\overline f$, contradicting $\mathfrak p\in D(f)\cap Z$. [L1, L2, given, choose]

2.1 The quotient $B=A/I$ is a finite-type $k$-algebra by [A1]. Apply [L4] in $B$ to the radical ideal $(0)$. Since $\overline f$ is not in the intersection of all maximal ideals of $B$, there exists a maximal ideal $\mathfrak n\subseteq B$ with $\overline f\notin\mathfrak n$. Let $\mathfrak m\subseteq A$ be the preimage of $\mathfrak n$. Then $I\subseteq\mathfrak m$ and $f\notin\mathfrak m$, so $\mathfrak m\in D(f)\cap Z\subseteq U$. By [L3], $\mathfrak m$ is a closed point of $\operatorname{Spec}(A)$. [L3, L4, A1, step 1.1, choose]

3.1 Step 2.1 shows that every nonempty open subset of $Z$ contains a closed point. This is exactly the density of the closed points inside $Z$. [step 2.1] ∎
