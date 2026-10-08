---
id: def-limits-of-discrete-series-for-sl2-r
kind: definition
title: The two limits of discrete series
status: draft
origin: pipeline
deps:
  - def-normalized-principal-series-i-epsilon-nu
  - thm-compact-picture-of-the-sl2-principal-series
  - lem-k-type-decomposition-of-the-sl2-principal-series
  - thm-unitarity-of-the-sl2-unitary-principal-series
  - lem-highest-and-lowest-weight-submodules-at-principal-series-reducibility-points
  - def-holomorphic-and-antiholomorphic-discrete-series-models
  - def-axiom-of-choice
dependency_level: 8
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "AC is inherited through the normalized principal-series and compact-picture suppliers. The endpoint norm-divergence calculation and the K-type decomposition use no further choice."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Matt Kerr, Notes on the Representation Theory of SL2(R) (CBMS workshop writeup)"
      url: "https://www.math.wustl.edu/~matkerr/sl2notes.pdf"
      locator: "§2, Example 2.6, printed pp. 10–11 (the odd compact-picture module splits into two limits)"
    - title: "Emmanuel Kowalski, An Introduction to the Representation Theory of Groups (AMS GSM 155; author's PDF)"
      url: "https://people.math.ethz.ch/~kowalski/representation-theory.pdf"
      locator: "§7.4, Lemma 7.4.10 and its proof, printed pp. 299–300 (closed invariant positive- and negative-weight summands)"
    - title: "Pavel Etingof, Representations of Lie Groups, MIT 18.757 Lecture 9"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec09.pdf"
      locator: "§9.1, printed pp. 48–49, the isomorphism P^−(0) ≅ M^+_{−1} ⊕ M^−_1"
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). In the compact picture of the normalized principal series ([[def-normalized-principal-series-i-epsilon-nu]], [[thm-compact-picture-of-the-sl2-principal-series]]), let $I_{1,0}$ act on $L^2_1(K)=\{f\in L^2(K):f(k_{\theta+\pi})=-f(k_\theta)\}$. Its K-finite vectors are $\bigoplus_{m\text{ odd}}\mathbb C f_m$ ([[lem-k-type-decomposition-of-the-sl2-principal-series]]). Define
$$M^-_1:=\bigoplus_{j\ge0}\mathbb C f_{1+2j},\qquad M^+_{-1}:=\bigoplus_{j\ge0}\mathbb C f_{-1-2j},$$
and let
$$D^-_1:=\overline{M^+_{-1}},\qquad D^+_1:=\overline{M^-_1}$$
in $L^2_1(K)$. The two limits of discrete series are the resulting closed summands: $D^-_1\oplus D^+_1=L^2_1(K)$ orthogonally, with K-types $e^{-i(1+2j)\theta}$ and $e^{i(1+2j)\theta}$ respectively, each with multiplicity one. The K-finite modules are $(\mathfrak g,K)$-submodules, with $L_{E_-}f_1=L_{E_+}f_{-1}=0$; the Casimir $\Omega$ acts on these algebraic modules by $-\tfrac18$ ([[lem-highest-and-lowest-weight-submodules-at-principal-series-reducibility-points]](c)).

For every $n\ge2$, the discrete-series modules $M^+_{-n}$ and $M^-_n$ at $\nu=n-1$ are the algebraic K-finite spans in the holomorphic and antiholomorphic models $D^-_n,D^+_n$ ([[def-holomorphic-and-antiholomorphic-discrete-series-models]]). At the formal endpoint $n=1$, the candidate $q_1(z)=(z+i)^{-1}$ has infinite weighted norm $\int_{\mathfrak H}|q_1(z)|^2y^{-1}dx\,dy$, so this endpoint is realized inside $I_{1,0}$ and not by a finite-norm holomorphic model.

## Facts & Assumptions

**Given:** AC; the compact picture of $I_{1,0}$; the odd K-type basis and its density; and the exceptional-parameter module at $\varepsilon=1,\nu=0$.

[F1] At $\nu=0$, the compact picture identifies $I_{1,0}$ with $L^2_1(K)$ and gives its group action ([[def-normalized-principal-series-i-epsilon-nu]], [[thm-compact-picture-of-the-sl2-principal-series]]).

[F2] The odd functions $f_m(k_\theta)=e^{im\theta}$ form an orthonormal basis of $L^2_1(K)$; their algebraic span is the K-finite subspace and is dense ([[lem-k-type-decomposition-of-the-sl2-principal-series]]).

[F3] At $\varepsilon=1,\nu=0$, the positive and negative odd tails are irreducible lowest- and highest-weight $(\mathfrak g,K)$-submodules, have the displayed vanishing ladder coefficients, and the Casimir is $-\tfrac18$ ([[lem-highest-and-lowest-weight-submodules-at-principal-series-reducibility-points]](c)).

[F4] $I_{1,0}$ is a strongly continuous unitary representation whose two limit summands give its direct-sum decomposition ([[thm-unitarity-of-the-sl2-unitary-principal-series]]). Its closed-summand assertion is established by the supplier’s disk-coordinate invariance and K-finite irreducibility argument.

[F5] For $n\ge2$, the discrete-series algebraic spans $V_n^-,V_n^+$ identify with $M^+_{-n},M^-_n$ at $\nu=n-1$ ([[def-holomorphic-and-antiholomorphic-discrete-series-models]]).

[A1] AC is inherited through the principal-series and compact-picture constructions ([[def-axiom-of-choice]]).



**Given:** The assumptions and notation in the Statement.

## Proof

**Proof technique:** direct.

1.1 By [F1], $I_{1,0}$ is realized on $L^2_1(K)$; [F2] identifies its K-finite vectors with all finite sums of the odd characters and makes their span dense. By [F3], the two tails $M^-_1$ and $M^+_{-1}$ are complementary $(\mathfrak g,K)$-submodules of this K-finite space, and the indicated extremal ladder operators vanish. [F1, F2, F3, algebra, A1]

2.1 Every character line in the positive tail is orthogonal to every line in the negative tail, because the odd characters are distinct and [F2] makes them an orthonormal basis. Thus the two closures are orthogonal; their sum is all of $L^2_1(K)$ because the algebraic tails together contain its dense K-finite span. [F2, step 1.1]

2.2 By [F3], $\Omega$ acts on the algebraic K-finite modules $M^-_1,M^+_{-1}$ by $-\tfrac18$. By [F5], for every $n\ge2$ the analogous extremal modules at $\nu=n-1$ are exactly the algebraic K-finite spans in $D^-_n,D^+_n$. [F3, F5, step 1.1]

3.1 The group invariance and unitary representation structure of the two closed summands follow from [F4]: its disk-coordinate action preserves each closed odd Fourier tail, and the restrictions are strongly continuous and unitary. The tails there are exactly the closures in step 2.1, so this supplies the claimed representation structure. [F1, F4, step 2.1]

4.1 For $z=x+iy$ with $0<y<1$ and $|x|<1$, one has $|z+i|^2=x^2+(y+1)^2\le5$. Hence $|q_1(z)|^2y^{-1}\ge(5y)^{-1}$ on this rectangle, and $\int_0^1\int_{-1}^1(5y)^{-1}dx\,dy=+\infty$. Thus the formal $n=1$ holomorphic candidate is not in the weighted finite-norm space, while the odd principal-series summands remain defined in $L^2_1(K)$. [algebra] ∎
