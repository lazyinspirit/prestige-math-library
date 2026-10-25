---
id: def-qftx-nonabelian-brst-complex
kind: definition
title: Finite-Jet Non-Abelian BRST Complex
status: "published"
origin: session
dependency_level: 0
domain: mathematics
library: mathematics
deps: []
dependency_roles: {}
category: quantum-field-theory-mathematics
proof_strategy: definition
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Glenn Barnich, Friedemann Brandt, and Marc Henneaux, Local BRST cohomology in gauge theories"
      url: "https://arxiv.org/pdf/hep-th/0002245"
      locator: "§§2.2–2.3 and 4.1–4.2: Yang–Mills-type gauge and ghost fields, BRST sign conventions, finite-jet local functions, and local forms."
    - title: "Joaquim Gomis, Jordi París, and Stuart Samuel, Antibracket, Antifields and Gauge-Theory Quantization"
      url: "https://arxiv.org/pdf/hep-th/9412228"
      locator: "§§3.2 and 5.2: non-Abelian Yang–Mills gauge generators, ghost conventions, and the classical Yang–Mills BV field content."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Definition

Let $n\geq 1$, let $U\subseteq\mathbb R^n$ be a nonempty open set with coordinates $x^1,\ldots,x^n$, and let $\mathfrak g$ be a finite-dimensional real Lie algebra with bilinear alternating bracket $[\ ,\ ]_{\mathfrak g}$ satisfying the Jacobi identity. Let $V=V_{\bar 0}\oplus V_{\bar 1}$ be a finite-dimensional $\mathbb Z_2$-graded complex vector space, and let $\rho:\mathfrak g\to\operatorname{End}_{\mathbb C}(V)$ be an even representation, meaning $\rho([X,Y]_{\mathfrak g})=\rho(X)\rho(Y)-\rho(Y)\rho(X)$ for all $X,Y\in\mathfrak g$ and each $\rho(X)$ preserves the grading of $V$. This is local Lie-algebra data; no global group, principal bundle, action functional, or quantum theory is selected here.

Choose a basis $T_a$ of $\mathfrak g$ and write $[T_b,T_c]_{\mathfrak g}=f^a{}_{bc}T_a$. A local gauge potential is a $\mathfrak g$-valued one-form $A=A_\mu^aT_a\,dx^\mu$ whose component jet generators $A_{\mu,I}^a$ are even and have ghost number zero. A matter field is a $V$-valued local field $\psi$ with each component jet generator $\psi_I^\alpha$ assigned the parity of its graded component and ghost number zero. The ghost is $c=c^aT_a$, with odd component jet generators $c_I^a$ of ghost number one. The coefficient bracket of homogeneous $\mathfrak g$-valued fields is $[X,Y]^a=f^a{}_{bc}X^bY^c$, using multiplication in the graded-commutative coefficient algebra; in particular $[c,c]^a=f^a{}_{bc}c^bc^c$ has no factor of $1/2$.

For a multi-index $I=(I_1,\ldots,I_n)\in\mathbb N^n$, let $\Phi_I$ denote the corresponding formal jet generator of a field component $\Phi$. The finite-jet local algebra $\mathcal F_U$ is $C^\infty(U)$ tensored with the polynomial algebra in its even jet generators and the exterior algebra in its odd jet generators, where each element uses only finitely many jet generators. The total derivatives $D_\mu$ act by $D_\mu f=\partial_\mu f$ on $f\in C^\infty(U)$ and $D_\mu\Phi_I=\Phi_{I+e_\mu}$ on every jet generator; the multi-index derivatives commute.

Define the degree-one BRST operator candidate $s$ on the fields by

$$sA_\mu=\partial_\mu c+[A_\mu,c],\qquad sc=-\frac12[c,c],\qquad s\psi=-\rho(c)\psi.$$

On coefficient functions set $sf=0$, and on every jet generator set $s(\Phi_I)=D_I(s\Phi)$; extend $s$ to $\mathcal F_U$ by the odd left-derivation rule $s(FG)=(sF)G+(-1)^{|F|}F(sG)$ for homogeneous $F$, where $|F|$ is total parity. The minimal sector here contains only $A,\psi,c$ and their jets. Antighosts and Nakanishi–Lautrup variables are not included; adjoining such a nonminimal pair requires separate definitions and a proof before any cohomological triviality claim. The specified data are a BRST complex once $s^2=0$, which is established for these formulas in the following nilpotence lemma.

## Definition references

[Barnich, Brandt, and Henneaux, §§2.2–2.3 and 4.1–4.2](https://arxiv.org/pdf/hep-th/0002245)

[Gomis, París, and Samuel, §§3.2 and 5.2](https://arxiv.org/pdf/hep-th/9412228)
