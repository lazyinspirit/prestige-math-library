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
  - thm-cauchy-schwarz-in-an-inner-product-space
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  thm-bounded-borel-pvm-integral: mathematical-premise
  thm-pvm-integral-is-a-star-homomorphism: mathematical-premise
  thm-spectral-theorem-for-bounded-normal-operators-pvm-form: mathematical-premise
  thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
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

Assume the Axiom of Choice. Let $H\ne\{0\}$ be a complex Hilbert space, with inner product linear in its first variable, and let $A:D(A)\subseteq H\to H$ be densely defined, self-adjoint, and nonnegative, meaning $\langle Au,u\rangle\ge0$ for every $u\in D(A)$. Here self-adjoint means equality with the Hilbert-space adjoint, including equality of domains. A projection-valued measure (PVM) on a measurable space $(X,\Sigma)$ is a map $E:\Sigma\to\mathcal B(H)$ such that every $E(S)$ is a bounded orthogonal projection ($E(S)^2=E(S)=E(S)^*$), $E(\varnothing)=0$, $E(X)=I$, $E(S\cap T)=E(S)E(T)$, and $E(\bigcup_n S_n)u=\sum_nE(S_n)u$ in norm for each disjoint sequence $(S_n)$ and each $u\in H$. On a locally compact Hausdorff Borel space, such a PVM is regular when each finite scalar measure $\mu_u(S):=\langle E(S)u,u\rangle$ is inner regular on Borel sets and outer regular by open supersets. Then $I+A:D(A)\to H$ is bijective. Its inverse $B:=(I+A)^{-1}$ is a bounded positive (meaning $\langle Bx,x\rangle\ge0$ for all $x\in H$) self-adjoint injection with $\|B\|\le1$ and dense range $D(A)$. For a bounded operator, its spectrum $\sigma(B)$ is the set of complex $z$ for which $B-zI$ has no bounded two-sided inverse. Let $E_B$ be the regular spectral PVM on the Borel subsets of the nonempty compact set $\sigma(B)$ satisfying $B=\int_{\sigma(B)}b\,dE_B(b)$. Then $\sigma(B)\subseteq[0,1]$ and $E_B(\{0\})=0$. Define $\phi(b)=b^{-1}-1$ for $b\in\sigma(B)\setminus\{0\}$ and, for every Borel $S\subseteq[0,\infty)$, define

$$E_A(S):=E_B(\{b\in\sigma(B)\setminus\{0\}:\phi(b)\in S\}).$$

This is a PVM on the Borel subsets of $[0,\infty)$. For each $u\in H$ put $\mu_u(S):=\langle E_A(S)u,u\rangle$. The unbounded integral $\int_{[0,\infty)}\lambda\,dE_A(\lambda)$ denotes the operator $T_A$ with domain

$$D(T_A):=\left\{u\in H:\int_{[0,\infty)}\lambda^2\,d\mu_u(\lambda)<\infty\right\}$$

and action

$$T_Au:=\lim_{N\to\infty}\Phi_{E_A}(\lambda\mathbf1_{[0,N]})(u),$$

where $\Phi_{E_A}(g)$ is the bounded Borel PVM integral of $g$. Then $A=T_A$ and hence

$$A=\int_{[0,\infty)}\lambda\,dE_A(\lambda),\qquad D(A)=\left\{u\in H:\int_{[0,\infty)}\lambda^2\,d\langle E_A(\lambda)u,u\rangle<\infty\right\}.$$

For every bounded Borel function $f:[0,\infty)\to\mathbb C$, $f(A):=\Phi_{E_A}(f)$ is bounded, satisfies $\|f(A)\|\le\sup_{\lambda\ge0}|f(\lambda)|$, and obeys $\|f(A)u\|^2=\int|f|^2\,d\mu_u$. The condition $E_B(\{0\})=0$ does not assert that $0\notin\sigma(B)$.

## Statement references

[Baez, *Quantum Theory and Analysis*, §5](https://math.ucr.edu/home/baez/quantum_theory_and_analysis/Q.pdf)

[Princeton MAT520, §11.5](https://web.math.princeton.edu/~js129/PDFs/teaching/MAT520_fall_2023/MAT520_Lecture_Notes.pdf)

## Facts & Assumptions

**Given:** The Axiom of Choice, $H\ne\{0\}$, and the densely defined nonnegative self-adjoint operator $A$ on $H$ from the Statement.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function.

[A2] [[def-countable-choice]]: every countable family of nonempty sets has a choice function; this is the countable-family instance of [A1].

[F1] [[thm-spectral-theorem-for-bounded-normal-operators-pvm-form]]: under the Axiom of Choice, every bounded normal operator on a nonzero complex Hilbert space has a unique regular spectral projection-valued measure $E$ on its spectrum with operator integral equal to that operator.

[F2] [[def-projection-valued-measure]]: a PVM assigns an orthogonal projection to each measurable set, is multiplicative on intersections, is normalized by $E(X)=I$, and is strongly countably additive; regularity means each finite scalar measure $E_u(S)=\langle E(S)u,u\rangle$ is inner regular on Borel sets and outer regular by open supersets.

[F3] [[thm-bounded-borel-pvm-integral]]: for a PVM $E$ and bounded Borel $h$, the integral $\Phi_E(h)$ is bounded, $\|\Phi_E(h)\|\le\|h\|_\infty$, and $\|\Phi_E(h)x\|^2=\int|h|^2\,dE_x$, where $E_x(S)=\langle E(S)x,x\rangle$.

[F4] [[thm-pvm-integral-is-a-star-homomorphism]]: the bounded PVM integral is multiplicative, unital, and preserves complex conjugation as the operator adjoint.

[F5] [[thm-cauchy-schwarz-in-an-inner-product-space]]: $|\langle x,y\rangle|\le\|x\|\,\|y\|$ for vectors in a complex Hilbert space.

## Proof

**Proof technique:** direct.

**Given:** The hypotheses in [A1]–[A2], a nonzero complex Hilbert space $H$, and a densely defined nonnegative self-adjoint operator $A$.

1.1 For $u\in D(A)$, [F5] and nonnegativity give $\|(I+A)u\|\,\|u\|\ge|\langle(I+A)u,u\rangle|=\|u\|^2+\langle Au,u\rangle\ge\|u\|^2$. Hence $I+A$ is injective and bounded below by $1$. To prove $A$ is closed, suppose $u_n\in D(A)$, $u_n\to u$, and $Au_n\to v$. For every $w\in D(A)$, self-adjointness gives $\langle Aw,u\rangle=\lim_n\langle Aw,u_n\rangle=\lim_n\langle w,Au_n\rangle=\langle w,v\rangle$; by the defining criterion for the adjoint, $u\in D(A^*)$ and $A^*u=v$. Self-adjointness, including equality of domains, yields $u\in D(A)$ and $Au=v$. Thus $A$ is closed. For $w\in D((I+A)^*)$, subtracting the identity term from the defining adjoint relation gives $w\in D(A^*)$ and $(I+A)^*w=w+A^*w$. Conversely, if $w\in D(A^*)$, then $\langle(I+A)u,w\rangle=\langle u,w+A^*w\rangle$ for every $u\in D(A)$, so $w\in D((I+A)^*)$ with $(I+A)^*w=w+A^*w$. Thus $(I+A)^*=I+A^*=I+A$ with domain $D(A)$, so $I+A$ is self-adjoint. If $u_n\in D(A)$ and $(I+A)u_n$ converges, the lower bound makes $(u_n)$ Cauchy; closedness then puts the limit in the range, so the range of $I+A$ is closed. A vector orthogonal to that range lies in $\ker(I+A)^*=\ker(I+A)$, which is zero by the same lower bound; the range is therefore dense and hence all of $H$. Thus $B=(I+A)^{-1}$ exists everywhere, is bounded with norm at most $1$, is injective, and has range $D(A)$, which is dense. [given, A1, F5, algebra]

2.1 If $x=(I+A)u$ and $y=(I+A)v$, then $\langle Bx,y\rangle=\langle u,(I+A)v\rangle=\langle(I+A)u,v\rangle=\langle x,By\rangle$, so $B$ is self-adjoint. Also $\langle Bx,x\rangle=\langle u,(I+A)u\rangle=\|u\|^2+\langle Au,u\rangle\ge0$, so $B$ is positive. For nonreal $z$, Cauchy–Schwarz [F5] and self-adjointness give $\|(B-zI)w\|\ge|\operatorname{Im}z|\,\|w\|$ and the same lower bound for its adjoint, so its range is closed and dense. For real $z<0$, positivity and [F5] give $\|(B-zI)w\|\ge(-z)\|w\|$, again giving closed and dense range. For real $z>1$, the Neumann series $(zI-B)^{-1}=z^{-1}\sum_{n\ge0}(B/z)^n$ converges in operator norm, so $B-zI$ is invertible as well. Hence $\sigma(B)\subseteq[0,1]$. [given, step 1.1, F5, algebra]

3.1 By [A1] and [F1], $B$ has its regular spectral PVM $E_B$ on $\sigma(B)$. If $x=E_B(\{0\})y$, then [F4] gives $Bx=\Phi_{E_B}(b\mathbf1_{\{0\}})y=0$, so $E_B(\{0\})H\subseteq\ker B$. Conversely, if $Bx=0$, [F3] gives $0=\|Bx\|^2=\int b^2\,dE_x(b)$. Since $\{b>0\}=\bigcup_{n\ge1}[1/n,1]$ and $b^2\ge n^{-2}$ on each such interval, $E_x([1/n,1])=0$ for every $n$. Strong countable additivity and $E_B(\sigma(B))=I$ then imply $x=E_B(\{0\})x$. Since $B$ is injective, $E_B(\{0\})=0$. This is a zero spectral projection; it does not remove $0$ from the operator spectrum. [A1, A2, F1, F2, F3, F4, step 2.1]

4.1 The map $\phi(b)=b^{-1}-1$ on $\sigma(B)\setminus\{0\}$ is Borel. For a Borel set $S\subseteq[0,\infty)$ set $E_A(S):=E_B(\{b\in\sigma(B)\setminus\{0\}:\phi(b)\in S\})$. Inverse images preserve disjoint unions and intersections, so [F2] makes $E_A$ a PVM; its total value is $E_B(\sigma(B)\setminus\{0\})=I$ because $E_B(\{0\})=0$. The defining identity on indicator functions, extended first to simple functions and then by uniform approximation, gives $\Phi_{E_A}(f)=\Phi_{E_B}(g)$ for every bounded Borel $f$ on $[0,\infty)$, where $g(b)=f(\phi(b))$ for $b>0$ and $g(0)=0$. [A2, F2, F4, step 3.1, construct]

5.1 Write $\mu_x^B(S)=\langle E_B(S)x,x\rangle$. From the definition in step 4.1, $\mu_x(S)=\mu_x^B(\{b>0:\phi(b)\in S\})$, so $\int\lambda^2\,d\mu_x(\lambda)=\int\phi(b)^2\,d\mu_x^B(b)$. If $x=By$, multiplicativity and the star-homomorphism identity [F4] give $d\mu_x^B(b)=b^2d\mu_y^B(b)$; hence $\int\phi(b)^2\,d\mu_x^B(b)=\int_{(0,1]}(1-b)^2\,d\mu_y^B(b)\le\|y\|^2$. Thus $x$ lies in the domain defining $T_A$. Conversely, if $\int\phi^2\,d\mu_x^B<\infty$, then $\int_{(0,1]}b^{-2}\,d\mu_x^B=\int(\phi+1)^2\,d\mu_x^B\le2\int\phi^2\,d\mu_x^B+2\|x\|^2<\infty$. The bounded truncations $y_N:=\Phi_{E_B}(b^{-1}\mathbf1_{[1/N,1]})(x)$ are Cauchy by the quadratic identity [F3], since their squared tails are tails of this finite integral, and converge to some $y\in H$. Multiplying by $B$ gives $By_N=E_B([1/N,1])x\to x$ by strong countable additivity and $E_B(\{0\})=0$, so $By=x$. Hence $D(T_A)=\operatorname{Ran}B=D(A)$. For $x=By$, the truncation in the definition of $T_A$ is, by step 4.1, $\Phi_{E_B}((1-b)\mathbf1_{[1/(N+1),1]})(y)$. These bounded multipliers converge pointwise off $\{0\}$ to $1-b$ and are uniformly bounded by $1$; [F4] gives strong convergence to $\Phi_{E_B}(1-b)y=(I-B)y=y-x=Ax$. Thus $T_A=A$ on the common domain, proving the operator identity. [A2, F3, F4, step 3.1, step 4.1, algebra]

6.1 If $f$ is bounded Borel on $[0,\infty)$, step 4.1 gives $f(A)=\Phi_{E_B}(g)$ for $g(b)=f(\phi(b))$ on $b>0$ and $g(0)=0$. By [F3], $\|f(A)\|\le\|g\|_\infty\le\sup_{\lambda\ge0}|f(\lambda)|$, and $\|f(A)u\|^2=\int|f|^2\,d\mu_u$. This proves the bounded Borel calculus claims. [A2, F2, F3, step 4.1, algebra] ∎

