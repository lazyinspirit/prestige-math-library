---
id: lem-directed-dyadic-rounding-enclosure-and-error
kind: lemma
title: Directed dyadic rounding encloses with explicit underflow and overflow bounds
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: outward-rounded-interval-and-ball-arithmetic
dependency_level: 2
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-dyadic-floating-point-format-and-directed-rounding]
sources:
  references:
    - title: "Tucker, Validated Numerics: A Short Introduction to Rigorous Computations, Ch. 1 §§1.2–1.5"
      url: "https://pup-assets.imgix.net/onix/images/9780691247656/9780691247656.pdf?fm=pdf"
    - title: "Rump, Verification methods: Rigorous results using floating-point arithmetic, §§4–5.3"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
---

## Statement

For finite $x$ with $|x|\le N_{\max}$, the directed roundings defined in
[[def-dyadic-floating-point-format-and-directed-rounding]] satisfy
$\operatorname{rd}(x)\le x\le\operatorname{ru}(x)$ and each endpoint error is
at most the stated $\epsilon_{\rm abs}(x)$ (with zero error when $x$ is
representable). For $x>N_{\max}$ the pair $(N_{\max},+\infty)$ encloses $x$;
for $x<-N_{\max}$ the pair $(-\infty,-N_{\max})$ encloses $x$. Overflow has
error bound $+\infty$ and cannot be reported as a finite-error result.

## Facts & Assumptions

**Given:** The finite dyadic set $\mathbb F$, subnormal quantum $\eta$,
exponent limits, and endpoint roundings from
[[def-dyadic-floating-point-format-and-directed-rounding]].

[L1] [[def-dyadic-floating-point-format-and-directed-rounding]]: adjacent
subnormals are spaced by $\eta$; in the normal bin
$[2^e,2^{e+1})$ the representable spacing is $2^{e-p+1}$; directed rounding
selects the adjacent representables bracketing the exact real number.

## Proof

1.1 If $x=0$, then $0\in\mathbb F$, so $\operatorname{rd}(0)=\operatorname{ru}(0)=0$ and each endpoint error equals $\epsilon_{\rm abs}(0)=0$. If $x\ne0$ is representable, both directed roundings equal $x$. Otherwise there are consecutive representables $a<b$ with $a<x<b$: finiteness of $\mathbb F$ and the definitions of greatest lower and least upper values give these neighbors. Hence $\operatorname{rd}(x)=a\le x\le b=\operatorname{ru}(x)$. [given, L1, choose]

1.2 If $0\le x<2^{e_{\min}}$, both neighboring nonnegative representables are in the subnormal lattice with step $\eta$, so $x-a<\eta$ and $b-x<\eta$. If $2^e\le x<2^{e+1}$ is normal, consecutive representables within the bin are spaced by $2^{e-p+1}$. A bracket reaching the upper bin endpoint has no larger gap; in all cases each endpoint error is at most the stated, more conservative $2^{e-p+2}$. Symmetry of $\mathbb F$ gives the same bounds for negative $x$. [given, L1, algebra]

2.1 For $x>N_{\max}$, $N_{\max}<x<+infty$, and for $x<-N_{\max}$, $-\infty<x<-N_{\max}$; the prescribed extended endpoints therefore bracket $x$. The status and infinite absolute-error bound explicitly record that no finite error estimate is available outside the finite range. [given, algebra] ∎

