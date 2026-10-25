---
id: prop-semisimple-rings-have-vanishing-positive-tor-and-ext
title: "Semisimple rings have vanishing positive Tor and Ext"
kind: proposition
status: published
origin: pipeline
deps: ["def-balanced-tor-bifunctor", "thm-equivalent-characterizations-of-semisimple-rings", "thm-wedderburn-artin-theorem", "def-opposite-ring", "thm-injective-module-characterizations", "def-balanced-ext-bifunctor", "def-tor-by-resolving-the-right-module", "def-ext-via-a-projective-resolution-of-the-first-variable", "def-ext-via-an-injective-resolution-of-the-second-variable", "def-axiom-of-choice", "def-dependent-choice", "thm-recursion"]
proof_strategy: direct
sources:
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
    - title: "Crawley-Boevey, Noncommutative algebra, Sections 1.1–1.2 and 1.9, printed pp.1–2 and 7–9; full relevant text read 2026-09-09"
      url: https://www.math.uni-bielefeld.de/~wcrawley/1617noncommalg/Noncommutative%20algebra.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
  verified:
    model: "gpt-6-astra"
    verdict: pass
    date: 2026-09-09
    scope: "Owner-authorized local defect repair; no independent judge or owner audit"
    delegated_by: owner
---

## Statement

Assume the Axiom of Choice. If $R$ is semisimple, then every left and every right $R$-module is both projective and injective. For every right module $N$, left modules $M,X$, and $i>0$,
$$\operatorname{Tor}^R_i(N,M)=0,\qquad\operatorname{Ext}^i_R(M,X)=0.$$
Positive Ext also vanishes for pairs of right modules, interpreted as left modules over $R^{\mathrm{op}}$.

The underlying calculation is choice-free for supplied length-zero projective or injective resolutions: their tensor or Hom complexes have no positive-degree terms. AC here supplies the semisimple-module consequences and, through DC, the balanced change-of-resolution interfaces.

## Proof

**Given:** a semisimple unital ring $R$ and AC for the general assertions, with modules of the stated handedness.

1.1 If $R=0$, every unital module is zero because $m=1m=0m=0$, and all assertions follow. For $R\ne0$, [[thm-wedderburn-artin-theorem]] gives $R\cong\prod_{j=1}^rM_{n_j}(D_j)$ with division rings $D_j$. By [[def-opposite-ring]], taking opposites and transposing matrices gives $R^{\mathrm{op}}\cong\prod_jM_{n_j}(D_j^{\mathrm{op}})$. Indeed $(BA)^{\mathsf T}=A^{\mathsf T}B^{\mathsf T}$ when entry multiplication on the right is reversed, and the inverse of a nonzero element of $D_j$ is also its inverse in $D_j^{\mathrm{op}}$. The converse direction of the same Wedderburn–Artin theorem therefore makes $R^{\mathrm{op}}$ semisimple. [given, algebra]

2.1 Under [[def-axiom-of-choice]], apply [[thm-equivalent-characterizations-of-semisimple-rings]] to $R$ and, by step 1.1, to $R^{\mathrm{op}}$. Every left module over either ring is projective and every short exact sequence splits. Right $R$-modules are exactly left $R^{\mathrm{op}}$-modules with action $r\cdot n=nr$, and their homomorphisms and exact sequences are unchanged. Thus projectivity and splitting hold on both sides. The AC use in the semisimple characterization is the existence of complements in arbitrary semisimple modules. [step 1.1, given, algebra]

3.1 Since every short exact sequence on either side splits, [[thm-injective-module-characterizations]] implies that every module on that side is injective. Equivalently, a monomorphism has a retraction onto its image, so a map out of its domain extends by composing with that retraction. This establishes the injectivity assertion, not just projectivity or left-handed vanishing. [step 2.1, algebra]

4.1 Each module now has its identity as a length-zero projective resolution and as a length-zero injective resolution. The tensor and Hom complexes formed from these have zero terms in positive degrees, so their positive homology or cohomology vanishes by [[def-tor-by-resolving-the-right-module]], [[def-ext-via-a-projective-resolution-of-the-first-variable]] and [[def-ext-via-an-injective-resolution-of-the-second-variable]]. For supplied length-zero resolutions this calculation uses no choice. [step 2.1, step 3.1, algebra]

5.1 To obtain DC locally, given an entire relation $E$ on a nonempty set $X$ and $x_0\in X$, AC chooses $s(x)\in\{y:xEy\}$ for every $x\in X$; [[thm-recursion]] then gives $x_{n+1}=s(x_n)$ from the prescribed $x_0$. This proves the exact DC hypothesis of [[def-dependent-choice]]. The identity resolutions supply enough projectives and injectives and give resolution data canonically on all modules. Consequently the hypotheses of [[def-balanced-tor-bifunctor]] and [[def-balanced-ext-bifunctor]] hold, and their comparison interfaces identify the vanishing groups of step 4.1 with the stated balanced Tor and Ext. Apply the same argument over $R^{\mathrm{op}}$ for right-module Ext. [step 4.1, given, algebra] ∎
