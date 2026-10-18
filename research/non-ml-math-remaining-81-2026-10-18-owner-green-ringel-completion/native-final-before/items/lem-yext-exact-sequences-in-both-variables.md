---
id: lem-yext-exact-sequences-in-both-variables
kind: lemma
title: "Low-degree exact sequences for Yoneda Ext in both variables"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-abelian-category
  - def-n-fold-yoneda-extension
  - def-equivalence-of-n-fold-extensions
  - def-pullback-and-pushout-of-an-extension
  - def-baer-sum-of-extension-classes
  - thm-baer-sum-makes-extension-classes-an-abelian-group
  - lem-yext-zero-splice-factorization
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Barry Mitchell, Theory of Categories, Chapter VII, §§2–5"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/mitchell.pdf"
      locator: "Chapter VII, Proposition 2.2 and Theorem 5.1, printed pp. 168–179: low-degree Hom–Yoneda Ext exactness and the Yoneda Ext² boundary without projectives or injectives."
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, §3.4, Yoneda Ext"
      url: "https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf"
      locator: "§3.4.4–3.4.6, printed pp. 78–79: Yoneda Ext¹, Baer addition and splicing."
---

## Statement

For a short exact sequence $0\to A\xrightarrow{i}B\xrightarrow{p}C\to0$
and an object $X$ in an abelian category, the sequence
$$ 0\to\operatorname{Hom}(X, A)\to\operatorname{Hom}(X, B)\to \operatorname{Hom}(X, C)\xrightarrow{\delta} \operatorname{YExt}^1(X, A)\to\operatorname{YExt}^1(X, B)\to \operatorname{YExt}^1(X, C)\xrightarrow{\partial} \operatorname{YExt}^2(X, A) $$
is exact at every term before the final $\operatorname{YExt}^2$ term. The
boundary $\delta$ pulls back the given extension along a map $X\to C$;
$\partial$ splices it with a short extension of $X$ by $C$. The dual sequence
in the first Ext variable is exact at the corresponding terms:
$$ 0\to\operatorname{Hom}(C, X)\to\operatorname{Hom}(B, X)\to \operatorname{Hom}(A, X)\to\operatorname{YExt}^1(C, X)\to \operatorname{YExt}^1(B, X)\to\operatorname{YExt}^1(A, X)\to \operatorname{YExt}^2(C, X). $$

## Unresolved proof obligation

The Hom and initial $\operatorname{YExt}^1$ exactness follows by explicit
pullback and pushout diagrams. Exactness at
$\operatorname{YExt}^1(X,C)$ requires the zero-splice factorization in
[[lem-yext-zero-splice-factorization]]. That local supplier is explicitly
escalated because its switch-induction proof has not yet been reconstructed
in full. Accordingly the full exact-sequence statement is retained as a
literature-supported interface, not a ready local theorem. No projective or
injective resolution, derived-Ext identification, or choice axiom is claimed.
