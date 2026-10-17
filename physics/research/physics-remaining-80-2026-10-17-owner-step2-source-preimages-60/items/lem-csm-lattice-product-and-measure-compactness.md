---
id: lem-csm-lattice-product-and-measure-compactness
kind: lemma
title: "Finite-alphabet product and probability compactness"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
deps: ["def-countable-choice", "thm-caratheodory-extension-theorem", "thm-dynkin-pi-lambda", "thm-bolzano-weierstrass"]
justified_by: []
dependency_roles: {"def-countable-choice": "mathematical-premise", "thm-caratheodory-extension-theorem": "mathematical-premise", "thm-dynkin-pi-lambda": "mathematical-premise", "thm-bolzano-weierstrass": "mathematical-premise"}
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Sascha Friedli and Yvan Velenik, Statistical Mechanics of Lattice Systems: A Concrete Mathematical Introduction (complete author PDF, revised 2017)"
      url: "https://www.unige.ch/math/folks/velenik/smbook/Statistical_Mechanics_of_Lattice_Systems.pdf"
      locator: "Chapter 3, PDF pp. 127–132; Chapter 6, PDF pp. 265–289; Appendix, PDF pp. 329–332."
    - title: "Junior Seminar in Mathematical Physics, Proofs from the Book: Ising, DLR, Dobrushin and Peierls sections (complete 99-page seminar notes)"
      url: "https://web.math.princeton.edu/~js129/PDFs/Junior_Seminar_in_Mathematical_Physics__Proofs_from_the_Book.pdf"
      locator: "PDF pp. 20–24, 31–43, and 52–55."
---

## Statement

Assume the Axiom of Countable Choice. Let $d\geq1$, let $A$ be a finite nonempty set, and put $X=A^{\mathbb Z^d}$. Give $X$ the metric $d_X(\sigma,\eta)=\sum_{n\geq1}2^{-n}\mathbf 1_{\{\sigma_{i_n}\ne\eta_{i_n}\}}$ for a fixed enumeration $(i_n)$ of $\mathbb Z^d$, and let $\mathcal C$ be its cylinder algebra. Then $X$ is compact, the Borel sigma-algebra is $\sigma(\mathcal C)$, and every consistent normalized finitely additive probability on $\mathcal C$ extends uniquely to a probability on $\sigma(\mathcal C)$. Moreover, every sequence of probabilities on this sigma-algebra has a subsequence whose cylinder probabilities converge to those of a probability measure; along that subsequence integrals of every continuous $f:X\to\mathbb R$ converge.

## Facts & Assumptions

**Given:** $d\geq1$, a finite nonempty alphabet $A$, the countable lattice $\mathbb Z^d$, and the Axiom of Countable Choice for the extension step.

[A1] The Axiom of Countable Choice says every sequence of nonempty sets has a choice function ([[def-countable-choice]]).

[F1] Under Countable Choice, the outer measure induced by a premeasure on an algebra restricts to a measure on the generated sigma-algebra extending that premeasure ([[thm-caratheodory-extension-theorem]]).

[F2] If two probability measures agree on a pi-system, they agree on the sigma-algebra it generates ([[thm-dynkin-pi-lambda]]).

[F3] Every bounded real sequence has a convergent subsequence ([[thm-bolzano-weierstrass]]).

## Proof
1.1 Enumerate the sites and order the finite alphabet. From any sequence in $X$, retain an infinite subsequence constant at $i_1$, then a further infinite subsequence constant at $i_2$, and so on. At each stage use the first alphabet value in the fixed order occurring infinitely often in the current sequence, and enumerate its retained indices increasingly. This is a specified recursive rule, not a sequence of arbitrary dependent choices. Taking the diagonal subsequence makes each fixed coordinate eventually constant. For $\varepsilon>0$, choose $K$ with $2^{-K}<\varepsilon$. Two sufficiently late diagonal terms agree at the first $K$ sites, so their metric distance is at most $2^{-K}<\varepsilon$ and they converge to the coordinatewise limit. [given, construct]

1.2 A cylinder depends on finitely many coordinates. For any two cylinder presentations of the same set, pass to the union of their finite coordinate sets and use consistency of the finite-dimensional probabilities; this proves that the induced weight on the cylinder algebra is well-defined. The same finite-coordinate representation proves finite additivity and normalization. [given, algebra]

1.3 Write the given probability sequence as $(\mu_k)_{k\ge1}$. Enumerate the countable cylinder algebra as $C_1,C_2,\ldots$ (allow repetitions if it is finite). Specify a convergent-subsequence selector for any sequence $(u_k)$ in $[0,1]$ as follows. Start with the closed interval $I_0=[0,1]$ and all indices. Bisect the current interval and retain its left closed half if infinitely many current indices have values there; otherwise retain its right closed half. The retained index set is infinite because the two halves cover the previous interval. After stage $r$, let $k_r$ be the least retained index larger than $k_{r-1}$, with $k_0=0$. The intervals are nested with diameter $2^{-r}$, so any two selected values from stages at least $r$ differ by at most $2^{-r}$. By [F3] the bounded selected sequence has a subsequential limit; the diameter bound then makes the whole selected sequence converge to that limit. No witness subsequence from [F3] is selected by the rule: each interval, retained set and index is uniquely specified. Starting with $a_0(k)=k$, apply this selector to $(\mu_{a_{j-1}(k)}(C_j))_{k\ge1}$ and let $a_j$ be the resulting increasing subsequence of $a_{j-1}$. Ordinary deterministic recursion defines all $a_j$ without dependent choice. The diagonal indices $n_j=a_j(j)$ are strictly increasing, since $a_{j+1}(j+1)\ge a_j(j+1)>a_j(j)$; for each fixed cylinder their probabilities converge along this diagonal. Limits of finite sums preserve normalization and finite additivity, hence all finite-coordinate consistency identities. [F3, given, construct]

2.1 To prove compactness directly, suppose an open cover has no finite subcover. Starting with $X$, successively split the current cylinder by the next coordinate into finitely many subcylinders; at least one remains without a finite subcover, and choose the first such cylinder in the fixed alphabet order. The resulting nested cylinders determine one configuration $\sigma$. Some cover member contains $\sigma$ and, being open, contains a basic cylinder fixing finitely many coordinates of $\sigma$. A sufficiently late nested cylinder is contained in that member, contradicting its selection. Thus every open cover has a finite subcover. The cylinders form a countable clopen basis, so they generate exactly the Borel sigma-algebra. [given, step 1.1, construct]

3.1 If a cylinder $C$ is a disjoint union of countably many cylinders $C_n$, compactness of $C$ gives a finite subcover from the open cover $(C_n)$. Disjointness forces every other $C_n$ to be empty, so finite additivity gives countable additivity whenever the union is in $\mathcal C$; the cylinder weight is therefore a premeasure. Apply [F1] to extend it under the stated Countable Choice assumption. The cylinder family is a pi-system generating $\sigma(\mathcal C)$, so [F2] gives uniqueness. [A1, F1, F2, step 2.1]

4.1 The extension in step 3.1 gives a probability measure with those cylinder values. Local functions are finite linear combinations of cylinder indicators. Every continuous $f$ is uniformly approximated by local functions. If uniform continuity failed, [A1] would choose, for each $K$, one pair agreeing on the first $K$ coordinates whose $f$-values differ by at least a fixed $\varepsilon>0$. These are independent nonempty sets of pairs indexed by $K$, so countable choice suffices. Step 1.1 gives a convergent subsequence of the first components; along the same indices the second components converge to the same configuration, since their distances are at most $2^{-K}$. Continuity then contradicts the fixed separation of their $f$-values. Thus for large $K$, fixing the coordinates after the first $K$ to any fixed reference tail gives a local approximation with uniform error at most $\varepsilon$. Cylinder convergence therefore gives convergence of integrals first for local functions and then for every continuous $f$. [A1, F1, step 1.1, step 2.1, step 3.1, step 1.3, algebra] ∎ 