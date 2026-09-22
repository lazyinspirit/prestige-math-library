---
id: thm-continuous-functional-calculus-under-resolvent-convergence
kind: theorem
title: "Continuous functional calculus under resolvent convergence"
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-norm-and-strong-resolvent-convergence, lem-resolvent-star-algebra-is-dense-in-c-zero, thm-unbounded-borel-functional-calculus, thm-spectral-theorem-for-unbounded-self-adjoint-operators, thm-dominated-convergence, def-bounded-linear-operator, def-operator-norm, def-axiom-of-choice, thm-bounded-borel-pvm-integral, thm-pvm-integral-is-a-star-homomorphism, lem-scalar-and-complex-measures-from-a-pvm, thm-self-adjoint-resolvent-estimate, def-resolvent-and-spectrum-of-a-closed-unbounded-operator]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, second edition"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "Theorem 6.31 and its complete proof, Corollary 6.32, pp.179-180"
---

## Statement

Assume the Axiom of Choice. Let $A_n,A$ be self-adjoint operators on a complex Hilbert space $H$ and
suppose $A_n\to A$ in the strong resolvent sense. Then
$f(A_n)x\to f(A)x$ for every bounded continuous $f:\mathbb R\to\mathbb C$ and
every $x\in H$. If $A_n\to A$ in the norm resolvent sense, then
$\|f(A_n)-f(A)\|\to0$ for every bounded continuous $f$ with
$\lim_{t\to+\infty}f(t)=\lim_{t\to-\infty}f(t)$. In both cases the conclusion
does not depend on the nonreal parameter used in the definition of convergence.

## Facts & Assumptions

[A1] On nonzero complex $H$, AC supplies the spectral PVM of each self-adjoint $S$, representing $S$ as the integral of the identity on its squared-integrability domain. The unbounded calculus has the exact product domain $D(g(S))\cap D((fg)(S))$, and sums and products agree with their pointwise counterparts on their domains ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]], [[thm-unbounded-borel-functional-calculus]]).

[A2] The bounded PVM calculus is linear, unital, multiplicative and conjugation preserving, satisfies $\|h(S)\|\le\|h\|_\infty$ and $\|h(S)x\|^2=\int|h|^2dE^S_x$, and $E^S_x(\mathbb R)=\|x\|^2$. Its Countable Choice assumptions are supplied by AC ([[thm-bounded-borel-pvm-integral]], [[thm-pvm-integral-is-a-star-homomorphism]], [[lem-scalar-and-complex-measures-from-a-pvm]], [[def-axiom-of-choice]]).

[A3] $R_S(z)=(zI-S)^{-1}$ exists for nonreal $z$ with $\|R_S(z)\|\le1/|\operatorname{Im}z|$. Convergence is initially assumed at one fixed nonreal parameter only ([[thm-self-adjoint-resolvent-estimate]], [[def-resolvent-and-spectrum-of-a-closed-unbounded-operator]], [[def-norm-and-strong-resolvent-convergence]]).

[A4] For fixed nonreal $z$, the linear span of $r^k\overline r^{\,j}$, $k+j\ge1$, $r(\lambda)=(\lambda-z)^{-1}$, is uniformly dense in $C_0(\mathbb R)$ ([[lem-resolvent-star-algebra-is-dense-in-c-zero]]). Only its function-algebra density assertion is used; parameter independence is proved below.

[A5] Scalar dominated convergence holds with an integrable majorant ([[thm-dominated-convergence]]). Operator norm bounds give $\|Bx\|\le\|B\|\|x\|$ and, by applying this twice, $\|BC\|\le\|B\|\|C\|$ ([[def-bounded-linear-operator]], [[def-operator-norm]]).

## Proof

**Proof technique:** direct.

**Given:** AC, the self-adjoint operators and convergence at a fixed nonreal $z$ in the indicated mode.

1.1 If $H=\{0\}$, all operators, resolvents and bounded functions of them are the unique full-domain operator, so all assertions hold. Suppose $H\ne\{0\}$. For nonreal $w$ put $q_w(\lambda)=(w-\lambda)^{-1}$. Both $q_w$ and $\lambda q_w$ are bounded on the real line. The product-domain rule in [A1] shows that $q_w(S)$ maps $H$ into $D(S)$ and $(wI-S)q_w(S)=I$ on $H$, while $q_w(S)(wI-S)=I$ on $D(S)$. Thus $q_w(S)=R_S(w)$ with the convention of [A3]. The bounded calculus agrees with its unbounded truncation definition because the truncations are eventually the same bounded function. [A1, A2, A3, given]

2.1 Put $d=z-w$. The scalar identity $(1+dq_w)q_z=q_w=q_z(1+dq_w)$ and [A2] give these identities for each single operator $S$. Define $D_n(v)=R_{A_n}(v)-R_A(v)$ and $F=I+dR_A(w)$, which is independent of $n$. Expanding the product using the preceding identities yields $D_n(w)=(I+dR_{A_n}(w))D_n(z)F$: its two terms are $R_{A_n}(w)F$ and $(I+dR_{A_n}(w))R_A(w)$, whose mixed terms cancel. The left factor has norm at most $C=1+|d|/|\operatorname{Im}w|$. Consequently $\|D_n(w)x\|\le C\|D_n(z)Fx\|\to0$ in the strong case, since $Fx$ is fixed, and $\|D_n(w)\|\le C\|D_n(z)\|\|F\|\to0$ in the norm case. This proves parameter independence without taking a strong limit on a varying vector. [A2, A3, A5, step 1.1]

3.1 In particular convergence holds at $z$ and $\overline z$, and $r(A_n)=-R_{A_n}(z)$, $\overline r(A_n)=-R_{A_n}(\overline z)$, with the analogous formulas for $A$. Both sequences are uniformly bounded. If $B_n\to B$ and $C_n\to C$ strongly and $\sup_n\|B_n\|\le K$, then $\|(B_nC_n-BC)x\|\le K\|(C_n-C)x\|+\|(B_n-B)Cx\|\to0$. In the norm case the same inequality with operator norms proves convergence of products when the factors are uniformly bounded. Iteration and finite linear combinations, using [A2], therefore prove convergence for every polynomial in $r,\overline r$ with zero constant term. [A2, A3, A5, step 1.1, step 2.1]

4.1 Given $f\in C_0(\mathbb R)$ and $\delta>0$, choose one such polynomial $p$ with $\|f-p\|_\infty<\delta$ by [A4]. The bounded calculus gives $\|(f(A_n)-f(A))x\|\le2\delta\|x\|+\|(p(A_n)-p(A))x\|$. For fixed $p$ the last term tends to zero by step 3.1; since $\delta$ is arbitrary, strong convergence follows for each $x$ (including $x=0$ directly). The operator-norm inequality is $\|f(A_n)-f(A)\|\le2\delta+\|p(A_n)-p(A)\|$, proving the norm version as well. [A2, A4, A5, step 3.1]

5.1 In the norm case, if $f$ has a common finite limit $L$ at both ends, then $g=f-L\in C_0(\mathbb R)$. Unital linearity gives $f(A_n)-f(A)=g(A_n)-g(A)$, so step 4.1 proves the assertion. [A2, step 4.1]

5.2 For the strong case let $f$ be any bounded continuous function and set $M=\|f\|_\infty$. For integers $m\ge1$ define $\chi_m(\lambda)=\min(1,\max(0,m+1-|\lambda|))$. These are continuous, compactly supported, between zero and one, equal to one on $[-m,m]$, and converge pointwise to one. Thus $\|(I-\chi_m(A))x\|^2=\int|1-\chi_m|^2dE^A_x\to0$ by dominated convergence with majorant $1$, integrable against the finite measure of mass $\|x\|^2$. For fixed $m$, both $\chi_m$ and $f\chi_m$ belong to $C_0(\mathbb R)$, so their calculi converge strongly by step 4.1. [A2, A5, step 4.1]

6.1 Bounded multiplicativity and linearity give the exact four-term decomposition $f(A_n)-f(A)=f(A_n)(I-\chi_m(A))+f(A_n)(\chi_m(A)-\chi_m(A_n))+(f\chi_m)(A_n)-(f\chi_m)(A)+f(A)(\chi_m(A)-I)$. Applying it to $x$, its norm is at most $2M\|(I-\chi_m(A))x\|+M\|(\chi_m(A)-\chi_m(A_n))x\|+\|((f\chi_m)(A_n)-(f\chi_m)(A))x\|$. If $M=0$ the claim is immediate. Otherwise choose $m$ so that the first term is less than half a prescribed positive error, using step 5.2, and then $n$ so that the other two together are less than its other half. This proves strong convergence for bounded continuous $f$. [A2, A5, step 5.2]

7.1 Step 2.1 proves independence of every nonreal parameter, step 5.1 the norm conclusion and step 6.1 the strong conclusion. AC supplies the spectral and countable-choice calculus hypotheses; the cutoffs are explicit. The zero Hilbert space and zero function have been treated in steps 1.1 and 6.1; no limit at either infinity is required in the strong case. [A1, A2, A3, step 1.1, step 2.1, step 5.1, step 6.1] ∎



## Source notes

Teschl, Theorem 6.31 and its proof, pp.179-180, gives the polynomial approximation and four-term cutoff route, with Corollary 6.32 giving parameter independence. Here the latter is proved first using a resolvent-difference factorization with a fixed right factor. The library convention is $(zI-S)^{-1}$, so $r(S)=-R_S(z)$. No general continuity of adjoints for strongly convergent bounded operators is assumed.
