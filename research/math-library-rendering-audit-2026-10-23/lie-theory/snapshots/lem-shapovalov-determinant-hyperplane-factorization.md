---
id: lem-shapovalov-determinant-hyperplane-factorization
kind: lemma
title: "Preliminary factorization of a Shapovalov determinant"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-shapovalov-determinant-on-a-weight-space, thm-pbw-model-of-a-verma-module, prop-the-shapovalov-radical-is-the-maximal-submodule, lem-every-nonzero-verma-submodule-contains-a-singular-vector, thm-universal-property-of-verma-modules, prop-casimir-eigenvalue-on-a-highest-weight-module, lem-finite-weyl-positive-roots-and-simple-reflections, def-root-reflections-and-the-weyl-group-action, def-weyl-vector-rho-for-a-chosen-positive-system]
proof_strategy: direct
sources:
  references:
    - title: "Pavel Etingof, Representations of Lie Groups, Exercise 8.15(iv)–(v), pp. 45–46"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical author review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-04-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

For $\beta\in Q^+$, the nonzero Shapovalov determinant $D_\beta(\lambda)$ is a polynomial in $\lambda$ whose top homogeneous part is, up to a nonzero scalar,

$$\prod_{\alpha\in\Phi^+}\langle\lambda,\alpha^\vee\rangle^{\sum_{n\ge1}K(\beta-n\alpha)}.$$

Every irreducible factor of $D_\beta$ is proportional to
$\langle\lambda+\rho,\alpha^\vee\rangle-n$ for some
$\alpha\in\Phi^+$ and $n\in\mathbb Z_{>0}$ with $n\alpha\leq\beta$.
Consequently there are uniquely determined nonnegative integers
$m_{\alpha,n}(\beta)$ such that

$$D_\beta(\lambda)\doteq\prod_{\alpha\in\Phi^+}\prod_{n\ge1}(\langle\lambda+\rho,\alpha^\vee\rangle-n)^{m_{\alpha,n}(\beta)},$$

and $m_{\alpha,n}(\beta)=0$ when $n\alpha\not\leq\beta$.

## Facts & Assumptions

**Given:** The PBW realization [[thm-pbw-model-of-a-verma-module]], the determinant [[def-shapovalov-determinant-on-a-weight-space]], and the Casimir scalar [[prop-casimir-eigenvalue-on-a-highest-weight-module]]. Here $\gamma\leq\beta$ means $\beta-\gamma\in Q^+$.

[F1] The Shapovalov radical is the unique maximal proper submodule ([[prop-the-shapovalov-radical-is-the-maximal-submodule]]); every nonzero Verma submodule contains a singular vector ([[lem-every-nonzero-verma-submodule-contains-a-singular-vector]]).

[F2] A singular vector of weight $\lambda-\gamma$ gives a nonzero Verma map from $M(\lambda-\gamma)$ ([[thm-universal-property-of-verma-modules]]).

[F3] Every root is Weyl-conjugate to a simple root, simple roots form an integral basis of $Q$, and Weyl reflections preserve $Q$ ([[lem-finite-weyl-positive-roots-and-simple-reflections]]).

## Proof

**Proof technique:** direct.

1.1 Choose root vectors in opposite root spaces with nonzero pairing and PBW monomial bases in weight $\beta$. In the product of a positive and a negative PBW monomial, a factor of $\lambda$ arises only when commuting a positive root vector with its opposite and retaining their Cartan bracket. A maximal-degree contribution pairs every root factor this way. The PBW order makes those maximal-degree pairings diagonal: an unequal pair of exponent vectors leaves a root vector, or requires a non-Cartan commutator and loses at least one degree. For exponent vector $(k_\alpha)$ the diagonal coefficient is a nonzero constant times $\prod_\alpha\langle\lambda,\alpha^\vee\rangle^{k_\alpha}$. Hence the determinant's top part is the product of these diagonal terms and is nonzero. [given, algebra]

2.1 Across all PBW monomials of weight $\beta$, the total number of occurrences of $\alpha$ is $\sum_{n\ge1}K(\beta-n\alpha)$: count a monomial with $k_\alpha$ copies once for each $1\le n\le k_\alpha$. This gives the displayed top part and its total degree. [step 1.1, algebra]

3.1 The polynomial of step 2.1 is nonzero. Suppose $D_\beta(\lambda)=0$. A vector $v$ in its kernel belongs to the radical. The space $U(\mathfrak n^+)v$ is finite dimensional because only finitely many weights of $M(\lambda)$ lie above $\lambda-\beta$. Choose a nonzero vector in it of maximum weight height. It is singular, lies in the proper radical, and has weight $\lambda-\gamma$ with $0<\gamma\le\beta$. By [F2] and the Casimir scalar, the source and target have equal eigenvalues, giving $2(\lambda+\rho,\gamma)=(\gamma,\gamma)$. Thus the zero set of $D_\beta$ lies in the finite union of affine hyperplanes $H_\gamma$ defined by these equations, $0<\gamma\le\beta$. [F1, F2, step 2.1, algebra]

4.1 Every irreducible polynomial factor $P$ of $D_\beta$ is proportional to one of the linear equations of the $H_\gamma$. Here is an elementary divisibility justification. If $P$ divided none of their product $F$, choose a variable $x$ in which $P$ has positive degree. Over the fraction field of the other variables, $P$ and $F$ are coprime; clearing a Bézout identity's denominators gives $AP+BF=g$, with $A,B$ polynomials and $g$ a nonzero polynomial in the other variables. Choose values of those variables where $g$ and the leading coefficient of $P$ in $x$ are nonzero. The specialized positive-degree polynomial $P$ has a complex root, at which $F\ne0$ by the identity, contradicting step 3.1. If $P$ has no other variables, the same argument is the ordinary one-variable fact. Thus $P$ divides $F$, and irreducibility makes it proportional to one of its linear factors. [step 3.1, algebra]

5.1 The highest homogeneous part of a factor $H_\gamma$ is the linear form $(\lambda,\gamma)$. Since the product of the factors' highest parts is the top part in step 2.1, unique factorization forces this linear form to be proportional to $\langle\lambda,\alpha^\vee\rangle$ for some positive root $\alpha$. Hence $\gamma=c\alpha$ for a positive rational $c$ (both lie in the root lattice and positive cone). The equation of $H_\gamma$ becomes $\langle\lambda+\rho,\alpha^\vee\rangle=c$. [step 2.1, step 4.1, algebra]

6.1 By [F3], every root is primitive in the root lattice $Q$: an integral lattice automorphism carries it to a simple basis vector. Therefore $c$ in step 5.1 is a positive integer $n$. Substituting $\gamma=n\alpha$ into the equation of $H_\gamma$ gives the stated affine factor, while $\gamma\le\beta$ gives the support restriction. Distinct pairs $(\alpha,n)$ give distinct affine hyperplanes; unique factorization supplies the exponents. [F3, step 5.1, algebra] ∎
