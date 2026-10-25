---
id: ex-one-variable-bv-algebra-solves-classical-master-equation
kind: example
title: A one-variable BV algebra and a classical master solution
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-bv-algebra-and-degree-plus-one-bracket
  - thm-bv-derived-bracket-is-odd-poisson
  - def-classical-and-formal-quantum-master-equations
  - thm-classical-master-equation-defines-square-zero-differential
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Ezra Getzler, Batalin–Vilkovisky algebras and two-dimensional topological field theories, arXiv:hep-th/9212043v3"
      url: "https://arxiv.org/pdf/hep-th/9212043"
      locator: "§1, PDF pp. 4–6: the degree-one derived-bracket formula used for this polynomial example."
    - title: "Albert Schwarz, Geometry of Batalin–Vilkovisky quantization, arXiv:hep-th/9205088v1"
      url: "https://arxiv.org/pdf/hep-th/9205088"
      locator: "§1, PDF pp. 1–2: the finite-dimensional odd-symplectic coordinate model; the example below is checked directly in its algebraic convention."
---

## Example

Let $A=\mathbb C[x,\theta]/(\theta^2)$ with $|x|=0$ and $|\theta|=-1$. Define
$\partial_\theta(f+\theta g)=g$ and let $\Delta=\partial_x\partial_\theta$.
Then $(A,\Delta)$ is a BV algebra in the degree-$+1$ convention. The element
$S=x^3/3$ satisfies the classical master equation and its Hamiltonian
differential is
$$d_S(f+\theta g)=\{S,f+\theta g\}=x^2g.$$

## Facts & Assumptions

**Given:** The BV definition, odd-Poisson theorem, CME convention, and
square-zero consequence in
[[def-bv-algebra-and-degree-plus-one-bracket]],
[[thm-bv-derived-bracket-is-odd-poisson]],
[[def-classical-and-formal-quantum-master-equations]], and
[[thm-classical-master-equation-defines-square-zero-differential]].

[F1] [[def-bv-algebra-and-degree-plus-one-bracket]]: the order condition is
$\left[\left[\left[\Delta,m_a\right],m_b\right],m_c\right]=0$, with $\Delta(1)=\Delta^2=0$ and
$\{a,b\}=(-1)^{|a|}(\Delta(ab)-(\Delta a)b-(-1)^{|a|}a\Delta b)$.

[F2] [[def-classical-and-formal-quantum-master-equations]]: for $S\in A^0$,
the classical master equation is $\{S,S\}=0$.

[F3] [[thm-classical-master-equation-defines-square-zero-differential]]: any
degree-zero classical master solution induces the square-zero map
$d_S=\{S,-\}$.

## Verification

1.1 Every element is $f(x)+\theta g(x)$ with $f,g\in\mathbb C[x]$ and $\theta^2=0$; the polynomial quotient multiplication is associative and the assigned degrees make it graded commutative. For homogeneous factors, the ordinary product rule gives the Leibniz rule for $\partial_x$; direct expansion gives $\partial_\theta(f\theta j)=fj$, $\partial_\theta(\theta g h)=gh$, and $\partial_\theta((\theta g)(\theta h))=0=g(\theta h)-(\theta g)h$, so $\partial_\theta$ is a degree-$+1$ graded derivation. Thus $\Delta(f+\theta g)=g'(x)$ has degree $+1$, $\Delta(1)=0$, and $\Delta^2=0$. [given, construct, algebra]

2.1 For a homogeneous derivation $D$, $[D,m_a]=m_{D(a)}$; the composition identity gives $[\Delta,m_a]=m_{\Delta a}+m_{\partial_\theta a}\partial_x+(-1)^{|a|}m_{\partial_x a}\partial_\theta$. Commuting once more yields $\left[\,[\Delta,m_a],m_b\right]=m_{\partial_\theta a}m_{\partial_x b}+(-1)^{|a|}m_{\partial_x a}m_{\partial_\theta b}$, a multiplication operator. Multiplication operators gradedly commute, so the third commutator with $m_c$ is zero and [F1]'s order condition holds. [F1, step 1.1, algebra]

2.2 Direct substitution in [F1] gives $\{f(x),\theta g(x)\}=f'(x)g(x)$ because $\Delta(f\theta g)=(fg)'$, $\Delta f=0$, and $\Delta(\theta g)=g'$. Hence $\{S,\theta g\}=x^2g$ and $\{S,f\}=0$; also $S$ and $S^2$ depend only on $x$, so $\{S,S\}=0$ by the same formula. Thus $S$ satisfies the CME [F2]. [F1, F2, step 1.1, algebra]

3.1 Step 2.2 gives $d_S(f+\theta g)=x^2g$, which is independent of $\theta$ and is killed by $d_S$. Therefore $d_S^2=0$ directly, in agreement with [F3]. [F2, F3, step 2.2, algebra] ∎
