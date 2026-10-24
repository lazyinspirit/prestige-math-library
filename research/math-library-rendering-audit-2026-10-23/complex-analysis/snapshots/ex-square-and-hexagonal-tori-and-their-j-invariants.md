---
id: ex-square-and-hexagonal-tori-and-their-j-invariants
kind: example
title: "The square and hexagonal tori have j-invariants 1728 and 0"
status: published
origin: pipeline
deps:
  - thm-j-invariant-classifies-complex-tori
  - thm-j-uniformizes-the-level-one-modular-curve
  - cor-zeros-of-e4-and-e6-at-the-elliptic-points
  - def-modular-discriminant-and-j-invariant
  - def-complex-lattice-and-complex-torus
  - thm-complex-torus-quotient-is-well-defined
  - lem-weierstrass-p-degree-two-and-half-periods
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-21.md"
      - "research/frontier-38-owner-30-alpha-batch-21-5a.md"
      - "research/frontier-38-owner-30-step5-hash-21-post-5a.json"
    content_sha256: "2552898e14c9f291133d3a9a51d5960b27ae13932df65f02e831432bb238b648"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "C. T. McMullen, Advanced Complex Analysis, Math 213a course notes (Harvard, 2010)"
      url: "https://people.math.harvard.edu/~ctm/home/text/class/harvard/213a/10/html/home/course/course.pdf"
      locator: "Section 5.3, printed pp. 94–95: special cross-ratio orbits; Theorem 5.42, p. 103: J(i)=1 and J(rho)=0. Use j=1728J from p. 104."
    - title: "J. S. Milne, Modular Functions and Modular Forms (v1.31, 2017)"
      url: "https://www.jmilne.org/math/CourseNotes/MF.pdf"
      locator: "Example 4.15 and its geometric discussion, printed p. 54."
    - title: "D. Zagier, Elliptic Modular Forms and Their Applications, in The 1-2-3 of Modular Forms (Universitext, Springer, 2008)"
      url: "https://people.mpim-bonn.mpg.de/zagier/files/doi/10.1007/978-3-540-74119-0_1/fulltext.pdf"
      locator: "Proposition 2, printed pp. 9–10, and the normalised j formula, p. 22: ingredients for the special-value deduction."
---

## Example

For the square lattice $\Lambda_i=\mathbb Z+\mathbb Z i$ and the hexagonal lattice $\Lambda_\omega=\mathbb Z+\mathbb Z\omega$, $\omega=e^{2\pi i/3}$:
$$j(\Lambda_i)=1728,\qquad j(\Lambda_\omega)=0.$$
Moreover $j(\Lambda)=1728$ if and only if $\Lambda$ is homothetic to $\mathbb Z[i]$, and $j(\Lambda)=0$ if and only if $\Lambda$ is homothetic to $\mathbb Z[\omega]$. Multiplication by $i$ (respectively $\omega$) induces an automorphism of the corresponding torus of order $4$ (respectively $3$).

## Facts & Assumptions

**Given:** The lattices $\Lambda_i=\mathbb Z+\mathbb Z i$ and $\Lambda_\omega=\mathbb Z+\mathbb Z\omega$ with $\omega=e^{2\pi i/3}$, their tori $T_\Lambda=\mathbb C/\Lambda$ and class maps $\pi_\Lambda$ ([[def-complex-lattice-and-complex-torus]], [[thm-complex-torus-quotient-is-well-defined]]); the modular function $j$ of [[def-modular-discriminant-and-j-invariant]]; and the zeros of $E_4,E_6$ ([[cor-zeros-of-e4-and-e6-at-the-elliptic-points]]).

[F1] For a full lattice $\Lambda$ with oriented basis $(\omega_1,\omega_2)$ the value $j(\Lambda):=j(\omega_2/\omega_1)$ is independent of the choice of oriented basis; moreover $\Lambda'=c\Lambda$ for some $c\in\mathbb C^\times$, biholomorphy of $T_\Lambda$ and $T_{\Lambda'}$, and $j(\Lambda')=j(\Lambda)$ are equivalent ([[thm-j-invariant-classifies-complex-tori]]).

[F2] $j(i)=1728$ and $j(\omega)=0$; on $\mathfrak H$ the function $j$ is holomorphic and $PSL_2(\mathbb Z)$-invariant, and $j(\tau)=j(\tau')$ only when $\tau,\tau'$ lie in one $PSL_2(\mathbb Z)$-class ([[def-modular-discriminant-and-j-invariant]], [[thm-j-uniformizes-the-level-one-modular-curve]], [[cor-zeros-of-e4-and-e6-at-the-elliptic-points]]).

[F3] The class map $\pi_\Lambda:\mathbb C\to T_\Lambda$ is a holomorphic covering; for $a\in\mathbb C^\times$ with $a\Lambda\subseteq\Lambda$ the formula $m_a([z]):=[az]$ is well defined on $T_\Lambda$ because $z-w\in\Lambda$ implies $a(z-w)\in\Lambda$, and $m_a$ is holomorphic since $\pi_\Lambda\circ(a\cdot)=m_a\circ\pi_\Lambda$; when $a\Lambda=\Lambda$ it is a biholomorphism with inverse $m_{a^{-1}}$ ([[thm-complex-torus-quotient-is-well-defined]], [[def-complex-lattice-and-complex-torus]]).

## Verification

1.1 Oriented bases. The pair $(1,i)$ is an oriented basis of $\Lambda_i=\mathbb Z+\mathbb Z i$: $i\notin\mathbb R$ and $\operatorname{Im}(i/1)=1>0$. Hence $\Lambda_i$ has parameter $\tau=i$ and, by [F1] and the first value in [F2], $j(\Lambda_i)=j(i)=1728$. Likewise $(1,\omega)$ is an oriented basis of $\Lambda_\omega=\mathbb Z+\mathbb Z\omega$, since $\operatorname{Im}\omega=\sin(2\pi/3)=\sqrt3/2>0$, so $\Lambda_\omega$ has parameter $\omega$ and $j(\Lambda_\omega)=j(\omega)=0$ by [F2]. [F1, F2, given, algebra]

2.1 The level sets of $1728$ and $0$. Let $\Lambda$ be a full lattice. By [F1], $j(\Lambda)=j(\Lambda_i)$ holds if and only if $\Lambda$ is homothetic to $\Lambda_i$, and by 1.1 the value on the right is $j(\Lambda_i)=1728$; hence $j(\Lambda)=1728$ if and only if $\Lambda$ is homothetic to $\mathbb Z[i]=\Lambda_i$. The same argument with $\Lambda_\omega$ gives: by [F1] and 1.1, $j(\Lambda)=j(\Lambda_\omega)=0$ if and only if $\Lambda$ is homothetic to $\Lambda_\omega=\mathbb Z[\omega]$. Equivalently, both statements say that the level set of each of the two special values is a single homothety class, as also follows from the injectivity of $j$ on $PSL_2(\mathbb Z)$-classes recorded in [F2]. [F1, F2, step 1.1, given, algebra]

3.1 Automorphisms of order $4$ and $3$. Multiplication by $i$ preserves $\Lambda_i$: $i(m+ni)=-n+mi$ with $-n,m\in\mathbb Z$; hence $i\Lambda_i=\Lambda_i$ (equality, since $i$ is invertible and $i\Lambda_i\subseteq\Lambda_i$ with the same argument applied to $-i$), and [F3] provides the biholomorphic automorphism $m_i([z])=[iz]$ of $T_{\Lambda_i}$. Its fourth power is the identity, $m_i^4=m_{i^4}=m_1=\operatorname{id}$, while $m_i^2=m_{-1}$ is not the identity because $[1/3]\ne[-1/3]$: their difference would require $2/3\in\Lambda_i$, and no element $m+ni$ of $\Lambda_i$ with $n=0$ equals $2/3\notin\mathbb Z$; so the order of $m_i$ divides $4$ but not $2$, hence is exactly $4$. Similarly $\omega\Lambda_\omega\subseteq\Lambda_\omega$ because $\omega\cdot1=\omega$ and $\omega\cdot\omega=\omega^2=-1-\omega$ lie in $\Lambda_\omega$, and $\omega\Lambda_\omega=\Lambda_\omega$ by the same inverse argument with $\omega^{-1}=\omega^2$; so [F3] gives the automorphism $m_\omega([z])=[\omega z]$. Its cube is $m_\omega^3=m_{\omega^3}=m_1=\operatorname{id}$ since $\omega^3=1$, and $m_\omega$ is not the identity because $[\omega/2]\ne[1/2]$: $(\omega-1)/2=-\tfrac12+\tfrac12\omega$ is not of the form $m+n\omega$ with $m,n\in\mathbb Z$; so the order of $m_\omega$ divides $3$ but is not $1$, hence is exactly $3$. [F3, given, algebra] ∎
