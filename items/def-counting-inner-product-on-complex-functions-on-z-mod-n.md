---
id: def-counting-inner-product-on-complex-functions-on-z-mod-n
kind: definition
title: "The counting inner product on $\\mathbb C^{\\mathbb Z/N\\mathbb Z}$"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
justified_by: []
aliases: []
deps: [def-complex-conjugate-real-imaginary-part-and-modulus,
       def-counting-measure,
       def-finite-sum,
       def-finite-sum-in-a-commutative-monoid,
       def-function-space,
       def-inner-product-space,
       def-integers-modulo-n,
       def-real-and-complex-inner-product-space,
       def-vector-space,
       lem-complex-conjugation-and-modulus-laws,
       lem-finite-sum-laws,
       lem-finite-sum-reindexing-and-fubini,
       thm-complex-numbers-form-a-field,
       thm-standard-representatives-modulo-n]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Michael E. Taylor, Fourier Analysis, Distributions, and Constant-Coefficient Linear PDE (author PDF)"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/fourier.pdf"
      locator: "§11, formula (11.5) and the following lines: $L^2$ pairings by counting measure on $\\mathbb Z_n$ and $(1/n)$-weighted counting measure on $\\Gamma_n$"
    - title: "Manfred Einsiedler and Thomas Ward, Ergodic Theory with a View Towards Number Theory, Appendix C (course-hosted full text)"
      url: "https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf"
      locator: "Appendix C.3, printed pp. 435-436: the inner product after Lemma C.7 and the counting measure on the discrete dual in the paragraph following Theorem C.10"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Let $N\ge1$ and let $\mathbb C^{\mathbb Z/N}$ be the complex vector space of all functions $\mathbb Z/N\mathbb Z\to\mathbb C$, with pointwise addition and scalar multiplication ([[def-function-space]], [[def-vector-space]]). For $f,g\in\mathbb C^{\mathbb Z/N}$ define

$$\langle f,g\rangle:=\sum_{x\in\mathbb Z/N}f(x)\,\overline{g(x)},$$

the sum being the finite sum over the finite index set $\mathbb Z/N\mathbb Z$ in the additive commutative monoid of $\mathbb C$ ([[def-finite-sum-in-a-commutative-monoid]]). Enumerating the group by its standard representatives gives the equivalent formula

$$\langle f,g\rangle=\sum_{x=0}^{N-1}f([x]_N)\,\overline{g([x]_N)},$$

where $\overline{\phantom{z}}$ is complex conjugation ([[def-complex-conjugate-real-imaginary-part-and-modulus]]). **The two displays agree.** By [[thm-standard-representatives-modulo-n]] the map $x\mapsto[x]_N$ is a bijection from the von Neumann natural $N=\{0,\dots,N-1\}$ onto $\mathbb Z/N\mathbb Z$, and the summand $f(x)\overline{g(x)}$ depends only on the class $x$; a finite commutative-monoid sum is unchanged by reindexing along a bijection ([[lem-finite-sum-reindexing-and-fubini]], part 1), so the second display is a rewrite of the first. No representative of a class is ever selected: every application of $f$ or of $g$ is an evaluation at a class.

**The pairing is an inner product** in the sense of [[def-inner-product-space]] and [[def-real-and-complex-inner-product-space]], with the linear-first convention fixed there. Linearity in the first argument, $\langle af_1+bf_2,g\rangle=a\langle f_1,g\rangle+b\langle f_2,g\rangle$ for $a,b\in\mathbb C$, follows from the field laws of $\mathbb C$ ([[thm-complex-numbers-form-a-field]]) together with the two elementary laws of a finite sum over a fixed finite index set, $\sum_x(u_x+v_x)=\sum_xu_x+\sum_xv_x$ and $\sum_x c\,u_x=c\sum_xu_x$; each of these laws is proved from the recursion clauses of [[def-finite-sum-in-a-commutative-monoid]] by induction on an enumeration of the index set. Conjugate symmetry, $\langle f,g\rangle=\overline{\langle g,f\rangle}$, follows from the same two laws together with the fact that complex conjugation is an involutive field automorphism, hence $\overline{g(x)\overline{f(x)}}=\overline{g(x)}\,f(x)$ and conjugation commutes with finite sums ([[lem-complex-conjugation-and-modulus-laws]]).

**Positive definiteness.** Taking $g=f$ gives $\langle f,f\rangle=\sum_x|f(x)|^2$ by $z\overline z=|z|^2$ ([[lem-complex-conjugation-and-modulus-laws]]), a sum of nonnegative real numbers, so $\langle f,f\rangle\ge0$. For the vanishing clause, reindex by the standard representatives to identify this group sum of the real family $x\mapsto|f(x)|^2$ with the sequential real sum $\sum_{x=0}^{N-1}|f([x]_N)|^2$ ([[def-finite-sum]], [[lem-finite-sum-reindexing-and-fubini]]); by claim 4 of [[lem-finite-sum-laws]] a finite sum of nonnegative reals vanishes only if every term vanishes, and $|f([x]_N)|^2=0$ happens exactly when $f([x]_N)=0$ ([[lem-complex-conjugation-and-modulus-laws]]). Since every class of $\mathbb Z/N\mathbb Z$ is $[x]_N$ for some $0\le x<N$, this forces $f=0$.

This is the pairing induced by the counting set function on the finite set $\mathbb Z/N\mathbb Z$, which weights a finite set by its cardinality and therefore gives weight $1$ to each point ([[def-counting-measure]]). No factor $1/N$ is inserted anywhere in the definition; a normalisation constant is carried by the transform, not by the pairing.

## Remarks

- **Why the counting normalisation and not $(1/N)$-counting.** Taylor's (11.5) weights the function space on $\Gamma_n$ by $(1/n)$-times counting measure and the space on $\mathbb Z_n$ by counting measure, matching the factor $1/n$ carried by his forward transform (11.1); this page uses the counting pairing on both sides and puts the constant $N^{-1/2}$ in the transform. Under the identification $\omega^j\leftrightarrow[j]_N$ the two conventions are related by $f^\#=N^{-1/2}\mathcal F_Nf$, a relabelling of the same finite sums, not a change of the mathematics.
