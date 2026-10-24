---
id: ex-weak-dimension-and-global-dimension-for-a-field-and-the-integers
title: "Weak and global dimension for a field and the integers"
kind: example
status: published
origin: pipeline
deps: ["prop-the-integers-have-weak-and-global-dimension-one", "cor-every-vector-space-has-a-basis", "thm-free-modules-are-projective-with-choice-boundary", "lem-projective-modules-are-flat-over-an-arbitrary-ring", "def-left-and-right-global-dimension-of-a-ring", "def-left-and-right-weak-global-dimension", "def-projective-dimension-of-an-object", "def-flat-dimension-of-a-module", "def-axiom-of-choice"]
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

## Example

Assume the Axiom of Choice. For a field $k$, left and right weak global dimension and left and right global dimension are all $0$; for $\mathbb Z$, all four are $1$.

For a supplied finite basis of a $k$-module, its projectivity, flatness and length-zero resolutions need no choice assumption; the AC hypothesis above concerns the conclusion for all modules.

## Verification

**Given:** a field $k$ and AC for the all-module assertions; a finite basis when considering the separate finite-basis clause.

1.1 Under [[def-axiom-of-choice]], [[cor-every-vector-space-has-a-basis]] supplies a basis for any $k$-module $V$, identifying it with the free module on that basis. By [[thm-free-modules-are-projective-with-choice-boundary]], $V$ is projective: this second use of AC chooses preimages of basis values in each lifting problem. It is flat by [[lem-projective-modules-are-flat-over-an-arbitrary-ring]]. Thus $0\to V\xrightarrow{\operatorname{id}}V\to0$ is both a length-zero projective and a length-zero flat resolution. For a supplied finite basis, the same free-projectivity theorem uses only finite choice, so these conclusions hold without AC. [given, algebra]

1.2 Under AC, [[prop-the-integers-have-weak-and-global-dimension-one]] proves all four integer dimensions equal one, using actual length-one resolutions and the nonflat module $\mathbb Z/2\mathbb Z$. No independent undeclared Tor or Ext calculation is needed here. [given]

2.1 The definitions [[def-projective-dimension-of-an-object]] and [[def-flat-dimension-of-a-module]] assign dimension zero to the modules in step 1.1. Their suprema, as in [[def-left-and-right-global-dimension-of-a-ring]] and [[def-left-and-right-weak-global-dimension]], are therefore zero. Because $k$ is commutative, the right-module assertion is the same statement with the scalar action written on the other side. Together with step 1.2 this gives all the claimed values. [step 1.1, step 1.2, algebra] ∎
