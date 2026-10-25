---
id: lem-qftx-wilson-loop-gauge-invariance
kind: lemma
title: Wilson loop is invariant under vertex gauge transformations
status: draft
origin: session
dependency_level: 3
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
axiom_base: "ZF + AC_omega, inherited through the finite lattice data supplier."
deps:
  - def-countable-choice
  - def-qftx-nonabelian-lattice-gauge-data
  - def-qftx-wilson-loop
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qftx-nonabelian-lattice-gauge-data: mathematical-premise
  def-qftx-wilson-loop: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "H. B. Meyer, Lattice QCD: A Brief Introduction, in Lattice QCD for Nuclear Physics, Lecture Notes in Physics 889"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/73862/1/82.pdf.pdf"
      locator: "§1.2.4, printed pp. 13–14, for endpoint transformation and trace invariance of a closed Wilson loop."
    - title: "Robert Lohmayer, Eigenvalue Distributions of Wilson Loops"
      url: "https://epub.uni-regensburg.de/16031/1/EigenvalueDistributionsOfWilsonLoops.pdf"
      locator: "§3.5.5, printed pp. 48–51, for traced closed lattice holonomy and gauge invariance."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $G$ be a group and let $(W,q)$ be a finite-dimensional complex Hermitian inner-product space. Define $U(W,q):=\{T\in\operatorname{GL}_{\mathbb C}(W):q(Tu,Tv)=q(u,v)\text{ for all }u,v\in W\}$, and let $\rho:G\to U(W,q)$ be a group homomorphism, with $d=\dim_{\mathbb C}W\geq1$. Let a finite oriented graph have vertices $\mathcal V$ and one chosen orientation $\mathcal E^+$ for each edge; for $e\in\mathcal E^+$ write $s(e),t(e)$ for its source and target. A link configuration assigns $U_e\in G$ to each $e\in\mathcal E^+$ and sets $U_{\bar e}=U_e^{-1}$. A based closed edge word $C=(e_1,\ldots,e_\ell)$ has length $\ell\geq0$, consecutive endpoints match, and when $\ell>0$ it starts and ends at a chosen vertex $v_0$; for $\ell=0$ it consists only of $v_0$. Put $U_C:=U_{e_1}\cdots U_{e_\ell}$ in traversal order, with the empty product equal to the identity, and put $W_\rho(C;U):=d^{-1}\operatorname{Tr}_W(\rho(U_C))$. For every vertex tuple $k\in G^{\mathcal V}$ acting by $(k\cdot U)_e=k_{s(e)}U_ek_{t(e)}^{-1}$, one has $U_C(k\cdot U)=k_{v_0}U_C(U)k_{v_0}^{-1}$. Thus the normalized trace is gauge invariant and unchanged when the based word is cyclically rotated; for $\ell>0$ reversal is $C^{-1}=(\bar e_\ell,\ldots,\bar e_1)$, while the empty word reverses to itself, and $W_\rho(C^{-1};U)=\overline{W_\rho(C;U)}$.

## Statement references

[[def-countable-choice|Countable-choice assumption]]

[[def-qftx-nonabelian-lattice-gauge-data|Vertex gauge action on link variables]]

[[def-qftx-wilson-loop|Ordered loop holonomy and normalized trace]]

[Meyer, §1.2.3, printed pp. 11–12, on the endpoint transformation law of link transport and trace invariance](https://ndl.ethernet.edu.et/bitstream/123456789/73862/1/82.pdf.pdf)

[Lohmayer, §3.5.5, printed pp. 48–51, on traced closed lattice holonomy](https://epub.uni-regensburg.de/16031/1/EigenvalueDistributionsOfWilsonLoops.pdf)

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the finite link gauge action, a based closed edge word $C=(e_1,\ldots,e_\ell)$, and a finite-dimensional unitary representation $\rho$.

[A1] $\mathrm{AC}_\omega$ is inherited through the finite non-Abelian lattice datum. [[def-countable-choice]]

[F1] [[def-qftx-nonabelian-lattice-gauge-data]]: $(h\cdot U)_e=h_{s(e)}U_eh_{t(e)}^{-1}$ and a face or loop holonomy is the ordered product of its edge variables.

[F2] [[def-qftx-wilson-loop]]: $W_\rho(C;U)=d^{-1}\operatorname{Tr}(\rho(U_{e_1}\cdots U_{e_\ell}))$ for $d\geq1$.


## Proof

**Proof technique:** direct.

1.1 If $\ell=0$, both the loop holonomy and its conjugate are the identity. For $\ell\geq1$, write the successive vertices as $v_0,v_1,\ldots,v_\ell=v_0$. Substituting [F1] into the ordered product gives $U_C(h\cdot U)=(h_{v_0}U_{e_1}h_{v_1}^{-1})(h_{v_1}U_{e_2}h_{v_2}^{-1})\cdots(h_{v_{\ell-1}}U_{e_\ell}h_{v_0}^{-1})=h_{v_0}U_C(U)h_{v_0}^{-1}$, because each adjacent factor $h_{v_i}^{-1}h_{v_i}$ is the identity. The set-theoretic input is the inherited $\mathrm{AC}_\omega$ [A1]. [given, A1, F1, algebra]

2.1 Applying the homomorphism $\rho$ preserves conjugation, and trace is cyclic, so $\operatorname{Tr}(\rho(h_{v_0})\rho(U_C)\rho(h_{v_0})^{-1})=\operatorname{Tr}(\rho(U_C))$. Thus [F2] is gauge invariant; a cyclic rebase is the same trace after a cyclic permutation of factors. [F1, F2, step 1.1, algebra]

3.1 Reversal replaces each edge matrix by its inverse in reverse order, hence replaces $\rho(U_C)$ by its inverse. Since $\rho(U_C)$ is unitary, $\operatorname{Tr}(\rho(U_C)^{-1})=\overline{\operatorname{Tr}(\rho(U_C))}$; dividing by the real integer $d$ gives the stated complex-conjugation identity, including the empty-word case. [F2, step 2.1, algebra] ∎
