---
id: ex-norming-functionals-in-lp-from-the-measure-duality-page
kind: example
title: "The abstract norming-functional theorem agrees with the concrete L^p-L^q formula"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-dual-norms-every-vector, cor-l-p-norm-recovery-by-unit-l-q-pairings]
justified_by: []
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Gerald B. Folland, Real Analysis, Section 6.2"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Corollary 15.9"
      url: "https://www.math.wustl.edu/~victor/classes/ma5051/rags100514.pdf"
---

## Example

Let $(X,\mathcal{A},\mu)$ be a measure space, let $1 \le p < \infty$, and let
$q$ be conjugate to $p$. Assume either $1 < p < \infty$, or $p=1$ and $\mu$ is
sigma-finite. For every nonzero $f \in L^p(\mu)$, the abstract Hahn-Banach
theorem produces a unit-norm functional $\Phi \in (L^p(\mu))^*$ with
$\Phi(f)=\|f\|_p$, and the earlier $L^p-L^q$ duality page realizes the same
value concretely by pairing against the usual $L^q$ extremizer.

## Facts & Assumptions

**Given:** A measure space $(X,\mathcal{A},\mu)$, an exponent
$1 \le p < \infty$ with conjugate exponent $q$, and a nonzero element
$f \in L^p(\mu)$ in one of the ranges covered by the $L^p-L^q$ duality page.

[L1] Every nonzero vector has a norming functional
([[thm-dual-norms-every-vector]]).

[L2] In the same $L^p-L^q$ ranges, the $L^p$ norm is the supremum of pairings
against unit $L^q$ functions
([[cor-l-p-norm-recovery-by-unit-l-q-pairings]]).

## Verification

**Proof technique:** direct.

1.1 Apply [L1] to the nonzero vector $f \in L^p(\mu)$. This gives a functional $\Phi \in (L^p(\mu))^*$ with $\|\Phi\|=1$ and $\Phi(f)=\|f\|_p$. [L1, given]

1.2 By [L2], the same number $\|f\|_p$ is obtained as $$\sup\left\{\left|\int fg\,d\mu\right|:\|g\|_q \le 1\right\}.$$ In the standard explicit realization, one takes $g=|f|^{p-1}\operatorname{sgn}f/\|f\|_p^{p-1}$ when $1<p<\infty$, and $g=\operatorname{sgn}f$ when $p=1$. [L2, given, algebra]

2.1 Thus the abstract existence statement from Hahn-Banach and the concrete $L^p-L^q$ formula from the earlier page identify the same norming phenomenon: one proves that some unit functional attains $\|f\|_p$, and the other writes an attaining functional down explicitly. [step 1.1, step 1.2] ∎
