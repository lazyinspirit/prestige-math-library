---
id: cor-antidominant-verma-modules-are-simple
kind: corollary
title: "Antidominant regular Verma modules are simple"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, lem-every-nonzero-verma-submodule-contains-a-singular-vector, prop-weights-of-a-verma-module-lie-below-lambda, prop-casimir-eigenvalue-on-a-highest-weight-module, prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system, thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates]
proof_strategy: contradiction
sources:
  references:
    - title: "Pavel Etingof, Representations of Lie Groups, Theorem 15.11 and Corollary 20.14"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-06-receipts.jsonl (cor-antidominant-verma-modules-are-simple). No independent judge or whole-closure certification.
    delegated_by: owner
---

## Statement

Assume the Axiom of Choice.

If $\langle\lambda+\rho,\alpha^\vee\rangle<0$ for every $\alpha\in\Phi^+$, then $M(\lambda)$ is simple. Thus every regular antidominant weight, in this explicit sense, has simple Verma module.

## Facts & Assumptions

**Given:** The Axiom of Choice ([[def-axiom-of-choice]]) and the strict antidominant inequalities in the statement.

[L1] Every nonzero Verma submodule has a singular vector ([[lem-every-nonzero-verma-submodule-contains-a-singular-vector]]), and the weights of $M(\lambda)$ are $\lambda-Q^+$, with one-dimensional highest-weight space ([[prop-weights-of-a-verma-module-lie-below-lambda]]).

[L2] The quadratic Casimir acts on a cyclic highest-weight module of highest weight $\eta$ by $(\eta,\eta+2\rho)$ ([[prop-casimir-eigenvalue-on-a-highest-weight-module]]).

[L3] Under Choice, the root span has a positive-definite inner product with $2(\gamma,\alpha)/(\alpha,\alpha)=\langle\gamma,\alpha^\vee\rangle$ for each root $\alpha$ ([[prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system]]); the simple roots form a basis and each positive root is a nonnegative integral combination of them ([[thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose a proper nonzero submodule $N\subset M(\lambda)$ exists. By [L1], it contains a nonzero singular vector $v_\mu$ of weight $\mu=\lambda-\beta$ for some $\beta\in Q^+$. The highest-weight space has dimension one, so $\beta\ne0$: otherwise $v_\mu$ would generate $M(\lambda)$, contrary to $N$ being proper. The cyclic submodule $U(\mathfrak g)v_\mu$ is a highest-weight module of weight $\mu$. [given, L1, assume-contra]

2.1 By [L2], the Casimir acts on $M(\lambda)$ with scalar $(\lambda,\lambda+2\rho)$ and on its cyclic submodule $U(\mathfrak g)v_\mu$ with scalar $(\mu,\mu+2\rho)$. These scalars agree on the nonzero vector $v_\mu$. Substituting $\mu=\lambda-\beta$ and expanding gives $2(\lambda+\rho,\beta)=(\beta,\beta)$. [L2, step 1.1, algebra]

3.1 Write $\beta=\sum_i n_i\alpha_i$ in the simple-root basis, where $n_i\in\mathbb Z_{\ge0}$ and some $n_i>0$. By [L3], $2(\lambda+\rho,\alpha_i)=(\alpha_i,\alpha_i)\langle\lambda+\rho,\alpha_i^\vee\rangle<0$ for every $i$. Therefore $(\lambda+\rho,\beta)<0$, whereas positive definiteness gives $(\beta,\beta)>0$, contradicting step 2.1. Thus $M(\lambda)$ has no proper nonzero submodule and is simple. [given, L3, step 1.1, step 2.1, contradiction, discharge-contradiction] ∎
