---
id: ex-kuznetsov-prime-coefficient-average
kind: example
title: "A Prime Hecke-Coefficient Average from Kuznetsov"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - thm-kuznetsov-trace-formula-level-and-character
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: n/a
sources:
  references:
    - title: "A. Knightly and C. Li, Kuznetsov's Trace Formula and the Hecke Eigenvalues of Maass Forms, Memoirs of the AMS 224 (2012), arXiv:1202.0189v1"
      url: "https://arxiv.org/pdf/1202.0189v1"
      locator: "Theorem 7.14 with m1=m2=1 and n a prime coprime to N; printed pp. 86–87."
    - title: "Dorian Goldfeld, Trace Formulae for SL(2,R), Columbia lecture notes"
      url: "https://www.math.columbia.edu/~goldfeld/TraceFormulae-4-12-2020.pdf"
      locator: "Theorem 9.1, the level-one prime Hecke-coefficient specialization; printed pp. 46–48."
---

## Example

Let $p$ be a prime with $p\nmid N$, let $\chi$ be an even unitary
character modulo $N$, and let $h$ be an even spectral test function with $h(i\,\cdot)\in PW^{12}(\mathbb C)$. Put
$\psi(N)=N\prod_{q\mid N}(1+1/q)$ and
$d\mu=dx\,dy/y^2$. For each ordered pair
$(\widetilde\chi_1,\widetilde\chi_2)$ of Dirichlet characters modulo $N$
with product $\overline{\chi}$ and
$c_{\widetilde\chi_1}c_{\widetilde\chi_2}\mid N$, sum over tuples
$(i_q)_{q\mid N}$ with
$v_q(c_{\widetilde\chi_2})\le i_q\le v_q(N)-v_q(c_{\widetilde\chi_1})$.
Put $M=\prod_{q\mid N}q^{i_q}$. Let $\chi'_1$ induce $\widetilde\chi_1$ and $\chi'_2$ induce $\widetilde\chi_2$, respectively modulo
$$N_1=\prod_{\substack{q\mid N\\i_q<v_q(N)}}q^{v_q(N)},\qquad N_2=\prod_{\substack{q\mid N\\i_q>0}}q^{v_q(N)},$$
where $M$ is also a modulus for $\chi'_2$, and set
$$s_{it}(1)=M^{-1-2it}\sum_{d\bmod M}\chi'_2(d)e(d/M),\qquad \Lambda_p(it)=p^{it}\overline{\chi'_2(p)}+p^{-it}\overline{\chi'_1(p)}.$$
Use the local norm factor
$$\|\phi_{(i_q)}\|^2= \prod_{\substack{q\mid N\\i_q=0}}\frac q{q+1} \prod_{\substack{q\mid N\\0<i_q<v_q(N)}}\frac{q-1}{q^{i_q}(q+1)} \prod_{\substack{q\mid N\\i_q=v_q(N)}}\frac1{q^{v_q(N)-1}(q+1)}.$$
Define the continuous term
$$C_N(p,h)=\frac1\pi\sum_{(\widetilde\chi_1,\widetilde\chi_2)} \sum_{(i_q)}\int_{-\infty}^{\infty} \frac{\Lambda_p(it)|s_{it}(1)|^2h(t)} {\|\phi_{(i_q)}\|^2|L(1+2it,\widetilde\chi_1^{-1}\widetilde\chi_2)|^2}\,dt,$$
where the first sum runs over ordered Dirichlet-character pairs modulo $N$
whose product is $\overline{\chi}$ and whose conductor product divides $N$, and the
local indices satisfy
$v_q(c_{\widetilde\chi_2})\le i_q\le v_q(N)-v_q(c_{\widetilde\chi_1})$.
At a principal-character pole, use reciprocal value $0$. Let $\mathcal F$ be
an orthogonal simultaneous Hecke eigenbasis of the weight-zero Maass
cuspidal subspace of $L^2(\Gamma_0(N)\backslash\mathbb H,\chi)$, with
$T_pu=\lambda_p(u)u$, spectral parameter $t_u$, and normalized norm
$\|u\|^2=\psi(N)^{-1}\int_{\Gamma_0(N)\backslash\mathbb H}|u|^2d\mu$.
Then
$$\sum_{u\in\mathcal F}\lambda_p(u) \frac{|a_1(u)|^2}{\|u\|^2}\frac{h(t_u)}{\cosh(\pi t_u)}+C_N(p,h) =\psi(N)\sum_{c\in N\mathbb Z_{>0}} \frac{S_\chi(1,1;p;c)}c\, \mathcal B_h\!\left(\frac{4\pi\sqrt p}{c}\right).$$
Here $a_1(u)$ is the first Fourier–Whittaker coefficient,
$\Delta u=(1/4+t_u^2)u$, and $d\mu=dx\,dy/y^2$. This is the prime
Hecke-coefficient average at indices $(m_1,m_2,n)=(1,1,p)$; its diagonal
term vanishes.

## Example references

[[thm-kuznetsov-trace-formula-level-and-character]]

[[def-kloosterman-sum-modulus]]

[[def-kuznetsov-bessel-transform]]

## Facts & Assumptions

**Given:** A prime $p\nmid N$, an even character modulo $N$, and the level-
$N$ trace identity with $m_1=m_2=1$, $n=p$.

[F1] The trace identity has diagonal indicator $D(m_1,m_2,n)$ and
Kloosterman term $\psi(N)\sum_{c\in N\mathbb Z_{>0}}S_\chi(m_2,m_1;n;c)
\mathcal B_h(4\pi\sqrt{nm_1m_2}/c)/c$.
([[thm-kuznetsov-trace-formula-level-and-character]])

## Verification

1.1 For $(m_1,m_2,n)=(1,1,p)$, the diagonal condition would require $1=b^2p$ for a positive integer $b\mid1$. Since $p\geq2$, this is impossible and the diagonal term vanishes. [F1, given, algebra]

2.1 Substitute those indices in the remaining terms of F1. The inducing-character pair has product $\overline\chi$, with its second local character induced from $\widetilde\chi_2$, as displayed in the main formula. The Fourier coefficient at one and the Hecke divisor sum at $p$ give exactly $s_{it}(1)$ and $\Lambda_p(it)$ above. Thus the formula is the stated conditional specialization, with no additional continuous-normalization assertion. [F1, step 1.1, algebra] ∎

## Verification status

The specialization is complete conditional on the trace formula. The item is
escalated because its trace-formula supplier's residual-spectrum, inducing-basis conversion,
and J-Bessel orbital-transform obligations are unresolved.

## Source convention dictionary

The library keeps $u(\gamma z)=\chi(d_\gamma)u(z)$. Knightly–Li use $u(\gamma z)=\overline{\omega'(d_\gamma)}u(z)$, so their parameter is $\omega'=\overline{\chi}$. The displayed character factors are translated by this dictionary, not quoted verbatim in the source notation. In the continuous branch the source auxiliary characters satisfy $\widetilde\chi_1\widetilde\chi_2=\overline{\chi}$; $\chi'_1$ induces $\widetilde\chi_1$ while $\chi'_2$ induces $\widetilde\chi_2$.
