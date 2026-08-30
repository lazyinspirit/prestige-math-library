---
id: thm-montel-caratheodory-theorem
kind: theorem
title: "Families omitting two values are chordally normal"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-axiom-of-choice, def-two-value-omitting-holomorphic-family, def-chordal-local-uniform-convergence-and-meromorphic-normality, thm-schottky-theorem, thm-chordal-arzela-ascoli-criterion-for-meromorphic-families, lem-locally-bounded-holomorphic-families-are-locally-equicontinuous]
landmark: true
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
sources:
  references:
    - title: "Aleksander Simonic, The Ahlfors lemma and Picard's theorems, Theorem 13"
      url: "https://arxiv.org/pdf/1506.07019"
---

## Statement

Assume the Axiom of Choice. Let $\Omega$ be a plane domain and let $\mathcal F\subseteq H(\Omega)$ be a
family of holomorphic functions omitting the two values $0$ and $1$. Then
$\mathcal F$ is normal for chordal local uniform convergence.

## Facts & Assumptions

**Given:** The Axiom of Choice, a plane domain $\Omega$, and a family $\mathcal F\subseteq H(\Omega)$ whose members omit $0$ and $1$.

[A1] The Axiom of Choice supplies the successive subsequence selections in the chordal Arzela-Ascoli criterion ([[def-axiom-of-choice]]).

[L1] Schottky's theorem bounds such a function on every smaller disc once one of $|f(a)|$, $|1/f(a)|$, or $|1/(1-f(a))|$ is bounded at the center ([[thm-schottky-theorem]]).

[L2] A locally bounded holomorphic family is locally equicontinuous ([[lem-locally-bounded-holomorphic-families-are-locally-equicontinuous]]).

[L3] Under the Axiom of Choice, the chordal Arzela-Ascoli criterion characterizes meromorphic normality ([[thm-chordal-arzela-ascoli-criterion-for-meromorphic-families]]).

## Proof

**Proof technique:** direct.

1.1 If $\mathcal F$ is empty, it is chordally normal vacuously. Otherwise fix $a\in\Omega$ and choose $\rho>0$ with $\overline{D(a,2\rho)}\subset\Omega$. For each $f\in\mathcal F$, at least one of $|f(a)|$, $|1/f(a)|$, or $|1/(1-f(a))|$ is at most $2$: if both $|f(a)|<1/2$ and $|1-f(a)|<1/2$ held, the triangle inequality would fail. Thus one of the three transforms $T_1(z)=z$, $T_2(z)=1/z$, $T_3(z)=1/(1-z)$ has center value of modulus at most $2$. [given, cases, algebra]

2.1 Each $T_j\circ f$ omits $0$ and $1$, so [L1] applied after rescaling $D(a,2\rho)$ to $\mathbb D$ gives a bound $|T_j(f(z))|\le M(\rho)$ on $D(a,\rho)$ for the transform selected in step 1.1. Hence every member of the transformed family is locally bounded there. Fact [L2] makes each transformed subfamily locally equicontinuous, and because there are only three fixed inverse transforms, the original family is chordally locally equicontinuous on $D(a,\rho)$. [L1, L2, step 1.1, algebra]

3.1 The target $\widehat{\mathbb C}$ is compact, so pointwise relative compactness is automatic. Therefore [A1] and [L3] apply on each $D(a,\rho)$, giving chordal normality there. As $a$ was arbitrary, $\mathcal F$ is chordally normal on $\Omega$. [A1, L3, step 2.1] ∎
