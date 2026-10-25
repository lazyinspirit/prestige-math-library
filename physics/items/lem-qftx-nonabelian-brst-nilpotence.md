---
id: lem-qftx-nonabelian-brst-nilpotence
kind: lemma
title: Nilpotence of the Finite-Jet Non-Abelian BRST Differential
status: "published"
origin: session
dependency_level: 1
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
deps:
  - def-qftx-nonabelian-brst-complex
dependency_roles:
  def-qftx-nonabelian-brst-complex: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Glenn Barnich, Friedemann Brandt, and Marc Henneaux, Local BRST cohomology in gauge theories"
      url: "https://arxiv.org/pdf/hep-th/0002245"
      locator: "§§2.2–2.3: the non-Abelian Yang–Mills-type BRST transformations, their ghost grading, and the square-zero differential; §4.1 for total derivatives on finite jets."
    - title: "Joaquim Gomis, Jordi París, and Stuart Samuel, Antibracket, Antifields and Gauge-Theory Quantization"
      url: "https://arxiv.org/pdf/hep-th/9412228"
      locator: "§§3.2 and 5.2: the closed irreducible Yang–Mills gauge algebra, structure-constant Jacobi identity, and ghost transformation."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Statement

Let $n\geq 1$, let $U\subseteq\mathbb R^n$ be nonempty and open, let $\mathfrak g$ be a finite-dimensional real Lie algebra, and let $V=V_{\bar 0}\oplus V_{\bar 1}$ be a finite-dimensional graded complex vector space with an even Lie-algebra representation $\rho:\mathfrak g\to\operatorname{End}_{\mathbb C}(V)$. Form the graded-commutative finite-jet algebra over $C^\infty(U)$ from an even $\mathfrak g$-valued local one-form $A=A_\mu^aT_a\,dx^\mu$, a ghost $c=c^aT_a$ with odd components of ghost number one, and matter fields $\psi^\alpha$ of fixed component parity and ghost number zero. Let $D_\mu$ be the total derivatives on coefficient functions and formal field jets, and let $s$ be the left odd derivation of ghost number one specified by $sA_\mu=\partial_\mu c+[A_\mu,c]$, $sc=-\tfrac12[c,c]$, $s\psi=-\rho(c)\psi$, and $s(D_I\Phi)=D_I(s\Phi)$ on every multi-index jet. Then $s^2=0$ on the entire finite-jet algebra and $sD_\mu=D_\mu s$ for each $\mu$.

## Statement references

[Barnich, Brandt, and Henneaux, §§2.2–2.3 and 4.1](https://arxiv.org/pdf/hep-th/0002245)

[Gomis, París, and Samuel, §§3.2 and 5.2](https://arxiv.org/pdf/hep-th/9412228)

## Facts & Assumptions

**Given:** The local fields, finite-jet algebra, total derivatives, and BRST formulas stated above.

[A1] The structure constants $f^a{}_{bc}$ of $\mathfrak g$ satisfy the ordinary Lie-algebra Jacobi identity.

[A2] The representation matrices satisfy $[\rho(T_a),\rho(T_b)]=f^c{}_{ab}\rho(T_c)$ and preserve the declared grading of $V$.

[F1] [[def-qftx-nonabelian-brst-complex]]: the coefficient bracket is $[X,Y]^a=f^a{}_{bc}X^bY^c$, so $[c,c]^a=f^a{}_{bc}c^bc^c$.

[F2] [[def-qftx-nonabelian-brst-complex]]: $sA_\mu=\partial_\mu c+[A_\mu,c]$, $sc=-\tfrac12[c,c]$, and $s\psi=-\rho(c)\psi$; $s$ is the left odd derivation and commutes with total derivatives by its jet rule.

## Proof

1.1 Since $c$ is odd, the coefficient bracket is graded symmetric on $(c,c)$ and $s[c,c]=2[sc,c]$. Therefore $s^2c=-\tfrac12s[c,c]=-[sc,c]=\tfrac12\lbrack\lbrack c,c\rbrack,c\rbrack$. Its component is proportional to $f^a{}_{de}f^d{}_{bc}c^bc^cc^e$; because the ghost coefficients anticommute, only the complete antisymmetrization in $b,c,e$ contributes, and the Jacobi identity $f^a{}_{d[b}f^d{}_{ce]}=0$ makes it vanish. [F1, F2, A1, algebra]

1.2 Because $A_\mu$ is even, the left-derivation rule gives $s^2A_\mu=\partial_\mu(sc)+[sA_\mu,c]+[A_\mu,sc]=-[\partial_\mu c,c]+[\partial_\mu c+[A_\mu,c],c]-\tfrac12\lbrack A_\mu,\lbrack c,c\rbrack\rbrack=\lbrack\lbrack A_\mu,c\rbrack,c\rbrack-\tfrac12\lbrack A_\mu,\lbrack c,c\rbrack\rbrack=0$. Here $\partial_\mu[c,c]=2[\partial_\mu c,c]$, and Jacobi with $A_\mu$ even and $c$ odd gives $\lbrack A_\mu,\lbrack c,c\rbrack\rbrack=2\lbrack\lbrack A_\mu,c\rbrack,c\rbrack$. [F1, F2, A1, algebra]

1.3 For any homogeneous matter component, the odd left-derivation rule gives $s^2\psi=-\rho(sc)\psi+\rho(c)s\psi=\tfrac12\rho([c,c])\psi-\rho(c)^2\psi$. Writing $c=c^aT_a$, graded commutativity yields $\rho(c)^2=\tfrac12c^ac^b[\rho(T_a),\rho(T_b)]=\tfrac12\rho([c,c])$ by [A2], so $s^2\psi=0$ for either matter parity. [F1, F2, A2, algebra]

2.1 On a coefficient function $f(x)$, both $sD_\mu f$ and $D_\mu sf$ vanish. On each jet generator $\Phi_I$, the defining rule gives $sD_\mu\Phi_I=s\Phi_{I+e_\mu}=D_\mu D_I(s\Phi)=D_\mu s\Phi_I$, since the total derivatives commute. Thus $sD_\mu=D_\mu s$ on generators, and composition gives $s^2\Phi_I=D_I(s^2\Phi)=0$ for every multi-index $I$. The square of an odd derivation is an even derivation because its two cross terms cancel, so steps 1.1–1.3 and this jet calculation make $s^2$ vanish on every finite polynomial in the generators. [F2, step 1.1, step 1.2, step 1.3] ∎
