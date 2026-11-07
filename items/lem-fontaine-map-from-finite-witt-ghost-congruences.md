---
id: lem-fontaine-map-from-finite-witt-ghost-congruences
kind: lemma
title: Fontaine's map from finite Witt ghost congruences
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - lem-integral-p-typical-witt-coordinate-operations
  - lem-perfect-base-witt-frobenius-and-p-adic-completeness
  - lem-perfect-base-witt-teichmuller-expansions-and-units
  - thm-binomial-theorem-over-a-commutative-ring
  - thm-binomial-closed-formula
  - thm-euclids-lemma
  - def-adic-completion-of-a-module
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bhatt, Morrow, and Scholze, Integral p-adic Hodge Theory"
      url: "https://arxiv.org/pdf/1602.03148v3.pdf"
      locator: "Section3.1, Definition3.1 and Lemmas3.2–3.3; finite-ghost reconstruction of the canonical Fontaine map"
    - title: "Joseph Rabinoff, The theory of Witt vectors"
      url: "https://arxiv.org/abs/1409.7445"
      locator: "Sections2–5, universal ghost operations and perfect-base Teichmuller expansions"
verification: {}
---

## Statement

Let $p$ be a prime and let $A$ be a commutative ring for which the canonical map $A\to\varprojlim_{m\ge1}A/p^mA$ is an isomorphism. Put $A^\flat=\varprojlim_{x\mapsto x^p}A/pA$ with coordinatewise ring operations. Write $W_m(D)$ for the ring of the first $m$ Witt coordinates over a ring $D$. Then $A^\flat$ is a perfect characteristic-$p$ ring. There is a canonical multiplicative map $x\mapsto x^\sharp$ from $A^\flat$ to $A$ characterized by
$$x^\sharp\equiv\widetilde{x_n}^{\,p^n}\pmod {p^{n+1}A},$$
where $x_n$ is the $n$th coordinate of $x$ and any one lift $\widetilde{x_n}\in A$ may be used for this congruence. Reduction modulo $p$ gives a bijection of multiplicative monoids
$$\{(a_0,a_1,\ldots)\in A^{\mathbb N}:a_{n+1}^p=a_n\}\xrightarrow{\sim}A^\flat,$$
whose inverse sends $x$ to $((\varphi^{-n}x)^\sharp)_{n\ge0}$, where $\varphi$ is Frobenius on $A^\flat$.

There is a unique $p$-adically continuous unital ring homomorphism $\theta_A:W_p(A^\flat)\to A$ such that $\theta_A([x])=x^\sharp$. For the unique Teichmüller expansion it satisfies
$$\theta_A\left(\sum_{i\ge0}p^i[b_i]\right)=\sum_{i\ge0}p^i b_i^\sharp.$$
These constructions are functorial in $A$. They allow $p$-torsion and the zero ring, and require no Choice axiom. No surjectivity of $\theta_A$ is asserted.

## Statement references

[[lem-integral-p-typical-witt-coordinate-operations]]

[[lem-perfect-base-witt-frobenius-and-p-adic-completeness]]

[[lem-perfect-base-witt-teichmuller-expansions-and-units]]

[Bhatt–Morrow–Scholze, Integral p-adic Hodge Theory, §3.1](https://arxiv.org/pdf/1602.03148v3.pdf)

## Facts & Assumptions

**Given:** The prime $p$ and the ring $A$ with its displayed canonical completion isomorphism. Completeness means this isomorphism, not a choice of representatives of compatible residue classes.

[F1] Integral universal Witt coordinate polynomials define functorial ring operations over every commutative ring, with ring-homomorphic ghosts and truncations. [[lem-integral-p-typical-witt-coordinate-operations]]

[F2] Over a perfect characteristic-$p$ ring the Witt ring is separated and complete for powers of $p$. [[lem-perfect-base-witt-frobenius-and-p-adic-completeness]]

[F3] Teichmüller representatives are multiplicative, and every Witt vector over a perfect base has a unique expansion $\sum_{i\ge0}p^i[b_i]$. [[lem-perfect-base-witt-teichmuller-expansions-and-units]]

[F4] The binomial theorem holds over every commutative ring; the integral binomial-coefficient formula and Euclid's lemma give $p\mid\binom pj$ for $0<j<p$. [[thm-binomial-theorem-over-a-commutative-ring]] [[thm-binomial-closed-formula]] [[thm-euclids-lemma]]

[F5] The $I$-adic completion is the inverse limit of the quotient modules with their canonical residue maps. Here $I=(p)$ and the canonical map is assumed to be an isomorphism. [[def-adic-completion-of-a-module]]

## Proof

1.1 Set $B=A^\flat$. It is a ring of characteristic $p$ because it is the compatible-tuple subring of the product of the rings $A/pA$. The coordinatewise Frobenius has inverse the shift $(x_0,x_1,\ldots)\mapsto(x_1,x_2,\ldots)$: the compatibility equations give both inverse identities. Thus $B$ is perfect, including when it is the zero ring. Its projections $\operatorname{pr}_n:B\to A/pA$ are ring homomorphisms and satisfy $\operatorname{pr}_n(x)=\operatorname{pr}_{n+1}(x)^p$. [given, construct, algebra]

1.2 If $u-v\in p^rA$ with $r\ge1$, the binomial expansion gives $u^p-v^p\in p^{r+1}A$. Indeed the intermediate binomial coefficients are divisible by $p$, the linear term has the factor $p^{r+1}$, and the last term has the factor $p^{rp}$ with $rp\ge r+1$, also when $p=2$. Induction therefore gives $u^{p^j}-v^{p^j}\in p^{r+j}A$ for every $j\ge0$. These are ideal containments; no cancellation of $p$ and no assumption of $p$-torsion-freeness is used. [F4, given, algebra]

2.1 For $n\ge0$, for a truncated Witt vector $(c_0,\ldots,c_n)$ over $A/pA$, choose lifts $u_i\in A$ of its finitely many coordinates. Define $\gamma_n(c_0,\ldots,c_n)=\sum_{i=0}^n p^i u_i^{p^{n-i}}\bmod p^{n+1}A$. If a lift $u_i$ is changed by an element of $pA$, step 1.2 shows that its contribution changes by an element of $p^i p^{n-i+1}A=p^{n+1}A$. Thus the output is independent of all finite lift choices. It is a ring homomorphism $W_{n+1}(A/pA)\to A/p^{n+1}A$: for addition or multiplication, lift the two finite vectors and use their universal coordinate sum or product over $A$ as lifts of the result over $A/pA$. The formal ghost identities in [F1] give exactly the additive or multiplicative identity before reduction. Negatives, zero and the unit are treated by the same identities. [F1, step 1.2, construct, algebra]

3.1 Compose truncation and the Witt map induced by $\operatorname{pr}_n$ with $\gamma_n$ to obtain a ring homomorphism $\Theta_n:W_p(B)\to A/p^{n+1}A$. These maps are compatible with reduction. For a Witt vector with standard coordinates $z_i\in B$, choose the finitely many lifts $u_i\in A$ of $\operatorname{pr}_{n+1}(z_i)$ for $0\le i\le n+1$. Then $u_i^p$ are lifts of $\operatorname{pr}_n(z_i)$ by step 1.1. The ghost formulas for $\Theta_{n+1}$ and $\Theta_n$ differ modulo $p^{n+1}A$ only by the final term $p^{n+1}u_{n+1}$, which vanishes. This proves compatibility independently of the selected lifts. The assumed isomorphism in [F5] now gives a unique unital ring homomorphism $\theta_A:W_p(B)\to A$ with residues $\Theta_n$. Since it is unital, it sends $p^mW_p(B)$ into $p^mA$, so it is $p$-adically continuous. This inverse-limit construction selects the uniquely determined output residues, not a countable family of lifts. [F1, F5, step 1.1, step 2.1, construct, algebra]

4.1 Define $x^\sharp=\theta_A([x])$. For a Teichmüller vector only its zeroth standard coordinate is nonzero, so step 3.1 gives $x^\sharp\equiv\widetilde{x_n}^{p^n}\bmod p^{n+1}A$; uniqueness follows from separatedness. Multiplicativity follows from [F3]. For $a_j=(\varphi^{-j}x)^\sharp$, multiplicativity and $(\varphi^{-(j+1)}x)^p=\varphi^{-j}x$ give $a_{j+1}^p=a_j$, while the $n=0$ congruence gives $a_j\bmod p=x_j$. Conversely, given any actual compatible tuple $(a_j)$, let $x_j=a_j\bmod p$. To compute $(\varphi^{-j}x)^\sharp$ modulo $p^{n+1}$, use the single lift $a_{j+n}$; its $p^n$th power is exactly $a_j$. Separatedness gives equality in $A$. The two constructions are inverse multiplicative maps, proving the stated monoid bijection. This does not claim that an arbitrary element of $A/pA$ has a compatible infinite sequence of Frobenius preimages. [F3, F5, step 1.1, step 3.1, algebra]

5.1 By [F2] and [F3], a Witt vector is the $p$-adic limit of its unique finite Teichmüller sums. Continuity of $\theta_A$ gives the displayed convergent series formula in $A$. Any other continuous unital ring map with the prescribed Teichmüller values agrees on those finite sums and therefore agrees everywhere by separatedness. Finally, a unital homomorphism between two rings satisfying the displayed completion hypothesis preserves every $p^m$ ideal; the finite ghost formulas and residue projections commute with it. Thus the corresponding $\Theta_n$, and consequently $\theta$ and $\sharp$, commute with that homomorphism. This proves functoriality. Every choice in the argument was a finite lift choice whose output residue was proved unique; no countable choice function, Frobenius section or surjectivity assumption was used. [F1, F2, F3, F5, step 3.1, step 4.1, algebra] ∎

## Source notes

BMS §3.1 constructs the canonical Fontaine map by inverse Witt-Frobenius limits. The proof here reconstructs its ring-homomorphism property by finite ghost congruences and the given adic completion isomorphism. It uses the actual integral universal Witt coordinate identities, not the degenerate characteristic-$p$ ghost values alone. The cited Witt suppliers are used at their exact unqualified public interfaces.

The lemma constructs the map and the sharp/root-tuple identification. Surjectivity and a principal kernel require further hypotheses and proofs; neither follows by pretending that a surjective transition map automatically provides a compatible infinite sequence without examining the choice scope. The full original period-ring construction and BMS integral-perfectoid/Tate comparison retain those separate obligations.
