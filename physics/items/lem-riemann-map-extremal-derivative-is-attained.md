---
id: lem-riemann-map-extremal-derivative-is-attained
kind: lemma
title: "A maximizing sequence has a locally uniform limit with extremal derivative"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-axiom-of-choice, def-riemann-map-extremal-family, lem-riemann-map-extremal-derivatives-are-positive-and-bounded, thm-montel-theorem-for-holomorphic-functions, cor-derivative-operators-are-continuous-for-local-uniform-convergence, thm-open-mapping-theorem-holomorphic-functions]
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  references:
    - title: "Matthias Weber, Complex Analysis, Theorem 5.2.6"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
    - title: "Walter Rudin, Real and Complex Analysis, Theorem 14.9"
      url: "https://perso.telecom-paristech.fr/decreuse/_downloads/c22155fef582344beb326c1f44f437d2/rudin.pdf"
---

## Statement

Assume the Axiom of Choice. Let $\Omega\subsetneq\mathbb C$ be homologically simply connected, let
$z_0\in\Omega$, and let

$$M:=\sup\{\,f'(z_0):f\in\mathcal F(\Omega,z_0)\,\}.$$

Then there is a holomorphic $f:\Omega\to\mathbb D$ with $f(z_0)=0$ and
$f'(z_0)=M$.

## Facts & Assumptions

**Given:** The Axiom of Choice, a proper homologically simply connected complex domain $\Omega\subsetneq\mathbb C$, and a point $z_0\in\Omega$.

[A1] The Axiom of Choice supplies the maximizing sequence and the successive subsequence choices used by Montel's theorem ([[def-axiom-of-choice]]).

[L1] The derivative set of the extremal family is nonempty, positive, and has a finite supremum ([[lem-riemann-map-extremal-derivatives-are-positive-and-bounded]]).

[L2] Under the Axiom of Choice, every locally bounded holomorphic family is normal ([[thm-montel-theorem-for-holomorphic-functions]]).

[L3] Derivatives depend continuously on locally uniform convergence ([[cor-derivative-operators-are-continuous-for-local-uniform-convergence]]).

[L4] A nonconstant holomorphic map on a complex domain is open ([[thm-open-mapping-theorem-holomorphic-functions]]).

## Proof

**Proof technique:** direct.

1.1 By [A1] and [L1], choose a sequence $(f_n)$ in $\mathcal F(\Omega,z_0)$ with $f_n'(z_0)\to M$. Because every $f_n$ maps $\Omega$ into $\mathbb D$, the family is locally bounded, so [L2] gives a locally uniformly convergent subsequence, still denoted $(f_n)$, with holomorphic limit $f$ on $\Omega$. [A1, L1, L2, given, choose]

2.1 For every $n$, one has $f_n(z_0)=0$, so the locally uniform convergence of step 1.1 gives $f(z_0)=0$. Fact [L3] gives $f_n'(z_0)\to f'(z_0)$, hence $f'(z_0)=M$. [L3, step 1.1, algebra]

3.1 Because $M>0$ by [L1], step 2.1 makes $f$ nonconstant. Also $|f|\le1$ on $\Omega$ as a locally uniform limit of disc-valued maps. If $|f(a)|=1$ at some $a\in\Omega$, then $f(\Omega)$ would be an open subset of the closed unit disc by [L4], impossible. Hence $f(\Omega)\subset\mathbb D$. [L1, L4, step 2.1, assume-contra, discharge-contradiction]

4.1 The map $f$ therefore has the required normalization and extremal derivative. [step 2.1, step 3.1] ∎
