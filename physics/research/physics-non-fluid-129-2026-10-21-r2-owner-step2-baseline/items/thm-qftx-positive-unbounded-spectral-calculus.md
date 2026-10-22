---
id: thm-qftx-positive-unbounded-spectral-calculus
kind: theorem
domain: mathematics
library: mathematics
title: Positive unbounded spectral calculus from a bounded resolvent
status: draft
origin: pipeline
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-projection-valued-measure
  - thm-bounded-borel-pvm-integral
  - thm-pvm-integral-is-a-star-homomorphism
  - thm-spectral-theorem-for-bounded-normal-operators-pvm-form
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  thm-bounded-borel-pvm-integral: mathematical-premise
  thm-pvm-integral-is-a-star-homomorphism: mathematical-premise
  thm-spectral-theorem-for-bounded-normal-operators-pvm-form: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "John Baez, Quantum Theory and Analysis, §5, The Spectral Theorem—Unbounded Case"
      url: "https://math.ucr.edu/home/baez/quantum_theory_and_analysis/Q.pdf"
      locator: "§5, PDF pp.14–20: the Cayley-transform reduction to bounded spectral calculus and the unbounded domain discussion."
    - title: "Princeton University MAT520 Functional Analysis Lecture Notes, §11.5"
      url: "https://web.math.princeton.edu/~js129/PDFs/teaching/MAT520_fall_2023/MAT520_Lecture_Notes.pdf"
      locator: "§11.5, Theorem 11.35 and Theorem 11.37, printed pp.135–136: multiplication-operator domains and the unbounded spectral representation."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $H\ne\{0\}$ be a complex Hilbert space and let $A:D(A)\subseteq H\to H$ be densely defined, self-adjoint, and nonnegative, meaning $\langle Au,u\rangle\ge0$ for every $u\in D(A)$. Here self-adjoint means equality with the Hilbert-space adjoint, including equality of domains. Then $I+A:D(A)\to H$ is bijective. Its inverse $B:=(I+A)^{-1}$ is a bounded positive self-adjoint injection with $\|B\|\le1$ and dense range $D(A)$. For a bounded operator, its spectrum $\sigma(B)$ is the set of complex $z$ for which $B-zI$ has no bounded two-sided inverse. Let $E_B$ be the regular projection-valued measure on the Borel subsets of $\sigma(B)$ satisfying $B=\int_{\sigma(B)}b\,dE_B(b)$. A projection-valued measure is a countably additive measure whose values are orthogonal projections and whose value on the whole space is $I$. Then $\sigma(B)\subseteq[0,1]$, $E_B(\{0\})=0$, and the push-forward under $\phi(b)=b^{-1}-1$ on $\sigma(B)\setminus\{0\}$ defines a projection-valued measure $E_A$ on the Borel subsets of $[0,\infty)$. It satisfies

$$A=\int_{[0,\infty)}\lambda\,dE_A(\lambda),\qquad D(A)=\left\{u\in H:\int_{[0,\infty)}\lambda^2\,d\langle E_A(\lambda)u,u\rangle<\infty\right\}.$$

For every bounded Borel function $f:[0,\infty)\to\mathbb C$, the integral $f(A):=\int f\,dE_A$ is bounded and satisfies $\|f(A)\|\le\sup_{\lambda\ge0}|f(\lambda)|$. The condition $E_B(\{0\})=0$ does not assert that $0\notin\sigma(B)$.

## Statement references

[Baez, *Quantum Theory and Analysis*, §5](https://math.ucr.edu/home/baez/quantum_theory_and_analysis/Q.pdf)

[Princeton MAT520, §11.5](https://web.math.princeton.edu/~js129/PDFs/teaching/MAT520_fall_2023/MAT520_Lecture_Notes.pdf)

## Facts & Assumptions

**Given:** The Axiom of Choice, $H\ne\{0\}$, and the densely defined nonnegative self-adjoint operator $A$ on $H$ from the Statement.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function.

[A2] [[def-countable-choice]]: every countable family of nonempty sets has a choice function; this is the countable-family instance of [A1].

[F1] [[thm-spectral-theorem-for-bounded-normal-operators-pvm-form]]: under the Axiom of Choice, every bounded normal operator on a nonzero complex Hilbert space has a unique regular spectral projection-valued measure $E$ on its spectrum with operator integral equal to that operator.

[F2] [[def-projection-valued-measure]]: a PVM assigns an orthogonal projection to each measurable set, is multiplicative on intersections, is normalized by $E(X)=I$, and is strongly countably additive.

[F3] [[thm-bounded-borel-pvm-integral]]: for a PVM $E$ and bounded Borel $h$, the integral $\Phi_E(h)$ is bounded, $\|\Phi_E(h)\|\le\|h\|_\infty$, and $\|\Phi_E(h)x\|^2=\int|h|^2\,dE_x$, where $E_x(S)=\langle E(S)x,x\rangle$.

[F4] [[thm-pvm-integral-is-a-star-homomorphism]]: the bounded PVM integral is multiplicative, unital, and preserves complex conjugation as the operator adjoint.

## Proof

**Proof technique:** direct.

**Given:** The hypotheses in [A1]–[A2], a nonzero complex Hilbert space $H$, and a densely defined nonnegative self-adjoint operator $A$.

1.1 For $u\in D(A)$, Cauchy–Schwarz and nonnegativity give $\|(I+A)u\|\,\|u\|\ge|\langle(I+A)u,u\rangle|=\|u\|^2+\langle Au,u\rangle\ge\|u\|^2$. Hence $I+A$ is injective and bounded below by $1$. It is closed because $A$ is closed: if $u_n\to u$ and $(I+A)u_n\to v$, then $Au_n\to v-u$, so $u\in D(A)$ and $(I+A)u=v$. The lower bound makes its range closed. A vector orthogonal to the range lies in $\ker(I+A)^*=\ker(I+A)$, which is zero by the same bound and self-adjointness; the range is therefore dense and hence all of $H$. Thus $B=(I+A)^{-1}$ exists everywhere, is bounded with norm at most $1$, is injective, and has range $D(A)$, which is dense. [given, A1, algebra]

2.1 If $x=(I+A)u$ and $y=(I+A)v$, then $\langle Bx,y\rangle=\langle u,(I+A)v\rangle=\langle(I+A)u,v\rangle=\langle x,By\rangle$, so $B$ is self-adjoint. Also $\langle Bx,x\rangle=\langle u,(I+A)u\rangle=\|u\|^2+\langle Au,u\rangle\ge0$, so $B$ is positive. For $z\notin[0,1]$, nonreal $z$ gives $\|(B-zI)w\|\ge|\operatorname{Im}z|\,\|w\|$ and the same lower bound for the adjoint, so the range is closed and dense; real $z<0$ is excluded by $\langle(B-zI)w,w\rangle\ge(-z)\|w\|^2$ and the same closed-range argument. For real $z>1$, the Neumann series $(zI-B)^{-1}=z^{-1}\sum_{n\ge0}(B/z)^n$ converges in operator norm, so $B-zI$ is invertible as well. Hence $\sigma(B)\subseteq[0,1]$. [given, step 1.1, algebra]

3.1 By [A1] and [F1], $B$ has its regular spectral PVM $E_B$ on $\sigma(B)$. If $x=E_B(\{0\})y$, then [F4] gives $Bx=\Phi_{E_B}(b\mathbf1_{\{0\}})y=0$, so $E_B(\{0\})H\subseteq\ker B$. Conversely, if $Bx=0$, [F3] gives $0=\|Bx\|^2=\int b^2\,dE_x(b)$. Since $\{b>0\}=\bigcup_{n\ge1}[1/n,1]$ and $b^2\ge n^{-2}$ on each such interval, $E_x([1/n,1])=0$ for every $n$. Strong countable additivity and $E_B(\sigma(B))=I$ then imply $x=E_B(\{0\})x$. Since $B$ is injective, $E_B(\{0\})=0$. This is a zero spectral projection; it does not remove $0$ from the operator spectrum. [A1, A2, F1, F2, F3, F4, step 2.1]

4.1 Define $\phi:(0,1]\to[0,\infty)$ by $\phi(b)=b^{-1}-1$. For a Borel set $S\subseteq[0,\infty)$ set $E_A(S):=E_B(\{b\in\sigma(B)\setminus\{0\}:\phi(b)\in S\})$. Inverse images preserve disjoint unions and intersections, so [F2] makes $E_A$ a PVM; its total value is $E_B(\sigma(B)\setminus\{0\})=I$ because $E_B(\{0\})=0$. [A2, F2, step 3.1, construct]

5.1 Let $\mu_x(S)=\langle E_B(S)x,x\rangle$. If $x=By$, PVM multiplicativity and the star-homomorphism property [F4] give $d\mu_x(b)=b^2d\mu_y(b)$; hence $\int\phi(b)^2\,d\mu_x(b)=\int_{(0,1]}(1-b)^2\,d\mu_y(b)\le\|y\|^2$, so $x$ belongs to the domain of $\int\lambda\,dE_A(\lambda)$. Conversely, if $\int\phi^2\,d\mu_x<\infty$, then $\int b^{-2}\,d\mu_x=\int(\phi+1)^2\,d\mu_x\le2\int\phi^2\,d\mu_x+2\|x\|^2<\infty$. The truncated integrals $y_N=\int_{[1/N,1]}b^{-1}\,dE_B(b)x$ are Cauchy by [F3] and converge to $y\in H$; multiplying by $B$ gives $By=E_B([1/N,1])x\to x$, since $E_B(\{0\})=0$. Hence the domain is exactly $\operatorname{Ran}B=D(A)$. For $x=By$, the truncated spectral integral of $\phi$ applied to $x$ converges to $\int(1-b)\,dE_B(b)y=(I-B)y=y-x=Ax$, proving the operator identity and the displayed domain formula. [A2, F3, F4, step 3.1, step 4.1, algebra]

6.1 If $f$ is bounded Borel on $[0,\infty)$, define $g(b)=f(\phi(b))$ for $b>0$ and $g(0)=0$. Then $g$ is bounded Borel on $\sigma(B)$, and the simple-function definition followed by bounded convergence gives $\int f\,dE_A=\Phi_{E_B}(g)$. By [F3], $\|f(A)\|\le\|g\|_\infty\le\sup_{\lambda\ge0}|f(\lambda)|$. This proves the claimed bounded Borel calculus estimate. [A2, F2, F3, step 4.1, algebra] ∎

