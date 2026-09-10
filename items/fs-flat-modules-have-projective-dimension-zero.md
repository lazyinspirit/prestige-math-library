---
id: fs-flat-modules-have-projective-dimension-zero
title: "Flat modules need not have projective dimension zero"
kind: false-statement
status: published
origin: pipeline
deps: ["prop-torsion-free-abelian-groups-are-flat", "def-projective-dimension-of-an-object", "def-projective-module", "cor-every-module-is-a-quotient-of-a-free-module", "def-free-module-on-a-set-and-standard-basis"]
proof_strategy: direct
sources:
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
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

False claim: every flat module has projective dimension zero.

Counterinstance: $\mathbb Q$ is a flat, nonprojective $\mathbb Z$-module. This counterinstance and the exclusion of projective dimension zero require no Axiom of Choice.

## Refutation

**Given:** the $\mathbb Z$-module $\mathbb Q$.

1.1 A nonzero integer cannot annihilate a nonzero rational number, so $\mathbb Q$ is torsion-free. The choice-free [[prop-torsion-free-abelian-groups-are-flat]] makes it flat over $\mathbb Z$. [given]

1.2 Every homomorphism $f:\mathbb Q\to\mathbb Z$ is zero. For $q\in\mathbb Q$ and every positive integer $m$, additivity gives $f(q)=m f(q/m)$. Thus the integer $f(q)$ is divisible by every positive integer. A nonzero integer $z$ cannot have this property: choose $m>|z|$; if $z=mk$ with integer $k\ne0$, then $|z|=m|k|\ge m$, a contradiction. Hence $f(q)=0$ for every $q$. [given, algebra]

2.1 The canonical cover $\varepsilon:\mathbb Z^{(\mathbb Q)}\twoheadrightarrow\mathbb Q$ sends $e_q$ to $q$, by [[cor-every-module-is-a-quotient-of-a-free-module]]. If $\mathbb Q$ were projective, its lifting property in [[def-projective-module]] would give a section $s:\mathbb Q\to\mathbb Z^{(\mathbb Q)}$ with $\varepsilon s=\operatorname{id}_{\mathbb Q}$. For each index $q$, coordinate projection $\pi_q$ is a homomorphism to $\mathbb Z$ by [[def-free-module-on-a-set-and-standard-basis]], so $\pi_qs=0$ by step 1.2. All coordinates of every $s(x)$ are zero; hence $s=0$, contradicting $\varepsilon s(1)=1$. Thus $\mathbb Q$ is not projective, without assuming projective abelian groups are free. [step 1.2, given, algebra]

3.1 By [[def-projective-dimension-of-an-object]], a length-zero projective resolution exists exactly for a projective module. Step 2.1 rules it out for the flat module in step 1.1, refuting the claim. No arbitrary projective-resolution existence is asserted in the choice-free conclusion. [step 1.1, step 2.1, algebra] ∎
