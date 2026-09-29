---
id: lem-trace-norm-of-hilbert-exterior-powers
kind: lemma
title: Trace-norm bound for exterior powers of trace-class operators
status: draft
origin: pipeline
deps:
  - def-countable-choice
  - def-hilbert-space
  - def-hilbert-exterior-power-and-induced-operator
  - def-trace-class-operator
  - def-absolute-value-and-singular-values-of-a-compact-operator
  - def-operator-norm
  - thm-singular-value-decomposition-for-compact-operators
  - def-hilbert-space-adjoint
  - thm-hilbert-adjoint-properties
  - def-self-adjoint-positive-unitary-and-normal-operator
  - lem-positive-square-root-of-a-compact-positive-operator
  - lem-finite-rank-operators-are-compact
  - thm-norm-limit-of-compact-operators-is-compact
  - def-square-summable-family-on-an-arbitrary-index-set
  - lem-finite-powers-of-countable-sets-are-countable
  - lem-subset-of-countable
  - thm-trace-is-absolutely-convergent-and-basis-independent
  - thm-parseval-equivalences-for-a-complete-orthonormal-family
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: "Kostenko, Trace Ideals with Applications, §3.4"
      url: "https://users.fmf.uni-lj.si/kostenko/teach/IdealsNotes.pdf"
    - title: "van Neerven, Functional Analysis, §14.5.a"
      url: "https://fa.ewi.tudelft.nl/~neerven/FA/JvN-Functional_Analysis.pdf"
    - title: "Dyatlov–Zworski, Mathematical Theory of Scattering Resonances, App. B §§B.5–B.6"
      url: "https://math.mit.edu/~dyatlov/res/res_final.pdf"
pipeline_run: frontier-36-complete
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$ be a
separable complex Hilbert space and let $T:H\to H$ be trace class
([[def-trace-class-operator]]). For every integer $n\ge0$, the induced operator
$(\Lambda^nT):\Lambda^nH\to\Lambda^nH$ is trace class. If $n\ge1$ and
$J_T$ indexes the positive singular values $(s_j(T))_{j\in J_T}$ with
multiplicity, then the positive singular values of $\Lambda^nT$, with
multiplicity, are
$$\left\{\prod_{k=1}^n s_{j_k}(T): (j_1,\ldots,j_n)\in J_T^n,\ j_1<\cdots<j_n\right\}.$$
Consequently,
$$\|\Lambda^nT\|_1=\sum_{j_1<\cdots<j_n}s_{j_1}(T)\cdots s_{j_n}(T)\le \frac{\|T\|_1^n}{n!}.$$
For $n=0$, $\Lambda^0T=I_{\mathbb C}$ is trace class and
$\operatorname{tr}(\Lambda^0T)=1$; its singular-value list is $1$ followed by
zeros.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a separable complex Hilbert space $H$, a
trace-class operator $T:H\to H$, and an integer $n\ge0$.

[A1] The wedge inner product is the Gram determinant
([[def-hilbert-exterior-power-and-induced-operator]]).

[A2] The exterior power is the range of the stated orthogonal
antisymmetrizing projection
([[def-hilbert-exterior-power-and-induced-operator]]).

[A3] The wedge is defined by applying that projection to a tensor; the induced
operator has the stated wedge action, is bounded, and is functorial
([[def-hilbert-exterior-power-and-induced-operator]]).

[A4] The SVD of $T$ supplies a finite or countably infinite positive index set
$J_T$, positive singular values in nonincreasing order, orthonormal families
$(e_j)$ and $(f_j)$, a Hilbert basis $(e_j)$ of $(\ker T)^\perp$, the expansion
$Tx=\sum_j s_j(T)\langle x,e_j\rangle f_j$, and a partial isometry $U$ with
$T=U|T|$ and $U^*U$ the orthogonal projection onto $(\ker T)^\perp$
([[thm-singular-value-decomposition-for-compact-operators]]).

[A5] Under $\mathrm{AC}_\omega$, every at-most-countable family of nonempty
sets has a choice function; the SVD is stated under this hypothesis and its
proof selects bases from the countable family of finite-dimensional singular
eigenspaces ([[def-countable-choice]],
[[thm-singular-value-decomposition-for-compact-operators]]).

[A6] Trace class means compactness and $\|T\|_1=\sum_j s_j(T)<\infty$;
$\|T\|=s_1(T)$ and the singular values tend to zero when the list is infinite
([[def-trace-class-operator]],
[[def-absolute-value-and-singular-values-of-a-compact-operator]]).

[A7] Under $\mathrm{AC}_\omega$, a norm limit of compact operators into a
Banach space is compact
([[thm-norm-limit-of-compact-operators-is-compact]]).

[A8] For a compact operator $S$, its positive singular values with
multiplicity are the positive eigenvalues of $|S|=(S^*S)^{1/2}$
([[def-absolute-value-and-singular-values-of-a-compact-operator]]).

[A9] A nonnegative family is summable when its finite subsums are bounded, and
its sum is the supremum of those finite subsums; the finite power of a
countable set and every subset of a countable set are countable
([[def-square-summable-family-on-an-arbitrary-index-set]],
[[lem-finite-powers-of-countable-sets-are-countable]],
[[lem-subset-of-countable]]).

[A10] For a trace-class operator, the basis-free trace equals the scalar sum of
any nuclear representation ([[thm-trace-is-absolutely-convergent-and-basis-independent]]).

[A11] The degree-zero exterior space is $\Lambda^0H=\mathbb C$
([[def-hilbert-exterior-power-and-induced-operator]]).

[A12] A complex Hilbert space is a complete inner-product space and hence a
Banach space for its induced norm ([[def-hilbert-space]]).

[A13] For a complete orthonormal family $(e_i)_{i\in I}$ in a Hilbert space,
Countable Choice and Parseval's theorem give
$\sum_{i\in I}|\langle x,e_i\rangle|^2=\|x\|^2$ for every $x$
([[thm-parseval-equivalences-for-a-complete-orthonormal-family]]).

[A14] A bounded finite-rank operator whose range has a finite ordered basis is
compact ([[lem-finite-rank-operators-are-compact]]).

[A15] The positive square root of a compact positive operator is unique, and
positivity means its quadratic form is nonnegative
([[lem-positive-square-root-of-a-compact-positive-operator]],
[[def-self-adjoint-positive-unitary-and-normal-operator]]).

[A16] The Hilbert adjoint is characterized uniquely by
$\langle Sx,y\rangle=\langle x,S^*y\rangle$; in particular
$I_{\mathbb C}^*=I_{\mathbb C}$ by this identity and uniqueness
([[def-hilbert-space-adjoint]], [[thm-hilbert-adjoint-properties]]).

**Choice accounting:** The exact hypothesis is $\mathrm{AC}_\omega$. It
supplies the countably many SVD eigenspace-basis choices [A4, A5] and is an
explicit hypothesis of Parseval [A13]; the trace-class/singular-value
definitions are stated under it [A6]; the adjoint and positive-square-root
suppliers assume it [A15, A16]; the norm-limit compactness theorem uses it [A7];
and the basis-free trace theorem used in degree zero assumes it [A10]. No
basis of all of $H$ is selected: the proof uses only the SVD basis of
$(\ker T)^\perp$. Separability is retained from the assigned claim, though
these arguments do not otherwise require it.

## Proof

**Proof technique:** direct.

**Given:** The data in the statement, the positive singular-value index set $J_T$, the SVD families $(e_j)$ and $(f_j)$, and $P:=U^*U$ from [A4].

1.1 If $n=0$, [A11] gives $\Lambda^0H=\mathbb C$ and [A3] gives $\Lambda^0T=I_{\mathbb C}$. Its range has the one-element ordered orthonormal basis $(1)$, so it is compact by [A14]. [A16] gives $I_{\mathbb C}^*=I_{\mathbb C}$; the identity is positive and its positive square root is itself, so [A15] gives $|I_{\mathbb C}|=I_{\mathbb C}$. Thus its only positive singular value is $1$, with the remaining sequence entries zero by [A8]. By [A6], $I_{\mathbb C}$ is trace class and has trace norm $1$. Now the rank-one nuclear representation $I_{\mathbb C}x=\langle x,1\rangle1$ has scalar trace sum $\langle1,1\rangle=1$, so [A10] gives $\operatorname{tr}(\Lambda^0T)=1$. [A3, A6, A8, A10, A11, A14, A15, A16]

1.2 Henceforth let $n\ge1$. If $J_T=\varnothing$, then $T=0$ by [A4], so $\Lambda^nT=0$; the singular-value product family is empty and the trace norm and bound are both zero. [A3, A4, A6]

1.3 Suppose $J_T\ne\varnothing$, put $K:=(\ker T)^\perp$, and define $\mathcal I_n:=\{(j_1,\ldots,j_n)\in J_T^n:j_1<\cdots<j_n\}$. For each $J=(j_1<\cdots<j_n)\in\mathcal I_n$ set $\eta_J:=e_{j_1}\wedge\cdots\wedge e_{j_n}$, $\theta_J:=f_{j_1}\wedge\cdots\wedge f_{j_n}$, and $\mu_J:=\prod_{k=1}^n s_{j_k}(T)$. The Gram determinant in [A1] makes both families orthonormal. [A1, A4, A5]

1.4 Let $F$ be any finite subset of $\mathcal I_n$ and choose $N$ at least every index appearing in $F$. Expanding $(\sum_{j=1}^{N}s_j(T))^n=\sum_{(i_1,\ldots,i_n)\in\{1,\ldots,N\}^n}s_{i_1}(T)\cdots s_{i_n}(T)$ shows it is at least $n!\sum_{J\in F}\mu_J$, because every increasing tuple in $F$ contributes its $n!$ distinct permutations and all other terms are nonnegative. The left side is at most $\|T\|_1^n$ by [A6]. Taking the supremum over finite $F$ in [A9] proves $\sum_{J\in\mathcal I_n}\mu_J\le\|T\|_1^n/n!$. [A6, A9]

2.1 From the SVD expansion, $(e_j)$ is total in $K$: if $x\in K$ is orthogonal to every $e_j$, then $Tx=0$, so $x\in K\cap\ker T=\{0\}$. Thus finite linear combinations of $(e_j)$ are dense in $K$. Functoriality and $T=TP$ give $S:=\Lambda^nT=S\Lambda^nP$; the Gram identity and self-adjointness of $P$ show $\Lambda^nP$ is self-adjoint, while functoriality and $P^2=P$ show it is idempotent. Its range is the closed span $M$ of the $\eta_J$: on dense decomposable wedges, $\Lambda^nP$ gives wedges of vectors in $K$, and approximating each such vector by finite linear combinations of $(e_j)$, then expanding by multilinearity, places that wedge in $M$. Continuity follows from the antisymmetrizer tensor construction in [A2]. Conversely, every $\eta_J$ is fixed by $\Lambda^nP$. Thus $\Lambda^nP$ is the orthogonal projection onto $M$ and $S$ vanishes on $M^\perp$. [A1, A2, A3, A4, A5, step 1.3]

3.1 On each basis wedge, $S\eta_J=\mu_J\theta_J$. For each $N$ let $S_Nx:=\sum_{J\in\mathcal I_n,\,j_n\le N}\mu_J\langle x,\eta_J\rangle\theta_J$; this is bounded and finite rank, hence compact by [A14]. By [step 2.1], both $S$ and $S_N$ vanish on $M^\perp$, and $(\eta_J)$ is a complete orthonormal family in $M$, its closed span. For $x\in M$, Parseval [A13] and orthonormality of $(\theta_J)$ give $\|(S-S_N)x\|^2=\sum_{J:\,j_n>N}\mu_J^2|\langle x,\eta_J\rangle|^2\le\bigl(s_{N+1}(T)s_1(T)^{n-1}\bigr)^2\|x\|^2$, because each omitted tuple has largest index greater than $N$. Decomposing a general vector into $M\oplus M^\perp$ therefore gives $\|S-S_N\|\le s_{N+1}(T)s_1(T)^{n-1}$ when $J_T$ is infinite. If $J_T$ is finite, $S_N=S$ for $N\ge |J_T|$. Therefore $S_N\to S$ in operator norm and [A7] makes $S$ compact. The target $\Lambda^nH$ is Banach by its Hilbert construction [A2, A12]. [A2, A3, A4, A5, A6, A7, A12, A13, A14, step 2.1]

4.1 Define $D\eta_J:=\mu_J\eta_J$ on the orthonormal basis of $M$ and set $D=0$ on $M^\perp$; since $0\le\mu_J\le s_1(T)^n=\|T\|^n$, this diagonal rule extends boundedly. Its finite diagonal truncations $D_N$ (retaining only tuples with all indices at most $N$) have finite rank and are compact by [A14], and converge in norm by the coefficient estimate of [step 3.1] with output vectors $\eta_J$ instead of $\theta_J$. Thus [A7] makes $D$ compact; its real nonnegative diagonal coefficients make it positive and self-adjoint. By [step 2.1, step 3.1] and the adjoint identity [A16], for $x\in\Lambda^nH$ the expansion of $Sx$ in the $\theta_J$ gives $\langle Sx,\theta_J\rangle=\mu_J\langle x,\eta_J\rangle=\langle x,\mu_J\eta_J\rangle$, hence $S^*\theta_J=\mu_J\eta_J$ and $S^*S\eta_J=\mu_J^2\eta_J=D^2\eta_J$; both operators vanish on $M^\perp$, so $S^*S=D^2$. Uniqueness of the compact positive square root in [A15] yields $D=|S|$ by the definition [A8]. [A1, A3, A4, A6, A7, A8, A14, A15, A16, step 2.1, step 3.1]

5.1 By [step 4.1], the positive eigenvalues of $|S|$, counted with multiplicity, are exactly the values $\mu_J$ over $J\in\mathcal I_n$: the $\eta_J$ form a basis of its support $M$ and $D$ is diagonal there. By the compact-operator singular-value definition [A8], these are precisely the positive singular values of $S=\Lambda^nT$; the remaining entries of its singular-value sequence are zero padding. [A4, A6, A8, step 4.1]

6.1 The tuple index set $\mathcal I_n$ is countable by [A9], and [step 5.1] identifies its nonnegative family, with multiplicities, with the singular values of $S$. Thus [step 1.4] says their singular-value series converges, so $S$ is trace class by [A6] and its trace norm equals that sum. This proves the equality and factorial bound in the statement. If $n$ exceeds the finite rank of $T$, $\mathcal I_n=\varnothing$ and $S=0$; if $n=1$, the tuples are single indices and the sum is exactly $\|T\|_1$. [A4, A6, A9, step 5.1, step 1.4] ∎
