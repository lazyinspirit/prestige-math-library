---
id: lem-kac-moody-relation-module-embeds-in-verma-modules-and-obeys-the-casimir-constraint
kind: lemma
title: "Kac moody relation module embeds in verma modules and obeys the casimir constraint"
status: published
origin: pipeline
deps: ["lem-enveloping-quotient-kernels-and-augmentation-intersections", "lem-bounded-above-kac-moody-weight-modules-are-generated-by-primitive-vectors", "thm-generalized-kac-moody-casimir-is-central-and-scalar-on-highest-weight-modules", "prop-contragredient-algebra-has-a-triangular-decomposition", "def-kac-moody-verma-module"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Kleshchev, Lectures on Infinite Dimensional Lie Algebras — Proposition 9.3.4, pp.124–125; corrected associative last-letter coefficients and augmentation proof"
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
proof_strategy: direct
---

## Statement

For symmetrizable $A$, the adjoint relation module $\mathfrak r^-/[\mathfrak r^-,\mathfrak r^-]$ embeds as a $\mathfrak g$-module in $\bigoplus_i M_A(-\alpha_i)$. Each $\mathfrak r^\pm$ is generated as an ideal of $\widetilde{\mathfrak n}^\pm$ by its homogeneous spaces of degrees $\pm\alpha$, where $\alpha\in Q^+\setminus(\{0\}\cup\Pi)$ and $(\alpha,\alpha)=2(\rho,\alpha)$.

## Facts & Assumptions

**Given:** The maximal ideal r=r−⊕r+ and the standard form with rho(h_i)=1.

[F1] The quotient kernel and augmentation intersection are known. ([[lem-enveloping-quotient-kernels-and-augmentation-intersections]]).

[F2] Objects of O are generated under the negative algebra by primitive vectors. ([[lem-bounded-above-kac-moody-weight-modules-are-generated-by-primitive-vectors]]).

[F3] The Casimir acts on a highest module by the highest-weight scalar. ([[thm-generalized-kac-moody-casimir-is-central-and-scalar-on-highest-weight-modules]]).

[F4] The universal negative half is free. ([[prop-contragredient-algebra-has-a-triangular-decomposition]]).

[F5] Both Verma modules have PBW freeness and the highest-vector universal property. ([[def-kac-moody-verma-module]]).

## Proof

1.1 Put $T=U(\widetilde{\mathfrak n}^-)$, the free associative algebra on the $f_i$ by F4 and its free-Lie construction. In $\widetilde M(0)=T\widetilde v$, the augmentation subspace $T_0\widetilde v$ is a submodule: its quotient is the trivial one-dimensional module. The vectors $f_i\widetilde v$ are highest of weight $-\alpha_i$, because $e_jf_i\widetilde v=\delta_{ij}h_i\widetilde v=0$. The last-letter decomposition $T_0=\bigoplus_i Tf_i$ and F5 therefore identify this submodule with $\bigoplus_i\widetilde M(-\alpha_i)$, not merely a quotient. [F4, F5, given]

2.1 Let $V=U(\mathfrak g)\otimes_{U(\widetilde{\mathfrak g})}(T_0\widetilde v)$. Associativity of balanced tensor products (the maps $a\otimes(b\otimes1)\mapsto ab\otimes1$ and its reverse) and F5 identify $V=\bigoplus_i M_A(-\alpha_i)$. Define $\ell(a)=1\otimes a\widetilde v$ for $a\in\mathfrak r^-$. For $x\in\widetilde{\mathfrak g}$, $x\widetilde v\in T_0\widetilde v$, since the quotient in step 1.1 is trivial. Therefore $\ell([x,a])=1\otimes xa\widetilde v-1\otimes ax\widetilde v=\pi(x)\otimes a\widetilde v-\pi(a)\otimes x\widetilde v=\pi(x)\ell(a)$. In particular commutators in $\mathfrak r^-$ are killed. The two ideals $\mathfrak r^+$ and $\mathfrak r^-$ commute because their bracket lies in their zero intersection. Hence the source modulo its self-commutator carries the adjoint $\mathfrak g$-action, and $\ell$ factors through a module map on it. [F5, step 1.1]

3.1 Write $a=\sum_i u_i f_i$ using its unique associative last-letter coefficients. The degree-one part of $\mathfrak r^-$ is zero, since the simple $f_i$ survive, so all $u_i\in T_0$. In the PBW identifications, $\ell(a)=(\pi(u_i)v_{-\alpha_i})_i$. By F5, this is zero exactly when each $\pi(u_i)=0$. F1 gives $u_i\in\mathfrak r^-T$, so $a\in\mathfrak r^-T_0$, and F1 then gives $a\in\mathfrak r^-\cap\mathfrak r^-T_0=[\mathfrak r^-,\mathfrak r^-]$. The reverse kernel inclusion was proved in step 2.1. Thus the module map is injective. These are associative coefficients, not adjoint coefficients. [F1, F5, step 1.1, step 2.1]

4.1 Each summand $M_A(-\alpha_i)$ has Casimir scalar $(\alpha_i,\alpha_i)-2(\rho,\alpha_i)=2d_i-2d_i=0$ by F3. Hence $\Omega=0$ on the embedded relation module and each of its subquotients; the pointwise formula respects submodules. The relation module belongs to $\mathcal O$, being a submodule of a finite sum of the Verma modules of F5. A primitive vector of weight $-\alpha$ has a nonzero highest image in a quotient. F3 applied to that image gives $0=(\alpha,\alpha)-2(\rho,\alpha)$. Its degree is neither zero nor simple, as $\mathfrak r^-$ has neither component. F2 proves generation of the abelianized relation module by these degrees. [F2, F3, F5, step 3.1]

5.1 Let $K$ be the ideal of $\widetilde{\mathfrak n}^-$ generated by all the indicated full homogeneous spaces of $\mathfrak r^-$. Step 4.1 says $\mathfrak r^-=K+[\mathfrak r^-,\mathfrak r^-]$. If the positively regraded Lie algebra $L=\mathfrak r^-/K$ were nonzero, choose its least positive height $m$. Every nonzero bracket in $L$ has height at least $2m$, so $L_m$ cannot lie in $[L,L]$. This contradicts $L=[L,L]$. Thus $K=\mathfrak r^-$. The sign-changing involution gives the positive assertion with the identical equation on $\alpha$. [step 4.1] ∎

## Sources

Source comparison: [Kleshchev](https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf), Proposition 9.3.4, pp.124–125; corrected associative last-letter coefficients and augmentation proof.
