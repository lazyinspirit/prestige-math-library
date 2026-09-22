---
id: def-relative-compactness-with-respect-to-an-operator
kind: definition
title: "Relative compactness with respect to an operator"
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-spectral-theorem-for-unbounded-self-adjoint-operators, thm-unbounded-borel-functional-calculus, thm-bounded-borel-pvm-integral, thm-pvm-integral-is-a-star-homomorphism, thm-dominated-convergence, thm-riesz-representation-for-hilbert-space, def-relative-boundedness-with-respect-to-an-operator, def-resolvent-and-spectrum-of-a-closed-unbounded-operator, def-compact-linear-operator, lem-compositions-with-a-compact-operator-are-compact, lem-linear-combinations-of-compact-operators-are-compact, thm-compact-operator-sends-weakly-convergent-sequences-to-norm-convergent-sequences, thm-self-adjoint-resolvent-estimate, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-axiom-of-choice]
proof_strategy: not-applicable
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, second edition"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "Section 6.4, definition before Lemma 6.21, Lemma 6.21 and Lemma 6.22, pp.172-173"
    - title: "Theo Buehler and Dietmar A. Salamon, Functional Analysis"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
      locator: "Chapter 6, Definition 6.13 (compact resolvent), Sec. 6.1.2"
---

## Definition

Assume the Axiom of Choice. Let $A$ be a self-adjoint operator on a complex Hilbert space $H$, and let
$B:D(A)\to H$ be linear and bounded
for the graph norm of $A$ ([[def-relative-boundedness-with-respect-to-an-operator]]).
Then $B$ is **$A$-compact**, or **relatively compact with respect to $A$**,
when $BR_A(z)\in\mathcal K(H)$ is a compact operator
([[def-compact-linear-operator]]) for one, equivalently for every,
$z\in\rho(A)$.

The resolvent set is nonempty: $i\in\rho(A)$ by
[[thm-self-adjoint-resolvent-estimate]]. If $H=\{0\}$, all operators here
are the unique operator, compact with bound zero; the assertions hold directly.
Below suppose $H\ne\{0\}$.

**Well-definedness, with proofs.**

1. *$BR_A(z)$ is everywhere defined and bounded.* $R_A(z)$ maps $H$ into
   $D(A)$ and $B$ is graph-norm bounded there, so
 $\|BR_A(z)y\|\le a\|AR_A(z)y\|+b\|R_A(z)y\|\le(a(1+|z|\|R_A(z)\|)+b\|R_A(z)\|)\|y\|$
   using $AR_A(z)=zR_A(z)-I$, so that $\|AR_A(z)\|\le1+|z|\|R_A(z)\|$
   ([[def-resolvent-and-spectrum-of-a-closed-unbounded-operator]]).
2. *Independence of $z$.* Write $R_z=(zI-A)^{-1}$. For $y\in H$,
   $R_wy\in D(A)$ and
   $(zI-A)R_wy=y+(z-w)R_wy$. Applying $R_z$ gives
   $$R_wy=R_zy+(z-w)R_zR_wy,$$
   since $R_z(zI-A)$ is the identity on $D(A)$. Thus
   $R_z-R_w=(w-z)R_zR_w$. Interchanging $z,w$ also gives
   $R_z-R_w=(w-z)R_wR_z$. This derives both orders without an unproved
   resolvent identity; the two sides of the latter identity have values in
   $D(A)$, so applying the linear map $B$ gives
   $$BR_z=BR_w+(w-z)(BR_w)R_z.$$
   Compactness at $w$ implies compactness at $z$ by composition with the
   bounded $R_z$ and finite linear combinations
   [[lem-compositions-with-a-compact-operator-are-compact]]
   [[lem-linear-combinations-of-compact-operators-are-compact]]. Exchanging
   $z,w$ proves the converse, including the trivial case $z=w$.
3. *Vector space.* If $B_1,B_2$ are graph-norm bounded and $A$-compact, then
   $\alpha B_1+\beta B_2$ is graph-norm bounded and
   $(\alpha B_1+\beta B_2)R_A(z)=\alpha B_1R_A(z)+\beta B_2R_A(z)$ is compact,
   being a linear combination of compact operators
   ([[lem-linear-combinations-of-compact-operators-are-compact]]).
4. *An $A$-compact $B$ has $A$-bound zero.* For $z\in\rho(A)$ and
   $\psi\in D(A)$, the inverse identity gives
   $B\psi=BR_A(z)(zI-A)\psi$. Hence, with $a_z=\|BR_A(z)\|$,
   $$\|B\psi\|\le a_z\|A\psi\|+a_z|z|\|\psi\|.$$
   It suffices to prove $a_{in}\to0$ along positive integers $n$.
   The spectral theorem [[thm-spectral-theorem-for-unbounded-self-adjoint-operators]]
   and product/domain rule [[thm-unbounded-borel-functional-calculus]]
   identify $R_A(in)$ with the bounded function $(in-\mu)^{-1}$ of $A$:
   multiplication by $in-\mu$ gives the two inverse identities, with
   range in $D(A)$ since both $(in-\mu)^{-1}$ and $\mu(in-\mu)^{-1}$ are bounded.
   Consequently $F_n:=(iI-A)R_A(in)$ is the bounded function
   $h_n(\mu)=(i-\mu)/(in-\mu)$ of $A$.
   For real $\mu$ and $n\ge1$,
   $$|h_n(\mu)|^2=\frac{1+\mu^2}{n^2+\mu^2}\le1,\qquad h_n(\mu)\to0.$$
   The bounded PVM calculus and its adjoint rule
   [[thm-bounded-borel-pvm-integral]]
   [[thm-pvm-integral-is-a-star-homomorphism]] give $F_n^*=\overline{h_n}(A)$.
   For every $v\in H$ both squared norms $\|F_nv\|^2$ and $\|F_n^*v\|^2$
   equal $\int|h_n|^2dE_v$, which tends to zero by
   [[thm-dominated-convergence]], dominated by $1$ in the finite measure
   of mass $\|v\|^2$. In particular both families converge strongly to zero.

   Put $C=BR_A(i)$, compact by item 2. The inverse identity on $D(A)$ gives
   $CF_n=BR_A(in)$. Suppose its norm does not tend to zero. There exist
   $\delta>0$, a strictly increasing integer subsequence $n_k$, and, using
   the declared AC, vectors $y_k$ with $\|y_k\|\le1$ and
   $\|CF_{n_k}y_k\|>\delta$. For any $v\in H$,
   $$|\langle F_{n_k}y_k,v\rangle|=|\langle y_k,F_{n_k}^*v\rangle|\le\|F_{n_k}^*v\|\to0.$$
   Riesz representation [[thm-riesz-representation-for-hilbert-space]]
   therefore proves $F_{n_k}y_k\rightharpoonup0$. A compact operator sends
   a weakly null sequence to a norm-null sequence under AC
   [[thm-compact-operator-sends-weakly-convergent-sequences-to-norm-convergent-sequences]],
   contradicting the displayed lower bound. Thus $a_{in}\to0$.
   Given any $\varepsilon>0$, choose $n$ with $a_{in}<\varepsilon$ in the
   first estimate: $b=n a_{in}$ is finite and the $A$ coefficient is below
   $\varepsilon$. Its infimum is therefore zero. This does not assert that
   the zero coefficient itself is attained. The full AC assumption covers
   the spectral theorem and the compactness/sequence argument.
