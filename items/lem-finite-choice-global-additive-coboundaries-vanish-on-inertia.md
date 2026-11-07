---
id: lem-finite-choice-global-additive-coboundaries-vanish-on-inertia
kind: lemma
title: Global additive coboundaries vanish on inertia under finite choice
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 19
deps:
  - def-choice-for-pairs-and-countable-finite-choice
  - lem-countable-finite-choice-padic-galois-lifting-and-period-comparison
  - lem-finite-choice-local-galois-residue-sequence
  - lem-choice-free-bounded-degree-padic-subfields-and-galois-tower
  - lem-choice-free-finite-ax-sen-approximation
  - lem-sen-congruence-for-cyclic-p-power-local-extensions
  - lem-choice-free-finite-padic-different-and-base-change-calculus

justified_by: []
proof_strategy: direct
axiom_use: Countable choice for finite sets supplies the coherent finite Galois and residue liftings; the different bound and Ax–Sen estimate are finite and choice-free.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Jean-Marc Fontaine and Yi Ouyang, Theory of p-adic Galois Representations
      url: https://www.imo.universite-paris-saclay.fr/~fontaine/galoisrep.pdf
      locator: Section 3.3, the direct special-case argument below uses the finite Sen congruence instead of importing the filtration theorem
verification: {}
---

## Statement

Assume $\mathrm{AC}_{\omega,\mathrm{fin}}$. Let $F/\mathbb Q_p$ be a GIVEN valued algebraic closure, $C$ its ordinary completion, and a compatible primitive cyclotomic system be GIVEN. Let $E\subset F$ be finite and $\lambda:G_E\to\mathbb Q_p$ a continuous homomorphism. If there is $x\in C$ satisfying $g(x)-x=\lambda(g)$ for every $g\in G_E$, then $\lambda(I_E)=0$. This asserts neither the general inertia-only coboundary statement nor choice-free Galois lifting.

## Facts & Assumptions

**Given:** The stated finite-choice principle, valued closure, cyclotomic system, finite field, homomorphism and coboundary.

[A1] Countable choice selects from finite nonempty sets. [[def-choice-for-pairs-and-countable-finite-choice]]

[F1] Finite Galois restrictions are onto under [A1]; the canonical cofinal finite Galois tower makes $G_E$ a compact inverse limit of finite groups. [[lem-countable-finite-choice-padic-galois-lifting-and-period-comparison]] [[lem-choice-free-bounded-degree-padic-subfields-and-galois-tower]]

[F2] The residue action is onto with kernel inertia under [A1]. [[lem-finite-choice-local-galois-residue-sequence]]

[F3] The choice-free finite Ax–Sen estimate bounds approximation loss by $p/(p-1)^2$; finite embeddings are isometric. [[lem-choice-free-finite-ax-sen-approximation]]

[F4] For a totally ramified cyclic extension of degree $p^n$, the consecutive lower displacement breaks satisfy $c_0\ge1$ and $p^j\mid(c_j-c_{j-1})>0$. [[lem-sen-congruence-for-cyclic-p-power-local-extensions]]

[F5] For a totally ramified finite extension, any uniformizer integrally generates, its minimal polynomial derivative generates the different, and the different is inverse to the trace-dual ideal. [[lem-choice-free-finite-padic-different-and-base-change-calculus]]

## Proof

1.1 Suppose $\lambda(I_E)\ne0$. Order the finite groups in the canonical cofinal tower using [A1]. A bad-cylinder argument taking the least bad child proves their countable product compact; the compatible inverse limit is closed, and compatible automorphisms unite to automorphisms of $F$. Thus $G_E$ is compact by [F1], and its continuous image is compact in $\mathbb Q_p$. Every nonzero compact subgroup of $\mathbb Q_p$ equals $p^a\mathbb Z_p$: its valuations have a minimum $a$, and a unit in it generates a dense subgroup of $p^a\mathbb Z_p$. Scale $\lambda$ and $x$ to arrange $\lambda(G_E)=\mathbb Z_p$. The inertia subgroup is closed by [F2], hence compact, so its nonzero image is $p^h\mathbb Z_p$ for some $h\ge0$. For each $n$, continuity and [F1] give a finite Galois subextension $E_n/E$ corresponding to $\ker(\lambda\bmod p^n)$, with Galois group $\mathbb Z/p^n$. Its inertia image is $(p^h\mathbb Z_p+p^n\mathbb Z_p)/p^n\mathbb Z_p$: to lift a finite inertia automorphism first lift it to $g\in G_E$ using [F1], then cancel its residue action by a lift in the subgroup fixing that finite extension, using [F2] over that field. Consequently $E_h/E$ is unramified and $E_{h+n}/E_h$ is totally ramified of degree $p^n$. Replace $E$ by $E_h$ and scale $\lambda,x$ by $p^{-h}$. Then both images are $\mathbb Z_p$, and its finite quotients give totally ramified cyclic $L_n/E$ of degree $p^n$. Choose one $\sigma\in G_E$ with $\lambda(\sigma)=1$. [A1, F1, F2, given, construct, algebra]

2.1 Fix $s>p/(p-1)^2$. For any $n$, choose $a\in F$ with $v(a-x)>n+s$. Every $L_n$-conjugate of $a$ is realized by a finite automorphism lifted to some $g\in G_E$ by [F1]; such $g$ fixes $L_n$, so $\lambda(g)\in p^n\mathbb Z_p$. Isometry and the coboundary identity give $v(g(a)-a)\ge n$. By [F3], there is $y_n\in L_n$ with $v(y_n-x)>n-s$; if $a\in L_n$, take $y_n=a$. Consequently $\epsilon_n=\sigma(y_n)-y_n-1\in L_n$ satisfies $v(\epsilon_n)>n-s$. [F1, F3, step 1.1, given, construct, algebra]

2.2 Let $e=v_E(p)$ and fix a uniformizer $\pi_n$ of $L_n$. For $0\le j<n$, put $c_j=v_{L_n}(\sigma^{p^j}\pi_n/\pi_n-1)$. By [F4], $c_j\ge(p^{j+1}-1)/(p-1)$. By [F5], the different exponent is the valuation of the derivative of the Eisenstein polynomial of $\pi_n$. Its roots are the $\sigma^k\pi_n$, so, using the displacement dependence in [F4], $$d_n=\sum_{j=0}^{n-1}p^{n-j-1}(p-1)(1+c_j)\ge n p^n-\frac{p^n-1}{p-1}.$$ Thus its $v(p)=1$ valuation is $D_n=d_n/(e p^n)\ge(n-1/(p-1))/e$, which tends to infinity. [F4, F5, step 1.1, construct, algebra]

3.1 For any $z\in L_n$ of normalized $L_n$ valuation $t$, the trace-dual definition in [F5] gives $\operatorname{Tr}(z)\in\mathfrak p_E^{\lfloor(t+d_n)/p^n\rfloor}$, hence $$v(\operatorname{Tr}_{L_n/E}z)\ge v(z)+D_n-1/e.$$ Indeed $z\mathcal O_{L_n}$ lies in the product of the codifferent with $\mathfrak p_E^{\lfloor(t+d_n)/p^n\rfloor}$. For $n$ large, $D_n>s+1/e$, so step 2.1 implies $v(\operatorname{Tr}\epsilon_n)>n$. But $\sigma$ acts as an $E$-automorphism of $L_n$, so its trace is invariant and $$\operatorname{Tr}\epsilon_n=\operatorname{Tr}(\sigma(y_n)-y_n)-\operatorname{Tr}(1)=-p^n,$$ whose valuation equals $n$, a contradiction. Thus $\lambda(I_E)=0$. [F5, step 2.1, step 2.2, algebra, contradiction] ∎

## Source notes

The displayed special-case proof reconstructs the different estimate from the already proved finite Sen congruence and the trace-dual ideal. It does not import the Sen ramification filtration theorem.
