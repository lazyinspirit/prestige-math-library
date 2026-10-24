---
id: thm-submodules-of-free-modules-over-a-pid-are-free
title: "A submodule of an arbitrary-rank free module over a PID is free"
kind: theorem
status: published
origin: pipeline
deps: ["def-principal-ideal-domain", "def-free-module-on-a-set-and-standard-basis", "def-axiom-of-choice", "thm-well-ordering-theorem", "thm-transfinite-induction"]
proof_strategy: direct
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  verified:
    model: codex
    verdict: pass
    date: 2026-09-09
    scope: owner-authorized local PID submodule proof/interface repair; no independent judge
    delegated_by: owner
---

## Statement

Assume the Axiom of Choice. If $R$ is a PID, $F$ is a free $R$-module, and
$N\subseteq F$, then $N$ is free (with no finite-rank assumption on $F$).

## Facts & Assumptions

**Given:** a basis $(e_a)_{a\in W}$ of $F$, a submodule $N\subseteq F$, and AC.

[L1] A PID is a domain and every ideal is principal ([[def-principal-ideal-domain]]).

[L2] Basis expansions are unique and have finite support ([[def-free-module-on-a-set-and-standard-basis]]).

[L3] AC permits simultaneous selections from a set-indexed family of nonempty sets ([[def-axiom-of-choice]]).

[L4] Under AC the set $W$ admits a well-order ([[thm-well-ordering-theorem]]).

[L5] Induction over a well-ordered set is valid ([[thm-transfinite-induction]]).

## Proof

1.1 Use [L4] to well-order $W$. For $a\in W$ let $F_{\le a}$ and $F_{<a}$ be the spans of the corresponding basis initial segments. Let $I_a$ be the image of $N\cap F_{\le a}$ under the $a$-coordinate map. This image is an ideal because the coordinate map is $R$-linear. [L2, L4, construct]

2.1 If $I_a\ne0$, [L1] supplies a nonzero generator $r_a$ and the definition of the image supplies $x_a\in N\cap F_{\le a}$ with $a$-coordinate $r_a$. The sets of such pairs $(r_a,x_a)$ are nonempty and indexed by a subset of $W$; use [L3] to choose them simultaneously. This is the second use of AC, after well-ordering the basis. [step 1.1, L1, L3, choose]

3.1 If $y\in N\cap F_{\le a}$ and $I_a=0$, then $y\in F_{<a}$. If $I_a\ne0$, write its $a$-coordinate as $c r_a$; then $y-cx_a\in N\cap F_{<a}$. In either case the remainder has finite support below $a$. [step 1.1, step 2.1, L2, algebra]

4.1 Induct on $a$ using [L5] to show that $N\cap F_{\le a}$ is spanned by the chosen $x_b$ with $b\le a$. By step 3.1 it suffices to handle a finite-support remainder in $F_{<a}$. A zero remainder needs no generators; otherwise its support has a greatest element $b<a$, so the induction hypothesis at $b$ applies. This includes least and limit positions without selecting a cofinal sequence. Every nonzero element of $N$ has a greatest support element, so the chosen family spans $N$. [step 3.1, L2, L5]

5.1 In a nonzero finite relation among the chosen $x_a$, take the greatest index $a$ with nonzero coefficient $c_a$. Its $a$-coordinate is $c_a r_a$: all smaller-index vectors have zero coordinate there. Since $R$ is a domain and $r_a\ne0$, this coordinate is nonzero, a contradiction. Thus the family is independent and is a basis by step 4.1. If $W$ or $N$ is empty or zero as applicable, the same argument gives the empty basis. [step 1.1, step 2.1, step 4.1, L1, L2] ∎
