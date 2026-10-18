---
id: thm-bv-derived-bracket-is-odd-poisson
kind: theorem
title: The derived BV bracket is an odd Poisson bracket
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-bv-algebra-and-degree-plus-one-bracket
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
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
      locator: "§1, Proposition 1.2, PDF pp. 5–6: bracket generation, odd skew-symmetry, the Poisson rule, and the Jacobi calculation."
    - title: "Paul Seidel, Lectures on Categorical Dynamics and Symplectic Topology, MIT Spring 2013 lecture notes"
      url: "https://math.mit.edu/~seidel/texts/937-lecture-notes.pdf"
      locator: "Lecture 12, equations (12.8)–(12.13), printed p. 119 (PDF p. 119): seven-term identity, biderivation, and the square-zero/Jacobi implication, in degree−1 convention."
    - title: "Yvette Kosmann-Schwarzbach and Juan Monterde, Divergence operators and odd Poisson brackets, Annales de l’Institut Fourier 52 (2002)"
      url: "https://arxiv.org/pdf/math/0002209"
      locator: "§1.1, equation (1), arXiv PDF p. 4, and §1.3, equation (6), PDF p. 5: odd-skew, Jacobi, generator, and Hamiltonian-commutator conventions."
---

## Statement

Let $(A,\Delta)$ be as in [[def-bv-algebra-and-degree-plus-one-bracket]].
For homogeneous $a,b,c\in A$, the derived bracket has degree
$|\{a,b\}|=|a|+|b|+1$ and satisfies
$$\{a,b\}=-(-1)^{(|a|+1)(|b|+1)}\{b,a\},$$
$$\{a,bc\}=\{a,b\}c+(-1)^{(|a|+1)|b|}b\{a,c\},$$
and
$$\{a,\{b,c\}\}=\{\{a,b\},c\}+(-1)^{(|a|+1)(|b|+1)}\{b,\{a,c\}\}.$$
Thus it is an odd Poisson bracket, meaning an odd-skew bracket that is a
derivation in each argument and satisfies the displayed odd Jacobi identity.

## Facts & Assumptions

**Given:** A degree-$+1$ BV generator $\Delta$ on a graded-commutative algebra $A$ over a field of characteristic $0$, and homogeneous $a,b,c\in A$.

[F1] [[def-bv-algebra-and-degree-plus-one-bracket]]: $\Delta(1)=0$, $\Delta^2=0$, $\left[\left[\left[\Delta,m_a\right],m_b\right],m_c\right]=0$, and $\{a,b\}=(-1)^{|a|}(\Delta(ab)-(\Delta a)b-(-1)^{|a|}a\Delta b)$.

## Proof

1.1 Put $m=|a|$, $n=|b|$, $\delta_a=[\Delta,m_a]$, and $T_{a,b}=[\delta_a,m_b]$. By [F1], $[T_{a,b},m_c]=0$ for every homogeneous $c$, so $T_{a,b}(c)=(-1)^{|T_{a,b}||c|}cT_{a,b}(1)=T_{a,b}(1)c$; the two signs cancel by graded commutativity, hence $T_{a,b}=m_{T_{a,b}(1)}$. Direct evaluation gives $T_{a,b}(1)=\Delta(ab)-(-1)^m a\Delta b-(-1)^{(m+1)n}b\Delta a=\Delta(ab)-(-1)^m a\Delta b-(\Delta a)b=(-1)^m\{a,b\}$. Thus $[\delta_a,m_b]=m_{(-1)^m\{a,b\}}$. [F1, algebra]

1.2 Graded commutativity expands the defining formula to $\{b,a\}=(-1)^{n+mn}\Delta(ab)-(-1)^{n+mn+m}a\Delta b-(-1)^{mn+n}(\Delta a)b$. Multiplication by $-(-1)^{(m+1)(n+1)}$ reduces these coefficients, modulo $2$, to $(-1)^m$, $-1$, and $-(-1)^m$, respectively, giving exactly $\{a,b\}$. Each term of the bracket formula has degree $|a|+|b|+1$. This proves odd skew-symmetry and the degree assertion. [F1, algebra]

2.1 Define $H_a=\delta_a-m_{\Delta a}$. Then $H_a(1)=0$ and $[H_a,m_b]=m_{(-1)^m\{a,b\}}$ by step 1.1 because multiplication operators gradedly commute. Evaluating at $1$ gives $H_a(b)=(-1)^m\{a,b\}$; evaluating at homogeneous $c$ gives $H_a(bc)-(-1)^{(m+1)n}bH_a(c)=H_a(b)c$. Multiplying by $(-1)^m$ proves $\{a,bc\}=\{a,b\}c+(-1)^{(m+1)n}b\{a,c\}$. [F1, step 1.1, algebra]

2.2 Expansion of the graded commutators gives $[\Delta,[\Delta,m_b]]=[\Delta^2,m_b]=0$ and $[\delta_a,\delta_b]=[\Delta,[m_a,\delta_b]]$, because the other graded-Jacobi term is a signed multiple of $[m_a,[\Delta,\delta_b]]=0$. By step 1.1 and odd skew-symmetry from step 1.2, $[m_a,\delta_b]=-(-1)^{m(n+1)}[\delta_b,m_a]=-m_{\{a,b\}}$, so $[\delta_a,\delta_b]=-[\Delta,m_{\{a,b\}}]$. [F1, step 1.1, step 1.2, algebra]

2.3 Rearranging the defining bracket gives $\Delta(uv)=(\Delta u)v+(-1)^{|u|}u\Delta v+(-1)^{|u|}\{u,v\}$. Apply this to $(\Delta a)b$ and $a(\Delta b)$ when expanding $\Delta\{a,b\}$; the two $(\Delta a)(\Delta b)$ terms cancel and $\Delta^2=0$ leaves $\Delta\{a,b\}=\{\Delta a,b\}-(-1)^m\{a,\Delta b\}$. [F1, step 1.1, algebra]

3.1 By steps 1.2 and 2.1, express $\{ab,c\}=-(-1)^{(|a|+|b|+1)(|c|+1)}\{c,ab\}$, expand $\{c,ab\}$ by the derivation rule, and use odd skew-symmetry on the two terms; reducing exponents modulo $2$ gives $\{ab,c\}=a\{b,c\}+(-1)^{|b|(|c|+1)}\{a,c\}b$. Hence the bracket is also a derivation in its first argument and is a biderivation. [step 1.2, step 2.1, algebra]

4.1 Expanding $[H_a,H_b]$ using steps 1.1 and 2.2 gives $[H_a,H_b]=-[\Delta,m_{\{a,b\}}]-(-1)^m m_{\{a,\Delta b\}}+(-1)^{(m+1)(n+1)+n}m_{\{b,\Delta a\}}$. By step 1.2, $\{\Delta a,b\}=-(-1)^{m(n+1)}\{b,\Delta a\}$, and the last coefficient equals $-(-1)^{m(n+1)}$; step 2.3 therefore makes the last two terms $m_{\Delta\{a,b\}}$, so $[H_a,H_b]=-H_{\{a,b\}}$. Thus $D_a=\{a,-\}=(-1)^mH_a$ satisfies $[D_a,D_b]=(-1)^{m+n+1}H_{\{a,b\}}=D_{\{a,b\}}$; applying this to $c$ and rearranging is the stated odd Jacobi identity. [F1, step 1.1, step 1.2, step 2.2, step 2.3, algebra] ∎
