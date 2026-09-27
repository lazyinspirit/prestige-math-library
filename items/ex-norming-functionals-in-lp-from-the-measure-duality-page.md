---
id: ex-norming-functionals-in-lp-from-the-measure-duality-page
kind: example
title: "The abstract norming-functional theorem agrees with the concrete L^p-L^q formula"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-an-l-q-function-defines-a-bounded-linear-functional-on-l-p, cor-l-p-norm-recovery-by-unit-l-q-pairings]
forward_refs: [def-hahn-banach-extension-principle-relative, cor-relative-hahn-banach-dual-norming]
justified_by: []
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "Gerald B. Folland, Real Analysis, Section 6.2"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Corollary 15.9"
      url: "https://www.math.wustl.edu/~victor/classes/ma5051/rags100514.pdf"
---

## Example

Assume HB ([[def-hahn-banach-extension-principle-relative]]). Let $(X,\mathcal{A},\mu)$ be a measure space, let $1 \le p < \infty$, and let
$q$ be conjugate to $p$. Assume either $1 < p < \infty$, or $p=1$ and $\mu$ is
sigma-finite. For every nonzero $f \in L^p(\mu)$, the abstract Hahn-Banach
theorem produces a unit-norm functional $\Phi \in (L^p(\mu))^*$ with
$\Phi(f)=\|f\|_p$, and the earlier $L^p-L^q$ duality page realizes the same
value concretely by pairing against the usual $L^q$ extremizer.

## Facts & Assumptions

**Given:** HB and a measure space $(X,\mathcal{A},\mu)$, an exponent $1 \le p < \infty$ with conjugate exponent $q$, and a nonzero element $f \in L^p(\mu)$ in one of the ranges covered by the $L^p-L^q$ duality page.

[L1] Under HB, every nonzero vector has a norming functional ([[cor-relative-hahn-banach-dual-norming]]).

[L2] In the same $L^p-L^q$ ranges, the $L^p$ norm is the supremum of pairings against unit $L^q$ functions ([[cor-l-p-norm-recovery-by-unit-l-q-pairings]]).

[L3] The bilinear pairing with $g$ defines a bounded scalar-linear functional of norm at most $\|g\|_q$ ([[thm-an-l-q-function-defines-a-bounded-linear-functional-on-l-p]]).

## Verification

**Proof technique:** direct.

1.1 Using the assumed HB, apply [L1] to the nonzero vector $f \in L^p(\mu)$. This gives a functional $\Phi \in (L^p(\mu))^*$ with $\|\Phi\|=1$ and $\Phi(f)=\|f\|_p$. [L1, given]

1.2 By [L2], the same number $\|f\|_p$ is obtained as $$\sup\left\{\left|\int fg\,d\mu\right|:\|g\|_q \le 1\right\}.$$ For a representative $u$ of $f$, put $\theta(x)=\overline{u(x)}/|u(x)|$ where $u(x)\ne0$, and $\theta(x)=0$ otherwise. When $1<p<\infty$, take $g=|u|^{p-1}\theta/\|f\|_p^{p-1}$. Then $\|g\|_q=1$ and $ug=|u|^p/\|f\|_p^{p-1}$, so $\int ug\,d\mu=\|f\|_p$. When $p=1$, take $g=\theta$; then $\|g\|_\infty\le1$ and $ug=|u|$. The conjugate phase is required for the bilinear pairing $\int fg$ over complex scalars; over real scalars it is the usual sign. [L2, given, algebra]

2.1 By [L3], each displayed $g$ defines a functional of norm at most one, and its value on the nonzero $f$ is $\|f\|_p$, forcing its operator norm to be exactly one. Thus the abstract existence statement from Hahn-Banach and the concrete $L^p-L^q$ formula from the earlier page identify the same norming phenomenon: one proves that some unit functional attains $\|f\|_p$, and the other writes an attaining functional down explicitly. [step 1.1, step 1.2, L3] ∎
