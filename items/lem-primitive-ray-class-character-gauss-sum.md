---
id: lem-primitive-ray-class-character-gauss-sum
kind: lemma
title: "Finite Gauss sum of a primitive ray-class character"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
  - def-finite-order-ray-class-hecke-character-and-l-function
  - lem-ray-class-character-finite-part-decomposition
  - lem-character-orthogonality-for-finite-abelian-groups
  - lem-trace-dual-of-a-fractional-ideal
  - def-different-of-a-number-field
  - def-trace-dual-and-codifferent-of-a-number-field
  - def-absolute-norm-of-an-ideal
  - thm-ideal-norm-is-multiplicative
  - thm-number-field-integral-ideal-factorisation-in-zf
  - thm-chinese-remainder-theorem-for-comaximal-ideals
  - lem-nonzero-number-field-ideal-has-finite-quotient
  - def-axiom-of-choice
  - def-countable-choice
proof_strategy: direct
axiom_use: >-
  The finite character-sum argument is choice-free; AC and Countable Choice
  are inherited from the ray-class character decomposition.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jürgen Neukirch, Algebraic Number Theory, Chapter VII §6, Theorems 6.4 and 6.6"
      url: "https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf"
      locator: "Printed pp.473–475, primitive finite ray-character Gauss sums and additive orthogonality."

---

## Statement

Let $K$ be a number field, let $\mathfrak m_0$ be a nonzero integral ideal, and let $\mathfrak D_K$ be the different. Let $\psi:(\mathcal O_K/\mathfrak m_0)^\times\to\mathbb C^\times$ be a primitive finite character, meaning it does not factor through the unit group modulo any proper divisor of $\mathfrak m_0$, and extend $\psi$ by zero to nonunit residue classes. For every $y\in\mathfrak m_0^{-1}\mathfrak D_K^{-1}$ define
$$\tau_{\mathfrak m_0}(\psi,y)=\sum_{x\in(\mathcal O_K/\mathfrak m_0)^\times}\psi(x)e^{2\pi i\operatorname{Tr}_{K/\mathbb Q}(xy)}.$$
If $(y)\mathfrak m_0\mathfrak D_K$ is coprime to $\mathfrak m_0$, this ideal is integral and the Gauss sum has absolute value $\sqrt{N\mathfrak m_0}$.
For $a\in\mathcal O_K$, this sum satisfies
$$\tau_{\mathfrak m_0}(\psi,ay)=\begin{cases}\overline{\psi(a)}\,\tau_{\mathfrak m_0}(\psi,y),&a\bmod\mathfrak m_0\text{ is a unit},\\0,&a\bmod\mathfrak m_0\text{ is not a unit}.
\end{cases}$$
When $\mathfrak m_0=\mathcal O_K$, the residue group and the sum are interpreted as the trivial group and its one-term sum.

## Statement references

[[def-finite-order-ray-class-hecke-character-and-l-function]]

[[lem-ray-class-character-finite-part-decomposition]]

[[lem-trace-dual-of-a-fractional-ideal]]

[[def-different-of-a-number-field]]

[[def-trace-dual-and-codifferent-of-a-number-field]]

[[def-absolute-norm-of-an-ideal]]

[[thm-chinese-remainder-theorem-for-comaximal-ideals]]

## Facts & Assumptions

**Given:** A number field $K$, a nonzero integral ideal $\mathfrak m_0$, its different $\mathfrak D_K$, a primitive finite character $\psi$, and $y\in\mathfrak m_0^{-1}\mathfrak D_K^{-1}$ with $(y)\mathfrak m_0\mathfrak D_K$ integral and coprime to $\mathfrak m_0$.

[F1] The trace dual of a fractional ideal $\mathfrak a$ is $(\mathfrak a\mathfrak D_K)^{-1}$, and the codifferent is $\mathfrak D_K^{-1}$. [[lem-trace-dual-of-a-fractional-ideal]] [[def-trace-dual-and-codifferent-of-a-number-field]] [[def-different-of-a-number-field]]

[F2] The quotient $\mathcal O_K/\mathfrak m_0$ is a finite ring, so its additive group and unit group are finite. [[lem-nonzero-number-field-ideal-has-finite-quotient]]

[F3] Every nonzero integral ideal has a unique finite prime factorisation; the Chinese remainder theorem identifies its quotient ring with the product of the prime-power quotients. [[thm-number-field-integral-ideal-factorisation-in-zf]] [[thm-chinese-remainder-theorem-for-comaximal-ideals]]

[F4] The absolute ideal norm is the cardinality of the quotient ring and is multiplicative. [[def-absolute-norm-of-an-ideal]] [[thm-ideal-norm-is-multiplicative]]

[F5] For $z\in\mathfrak m_0^{-1}\mathfrak D_K^{-1}$, the additive character $x\mapsto e^{2\pi i\operatorname{Tr}(xz)}$ on $\mathcal O_K/\mathfrak m_0$ is trivial exactly when $z\in\mathfrak D_K^{-1}$ by [F1]; a nontrivial character of this finite abelian additive group sums to zero. [[lem-trace-dual-of-a-fractional-ideal]] [[lem-character-orthogonality-for-finite-abelian-groups]]

[A1] AC and Countable Choice are inherited from the ray-class character context; the finite sums and ideal-divisor arguments below use no additional choice. [[def-axiom-of-choice]] [[def-countable-choice]]

## Proof

**Given:** The data and hypotheses in the Statement.

1.1 If $\mathfrak m_0=\mathcal O_K$, then the unit group has one element, $\tau=1$, and $N\mathfrak m_0=1$, so the norm assertion holds. Assume $\mathfrak m_0\ne\mathcal O_K$. If $a$ is a unit modulo $\mathfrak m_0$, substitution $z=xa$ permutes the finite unit group. Since that group is finite by [F2], $\psi(a)$ has finite order and $\psi(a)^{-1}=\overline{\psi(a)}$. Substitution therefore gives $\tau(\psi,ay)=\overline{\psi(a)}\tau(\psi,y)$. [F2, given, algebra]

1.2 Suppose $a$ is not a unit modulo $\mathfrak m_0$, and let $\mathfrak d=(a,\mathfrak m_0)$, a proper ideal divisor. The reduction map $(\mathcal O_K/\mathfrak m_0)^\times\to(\mathcal O_K/(\mathfrak m_0/\mathfrak d))^\times$ is onto: factor the ideals into prime powers by [F3], lift each unit residue to a unit at the higher power, choose units at the new prime factors, and combine the finitely many residues by the Chinese remainder theorem. Since $\psi$ is primitive, it is nontrivial on the kernel; choose a unit $b$ in that kernel with $\psi(b)\ne1$. The congruence $b\equiv1\pmod{\mathfrak m_0/\mathfrak d}$ implies $a(b-1)\in\mathfrak m_0$. For every residue $x$, $x a(b-1)y\in\mathfrak D_K^{-1}$, so its trace is an integer and the additive phase is unchanged when $x$ is replaced by $xb$. The multiplicative weight is multiplied by $\psi(b)\ne1$, forcing $\tau(\psi,ay)=0$. This argument uses only $y\in\mathfrak m_0^{-1}\mathfrak D_K^{-1}$, not the coprimality hypothesis used for the magnitude assertion. [F2, F3, given, choose, algebra]

2.1 Write $\tau=\tau(\psi,y)$. By step 1.1, for unit $a$ one has $\overline{\psi(a)}\tau=\tau(\psi,ay)$; by step 1.2 both sides are zero for nonunit $a$. Hence
$$|\tau|^2=\sum_{a\in\mathcal O_K/\mathfrak m_0}\tau(\psi,ay)e^{-2\pi i\operatorname{Tr}(ay)}=\sum_{a\in\mathcal O_K/\mathfrak m_0}\sum_{b\in(\mathcal O_K/\mathfrak m_0)^\times}\psi(b)e^{2\pi i\operatorname{Tr}(a(b-1)y)}.$$
For $b=1$ the inner additive sum is $N\mathfrak m_0$. For $b\ne1$, if $(b-1)y\in\mathfrak D_K^{-1}$, then $(b-1)(y)\mathfrak m_0\mathfrak D_K\subseteq\mathfrak m_0$; since $(y)\mathfrak m_0\mathfrak D_K+\mathfrak m_0=\mathcal O_K$, choose $u\in(y)\mathfrak m_0\mathfrak D_K$ and $v\in\mathfrak m_0$ with $u+v=1$. Multiplying by $b-1$ and using $(b-1)(y)\mathfrak m_0\mathfrak D_K\subseteq\mathfrak m_0$ gives $b-1\in\mathfrak m_0$, a contradiction. Thus [F5] makes that inner sum zero. Only $b=1$ remains, so $|\tau|^2=N\mathfrak m_0$ and $|\tau|=\sqrt{N\mathfrak m_0}$. [F1, F2, F4, F5, step 1.1, step 1.2, algebra] ∎
