---
id: cor-rank-three-zero-chern-splitting
kind: corollary
title: Third Chern vanishing and a trivial summand
status: published
domain: mathematics
deps:
  - def-rank-three-euler-k-class
  - def-motivic-chern-classes
  - lem-exterior-square-chern-calculation
  - cor-third-chern-isomorphism
  - prop-murthy-k-theoretic-splitting
  - prop-chern-whitney-identities
  - math:def-axiom-of-choice
dependency_roles:
  def-rank-three-euler-k-class: mathematical-premise
  def-motivic-chern-classes: mathematical-premise
  lem-exterior-square-chern-calculation: mathematical-premise
  cor-third-chern-isomorphism: mathematical-premise
  prop-murthy-k-theoretic-splitting: mathematical-premise
  prop-chern-whitney-identities: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: PDF p. 3, explanation after Corollary D; p. 17, proof of Corollary 6.10
      reading_limits: The supplied extracted article text at the proof of Corollary
        6.10 was read. The exterior-class calculation, third-Chern isomorphism
        and Murthy criterion are used through the named completed suppliers;
        their external inputs are not independently reconstructed here.
dependency_level: 34
---

## Statement
Assume the Axiom of Choice and the site and universe size bounds required by the cited motivic filtration, support and Chern constructions. Let $k$ be an algebraically closed field of arbitrary characteristic, let $X=\operatorname{Spec}A$ be a normal affine $k$-scheme of finite type and Krull dimension three, and let $E$ be a rank-three vector bundle on $X$. Then
$$c_3(E)=0\quad\Longleftrightarrow\quad E\cong E'\oplus\mathcal O_X$$
for some rank-two vector bundle $E'$ on $X$.

Here algebraically closed means that every nonconstant polynomial over $k$ has a root in $k$; finite type means that $A$ is a finitely generated $k$-algebra; normal means that every local ring is an integrally closed domain; and Krull dimension is the supremum of lengths of chains of distinct irreducible closed subsets. A vector bundle is a finite locally free $\mathcal O_X$-module, and rank $r$ means locally isomorphic to $\mathcal O_X^r$. The class $c_3(E)$ is the third integral motivic Chern class in $H^{6,3}_{\mathrm{mot}}(X,\mathbb Z)$, the degree-six cohomology of the weight-three motivic complex. The Axiom of Choice says that every family of nonempty sets has a choice function; the size bounds fix the sites and universes used by the cited constructions.

## Facts & Assumptions

**Given:** $k$, $X$ and $E$ as in the statement, the Axiom of Choice and the stated site and universe bounds.

**Goal:** Prove both implications of the displayed equivalence.

[F1] [[def-rank-three-euler-k-class]] defines the alternating exterior class
$$\beta(E)=[\mathcal O_X]-[E]+[\Lambda^2E]-[\det E]\in K_0(X),$$
where $\det E=\Lambda^3E$ and $K_0(X)$ is the degree-zero K-theory group of perfect complexes. A perfect complex is locally quasi-isomorphic to a bounded complex of finite locally free sheaves.

[F2] Under the given hypotheses, [[lem-exterior-square-chern-calculation]] proves that $\beta(E)$ lies in $F^3_{\mathrm{mot}}K_0(X)$ and that $c_3(\beta(E))=-2c_3(E)$. The group $F^3_{\mathrm{mot}}K_0(X)$ is the image in $K_0(X)$ of the degree-zero homotopy group of the third motivic filtration stage.

[F3] Under the same hypotheses, [[cor-third-chern-isomorphism]] says that the actual third Chern operation on perfect K-classes restricts to an isomorphism $c_3:F^3_{\mathrm{mot}}K_0(X)\to H^{6,3}_{\mathrm{mot}}(X,\mathbb Z)$. In particular this restriction is injective.

[F4] [[prop-murthy-k-theoretic-splitting]] says that, under the given hypotheses, $\beta(E)=0$ in $K_0(X)$ implies $E\cong E'\oplus\mathcal O_X$ for a rank-two bundle $E'$.

[F5] [[def-motivic-chern-classes]] defines the total Chern polynomial $c_t(V)=\sum_i c_i(V)t^i$ of a bundle $V$ and sets $c_i(V)=0$ for $i$ greater than its rank. [[prop-chern-whitney-identities]] gives $c_t(V\oplus W)=c_t(V)c_t(W)$; in particular a trivial line has total Chern polynomial $1$. [[math:def-axiom-of-choice]] states the Choice assumption used by these constructions.

## Proof

**Proof technique:** Apply the third-Chern isomorphism to the alternating exterior class, then use the splitting criterion; the converse follows from Whitney and rank vanishing.

1.1 Suppose $c_3(E)=0$. By [F2], $\beta(E)$ belongs to the third motivic image piece and $c_3(\beta(E))=-2c_3(E)=0$. [given, F2]

2.1 The restricted third Chern operation in [F3] is injective. Since $\beta(E)$ lies in its domain and maps to zero, $\beta(E)=0$ in $F^3_{\mathrm{mot}}K_0(X)$ and hence in its ambient group $K_0(X)$. [F3, step 1.1]

3.1 Apply [F4] to this vanishing. All its field, normality, finite-type, dimension, rank, Choice and size hypotheses are those given here. It yields a rank-two bundle $E'$ and an isomorphism $E\cong E'\oplus\mathcal O_X$. [given, F4, step 2.1]

4.1 Conversely, suppose $E\cong E'\oplus\mathcal O_X$ with $E'$ of rank two. By [F5], $c_t(E)=c_t(E')c_t(\mathcal O_X)=c_t(E')$. The coefficient of $t^3$ on the right is zero because $E'$ has rank two. Thus $c_3(E)=0$. [given, F5, step 3.1]

5.1 Steps 1.1–4.1 prove both implications and hence the stated equivalence. [step 3.1, step 4.1] ∎
