---
id: ex-diagonal-schatten-class-criteria-on-ell-two
kind: example
title: Diagonal Schatten class criteria on ell two
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-absolute-value-and-singular-values-of-a-compact-operator, lem-positive-square-root-of-a-compact-positive-operator, def-hilbert-schmidt-operator, thm-hilbert-schmidt-norm-is-basis-independent, def-trace-class-operator, thm-trace-is-absolutely-convergent-and-basis-independent, def-trace-of-a-trace-class-operator, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, thm-norm-limit-of-compact-operators-is-compact, lem-finite-rank-operators-are-compact, def-compact-linear-operator, def-operator-norm, def-bounded-linear-operator, def-square-summable-family-on-an-arbitrary-index-set, def-real-and-complex-inner-product-space, def-hilbert-space, def-banach-space, def-metric-convergence, def-countable-choice, thm-reals-cauchy-complete, thm-complex-plane-is-complete, def-hilbert-space-adjoint]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §3.5–§3.6, diagonal operators and Schatten classes"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
---

## Example

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$\mathbb F\in\{\mathbb R,\mathbb C\}$, let $\ell^2:=\ell^2(\mathbb N,\mathbb F)$
with its standard inner product and norm
$\|a\|_2^2=\sum_{n\in\mathbb N}|a_n|^2$
([[def-square-summable-family-on-an-arbitrary-index-set]],
[[def-real-and-complex-inner-product-space]]), and let $u_n$ be the vector that
is $1$ at $n$ and $0$ elsewhere, the standard basis. Given a scalar
sequence $d=(d_n)_{n\in\mathbb N}$ define, on finite linear combinations,
$$T\Bigl(\sum_{n\in F}c_nu_n\Bigr):=\sum_{n\in F}c_nd_nu_n .$$
For claims 2–4, saying that $T$ has the indicated operator property includes
the existence of its bounded extension. Then:

1. $T$ extends to a bounded operator on $\ell^2$ if and only if
   $d\in\ell^\infty$, that is $\sup_n|d_n|<+\infty$, and then
   $\|T\|=\sup_n|d_n|$;
2. $T$ is compact if and only if $d_n\to0$;
3. $T$ is Hilbert–Schmidt relative to the standard basis
   ([[def-hilbert-schmidt-operator]]) if and only if
   $\sum_n|d_n|^2<+\infty$, and then
   $\|T\|_{HS}=\bigl(\sum_n|d_n|^2\bigr)^{1/2}$;
4. $T$ is trace class ([[def-trace-class-operator]]) if and only if
   $\sum_n|d_n|<+\infty$, and then $\|T\|_1=\sum_n|d_n|$ and
   $\operatorname{tr}(T)=\sum_nd_n$
   ([[def-trace-of-a-trace-class-operator]],
   [[thm-trace-is-absolutely-convergent-and-basis-independent]]).

## Facts & Assumptions

**Given:** Countable Choice, the inner-product space $\ell^2(\mathbb N,\mathbb F)$
with its explicit coordinate vectors $u_n$, and a scalar sequence $d$.

[A1] The square-summable-family definition constructs $\ell^2$ as an
inner-product space with $\langle a,b\rangle=\sum_na_n\overline{b_n}$,
$\|a\|_2^2=\sum_n|a_n|^2$, and nonnegative sums as suprema of finite subsums.
Finite total sums have arbitrarily small tails outside finite sets
([[def-square-summable-family-on-an-arbitrary-index-set]],
[[def-real-and-complex-inner-product-space]]). A Hilbert basis is an
orthonormal family with dense linear span
([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]).

[A2] A linear map is bounded if it has a finite norm bound, and its operator
norm is the unit-ball supremum ([[def-bounded-linear-operator]],
[[def-operator-norm]]). Hilbert/Banach completeness means every norm-Cauchy
sequence converges ([[def-hilbert-space]], [[def-banach-space]],
[[def-metric-convergence]]).

[A3] Bounded finite-rank operators are compact, and under Countable Choice
the operator-norm limit of compact operators into a Banach space is compact
([[lem-finite-rank-operators-are-compact]],
[[thm-norm-limit-of-compact-operators-is-compact]]). Compactness gives compact
closure of the image of the closed unit ball ([[def-compact-linear-operator]]).

[A4] For a compact operator, $|T|$ is the unique compact positive square root
of $T^*T$; its positive eigenvalues with multiplicity are the positive-labelled
singular values ([[def-absolute-value-and-singular-values-of-a-compact-operator]],
[[lem-positive-square-root-of-a-compact-positive-operator]]). The adjoint is
characterized by $\langle Tx,y\rangle=\langle x,T^*y\rangle$
([[def-hilbert-space-adjoint]]).

[A5] Relative to a supplied Hilbert basis $E$, Hilbert–Schmidt membership is
finiteness of $\sum_E\|Te\|^2$, with norm its square root and with basis
independence ([[def-hilbert-schmidt-operator]],
[[thm-hilbert-schmidt-norm-is-basis-independent]]).

[A6] Trace class means finite positive singular-value sum, which is its trace
norm; for a supplied Hilbert basis the absolutely convergent diagonal sum is
the basis-independent trace ([[def-trace-class-operator]],
[[def-trace-of-a-trace-class-operator]],
[[thm-trace-is-absolutely-convergent-and-basis-independent]]).

[A7] Real and complex scalar Cauchy sequences converge
([[thm-reals-cauchy-complete]], [[thm-complex-plane-is-complete]]).

## Verification

**Proof technique:** direct.

1.1 **Completeness and basis.** Let $(a^{(j)})$ be norm-Cauchy in $\ell^2$. It has a common norm bound $B$: its tail lies within distance $1$ of one term, and the finitely many earlier norms have a maximum. Each coordinate is Cauchy since $|a^{(j)}_n-a^{(k)}_n|\le\|a^{(j)}-a^{(k)}\|_2$, so [A7] defines its unique limit $a_n$, without any selection of alternative limits. For every finite $F$, passage to the limit in the finite sum gives $\sum_{n\in F}|a_n|^2\le B^2$, hence $a\in\ell^2$. Given $\varepsilon>0$, choose $N$ so that $\|a^{(j)}-a^{(k)}\|_2<\varepsilon/2$ for $j,k\ge N$. Letting $k$ tend to infinity in each finite subsum gives $\sum_{n\in F}|a^{(j)}_n-a_n|^2\le\varepsilon^2/4$ for every finite $F$ and $j\ge N$. Taking the supremum gives $\|a^{(j)}-a\|_2\le\varepsilon/2<\varepsilon$. Thus $\ell^2$ is Hilbert. The $u_n$ are orthonormal by their coordinates; finite truncations of any $a$ approximate it in norm by the small-tail assertion of [A1], so their span is dense and they are a Hilbert basis. [A1, A2, A7]

2.1 **Boundedness and norm.** If $M:=\sup_n|d_n|<\infty$, define $Ta=(d_na_n)_n$ for every $a\in\ell^2$. For every finite $F$, $\sum_F|d_na_n|^2\le M^2\|a\|_2^2$, so $Ta\in\ell^2$ and $\|Ta\|_2\le M\|a\|_2$. Coordinatewise operations show linearity, and this is the required extension. It is unique because two bounded operators agreeing on the dense finite span have difference zero by the norm bound and approximation in step 1.1. Testing $u_n$ gives $\|T\|\ge|d_n|$ for every $n$, hence $\|T\|=M$. Conversely any bounded extension bounds all $|d_n|=\|Tu_n\|_2$, so the sequence must be bounded. Equality with a supremum does not assert that the norm is attained at a unit vector. [step 1.1, A1, A2, algebra]

3.1 **Compactness.** If $d_n\to0$, then $d$ is bounded (a bounded tail and finitely many initial values suffice), so step 2.1 constructs $T$. Its truncation $T_N$ keeping coordinates $0,\ldots,N$ has finite rank and $\|T-T_N\|=\sup_{n>N}|d_n|\to0$ by that same norm formula. Thus [A3] and step 1.1 make $T$ compact. Conversely, if $T$ is compact but $d_n\not\to0$, some $\varepsilon>0$ has infinitely many indices $A$ with $|d_n|\ge\varepsilon$. For distinct $m,n\in A$, $\|Tu_m-Tu_n\|_2^2=|d_m|^2+|d_n|^2\ge2\varepsilon^2$. Cover the compact closure of $T$ of the unit ball by all balls of radius $\varepsilon/2$ and take a finite subcover. Each such ball contains at most one of these separated points, a contradiction. This uses no enumeration of A or additional sequential-compactness supplier. [step 1.1, step 2.1, A1, A3, algebra]

3.2 **Summability and Hilbert–Schmidt membership.** If $\sum_n|d_n|^p<\infty$ for $p=1$ or $p=2$, every term is bounded by that sum and hence $d$ is bounded. Small tails from [A1] show $d_n\to0$: for any $\varepsilon>0$ take a finite tail-control set for $\varepsilon^p$, and every coordinate outside it has $|d_n|<\varepsilon$. Past its largest index all coordinates are outside it. In particular when the square sum is finite step 2.1 supplies the bounded extension, and $\sum_n\|Tu_n\|_2^2=\sum_n|d_n|^2$. Conversely Hilbert–Schmidt membership requires that extension and the same finite sum. Formula [A5] gives the stated norm, using the actual standard basis from step 1.1 in both domain and target. [step 1.1, step 2.1, A1, A5]

4.1 **Absolute value only in the compact case.** Assume $T$ is compact. Step 3.1 gives $d_n\to0$. Step 2.1 constructs bounded diagonal operators with entries $\overline{d_n}$ and $|d_n|$, the latter denoted $D$. The coordinate pairing in [A1] gives $\langle Ta,b\rangle=\langle a,(\overline{d_n}b_n)_n\rangle$, so the first is $T^*$ by [A4]. The operator $D$ is compact by step 3.1, is positive since $\langle Da,a\rangle=\sum_n|d_n||a_n|^2\ge0$, is self-adjoint by the same coordinate pairing, and satisfies $D^2=T^*T$. Thus $D=|T|$ by [A4]. For $\lambda>0$, the equation $Da=\lambda a$ says $a_n=0$ wherever $|d_n|\ne\lambda$. There are only finitely many indices with $|d_n|=\lambda$, because $d_n\to0$. Thus that eigenspace has exactly their coordinate vectors as a finite basis. Repeated moduli contribute their full multiplicity, not multiplicity one. [step 2.1, step 3.1, A1, A4]

5.1 **Trace class and trace.** For compact $T$, step 4.1 identifies the positive singular-value multiset with the nonzero values $|d_n|$, counted with their indices. The finite-subset suprema of these nonnegative sums agree: each finite collection of occurrences on either side corresponds to a finite collection on the other side with the same summands. Finite initial segments are cofinal among finite index subsets, so the sums also agree with the ordinary nonnegative series. Consequently [A6] gives trace class exactly when $\sum_n|d_n|<\infty$, with $\|T\|_1$ equal to that sum. If instead that sum is given first, steps 3.2 and 3.1 establish boundedness and compactness before any singular data are used. Finally the standard-basis coefficients are $\langle Tu_n,u_n\rangle=d_n$, so their absolutely convergent sum equals $\operatorname{tr}(T)$ by [A6]. [step 1.1, step 3.1, step 3.2, step 4.1, A1, A6]

6.1 Claims 1–4 follow from steps 2.1, 3.1, 3.2 and 5.1 respectively. The sequence $d=0$ gives zero norms and trace; repeated entries and finite support are included by the multiplicity argument. The Hilbert basis is explicit and Countable Choice is used only as licensed by the compactness and singular/trace suppliers. [step 2.1, step 3.1, step 3.2, step 5.1] ∎
