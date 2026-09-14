---
id: ex-the-summing-basis-of-c0-is-conditional
kind: example
title: "The summing basis of c0 is conditional"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-unconditional-and-conditional-basis, thm-unconditional-convergence-equivalences]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: counterexample
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  scraped: []
  references:
    - title: "Thomas Schlumprecht, Course Notes in Functional Analysis, Math 655"
      url: "https://people.tamu.edu/~t-schlumprecht/course_notes_math655_23c.pdf"
      locator: "§3.4, summing basis in c0 mentioned immediately before Theorem 3.4.1, printed p.86"
pipeline_run: phase-2-next-18
---

## Example

For $n\ge1$ put $s_n=(1,\ldots,1,0,\ldots)$, with $n$ initial ones. Then
$(s_n)$ is a conditional Schauder basis of real or complex $c_0$.

## Facts & Assumptions

[L1] A basis is conditional when some basis expansion is not unconditionally
convergent ([[def-unconditional-and-conditional-basis]]).

[L2] Unconditional convergence implies convergence of every subseries
([[thm-unconditional-convergence-equivalences]]).

## Verification

**Proof technique:** counterexample.

**Given:** The objects and hypotheses in the Statement.

1.1 For $x=(x_k)_{k\ge0}\in c_0$ set $a_n=x_{n-1}-x_n$ for $n\ge1$. [given]
The $k$th coordinate of $\sum_{n=1}^Na_ns_n$ is $x_k-x_N$ when
$0\le k<N$ and zero otherwise.
Hence the error has supremum at most
$\max\{|x_N|,\sup_{k\ge N}|x_k|\}\to0$. Conversely the coordinate identities
force $a_n=x_{n-1}-x_n$, so $(s_n)$ is a Schauder basis. [telescoping,
$x_n\to0$]

2.1 Take $x_k=(-1)^k/(k+1)$ for $k\ge0$. Then [given, L2, L1, step 1.1]
$a_n=(-1)^{n-1}(1/n+1/(n+1))$. The subseries over the odd indices has first
coordinate

$$\sum_{n\ \mathrm{odd}}\left(\frac1n+\frac1{n+1}\right)=+\infty.$$

It therefore does not converge in $c_0$. By [L2] the basis expansion of this
$x$ is not unconditional, and [L1] makes the basis conditional. [L1, L2,
explicit witness] ∎
