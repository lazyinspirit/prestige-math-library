---
id: thm-arithmetic-and-lattice-operations-preserve-measurability
kind: theorem
title: "Arithmetic and lattice operations preserve measurability whenever they are defined"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-positive-and-negative-parts-of-a-function, rem-zero-times-infinity-convention-for-pointwise-products, thm-threshold-characterisations-of-real-and-extended-real-measurability]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Sheldon Axler, Measure, Integration and Real Analysis, Section 2B"
      url: "https://measure.axler.net/MIRA.pdf"
    - title: "John K. Hunter, Measure Theory, Definition 3.3"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Let $(X,\mathcal{A})$ be a measurable space and let
$f,g : X \to \overline{\mathbb{R}}$ be measurable. Then:

1. $cf$ is measurable for every real scalar $c$;
2. $\max(f,g)$, $\min(f,g)$, $|f|$, $f^+$, and $f^-$ are measurable;
3. if $f+g$ is pointwise defined, then $f+g$ is measurable;
4. with the convention of
   [[rem-zero-times-infinity-convention-for-pointwise-products]], the pointwise
   product $fg$ is measurable.

## Facts & Assumptions

**Given:** A measurable space $(X,\mathcal{A})$ and measurable functions
$f,g : X \to \overline{\mathbb{R}}$.

[L1] Extended-real measurability is equivalent to measurability of the threshold
sets $\{h>a\}$.
([[thm-threshold-characterisations-of-real-and-extended-real-measurability]])

[L2] The positive and negative parts are
$h^+ = \max(h,0)$ and $h^- = \max(-h,0)$.
([[def-positive-and-negative-parts-of-a-function]])

[A1] In this proof, the pointwise product uses the page convention
$0 \cdot (+\infty)=0 \cdot (-\infty)=0$.

## Proof

**Proof technique:** direct.

1.1 Scalar multiples are measurable. If $c>0$, then [given, L1]
$\{cf>a\}=\{f>a/c\}$; if $c<0$, then $\{cf>a\}=\{f<a/c\}$; and if $c=0$, the
function is constant. So [L1] gives measurability of $cf$, and in particular of
$-f$. [given, L1]

2.1 The threshold identities [step 1.1, L1, L2]

$$\{\max(f,g)>a\} = \{f>a\} \cup \{g>a\},\qquad \{\min(f,g)>a\} = \{f>a\} \cap \{g>a\}$$

show via [L1] that $\max(f,g)$ and $\min(f,g)$ are measurable. By [L2], this
proves measurability of $f^+$ and $f^-$; replacing $g$ by $-f$ also gives
$|f|=\max(f,-f)$. [step 1.1, L1, L2]

3.1 Assume $f+g$ is pointwise defined. For every real $a$, [step 2.1, L1]

$$\{f+g>a\} = \bigcup_{q \in \mathbb{Q}} \big(\{f>q\} \cap \{g>a-q\}\big).$$

The inclusion from right to left is immediate. For the converse, if
$f(x)+g(x)>a$ then either $f(x)=+\infty$, in which case any rational
$q>a-g(x)$ works, or $f(x)$ is finite and one may choose a rational
$q$ with $a-g(x)<q<f(x)$. Thus [L1] gives measurability of $f+g$. [step 2.1, L1]

4.1 Suppose first that $u,v : X \to [0,+\infty]$ are nonnegative and measurable. [step 3.1, L1, A1]
If $a<0$, then $\{uv>a\}=X$. If $a \ge 0$, then

$$\{uv>a\} = \bigcup_{q \in \mathbb{Q},\, q>0} \big(\{u>q\} \cap \{v>a/q\}\big).$$

Again the inclusion from right to left is immediate. For the converse, if
$u(x)v(x)>a$, choose a rational $q$ with $0<q<u(x)$ and $a/q<v(x)$; this is
possible because either $u(x)$ is finite positive and the rationals are dense,
or $u(x)=+\infty$, in which case any sufficiently large positive rational works.
Hence nonnegative products are measurable by [L1]. [step 3.1, L1, A1]

5.1 For general measurable $f$ and $g$, step 2.1 gives measurable nonnegative [step 2.1, step 3.1, step 4.1, L2, A1]
functions $f^+,f^-,g^+,g^-$. By step 4.1 the four products
$f^+g^+, f^-g^-, f^+g^-, f^-g^+$ are measurable. Put

$$h_+ := f^+g^+ + f^-g^-,\qquad h_- := f^+g^- + f^-g^+.$$

At each point, at least one of $h_+$ and $h_-$ is zero, because at least one of
$f^+,f^-$ and at least one of $g^+,g^-$ is zero. So the difference
$h_+ - h_-$ is pointwise defined without the forbidden $\infty-\infty$ form, and
step 3.1 makes it measurable. By the usual sign decomposition,
$h_+ - h_- = fg$, with the convention [A1] at the $0 \cdot \infty$ points.
[step 2.1, step 3.1, step 4.1, L2, A1]

6.1 Steps 1.1 through 5.1 prove all four claims. [step 1.1, step 2.1, step 3.1, step 4.1, step 5.1]
∎
