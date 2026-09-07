---
id: "ex-gallagher-correspondence-for-a-direct-product"
kind: "example"
title: "Gallagher correspondence for a direct product"
status: published
origin: "pipeline"
deps: ["thm-gallagher-correspondence-for-an-extendible-character"]
provenance:
  statement: ai-generated
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Britta Späth, Reduction theorems for some global-local conjectures — Theorem 1.3; tom Dieck Remark 4.2.5 specialized to a direct product"
      url: "https://darstellungstheorie.uni-wuppertal.de/fileadmin/mathe/darstellungstheorie/LausanneBS_final.pdf"
generation:
  role: example
proof_strategy: direct
---

## Example

Let $N,Q$ be finite groups, $G=N\times Q$, and identify $N$ with $N\times\{1\}$. Fix $\theta\in\operatorname{Irr}(N)$ afforded by $S$. Then $I_G(\theta)=G$, and $\widetilde S(n,q)=S(n)$ extends $S$ to $G$. The irreducible $G$-modules above $\theta$ are exactly, without repetitions, the modules $S\boxtimes U$ for $U\in\operatorname{Irr}(Q)$, where
$$ (n,q)(s\otimes u)=(ns)\otimes(qu). $$
Their ramification indices are $\dim U$.

## Facts & Assumptions

**Given:** The groups, modules, characters, and hypotheses in the example. All representations here are finite-dimensional complex left representations.

[F1] Given an extension to inertia, tensoring it with inflated quotient irreducibles is a bijection above the type, with ramification equal to quotient degree. ([[thm-gallagher-correspondence-for-an-extendible-character]]).

## Verification

**Proof technique:** direct.

1.1 For $(a,b)\in N\times Q$, conjugation sends $(n,1)$ to $(a^{-1}na,1)$ in the left-character convention. Characters are invariant under inner conjugation of $N$ by similarity of matrices, so every element fixes $\theta$ and inertia is $G$. The map $(n,q)\mapsto S(n)$ is multiplicative and restricts to the original action. The quotient map $(n,q)\mapsto q$ identifies $G/N$ with $Q$. [given, algebra]

2.1 Gallagher applies to this extension. Its tensor with an inflated quotient module has exactly the displayed action, hence is $S\boxtimes U$. The bijection gives irreducibility, exhaustivity, and uniqueness of the parameter. Restricting to $N$ makes the second factor trivial and gives $\dim U$ copies of $S$, which is the ramification. When $Q=1$ this is just $S$; when $N=1$ it is just $U$. [F1, step 1.1] ∎
