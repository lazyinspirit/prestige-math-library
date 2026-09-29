---
id: lem-fredholm-determinant-spectral-product-from-power-traces
kind: lemma
title: Spectral product from traces of powers
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-hilbert-space
  - def-trace-class-operator
  - thm-trace-class-is-a-two-sided-banach-operator-ideal
  - def-operator-norm
  - def-bounded-linear-operator
  - thm-bounded-operator-space-is-banach
  - lem-composition-operator-norm-inequality
  - def-unital-banach-algebra
  - lem-neumann-series
  - def-spectrum-and-resolvent-of-a-bounded-operator
  - def-spectrum-and-resolvent-set-in-a-banach-algebra
  - thm-polynomial-spectral-mapping
  - thm-riesz-schauder-spectrum-of-a-compact-operator
  - def-algebraic-multiplicity-for-compact-operators
  - thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity
  - def-polynomial-evaluation-at-an-endomorphism
  - lem-coprime-kernel-decomposition
  - lem-generalized-eigenspace-trace-decomposition
  - lem-weyl-eigenvalue-singular-value-inequalities
  - thm-trace-is-absolutely-convergent-and-basis-independent
  - def-hilbert-exterior-power-and-induced-operator
  - lem-separable-trace-class-determinant-construction
  - lem-fredholm-determinant-logarithmic-derivative
  - lem-fredholm-determinant-zeros-and-algebraic-multiplicities
  - thm-complex-polynomials-and-rational-functions-are-holomorphic
  - thm-weierstrass-convergence-holomorphic-functions
  - thm-algebra-of-complex-derivatives
  - def-complex-domain
  - thm-zero-complex-derivative-on-a-domain-implies-constant
  - thm-identity-theorem-holomorphic-functions
justified_by: []
forward_refs: []
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
    - title: "Kostenko, Trace Ideals with Applications, §3.4.3–3.4.4, Theorem 3.4.7 proof, printed pp. 38–42 (PDF pp. 47–50)"
      url: "https://users.fmf.uni-lj.si/kostenko/teach/IdealsNotes.pdf"
    - title: "van Neerven, Functional Analysis, §14.5.a, Theorem 14.33 through Theorem 14.43, printed pp. 583–591 (PDF pp. 595–603)"
      url: "https://fa.ewi.tudelft.nl/~neerven/FA/JvN-Functional_Analysis.pdf"
    - title: "Dyatlov–Zworski, Mathematical Theory of Scattering Resonances, Appendix B §§B.5–B.6, Propositions B.30–B.31"
      url: "https://math.mit.edu/~dyatlov/res/res_final.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $H$ be a separable
complex Hilbert space ([[def-hilbert-space]]) and let $T:H\to H$ be trace class
([[def-trace-class-operator]]). List its nonzero eigenvalues
$\lambda_j(T)$, repeated according to algebraic multiplicity
([[def-algebraic-multiplicity-for-compact-operators]]). Then
$$D_T(z)=\prod_{j\ge1}(1+z\lambda_j(T))\qquad(z\in\mathbb C),$$
where $D_T$ is the locally constructed determinant of
[[lem-separable-trace-class-determinant-construction]]. The product converges
locally uniformly; if the nonzero eigenvalue list is empty, the product is one.

## Facts & Assumptions

**Given:** AC, a separable complex Hilbert space $H$, a trace-class operator $T:H\to H$, and the eigenvalue list supplied by the Weyl inequality below.

[A1] AC implies Dependent Choice and Countable Choice; the latter supplies the countable-choice hypotheses of the trace-class, determinant and trace constructions ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]).

[A2] A trace-class operator is compact and bounded ([[def-bounded-linear-operator]]); composing a trace-class operator with bounded operators preserves trace class and obeys the two-sided trace-norm ideal estimate ([[def-trace-class-operator]], [[thm-trace-class-is-a-two-sided-banach-operator-ideal]]).

[A3] If $H\ne\{0\}$ is a complex Hilbert space ([[def-hilbert-space]]), it is Banach; hence $\mathcal B(H)$ is Banach by [[thm-bounded-operator-space-is-banach]]. Composition is associative and its operator norm is submultiplicative ([[def-operator-norm]], [[lem-composition-operator-norm-inequality]]). The identity has norm $1$ and is nonzero, so this is a nonzero unital complex Banach algebra ([[def-unital-banach-algebra]]).

[A4] In a unital complex Banach algebra, $\|a\|<1$ implies that $1-a$ is invertible with inverse $\sum_{k\ge0}a^k$ ([[lem-neumann-series]]).

[A5] The spectrum of $T$ as an operator is the spectrum of the corresponding element of $\mathcal B(H)$; in a unital complex Banach algebra polynomial spectral mapping gives $\sigma(T^n)=\{\lambda^n:\lambda\in\sigma(T)\}$ ([[def-spectrum-and-resolvent-of-a-bounded-operator]], [[def-spectrum-and-resolvent-set-in-a-banach-algebra]], [[thm-polynomial-spectral-mapping]]).

[A6] Under AC, every nonzero spectral value of a compact operator is an eigenvalue with a finite-dimensional generalized eigenspace, and its generalized eigenspace stabilizes; its dimension is its algebraic multiplicity ([[thm-riesz-schauder-spectrum-of-a-compact-operator]], [[def-algebraic-multiplicity-for-compact-operators]]).

[A7] A degree-$n$ complex polynomial has $n$ roots counted with multiplicity; polynomial evaluation at an endomorphism preserves sums and products ([[thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity]], [[def-polynomial-evaluation-at-an-endomorphism]]).

[A8] If coprime polynomials $f,g$ satisfy $(fg)(S)=0$ for an endomorphism $S$, then its space is the direct sum $\ker f(S)\oplus\ker g(S)$ ([[lem-coprime-kernel-decomposition]]).

[A9] Under AC, for every trace-class $S$ on a separable complex Hilbert space, $$\operatorname{tr}(S)=\sum_{\mu\in\sigma(S)\setminus\{0\}} m_{\mathrm{alg}}(\mu;S)\mu,$$ and this eigenvalue sum is absolutely convergent ([[lem-generalized-eigenspace-trace-decomposition]]).

[A10] The nonzero eigenvalues of a compact trace-class $T$, repeated by algebraic multiplicity, can be listed as $\lambda_j(T)$ with $$\sum_{j\ge1}|\lambda_j(T)|\le\|T\|_1;$$ a finite list may be padded by zeros ([[lem-weyl-eigenvalue-singular-value-inequalities]]).

[A11] The trace is linear and $|\operatorname{tr}(S)|\le\|S\|_1$ for trace-class $S$ ([[thm-trace-is-absolutely-convergent-and-basis-independent]]).

[A12] For separable complex $H$, $D_T$ is entire; if $I+zT$ is boundedly invertible, then $$D_T'(z)=D_T(z)\operatorname{tr}\!\left(T(I+zT)^{-1}\right)$$ ([[lem-separable-trace-class-determinant-construction]], [[lem-fredholm-determinant-logarithmic-derivative]]).

[A13] Complex polynomials are entire; a locally uniform limit of holomorphic functions is holomorphic and the derivatives of the approximants converge locally uniformly to the derivative of the limit ([[thm-complex-polynomials-and-rational-functions-are-holomorphic]], [[thm-weierstrass-convergence-holomorphic-functions]]).

[A14] The complex quotient rule holds where the denominator is nonzero; a holomorphic function with identically zero derivative on a domain is constant; holomorphic functions on a domain that agree on a set with an interior accumulation point agree throughout the domain ([[thm-algebra-of-complex-derivatives]], [[def-complex-domain]], [[thm-zero-complex-derivative-on-a-domain-implies-constant]], [[thm-identity-theorem-holomorphic-functions]]).

[A15] The exterior construction has degree-zero operator $I_{\mathbb C}$ and for $n\ge1$ sends the induced operator of the zero map to zero ([[def-hilbert-exterior-power-and-induced-operator]]).

[A16] For the local determinant, $D_T(z)=0$ if and only if $I+zT$ is not boundedly invertible ([[lem-fredholm-determinant-zeros-and-algebraic-multiplicities]]).

**Source-route audit.** Kostenko, §3.4.4, Theorem 3.4.7, obtains the spectral product by combining the determinant zero criterion with Theorem 3.4.5, Hadamard's minimal-type product formula, and Weyl summability. Van Neerven, §14.5.a, Theorem 14.43, obtains the same product from Lemma 14.42, which invokes Hadamard factorization. Dyatlov–Zworski, Appendix B §B.6, states the product and trace formula and begins the determinant proof with its zero set and multiplicities. These complete source passages were read as comparison arguments; none is used as proof here. This item derives the equality from the trace-power identity and the local logarithmic derivatives. No Hadamard-factorization premise is used.

## Proof

**Proof technique:** direct.

**Given:** The data in the statement. Write $S:=\sum_{j\ge1}|\lambda_j(T)|$, which is finite by [A10].

1.1 If $H=\{0\}$ or $T=0$, then every positive-degree exterior power of $T$ is zero by [A15], so the determinant series gives $D_T\equiv1$. There are no nonzero eigenvalues, so the product is empty and equals one. We henceforth assume $H\ne\{0\}$ and $T\ne0$. [A12, A15]

1.2 By [A1], AC supplies the Dependent Choice and Countable Choice assumptions used below. By [A2], $T$ is compact and bounded. The algebra result [A3] applies to the nonzero complex Hilbert space $H$, so the Neumann series [A4] and polynomial spectral mapping [A5] apply in $\mathcal B(H)$. The operator spectrum and the algebra spectrum agree by [A5]. [A1, A2, A3, A4, A5]

1.3 For each nonzero eigenvalue $\lambda$ of $T$, an eigenvector $x\ne0$ satisfies $|\lambda|\|x\|=\|Tx\|\le\|T\|\|x\|$. Hence $|\lambda_j(T)|\le\|T\|$ for every $j$. Let $P_N(z):=\prod_{j=1}^{N}(1+z\lambda_j(T))$, with $P_0=1$. For $|z|\le R$ and $m<N$, $$\left|\prod_{j=m+1}^{N}(1+z\lambda_j(T))-1\right| \le\prod_{j=m+1}^{N}(1+R|\lambda_j(T)|)-1 \le e^{R\sum_{j>m}|\lambda_j(T)|}-1.$$ Also $|P_m(z)|\le e^{RS}$. Since the right-hand tail tends to zero, $(P_N)$ is uniformly Cauchy on every closed disk of finite radius. Its limit $\Phi(z):=\lim_{N\to\infty}P_N(z)$ is locally uniform, and [A13] makes $\Phi$ entire. For a finite eigenvalue list, zero padding makes $P_N$ eventually constant; for an empty list, every $P_N$ is $1$. [A10, A13, algebra]

1.4 Since $T\ne0$, $\|T\|>0$. Choose $r>0$ with $r\|T\|<1$ and $rS<1/2$ (the second condition is automatic when $S=0$). For $|z|<r$, every factor is nonzero, and for every finite $N$, $$|P_N(z)|\ge\prod_{j=1}^{N}(1-|z||\lambda_j(T)|) \ge1-|z|\sum_{j=1}^{N}|\lambda_j(T)|>1/2.$$ The finite-product inequality follows by induction from $\prod_j(1-a_j)\ge1-\sum_j a_j$ for $0\le a_j\le1$. Passing to the limit shows $|\Phi(z)|\ge1/2$, so $\Phi$ has no zeros on this disk. Also $\|zT\|<1$, so [A4] makes $I+zT$ invertible; [A16] then gives $D_T(z)\ne0$ there. [A3, A4, A10, A16]

1.5 For every integer $n\ge1$, [A2] shows inductively that $T^n$ is trace class and $$\|T^n\|_1\le\|T\|_1\|T\|^{n-1}.$$ In particular, $T^n$ is compact and the trace decomposition [A9] applies to $T^n$. [A2, A9]

1.6 Fix $n\ge1$ and $\mu\ne0$ in $\sigma(T^n)$. By [A5], $\mu=\lambda^n$ for some $\lambda\in\sigma(T)$. The roots $\alpha$ of $x^n-\mu$ are all distinct: if $\alpha^n=\mu\ne0$, then the derivative $n\alpha^{n-1}$ is nonzero. By [A7], $$x^n-\mu=\prod_{\alpha^n=\mu}(x-\alpha),\qquad (T^n-\mu I)^k=\prod_{\alpha^n=\mu}(T-\alpha I)^k.$$ The factors $(x-\alpha)^k$ are pairwise coprime. Put $V:=\ker\prod_{\alpha^n=\mu}(T-\alpha I)^k$. Since its defining polynomial commutes with $T$, $V$ is $T$-invariant. On $V$ that product annihilates $T|_V$. Apply [A8] first to one factor and the product of the rest, then repeat on the remaining product-kernel. A vector in any one factor-kernel is already in $V$, so this gives $$\ker(T^n-\mu I)^k =\bigoplus_{\alpha^n=\mu}\ker(T-\alpha I)^k.$$ Choose $k$ at least the finitely many stabilization exponents for $T^n$ at $\mu$ and for $T$ at the roots $\alpha$. By [A6], this proves $$G_\mu(T^n)=\bigoplus_{\alpha^n=\mu}G_\alpha(T),\qquad m_{\mathrm{alg}}(\mu;T^n) =\sum_{\substack{\alpha^n=\mu\\\alpha\in\sigma(T)}} m_{\mathrm{alg}}(\alpha;T).$$ Roots outside $\sigma(T)$ have zero generalized eigenspace and are omitted. This gives the collision multiplicities for every nonzero eigenvalue of $T^n$. [A5, A6, A7, A8]

2.1 Apply [A9] to $T^n$ and group by the finitely many roots of each $\mu$. The grouping is legitimate because $$\sum_{j\ge1}|\lambda_j(T)|^n \le\|T\|^{n-1}\sum_{j\ge1}|\lambda_j(T)|<\infty.$$ Using the multiplicity identity established above gives, for every $n\ge1$, $$\operatorname{tr}(T^n) =\sum_{\mu\in\sigma(T^n)\setminus\{0\}} m_{\mathrm{alg}}(\mu;T^n)\mu =\sum_{j\ge1}\lambda_j(T)^n.$$ If the nonzero eigenvalue list is empty, both sides are zero by [A9]. [A9, A10, step 1.6, algebra]

3.1 On $|z|<r$, the Neumann expansion from [A4] and the ideal estimate [A2] give convergence in trace norm: $$T(I+zT)^{-1}=\sum_{k\ge0}(-z)^kT^{k+1},\qquad \sum_{k\ge0}\|z^kT^{k+1}\|_1 \le\|T\|_1\sum_{k\ge0}(|z|\|T\|)^k<\infty.$$ Trace linearity and its trace-norm bound [A11] therefore permit taking traces term by term. Dividing the logarithmic-derivative identity [A12] by the nonvanishing determinant established above, and using the trace-power identity already established, yields $$\frac{D_T'(z)}{D_T(z)} =\sum_{k\ge0}(-1)^kz^k\operatorname{tr}(T^{k+1}) =\sum_{k\ge0}(-1)^kz^k\sum_{j\ge1}\lambda_j(T)^{k+1}.$$ [A2, A4, A11, A12, step 1.4, step 2.1]

4.1 For each finite $N$, the product rule [A13] gives on $|z|<r$ $$\frac{P_N'(z)}{P_N(z)} =\sum_{j=1}^{N}\frac{\lambda_j(T)}{1+z\lambda_j(T)}.$$ The denominators are bounded below by $1-r\|T\|>0$. On each closed disk $|z|\le\rho<r$, the right side converges uniformly as $N\to\infty$, because its tail is bounded by $(1-\rho\|T\|)^{-1}\sum_{j>N}|\lambda_j(T)|$. By [A13], $P_N\to\Phi$ and $P_N'\to\Phi'$ locally uniformly. Since $\Phi$ has no zeros on $|z|<r$, taking the limit gives $$\frac{\Phi'(z)}{\Phi(z)} =\sum_{j\ge1}\frac{\lambda_j(T)}{1+z\lambda_j(T)}.$$ For $|z|\le\rho<r$, expand each denominator geometrically. The double series is absolutely convergent because $$\sum_{j\ge1}\sum_{k\ge0}\rho^k|\lambda_j(T)|^{k+1} \le\frac{S}{1-\rho\|T\|}<\infty.$$ Thus it may be rearranged, and the trace-power identity gives $$\frac{\Phi'(z)}{\Phi(z)} =\sum_{k\ge0}(-1)^kz^k\sum_{j\ge1}\lambda_j(T)^{k+1} =\sum_{k\ge0}(-1)^kz^k\operatorname{tr}(T^{k+1}) =\frac{D_T'(z)}{D_T(z)}.$$ [A10, A13, step 1.4, step 2.1, step 3.1, algebra]

5.1 The disk $U=\{z:|z|<r\}$ is a complex domain. Since $\Phi$ is nonzero there, $Q:=D_T/\Phi$ is holomorphic on $U$. The quotient rule [A14] and the derivative equality above give $Q'=0$ on $U$. Hence [A14] makes $Q$ constant; as $D_T(0)=\Phi(0)=1$, $Q\equiv1$ on $U$. Thus $D_T=\Phi$ on a nonempty open disk. Both functions are entire by [A12] and the locally uniform product construction. The identity theorem [A14] extends their equality to all of $\mathbb C$, and the product convergence is locally uniform by construction. [A12, A14, step 1.3, step 1.4, step 4.1]

6.1 If there is exactly one nonzero eigenvalue in the list, the finite product is the single factor $1+z\lambda_1(T)$ and the product and trace-power calculations above still apply. In particular, on a one-dimensional $H$ with $T=tI$, the local determinant construction reduces to $\det_H(I+zT)=1+zt$, which is exactly the product when $t\ne0$, and is the empty product when $t=0$. The zero operator and zero-dimensional space were handled above; finite lists stabilize in the product construction; no finite-dimensionality or nonzero-eigenvalue assumption is made for the general case. All disks used above have positive radius and every estimate is on a compact disk strictly inside the chosen radius; global equality includes every complex endpoint. AC is the exact assumption [A1], inherited by the spectral and trace suppliers, with no additional choice made. The conclusion is an equality, not an iff statement, so both iff directions are inapplicable. [A1, A10, A12, step 1.1, step 1.3, step 5.1]

\qed
