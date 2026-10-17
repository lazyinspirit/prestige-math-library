---
id: lem-orthogonality-of-characters-on-a-finite-cyclic-group
kind: lemma
title: "Orthogonality of the characters $x\\mapsto e^{2\\pi ikx/N}$ on $\\mathbb Z/N\\mathbb Z$"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
justified_by: []
aliases: []
deps: [def-canonical-natural,
       def-complex-exponential,
       def-complex-integer-powers,
       def-congruence-modulo-an-integer,
       def-finite-sum-in-a-commutative-monoid,
       def-group-power,
       def-integers-modulo-n,
       lem-congruence-is-an-equivalence-relation,
       lem-finite-sum-reindexing-and-fubini,
       lem-integer-multiples-agree-with-canonical-natural,
       lem-power-laws,
       thm-complex-exponential-addition-and-real-extension,
       thm-complex-numbers-form-a-field,
       thm-induction-principle,
       thm-kernel-and-fibres-of-complex-exponential]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: cases
sources:
  references:
    - title: "Michael E. Taylor, Fourier Analysis, Distributions, and Constant-Coefficient Linear PDE (author PDF)"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/fourier.pdf"
      locator: "§11, PDF pp. 86-88: the pairing $(\\omega^j,\\ell)\\mapsto\\omega^{j\\ell}$, the functions $e_j$ of (11.6), Proposition 11.2, and the geometric-sum orthogonality proof with the case $\\omega^m=1$ separated"
    - title: "MIT 18.310 lecture 23, The Finite Fourier Transform and the Fast Fourier Transform Algorithm (course page)"
      url: "https://math.mit.edu/~djk/18.310/18.310F04/23_finite_fourier.html"
      locator: "heading 3: root-of-unity computations and the coefficient-recovery sum"
    - title: "Manfred Einsiedler and Thomas Ward, Ergodic Theory with a View Towards Number Theory, Appendix C (course-hosted full text)"
      url: "https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf"
      locator: "Appendix C.3, printed p. 435: orthogonality of distinct characters on a compact abelian group, of which the finite cyclic case is the instance used here"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $N\ge1$ and let $k,\ell\in\mathbb Z$. Then

$$\sum_{x=0}^{N-1}e^{2\pi i(k-\ell)x/N}=\begin{cases}N,&k\equiv\ell\pmod N,\\\\ 0,&k\not\equiv\ell\pmod N.\end{cases}$$

At $N=1$ the congruence holds for all $k,\ell$ and the sum is $1$. The sum is the finite sum of the complex family $x\mapsto e^{2\pi i(k-\ell)x/N}$ over the von Neumann natural $N=\{0,\dots,N-1\}$ ([[def-finite-sum-in-a-commutative-monoid]]), and $N$ on the right is the natural number $N$ read in $\mathbb C$ as the additive multiple $N\cdot1_{\mathbb C}$, that is, the value at $N$ of the canonical embedding $\mathbb N\to\mathbb C$ ([[def-canonical-natural]], [[lem-integer-multiples-agree-with-canonical-natural]]).

## Facts & Assumptions

**Given:** A natural number $N\ge1$, integers $k,\ell$, the complex number $\omega:=e^{2\pi i(k-\ell)/N}$, the partial sums $S_n:=\sum_{x<n}\omega^x$ for $n\in\mathbb N$, and $S:=S_N$.

[F1] $k\equiv\ell\pmod N$ means $N\mid(k-\ell)$, that is, $k-\ell=Nm$ for some integer $m$; the relation is an equivalence relation and is defined for every integer modulus, including $N\ge1$ ([[def-congruence-modulo-an-integer]], [[lem-congruence-is-an-equivalence-relation]]).

[F2] For complex $z,w$: $\exp z=1$ exactly when $z\in2\pi i\mathbb Z$, and $\exp z=\exp w$ exactly when $z-w\in2\pi i\mathbb Z$ ([[thm-kernel-and-fibres-of-complex-exponential]], [[def-complex-exponential]]).

[L1] $\exp(z+w)=\exp z\,\exp w$ for all complex $z,w$ ([[thm-complex-exponential-addition-and-real-extension]]).

[L2] A finite sum in a commutative monoid is computed from any enumeration of its finite index set and does not depend on it; it is unchanged by reindexing along a bijection, additive over disjoint splittings, and subject to the finite Fubini rule ([[def-finite-sum-in-a-commutative-monoid]], [[lem-finite-sum-reindexing-and-fubini]]).

[L3] Powers in $\mathbb C$: $\omega^0=1$ and $\omega^{n+1}=\omega^n\omega$ for every $n\in\mathbb N$ ([[def-complex-integer-powers]]), and $\omega^{m+n}=\omega^m\omega^n$ for all naturals $m,n$ ([[lem-power-laws]], claim 1). Induction is available ([[thm-induction-principle]]).

[L4] Additive natural powers: in the additive group of $\mathbb C$, the element $N\cdot1_{\mathbb C}$ defined by $0\cdot1_{\mathbb C}=0$ and $\sigma(n)\cdot1_{\mathbb C}=n\cdot1_{\mathbb C}+1_{\mathbb C}$ equals the image of the natural number $N$ under the canonical embedding $\mathbb N\to\mathbb C$ ([[def-group-power]] read additively, [[lem-integer-multiples-agree-with-canonical-natural]]).

[L5] Field laws of $\mathbb C$: multiplication is associative and commutative and distributes over addition, every nonzero element has an inverse, and $1\ne0$ ([[thm-complex-numbers-form-a-field]]).

## Proof

**Proof technique:** cases.

1.1 The summands are the powers of $\omega$: $e^{2\pi i(k-\ell)x/N}=\omega^{x}$ for every $x\in\mathbb N$. Indeed, for $x=0$ both sides are $1$ by [F2] (as $0\in2\pi i\mathbb Z$) and [L3]; and if the identity holds at $x$, then the addition law [L1] and the power recursion [L3] give $e^{2\pi i(k-\ell)(x+1)/N}=e^{2\pi i(k-\ell)x/N}e^{2\pi i(k-\ell)/N}=\omega^{x}\omega=\omega^{x+1}$, so induction [L3] proves it for every $x$. Consequently $S=\sum_{x<N}\omega^{x}$ by [L2], since the finite sum depends only on the listed values. [F2, L1, L2, L3, given]

1.2 The geometric identity: $(1-\omega)S_n=1-\omega^{n}$ for every $n\in\mathbb N$. For $n=0$ the sum $S_0$ is empty, hence $0$ by [L2], and $1-\omega^{0}=0$ by [L3]. If the identity holds at $n$, then $S_{n+1}=S_n+\omega^{n}$ by the recursion clause of [L2], so distributivity [L5] gives $(1-\omega)S_{n+1}=(1-\omega)S_n+(1-\omega)\omega^{n}=(1-\omega^{n})+(\omega^{n}-\omega^{n}\omega)=1-\omega^{n+1}$, using the hypothesis, distributivity, associativity and the power recursion [L3]. Induction [L3] gives the identity at every $n$. [L2, L3, L5, given]

2.1 The two alternatives for $\omega$: $\omega=1$ exactly when $k\equiv\ell\pmod N$, and $\omega^{N}=1$ always. For the first, [F2] gives $\omega=1\iff 2\pi i(k-\ell)/N\in2\pi i\mathbb Z\iff(k-\ell)/N\in\mathbb Z\iff N\mid(k-\ell)\iff k\equiv\ell\pmod N$ by [F1]; for the second, $e^{2\pi i(k-\ell)}=1$ by [F2] because $2\pi i(k-\ell)\in2\pi i\mathbb Z$, and step 1.1 identifies $e^{2\pi i(k-\ell)}$ with $\omega^{N}$. [F1, F2, step 1.1]

2.2 Case $k\equiv\ell\pmod N$: then $k-\ell=Nm$ for some integer $m$ by [F1], so every exponent $2\pi i(k-\ell)x/N=2\pi imx$ lies in $2\pi i\mathbb Z$ and every summand $\omega^{x}$ equals $1$ by step 1.1 and [F2]. The sum therefore consists of $N$ copies of $1_{\mathbb C}$, and the recursion clause of [L2] computes it as the additive natural power $N\cdot1_{\mathbb C}$ of [L4]. In particular at $N=1$, where every pair $k,\ell$ is congruent, the sum is the single term $1$, the image of the natural number $1$ under the canonical embedding. [assume-case congruent, F1, F2, step 1.1, L2, L4, given]

3.1 Case $k\not\equiv\ell\pmod N$: then $\omega\ne1$ and $\omega^{N}=1$ by step 2.1, so the geometric identity of step 1.2 at $n=N$ gives $(1-\omega)S=1-\omega^{N}=0$. Since $1-\omega\ne0$, the field laws [L5] give $S=(1-\omega)^{-1}\cdot0=0$. [assume-case noncongruent, step 1.2, step 2.1, L5]

4.1 The alternatives of [F1] are exhaustive and mutually exclusive, so steps 2.2 and 3.1 cover every pair $(k,\ell)$: the sum equals the natural number $N$ read in $\mathbb C$ in the congruent case and $0$ otherwise, which is the stated formula. [cases, F1, step 2.2, step 3.1] ∎

## Remarks

- **The case $\omega^{m}=1$ is exactly the case split used by Taylor.** In Taylor's proof of Proposition 11.2 the sum $S_m$ of the powers of $\omega$ satisfies $S_m=\omega^{m}S_m$, so it vanishes whenever $\omega^{m}\ne1$; the coincident case $\omega^{m}=1$ is separated first. Here the split is made on $k\equiv\ell\pmod N$ and the noncoincident case is settled by the geometric identity, which is the same computation in explicit finite-sum form.

- **No dependence on the representation-theoretic orthogonality.** The published orthogonality lemma for finite abelian groups and the real-variable factorisation lemma for $b^{n}-a^{n}$ are stated outside the complex-sum setting used here, so this lemma proves the complex geometric identity directly from the recursion instead of importing them. They are independent cross-checks, not prerequisites.
