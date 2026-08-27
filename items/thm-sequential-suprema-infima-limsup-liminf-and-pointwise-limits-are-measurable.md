---
id: thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable
kind: theorem
title: "Sequential suprema, infima, limsup, liminf, and pointwise limits of measurable functions are measurable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-limsup-liminf, thm-convergence-iff-limsup-equals-liminf, thm-threshold-characterisations-of-real-and-extended-real-measurability]
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Sheldon Axler, Measure, Integration and Real Analysis, Proposition 2.53"
      url: "https://measure.axler.net/MIRA.pdf"
---

## Statement

Let $(X,\mathcal{A})$ be a measurable space and let
$f_n : X \to \overline{\mathbb{R}}$ be measurable for every $n \in \mathbb{N}$.
Then the functions

$$\sup_n f_n,\qquad \inf_n f_n,\qquad \limsup_n f_n,\qquad \liminf_n f_n$$

are measurable. The set

$$\{\, x : \lim_n f_n(x) \text{ exists in } \overline{\mathbb{R}} \,\}$$

is measurable. In particular, if $f_n \to f$ pointwise, then $f$ is measurable.

## Facts & Assumptions

**Given:** A measurable space $(X,\mathcal{A})$ and measurable functions
$f_n : X \to \overline{\mathbb{R}}$ for $n \in \mathbb{N}$.

[L1] Threshold measurability characterizes extended-real measurability.
([[thm-threshold-characterisations-of-real-and-extended-real-measurability]])

[L2] For each $x$, the limsup and liminf of the sequence $(f_n(x))$ satisfy

$$\limsup_n f_n(x) = \inf_n \sup_{k \ge n} f_k(x),\qquad \liminf_n f_n(x) = \sup_n \inf_{k \ge n} f_k(x),$$

and the pointwise limit exists exactly when the limsup and liminf are equal.
([[def-limsup-liminf]], [[thm-convergence-iff-limsup-equals-liminf]])

## Proof

**Proof technique:** direct.

1.1 Let $s(x):=\sup_n f_n(x)$ and $i(x):=\inf_n f_n(x)$. Then for every real [L1, given]
$a$,

$$\{s>a\} = \bigcup_n \{f_n>a\},\qquad \{i>a\} = \bigcup_{q \in \mathbb{Q},\, q>a}\ \bigcap_n \{f_n>q\}.$$

Since each threshold set on the right is measurable, [L1] gives measurability of
$s$ and $i$. [L1, given]

2.1 For each $n$, the tail functions [step 1.1, L2]
$s_n(x):=\sup_{k \ge n} f_k(x)$ and $i_n(x):=\inf_{k \ge n} f_k(x)$ are
measurable by step 1.1. Applying step 1.1 again to the sequences $(s_n)$ and
$(i_n)$ and then using [L2] yields measurability of $\limsup_n f_n$ and
$\liminf_n f_n$. [step 1.1, L2]

3.1 Let $u:=\limsup_n f_n$ and $v:=\liminf_n f_n$. The equality set [step 2.1, L1, L2]
$\{u=v\}$ is measurable because

$$\{u=v\} = \bigcap_{q \in \mathbb{Q}} \Big(\big(\{u>q\}\cap\{v>q\}\big)\cup\big(\{u\le q\}\cap\{v\le q\}\big)\Big).$$

If $u(x)<v(x)$ or $v(x)<u(x)$, a rational strictly between them separates the
two sides; if $u(x)=v(x)$, every rational lies on the same side of both values.
So [L2] makes the pointwise-convergence set measurable. [step 2.1, L1, L2]

4.1 If $f_n \to f$ pointwise, then [L2] gives [step 2.1, step 3.1, L2]
$f = \limsup_n f_n = \liminf_n f_n$. Since step 2.1 has already proved that both
limiting functions are measurable, $f$ is measurable. [step 2.1, step 3.1, L2]
∎
