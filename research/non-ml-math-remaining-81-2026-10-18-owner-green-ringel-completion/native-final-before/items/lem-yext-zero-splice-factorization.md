---
id: lem-yext-zero-splice-factorization
kind: lemma
title: "A zero Yoneda splice factors through the middle object"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - def-abelian-category
  - def-n-fold-yoneda-extension
  - def-equivalence-of-n-fold-extensions
  - def-pullback-and-pushout-of-an-extension
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Barry Mitchell, Theory of Categories, Chapter VII, §§4–5"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/mitchell.pdf"
      locator: "Chapter VII, Lemma 4.1 and Theorem 5.1, printed pp. 175–179: the switch-induction factorization criterion for Yoneda extensions and its role in exactness without projectives or injectives."
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, §3.4, Yoneda Ext"
      url: "https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf"
      locator: "§3.4.4–3.4.6, printed pp. 78–79: Yoneda extension classes, splicing and Baer operations."
---

## Statement

Let $E$ be $0\to A\to B\xrightarrow{p}C\to0$ and let $F$ be
$0\to C\to D\to X\to0$ in an abelian category. If their splice is zero in
$\operatorname{YExt}^2(X,A)$, then there is an extension $G$ of $X$ by $B$
whose pushout along $p:B\to C$ is equivalent to $F$. Conversely every such
pushout has zero splice with $E$.

## Unresolved proof obligation

The converse follows directly by pulling $E$ back along $p$ and observing
that the diagonal section splits that pullback. The forward implication uses
the degree-one case of Schanuel’s switch-induction lemma for equivalent
two-fold extensions. Mitchell’s full proof is at Chapter VII, Lemma 4.1,
printed pp. 176–177; it changes the factorization data across each
fixed-end switch using a pullback/pushout diagram. I inspected that proof,
but have not reconstructed the switch-to-factorization step here with enough
detail to claim a complete local proof. The item is therefore escalated; it
must not be used as a ready supplier.
